"use client";
import Chart from "react-apexcharts";

export const ChartSection = ({ title }: { title: string }) => {
  const options:any = {
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
    series: [30, 20, 20, 15, 15],
    options: {
      chart: {
        width: 100,
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
      colors: ["#000000", "#000000", "#000000", "#000000", "#000000"],
      yaxis: {
        show: false,
      },
      labels: [
        "Type — quite, tactile and low-profile",
        "Touchpad — no need to move a hand",
        "Custom Touch configuration — unleash new layer of control",
        "Different settings profiles — tune for all your applications",
        "Touch RGB Backlight — beautiful and helps to get used",
      ],
      fill: {
        opacity: 1,
        colors: ["#373737", "#595959", "#A6A6A6", "#cccccc", "#F2F2F2"],
      },
      stroke: {
        width: 1,
        colors: ["#1B1B1B"],
      },
      legend: false,
    },
  };

  return (
    <div className="wrapper">
      {title && <div className="section__title">{title}</div>}
      <div className="chart">
        <Chart options={options.options} series={options.series} type="donut" />
      </div>
    </div>
  );
};
