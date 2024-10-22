import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Blog, Contact, Cs, Home, Services } from './pages/routes/Route';
import Layout from './pages/Layout/Layout';

const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Suspense fallback={""}><Layout /></Suspense>,
        children: [
          {
            index: true,
            element: <Suspense fallback={""}><Home /></Suspense>
          },
          {
            path: "cs",
            element: <Suspense fallback={""}><Cs /></Suspense>
          },
          {
            path: "about",
            element: <Suspense fallback={""}><About /></Suspense>
          },
          {
            path: "blog",
            element: <Suspense fallback={""}><Blog /></Suspense>
          },
          {
            path: "services",
            element: <Suspense fallback={""}><Services /></Suspense>
          },
          {
            path: "contacts",
            element: <Suspense fallback={""}><Contact /></Suspense>
          }
        ]
      }
    ]);
    return <>
    <RouterProvider router={router}> </RouterProvider>
    </>
}

export default App