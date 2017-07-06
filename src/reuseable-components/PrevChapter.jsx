import React from 'react';

const PrevChapter = ({

}) => (
  <div
  style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }}
  onClick={(event) => console.log('prev was clicked') }
  >
    <span><img src={'images/previous-arrow.png'}/></span>
    <h1 className="prev-text">Prev Chapter</h1>
  </div>
);

export default PrevChapter;