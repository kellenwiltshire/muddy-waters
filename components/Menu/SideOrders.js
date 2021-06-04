import React from 'react';

function SideOrders() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-info'>
					<th scope='col'>
						<h3>Side Orders</h3>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
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
