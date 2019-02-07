const multer = require("multer");
const { join } = require("path");
const fs = require('fs');

const categoriesJsonPath = './public/gallery/categories.json';

module.exports.home = (req,res,next)=>{

  //get all directories name

  var paths = ['images/a.jpg','images/b.jpg','images/c.jpg'];

//en foncion de leur path???

//Interception 

 	res.render('gallery', { imgs: paths, layout:false});
};

module.exports.admin = (req, res, next)=>{
	res.render('admin', {});
};

module.exports.viewValue = (req, res, next)=>{
	var p1 = req.body.p1;
	console.log('p1 = ' + p1);
  res.redirect('/ruse');
};

module.exports.test = (req, res, next)=>{
  console.log(module.exports);
  console.log('filename : ');
  console.log(module.filename);
  res.redirect('/');
};

module.exports.update = (req, res, next)=>{
  var test = getDirectories('./public');
  console.log(test);
};

//return list of dirctorie in array

function updateCategoriesJson() {

  var fileName = './categories.json';
  var file = require(fileName);

  file.key = 'test';

  fs.writeFile(fileName, JSON.stringify(file), function(err){
    if(err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('Ok, wrtiting to ' + fileName);
  });
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
};