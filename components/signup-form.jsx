"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
export function SignupForm() {
    const router = useRouter();
    const [formData , setFormData] = useState({
            fullName : "" , 
            username : "",
            email : "",
            password : "",
    })

    const {mutate , isError , isPending , error} = useMutation({
		mutationFn : async({email , username , fullName , password})=>{
			try {
				const res =  await fetch('https://hypes-backend.vercel.app/api/auth/signup' , {
					method : "POST",
					headers:{
						"Content-Type" : "application/json"
					},
          credentials : "include" ,
					body : JSON.stringify({email ,username , fullName ,password})
				})
				
				const data = await res.json();
				if(!res.ok) throw new Error(data.error || "Failed to create account")
				toast.success("Signup Successfull")
				return data;

			} catch (error) {
				console.log(error)
				toast.error(error.message)
			}
		},
		
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		mutate(formData)	
    router.push('/auth/login')
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};


  return (
    (<Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your details below to create to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input name="fullName" type="fullName" onChange={handleInputChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="username" onChange={handleInputChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" placeholder="m@example.com" onChange={handleInputChange} required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              
            </div>
            <Input name="password" type="password" onChange={handleInputChange} required />
          </div>
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Create Account
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        
      </CardContent>
    </Card>)
  );
}
