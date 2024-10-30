//  Weather component

import React from 'react';
import { FaTemperatureHigh, FaWind } from 'react-icons/fa';

interface WeatherProps {
    data: {
        name?: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
        }[];
        wind: {
            speed: number;
        };
    };
}

export const Weather: React.FC<WeatherProps> = ({ data }) => {
    return (
        <div className="bg-pink-50 p-5 rounded-lg">
            <div className="flex items-center justify-between gap-6 md:gap-12">
                <h2 className="text-2xl font-bold">{data.name}</h2>
                <p className="text-gray-500 m-0">{data.weather[0].description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <FaTemperatureHigh className="text-red-500" />
                    <p>{data.main.temp}°C</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaWind className="text-blue-500" />
                    <p>{data.wind.speed}m/s</p>
                </div>
            </div>
        </div>
    );
};