import styled from 'styled-components';

interface ITypography {
    size: 's' | 'm' | 'l' | 'xl' | 'xxl';
    color: 'white' | 'black';
    $weight: 'normal' |'medium' |'semiBold' | 'bold';
}

const mapSize = (size: ITypography['size'] = 'm') => {
    const config: Record<ITypography['size'], number> = {
        s: 14,
        m: 16,
        l: 20,
        xl: 24,
        xxl: 28,
    };

    return `${config[size]}px`;
};

const mapWeight = (weight: ITypography['$weight'] = 'normal') => {
    const config: Record<ITypography['$weight'], number> = {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    };

    return `${config[weight]}`;
};

export const Typography = styled.span<ITypography>`
  font-size: ${props => mapSize(props.size)};
  color: ${props => props.color};
  font-weight: ${props => mapWeight(props.$weight)};
`;
