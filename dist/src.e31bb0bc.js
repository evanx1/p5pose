// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/calm.mp3":[function(require,module,exports) {
module.exports = "/calm.5f2c2b06.mp3";
},{}],"assets/sad.mp3":[function(require,module,exports) {
module.exports = "/sad.0f9d181f.mp3";
},{}],"assets/up2u.mp3":[function(require,module,exports) {
module.exports = "/up2u.bebf05b5.mp3";
},{}],"sketch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preload = preload;
exports.setSketch = setSketch;
exports.setup = setup;
exports.draw = draw;
exports.mouseClicked = mouseClicked;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import "p5/lib/addons/p5.dom";
var audioFile = require("./assets/calm.mp3");

console.info(audioFile);

var audio2File = require("./assets/sad.mp3");

console.info(audio2File);

var audio3File = require("./assets/up2u.mp3");

console.info(audio3File);
var scale = 1;
var width = 800 * scale;
var height = 600 * scale; // setSketch sets this 

var p5; // setup initializes this

var video;
var mySound;

function preload() {
  //p5.soundFormats('mp3');
  p5.getAudioContext().resume();
  mySound = p5.loadSound(audioFile);
}

function setSketch(sketch) {
  p5 = sketch;
}

function setup() {
  p5.createCanvas(width, height);
  var audioButton = p5.createButton('calm');
  audioButton.position(5, height + 20); //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');

  audioButton.mouseClicked(function () {
    //console.log
    mySound.play();
    p5.background(400, 200, 0);
    my2Sound.pause();
    my3Sound.pause();
    p5.userStartAudio().then(function () {
      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(400, 200, 0);
    });
  });
  var my2Sound; //p5.soundFormats('mp3');

  p5.getAudioContext().resume();
  my2Sound = p5.loadSound(audio2File);
  var sound2Button = p5.createButton('sad');
  sound2Button.position(60, height + 20); //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');

  sound2Button.mouseClicked(function () {
    //console.log
    my2Sound.play();
    mySound.pause();
    my3Sound.pause();
    p5.userStartAudio().then(function () {
      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(10, 10, 60);
    });
  });
  var my3Sound; //p5.soundFormats('mp3');

  p5.getAudioContext().resume();
  my3Sound = p5.loadSound(audio3File);
  var sound3Button = p5.createButton('Up 2 U');
  sound3Button.position(110, height + 20); //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');

  sound3Button.mouseClicked(function () {
    //console.log
    my3Sound.play();
    mySound.pause();
    my2Sound.pause();
    p5.userStartAudio().then(function () {
      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(100, 10, 600);
    });
  });
  video = p5.select('video') || p5.createCapture(p5.VIDEO);
  video.size(width, height); // Create a new poseNet method with a single detection

  var poseNet = ml5.poseNet(video, function () {
    return p5.select('#status').hide();
  }); // Every time we get a new pose, draw it

  poseNet.on('pose', drawPoses); // Hide the video element, and just show the canvas

  video.hide();
}

function draw() {}

function drawPoses(poses) {
  p5.translate(width, 0); // move to far corner

  p5.scale(-1.0, 1.0);
  p5.image(video, 0, 0, video.width, video.height);
  drawKeypoints(poses);
  drawSkeleton(poses);
} // Draw ellipses over the detected keypoints


function drawKeypoints(poses) {
  poses.forEach(function (pose) {
    return pose.pose.keypoints.forEach(function (keypoint) {
      if (keypoint.score > 0.2) {
        p5.fill(300, 500, 800);
        p5.noStroke();
        p5.square(keypoint.position.x, keypoint.position.y, 20);
      }
    });
  });
}

var value = 0;

function draw() {} //p5.fill(value);
//p5.rect(25, 25, 50, 50);
// function mouseClicked() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }


function mouseClicked() {
  p5.soundFormats('mp3');
  p5.ellipse(mouseX, mouseY, 5, 5);
  console.log(p5.mySound); // prevent default
  //return false; 
} // function mouseClicked(event) {
//   console.log(event);
// }


function drawSkeleton(poses) {
  poses.forEach(function (pose) {
    pose.skeleton.forEach(function (skeleton) {
      var _skeleton = _slicedToArray(skeleton, 2),
          p1 = _skeleton[0],
          p2 = _skeleton[1];

      p5.stroke(200, 0, 0);
      p5.line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
    });
  });
}
},{"./assets/calm.mp3":"assets/calm.mp3","./assets/sad.mp3":"assets/sad.mp3","./assets/up2u.mp3":"assets/up2u.mp3"}],"index.js":[function(require,module,exports) {
"use strict";

var sketch = _interopRequireWildcard(require("./sketch"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import p5 from 'p5';
// Force page refresh on hot reload
if (module.hot) {
  module.hot.accept(function () {
    return window.location.reload();
  });
}

var s2 = function s2(p5s) {
  sketch.setSketch(p5s);

  p5s.preload = function () {
    return sketch.preload(sketch);
  };

  p5s.setup = function () {
    return sketch.setup(sketch);
  };

  p5s.draw = function () {
    return sketch.draw(sketch);
  };
};

new p5(s2, 'container');
},{"./sketch":"sketch.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55912" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map