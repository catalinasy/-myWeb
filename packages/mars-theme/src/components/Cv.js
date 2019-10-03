import React from "react";
import { connect, styled } from "frontity";

const tech = [
  "React",
  "Node",
  "Erlang",
  "Elixir",
  "Phoenix",
  "Python",
  "Hugo",
  "HTML5",
  "CSS3",
  "SASS",
  "Boostrap",
  "Github"
];

const experience = [
  {
    title: "Full Stack Dev - LambdaClass",
    description:
      "Working as a FullStack developer since June 2019.\n Developing projects with HTML5, CSS3, Erlang, Elixir, Phoenix and Python."
  },
  {
    title: "Freelance Developer",
    description: "Building web sites freelance for clients."
  }
];

const Cv = () => (
  <Container>
    <section>
      <Title>Technologies:</Title>
      <ul>
        {tech.map((name, i) => (
          <li key={`tech-${i}`}>{name}</li>
        ))}
      </ul>
    </section>
    <Content>
      {experience.map((e, i) => (
        <Experience key={`exp-${i}`}>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </Experience>
      ))}
    </Content>
  </Container>
);

export default connect(Cv);

const Content = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5em 0;
  width: 80%;
`;

const Title = styled.p`
  margin: 1em 0;
  font-family: "Special Elite", cursive;
`;
const Experience = styled.section`
  margin: 0 0.5em;
  & > p {
    white-space: pre-line;
  }
`;
