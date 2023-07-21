import React, { useState, useEffect } from "react";
import MainHeader from "../../../../../Shared/MainHeader";
import "../../Users/style/users.css";
import Table from "react-bootstrap/Table";
import { getAuthUser } from "../../../../../Helper/Storage";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import imgProfile from "../../../../../Assest/Images/profile/user.png"
import axios from "axios";

function MembersTaple() {
  
  const admin = getAuthUser();
  const [member, setmembers] = useState({
    loading: true,
    results: [],
    err: null,
    delErr: null,
    delSuccess: null,
    reload: 0,
  });

  useEffect(() => {
    setmembers({ ...member, loading: true });
    axios
      .get("http://localhost:5000/aboutUs/getAll")
      .then((resp) => {
        setmembers({
          ...member,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setmembers({
          ...member,
          loading: false,
          err: "Error can't load members",
        });
      });
  }, [member.reload]);

  const displaymembers = () => {
    return (
      <>
        <div className="studentTable">
          <Table bordered striped hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Image</th>
                <th>Linkedin</th>
                <th>GitHub</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {member.results.map((member) => {
                return (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.member_Name}</td>
                    <td>{member.member_Role}</td>
                    <td className="table-img">
                      <img src={member.member_img===""?imgProfile:member.member_img} alt="" />
                    </td>
                    <td>{member.linkedin}</td>
                    <td>{member.gitHub}</td>
                    <td>
                      <div className="table-btns">
                        <button
                          to={"delete"}
                          className="btn btn-sm btn-delete"
                          onClick={(e) => {
                            deletemember(member.id);
                          }}
                        >
                          Delete
                        </button>
                        <Link
                          to={"update/" + member.id}
                          className="btn btn-sm btn-Update"
                        >
                          Update
                        </Link>
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
  const deletemember = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:5000/aboutUs/delete/" + id)
      .then((resp) => {
        setmembers({
          ...member,
          reload: member.reload + 1,
          delSuccess: "member deleted Successfully",
        });

      })
      .catch((err) => {
        setmembers({
          ...member,
          loading: false,
          delErr: "Error can't Delete member",
        });
      });
  };

  return (
    <>
      <MainHeader
        title={`Hi ${admin.name}`}
        paragraph={"Here you can Add ,Update, or Delete Members"}
        className={"adminuser-header"}
      />
      <section className="users-dataSection">
        <div className="container users-table-container">
          {/* delete action handeling */}
          {member.loading === false &&
            member.delErr === null &&
            member.delSuccess !== null && (
              <Alert variant="success" className="AlertAddCoures">
                {member.delSuccess}
              </Alert>
            )}
          {member.loading === false &&
            member.delErr !== null &&
            member.delSuccess === null && (
              <Alert variant="danger" className="AlertAddCoures">
                {member.delErr}
              </Alert>
            )}

          {/* Loader */}
          {member.loading === true && (
            <div className="pageSpinner">
              <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <div className="table-header">
            <h3>All Members</h3>
            <Link to={"add"} className="main-btn Add-btn">
              Add Member <AiOutlinePlusSquare />
            </Link>
          </div>
          {/* displaymembers */}
          {member.loading === false &&
            member.err === null &&
            member.results.length !== 0 && <>{displaymembers()}</>}

          {/* errors handling */}
          {member.loading === false && member.err != null && (
            <div className="alert-container container">
              <Alert variant="danger" className="alret">
                {member.err}
              </Alert>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MembersTaple