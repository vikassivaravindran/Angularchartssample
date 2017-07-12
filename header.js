!function() {
    var path = document.location.pathname;
    var dir = /^.*\/([a-z]+)\//.exec(path)[1];
    var filename = path.substring(path.lastIndexOf('/')+1);
    document.write([
        '<div id="header" align="centre">',
        '<img src="accenture.png" style="float:centre; padding-right: 1em" width=300 height=300></img></a>',
        '<div style="float:right">',
        '</div>',
        '<hr>',
        '</div>'
    ].join(''));
    window.onload = function() {
        d3.select('#version').text('v' + dc.version);
    };
}();
