import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
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
  if (trend > 0) return <ArrowUp className="w-4 h-4 text-green-500 inline" />;
  if (trend < 0) return <ArrowDown className="w-4 h-4 text-red-500 inline" />;
  return null;
};

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const year2025 = chapter.yearWiseQuestionCount["2025"] || 0;
  const year2024 = chapter.yearWiseQuestionCount["2024"] || 0;
  const trend = year2025 - year2024;
  
  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start justify-between">
          {/* Left side - Icon, Title, and Year Data */}
          <div className="flex items-start space-x-3 flex-1">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              {getChapterIcon(chapter.chapter)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-base mb-1">{chapter.chapter}</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <span>2025: {year2025}Qs</span>
                {getTrendIcon(trend)}
                <span className="text-gray-400 mx-2">|</span>
                <span>2024: {year2024}Qs</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Total Questions */}
          <div className="text-sm font-medium text-gray-800 whitespace-nowrap ml-4">
            {chapter.questionSolved}/205 Qs
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              {getChapterIcon(chapter.chapter)}
            </div>
            <h3 className="font-medium text-gray-900 text-base">{chapter.chapter}</h3>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <span>2025: {year2025}Qs</span>
              {getTrendIcon(trend)}
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">2024: {year2024}Qs</span>
            <span className="font-medium text-gray-800">{chapter.questionSolved}/205 Qs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard; 