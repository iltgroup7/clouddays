var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var users;
var members;

var con = mysql.createConnection({
  host: 'aa2dzkdp4hp7ob.cp6f73a0po5w.eu-central-1.rds.amazonaws.com',
  user: 'grupa7',
  password: 'grupa7fcd',
  database: 'ebdb',
});

con.connect(
  function(err){
    if(err){
      console.log("error");
      return;
    }
    console.log("success");
  }
);

con.query(
  'SELECT name, id FROM team',
  function(err, result){
    if(err) throw err;
    if(result.length > 0){
      users = result;
    }
    else{
      users = null;
    }
  }
);


con.end(
  function(err){
    if(err){
      console.log("error end");
      
    }
    
  }
);


  router.get('/',  function( req, res) {
    
    res.render('users', {
        title: 'Anketa',
        message: 'Lista na timovi',
        users:users
      });
  });

module.exports = router;
