import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";



const Home = () => (
    <Content>
          <ContentTitle> Hello World!</ContentTitle>
        <Text>
        My name is Catalina and I'm a developer at <StyledLink href="https://lambdaclass.com/">LambdaClass.</StyledLink></Text>
        <Text>I'm finishing my major in Psicology and started coding for hobby which I found
           INCREDIBLY fun and grown a huge passion that took me to change to a full time coding job.</Text> 
        <Text>I've finished a coding bootcamp at <StyledLink  href="https://www.acamica.com/">Acamica</StyledLink> where I've learned 👩‍💻 React and 👩‍💻 NodeJS. </Text>
        <Text>Check out my  <StyledLink href="https://github.com/catalinasy/">projects </StyledLink>
          section where I have tons of stuff I've been building. 
          At LambdaClass I'm working with 👩‍💻 Erlang, Elixir, Phoenix and Python.</Text>
        <Text>I also collaborate with <StyledLink href="https://www.womenwhocode.com/">Woman Who Code</StyledLink>, an all female global community that organizes events, 
        meetups and workshops for women in tech.
        </Text>
    </Content>

);

export default connect(Home);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7em 5em;
`


const ContentTitle = styled.div`
  margin: 1em 0;
  font-size: 40px;
  font-family: 'Special Elite', cursive;
`
const Text = styled.p`
  margin: 0.5em;
`

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;

`