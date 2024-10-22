import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Blog, Contact, Cs, Home, Services } from './pages/routes/Route';
import Layout from './pages/Layout/Layout';

const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "cs",
            element: <Cs />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "blog",
            element: <Blog />
          },
          {
            path: "services",
            element: <Services />
          },
          {
            path: "contacts",
            element: <Contact />
          }
        ]
      }
    ]);
    return <>
    <RouterProvider router={router}> </RouterProvider>
    </>
}

export default App