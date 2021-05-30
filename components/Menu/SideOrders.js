import React from 'react';

function SideOrders() {
	return (
		<table class='table'>
			<thead>
				<tr>
					<th scope='col'>Item</th>
					<th scope='col'>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr className='table-primary'>
					<th scope='row' colSpan='2'>
						<h3>Side Orders</h3>
					</th>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Fresh Cut Fries</h4>
					</td>
					<td>
						<p>sm $4.00</p>
						<p>lg $7.00</p>
					</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Homemade Gravy</h4>
					</td>
					<td>$2.00</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Coleslaw</h4>
					</td>
					<td>
						<p>$3.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Rice</h4>
					</td>
					<td>
						<p>$4.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Poutine</h4>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default SideOrders;