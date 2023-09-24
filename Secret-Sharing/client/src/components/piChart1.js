import React from "react";
import { Chart } from "react-google-charts";


export function Pi1({data,options}) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
