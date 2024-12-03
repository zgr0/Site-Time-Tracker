# **Site Time Tracker**

Site Time Tracker is a Chrome extension that monitors and tracks how much time you spend on each website. It provides an overview of your browsing habits directly from the extension popup.

---

## **Features**

- Tracks the active time spent on each website.
- Automatically updates when switching tabs or windows.
- Displays time spent on each website in seconds.
- Stores data persistently using Chrome's storage API.

---

## **Installation**

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will appear in your Chrome toolbar.

---

## **Usage**

1. Browse the web as usual.
2. Click the Site Time Tracker icon in the Chrome toolbar.
3. The popup displays a list of websites you’ve visited and the time spent on each.

---

## **Files**

- **manifest.json**: Defines the extension’s configuration and permissions.
- **background.js**: Tracks tab activity and calculates time spent on websites.
- **popup.html**: Provides the UI for the extension popup.
- **popup.js**: Displays the tracked time data in the popup.
- **icon.png**: The icon displayed in the toolbar (replace with your own).

---

## **How It Works**

1. **Background Script**:
   - Detects active tabs and tracks time spent on each website.
   - Handles events like tab switches, window focus changes, and tab closures.

2. **Popup**:
   - Retrieves the time data from storage and displays it in a user-friendly list.

---

## **Permissions**

The extension requires the following permissions:

- **tabs**: To monitor tab activity and URLs.
- **storage**: To store time usage data persistently.

---

## **Customization**

Feel free to modify or extend the extension:

- Change the time format (e.g., display in minutes or hours).
- Add data visualization (e.g., pie charts or bar graphs).
- Export usage data as a CSV file.

---

Start using Site Time Tracker to understand your browsing habits and manage your time better! 😊
