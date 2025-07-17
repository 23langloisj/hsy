import React, { useState } from 'react';

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholderText?: string;
  onSubmit?: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Stay Updated",
  subtitle = "Be the first to know about new releases, exclusive drops, and special offers.",
  buttonText = "Subscribe",
  placeholderText = "Enter your email",
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit?.(email);
      setEmail(''); // Clear form on success
    } catch (error) {
      console.error('Newsletter submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            required
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 rounded-full border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={!isValidEmail(email) || isSubmitting}
            className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;