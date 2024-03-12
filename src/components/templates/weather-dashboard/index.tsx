import {Select, Switcher, Typography, ISelectOption} from '../../';
import {Container, Header, Controllers, Temperature, Content} from './styles';

interface IDashboard<City, Unit> {
    title: string;
    temperature: number;

    city: City;
    cities: ISelectOption[];
    onCityChange: (city: City) => void;

    unit: Unit;
    units: [Unit, Unit];
    onUnitChange: (unit: Unit) => void;
}

export const WeatherDashboard = <City, Unit>(props: IDashboard<City, Unit>) => {
    const {
        title,
        temperature,

        city,
        cities,
        onCityChange,
        unit,
        units,
        onUnitChange,
        isLoading
    } = props;

    return (
        <Container>
            <Header>
                <Typography color="white" size="l">{title}</Typography>
            </Header>
            <Content>
                <Controllers>
                    <Select
                        defaultOption={city}
                        options={cities}
                        onChange={onCityChange}
                    />
                    <Switcher
                        labels={units.map(value => `°${value}`)}
                        onChange={value => onUnitChange(value ? 'C' : 'F')}
                    />
                </Controllers>
                {temperature && <Temperature size="xl">{temperature} &#176;{unit}</Temperature>}

            </Content>

        </Container>
    )
};

