import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import Navbar from './navbar'
import HeroSection from './heroSection'
import Footer from './footer'
import FeaturedProducts from './featuresProducts'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection/>
      <FeaturedProducts />
      

      {/* About Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Resolve Enterprises</h2>
          <p className="text-gray-600 mb-8">
            At Resolve Enterprises, we're committed to delivering top-quality kitchen and bathroom accessories that blend style with functionality. With over 20 years of experience, we've been transforming homes across the nation.
          </p>
          <button className="flex items-center justify-center mx-auto bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <Image src="/placeholder.svg?height=150&width=150&text=J.D." alt="John Doe" width={150} height={150} className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover mb-4 md:mb-0 md:mr-8" />
            <blockquote className="text-gray-600 italic">
              "Resolve Enterprises transformed our outdated kitchen into a modern masterpiece. The quality of their products is unmatched, and their customer service is exceptional. Highly recommended!"
              <footer className="text-gray-800 font-semibold mt-2">- John Doe, Homeowner</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      

      <section className="bg-black text-white py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Home?</h2>
        <p className="mb-8 text-lg">Explore our collection and find the perfect accessories for your kitchen and bathroom.</p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Shop Now
        </button>
      </section>
      <Footer />
    </div>
  )
}

