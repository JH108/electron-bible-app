import React from 'react';

const PrevChapter = ({
  prevChapter
}) => (
  <div
  style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }}
  onClick={prevChapter}
  >
    <span><img src={'images/previous-arrow.png'}/></span>
    <h1 className="prev-text">Prev Chapter</h1>
  </div>
);

export default PrevChapter;