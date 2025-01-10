"use client";
import UserNavbar from 
"@/app/(components)/UserNavbar";
import Data from "@/app/(components)/Data";
import { Button } from "@/components/ui/button";

import { createContext , useState ,useContext} from "react";
import UploadReport from "@/app/(components)/UploadReport";
import Report from "@/app/(components)/Report";

export const ReportContext = createContext(null)
export default function Home() {

  const [ currentReport , setCurrentReport] = useState(null)
  return (
      <ReportContext.Provider value={{currentReport , setCurrentReport}}>
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
      </ReportContext.Provider>
  );
}
