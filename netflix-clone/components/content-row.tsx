"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Info, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContentRowProps {
  title: string
  type: string
  isOriginals?: boolean
}

export default function ContentRow({ title, type, isOriginals = false }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  // Generate 10 items for the row
  const items = Array(10)
    .fill(0)
    .map((_, i) => ({
      id: `${type}-${i}`,
      title: `${title} ${i + 1}`,
      image: `/placeholder.svg?height=${isOriginals ? 400 : 200}&width=${isOriginals ? 300 : 350}&text=${type}+${i + 1}`,
    }))

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="mb-8" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <div className="relative group">
        {showLeftArrow && isHovering && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full h-12 w-12"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth py-4"
          onScroll={handleScroll}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10 relative group/item",
                isOriginals ? "w-[200px]" : "w-[250px]",
              )}
            >
              <Link href={`/browse/${item.id}`}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className={cn("rounded-md object-cover w-full", isOriginals ? "h-[300px]" : "h-[140px]")}
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 flex items-center justify-center gap-2">
                  <Button size="sm" className="rounded-full bg-white hover:bg-white/90 text-black">
                    <Play className="h-4 w-4 fill-black" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-white text-white hover:bg-white/20"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {showRightArrow && isHovering && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full h-12 w-12"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  )
}
