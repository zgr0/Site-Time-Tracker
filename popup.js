document.addEventListener("DOMContentLoaded", () => {
    const usageList = document.getElementById("usage-list");
  
    chrome.storage.local.get("siteUsage", (data) => {
      const siteUsage = data.siteUsage || {};
      for (const [url, timeSpent] of Object.entries(siteUsage)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${url}: ${Math.round(timeSpent / 1000)} seconds`;
        usageList.appendChild(listItem);
      }
    });
  });
  