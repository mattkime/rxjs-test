const fs = require('fs');
const Rx = require('rxjs');

const readFile$ = Rx.Observable.bindNodeCallback(fs.readFile)

const five$ = Rx.Observable.interval(100).take(5);

five$
	.zip( readFile$('.git/HEAD').repeat())
	.subscribe( val => console.log(val), () => {}, console.log('complete') );
