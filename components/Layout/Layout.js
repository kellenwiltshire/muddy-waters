import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta description='Muddy Waters Verona Restaurant Harrowsmith South Frontenac Highway 38 Kingston Ontario Home-cooked food' />
				<meta name='Muddy Waters Restaurant' />
				<meta lang='en' />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Nav />
			<main className='container'>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
