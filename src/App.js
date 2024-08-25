/**
 * components
 * Header
 * -logo
 * -navitems
 * Body
 * -searchbar
 * -Restaurant container
 *  -RestaurantCard
 *   -img
 *   -name of res, star rating, cuisine, delivery time
 * Footer
 * - copyright
 * -links
 * -address
 * -contact
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestauarntMenu from './components/RestaurantMenu.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';

//chunking, cod splitting, dynamic bundling, lazy loading, on demand loading

const AppLayout = () => {

    return (
      <Provider store={appStore}>
        <div className="AppLayout">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )


};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children : [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/restaurants/:resId",
    element: <RestauarntMenu />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

    ],

  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router = {appRouter} />);