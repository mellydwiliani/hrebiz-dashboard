"use client"

import { useEffect, useRef, useState } from "react"

export default function CameraComponent() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
        setStream(mediaStream)
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    }

    enableCamera()

    return () => {
      // stop camera jika component di-unmount
      stream?.getTracks().forEach(track => track.stop())
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded-lg border border-gray-300"
        width={300}
        height={200}
      />
    </div>
  )
}
