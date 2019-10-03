import React from "react";
import { Global, connect, styled, Head } from "frontity";
import Header from "./header";
import Page404 from "./page404.js";
import Home from "./home";
import Cv from "./cv";

import globalStyles from "../global-styles"

const Theme = ({ state }) => {
  const { link } = state.router;
  const data = state.source.get(link);
  
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
        {link === "/" && <Home />}
        {link === "/cv/" && <Cv />}
        {data.is404 && <Page404 />}
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
