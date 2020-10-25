import React from "react";
import Highcharts from "hightcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

class BasicChart extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default BasicChart;
