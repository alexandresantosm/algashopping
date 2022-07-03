import React, { ReactNode } from "react";

import { Wrapper } from "./AppContainer.styles";

interface AppContainerProps {
  left: ReactNode;
  middle: ReactNode;
  right: ReactNode;
}

export const AppContainer: React.FC<AppContainerProps> = ({
  left,
  middle,
  right,
}) => {
  return (
    <Wrapper>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </Wrapper>
  );
};
