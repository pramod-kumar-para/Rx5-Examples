/*

--0--1--2--3--4
   first()
--0|

*/

var foo = Rx.Observable.of(0, 1, 2, 3, 4);
var bar = foo.first();
bar.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);