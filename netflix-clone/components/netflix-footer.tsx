import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function NetflixFooter() {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Center", "Terms of Use", "Contact Us", "Do Not Sell or Share My Personal Information"],
  ]

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-6 mb-6">
          <Link href="#" className="hover:text-white">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:text-white">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:text-white">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:text-white">
            <Youtube className="h-6 w-6" />
            <span className="sr-only">Youtube</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <Link href="#" className="text-sm hover:underline">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="border border-gray-600 px-3 py-1 text-sm mb-6">Service Code</button>

        <p className="text-xs">© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </footer>
  )
}
