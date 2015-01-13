Utilities library for Node.js

### Object

#### Merge
```javascript
var object = require('kungfu').object;

var obj = object.merge({a: 'a', b: 'b'}, {c: 'c', 'a': 'toto'});

print(obj); // prints {c:'c', b:'b', a:'toto'}

```

