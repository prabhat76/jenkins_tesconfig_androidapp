import { ArrowLeft, Play, Plus, ThumbsUp, Volume2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NetflixNavbar from "@/components/netflix-navbar"
import NetflixFooter from "@/components/netflix-footer"
import ContentRow from "@/components/content-row"

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <NetflixNavbar isLoggedIn={true} />

      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <Link href="/browse" className="absolute top-24 left-8">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>

        <div className="absolute bottom-0 left-0 p-8 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stranger Things</h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-500 font-bold">98% Match</span>
            <span>2022</span>
            <span className="border border-gray-600 px-1 text-xs">TV-14</span>
            <span>4 Seasons</span>
            <span className="border border-gray-600 px-1 text-xs">HD</span>
          </div>

          <p className="text-lg mb-6">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces and one strange little girl.
          </p>

          <div className="flex gap-3">
            <Button className="bg-white hover:bg-gray-200 text-black font-bold px-6 py-2 flex items-center gap-2">
              <Play className="h-5 w-5 fill-black" />
              Play
            </Button>
            <Button variant="outline" className="border-gray-400 hover:bg-gray-800 px-6 py-2 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              My List
            </Button>
            <Button variant="outline" className="border-gray-400 hover:bg-gray-800 rounded-full p-2">
              <ThumbsUp className="h-5 w-5" />
            </Button>
            <div className="ml-auto">
              <Button variant="outline" className="border-gray-400 hover:bg-gray-800 rounded-full p-2">
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-green-500 font-bold">98% Match</span>
              <span>2022</span>
              <span className="border border-gray-600 px-1 text-xs">TV-14</span>
              <span>4 Seasons</span>
            </div>

            <p className="text-lg mb-6">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
              supernatural forces and one strange little girl.
            </p>
          </div>

          <div>
            <div className="text-gray-400 mb-1">
              Cast: <span className="text-gray-200">Winona Ryder, David Harbour, Finn Wolfhard</span>
            </div>
            <div className="text-gray-400 mb-1">
              Genres: <span className="text-gray-200">Sci-Fi TV, Teen TV Shows, TV Horror</span>
            </div>
            <div className="text-gray-400 mb-1">
              This show is: <span className="text-gray-200">Scary, Suspenseful</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>

          <div className="flex gap-4 mb-6">
            <Button variant="ghost" className="border-b-2 border-red-600 rounded-none px-4 py-1">
              Season 1
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white rounded-none px-4 py-1">
              Season 2
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white rounded-none px-4 py-1">
              Season 3
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white rounded-none px-4 py-1">
              Season 4
            </Button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((episode) => (
              <div key={episode} className="flex gap-4 p-4 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="w-32 h-20 relative flex-shrink-0">
                  <img
                    src={`/placeholder.svg?height=120&width=192`}
                    alt={`Episode ${episode}`}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-bold">1. Chapter One: The Vanishing of Will Byers</span>
                    <span>58m</span>
                  </div>
                  <p className="text-gray-400 line-clamp-2 mt-1">
                    On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister
                    secret lurks in the depths of a government lab.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">More Like This</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="relative group">
                  <img
                    src={`/placeholder.svg?height=400&width=300&text=Show+${index + 1}`}
                    alt={`Similar show ${index + 1}`}
                    className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-bold truncate">Similar Show Title</div>
                    <div className="flex items-center text-xs">
                      <span className="text-green-500 mr-2">97% Match</span>
                      <span className="border border-gray-600 px-1">TV-MA</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <ContentRow title="Trending Now" type="trending" />
      </div>

      <NetflixFooter />
    </div>
  )
}
