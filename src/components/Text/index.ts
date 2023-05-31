import styled from "styled-components";
import tw from "tailwind-styled-components";

interface TextProps {
  align?: "left" | "center" | "right";
  color?: string;
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const DynamicFont = styled.p<TextProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
`;

export const Text = tw(DynamicFont)<TextProps>`
  
`;
