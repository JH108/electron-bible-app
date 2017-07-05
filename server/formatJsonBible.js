const fs = require('fs');
const _ = require('lodash');

export const booksOfBibleInOrder = [
  'Genesis',
  'Exodus',
  'Leviticus',
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1 Samuel',
  '2 Samuel',
  '1 Kings',
  '2 Kings',
  '1 Chronicles',
  '2 Chronicles',
  'Ezra',
  'Nehemiah',
  'Esther',
  'Job',
  'Psalms',
  'Proverbs',
  'Ecclesiastes',
  'Song of Solomon',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
  'Matthew',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans',
  '1 Corinthians',
  '2 Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1 Thessalonians',
  '2 Thessalonians',
  '1 Timothy',
  '2 Timothy',
  'Titus',
  'Philemon',
  'Hebrews',
  'James',
  '1 Peter',
  '2 Peter',
  '1 John',
  '2 John',
  '3 John',
  'Jude',
  'Revelation'
];

const countChaptersAndVerses = esvBible => {
  let bookArray = [],
      currentBook = '',
      currentChapter = '',
      cc = 0,
      vc = 0;
  for (let book in esvBible) {
    _.forEach(esvBible[book], (c) => cc++)
    _.forEach(esvBible[book], (c) => _.forEach(c, (v) => vc++));
    bookArray.push({
      name: book,
      chapters: cc,
      verses: vc
    });
    cc = 0;
    vc = 0;

  }
  return bookArray.sort((a, b) => {
    return booksOfBibleInOrder.indexOf(a.name) - booksOfBibleInOrder.indexOf(b.name);
  });
};

export const getBook = (book) => {
  let bookChapters = {};
  let verses = [];

  _.forEach(book, (chapter, key) => {
    _.forEach(chapter, (verse, key) => {
      verses.push({ verse, key });
    });
    // sorting to ensure order of verses since objects aren't guarenteed to be ordered
    bookChapters[key] = verses.sort((a, b) => {
      return parseInt(a.key) - parseInt(b.key)
    }).map(v => v.verse).join(' ');
  });

  return bookChapters;
};

// code to read the bible from a file with slight modifications depending on the file type
// const bibleStream = fs.createReadStream('./esvBibleJson.json');
// let bible = '';
// bibleStream
//   .on('data', chunk => {
//     bible += chunk;
//   })
//   .on('end', () => {
//     let parsedBible = JSON.parse(bible);
//     // countChaptersAndVerses(parsedBible);
//     getBookOfJoel(parsedBible.Joel);
//   });
