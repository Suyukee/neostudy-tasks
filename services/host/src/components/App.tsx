import { Link, Outlet } from 'react-router-dom';
import * as styles from '@/assets/globals.module.scss';

export default function App() {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<Link to="/about">About</Link>
				<Link to="/shop">Shop</Link>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}
