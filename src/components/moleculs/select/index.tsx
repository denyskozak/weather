import {KeyboardEvent, useMemo, useState} from 'react';

import {Container, Label, Dropdown, Option} from './styles';

export interface ISelectOption {
    value: string;
    label: string;
}

interface ISelect {
    value: string;
    options: ISelectOption[];
    onChange: (option: string) => void;
}

export const Select = (props: ISelect) => {
    const {options, onChange, value} = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value || options[0].value);

    const optionLabelByValue = useMemo(() =>
            options.reduce(
                    (store, {label, value}) => ({...store, [value]: label}),
                    {},
                ),
        [options]
    );

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (optionValue: string) => {
        setSelectedOption(optionValue);
        setIsOpen(false);

        onChange(optionValue);
    };

    return (
        <Container>
            <Label onClick={handleToggle}>
                {optionLabelByValue[selectedOption]}
                <span>&#9660;</span>
            </Label>
            {isOpen && (
                <Dropdown>
                    {options.map((option, index) => (
                        <Option
                            key={`${option.label}-${option.value}`}
                            onClick={() => handleSelect(option.value)}
                            aria-selected={option.value === selectedOption}
                        >
                            {option.label}
                        </Option>
                    ))}
                </Dropdown>
            )}
        </Container>
    )
}