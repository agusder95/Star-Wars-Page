import styled from 'styled-components';

export const BodyWrapper = styled.div`
  
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  flex-grow:4;
  width:100%;
  
  @media (min-width: 700px){
    max-width:50vw;
    flex-direction:row;
    justify-content:space-around;
  }
`;