import { createComponent } from "react-fela";
import { createComponentWithProxy } from "react-fela";
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
const JobTitle = createComponent({ fontSize: "24px" }, "div");
const JobCompany = createComponent({}, "div");
const JobDuration = createComponent({}, "div");
const JobLocation = createComponent({}, "div");
const JobDescription = createComponent({}, "div");

const SocialLink = createComponentWithProxy(
  {
    textDecoration: "none",
    lineHeight: "24px",
    color: "var(--colors-primary)",
    "& svg": {
      verticalAlign: "bottom"
    }
  },
  "a"
);

const CV = () => (
  <Wrap>
    <BackToBase />
    <Flex as="header">
      <Title>CV - Daniel Stocks</Title>

      <Spacer size={4} />
      <Flex>
        <SocialLink href="mailto:daniel@webcloud.se">
          <Email /> daniel@webcloud.se
        </SocialLink>
        <Spacer />
        <SocialLink href="https://github.com/danielstocks">
          <Github /> github.com/danielstocks
        </SocialLink>
        <Spacer />
        <SocialLink href="https://twitter.com/roflwtfbbq">
          <Twitter /> twitter.com/roflwtfbbq
        </SocialLink>
        <Spacer />
        <SocialLink href="https://www.linkedin.com/in/daniel-stocks">
          <Linkedin /> linkedin.com/in/daniel-stocks
        </SocialLink>
      </Flex>
      <Spacer size={4} />

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
              Initiating, scaling and future-proofing our UI codebase, strategy
              and architecture.
            </ListItem>
            <ListItem>
              Delivering tools and infrastructure to empower UI engineers across
              the company.
            </ListItem>
            <ListItem>
              Promoting a positive and inclusive UI engineering culture,
              breaking down silos and enable for cross team collaboration and
              communication.
            </ListItem>
            <ListItem>
              Working in close collaboration with product owners and engineering
              leads, to help them align with best practices and ship high
              quality digital products.
            </ListItem>
            <ListItem>
              Bridging the gap between Software Engineering and UX/Design.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />

      <Job>
        <JobTitle>CTO</JobTitle>
        <JobCompany>Carvanro</JobCompany>
        <JobDuration>Feburary 2016 - March 2018</JobDuration>
        <JobLocation>London, UK and Tehran, Iran</JobLocation>
        <JobDescription>
          <Paragraph>
            Building a peer to peer ride-sharing platform to enable more
            efficient transportation for commuters in densely populated
            metropolitan areas in Iran.
          </Paragraph>
          <List>
            <ListItem>
              Overall responsible for technical architecture, recruitment,
              operations, and day-to-day management of the inhouse development
              team
            </ListItem>
            <ListItem>
              As part of the founding team, we raised over $1.5m in venture
              capital.
            </ListItem>
            <ListItem>
              Setting up continuous integration and zero downtime deployment
              pipeline.
            </ListItem>
            <ListItem>
              Selection of technologies used: Node.js, React, React Native,
              Python, Flask, ElasticSearch, PostgresSQL, Redis, AWS, K8s, Docker
              and RabbitMQ.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />

      <Job>
        <JobTitle>Solutions Architect</JobTitle>
        <JobCompany>Evil Enterprise</JobCompany>
        <JobDuration>
          September 2013 - December 2015, March 2018 - December 2018
        </JobDuration>
        <JobLocation>All over the place</JobLocation>
        <JobDescription>
          <Paragraph>
            Running my own consultancy agency. Helping clients solve problems
            that required a deep domain knowledge of web technologies and UI
            software engineering.
          </Paragraph>
          <List>
            <ListItem>
              Helping clients such as Volvo, Husqvarna, Digitas LBi with various
              projects
            </ListItem>
            <ListItem>
              Lecturing a course in JavaScript and Front-End Development at
              "Yrkeshögskoleutbildning vid Göteborgs Stad Utbildning".
            </ListItem>
            <ListItem>
              Worked extensively on several Open Source JavaScript libraries and
              React Components (available on GitHub)
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />

      <Job>
        <JobTitle>Lead Front-End Developer</JobTitle>
        <JobCompany>Saltside</JobCompany>
        <JobDuration>August 2011 - September 2013</JobDuration>
        <JobLocation>Gothenburg, Sweden and Dubai, UAE</JobLocation>
        <JobDescription>
          <Paragraph>
            Saltside builds online marketplaces (classifieds) in emerging
            markets. As one of the first hires I was responsible for the overall
            quality and performance of the product interface. The company grew
            to become the highest ranked classified site in three countries,
            employing over 500 people.
          </Paragraph>
          <List>
            <ListItem>
              Building web applications with JavaScript and Ruby. Frameworks
              including Ruby on Rails, Sinatra, Node.js, Backbone.js.
            </ListItem>
            <ListItem>
              Built and launched an adaptive low-bandwidth mobile site optimized
              for internet access in developing countries.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />

      <Job>
        <JobTitle>Front-End Developer</JobTitle>
        <JobCompany>Aino</JobCompany>
        <JobDuration>June 2009 - August 2011</JobDuration>
        <JobLocation>Gothenburg, Sweden</JobLocation>
        <JobDescription>
          <Paragraph>
            Aino is a leading web agency collaborating with some of the biggest
            adveritisng agencies to deliver high quality digital expierences to
            various clients.
          </Paragraph>
          <List>
            <ListItem>
              Building web sites and applications using Python, Django,
              PostgreSQL, JavaScript, HTML and CSS.
            </ListItem>
            <ListItem>
              Built a responsive website for Nudie Jeans including the Nudie
              Jeans fitguide with Backbone.js (replacing their legacy flash app)
            </ListItem>
            <ListItem>
              Developed the main website for SSRS (Swedish Sea Rescue Society)
              including an interactive weather forecast web app.
            </ListItem>
            <ListItem>
              Built website for the Gothenburg Opera House (opera.se), along
              with a custom CMS backend
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />

      <Job>
        <JobTitle>Front-End Developer Intern</JobTitle>
        <JobCompany>NetRelations</JobCompany>
        <JobDuration>April 2008 - August 2008</JobDuration>
        <JobLocation>Gothenburg, Sweden</JobLocation>
        <JobDescription>
          <Paragraph>
            As an intern at NetRelations I learned about the importance of
            accessibility, performance and building ressiliant front-end
            applications.
          </Paragraph>
          <List>
            <ListItem>
              Primarily tasked with building websites in HTML/CSS and JavaScript
            </ListItem>
            <ListItem>
              NetRelations is primarily a .NET shop running most of their client
              work on SharePoint and EPIServer which gave me valuable insights
              into the Microsoft application stack.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
      <Spacer size={4} />
    </Flex>

    <Title variant="pear">Other Experience</Title>
    <Spacer size={6} />

    <Title variant="pear">Education</Title>
    <Spacer size={6} />
  </Wrap>
);

export default CV;
