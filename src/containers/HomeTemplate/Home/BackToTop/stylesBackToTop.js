import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 90%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: rgb(255, 56, 92);
   transition: .5s;
   margin-bottom: 7px;
   &:hover{
       color: black;
   }
`