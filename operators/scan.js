var foo = Rx.Observable.of('h', 'e', 'l', 'l', 'o');
var bar = Rx.Observable.interval(600).take(5);
/*
(hello|)                          (foo)
-----0-----1-----2-----3-----4|   (bar)
       zip((x,y) => x)
-----h-----e-----l-----l-----o|
  scan((acc, x) => acc+x, '')
-----h-----(he)--(hel)-(hell)(hello|)
*/

// scan is horizontal combination operator

var combined = foo.zip(bar, (x,y) => x).scan((acc, x) => acc+x, '');

combined.subscribe(
  function (x) { console.log('next ' + x)  },
  function (err) { console.log('error ' + err) },
  function () { console.log('done') },
);
