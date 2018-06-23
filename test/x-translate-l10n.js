/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import { AppLocalizeBehavior } from '../app-localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <div id="output">{{localize('intro', 'price', 10)}}</div>
`,

  is: "x-translate-l10n",

  behaviors: [
    AppLocalizeBehavior
  ],

  properties: {
    language: {
      value: 'en',
      type: String
    },
    formats: {
      type: Object,
      value: function() {
        return {
          number: { USD: { style: 'currency', currency: 'USD' } }
        };
      }
    },
    resources: {
      type: Object,
      value: function() {
        return {
          'en': {
            'intro': 'Everything is {price, number, USD}'
          },
          'fr' : {
            'intro': 'Tout est à {price, number, USD}.'
          }
        };
      }
    }
  }
});
