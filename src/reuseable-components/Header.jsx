import React from 'react';
import MenuButton from './MenuButton';

const Header = ({
  toggleToc,
  selectedChapter,
  selectedBook,
  tocActive
}) => (
  <div className="header">
    <MenuButton
      toggleToc={toggleToc}
      tocActive={tocActive}
    />
    { selectedChapter && selectedBook ?
      <h1 className="esv-bible">
        { `${selectedBook} ${selectedChapter}` }</h1>
      : <h1 className="esv-bible">
        ESV Bible</h1>
    }
  </div>
);

export default Header;
