# mwildcards

very simple. I created this project to configure environment variable parameters in the console. Use simple grammar and stay practical.

## example

```ts
import Mwildcards from '../mwildcards';
const env_trace = process.env.TRACE || '';
const mw = new Mwildcards(env_trace);

/// your code.
mw.isMatch('balabala');
```

```shell
TRACE="module/*,-module/XD" node index.js
```