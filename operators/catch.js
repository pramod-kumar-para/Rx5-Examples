var foo = Rx.Observable.interval(500)
    .zip(Rx.Observable.of('a', 'b', 'c', 'd', 2), (x, y) => y);

var bar = foo.map(
    x => x.toUpperCase()
);

/* 
--a--b--c--d--2|     (foo)
map(toUpperCase)
--A--B--C--D--#      (bar)
catch(# => -Z| )
--A--B--C--D--Z|
*/

var result = bar.catch(error => Rx.Observable.of('Z'));
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


/* 
--a--b--c--d--2|     (foo)
map(toUpperCase)
--A--B--C--D--#      (bar)
catch(# => -Z| )
--A--B--C--D|
*/


// Instead of replacing error with z, we can also have complete notification
var result = bar.catch(error => Rx.Observable.empty());
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


/* 
--a--b--c--d--2|     (foo)
map(toUpperCase)
--A--B--C--D--#      (bar)
catch(# => -Z| )
--A--B--C--D----------------
*/


// or never
var result = bar.catch(error => Rx.Observable.never());
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

// Replacing error with retry behavior
foo = Rx.Observable.interval(500).map(
    () => Math.random()
);
var bar = foo.map(x => {
    if( x < 0.5 ) {
        return x;
    } else {
        throw new Error("Too large number");
    }
});

/* 
--?--?--?--?....        (foo)
    map
--?-----?--?------?--?--?       (bar)
*/

var result = bar.catch((e, outputObs) => outputObs);
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);