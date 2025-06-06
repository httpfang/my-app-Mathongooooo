import React, { useRef, useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Chapter } from '../types';
import FilterButton from './FilterButton';

interface FilterBarProps {
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
  chapters: Chapter[];
  selectedClasses: string[];
  selectedUnits: string[];
  onClassChange: (classes: string[]) => void;
  onUnitChange: (units: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeFilters, 
  toggleFilter, 
  chapters,
  selectedClasses,
  selectedUnits,
  onClassChange,
  onUnitChange
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Get unique classes and units
  const uniqueClasses = Array.from(new Set(chapters.map(ch => ch.class)));
  const uniqueUnits = Array.from(new Set(chapters.map(ch => ch.unit)));

  // Calculate filter counts
  const notStartedCount = chapters.filter(ch => ch.status === 'Not Started').length;
  const weakChaptersCount = chapters.filter(ch => ch.isWeakChapter).length;

  return (
    <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center px-4 py-3">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 -ml-1"
            aria-label="Scroll left"
          >
            <CaretLeft className="h-4 w-4" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 mx-1"
          >
            <div className="flex items-center gap-2 px-1">
              <div className="relative">
                <FilterButton 
                  hasDropdown 
                  isActive={selectedClasses.length > 0}
                  onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                >
                  Class {selectedClasses.length > 0 && `(${selectedClasses.length})`}
                </FilterButton>
                {isClassDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                    {uniqueClasses.map(cls => (
                      <label key={cls} className="flex items-center px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedClasses.includes(cls)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              onClassChange([...selectedClasses, cls]);
                            } else {
                              onClassChange(selectedClasses.filter(c => c !== cls));
                            }
                            setIsClassDropdownOpen(false);
                          }}
                          className="mr-2"
                        />
                        {cls}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <FilterButton 
                  hasDropdown 
                  isActive={selectedUnits.length > 0}
                  onClick={() => setIsUnitDropdownOpen(!isUnitDropdownOpen)}
                >
                  Units {selectedUnits.length > 0 && `(${selectedUnits.length})`}
                </FilterButton>
                {isUnitDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                    {uniqueUnits.map(unit => (
                      <label key={unit} className="flex items-center px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedUnits.includes(unit)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              onUnitChange([...selectedUnits, unit]);
                            } else {
                              onUnitChange(selectedUnits.filter(u => u !== unit));
                            }
                            setIsUnitDropdownOpen(false);
                          }}
                          className="mr-2"
                        />
                        {unit}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <FilterButton 
                isActive={activeFilters.includes('Not Started')}
                onClick={() => toggleFilter('Not Started')}
                count={notStartedCount}
              >
                Not Started
              </FilterButton>
              <FilterButton 
                isActive={activeFilters.includes('Weak Chapters')}
                onClick={() => toggleFilter('Weak Chapters')}
                count={weakChaptersCount}
              >
                Weak Chapters
              </FilterButton>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 -mr-1"
            aria-label="Scroll right"
          >
            <CaretRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <FilterButton 
              hasDropdown 
              isActive={selectedClasses.length > 0}
              onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
            >
              Class {selectedClasses.length > 0 && `(${selectedClasses.length})`}
            </FilterButton>
            {isClassDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                {uniqueClasses.map(cls => (
                  <label key={cls} className="flex items-center px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(cls)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onClassChange([...selectedClasses, cls]);
                        } else {
                          onClassChange(selectedClasses.filter(c => c !== cls));
                        }
                        setIsClassDropdownOpen(false);
                      }}
                      className="mr-2"
                    />
                    {cls}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <FilterButton 
              hasDropdown 
              isActive={selectedUnits.length > 0}
              onClick={() => setIsUnitDropdownOpen(!isUnitDropdownOpen)}
            >
              Units {selectedUnits.length > 0 && `(${selectedUnits.length})`}
            </FilterButton>
            {isUnitDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                {uniqueUnits.map(unit => (
                  <label key={unit} className="flex items-center px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedUnits.includes(unit)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onUnitChange([...selectedUnits, unit]);
                        } else {
                          onUnitChange(selectedUnits.filter(u => u !== unit));
                        }
                        setIsUnitDropdownOpen(false);
                      }}
                      className="mr-2"
                    />
                    {unit}
                  </label>
                ))}
              </div>
            )}
          </div>

          <FilterButton 
            isActive={activeFilters.includes('Not Started')}
            onClick={() => toggleFilter('Not Started')}
            count={notStartedCount}
          >
            Not Started
          </FilterButton>
          <FilterButton 
            isActive={activeFilters.includes('Weak Chapters')}
            onClick={() => toggleFilter('Weak Chapters')}
            count={weakChaptersCount}
          >
            Weak Chapters
          </FilterButton>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 