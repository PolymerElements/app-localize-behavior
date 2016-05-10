# carbon-localize-behavior

`Polymer.CarbonLocalizeBehavior` wraps the [format.js](http://formatjs.io/) library to
help you internationalize your application. Note that if you're on a browser that
does not natively support the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
object, you must load the polyfill yourself. An example polyfill can
be found [here](https://github.com/andyearnshaw/Intl.js/).

Sample use:

    <dom-module id="x-app">
       <template>
        <div>{{localize('hello', 'Batman')}}</div>
       </template>
       <script>
          Polymer({
            is: "x-app",
            behaviors: [
              Polymer.CarbonLocalizeBehavior
            ],

            properties: {
              language: {
                value: 'en'
              },
              resources: {
                value: function() {
                  return {
                    'en': { 'hello': 'My name is {name}.' },
                    'fr': { 'hello': 'Je m'apelle {name}.' }
                  }
              }
            }
          });
       </script>
    </dom-module>
