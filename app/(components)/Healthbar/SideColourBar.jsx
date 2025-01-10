import React from "react";
import "./BarComponent.css"; // Import styles for vertical bar

const VerticalBar = () => {
  // Example data
  const ranges = {
    above: { label: "Above Range", color: "red", value: 122.38 },
    in: { label: "In Range", color: "green" },
    below: { label: "Below Range", color: "red", value: 58.95 },
  };
  return (
    <div className="vertical-bar-container">
      {/* Vertical Bar */}
      <div className="vertical-bar">
        {/* Above Range */}
        <div
          className="range above-range"
          style={{ backgroundColor: ranges.above.color }}
        >
          {/* {ranges.above.value && (
            <span className="value-label">{ranges.above.value}</span>
          )} */}
        </div>

        {/* In Range */}
        <div
          className="range in-range"
          style={{ backgroundColor: ranges.in.color }}
        >
          <span className="range-label">{ranges.in.label}</span>
        </div>

        {/* Below Range */}
        <div
          className="range below-range"
          style={{ backgroundColor: ranges.below.color }}
        >
          {/* {ranges.below.value && (
            <span className="value-label">{ranges.below.value}</span>
          )} */}
        </div>
      </div>

      {/* Labels */}
      <div className="range-labels">
        <span>{ranges.above.label}</span>
        <span>{ranges.in.label}</span>
        <span>{ranges.below.label}</span>
      </div>
    </div>
  );
};

export default VerticalBar;
