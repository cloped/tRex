console.log('Making deploy!');

var ghpages = require('gh-pages');

ghpages.publish('dist', {
  repo: 'https://github.com/cloped/tRex.git',
  add: true,
}, function (err) {
  if (!err) {
    console.log('Deploy done!');
  } else {
    console.log(err);
    console.log('Failed deploy.');
  }
});
