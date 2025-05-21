var version = 1.1;

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

function checkVers(key)
{
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
}

window.checkVers = checkVers;
window.choice    = choice;

if (checkVers("utils") > version)
	alert("Utils is out of date!/Script may not work!");
