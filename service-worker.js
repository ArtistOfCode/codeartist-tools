chrome.runtime.onInstalled.addListener(onInstalled)
chrome.contextMenus.onClicked.addListener(onClicked)
chrome.runtime.onMessage.addListener(onMessage)

function onMessage(message, sender, sendResponse) {
    sendResponse({ status: 0 })
}

function onInstalled() {
    chrome.contextMenus.create({ id: 'json-view', title: 'JSON View', contexts: ['selection'] })
}

function onClicked(info) {
    if (info.menuItemId === 'json-view') {
        chrome.tabs.create({ url: chrome.runtime.getURL('html/json-view.html') })
            .then(tab => setTimeout(() => chrome.tabs.sendMessage(tab.id, { action: 'json', data: info.selectionText }), 100))
    }
}
