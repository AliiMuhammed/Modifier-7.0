import "../../../style/dashBoard.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState, useRef } from "react";
import axios from "axios";

function AddMember() {
  const [member, setmember] = useState({
    name: "",
    role: "",
    linkedin: "",
    gitHub: "",
    loading: false,
    addErr: [],
    addSuccess: null,
  });
  const image = useRef(null);

  const Addmember = (e) => {
    e.preventDefault();
    setmember({ ...member, loading: true });
    const formData = new FormData();
    formData.append("member_Name", member.name);
    formData.append("member_Role", member.role);
    formData.append("linkedin", member.linkedin);
    formData.append("gitHub", member.gitHub);
    if (image.current.files && image.current.files[0]) {
      formData.append("member_img", image.current.files[0]);
    }
    axios
      .post("http://localhost:5000/aboutUs/create", formData)
      .then((resp) => {
        setmember({
          ...member,
          name: "",
          role: "",
          linkedin: "",
          gitHub: "",
          loading: false,
          addErr: null,
          addSuccess: "Member Added Successfully",
        });
      })
      .catch((err) => {
        setmember({
          ...member,
          loading: false,
          addSuccess: null,
          addErr: err.response.data.errors,
        });
      });
  };

  return (
    <>
      <section className="addUser-section">
        <div className="container addUser-container">
          <h1>Add New Team Member</h1>

          {/* add action handeling */}
          {member.addErr == null && member.addSuccess != null && (
            <Alert variant="success" className="AlertAddCoures">
              {member.addSuccess}
            </Alert>
          )}
          {member.addErr != null && member.addSuccess === null && (
            <>
              {member.addErr.map((error, index) => (
                <Alert key={index} variant="danger" className="AlertAddCoures">
                  {error.msg}
                </Alert>
              ))}
            </>
          )}

          <Form className="AddUser-form " onSubmit={Addmember}>
            <FloatingLabel label="member Name" className="mb-3 input-addUser">
              <Form.Control
                value={member.name}
                onChange={(e) => setmember({ ...member, name: e.target.value })}
                type="text"
                placeholder="member Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Role" className="mb-3 input-addUser">
              <Form.Control
                value={member.role}
                onChange={(e) => setmember({ ...member, role: e.target.value })}
                type="text"
                placeholder="Role"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="Linkedin Account"
              className="mb-3 input-addUser"
            >
              <Form.Control
                value={member.linkedin}
                onChange={(e) =>
                  setmember({ ...member, linkedin: e.target.value })
                }
                type="text"
                placeholder="Link"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="gitHub Account"
              className="mb-3 input-addUser"
            >
              <Form.Control
                value={member.gitHub}
                onChange={(e) =>
                  setmember({ ...member, gitHub: e.target.value })
                }
                type="text"
                placeholder="Link"
                required
              />
            </FloatingLabel>
            <Form.Group className="mb-3 input-addUser">
              <Form.Control ref={image} type="file" required />
              <Form.Text className="text-muted">
                Upload user image in .png, or .jpg.
              </Form.Text>
            </Form.Group>
            <button className="main-btn admin-btn">Add Member</button>
          </Form>
        </div>
      </section>
    </>
  );
}

export default AddMember;
