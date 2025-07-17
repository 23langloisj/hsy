import React from 'react';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: (item: NavigationItem) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  orientation = 'horizontal',
  onItemClick,
}) => {
  const baseClasses = orientation === 'horizontal' 
    ? 'flex items-center space-x-8' 
    : 'flex flex-col space-y-1';

  const linkClasses = orientation === 'horizontal'
    ? 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
    : 'block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium';

  return (
    <nav className={`${baseClasses} ${className}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={linkClasses}
          onClick={() => onItemClick?.(item)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;