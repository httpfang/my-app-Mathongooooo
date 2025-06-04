import React from 'react';
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import { Chapter } from '../types';

const getChapterIcon = (name: string) => {
  if (/gravitation/i.test(name)) return <span className="text-orange-500">🪐</span>;
  if (/math/i.test(name)) return <span className="text-blue-500">∫</span>;
  if (/units/i.test(name)) return <span className="text-green-500">📐</span>;
  if (/motion in one/i.test(name)) return <span className="text-gray-500">←</span>;
  if (/motion in two/i.test(name)) return <span className="text-gray-500">↗</span>;
  if (/laws of motion/i.test(name)) return <span className="text-gray-500">⚖️</span>;
  if (/work.*power.*energy/i.test(name)) return <span className="text-blue-500">⚡</span>;
  if (/center.*mass/i.test(name)) return <span className="text-blue-500">🎯</span>;
  if (/rotational/i.test(name)) return <span className="text-blue-500">🔄</span>;
  if (/mechanical.*properties.*solids/i.test(name)) return <span className="text-blue-500">🔧</span>;
  if (/mechanical.*properties.*fluids/i.test(name)) return <span className="text-blue-500">💧</span>;
  return <span className="text-gray-400">📘</span>;
};

const getTrendIcon = (trend: number) => {
  if (trend > 0) {
    return <CaretUp className="h-4 w-4" />;
  } else if (trend < 0) {
    return <CaretDown className="h-4 w-4" />;
  }
  return null;
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Not Started':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Not Started</span>;
    case 'In Progress':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">In Progress</span>;
    case 'Completed':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Completed</span>;
    default:
      return null;
  }
};

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const year2025 = chapter.yearWiseQuestionCount["2025"] || 0;
  const year2024 = chapter.yearWiseQuestionCount["2024"] || 0;
  const trend = year2025 - year2024;
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce((a, b) => a + b, 0);
  
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4 hover:shadow-sm dark:hover:shadow-gray-900/50 transition-shadow cursor-pointer">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start justify-between">
          {/* Left side - Icon, Title, and Year Data */}
          <div className="flex items-start space-x-3 flex-1">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              {getChapterIcon(chapter.chapter)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 dark:text-white text-base mb-1">{chapter.chapter}</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                <span>2025: {year2025}Qs</span>
                {getTrendIcon(trend)}
                <span className="text-gray-400 dark:text-gray-500 mx-2">|</span>
                <span>2024: {year2024}Qs</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Status and Total Questions */}
          <div className="flex flex-col items-end space-y-1">
            {getStatusBadge(chapter.status)}
            <div className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
              {chapter.questionSolved}/{totalQuestions} Qs
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              {getChapterIcon(chapter.chapter)}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white text-base">{chapter.chapter}</h3>
              <div className="flex items-center space-x-2 mt-1">
                {getStatusBadge(chapter.status)}
                {chapter.isWeakChapter && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                    Weak Chapter
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <span>2025: {year2025}Qs</span>
              {getTrendIcon(trend)}
            </div>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <span className="text-gray-600 dark:text-gray-400">2024: {year2024}Qs</span>
            <span className="font-medium text-gray-800 dark:text-gray-200">{chapter.questionSolved}/{totalQuestions} Qs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard; 