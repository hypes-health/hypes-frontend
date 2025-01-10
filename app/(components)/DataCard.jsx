import React, { useState } from "react";
import BarComponent from "./Healthbar/Healthbar";
import { Button } from "@/components/ui/button";
import VerticalRangeChart from "./VerticalRangeChart";
// import Graph from "./Healthbar/Healthbar";
const MenuItem = (item) => {
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col my-2 =">
      <span onClick={toggleOpen} className="flex flex-row justify-between">
        <h3 className="text-black text-base font-medium m-5 leading-normal">
          {item.name}
        </h3>
        <p className={`transition-all border text-lg m-5 duration-300 ${!isOpen ? "" : "rotate-45"}`}>+</p>
      </span>
          <div className={`${item.remarks === "Normal" ? "text-green-600" : "text-red-600"} text-green-600 mx-5 text-sm font-medium mb-3 mt-[-20px]`}>
            {Math.round(item.result*100)/100} {item.unit}
          </div>

      <div className={`px-5 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[50000px]" : "max-h-0"}`}>
      <div class="text-[#575757] text-sm font-normal leading-[18.48px]">Indicates the amount of nitrogen in the blood derived from urea; assesses kidney function.</div>
      <div class="h-[18px] justify-start items-center inline-flex">
    <div class="text-[#3850ea] text-sm font-medium font-['Poppins'] leading-[18.48px]">Learn more</div>
    <div class="w-[18px] h-[18px] relative  overflow-hidden"></div>
</div>
<div>

    <VerticalRangeChart value={item.result} lowerLimit={item.lowerLimit} upperLimit={item.upperLimit}/>
</div>
      </div>

    </div>
  );
};
const DataCard = (test) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="my-2">
      <span onClick={toggleOpen} className={`w-full h-[45px] p-3 rounded-lg border border-[#e7e7e7] flex justify-between items-center gap-3 px-5 ${isOpen ? "bg-black text-white" : ""}`}>
        
        <h2 className={`text-base font-medium leading-[21.12px] ${isOpen ? "text-white" : "text-black"}`}>{test.name}</h2>
        <p className={`transition-all text-lg duration-300 ${!isOpen ? "" : "rotate-45 text-white"}`}>+</p>
      </span>

      <div className={`flex flex-col justify-evenly overflow-hidden duration-500 transition-all bg-[#efefef] ${isOpen ? "max-h-[5000px]" : "max-h-0"}`}>

        {test.parameters?.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      <div class="h-[183px] p-5  rounded-lg flex-col justify-start items-start gap-3 inline-flex">
    <div class="w-6 h-6 relative  overflow-hidden"></div>
    <div class="text-black text-base font-medium font-['Poppins'] leading-[21.12px]">Clinician Notes</div>
    <div class="self-stretch text-[#686868] text-sm font-normal font-['Poppins'] leading-[18.48px]">Your thyroid levels suggest mild imbalance. This can affect energy, metabolism, and mood. Regular monitoring and addressing deficiencies, like iodine or selenium, can help maintain optimal thyroid health.</div>
</div>
      </div>

    </div>
  );
};

export default DataCard;
