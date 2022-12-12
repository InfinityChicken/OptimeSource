

var loggedin = false
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
if (getCookie('id')) loggedin=true

urlParams = new URLSearchParams(window.location.search)
if (urlParams.get('settag')) document.cookie = `tag=${urlParams.get('settag')}; expires=Mon, 26 Dec 2022 12:00:00 UTC; path=/`
if (urlParams.get('setid')) document.cookie = `id=${urlParams.get('setid')}; expires=Mon, 26 Dec 2022 12:00:00 UTC; path=/`
if (urlParams.get('setemail')) document.cookie = `email=${urlParams.get('setemail').replace('%40', '@')}; expires=Mon, 26 Dec 2022 12:00:00 UTC; path=/`

var rsvps = [
    {
        id: 2,
        name: "Hackathon meeting",
        start: 1670194800000,
        end: 1670205600000,
        localStatus: 0, // 0: No, 1: Maybe, 2: Yes, null: Unanswered
        description: "Finish UI",
        host: "Cheng, Zachary"
    },
    {
        id: 1,
        name: "Potluck!",
        start: 1670194800000,
        end: 1670205600000,
        localStatus: 2, // 0: No, 1: Maybe, 2: Yes, null: Unanswered. Only display events with 1 or 2
        description: "Don't bring anything including nuts!",
        host: "Goyal, Advita"
    }
]
var upcoming = [
    {
        id: 1,
        name: "Potluck!",
        start: 1670194800000,
        end: 1670205600000,
        localStatus: 2, // 0: No, 1: Maybe, 2: Yes, null: Unanswered. Only display events with 1 or 2
        description: "Don't bring anything including nuts!",
        host: "Goyal, Advita"
    }
]

/* The actual code */
if (loggedin == false) {
    document.getElementById("logindisplay").innerHTML="Log In"
} else {
    document.getElementById("logindisplay").innerHTML=getCookie('id')
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
    document.querySelector('#event5').innerHTML = ""
    if (upcoming.length < 4) document.querySelector('#event6').innerHTML = "Going to the movies <br> 1/25/2022 9:30-11:00 <br> Host: Li, Mooncy"
    if (upcoming.length < 4) document.querySelector('#event5').innerHTML = "Shopping Spree <br> 1/20/2022 7:00-9:30 <br> Host: Ding, Jasper"
    if (upcoming.length < 4) document.querySelector('#event4').innerHTML = "Project Meetup <br> 1/15/2022 9:00-11:00 <br> Host: Parachuri, Sid"
    if (upcoming.length < 3) document.querySelector('#event3').innerHTML = "New Year's Dinner Party <br> 1/1/2022 6:00-8:30 <br> Host: Chen, Iris"
    if (upcoming.length < 2) document.querySelector('#event2').innerHTML = "Neil's Birthday Party! <br> 12/23/2022 12:00-3:00 <br> Host: Thella, Neil"
    if (upcoming.length < 2) document.querySelector('#event1').innerHTML = "Park Meetup <br> 12/12/2022 4:00-7:00 <br> A fun park meetup! <br> Host: Goyal, Advita"
 }