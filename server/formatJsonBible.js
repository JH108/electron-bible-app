const fs = require('fs');
const bible = require('./esvBibleJson.json');
const _ = require('lodash');

const booksOfBibleInOrder = [
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

const countChapters = esvBible => {
  let bookArray = [],
      currentBook = '',
      currentChapter = '',
      cc = 0;
  for (let book in esvBible) {
    _.forEach(esvBible[book], (c) => cc++);
    bookArray.push({
      name: book,
      chapters: cc
    });
    cc = 0;
  }
  return bookArray.sort((a, b) => {
    return booksOfBibleInOrder.indexOf(a.name) - booksOfBibleInOrder.indexOf(b.name);
  });
};

const getBook = (book) => {
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
    verses = [];
  });

  return bookChapters;
};

let formattedBible = {};

_.forEach(bible, (book, key) => {
  let formattedBook = getBook(book);
  formattedBible[key] = formattedBook;
});
// make sure the formatted bible and the original json bible contain the same books and number of chapters
  // formatting concatenated all verses which is why I don't check for those to match
if (JSON.stringify(countChapters(bible)) === JSON.stringify(countChapters(formattedBible))) {
  fs.writeFile('./formattedEsvBible.json', JSON.stringify(formattedBible), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
    console.log('file was saved');
  });
}

// code to read the bible from a file with slight modifications depending on the file type
// const bibleStream = fs.createReadStream('./esvBibleJson.json');
// let bible = '';
// bibleStream
//   .on('data', chunk => {
//     bible += chunk;
//   })
//   .on('end', () => {
//     let parsedBible = JSON.parse(bible);
//     // countChapters(parsedBible);
//     getBookOfJoel(parsedBible.Joel);
//   });
