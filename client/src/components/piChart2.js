import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Disagree strongly", 11],
  ["Disagree a little", 2],
  ["Neither agree nor disagree", 2],
  ["Agree a little", 2],
  ["Agree strongly", 7],
];

export const options = {
  title: "2. … is generally trusting",
  is3D: true,
};

export function Pi2({}) {
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
