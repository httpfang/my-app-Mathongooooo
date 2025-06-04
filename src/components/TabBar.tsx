import React from 'react';
import { MathOperations } from 'phosphor-react';
import { Subject } from '../types';

interface TabBarProps {
  subjects: Subject[];
  activeSubject: string;
  setActiveSubject: (name: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ subjects, activeSubject, setActiveSubject }) => {
  const getShortName = (subjectName: string) => {
    if (subjectName === 'Physics PYQs') return 'Phy';
    if (subjectName === 'Chemistry PYQs') return 'Chem';
    if (subjectName === 'Mathematics PYQs') return 'Math';
    return subjectName;
  };

  const getTabIcon = (subjectName: string) => {
    if (subjectName === 'Physics PYQs') return <span className="text-orange-500">🧪</span>;
    if (subjectName === 'Chemistry PYQs') return <span className="text-green-500">⚛️</span>;
    if (subjectName === 'Mathematics PYQs') return <MathOperations weight="bold" className="text-blue-500" />;
    return null;
  };

  const getActiveColor = (subjectName: string) => {
    if (subjectName === 'Physics PYQs') return 'border-orange-500 text-orange-600';
    if (subjectName === 'Chemistry PYQs') return 'border-green-500 text-green-600';
    if (subjectName === 'Mathematics PYQs') return 'border-blue-500 text-blue-600';
    return 'border-blue-500 text-blue-600';
  };

  return (
    <div className="md:hidden bg-white  border-gray-200">
      <div className="flex">
        {subjects.map((subject) => {
          const isActive = subject.name === activeSubject;
          return (
            <button
              key={subject.name}
              onClick={() => setActiveSubject(subject.name)}
              className={`flex-1 flex flex-col items-center py-3 px-2 transition-colors relative ${
                isActive 
                  ? getActiveColor(subject.name)
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="mb-1">
                {getTabIcon(subject.name)}
              </div>
              <span className="text-sm font-medium">
                {getShortName(subject.name)}
              </span>
              {isActive && (
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  subject.name === 'Physics PYQs' ? 'bg-orange-500' :
                  subject.name === 'Chemistry PYQs' ? 'bg-green-500' :
                  'bg-blue-500'
                }`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar; 