// src/app/api/weather/route.ts

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get('city');

    if (!city) {
        return NextResponse.json({ error: "City parameter is required" }, { status: 400 });
    }

    const apiKey = process.env.WEATHERAPI_KEY;

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
                key: apiKey,
                q: city,
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: "Error fetching weather data" }, { status: 500 });
    }
}
