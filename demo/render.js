var md = require("..")
var pug = require("pug")
var fs = require("fs")
var pathFn = require("path")
var { exec,spawn} = require("child_process")

let watch_files = ["index.pug",'demo.md']
var debug = console.log

for( let file of watch_files ){
    fs.watchFile(pathFn.join(__dirname,file),{
        interval:200
    }, ()=>{

        var html = pug.renderFile(pathFn.join(__dirname,"index.pug"))
        debug("渲染 index.html")
        fs.writeFileSync(__dirname+'/output/index.html', html)
    })
}


var ls = spawn('browser-sync',['start','--server',`--files`,`index.html`],{
    cwd:`${__dirname}/output`,
    stdio:['inherit','inherit','inherit']
})
spawn('node-sass',[`-w`,`${__dirname}/style.scss`,`-o`,`${__dirname}/output/`],{
    stdio:['inherit','inherit','inherit']
})
