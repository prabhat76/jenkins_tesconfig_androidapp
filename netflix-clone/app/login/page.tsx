"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NetflixFooter from "@/components/netflix-footer"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    router.push("/browse")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <header className="py-6 px-4">
          <div className="container mx-auto">
            <Link href="/" className="inline-block">
              <div className="w-32 h-9 relative">
                <div className="w-full h-full bg-red-600 flex items-center justify-center text-white font-bold">
                  NETFLIX
                </div>
              </div>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 flex justify-center items-center py-12">
          <div className="w-full max-w-md bg-black/80 rounded-md p-16">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email or phone number"
                  className="h-12 bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Input type="password" placeholder="Password" className="h-12 bg-gray-800 border-gray-700 text-white" />
              </div>

              <Button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium">
                Sign In
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-gray-400 text-sm">
                    Remember me
                  </Label>
                </div>

                <Link href="#" className="text-gray-400 text-sm hover:underline">
                  Need help?
                </Link>
              </div>
            </form>

            <div className="mt-16 space-y-4">
              <p className="text-gray-400">
                New to Netflix?{" "}
                <Link href="/" className="text-white hover:underline">
                  Sign up now
                </Link>
                .
              </p>

              <p className="text-gray-400 text-sm">
                This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
                <Link href="#" className="text-blue-500 hover:underline">
                  {" "}
                  Learn more.
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>

      <NetflixFooter />
    </div>
  )
}
