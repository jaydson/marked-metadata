marked-metadata
================
[![Build Status](https://travis-ci.org/jaydson/marked-metadata.svg?branch=master)](https://travis-ci.org/jaydson/marked-metadata)  

Markdown parser (using marked) with metadata header support.

## Installing
```shell
npm install marked-metadata
```

Then, just require marked-metadata in your project:  
```javascript
var mkmeta = require('marked-metadata');
```

## How to use
marked-metadata was built on top of the awesome [marked](https://github.com/chjj/marked).  
But sometimes you need some meta information about the markdown file.  
Normally a pattern like is used to define a header metadata:  
```text
<!--
layout: post
title: hello world
-->
```

Or something like this pattern:  
```text
---
layout: post
title: hello world
---
```

With marked-metadata you can parse any header metadata, using the defineTokens method:  
```javascript
var md = new MarkedMetaData('./test/test.md');
md.defineTokens('<!--', '-->');
```

You can get just the markdown metadata:  
```javascript
var md = new MarkedMetaData('./test/test.md');
md.defineTokens('<!--', '-->');
var meta = md.metadata();
```

And you can get just the markdown content (without the header)   
```javascript
var md = new MarkedMetaData('./test/test.md');
md.defineTokens('<!--', '-->');
var content = md.markdown();
```

## Contribute
Fork > Pull-request

## Tests
```shell
npm test
```