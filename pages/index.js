import { Title } from '../components/title'
import { Wrap } from '../components/wrap'

const Home = () => (
	<Wrap>
		<header>
			<Title>Hi, I'm Daniel.</Title>
			<p>
				I'm a <a href="/cv">UI Software Engineer</a> from Sweden and this is my
				home. I'm Currently at working at{" "}
				<a href="https://www.volvocars.com">Volvo Cars</a>. If you wish to get
				in touch, please send an email to{" "}
				<a href="mailto:daniel@webcloud.se">daniel@webcloud.se</a> or find me on{" "}
				<a href="https://github.com/danielstocks">GitHub</a>,{" "}
				<a href="https://twitter.com/roflwtfbbq">Twitter</a> or{" "}
				<a href="https://www.linkedin.com/in/daniel-stocks">LinkedIn</a>.
			</p>
		</header>
		<main>
			<h2>Notes from the front</h2>
			<a href="/atomic-css">Atomic CSS</a>
		</main>
	</Wrap>
);

export default Home;
