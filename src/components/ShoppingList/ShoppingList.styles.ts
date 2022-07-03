import styled from "styled-components";

export const Wrapper = styled.section``;

export const Title = styled.h2`
  display: inline-block;
  width: 100%;
  height: 2rem;

  color: #004d61;

  font-size: 1.125rem;
  font-weight: 400;

  text-transform: lowercase;
`;

export const ProductList = styled.div`
  height: calc(456px - 32px);

  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #004d61 #dcdcdc;

  &::-webkit-scrollbar {
    width: 0.875rem; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #dcdcdc; /* color of the tracking area */

    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #004d61; /* color of the scroll thumb */
    border-radius: 100vw; /* roundness of the scroll thumb */
    border: 1px solid white; /* creates padding around scroll thumb */
  }
`;
