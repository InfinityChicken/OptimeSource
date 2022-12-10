var mysql = require("mysql");
<<<<<<< HEAD
// var promise = require("promise");
// var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
//   database: process.env.DATABASE,
// });

eventObject(1);

// <<<<<<< HEAD
// CODE BELOW - use for testing, there is a premade row in the DB
var database = mysql.createConnection({  
  host: "db-mysql-sfo2-08056-do-user-12828580-0.b.db.ondigitalocean.com",
  user: "ServerConnection",
  password: "AVNS_4pp41TTnCLwZafCzIyw",
  port: "25060",
  database: "defaultdb"
});
=======
require('dotenv').config()

var database = mysql.createConnection({ //to use this, you must whitelist your ip address in digitalocean 
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: 'defaultdb'
});

eventObject(1);

function eventObject(tag) {
>>>>>>> 2e5385241b301fbc81008689f942957e89f2ebe6

// CODE BEFORE ADVITAFICATION (for reference, in case of confusion)
// function eventObject(tag) {
//     return {
//       tag: tag, //string
//       name: database.query(), //string
//       description: database.query(), //string
//       startTime: database.query(), 
//       endTime: database.query(),
//       duration: database.query(),
//       draft: database.query(), //will return 0 or 1 -- 0 = false, 1 = true
//       progress: database.query(), //will return in-progress, finished, or upcoming
//       //color: database.query(),
//   }
// }
// database.query("SELECT * FROM EVENTS WHERE EVENTID=1", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });



  //CODE AFTER ADVITAFICATION
function eventObject(tag) {
// =======
// function eventObject(tag) { //TODO: check this
// >>>>>>> ad1d721d01f47a2b099f0aed2e8e999556b65df6

  var event = {
      tag: tag, //string
      name: "", //string
      description: "", //string
<<<<<<< HEAD
      startTime: "", 
      endTime: ""
=======
      startTime: "",
      endTime: "",
>>>>>>> 2e5385241b301fbc81008689f942957e89f2ebe6
      // duration: "",
      // draft: "", //will return 0 or 1 -- 0 = false, 1 = true
      // progress: "", //will return in-progress, finished, or upcoming
      //color: database.query(),
  };


   database.query("SELECT * FROM events WHERE eventID=1", function (err, result) {
    if (err) throw err;
    
    result.forEach((row) => {
      event.name = row.name;
      event.description = row.description;
      event.startTime = row.startTime;
      event.endTime = row.endTime;
      console.log("in forEach");
      console.log("row.name : " + row.name);
      // event.eventType = row.eventType;

      database.end();
  });
  });


   console.log(event);

   return event;
}

// <<<<<<< HEAD


// var ff = eventObject("");
//   console.log(ff);

function addEventToDB(event) {
// object created for testing
  //   let eventTest = {
  //     name: "testEvent", //string
  //     description: "This is for testing", //string
  //     startTime: "2022-12-07 09:54:11", 
  //     endTime: "2022-12-07 09:54:11",
  //     eventType: "Solo"
  // }
  // console.log(eventTest);

    var sql = "INSERT INTO events (name, description, startTime, endTime, eventType) VALUES ('" + event.name + "', '" + event.description + "','" + event.startTime + "','" + event.endTime + "','" + event.eventType + "')";
  database.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  }

function userObject(tag) {
// =======
// function userObject(tag) { //TODO: finish this
// >>>>>>> ad1d721d01f47a2b099f0aed2e8e999556b65df6
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