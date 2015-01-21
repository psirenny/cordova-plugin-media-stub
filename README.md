cordova plugin media stub
=========================

A stub for cordova's Media object. See [cordova-plugin-media](https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md) for details.

[![Build Status](https://travis-ci.org/psirenny/cordova-plugin-media-stub.png?branch=master)](https://travis-ci.org/psirenny/cordova-plugin-media-stub)

Installation
------------

    npm install cordova-plugin-media-stub --save

Usage
-----

    var Media = require('cordova-plugin-media-stub');

    var media = Media('...');
    media.startRecord();
    media.stopRecord();
