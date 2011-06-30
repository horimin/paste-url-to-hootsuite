function pastePageInfo(title, url) {
    chrome.tabs.getAllInWindow(null, function(tabs){
	for(var i=0;i<tabs.length;i++){
	    if(tabs[i].url=="http://hootsuite.com/dashboard"){
		var tweet="Now Browsing: "+title+" "+url;

	  	chrome.tabs.executeScript(tabs[i].id, 
		  {code: "document.getElementById('messageBoxMessage').value='"+tweet+"'"});
	    }
	}
    });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Current page title="+tab.title+"url="+tab.url);
    pastePageInfo(tab.title, tab.url);
});
