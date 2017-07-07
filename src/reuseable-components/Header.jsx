import React from 'react';
import MenuButton from './MenuButton';

const Header = ({
  toggleToc,
  selectedChapter,
  selectedBook
}) => (
  <div className="header">
    <MenuButton toggleToc={toggleToc}/>
    { selectedChapter && selectedBook ?
      <h1 className="esv-bible">
        { `${selectedBook} ${selectedChapter}` }</h1>
      : <h1 className="esv-bible">
        ESV Bible</h1>
    }
  </div>
);

export default Header;
