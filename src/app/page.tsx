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
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Filtering logic
  let filteredChapters = chaptersData;
  
  // Filter by subject
  if (activeSubject === 'Physics PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'physics');
  } else if (activeSubject === 'Chemistry PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'chemistry');
  } else if (activeSubject === 'Mathematics PYQs') {
    filteredChapters = filteredChapters.filter(ch => ch.subject.toLowerCase() === 'mathematics');
  }

  // Filter by class
  if (selectedClasses.length > 0) {
    filteredChapters = filteredChapters.filter(ch => selectedClasses.includes(ch.class));
  }

  // Filter by unit
  if (selectedUnits.length > 0) {
    filteredChapters = filteredChapters.filter(ch => selectedUnits.includes(ch.unit));
  }

  // Filter by status
  if (activeFilters.includes('Not Started')) {
    filteredChapters = filteredChapters.filter(ch => ch.status === 'Not Started');
  }

  // Filter by weak chapters
  if (activeFilters.includes('Weak Chapters')) {
    filteredChapters = filteredChapters.filter(ch => ch.isWeakChapter);
  }

  // Sort chapters alphabetically by chapter name
  const sortedChapters = [...filteredChapters].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.chapter.localeCompare(b.chapter);
    } else {
      return b.chapter.localeCompare(a.chapter);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CombinedHeader activeSubject={activeSubject} />
      <TabBar 
        subjects={subjects} 
        activeSubject={activeSubject} 
        setActiveSubject={setActiveSubject} 
      />
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        <FilterBar 
          activeFilters={activeFilters} 
          toggleFilter={toggleFilter}
          chapters={filteredChapters}
          selectedClasses={selectedClasses}
          selectedUnits={selectedUnits}
          onClassChange={setSelectedClasses}
          onUnitChange={setSelectedUnits}
        />
        <ChapterList 
          chapters={sortedChapters} 
          sortOrder={sortOrder} 
          toggleSortOrder={toggleSortOrder} 
        />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar subjects={subjects} activeSubject={activeSubject} setActiveSubject={setActiveSubject} />
        <div className="flex-1">
          <FilterBar 
            activeFilters={activeFilters} 
            toggleFilter={toggleFilter}
            chapters={filteredChapters}
            selectedClasses={selectedClasses}
            selectedUnits={selectedUnits}
            onClassChange={setSelectedClasses}
            onUnitChange={setSelectedUnits}
          />
          <ChapterList 
            chapters={sortedChapters} 
            sortOrder={sortOrder} 
            toggleSortOrder={toggleSortOrder} 
          />
        </div>
      </div>
    </div>
  );
};

export default JEEMainPYQsInterface;