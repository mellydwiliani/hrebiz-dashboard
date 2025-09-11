"use client"

import { useState } from "react"
import Navbar from "@/app/navbar"
import { Button } from "@/components/ui/button"
import CameraComponent from "@/components/CameraComponent"
import LocationComponent from "@/components/LocationComponent"

export default function Header() {
  const [view, setView] = useState<"home" | "camera" | "location">("home")

  return (
    <>
      <Navbar />
      <div className="h-[100svh] md:h-[90vh] flex flex-col bg-[#ff6ebc]">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
          {view === "home" && (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-snug">
                Save Hours with our <br /> Acclaimed, by our Software
              </h1>
              <p className="text-white/90 max-w-2xl mb-10">
                A catchy human resource slogan is a great way to market your business.
                Creating a slogan that is memorable and effective takes research and
                planning. A well-crafted slogan.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => setView("camera")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
                >
                  Open Camera
                </Button>
                <Button
                  onClick={() => setView("location")}
                  variant="outline"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-md font-semibold"
                >
                  Get Location
                </Button>
              </div>
            </>
          )}

          {view === "camera" && (
            <div className="w-full max-w-lg">
              <CameraComponent />
              <Button
                onClick={() => setView("home")}
                className="mt-4 bg-gray-800 text-white"
              >
                Back
              </Button>
            </div>
          )}

          {view === "location" && (
            <div className="w-full max-w-lg">
              <LocationComponent />
              <Button
                onClick={() => setView("home")}
                className="mt-4 bg-gray-800 text-white"
              >
                Back
              </Button>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
