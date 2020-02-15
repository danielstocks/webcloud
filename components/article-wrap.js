import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Wrap } from "./wrap";
import { Link } from "./link";
import { Flex } from "./flex";
import { Card } from "./card";
import { Spacer } from "./spacer";
import { Paragraph } from "./paragraph";
import { Twitter } from "../components/social-icons";
import { Title } from "./title";
import { BackToBase } from "./back-to-base";
import { createComponentWithProxy } from "react-fela";
import { SocialLink } from "../components/cv";

const Avatar = createComponentWithProxy(
  {
    width: "72px",
    height: "72px",
    "@media (min-width: 480px)": {
      width: "96px",
      height: "96px"
    },
    borderRadius: "50%",
    boxShadow: "var(--shadow)"
  },
  "img"
);

const TWEET = "https://twitter.com/intent/tweet?text=";

export const ArticleWrap = ({ title, children }) => {
  const router = useRouter();
  return (
    <Wrap>
      <Head>
        <title>{title} - webcloud</title>
      </Head>
      <BackToBase />
      {children}
      <Spacer size={6} />
      <SocialLink
        target="_blank"
        rel="noopener"
        href={`${TWEET}${title} - https://webcloud.se${router.pathname}/`}
      >
        <Twitter />
        <Spacer size={1} />
        <span>Share on Twitter</span>
      </SocialLink>

      <Spacer size={10} />
      <Card
        extend={{ width: "100%", flexDirection: "row", marginLeft: "-16px" }}
      >
        <div>
          <Avatar alt="Photo of me" src="/photo.jpg" />
        </div>
        <Spacer size={3} />
        <Flex>
          <Title variant="kiwi">Hi, thanks for reading!</Title>
          <Spacer size={2} />
          <Paragraph extend={{ color: "var(--color-fg-alt)" }}>
            I&rsquo;m Daniel, Software Engineer from Sweden. This is my personal{" "}
            <Link href="/">website</Link>. You can also find me on{""}{" "}
            <Link href="https://twitter.com/roflwtfbbq">Twitter</Link> and{" "}
            <Link href="https://github.com/danielstocks">GitHub</Link>.
          </Paragraph>
        </Flex>
      </Card>
      <Spacer size={14} />
    </Wrap>
  );
};
