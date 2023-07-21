import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/sideMenu.css";
import { Button, Modal } from "react-bootstrap";
import { getAuthUser, removeAuthUser } from "../../../Helper/Storage";
import profile from "../../../Assest/Images/profile/user.png";
import { AiOutlineUser } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SideMenu = () => {
  const user = getAuthUser();
  const navigate = useNavigate();
  const DeleteAcc = () => {
    axios
      .delete("http://localhost:5000/users/deleteUser/" + user.id)
      .then((resp) => {
        removeAuthUser();
        navigate("/");
      })
      .catch((error) => {});
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="side-menu">
        <ul>
          <div className="user-img">
            <img src={user.image === "" ? profile : user.image} alt="" />
          </div>
          <div className="user-name">
            <h3>{user.name}</h3>
          </div>
          <li>
            <Link to={"/profile/user/" + user.id}>
              <AiOutlineUser />
              My Profile
            </Link>
          </li>
          <li>
            <Link to={"/profile/user/" + user.id + "/edit"}>
              <BiEditAlt />
              Edit Profile
            </Link>
          </li>
          <li>
            <Link to={"/profile/user/" + user.id + "/feedback"}>
              <VscFeedback />
              My Feedback
            </Link>
          </li>
          <li>
            <Link onClick={handleShow} className="delete">
              <RiDeleteBin6Line />
              Delete My Account
            </Link>
          </li>
        </ul>
      </div>
      <Modal show={show} onHide={handleClose} className="bobup">
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            By click on "Delete My Account" Button You will delete your account
            and you can't restore it again
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              DeleteAcc();
            }}
          >
            Delete My Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SideMenu;
