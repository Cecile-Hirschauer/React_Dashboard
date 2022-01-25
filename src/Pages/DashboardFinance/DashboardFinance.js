import React, { useState, useContext } from "react";
import "./DashboardFinance.css";
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart";
import { dashboardContext } from "../../context/DashboardContext";
import PieChart from "../../Components/AllChart/PieChart";

export default function DashboardFinance() {
  const { dataChart, changeYear, yearData } = useContext(dashboardContext);

  return (
    <div className="global-container">
      <h1>Les résultats de l'année: {yearData}</h1>

      <form>
        <label htmlFor="year">Choississez une date</label>
        <select onChange={changeYear} id="year">
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>

      <div className="dashboard-container">
        <PieChart data={dataChart.chart5} label={["Marketing", "Sécurité", "Front-End"]} />
        <PieChart data={dataChart.chart6} label={["Marketing", "Sécurité", "Front-End"]} />
        <PieChart data={dataChart.chart7} label={["Marketing", "Sécurité", "Front-End"]} />
        <PieChart data={dataChart.chart8} label={["Marketing", "Sécurité", "Front-End"]} />
      </div>
    </div>
  );
}
