import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";



const Cv = () => (
  <Container>
  <section>
      <ContentTitle>Technologies:</ContentTitle>
      <ul>
        <li>React</li>
        <li>Node</li>
        <li>Erlang</li>
        <li>Elixir</li>
        <li>Phoenix</li>
        <li>Python</li>
        <li>Hugo</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SASS</li>
        <li>Boostrap</li>
        <li>Github</li>
      </ul>
    </section>
    <Content>
          <Text>
            <h2> Full Stack Dev - LambdaClass </h2>
              Working as a FullStack developer since June 2019. <br/>
              Developing projects with HTML5, CSS3, Erlang, Elixir, Phoenix and Python.
          </Text>
          <Text>
            <h2>Freelance Developer</h2>
            <p>Freelance web development for clients</p>
          </Text>

    
    </Content>
  </Container>

);

export default connect(Cv);


const Content = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5em 0;
  width: 80%;


`

const ContentTitle = styled.div`
  margin: 1em 0;
  font-family: 'Special Elite', cursive;
`
const Text = styled.p`
  margin:0  0.5em;
`
