lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var channelUp = function(res) {
        console.log("Found TV at address running example.");
        lgtv.connect(CONFIG.lgtvip, function(err, response){
          if (!err) {
            lgtv.input_channel_up(function(err, response){
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
  channelUp(res)
});

module.exports = router;
