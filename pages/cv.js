import { Wrap } from "../components/wrap";
import { Spacer } from "../components/spacer";
import { Link } from "../components/link";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Github, Linkedin, Twitter, Email } from "../components/social-icons";
import { BackToBase } from "../components/back-to-base";

const CV = () => (
  <Wrap>
    <BackToBase />
    <header>
      <Title>CV - Daniel Stocks</Title>
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
      <Paragraph>
        My name is Daniel, I'm from Gothenburg, Sweden. I have 10 years plus of
        working experience with building digital products at startups,
        advertising agencies, and large-scale enterprises. I'm specialised in UI
        Engineering (eg. JavaScript/React/Web Platform/Native Android and iOS).
      </Paragraph>
      <Paragraph>
        With a background as CTO and Lead Developer, I've organized multiple
        teams of software engineers in both small and large scale projects. I
        have a proven track record of building web and mobile products from
        scratch to scale.
      </Paragraph>
    </header>
    <main>
      <Title variant="pear">Job Experience</Title>

      <div>
        Staff Software Engineer Volvo Cars January 2019 - Present Stockholm,
        Sweden Providing company-wide technical leadership and guidance within
        the UI engineering discipline, enabling Volvo Cars to transform into an
        industry leader in the digital product space. Initiating, scaling and
        future-proofing our UI codebase, strategy and architecture. Delivering
        tools and infrastructure to empower UI engineers across the company.
        Promoting a positive and inclusive UI engineering culture, breaking down
        silos and enable for cross team collaboration and communication. Working
        in close collaboration with product owners and engineering leads, to
        help them align with best practices and ship high quality digital
        products. Bridging the gap between Software Engineering and UX/Design.
      </div>
    </main>
  </Wrap>
);

export default CV;
