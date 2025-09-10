"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faLayerGroup, faCircleQuestion, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <>
      <nav className="hidden md:block sticky top-0 z-50 bg-[#ff6ebc]">
        <div className="flex items-center justify-between px-[5vw] py-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2 text-white font-medium">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className="px-4 py-2 cursor-pointer text-base">
                    Manfaat
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className="px-4 py-2 cursor-pointer text-base">
                    Harga
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className="px-4 py-2 cursor-pointer text-base">
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            className="ml-6 bg-white text-pink-600 font-semibold 
                      hover:bg-orange-500 hover:text-white 
                      cursor-pointer rounded-lg text-base"
          >
            <a href="https:" target="_blank" rel="noopener noreferrer">
              Kontak Kami
            </a>
          </Button>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-pink-600 border-t border-pink-700 z-50">
        <div className="flex justify-around py-3 text-white text-sm">
          <Link href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHouse} className="h-5 w-5 mb-1" />
            <span>Home</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 mb-1" />
            <span>Manfaat</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-5 mb-1" />
            <span>FAQ</span>
          </Link>
          <Link href="https:" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mb-1" />
            <span>Kontak</span>
          </Link>
        </div>
      </div>
    </>
  )
}
