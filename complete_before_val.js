const fs = require('fs');
const Rx = require('rxjs');

const readFile$ = Rx.Observable.bindNodeCallback(fs.readFile)

readFile$('.git/HEAD')
	.subscribe( val => console.log(val), () => {}, console.log('complete') );
