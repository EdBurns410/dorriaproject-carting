import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-20 h-[600px] flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Shopping Lifestyle" 
                className="w-full h-full object-cover"
            />
        </div>

      <div className="container mx-auto px-5 relative z-20">
        <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-400 backdrop-blur-sm text-blue-200 text-sm font-semibold tracking-wider mb-6">
                NEW SEASON ARRIVALS
            </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Perfect Style
            </span>
          </h1>
          <p className="mb-10 text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            Explore our curated collection of premium products. Elevate your lifestyle with the latest trends in fashion, technology, and home essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
                to="/products" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Shop Collection
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
                to="/cart" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/10 border border-white/30 backdrop-blur-md rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero