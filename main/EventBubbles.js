var DBUtility = require('/server/DBUtility.js');
var GeneralUtility = require('/server/GeneralUtility.js')

function fillHomeBubbles(username) {
    const userEvents = DBUtility.userEvents;

    for (i=0; i<userEvents.length; i++) {
        const event = DBUtility.eventObject(userEvents[i]);
        const bubble = document.createElement(eventBubble);

        bubble.getElementByID("name").innerHTML=event.name;
        bubble.getElementByID("desc").innerHTML=event.description;
        bubble.getElementByID("host").innerHTML=event.host;
        bubble.getElementByID("time").innerHTML=null;
    }

    return null;
}