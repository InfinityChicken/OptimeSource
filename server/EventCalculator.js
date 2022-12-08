require(DBUtility.js);

//TODO: export pass to calculator

function passToCalculator() { //TODO: fill this up later and pass to findOptimalTime
    return null; //TODO: get magical millisecond values from here using .getTime();
}

/* how the code works:
-makes some variables
-loops through possible times
    -loops through periods of those possible times
        -loops through users
            -loops through users' events
*/

function findOptimalTime(possibleTimes, invitedUsers) {  //possibleTimes: array of arrays, array1 stores possible times, array2 stores start time, end time, date
    
    let optimalTimes = [[]]; //array1 stores optimal times, array2 stores starttime, endtime, and errorate
    const duration = possibleTimes[0[1]] - possibleTimes[0[0]]

    for (let perI = 0; perI < possibleTimes.length(); perI++) { //loops over all events
        
        for (let trialEnd = possibleTimes[perI[0]] + duration; trialEnd <= possibleTimes[perI[1]]; trialEnd+=300000) { //iterations of 5 minutes (300,000 miliseconds)
            
            trialStart = trialEnd - duration;
            errorRate = findOverlap(trialStart, trialEnd, invitedUsers);
            
            if (optimalTimes[0[2]] == null) { //TODO: find better way to do this
                optimalTimes.push([trialStart, trialEnd, trial]);
                continue;
            } else if (errorRate = optimalTimes[0[2]]) { //if error rate is equivalent, add the times
                optimalTimes.push([trialStart, trialEnd, trial]); //TODO: this might break something so check it when testing             
            } else if (errorRate < optimalTimes[0[2]]) { //if error rate is lower, clear the array and add the times
                optimalTimes = [[]];
                optimalTimes.push([trialStart, trialEnd, trial]);
            }
        }
    }
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