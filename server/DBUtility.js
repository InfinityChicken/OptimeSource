var mysql = require("mysql");
require('dotenv').config()

var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: 'defaultdb'
});

console.log(eventObject(1)); // | The base function to fetch an event.

function eventObject(tag) {

  let event = {
      tag: tag, //string
      name: "", //string
      description: "", //string
      startTime: "",
      endTime: "",
      // duration: "",
      // draft: "", //will return 0 or 1 -- 0 = false, 1 = true
      // progress: "", //will return in-progress, finished, or upcoming
      //color: database.query(),
  }

  database.query("SELECT * FROM events WHERE eventID=1", function (err, result, fields) {
    if (err) throw err;
      result.forEach((row) => {
      // console.log(row.description);
      event.name = row.name;
      event.description = row.description;
      event.startTime = row.startTime;
      event.endTime = row.endTime;
      console.log(event.description);
      event.eventType = row.eventType;

      console.log(event);
    });
  });
  console.log(event);
  return event;
}

async function userObject(username) { //TODO: finish this
  return new Promise((resolve, reject) => {
    user = {}
    database.query(`SELECT * FROM user_info WHERE id='${username}'`, function (err, result, fields) {
      if (err) throw err;
        result.forEach((row) => {
        // console.log(row.description);
          user = {
            id: row.id,
            email: row.email,
            password: row.password,
            tag: row.tag
          }
        resolve(user);
      });
    });
  })
}

function addEvent(event) {
    var sql = "INSERT INTO events (name, description, startTime, endTime, eventType) VALUES ('" + event.name + "', '" + event.description + "','" + event.startTime + "','" + event.endTime + "','" + event.eventType + "')";
  database.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`1 new event added`);
  });
}

function addUser() {}

function rsvpStatus(userTag, eventTag) {
  return {
    rsvpStatus: database.query(),
  }
}

function userYesEvents(userTag) {
  return {
    events: database.query(`SELECT ${userTag}, eventID FROM RSVPs`),
    rsvpStatus: database.query(`SELECT ${userTag}`),
  };
}

function userExists(username) {
  return new Promise((resolve, reject) => {
    user = {}
  })
}

function deleteEvent(eventTag) {}

// function writeToEvents() { TODO: is this necessary?
//   return null;
// }

// function writeToUsers() {
//   return null;
// }

// function writeToRSVPs() {
//   return null;
// }

module.exports = {eventObject, userObject, database}

// module.exports.eventObject = eventObject;
// module.exports.userObject = userObject;
// module.exports.database = database;