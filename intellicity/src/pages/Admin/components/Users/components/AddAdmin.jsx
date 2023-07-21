import "../../../style/dashBoard.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getAuthUser } from "../../../../../Helper/Storage";
import Alert from "react-bootstrap/Alert";
import { useState, useRef } from "react";
import axios from "axios";
const AddAdmin = () => {
  const admin = getAuthUser();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    type: "admin",
    loading: false,
    addErr: [],
    addSuccess: null,
  });
  const image = useRef(null);

  const AddUser = (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });
    axios
      .post("http://localhost:5000/signup", {
        email: user.email,
        password: user.password,
        name: user.name,
        phone: user.phone,
        type: user.type,
      })
      .then((resp) => {
        setUser({
          ...user,
          name: "",
          email: "",
          password: "",
          type: "",
          phone: "",
          loading: false,
          addErr: null,
          addSuccess: "User Added Successfully",
        });
      })
      .catch((err) => {
        setUser({
          ...user,
          loading: false,
          addSuccess: null,
          addErr: err.response.data.errors,
        });
        console.log(user.addErr);
      });
  };

  return (
    <>
      <section className="addUser-section">
        <div className="container addUser-container">
          <h1>Add New Admin</h1>

          {/* add action handeling */}
          {user.addErr == null && user.addSuccess != null && (
            <Alert variant="success" className="AlertAddCoures">
              {user.addSuccess}
            </Alert>
          )}
          {user.addErr != null && user.addSuccess === null && (
            <>
              {user.addErr.map((error, index) => (
                <Alert key={index} variant="danger" className="AlertAddCoures">
                  {error.msg}
                </Alert>
              ))}
            </>
          )}

          <Form className="AddUser-form " onSubmit={AddUser}>
            <FloatingLabel label="User Name" className="mb-3 input-addUser">
              <Form.Control
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                placeholder="User Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-3 input-addUser">
              <Form.Control
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                placeholder="Email"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Password" className="mb-3 input-addUser">
              <Form.Control
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Password"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Phone" className="mb-3 input-addUser">
              <Form.Control
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                type="text"
                placeholder="Phone Number"
                required
              />
            </FloatingLabel>
            <Form.Select
              className="mb-3 input-addUser"
              required
              value={user.type}
              onChange={(e) => setUser({ ...user, type: e.target.value })}
            >
              <option defaultChecked>Select Type</option>
              <option>admin</option>
            </Form.Select>
            <button className="main-btn admin-btn">Add Admin</button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default AddAdmin;
