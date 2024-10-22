import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cs, Home } from './pages/routes/Route';
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
          }
        ]
      }
    ]);
    return <>
    <RouterProvider router={router}> </RouterProvider>
    </>
}

export default App