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
})({"47Zjz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8ZNvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _checkCircleSvg = require("./assets/icons/check-circle.svg");
var _checkCircleSvgDefault = parcelHelpers.interopDefault(_checkCircleSvg);
var _hourglassSvg = require("./assets/icons/hourglass.svg");
var _hourglassSvgDefault = parcelHelpers.interopDefault(_hourglassSvg);
var _pencilSquareSvg = require("./assets/icons/pencil-square.svg");
var _pencilSquareSvgDefault = parcelHelpers.interopDefault(_pencilSquareSvg);
var _trashSvg = require("./assets/icons/trash.svg");
var _trashSvgDefault = parcelHelpers.interopDefault(_trashSvg);
"use strict";
// Get DOM General elements
const addBookForm = document.querySelector(".add-book");
const updateBookForm = document.querySelector(".update-book");
const cancelUpdateBtn = document.querySelector(".cancel-update");
const formAlert = document.querySelector(".alert");
const bookList = document.querySelector(".book-list");
const confirmDelBtn = document.getElementsByClassName("confirmDelBtn")[0];
const booksLeftEl = document.querySelector(".books-left");
let booksCount = document.getElementsByClassName("book-row");
// Book constructor
class Book {
    constructor(title, author, genres, count){
        this.title = title;
        this.author = author;
        this.genres = genres;
        this.count = count;
    }
}
// BookUI constructor
class BookUI {
    // methods
    // render book to DOM
    addBookToList(book) {
        // create tr
        const row = document.createElement("tr");
        row.classList = "book-row";
        row.id = `book-row-${book.count}`;
        // insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genres}</td>
            <td class="countdown-${book.count}"></td>
            <td>
                <a class="d-none text-decoration-none text-dark fw-bold" href="#" title="update">
                    <img src=${0, _pencilSquareSvgDefault.default} class="updateBook" alt="update icon">
                </a>
                &nbsp;
                <a class="d-none text-decoration-none text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete" href="#" title="delete">
                    <img src=${0, _trashSvgDefault.default} class="deleteBook" alt="Delete icon">
                </a>
            </td>
            `;
        bookList.appendChild(row);
        // timer
        this.bookTimer(5, 1000);
        // update books count
        this.UpdateBookCount();
        // hide form
        addBookForm.classList.add("d-none");
        return this;
    }
    // show messages UI
    showMsg(status, msg = "") {
        if (status === "error") {
            formAlert.textContent = msg;
            formAlert.classList.add("alert-danger");
            formAlert.classList.remove("d-none");
        }
        if (status === "clear") {
            formAlert.textContent = msg;
            formAlert.classList.remove("alert-danger", "alert-success");
            formAlert.classList.add("d-none");
        }
        if (status === "success") {
            formAlert.textContent = msg;
            formAlert.classList.add("alert-success");
            formAlert.classList.remove("d-none");
        }
        return this;
    }
    // remove book from UI
    removeBook(target) {
        if (target.classList.contains("deleteBook")) // listen to confirm delete
        confirmDelBtn.addEventListener("click", ()=>{
            target.closest("tr").remove();
            // remove from LS
            Store.removeBook(target.closest("tr").id.split("-")[2]);
            // show confirmation msg
            this.showMsg("success", "Book successfully deleted");
            setTimeout(()=>this.showMsg("clear"), 2000);
            this.UpdateBookCount();
        });
        return this;
    }
    // book count update
    UpdateBookCount() {
        booksCount = document.getElementsByClassName("book-row");
        const booksLeft = 36 - booksCount.length;
        booksLeftEl.textContent = `${booksLeft} ${booksLeft !== 1 ? "books" : "book"} left`;
        return this;
    }
    // get deatils
    getDetails(bookRow, id) {
        // get row text content
        const title = bookRow.children[0].textContent;
        const author = bookRow.children[1].textContent;
        const genres = bookRow.children[2].textContent;
        // put them in the update form
        document.getElementById("titleUp").value = title;
        document.getElementById("authorUp").value = author;
        document.getElementById("genresUp").value = genres;
        document.getElementById("book-hidden-id").value = id;
        return this;
    }
    bookTimer(daysLeft, delay) {
        booksCount = document.getElementsByClassName("book-row");
        const daysLeftEl = booksCount[booksCount.length - 1].children[3];
        // let daysLeft = 5;
        // let delay = 86400000; // 1 day in milliseconds
        // let delay = 1000;
        countDown();
        let timer = setInterval(countDown, delay);
        function countDown() {
            if (daysLeft > 0) {
                daysLeftEl.textContent = `${daysLeft} ${daysLeft !== 1 ? "days" : "day"} left`;
                --daysLeft;
            } else {
                clearInterval(timer);
                timer = null;
                daysLeftEl.innerHTML = `
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="Done">
                        <img src=${0, _checkCircleSvgDefault.default} class="bookDone" alt="done icon">
                    </a>
                    &nbsp;
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="More time">
                    <img src=${0, _hourglassSvgDefault.default} class="wait" alt="wait icon">
                    </a>`;
            }
        }
        return this;
    }
}
// LOCAL STORAGE
class Store {
    static getBooks() {
        let books;
        if (!localStorage.getItem("books")) books = [];
        else books = JSON.parse(localStorage.getItem("books"));
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book)=>{
            // create tr
            const row = document.createElement("tr");
            row.classList = "book-row";
            row.id = `book-row-${book.count}`;
            // insert cols
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genres}</td>
                <td class="countdown-${book.count}">Done</td>
                <td>
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="update">
                        <img src=${0, _pencilSquareSvgDefault.default} class="updateBook" alt="update icon">
                    </a>
                    &nbsp;
                    <a class="text-decoration-none text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete" href="#" title="delete">
                        <img src=${0, _trashSvgDefault.default} class="deleteBook" alt="Delete icon">
                    </a>
                </td>
                `;
            bookList.appendChild(row);
        });
    }
    static addBook(newBook) {
        const books = Store.getBooks();
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static removeBook(count) {
        const books = Store.getBooks();
        books.forEach((book, index)=>{
            if (book.count === +count) books.splice(index, 1);
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
    static updatebook(title, author, genres, count) {
        const books = Store.getBooks();
        books.forEach((book)=>{
            if (book.count === +count) {
                book.title = title;
                book.author = author;
                book.genres = genres;
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
    // initial book count
    static initBookCount() {
        const booksLeft = 36 - booksCount.length;
        if (booksLeft < 36) booksLeftEl.textContent = `${booksLeft} ${booksLeft !== 1 ? "books" : "book"} left`;
        if (booksLeft <= 0) {
            booksLeftEl.textContent;
            addBookForm.classList.add("d-none");
        }
    }
}
// EVENT LISTENERS
// DOM load event
document.addEventListener("DOMContentLoaded", ()=>{
    Store.initBookCount();
    Store.displayBooks();
});
// Add book event listener
addBookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // form values
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genres = document.getElementById("genres").value.trim();
    // add ui instance
    const UI = new BookUI();
    // check if empty values
    if (title === "" || author === "" || genres === "") {
        UI.showMsg("error", "Please fill in all the fields");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    // clear msg errors
    UI.showMsg("clear");
    // count
    let count;
    booksCount = document.getElementsByClassName("book-row");
    // check if book already exists
    const bookRows = Array.from(booksCount);
    const result = bookRows.find((row)=>row.children[0].textContent.toLocaleLowerCase() === title.toLocaleLowerCase() && row.children[1].textContent.toLocaleLowerCase() === author.toLocaleLowerCase());
    if (result) {
        UI.showMsg("error", "You already added this book");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    if (booksCount.length === 0) count = 1;
    else {
        const lastBook = booksCount[booksCount.length - 1];
        if (lastBook.children[3].textContent !== "Done") {
            UI.showMsg("error", "You need to finish current book");
            setTimeout(()=>UI.showMsg("clear"), 3000);
            return;
        }
        const lastId = +lastBook.id.split("-")[2];
        count = lastId + 1;
    }
    // Add book instance
    const book = new Book(title, author, genres, count);
    // add book to list using UI class
    UI.addBookToList(book);
    // show succes msg
    UI.showMsg("success", "Book added successfully");
    setTimeout(()=>UI.showMsg("clear"), 2000);
    // clear fields
    addBookForm.reset();
});
// Update book event listener
updateBookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = document.getElementById("titleUp").value.trim();
    const author = document.getElementById("authorUp").value.trim();
    const genres = document.getElementById("genresUp").value.trim();
    const rowId = document.getElementById("book-hidden-id").value.trim();
    // add ui instance
    const UI = new BookUI();
    // check if empty values
    if (title === "" || author === "" || genres === "") {
        UI.showMsg("error", "Please fill in all the fields");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    // clear msg errors
    UI.showMsg("clear");
    // find the row
    booksCount = document.getElementsByClassName("book-row");
    const bookRows = Array.from(booksCount);
    const row = bookRows.find((row)=>row.id === rowId);
    // update it
    row.children[0].textContent = title;
    row.children[1].textContent = author;
    row.children[2].textContent = genres;
    // update in LS
    Store.updatebook(title, author, genres, row.id.split("-")[2]);
    // show update msg 
    UI.showMsg("success", "Updated successfully");
    setTimeout(()=>UI.showMsg("clear"), 2000);
    // reset form
    updateBookForm.reset();
    // hide it
    updateBookForm.classList.add("d-none");
    addBookForm.classList.remove("d-none");
});
// cancel update event listener
cancelUpdateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    updateBookForm.reset();
    updateBookForm.classList.add("d-none");
    addBookForm.classList.remove("d-none");
});
// event listener for DELETE Update BOOK
bookList.addEventListener("click", (e)=>{
    // delete book
    if (e.target.classList.contains("deleteBook")) {
        // add ui instance
        const UI = new BookUI();
        // call delete
        UI.removeBook(e.target);
    }
    // update book
    if (e.target.classList.contains("updateBook")) {
        // show update form
        addBookForm.classList.add("d-none");
        updateBookForm.classList.remove("d-none");
        // get details
        const bookRow = e.target.closest(".book-row");
        const id = bookRow.id;
        const UI = new BookUI();
        UI.getDetails(bookRow, id);
    }
    if (e.target.classList.contains("bookDone")) {
        const bookRow = e.target.closest(".book-row");
        bookRow.children[3].innerHTML = "Done";
        // show update and delete buttons
        const links = Array.from(bookRow.children[4].children);
        links.forEach((link)=>link.classList.remove("d-none"));
        const title = bookRow.children[0].textContent;
        const author = bookRow.children[1].textContent;
        const genres = bookRow.children[2].textContent;
        const count = +bookRow.id.split("-")[2];
        const book = new Book(title, author, genres, count);
        // Add to LS
        Store.addBook(book);
        // show back form
        addBookForm.classList.remove("d-none");
    }
    if (e.target.classList.contains("wait")) {
        // add ui instance
        const UI = new BookUI();
        UI.bookTimer(2, 1000);
    }
});

},{"./assets/icons/check-circle.svg":"irkwM","./assets/icons/hourglass.svg":"gGpc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./assets/icons/pencil-square.svg":"6AqTG","./assets/icons/trash.svg":"cirGC"}],"irkwM":[function(require,module,exports) {
module.exports = require("a614093053aed10d").getBundleURL("lORN7") + "check-circle.1f806ee3.svg" + "?" + Date.now();

},{"a614093053aed10d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gGpc1":[function(require,module,exports) {
module.exports = require("e6cc9de1b819a883").getBundleURL("lORN7") + "hourglass.8c75281c.svg" + "?" + Date.now();

},{"e6cc9de1b819a883":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"6AqTG":[function(require,module,exports) {
module.exports = require("f75914748b3399da").getBundleURL("lORN7") + "pencil-square.c582b772.svg" + "?" + Date.now();

},{"f75914748b3399da":"lgJ39"}],"cirGC":[function(require,module,exports) {
module.exports = require("9cf3963665e12500").getBundleURL("lORN7") + "trash.c9bfcf2d.svg" + "?" + Date.now();

},{"9cf3963665e12500":"lgJ39"}]},["47Zjz","8ZNvh"], "8ZNvh", "parcelRequire2236")

//# sourceMappingURL=index.f5c48570.js.map
