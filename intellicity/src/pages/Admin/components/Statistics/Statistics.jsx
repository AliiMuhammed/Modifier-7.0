import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdElectricalServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import "./style/statistics.css";

const Statistics = () => {
  // Courses Api's
  const [counterOn, SetCounterOn] = useState(false);
   // Courses Api's
   const [user, setUser] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setUser({ ...user, loading: true });
    axios
      .get("http://localhost:5000/users/getUsers")
      .then((resp) => {
        setUser({
          ...user,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setUser({ ...user, loading: false, err: "error" });
      });
  }, []);

  // member Api's
  const [member, setMember] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setMember({ ...member, loading: true });
    axios
      .get("http://localhost:5000/aboutUs/getAll")
      .then((resp) => {
        setMember({
          ...member,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setMember({ ...member, loading: false, err: "error" });
      });
  }, []);

  // Service Api's
  const [service, setService] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setService({ ...service, loading: true });
    axios
      .get("http://localhost:5000/services/getAll")
      .then((resp) => {
        setService({
          ...service,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setService({ ...service, loading: false, err: "error" });
      });
  }, []);

  const serviceNumber = service.results.length;
  const memberNumber = member.results.length;
  const userNumber = user.results.length;

  return (
    <ScrollTrigger
      onEnter={() => SetCounterOn(true)}
      onExit={() => SetCounterOn(false)}
    >
      <section className="stats-section">
        <div className="container stats-container">
          <div className="instructor-stats">
            <div className="stats-icon">
              <AiFillInfoCircle />
            </div>
            <h1>
              {counterOn && (
                <CountUp
                  start={0}
                  end={memberNumber}
                  duration={3}
                  delay={0}
                />
              )}
            </h1>
            <span className="stats-type">Team Members</span>
          </div>
          <div className="courses-stats">
            <div className="stats-icon">
              <MdElectricalServices />
            </div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={serviceNumber} duration={3} delay={0} />
              )}
            </h1>
            <span className="stats-type">Total Services</span>
          </div>
          <div className="students-stats">
            <div className="stats-icon">
              <IoIosPeople />
            </div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={userNumber} duration={3} delay={0} />
              )}
            </h1>
            <span className="stats-type">Users</span>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Statistics;
