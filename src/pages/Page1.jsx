import React, { useEffect } from 'react';
import Slider from '../components/Slider/Slider';

import { connect } from 'react-redux';
import { getSlider } from '../redux/slider/slider.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsSliderLoading } from '../redux/slider/slider.selectors';

const Page1 = ({ getSlider, isSliderLoading }) => {
  useEffect(() => {
    getSlider();
  }, [getSlider]);

  return isSliderLoading ? null : <Slider />;
};

const mapDispatchToProps = (dispatch) => ({
  getSlider: () => dispatch(getSlider()),
});

const mapStateToProps = createStructuredSelector({
  isSliderLoading: selectIsSliderLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
