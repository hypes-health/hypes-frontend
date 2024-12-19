import React, { useState } from "react";

const MenuItem = ({ title, description, hasDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        onClick={toggleOpen}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "x" : "+"}</span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          marginTop: isOpen ? "0.5rem" : "0",
          color: "#555",
          fontSize: "0.9rem",
        }}
      >
        {hasDescription && <div>{description}</div>}
      </div>
    </div>
  );
};
const DataCard = () => {
  const items = [
    {
      title: "Cholesterol / HDL Ratio",
      description:
        "Measures the ratio of total cholesterol levels to high-density lipoprotein cholesterol (HDL).",
      hasDescription: true,
    },
    { title: "HDL Large", hasDescription: false },
    { title: "LDL Cholesterol", hasDescription: false },
    { title: "LDL Particle Number", hasDescription: false },
    { title: "LDL Peak Size", hasDescription: false },
    { title: "Lipoprotein (a)", hasDescription: false },
    { title: "Total Cholesterol", hasDescription: false },
    { title: "Apolipoprotein B (Apo B)", hasDescription: false },
    { title: "HDL Cholesterol", hasDescription: false },
    { title: "High-Sensitivity C-Reactive Protein (hs-CRP)", hasDescription: false },
    { title: "LDL Medium", hasDescription: false },
    { title: "LDL Pattern", hasDescription: false },
    { title: "LDL Small", hasDescription: false },
    { title: "Non-HDL Cholesterol", hasDescription: false },
    { title: "Triglycerides", hasDescription: false },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Heart</h2>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          hasDescription={item.hasDescription}
        />
      ))}
    </div>
  );
};

export default DataCard;
