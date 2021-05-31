import React from 'react';

function Starters() {
	return (
		<table className='table'>
			<thead>
				<tr className='table-primary'>
					<th scope='col'>
						<h3>Starters</h3>
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<h4 className='fs-2'>Garlic Bread</h4>
						<h6 className='fs-6 fw-lighter'>Add Cheese</h6>
					</td>
					<td>
						<p>$5.50</p>
						<p>$7.00</p>
					</td>
				</tr>
				<tr>
					<td>
						<h4 className='fs-2'>Battered Mushrooms</h4>
						<h6 className='fs-6 fw-lighter'>Served with ranch</h6>
					</td>
					<td>$8.00</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Battered Dill Pickles</h4>
						<h6 className='fs-6 fw-lighter text-break'>Served with ranch</h6>
					</td>
					<td>
						<p>$8.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Golden Onion Rings</h4>
					</td>
					<td>
						<p>$7.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Breaded Mozzarella Sticks</h4>
						<h6 className='fs-6 fw-lighter text-break'>Served with ranch.</h6>
					</td>
					<td>
						<p>$8.50</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Breaded Shrimp</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Served with seafood sauce.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Muddy Waters Munchie Platter</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Onion Rings, Wings, Battered Mushrooms, Mozarella Sticks, Fingers,
							Fish Pieces, and Fries. Served with sour cream, ranch and Muddy
							Waters Sauce. No substitutions.
						</h6>
					</td>
					<td>
						<p>$17.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Sweet Chili Thai Bites</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Breaded chicken tossed in sweet chili thai sauce, served on a bed
							of rice and topped with crush nacho chips.
						</h6>
					</td>
					<td>
						<p>$9.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>Loaded Nachos</h4>
						<h6 className='fs-6 fw-lighter text-break'>
							Tortilla chips topped with green peppers, onions, tomoatoes,
							Jalapeno peppers, mozzarella, and cheddar cheese. Add ground beef
							or chicken for $3.00
						</h6>
					</td>
					<td>
						<p>$12.50</p>
					</td>
				</tr>
				<tr className='table-primary'>
					<th scope='row' colSpan='2'>
						<h3>Chicken Wings</h3>
						<h6>
							Plain or Breaded with your choice of BBQ, Honey Garlic, Thai, Hot,
							Buffalo, Suicide, or Muddy Water Sauce. Served with Fresh Cut
							Fries. Dry rub available.
						</h6>
					</th>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>1lb</h4>
					</td>
					<td>
						<p>$13.00</p>
					</td>
				</tr>
				<tr>
					<td colSpan='1'>
						<h4 className='fs-2'>2lb</h4>
					</td>
					<td>
						<p>$19.00</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Starters;
