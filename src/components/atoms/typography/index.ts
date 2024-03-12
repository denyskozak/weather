import styled from 'styled-components';

interface ITypography {
    size: 's' | 'm' | 'l' | 'xl';
    color: 'white' | 'black';
}

const mapTextSize = (size: ITypography['size'] = 'm') => {
    const config: Record<ITypography['size'], number> = {
        s: 14,
        m: 16,
        l: 20,
        xl: 24,
    };

    return `${config[size]}px`;
}


export const Typography = styled.span<ITypography>`
  font-size: ${props => mapTextSize(props.size)};
  color: ${props => props.color}
`;
