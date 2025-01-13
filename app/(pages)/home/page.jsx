"use client";
import UserNavbar from 
"@/app/(components)/UserNavbar";
import Data from "@/app/(components)/Data";
import { Button } from "@/components/ui/button";

import { createContext , useState ,useContext} from "react";
import UploadReport from "@/app/(components)/UploadReport";
import Report from "@/app/(components)/Report";

export const ReportContext = createContext(null)
export const CountContext = createContext(0)
export default function Home() {

  const [ currentReport , setCurrentReport] = useState(null)
  const [count , setCount] = useState(0)
  return (
      <ReportContext.Provider value={{currentReport , setCurrentReport}}>
        <CountContext.Provider value={{count , setCount}}>
    <div>
      <UserNavbar />
      {!currentReport && <div className="flex flex-col items-center justify-center gap-4">


      <h1 className="text-5xl font-bold w-1/2 leading-relaxed m-auto text-center">
        </h1>

        <UploadReport/>
        


      </div>

}
      {currentReport &&
      <Report currentReport/>
    }

    </div>
    </CountContext.Provider>
      </ReportContext.Provider>
  );
}
