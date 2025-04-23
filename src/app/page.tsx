import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, DollarSign, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black text-2xl">Filiate</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="font-bold text-lg hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="font-bold text-lg hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="font-bold text-lg hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <Button className="bg-black text-white border-4 border-black hover:bg-black/90 font-bold px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                EARN <span className="bg-yellow-400 px-2">BIG</span> WITH OUR AFFILIATE PROGRAM
              </h1>
              <p className="text-xl md:text-2xl font-bold">
                Join thousands of partners making passive income by promoting products they love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white text-lg border-4 border-black hover:bg-black/90 font-bold px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-pink-500 border-4 border-black"></div>
              <div className="relative bg-yellow-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Affiliate Program"
                  width={500}
                  height={400}
                  className="w-full border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-400 border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black">$1M+</h3>
              <p className="text-xl font-bold mt-2">Paid to affiliates</p>
            </div>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black">10,000+</h3>
              <p className="text-xl font-bold mt-2">Active partners</p>
            </div>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black">30%</h3>
              <p className="text-xl font-bold mt-2">Commission rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            <span className="bg-pink-500 px-4 py-2 border-4 border-black">WHY JOIN US?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Commissions",
                description: "Earn up to 30% on every sale you refer to our platform.",
                icon: <DollarSign size={32} className="text-black" />,
                color: "bg-yellow-400",
              },
              {
                title: "Easy Tracking",
                description: "Monitor your performance with our real-time dashboard.",
                icon: <CheckCircle size={32} className="text-black" />,
                color: "bg-pink-500",
              },
              {
                title: "Dedicated Support",
                description: "Get help from our affiliate managers whenever you need it.",
                icon: <Users size={32} className="text-black" />,
                color: "bg-blue-400",
              },
              {
                title: "Fast Payouts",
                description: "Get paid monthly with low minimum thresholds.",
                icon: <DollarSign size={32} className="text-black" />,
                color: "bg-green-400",
              },
              {
                title: "Marketing Materials",
                description: "Access ready-to-use banners, links, and promotional content.",
                icon: <CheckCircle size={32} className="text-black" />,
                color: "bg-orange-400",
              },
              {
                title: "Lifetime Cookies",
                description: "Earn from customers you refer for their entire lifetime.",
                icon: <Users size={32} className="text-black" />,
                color: "bg-purple-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`${feature.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="bg-white inline-block p-4 border-4 border-black mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-2">{feature.title}</h3>
                <p className="text-lg font-bold">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-pink-500 border-y-4 border-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            <span className="bg-white px-4 py-2 border-4 border-black">HOW IT WORKS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your free affiliate account in less than 2 minutes.",
              },
              {
                step: "02",
                title: "Share Links",
                description: "Get your unique referral links and start promoting.",
              },
              {
                step: "03",
                title: "Earn Money",
                description: "Receive commissions for every successful referral.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center border-4 border-black mb-4">
                  <span className="text-2xl font-black">{step.step}</span>
                </div>
                <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                <p className="text-lg font-bold">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            <span className="bg-yellow-400 px-4 py-2 border-4 border-black">COMMISSION STRUCTURE</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-6">Standard Plan</h3>
              <ul className="space-y-4">
                {[
                  "20% commission on all sales",
                  "30-day cookie duration",
                  "Monthly payouts",
                  "$50 minimum payout threshold",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-black text-white text-lg border-4 border-black hover:bg-black/90 font-bold px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Join Standard
              </Button>
            </div>
            <div className="bg-pink-500 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-yellow-400 inline-block px-4 py-1 border-4 border-black mb-4">
                <span className="font-black">PREMIUM</span>
              </div>
              <h3 className="text-3xl font-black mb-6">VIP Plan</h3>
              <ul className="space-y-4">
                {[
                  "30% commission on all sales",
                  "90-day cookie duration",
                  "Bi-weekly payouts",
                  "$25 minimum payout threshold",
                  "Priority support",
                  "Exclusive promotions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle className="text-black flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-black text-white text-lg border-4 border-black hover:bg-black/90 font-bold px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Join VIP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-yellow-400 border-y-4 border-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            <span className="bg-white px-4 py-2 border-4 border-black">SUCCESS STORIES</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Content Creator",
                quote:
                  "I've tried many affiliate programs, but this one has the best conversion rates by far. Made $3,000 in my first month!",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mark Williams",
                role: "Blogger",
                quote:
                  "The dashboard makes it so easy to track performance. I love how transparent everything is, and the commissions are amazing.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Jessica Chen",
                role: "YouTuber",
                quote:
                  "Their affiliate team is super responsive and the marketing materials they provide convert really well with my audience.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-black"
                  />
                  <div>
                    <h3 className="text-xl font-black">{testimonial.name}</h3>
                    <p className="font-bold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg font-bold">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-pink-500 border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center">READY TO START EARNING?</h2>
            <p className="text-xl font-bold mb-8 text-center">
              Join our affiliate program today and start earning commissions on every referral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white text-lg border-4 border-black hover:bg-black/90 font-bold px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Sign Up Now <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black text-lg border-4 border-black hover:bg-gray-100 font-bold px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t-4 border-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-yellow-400 p-2 border-4 border-black text-black inline-block mb-4">
                <span className="font-black text-2xl">FILIATE</span>
              </div>
              <p className="font-bold mb-4">The #1 affiliate program for digital products.</p>
              <div className="flex gap-4">
                {["Twitter", "Facebook", "Instagram"].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="bg-white text-black p-2 border-2 border-white hover:bg-gray-100"
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>
            {[
              {
                title: "Program",
                links: ["How It Works", "Commission Rates", "Terms & Conditions", "FAQ"],
              },
              {
                title: "Resources",
                links: ["Affiliate Dashboard", "Marketing Materials", "Success Stories", "Blog"],
              },
              {
                title: "Company",
                links: ["About Us", "Contact", "Careers", "Privacy Policy"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-xl font-black mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="font-bold hover:text-yellow-400">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 mt-12 pt-6 text-center">
            <p className="font-bold">© {new Date().getFullYear()} domain76. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}