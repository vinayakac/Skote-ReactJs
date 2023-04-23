import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Pie extends Component {
  getOption = () => {
    return {
      toolbox: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
        textStyle: {
          color: ["#8791af"],
        },
      },
      color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
      series: [
        {
          name: "Total sales",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Laptop" },
            { value: 310, name: "Tablet" },
            { value: 234, name: "Mobile" },
            { value: 135, name: "Others" },
            { value: 1548, name: "Desktop" },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
    )
  }
}
export default Pie
