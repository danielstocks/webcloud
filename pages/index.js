import { Wrap } from "../components/wrap";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";
import { Link, IconLink } from "../components/link";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Github, Linkedin, Twitter } from "../components/social-icons";

const ArticleGroup = ({ year, children }) => (
  <>
    <Flex
      extend={{
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      }}
    >
      <Paragraph>{year}</Paragraph>
      <Flex>
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
        I'm Daniel and this is my homepage!
        I currently <Link href="/cv">work</Link>
        {" "}with UI Engineering & Design at{" "}
        <Link href="https://www.volvocars.com">Volvo Cars</Link>.


        If you wish to get in touch please send an
        email to{" "}
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
        </IconLink>.
      </Title>
    </Flex>
    <Spacer size={8} />
    <Flex as="main">
      <Title variant="pear">Articles</Title>
      <Spacer size={4} />

      <ArticleGroup year="2020">
        <Link href="/mx-518">MX 518 Retrospect</Link>
      </ArticleGroup>

      <ArticleGroup year="2014">
        <Link>A Truly Reactive Sortable Component</Link>
        <Link>Creating a Sortable List Component in React</Link>
      </ArticleGroup>

      <ArticleGroup year="2013">
        <Link href="/best-practice-testing-javascript-event-handlers">
          How You Should be Testing JavaScript Event Handlers
        </Link>
        <Link href="/stubbing-window-location-javascript">
          Stubbing window.location in JavaScript
        </Link>
      </ArticleGroup>
    </Flex>
  </Wrap>
);

export default Home;
