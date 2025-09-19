"use client"

import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    router.push("/home")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={300}
        height={100}
        className="mb-6"
      />

      <h1 className="text-2xl font-bold text-center mb-2">Selamat Datang</h1>
      <p className="text-gray-500 text-center mb-24 text-sm">
        Silahkan login untuk melanjutkan
      </p>

      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="text-gray-600 text-sm mb-1 block">
            Nama Pengguna
          </label>
          <Input
            placeholder="Nama Pengguna"
            className="w-full h-12 rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm mb-1 block">
            Kata Sandi
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              className="w-full h-12 pr-10 rounded-lg"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>

        <Button
          onClick={handleLogin}
          className="w-full rounded-xl py-5 text-white text-base font-semibold"
          style={{ backgroundColor: "#303267" }}
        >
          Login
        </Button>
      </div>
    </div>
  )
}
