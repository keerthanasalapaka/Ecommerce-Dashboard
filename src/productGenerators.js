import React, { useState } from "react";
import "./productGenerators.css";
const TopSales = () => {
  const [data, setData] = useState([
    {
      Product: "HandmadePouch",
      Sales: "2000",
      Amount: "$280",
      Price: "$1200",
      Status: "Low Stock",
    },
    {
      Product: "Textile Garments",
      Sales: "1800",
      Amount: "$250",
      Price: "$1000",
      Status: "Low Stock",
    },
    // Add more data as needed
  ]);

  return (
    <div className="sales-container">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-4 mt-3">
              <h4>Top Selling Product</h4>
            </div>
            <div className="col-md-8 d-flex justify-content-end mt-3">
              <div className="border rounded p-2 mr-3 buttonstyles">
                Select Date
              </div>
              <div className="border rounded p-2 buttonstyles">Filter</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-data">
                <table className="sales-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Sales</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td>{row.Product}</td>
                        <td>{row.Sales}</td>
                        <td>{row.Amount}</td>
                        <td>{row.Price}</td>
                        <td>{row.Status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="row mb-3">
            <div className="col-md-12">
              <h4>Sales by Location</h4>
            </div>
            <div className="col-md-12 mt-4">
              <div className="sales-location">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5>United Kingdom</h5>
                    <p>340 Sales</p>
                  </div>
                  <div>
                    <h5>$17,168</h5>
                  </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Spain</h5>
                    <p>100 Sales</p>
                  </div>
                  <div>
                    <h5>$5,500</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
