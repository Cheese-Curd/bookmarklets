# Bookmarklets
# How to Use
Each bookmarklet has a source, and a minified file. You can either use the minified file *(just copy and paste raw)*, or you can use this script to load the latest commit *(recommended)*:
```js
javascript:(async function () {
	var scriptName = "script-name";
	var scriptSrc = "";

	try
	{
		const response = await fetch(`https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/bookmarklets/source/${scriptName}.js`)
		if (!response.ok) throw new Error(`Error loading ${scriptName}. Please report this to me with console output if possible.\nStatus Code: ${response.status}\nStatus Text: ${response.statusText}`);

		scriptSrc = await response.text();

		var script = document.createElement('script');
		script.textContent = scriptSrc;
		document.head.appendChild(script);

		if (checkVers(name) > scriptVersion)
			alert("Script is out of date.\nPlease Update. Script will continue after this.");

	} catch (err) { alert(err); }
})();
```
Here's minified:
```js
javascript:(async function(){var t="script-name",e="";try{const o=await fetch(`https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/bookmarklets/${t}.js`);if(!o.ok)throw new Error(`Error loading ${t}. Please report this to me with console output if possible.\nStatus Code: ${o.status}\nStatus Text: ${o.statusText}`);e=await o.text();var a=document.createElement("script");a.textContent=e,document.head.appendChild(a),checkVers(name)>scriptVersion&&alert("Script is out of date.\nPlease Update. Script will continue after this.")}catch(t){alert(t)}})();
```
Inside of the function is a variable, set that to the name of the script's file.
# Potential Issues
1. Nothing happening when executing

This can be caused by the website you're using refusing to load external scripts (GitHub is one of them) or a general script error, show me the dev console if this happens!

2. `util.js` Failing to load

This can be caused by either connection to GitHub being refused, or GitHub refusing to reply to the request. Please look at the error code/text for more details.

3. No Version found

This isn't very important, just annoying, tell me and I'll give it a version

4. `util.js` Out of date

This is caused by GitHub not giving the correct version of `util.js`, that or I forgot to update the version inside the script...