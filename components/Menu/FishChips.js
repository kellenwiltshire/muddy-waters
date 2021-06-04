import React from 'react';

function FishChips() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-info'>
					<th scope='col'>
						<h3>Fish and Chips</h3>
						<h6>
							Battered to order, served with fresh cut fries, homemade tartar
							sauce and coleslaw.
						</h6>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>1 piece Cod</h4>
					</td>
					<td>
						<p>$12.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>2 piece Cod</h4>
					</td>
					<td>
						<p>$15.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>1 piece Haddock</h4>
					</td>
					<td>
						<p>$14.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>2 piece Haddock</h4>
					</td>
					<td>
						<p>$18.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h6 className='fs-2'>Add 3 breaded Fantail Shrimp</h6>
					</td>
					<td>
						<p>$3.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h6 className='fs-2'>Add 2 Chicken Fingers</h6>
					</td>
					<td>
						<p>$3.50</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default FishChips;
