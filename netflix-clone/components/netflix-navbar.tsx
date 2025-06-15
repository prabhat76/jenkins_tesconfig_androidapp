"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface NetflixNavbarProps {
  isLoggedIn?: boolean
  showBrowseButton?: boolean
}

export default function NetflixNavbar({ isLoggedIn = false, showBrowseButton = false }: NetflixNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300 py-2",
        scrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center">
        <Link href="/" className="mr-8">
          <div className="w-28 h-8 relative">
            <div className="w-full h-full bg-red-600 flex items-center justify-center text-white font-bold">
              NETFLIX
            </div>
          </div>
        </Link>

        {isLoggedIn ? (
          <>
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <Link href="/browse" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/browse?genre=series" className="text-gray-300 hover:text-white">
                TV Shows
              </Link>
              <Link href="/browse?genre=movies" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="/browse?genre=new" className="text-gray-300 hover:text-white">
                New & Popular
              </Link>
              <Link href="/browse?list=mylist" className="text-gray-300 hover:text-white">
                My List
              </Link>
              <Link href="/browse?browse=languages" className="text-gray-300 hover:text-white">
                Browse by Languages
              </Link>
            </nav>

            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white">
                    Browse <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-black/90 border-gray-700 text-white">
                  <DropdownMenuItem>
                    <Link href="/browse">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/browse?genre=series">TV Shows</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/browse?genre=movies">Movies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/browse?genre=new">New & Popular</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/browse?list=mylist">My List</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="ml-auto flex items-center space-x-4">
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center bg-black border border-white">
                    <Search className="h-5 w-5 ml-2" />
                    <Input
                      type="search"
                      placeholder="Titles, people, genres"
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                      autoFocus
                      onBlur={() => setSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 rounded-sm p-0">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 border-gray-700 text-white">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Help Center</DropdownMenuItem>
                  <DropdownMenuItem>Sign out of Netflix</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        ) : (
          <div className="ml-auto flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  English <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/90 border-gray-700 text-white">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {showBrowseButton && (
              <Button asChild className="bg-gray-600 hover:bg-gray-700 text-white mr-2">
                <Link href="/browse">Browse</Link>
              </Button>
            )}

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
