import React from "react";
import { connect, styled } from "frontity";

const Home = () => (
  <Container>
    <Title> || Hello World!</Title>
    <Text>
      My name is Catalina and I'm a developer at
      <Link href="https://lambdaclass.com/">{` LambdaClass `}</Link>
      working with 👩‍💻 Erlang, Elixir, Phoenix and Python.
    </Text>
    <Text>
      I'm finishing my major in Psicology and started coding for hobby which I
      found INCREDIBLY fun and grown a huge passion that took me to change to a
      full time coding job.
    </Text>
    <Text>
      I've finished a coding bootcamp at
      <Link href="https://www.acamica.com/">{` Acamica`}</Link> where
      I've learned 👩‍💻 React and 👩‍💻 NodeJS.
    </Text>
    <Text>
      Check out my
      <Link href="https://github.com/catalinasy/">{` projects `}</Link>
      I have tons of stuff I've been building.
    </Text>
    <Text>
      I also collaborate with
      <Link href="https://www.womenwhocode.com/">
      {`  Woman Who Code`}
      </Link>
      , a female global community that organizes events, meetups and
      workshops for women in tech.
    </Text>
  </Container>
);

export default connect(Home);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-Container: center;
  margin: 7em 10em;
`;
  // background-image: url("../assets/pattern.svg");

const Title = styled.div`
  margin: 1em 0;
  font-size: 40px;
  font-family: "Special Elite", cursive;
`;
const Text = styled.p`
  margin: 0.5em;
`;

const Link = styled.a`
  color: #09516e;
  text-decoration: none;
`;
