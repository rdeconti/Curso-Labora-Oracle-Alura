// load up our shiny new route for users
const bennuRoutes = require('./bennu');

const appRouter = (appJson, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  appJson.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  // run our user route module here to complete the wire up
  bennuRoutes(appJson, fs);
};

// this line is unchanged
module.exports = appRouter;
