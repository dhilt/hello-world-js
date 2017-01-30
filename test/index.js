const helloLib = require('../src/index')

if(helloLib.hello() === 'Hello world!') {
	console.log('Test passed!');
}
else {
	throw new Error('Test failed.');
}
