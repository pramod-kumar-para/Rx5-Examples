/* 

--0--1--2--3--4--5--6
    filter(x => (x%2==0))
--0-----2-----4-----6

*/
var foo = Rx.Observable.of(0,1,2,3,4,5,6);
foo.filter(x => (x%2==0)).subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);


