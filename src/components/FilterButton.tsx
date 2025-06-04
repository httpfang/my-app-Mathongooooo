import React from 'react';
import { CaretDown } from '@phosphor-icons/react';

interface FilterButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  hasDropdown?: boolean;
  count?: number;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  children, 
  isActive = false, 
  onClick, 
  hasDropdown = false,
  count
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
      isActive
        ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400'
        : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
    }`}
  >
    <span>{children}</span>
    {hasDropdown && <CaretDown className="h-4 w-4" />}
    {count !== undefined && (
      <span className="ml-1 text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
        {count}
      </span>
    )}
  </button>
);

export default FilterButton; 