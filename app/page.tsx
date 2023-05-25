"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Home() {

  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Field 1: ${field1}`);
    console.log(`Field 2: ${field2}`);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      
      <div className="flex w-full h-96">
          <Image src="/myImage.png" height={2000} width={2500} alt="Picture of code"/>
      </div>
      <div className="flex w-full h-60 p-16 bg-yellow-100 items-center justify-center">
      <h1 className="p-2 bg-green-50 rounded-lg">
      <Link href="/admin">Show Admin Details</Link>
    </h1>
    
      <h1 className="p-2 bg-green-50 ml-4 rounded-lg">
        <Link href="/ms-admin">Show MS Admin Details</Link>
      </h1>
      </div>
      
      </div>

    
  );
}
