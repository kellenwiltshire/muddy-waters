import React from 'react';
import PageOne from '../Menu/PageOne';
import PageTwo from '../Menu/PageTwo';

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
		</div>
	);
}

export default Menu;
