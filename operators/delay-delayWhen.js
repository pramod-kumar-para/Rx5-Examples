
var foo = Rx.Observable.of(1,2,3,4,5);

/* 

--1--2--3--4--5
    delay(2000)
-----------1--2--3--4--5

*/

var bar = foo.delay(2000);

bar.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

// constant amount of delay

/* 
--1--2--3--4--5
    delayWhen(x => -----0|)
--1-------2-
*/

var result = foo.delayWhen(x => 
    Rx.Observable.interval(x * x * 100).take(1)
);

result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);
