module.exports = {
    generateTag: function(name) {
        let tag = name + "#";
        for (i=1; i<=4; i++) {
            let random = (Math.floor(Math.random() * 10)).toString();
            tag += random;
        }
    
        if (!tag) { //TODO: add an sql query here to check if a tag preexists
            generateTag(name);
        }
        return tag;
    }
}