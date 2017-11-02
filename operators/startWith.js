
/* 

---0--1--2--3--4--5--6--7--......
        take(4)             (foo)
---0--1--2--3|       
        startWith('a')      
a--0--1--2--3|

*/

var foo = Rx.Observable.interval(1000).take(4);
bar = foo.startWith('a');
bar.subscribe(
    function(x) { console.log('startWith '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);