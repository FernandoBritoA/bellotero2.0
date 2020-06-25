import React, { useState } from 'react';
import './Slider.css';
import Review from '../Review/Review';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSlider } from '../../redux/slider/slider.selectors';

const Slider = ({ slider }) => {
  const { title, reviews } = slider;
  const [index, setIndex] = useState(0);

  const changeSlide = (direction) => {
    const length = reviews.length - 1;
    switch (direction) {
      case 'left':
        setIndex((prevI) => (prevI === 0 ? length : --prevI));
        break;
      case 'right':
        setIndex((prevI) => (prevI === length ? 0 : ++prevI));
        break;
      default:
        break;
    }
  };

  return (
    <div className='slider-overlay'>
      <div className='slider-container'>
        <h1 className='slider-title'>{title}</h1>
        <Review props={reviews[index]} />

        <div className='arrow-buttons'>
          <div className='current'>{`${index + 1}/${reviews.length}`}</div>
          <button className='arr-btn' onClick={() => changeSlide('left')}>
            {'<'}
          </button>
          <button className='arr-btn' onClick={() => changeSlide('right')}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  slider: selectSlider,
});

export default connect(mapStateToProps)(Slider);
