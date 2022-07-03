import React from "react";

import { ProgressBar, Wrapper } from "./LineChart.styles";

interface LineChartProps {
  title: string;
  percentage?: number;
  progressColor?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  percentage,
  progressColor,
  title,
}) => {
  return (
    <Wrapper>
      <span>{title}</span>

      <ProgressBar percentage={percentage} backgroundColor={progressColor} />
    </Wrapper>
  );
};
