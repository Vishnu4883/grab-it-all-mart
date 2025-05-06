
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      section: product.section
    });
  };

  // Determine section-based styling
  const sectionStyles = {
    grocery: "border-grocery hover:border-grocery/80",
    food: "border-food hover:border-food/80",
    electronics: "border-electronics hover:border-electronics/80"
  };

  return (
    <div className={cn(
      "product-card border-2 animate-scale-in", 
      sectionStyles[product.section],
      className
    )}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover hover-scale"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            {product.rating && (
              <div className="flex items-center text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
            )}
          </div>
          
          <div className="category-badge bg-gray-100 inline-block mb-2">
            {product.category}
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="font-bold text-lg">
              ${product.price.toFixed(2)}
            </div>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className={cn(
                product.section === 'grocery' && "bg-grocery hover:bg-grocery/90",
                product.section === 'food' && "bg-food hover:bg-food/90",
                product.section === 'electronics' && "bg-electronics hover:bg-electronics/90"
              )}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
