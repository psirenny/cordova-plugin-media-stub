var Media = require('./');
var test = require('tape');

test('lib', function (t) {
  t.plan(2);
  t.equal(typeof Media, 'function');
  t.equal(typeof new Media(), 'object');
});

test('pause', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('play', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('release', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('startRecord', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('stop', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('stub', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(media.stub, true);
});

test('stopRecord', function (t) {
  var media = new Media();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});
