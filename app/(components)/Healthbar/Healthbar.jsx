import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import VerticalBar from "./SideColourBar";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
  // Data for the graph
  const data = {
    labels: ["Aug 24", "Nov 24", "Feb 24", "May 24"], // Time (x-axis labels)
    datasets: [
      { 
        label: "Value",
        data: [1.3, 1.3, 1.3, 1.3], // Values of the parameter (y-axis)
        borderColor: "#14AE5C", // Line color
        backgroundColor: "#14AE5C", // Circle color for data points
        pointRadius: 5, // Data point size
        fill: false, // No fill under the line
        tension: 0, // Smooth the line curve
      },
    ],
  };

  // Options for the graph
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false,
          text: "Date",
        },
      },
      y: {
        display: false,
        min: 1, // Setting minimum value for y-axis
        max: 1.5, // Setting maximum value for y-axis
        ticks: {
          stepSize: 0.1, // The interval between ticks
        },
        grid: {
          borderColor: "#E0E0E0", // Grid line color
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false,
      },
    },
  };

  // Range indicators (Above Range, In Range, Below Range)
  const rangeIndicator = {
    labels: ["Above Range", "In Range", "Below Range"],
    ranges: {
      aboveRange: { min: 1.4, max: 1.5 },
      inRange: { min: 1, max: 1.4 },
      belowRange: { min: 0, max: 1 },
    },
  };

  // Adding range indicators as background color
  const backgroundColor = [
    "rgba(255, 99, 132, 0.1)", // Above Range (Red)
    "rgba(75, 192, 192, 0.1)", // In Range (Green)
    "rgba(255, 159, 64, 0.1)", // Below Range (Orange)
  ];

  return (
    <div className="w-[90%] m-auto flex">
      <div className="h-full">

     
      </div>

      {/* Graph Rendering */}
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
