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
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import './common-styles.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

import {AppLocalizeBehavior} from '../app-localize-behavior.js';

class xLocalTranslate extends mixinBehaviors
(AppLocalizeBehavior, PolymerElement) {
  static get template() {
    return html`
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
    `;
  }

  static get properties() {
    return {
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
    };
  }

  _toggle() {
    this.language = this.$.switch.checked ? 'fr' : 'en';
  }
}

window.customElements.define('x-local-translate', xLocalTranslate);
