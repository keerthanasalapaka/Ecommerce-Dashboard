import React from "react";
import ReactApexChart from "react-apexcharts";
import "./chartdesign.css";
// Import the CSS file for styling

class Radialchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -20,
            endAngle: 360,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#f4f4f4",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#f4f4f4",
              strokeWidth: "67%",
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#777",
                fontSize: "18px",
              },
              value: {
                formatter: function () {
                  return "10%+$150 today";
                },
                color: "#777",
                fontSize: "14px",
                show: true,
                style: {
                  color: "blue", // Fallback color if SVG isn't supported
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#75C695"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["75.5%"],
      },
      columnSeries: [
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 90, 100, 150],
        },
      ],
      columnOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          title: {
            text: "Sales (in USD)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="container target-container">
        <div className="row target-row">
          <div className="col-md-4 target-column ">
            <h5 className="target-header">Target</h5>
            <p>Revenue Target</p>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              height={250}
            />
            <div className="row target-paragraph">
              <div className="col-md-4">
                <p>Target</p>
                <h5>$100k</h5>
              </div>
              <div className="col-md-4">
                <p>Revenue</p>
                <h5>$75k</h5>
              </div>
              <div className="col-md-4">
                <p>This Week</p>
                <h5>$1.5k</h5>
              </div>
            </div>
          </div>

          <div className="col-md-8 stat-column">
            <div className="row stat-row">
              <div className="col-md-3">
                <h5 className="stat-first-column">Statistic</h5>
                <p>Income and expenses</p>
              </div>
              <div className="col-md-9 d-flex justify-content-end">
                <div className="stat-right">
                  <p>Sales</p>
                  <p>Revenue</p>
                  <p>Monthly</p>
                </div>
              </div>
              <div className="col-md-12">
                <ReactApexChart
                  options={this.state.columnOptions}
                  series={this.state.columnSeries}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radialchart;
