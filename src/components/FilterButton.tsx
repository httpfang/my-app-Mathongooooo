import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  hasDropdown?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  children, 
  isActive = false, 
  onClick, 
  hasDropdown = false 
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
    {hasDropdown && <ChevronDown className="w-4 h-4" />}
  </button>
);

export default FilterButton; 