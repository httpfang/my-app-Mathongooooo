import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Subject } from '../types';

interface SidebarItemProps {
  subject: Subject;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ subject, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
      subject.isActive 
        ? 'bg-black dark:bg-white text-white dark:text-black' 
        : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
    }`}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs ${subject.color}`}>{subject.icon}</div>
      <span className="font-medium">{subject.name}</span>
    </div>
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default SidebarItem; 