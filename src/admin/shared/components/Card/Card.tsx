import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false
}) => {
  const cardClassName = [
    'card',
    `card--padding-${padding}`,
    hover ? 'card--hover' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
};

export default Card;