import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  to?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, href, to, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safi-green disabled:pointer-events-none disabled:opacity-50 rounded-lg';
    
    const variants = {
      primary: 'bg-safi-green text-white hover:bg-safi-green-hover shadow-lg shadow-safi-green/20',
      secondary: 'bg-safi-gold text-safi-green border border-safi-gold hover:bg-amber-400 shadow-lg',
      outline: 'border border-safi-green text-safi-green bg-transparent hover:bg-safi-green hover:text-white',
      ghost: 'hover:bg-safi-green/5 text-safi-green',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-xs',
      md: 'px-6 py-3 text-xs',
      lg: 'px-8 py-4 text-sm',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {props.children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes}>
          {props.children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);

Button.displayName = 'Button';
