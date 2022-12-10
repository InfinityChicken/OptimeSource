module.exports = {
    baseGenerate: function(name) {
        var tag = name + "#";
        for (i=0; i<4; i++) tag += Math.floor(Math.random() * 10)
        if (!tag) tag = baseGenerate(name) //TODO: add an sql query here to check if a tag preexists
        return tag;
    },
    generateTag: function(name) { return this.baseGenerate(name) }
}