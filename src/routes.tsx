import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ForkJourneyPage from './pages/fork-journey';

// Lazy load components for code splitting (except HomePage for instant loading)
const isDevelopment = import.meta.env.MODE === 'development';
const NotFoundPage = isDevelopment ? lazy(() => import('./devtools/PageNotFound')) : lazy(() => import('./pages/_404'));
const PenJourneyPage = lazy(() => import('./pages/pen-journey'));
const HardDiskJourneyPage = lazy(() => import('./pages/hard-disk-journey'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pen',
    element: <PenJourneyPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/hard-disk',
    element: <HardDiskJourneyPage />,
  },
  {
    path: '/fork',
    element: <ForkJourneyPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/pen' | '/fork';

export type Params = Record<string, string | undefined>;
