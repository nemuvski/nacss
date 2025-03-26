# nacss

**nacss** (*なくす* in Japanese) is CSS to prepare a base for styling.

Inspired by [normalize.css](https://www.npmjs.com/package/normalize.css). It provides many great tips of CSS normalization till now.


## Preview

You can see the preview of **nacss** styles *[here](/preview/)*.


## Support browsers

- Chrome (*latest*)
- Firefox (*latest*)
- Safari (*latest*)


## Installation

```bash
npm install nacss
yarn add nacss
```

There's no need to install package if loading CSS file via CDN.


## How to use

Just load CSS file in your project.

There are several ways to load CSS. The following shows how to load.
Then of course, the choice is yours. 🐑

### HTML

Insert `<link>` into `<head>`.

```html
<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nacss" />
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/nacss" />
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

/* via CDN */
@import url(https://cdn.jsdelivr.net/npm/nacss);
@import url(https://unpkg.com/nacss);
```
