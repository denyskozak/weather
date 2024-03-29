import styled, {css} from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 4px;
  vertical-align: center;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.blue};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.red};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;

    ${props => props.checked
            ? css`transform: translateX(26px);`
            : ''
    }
  }
`;

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export {
    Container,
    Label,
    HiddenInput,
    Slider,
}
