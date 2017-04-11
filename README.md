# Fiddlestick
**Fiddlestick** is a local *JSFiddle* easy to use and modulate.

## Installation

### Fast
Load **Fiddlestick** from your HTML using CDN:
```html
<script src="https://cdn.rawgit.com/KmeCnin/fiddlestick/63d9f04b/fiddlestick.js"></script>
```

### Clean
1. Copy file https://github.com/KmeCnin/fiddlestick/blob/master/fiddlestick.js into your project directory.
2. Load **Fiddlestick** from your HTML:
```html
<script src="path/to/fiddlestick.js"></script>
```

## Usage
A **fiddlestick** is composed of multiple HTML elements.
Each element from a single fiddlestick must share the same `data-fiddlestick-id`. This means it is possible to have multiple independants fiddlesticks in the same page.  
Each element must have a `data-fiddlestick-type` defining its kind of language. Possible values are:
- `data-fiddlestick-type="html"`: containing **HTML** code
- `data-fiddlestick-type="js"`: containing **JavaScript** code
- `data-fiddlestick-type="css"`: containing **CSS** code
- `data-fiddlestick-type="render"`: will display the **rendering** of the fiddlestick  

**Important:**
- Their must be only one `data-fiddlestick-type="render"` by `data-fiddlestick-id`.
- But it is possible to have as many html/js/css types as we want, they will be concatenated by order of occurency.
- html/js/css types can be editable elements (textarea, input, etc.) or readonly elements (div, span, etc.).

## Example
```html
<!-- One first Fiddlestick -->
<textarea data-fiddlestick-id="first-fiddlestick" data-fiddlestick-type="html">
  <!-- Data will be completed by user. -->
</textarea>
<textarea data-fiddlestick-id="first-fiddlestick" data-fiddlestick-type="js">
  <!-- Data will be completed by user. -->
</textarea>
<div data-fiddlestick-id="first-fiddlestick" data-fiddlestick-type="css">
p {
  color: red;
}
</div>
<div data-fiddlestick-id="first-fiddlestick" data-fiddlestick-type="render"></div>

<!-- Another Fiddlestick in the same page -->
<textarea data-fiddlestick-id="second-fiddlestick" data-fiddlestick-type="js">
  <!-- Data will be completed by user. -->
</textarea>
<div data-fiddlestick-id="second-fiddlestick" data-fiddlestick-type="js">
  <!-- Define here JavaScript code in readonly. It will be added at the end of the previous code then rendered. -->
</div>
<div data-fiddlestick-id="second-fiddlestick" data-fiddlestick-type="render"></div>
```

## Working examples
