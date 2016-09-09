const fs = require('fs');
const Rx = require('rxjs');

const readFile$ = Rx.Observable.bindNodeCallback(fs.readFile)

const five$ = Rx.Observable.interval(100).take(5);

readFile$('.git/HEAD')
	.subscribe( val => console.log(val), () => {}, console.log('complete') );
