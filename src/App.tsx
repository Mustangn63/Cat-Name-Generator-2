import React, { useState, useCallback } from 'react';
import { Cat } from 'lucide-react';
import CatPersonalityForm from './components/CatPersonalityForm';
import NameSuggestions from './components/NameSuggestions';
import CatImage from './components/CatImage';
import { generateCatNames } from './services/nameGenerator';

type PersonalityTraits = {
  [key: string]: boolean;
};

function App() {
  const [traits, setTraits] = useState<PersonalityTraits>({});
  const [suggestedNames, setSuggestedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTraitChange = useCallback((trait: string, value: boolean) => {
    setTraits(prevTraits => ({
      ...prevTraits,
      [trait]: value,
    }));
  }, []);

  const handleGenerateNames = useCallback(() => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const names = generateCatNames(traits);
      setSuggestedNames(names);
      setIsLoading(false);
    }, 500); // 0.5 second delay
  }, [traits]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="flex items-center justify-center space-x-3 mb-2">
            <Cat size={40} className="text-brand-pink" />
            <span>Felineme</span>
          </h1>
          <p className="text-brand-gray-dark text-lg">Find the most unique name for your feline friend!</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <CatPersonalityForm
              traits={traits}
              onTraitChange={handleTraitChange}
              onSubmit={handleGenerateNames}
            />
            <NameSuggestions names={suggestedNames} isLoading={isLoading} />
          </div>
          <div className="sticky top-10">
             <CatImage />
          </div>
        </main>

        <footer className="text-center mt-16 text-brand-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Felineme. Made with 💖.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
