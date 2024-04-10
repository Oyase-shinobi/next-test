"use client"

import Image from "next/image"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function () {
  const { setTheme } = useTheme()
  return (
    // <div className="sticky z-10 top-0 right-0 left-0 p-5 shadow-lg dark:bg-sky-600">
    //   <div className="text-right">
    //     <Button variant="outline" size="icon">
    //       <SunIcon 
    //         className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
    //         onClick={() => setTheme("dark")}
    //       />
    //       <MoonIcon 
    //         className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
    //         onClick={() => setTheme("light")}
    //       />
    //     </Button>
    //   </div>
    // </div>
    <div>
      <div className=" mx-auto fixed z-10 top-0 right-0 left-0 p-3 bg-[#00000087]">
        <div>
          <Image src="/img/logo.webp" width={200} height={50} className="z-20" alt="LOGO" />
        </div>
        <div></div>
      </div>
      <div className="w-full h-[63px]"></div>
    </div>
  )
}