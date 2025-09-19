"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUpload } from "@fortawesome/free-solid-svg-icons"


  export default function AbsensiPage() {
    const router = useRouter();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      if (files) {
        console.log("Files uploaded:", files)
      }
    }
  
    return (
      <div className="min-h-screen flex flex-col bg-[#213555]">

      <div className="relative flex items-center pt-10 px-0 mb-2" style={{ minHeight: 40 }}>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#ffffff] hover:bg-gray-100 pl-6"
          onClick={() => router.back()}
          aria-label="Kembali"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
        </Button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-white">Absensi</h1>
      </div>

      <div className="px-6 mb-2">
        <Breadcrumb>
          <BreadcrumbList className="text-white text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/absen">Absen</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex-1 bg-white w-full rounded-t-3xl p-6 space-y-8 shadow mt-0">
        <div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-medium">Selamat Sore,</p>
              <p className="font-bold">Rosie</p>
            </div>
            <div className="text-right text-gray-700">
              <p>18 September 2025</p>
              <p>17:35</p>
            </div>
          </div>
          <div className="mt-3 border-t pt-2 text-center text-sm text-gray-600">
            Lat-Long : -5.9889982928922, 00
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center space-y-2">
          <FontAwesomeIcon icon={faUpload} className="mx-auto h-10 w-10 text-[#213555]" />
          <p className="text-gray-600 text-sm">
            Drag your file(s) or{" "}
            <span className="text-blue-600 cursor-pointer">browse</span>
          </p>
          <p className="text-xs text-gray-500">Max 10 MB files are allowed</p>
          <p className="text-xs text-gray-400">
            Format accepted are .jpg, .jpeg, .png and .pdf
          </p>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-base text-[#213555]">To Do List</h2>

          <Textarea
            placeholder="Bayam, Pepaya"
            className="min-h-[150px] resize-none rounded-xl border-gray-300"
          />

          <Button className="w-full bg-[#213555] hover:bg-[#23244d] text-white py-5 rounded-xl text-base font-medium">
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}