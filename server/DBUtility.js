var mysql = require("mysql");
var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

eventObject(1);

function eventObject(tag) { //TODO: check this

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

function userObject(tag) { //TODO: finish this
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

function addEvent(event) {
    var sql = "INSERT INTO events (name, description, startTime, endTime, eventType) VALUES ('" + event.name + "', '" + event.description + "','" + event.startTime + "','" + event.endTime + "','" + event.eventType + "')";
  database.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function addUser()

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

function deleteEvent(eventTag)

// function writeToEvents() { TODO: is this necessary?
//   return null;
// }

// function writeToUsers() {
//   return null;
// }

// function writeToRSVPs() {
//   return null;
// }

module.exports.eventObject = eventObject;
module.exports.userObject = userObject;
module.exports.database = database;