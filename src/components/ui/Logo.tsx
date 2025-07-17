import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'black' | 'white' | 'gray';
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  color = 'black',
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const colorClasses = {
    black: 'text-gray-900',
    white: 'text-white',
    gray: 'text-gray-600',
  };

  const baseClasses = 'font-bold tracking-wider select-none';
  const interactiveClasses = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '';

  const classes = `${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${interactiveClasses} ${className}`;

  return (
    <div className="flex items-center">
      <h1 className={classes} onClick={onClick}>
        HSY
      </h1>
    </div>
  );
};

export default Logo;