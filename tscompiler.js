var tsc = require('typescript-compiler');

tsc.compile(['index.ts'], ['--out', 'out.js'])
