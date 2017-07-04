import path from 'path';

const Routes = (app) => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
