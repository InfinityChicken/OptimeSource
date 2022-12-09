//TODO: export calculator, connect the calculator

/* how the code works:
-makes some variables
-loops through possible times
    -loops through periods of those possible times
        -loops through users
            -loops through users' events
*/


var DBUtility = require(__dirname + '/DBUtility.js');

function calculate() { 
    optimalTimes = findOptimalTime([[1670680800, 1670695200], [1670767200, 1670781600]], ["InfinityChicken#3657", "pieris#2276"]);
    return optimalTimes; 
}

function findOptimalTime(possibleTimes, invitedUsers) {  //possibleTimes: array of arrays, array1 stores possible times, array2 stores start time, end time
    
    let optimalTimes = [[null, null, Number.MAX_VALUE]]; //array1 stores optimal times, array2 stores starttime, endtime, and errorate
    const duration = possibleTimes[0[1]] - possibleTimes[0[0]]

    for (let perI = 0; perI < possibleTimes.length(); perI++) { //loops over all events
        
        for (let trialEnd = possibleTimes[perI[0]] + duration; trialEnd <= possibleTimes[perI[1]]; trialEnd+=300000) { //iterations of 5 minutes (300,000 miliseconds)
            
            trialStart = trialEnd - duration;
            errorRate = findOverlap(trialStart, trialEnd, invitedUsers);
            
            if (errorRate = optimalTimes[0[2]]) { //if error rate is equivalent, add the times
                optimalTimes.push([trialStart, trialEnd, trial]);    
            } else if (errorRate < optimalTimes[0[2]]) { //if error rate is lower, clear the array and add the times
                optimalTimes = [[]];
                optimalTimes.push([trialStart, trialEnd, trial]);
            }
        }
    }

    return optimalTimes;
}

function findOverlap(trialStart, trialEnd, invitedUsers) {
    
    for (let userI = 0; userI < invitedUsers.length; userI++) { //iterates through users
        
        const userEvents = DBUtility.userEvents(invitedUsers[userI]);

        for (let eventI = 0; eventI < events.length(); eventI++) { //iterates through events
            const eventStart = database.query(eventI[eventI]); //TODO: add the special sauce (queries)
            const eventEnd = database.query(userEvents[eventI]);

            if (eventStart <= trialStart <= trialEnd || eventStart <= trialEnd <= trialEnd) { //if the trial time starts/ends during the tested event
                errorRate++;
            } else if (trialStart <= eventStart <= eventEnd || trialEnd <= eventEnd <= trialEnd) { //if the event lies in the trial period 
                errorRate++; 
            } else if (trialStart == eventStart || trialEnd == eventEnd) { //if the event is exactly the same time
                errorRate++
            } //if none of those things are found, advance to the next event  
        }
    }
}

module.exports.calculate = calculate;