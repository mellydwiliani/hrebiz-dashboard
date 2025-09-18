"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserCircle,
  faPen,
  faCalendarCheck,
  faBed,
  faClock,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons"

export default function DashboardPage() {
  const [progress] = useState(80)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-10">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-5xl text-gray-400"
        />
        <div>
          <p className="text-sm text-gray-500">Good morning,</p>
          <h1 className="text-lg font-bold">Hello, Rosie</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 mt-6 space-y-6 pb-24">
        {/* Absensi Bulan Ini */}
        <div>
          <h2 className="text-base font-semibold mb-2">Absensi Bulan Ini</h2>
          <div className="flex items-center gap-2">
            <Progress value={progress} className="h-3 flex-1 bg-gray-200" />
            <span className="text-sm font-medium text-gray-600">106 jam</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#303267]"></span> Hadir
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-400"></span> Tidak
              Hadir
            </div>
          </div>
        </div>

        {/* Absensi Minggu Ini */}
        <div>
          <h2 className="text-base font-semibold mb-2">Absensi Minggu Ini</h2>
          <div className="flex items-center gap-2">
            <Progress value={60} className="h-3 flex-1 bg-gray-200" />
            <span className="text-sm font-medium text-gray-600">44 jam</span>
          </div>
          <div className="flex gap-4 flex-wrap text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#303267]"></span> Hadir
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span> Lembur
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span> Sakit
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span> Izin
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-400"></span> Tidak
              Hadir
            </div>
          </div>
        </div>

        {/* Absen Hari Ini */}
        <div>
          <h2 className="text-base font-semibold mb-3">
            Senin, 15 September 2025
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-red-200 rounded-xl p-4">
              <CardContent className="p-0 space-y-1">
                <p className="text-sm font-medium">Absen Masuk</p>
                <p className="text-lg font-bold">09.40.10</p>
              </CardContent>
            </Card>
            <Card className="bg-green-200 rounded-xl p-4">
              <CardContent className="p-0 space-y-1">
                <p className="text-sm font-medium">Absen Pulang</p>
                <p className="text-lg font-bold">Belum Absen</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <Card className="bg-yellow-200 rounded-xl p-4 flex items-center justify-between">
              <span className="font-medium">Pengajuan</span>
              <FontAwesomeIcon icon={faPen} />
            </Card>
            <Card className="bg-purple-200 rounded-xl p-4 flex items-center justify-between">
              <span className="font-medium">Lembur</span>
              <FontAwesomeIcon icon={faClock} />
            </Card>
          </div>
        </div>

        {/* Absensi Bulan September */}
        <div>
          <h2 className="text-base font-semibold mb-2">
            Absensi Bulan September 2025
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-xl p-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="text-[#303267] text-2xl mb-1"
              />
              <p className="text-sm">Hadir</p>
              <p className="text-sm text-gray-500">4 hari</p>
            </Card>
            <Card className="rounded-xl p-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faBed}
                className="text-yellow-500 text-2xl mb-1"
              />
              <p className="text-sm">Izin</p>
              <p className="text-sm text-gray-500">1 hari</p>
            </Card>
            <Card className="rounded-xl p-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-red-500 text-2xl mb-1"
              />
              <p className="text-sm">Lembur</p>
              <p className="text-sm text-gray-500">4 hari</p>
            </Card>
            <Card className="rounded-xl p-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-green-600 text-2xl mb-1"
              />
              <p className="text-sm">Sakit</p>
              <p className="text-sm text-gray-500">1 hari</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
