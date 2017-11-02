/* 

--0--1--2--3--4--5
    skip(2)
--------2--3--4--5

*/


var foo = Rx.Observable.of(0, 1, 2, 3, 4, 5).skip(2);
foo.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


