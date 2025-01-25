import React from "react";
import axios from "axios";
import { useState } from "react";
const DataPoint = ({value , lowerLimit , upperLimit}) => {
      const [count , setCount] = useState(0)
      axios.get('https://hypes-2.vercel.app//api/user/count')
        .then(response => {
          console.log(response)
          setCount(response)
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });
   
    let topPosition = 40 ;
    if(value<lowerLimit){
        topPosition = 70;}
    if(value>upperLimit){
        topPosition = 12;}
    if(value < lowerLimit/2){
        topPosition = 80;
    }
    if(value < upperLimit*2 && value > upperLimit){       topPosition = 5;
    }
    let color = "#14ae5c"; // Default color (in range)

    if (value < lowerLimit) {
        color = "#ff0000"; // Below range
    } else if (value > upperLimit) {
        color = "#ff0000"; // Above range
    }

    return (
        <div className="w-[29px] h-[154.41px] relative">
            <div className="left-0 top-[142.41px] absolute text-center text-[#626262] text-[8px] font-sm leading-3">Dec 24</div>
            <div className="left-[5px] absolute text-[0.7rem] text-center" style={{ top: `${topPosition}px`, color: color }}>{Math.round(value *100)/100}</div>
            <div className="w-2 h-2 left-[10.50px] absolute rounded-full" style={{ top: `${topPosition + 15}px`, backgroundColor: color }}></div>
        </div>  
    );
}

const VerticalRangeChart = ({value , lowerLimit , upperLimit}) => {
  return (
    <div className="flex flex-row items-center p-6 bg-white rounded-lg shadow-md">
      {/* Vertical Range Bar */}
      <div className="flex flex-row items-center">
        <div className="relative w-1 h-32  rounded-lg">
          {/* Above Range */}
          <div className="absolute top-0 w-full h-8 bg-red-500 rounded-t"></div>
          {/* In Range */}
          <div className="absolute top-8 w-full h-8 bg-green-500"></div>
          {/* Below Range */}
          <div className="absolute top-16 w-full h-8 bg-red-500 rounded-b"></div>
        </div>
        {/* Labels */}
        <div className="flex text-[0.5rem] flex-col ml-2 mt-[-30px] text-gray-500">
          <p>Above Range</p>
          <p className="mt-3">In Range</p>
          <p className="mt-3">Below Range</p>
        </div>
      </div>
        <div className="flex flex-row items-center justify-around w-3/4">
        {[...Array(count-1)].map((_, i) => (
          <DataPoint key={i} value={value *(1-0.1*(i+1))} lowerLimit={lowerLimit} upperLimit={upperLimit} />
        ))}
          <DataPoint  value={value} lowerLimit={lowerLimit} upperLimit={upperLimit} />
        
        </div>
      
    </div>
  );
};

export default VerticalRangeChart;
