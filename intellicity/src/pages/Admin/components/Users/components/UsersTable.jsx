import React, { useState, useEffect } from "react";
import MainHeader from "../../../../../Shared/MainHeader";
import "../style/students.css";
import Table from "react-bootstrap/Table";
import { getAuthUser, removeAuthUser } from "../../../../../Helper/Storage";
import { Link, Navigate } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import imgProfile from "../../../../../Assest/Images/profile/user.png"


import axios from "axios";
function UsersTable() {
  const navigate=useNavigate()
  const admin = getAuthUser();
  const [user, setusers] = useState({
    loading: true,
    results: [],
    err: null,
    delErr: null,
    delSuccess: null,
    reload: 0,
  });

  useEffect(() => {
    setusers({ ...user, loading: true });
    axios
      .get("http://localhost:5000/users/getUsers")
      .then((resp) => {
        setusers({
          ...user,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setusers({
          ...user,
          loading: false,
          err: "Error can't load Users",
        });
      });
  }, [user.reload]);

  const displayusers = () => {
    return (
      <>
        <div className="studentTable">
          <Table bordered striped hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Image</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.results.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="table-img">
                      <img src={user.image_url===""?imgProfile:user.image_url} alt="" />
                    </td>
                    <td>{user.type}</td>
                    <td>
                      <div className="table-btns">
                        <button
                          to={"delete"}
                          className="btn btn-sm btn-delete"
                          onClick={(e) => {
                            deleteuser(user.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
  };
  const deleteuser = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:5000/users/deleteUser/" + id)
      .then((resp) => {
        setusers({
          ...user,
          reload: user.reload + 1,
          delSuccess: "user deleted Successfully",
        });
      })
      .catch((err) => {
        setusers({
          ...user,
          loading: false,
          delErr: "Error can't Delete user",
        });
      });
  };

  return (
    <>
      <MainHeader
        title={`Hi ${admin.name}`}
        paragraph={"Here you can add, and delete Users"}
        className={"adminuser-header"}
      />
      <section className="users-dataSection">
        <div className="container users-table-container">
          {/* delete action handeling */}
          {user.loading === false &&
            user.delErr === null &&
            user.delSuccess !== null && (
              <Alert variant="success" className="AlertAddCoures">
                {user.delSuccess}
              </Alert>
            )}
          {user.loading === false &&
            user.delErr !== null &&
            user.delSuccess === null && (
              <Alert variant="danger" className="AlertAddCoures">
                {user.delErr}
              </Alert>
            )}

          {/* Loader */}
          {user.loading === true && (
            <div className="pageSpinner">
              <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <div className="table-header">
            <h3>All Users</h3>
            <Link to={"add"} className="main-btn Add-btn">
              Add Admin <AiOutlinePlusSquare />
            </Link>
          </div>
          {/* displayusers */}
          {user.loading === false &&
            user.err === null &&
            user.results.length !== 0 && <>{displayusers()}</>}

          {/* errors handling */}
          {user.loading === false && user.err != null && (
            <div className="alert-container container">
              <Alert variant="danger" className="alret">
                {user.err}
              </Alert>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default UsersTable;
