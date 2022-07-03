import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 4.375rem;

  background-color: #00acae;
  color: white;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  padding-inline: 2rem;

  span {
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;
