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
			<script
				src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
				integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
				crossorigin='anonymous'
			></script>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns'
				crossorigin='anonymous'
			></script>
			<div id='fb-root'></div>
			<script
				async
				defer
				crossorigin='anonymous'
				src='https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0&appId=251204861590122&autoLogAppEvents=1'
				nonce='B3PlVkZS'
			></script>
		</Layout>
	);
}

export default MyApp;
