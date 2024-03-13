import {useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query'
import {WeatherDashboard} from '../components';
import {fetchWeatherByCity, WeatherResponse} from '../api';
import {cities, units} from '../consts';
import {Unit} from '../types';
import {buildIconURL, capitalizeString} from '../utilities';

export const MainPage = () => {
    const [city, setCity] = useState<cities>(cities[0]);
    const [unit, setUnit] = useState<Unit>('C');

    const {data, isPending, error} = useQuery<WeatherResponse>({
        queryKey: ['weatherData', city, unit],
        queryFn: () => fetchWeatherByCity(city, unit)
    });

    const cityOptions = useMemo(
        () => cities.map(value => ({label: capitalizeString(value), value})),
        [cities],
    );

    return (
        <WeatherDashboard<cities, Unit>
            title="Happy Weather App"

            temperature={data?.main?.temp}
            sunrise={data?.sys?.sunrise}
            sunset={data?.sys?.sunset}

            weatherIconSource={buildIconURL(data?.weather[0]?.icon)}
            weatherDescription={capitalizeString(data?.weather[0]?.description || '')}
            cities={cityOptions}
            onCityChange={setCity}

            unit={unit}
            units={Object.keys(units)}
            onUnitChange={setUnit}

            isLoading={isPending}
            isError={Boolean(error)}
        />
    )
}