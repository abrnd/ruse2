const http = require("http");
const path = require("path");
const fs = require("fs");

var express = require('express');
var router = express.Router();
var controller = require('../controller');

/* GET home page. */
router.get('/', controller.home);
router.get('/ruse', controller.admin);
router.get('/test', controller.test);

router.post('/post.html', controller.viewValue);
router.post('/upload', controller.upload);

//router.get('/ruse', express.static(path.join(__dirname, "./views")));


module.exports = router;
