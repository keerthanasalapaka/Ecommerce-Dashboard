import React from "react";
import "./App.css";
import Dashboardmake from "./viewDashboard";
import Radialchart from "./chartdesign";
import ReactTable from "./table";
import TopSales from "./productGenerators";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dashboardmake />
        <Radialchart />
        <ReactTable />
        <TopSales />
      </div>
    </div>
  );
}

export default App;
