# nacss

**nacss** (*ăȘăă* in Japanese) is CSS to prepare a base for styling.

Inspired by [normalize.css](https://www.npmjs.com/package/normalize.css). It provides many great tips of CSS normalization till now.


## Preview

You can see the preview of **nacss** styles *[here](/preview/)*.


## Installation

```bash
npm install nacss
yarn add nacss
```

There's no need to install package if loading CSS file via CDN.


## How to use

Just load CSS file in your project.

There are several ways to load CSS. The following shows how to load.
Then of course, the choice is yours. đ

### HTML

Insert `<link>` into `<head>`.

```html
<!-- Change version specification  -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/nacss@1.1.0/dist/nacss.min.css"
/>
```

See *[here](https://github.com/nemuvski/nacss/releases)* for valid version.

### JavaScript

```js
import 'nacss';
```

### Stylesheet

```css
@import 'nacss';
@import url(nacss);

/* via CDN (Change version specification) */
@import url(https://cdn.jsdelivr.net/npm/nacss@1.1.0/dist/nacss.min.css);
```
