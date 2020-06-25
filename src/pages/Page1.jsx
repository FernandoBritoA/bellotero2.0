import React, { useEffect } from 'react';
import Slider from '../components/Slider/Slider';

import { connect } from 'react-redux';
import { getSlider } from '../redux/fetchData/fetchData.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsSliderLoaded } from '../redux/fetchData/fetchData.selectors';

const Page1 = ({ getSlider, isSliderLoaded }) => {
  useEffect(() => {
    if (!isSliderLoaded) {
      getSlider();
    }
  }, [getSlider, isSliderLoaded]);

  return isSliderLoaded ? <Slider /> : null;
};

const mapDispatchToProps = (dispatch) => ({
  getSlider: () => dispatch(getSlider()),
});

const mapStateToProps = createStructuredSelector({
  isSliderLoaded: selectIsSliderLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
