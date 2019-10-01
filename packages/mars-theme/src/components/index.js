import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import Page404 from "./page404.js";
import Home from './home'
import Cv from "./Cv";

const globalStyles = css`
  body {
    @import url('https://fonts.googleapis.com/css?family=Oswald|Special+Elite&display=swap');
    margin: 0;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
  }
  a{
  text-decoration: none;
  color: black;
  }
  a:visited{
  text-decoration: none;

  }
  a:hover{
    color: red;
  }
  img{
    padding: 0 0.5em;
  }
`;

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  const {link} = state.router
  return (
    <>
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Global styles={globalStyles} />
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Body>
        {link ==="/" && <Home />}
        {link === "/cv/" && <Cv />}
        {data.is404 && <Page404/>}
      </Body>
    </>
  );
};

export default connect(Theme);



const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// const Title = styled.h2`
//   font-family: 'Special Elite', cursive;
// `
