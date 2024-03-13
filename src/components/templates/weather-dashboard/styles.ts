import styled from 'styled-components';
import {Typography} from '../../atoms/typography';

const Container = styled.div`
  background-color: ${props => props.theme.main};
  height: 100vh;
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;  
  background-color: ${props => props.theme.blue};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-top: 40px;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
  align-items: center;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export {
    Container,
    Header,
    Content,
    Block,
    WeatherInfo,
}