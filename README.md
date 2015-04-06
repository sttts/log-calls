# log-calls.js

Log function calls.

## Installation

Download the latest release via git from github:

```bash
git clone https://github.com/sttts/log-calls.git
```

or use [npm](https://www.npmjs.com):

```bash
npm install log-calls
```

or use [gittio](http://gitt.io) for Titanium:

```bash
gittio install log-calls
```

## Usage

To use log-calls.js, require it in your code (probably in some initialization code) and annotate a single function or a whole namespace, e.g. a CommonJS module:

```javascript
var log_calls = require('log-calls');

var nedb = require('nedb');
log_calls.annotate_all('nedb', nedb);

var mymodule = require('mymodule');
log_calls.annotate('mymodule', mymodule, 'some_function', console.error);

// ... your code
```

### Titanium

To use log-call.js on the Titanium platform, pass one of the logger functions from Ti.API:

```javascript
var log_calls = require('log-calls');
var nedb = require('nedb');
log_calls.annotate_all('nedb', nedb, Ti.API.info);
```

### Output

The output looks like this:

```
nedb.find({"ignore":false})
nedb.getCandidates({"ignore":false})
mymodule.some_function(42);
```
