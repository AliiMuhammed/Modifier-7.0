import React, { useState, useEffect } from "react";
import MainHeader from "../../../../../Shared/MainHeader";
import "../../Users/style/users.css";
import Table from "react-bootstrap/Table";
import { getAuthUser } from "../../../../../Helper/Storage";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import imgProfile from "../../../../../Assest/Images/profile/user.png";
import axios from "axios";

function ServicesTable() {
  const admin = getAuthUser();
  const [service, setservices] = useState({
    loading: true,
    results: [],
    err: null,
    delErr: null,
    delSuccess: null,
    reload: 0,
  });

  useEffect(() => {
    setservices({ ...service, loading: true });
    axios
      .get("http://localhost:5000/services/getAll")
      .then((resp) => {
        setservices({
          ...service,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setservices({
          ...service,
          loading: false,
          err: "Error can't load services",
        });
      });
  }, [service.reload]);

  const displayservices = () => {
    return (
      <>
        <div className="studentTable">
          <Table bordered striped hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service.results.map((service) => {
                return (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.status}</td>
                    <td className="table-img">
                      <img src={service.img} alt="" />
                    </td>
                    <td>
                      <div className="table-btns">
                        <button
                          to={"delete"}
                          className="btn btn-sm btn-delete"
                          onClick={(e) => {
                            deleteservice(service.id);
                          }}
                        >
                          Delete
                        </button>
                        <Link
                          to={"update/" + service.id}
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
  const deleteservice = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:5000/services/delete/" + id)
      .then((resp) => {
        setservices({
          ...service,
          reload: service.reload + 1,
          delSuccess: "service deleted Successfully",
        });
      })
      .catch((err) => {
        setservices({
          ...service,
          loading: false,
          delErr: "Error can't Delete service",
        });
      });
  };

  return (
    <>
      <MainHeader
        title={`Hi ${admin.name}`}
        paragraph={"Here you can Add ,Update, or Delete services"}
        className={"adminuser-header"}
      />
      <section className="users-dataSection">
        <div className="container users-table-container">
          {/* delete action handeling */}
          {service.loading === false &&
            service.delErr === null &&
            service.delSuccess !== null && (
              <Alert variant="success" className="AlertAddCoures">
                {service.delSuccess}
              </Alert>
            )}
          {service.loading === false &&
            service.delErr !== null &&
            service.delSuccess === null && (
              <Alert variant="danger" className="AlertAddCoures">
                {service.delErr}
              </Alert>
            )}

          {/* Loader */}
          {service.loading === true && (
            <div className="pageSpinner">
              <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <div className="table-header">
            <h3>All services</h3>
            <Link to={"add"} className="main-btn Add-btn">
              Add service <AiOutlinePlusSquare />
            </Link>
          </div>
          {/* displayservices */}
          {service.loading === false &&
            service.err === null &&
            service.results.length !== 0 && <>{displayservices()}</>}

          {/* errors handling */}
          {service.loading === false && service.err != null && (
            <div className="alert-container container">
              <Alert variant="danger" className="alret">
                {service.err}
              </Alert>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ServicesTable;
