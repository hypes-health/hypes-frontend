import React from 'react'

function Analyze() {
  return (
    <div>
      <div className="w-[380px] h-[229px] flex-col justify-start items-center gap-14 inline-flex">
    <div className="flex justify-center items-center m-10">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
  </div>
    <div className="self-stretch h-[124px] flex-col justify-start items-center gap-3 flex">
        <div className="self-stretch text-center text-black text-[32px] font-medium font-['Poppins'] leading-9">Analyzing Blood Markers...</div>
        <div className="self-stretch text-center text-[#6b6a6a] text-base font-normal font-['Poppins'] leading-tight">We're analyzing your blood report to uncover what your body truly needs!</div>
    </div>
</div>
    </div>
  )
}

export default Analyze
