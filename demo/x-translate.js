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

class xTranslate extends mixinBehaviors
(AppLocalizeBehavior, PolymerElement) {
  constructor() {
    super();
  }

  static get template() {
    return html`
      <style include="common-styles"></style>
      
      <div class="lang">
        <span title="english">🇬🇧 EN</span>
        <paper-toggle-button on-change="_toggle" id="switch"></paper-toggle-button>
        <span title="french">FR 🇫🇷</span>
      </div>
  
      <h4>{{localize('header_1')}}</h4>
      <div class="snippet">
        <div class="demo">
          <div>{{localize('greeting')}}</div>
          <div>{{localize('missing')}}</div>
          <div>{{localize('intro', 'name', 'Batman')}}</div>
          <div>{{localize('cats', 'numCats', 10000, 'pctBlack', 0.42)}}</div>
          <div>{{localize('sale', 'start', 150, 'time', 15, 'price', 10)}}</div>
        </div>
        <div class="code-container">
          <code>localize('greeting')</code>
          <code>localize('intro', 'name', 'Batman')</code>
          <code>localize('cats', 'numCats', 10000, 'pctBlack', 0.42)</code>
          <!-- Dates need to be a valid JavaScript object. For an example, we
            are passing a number of milliseconds from the epoch -->
          <code>localize('sale', 'start', 150, 'time', 15, 'price', 10)</code>
        </div>
      </div>
  
      <h4>{{localize('header_2')}}</h4>
      <div class="snippet">
        <div class="demo">
          <div>{{localize('fruit', 'num', 0)}} / {{localize('fruit', 'num', 1)}}/ {{localize('fruit', 'num', 3)}}</div>
          <div>{{localize('bananas', 'name', 'Robin', 'gender', 'male', 'num', 1)}}</div>
          <div>{{localize('bananas', 'name', 'Robin', 'gender', 'female', 'num', 0)}}</div>
          <div>{{localize('bananas', 'name', 'Robin', 'gender', 'other', 'num', 4)}}</div>
        </div>
        <div class="code-container">
          <code>localize('fruit', 'num', 0) / localize('fruit', 'num', 1) / localize('fruit', 'num', 3)</code>
          <code>localize('bananas', 'name', 'Robin', 'gender', 'male', 'num', 1)</code>
          <code>localize('bananas', 'name', 'Robin', 'gender', 'female', 'num', 0)</code>
          <code>localize('bananas', 'name', 'Robin', 'gender', 'other', 'num', 4)</code>
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
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadResources(this.resolveUrl('locales.json'));
  }

  _toggle() {
    this.language = this.$.switch.checked ? 'fr' : 'en';
  }
}

window.customElements.define('x-translate', xTranslate);
