import React from "react";
import { Wrap } from "../components/wrap";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";
import { Link, IconLink } from "../components/link";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Github, Linkedin, Twitter } from "../components/social-icons";
import blogPosts from "../blog-manifest.json";

const blogPostsGroupedByYear = {};
blogPosts.forEach(post => {
  const year = post.date.split("-")[0];
  if (blogPostsGroupedByYear[year]) {
    blogPostsGroupedByYear[year].push(post);
  } else {
    blogPostsGroupedByYear[year] = [post];
  }
});

const ArticleGroup = ({ year, children }) => (
  <>
    <Flex
      extend={{
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      }}
    >
      <Paragraph extend={{ paddingLeft: "8px" }}>{year}</Paragraph>
      <Flex extend={{ fontWeight: "var(--font-weight-normal)" }}>
        {React.Children.toArray(children).map((article, i) => (
          <React.Fragment key={year + i}>
            <div>{article}</div>
            <Spacer />
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
    <Spacer size={3} />
  </>
);

const Home = () => (
  <Wrap>
    <Spacer size={10} />
    <Flex id="header" as="header">
      <Title>Hello there.</Title>
      <Spacer size={6} />
      <Title
        variant="kiwi"
        as="p"
        extend={{ "& svg": { verticalAlign: "text-bottom" } }}
      >
        I'm Daniel and this is my personal website. I specialise in 
        {" "}<Link href="/cv">working</Link> with UI Engineering & Digital Product Design. If you wish to
        get in touch please send an email to{" "}
        <Link href="mailto:daniel@webcloud.se">daniel@webcloud.se</Link>
        <br />
        or find me on{" "}
        <IconLink href="https://github.com/danielstocks">
          <Github />
        </IconLink>
        ,{" "}
        <IconLink href="https://twitter.com/roflwtfbbq">
          <Twitter />
        </IconLink>{" "}
        or{" "}
        <IconLink href="https://www.linkedin.com/in/daniel-stocks">
          <Linkedin />
        </IconLink>
        .
      </Title>
    </Flex>
    <Spacer size={8} />
    <Flex as="main">
      <Title variant="pear">Articles</Title>
      <Spacer size={4} />
      {Object.keys(blogPostsGroupedByYear)
        .sort()
        .reverse()
        .map((year, i) => (
          <ArticleGroup key={year + i} year={year}>
            {blogPostsGroupedByYear[year].map(post => (
              <Link key={post.path} href={post.path}>
                {post.title}
              </Link>
            ))}
          </ArticleGroup>
        ))}
    </Flex>
    <Spacer size={8} />
  </Wrap>
);

export default Home;
