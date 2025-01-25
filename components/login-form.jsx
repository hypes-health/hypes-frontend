"use client"
import Link from "next/link"
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
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useRouter } from 'next/navigation';
import { redirect } from "next/dist/server/api-utils"
export function LoginForm() {
  const { push } = useRouter();

  const [formData , setFormData] = useState({
    username : "",
    password : "",
})

const {mutate , isError , isPending , error} = useMutation({
mutationFn : async({username ,password})=>{
try {
console.log(formData)
const res =  await fetch('https://hypes-2.vercel.app/api/auth/login' , {
  method : "POST",
  headers:{
    "Content-Type" : "application/json"

  },
  credentials : "include" , 
  body : JSON.stringify({username,password})
})

const data = await res.json();
if(!res.ok) throw new Error(data.error || "Failed to create account")
alert("Login Successfull")
push('/home');
return data;

} catch (error) {
console.log(error)
alert(error.message)
}
},

})

const handleSubmit = (e) => {
e.preventDefault();
mutate(formData)	
};

const handleInputChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

  return (
    (<Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your details below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input onChange={handleInputChange} name="username" type="username" placeholder="" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input onChange={handleInputChange} name="password" type="password" required />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
            Login
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>)
  );
}
