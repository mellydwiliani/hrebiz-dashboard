"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faClipboardList, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function DashboardPage() {
  const [progress] = useState(80) // contoh progress bulan ini

  const data = [
    { name: "Hadir", value: 10 },
    { name: "Lembur", value: 7 },
    { name: "Izin", value: 3 },
    { name: "Sakit", value: 1 },
    { name: "Tidak Hadir", value: 4 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-10">
        <Image
          src="/images/profile.svg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="text-sm text-gray-500">Good morning,</p>
          <h1 className="text-lg font-bold">Hello, Rosie</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 mt-6 space-y-6 pb-24">
        {/* Absensi Bulan Ini */}
        <div>
          <h2 className="font-semibold mb-2">Absensi Bulan Ini</h2>
          <div className="flex items-center gap-2">
            <Progress value={progress} className="h-3 flex-1 bg-gray-200" />
            <span className="text-sm text-gray-500">106 jam</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#303267]"></span> Hadir
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-pink-300"></span> Tidak Hadir
            </div>
          </div>
        </div>

        {/* Absensi Minggu Ini */}
        <div>
          <h2 className="font-semibold mb-2">Absensi Minggu Ini</h2>
          <div className="w-full h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <Bar dataKey="value" fill="#303267" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Absen Hari Ini */}
        <div>
          <h2 className="font-semibold mb-3">Senin, 15 September 2025</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-red-200 rounded-xl p-4">
              <CardContent className="p-0">
                <p className="text-sm font-medium">Absen Masuk</p>
                <p className="text-lg font-bold">09.40.10</p>
              </CardContent>
            </Card>
            <Card className="bg-green-200 rounded-xl p-4">
              <CardContent className="p-0">
                <p className="text-sm font-medium">Absen Pulang</p>
                <p className="text-lg font-bold">Belum Absen</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-yellow-200 rounded-xl p-4 mt-3 flex items-center justify-between">
            <span className="font-medium">Pengajuan</span>
            <Button size="sm" variant="ghost" className="rounded-full">
              ✏️
            </Button>
          </Card>
        </div>

        {/* Absensi Bulan September */}
        <div>
          <h2 className="font-semibold mb-2">Absensi Bulan September 2025</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-xl p-4 flex items-center justify-center">
              <span className="font-medium">Lembur</span>
            </Card>
            <Card className="rounded-xl p-4 flex items-center justify-center">
              <span className="font-medium">Sakit</span>
            </Card>
          </div>
        </div>
      </div>      
    </div>
  )
}
