import React from "react";

import { Indicator, Wrapper } from "./Checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  title: string;
  onClick: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  title,
  onClick,
}) => {
  return (
    <Wrapper>
      <Indicator isChecked={checked} onClick={onClick} />
      {title}
    </Wrapper>
  );
};
