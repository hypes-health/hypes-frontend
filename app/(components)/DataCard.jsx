import React, { useState } from "react";

const MenuItem = (item) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col my-2">
      <div onClick={toggleOpen} className={`${!isOpen ? "":"bg-slate-200"} pt-3 rounded-t-lg flex flex-row justify-between px-10 transiton-all duration-300`}>

      <h3 className="font-bold">
        {item.name}
      </h3>
      
      <p className={`transiton-all text-lg duration-300 ${!isOpen?"":"rotate-45"}`}>+</p>
      </div>
    <div className={`border-1 overflow-clip transiton-all duration-300 rounded-b-xl bg-gray-200 ${!isOpen?"h-0":"h-44"}`}>
      <p className="w-1/2 mx-auto my-2">Result : {item.result }{item.unit}</p>
      <p className="w-1/2 mx-auto my-2">Upper Limit : {item.upperLimit }{item.unit}</p>
      <p className="w-1/2 mx-auto my-2">Lower Limit : {item.lowerLimit }{item.unit}</p>
      <p className="w-1/2 mx-auto my-2">{item.remarks}</p>
      
    </div>
    </div>
  );
};
const DataCard = (test) => {
 

  return (
    <div className="w-[470px] p-5 border">
      <h2 className="text-4xl font-bold my-5">{test.name}</h2>
      <div className="w-1/2 flex flex-row">
        
      </div>
      {test.parameters?.map((item, index) => (
        <MenuItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default DataCard;
