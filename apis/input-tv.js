var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var inputTV = function(res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.start_app("com.webos.app.livetv", function(err, response){
        if (!err) {
          res.send('success')
          return
        } else {
	  res.send('failure')
	}
      });
    }
  });
};

router.get('/', function (req, res) {
  inputTV(res)
});

module.exports = router;

