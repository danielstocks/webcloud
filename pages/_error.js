import React from "react";
import { Title } from "../components/title";
import { Wrap } from "../components/wrap";
import { Card } from "../components/card";
import { Spacer } from "../components/spacer";
import { BackToBase } from "../components/back-to-base";

function Error({ statusCode }) {
  return (
    <Wrap
      extend={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        <Title>{statusCode}</Title>
        <Spacer size={4} />
      <Card extend={{ textAlign: "center" }}>
        <Title>🙈</Title>
        <Spacer size={2} />
        <Title variant="kiwi">
          This page could not be found. Sorry about that.
        </Title>
      </Card>

      <BackToBase />
    </Wrap>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
