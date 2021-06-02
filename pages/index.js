import Hero from '../components/Home/Hero';
import Location from '../components/Layout/Location';
import Menu from '../components/Layout/Menu';
import Titles from '../components/Layout/Titles';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Hero />
			</motion.div>
			<Titles id={'menu'} title='Menu' />
			<Menu />
			<Titles id={'location'} title='Location' />
			<Location />
		</div>
	);
}
