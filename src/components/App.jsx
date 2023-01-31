import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Section } from './Section';
import { AuthError } from './AuthError';
import { HeaderBar } from './HeaderBar';
import { FooterBar } from './FooterBar';

import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const About = lazy(() => import('../pages/About'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <HeaderBar />
      <AuthError />
      <Suspense fallback={<Section title="Loading..." />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <Navigate to="/" />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
      <FooterBar />
    </>
  );
};
