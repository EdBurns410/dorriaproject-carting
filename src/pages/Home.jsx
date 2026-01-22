import React from 'react'
import Products from './Products'
import Hero from '../components/Hero'
import FeaturedCollection from '../components/FeaturedCollection'
import TopPicks from '../components/TopPicks'

const Home = () => {
  return (
    <>
    <>
      <Hero/>
      <FeaturedCollection />
      <TopPicks />
      <div className="container mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">All Products</h2>
        <Products/>
      </div>
    </>
    </>
  )
}

export default Home
