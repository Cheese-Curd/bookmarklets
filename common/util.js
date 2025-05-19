function choice(title = "Choose", ...options)
{
	var promptTxt = title;
	for (var i = 0; i < options.length; i++)
		promptTxt += "\n " + (i + 1) + ". " + options[i];

	var chosen = prompt(promptTxt)
	var numb = parseInt(chosen);

	/* Returning the Selection */
	if (numb === NaN)
		return -1;
	else
		return numb;
}

window.choice = choice;