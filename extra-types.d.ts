/*
This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// Type definitions for intl-messageformat 1.3
// Project: https://github.com/yahoo/intl-messageformat
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = IntlMessageFormat;
export as namespace IntlMessageFormat;

interface DateFormat {
    day: string;
    month: string;
    weekday: string;
    year: string;
}

interface TimeFormat {
    hour: string;
    minute: string;
    second: string;
    timeZoneName: string;
}

declare class IntlMessageFormat {
    constructor(message: string, locales: string | string[], formats?: any);
    resolvedOptions(): { locale: string };
    format(arg: any): string;
    static default: any;
    static defaultLocale: string;
    static formats: {
        date: {
            full: DateFormat;
            long: DateFormat;
            medium: DateFormat;
            short: DateFormat;
        };
        number: {
            currency: {
                style: string;
            };
            percent: {
                style: string;
            };
        };
        time: {
            full: TimeFormat;
            long: TimeFormat;
            medium: TimeFormat;
            short: TimeFormat;
        };
    };
}
