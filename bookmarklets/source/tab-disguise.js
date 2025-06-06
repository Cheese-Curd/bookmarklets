/*
	Tab Disguise V1.4
		Eliana 2025
*/

var scriptVersion = 1.4;

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
		if (checkVers("tab-disguise") > scriptVersion)
			alert("Tab Disguise is out of date.\nPlease Update. Script will continue after this.");

		scriptCode()
		
	} catch (err) { alert(err); }
}

/* Write code here */
function scriptCode()
{
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
			case "skyward":
				tabName = "Student Access"
				tabIcon = "https://www.skyward.com/skyicon.ico"
				break;
		}
	}
	
	function start(attempts = 0)
	{
		var attemptText = "";
		if (attempts > 0)
			attemptText = ` [ Attempt: ${attempts + 1} ]`;
	
		var input = choice("Preset or Custom?" + attemptText, "Preset", "Custom");
		// console.log(input);
		switch (input)
		{
			case -2:
				alert("Canceled.");
				return true;
			case 1:
				var presetChoice = choice("What Preset?", "Canvas", "Google Drive", "Google", "Skyward");
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
					case 4:
						getPreset("skyward");
						break;
					case -1:
						alert("Choice must be a number, retrying...");
						return start(attempts + 1);
					default:
						alert("Invalid preset choice, retrying...");
						return start(attempts + 1);
				}
				
				break;
			case 2:
				tabName = prompt("Custom Tab\nWhat is the tab title?");
				tabIcon = prompt("Custom Tab\nWhat is the tab icon? (This is a link)");
				break;
			default:
				alert("Invalid choice, retrying...");
				return start(attempts + 1);
		}
	
		/* Update the site with the chosen preset/custom stuff */
		updateSite();
	
		return false;
	}
	
	/* Start Bookmarklet */
	var canceled = start(0);
	// console.log(canceled);
	if (canceled == false)
		if (preset)
			alert(`Set tab to use preset: ${presetName}`);
		else
			alert(`Set tab to use custom settings:\n > Tab Title: ${tabName}\n > Tab Icon: ${tabIcon}`)
}

getUtils()