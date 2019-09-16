const highlight = require("./lib/highlight.js")
var md = require("markdown-it")({
    html:true,
    linkify:true,
    typographer:true,
    highlight:highlight
})

module.exports = md
