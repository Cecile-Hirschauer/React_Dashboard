import React from "react";
import "./App.css";
import DashboardEmmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Sidebar />

      <Switch>
        <Route path="/" exact component={DashboardFinance} />
        <Route path="/DashboardEmmployees" exact component={DashboardEmmployees} />
      </Switch>
    
    </Router>
  );
}
