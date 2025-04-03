// Basic placeholder name generation logic
// TODO: Implement more sophisticated name generation based on traits

const nameParts = {
  playful: ["Zip", "Bounce", "Pounce", "Dash", "Wiggle"],
  cuddly: ["Snuggle", "Cuddle", "Muffin", "Cloud", "Marshmallow"],
  mischievous: ["Rascal", "Imp", "Shadow", "Bandit", "Slinky"],
  regal: ["King", "Queen", "Prince", "Duchess", "Majesty"],
  sleepy: ["Dozy", "Noodle", "Pillow", "Dreamy", "Yawn"],
  curious: ["Pixel", "Widget", "Snoop", "Quest", "Radar"],
};

const suffixes = ["paws", "tail", "whiskers", "bean", "fluff", "kins"];

type PersonalityTraits = {
  [key: string]: boolean;
};

export function generateCatNames(traits: PersonalityTraits, count: number = 5): string[] {
  const selectedTraits = Object.entries(traits)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const potentialNames: string[] = [];

  if (selectedTraits.length === 0) {
    // Default names if no traits selected
    potentialNames.push(...nameParts.playful, ...nameParts.cuddly);
  } else {
    selectedTraits.forEach(trait => {
      if (nameParts[trait]) {
        potentialNames.push(...nameParts[trait]);
      }
    });
  }

  // Add some combined names
  if (potentialNames.length > 1) {
     for (let i = 0; i < count * 2; i++) {
        const part1 = potentialNames[Math.floor(Math.random() * potentialNames.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        potentialNames.push(`${part1}${suffix}`);
     }
  }


  // Shuffle and take unique names
  const uniqueNames = Array.from(new Set(potentialNames))
                           .sort(() => 0.5 - Math.random()); // Shuffle

  return uniqueNames.slice(0, count);
}
