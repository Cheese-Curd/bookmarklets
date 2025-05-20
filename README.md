# Bookmarklets
# How to Use
Each bookmarklet has a source, and a minified file. You can either use the minified file *(just copy and paste raw)*, or you can use this script to load the latest commit *(recommended)*:
```js
javascript:(function () {
	var scriptName = "script-name";
	var script     = document.createElement("script");
	script.src     = `https://cdn.jsdelivr.net/gh/Cheese-Curd/bookmarklets@main/bookmarklets/source/${scriptName}.js`;
	document.head.appendChild(script);
})();
```
Here's minified:
```js
javascript:(function(){var s="script-name"; var e=document.createElement("script");e.src=`https://cdn.jsdelivr.net/gh/Cheese-Curd/bookmarklets@main/bookmarklets/source/${s}.js`,document.head.appendChild(e)})();
```
Inside of the function is a variable, set that to the name of the script's file.
