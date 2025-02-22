"use client"
import { useQuery } from "@tanstack/react-query";
import Navbar from "./(components)/Navbar";
import UserNavbar from "./(components)/UserNavbar";


export default function Home() {

  
  const {data ,isLoading} =  useQuery({
    queryKey : ["authUser"] ,
    queryFn :async()=>{
      try {
        const res = await fetch("https://hypes-2.vercel.app/api/auth/getMe" , {
          method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
        }});
        const data = await res.json();

        if(!res.ok){
          throw new Error(data.error || "Something went wrong")
        }
        console.log(data)
        return data
      } catch (error) {
        console.log(error)
          throw new Error(error)
      }
    },
    retry :false,  
  })

  return (
    <div>
      {
        data &&
      <UserNavbar/>
      
      }
      {
        (!data) &&
      <Navbar/>
      }
      <h1 className="text-5xl font-bold w-1/2 leading-relaxed m-auto text-center">
        WELCOME TO HYPES
        </h1>
    </div>
  );
}
