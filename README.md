# Fiddlestick
**FiddleStick** is a local *JSFiddle* easy to use and modulate.

- [Installation](#installation)
- [Usage](#usage)
- [Working examples](#working-examples)

## Installation

### Fast
Load **FiddleStick** from your HTML using RawGit CDN:
```html
<!-- Basic textarea support: -->
<script src="https://cdn.rawgit.com/KmeCnin/fiddlestick/v0.1.0/fiddlestick.js"></script>
```
```html
<!-- Ace editor support: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script src="https://cdn.rawgit.com/KmeCnin/fiddlestick/v0.1.0/fiddlestick-ace.js"></script>
```

### Clean
1. Copy file https://github.com/KmeCnin/fiddlestick/blob/master/fiddlestick.js into your project directory.
2. Load **Fiddlestick** from your HTML:
```html
<!-- Basic textarea support: -->
<script src="path/to/fiddlestick.js"></script>
```
3. **OR** if you want to use ace editor integration instead:
```html
<!-- Ace editor support: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script src="path/to/fiddlestick-ace.js"></script>
```

## Usage
A **FiddleStick** is composed of multiple HTML elements.
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
### Simple fiddlestick example
You can use a very simple fiddlestick with raw textarea using `fiddlestick.js`.  
[Live example](https://kmecnin.github.io/fiddlestick/example/simple)
### Ace editor fiddlestick example
You can use a code editor-like area using integration with [Ace editor](https://ace.c9.io/) by using `fiddlestick-ace.js`.  
You have to include Ace editor before FiddleStick.  
[Live example](https://kmecnin.github.io/fiddlestick/example/mrhankey)
