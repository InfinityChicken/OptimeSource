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
  database: process.env.DATABASE,
});


// CODE BELOW - use for testing, there is a premade row in the DB
// var database = mysql.createConnection({  
//   host: "db-mysql-sfo2-08056-do-user-12828580-0.b.db.ondigitalocean.com",
//   user: "ServerConnection",
//   password: "AVNS_09XmkxXWtSdmICyUdMk",
//   port: "25060",
//   database: "defaultdb"
// });

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
function createEventObject(tag) {

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
    console.log(event);
  });
  });

  return event;
}


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