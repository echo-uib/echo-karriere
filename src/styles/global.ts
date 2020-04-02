import { createGlobalStyle } from "styled-components";
import { math } from "polished";

const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
  margin: 0;
}

#gatsby-focus-wrapper {
  min-height: 100%;
}

table {
  margin: 0 0 20px 0;
  text-align: left;
  width: 100%;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

figure > img {
  display: block;
}

li {
  > ul,
  > ol {
    margin-bottom: 0;
  }
}

a {
  color: ${({ theme }) => theme.color.brandColor};
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.color.brandColorDarkened};
  }

  &:hover, &:focus {
    text-decoration: underline;
  }
}

blockquote {
  border-left: 4px solid ${({ theme }) => theme.color.greyLightened};
  color: ${({ theme }) => theme.color.grey};
  font-size: 18px;
  font-style: italic;
  letter-spacing: -1px;
  padding-left: ${({ theme }) => math(`${theme.size.spacing} / 2`)};

  > :last-child {
    margin-bottom: 0;
  }

  pre, code {
    color: ${({ theme }) => theme.color.textColor};
  }
}

hr {
  background-color: ${({ theme }) => theme.color.greyLightened};
  border: 0;
  height: 4px;
  margin: ${({ theme }) => math(`${theme.size.spacing} / 2`)} 0;
}
`;

export default GlobalStyle;