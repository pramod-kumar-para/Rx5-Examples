
/* 
---0--1--2--3--4--5--6--7--......
        take(4)
---0--1--2--3|          (foo)
              (45678|)  (more)
        concat
---0--1--2--3(45678|)
*/

var foo = Rx.Observable.interval(100).take(4);
var more = Rx.Observable.of(5, 6, 7, 8)

var bar = foo.concat(more);

bar.subscribe(function(x){
    console.log('next '+x);
}, function(err){
    console.log('Error '+err);
}, function(){
    console.log('complete');
})