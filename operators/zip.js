var foo = Rx.Observable.interval(500).take(5);
var bar = Rx.Observable.interval(300).take(4);

/* 

-----0-----1-----2-----3-----4 (foo)
---0---1---2---3---4|          (bar)
    zip((x, y) => x+y )
-----0-----2-----4-----6-----8|
*/

// By using zip
// First of foo + First of bar => First of output
// Second of foo + Second of bar => Second of output
// ...
// n-th of foo + n-th of bar
// If nth of bar is not available, then zip of that nth is ignored.

var combined = foo.zip(bar, (x,y) => x+y );

// Rx.Observable.zip(foo, bar)


combined.subscribe(
    function(x) { console.log('startWith '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);
