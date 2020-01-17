const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes()
  .add('portfolios', '/portfolio/:id')
  .add('portfolioEdit', '/portfolios/:id/edit');
