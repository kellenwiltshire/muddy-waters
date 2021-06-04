import React from 'react';

function Burgers() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-info'>
					<th scope='col'>
						<h3>Burgers</h3>
						<h6>
							Our 6oz burders are made from fresh 100% local beef. Served with
							fresh cut fries.
						</h6>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<h4 className='fs-2'>Homeburger</h4>
						<h6 className='fs-6 fw-lighter'>
							Our basic burger topped with lettuce, tomato, sauteed onions,
							mustard, and relish. Add cheese $1. Add bacon $1.50
						</h6>
					</td>
					<td>
						<p>$11.00</p>
					</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Cowboy Burger</h4>
						<h6 className='fs-6 fw-lighter'>
							Our homemade burger topped with sauteed onions, mushrooms, smoking
							Muddy Waters mayo, and melted cheddar.
						</h6>
					</td>
					<td>$12.50</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Crispy Chicken Burger</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Golden breaded chicken breast topped with lettuce, tomato, and
							mayo. Add cheese $1. Add bacon $1.50.
						</h6>
					</td>
					<td>
						<p>$12.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Muddy Waters Burger</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Our juicy burger topped with Muddy Waters BBQ sauce, sauteed
							onions, homemade chipotle mayo, bacon, mozzarella, lettuce, and
							tomato.
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

export default Burgers;
