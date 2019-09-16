const highlight = require("./lib/highlight.js")
var md = require("markdown-it")({
    html:true,
    linkify:true,
    typographer:true,
    highlight:highlight
})


md.use( require("./lib/preWrapper"))
    .use( require("./lib/lineNumber"))

module.exports = md
