chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["github1s.js"]
    });
});

chrome.commands.onCommand.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ["github1s.js"]
        });
    });
});