// Resubscribe to an observable on error with retry

var foo = Rx.Observable.interval(500)
    .zip(Rx.Observable.of('a','b','c','d',2), (x, y) => y);

var bar = foo.map(x => x.toUpperCase());

/* 
--a--b--c--d--2|    (foo)
map(toUpperCase)
--A--B--C--D--#     (bar)
    retry
--A--B--C--D-----A--B--C--D-----A--B--C--D-----
*/

var result = bar.retry(2);
// without argument retry goes infinite

result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

result = bar.retryWhen( errorObs => errorObs.delay(1000));
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

