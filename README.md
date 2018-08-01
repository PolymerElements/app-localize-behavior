[![Published on NPM](https://img.shields.io/npm/v/@polymer/app-localize-behavior.svg)](https://www.npmjs.com/package/@polymer/app-localize-behavior)
[![Build status](https://travis-ci.org/PolymerElements/app-localize-behavior.svg?branch=master)](https://travis-ci.org/PolymerElements/app-localize-behavior)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/app-localize-behavior)

## &lt;app-localize-behavior&gt;
`app-localize-behavior` is a behavior that wraps the [format.js](http://formatjs.io/) library to
help you internationalize your application. Note that if you're on a browser that
does not natively support the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
object, you must load the polyfill yourself. An example polyfill can
be found [here](https://github.com/andyearnshaw/Intl.js/).

See: [Documentation](https://www.webcomponents.org/element/@polymer/app-localize-behavior),
  [Demo](https://www.webcomponents.org/element/@polymer/app-localize-behavior/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/app-localize-behavior
```

### In an html file using the localized element
```html
<html>
  <head>
    <!-- Optional: Intl polyfill -->
    <script src="https://unpkg.com/intl@1.2.5/dist/Intl.min.js"></script>
    <script src="https://unpkg.com/intl@1.2.5/locale-data/jsonp/en.js"></script>
    <script src="https://unpkg.com/intl@1.2.5/locale-data/jsonp/fr.js"></script>

    <!-- Elements using the behaviour -->
    <script type="module" src="sample-element.js"></script>
  </head>
  <body>
    <sample-element></sample-element>
  </body>
</html>
```

### Localizing a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {AppLocalizeBehavior} from '@polymer/app-localize-behavior/app-localize-behavior.js';

class SampleElement extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {
  static get template() {
    return html`
      <div>{{localize('hello', 'name', 'Batman')}}</div>
    `;
  }

  static get properties() {
    return {
      language: { value: 'en' },
    }
  }

  function attached() {
    this.loadResources(this.resolveUrl('locales.json'));
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/app-localize-behavior
cd app-localize-behavior
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
