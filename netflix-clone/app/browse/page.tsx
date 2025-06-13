import NetflixNavbar from "@/components/netflix-navbar"
import NetflixFooter from "@/components/netflix-footer"
import ContentRow from "@/components/content-row"
import HeroBanner from "@/components/hero-banner"

export default function BrowsePage() {
  // Categories with their respective content
  const categories = [
    { title: "Popular on Netflix", type: "popular" },
    { title: "Trending Now", type: "trending" },
    { title: "TV Shows", type: "tvshows" },
    { title: "Netflix Originals", type: "originals" },
    { title: "Action & Adventure", type: "action" },
    { title: "Comedies", type: "comedy" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <NetflixNavbar isLoggedIn={true} />

      <HeroBanner />

      <div className="container mx-auto px-4 -mt-40 relative z-10 pb-20">
        {categories.map((category, index) => (
          <ContentRow
            key={index}
            title={category.title}
            type={category.type}
            isOriginals={category.type === "originals"}
          />
        ))}
      </div>

      <NetflixFooter />
    </div>
  )
}
