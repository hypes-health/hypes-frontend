import React from 'react'
import Image from 'next/image'
import {Man} from "@/public/man.svg"
import {Health} from "@/public/health.svg"
import {Dna} from "@/public/dna.svg"

import Stepper1 from '@/app/(components)/Stepper/Stepper1'
function page() {
  return (
    <div className='w-[364px] m-auto'>
      <Stepper1 currentStep={2}/>
      <div class="mt-10 text-center text-black text-xl font-medium font-['Poppins'] leading-tight">Let’s Understand Your Lifestyle 🧘</div>
      <div class="text-center text-[#6b6a6a] mt-4 text-base font-normal font-['Poppins'] leading-tight">Answer a few quick questions to help us tailor your health recommendations even better.</div>

        <div className='w-full h-[100px] mt-4 px-6 py-4 rounded-lg border border-[#ececec] flex-col justify-center items-center gap-2 inline-flex'>
<Image src="./dna.svg" height={50} width={50} alt="man"/>
<div class="text-center text-black text-base font-medium font-['Poppins'] leading-tight">Biological Habits</div>
        </div>
        <div className='w-full h-[100px] mt-4 px-6 py-4 rounded-lg border border-[#ececec] flex-col justify-center items-center gap-2 inline-flex'>
<Image src="./man.svg" height={50} width={50} alt="man"/>
<div class="text-center text-black text-base font-medium font-['Poppins'] leading-tight">Daily Habits</div>
        </div>
        <div className='w-full h-[100px] mt-4 px-6 py-4 rounded-lg border border-[#ececec] flex-col justify-center items-center gap-2 inline-flex'>
<Image src="./health.svg" height={50} width={50} alt="man"/>
<div class="text-center text-black text-base font-medium font-['Poppins'] leading-tight">Health Goals</div>
        </div>

        <div class="h-12 w-[90%] my-3 px-5 py-3 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
    <div class="text-white text-base font-medium font-['Poppins'] leading-[21.12px]">Attempt Quiz</div>
</div>
        <div class="h-12 border-2 my-3 w-[90%] px-5 py-3 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
    <div class=" text-base font-medium  font-['Poppins'] leading-[21.12px]">Talk to an Expert</div>
</div>
    </div>
  )
}

export default page
