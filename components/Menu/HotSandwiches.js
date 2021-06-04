import React from 'react';

function HotSandwiches() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-info'>
					<th scope='col'>
						<h3>Hot Sandwiches</h3>
						<h6>
							Served with fresh cut fries or mashed potatoes, vegetables, and
							homemade gravy.
						</h6>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Salisbury Steak</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							8oz and topped with sauteed mushrooms.
						</h6>
					</td>
					<td>
						<p>$14.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Hamburger Steak</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							8oz with sauteed onions.
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							White meat, served open faced. Add sauteed mushrooms or onions $1
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Roast Beef</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Topped with mushrooms or fried onions and served open face.
						</h6>
					</td>
					<td>
						<p>$14.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Hot Hamburger</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Homemade patty topped woth sauteed onions and served open faced.
						</h6>
					</td>
					<td>
						<p>$12.50</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default HotSandwiches;
