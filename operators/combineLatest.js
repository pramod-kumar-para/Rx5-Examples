var foo = Rx.Observable.interval(500).take(4);
var bar = Rx.Observable.interval(300).take(5);

/* 
----0----1----2----(3|) (foo)
--0--1--2--3--(4|)      (bar)
    combineLatest((x,y) => x+y)
----01--23-4--(56)-(7|)
*/

// merge: OR style combinator
// combineLatest: AND style combinator

var cl = Rx.Observable.combineLatest(foo, bar, (x,y) => x+y );
cl.subscribe(
    function(x) { console.log('startWith '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);
