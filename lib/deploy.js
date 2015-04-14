var prompt = require('prompt');

prompt.message = '';
prompt.delimiter = '';

prompt.start();

var deploy = {};

deploy.start = function () {
  
  prompt.get(['github name:'], function (err, result) {
    console.log("You said your name is: ".cyan + result['github name:'].rainbow);
  });
};

module.exports = deploy;
