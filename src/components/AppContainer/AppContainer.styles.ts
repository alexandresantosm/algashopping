import styled from "styled-components";

export const Wrapper = styled.main`
  height: calc(100% - 70px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;

  padding: 1.5rem;
`;
