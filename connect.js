//mySQL database driver module (node.js can use this module to manipulate mysql database)
var mysql = require("mysql");

//create connection with mysql database
//CREATE USER 'rihab IDENTIFIED WITH mysql_native_password BY 'rihab';  (make user and password as you like to connect to it on mysql workbench)
var con = mysql.createConnection({
  host: "localhost",
  user: "rihab",
  password: "rihab",
  database: "mydb"
});

// /usr/local/mysql/bin/mysql -u <username> -p (to connect in command line) then enter password rihab
//by error deny i should change user privileges and give all privileges to user

con.connect(function(err) {
  if (err) throw err;
  console.log("connected yuhu");
  con.query("SELECT * FROM mydb.user;", function(err, result) {
    if (err) throw err;
    console.log("table created ",result);
  });
});
