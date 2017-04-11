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
Each element from a single fiddlestick must share the same `data-fiddlestick-id`.  
Each element must have a `data-fiddlestick-type` defining its kind of language. Possible values are:
- `data-fiddlestick-type="html"`: containing **HTML** code
- `data-fiddlestick-type="js"`: containing **JavaScript** code
- `data-fiddlestick-type="css"`: containing **CSS** code
- `data-fiddlestick-type="render"`: will display the **rendering** of the fiddlestick  

*Their must be only one `data-fiddlestick-type="render"` by `data-fiddlestick-id`.*
