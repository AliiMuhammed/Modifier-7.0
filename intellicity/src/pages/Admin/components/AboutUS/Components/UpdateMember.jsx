import "../../../style/dashBoard.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getAuthUser } from "../../../../../Helper/Storage";
import Alert from "react-bootstrap/Alert";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateMember() {
    let { id } = useParams();
    const image = useRef(null);
    const [user, setUser] = useState({
      name: "",
      role: "",
      linkedin: "",
      gitHub: "",
      image_url: null,
      loading: false,
      err: null,
      success: null,
      reload: 0,
    });
  
    const UpdateStudent = (e) => {
      e.preventDefault();
      setUser({ ...user, loading: true });
      const formData = new FormData();
      formData.append("member_Name", user.name);
      formData.append("member_Role", user.role);
      formData.append("linkedin", user.linkedin);
      formData.append("gitHub", user.gitHub);
      if (image.current.files && image.current.files[0]) {
        formData.append("member_img", image.current.files[0]);
      }
      axios
        .put("http://localhost:5000/aboutUs/update/" + id, formData,)
        .then((resp) => {
          setUser({
            ...user,
            success: "Member Updated Successfully !",
            loading: false,
            reload: user.reload + 1,
          });
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
        .get("http://localhost:5000/aboutUs/getOne/" + id)
        .then((resp) => {
          setUser({
            ...user,
            name: resp.data.member_Name,
            role: resp.data.member_Role,
            linkedin: resp.data.linkedin,
            gitHub: resp.data.gitHub,
            image_url: resp.data.member_img,
          });
          console.log(resp.data);
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
      <>
        <section className="addUser-section">
          <div className="container addUser-container">
            <h1>Update Team Member</h1>
  
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
  
            <Form className="AddUser-form " onSubmit={UpdateStudent}>
              <img src={user.image_url} className="imgCourse-update" alt="" />
              <FloatingLabel label="User Name" className="mb-3 input-addUser">
                <Form.Control
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  type="text"
                  placeholder="Member Name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Role" className="mb-3 input-addUser">
                <Form.Control
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  type="text"
                  placeholder="role"
                  required
                />
              </FloatingLabel>
  
              <FloatingLabel label="Linkedin" className="mb-3 input-addUser">
                <Form.Control
                  value={user.linkedin}
                  onChange={(e) => setUser({ ...user, linkedin: e.target.value })}
                  type="text"
                  placeholder="Link"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="GitHub" className="mb-3 input-addUser">
                <Form.Control
                  value={user.gitHub}
                  onChange={(e) => setUser({ ...user, gitHub: e.target.value })}
                  type="text"
                  placeholder="Link"
                  required
                />
              </FloatingLabel>
              <Form.Group className="mb-3 input-addUser">
                <Form.Control ref={image} type="file" />
                <Form.Text className="text-muted">
                  Upload user image in .png, or .jpg.
                </Form.Text>
              </Form.Group>
              <button className="main-btn admin-btn">Update Service</button>
            </Form>
          </div>
        </section>
      </>
    );
}

export default UpdateMember