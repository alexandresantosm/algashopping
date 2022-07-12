import React from "react";
import { useSelector } from "react-redux";

import { selectSelectedProducts } from "../../../store/Products/Products.selectors";
import { extractPercentage } from "../../../utils/extractPercentage";

import { ProgressBar, Wrapper } from "./LineChart.styles";

interface LineChartProps {
  title: string;
  tag: string;
  progressColor?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  progressColor,
  title,
  tag
}) => {
  const selectedProducts = useSelector(selectSelectedProducts);
  
  const percentage = extractPercentage(
    selectedProducts.length,
    selectedProducts.filter((product) =>
      product.tags.includes(tag)
    ).length
  );

  return (
    <Wrapper>
      <span>{title}</span>

      <ProgressBar percentage={percentage} backgroundColor={progressColor} />
    </Wrapper>
  );
};
