var foo = Rx.Observable.of('h','e','l','l','0')
    .zip(Rx.Observable.interval(600).take(5), (x, y) => x);



/*
-----h-----e-----l-----l-----o|       (foo)
--------0--------1--------2|          (bar)

        buffer(bar)

--------h--------e--------ll|
*/

// var result = foo.bufferCount(2);
// result.subscribe(
//     function(x) { console.log('next '+x); },
//     function(err) { console.log('error '+err);},
//     function () { console.log('done');}
// );

var bar = Rx.Observable.interval(900).take(3);
var result = foo.buffer(bar);
result.subscribe(
    function(x) { console.log('next '+x); },
    function(err) { console.log('error '+err);},
    function () { console.log('done');}
);



