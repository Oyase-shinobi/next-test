import Image from "next/image"
import { useEffect, useState, useRef, WheelEvent } from "react"
import Draggable from "react-draggable";

interface Layer {
  width: number,
  height: number,
}

const MOBILE_FRAME_SIZE = 320;
const SM_FRAME_SIZE = 600;
const LG_FRAME_SIZE = 900;
const MINIMUN_IMG_WIDTH = 80;
const MINIMUN_IMG_HEIGHT = 80;

export default function () {

  const parentRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  const [ image, setImage ] = useState<Layer>({ width: MINIMUN_IMG_WIDTH, height: MINIMUN_IMG_HEIGHT });
  const [ bound, setBound ] = useState<Layer>({ width: MOBILE_FRAME_SIZE - MINIMUN_IMG_WIDTH, height: MOBILE_FRAME_SIZE - MINIMUN_IMG_HEIGHT });
  const [ frame, setFrame ] = useState<Layer>({ width: MOBILE_FRAME_SIZE, height: MOBILE_FRAME_SIZE });

  useEffect(() => {
    const updateBounds = () => {
      setBound(() => {
        if(window.innerWidth < 640) {
          return { width: MOBILE_FRAME_SIZE - image.width, height: MOBILE_FRAME_SIZE - image.height };
        } else if(window.innerWidth < 1024) {
          return { width: SM_FRAME_SIZE - image.width, height: SM_FRAME_SIZE - image.height }
        } else {
          return { width: LG_FRAME_SIZE - image.width, height: LG_FRAME_SIZE - image.height };
        }
      })
    };

    window.addEventListener('resize', updateBounds);
    updateBounds();
    return () => window.removeEventListener('resize', updateBounds);
  }, [image.height, image.width]);

  useEffect(() => {
    if(window !== undefined) {
      if(window.innerWidth < 640) {
        setFrame({ width: MOBILE_FRAME_SIZE, height: MOBILE_FRAME_SIZE });
      } else if (window.innerWidth < 1024) {
        setFrame({ width: SM_FRAME_SIZE, height: SM_FRAME_SIZE });
      } else {
        setFrame({ width: LG_FRAME_SIZE, height: LG_FRAME_SIZE });
      }
    }
  }, []);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); 

    const zoomFactor = 0.05;
    console.log("event delta", event.deltaY)
    let newWidth = image.width + (event.deltaY < 0 ? 1 : -1) * image.width * zoomFactor;
    let newHeight = image.height + (event.deltaY < 0 ? 1 : -1) * image.height * zoomFactor;

    newWidth = Math.max(MINIMUN_IMG_WIDTH, newWidth);
    newHeight = Math.max(MINIMUN_IMG_HEIGHT, newHeight);

    if(nodeRef.current && parentRef.current) {
      const nodeRect = nodeRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();
      const relativeLeft = nodeRect.left - parentRect.left;
      const relativeTop = nodeRect.top - parentRect.top;
      const enableWidth = Math.min(frame.width - relativeLeft, newWidth);
      const enabableHeight = Math.min(frame.height - relativeTop, newHeight);
      const newSize = Math.min(enabableHeight, enableWidth);

      console.log("size", newSize)

      setImage({ width: newSize, height: newSize });
    }
  };

  return (
    <div 
      ref={parentRef}
      className="relative w-80 h-80 m-auto bg-slate-50 sm:w-[600px] sm:h-[600px] lg:w-[900px] lg:h-[900px]"
    >
      <Draggable 
        nodeRef={nodeRef} 
        bounds={{ top: 0, left: 0, right: bound.width, bottom: bound.height }}
      >
      <div ref={nodeRef}>
          <img
            src={`/wolf.jpg`}
            alt="Draggable Image"
            width={image.width}
            height={image.height}
            draggable={false}
            style={{ width: `${image.width}px`, height: `${image.height}px` }}
            onWheel={handleWheel}
          />
        </div>
      </Draggable>
    </div>
  )
}