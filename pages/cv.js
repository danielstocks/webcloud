import { createComponent } from "react-fela";
import { Wrap } from "../components/wrap";
import { Spacer } from "../components/spacer";
import { Link } from "../components/link";
import { Flex } from "../components/flex";
import { Title } from "../components/title";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Paragraph } from "../components/paragraph";
import { Github, Linkedin, Twitter, Email } from "../components/social-icons";
import { BackToBase } from "../components/back-to-base";

const Job = createComponent({}, "div");
const JobTitle = createComponent({}, "div");
const JobCompany = createComponent({}, "div");
const JobDuration = createComponent({}, "div");
const JobLocation = createComponent({}, "div");
const JobDescription = createComponent({}, "div");

const CV = () => (
  <Wrap>
    <BackToBase />
    <Flex as="header">
      <Title>CV - Daniel Stocks</Title>
      <Spacer size={2} />
      <div>
        <div>
          <Link href="mailto:daniel@webcloud.se">
            <Email />
            daniel@webcloud.se
          </Link>
        </div>
        <div>
          <Link href="https://github.com/danielstocks">
            <Github /> github.com/danielstocks
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/roflwtfbbq">
            <Twitter /> twitter.com/roflwtfbbq
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/daniel-stocks">
            <Linkedin /> linkedin.com/in/daniel-stocks
          </Link>
        </div>
      </div>
      <Spacer size={2} />
      <Paragraph>
        My name is Daniel, I'm from Gothenburg, Sweden. I have 10 years plus of
        working experience with building digital products at startups,
        advertising agencies, and large-scale enterprises. I'm specialised in UI
        Engineering (eg. JavaScript/React/Web Platform/Native Android and iOS).
      </Paragraph>
      <Spacer size={2} />
      <Paragraph>
        With a background as CTO and Lead Developer, I've organized multiple
        teams of software engineers in both small and large scale projects. I
        have a proven track record of building web and mobile products from
        scratch to scale.
      </Paragraph>
    </Flex>
    <Spacer size={8} />
    <Flex as="main">
      <Title variant="pear">Job Experience</Title>
      <Spacer size={6} />
      <Job>
        <JobTitle>Staff Software Engineer</JobTitle>
        <JobCompany>Volvo Cars</JobCompany>
        <JobDuration>January 2019 - Present</JobDuration>
        <JobLocation>Stockholm, Sweden</JobLocation>
        <JobDescription>
          <Paragraph>
            Providing company-wide technical leadership and guidance within the
            UI engineering discipline, enabling Volvo Cars to transform into an
            industry leader in the digital product space.
          </Paragraph>
          <List>
            <ListItem>
              Defining strategy, architechture, scaling and future-proofing our
              UI codebase.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />
    </Flex>
  </Wrap>
);

export default CV;
