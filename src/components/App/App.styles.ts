import styled from "styled-components";
import BackgroundImage from "../../assets/bg.svg";

export const Wrapper = styled.div`
  height: 100vh;

  background-color: #f8f5ec;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 45.875rem;
  height: 35.875rem;

  background-color: #ffffff;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);

  border-radius: 20px;
`;
