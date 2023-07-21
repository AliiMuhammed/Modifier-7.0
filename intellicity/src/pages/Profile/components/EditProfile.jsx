import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { getAuthUser, setAuthUser } from "../../../Helper/Storage";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/editProfile.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const image = useRef(null);
  const userInfo = getAuthUser();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    image: null,
    loading: false,
    err: null,
    success: null,
    reload: 0,
  });

  const UpdateUser = (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    if (image.current.files && image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    axios
      .put("http://localhost:5000/users/update/" + userInfo.id, formData)
      .then((resp) => {
        setUser({
          ...user,
          success: "Your Profile Updated Successfully !",
          loading: false,
          reload: user.reload + 1,
        });
        window.location.reload();
      })
      .catch((err) => {
        setUser({
          ...user,
          loading: false,
          success: null,
          err: err.response.data.errors,
        });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getUser/" + userInfo.id)
      .then((resp) => {
        setUser({
          ...user,
          name: resp.data[0].name,
          email: resp.data[0].email,
          image_url: resp.data[0].image_url,
          phone: resp.data[0].phone,
          password: resp.data[0].password,
        });
        setAuthUser(resp.data);
        navigate("");
      })
      .catch((error) => {
        setUser({
          ...user,
          loading: false,
          success: null,
          err: error.response.data.errors,
        });
      });
  }, [user.reload]);

  return (
    <div className="container edit-user-profile">
      <Form onSubmit={UpdateUser}>
        {/* add action handeling */}
        {user.err == null && user.success != null && (
          <Alert variant="success" className="AlertAddCoures">
            {user.success}
          </Alert>
        )}
        {user.err != null && user.success === null && (
          <>
            {user.err.map((error, index) => (
              <Alert key={index} variant="danger" className="AlertAddCoures">
                {error.msg}
              </Alert>
            ))}
          </>
        )}
        <Form.Group controlId="name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Enter your phone number"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your phone password"
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" name="image" ref={image} />
        </Form.Group>

        <Button type="submit" className="main-btn">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
