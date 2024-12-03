let activeTabId = null;
let activeStartTime = null;
const siteUsage = {};

function saveUsageData() {
  chrome.storage.local.set({ siteUsage });
}

chrome.tabs.onActivated.addListener(({ tabId }) => {
  const currentTime = Date.now();
  if (activeTabId && activeStartTime) {
    const timeSpent = currentTime - activeStartTime;
    chrome.tabs.get(activeTabId, (tab) => {
      if (tab && tab.url) {
        const url = new URL(tab.url).hostname;
        siteUsage[url] = (siteUsage[url] || 0) + timeSpent;
        saveUsageData();
      }
    });
  }
  activeTabId = tabId;
  activeStartTime = currentTime;
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  const currentTime = Date.now();
  if (activeTabId && activeStartTime) {
    const timeSpent = currentTime - activeStartTime;
    chrome.tabs.get(activeTabId, (tab) => {
      if (tab && tab.url) {
        const url = new URL(tab.url).hostname;
        siteUsage[url] = (siteUsage[url] || 0) + timeSpent;
        saveUsageData();
      }
    });
  }
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    activeTabId = null;
    activeStartTime = null;
  } else {
    chrome.tabs.query({ active: true, windowId }, (tabs) => {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        activeStartTime = Date.now();
      }
    });
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  if (tabId === activeTabId) {
    const currentTime = Date.now();
    if (activeStartTime) {
      const timeSpent = currentTime - activeStartTime;
      chrome.tabs.get(tabId, (tab) => {
        if (tab && tab.url) {
          const url = new URL(tab.url).hostname;
          siteUsage[url] = (siteUsage[url] || 0) + timeSpent;
          saveUsageData();
        }
      });
    }
    activeTabId = null;
    activeStartTime = null;
  }
});
