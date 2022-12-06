var mysql = require('mysql');

var database = mysql.createConnection({
  host: "db-mysql-sfo2-08056-do-user-12828580-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_kQdRQend-O5pER2pz-i",
  port: "25060",
  database: "defaultdb",
});

database.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});