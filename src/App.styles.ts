import styled from "styled-components";

export const Page = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  justify-content: space-evenly;
  gap: 20px 15px;
  place-items: start center;

  @media only screen and (max-width: 768px) {
    row-gap: 50px;
    grid-template-columns: 100%;
  }
`;
