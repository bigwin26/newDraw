import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", "Noto Sans CJK KR", -apple-system,
    BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic",
    "맑은 고딕", 나눔고딕, "Nanum Gothic", arial, 돋움, Dotum, Tahoma, Geneva,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  word-break: keep-all;
  background-color:white;
}
 
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
input,
button,
textarea {
  font-family: inherit;
}
html,
body,
#root {
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,
li {
  list-style-type: none;
  padding-left: 0px;
}
a {
  text-decoration: none;
  color:black;
}
`;

export default GlobalStyles;
