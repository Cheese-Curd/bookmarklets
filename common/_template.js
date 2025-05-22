var name    = "";
var scriptVersion = 0;

/* Get Utils Code */
var valid     = false;
var scriptSrc = "";

const request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/common/util.js", false); // most recent data
request.send(null);
if (request.status === 200)
{
	valid     = true;
	scriptSrc = request.responseText;
}
else alert("Script is unable to load Utils.JS, which it depends on.");

console.log(valid);

if (valid)
{
	var script = document.createElement('script');
	script.textContent = scriptSrc;
	document.head.appendChild(script);

	/* Proceed with code */
	console.log("Loaded Util Script");
	if (checkVers(name) > scriptVersion)
		alert("Script is out of date.\nPlease Update. Script will continue after this.");

	
};