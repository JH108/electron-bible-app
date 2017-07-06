import React from 'react';

const NextChapter = ({
  nextChapter
}) => (
  <div
    className="next-chapter"
    onClick={nextChapter}
  >
    <h1 className="next-text">Next Chapter</h1>
    <img src={'images/next-arrow.png'}/>
  </div>
);

export default NextChapter;