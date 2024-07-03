chrome.runtime.onMessage.addListener(onMessage)

function onMessage(message, sender, sendResponse) {
    const { action, data } = message
    if (action === 'json') {
        document.getElementById('json-view').data = data
    }
    sendResponse({ status: 0 })
}