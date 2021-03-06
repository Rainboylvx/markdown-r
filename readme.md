# markdown-r

配置[markdown-it](https://github.com/markdown-it/markdown-it)给我自己使用

## Demo

[Demo online](https://rainboylvx.github.io/markdown-r/)

## 如何使用

```javascript
var md = require('markdown-r')
md.render('# hello world')
```


**需要的html引入的 js 与css**

```
<link rel="stylesheet" href="github-markdown.css">
<link rel="stylesheet" href="/prism-theme/prism-tomorrow.css">
<link rel="stylesheet" href="/markdown-r.css">
<link rel="stylesheet" href="">
```

```
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script src="https://unpkg.com/viz.js@2.1.2/viz.js"></script>
<script src="https://unpkg.com/viz.js@2.1.2/full.render.js"></script>
<script src="/vizRender.js"></script>
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: { extensions: ["autoload-all.js"] },
      extensions: ["tex2jax.js"],
      jax: ["input/TeX", "output/HTML-CSS"],
      tex2jax: {
        //-<!--$表示行内元素，$$表示块状元素 -->
        inlineMath: [ ['$','$'], ["\\\(","\\)"] ],
        displayMath: [ ['$$','$$'], ["\\\[","\\]"] ],
        processEscapes: true
      },
      "HTML-CSS": {
        availableFonts: ["STIX","TeX"] ,
        showMathMenu:false
      },
      CommonHTML: { scale: 100 }
    });
</script>
<script async src="https://cdn.bootcss.com/mathjax/2.7.6/MathJax.js"></script>
```

## 测试

```
npm run test
```

## 使用的插件

| 插件                        | 作用          |
|-----------------------------|---------------|
| prismjs                     | 代码高亮      |
| twemoji                     | emoji         |
| markdown-it-abbr            | abbr          |
| markdown-it-container       | 块            |
| markdown-it-emoji           | emoji         |
| markdown-it-imsize          | img大小       |
| markdown-it-inline-comments | 注释          |
| markdown-it-ins-del         | 下划线/删除线 |
| markdown-it-kbd             | key样式       |
| markdown-it-mark            | mark          |
| markdown-it-mathjax         | tex公式       |
| markdown-it-multimd-table   | table         |
| markdown-it-sub             | 上标          |
| markdown-it-sup             | 下标          |
| markdown-it-task-checkbox   | checkbox      |
| markdown-it-toc-and-anchor  | toc           |


## viz-gallery

需要的`js`资源: https://github.com/rbookr/web-components

 - full.render.js
 - viz.js
 - vue.js
 - viz-gallery.js
    - cdn: https://cdn.jsdelivr.net/gh/rbookr/web-components/dist/viz-gallery/viz-gallery.min.js

语法如下

```
<<<< viz-gallery(title="demo",engine="dot",height="400")

​``` 这是log1
graph G{
  a--b;
}
​```

​``` neato 这是 log2
graph G{
  a--b;
}
​```
<<<<

```


## emoji

- [twemoji cheat sheet](http://rainboy.coding.me/twemoji_cheat_sheet/)
- [emoji cheat sheet](http://rainboy.coding.me/twemoji_cheat_sheet/)

## image size

```
![test](image.png =100x200)
```


## 其他

```
++insert++ 下划线
~~insert~~ 删除线
```

## pangu


```javascript
var md = require("./index.js")
md.options.pangu = true
console.log(md.render("與PM戰鬥的人，應當小心自己不要成為PM"))
```

参考自:
- [中英文排版空格问题解决方案 | 静觅](https://cuiqingcai.com/6533.html)
- [vinta/pangu.js: Paranoid text spacing in JavaScript](https://github.com/vinta/pangu.js)
- [中文文案排版指北（简体中文版） — 码志](https://mazhuang.org/wiki/chinese-copywriting-guidelines/)

## 图片轮播


```
::: lb
![](1.png)
![](2.png)
![](3.png)
:::
```

引入`markdown-r.js markdown-r.css`
