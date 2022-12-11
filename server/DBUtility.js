var mysql = require("mysql");
require('dotenv').config()


console.log({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: 'defaultdb'
})

var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: "db-mysql-sfo2-08056-do-user-12828580-0.b.db.ondigitalocean.com",
  user: "ServerConnection",
  password: "AVNS_4pp41TTnCLwZafCzIyw",
  port: 25060,
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
    console.log('querying...')
    database.query(`SELECT * FROM user_info WHERE id='${username}'`, function (err, result, fields) {
      console.log('queried')
      if (err) console.log(err)
      if (err) throw err;
      if (result.length == 0) return(resolve(null))
      resolve(result[0]);
    });
  })
}

function rsvpStatus(userTag, eventTag) {
  return new Promise(async (resolve, reject) => {
    database.query(`SELECT * FROM RSVPs WHERE user='${userTag}'`, function (err, result, fields) {
      if (result.length == 0) return(resolve(null)) // not invited
      result = result.filter(result => result.eventID == eventTag)
      resolve(result[0])
    })
  })
}

function userEvents(userTag, status) { //return the events that a user is a part of -- scan RSVPs; if there is a status specific (status that isn't null: yes, no, maybe, or pending), return only the RSVPs that are said status; modify the database if necessary
  return new Promise(async (resolve, reject) => {
    database.query(`SELECT * FROM RSVPs WHERE user='${userTag}'`, function (err, result, fields) {
      if (result.length == 0) return(resolve([]))
      if (status) result = result.filter(r => r.RSVPstatus == status)
      resolve(result)
    })
  })
}

function eventUsers(event) {
  return new Promise(async (resolve, reject) => {
    database.query(`SELECT * FROM RSVPs WHERE eventID='${event}'`, function (err, result, fields) {
      if (result.length == 0) return(resolve([]))
      resolve(result)
    })
  })
}

function deleteEvent(eventTag) {} //must also delete corresponding RSVPs

function deleteUser(userTag) {} //must also delete corresponding RSVPs

function addEvent(event) {
  var sql = "INSERT INTO events (name, description, startTime, endTime, eventType) VALUES ('" + event.name + "', '" + event.description + "','" + event.startTime + "','" + event.endTime + "','" + event.eventType + "')";
database.query(sql, function (err, result) {
  if (err) throw err;
  console.log(`1 new event added`);
});
}

function addUser() {

}

// function writeToEvents() { TODO: is this necessary?
//   return null;
// }

// function writeToUsers() {
//   return null;
// }

// function writeToRSVPs() {
//   return null;
// }

module.exports = {eventObject, userObject, rsvpStatus, userEvents, eventUsers, addEvent, addUser}

// module.exports.eventObject = eventObject;
// module.exports.userObject = userObject;
// module.exports.database = database;