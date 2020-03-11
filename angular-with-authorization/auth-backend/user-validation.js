const webToken = require('./json-web-token');

exports.userValidation = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    const credentials = JSON.parse(body);
    if(credentials.email === 'test' && credentials.password === '1234') {
      const user = {
        id: 456,
        name: 'Michal',
        role: 'ADMIN'
      }
      return res.end(JSON.stringify({
        ...user,
        token: webToken.makeNewToken(user)
      }));
    }
    res.statusCode = 401;
    res.end(body);
  });

}

exports.secretValidation = function(req, res) {
  const authToken = req.headers['authorization'];
  if(authToken) {
    res.setHeader('Content-Type', 'application/json');
    try {
      const payload = webToken.verifyToken(authToken);
      return res.end(JSON.stringify({
        user: payload.name,
        role: payload.role
      }));
    } catch {}
  }
  res.statusCode = 403;
  res.end('')
}
