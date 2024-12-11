import { Outlet } from 'react-router-dom';
import * as styles from '@/assets/globals.module.scss';

export default function App() {
	return (
		<div className={styles.admin}>
			<h1>Admin Pages</h1>
			<Outlet />
		</div>
	);
}
