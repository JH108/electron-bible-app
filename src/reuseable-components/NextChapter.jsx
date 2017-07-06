import React from 'react';

const NextChapter = ({

}) => (
  <div
    className="next-chapter"
    onClick={(event) => console.log('next was clicked') }
  >
    <h1 className="next-text">Next Chapter</h1>
    <img src={'images/next-arrow.png'}/>
  </div>
);

export default NextChapter;