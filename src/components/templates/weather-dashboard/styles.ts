import styled from 'styled-components';
import {Typography} from '../../atoms/typography';

const Container = styled.div`
  
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;  
  background-color: ${props => props.theme.grey};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 40px;
`;

const Controllers = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
  align-items: center;
`;

const Temperature = styled(Typography)`
  margin: auto;
`;

export {
    Container,
    Header,
    Content,
    Controllers,
    Temperature,
}