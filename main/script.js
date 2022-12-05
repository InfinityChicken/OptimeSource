/* Variables that are going to be loaded & parsed from the database */

var loggedin = false
var rsvps = [
    {
        id: 1,
        name: "Park Meetup",
        start: 1670194800000,
        end: 1670205600000,
        localStatus: 0, // 0: No, 1: Maybe, 2: Yes, null: Unanswered
        description: "A fun park meetup! OwO!",
        host: "Goyal, Adveeta"
    },
    {
        id: 2,
        name: "Poger Momento",
        start: 1670204800000,
        end: 1670205680000,
        localStatus: 0, // 0: No, 1: Maybe, 2: Yes, null: Unanswered
        description: "A poger momento ngl.",
        host: "Ding, Amber Wanyi"
    }
]
var upcoming = [
    {
        id: 1,
        name: "Park Meetup",
        start: 1670194800000,
        end: 1670205600000,
        localStatus: 2, // 0: No, 1: Maybe, 2: Yes, null: Unanswered. Only display events with 1 or 2
        description: "A fun park meetup! OwO!",
        host: "Goyal, Adveeta"
    }
]

/* The actual code */
if (loggedin == false) {
    document.getElementById("logindisplay").innerHTML="Log In"
}

if (rsvps.length == 0) {
    rsvperror = document.querySelector('.rsvps p')
    rsvperror.innerHTML = "You have no pending invites right now! Why don't you make an event yourself?"
    
} else {
    rsvplist = document.querySelector('.rsvps')
    rsvps.forEach((rsvp) => {
        start = new Date(rsvp.start)
        finish = new Date(rsvp.end)
        date = `${start.getMonth()}/${start.getDate()}/${start.getFullYear()}`
        startTime = `${start.getHours()}:${start.getMinutes()<10?"0":""}${start.getMinutes().toString()}`
        endTime = `${finish.getHours()}:${finish.getMinutes()<10?"0":""}${finish.getMinutes().toString()}`
        newRSVP = document.createElement('div')
        newRSVP.innerHTML=`<b>${rsvp.name}</b><br>Invited by ${rsvp.host}<br>Time: ${date} at ${startTime}-${endTime}<br>Description: ${rsvp.description}<br><button class="abutton" onclick="window.location.href='accept?id=${rsvp.id}'">Accept</button>   <button class="dbutton" onclick="window.location.href='decline?id=${rsvp.id}'">Decline</button><br>`
        rsvplist.appendChild(newRSVP)
    })
}
if (upcoming.length == 0) {
    document.querySelector('.eventsection').innerHTML = "You don't have any upcoming events right now! Why don't you scheule one yourself?"
} else {
    event1 = document.querySelector("#event1")
    start = new Date(upcoming[0].start)
    finish = new Date(upcoming[0].end)
    date = `${start.getMonth()}/${start.getDate()}/${start.getFullYear()}`
    startTime = `${start.getHours()}:${start.getMinutes()<10?"0":""}${start.getMinutes().toString()}`
    endTime = `${finish.getHours()}:${finish.getMinutes()<10?"0":""}${finish.getMinutes().toString()}`
    event1.innerHTML=`${upcoming[0].name}<br><p style="font-size: 20px;">${date} ${startTime}-${endTime}<br>${upcoming[0].description}<br>Host: ${upcoming[0].host}</p>`
}
if (upcoming.length < 5) {
    document.querySelector('#event5').innerHTML = ":("
    if (upcoming.length < 4) document.querySelector('#event4').innerHTML = ":("
    if (upcoming.length < 3) document.querySelector('#event3').innerHTML = ":("
    if (upcoming.length < 2) document.querySelector('#event2').innerHTML = ":("
}