import {createEventObject} from DBUtility.js;
import {createUserObject} from DBUtility.js;


function passValuesCalculator() { //TODO: fill this up later and pass to findOptimalTime
    return null; //TODO: get magical millisecond values from here using .getTime();
}

function findOptimalTime(possibleTimes, invitedUsers) {  //possibleTimes: array of arrays, array1 stores possible times, array2 stores start time, end time, date
    
    let optimalTimes = [[]]; //array1 stores optimal times, array2 stores starttime, endtime, and errorate
    const duration = possibleTimes[0[1]] - possibleTimes[0[0]]
    
    for (let perI = 0; perI < possibleTimes.length(); perI++) { //loops over all events
        
        for (let trialEnd = possibleTimes[perI[0]] + duration; trialEnd <= possibleTimes[perI[1]]; trialEnd+=300000) { //iterations of 5 minutes (300,000 miliseconds)
            
            trialStart = trialEnd - duration;
            errorRate = findOverlap(trialStart, trialEnd, invitedUsers);
            
            if (errorRate = optimalTimes[0[2]]) {
                optimalTimes.push([trialStart, trialEnd, trial]); //TODO: this might break something so check it when testing             
            }
        }
    }
}

function findOverlap(trialStart, trialEnd, invitedUsers) {
    
    for (let userI = 0; userI < invitedUsers.length; userI++) { //iterates through users
        
        const userEvents = DBUtility.userEvents(invitedUsers[userI]);

        for (let eventI = 0; eventI < events.length(); eventI++) { //iterates through events
            eventStart     
        }
    }
}

module.exports.passValuesCalculator = passValuesCalculator;
