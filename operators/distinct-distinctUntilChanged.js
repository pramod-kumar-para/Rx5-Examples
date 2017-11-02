var foo = Rx.Observable.interval(500).take(5)
    .zip(Rx.Observable.of('a','b','A','c','b'), (x,y) => y);

/* 
--a--b--A--c--b|
    distinct
--a--b--A--c---|
*/

var result = foo.distinct();

result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

/* 
--a--b--c--c--d|
    distinct
--a--b--c-----d|
*/

foo = Rx.Observable.interval(500).take(5)
.zip(Rx.Observable.of('a','b','c','c','d'), (x,y) => y);

result = foo.distinctUntilChanged();

result.subscribe(
    function(x) { console.log('untilchanged '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

