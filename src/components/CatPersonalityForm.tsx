import React from 'react';
import { PawPrint } from 'lucide-react';

interface CatPersonalityFormProps {
  traits: { [key: string]: boolean };
  onTraitChange: (trait: string, value: boolean) => void;
  onSubmit: () => void;
}

const availableTraits = [
  { id: 'playful', label: 'Playful', icon: '⚽' },
  { id: 'cuddly', label: 'Cuddly', icon: '💖' },
  { id: 'mischievous', label: 'Mischievous', icon: '😼' },
  { id: 'regal', label: 'Regal', icon: '👑' },
  { id: 'sleepy', label: 'Sleepy', icon: '😴' },
  { id: 'curious', label: 'Curious', icon: '🔍' },
];

const CatPersonalityForm: React.FC<CatPersonalityFormProps> = ({ traits, onTraitChange, onSubmit }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    onTraitChange(name, checked);
  };

  return (
    <div className="card w-full">
      <h2 className="text-center mb-6">Describe Your Cat's Personality</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {availableTraits.map((trait) => (
            <label
              key={trait.id}
              className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                traits[trait.id]
                  ? 'bg-brand-pink-light border-brand-pink text-brand-pink-dark font-medium'
                  : 'bg-white border-brand-gray-light hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                name={trait.id}
                checked={traits[trait.id] || false}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-brand-pink rounded focus:ring-brand-pink border-gray-300"
              />
              <span className="text-sm">{trait.icon} {trait.label}</span>
            </label>
          ))}
        </div>
        <button type="submit" className="w-full flex items-center justify-center space-x-2">
          <PawPrint size={20} />
          <span>Generate Names</span>
        </button>
      </form>
    </div>
  );
};

export default CatPersonalityForm;
