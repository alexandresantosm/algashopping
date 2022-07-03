import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;

  padding: 1.5rem;

  section {
    h2 {
      height: 2.5rem;

      font-size: 1rem;
      font-weight: normal;
    }
  }
`;
