"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import ImageFrame from "@/components/frame/image-frame"

export default function Home() {
  return (
    <div>
      <ScrollArea className="h-80">
        <ImageFrame />
      </ScrollArea>
    </div>
  );
}
