import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { useState, useEffect } from "react";

const BarChart = () => {
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

  const data = {
    labels: ["Members", "Services", "Users"],
    datasets: [
      {
        label: "Count",
        data: [memberNumber, serviceNumber, userNumber],
        backgroundColor: "#68389f",
        borderColor: "#68389f",
        hoverBackgroundColor: "#3e42b1",
        hoverBorderColor: "#3e42b1",
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  };
  return <Bar className="barChart" data={data} />;
};

export default BarChart;
