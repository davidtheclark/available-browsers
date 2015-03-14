var Promise = require('es6-promise').Promise;
var queue = require('queue-async');
var browsers = require('./lib/browsers');

var foundBrowsers = {};

module.exports = function(cb) {
  return new Promise(function(resolve) {
    var finisher = cb || resolve;
    var q = queue();

    browsers.forEach(function(b) {
      q.defer(checkBrowser, b);
    });

    q.awaitAll(function() { finisher(foundBrowsers); });
  });
};

function checkBrowser(b, next) {
  b.locater().then(function(res) {
    if (!res) {
      next();
      return;
    }
    foundBrowsers[b.name] = {
      path: res
    };
    next();
  });
}
