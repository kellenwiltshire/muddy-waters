import React, { useState } from 'react';
import Starters from '../Menu/Starters';
import Burgers from '../Menu/Burgers';
import SideOrders from '../Menu/SideOrders';
import Beverages from '../Menu/Beverages';
import Entrees from '../Menu/Entrees';
import FishChips from '../Menu/FishChips';
import SoupsSalads from '../Menu/SoupsSalads';
import Wraps from '../Menu/Wraps';
import Sandwiches from '../Menu/Sandwiches';
import HotSandwiches from '../Menu/HotSandwiches';
import { motion } from 'framer-motion';

function Menu() {
	const [isStartersOpen, setIsStartersOpen] = useState(true);
	const [isEntreesOpen, setIsEntreesOpen] = useState(false);
	const [isSandwichesOpen, setIsSandwichesOpen] = useState(false);
	const [isSidesOpen, setIsSidesOpen] = useState(false);

	const openMenuItem = (e) => {
		setIsSidesOpen(false);
		setIsStartersOpen(false);
		setIsEntreesOpen(false);
		setIsSandwichesOpen(false);

		const item = e.target.textContent;

		console.log(e.target.textContent);

		if (item === 'Starters, Soup, Salads, and Wraps') {
			setIsStartersOpen(true);
		} else if (item === 'Entrees, Burgers, and Fish and Chips') {
			setIsEntreesOpen(true);
		} else if (item === 'Sandwiches') {
			setIsSandwichesOpen(true);
		} else if (item === 'Sides and Beverages') {
			setIsSidesOpen(true);
		}
	};

	return (
		<div className='container'>
			<div className='row btn-group m-1'>
				<button onClick={openMenuItem} className='btn btn-primary m-1'>
					Starters, Soup, Salads, and Wraps
				</button>
				<button onClick={openMenuItem} className='btn btn-primary m-1'>
					Entrees, Burgers, and Fish and Chips
				</button>
				<button onClick={openMenuItem} className='btn btn-primary m-1'>
					Sandwiches
				</button>
				<button onClick={openMenuItem} className='btn btn-primary m-1'>
					Sides and Beverages
				</button>
				<a href='/menu' className='btn btn-primary m-1'>
					Full Menu
				</a>
			</div>
			{isStartersOpen ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='row'
				>
					<div className='col-md-6'>
						<Starters />
					</div>
					<div className='col-md-6'>
						<SoupsSalads />
						<Wraps />
					</div>
				</motion.div>
			) : null}

			{isEntreesOpen ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='row'
				>
					<div className='col-md-6'>
						<Entrees />
					</div>
					<div className='col-md-6'>
						<Burgers />
						<FishChips />
					</div>
				</motion.div>
			) : null}
			{isSandwichesOpen ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='row'
				>
					<div className='col-md-6'>
						<Sandwiches />
					</div>
					<div className='col-md-6'>
						<HotSandwiches />
					</div>
				</motion.div>
			) : null}
			{isSidesOpen ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='row'
				>
					<div className='col-md-6'>
						<SideOrders />
					</div>
					<div className='col-md-6'>
						<Beverages />
					</div>
				</motion.div>
			) : null}
		</div>
	);
}

export default Menu;
