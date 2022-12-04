import React from 'react';

import './Button.scss';

interface Props {
  children: React.ReactNode;
  value?: string | number;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'fill' | 'ghost' | 'dark' | 'light';
  disabled?: boolean;
  type?: 'button' | 'submit';
  size?: 'small' | 'medium' | 'large' | 'full-width';
}

export function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled,
  size = 'medium',
  ...props
}: Props) {
  function onClickHandler() {
    if (onClick !== undefined) {
      return onClick();
    }
    return false;
  }

  return (
    <button
      className={`button button-type-${variant} button-type-${size} ${className}`}
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
