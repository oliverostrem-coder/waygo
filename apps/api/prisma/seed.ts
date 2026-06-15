import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const routes = [
  {
    title: 'Swiss Alps',
    description: 'Spectacular drive through the Swiss Alps with amazing views',
    country: 'Switzerland',
    distance: 350,
    estimatedHours: 14,
    difficulty: 'moderate',
    tripTypes: ['scenic', 'family'],
    season: ['summer', 'fall'],
    costPerDay: 150,
    highlights: ['Mountain Passes', 'Alpine Lakes', 'Scenic Villages'],
  },
  {
    title: 'Fjord-Norge',
    description: 'Stunning fjord landscapes through Norway',
    country: 'Norway',
    distance: 500,
    estimatedHours: 20,
    difficulty: 'easy',
    tripTypes: ['scenic', 'family', 'photography'],
    season: ['summer'],
    costPerDay: 180,
    highlights: ['Geirangerfjord', 'Sognefjord', 'Coastal Views'],
  },
  {
    title: 'Patagonia',
    description: 'Remote wilderness in Argentina and Chile',
    country: 'Argentina/Chile',
    distance: 800,
    estimatedHours: 32,
    difficulty: 'hard',
    tripTypes: ['adventure', 'camping', 'photography'],
    season: ['summer', 'fall'],
    costPerDay: 120,
    highlights: ['Torres del Paine', 'Glacier Views', 'Mountain Peaks'],
  },
  {
    title: 'Ring Road',
    description: 'Complete circle journey around Iceland',
    country: 'Iceland',
    distance: 1339,
    estimatedHours: 56,
    difficulty: 'moderate',
    tripTypes: ['scenic', 'family', 'adventure'],
    season: ['summer'],
    costPerDay: 160,
    highlights: ['Waterfalls', 'Geysers', 'Black Sand Beaches', 'Glaciers'],
  },
  {
    title: 'Pacific Coast Highway',
    description: 'Iconic coastal drive along California',
    country: 'USA',
    distance: 650,
    estimatedHours: 24,
    difficulty: 'easy',
    tripTypes: ['scenic', 'family', 'photography'],
    season: ['spring', 'summer', 'fall'],
    costPerDay: 140,
    highlights: ['Big Sur', 'Santa Monica', 'Coastal Cliffs'],
  },
];

async function main() {
  console.log('Seeding routes...');

  for (const route of routes) {
    const created = await prisma.route.create({
      data: {
        title: route.title,
        description: route.description,
        country: route.country,
        distance: route.distance,
        estimatedHours: route.estimatedHours,
        difficulty: route.difficulty,
        tripTypes: route.tripTypes,
        costPerDay: route.costPerDay,
        highlights: route.highlights,
      },
    });

    console.log(`✓ Created route: ${created.title}`);
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
