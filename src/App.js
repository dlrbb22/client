import React, { Fragment } from 'react';
import './App.css';


// Components

import ListNotifications from './components/ListNotifications';

function App() {
  return (<Fragment>
    <div class="container mt-5">
      <ListNotifications />
    </div>
  </Fragment>);
};

export default App;
