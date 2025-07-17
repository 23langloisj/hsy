import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';

interface Product {
  id: number;
  name: string;
  price: string;
  type: string;
  rating?: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showAddToCart?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onAddToCart,
  showAddToCart = true,
  className = '',
}) => {
  const handleProductClick = () => {
    onProductClick?.(product);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent product click when clicking add to cart
    onAddToCart?.(product);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div 
      className={`group cursor-pointer ${className}`}
      onClick={handleProductClick}
    >
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium">{product.type}</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-2 font-medium">{product.price}</p>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center justify-center mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
          </div>
        )}

        {/* Add to Cart Button */}
        {showAddToCart && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;