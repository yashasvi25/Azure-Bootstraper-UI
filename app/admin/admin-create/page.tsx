"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateBusiness = () => {
  const [state, setState] = useState<{
    name?: string;
    type?: string;
    displayName?: string;
  }>({});

  const router = useRouter();

  const addBusiness = () => {
    // 👇 Send a fetch request to Backend API.
    fetch("http://swagger.ajayyadavofficial.com/api/business", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 100),
        ...state,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  };

  return (
    <div className="flex p-2 w-full  absolute mt-24 ml-6 items-center justify-center">
      <div className="border rounded-lg p-2">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await addBusiness();
            router.push("/admin");
          }}
        >
          <div className="ml-1">
            <label className="mb-2">Name</label>
            <br></br>
            <input
              className="w-72 bg-gray-50 rounded-lg border border-gray-300 text-lg"
              name="name"
              placeholder="Enter name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            ></input>
          </div>
          <br></br>
          <div className="ml-1">
            <label className="mb-2">Type</label>
            <br></br>
            <input
              className="w-72 bg-gray-50 rounded-lg border border-gray-300 text-lg"
              name="type"
              placeholder="Enter type"
              value={state.type}
              onChange={(e) => setState({ ...state, type: e.target.value })}
            ></input>
          </div>
          <br></br>

          <div className="ml-1">
            <label className="mb-2">Display Name</label>
            <br></br>
            <input
              className="w-72 bg-gray-50 rounded-lg border border-gray-300 text-lg"
              name="displayName"
              placeholder="Enter display name"
              value={state.displayName}
              onChange={(e) =>
                setState({ ...state, displayName: e.target.value })
              }
            ></input>
          </div>
          <br></br>
          <div className="flex w-72">
            <div className="p-1 justify-end rounded-lg bg-orange-400 h-full">
              <Link href="/admin">Cancel</Link>
            </div>
            <div className="flex h-full flex-1 justify-end">
              <div className=" rounded-lg bg-green-400 p-1">
                <button type="submit">Create Business</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBusiness;
