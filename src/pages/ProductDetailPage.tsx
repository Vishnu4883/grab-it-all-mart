
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    );
  }
  
  const similarProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        section: product.section
      });
    }
    navigate('/cart');
  };

  // Section-specific styles
  const sectionStyles = {
    grocery: {
      bg: "bg-grocery",
      text: "text-grocery",
      border: "border-grocery",
      hover: "hover:bg-grocery/90"
    },
    food: {
      bg: "bg-food",
      text: "text-food",
      border: "border-food",
      hover: "hover:bg-food/90"
    },
    electronics: {
      bg: "bg-electronics",
      text: "text-electronics",
      border: "border-electronics",
      hover: "hover:bg-electronics/90"
    }
  };
  
  const styles = sectionStyles[product.section];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center mb-6 text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className={`rounded-lg overflow-hidden border-2 ${styles.border}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${styles.text} bg-gray-100`}>
            {product.category}
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {product.rating && (
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-5 w-5", 
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  )}
                />
              ))}
              <span className="ml-2 text-gray-600">{product.rating} rating</span>
            </div>
          )}
          
          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
          
          <div className="flex items-end mb-8">
            <div className="text-3xl font-bold mr-4">
              ${product.price.toFixed(2)}
            </div>
            {product.discount && (
              <div className="text-red-500 font-medium">
                {product.discount}% OFF
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="font-medium">Quantity:</div>
            <div className="flex items-center border rounded-md">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="p-2"
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="px-4 py-2 font-medium">
                {quantity}
              </div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart} 
            size="lg"
            className={cn("w-full md:w-auto", styles.bg, styles.hover)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
