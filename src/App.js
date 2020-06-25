import React, { useEffect } from 'react';
import './App.css';
import bgImg from './bgImg.jpg';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import { connect } from 'react-redux';
import { getMenu } from './redux/fetchData/fetchData.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuLoaded } from './redux/fetchData/fetchData.selectors';

const App = ({ getMenu, isMenuLoaded }) => {
  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return isMenuLoaded ? (
    <div className='App'>
      <div
        className='bg-img'
        style={{
          backgroundImage: `url(${bgImg})`,
          width: '100vw',
          height: '100vh',
        }}
      />
      <Menu />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/page-1' component={Page1} />
        <Route exact path='/page-2' component={Page2} />
      </Switch>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  isMenuLoaded: selectIsMenuLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getMenu: () => dispatch(getMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
