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
var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

function eventObject(tag) {
    return {
      tag: tag, //string
      name: database.query(), //string
      description: database.query(), //string
      startTime: database.query(), 
      endTime: database.query(),
      duration: database.query(),
      draft: database.query(), //will return 0 or 1 -- 0 = false, 1 = true
      progress: database.query(), //will return in-progress, finished, or upcoming
      //color: database.query(),
  }
}

// database.query("SELECT * FROM EVENTS WHERE EVENTID=1", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

function userObject(tag) {
  return {
    tag: tag, //TODO: get tag from html
    username: database.query(), //TODO: add parameters
    password: database.query(),
    email: database.query(),
    firstName: database.query(),
    lastName: database.query(),
    //status: database.query(),
  };
}

function rsvpStatus(userTag, eventTag) {
  return {
    rsvpStatus: database.query(),
  }
}

function userEvents(userTag) {
  return {
    events: database.query("SELECT "+userTag+", eventID FROM RSVPs"),
    rsvpStatus: database.query("SELECT "+userTag+""),
  };
}

function eventInvitees(eventTag) {  
  return {
    users: database.query(),
    rsvpStatuses: database.query(),
  };
}

function writeToEvents() {
  return null;
}

function writeToUsers() {
  return null;
}

function writeToRSVPs() {
  return null;
}

module.exports.eventObject = eventObject;
module.exports.userObject = userObject;
module.exports.database = database;
