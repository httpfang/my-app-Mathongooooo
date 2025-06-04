import React from 'react';
import { MathOperations, ArrowLeft } from 'phosphor-react';
import Image from 'next/image';

interface CombinedHeaderProps {
  activeSubject: string;
}

const CombinedHeader: React.FC<CombinedHeaderProps> = ({ activeSubject }) => {
  let icon: React.ReactNode = '🧪';
  let heading = 'Physics PYQs';
  let description = 'Chapter-wise Collection of Physics PYQs';
  if (activeSubject === 'Chemistry PYQs') {
    icon = '🧪';
    heading = 'Chemistry PYQs';
    description = 'Chapter-wise Collection of Chemistry PYQs';
  } else if (activeSubject === 'Mathematics PYQs') {
    icon = <MathOperations weight="bold" />;
    heading = 'Mathematics PYQs';
    description = 'Chapter-wise Collection of Mathematics PYQs';
  }
  
  return (
    <div className="bg-white  border-gray-200">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3 flex items-center">
        <ArrowLeft className="w-6 h-6 text-gray-600 mr-3" />
        <h1 className="text-lg font-semibold text-gray-900">JEE Main</h1>
      </div>
      
      {/* Desktop Header */}
      <div className="hidden md:block px-6 py-4">
        <div className="flex items-center justify-center relative">
          {/* JEE Main Section (left) */}
          <div className="absolute left-0 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
              <Image src="/exam logo.png" alt="JEE Main Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">JEE Main</h1>
              <p className="text-sm text-gray-500">2025 - 2009 | 173 Papers | 15825 Qs</p>
            </div>
          </div>
          {/* Subject Section (centered) */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-1">
              <span className="text-white text-sm">{icon}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedHeader; 