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

import '@polymer/paper-styles/shadow.js';
import '@polymer/paper-styles/typography.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<dom-module id="common-styles">
  <template>
    <style>
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

      .code-container {
        background-color: #f5f5f5;
        padding: 20px;
      }

      .demo {
        border-bottom: 1px solid #e0e0e0;
        background-color: white;
        padding: 20px;
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
</dom-module>
`;

document.head.appendChild($_documentContainer.content);