import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Sparkles } from 'lucide-react'

const TopPicks = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTopPicks = async () => {
            try {
                // Fetch random products to simulate "Top Picks"
                const res = await fetch('https://dummyjson.com/products?limit=8&skip=10')
                const data = await res.json()
                setProducts(data.products)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchTopPicks()
    }, [])

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center space-x-2 text-purple-600 mb-2">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        <span className="font-semibold tracking-wider uppercase text-sm">Curated For You</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Top Picks of the Season</h2>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-wrap -m-4">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default TopPicks
