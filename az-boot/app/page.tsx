"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Home() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      
      <div className="flex w-full h-full">
          <Image src="/generated_00.png" height={100} width={2000} alt="Picture of azure business bootstrapper"/>
      </div>
      <div className="flex w-full h-30 p-16 bg-blue-200 items-center justify-center">
      <h1 className="p-2 bg-blue-50 rounded-lg">
      <Link href="/admin">Show Business Details</Link>
      </h1>
    
      <h1 className="p-2 bg-blue-50 ml-4 rounded-lg items-center justify-center">
        <Link href="/admin-create">Create a new business</Link>
      </h1>
      </div>
      
      </div>
  );
}
