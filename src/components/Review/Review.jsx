import React from 'react';
import './Review.css';

const Review = ({ props }) => {
  const { name, position, comment } = props;
  return (
    <div className='review'>
      <div className='name-position'>
        <h1 className='name'>{name}</h1>
        <h4 className='position'>{position}</h4>
      </div>

      <p className='comment'>{comment}</p>
    </div>
  );
};

export default Review;
