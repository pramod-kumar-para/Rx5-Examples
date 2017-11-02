var source = Rx.Observable.interval(400).take(9)
    .map( i => ['1', 'foo', 2, '10', 'bar'][i] );

var result = source
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((x, y) => x+y);

result.subscribe(x => console.log(x));



var button = document.querySelector('.button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');

var doubleClickStream = clickStream
  .bufferWhen(() => clickStream.debounceTime(250))
  .map(arr => arr.length)
  .filter(len => len === 2);

doubleClickStream.subscribe(event => {
  label.textContent = 'double click';
});

doubleClickStream
  .delay(1000)
  .subscribe(suggestion => {
    label.textContent = '-';
  });
