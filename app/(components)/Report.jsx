import React from 'react'
import Data from './Data'
import { useContext } from 'react'
import { ReportContext } from "../(pages)/home/page";
function Report() {
    const {currentReport} = useContext(ReportContext)
    console.log(currentReport)
    let numberOfParameters=0;
    let numberOfNormal=0;
    let numberofProblematic=0;
    currentReport.tests.map((test)=>{
        test.parameters = test.parameters.map((parameter)=>{
            numberOfParameters++;
            if(parameter.remarks === 'Normal'){
                numberOfNormal++;
            }
            else{
                numberofProblematic++;
            }
            return parameter
        })
        return test
    })
  return (
    <div className='flex flex-col justify-center max-w-[364px] m-auto gap-4 py-5'>
      <div className="h-[57px] px-3 py-2 bg-[#f2f2f2] rounded justify-center items-start gap-3 inline-flex">
    <div className="w-6 h-6 relative  overflow-hidden"></div>
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <p className="self-stretch text-black text-base font-medium font-['Poppins'] leading-[21.12px]">Blood report.pdf</p>
        <p className="self-stretch text-[#676767] text-xs font-normal font-['Poppins'] leading-none">Blood report</p>
    </div>
</div>

<div>

<h2 className='text-black text-2xl w-[90%] font-medium leading-loose m-auto'>
Health Summary
</h2>
<div class="text-gray-600 p-5 text-sm font-normal  leading-tight">Good job! You’re on the right track, but there’s room for improvement in a few areas.</div>
</div>
<div class="text-black text-base font-medium p-5 leading-[21.12px]">{numberOfParameters} Biomarkers</div>
<div className="flex items-end gap-4 p-4 bg-white rounded shadow-md">
      {/* In Range */}
      <div className="flex flex-col items-center ml-20">
        <p className="text-xl font-bold text-green-600">{numberOfNormal}</p>
        <p className="text-sm text-gray-500">In range</p>
        <div className="w-16 h-24 bg-green-400 rounded"></div>
      </div>

      {/* Out of Range */}
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold text-orange-600">{numberofProblematic}</p>
        <p className="text-sm text-gray-500">Out of range</p>
        <div className="w-16 h-12 bg-orange-400 rounded"></div>
      </div>
    </div>

<div class="text-black text-2xl font-medium leading-loose">Blood Markers</div>
<Data {...currentReport}/>
    </div>
  )
}

export default Report
