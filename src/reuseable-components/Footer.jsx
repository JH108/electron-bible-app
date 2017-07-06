import React from 'react';

const Footer = ({ selectedBook, selectedChapter, activateReadingView }) => (
  <div className="footer">
    <h1 className="start-reading-now" onClick={() => activateReadingView({ selectedBook, selectedChapter })} >START READING NOW</h1>
  </div>
);

export default Footer;
