//  Weather component

import React from 'react';
import Image from 'next/image';
import { FaCloud, FaTemperatureHigh, FaWind } from 'react-icons/fa';

interface WeatherProps {
    data: {
        name: string;
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
        <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{data.name}</h2>
                <p className="text-gray-500">{data.weather[0].description}</p>
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