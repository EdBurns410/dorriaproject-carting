import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Watch, Shirt, User } from 'lucide-react'

const FeaturedCollection = () => {
    const collections = [
        {
            id: 1,
            title: "Electronics",
            image: "https://images.unsplash.com/photo-1498049381945-a0d51d541744?q=80&w=2072&auto=format&fit=crop",
            icon: <Smartphone className="w-6 h-6" />,
            link: "/products" // In a real app, this would filter by category
        },
        {
            id: 2,
            title: "Jewelery",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
            icon: <Watch className="w-6 h-6" />,
            link: "/products"
        },
        {
            id: 3,
            title: "Men's Clothing",
            image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop",
            icon: <Shirt className="w-6 h-6" />,
            link: "/products"
        },
        {
            id: 4,
            title: "Women's Clothing",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
            icon: <User className="w-6 h-6" />,
            link: "/products"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Collections</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Browse by Category</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map((item) => (
                        <Link to={item.link} key={item.id} className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                {/* Background Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        Explore the collection &rarr;
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
