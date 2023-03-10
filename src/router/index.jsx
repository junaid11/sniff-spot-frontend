import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const ListSpotPage = React.lazy(() => import('../pages/ListSpotPage'));
const EditSpotPage = React.lazy(() => import('../pages/EditSpotPage'));
const ShowSpotListingPage = React.lazy(() => import('../pages/ShowSpotListingPage'));

function Router() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-a-spot" element={<ListSpotPage />} />
        <Route path="/edit/:id" element={<EditSpotPage />} />
        <Route path="/show/:id" element={<ShowSpotListingPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
