# FiddleStick
**FiddleStick** is a local [JSFiddle](https://jsfiddle.net/) easy to use and modulate.  
There is currently 2 possible behaviours: **Basic textarea** or **Ace editor**.

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Working examples](#working-examples)

## Installation

### Fast
Load **FiddleStick** from your HTML using [RawGit](https://rawgit.com/) CDN:

#### Basic textarea
```html
<script src="https://cdn.rawgit.com/KmeCnin/fiddlestick/v0.1.2/fiddlestick.js"></script>
```

#### Ace editor
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script src="https://cdn.rawgit.com/KmeCnin/fiddlestick/v0.1.2/fiddlestick-ace.js"></script>
```

### Clean

#### Basic textarea
1. Copy file https://raw.githubusercontent.com/KmeCnin/fiddlestick/master/fiddlestick.js into your project directory.
2. Load **FiddleStick** in your HTML:
```html
<script src="path/to/fiddlestick.js"></script>
```

#### Ace editor
1. Copy file https://raw.githubusercontent.com/KmeCnin/fiddlestick/master/fiddlestick-ace.js into your project directory.
2. Load **Ace editor** in your HTML using CDN:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
```
3. Load **FiddleStick** in your HTML:
```html
<script src="path/to/fiddlestick-ace.js"></script>
```

## Usage
A **FiddleStick** is composed of multiple HTML elements.  
Each element from a single FiddleStick must share the same `data-fiddlestick-id`. This means it is possible to have multiple independants fiddlesticks in the same page.  
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
You can use multiple fiddlesticks in the same page.  
Editable data must be placed in `<textarea>` and un-editable data can be for instance in a `<div>`.  
You can `display: none` a block of fiddlestick in order to hide it from the user but it will still be concatenated to your rendered fiddlestick.  
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
### Simple FiddleStick example
You can use a very simple fiddlestick with raw textarea using `fiddlestick.js`.  
[Live example](https://kmecnin.github.io/fiddlestick/example/simple)
### Ace editor FiddleStick example
You can use a code editor-like area using integration with [Ace editor](https://ace.c9.io/) by using `fiddlestick-ace.js`.  
You have to include Ace editor before FiddleStick.  
[Live example](https://kmecnin.github.io/fiddlestick/example/mrhankey)
