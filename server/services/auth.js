const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-erzj772m.auth0.com/.well-known/jwks.json'
  }),
  audience: 'xE00CCCb1T6VXJLGYFN7SU79iHJkt1w0',
  issuer: 'https://dev-erzj772m.auth0.com/',
  algorithms: ['RS256']
});

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user;
  if (user && user[namespace + 'role'] === role){
    next()
  } else {
    return res.status(401).send({title: 'Not Authorized', description: 'You are not authorize to access this data'})
  }
};
