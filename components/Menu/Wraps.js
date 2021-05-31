import React from 'react';

function Wraps() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-primary'>
					<th scope='col'>
						<h3>Wraps</h3>
						<h6>Served with fresh cut fries</h6>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken Caesar</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Romaine, lettus, chicken, bacon, mozzarella, Caesar dressing
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Steak and Cheese</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Fast fry steak, tomato, lettuce, Cheddar cheese, sauteed onions,
							and Muddy Water dressing.
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Veggie Wrap</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Romaine, sauteed onions, muchrooms, green peppers, tomatoes,
							carrots, and Cheddar cheese.
						</h6>
					</td>
					<td>
						<p>$11.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken Cranberry</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Chicken, bacon, lettuce, mozzarella, and homemade cranberry
							mayonnaise.
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Muddy Wrap</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Chicken, bacon, Cheddar, onion, lettuce, tomato, mayonnaise.
						</h6>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Wraps;
