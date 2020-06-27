import { createGlobalStyle } from "styled-components";
import media from "./media";

export const breakpoints = {
  large: "1200px",
  medium: "1024px",
  small: "768px",
  xsmall: "375px",
};

const baseFontSize = {
  xlarge: "100%",
  large: "100%",
  medium: "95%",
  small: "90%",
  xsmall: "70%",
};

const Responsive = createGlobalStyle`
html {
  font-size: ${baseFontSize.xlarge};
  ${media.large} {
      font-size: ${baseFontSize.large};
    }
  ${media.medium} {
    font-size: ${baseFontSize.medium};
  }
  ${media.small} {
      font-size: ${baseFontSize.small};
    }
  ${media.xsmall} {
    font-size: ${baseFontSize.xsmall};
  }
}
`;

export default Responsive;
