"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faPen,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons"

export default function AccountSettings() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      {/* Back Button and Header */}
      <div className="flex items-center mb-6">
        <Link href="/settings">
          <FontAwesomeIcon icon={faUser} className="text-[#4F709C] text-xl mr-4" />
        </Link>
        <h1 className="text-xl font-semibold">Akun Saya</h1>
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative">
          <FontAwesomeIcon icon={faUser} className="text-[#4F709C] text-2xl" />
          <Button variant="ghost" size="icon" className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white border border-gray-300">
            <FontAwesomeIcon icon={faPen} className="text-[#4F709C] text-sm" />
          </Button>
        </div>
        <div>
          <p className="font-medium text-lg">Rossie</p>
          <p className="text-base text-gray-500">@rossie.ebizmark.id</p>
        </div>
      </div>

      {/* Account Form */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Akun Saya</h2>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Nama Pengguna</label>
          <Input type="text" defaultValue="Rossie" className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Email</label>
          <Input type="email" defaultValue="rossie.ebizmark.id" className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Kata Sandi</label>
          <div className="relative">
            <Input type="password" defaultValue="********" className="w-full pr-10" />
            <FontAwesomeIcon icon={faLock} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <Button className="w-full bg-[#1E3A8A] text-white hover:bg-[#163172] mt-4">Simpan</Button>
      </div>
    </div>
  )
}