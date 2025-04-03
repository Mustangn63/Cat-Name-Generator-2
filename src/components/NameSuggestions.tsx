import React from 'react';
import { Sparkles } from 'lucide-react';

interface NameSuggestionsProps {
  names: string[];
  isLoading: boolean;
}

const NameSuggestions: React.FC<NameSuggestionsProps> = ({ names, isLoading }) => {
  return (
    <div className="card w-full">
      <h2 className="text-center mb-4 flex items-center justify-center space-x-2">
        <Sparkles className="text-brand-pink" />
        <span>Felineme Name Ideas</span>
      </h2>
      {isLoading ? (
        <div className="text-center text-brand-gray">Generating names...</div>
      ) : names.length > 0 ? (
        <ul className="space-y-2">
          {names.map((name, index) => (
            <li
              key={index}
              className="bg-brand-pink-light p-3 rounded-md text-brand-gray-dark font-medium text-center shadow-sm hover:bg-pink-200 transition-colors"
            >
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-brand-gray">Select some traits to get name suggestions!</p>
      )}
    </div>
  );
};

export default NameSuggestions;
