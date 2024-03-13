import {useEffect, useState} from 'react';
import {Container, Label, HiddenInput, Slider} from './styles';
import {Typography} from '../../';

interface ISwitcher {
    value: boolean;
    labels: [string, string];
    onChange: (value: boolean) => void;
}

export const Switcher = (props) => {
    const {value, labels, onChange} = props;
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        onChange(checked);
    }, [checked]);

    return (
        <Container>
            <Typography>{labels[0]}</Typography>
            <Label>
                <HiddenInput
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    onClick={() => setChecked(!checked)}
                />
                <Slider checked={checked}/>
            </Label>
            <Typography>{labels[1]}</Typography>
        </Container>
    );
};

