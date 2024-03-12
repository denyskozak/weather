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
    const [activeIndex, setActiveIndex] = useState(0);

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

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' && activeIndex < options.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else if (event.key === 'ArrowUp' && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        } else if (event.key === 'Enter') {
            isOpen ? handleSelect(options[activeIndex].value) : setIsOpen(true);
        }
    };

    return (
        <Container>
            <Label
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                tabIndex="0">
                {optionLabelByValue[selectedOption]}
                <span>&#9660;</span>
            </Label>
            {isOpen && (
                <Dropdown>
                    {options.map((option, index) => (
                        <Option
                            key={index}
                            tabIndex={isOpen ? '0' : '-1'}
                            onClick={() => handleSelect(option.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSelect(option.value);
                                }
                            }}
                            aria-selected={index === activeIndex}
                        >
                            {option.label}
                        </Option>
                    ))}
                </Dropdown>
            )}
        </Container>
    )
}