import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

class OverviewChart extends Component {
  constructor(props) {
    super(props);
    const apexprojectOverviewChartColors = getChartColorsArray(props.dataColors);

    this.state = {
      options: {
        chart: {
          height: 290,
          type: "bar",
          toolbar: {
            show: !1,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "14%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: !1,
        },
        series: [
          {
            name: "Overview",
            data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
          },
        ],
        grid: {
          yaxis: {
            lines: {
              show: !1,
            },
          },
        },
        yaxis: {
          title: {
            text: "% (Percentage)",
          },
        },
        xaxis: {
          labels: {
            rotate: -90,
          },
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          title: {
            text: "Week",
          },
        },
        colors: apexprojectOverviewChartColors,
      },

      series: [
        {
          name: "Overview",
          data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
        },
      ],
    };
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Overview</CardTitle>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="290"
            className="apex-charts"
          />
        </CardBody>
      </Card>
    );
  }
}

OverviewChart.propTypes = {
  options: PropTypes.object,
  series: PropTypes.array,
};

export default OverviewChart;
