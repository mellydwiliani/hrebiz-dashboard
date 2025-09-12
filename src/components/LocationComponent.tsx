"use client"

import { useState } from "react"

type Position = {
  lat: number
  lng: number
}

export default function LocationComponent() {
  const [position, setPosition] = useState<Position | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [permission, setPermission] = useState<string | null>(null)

  // Cek permission dengan tipe aman
  const checkPermission = async () => {
    if ("permissions" in navigator) {
      try {
        const res = await (navigator as unknown as {
          permissions: {
            query: (p: { name: "geolocation" }) => Promise<PermissionStatus>
          }
        }).permissions.query({ name: "geolocation" })
        setPermission(res.state) // granted | denied | prompt
      } catch {
        setPermission("Permission API not supported")
      }
    }
  }

  const getLocation = async () => {
    await checkPermission()

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
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setError("Location permission denied. Please enable location access.")
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError("Location information is unavailable.")
        } else if (error.code === error.TIMEOUT) {
          setError("The request timed out.")
        } else {
          setError("Failed to get location.")
        }
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
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

      {permission && <p className="text-gray-500">Permission status: {permission}</p>}
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
