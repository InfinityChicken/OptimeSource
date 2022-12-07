/* TODO:
-add files and set up:
  -event creation/modification
  -user signup
  -smart calculation
  -rsvping
  -login
  -event 
*/

var mysql = require("mysql");



console.log(process.env.HOST);
var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

createEventObject();

function createEventObject(tag) {

  database.query("SELECT * FROM EVENTS WHERE EVENTID=1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  let event = {
    tag: tag, //TODO: get tag from html
    name: database.query(), //TODO: add parameters
    description: database.query(),
    startTime: database.query(),
    endTime: database.query(),
    duration: database.query(),
    draft: database.query(), //will return 0 or 1 -- 0 = false, 1 = true
    //color: database.query(),
  }

  return event;
}


function createUserObject(tag) {
  let user = {
    tag: tag, //TODO: get tag from html
    username: database.query(), //TODO: add parameters
    password: database.query(),
    email: database.query(),
    firstName: database.query(),
    lastName: database.query(),
  //status: database.query(),
  }
  return user;
}

function createRSVPObject(eventTag) {
  let rsvp = {
    event: eventTag,
    users: (database.query()).split("")
  }
}