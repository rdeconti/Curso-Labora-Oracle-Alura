const potionsRoutes = (app, fs) => {
  // variables
  const dataPath = './public/data/potions.json';

  // READ
  app.get('/potions', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = potionsRoutes;
