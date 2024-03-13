import {Select, Switcher, Typography, ISelectOption, Icon} from '../../';
import {Container, Header, Block, Content, WeatherInfo} from './styles';

interface IDashboard<City, Unit> {
    title: string;
    temperature: number;
    sunrise: number;
    sunset: number;

    city: City;
    cities: ISelectOption[];
    onCityChange: (city: City) => void;

    unit: Unit;
    units: [Unit, Unit];
    onUnitChange: (unit: Unit) => void;

    weatherIconSource: string;
    weatherDescription: string;
}

export const WeatherDashboard = <City, Unit>(props: IDashboard<City, Unit>) => {
    const {
        title,
        temperature,
        sunrise,
        sunset,
        weatherIconSource,
        weatherDescription,
        city,
        cities,
        onCityChange,
        unit,
        units,
        onUnitChange,
        isLoading,
        isError,
    } = props;

    const parseDate = (value: number) => (
        new Date(value * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )

    return (
        <Container>
            <Header>
                <Typography color="white" size="l">{title}</Typography>
            </Header>
            <Content>
                <Block>
                    <Select
                        defaultOption={city}
                        options={cities}
                        onChange={onCityChange}
                    />
                    <Switcher
                        value={true}
                        labels={units.map(value => `°${value}`)}
                        onChange={value => onUnitChange(value ? 'C' : 'F')}
                    />
                </Block>
                {/* Loader */}
                {isLoading && !isError && <Typography size="xl">Loading</Typography>}
                {/* Error */}
                {isError && !isLoading && <Typography size="xxl">We encountered error. Please try again later</Typography>}
                {/* Content */}
                {!isLoading && !isError && (
                    <WeatherInfo>
                        <Typography size="xl" $weight="medium">{temperature} &#176;{unit}</Typography>
                        <Icon src={weatherIconSource} alt="Weather Icon" />
                        <Typography size="l">{weatherDescription}</Typography>
                        <Block>
                            <Typography>Sunrise: {parseDate(sunrise)}</Typography>
                            <Typography>Sunset: {parseDate(sunset)}</Typography>
                        </Block>
                    </WeatherInfo>
                )}
            </Content>
        </Container>
    )
};

