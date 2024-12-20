import React, { useState } from "react";

const MenuItem = ({ title, description, hasDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col">
      <div onClick={toggleOpen} className="flex flex-row justify-around">

      <h3>
        Cholestrol 
      </h3>
      
      <p className={`transiton-all duration-300 ${!isOpen?"":"rotate-45"}`}>+</p>
      </div>
    <div className={`border-1 overflow-clip transiton-all duration-300 bg-gray-400 ${!isOpen?"h-0":"h-16"}`}>
      <p className="w-1/2 mx-auto my-2">INfo</p>
      <p className="w-1/2 mx-auto my-2">INfo</p>
      <p className="w-1/2 mx-auto my-2">INfo</p>
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
    <div >
      <h2 className="text-4xl font-bold">Heart</h2>
      <div className="w-1/2 flex flex-row">
        
      </div>
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
