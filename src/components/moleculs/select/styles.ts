import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-width: 100px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.blue};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.theme.white};
  caret-color: transparent;

  &:focus {
    outline: ${props => props.theme.red};
    border-color: ${props => props.theme.red};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.blue};
  border-top: none;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  padding: 0 10px;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  width: 100%;
  caret-color: transparent;

  &:hover {
   color: ${props => props.theme.red};
  }

  &:focus {
    outline: ${props => props.theme.red};
    border-color: ${props => props.theme.red};
  }
`;

export {
    Container,
    Label,
    Dropdown,
    Option,
}