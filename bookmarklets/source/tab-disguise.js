/*
	Tab Disguise V1.0
		Eliana 2025
*/

/* Get Utils Code */
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/Cheese-Curd/bookmarklets@main/common/util.js';
script.onload = function() {
	/* Proceed with code */
	console.log("[ Tab Disguise ] Loaded Util Script");
	var preset     = false;
	var presetName = ""

	var tabName = "";
	var tabIcon = "";

	function updateSite()
	{
		let icon = document.querySelector("link[rel~='icon']");
		if (!icon) {
			icon = document.createElement('link');
			icon.rel = 'icon';
			icon.type = 'image/x-icon';
			document.head.appendChild(icon);
		}

		icon.href = tabIcon + '?v=' + Date.now();
		document.title = tabName;
	}

	function getPreset(name)
	{
		preset     = true;
		presetName = name;

		switch (name)
		{
			case "canvas":
				tabName = "Dashboard";
				tabIcon = "https://phm.instructure.com/favicon.ico";
				break;
			case "gdrive":
				tabName = "My Drive - Google Drive";
				tabIcon = "https://drive.google.com/favicon.ico"
				break;
			case "google":
				tabName = "Google";
				tabIcon = "https://www.google.com/favicon.ico";
				break;
		}
	}

	function start(attempts = 0)
	{
		var attemptText = "";
		if (attempts > 0)
			attemptText = ` [ Attempt: ${attempts} ]`;

		var input = choice("Preset or Custom?" + attemptText, "Preset", "Custom", "Cancel");
		switch (input)
		{
			case 1:
				var presetChoice = choice("What Preset?", "Canvas", "Google Drive", "Google");
				switch (presetChoice)
				{
					case 1:
						getPreset("canvas");
						break;
					case 2:
						getPreset("gdrive");
						break;
					case 3:
						getPreset("google");
						break;
					default:
						alert("Invalid preset choice, retrying...");
						start(attempts + 1);
						break;
				}
				
				break;
			case 2:
				tabName = prompt("Custom Tab\nWhat is the tab title?");
				tabIcon = prompt("Custom Tab\nWhat is the tab icon? (This is a link)");
				break;
			case 3:
				alert("Canceled");
				return true;
			default:
				alert("Invalid choice, retrying...");
				start(attempts + 1);
				break;
		}

		/* Update the site with the chosen preset/custom stuff */
		updateSite();

		return false;
	}

	/* Start Bookmarklet */
	var canceled = start(0);
	if (canceled == false)
		if (preset)
			alert(`Set tab to use preset: ${presetName}`);
		else
			alert(`Set tab to use custom settings:\n > Tab Title: ${tabName}\n > Tab Icon: ${tabIcon}`)
};
document.head.appendChild(script);