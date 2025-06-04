import React from 'react';
import ChapterCard from './ChapterCard';
import { Chapter } from '../types';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface ChapterListProps {
  chapters: Chapter[];
  sortOrder: 'asc' | 'desc';
  toggleSortOrder: () => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, sortOrder, toggleSortOrder }) => (
  <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div className="px-3 md:px-6 py-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">Showing all chapters ({chapters.length})</p>
        <button
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm whitespace-nowrap"
          onClick={toggleSortOrder}
        >
          {sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>Sort</span>
        </button>
      </div>
      <div className="space-y-3">
        {chapters.map((chapter, idx) => (
          <ChapterCard key={idx} chapter={chapter} />
        ))}
      </div>
    </div>
  </div>
);

export default ChapterList; 