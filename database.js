var mysql = require("mysql");

var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: "db-mysql-sfo2-08056-do-user-12828580-0.b.db.ondigitalocean.com",
  user: "NodeJS",
  password: "AVNS_gJkeuKpNtnsOqAj64TM",
  port: "25060",
});

database.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* TODO:
-add files and set up:
  -event creation/modification
  -user signup
  -smart calculation
  -rsvping
  -login
  -event 
*/

function createEventObject(tag) {
  let event = {
    tag: tag, //TODO: get tag from html
    name: database.query(), //TODO: add parameters
    description: database.query(),
    startTime: database.query(),
    endTime: database.query(),
    duration: database.query(),
    //color: database.query(),
  }
  return event;
}

function createUserObject(tag) {
  let user = {
  tag: tag, //TODO: get tag from html
  username: database.query(), //TODO: add parameters
  email: database.query(),
  password: database.query(),
  firstName: database.query(),
  lastName: database.query(),
  //status: database.query(),
  }
}