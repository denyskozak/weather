import {z} from 'zod';
import {City, Unit} from '../types';

const basicURL = 'https://api.openweathermap.org/data/2.5';
const weatherEndpoint = `${basicURL}/weather`;

const fetchWeather = <T>(params: Record<string, T>) => {
    const {VITE_OPEN_WEATHER_MAP_API_KEY} = import.meta.env;
    const urlSearchParams = new URL(weatherEndpoint);
    const paramsWithApiKey = {...params, appid: VITE_OPEN_WEATHER_MAP_API_KEY};

    Object.entries(paramsWithApiKey).forEach(([key, value]) => {
        urlSearchParams.searchParams.append(key, value)
    });

    return fetch(urlSearchParams.toString()).then(res => res.json());
};

export const fetchWeatherByCity = async (
    city: City,
    units: Unit
) => {
    // For avoid wrong response data structure
    const weatherDataGuard =
        z.object({
            main: z.object({
                temp: z.number(),
            }),
        });

    const response = await fetchWeather({q: city, units});

    return weatherDataGuard.parse(response);
}