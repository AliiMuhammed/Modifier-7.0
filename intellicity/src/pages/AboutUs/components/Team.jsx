import React, { useEffect, useState } from "react";
import "../style/team.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import MainHeading from "../../../Shared/MainHeading";
function Team() {
  const [member, setMember] = useState({
    loading: false,
    results: [],
    err: null,
  });

  useEffect(() => {
    setMember({ ...member, loading: true });
    axios
      .get("http://localhost:5000/aboutUs/getAll")
      .then((resp) => {
        setMember({ ...member, results: resp.data, loading: false });
      })
      .catch((err) => {
        setMember({
          ...member,
          loading: false,
          err: "Error can't load Members",
        });
      });
  }, []);

  const displayMembers = () => {
    return (
      <>
        {member.loading === false &&
          member.results.length !== 0 &&
          member.results.map((member) => (
            <div className="member-card" key={member.id}>
              <div className="member-img">
                <img src={member.member_img} alt="" />
              </div>
              <div className="content">
                <h3>{member.member_Name}</h3>
                <span className="role">{member.member_Role}</span>
                <div className="links">
                  <Link to={member.linkedin}>
                    <AiFillLinkedin />
                  </Link>
                  <Link to={member.gitHub}>
                    <FaSquareGithub />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <section className="team-section">
      <div className="container">
        <MainHeading haeding={"our team"} />
        <div className="cards">
          {/* loader..... */}
          {member.loading === true && (
            <div className="loader-dev">
              <Spinner animation="grow" className="loader" />
            </div>
          )}
          {/* displayCourses */}
          {member.loading === false &&
            member.err === null &&
            member.results.length !== 0 && <>{displayMembers()}</>}

          {/* errors handling */}
          {member.loading === false && member.err != null && (
            <div className="alert-container container">
              <Alert variant="danger" className="alret">
                {member.err}
              </Alert>
            </div>
          )}
          {member.loading === false &&
            member.err == null &&
            member.results.length === 0 && (
              <div className="alert-container container">
                <Alert className="alret-notAvailable">
                  There is no members available please come back later
                </Alert>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default Team;
