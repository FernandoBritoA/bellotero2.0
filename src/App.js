import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Page1 from './pages/Page1';

const App = () => {
  return (
    <div className='App'>
      <Menu />
      <Switch>
        <Route exact path='/' component={Page1} />
      </Switch>
    </div>
  );
};

export default App;
