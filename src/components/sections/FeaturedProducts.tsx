import React from 'react';
import { Star } from 'lucide-react';
import Shirt from "../../assets/shirt.png";

interface Product {
  id: number;
  name: string;
  price: string;
  type: string;
  rating?: number;
}

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title = "Featured Products",
  subtitle = "Discover our latest collection of premium hoodies and t-shirts, crafted with attention to detail and comfort.",
  products = [
    { id: 1, name: "Essential Hoodie", price: "$89", type: "Hoodie", rating: 4.8 },
    { id: 2, name: "Classic Tee", price: "$39", type: "T-Shirt", rating: 4.8 },
    { id: 3, name: "Oversized Hoodie", price: "$95", type: "Hoodie", rating: 4.8 },
    { id: 4, name: "Vintage Tee", price: "$42", type: "T-Shirt", rating: 4.8 },
    { id: 5, name: "Zip-Up Hoodie", price: "$105", type: "Hoodie", rating: 4.8 },
    { id: 6, name: "Long Sleeve Tee", price: "$45", type: "T-Shirt", rating: 4.8 },
  ],
  onProductClick,
  onAddToCart,
}) => {
  const handleProductClick = (product: Product) => {
    onProductClick?.(product);
  };

  const handleAddToCart = (product: Product, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent product click when clicking add to cart
    onAddToCart?.(product);
  };

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden group-hover:bg-gray-200 transition-colors">
                <img 
                  src={Shirt} 
                  alt="Shirt" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                )}

                <button 
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;