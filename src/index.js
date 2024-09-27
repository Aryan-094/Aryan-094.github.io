import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import About from './Pages/About';
import Search from './Pages/Search';
import Error404 from './Pages/Error404';
import Explore from './Pages/Explore';
import FoodDetail from './components/foodDetails';
import { CityProvider } from './components/CityContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let allRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about-us',
      element: <About />,
    },
    {
      path: '/search',
      element: <Search />
    },
    {
      path: '/explore',
      element: <Explore />
    },
    {
      path: "/food/:id",
      element: <FoodDetail />
    },
    {
      path: '*',
      element: <Error404 />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CityProvider>
      <RouterProvider router={allRouter} />
    </CityProvider>
  </React.StrictMode>
);

reportWebVitals();