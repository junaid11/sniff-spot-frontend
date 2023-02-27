import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faCircleCheck,
  faLocationDot,
  faCircleUser
} from '@fortawesome/free-solid-svg-icons';

import Router from './router';
import AppNavBar from './components/Navbar';

library.add(faStar, faCircleCheck, faLocationDot, faCircleUser);

function App() {
  return (
    <>
      <AppNavBar />
      <Router />;
    </>
  );
}

export default App;
