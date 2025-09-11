"use client"

import { useState } from "react"

export default function LocationComponent() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser")
      return
    }

    setLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        })
        setLoading(false)
      },
      (err) => {
        console.error("Error getting location:", err)
        setError("Failed to get location. Please allow location access.")
        setLoading(false)
      }
    )
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Get Location
      </button>

      {loading && <p>Fetching location...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {position && (
        <p className="text-green-600">
          Lat: {position.lat}, Lng: {position.lng}
        </p>
      )}
    </div>
  )
}
