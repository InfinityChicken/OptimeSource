/* TODO:
-add files and set up:
  -event creation/modification
  -user signup
  -smart calculation
  -rsvping
  -login
  -event 
*/

require("dotenv").config();

var mysql = require("mysql");

var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

<<<<<<< Updated upstream
function createEventObject(tag) {
  let event = {
    tag: tag, //TODO: get tag from html
    name: database.query(), //TODO: add parameters
    description: database.query(),
    startTime: database.query(),
=======
function eventObject(tag) {
  return {
    tag: tag, //string
    name: database.query(), //string
    description: database.query(), //string
    startTime: database.query(), 
>>>>>>> Stashed changes
    endTime: database.query(),
    duration: database.query(),
    draft: database.query(), //will return 0 or 1 -- 0 = false, 1 = true
    progress: database.query(), //will return in-progress, finished, or upcoming
    //color: database.query(),
  }
  return event;
}

<<<<<<< Updated upstream
function createUserObject(tag) {
  let user = {
=======
function userObject(tag) {
  return {
>>>>>>> Stashed changes
    tag: tag, //TODO: get tag from html
    username: database.query(), //TODO: add parameters
    password: database.query(),
    email: database.query(),
    firstName: database.query(),
    lastName: database.query(),
<<<<<<< Updated upstream
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
=======
    //status: database.query(),
  };
}

function userRSVP(userTag, eventTag) {
  return {
    rsvpStatus: database.query(),
  }
}

function userEvents(userTag) {
  let events = [];
  while (true) {
    const currentEvent = database.query();
    events += currentEvent;
    if (database.query() = null) {
      break;
    } 
  }
  return {
    events,
    rsvpStatus: database.query(),
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
>>>>>>> Stashed changes
