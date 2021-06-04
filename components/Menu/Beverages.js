import React from 'react';

function Beverages() {
	return (
		<table class='table'>
			<tbody>
				<tr className='table-info'>
					<th scope='row' colSpan='2'>
						<h3>Beverages</h3>
					</th>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Coffee</h4>
					</td>
					<td>
						<p>sm $1.75</p>
					</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Tea</h4>
					</td>
					<td>$1.75</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Milk</h4>
					</td>
					<td>
						<p>sm $2.50</p>
						<p>lg $3.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Juice</h4>
						<h6 className='fs-2'>Orange, Apple, Cranberry</h6>
					</td>
					<td>
						<p>sm $2.25</p>
						<p>lg $3.25</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Hot Chocolate</h4>
					</td>
					<td>
						<p>$1.75</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Bottled Water</h4>
					</td>
					<td>
						<p>$1.25</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Canned Pop</h4>
					</td>
					<td>
						<p>$1.75</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Milk Shakes</h4>
						<h6 className='fs-2'>Chocolate, Strawberry, Vanilla</h6>
					</td>
					<td>
						<p>$5.00</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Beverages;
