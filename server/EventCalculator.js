//TODO: export calculator, connect the calculator

/* how the code works:
-makes some variables
-loops through possible times
    -loops through periods of those possible times
        -loops through users
            -loops through users' events
*/


var DBUtility = require(__dirname + '/DBUtility.js');

function findOptimalTime(possibleTimes, invitedUsers, duration) {  //possibleTimes: array of arrays, array1 stores possible times, array2 stores start time, end time

    let optimalTimes = [[null, null, Number.MAX_VALUE]]; //array1 stores optimal times, array2 stores starttime, endtime, and errorate

    for (let perI = 0; perI < possibleTimes.length; perI++) { //loops over all trial times
        let trialI = 0;
        while (true) {
            let trialStart = possibleTimes[perI][0] + (trialI*300);
            
            let trialEnd = trialStart + duration;
            
            if (trialEnd > possibleTimes[perI][1]) {
                break;
            }
            
            errorRate = findOverlap(trialStart, trialEnd, invitedUsers);
            
            if (errorRate == optimalTimes[0][2]) { //if error rate is equivalent, add the times
                optimalTimes.push([trialStart, trialEnd, errorRate]);    
            } else if (errorRate < optimalTimes[0][2]) { //if error rate is lower, clear the array and add the times
                optimalTimes = [];
                optimalTimes.push([trialStart, trialEnd, errorRate]);
            }
            
            trialI++;
        }
    }

    return optimalTimes;
}

function findOverlap(trialStart, trialEnd, invitedUsers) {
    let errorRate = 0;
    for (let userI = 0; userI < invitedUsers.length; userI++) { //iterates through users
        const userEvents = DBUtility.userEvents(invitedUsers[userI]); 

        for (let eventI = 0; eventI < userEvents.length; eventI++) { //iterates through events
            const event = DBUtility.eventObject(userEvents[eventI]);

            if (event.startTime < trialStart && trialStart < event.endTime || event.startTime < trialEnd && trialEnd < event.endTime) { //if the trial time starts/ends during the tested event
                errorRate++;
            } else if (trialStart < event.startTime && event.startTime < trialEnd || trialStart < event.endTime && event.endTime < trialEnd) { //if the event lies in the trial period 
                errorRate++; 
            } else if (trialStart == event.startTime || trialEnd == event.endTime) { //if the event is exactly the same time
                errorRate++;
            } //if none of those things are found, advance to the next event without increasing the error rate
        }
    }
    return errorRate;
}

module.exports.findOptimalTime = findOptimalTime;

