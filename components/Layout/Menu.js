import React from 'react';
import PageOne from '../Menu/PageOne';
import PageTwo from '../Menu/PageTwo';
import Starters from '../Menu/Starters';
import Burgers from '../Menu/Burgers';
import SideOrders from '../Menu/SideOrders';
import Beverages from '../Menu/Beverages';

function Menu() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<PageOne />
				</div>
				<div className='col-md-6'>
					<PageTwo />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6'>
					<Starters />
				</div>
				<div className='col-md-6'>
					<Burgers />
					<SideOrders />
					<Beverages />
				</div>
			</div>
		</div>
	);
}

export default Menu;
