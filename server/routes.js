import path from 'path';
import bible from './esvBibleJson.json';
import formattedBible from './formattedEsvBible.json';
import { booksOfBible } from './formatJsonBible.js';
import { forEach } from 'lodash';

const Routes = (app) => {
  app.get('/chapters/:book', (req, res) => {
    let book = req.params.book;
    let chapters = [];
    forEach(formattedBible[book], (chapter, key) => chapters.push(key));
    chapters = chapters.sort((a, b) => a - b);
    res.send(JSON.stringify(chapters));
  });

  app.get('/booksOfBible', (req, res) => {
    res.send(JSON.stringify(booksOfBible));
  });

  app.get('/bible/query', (req, res) => {
    let book = req.query.book;
    let chapter = req.query.chapter;
    res.send(JSON.stringify({
      chapter,
      book,
      chapterText: formattedBible[book][chapter]
    }));
  });

  // since the app is an spa I need to serve the html everytime a new url is hit. Otherwise you cannot navigate by typing an url into the address bar
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
