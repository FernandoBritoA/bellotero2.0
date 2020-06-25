import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Page1 from './pages/Page1';

import { connect } from 'react-redux';
import { getMenu } from './redux/menu/menu.actions';

const App = ({ getMenu }) => {
  useEffect(() => {
    getMenu();
  }, [getMenu]);
  return (
    <div className='App'>
      <Menu />
      <Switch>
        <Route exact path='/' component={Page1} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMenu: () => dispatch(getMenu()),
});

export default connect(null, mapDispatchToProps)(App);
