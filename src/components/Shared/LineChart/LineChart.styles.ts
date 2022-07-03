import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 0.75rem;

  span {
    font-size: 0.75rem;
    color: #004d61;

    margin-bottom: 0.25rem;
  }
`;

interface ProgressBarProps {
  percentage?: number;
  backgroundColor?: string;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ percentage }) => (percentage ? percentage : 0)}%;
  height: 0.875rem;

  border-radius: 3px;

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#004d61"};

  transition: 0.5s ease;
`;
