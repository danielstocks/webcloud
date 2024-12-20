import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Wrap } from "./wrap";
import { Link } from "./link";
import { Flex } from "./flex";
import { Card } from "./card";
import { Spacer } from "./spacer";
import { Paragraph } from "./paragraph";
import { Twitter, Bluesky } from "../components/social-icons";
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
const BLUESKY = "https://bsky.app/intent/compose?text=";

export const ArticleWrap = ({ title, children, nextPost, prevPost }) => {
  const router = useRouter();
  return (
    <Wrap>
      <Head>
        <title>{title} - webcloud</title>
      </Head>
      <BackToBase />
      <Flex as="main">{children}</Flex>
      <Spacer size={6} />

      <Flex
        extend={{
          flexDirection: "row",
          gap: "32px"
        }}
      >
        <SocialLink
          target="_blank"
          rel="noopener"
          href={`${TWEET}${title} - https://webcloud.se${router.pathname}/`}
        >
          <div>
            <Twitter />
          </div>
          <Spacer size={1} />
          <span>Share on Twitter</span>
        </SocialLink>
        <SocialLink
          target="_blank"
          rel="noopener"
          href={`${BLUESKY}${title} - https://webcloud.se${router.pathname}/`}
        >
          <div>
            <Bluesky />
          </div>
          <Spacer size={1} />
          <span>Share on Bluesky</span>
        </SocialLink>
      </Flex>
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
            I&rsquo;m Daniel, Software Engineer from Sweden. If you have any
            questions regarding this article please reach out to me on{" "}
            <Link href="https://bsky.app/profile/webcloud.se">Bluesky</Link>.
            You can also find me on{" "}
            <Link href="https://github.com/danielstocks">GitHub</Link>.
          </Paragraph>
        </Flex>
      </Card>
      <Spacer size={8} />
      <Title variant="apple">Read more articles written by me:</Title>
      <Spacer size={2} />
      <Flex
        extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {prevPost && (
          <>
            <Flex>
              <Spacer size={3} />
              <Link href={prevPost.path}>← {prevPost.title}</Link>
            </Flex>
            <Spacer size={2} />
          </>
        )}
        {nextPost && (
          <Flex>
            <Spacer size={3} />
            <Link href={nextPost.path}>{nextPost.title} →</Link>
          </Flex>
        )}
      </Flex>

      <Spacer size={14} />
    </Wrap>
  );
};
