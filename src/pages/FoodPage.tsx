
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductsBySection, getCategories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Utensils, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FoodPage: React.FC = () => {
  const foods = getProductsBySection('food');
  const categories = getCategories('food');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery 
    ? foods.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : foods;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center bg-orange-100 text-food p-2 rounded-full mb-4">
            <Utensils className="h-6 w-6 mr-2" />
            <span className="font-medium">Delicious Food</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Restaurant-Quality Food Delivered</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy delicious meals from top restaurants and chefs, delivered right to your doorstep. From Indian classics to international cuisines.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search foods..."
            className="pl-10 border-food focus:ring-food"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Banner */}
        <div className="mb-8 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200&auto=format" 
            alt="Delicious Food" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Craving Something Special?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl text-center">
              Explore our curated selection of authentic cuisines from around the world!
            </p>
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full max-w-4xl mx-auto flex overflow-x-auto py-2 justify-start md:justify-center">
            <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="rounded-full"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </TabsContent>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts
                  .filter(product => product.category === category)
                  .map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FoodPage;
