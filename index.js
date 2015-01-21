function Media(src, success) {
  this.success = success || function () {};
}

Media.prototype.pause = function () {
  this.success();
};

Media.prototype.play = function () {
  this.success();
};

Media.prototype.release = function () {
  // do nothing
};

Media.prototype.startRecord = function () {
  // do nothing
};

Media.prototype.stop = function () {
  this.success();
};

Media.prototype.stopRecord = function () {
  this.success();
};

module.exports = function (src, success) {
  return new Media(src, success);
};
