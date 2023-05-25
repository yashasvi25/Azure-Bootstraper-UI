"use client";
import Link from "next/link";

export async function getData() {
  const res = await fetch("http://swagger.ajayyadavofficial.com/api/business", {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const allPostData = await res.json();

  return allPostData;
}


export default async function Admin() {
  const data = await getData();

  const businessType = {
    "1": "URL Shortener",
  "2": "ECommerce",
  "3": "Messenger",
  "4": "Social Media",
  "5": "Streaming",
  "6": "Cloud File System",
  "7": "Wallet",
  "8": "Payment Gateway",
  "9": "Code Sharing",
  "10": "VoIP Calling",
  "11": "Food Ordering",
  "12": "Appointment Booking",
  "13": "Hotel Booking",
  "14": "Git Versioning Control"
  }

  data.reverse();

  const arrayDataItems = data.map((business) => (
    <div
      key={business.id}
      className="w-full flex mt-4 flex p-4 bg-blue-100 cursor-pointer hover:bg-cyan-200"
    >
      <div className="flex-1">
        <p>{`Name: ${business.name}`}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <p>{`Business Type: ${businessType[business.type]}`}</p>
      </div>
      <div className="flex-1 flex justify-end">
        <p>{`Display name: ${business.displayName}`}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full absolute mt-20 ">
      <div className="flex mt-3">
        <div className="h-3 ml-4">
          <Link href="/">{"<--"}</Link>
        </div>
        <div className="h-3 ml-4">Back to Home</div>
        <div className="h-3 mr-4 flex flex-1 justify-end">
          <Link href="/admin/admin-create">Create a new business {"-->"}</Link>
        </div>
      </div>
      <ul className="p-4">{arrayDataItems}</ul>
    </div>
  );
}
