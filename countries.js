function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

let codeIntoName = {};
let nameIntoCode = {};

httpGetAsync("https://cdn.rawgit.com/lukas2005/hosting/67a24456/countries.json", function(jsonString) {
	json = JSON.parse(jsonString);
	for (let obj in json) {
		codeIntoName[obj.Code] = obj.Name;
		nameIntoCode[obj.Name] = obj.Code;
	}
});

function getCountryName(code) {
	return codeIntoName[code];
}

function getCountryCode(name) {
	return nameIntoCode[name];
}
