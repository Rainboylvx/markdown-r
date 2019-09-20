const highlight = require("./lib/highlight.js")
const twemoji = require("twemoji")
const mdItContainer = require("markdown-it-container") 
const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;

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
    .use( require("markdown-it-kbd") )
    .use( require("markdown-it-task-checkbox") )
    .use( mdItContainer ,... require("./lib/container/default.js"))
    .use( mdItContainer ,... require("./lib/container/fold.js"))
    .use( mdItContainer ,... require("./lib/container/class"))
    .use( mdItContainer ,... require("./lib/container/blackboard.js"))
    //.use( require('./lib/heading.js'))
    .use( require("markdown-it-imsize") )
    .use( require("markdown-it-ins-del") )
    .use( require("markdown-it-inline-comments") )
    .use( require("markdown-it-sup") )
    .use( require("markdown-it-sub") )
    .use( require("markdown-it-mark") )
    .use( require("markdown-it-abbr") )
    .use( markdownItTocAndAnchor ,{
        tocFirstLevel:2,
        tocLastLevel:3,
        //anchorLinkSymbol:'⇄'
    })
    .use( require('./lib/tocAnchorExtent.js'))

md.renderer.rules.emoji = function(token,idx){
    return twemoji.parse(token[idx].content)
}

module.exports = md
