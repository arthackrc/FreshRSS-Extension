(function() {
    var rssUrl = location.href;
    var applicationUrl = 'http://192.168.68.30:1003/i/?c=feed&a=add&url_rss=';
    applicationUrl += encodeURIComponent(rssUrl);
    window.open(applicationUrl);
})();