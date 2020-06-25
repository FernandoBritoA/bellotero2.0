import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Page1 from './pages/Page1';

import { connect } from 'react-redux';
import { getMenu } from './redux/menu/menu.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuLoading } from './redux/menu/menu.selectors';

const App = ({ getMenu, isMenuLoading }) => {
  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return isMenuLoading ? null : (
    <div className='App'>
      <Menu />
      <Switch>
        <Route exact path='/page-1' component={Page1} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isMenuLoading: selectIsMenuLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getMenu: () => dispatch(getMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
