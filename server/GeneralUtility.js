db = require('./DBUtility.js')

console.log(getSimpleDate(1670792400));

function getSimpleDate(sTime) {
    const date = new Date(sTime*1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    
    if (minutes<10) {
        return (month+"/"+day+"/"+year+" "+hours+":"+minutes);    
    }
    return (month+"/"+day+"/"+year+" "+hours+":"+minutes);
}

module.exports.getSimpleDate = getSimpleDate;