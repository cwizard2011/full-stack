var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'cwizardseptember' }, function(err, tunnel) {
  console.log('LT running')
});