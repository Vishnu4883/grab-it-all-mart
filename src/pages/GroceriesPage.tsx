
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductsBySection, getCategories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Apple, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const GroceriesPage: React.FC = () => {
  const groceries = getProductsBySection('grocery');
  const categories = getCategories('grocery');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery 
    ? groceries.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : groceries;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center bg-green-100 text-grocery p-2 rounded-full mb-4">
            <Apple className="h-6 w-6 mr-2" />
            <span className="font-medium">Fresh Groceries</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Fresh Groceries, Delivered Fast</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of fresh fruits, vegetables, dairy products, and more. All delivered to your doorstep within minutes.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search groceries..."
            className="pl-10 border-grocery focus:ring-grocery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default GroceriesPage;
