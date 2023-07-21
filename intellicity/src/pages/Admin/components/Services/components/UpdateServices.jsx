import "../../../style/dashBoard.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getAuthUser } from "../../../../../Helper/Storage";
import Alert from "react-bootstrap/Alert";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateServices() {
    let { id } = useParams();
    const image = useRef(null);
    const [service, setservice] = useState({
      name: "",
      description: "",
      status: "",
      img: null,
      loading: false,
      err: null,
      success: null,
      reload: 0,
    });
  
    const UpdateStudent = (e) => {
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
        .put("http://localhost:5000/services/update/" + id, formData,)
        .then((resp) => {
          setservice({
            ...service,
            success: "Service Updated Successfully !",
            loading: false,
            reload: service.reload + 1,
          });
        })
        .catch((err) => {
          setservice({
            ...service,
            loading: false,
            success: null,
            err: err.response.data.errors,
          });
        });
    };
    useEffect(() => {
      axios
        .get("http://localhost:5000/services/getOne/" + id)
        .then((resp) => {
          setservice({
            ...service,
            name: resp.data.name,
            description: resp.data.description,
            status: resp.data.status,
            img: resp.data.img,
          });
          console.log(resp.data);
        })
        .catch((error) => {
          setservice({
            ...service,
            loading: false,
            success: null,
            err: error.response.data.errors,
          });
        });
    }, [service.reload]);
  
    return (
      <>
        <section className="addUser-section">
          <div className="container addUser-container">
            <h1>Update Service</h1>
  
            {/* add action handeling */}
            {service.err == null && service.success != null && (
              <Alert variant="success" className="AlertAddCoures">
                {service.success}
              </Alert>
            )}
            {service.err != null && service.success === null && (
              <>
                {service.err.map((error, index) => (
                  <Alert key={index} variant="danger" className="AlertAddCoures">
                    {error.msg}
                  </Alert>
                ))}
              </>
            )}
  
            <Form className="AddUser-form " onSubmit={UpdateStudent}>
              <img src={service.image_url} className="imgCourse-update" alt="" />
              <FloatingLabel label="service Name" className="mb-3 input-addUser">
                <Form.Control
                  value={service.name}
                  onChange={(e) => setservice({ ...service, name: e.target.value })}
                  type="text"
                  placeholder="Service Name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Description" className="mb-3 input-addUser">
                <Form.Control
                  value={service.description}
                  onChange={(e) => setservice({ ...service, description: e.target.value })}
                  type="text"
                  placeholder="Description"
                  required
                />
              </FloatingLabel>
  
              <FloatingLabel label="Status" className="mb-3 input-addUser">
                <Form.Control
                  value={service.status}
                  onChange={(e) => setservice({ ...service, status: e.target.value })}
                  type="text"
                  placeholder="status"
                  required
                />
              </FloatingLabel>
              <Form.Group className="mb-3 input-addUser">
                <Form.Control ref={image} type="file" />
                <Form.Text className="text-muted">
                  Upload service image in .png, or .jpg.
                </Form.Text>
              </Form.Group>
              <button className="main-btn admin-btn">Update Service</button>
            </Form>
          </div>
        </section>
      </>
    );
}

export default UpdateServices