import styled from "styled-components";

interface IndicatorProps {
  isChecked: boolean;
}

export const Wrapper = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  cursor: default;
`;

export const Indicator = styled.span<IndicatorProps>`
  width: 0.875rem;
  height: 0.875rem;

  ${({ isChecked }) => (isChecked ? "background-color: #004d61;" : "")}

  border-radius: 999%;
  border: 2px solid #004d61;

  margin-right: 0.5rem;

  cursor: pointer;
`;
