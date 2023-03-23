import styled from 'styled-components';

export const ButtonWrapper = styled.button`

    :active{
        background-color:#0d399d;
        color: white;
    }

    background-color: #ffe919;
    width: 10rem;
    height: 5rem;
    border-radius: 1rem;
    font-size: 1.5rem;

    @media (min-width: 700px){
      width: 15rem;
      height: 10rem;
      font-size: 2rem;
    }
`;