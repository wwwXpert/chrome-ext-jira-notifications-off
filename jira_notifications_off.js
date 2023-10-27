$("document").ready(function() {
    // console.log('JIRA Notifications Off Extension Loaded');
    $("#jira > div.atlaskit-portal-container > div:nth-child(1) > div > div > div > div > div, #jira .atlaskit-portal-container div[role=alert]").css({ display: 'none!important' });
});