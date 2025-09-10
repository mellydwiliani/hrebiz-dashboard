"use client"

import Navbar from "@/app/navbar"  
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="h-[100svh] md:h-[90vh] flex flex-col bg-[#ff6ebc]">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-snug">
            Save Hours with our <br /> Acclaimed, by our Software
          </h1>
          <p className="text-white/90 max-w-2xl mb-10">
            A catchy human resource slogan is a great way to market your business.
            Creating a slogan that is memorable and effective takes research and
            planning. A well-crafted slogan.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
              How It Works
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-md font-semibold"
            >
              Try for Free
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}
