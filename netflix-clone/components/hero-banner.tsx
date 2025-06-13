import { Info, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%), url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <div className="absolute bottom-[30%] left-[4%] max-w-lg">
        <div className="w-64 h-24 mb-6">
          <img
            src="/placeholder.svg?height=96&width=256&text=NETFLIX+ORIGINAL"
            alt="Show logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4">Stranger Things</h1>

        <p className="text-lg mb-6">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
          supernatural forces and one strange little girl.
        </p>

        <div className="flex gap-3">
          <Button className="bg-white hover:bg-gray-200 text-black font-bold px-6 py-2 flex items-center gap-2">
            <Play className="h-5 w-5 fill-black" />
            Play
          </Button>
          <Button
            variant="outline"
            className="bg-gray-500/50 hover:bg-gray-600/50 text-white font-bold px-6 py-2 flex items-center gap-2"
          >
            <Info className="h-5 w-5" />
            More Info
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}
