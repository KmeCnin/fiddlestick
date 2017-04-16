(function () {

    // Test for ace editor dependency.
    if (typeof ace === 'undefined') {
        console.error('You have to load Ace editor (https://ace.c9.io) before FiddleStick or use fiddlestick.js instead of fiddlestick-ace.js.');
        return;
    }
   
    function init() {
        // Init fiddles mapping.
        var data = {};
        document
            .querySelectorAll('[data-fiddlestick-id]')
            .forEach(function(e) {
                var fiddleId = e.getAttribute('data-fiddlestick-id');
                var fiddleType = e.getAttribute('data-fiddlestick-type');

                if (!data.hasOwnProperty(fiddleId)) {
                    data[fiddleId] = {};
                }

                if (!data[fiddleId].hasOwnProperty(fiddleType)) {
                    data[fiddleId][fiddleType] = [];
                }

                if (fiddleType === 'render') {
                    data[fiddleId].render = {
                        'element': e,
                        'type': fiddleType,
                        'id': fiddleId,
                    };
                } else {
                    if (e.tagName.toLowerCase() === 'textarea') {
                        editor = ace.edit(e);
                        editor.setTheme("ace/theme/monokai");
                        var lang = fiddleType === 'js' ? 'javascript' : fiddleType;
                        editor.getSession().setMode("ace/mode/"+lang);
                        data[fiddleId][fiddleType].push({
                            'editor': editor,
                            'type': fiddleType,
                            'id': fiddleId,
                        });
                        editor.getSession().on('change', function(event) {
                            for(var fiddleId in data) { 
                                if (data.hasOwnProperty(fiddleId)) {
                                    update(data[fiddleId]);
                                }
                            }
                        });
                    } else {
                        data[fiddleId][fiddleType].push({
                            'element': e,
                            'type': fiddleType,
                            'id': fiddleId,
                        });
                        e.addEventListener('keyup', function (event) {
                            var fiddle = event.target || event.srcElement;
                            update(
                                data[fiddle.getAttribute('data-fiddlestick-id')]
                            );
                        });
                        e.addEventListener('change', function (event) {
                            var fiddle = event.target || event.srcElement;
                            update(
                                data[fiddle.getAttribute('data-fiddlestick-id')]
                            );
                        });
                    }
                }
            });

        for(var fiddleId in data) { 
            if (data.hasOwnProperty(fiddleId)) {
                update(data[fiddleId]);
            }
        }
    }

    function update(fiddle) {
        var iframe = document.createElement('iframe');
        var output = fiddle.render.element;
        output.innerHTML = '';
        output.appendChild(iframe);

        var cssCode = getAllFromLang(fiddle.css);
        var jsCode = getAllFromLang(fiddle.js);
        var htmlCode = getAllFromLang(fiddle.html);

        var layout = '<html><head><style>'
            + htmlDecode(cssCode)
            + '</style></head><body><main>'
            + htmlCode
            + '</main><script>'
            + htmlDecode(jsCode)
            + '</script></body></html>';

        iframe.contentDocument.open();
        iframe.contentDocument.writeln(layout);
        iframe.contentDocument.close();
    }

    function getAllFromLang(langElements) {
        if (langElements === undefined) {
            return '';
        }

        return langElements
            .reduce(function (string, e) {
                if (e.editor !== undefined) {
                    return string + e.editor.getValue();
                } else if(isTextBox(e.element)) {
                    return string + e.element.value;
                } else {
                    return string + e.element.innerHTML;
                }
            }, '');
    }

    function htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    function isTextBox(element) {
        var tagName = element.tagName.toLowerCase();
        if (tagName === 'textarea') return true;
        if (tagName !== 'input') return false;
        var type = element.getAttribute('type').toLowerCase(),
        // if any of these input types is not supported by a browser, it will behave as input type text.
        inputTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week']
        return inputTypes.indexOf(type) >= 0;
    }

    init();
})();