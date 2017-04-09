(function () {
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
        document.querySelectorAll(
            '[data-fiddlestick-type=js], ' +
            '[data-fiddlestick-type=html], ' +
            '[data-fiddlestick-type=css]'
        ).forEach(function (element) {
            element.addEventListener('keyup', function (event) {
                console.log('changed');
                var fiddle = event.target || event.srcElement;
                update(fiddle.getAttribute('data-fiddlestick-id'));
            });
            element.addEventListener('change', function (event) {
                console.log('changed');
                var fiddle = event.target || event.srcElement;
                update(fiddle.getAttribute('data-fiddlestick-id'));
            });
        });
    });
})();
function htmlDecode(input) {
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
function update(fiddleId) {
    var output = document.querySelector(
        '[data-fiddlestick-id='+fiddleId+'][data-fiddlestick-type=render]'
    );
    output.innerHTML = '';
    output.appendChild(document.createElement('iframe'));
    
    var cssCode = Array.prototype.slice.call(
        document.querySelectorAll(
            '[data-fiddlestick-id='+fiddleId+'][data-fiddlestick-type=css]'
        )
    )
    .reduce(function (string, e) {
        return string + e.innerHTML;
    }, '');

    var htmlCode = Array.prototype.slice.call(
        document.querySelectorAll(
            '[data-fiddlestick-id='+fiddleId+'][data-fiddlestick-type=html]'
        )
    )
    .reduce(function (string, e) {
        return string + e.value;
    }, '');

    var jsCode = Array.prototype.slice.call(
        document.querySelectorAll(
            '[data-fiddlestick-id='+fiddleId+'][data-fiddlestick-type=js]'
        )
    )
    .reduce(function (string, e) {
        return string + e.innerHTML;
    }, '');

    var layout = '<html><head><style>'
        + cssCode 
        + '</style></head><body><main>'
        + htmlCode
        + '</main><script>'
        + jsCode
        + '</script></body></html>';

    var iframe = output.querySelector(
        '[data-fiddlestick-id='+fiddleId+'] iframe'
    );
    iframe.contentDocument.open();
    iframe.contentDocument.writeln(layout);
    iframe.contentDocument.close();
}