// LICENSE : MIT
"use strict";
var VideoShortcutController = require("video-shortcut-controller");
var video = document.getElementById("video");
var controller = new VideoShortcutController(document.body, video);
controller.start();