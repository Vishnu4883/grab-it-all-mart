
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Apple, Utensils, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  const heroSections = [
    {
      title: "Fresh Groceries",
      description: "Delivered at your doorstep within minutes",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format",
      color: "from-green-500 to-green-700",
      icon: <Apple className="h-8 w-8" />,
      path: "/groceries",
      highlight: "Like Zepto, but better!"
    },
    {
      title: "Delicious Food",
      description: "Restaurant-quality meals from the best local chefs",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format",
      color: "from-orange-500 to-orange-700",
      icon: <Utensils className="h-8 w-8" />,
      path: "/food",
      highlight: "Like Swiggy & Zomato, but tastier!"
    },
    {
      title: "Latest Electronics",
      description: "Cutting-edge gadgets with next-day delivery",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format",
      color: "from-blue-500 to-blue-700",
      icon: <Laptop className="h-8 w-8" />,
      path: "/electronics",
      highlight: "Tech that transforms!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Everything You Need, <span className="text-yellow-300">All In One Place</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From groceries to gourmet food to gadgets - we've got you covered with lightning-fast delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link to="/groceries" className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroSections.map((section, index) => (
              <div 
                key={section.path} 
                className="rounded-xl overflow-hidden shadow-lg hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-70`}></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <div className="bg-white/20 p-3 rounded-full mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                    <p className="text-center mb-4">{section.description}</p>
                    <span className="bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
                      {section.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <Link 
                    to={section.path} 
                    className="flex items-center justify-center w-full py-2 font-medium text-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Browse {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Discover thousands more products across all categories
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="border-grocery text-grocery hover:bg-grocery hover:text-white">
                <Link to="/groceries">Groceries</Link>
              </Button>
              <Button asChild variant="outline" className="border-food text-food hover:bg-food hover:text-white">
                <Link to="/food">Food</Link>
              </Button>
              <Button asChild variant="outline" className="border-electronics text-electronics hover:bg-electronics hover:text-white">
                <Link to="/electronics">Electronics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
