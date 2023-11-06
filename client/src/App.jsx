import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import productData from './api/Api';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import Loader from './components/Loader';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SingleProduct = lazy(() => import('./components/SingleProduct'));
const Shop = lazy(() => import('./pages/Shop'));
const Blog = lazy(() => import('./pages/Blog'));

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

const AuthLayout = () => {
  return (
    <Outlet />
  );
};

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
        loader: productData
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        loader: productData,
        element: (
          <Suspense fallback={<Loader />}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: '/blog',
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <SingleProduct />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/privacy-policy',
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);


const authRouter = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
]);


const App = () => {
  const userInfo = useSelector((state) => state.counter.userInfo);
  return (
    <>
      <RouterProvider router={userInfo ? mainRouter : authRouter} />    </>
  );
};

export default App;
