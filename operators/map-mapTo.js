// If you have a constant value to be mapped to use mapTo
var foo = Rx.Observable.of(1,2,3,4,5);

//---------------- mapTo and map -------------------

var bar = foo.map(x => x/2);
bar.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

var bar = foo.mapTo(10);
bar.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);