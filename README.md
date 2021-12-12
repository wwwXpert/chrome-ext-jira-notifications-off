# chrome-ext-jira-notifications-off
Chrome Extension to disable Atlassian JIRA Notification Popups

##CONFIGURATION

- Update the manifest.json file by adding your Atlassian Cloud domain to the "matches" line.

- manifest.json:
```
"matches": ["https://{your altlassian cloud url}/*"],
```
- You can configure multiple domains for multiple cloud instances

```
"content_scripts": [{
        "css": ["jira_notifications_off.css"],
        "js": ["jquery-3.4.1.min.js", "jira_notifications_off.js"],
        "matches": ["https://{domain one}/*"],
        "persistent": true
    },{
        "css": ["jira_notifications_off.css"],
        "js": ["jquery-3.4.1.min.js", "jira_notifications_off.js"],
        "matches": ["https://{domain two}/*"],
        "persistent": true
    }]
```