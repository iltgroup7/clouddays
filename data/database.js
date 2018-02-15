var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'aa2dzkdp4hp7ob.cp6f73a0po5w.eu-central-1.rds.amazonaws.com',
  user: 'grupa7',
  password: 'grupa7fcd',
  database: 'ebdb',
});

exports.getTeams = function( callback) {
    var sql = "SELECT name FROM team ";

      // make the query
      con.query(sql, function(err, results) {
        con.release();
        if(err) { console.log(err); callback(true); return; }
        callback(false, results);
      });
    
  };

  exports.getTeamMembers = function( callback) {
    var sql = "SELECT user_id FROM team_member";

      // make the query
      con.query(sql, function(err, results) {
        con.release();
        if(err) { console.log(err); callback(true); return; }
        callback(false, results);
      });
    
  };

  exports.getQuestions = function( callback) {
    var sql = "SELECT text FROM question ";

      // make the query
      con.query(sql, function(err, results) {
        con.release();
        if(err) { console.log(err); callback(true); return; }
        callback(false, results);
      });
    
  };