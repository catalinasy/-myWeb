import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <FlexContainer>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
      </Container>
      <Nav />
    </FlexContainer>
  );
};

export default connect(Header);

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0 4px 6px -6px #222;
`;
const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Special Elite", cursive;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
