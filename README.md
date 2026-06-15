# 🚗 Waygo - The Ultimate Road Trip Companion

Waygo is a social road trip planning app that connects travelers with curated driving routes, community experiences, and real-time travel companionship across the globe.

## 🌍 Features

### Core Features
- **Curated Driving Routes** - World-class routes with detailed stop recommendations
- **Smart Route Filtering** - Find trips by travel style (family, camping, solo, group, car enthusiasts)
- **Trip Budget Calculator** - Input your budget, get matched routes
- **Rich Stop Recommendations** - Restaurants, accommodations, attractions, scenic viewpoints
- **Social Trip Posting** - Share completed trips, ratings, and reviews
- **Live Community Map** - See where others are traveling in real-time
- **Friend Discovery** - Connect with travelers on similar routes

### Trip Categories
- 👨‍👩‍👧‍👦 Family trips with kids
- ⛺ Camping adventures
- 🏍️ Solo travel
- 👥 Group car trips
- 🏔️ Mountain & scenic tours
- 🏎️ Car enthusiast meetups & cruises
- 🎿 Alpine & ski region routes

## 🏗️ Tech Stack

### Frontend
- React 18 + TypeScript
- Tailwind CSS for styling
- Mapbox GL JS for interactive maps
- Redux for state management
- Axios for HTTP requests
- React Query for server state

### Backend
- Node.js + Express
- TypeScript
- PostgreSQL with Prisma ORM
- Socket.io for real-time features
- JWT authentication
- Multer for image uploads

### DevOps
- Docker for containerization
- GitHub Actions for CI/CD
- Fly.io or Vercel for deployment

## 📁 Project Structure

```
waygo/
├── apps/
│   ├── web/              # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── store/
│   │   │   └── types/
│   │   └── package.json
│   └── api/              # Express backend
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── middleware/
│       │   ├── services/
│       │   └── types/
│       ├── prisma/
│       └── package.json
├── docs/
├── docker-compose.yml
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/oliverostrem-coder/waygo.git
cd waygo

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Setup database
npm run db:setup
npm run db:migrate

# Start development servers
npm run dev
```

## 📊 Database Schema

- **Users** - Profiles, authentication, preferences
- **Routes** - Global road trip routes with metadata
- **Stops** - Individual stops on routes (restaurants, accommodations, attractions)
- **Trips** - User-created instances of routes
- **Reviews** - Ratings and feedback on completed trips
- **Friends** - Social connections between users
- **LiveLocation** - Real-time traveler locations
- **Photos** - Trip photos and reviews

## 🔗 API Endpoints

### Routes
- `GET /api/routes` - List all routes
- `GET /api/routes/:id` - Get route details
- `POST /api/routes` - Create new route (admin)
- `GET /api/routes/search` - Search routes by filters

### Trips
- `POST /api/trips` - Start a new trip
- `GET /api/trips/:id` - Get trip details
- `PATCH /api/trips/:id` - Update trip progress
- `POST /api/trips/:id/complete` - Complete and review trip

### Social
- `GET /api/users/:id` - User profile
- `POST /api/users/:id/friends` - Add friend
- `GET /api/feed` - Social feed
- `GET /api/live-map` - Live traveler locations

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for road trip enthusiasts worldwide**
