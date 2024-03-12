import {useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query'
import {WeatherDashboard} from '../components';
import {fetchWeatherByCity} from '../api';
import {cities} from '../consts';
import {Unit} from '../types';
import {capitalizeString} from '../utilities';

export const MainPage = () => {
    const [city, setCity] = useState<cities>(cities[0]);
    const [unit, setUnit] = useState<Unit>('C');

    console.log('unit: ', unit);

    const unitToChar: Unit = {
        'F' : 'imperial',
        'C' : 'metric',
    };
    const {data, isPending, error} = useQuery({
        // For avoid memery lack when old params is not actual
        queryKey: ['weatherData', city, unit],
        queryFn: () => fetchWeatherByCity(city, unitToChar[unit])
    });

    const cityOptions = useMemo(
        () => cities.map(value => ({label: capitalizeString(value), value})),
        [cities],
    );



    return (
        <WeatherDashboard<cities, Unit>
            title="Weather App"

            cities={cityOptions}
            onCityChange={setCity}
            unit={unit}
            units={Object.keys(unitToChar)}
            onUnitChange={setUnit}

            temperature={data?.main?.temp}
            isLoading={isPending}
            error={error}
        />
    )
}