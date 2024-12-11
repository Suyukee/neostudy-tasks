import { createBrowserRouter } from 'react-router-dom';
import App from '@/components/App';
import Admin from '@/pages/Admin';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: <Admin />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
export default routes;
