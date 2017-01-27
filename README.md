
<!---

This README is automatically generated from the comments in these files:
app-localize-behavior.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->


##Polymer.AppLocalizeBehavior

`Polymer.AppLocalizeBehavior` wraps the [format.js](http://formatjs.io/) library to
help you internationalize your application. Note that if you're on a browser that
does not natively support the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
object, you must load the polyfill yourself. An example polyfill can
be found [here](https://github.com/andyearnshaw/Intl.js/).

`Polymer.AppLocalizeBehavior` supports the same [message-syntax](http://formatjs.io/guides/message-syntax/)
of format.js, in its entirety; use the library docs as reference for the
available message formats and options.

Sample application loading resources from an external file:

```html
<dom-module id="x-app">
   <template>
    <div>{{localize('hello', 'name', 'Batman')}}</div>
   </template>
   <script>
      class XApp extends Polymer.AppLocalizeBehavior(Polymer.Element) {
         static get is() {
            return 'x-app';
         }

         static get config() {
            return {properties: {language: {type: String, value: 'en'}}};
         }

         connectedCallback() {
            super.connectedCallback();
            this.loadResources(this.resolveUrl('locales.json'));
         }
      }

      customElements.define(XApp.is, XApp);
   &lt;/script>
</dom-module>
```

Alternatively, you can also inline your resources inside the app itself:

```html
<dom-module id="x-app">
   <template>
    <div>{{localize('hello', 'name', 'Batman')}}</div>
   </template>
   <script>
      class XApp extends Polymer.AppLocalizeBehavior(Polymer.Element) {
         static get is() {
            return 'x-app';
         }

         static get config() {
            return {
               properties: {
                  language: {
                     type: String,
                     value: 'en'
                  },
                  resources: {
                     value: function() {
                        return {
                           'en': { 'hello': 'My name is {name}.' },
                           'fr': { 'hello': 'Je m\'apelle {name}.' }
                        };
                     }
                  }    
               }
            }
         }
      }
      
      customElements.define(XApp.is, XApp);
   &lt;/script>
</dom-module>
```


