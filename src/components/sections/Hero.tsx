import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "Elevate Your Style",
  subtitle = "Premium streetwear that combines comfort with contemporary design. Express yourself with HSY's curated collection.",
  primaryButtonText = "Shop Collection",
  secondaryButtonText = "Learn More",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <section className="pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onPrimaryButtonClick}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              {primaryButtonText}
            </button>
            <button 
              onClick={onSecondaryButtonClick}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;