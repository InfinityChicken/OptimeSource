var DBUtility = require("/server/DBUtility.js");

function login(attemptUser, attemptPass) {
    const userInfo = DBUtility.userObject(attemptUser);
    if (userInfo == null) {
        return "User not found"
    } else if (userInfo.password==attemptPass) {
        return true;
    } else {
        return "Incorrect password";
    }
}