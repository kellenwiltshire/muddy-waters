import React from 'react';

function Menu() {
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
						<h3>Soups and Salads</h3>
					</th>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Soup of the Day</h4>
						<h6 className='fs-6 fw-lighter'>Ask Your Server for Details</h6>
					</td>
					<td>$4.50</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>French Onion Soup</h4>
						<h6 className='fs-6 fw-lighter'>
							Topped with croutons and mozzarella cheese
						</h6>
					</td>
					<td>$7.00</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Garden</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Romaine lettuce, tomato, cucumber, red onion and carrots. Choose
							from Italian, French, Ranch, Raspberry Vinaigrette, 1000 Islands,
							Blue Cheese, or Muddy Waters dressings.
						</h6>
					</td>
					<td>
						<p>small $5.00</p>
						<p>large $9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Greek</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Fresh romaine, tomato, black olives, cucumber, and red onion.
							Tossed in our homemade vinargrette dressing topped with feta
							cheese.
						</h6>
					</td>
					<td>
						<p>small $6.00</p>
						<p>large $11.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Caesar</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Crisp romaine, bacon, croutons, parmesan cheese, and creamy
							dressing.
						</h6>
					</td>
					<td>
						<p>small $6.00</p>
						<p>large $11.00</p>
					</td>
				</tr>
				<tr className='table-primary'>
					<th scope='row' colSpan='2'>
						<h3>
							Wraps<h6>Served with fresh cut fries</h6>
						</h3>
					</th>
				</tr>
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
						<h4 className='fs-2'>Steak and Chesse</h4>
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

export default Menu;
