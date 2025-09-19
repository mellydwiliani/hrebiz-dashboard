"use client"

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  faHome,
  faClipboardList,
  faList,
  faCog,
} from "@fortawesome/free-solid-svg-icons"

export default function BottomNavbar() {
  const pathname = usePathname()

  // mapping menu ke path
  const menus = [
    { key: "beranda", label: "Beranda", icon: faHome, href: "/home" },
    { key: "absensi", label: "Absensi", icon: faClipboardList, href: "/absensi" },
    { key: "daftar", label: "Daftar", icon: faList, href: "/daftar" },
    { key: "pengaturan", label: "Pengaturan", icon: faCog, href: "/settings" },
  ]

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bg-white border-t h-20 w-[98vw] max-w-2xl flex items-center justify-between px-2 py-2 pb-4" style={{ bottom: 0 }}>
      {menus.map((menu) => {
        const isActive = pathname.startsWith(menu.href)

        return (
          <Link href={menu.href} key={menu.key} passHref>
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`flex items-center gap-2 rounded-full px-5 ${isActive ? "py-2" : "py-1.5"} text-sm font-medium transition-all h-auto 
                ${isActive ? "bg-[#303267] text-white" : "text-[#303267]"}`}
            >
              <FontAwesomeIcon icon={menu.icon} className="text-2xl" />
              {isActive && <span>{menu.label}</span>}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
