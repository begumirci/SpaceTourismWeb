import ReactDOM from 'react-dom/client';
import Home from './Pages/home';
import Crew from './Pages/crew';
import Destination from './Pages/destination';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Technology from './Pages/technology';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/destination',
    element: <Destination />,
  },
  {
    path: '/crew',
    element: <Crew />,
  },
  {
    path: '/technology',
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
