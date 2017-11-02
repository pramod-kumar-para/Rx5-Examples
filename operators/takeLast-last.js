/* 

------1--2--3--4--5--6--7....
            take(5)
------1--2--3--4--5|
        takeLast(2)
-------------------|(45|)

takeLast doesnt know which last values to pick so it reaches the end and pick our n values

*/
var foo = Rx.Observable.interval(1000).take(5);

var bar = foo.takeLast(2);

bar.subscribe(
    function(x) { console.log('takeLast '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);

var last = foo.last();

last.subscribe(
    function(x) { console.log('last '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);