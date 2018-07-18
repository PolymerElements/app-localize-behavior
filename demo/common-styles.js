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
import '@polymer/paper-styles/shadow.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
const template = html`
<dom-module id="common-styles">
  <template>
    <style include="demo-snippet">
      :host {
        @apply --shadow-none;
        @apply --paper-font-common-base;
        display: block;
        max-width: 600px;
        margin: 40px auto;
      }

      .snippet {
        @apply --shadow-elevation-2dp;
      }

      paper-toggle-button {
        display: inline-block;
      }

      .lang {
        text-align: center;
        font-size: 20px;
      }

      code {
        display: block;
      }

      .demo div {
        @apply --paper-font-body1;
        line-height: 1.5;
      }
    </style>
  </template>
</dom-module>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
