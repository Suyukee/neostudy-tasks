import { createBrowserRouter } from 'react-router-dom';
import App from '@/components/App';
// @ts-ignore
import adminRoutes from 'admin/Router';
// @ts-ignore
import shopRoutes from 'shop/Router';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [...shopRoutes, ...adminRoutes],
	},
];

export const router = createBrowserRouter(routes);
export default routes;
