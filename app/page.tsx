"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import ImageFrame from "@/components/frame/image-frame"

export default function Home() {
  return (
    <div>
      <ScrollArea>
        <ImageFrame />
        <figcaption className="m-auto max-w-[400px] flex flex-col justify-center">
          <span className="my-5 max-w-80 m-auto">Peaceful Morning in the Mountain Valley</span>
          <span className="max-w-[400px] m-auto">A stunning landscape photograph capturing the serene beauty of a mountain valley at sunrise. The early morning light bathes the scene in a warm, golden glow, highlighting the rugged textures of the mountains in the background. A thin mist hovers above the valley floor, adding a touch of mystery and depth to the composition. In the foreground, a tranquil river meanders through the valley, reflecting the first light of day. The overall effect is one of peace and tranquility, inviting the viewer to pause and appreciate the natural beauty of the moment.</span>
        </figcaption>
      </ScrollArea>
    </div>
  );
}
