import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;

  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export {
    Container,
    Label,
    Dropdown,
    Option,
}