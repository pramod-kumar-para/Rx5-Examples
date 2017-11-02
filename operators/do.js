// ----------------- do -----------------
// do is a special case of map, but it returns what you pass and no transformations applied.
// Transparently perform actions or side-effects, such as logging.
// Can be used for debuggin purposes.

var foo = Rx.Observable.of(1,2,3,4,5);
var bar = foo.do(function(x){
    console.log('before: '+x);
}).map(x => x*2)
.do(function(x){
    console.log('after: '+x)
})

bar.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);
