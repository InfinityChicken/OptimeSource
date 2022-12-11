// db = require('./DBUtility.js');

<<<<<<< Updated upstream
function convertTime(sTime) {
    let date = new Date(sTime*1000);
    console.log(date);
}

convertTime(1670709600);
=======
module.exports = {
    baseGenerate: function(name) {
        var tag = name + "#";
        for (i=0; i<4; i++) tag += Math.floor(Math.random() * 10)
        if (!tag /* replace with sql condition */ ) tag = baseGenerate(name) //TODO: add an sql query here to check if a tag preexists
        return tag;
    },
    generateTag: function(name) { return this.baseGenerate(name) }
}

function getDateTime(sTime) {

}

function getMSTime(dateString) {

}
>>>>>>> Stashed changes
