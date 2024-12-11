import { createBrowserRouter } from 'react-router-dom';
import App from '@/components/App';
import Shop from '@/pages/Shop';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/shop',
				element: <Shop />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
export default routes;
