import { Wrap } from "../components/wrap";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";
import { Link } from "../components/link";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Github, Linkedin, Twitter } from "../components/social-icons";

const Home = () => (
  <Wrap>
    <Spacer size={10} />
    <Flex id="header" as="header">
      <Title>Hi, I'm Daniel.</Title>
      <Spacer size={6} />
      <Title
        variant="kiwi"
        as="p"
        extend={{ "& svg": { verticalAlign: "text-bottom" } }}
      >
        I'm a <Link href="/cv">UI Software Engineer</Link> from Sweden and this
        is my personal website. I'm Currently working at{" "}
        <Link href="https://www.volvocars.com">Volvo Cars</Link>. If you wish to
        get in touch please send an email to{" "}
        <Link href="mailto:daniel@webcloud.se">daniel@webcloud.se</Link> or find
        me on{" "}
        <a href="https://github.com/danielstocks">
          <Github />
        </a>
        ,{" "}
        <a href="https://twitter.com/roflwtfbbq">
          <Twitter />
        </a>{" "}
        or{" "}
        <a href="https://www.linkedin.com/in/daniel-stocks">
          <Linkedin />
        </a>
        .
      </Title>
    </Flex>
    <Spacer size={6} />
    <Flex as="main">
      <Title variant="pear">Notes from the front</Title>
      <Paragraph>2020</Paragraph>
      <div>
        <Link href="/atomic-css">Personal Website 2020 Tech Stack</Link>
      </div>
      <Paragraph>2019</Paragraph>
      <div>
        <Link href="/atomic-css">Functional Utility-First CSS</Link>
      </div>
      <Paragraph>2014</Paragraph>
      <div>
        <div>
          <Link>A Truly Reactive Sortable Component</Link>
        </div>
        <div>
          <Link>Creating a Sortable List Component in React</Link>
        </div>
      </div>
      <Paragraph>2013</Paragraph>
      <Paragraph>
        <div>
          <Link>How You Should be Testing JavaScript Event Handlers</Link>
        </div>
        <div>
          <Link>Stubbing window.location in JavaScript</Link>
        </div>
      </Paragraph>
    </Flex>
  </Wrap>
);

export default Home;
