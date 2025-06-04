"use client";

import React, { useState } from 'react';
import chaptersData from '@/lib/chapters';
import { MathOperations } from 'phosphor-react';
import CombinedHeader from '../components/CombinedHeader';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import FilterBar from '../components/FilterBar';
import ChapterList from '../components/ChapterList';
import { Subject } from '../types';

const subjects: Subject[] = [
  { name: 'Physics PYQs', icon: <span className="text-orange-500">🧪</span>, color: 'bg-orange-500', isActive: true },
  { name: 'Chemistry PYQs', icon: <span className="text-green-500">🧪</span>, color: 'bg-green-500', isActive: false },
  { name: 'Mathematics PYQs', icon: <MathOperations weight="bold" />, color: 'bg-blue-500', isActive: false }
];

const JEEMainPYQsInterface: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Weak Chapters']);
  const [activeSubject, setActiveSubject] = useState<string>('Physics PYQs');

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Filtering logic
  let filteredChapters = chaptersData;
  if (activeSubject === 'Physics PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'physics');
  } else if (activeSubject === 'Chemistry PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'chemistry');
  } else if (activeSubject === 'Mathematics PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'mathematics');
  }
  if (activeFilters.includes('Not Started')) {
    filteredChapters = filteredChapters.filter(ch => ch.status === 'Not Started');
  }
  if (activeFilters.includes('Weak Chapters')) {
    filteredChapters = filteredChapters.filter(ch => ch.isWeakChapter);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CombinedHeader activeSubject={activeSubject} />
      <TabBar 
        subjects={subjects} 
        activeSubject={activeSubject} 
        setActiveSubject={setActiveSubject} 
      />
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        <FilterBar activeFilters={activeFilters} toggleFilter={toggleFilter} />
        <ChapterList chapters={filteredChapters} />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar subjects={subjects} activeSubject={activeSubject} setActiveSubject={setActiveSubject} />
        <div className="flex-1">
          <FilterBar activeFilters={activeFilters} toggleFilter={toggleFilter} />
          <ChapterList chapters={filteredChapters} />
        </div>
      </div>
    </div>
  );
};

export default JEEMainPYQsInterface;