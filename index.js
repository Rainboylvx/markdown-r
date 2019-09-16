const highlight = require("./lib/highlight.js")
const twemoji = require("twemoji")
var md = require("markdown-it")({
    html:true,
    linkify:true,
    typographer:true,
    highlight:highlight
})


md.use( require("./lib/preWrapper"))
    .use( require("./lib/lineNumber"))
    .use( require("markdown-it-mathjax")() )
    .use( require("markdown-it-emoji") )
    .use( require("markdown-it-multimd-table") )

/*
 *md.renderer.rules.emoji = function(token,idx){
 *    return twemoji.parse(token[idx].content)
 *}
 */
module.exports = md
