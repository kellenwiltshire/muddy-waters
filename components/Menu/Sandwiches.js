import React from 'react';

function Sandwiches() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-primary'>
					<th scope='col'>
						<h3>Sandwiches</h3>
						<h6>
							Served with fresh cut fries, coleslaw, and dill pickle. Make your
							fries a poutine for $2.75, or substitute a garden salad for $2, or
							Greek or Caesar for $2.50{' '}
						</h6>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Roasted chicken with lettuce, tomato and mayo. Choose from white
							or whole wheat bread.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Roast Beef</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Cooked in house, topped with lettuce, tomato, and mustard.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Toasted Western</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Two eggs, ham, onion, green peppers on your choice of white or
							whole wheat.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>B.L.T.</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Crisp bacon, lettuce, tomato, and mayo on toasted white or whole
							wheat.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Clubhouse</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Traditional with chicken, bacon, lettuce, tomato, cheese, and mayo
							on toasted white or whole wheat.
						</h6>
					</td>
					<td>
						<p>$14.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Steak</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Mozza, fried onions, lettuce, tomato, and mayo on a Ciabatta bun.
						</h6>
					</td>
					<td>
						<p>$14.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Grilled Cheese</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							On white or whole wheat. Add bacon or ham $1.
						</h6>
					</td>
					<td>
						<p>$8.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken Cranberry Ciabatta</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Roasted chicken, crisp bacon, fresh lettuce, cheese, and delicious
							homemade cranberry mayo all on a Ciabatta bun.
						</h6>
					</td>
					<td>
						<p>$13.50</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Sandwiches;
