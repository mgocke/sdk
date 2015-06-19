var injectJS = function(head, srcs, index) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = srcs[index];
    console.info("injecting js: ", srcs[index]);
    head.appendChild(script);

    if (index + 1 < srcs.length) {
        setTimeout(function() {
            injectJS(head, srcs, index + 1);
        }, 500);
    }
};

var injectCSS = function(head, cssPaths, index) {

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPaths[index];
    console.info("injecting css: ", cssPaths[index]);
    head.appendChild(link);

    if (index + 1 < cssPaths.length) {
        setTimeout(function() {
            injectCSS(head, cssPaths, index + 1);
        }, 500);
    }
};

// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function(e) {

    //	var originControl = '127.0.0.1:7000';
    //
    //	if(e.origin.indexOf(originControl)==-1){
    //		throw e.origin+" is not allowed to override this storefront";
    //	}
    var event = e.data;
    if (event.eventName == 'liveeditBootstrap') {

        window.liveedit = {};
        if (event.resources && event.resources.properties) {
            for (var i in event.resources.properties) {
                window.liveedit[i] = event.resources.properties[i];
            }
        }

        var head = document.getElementsByTagName("head")[0];

        //JS Files
        if (event.resources && event.resources.js && event.resources.js.length > 0) {
            injectJS(head, event.resources.js, 0);
        }

        //CSS Files
        if (event.resources && event.resources.css && event.resources.css.length > 0) {
            injectCSS(head, event.resources.css, 0);
        }
    }

}, false);
