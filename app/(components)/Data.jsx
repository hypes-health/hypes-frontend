"use client"
import React from 'react'
import DataCard from './DataCard'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/dist/server/api-utils';
function Data(props) {
  const router = useRouter()
  const date = new Date(props.reportedOn);
  return (
    <div className='w-[95%] m-auto'>
     
      {
        props.tests?.map((test , index)=>
          <DataCard key={index} {...test}/>

        )
      }
        <div className=' mt-5'>

        <div className="w-[380px] text-black text-2xl font-medium leading-loose">Your Next Step</div>
        <div className="p-5 text-black text-xl font-medium leading-relaxed">Take a quick lifestyle quiz or chat with an expert to complete the picture.</div>
        <div className="h-12 px-5 py-3 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
 <div onClick={()=>{
  router.push("/quiz")
 }} className="text-white p-6 mx-5 text-base font-medium leading-[21.12px] ">Start Lifestyle Assessment</div>
</div>
        </div>
      </div>
    
  )
}

export default Data
