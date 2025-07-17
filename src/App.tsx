import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Newsletter from './components/sections/Newsletter';

// Sample products data
const sampleProducts = [
  { id: 1, name: "Essential Hoodie", price: "$89", type: "Hoodie", rating: 4.8 },
  { id: 2, name: "Classic Tee", price: "$39", type: "T-Shirt", rating: 4.7 },
  { id: 3, name: "Oversized Hoodie", price: "$95", type: "Hoodie", rating: 4.9 },
  { id: 4, name: "Vintage Tee", price: "$42", type: "T-Shirt", rating: 4.6 },
  { id: 5, name: "Zip-Up Hoodie", price: "$105", type: "Hoodie", rating: 4.8 },
  { id: 6, name: "Long Sleeve Tee", price: "$45", type: "T-Shirt", rating: 4.7 },
];

const App: React.FC = () => {
  // Event handlers
  const handlePrimaryButtonClick = () => {
    console.log('Shop Collection clicked');
    // Navigate to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryButtonClick = () => {
    console.log('Learn More clicked');
    // You can add navigation logic here
  };

  const handleProductClick = (product: unknown) => {
    console.log('Product clicked:', product);
    // Navigate to product detail page
  };

  const handleAddToCart = (product: unknown) => {
    console.log('Add to cart:', product);
    // Add product to cart logic
  };

  const handleNewsletterSubmit = async (email: string) => {
    console.log('Newsletter subscription:', email);
    // Newsletter subscription logic
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(`Thank you for subscribing with ${email}!`);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero 
          onPrimaryButtonClick={handlePrimaryButtonClick}
          onSecondaryButtonClick={handleSecondaryButtonClick}
        />
        
        <FeaturedProducts 
          products={sampleProducts}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
        
        <Newsletter 
          onSubmit={handleNewsletterSubmit}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;