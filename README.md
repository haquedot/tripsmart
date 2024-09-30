# TripSmart - A Smart Tourism Application

<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">

## Overview
<strong>TripSmart</strong> is a smart tourism application that aims to simplify trip planning by providing travelers with relevant information based on their location, destination, and preferences. The application helps users find transportation options, suitable hotels, lodging, and essential services like pharmacies and hospitals. It also highlights popular tourist attractions and provides real-time updates on local amenities to enhance the travel experience.

## Features
<ul>
    <li><strong>Transportation Services</strong>: Displays options for transportation based on the trip's locations.</li>
    <li><strong>Accommodation Suggestions</strong>: Lists suitable hotels and lodging based on the destination.</li>
    <li><strong>Health & Safety Services</strong>: Provides nearby pharmacies, hospitals, and emergency services.</li>
    <li><strong>Tourist Attractions</strong>: Highlights popular places to visit in the selected area.</li>
    <li><strong>Local Amenities</strong>: Recommends nearby restaurants, events, and other useful services.</li>
    <li><strong>Real-Time Updates</strong>: Offers location-based updates and notifications for a smoother travel experience.</li>
</ul>

## Technologies

### Frontend:
- **Web App**: Next.js

### Backend:
- **Node.js** with **Express.js**

### Database:
- **MongoDB**

### APIs:
- **Google Maps API**: For map-based services.
- **OpenWeatherMap API**: For real-time weather updates.
- **IRCTC API**: For railway information.
- **RedBus API**: For bus booking and transportation details.
- **Zomato API**: For restaurant and food recommendations.
- **Justdial API**: For local services like shopping and entertainment.
- **Practo API**: For health-related services and nearby hospitals.

### Deployment:
- **Web App**: Vercel

### Version Control:
- **Git** with **GitHub** for collaboration and source control.

## Requirements

### Prerequisites
- **Node.js** (v16.x.x or higher)
- **npm** (v7.x.x or higher) or **yarn**
- **MongoDB** instance (local or cloud)
- **Google Maps API key**
- **OpenWeatherMap API key**
- API keys for **IRCTC**, **RedBus**, **Zomato**, **Justdial**, and **Practo**

## Running the Web App

### Step 1: Clone the Repository
```bash
git clone https://github.com/haquedot/tripsmart.git
cd tripsmart
```

Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

Step 3: Set Environment Variables
Create a .env.local file in the root of the project and add the necessary environment variables for API keys and the MongoDB connection:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key
MONGODB_URI=your_mongodb_connection_string
```

Step 4: Run the Development Server
```bash
npm run dev
# or
yarn dev
```

## Bibliography
- **React Native Documentation**
- **Next.js Documentation**
- **MongoDB Documentation**
- **Google Maps API Documentation**
- **OpenWeatherMap API Documentation**
- **RedBus API Documentation**
- **Zomato API Documentation
- **Justdial API Documentation**
- **Practo API Documentation**
</div>


