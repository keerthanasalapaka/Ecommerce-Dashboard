import React, { useState } from "react";
import "./table.css";
const ReactTable = () => {
  const [data, setData] = useState([
    {
      CustomerName: "Keerthana",
      ProductName: "MacBook",
      Qty: 1,
      OrderDate: "Nov 28,2023",
      Price: 45000,
      Status: "Shipment",
    },
    {
      CustomerName: "Nikitha",
      ProductName: "Iphone",
      Qty: 1,
      OrderDate: "Nov 24,2023",
      Price: 70000,
      Status: "Processing",
    },
    {
      CustomerName: "Lohitha",
      ProductName: "Laptop",
      Qty: 1,
      OrderDate: "Nov 18,2023",
      Price: 55000,
      Status: "Pending",
    },
    {
      CustomerName: "Harika",
      ProductName: "Sweat Shirt",
      Qty: 1,
      OrderDate: "Nov 5,2023",
      Price: 1500,
      Status: "Delivered",
    },
    {
      CustomerName: "Divya",
      ProductName: "Sofaset",
      Qty: 1,
      OrderDate: "Nov 8,2023",
      Price: 80000,
      Status: "Shipment",
    },

    // Add more data as needed
  ]);

  return (
    <div className="customer-table">
      <div className="recent-orders">
        <div className="orders-left">
          <h4>Recent orders</h4>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>
      <div className="table-data">
        <table className="custom-table">
          <thead>
            <tr>
              <th>CustomerName</th>
              <th>ProductName</th>
              <th>Qty</th>
              <th>OrderDate</th>
              <th>Price</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.CustomerName}>
                <td>{row.CustomerName}</td>
                <td>{row.ProductName}</td>
                <td>{row.Qty}</td>
                <td>{row.OrderDate}</td>
                <td>{row.Price}</td>

                <td>{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="left-section">
          <span>Show 1-5 from 100</span>
        </div>
        <div className="right-section">
          <button>Previous&#8592;</button>
          <button>&#8594;Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReactTable;
