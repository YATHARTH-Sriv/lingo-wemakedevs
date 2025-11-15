"use client"
import { useRouter } from "next/navigation"


function Page() {
  const router=useRouter();
  function handleclick(){
    router.push("/generate")
  }
  return (
    <div className=" flex h-screen w-full flex-col justify-center items-center ">
          <h1>Welcome To AI Tutor </h1>
          <h3>Learn Any Language</h3>
          <button className="bg-white text-black rounded-md p-2 m-1" onClick={handleclick}>Learn English</button>
    </div>
  )
}

export default Page
