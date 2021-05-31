import Hero from '../components/Home/Hero';
import Location from '../components/Layout/Location';
import Menu from '../components/Layout/Menu';
import Titles from '../components/Layout/Titles';

export default function Home() {
	return (
		<div>
			<Hero />
			<Titles id={'menu'} title='Menu' />
			<Menu />
			<Titles id={'location'} title='Location' />
			<Location />
		</div>
	);
}
