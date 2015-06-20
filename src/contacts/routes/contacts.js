var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET contacts */
var contacts=[];
var count=0,msg_count=0;
var messages=[];
var msg = new Object();

var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "C:\\Users\\munna srujan\\Desktop\\mrndContacts\\src\\contacts\\data\\" + id + "-Contact.json";
}

var getMessageFileName = function(id,mid) {
	return "C:\\Users\\munna srujan\\Desktop\\mrndContacts\\src\\contacts\\data\\" + id + "_"+mid+"-Message.json";
}


router.get('/:id', function(req, res, next) {
	var fileName = getContactFileName(req.params.id);
	var obj = JSON.parse(fs.readFileSync(fileName));
	res.json(obj);
});

router.post('/', function(req, res, next) {
 // console.log(req.body);
  var name=getContactFileName(count);
  console.log(name);
  var s = JSON.stringify(req.body);
  fs.writeFile(name, s,function(err,data){
  	//console.log(req.body);
  }); 

  count++;
  res.json(count-1);
});

router.put('/:id', function(req, res, next) {
	var fileName = getContactFileName(req.params.id);
	var obj = JSON.parse(fs.readFileSync(fileName));
	obj.firstName = req.body.firstName;
	var s = JSON.stringify(obj);
  	fs.writeFile(fileName, s, function(err,data) {
    //console.log("The file was saved!");
}); 
	res.json(obj);
});


router.post('/msg', function(req, res, next) {
	var msg = req.body;
	var fileName = getContactFileName(msg.cid);
	var obj = JSON.parse(fs.readFileSync(fileName));
	var last=parseInt(obj.last);
	obj.last=last+1;
	var s = JSON.stringify(obj);
  	fs.writeFile(fileName, s, function(err,data) {});
	var file= getMessageFileName(msg.cid,last);
	var s = JSON.stringify(msg.data);
  	fs.writeFile(file, s,function(err,data){
  	});
	res.json(last);
});

router.get('/msg/:cid/:mid', function(req, res, next) {
	var file=getMessageFileName(req.params.cid,req.params.mid);
	var obj = JSON.parse(fs.readFileSync(file));
	res.json(obj);
});
module.exports = router;
