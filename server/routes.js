import path from 'path';
import bible from './esvBibleJson.json';
import formattedBible from './formattedEsvBible.json';
import { forEach } from 'lodash';

const Routes = (app) => {
  app.get('/chapters/:book', (req, res) => {
    let book = req.params.book;
    let chapters = [];
    forEach(formattedBible[book], (chapter, key) => chapters.push(key));
    chapters = chapters.sort((a, b) => a - b);
    res.send(JSON.stringify(chapters));
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
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
