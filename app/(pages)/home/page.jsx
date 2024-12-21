"use client";
import UserNavbar from "@/app/(components)/UserNavbar";
import Data from "@/app/(components)/Data";

import { createContext , useState ,useContext} from "react";

export const ReportContext = createContext(null)
export default function Home() {

  const [ currentReport , setCurrentReport] = useState(null)
  return (
      <ReportContext.Provider value={{currentReport , setCurrentReport}}>
    <div>
      <UserNavbar />
      {!currentReport && <h1 className="text-5xl font-bold w-1/2 leading-relaxed m-auto text-center">
        Upload Report to view results
        </h1>}
      {currentReport &&
      <Data {...currentReport}/>
      }

    </div>
      </ReportContext.Provider>
  );
}
