var foo = Rx.Observable.interval(500).take(4);
var bar = Rx.Observable.interval(300).take(5);

/* 
----0----1----2----(3|) (foo)
--0--1--2--3--(4|)      (bar)
    merge(foo, bar)
--0-01--21-3--24----3
*/

foo.merge(bar).subscribe(
    function(x) { console.log('startWith '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


// It can also be written as
// var merge = Rx.Observable.merge(foo, bar);
