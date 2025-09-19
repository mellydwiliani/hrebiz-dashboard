"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserCircle,
  faPen,
  faUser,
  faSignInAlt,
  faClock,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons"

import Link from "next/link"
import BottomNavbar from "@/components/navbar"

export default function DashboardPage() {
  const [progressBulan] = useState({ hadir: 60, tidakHadir: 20 }) // Total 80% (60% Hadir, 20% Tidak Hadir)
  const [progressMinggu] = useState(60) // Asumsi nilai progress untuk minggu ini

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-10">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-6xl text-gray-400"
        />
        <div>
          <p className="text-base text-gray-500">Good morning,</p>
          <h1 className="text-2xl font-bold">Hello, Rosie</h1>
        </div>
      </div>

  <div className="flex-1 overflow-y-auto px-5 mt-6 space-y-6 pb-24">
        {/* Absensi Bulan Ini */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Absensi Bulan Ini</h2>
          <div className="flex items-center gap-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[#303267]"
                style={{ width: `${progressBulan.hadir}%` }}
              ></div>
              <div
                className="h-full bg-pink-400"
                style={{ width: `${progressBulan.tidakHadir}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600">106 jam</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#303267]"></span> Hadir
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-400"></span> Tidak Hadir
            </div>
          </div>
        </div>

        {/* Absensi Minggu Ini */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Absensi Minggu Ini</h2>
          <div className="flex items-center gap-2">
            <Progress value={progressMinggu} className="h-3 flex-1 bg-gray-200" />
            <span className="text-sm font-medium text-gray-600">44 jam</span>
          </div>
          <div className="flex gap-2 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#303267]"></span> Hadir
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-400"></span> Lembur
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span> Sakit
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span> Izin
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-pink-400"></span> Tidak Hadir
            </div>
          </div>
        </div>

        {/* Absen Hari Ini */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Kamis, 18 September 2025</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/absensi" className="w-full">
              <Card className="rounded-xl p-4 bg-[#FF9E9E] h-24 flex items-center justify-center cursor-pointer hover:bg-[#FFCCCC] transition-colors">
                <CardContent className="p-0 space-y-1 text-center w-full">
                  <p className="text-base font-semibold">Absen Masuk</p>
                  <p className="text-lg font-bold">13:38</p>
                </CardContent>
              </Card>
            </Link>
            <Card className="rounded-xl p-4 bg-[#65C998] h-24 flex items-center justify-center">
              <CardContent className="p-0 space-y-1 text-center w-full">
                <p className="text-base font-semibold">Absen Pulang</p>
                <p className="text-lg font-bold">Belum Absen</p>
              </CardContent>
            </Card>

            {/* Pengajuan */}
            <Card className="rounded-xl p-4 bg-[#F9DE66] h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mr-2">
                    <FontAwesomeIcon icon={faPen} className="text-lg text-gray-800" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="font-semibold">Pengajuan</span>
                </div>
              </CardContent>
            </Card>

            {/* Lembur */}
            <Card className="rounded-xl p-4 bg-[#CFD0F6] h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mr-2">
                    <FontAwesomeIcon icon={faClock} className="text-lg text-gray-800" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="font-semibold">Lembur</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Absensi Bulan September */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Absensi Bulan September 2025
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Hadir */}
            <Card className="rounded-xl p-4 h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#65C998]">
                    <FontAwesomeIcon icon={faSignInAlt} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Hadir</p>
                  <p className="text-sm text-gray-500">4 hari</p>
                </div>
              </CardContent>
            </Card>

            {/* Izin */}
            <Card className="rounded-xl p-4 h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF9E9E]">
                    <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Izin</p>
                  <p className="text-sm text-gray-500">1 hari</p>
                </div>
              </CardContent>
            </Card>

            {/* Lembur */}
            <Card className="rounded-xl p-4 h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E72023]">
                    <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Lembur</p>
                  <p className="text-sm text-gray-500">4 hari</p>
                </div>
              </CardContent>
            </Card>

            {/* Sakit */}
            <Card className="rounded-xl p-4 h-24">
              <CardContent className="p-0 h-full grid grid-cols-2 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#767676]">
                    <FontAwesomeIcon icon={faStethoscope} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Sakit</p>
                  <p className="text-sm text-gray-500">1 hari</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}