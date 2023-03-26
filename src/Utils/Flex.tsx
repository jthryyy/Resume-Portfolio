import styled from "styled-components";
import { styleProps, isntStyleProp } from "./styled-props";
import type { PrimitiveComponent } from "./types";

export const Flex: PrimitiveComponent<"div"> = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  display: flex;
  ${styleProps}
`;
