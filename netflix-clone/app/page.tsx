import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NetflixNavbar from "@/components/netflix-navbar"
import NetflixFooter from "@/components/netflix-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="relative min-h-[700px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <NetflixNavbar showBrowseButton={true} />
        <div className="container mx-auto px-4 pt-40 pb-20 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlimited movies, TV shows, and more</h1>
          <p className="text-xl md:text-2xl mb-5">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg md:text-xl mb-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 bg-black/60 border border-gray-600 text-white rounded-md px-4"
            />
            <Button className="h-14 bg-red-600 hover:bg-red-700 text-white rounded-md px-8 font-medium text-lg flex items-center justify-center">
              Get Started
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 border-t-8 border-gray-800 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enjoy on your TV</h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img src="/placeholder.svg?height=400&width=600" alt="TV" className="relative z-10 w-full" />
            <div className="absolute top-[20%] left-[13%] right-[13%] bottom-[20%] z-0 bg-black">
              <video autoPlay playsInline muted loop className="w-full h-full object-cover">
                <source src="#" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t-8 border-gray-800 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pl-0 md:pl-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Download your shows to watch offline</h2>
            <p className="text-lg md:text-xl">Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="md:w-1/2 relative">
            <img src="/placeholder.svg?height=400&width=600" alt="Mobile device" className="relative z-10 w-full" />
            <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 bg-black border-2 border-gray-400 rounded-lg p-2 flex items-center w-3/4 z-20">
              <img src="/placeholder.svg?height=80&width=60" alt="Boxshot" className="h-20 mr-4" />
              <div className="flex-1">
                <div className="font-bold">Stranger Things</div>
                <div className="text-blue-500">Downloading...</div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t-8 border-gray-800 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Watch everywhere</h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img src="/placeholder.svg?height=400&width=600" alt="Devices" className="relative z-10 w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 border-t-8 border-gray-800 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pl-0 md:pl-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Create profiles for kids</h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space made just for them—free with your
              membership.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="Kids profile" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 border-t-8 border-gray-800 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-2 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What is Netflix?",
                  answer:
                    "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.",
                },
                {
                  question: "How much does Netflix cost?",
                  answer:
                    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.",
                },
                {
                  question: "Where can I watch?",
                  answer:
                    "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
                },
                {
                  question: "How do I cancel?",
                  answer:
                    "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
                },
                {
                  question: "What can I watch on Netflix?",
                  answer:
                    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
                },
                {
                  question: "Is Netflix good for kids?",
                  answer:
                    "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800 mb-2 border-none">
                  <AccordionTrigger className="p-6 text-left text-xl font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-lg">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-lg md:text-xl mb-5 text-center">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 bg-black/60 border border-gray-600 text-white rounded-md px-4"
            />
            <Button className="h-14 bg-red-600 hover:bg-red-700 text-white rounded-md px-8 font-medium text-lg flex items-center justify-center">
              Get Started
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <NetflixFooter />
    </div>
  )
}
