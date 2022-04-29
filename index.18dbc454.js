// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g9TDx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpers = require("../helpers");
var _cardsData = require("./cardsData");
var _cardsDataDefault = parcelHelpers.interopDefault(_cardsData);
const cardsCollection = document.querySelector(".js-cards__collection");
const cardInformation = document.querySelector(".card__information");
const cardLogo = document.querySelector(".card__logo");
const cardNumberInput = document.querySelector(".js-numberInput");
const messageErrorsElement = document.querySelector(".js-form__list--errors");
const cardNumberText = document.querySelector(".card__number");
const errorNumberReuired = [
    {
        message: "Card Number is required!"
    }
];
function init() {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
}
_cardsDataDefault.default.forEach((card)=>{
    const img = new Image();
    img.src = card.imgUrl;
    img.classList.add(card.atr);
    cardsCollection.append(img);
});
function onFormSubmit(event) {
    event.preventDefault();
    cardNumberInput.focus();
    cardNumberInput.value.trim();
    const cardType = getCardType(cardNumberInput.value, _cardsDataDefault.default);
    const errors = findErrors(cardNumberInput.value, cardType);
    render(errors, cardType);
}
function render(errors, cardType) {
    renderMessages(errors, cardType);
}
function renderMessages(errors, cardType) {
    const information = "Unknow";
    const FIRST_CARD = 0;
    const messageErrorsToHTML = errors.map(({ message  })=>`
          <li class="form__list-error">
            ${message}
          </li>
        `
    ).join("");
    messageErrorsElement.innerHTML = messageErrorsToHTML;
    if (!errors.length) {
        cardLogo.src = cardType[FIRST_CARD].imgUrl;
        cardLogo.classList.add(cardType[FIRST_CARD].atr);
        cardNumberText.classList.add("card__number--correct");
        cardInformation.textContent = "Card";
    } else {
        cardLogo.removeAttribute("src");
        cardNumberText.classList.remove("card__number--correct");
        cardInformation.textContent = "Card unknown";
    }
}
function findErrors(inputValue, selectedCard) {
    _helpers.throwWhenNotString(inputValue);
    const validationErrors = [
        _helpers.hasOnlyNumbers(inputValue),
        _helpers.hasCardProperLength(inputValue, selectedCard),
        _helpers.isLuhnOK(inputValue),
        selectedCard, 
    ];
    return inputValue ? validationErrors.filter(({ message  })=>message
    ) : errorNumberReuired;
}
function getCardType(inputValue, cards) {
    const startingDigitsError = {
        message: "The beginning of the bank card number is incorrect!"
    };
    const filteredCard = cards && cards.filter(({ startingNumbers  })=>{
        const cutLength = !!startingNumbers.find((num)=>num >>> 0 === num % 10
        ) ? 1 : 2;
        const cutNumber = _helpers.getSingleOrDoubleDigits(inputValue, cutLength);
        return startingNumbers.includes(cutNumber);
    });
    return filteredCard.length ? filteredCard : startingDigitsError;
}
cardNumberInput.addEventListener("input", ({ target: value  })=>{
    const defaultFormat = "0000 0000 0000 0000";
    cardNumberText.textContent = value !== "" ? _helpers.displayFormatNumbersOnChange(cardNumberInput.value) : defaultFormat;
    checkAtributesOnInputChange();
});
function checkAtributesOnInputChange() {
    if (cardLogo.hasAttribute("src")) cardLogo.removeAttribute("src");
    if (cardNumberText.classList.contains("card__number--correct")) cardNumberText.classList.remove("card__number--correct");
    _cardsDataDefault.default.forEach(({ atr  })=>{
        if (cardLogo.classList.contains(atr)) cardLogo.classList.remove(atr);
    });
}
init(); // 5193080150954111

},{"../helpers":"kEqbI","./cardsData":"dfmH1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kEqbI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isLuhnOK", ()=>_isLuhnOKJsDefault.default
);
parcelHelpers.export(exports, "isStartingNumberCorrect", ()=>_isStartingNumberCorrectDefault.default
);
parcelHelpers.export(exports, "throwWhenNotString", ()=>_throwWhenNotStringDefault.default
);
parcelHelpers.export(exports, "hasOnlyNumbers", ()=>_hasOnlyNumbersDefault.default
);
parcelHelpers.export(exports, "hasCardProperLength", ()=>_hasCardProperLengthDefault.default
);
parcelHelpers.export(exports, "getSingleOrDoubleDigits", ()=>_getSingleOrDoubleDigitsDefault.default
);
parcelHelpers.export(exports, "formatCardNumber", ()=>_formatCardNumberDefault.default
);
parcelHelpers.export(exports, "displayFormatNumbersOnChange", ()=>_displayFormatNumberOnChangeDefault.default
);
var _isLuhnOKJs = require("./isLuhnOK.js");
var _isLuhnOKJsDefault = parcelHelpers.interopDefault(_isLuhnOKJs);
var _isStartingNumberCorrect = require("./isStartingNumberCorrect");
var _isStartingNumberCorrectDefault = parcelHelpers.interopDefault(_isStartingNumberCorrect);
var _throwWhenNotString = require("./throwWhenNotString");
var _throwWhenNotStringDefault = parcelHelpers.interopDefault(_throwWhenNotString);
var _hasOnlyNumbers = require("./hasOnlyNumbers");
var _hasOnlyNumbersDefault = parcelHelpers.interopDefault(_hasOnlyNumbers);
var _hasCardProperLength = require("./hasCardProperLength");
var _hasCardProperLengthDefault = parcelHelpers.interopDefault(_hasCardProperLength);
var _getSingleOrDoubleDigits = require("./getSingleOrDoubleDigits");
var _getSingleOrDoubleDigitsDefault = parcelHelpers.interopDefault(_getSingleOrDoubleDigits);
var _formatCardNumber = require("./formatCardNumber");
var _formatCardNumberDefault = parcelHelpers.interopDefault(_formatCardNumber);
var _displayFormatNumberOnChange = require("./displayFormatNumberOnChange");
var _displayFormatNumberOnChangeDefault = parcelHelpers.interopDefault(_displayFormatNumberOnChange);

},{"./isLuhnOK.js":"9Frth","./isStartingNumberCorrect":"h9xqp","./throwWhenNotString":"lxXBM","./hasOnlyNumbers":"5uXWv","./hasCardProperLength":"92Gy7","./getSingleOrDoubleDigits":"8bvs6","./formatCardNumber":"ewkET","./displayFormatNumberOnChange":"2ciD1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Frth":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const errorMessage = {
    message: "Luhn's algorithm does not point to the truth!"
};
function isLuhnOK(inputValue) {
    const digitsArrayCollections = [
        ...inputValue
    ].map((num)=>Number(num)
    );
    return digitsArrayCollections.reverse().map((num, i)=>i % 2 === 1 ? num * 2 : num
    ).reduce((total, num)=>total + (num > 9 ? sumDigits(num) : num)
    , 0) % 10 === 0 || errorMessage;
}
exports.default = isLuhnOK;
function sumDigits(num1) {
    return String(num1).split("").map((num)=>Number(num)
    ).reduce((total, num)=>total + num
    , 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h9xqp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isStartingNumberCorrect(card, data) {
    const sliceCondition = card.length ? 1 : 2;
    const slicedNumber = Number(data.slice(0, sliceCondition).join(""));
    return card.includes(slicedNumber);
}
exports.default = isStartingNumberCorrect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throwWhenNotString(input) {
    if (typeof input !== "string") throw new Error("Given parameter is not a string!");
}
exports.default = throwWhenNotString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uXWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const errorMessage = {
    message: "Password has to contain only numbers!"
};
function hasOnlyNumbers(inputValue) {
    return /^\d+$/.test(inputValue) || errorMessage;
}
exports.default = hasOnlyNumbers;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92Gy7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const errorMessage = {
    message: "Please write a proper length of the numbers!"
};
function hasCardProperLength(inputValue, card) {
    if (!card.length) return errorMessage;
    return card.find(({ length  })=>length.includes(inputValue.length)
    ) || errorMessage;
}
exports.default = hasCardProperLength;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bvs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getSingleOrDoubleDigits(card, lengthToCut) {
    return Number([
        ...card
    ].slice(0, lengthToCut).join(""));
}
exports.default = getSingleOrDoubleDigits;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewkET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function formatCardNumber(num) {
    const defaultNum = "0000000000000000";
    const copyNum = num.replace(/[^\d]/g, "");
    switch(copyNum.length){
        case 13:
            return copyNum.replace(/(\d{2})(\d{3})(\d{4})(\d{3})/, "$1 $2 $3 $4");
        case 15:
            return copyNum.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
        case 16:
            return copyNum.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
        default:
            return defaultNum.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    }
}
exports.default = formatCardNumber;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ciD1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function displayFormatNumbersOnChange(number) {
    const formatZeros = "0000000000000000";
    let newFormat = "";
    for(let i = 0; i < formatZeros.length; i++){
        const el = formatZeros[i];
        newFormat += number[i] || el;
    }
    const slicedFormatZeros = newFormat.slice(0, -(16 - number.length));
    switch(number.length){
        case 1:
            return slicedFormatZeros.replace(/(\d{1})/, "$1");
        case 2:
            return slicedFormatZeros.replace(/(\d{2})/, "$1");
        case 3:
            return slicedFormatZeros.replace(/(\d{3})/, "$1");
        case 4:
            return slicedFormatZeros.replace(/(\d{4})/, "$1");
        case 5:
            return slicedFormatZeros.replace(/(\d{4})(\d{1})/, "$1 $2");
        case 6:
            return slicedFormatZeros.replace(/(\d{4})(\d{2})/, "$1 $2");
        case 7:
            return slicedFormatZeros.replace(/(\d{4})(\d{3})/, "$1 $2");
        case 8:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})/, "$1 $2");
        case 9:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{1})/, "$1 $2 $3");
        case 10:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{2})/, "$1 $2 $3");
        case 11:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{3})/, "$1 $2 $3");
        case 12:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
        case 13:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, "$1 $2 $3 $4");
        case 14:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{4})(\d{2})/, "$1 $2 $3 $4");
        case 15:
            return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{4})(\d{3})/, "$1 $2 $3 $4");
        default:
            return newFormat.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    }
}
exports.default = displayFormatNumbersOnChange;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfmH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardsData", ()=>cardsData
);
const cardsData = [
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
        startingNumbers: [
            51,
            52,
            53,
            54,
            55
        ],
        length: [
            16
        ],
        atr: "card__logo--mastercard"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
        startingNumbers: [
            4
        ],
        length: [
            13,
            16
        ],
        atr: "card__logo--visa"
    },
    {
        imgUrl: "https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2020-11/americanexpress.jpg?itok=i_4MMKM0",
        startingNumbers: [
            34,
            37
        ],
        length: [
            15
        ],
        atr: "card__logo--americanExpress"
    }, 
];
exports.default = cardsData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g9TDx","1SICI"], "1SICI", "parcelRequirec6b2")

//# sourceMappingURL=index.18dbc454.js.map
