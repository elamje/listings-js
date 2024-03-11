Created by following the tutorial in this link: [https://blog.jenyay.com/building-javascript-widget/] and [https://github.com/jenyayel/js-widget]

To build `dist/wdiget.js`
Run

1. `npm i`
2. `./node_modules/.bin/webpack --config webpack.config.js --env prod true`

To use the widget,

1. replace `YOUR-CHANNEL-SLUG' with the slug of the channel you want people to subscribe to
2. and paste the following code anywhere in your HTML file:

```js
<script>
    (function (w, d, s, o, f, js, fjs) {
        w['JS-Widget'] = o; w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
        js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', 'mw', 'https://cdn.jsdelivr.net/gh/elamje/listings-js@main/dist/widget.js'));
    mw('init', 42);
    mw('subscribe', 'YOUR-CHANNEL-SLUG');
</script>
```
