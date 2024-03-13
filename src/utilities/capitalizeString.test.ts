import { capitalizeString } from './capitalizeString';

test('capitalizeString', () => {
    expect(capitalizeString('value1')).toBe('Value1');
});