"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Analyze from "./LoadingPages/Analyze";
import { CountContext } from "../(pages)/home/page";
import axios from "axios";
import { useContext, useState } from "react";
import { ReportContext } from "../(pages)/home/page";
import Stepper1 from "./Stepper/Stepper1";
function UploadReport() {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [report, setReport] = useState();
  const { currentReport, setCurrentReport } = useContext(ReportContext);
  const {count , setCount} = useContext(CountContext)

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = { name, date, report };
    console.log(data);
    
    await axios
        .post("http://localhost:8000/api/user/uploadReport", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then(async (response) => {
          // handle the response
          setIsLoading(false);
          setCurrentReport(response.data ,report);
          setDate("")
          setName("")
          setCount(count + 1)
          console.log(count)
      })
      .catch((error) => {
        // handle errors
        setIsLoading(false);
        console.log(error);
      });
    

  };
  if(isLoading)
    return(
      <Analyze/>
  
  )
  else{
    return (
    <div>

      <div className="w-[380px] px-2.5 py-[20px]  bg-[#f8f8f8] rounded-xl border border-[#eeeeee] flex-col justify-center items-center gap-4 inline-flex">
        <Stepper1 currentStep={1}/>
        <Image
          src="./file-up.svg"
          alt="upload"
          width={30}
          height={30}/>   
        <h2 className="text-center text-black text-base font-medium leading-[21.12px]">Upload Blood Report</h2>
        
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <p className="text-center my-[16px] text-[#676767] text-xs font-normal font-['Poppins'] leading-none">Maximum file size: 5MB</p>
  <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => {
            setReport(e.target.files[0]);
            handleSubmit();
            }}
        />
  
       
        <Button onClick={() => document.getElementById("fileInput").click()} variant="outline" className="w-[30%] m-auto">Browse File</Button>
          
        </div>
        
      </div>
      <span className=" mt-2 flex flex-col justify-center items-center gap-4">

      <div className="w-[372px] h-[21px] justify-start items-center gap-[7px] inline-flex">
    <div className="grow shrink basis-0 h-[0px] border border-[#e0e0e0]"></div>
    <div className="text-[#767676] text-base font-medium  leading-[21.12px]">OR</div>
    <div className="grow shrink basis-0 h-[0px] border border-[#e0e0e0]"></div>
</div>

<Button>Book a Test</Button>
      </span>
    </div>
    );
  }
}

export default UploadReport;
