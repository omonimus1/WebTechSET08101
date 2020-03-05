function printBrowserInfo()
{
    var out = document.getElementById("output_browser_info");
    out.innerHTML += "App name: " +window.navigator.appName + " App Version: " + window.navigator.appVersion + " App code name: " + window.navigator.appCodeName;
}