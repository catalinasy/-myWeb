import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import GithubLogo from "../assets/githubLogo.png";
import LinkedinLogo from "../assets/linkedinLogo.png";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
    <Logos>
      <a href="https://github.com/catalinasy/"><img src={GithubLogo}/></a>
      <a href="https://www.linkedin.com/in/catalina-syddall-93647411b/"><img src={LinkedinLogo}/></a>
    </Logos>
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  width: 25%;
`;


const Logos = styled.div`
  display: flex;
  `

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: black;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;