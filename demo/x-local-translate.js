/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import './common-styles.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {AppLocalizeBehavior} from '../app-localize-behavior.js';

Polymer({
  _template: html`
    <style include="common-styles"></style>

    <div class="lang">
      <span title="english">🇬🇧 EN</span>
      <paper-toggle-button on-change="_toggle" id="switch"></paper-toggle-button>
      <span title="french">FR 🇫🇷</span>
    </div>

    <h4>This demo's resources are loaded statically, not from an external file.</h4>

    <div class="snippet">
      <div class="demo">
        <div>{{localize('greeting')}}</div>
      </div>
      <div class="code-container">
        <code>localize('greeting')</code>
      </div>
    </div>
`,

  is: 'x-local-translate',

  behaviors: [AppLocalizeBehavior],

  properties: {
    /* Overriden from AppLocalizeBehavior */
    language: {value: 'en', type: String},

    /* Overriden from AppLocalizeBehavior */
    formats: {
      type: Object,
      value: function() {
        return {number: {USD: {style: 'currency', currency: 'USD'}}};
      }
    },

    /* Overriden from AppLocalizeBehavior */
    resources: {
      type: Object,
      value: function() {
        return {'en': {'greeting': 'Hello!'}, 'fr': {'greeting': 'Bonjour!'}};
      }
    }
  },

  _toggle: function() {
    this.language = this.$.switch.checked ? 'fr' : 'en';
  }
});
