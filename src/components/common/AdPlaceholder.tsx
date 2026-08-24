import React from 'react';
import { RealAdBanner } from './RealAdBanner';

interface AdPlaceholderProps {
  type?: 'banner' | 'sidebar' | 'inline';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  return <RealAdBanner className={className} />;
};

