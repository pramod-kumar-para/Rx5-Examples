
/* 

--0--1--2--3--4--5--6--......

*/


var foo = Rx.Observable.interval(1000);
foo.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


