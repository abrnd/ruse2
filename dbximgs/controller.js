const multer = require("multer");
const path = require("path");

const upload = multer({
  dest: "fileprint/"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports.home = (req,res,next)=>{
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
}

module.exports.upload = (req, res, next)=>{


  console.log(req.file);
  console.log(req);

	const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./public/image/pic.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res.status(200).contentType("text/plain").end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res.status(403).contentType("text/plain").end("Only .png files are allowed!");
      });
  }
};