var name    = "";
var version = 0;

/* Get Utils Code */
var script = document.createElement('script');
script.src = 'https://fastly.jsdelivr.net/gh/Cheese-Curd/bookmarklets@main/common/util.js';
script.onload = function() {
	/* Proceed with code */
	if (checkVers(name) > version)
		alert("Script is out of date.\nPlease Update. Script will continue after this.");


};
document.head.appendChild(script);