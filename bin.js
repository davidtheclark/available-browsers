#!/usr/bin/env node

var locateBrowsers = require('./');

locateBrowsers().then(function(r) {
  console.log(r);
});
