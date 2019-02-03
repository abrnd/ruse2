const http = require("http");
const path = require("path");
const fs = require("fs");

var express = require('express');
var router = express.Router();
var controller = require('../controller');

/* GET home page. */
router.get('/', controller.home);
router.get('/ruse', controller.admin);

router.post('/post.html', controller.viewValue);
router.post('/upload', controller.upload);

router.get('/', express.static(path.join(__dirname, "./public")));
module.exports = router;
