const express = require('express');
const next = require('next');

//SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const secretData = [
  {
    title: 'Secret 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'Secret 2',
    description: 'My secret password'
  }
];

app.prepare()
  .then(() => {
    const server = express();

    server.get('/api/v1/secret', authService.checkJWT, (req, res)=> {
      return res.json(secretData);
    });

    server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('admin'), (req, res)=> {
      return res.json(secretData);
    });

    server.get('/portfolio/:id', (req,res) => {
      const actualPage = '/portfolio';
      const queryParams = { id: req.params.id };
      add.render(req, res, actualPage, queryParams)
    });

    server.get('*', (req, res) => handle(req, res));

    server.use(function (err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({title: 'Unauthorized', description: 'Unauthorized Access!'});
      }
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('Ready localhost 3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    precess.exit(1);
  });


