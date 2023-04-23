import React, { Component } from "react"
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

class StackedColumnChart extends Component {
  constructor(props) {
    super(props)
    const stackedColumnChartColors = getChartColorsArray(props.dataColors);

    this.state = {
      options: {
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },

        },

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            endingShape: "rounded",
          },
        },

        dataLabels: {
          enabled: false,
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
        colors: stackedColumnChartColors,
        legend: {
          position: "bottom",
        },
        fill: {
          opacity: 1,
        },
      },
    }
  }

  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.props.chartSeries || []}
          type="bar"
          height="360"
          className="apex-charts"
        />
      </React.Fragment>
    )
  }
}

StackedColumnChart.propTypes = {
  chartSeries: PropTypes.any,
  periodData: PropTypes.any
}
export default StackedColumnChart
