
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  discount?: number;
  rating?: number;
  section: 'grocery' | 'food' | 'electronics';
}

export const products: Product[] = [
  // Grocery - Fruits
  {
    id: 'g1',
    name: 'Fresh Apples',
    description: 'Sweet and juicy red apples, perfect for snacking or baking.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format',
    category: 'Fruits',
    featured: true,
    rating: 4.5,
    section: 'grocery'
  },
  {
    id: 'g2',
    name: 'Organic Bananas',
    description: 'Perfectly ripe organic bananas. Rich in potassium and natural sweetness.',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?w=500&auto=format',
    category: 'Fruits',
    rating: 4.3,
    section: 'grocery'
  },
  {
    id: 'g3',
    name: 'Fresh Oranges',
    description: 'Juicy oranges packed with vitamin C. Perfect for fresh-squeezed juice.',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=500&auto=format',
    category: 'Fruits',
    rating: 4.4,
    section: 'grocery'
  },
  
  // Grocery - Vegetables
  {
    id: 'g4',
    name: 'Fresh Spinach',
    description: 'Nutrient-rich dark leafy greens, perfect for salads or cooking.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format',
    category: 'Vegetables',
    rating: 4.1,
    section: 'grocery'
  },
  {
    id: 'g5',
    name: 'Red Tomatoes',
    description: 'Vine-ripened tomatoes with the perfect balance of sweetness and acidity.',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=500&auto=format',
    category: 'Vegetables',
    featured: true,
    rating: 4.7,
    section: 'grocery'
  },
  {
    id: 'g6',
    name: 'Organic Carrots',
    description: 'Sweet, crunchy carrots perfect for snacking, cooking, or juicing.',
    price: 1.79,
    image: 'https://images.unsplash.com/photo-1522184216316-3c1a2f3d5c28?w=500&auto=format',
    category: 'Vegetables',
    rating: 4.2,
    section: 'grocery'
  },
  
  // Grocery - Dairy
  {
    id: 'g7',
    name: 'Whole Milk',
    description: 'Fresh and creamy whole milk from local grass-fed cows.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format',
    category: 'Dairy',
    rating: 4.6,
    section: 'grocery'
  },
  {
    id: 'g8',
    name: 'Greek Yogurt',
    description: 'Thick and creamy Greek yogurt, high in protein and probiotics.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format',
    category: 'Dairy',
    rating: 4.8,
    featured: true,
    section: 'grocery'
  },
  
  // Food - Indian Cuisine
  {
    id: 'f1',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with spices, herbs, and tender chicken pieces.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format',
    category: 'Indian',
    featured: true,
    rating: 4.9,
    section: 'food'
  },
  {
    id: 'f2',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce with aromatic spices.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format',
    category: 'Indian',
    rating: 4.8,
    section: 'food'
  },
  {
    id: 'f3',
    name: 'Vegetable Samosas',
    description: 'Crispy pastry filled with spiced potatoes, peas, and aromatic spices.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format',
    category: 'Indian',
    rating: 4.5,
    section: 'food'
  },
  
  // Food - Chinese
  {
    id: 'f4',
    name: 'Vegetable Noodles',
    description: 'Stir-fried noodles with mixed vegetables in a savory sauce.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format',
    category: 'Chinese',
    featured: true,
    rating: 4.4,
    section: 'food'
  },
  {
    id: 'f5',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.',
    price: 13.49,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format',
    category: 'Chinese',
    rating: 4.6,
    section: 'food'
  },
  
  // Food - Italian
  {
    id: 'f6',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format',
    category: 'Italian',
    rating: 4.7,
    section: 'food'
  },
  
  // Electronics - Smartphones
  {
    id: 'e1',
    name: 'Pro Smartphone',
    description: 'Latest flagship smartphone with advanced camera system and all-day battery.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format',
    category: 'Smartphones',
    featured: true,
    rating: 4.9,
    section: 'electronics'
  },
  {
    id: 'e2',
    name: 'Budget Smartphone',
    description: 'Affordable smartphone with great performance for everyday use.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1598327105854-7ce273d685dd?w=500&auto=format',
    category: 'Smartphones',
    discount: 10,
    rating: 4.3,
    section: 'electronics'
  },
  
  // Electronics - Laptops
  {
    id: 'e3',
    name: 'Ultra Thin Laptop',
    description: 'Sleek, powerful laptop with all-day battery life and stunning display.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format',
    category: 'Laptops',
    featured: true,
    rating: 4.8,
    section: 'electronics'
  },
  {
    id: 'e4',
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with dedicated graphics and advanced cooling.',
    price: 1699.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format',
    category: 'Laptops',
    rating: 4.7,
    section: 'electronics'
  },
  
  // Electronics - Audio
  {
    id: 'e5',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation and premium sound quality.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format',
    category: 'Audio',
    discount: 15,
    rating: 4.6,
    section: 'electronics'
  },
  {
    id: 'e6',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 360° sound and 24-hour battery life.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format',
    category: 'Audio',
    rating: 4.5,
    section: 'electronics'
  }
];

export const getProductsBySection = (section: 'grocery' | 'food' | 'electronics') => {
  return products.filter(product => product.section === section);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getCategories = (section: 'grocery' | 'food' | 'electronics') => {
  const sectionProducts = getProductsBySection(section);
  return [...new Set(sectionProducts.map(product => product.category))];
};
