
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Plus, Minus, Trash2, ShoppingCart, 
  ArrowRight, ArrowLeft 
} from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    clearCart();
  };

  // Group items by section
  const groceryItems = items.filter(item => item.section === 'grocery');
  const foodItems = items.filter(item => item.section === 'food');
  const electronicsItems = items.filter(item => item.section === 'electronics');

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center py-16 animate-fade-in">
          <div className="bg-gray-100 p-6 inline-block rounded-full mb-6">
            <ShoppingCart className="h-16 w-16 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-grocery text-grocery hover:bg-grocery hover:text-white">
              <Link to="/groceries" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Groceries
              </Link>
            </Button>
            <Button asChild className="bg-food hover:bg-food/90">
              <Link to="/food" className="flex items-center">
                Explore Food
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2 space-y-8">
          {/* Render sections only if they have items */}
          {groceryItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-grocery animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-grocery">Groceries</h2>
              <div className="divide-y">
                {groceryItems.map(item => (
                  <CartItemRow 
                    key={item.id} 
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </div>
          )}
          
          {foodItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-food animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-food">Food</h2>
              <div className="divide-y">
                {foodItems.map(item => (
                  <CartItemRow 
                    key={item.id} 
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </div>
          )}
          
          {electronicsItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-electronics animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-electronics">Electronics</h2>
              <div className="divide-y">
                {electronicsItems.map(item => (
                  <CartItemRow 
                    key={item.id} 
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={handleCheckout} 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                size="lg"
              >
                Checkout
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              
              <Button asChild variant="ghost" className="w-full">
                <Link to="/" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for cart item rows
const CartItemRow: React.FC<{
  item: ReturnType<typeof useCart>['items'][0];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}> = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="py-4 flex items-center animate-fade-in">
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-md"
        />
      </Link>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${item.id}`} className="font-medium hover:text-blue-600">
          {item.name}
        </Link>
        <div className="text-sm text-gray-500">{item.category}</div>
        <div className="font-medium mt-1">${item.price.toFixed(2)}</div>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 text-gray-500 hover:text-black"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="mx-2 w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 text-gray-500 hover:text-black"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
        >
          <Trash2 className="h-3 w-3 mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartPage;
