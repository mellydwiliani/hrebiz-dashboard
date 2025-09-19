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
  <div className="fixed left-1/2 -translate-x-1/2 bg-white border-t h-16 w-[95vw] max-w-xl flex items-center justify-between px-2 py-2 mb-4" style={{ bottom: 0, paddingBottom: 10 }}>
      {menus.map((menu) => (
        <Button
          key={menu.key}
          variant={active === menu.key ? "default" : "ghost"}
          onClick={() => setActive(menu.key)}
          className={`flex items-center gap-2 rounded-full px-5 ${active === menu.key ? "py-2" : "py-1.5"} text-sm font-medium transition-all h-auto 
            ${active === menu.key ? "bg-[#303267] text-white" : "text-[#303267]"}`}
        >
          <FontAwesomeIcon icon={menu.icon} className="text-2xl" />
          {active === menu.key && <span>{menu.label}</span>}
        </Button>
      ))}
    </div>
  )
}
