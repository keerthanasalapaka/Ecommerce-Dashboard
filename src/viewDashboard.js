import React from "react";
import dollar from "./images/dollar.jpg";
import orders from "./images/orders.png";
import customers from "./images/customers.png";
import "./viewDashboard.css";
function Dashboardmake() {
  return (
    <div className="main">
      <div className="header">
        <div className="header-left">
          <h4>Overview</h4>
        </div>
        <div className="header-right">
          <p>12months</p>
          <p className="days">30days</p>
          <p>7days</p>
          <p>24hours</p>
        </div>
      </div>

      <div className="container">
        <div className="row cards-container">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body first-card">
                <div className="row align-items-center">
                  <div className="col-8 card1-left">
                    <p className="revenue">Total Revenue</p>
                    <p className="dollarsign">$90k</p>
                    <p className="month">Current month</p>
                  </div>
                  <div className="col-4 card1-right">
                    <p className="percent">+37.43%</p>
                    <img src={dollar} alt="dollar" className="custom-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body second-card">
                <div className="row align-items-center">
                  <div className="col-8 card2-left">
                    <p className="revenue">Total Orders</p>
                    <p className="dollarsign">$90k</p>
                    <p className="month">Current month</p>
                  </div>
                  <div className="col-4 card2-right">
                    <p className="percent">-37.43%</p>
                    <img src={orders} alt="order" className="custom-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body third-card">
                <div className="row align-items-center">
                  <div className="col-8 card3-left">
                    <p className="revenue">Total Customers</p>
                    <p className="dollarsign">$90k</p>
                    <p className="month">Current month</p>
                  </div>
                  <div className="col-4 card3-right">
                    <p className="percent">-37.43%</p>
                    <img
                      src={customers}
                      alt="customers"
                      className="custom-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardmake;
