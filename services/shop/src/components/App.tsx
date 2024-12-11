import { Outlet } from 'react-router-dom';
import * as styles from '@/assets/globals.module.scss';

export default function App() {
	return (
		<div className={styles.shop}>
			<h1>Shop page</h1>
			<Outlet />
		</div>
	);
}
