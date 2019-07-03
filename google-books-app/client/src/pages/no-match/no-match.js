import React from "react";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container>
    <Jumbotron>
      <h1>404 Page Not Found</h1>
      <h2>Sorry about that!</h2>
    </Jumbotron>
  </Container>
);

export default NoMatch;