import { getAuthUser } from "../../../Helper/Storage";
import MainHeader from "../../../Shared/MainHeader";
import "../style/mainAdmin.css";

import BarChart from "./Charts/BarChart";
import Doughnut from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import Statistics from "./Statistics/Statistics";

const MainAdmin = () => {
  const admin = getAuthUser();
  return (
    <>
        <MainHeader
          title={`Wellcome, ${admin.name}`}
          paragraph={"Here you can manage Users, Services, Contact messages, and Team members"}
          className={"AdminWelcome-header"}
        />

      <Statistics/>
      <section className="charts-sectoin">
        <div className="container charts-container">
          <div className="lineCharts">
            <LineChart />
          </div>
          <div className="barCharts">
            <BarChart />
          </div>
          <div className="doughnutCharts">
            <Doughnut />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainAdmin;
