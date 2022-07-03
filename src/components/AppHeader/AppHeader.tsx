import React from "react";
import { Logo, Wrapper } from "./AppHeader.styled";

export const AppHeader: React.FC = () => {
  return (
    <Wrapper>
      <Logo>
        alga
        <span>Shopping</span>
      </Logo>
    </Wrapper>
  );
};
