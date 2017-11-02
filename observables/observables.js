
// Producer (PUSH values to consumer)
var bar = Rx.Observable.create(function (observer) {
    console.log("Hello");
    observer.next(222);
    // observer.error(new Error('bad'));
    // will not be pushed to consumer
    observer.next(223);
    observer.complete("Complete");
});

// Consumer
bar.subscribe(function (x) {
    console.log(x);
}, function errorHandler(err) {
    console.log('Something went wrong: ' + err);
}, function completeHandler() {
    console.log('Done');
});

// Deliver synchronous values with of()

var foo = Rx.Observable.of(42, 100, 200);
foo.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error' + err);
}, function () {
    console.log('done');
});

// Convert array to Observables

var myArray = [10, 20, 30];
var fromArray = Rx.Observable.from(myArray);
fromArray.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// Convert promises to Observables

var fromPromise = Rx.Observable.from(
    fetch('https://null.jsbin.com')
)

fromPromise.subscribe(function (x) {
    console.log('status ' + x.status);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// Convert generator to Observables

// generator (PULL values from generator)
function* baz() {
    console.log("Hello world");
    yield 1;
    yield 2;
    yield 3;
}

var iterator = baz();
var fromGenerator = Rx.Observable.from(iterator);
fromGenerator.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// Convert DOM to Observables

function addEventHandler(handler) {
    document.addEventListener('click', handler);
}
function removeEventHandler(handler) {
    document.removeEventListener('click', handler);
}

var fromEventPattern = Rx.Observable.fromEventPattern(
    addEventHandler, removeEventHandler
);

// fromEventPattern.subscribe(function(x){
//     console.log('next '+x);
// }, function(err){
//     console.log('error '+err);
// }, function(){
//     console.log('done');
// });

// fromEvent lets us specify the target and we dont have to worry about registering and deregistering handlers
var fromEvent = Rx.Observable.fromEvent(document, 'click');
fromEvent.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// Empty observable
var empty = Rx.Observable.empty();
empty.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done empty');
});

// never
var never = Rx.Observable.never();
never.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// throw
var foo = Rx.Observable.throw(new Error('bla'));
foo.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// Set intervals with Rxjs intervals
/*
var intervals = Rx.Observable.interval(1000);
var unsubscribe = intervals.subscribe(function (x) {
    console.log('interval ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});


// Starts interval after 2s
console.info("Timer");
var timer = Rx.Observable.timer(3000, 1000);
timer.subscribe(function (x) {
    console.log('next ' + x);
}, function (err) {
    console.log('error ' + err);
}, function () {
    console.log('done');
});

// timer 1st param can also take javascript date
// var timer = Rx.Observable.timer(data, 1000);

*/

// Create example

function subscribe(observer) {
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.complete();
}

var foo = Rx.Observable.create(subscribe);

foo.subscribe({
    next: function (x) {
        console.log('next value ' + x);
    },
    error: function (err) {
        console.log('error ' + err);
    },
    complete: function () {
        console.log('done');
    }
});

// Unsubscribing to intervals

var foo = new Rx.Observable(function subscribe(observer){
    var id  = setInterval(function(){
        observer.next('hi');
    }, 1000);
    return function unsubscribe() {
        clearInterval(id);
    }
});

var subscription = foo.subscribe({
    next: function(x) { console.log('inteval '+x);},
    error: function(err) { console.log('error' + err);},
    complete: function() { console.log('done');}
});

setTimeout(function(){
    subscription.unsubscribe();
},4500);



