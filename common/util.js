var version = 1.3;

function choice(title = "Choose", ...options)
{
	var promptTxt = title;
	for (var i = 0; i < options.length; i++)
		promptTxt += "\n " + (i + 1) + ". " + options[i];

	var chosen = prompt(promptTxt)
	var numb = parseInt(chosen);

	/* Returning the Selection */
	if (chosen === null) /* If we click cancel, then it'll be this */
		return -2

	if (numb === NaN)
		return -1;
	else
		return numb;
}

async function checkVers(key)
{
	try
	{
		const response = await fetch("https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/docs/version.json")
		if (!response.ok) throw new Error(`Error loading script versions.\nStatus Code: ${response.status}\nStatus Text: ${response.statusText}`);

		const jsonContent = await response.text();
		var result = JSON.parse(jsonContent);
		if (result[key])
			return result[key];

		throw new Error(`No valid version found for ${key}. Returning -1`);

	} catch (err) { alert(err); }

	/* Depricated: XMLHttpRequest is depricated. */
	/*
		const request = new XMLHttpRequest();
		request.open("GET", "https://raw.githubusercontent.com/Cheese-Curd/bookmarklets/main/docs/version.json", false); // most recent data
		request.send(null);
		if (request.status === 200)
		{
			var result = JSON.parse(request.responseText);
			if (result[key])
				return result[key];
				
			return -1 // No version found
		}

		return -2; // Error fetching data
	*/

	return -1;
}

window.checkVers = checkVers;
window.choice    = choice;

if (checkVers("utils") > version)
	alert("Utils is out of date!\nScript may not work!");
