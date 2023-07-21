import React, { useState, useEffect } from "react";
import MainHeader from "../../../../../Shared/MainHeader";
import "../../Users/style/users.css";
import Table from "react-bootstrap/Table";
import { getAuthUser} from "../../../../../Helper/Storage";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

function ContactUsTable() {

    const admin = getAuthUser();
    const [message, setmessages] = useState({
      loading: true,
      results: [],
      err: null,
      delErr: null,
      delSuccess: null,
      reload: 0,
    });
  
    useEffect(() => {
      setmessages({ ...message, loading: true });
      axios
        .get("http://localhost:5000/contact/getMessages")
        .then((resp) => {
          setmessages({
            ...message,
            results: resp.data,
            loading: false,
            err: null,
          });
        })
        .catch((err) => {
          setmessages({
            ...message,
            loading: false,
            err: "Error can't load messages",
          });
        });
    }, [message.reload]);
  
    const displaymessages = () => {
      return (
        <>
          <div className="studentTable">
            <Table bordered striped hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {message.results.map((message) => {
                  return (
                    <tr key={message.id}>
                      <td>{message.id}</td>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.message}</td>
                      <td>
                        <div className="table-btns">
                          <button
                            to={"delete"}
                            className="btn btn-sm btn-delete"
                            onClick={(e) => {
                              deletemessage(message.id);
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
    const deletemessage = (id) => {
      console.log(id);
      axios
        .delete("http://localhost:5000/contact/delete/" + id)
        .then((resp) => {
          setmessages({
            ...message,
            reload: message.reload + 1,
            delSuccess: "Message deleted Successfully",
          });
        })
        .catch((err) => {
          setmessages({
            ...message,
            loading: false,
            delErr: "Error can't Delete Message",
          });
        });
    };
  
    return (
      <>
        <MainHeader
          title={`Hi ${admin.name}`}
          paragraph={"Here you can Show, and Delete Messages"}
          className={"adminuser-header"}
        />
        <section className="users-dataSection">
          <div className="container users-table-container">
            {/* delete action handeling */}
            {message.loading === false &&
              message.delErr === null &&
              message.delSuccess !== null && (
                <Alert variant="success" className="AlertAddCoures">
                  {message.delSuccess}
                </Alert>
              )}
            {message.loading === false &&
              message.delErr !== null &&
              message.delSuccess === null && (
                <Alert variant="danger" className="AlertAddCoures">
                  {message.delErr}
                </Alert>
              )}
  
            {/* Loader */}
            {message.loading === true && (
              <div className="pageSpinner">
                <Spinner animation="border" role="status" className="spinner">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            <div className="table-header">
              <h3>All messages</h3>
            </div>
            {/* displaymessages */}
            {message.loading === false &&
              message.err === null &&
              message.results.length !== 0 && <>{displaymessages()}</>}
  
            {/* errors handling */}
            {message.loading === false && message.err != null && (
              <div className="alert-container container">
                <Alert variant="danger" className="alret">
                  {message.err}
                </Alert>
              </div>
            )}
          </div>
        </section>
      </>
    );
}

export default ContactUsTable