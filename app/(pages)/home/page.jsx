"use client"
import React from 'react'
import axios from 'axios';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import UserNavbar from '@/app/(components)/UserNavbar';
import UploadReport from '@/app/(components)/UploadReport';
import Data from '@/app/(components)/Data';
import { useState } from 'react';
export default function Home() {
  
  

  return (
    <div>
      <UserNavbar/>
        <Data/>
    </div>
  )
}
