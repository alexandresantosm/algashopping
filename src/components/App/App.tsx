import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Container, Wrapper } from "./App.styles";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
      </Container>
    </Wrapper>
  );
};
