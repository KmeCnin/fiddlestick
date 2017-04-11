var fiddlestick = (function () {
    Array.prototype.slice.call(
        document.querySelectorAll('[data-fiddlestick-id]')
    )
    .map(function (e) {
        return e.getAttribute('data-fiddlestick-id');
    })
    .filter(function (value, index, self) { 
        return self.indexOf(value) === index;
    })
    .forEach(function(fiddleId) {
        update(fiddleId);
    });

    function update(fiddleId) {
        var output = document.querySelector(
            '[data-fiddlestick-id='+fiddleId+'][data-fiddlestick-type=render]'
        );
        output.innerHTML = '';
        output.appendChild(document.createElement('iframe'));

        var cssCode = getAllFromLang(fiddleId, 'css');
        var jsCode = getAllFromLang(fiddleId, 'js');
        var htmlCode = getAllFromLang(fiddleId, 'html');

        var layout = '<html><head><style>'
            + htmlDecode(cssCode)
            + '</style></head><body><main>'
            + htmlCode
            + '</main><script>'
            + htmlDecode(jsCode)
            + '</script></body></html>';

        var iframe = output.querySelector(
            '[data-fiddlestick-id='+fiddleId+'] iframe'
        );
        iframe.contentDocument.open();
        iframe.contentDocument.writeln(layout);
        iframe.contentDocument.close();
    }

    function getAllFromLang(fiddleId, lang) {
        return Array.prototype.slice.call(
            document.querySelectorAll(
                '[data-fiddlestick-id='+fiddleId+']'+
                '[data-fiddlestick-type='+lang+']'
            )
        )
        .reduce(function (string, e) {
            if (hasAceEditor(e)) {
                return e.querySelector('.ace_text-input').value;
            }
            if (isTextBox(e)) {
                return string + e.value;
            } else if (hasAceEditor(e)) {
                console.log(e.querySelector('.ace_text-input').value);
                return e.querySelector('.ace_text-input').value;
            } else {
                return string + e.innerHTML;
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

    function hasAceEditor(element) {
        return element.querySelector('.ace_text-input') !== null;
    }

    return {
        update: update,
    };
})();