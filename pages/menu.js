import React from 'react';
import Titles from '../components/Layout/Titles';
import Starters from '../components/Menu/Starters';
import Burgers from '../components/Menu/Burgers';
import SideOrders from '../components/Menu/SideOrders';
import Beverages from '../components/Menu/Beverages';
import Entrees from '../components/Menu/Entrees';
import FishChips from '../components/Menu/FishChips';
import SoupsSalads from '../components/Menu/SoupsSalads';
import Wraps from '../components/Menu/Wraps';
import Sandwiches from '../components/Menu/Sandwiches';
import HotSandwiches from '../components/Menu/HotSandwiches';
import Head from 'next/head';

export default function menu() {
	return (
		<div>
			<Head>
				<title>Menu | Muddy Waters Verona</title>
			</Head>
			<Titles title='Menu' />
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<Starters />
					</div>
					<div className='col-md-6'>
						<SoupsSalads />
						<Wraps />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<Entrees />
					</div>
					<div className='col-md-6'>
						<Burgers />
						<FishChips />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<Sandwiches />
					</div>
					<div className='col-md-6'>
						<HotSandwiches />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<SideOrders />
					</div>
					<div className='col-md-6'>
						<Beverages />
					</div>
				</div>
			</div>
		</div>
	);
}
