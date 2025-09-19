"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faPen, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function AccountSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700" />
          </Button>
        </Link>
        <h1 className="text-lg font-semibold">Akun Saya</h1>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-200" />
          </div>
          <button className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2 shadow-md">
            <FontAwesomeIcon icon={faPen} className="text-white text-sm" />
          </button>
        </div>
        <p className="mt-4 font-semibold text-lg">Rossie</p>
        <p className="text-sm text-gray-500">@rossie.ebizmark.id</p>
      </div>

      {/* Form */}
      <Card className="p-4 space-y-4">
        {/* Nama Pengguna */}
        <div className="space-y-1">
          <Label htmlFor="username">Nama Pengguna</Label>
          <Input id="username" defaultValue="Rossie" />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="rossie.ebizmark.id" />
        </div>

        {/* Kata Sandi */}
        <div className="space-y-1 relative">
          <Label htmlFor="password">Kata Sandi</Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            defaultValue="********"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        {/* Button Simpan */}
        <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
          Simpan
        </Button>
      </Card>
    </div>
  )
}
