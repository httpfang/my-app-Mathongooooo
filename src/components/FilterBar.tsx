import React, { useRef } from 'react';
import FilterButton from './FilterButton';
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface FilterBarProps {
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilters, toggleFilter }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -120, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white  border-gray-200">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center px-3 py-3">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 -ml-1"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Scrollable Filter Container */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 mx-1"
          >
            <div className="flex items-center gap-2 px-1">
              <FilterButton hasDropdown>Class</FilterButton>
              <FilterButton hasDropdown>Units</FilterButton>
              <FilterButton 
                isActive={activeFilters.includes('Not Started')}
                onClick={() => toggleFilter('Not Started')}
              >
                Not Started
              </FilterButton>
              <FilterButton 
                isActive={activeFilters.includes('Weak Chapters')}
                onClick={() => toggleFilter('Weak Chapters')}
              >
                Weak Chapters
              </FilterButton>
              
              {/* Sort Button for Mobile */}
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap px-3 py-2 rounded-lg border border-gray-300 bg-white">
                <ArrowUp className="w-4 h-4" />
                <ArrowDown className="w-4 h-4" />
                <span>Sort</span>
              </button>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 -mr-1"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <FilterButton hasDropdown>Class</FilterButton>
          <FilterButton hasDropdown>Units</FilterButton>
          <FilterButton 
            isActive={activeFilters.includes('Not Started')}
            onClick={() => toggleFilter('Not Started')}
          >
            Not Started
          </FilterButton>
          <FilterButton 
            isActive={activeFilters.includes('Weak Chapters')}
            onClick={() => toggleFilter('Weak Chapters')}
          >
            Weak Chapters
          </FilterButton>
        </div>
        
        {/* Sort Button for Desktop */}
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap">
          <ArrowUp className="w-4 h-4" />
          <ArrowDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar; 