import React from 'react';
import SidebarItem from './SidebarItem';
import { Subject } from '../types';

interface SidebarProps {
  subjects: Subject[];
  activeSubject: string;
  setActiveSubject: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ subjects, activeSubject, setActiveSubject }) => (
  <div className="hidden md:block w-80 bg-white dark:bg-gray-800 p-4 space-y-2">
    {subjects.map((subject, index) => (
      <SidebarItem
        key={index}
        subject={{ ...subject, isActive: subject.name === activeSubject }}
        onClick={() => setActiveSubject(subject.name)}
      />
    ))}
  </div>
);

export default Sidebar; 