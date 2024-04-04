"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function () {
  const { setTheme } = useTheme()
  return (
    <div className="p-5 shadow-lg dark:bg-sky-600 dark:shadow-lg">
      <div className="text-right">
        <Button variant="outline" size="icon">
          <SunIcon 
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
            onClick={() => setTheme("dark")}
          />
          <MoonIcon 
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
            onClick={() => setTheme("light")}
          />
        </Button>
      </div>
    </div>
  )
}