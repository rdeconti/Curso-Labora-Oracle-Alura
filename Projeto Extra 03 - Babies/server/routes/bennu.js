const bennuRoutes = (app, fs) => {
  // variables
  const dataPath = './data/bennu.json';

  // READ
  app.get('/bennu', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));

    });
  });
};

module.exports = bennuRoutes;
