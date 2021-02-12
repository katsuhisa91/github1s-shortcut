chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "github1s.js"})
});

chrome.commands.onCommand.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "github1s.js"})
});