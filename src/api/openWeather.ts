import {z} from 'zod';
import {City, Unit} from '../types';
import {units} from '../consts';
import {promiseDelay} from '../utilities';

const basicURL = 'https://api.openweathermap.org/data/2.5';
const weatherEndpoint = `${basicURL}/weather`;

// For avoid incorrect response data structure
const weatherDataGuard =
    z.object({
        main: z.object({
            temp: z.number(),
        }),
        sys: z.object({
            sunrise: z.number(),
            sunset: z.number(),
        }),
        weather: z.array(
            z.object({
                icon: z.string(),
                description: z.string(),
            })
        ),
    });

export type WeatherResponse = z.infer<typeof weatherDataGuard>;

const fetchWeather = <T>(params: Record<string, T>) => {
    const {VITE_OPEN_WEATHER_MAP_API_KEY} = import.meta.env;

    if (!VITE_OPEN_WEATHER_MAP_API_KEY) {
        const error = 'Need provide VITE_OPEN_WEATHER_MAP_API_KEY in .env.local';
        console.error(error);
        return Promise.reject(error)
    }
    const urlSearchParams = new URL(weatherEndpoint);
    const paramsWithApiKey = {...params, appid: VITE_OPEN_WEATHER_MAP_API_KEY};

    Object.entries(paramsWithApiKey).forEach(([key, value]) => {
        urlSearchParams.searchParams.append(key, value)
    });

    return fetch(urlSearchParams.toString()).then(res => res.json());
};

export const fetchWeatherByCity = async (
    city: City,
    unit: Unit
): Promise<WeatherResponse> => {
    const response = await fetchWeather({q: city, units: units[unit]});
    await promiseDelay(500);
    return weatherDataGuard.parse(response);
}