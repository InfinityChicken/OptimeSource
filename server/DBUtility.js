var mysql = require("mysql");
require('dotenv').config()
require("dotenv").config();

console.log({
  //to use this, you must whitelist your ip address in digitalocean
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: "defaultdb",
});

var database = mysql.createConnection({
  //to use this, you must whitelist your ip address in digitalocean
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: "defaultdb",
});

async function lol() {
  console.log(await userObject("IRIS"));
}
lol();

function eventObject(tag) {
  return new Promise((resolve, reject) => {
    let event = { tag: tag };
    database.query(
      `SELECT * FROM events WHERE eventID='${tag}'`,
      function (err, result, fields) {
        //TODO: make this work
        if (err) throw err;
        if (result.length == 0) return resolve(null);
        row = result[0];
        event.name = row.name;
        event.description = row.description;
        event.startTime = row.startTime;
        event.endTime = row.endTime;
        event.eventType = row.eventType;
        resolve(event);
      }
    );
  });
}

async function userObject(username) {
  return new Promise((resolve, reject) => {
    user = {};
    database.query(
      `SELECT * FROM user_info WHERE id='${username}'`,
      function (err, result, fields) {
        if (err) throw err;
        if (result.length == 0) return resolve(null);
        result.forEach((row) => {
          // console.log(row.description);
          user = {
            id: row.id,
            password: row.password,
          };
          resolve(user);
        });
      }
    );
  });
}

function userEvents(userTag, status) {
  //return the events that a user is a part of -- scan RSVPs; if there is a status specific (status that isn't null: yes, no, maybe, or pending), return only the RSVPs that are said status; modify the database if necessary
  return {
    events: database.query(`SELECT ${userTag}, eventID FROM RSVPs`),
    rsvpStatus: database.query(`SELECT ${userTag}`),
  };
}

function addEvent(event) {
  var sql =
    "INSERT INTO events (name, description, startTime, endTime, eventType) VALUES ('" +
    event.name +
    "', '" +
    event.description +
    "','" +
    event.startTime +
    "','" +
    event.endTime +
    "','" +
    event.eventType +
    "')";
  database.query(sql, function (err, result) {
    if (err) throw err;
  });
}

function addUser(user) {
  var sql =
    "INSERT INTO events (id, password) VALUES ('" +
    user.username +
    "', '" +
    user.pasword +
    "')";
  database.query(sql, function (err, result) {
    if (err) throw err;
  });
}

function modifyEvent(eventID, field, newValue) {}

//delete things?

module.exports = {
  eventObject,
  userObject,
  userEvents,
  // rsvpStatus,
  addEvent,
  addUser,
};

// module.exports.eventObject = eventObject;
// module.exports.userObject = userObject;
// module.exports.database = database;
