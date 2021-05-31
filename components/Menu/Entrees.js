import React from 'react';

function Entrees() {
	return (
		<table class='table'>
			<thead>
				<tr className='table-primary'>
					<th scope='col'>
						<h3>Entrees</h3>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<h4 className='fs-2'>Chicken Parmesan</h4>
						<h6 className='fs-6 fw-lighter'>
							Breaded, white meat chicken topped with our homemade meatsauce and
							mozzarella then baked until hot and bubbly. Served with spaghetti
							and garlic bread
						</h6>
					</td>
					<td>$17.00</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Breaded Shrimp Dinner</h4>
						<h6 className='fs-6 fw-lighter'>
							Delicious golden shrimp served with fresh cut fries and coleslaw
						</h6>
					</td>
					<td>$16.00</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Liver and Onions</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Fresh, tender pieces of beef liver served with sauteed onions and
							bacon, fresh cut fries or mashed, vegetables and our homemade
							gravy
						</h6>
					</td>
					<td>
						<p>$13.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Lasagna</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Layers of noodles, our homemade meat sauce and mozzarella baked
							until hot and bubbly. Served with garlic bread
						</h6>
					</td>
					<td>
						<p>$13.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Spaghetti</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							A pile of noodles topped with out homemade meatsauce and served
							with garlic bread
						</h6>
					</td>
					<td>
						<p>$12.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Fettuccini Alfredo</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Tender noodles with homemade Alfredo sauce and tender chicken
							pieces. Served with garlic bread.
						</h6>
					</td>
					<td>
						<p>$13.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Mushroom Chicken Melt</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Your choice of breaded or grilled chicken then topped with
							mushrooms, cheddar cheese, and BBQ Sauce. Served with Caesar
							salad.
						</h6>
					</td>
					<td>
						<p>$13.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Chicken Fingers</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Plump, white meat chicken fingers served with fresh cut fries and
							plum sauce.
						</h6>
					</td>
					<td>
						<p>$12.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Bacon Carbonara</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							An Italian pasta made with bacon, sauteed onions and tomatoes.
							Served with garlic bread.
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

export default Entrees;
