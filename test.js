var lib = require('./');
var test = require('tape');

test('lib', function (t) {
  t.plan(2);
  t.equal(typeof lib, 'function');
  t.equal(typeof lib(), 'object');
});

test('pause', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('play', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('release', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('startRecord', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('stop', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});

test('stopRecord', function (t) {
  var media = lib();
  t.plan(1);
  t.equal(typeof media.play, 'function');
});
