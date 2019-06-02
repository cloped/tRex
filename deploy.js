console.log('Making deploy!');

var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com:cloped/tRex.git',
  add: true,
  message: 'auto-generated commit deploy',
  push: true,
}, function(err) {
  if(!err){
    console.log('Deploy done!');
  } else {
    console.log(err);
    console.log('Failed deploy.');
  }
});
