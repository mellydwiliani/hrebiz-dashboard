"use client"

import { useState, useEffect } from "react"

export default function LocationComponent() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [permission, setPermission] = useState<string>("unknown")

  useEffect(() => {
    if ("permissions" in navigator) {
      ;(navigator as any).permissions.query({ name: "geolocation" }).then((res: any) => {
        setPermission(res.state)
        res.onchange = () => setPermission(res.state)
      })
    }
  }, [])

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

        if (err.code === err.PERMISSION_DENIED) {
          setError("Location permission denied. Please enable location access in your browser or system settings.")
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          setError("Location information is unavailable.")
        } else if (err.code === err.TIMEOUT) {
          setError("The request to get your location timed out.")
        } else {
          setError("Failed to get location. Please allow location access.")
        }

        setLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
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
      <p className="text-sm text-gray-500">Permission: {permission}</p>
    </div>
  )
}
