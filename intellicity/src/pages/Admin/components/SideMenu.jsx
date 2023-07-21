import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../style/sideMenu.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { getAuthUser, removeAuthUser } from "../../../Helper/Storage";
import { useNavigate } from "react-router-dom";
import { MdElectricalServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import imgProfile from "../../../Assest/Images/profile/user.png";
function SideMenu({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const auth = getAuthUser();
  const LogOut = () => {
    removeAuthUser();
    navigate("/");
  };

  const admin = getAuthUser();

  return (
    <>
      <Link onClick={handleShow} className="sideMenu-icon">
        <FaBars />
      </Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sideMenu-header">
            Intellicity DashBoard
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="links-sideMenu">
            <div className="admin-data sideMenu-adminData">
              <div className="admin-img">
                <img
                  src={admin.image === "" ? imgProfile : admin.image}
                  alt=""
                />
              </div>
              <div className="admin-name">
                <span>{admin.name}</span>
              </div>
            </div>
            <Link to={"/admin"} onClick={handleClose}>
              <div className="icon">
                <RiDashboardFill />
              </div>
              Statistics
            </Link>
            <Link to={"/admin/users"} onClick={handleClose}>
              <div className="icon">
              <IoIosPeople />
              </div>
              Users
            </Link>
            <Link to={"/admin/services"} onClick={handleClose}>
              <div className="icon">
                <MdElectricalServices />
              </div>
              Services
            </Link>
            <Link to={"/admin/about-us"} onClick={handleClose}>
              <div className="icon">
                <AiFillInfoCircle />
              </div>
              About Us
            </Link>
            <Link to={"/admin/contact-us"} onClick={handleClose}>
              <div className="icon">
                <FaPhone />
              </div>
              Contact Us
            </Link>
            <Link to={"/"} onClick={handleClose}>
              <div className="icon">
                <AiFillHome />
              </div>
              Home
            </Link>
          </div>

          {/* Authenticated Routes */}
          {auth && (
            <NavLink
              className=" main-btn admin-LogoutBtn"
              onClick={LogOut}
              to={"/"}
            >
              log out
            </NavLink>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu;
