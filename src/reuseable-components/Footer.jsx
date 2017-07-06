import React from 'react';
import PrevChapter from './PrevChapter';
import NextChapter from './NextChapter';

const Footer = ({
  selectedBook,
  selectedChapter,
  activateReadingView,
  readingViewActive
}) => (
  <div className="footer">
    { readingViewActive ?
      <div style={{
        display: 'flex',
        width: '1024px',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <PrevChapter />
        <NextChapter />
      </div>
      :
      <h1
        className="start-reading-now"
        onClick={() => activateReadingView({ selectedBook, selectedChapter })}
      >START READING NOW</h1>
    }
  </div>
);

export default Footer;
