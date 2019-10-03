import { css } from "frontity";
const globalStyles = css`
  body {
    @import url("https://fonts.googleapis.com/css?family=Oswald|Special+Elite&display=swap");
    margin: 0;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: red;
  }
  img {
    padding: 0 0.5em;
  }
`;

export default globalStyles
