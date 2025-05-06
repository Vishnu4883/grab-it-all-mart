
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ShoppingCart, Apple, Utensils, Laptop } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-lg w-full text-center animate-fade-in">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-grocery via-food to-electronics">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. But don't worry, we have plenty of other great options for you!
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Link to="/groceries" className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-green-100 text-grocery mb-2">
                <Apple className="h-6 w-6" />
              </div>
              <span className="font-medium">Groceries</span>
            </Link>
            
            <Link to="/food" className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-orange-100 text-food mb-2">
                <Utensils className="h-6 w-6" />
              </div>
              <span className="font-medium">Food</span>
            </Link>
            
            <Link to="/electronics" className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-blue-100 text-electronics mb-2">
                <Laptop className="h-6 w-6" />
              </div>
              <span className="font-medium">Electronics</span>
            </Link>
            
            <Link to="/cart" className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mb-2">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <span className="font-medium">Your Cart</span>
            </Link>
          </div>
          
          <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
