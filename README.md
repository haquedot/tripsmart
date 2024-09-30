<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TripSmart - A Smart Tourism Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            color: #333;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 2em;
            margin-top: 20px;
        }
        h3 {
            font-size: 1.5em;
            margin-top: 15px;
        }
        p {
            margin-bottom: 15px;
        }
        code {
            background: #eaeaea;
            padding: 2px 4px;
            border-radius: 4px;
        }
        ul {
            margin-left: 20px;
        }
        .code-block {
            background: #eaeaea;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        a {
            color: #2980b9;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <h1>TripSmart - A Smart Tourism Application</h1>

    <h2>Overview</h2>
    <p><strong>TripSmart</strong> is a smart tourism application that aims to simplify trip planning by providing travelers with relevant information based on their location, destination, and preferences. The application helps users find transportation options, suitable hotels, lodging, and essential services like pharmacies and hospitals. It also highlights popular tourist attractions and provides real-time updates on local amenities to enhance the travel experience.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Transportation Services</strong>: Displays options for transportation based on the trip's locations.</li>
        <li><strong>Accommodation Suggestions</strong>: Lists suitable hotels and lodging based on the destination.</li>
        <li><strong>Health & Safety Services</strong>: Provides nearby pharmacies, hospitals, and emergency services.</li>
        <li><strong>Tourist Attractions</strong>: Highlights popular places to visit in the selected area.</li>
        <li><strong>Local Amenities</strong>: Recommends nearby restaurants, events, and other useful services.</li>
        <li><strong>Real-Time Updates</strong>: Offers location-based updates and notifications for a smoother travel experience.</li>
    </ul>

    <h2>Technologies</h2>
    <h3>Frontend:</h3>
    <ul>
        <li><strong>Mobile App</strong>: React Native</li>
        <li><strong>Web App</strong>: Next.js</li>
    </ul>

    <h3>Backend:</h3>
    <ul>
        <li><strong>Node.js</strong> with <strong>Express.js</strong></li>
    </ul>

    <h3>Database:</h3>
    <ul>
        <li><strong>MongoDB</strong></li>
    </ul>

    <h3>APIs:</h3>
    <ul>
        <li><strong>Google Maps API</strong>: For map-based services.</li>
        <li><strong>OpenWeatherMap API</strong>: For real-time weather updates.</li>
        <li><strong>IRCTC API</strong>: For railway information.</li>
        <li><strong>RedBus API</strong>: For bus booking and transportation details.</li>
        <li><strong>Zomato API</strong>: For restaurant and food recommendations.</li>
        <li><strong>Justdial API</strong>: For local services like shopping and entertainment.</li>
        <li><strong>Practo API</strong>: For health-related services and nearby hospitals.</li>
    </ul>

    <h3>Deployment:</h3>
    <ul>
        <li><strong>Web App</strong>: Vercel</li>
        <li><strong>Mobile App</strong>: Google Play Store</li>
    </ul>

    <h3>Version Control:</h3>
    <ul>
        <li><strong>Git</strong> with <strong>GitHub</strong> for collaboration and source control.</li>
    </ul>

    <h2>Requirements</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li><strong>Node.js</strong> (v16.x.x or higher)</li>
        <li><strong>npm</strong> (v7.x.x or higher) or <strong>yarn</strong></li>
        <li><strong>MongoDB</strong> instance (local or cloud)</li>
        <li><strong>Google Maps API key</strong></li>
        <li><strong>OpenWeatherMap API key</strong></li>
        <li>API keys for <strong>IRCTC</strong>, <strong>RedBus</strong>, <strong>Zomato</strong>, <strong>Justdial</strong>, and <strong>Practo</strong></li>
    </ul>

    <h2>Running the Web App</h2>

    <h3>Step 1: Clone the Repository</h3>
    <div class="code-block">
        <code>git clone https://github.com/username/tripsmart.git</code><br>
        <code>cd tripsmart</code>
    </div>

    <h3>Step 2: Install Dependencies</h3>
    <div class="code-block">
        <code>npm install</code>  <br> 
        <code>yarn install</code>
    </div>

    <h3>Step 3: Set Environment Variables</h3>
    <p>Create a <code>.env.local</code> file in the root of the project and add the necessary environment variables for API keys and the MongoDB connection:</p>
    <div class="code-block">
        <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key</code><br>
        <code>NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key</code><br>
        <code>MONGODB_URI=your_mongodb_connection_string</code>
    </div>

    <h3>Step 4: Run the Development Server</h3>
    <div class="code-block">
        <code>npm run dev</code><br>
        <code>yarn dev</code>
    </div>
    <p>The app should now be running at <code>http://localhost:3000</code>.</p>

    <h3>Step 5: Build for Production (Optional)</h3>
    <div class="code-block">
        <code>npm run build</code><br>
        <code>yarn build</code>
    </div>
    <p>After building, you can start the production server using:</p>
    <div class="code-block">
        <code>npm run start</code><br>
        <code>yarn start</code>
    </div>

    <h3>Step 6: Deploy</h3>
    <p>For deployment to <strong>Vercel</strong>, simply push the repository to a GitHub account connected to Vercel, and the platform will handle the deployment automatically. Ensure the environment variables are configured in the Vercel project settings.</p>

    <h2>How to Contribute</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a feature branch:
            <div class="code-block">
                <code>git checkout -b feature-branch-name</code>
            </div>
        </li>
        <li>Commit your changes:
            <div class="code-block">
                <code>git commit -m 'Add some feature'</code>
            </div>
        </li>
        <li>Push to the branch:
            <div class="code-block">
                <code>git push origin feature-branch-name</code>
            </div>
        </li>
        <li>Open a pull request.</li>
    </ol>

    <h2>Bibliography</h2>
    <ul>
        <li><a href="https://reactnative.dev/docs/getting-started">React Native Documentation</a></li>
        <li><a href="https://nextjs.org/docs/getting-started">Next.js Documentation</a></li>
        <li><a href="https://docs.mongodb.com/">MongoDB Documentation</a></li>
        <li><a href="https://developers.google.com/maps/documentation">Google Maps API Documentation</a></li>
        <li><a href="https://openweathermap.org/api">OpenWeatherMap API Documentation</a></li>
        <li><a href="https://www.redbus.in/info/developer">RedBus API Documentation</a></li>
        <li><a href="https://developers.zomato.com/documentation">Zomato API Documentation</a></li>
        <li><a href="https://www.justdial.com/">Justdial API Documentation</a></li>
        <li><a href="https://www.practo.com/healthcare-api">Practo API Documentation</a></li>
    </ul>

</body>
</html>
