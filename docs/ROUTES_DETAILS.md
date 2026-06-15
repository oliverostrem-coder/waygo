# Waygo Routes Database

## Route Structure

Each route contains:
- Title & Description
- Country/Region
- Distance (km)
- Estimated Duration (hours)
- Difficulty Level (Easy/Moderate/Hard)
- Trip Types (Family, Camping, Solo, Group, Sports, Scenic)
- Season Recommendations
- Cost per Day (Estimated)
- Highlights & Best Features
- Multiple Stops with Details

## Stop Types Included
- Scenic Viewpoints
- Restaurants & Dining
- Accommodations
- Activities & Attractions
- Gas Stations & Rest Areas
- Photography Spots
- Mountain Tours
- Water Activities
- Cultural Sites
- Family Attractions

## Route Categories

### Family-Friendly Routes (25)
Designed for travelers with children. Include:
- Kid-friendly accommodations
- Family restaurants
- Safe rest areas
- Entertainment stops
- Child-appropriate activities

Examples: Great Ocean Road, Ring Road, Icefields Parkway

### Adventure & Camping Routes (30)
Perfect for outdoor enthusiasts. Include:
- Campground locations
- Hiking trail access
- Mountain passes
- Remote wilderness areas
- Adventure activities

Examples: Carretera Austral, Patagonia, Leh-Ladakh

### Scenic & Photography Routes (25)
Designed for photographers. Include:
- Sunrise/sunset spots
- Professional photo locations
- Weather considerations
- Best time to visit
- Equipment recommendations

Examples: Swiss Alps, Dolomites, Norwegian Fjords

### Sports & Thrill Routes (15)
For adrenaline seekers. Include:
- Road condition details
- Curves & technical sections
- Car meets locations
- Speed-friendly roads
- Racing events

Examples: Stelvio Pass, Nürburgring approaches, Karakoram Highway

### Cultural & Historical Routes (5)
For history enthusiasts. Include:
- Historical sites
- Cultural landmarks
- Museum locations
- Local cuisine stops
- Historical context

Examples: Romantische Straße, Loire Valley, Ancient Greece Circuit

## Database Seeding

Use the seed script to populate all 100 routes:
```bash
cd apps/api
npm run db:seed
```

This will create:
- 100 complete routes with metadata
- 500+ individual stops
- Sample reviews and ratings
- Demo user accounts
