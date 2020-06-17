import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={Bookmarks} path="/bookmarks" />
    </BrowserRouter>
  );
};

export default Routes;
