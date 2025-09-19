"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faClipboardList,
  faList,
  faCog,
} from "@fortawesome/free-solid-svg-icons"

export default function BottomNavbar() {
  const [active, setActive] = useState("beranda")

  const menus = [
    { key: "beranda", label: "Beranda", icon: faHome },
    { key: "absensi", label: "Absensi", icon: faClipboardList },
    { key: "daftar", label: "Daftar", icon: faList },
    { key: "pengaturan", label: "Pengaturan", icon: faCog },
  ]

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white border-t h-20 w-[95vw] max-w-xl flex items-center justify-around px-6">
      {menus.map((menu) => (
        <Button
          key={menu.key}
          variant={active === menu.key ? "default" : "ghost"}
          onClick={() => setActive(menu.key)}
          className={`flex items-center gap-2 rounded-full px-5 ${active === menu.key ? "py-3" : "py-2"} text-sm font-medium transition-all h-auto 
            ${active === menu.key ? "bg-[#303267] text-white" : "text-[#303267]"}`}
        >
          <FontAwesomeIcon icon={menu.icon} className="text-3xl" />
          {active === menu.key && <span>{menu.label}</span>}
        </Button>
      ))}
    </div>
  )
}
