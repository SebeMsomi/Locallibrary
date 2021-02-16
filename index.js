var express = require('express');
var router = express.Router();
const app = express();
router.get('/', function(req, res) {
	// res.render('index', { title: 'Express' });
    //res.redirect('/catalog');
	res.send("Hello");

});
app.listen(4000, ()=>
console.log("port running on 4000"));

/* GET home page. that will be redirected to catalog*/


module.exports = router;