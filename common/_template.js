var name    = "";
var scriptVersion = 0;

/* Get Utils Code */
var scriptSrc = "";

async function getUtils()
{
	try
	{
		const response = await fetch("https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/common/util.js")
		if (!response.ok) throw new Error(`Error loading util.js, which this script is dependent on.\nStatus Code: ${response.status}\nStatus Text: ${response.statusText}`);

		scriptSrc = await response.text();

		var script = document.createElement('script');
		script.textContent = scriptSrc;
		document.head.appendChild(script);

		console.log("Loaded Util Script");
		if (checkVers(name) > scriptVersion)
			alert("Script is out of date.\nPlease Update. Script will continue after this.");

		scriptCode()
		
	} catch (err) { alert(err); }
}

/* Write code here */
function scriptCode()
{

}