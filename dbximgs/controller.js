const multer = require("multer");
const { join } = require("path");
const fs = require('fs');

const categoriesJsonPath = './public/galleries/categories.json';

module.exports.home = (req,res,next)=>{

  //get all directories name

  //TODO : un parse possiblement évitable, revoir le format de l'obj JSON

  var categoriesObj = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));
  var categoryList = JSON.parse(categoriesObj.categoriesList);
  
  categoryList.forEach(function(element, index){
  	console.log(element, index);
  });


  //dans un premier temps, générer le path de la premiere gallery :
  
  var paths = ['images/a.jpg','images/b.jpg','images/c.jpg'];

  var jsonCategories = fs.readFileSync('./public/galleries/categories.json');
  var categoriesName = JSON.parse(jsonCategories);
  console.log(categoriesName);

//en foncion de leur path???
//Interception
 	res.render('gallery', { imgs: paths, categories: categoryList, layout:false});
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

//TODO : get nombre image per dir

module.exports.update = (req, res, next)=>{
  var categoriesList = getDirectories('./public/galleries');
  updateCategoriesJson(categoriesList);
  console.log("here : ");
  console.log(categoriesList);
  console.log(typeof categoriesList);


};

//return list of dirctorie in array

function updateCategoriesJson(categoriesList) {

  var fileName = './public/galleries/categories.json';
  var file = require(fileName);

  categoriesList = categoriesList.map(x => x.trim());

  console.log('la ');
  console.log(categoriesList);

  file.categoriesList = JSON.stringify(categoriesList);

  console.log('ici : ');
  console.log(file);

  fs.writeFile(fileName, JSON.stringify(file), function(err){
    if(err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('Ok, wrtiting to ' + fileName);
  });
}

function getNbFile(path){
	return fs.readdir(path, (err, files) => {
  console.log(files.length);
});
};

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
};