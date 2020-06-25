import React, { useEffect } from 'react';
import Slider from '../components/Slider/Slider';

import { connect } from 'react-redux';
import { getSlider } from '../redux/slider/slider.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectIsSliderLoading,
  selectIsSliderLoaded,
} from '../redux/slider/slider.selectors';

const Page1 = ({ getSlider, isSliderLoading, isSliderLoaded }) => {
  useEffect(() => {
    if (!isSliderLoaded) {
      getSlider();
    }
  }, [getSlider, isSliderLoaded]);

  return isSliderLoading ? null : <Slider />;
};

const mapDispatchToProps = (dispatch) => ({
  getSlider: () => dispatch(getSlider()),
});

const mapStateToProps = createStructuredSelector({
  isSliderLoading: selectIsSliderLoading,
  isSliderLoaded: selectIsSliderLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
