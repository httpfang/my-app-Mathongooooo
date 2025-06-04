import React from 'react';
import ChapterCard from './ChapterCard';
import { Chapter } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => (
  <div className="bg-gray-50 min-h-screen">
    <div className="px-3 md:px-6 py-4">
      <div className="mb-4">
        <p className="text-sm text-gray-600">Showing all chapters ({chapters.length})</p>
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