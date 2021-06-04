import React from 'react';

function Titles({ title, id }) {
	return (
		<div id={id} className='container-fluid sm-m-2'>
			<h1 className='d-none d-md-block display-1 text-secondary'>{title}</h1>
		</div>
	);
}

export default Titles;
