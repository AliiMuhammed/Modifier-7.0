import "../style/navBarAdmin.css";
import Logo from "../../../Assest/Images/h-logo.png";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../../Helper/Storage";
import imgProfile from "../../../Assest/Images/profile/user.png"
import SideMenu from "./SideMenu";
const NavBarAdmin = () => {
const admin = getAuthUser();

  return (
    <>
      <nav className="Admin-nav">
        <div className="container nav-container adminNav-container ">
          <div className="left">
            <Link to="/admin" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="right">
            <div className="admin-data">
              <div className="admin-img">
                <img src={admin.image==="http://localhost:5000/"?imgProfile:admin.image} alt="" />
              </div>
              <div className="admin-name">
                <span>{admin.name}</span>
              </div>
            </div>

            <SideMenu placement={"start"} name={"start"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarAdmin;
