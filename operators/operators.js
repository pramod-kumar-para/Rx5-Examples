var foo = Rx.Observable.of(1, 2, 3, 4, 5);

// operators take an input as observable and outputs an observable
// operator function are immutable and pure i.,e source is untouched

// Marble diagram

/*

foo: ---0---1---2---3--...
        multiplyBy(2)
bar: ---0---2---4---6--...

*/
function multiplyBy(multiplier) {
    var source = this;
    var result = Rx.Observable.create(function subscribe(observer){
        source.subscribe(
            function (x) { observer.next(x * multiplier); },
            function (err) { observer.error(err); },
            function () { observer.complete(); }
        );
    });
    return result;
}

Rx.Observable.prototype.multiplyBy = multiplyBy;

var bar = foo.multiplyBy(100);

bar.subscribe(
    function (x) { console.log('next '+x); },
    function (err) { console.log('error '+ err);},
    function () { console.log('done'); },
);








