import React, { FC, forwardRef } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  onClick,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
