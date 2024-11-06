import React, { useEffect, useState } from 'react';
import { FaTemperatureHigh, FaWind, FaMapMarkerAlt } from 'react-icons/fa';

interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        feelslike_c: number;
    };
}

const Weather: React.FC<{ city: string }> = ({ city }) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`/api/weather?city=${city}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError("Could not fetch weather data");
            }
        };
        fetchWeather();
    }, [city]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <div className="bg-gradient-to-r from-pink-50 to-indigo-200 p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4 text-gray-800">
                <FaMapMarkerAlt className="text-xl text-blue-500" />
                <h2 className="text-xl font-semibold">
                    {data.location.name}, {data.location.region}, {data.location.country}
                </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="flex items-end gap-4">
                    <img src={data.current.condition.icon} alt={data.current.condition.text} className="w-20 h-20" />
                    <div>
                        <p className="text-4xl font-bold">{data.current.temp_c}°C</p>
                        <p className="text-lg text-gray-700">{data.current.condition.text}</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                        <FaTemperatureHigh className="text-red-500" />
                        <p>Feels like: <span className="font-medium">{data.current.feelslike_c}°C</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaWind className="text-blue-500" />
                        <p>Wind: <span className="font-medium">{data.current.wind_kph} kph {data.current.wind_dir}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-medium text-blue-600">Humidity: <span>{data.current.humidity}%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
