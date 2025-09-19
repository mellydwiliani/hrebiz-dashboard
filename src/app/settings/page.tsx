"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import BottomNavbar from "@/components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faIdCard,
  faLocationDot,
  faBuildingColumns,
  faKitMedical,
  faShirt,
  faPhone,
  faRightFromBracket,
  faPen,
} from "@fortawesome/free-solid-svg-icons"

export default function SettingsPage() {
  return (
    <>
          <div className="max-w-md mx-auto px-6 py-6 pb-24">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-8 mt-2">Profile Settings</h1>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-[#4F709C] text-xl" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-xl">Rosie Alanna</p>
            <p className="text-medium text-gray-500">@rosie.ebizmark.id</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
                <FontAwesomeIcon icon={faPen} className="text-[#4F709C]" />
          </Button>
        </div>

        {/* Settings Menu */}
        <div className="space-y-1">
          <Link href="/settings/account" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Akun Saya</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/biodata" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faIdCard} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Biodata</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/address" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faLocationDot} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/bank" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faBuildingColumns} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Akun Bank</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/medical" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faKitMedical} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Medical Profile</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/clothing" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faShirt} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Clothing Sizes</p>
                  <p className="text-base text-gray-500">Make changes to your account</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/settings/emergency" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Kontak Darurat</p>
                  <p className="text-base text-gray-500">Further secure your account for safety</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
          <Separator />
          <Link href="/logout" className="block">
            <div className="py-4 pl-0 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faRightFromBracket} className="text-[#4F709C] text-xl" />
                </div>
                <div>
                  <p className="font-medium">Log out</p>
                  <p className="text-base text-gray-500">Further secure your account for safety</p>
                </div>
              </div>
              <span className="text-gray-400 pr-4">{">"}</span>
            </div>
          </Link>
        </div>
      </div>
      <BottomNavbar />
    </>
  )
}