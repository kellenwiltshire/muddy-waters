import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
