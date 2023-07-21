import "../../../style/dashBoard.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState, useRef } from "react";
import axios from "axios";

function AddServices() {
    const [service, setservice] = useState({
        name: "",
        description: "",
        status: "",
        gitHub: "",
        loading: false,
        addErr: [],
        addSuccess: null,
      });
      const image = useRef(null);
    
      const Addservice = (e) => {
        e.preventDefault();
        setservice({ ...service, loading: true });
        const formData = new FormData();
        formData.append("name", service.name);
        formData.append("description", service.description);
        formData.append("status", service.status);
        if (image.current.files && image.current.files[0]) {
          formData.append("img", image.current.files[0]);
        }
        axios
          .post("http://localhost:5000/services/create", formData)
          .then((resp) => {
            setservice({
              ...service,
              name: "",
              description: "",
              status: "",
              gitHub: "",
              loading: false,
              addErr: null,
              addSuccess: "Service Added Successfully",
            });
          })
          .catch((err) => {
            setservice({
              ...service,
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
              <h1>Add New Service</h1>
    
              {/* add action handeling */}
              {service.addErr == null && service.addSuccess != null && (
                <Alert variant="success" className="AlertAddCoures">
                  {service.addSuccess}
                </Alert>
              )}
              {service.addErr != null && service.addSuccess === null && (
                <>
                  {service.addErr.map((error, index) => (
                    <Alert key={index} variant="danger" className="AlertAddCoures">
                      {error.msg}
                    </Alert>
                  ))}
                </>
              )}
    
              <Form className="AddUser-form " onSubmit={Addservice}>
                <FloatingLabel label="service Name" className="mb-3 input-addUser">
                  <Form.Control
                    value={service.name}
                    onChange={(e) => setservice({ ...service, name: e.target.value })}
                    type="text"
                    placeholder="service Name"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel label="Description" className="mb-3 input-addUser">
                  <Form.Control
                    value={service.description}
                    onChange={(e) => setservice({ ...service, description: e.target.value })}
                    type="text"
                    placeholder="description"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  label="Status"
                  className="mb-3 input-addUser"
                >
                  <Form.Control
                    value={service.status}
                    onChange={(e) =>
                      setservice({ ...service, status: e.target.value })
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
                <button className="main-btn admin-btn">Add service</button>
              </Form>
            </div>
          </section>
        </>
      );
}

export default AddServices