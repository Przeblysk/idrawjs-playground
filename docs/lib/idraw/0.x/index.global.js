this.iDraw = this.iDraw || {};
this.iDraw.IDraw = (function () {
    'use strict';

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$2 = function() {
        __assign$2 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function compose$1(middleware) {
        return function (context, next) {
            return dispatch(0);
            function dispatch(i) {
                var fn = middleware[i];
                if (i === middleware.length && next) {
                    fn = next;
                }
                if (!fn)
                    return Promise.resolve();
                try {
                    return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        };
    }
    function delay$1(time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    }
    function throttle$1(fn, timeout) {
        var timer = -1;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timer > 0) {
                return;
            }
            timer = setTimeout(function () {
                fn.apply(void 0, args);
                timer = -1;
            }, timeout);
        };
    }
    function downloadImageFromCanvas$1(canvas, opts) {
        var filename = opts.filename, _a = opts.type, type = _a === void 0 ? 'image/jpeg' : _a;
        var stream = canvas.toDataURL(type);
        var downloadLink = document.createElement('a');
        downloadLink.href = stream;
        downloadLink.download = filename;
        var downloadClickEvent = document.createEvent('MouseEvents');
        downloadClickEvent.initEvent('click', true, false);
        downloadLink.dispatchEvent(downloadClickEvent);
    }
    function toColorHexNum$1(color) {
        return parseInt(color.replace(/^\#/, '0x'));
    }
    function toColorHexStr$1(color) {
        return '#' + color.toString(16);
    }
    function isColorStr$3(color) {
        return typeof color === 'string' && /^\#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color);
    }
    function createUUID$3() {
        function str4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return "" + str4() + str4() + "-" + str4() + "-" + str4() + "-" + str4() + "-" + str4() + str4() + str4();
    }
    function deepClone$4(target) {
        function _clone(t) {
            var type = is$2(t);
            if (['Null', 'Number', 'String', 'Boolean', 'Undefined'].indexOf(type) >= 0) {
                return t;
            }
            else if (type === 'Array') {
                var arr_1 = [];
                t.forEach(function (item) {
                    arr_1.push(_clone(item));
                });
                return arr_1;
            }
            else if (type === 'Object') {
                var obj_1 = {};
                var keys = Object.keys(t);
                keys.forEach(function (key) {
                    obj_1[key] = _clone(t[key]);
                });
                return obj_1;
            }
        }
        return _clone(target);
    }
    function is$2(data) {
        return Object.prototype.toString.call(data).replace(/[\]|\[]{1,1}/ig, '').split(' ')[1];
    }
    function parsePrototype$1(data) {
        var typeStr = Object.prototype.toString.call(data) || '';
        var result = typeStr.replace(/(\[object|\])/ig, '').trim();
        return result;
    }
    var istype$2 = {
        type: function (data, lowerCase) {
            var result = parsePrototype$1(data);
            return lowerCase === true ? result.toLocaleLowerCase() : result;
        },
        array: function (data) {
            return parsePrototype$1(data) === 'Array';
        },
        json: function (data) {
            return parsePrototype$1(data) === 'Object';
        },
        function: function (data) {
            return parsePrototype$1(data) === 'Function';
        },
        asyncFunction: function (data) {
            return parsePrototype$1(data) === 'AsyncFunction';
        },
        string: function (data) {
            return parsePrototype$1(data) === 'String';
        },
        number: function (data) {
            return parsePrototype$1(data) === 'Number';
        },
        undefined: function (data) {
            return parsePrototype$1(data) === 'Undefined';
        },
        null: function (data) {
            return parsePrototype$1(data) === 'Null';
        },
        promise: function (data) {
            return parsePrototype$1(data) === 'Promise';
        },
        nodeList: function (data) {
            return parsePrototype$1(data) === 'NodeList';
        },
        imageData: function (data) {
            return parsePrototype$1(data) === 'ImageData';
        }
    };
    var Image$1 = window.Image, Blob$1 = window.Blob, FileReader$1 = window.FileReader;
    function loadImage$2(src) {
        return new Promise(function (resolve, reject) {
            var img = new Image$1;
            img.onload = function () {
                resolve(img);
            };
            img.onabort = reject;
            img.onerror = reject;
            img.src = src;
        });
    }
    function loadSVG$2(svg) {
        return new Promise(function (resolve, reject) {
            var _svg = svg;
            var image = new Image$1();
            var blob = new Blob$1([_svg], { type: 'image/svg+xml;charset=utf-8' });
            var reader = new FileReader$1();
            reader.readAsDataURL(blob);
            reader.onload = function (event) {
                var _a;
                var base64 = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
                image.onload = function () {
                    resolve(image);
                };
                image.src = base64;
            };
            reader.onerror = function (err) {
                reject(err);
            };
        });
    }
    function loadHTML$2(html, opts) {
        var width = opts.width, height = opts.height;
        return new Promise(function (resolve, reject) {
            var _svg = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + (width || '') + "\" height = \"" + (height || '') + "\">\n      <foreignObject width=\"100%\" height=\"100%\">\n        <div xmlns = \"http://www.w3.org/1999/xhtml\">\n          " + html + "\n        </div>\n      </foreignObject>\n    </svg>\n    ";
            var image = new Image$1();
            var blob = new Blob$1([_svg], { type: 'image/svg+xml;charset=utf-8' });
            var reader = new FileReader$1();
            reader.readAsDataURL(blob);
            reader.onload = function (event) {
                var _a;
                var base64 = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
                image.onload = function () {
                    resolve(image);
                };
                image.src = base64;
            };
            reader.onerror = function (err) {
                reject(err);
            };
        });
    }
    var index$1 = {
        time: {
            delay: delay$1,
            compose: compose$1,
            throttle: throttle$1,
        },
        loader: {
            loadImage: loadImage$2,
            loadSVG: loadSVG$2,
            loadHTML: loadHTML$2,
        },
        file: {
            downloadImageFromCanvas: downloadImageFromCanvas$1,
        },
        color: {
            toColorHexStr: toColorHexStr$1,
            toColorHexNum: toColorHexNum$1,
            isColorStr: isColorStr$3,
        },
        uuid: {
            createUUID: createUUID$3
        },
        istype: istype$2,
        data: {
            deepClone: deepClone$4,
        }
    };
    var BoardEvent = (function () {
        function BoardEvent() {
            this._listeners = new Map();
        }
        BoardEvent.prototype.on = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                callbacks === null || callbacks === void 0 ? void 0 : callbacks.push(callback);
                this._listeners.set(eventKey, callbacks || []);
            }
            else {
                this._listeners.set(eventKey, [callback]);
            }
        };
        BoardEvent.prototype.off = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                if (Array.isArray(callbacks)) {
                    for (var i = 0; i < (callbacks === null || callbacks === void 0 ? void 0 : callbacks.length); i++) {
                        if (callbacks[i] === callback) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                }
                this._listeners.set(eventKey, callbacks || []);
            }
        };
        BoardEvent.prototype.trigger = function (eventKey, arg) {
            var callbacks = this._listeners.get(eventKey);
            if (Array.isArray(callbacks)) {
                callbacks.forEach(function (cb) {
                    cb(arg);
                });
                return true;
            }
            else {
                return false;
            }
        };
        BoardEvent.prototype.has = function (name) {
            if (this._listeners.has(name)) {
                var list = this._listeners.get(name);
                if (Array.isArray(list) && list.length > 0) {
                    return true;
                }
            }
            return false;
        };
        return BoardEvent;
    }());
    var Watcher = (function () {
        function Watcher(canvas) {
            this._isMoving = false;
            this._canvas = canvas;
            this._isMoving = false;
            this._initEvent();
            this._event = new BoardEvent;
        }
        Watcher.prototype.on = function (name, callback) {
            this._event.on(name, callback);
        };
        Watcher.prototype.off = function (name, callback) {
            this._event.off(name, callback);
        };
        Watcher.prototype._initEvent = function () {
            var canvas = this._canvas;
            canvas.addEventListener('mousemove', this._listenHover.bind(this), true);
            canvas.addEventListener('mousedown', this._listenMoveStart.bind(this), true);
            canvas.addEventListener('mousemove', this._listenMove.bind(this), true);
            canvas.addEventListener('mouseup', this._listenMoveEnd.bind(this), true);
            canvas.addEventListener('mouseleave', this._listenMoveEnd.bind(this), true);
            canvas.addEventListener('wheel', this._listenWheel.bind(this), true);
            canvas.addEventListener('touchstart', this._listenMoveStart.bind(this), true);
            canvas.addEventListener('touchmove', this._listenMove.bind(this), true);
            canvas.addEventListener('touchend', this._listenMoveEnd.bind(this), true);
        };
        Watcher.prototype._listenHover = function (e) {
            e.preventDefault();
            var p = this._getPosition(e);
            if (this._isVaildPoint(p)) {
                if (this._event.has('hover')) {
                    this._event.trigger('hover', p);
                }
            }
            this._isMoving = true;
        };
        Watcher.prototype._listenMoveStart = function (e) {
            e.preventDefault();
            var p = this._getPosition(e);
            if (this._isVaildPoint(p)) {
                if (this._event.has('point')) {
                    this._event.trigger('point', p);
                }
                if (this._event.has('moveStart')) {
                    this._event.trigger('moveStart', p);
                }
            }
            this._isMoving = true;
        };
        Watcher.prototype._listenMove = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (this._event.has('move') && this._isMoving === true) {
                var p = this._getPosition(e);
                if (this._isVaildPoint(p)) {
                    this._event.trigger('move', p);
                }
            }
        };
        Watcher.prototype._listenMoveEnd = function (e) {
            e.preventDefault();
            if (this._event.has('moveEnd')) {
                var p = this._getPosition(e);
                if (this._isVaildPoint(p)) {
                    this._event.trigger('moveEnd', p);
                }
            }
            this._isMoving = false;
        };
        Watcher.prototype._listenWheel = function (e) {
            e.preventDefault();
            if (this._event.has('wheelX') && (e.deltaX > 0 || e.deltaX < 0)) {
                this._event.trigger('wheelX', e.deltaX);
            }
            if (this._event.has('wheelY') && (e.deltaY > 0 || e.deltaY < 0)) {
                this._event.trigger('wheelY', e.deltaY);
            }
        };
        Watcher.prototype._getPosition = function (e) {
            var canvas = this._canvas;
            var x = 0;
            var y = 0;
            if (e && e.touches && e.touches.length > 0) {
                var touch = e.touches[0];
                if (touch) {
                    x = touch.clientX;
                    y = touch.clientY;
                }
            }
            else {
                x = e.clientX;
                y = e.clientY;
            }
            var p = {
                x: x - canvas.getBoundingClientRect().left,
                y: y - canvas.getBoundingClientRect().top,
                t: Date.now(),
            };
            return p;
        };
        Watcher.prototype._isVaildPoint = function (p) {
            return (p.x > 0 && p.y > 0);
        };
        return Watcher;
    }());
    function setStyle(dom, style) {
        var originStyle = getStyle(dom);
        var _style = __assign(__assign({}, originStyle), style);
        var keys = Object.keys(_style);
        var styleStr = '';
        keys.forEach(function (key) {
            styleStr += key + ":" + (_style[key] || '') + ";";
        });
        dom.setAttribute('style', styleStr);
    }
    function getStyle(dom) {
        var styleObj = {};
        var style = dom.getAttribute('style') || '';
        var styleList = style.split(';');
        styleList.forEach(function (item) {
            var dataList = item.split(':');
            if (dataList[0] && typeof dataList[0] === 'string') {
                styleObj[dataList[0]] = dataList[1] || '';
            }
        });
        return styleObj;
    }
    var Context = (function () {
        function Context(ctx, opts) {
            this._opts = opts;
            this._ctx = ctx;
            this._transform = {
                scale: 1,
                scrollX: 0,
                scrollY: 0,
            };
        }
        Context.prototype.resetSize = function (opts) {
            this._opts = __assign(__assign({}, this._opts), opts);
        };
        Context.prototype.calcDeviceNum = function (num) {
            return num * this._opts.devicePixelRatio;
        };
        Context.prototype.calcScreenNum = function (num) {
            return num / this._opts.devicePixelRatio;
        };
        Context.prototype.getSize = function () {
            return {
                width: this._opts.width,
                height: this._opts.height,
                contextWidth: this._opts.contextWidth,
                contextHeight: this._opts.contextHeight,
                devicePixelRatio: this._opts.devicePixelRatio,
            };
        };
        Context.prototype.setTransform = function (config) {
            this._transform = __assign(__assign({}, this._transform), config);
        };
        Context.prototype.getTransform = function () {
            return {
                scale: this._transform.scale,
                scrollX: this._transform.scrollX,
                scrollY: this._transform.scrollY,
            };
        };
        Context.prototype.setFillStyle = function (color) {
            this._ctx.fillStyle = color;
        };
        Context.prototype.fill = function (fillRule) {
            return this._ctx.fill(fillRule || 'nonzero');
        };
        Context.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
            return this._ctx.arc(this._doSize(x), this._doSize(y), this._doSize(radius), startAngle, endAngle, anticlockwise);
        };
        Context.prototype.rect = function (x, y, w, h) {
            return this._ctx.rect(this._doSize(x), this._doSize(y), this._doSize(w), this._doSize(h));
        };
        Context.prototype.fillRect = function (x, y, w, h) {
            return this._ctx.fillRect(this._doSize(x), this._doSize(y), this._doSize(w), this._doSize(h));
        };
        Context.prototype.clearRect = function (x, y, w, h) {
            return this._ctx.clearRect(this._doSize(x), this._doSize(y), this._doSize(w), this._doSize(h));
        };
        Context.prototype.beginPath = function () {
            return this._ctx.beginPath();
        };
        Context.prototype.closePath = function () {
            return this._ctx.closePath();
        };
        Context.prototype.lineTo = function (x, y) {
            return this._ctx.lineTo(this._doSize(x), this._doSize(y));
        };
        Context.prototype.moveTo = function (x, y) {
            return this._ctx.moveTo(this._doSize(x), this._doSize(y));
        };
        Context.prototype.arcTo = function (x1, y1, x2, y2, radius) {
            return this._ctx.arcTo(this._doSize(x1), this._doSize(y1), this._doSize(x2), this._doSize(y2), this._doSize(radius));
        };
        Context.prototype.setLineWidth = function (w) {
            return this._ctx.lineWidth = this._doSize(w);
        };
        Context.prototype.setLineDash = function (nums) {
            var _this = this;
            return this._ctx.setLineDash(nums.map(function (n) { return _this._doSize(n); }));
        };
        Context.prototype.isPointInPath = function (x, y) {
            return this._ctx.isPointInPath(this._doX(x), this._doY(y));
        };
        Context.prototype.isPointInPathWithoutScroll = function (x, y) {
            return this._ctx.isPointInPath(this._doSize(x), this._doSize(y));
        };
        Context.prototype.setStrokeStyle = function (color) {
            this._ctx.strokeStyle = color;
        };
        Context.prototype.stroke = function () {
            return this._ctx.stroke();
        };
        Context.prototype.translate = function (x, y) {
            return this._ctx.translate(this._doSize(x), this._doSize(y));
        };
        Context.prototype.rotate = function (angle) {
            return this._ctx.rotate(angle);
        };
        Context.prototype.drawImage = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var image = args[0];
            var sx = args[1];
            var sy = args[2];
            var sw = args[3];
            var sh = args[4];
            var dx = args[args.length - 4];
            var dy = args[args.length - 3];
            var dw = args[args.length - 2];
            var dh = args[args.length - 1];
            if (args.length === 9) {
                return this._ctx.drawImage(image, this._doSize(sx), this._doSize(sy), this._doSize(sw), this._doSize(sh), this._doSize(dx), this._doSize(dy), this._doSize(dw), this._doSize(dh));
            }
            else {
                return this._ctx.drawImage(image, this._doSize(dx), this._doSize(dy), this._doSize(dw), this._doSize(dh));
            }
        };
        Context.prototype.createPattern = function (image, repetition) {
            return this._ctx.createPattern(image, repetition);
        };
        Context.prototype.measureText = function (text) {
            return this._ctx.measureText(text);
        };
        Context.prototype.setTextAlign = function (align) {
            this._ctx.textAlign = align;
        };
        Context.prototype.fillText = function (text, x, y, maxWidth) {
            if (maxWidth !== undefined) {
                return this._ctx.fillText(text, this._doSize(x), this._doSize(y), this._doSize(maxWidth));
            }
            else {
                return this._ctx.fillText(text, this._doSize(x), this._doSize(y));
            }
        };
        Context.prototype.setFont = function (opts) {
            var strList = [];
            if (opts.fontWeight === 'bold') {
                strList.push("" + opts.fontWeight);
            }
            strList.push(this._doSize(opts.fontSize || 12) + "px");
            strList.push("" + (opts.fontFamily || 'sans-serif'));
            this._ctx.font = "" + strList.join(' ');
        };
        Context.prototype.setTextBaseline = function (baseline) {
            this._ctx.textBaseline = baseline;
        };
        Context.prototype.setGlobalAlpha = function (alpha) {
            this._ctx.globalAlpha = alpha;
        };
        Context.prototype.save = function () {
            this._ctx.save();
        };
        Context.prototype.restore = function () {
            this._ctx.restore();
        };
        Context.prototype.scale = function (ratioX, ratioY) {
            this._ctx.scale(ratioX, ratioY);
        };
        Context.prototype._doSize = function (num) {
            return this._opts.devicePixelRatio * num;
        };
        Context.prototype._doX = function (x) {
            var _a = this._transform, scale = _a.scale, scrollX = _a.scrollX;
            var _x = (x - scrollX) / scale;
            return this._doSize(_x);
        };
        Context.prototype._doY = function (y) {
            var _a = this._transform, scale = _a.scale, scrollY = _a.scrollY;
            var _y = (y - scrollY) / scale;
            return this._doSize(_y);
        };
        return Context;
    }());
    var defaultScrollConfig = {
        lineWidth: 12,
        color: '#a0a0a0'
    };
    var Scroller = (function () {
        function Scroller(ctx, opts) {
            this._displayCtx = ctx;
            this._opts = this._getOpts(opts);
        }
        Scroller.prototype.draw = function (position) {
            var _a = this._opts, width = _a.width, height = _a.height;
            var wrapper = this.calc(position);
            var ctx = this._displayCtx;
            if (wrapper.xSize > 0) {
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = wrapper.color;
                ctx.fillRect(0, this._doSize(height - wrapper.lineSize), this._doSize(width), this._doSize(wrapper.lineSize));
                ctx.globalAlpha = 1;
                drawBox$1(ctx, {
                    x: this._doSize(wrapper.translateX),
                    y: this._doSize(height - wrapper.lineSize),
                    w: this._doSize(wrapper.xSize),
                    h: this._doSize(wrapper.lineSize),
                    r: this._doSize(wrapper.lineSize / 2),
                    color: wrapper.color,
                });
            }
            if (wrapper.ySize > 0) {
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = wrapper.color;
                ctx.fillRect(this._doSize(width - wrapper.lineSize), 0, this._doSize(wrapper.lineSize), this._doSize(height));
                ctx.globalAlpha = 1;
                drawBox$1(ctx, {
                    x: this._doSize(width - wrapper.lineSize),
                    y: this._doSize(wrapper.translateY),
                    w: this._doSize(wrapper.lineSize),
                    h: this._doSize(wrapper.ySize),
                    r: this._doSize(wrapper.lineSize / 2),
                    color: wrapper.color,
                });
            }
            ctx.globalAlpha = 1;
        };
        Scroller.prototype.resetSize = function (opts) {
            this._opts = __assign(__assign({}, this._opts), opts);
        };
        Scroller.prototype.isPointAtScrollY = function (p) {
            var _a = this._opts, width = _a.width, height = _a.height, scrollConfig = _a.scrollConfig;
            var ctx = this._displayCtx;
            ctx.beginPath();
            ctx.rect(this._doSize(width - scrollConfig.lineWidth), 0, this._doSize(scrollConfig.lineWidth), this._doSize(height));
            ctx.closePath();
            if (ctx.isPointInPath(this._doSize(p.x), this._doSize(p.y))) {
                return true;
            }
            return false;
        };
        Scroller.prototype.isPointAtScrollX = function (p) {
            var _a = this._opts, width = _a.width, height = _a.height, scrollConfig = _a.scrollConfig;
            var ctx = this._displayCtx;
            ctx.beginPath();
            ctx.rect(0, this._doSize(height - scrollConfig.lineWidth), this._doSize(width - scrollConfig.lineWidth), this._doSize(scrollConfig.lineWidth));
            ctx.closePath();
            if (ctx.isPointInPath(this._doSize(p.x), this._doSize(p.y))) {
                return true;
            }
            return false;
        };
        Scroller.prototype.getLineWidth = function () {
            var lineWidth = this._opts.scrollConfig.lineWidth;
            return lineWidth;
        };
        Scroller.prototype.calc = function (position) {
            var _a = this._opts, width = _a.width, height = _a.height, scrollConfig = _a.scrollConfig;
            var sliderMinSize = scrollConfig.lineWidth * 2.5;
            var lineSize = scrollConfig.lineWidth;
            var xSize = 0;
            var ySize = 0;
            if (position.left <= 0 && position.right <= 0) {
                xSize = Math.max(sliderMinSize, width - (Math.abs(position.left) + Math.abs(position.right)));
                if (xSize >= width)
                    xSize = 0;
            }
            if (position.top <= 0 || position.bottom <= 0) {
                ySize = Math.max(sliderMinSize, height - (Math.abs(position.top) + Math.abs(position.bottom)));
                if (ySize >= height)
                    ySize = 0;
            }
            var translateX = 0;
            if (xSize > 0) {
                translateX = xSize / 2 + (width - xSize) * Math.abs(position.left) / (Math.abs(position.left) + Math.abs(position.right));
                translateX = Math.min(Math.max(0, translateX - xSize / 2), width - xSize);
            }
            var translateY = 0;
            if (ySize > 0) {
                translateY = ySize / 2 + (height - ySize) * Math.abs(position.top) / (Math.abs(position.top) + Math.abs(position.bottom));
                translateY = Math.min(Math.max(0, translateY - ySize / 2), height - ySize);
            }
            var scrollWrapper = {
                lineSize: lineSize,
                xSize: xSize,
                ySize: ySize,
                translateY: translateY,
                translateX: translateX,
                color: this._opts.scrollConfig.color
            };
            return scrollWrapper;
        };
        Scroller.prototype._doSize = function (num) {
            return num * this._opts.devicePixelRatio;
        };
        Scroller.prototype._getOpts = function (opts) {
            var options = __assign({ scrollConfig: defaultScrollConfig }, opts);
            if (!options.scrollConfig) {
                options.scrollConfig = defaultScrollConfig;
            }
            if (!(options.scrollConfig.lineWidth > 0)) {
                options.scrollConfig.lineWidth = defaultScrollConfig.lineWidth;
            }
            options.scrollConfig.lineWidth = Math.max(options.scrollConfig.lineWidth, defaultScrollConfig.lineWidth);
            if (index$1.color.isColorStr(options.scrollConfig.color) !== true) {
                options.scrollConfig.color = options.scrollConfig.color;
            }
            return options;
        };
        return Scroller;
    }());
    function drawBox$1(ctx, opts) {
        var x = opts.x, y = opts.y, w = opts.w, h = opts.h, color = opts.color;
        var r = opts.r;
        r = Math.min(r, w / 2, h / 2);
        if (w < r * 2 || h < r * 2) {
            r = 0;
        }
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
    var _opts$1$1 = Symbol('_opts');
    var _ctx$1 = Symbol('_ctx');
    var Screen = (function () {
        function Screen(ctx, opts) {
            this[_opts$1$1] = opts;
            this[_ctx$1] = ctx;
        }
        Screen.prototype.resetSize = function (opts) {
            this[_opts$1$1] = __assign(__assign({}, this[_opts$1$1]), opts);
        };
        Screen.prototype.calcScreen = function () {
            var scaleRatio = this[_ctx$1].getTransform().scale;
            var _a = this[_opts$1$1], width = _a.width, height = _a.height, contextWidth = _a.contextWidth, contextHeight = _a.contextHeight, pxRatio = _a.devicePixelRatio;
            if (contextWidth * scaleRatio <= width) {
                this[_ctx$1].setTransform({
                    scrollX: (width - contextWidth * scaleRatio) / 2,
                });
            }
            if (contextHeight * scaleRatio <= height) {
                this[_ctx$1].setTransform({
                    scrollY: (height - contextHeight * scaleRatio) / 2,
                });
            }
            if (contextWidth * scaleRatio >= width && this[_ctx$1].getTransform().scrollX > 0) {
                this[_ctx$1].setTransform({
                    scrollX: 0,
                });
            }
            if (contextHeight * scaleRatio >= height && this[_ctx$1].getTransform().scrollY > 0) {
                this[_ctx$1].setTransform({
                    scrollY: 0,
                });
            }
            var _b = this[_ctx$1].getTransform(), _scrollX = _b.scrollX, _scrollY = _b.scrollY;
            if (_scrollX < 0 && Math.abs(_scrollX) > Math.abs(contextWidth * scaleRatio - width)) {
                this[_ctx$1].setTransform({
                    scrollX: 0 - Math.abs(contextWidth * scaleRatio - width)
                });
            }
            if (_scrollY < 0 && Math.abs(_scrollY) > Math.abs(contextHeight * scaleRatio - height)) {
                this[_ctx$1].setTransform({
                    scrollY: 0 - Math.abs(contextHeight * scaleRatio - height)
                });
            }
            var _c = this[_ctx$1].getTransform(), scrollX = _c.scrollX, scrollY = _c.scrollY;
            var size = {
                x: scrollX * scaleRatio,
                y: scrollY * scaleRatio,
                w: contextWidth * scaleRatio,
                h: contextHeight * scaleRatio,
            };
            var deviceSize = {
                x: scrollX * pxRatio,
                y: scrollY * pxRatio,
                w: contextWidth * pxRatio * scaleRatio,
                h: contextHeight * pxRatio * scaleRatio,
            };
            var position = {
                top: scrollY,
                bottom: height - (contextHeight * scaleRatio + scrollY),
                left: scrollX,
                right: width - (contextWidth * scaleRatio + scrollX),
            };
            return {
                size: size,
                position: position,
                deviceSize: deviceSize,
                width: this[_opts$1$1].width,
                height: this[_opts$1$1].height,
                devicePixelRatio: this[_opts$1$1].devicePixelRatio,
            };
        };
        Screen.prototype.calcScreenScroll = function (start, end, sliderSize, limitLen, moveDistance) {
            var scrollDistance = start;
            var scrollLen = limitLen - sliderSize;
            if (start <= 0 && end <= 0) {
                scrollLen = Math.abs(start) + Math.abs(end);
            }
            var unit = 1;
            if (scrollLen > 0) {
                unit = scrollLen / (limitLen - sliderSize);
            }
            scrollDistance = 0 - unit * moveDistance;
            return scrollDistance;
        };
        return Screen;
    }());
    var _canvas = Symbol('_canvas');
    var _displayCanvas = Symbol('_displayCanvas');
    var _mount = Symbol('_mount');
    var _opts$2 = Symbol('_opts');
    var _hasRendered = Symbol('_hasRendered');
    var _ctx = Symbol('_ctx');
    var _displayCtx = Symbol('_displayCtx');
    var _originCtx = Symbol('_originCtx');
    var _watcher = Symbol('_watcher');
    var _render = Symbol('_render');
    var _parsePrivateOptions = Symbol('_parsePrivateOptions');
    var _scroller = Symbol('_scroller');
    var _initEvent$1 = Symbol('_initEvent');
    var _doScrollX = Symbol('_doScrollX');
    var _doScrollY = Symbol('_doScrollY');
    var _doMoveScroll = Symbol('_doMoveScroll');
    var _resetContext = Symbol('_resetContext');
    var _screen = Symbol('_screen');
    var _a$1;
    var throttle$2 = index$1.time.throttle;
    var Board = (function () {
        function Board(mount, opts) {
            this[_a$1] = false;
            this[_mount] = mount;
            this[_canvas] = document.createElement('canvas');
            this[_displayCanvas] = document.createElement('canvas');
            this[_mount].appendChild(this[_displayCanvas]);
            this[_opts$2] = this[_parsePrivateOptions](opts);
            this[_originCtx] = this[_canvas].getContext('2d');
            this[_displayCtx] = this[_displayCanvas].getContext('2d');
            this[_ctx] = new Context(this[_originCtx], this[_opts$2]);
            this[_screen] = new Screen(this[_ctx], this[_opts$2]);
            this[_watcher] = new Watcher(this[_displayCanvas]);
            this[_scroller] = new Scroller(this[_displayCtx], {
                width: opts.width,
                height: opts.height,
                devicePixelRatio: opts.devicePixelRatio || 1,
                scrollConfig: opts.scrollConfig,
            });
            this[_render]();
        }
        Board.prototype.getDisplayContext = function () {
            return this[_displayCtx];
        };
        Board.prototype.getOriginContext = function () {
            return this[_displayCtx];
        };
        Board.prototype.getContext = function () {
            return this[_ctx];
        };
        Board.prototype.createContext = function (canvas) {
            var opts = this[_opts$2];
            canvas.width = opts.contextWidth * opts.devicePixelRatio;
            canvas.height = opts.contextHeight * opts.devicePixelRatio;
            return new Context(canvas.getContext('2d'), this[_opts$2]);
        };
        Board.prototype.createCanvas = function () {
            var opts = this[_opts$2];
            var canvas = document.createElement('canvas');
            canvas.width = opts.contextWidth * opts.devicePixelRatio;
            canvas.height = opts.contextHeight * opts.devicePixelRatio;
            return canvas;
        };
        Board.prototype.scale = function (scaleRatio) {
            if (scaleRatio > 0) {
                this[_ctx].setTransform({ scale: scaleRatio });
            }
            var _b = this[_screen].calcScreen(), position = _b.position, size = _b.size;
            return { position: position, size: size };
        };
        Board.prototype.scrollX = function (x) {
            if (x >= 0 || x < 0) {
                this[_ctx].setTransform({ scrollX: x });
            }
            var _b = this[_screen].calcScreen(), position = _b.position, size = _b.size;
            return { position: position, size: size };
        };
        Board.prototype.scrollY = function (y) {
            if (y >= 0 || y < 0) {
                this[_ctx].setTransform({ scrollY: y });
            }
            var _b = this[_screen].calcScreen(), position = _b.position, size = _b.size;
            return { position: position, size: size };
        };
        Board.prototype.getTransform = function () {
            return this[_ctx].getTransform();
        };
        Board.prototype.draw = function () {
            this.clear();
            var _b = this[_screen].calcScreen(), position = _b.position, deviceSize = _b.deviceSize, size = _b.size;
            this[_displayCtx].drawImage(this[_canvas], deviceSize.x, deviceSize.y, deviceSize.w, deviceSize.h);
            if (this[_opts$2].canScroll === true) {
                this[_scroller].draw(position);
            }
            return { position: position, size: size };
        };
        Board.prototype.clear = function () {
            this[_displayCtx].clearRect(0, 0, this[_displayCanvas].width, this[_displayCanvas].height);
        };
        Board.prototype.on = function (name, callback) {
            this[_watcher].on(name, callback);
        };
        Board.prototype.off = function (name, callback) {
            this[_watcher].off(name, callback);
        };
        Board.prototype.getScreenInfo = function () {
            return this[_screen].calcScreen();
        };
        Board.prototype.setCursor = function (cursor) {
            this[_displayCanvas].style.cursor = cursor;
        };
        Board.prototype.resetCursor = function () {
            this[_displayCanvas].style.cursor = 'auto';
        };
        Board.prototype.resetSize = function (opts) {
            this[_opts$2] = __assign(__assign({}, this[_opts$2]), opts);
            this[_resetContext]();
            this[_ctx].resetSize(opts);
            this[_screen].resetSize(opts);
            this[_scroller].resetSize({
                width: this[_opts$2].width,
                height: this[_opts$2].height,
                devicePixelRatio: this[_opts$2].devicePixelRatio
            });
            this.draw();
        };
        Board.prototype.getScrollLineWidth = function () {
            var lineWidth = 0;
            if (this[_opts$2].canScroll === true) {
                lineWidth = this[_scroller].getLineWidth();
            }
            return lineWidth;
        };
        Board.prototype.pointScreenToContext = function (screenPoint) {
            var _b = this.getTransform(), scrollX = _b.scrollX, scrollY = _b.scrollY, scale = _b.scale;
            var ctxPoint = {
                x: (screenPoint.x - scrollX) / scale,
                y: (screenPoint.y - scrollY) / scale,
            };
            return ctxPoint;
        };
        Board.prototype.pointContextToScreen = function (ctxPoint) {
            var _b = this.getTransform(), scrollX = _b.scrollX, scrollY = _b.scrollY, scale = _b.scale;
            var screenPoint = {
                x: ctxPoint.x * scale + scrollX,
                y: ctxPoint.y * scale + scrollY,
            };
            return screenPoint;
        };
        Board.prototype[(_a$1 = _hasRendered, _render)] = function () {
            if (this[_hasRendered] === true) {
                return;
            }
            this[_resetContext]();
            this[_initEvent$1]();
            this[_hasRendered] = true;
        };
        Board.prototype[_resetContext] = function () {
            var _b = this[_opts$2], width = _b.width, height = _b.height, contextWidth = _b.contextWidth, contextHeight = _b.contextHeight, devicePixelRatio = _b.devicePixelRatio;
            this[_canvas].width = contextWidth * devicePixelRatio;
            this[_canvas].height = contextHeight * devicePixelRatio;
            this[_displayCanvas].width = width * devicePixelRatio;
            this[_displayCanvas].height = height * devicePixelRatio;
            setStyle(this[_displayCanvas], {
                width: width + "px",
                height: height + "px",
            });
        };
        Board.prototype[_parsePrivateOptions] = function (opts) {
            var defaultOpts = {
                devicePixelRatio: 1,
            };
            return __assign(__assign({}, defaultOpts), opts);
        };
        Board.prototype[_initEvent$1] = function () {
            var _this = this;
            if (this[_hasRendered] === true) {
                return;
            }
            if (this[_opts$2].canScroll === true) {
                this.on('wheelX', throttle$2(function (deltaX) {
                    _this[_doScrollX](deltaX);
                }, 16));
                this.on('wheelY', throttle$2(function (deltaY) {
                    _this[_doScrollY](deltaY);
                }, 16));
                var scrollType_1 = null;
                this.on('moveStart', throttle$2(function (p) {
                    if (_this[_scroller].isPointAtScrollX(p)) {
                        scrollType_1 = 'x';
                    }
                    else if (_this[_scroller].isPointAtScrollY(p)) {
                        scrollType_1 = 'y';
                    }
                }, 16));
                this.on('move', throttle$2(function (p) {
                    if (scrollType_1) {
                        _this[_doMoveScroll](scrollType_1, p);
                    }
                }, 16));
                this.on('moveEnd', throttle$2(function (p) {
                    if (scrollType_1) {
                        _this[_doMoveScroll](scrollType_1, p);
                    }
                    scrollType_1 = null;
                }, 16));
            }
        };
        Board.prototype[_doScrollX] = function (dx, prevScrollX) {
            var width = this[_opts$2].width;
            var scrollX = prevScrollX;
            if (!(typeof scrollX === 'number' && (scrollX > 0 || scrollX <= 0))) {
                scrollX = this[_ctx].getTransform().scrollX;
            }
            var position = this[_screen].calcScreen().position;
            var xSize = this[_scroller].calc(position).xSize;
            var moveX = this[_screen].calcScreenScroll(position.left, position.right, xSize, width, dx);
            this.scrollX(scrollX + moveX);
            this.draw();
        };
        Board.prototype[_doScrollY] = function (dy, prevScrollY) {
            var height = this[_opts$2].height;
            var scrollY = prevScrollY;
            if (!(typeof scrollY === 'number' && (scrollY > 0 || scrollY <= 0))) {
                scrollY = this[_ctx].getTransform().scrollY;
            }
            var position = this[_screen].calcScreen().position;
            var ySize = this[_scroller].calc(position).ySize;
            var moveY = this[_screen].calcScreenScroll(position.top, position.bottom, ySize, height, dy);
            this.scrollY(scrollY + moveY);
            this.draw();
        };
        Board.prototype[_doMoveScroll] = function (scrollType, point) {
            if (!scrollType) {
                return;
            }
            var position = this[_screen].calcScreen().position;
            var _b = this[_scroller].calc(position), xSize = _b.xSize, ySize = _b.ySize;
            if (scrollType === 'x') {
                this[_doScrollX](point.x - xSize / 2, 0);
            }
            else if (scrollType === 'y') {
                this[_doScrollY](point.y - ySize / 2, 0);
            }
        };
        return Board;
    }());
    function compose(middleware) {
        return function (context, next) {
            return dispatch(0);
            function dispatch(i) {
                var fn = middleware[i];
                if (i === middleware.length && next) {
                    fn = next;
                }
                if (!fn)
                    return Promise.resolve();
                try {
                    return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        };
    }
    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    }
    function throttle(fn, timeout) {
        var timer = -1;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timer > 0) {
                return;
            }
            timer = setTimeout(function () {
                fn.apply(void 0, args);
                timer = -1;
            }, timeout);
        };
    }
    function downloadImageFromCanvas(canvas, opts) {
        var filename = opts.filename, _a = opts.type, type = _a === void 0 ? 'image/jpeg' : _a;
        var stream = canvas.toDataURL(type);
        var downloadLink = document.createElement('a');
        downloadLink.href = stream;
        downloadLink.download = filename;
        var downloadClickEvent = document.createEvent('MouseEvents');
        downloadClickEvent.initEvent('click', true, false);
        downloadLink.dispatchEvent(downloadClickEvent);
    }
    function toColorHexNum(color) {
        return parseInt(color.replace(/^\#/, '0x'));
    }
    function toColorHexStr(color) {
        return '#' + color.toString(16);
    }
    function isColorStr$2(color) {
        return typeof color === 'string' && /^\#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color);
    }
    function createUUID$2() {
        function str4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return "" + str4() + str4() + "-" + str4() + "-" + str4() + "-" + str4() + "-" + str4() + str4() + str4();
    }
    function deepClone$3(target) {
        function _clone(t) {
            var type = is$1(t);
            if (['Null', 'Number', 'String', 'Boolean', 'Undefined'].indexOf(type) >= 0) {
                return t;
            }
            else if (type === 'Array') {
                var arr_1 = [];
                t.forEach(function (item) {
                    arr_1.push(_clone(item));
                });
                return arr_1;
            }
            else if (type === 'Object') {
                var obj_1 = {};
                var keys = Object.keys(t);
                keys.forEach(function (key) {
                    obj_1[key] = _clone(t[key]);
                });
                return obj_1;
            }
        }
        return _clone(target);
    }
    function is$1(data) {
        return Object.prototype.toString.call(data).replace(/[\]|\[]{1,1}/ig, '').split(' ')[1];
    }
    function parsePrototype(data) {
        var typeStr = Object.prototype.toString.call(data) || '';
        var result = typeStr.replace(/(\[object|\])/ig, '').trim();
        return result;
    }
    var istype$1 = {
        type: function (data, lowerCase) {
            var result = parsePrototype(data);
            return lowerCase === true ? result.toLocaleLowerCase() : result;
        },
        array: function (data) {
            return parsePrototype(data) === 'Array';
        },
        json: function (data) {
            return parsePrototype(data) === 'Object';
        },
        function: function (data) {
            return parsePrototype(data) === 'Function';
        },
        asyncFunction: function (data) {
            return parsePrototype(data) === 'AsyncFunction';
        },
        string: function (data) {
            return parsePrototype(data) === 'String';
        },
        number: function (data) {
            return parsePrototype(data) === 'Number';
        },
        undefined: function (data) {
            return parsePrototype(data) === 'Undefined';
        },
        null: function (data) {
            return parsePrototype(data) === 'Null';
        },
        promise: function (data) {
            return parsePrototype(data) === 'Promise';
        },
        nodeList: function (data) {
            return parsePrototype(data) === 'NodeList';
        },
        imageData: function (data) {
            return parsePrototype(data) === 'ImageData';
        }
    };
    var Image = window.Image, Blob = window.Blob, FileReader = window.FileReader;
    function loadImage$1(src) {
        return new Promise(function (resolve, reject) {
            var img = new Image;
            img.onload = function () {
                resolve(img);
            };
            img.onabort = reject;
            img.onerror = reject;
            img.src = src;
        });
    }
    function loadSVG$1(svg) {
        return new Promise(function (resolve, reject) {
            var _svg = svg;
            var image = new Image();
            var blob = new Blob([_svg], { type: 'image/svg+xml;charset=utf-8' });
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function (event) {
                var _a;
                var base64 = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
                image.onload = function () {
                    resolve(image);
                };
                image.src = base64;
            };
            reader.onerror = function (err) {
                reject(err);
            };
        });
    }
    function loadHTML$1(html, opts) {
        var width = opts.width, height = opts.height;
        return new Promise(function (resolve, reject) {
            var _svg = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + (width || '') + "\" height = \"" + (height || '') + "\">\n      <foreignObject width=\"100%\" height=\"100%\">\n        <div xmlns = \"http://www.w3.org/1999/xhtml\">\n          " + html + "\n        </div>\n      </foreignObject>\n    </svg>\n    ";
            var image = new Image();
            var blob = new Blob([_svg], { type: 'image/svg+xml;charset=utf-8' });
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function (event) {
                var _a;
                var base64 = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
                image.onload = function () {
                    resolve(image);
                };
                image.src = base64;
            };
            reader.onerror = function (err) {
                reject(err);
            };
        });
    }
    var index = {
        time: {
            delay: delay,
            compose: compose,
            throttle: throttle,
        },
        loader: {
            loadImage: loadImage$1,
            loadSVG: loadSVG$1,
            loadHTML: loadHTML$1,
        },
        file: {
            downloadImageFromCanvas: downloadImageFromCanvas,
        },
        color: {
            toColorHexStr: toColorHexStr,
            toColorHexNum: toColorHexNum,
            isColorStr: isColorStr$2,
        },
        uuid: {
            createUUID: createUUID$2
        },
        istype: istype$1,
        data: {
            deepClone: deepClone$3,
        }
    };
    function parseRadianToAngle(radian) {
        return radian / Math.PI * 180;
    }
    function parseAngleToRadian(angle) {
        return angle / 180 * Math.PI;
    }
    function calcElementCenter(elem) {
        var p = {
            x: elem.x + elem.w / 2,
            y: elem.y + elem.h / 2,
        };
        return p;
    }
    function calcRadian(center, start, end) {
        var startAngle = calcLineAngle(center, start);
        var endAngle = calcLineAngle(center, end);
        if (endAngle !== null && startAngle !== null) {
            if (startAngle > Math.PI * 3 / 2 && endAngle < Math.PI / 2) {
                return endAngle + (Math.PI * 2 - startAngle);
            }
            else if (endAngle > Math.PI * 3 / 2 && startAngle < Math.PI / 2) {
                return startAngle + (Math.PI * 2 - endAngle);
            }
            else {
                return endAngle - startAngle;
            }
        }
        else {
            return 0;
        }
    }
    function calcLineAngle(center, p) {
        var x = p.x - center.x;
        var y = center.y - p.y;
        if (x === 0) {
            if (y < 0) {
                return Math.PI / 2;
            }
            else if (y > 0) {
                return Math.PI * (3 / 2);
            }
        }
        else if (y === 0) {
            if (x < 0) {
                return Math.PI;
            }
            else if (x > 0) {
                return 0;
            }
        }
        if (x > 0 && y < 0) {
            return Math.atan(Math.abs(y) / Math.abs(x));
        }
        else if (x < 0 && y < 0) {
            return Math.PI - Math.atan(Math.abs(y) / Math.abs(x));
        }
        else if (x < 0 && y > 0) {
            return Math.PI + Math.atan(Math.abs(y) / Math.abs(x));
        }
        else if (x > 0 && y > 0) {
            return Math.PI * 2 - Math.atan(Math.abs(y) / Math.abs(x));
        }
        return null;
    }
    function rotateElement(ctx, elem, callback) {
        var center = calcElementCenter(elem);
        var radian = parseAngleToRadian(elem.angle || 0);
        return rotateContext(ctx, center, radian || 0, callback);
    }
    function rotateContext(ctx, center, radian, callback) {
        if (center && (radian > 0 || radian < 0)) {
            ctx.translate(center.x, center.y);
            ctx.rotate(radian);
            ctx.translate(-center.x, -center.y);
        }
        callback(ctx);
        if (center && (radian > 0 || radian < 0)) {
            ctx.translate(center.x, center.y);
            ctx.rotate(-radian);
            ctx.translate(-center.x, -center.y);
        }
    }
    var istype = index.istype, color$1 = index.color;
    function clearContext(ctx) {
        ctx.setFillStyle('#000000');
        ctx.setStrokeStyle('#000000');
        ctx.setLineDash([]);
        ctx.setGlobalAlpha(1);
    }
    function drawBgColor(ctx, color) {
        var size = ctx.getSize();
        ctx.setFillStyle(color);
        ctx.fillRect(0, 0, size.contextWidth, size.contextHeight);
    }
    function drawBox(ctx, elem, pattern) {
        clearContext(ctx);
        drawBoxBorder(ctx, elem);
        rotateElement(ctx, elem, function () {
            var x = elem.x, y = elem.y, w = elem.w, h = elem.h;
            var r = elem.desc.borderRadius || 0;
            r = Math.min(r, w / 2, h / 2);
            if (w < r * 2 || h < r * 2) {
                r = 0;
            }
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
            if (typeof pattern === 'string') {
                ctx.setFillStyle(pattern);
            }
            else if (['CanvasPattern'].includes(istype.type(pattern))) {
                ctx.setFillStyle(pattern);
            }
            ctx.fill();
        });
    }
    function drawBoxBorder(ctx, elem) {
        clearContext(ctx);
        rotateElement(ctx, elem, function () {
            if (!(elem.desc.borderWidth && elem.desc.borderWidth > 0)) {
                return;
            }
            var bw = elem.desc.borderWidth;
            var borderColor = '#000000';
            if (color$1.isColorStr(elem.desc.borderColor) === true) {
                borderColor = elem.desc.borderColor;
            }
            var x = elem.x - bw / 2;
            var y = elem.y - bw / 2;
            var w = elem.w + bw;
            var h = elem.h + bw;
            var r = elem.desc.borderRadius || 0;
            r = Math.min(r, w / 2, h / 2);
            if (r < w / 2 && r < h / 2) {
                r = r + bw / 2;
            }
            ctx.beginPath();
            ctx.setLineWidth(bw);
            ctx.setStrokeStyle(borderColor);
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
            ctx.stroke();
        });
    }
    function drawRect(ctx, elem) {
        drawBox(ctx, elem, elem.desc.color);
    }
    function drawImage(ctx, elem, loader) {
        var content = loader.getContent(elem.uuid);
        rotateElement(ctx, elem, function () {
            if (content) {
                ctx.drawImage(content, elem.x, elem.y, elem.w, elem.h);
            }
        });
    }
    function drawSVG(ctx, elem, loader) {
        var content = loader.getContent(elem.uuid);
        rotateElement(ctx, elem, function () {
            if (content) {
                ctx.drawImage(content, elem.x, elem.y, elem.w, elem.h);
            }
        });
    }
    function drawHTML(ctx, elem, loader) {
        var content = loader.getContent(elem.uuid);
        rotateElement(ctx, elem, function () {
            if (content) {
                ctx.drawImage(content, elem.x, elem.y, elem.w, elem.h);
            }
        });
    }
    function drawText(ctx, elem, loader, helperConfig) {
        clearContext(ctx);
        drawBox(ctx, elem, elem.desc.bgColor || 'transparent');
        rotateElement(ctx, elem, function () {
            var desc = __assign$1({
                fontSize: 12,
                fontFamily: 'sans-serif',
                textAlign: 'center',
            }, elem.desc);
            ctx.setFillStyle(elem.desc.color);
            ctx.setTextBaseline('top');
            ctx.setFont({
                fontWeight: desc.fontWeight,
                fontSize: desc.fontSize,
                fontFamily: desc.fontFamily
            });
            var fontHeight = desc.lineHeight || desc.fontSize;
            var lines = [];
            var lineText = '';
            var lineNum = 0;
            for (var i = 0; i < desc.text.length; i++) {
                if (ctx.measureText(lineText + (desc.text[i] || '')).width < ctx.calcDeviceNum(elem.w)) {
                    lineText += (desc.text[i] || '');
                }
                else {
                    lines.push({
                        text: lineText,
                        width: ctx.calcScreenNum(ctx.measureText(lineText).width),
                    });
                    lineText = (desc.text[i] || '');
                    lineNum++;
                }
                if ((lineNum + 1) * fontHeight > elem.h) {
                    break;
                }
                if (lineText && desc.text.length - 1 === i) {
                    if ((lineNum + 1) * fontHeight < elem.h) {
                        lines.push({
                            text: lineText,
                            width: ctx.calcScreenNum(ctx.measureText(lineText).width),
                        });
                        break;
                    }
                }
            }
            var _y = elem.y;
            if (lines.length * fontHeight < elem.h) {
                _y += ((elem.h - lines.length * fontHeight) / 2);
            }
            lines.forEach(function (line, i) {
                var _x = elem.x;
                if (desc.textAlign === 'center') {
                    _x = elem.x + (elem.w - line.width) / 2;
                }
                else if (desc.textAlign === 'right') {
                    _x = elem.x + (elem.w - line.width);
                }
                ctx.fillText(line.text, _x, _y + fontHeight * i);
            });
        });
    }
    function drawCircle(ctx, elem) {
        rotateElement(ctx, elem, function (ctx) {
            var x = elem.x, y = elem.y, w = elem.w, h = elem.h, desc = elem.desc;
            var _a = desc.color, color = _a === void 0 ? '#000000' : _a, _b = desc.borderColor, borderColor = _b === void 0 ? '#000000' : _b, borderWidth = desc.borderWidth;
            var a = w / 2;
            var b = h / 2;
            var centerX = x + a;
            var centerY = y + b;
            var unit = (a > b) ? 1 / a : 1 / b;
            if (borderWidth && borderWidth > 0) {
                var ba = borderWidth / 2 + a;
                var bb = borderWidth / 2 + b;
                ctx.beginPath();
                ctx.setStrokeStyle(borderColor);
                ctx.setLineWidth(borderWidth);
                ctx.moveTo(centerX + ba, centerY);
                for (var i = 0; i < 2 * Math.PI; i += unit) {
                    ctx.lineTo(centerX + ba * Math.cos(i), centerY + bb * Math.sin(i));
                }
                ctx.lineTo(centerX + ba, centerY);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.setFillStyle(color);
            ctx.moveTo(centerX + a, centerY);
            for (var i = 0; i < 2 * Math.PI; i += unit) {
                ctx.lineTo(centerX + a * Math.cos(i), centerY + b * Math.sin(i));
            }
            ctx.closePath();
            ctx.fill();
        });
    }
    function drawElementWrapper(ctx, config) {
        if (!(config === null || config === void 0 ? void 0 : config.selectedElementWrapper)) {
            return;
        }
        var wrapper = config.selectedElementWrapper;
        clearContext(ctx);
        rotateContext(ctx, wrapper.translate, wrapper.radian || 0, function () {
            ctx.beginPath();
            ctx.setLineDash(wrapper.lineDash);
            ctx.setLineWidth(wrapper.lineWidth);
            ctx.setStrokeStyle(wrapper.color);
            ctx.moveTo(wrapper.dots.topLeft.x, wrapper.dots.topLeft.y);
            ctx.lineTo(wrapper.dots.topRight.x, wrapper.dots.topRight.y);
            ctx.lineTo(wrapper.dots.bottomRight.x, wrapper.dots.bottomRight.y);
            ctx.lineTo(wrapper.dots.bottomLeft.x, wrapper.dots.bottomLeft.y);
            ctx.lineTo(wrapper.dots.topLeft.x, wrapper.dots.topLeft.y - wrapper.lineWidth / 2);
            ctx.stroke();
            ctx.closePath();
            if (wrapper.lock !== true) {
                ctx.beginPath();
                ctx.moveTo(wrapper.dots.top.x, wrapper.dots.top.y);
                ctx.lineTo(wrapper.dots.rotate.x, wrapper.dots.rotate.y + wrapper.dotSize);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.setLineDash([]);
                ctx.setLineWidth(wrapper.dotSize / 2);
                ctx.arc(wrapper.dots.rotate.x, wrapper.dots.rotate.y, wrapper.dotSize * 0.8, Math.PI / 6, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.setFillStyle(wrapper.color);
                [
                    wrapper.dots.topLeft, wrapper.dots.top, wrapper.dots.topRight, wrapper.dots.right,
                    wrapper.dots.bottomRight, wrapper.dots.bottom, wrapper.dots.bottomLeft, wrapper.dots.left,
                ].forEach(function (dot) {
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, wrapper.dotSize, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
                });
            }
            else {
                clearContext(ctx);
                ctx.setStrokeStyle(wrapper.color);
                [
                    wrapper.dots.topLeft, wrapper.dots.top, wrapper.dots.topRight, wrapper.dots.right,
                    wrapper.dots.bottomRight, wrapper.dots.bottom, wrapper.dots.bottomLeft, wrapper.dots.left,
                ].forEach(function (dot) {
                    ctx.beginPath();
                    ctx.moveTo(dot.x - wrapper.dotSize / 2, dot.y - wrapper.dotSize / 2);
                    ctx.lineTo(dot.x + wrapper.dotSize / 2, dot.y + wrapper.dotSize / 2);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.moveTo(dot.x + wrapper.dotSize / 2, dot.y - wrapper.dotSize / 2);
                    ctx.lineTo(dot.x - wrapper.dotSize / 2, dot.y + wrapper.dotSize / 2);
                    ctx.stroke();
                    ctx.closePath();
                });
            }
        });
    }
    function drawAreaWrapper(ctx, config) {
        if (!(config === null || config === void 0 ? void 0 : config.selectedAreaWrapper)) {
            return;
        }
        var wrapper = config.selectedAreaWrapper;
        if (wrapper && wrapper.w > 0 && wrapper.h > 0) {
            clearContext(ctx);
            ctx.setGlobalAlpha(0.3);
            ctx.setFillStyle(wrapper.color);
            ctx.fillRect(wrapper.x, wrapper.y, wrapper.w, wrapper.h);
            clearContext(ctx);
            ctx.beginPath();
            ctx.setLineDash(wrapper.lineDash);
            ctx.setLineWidth(wrapper.lineWidth);
            ctx.setStrokeStyle(wrapper.color);
            ctx.moveTo(wrapper.x, wrapper.y);
            ctx.lineTo(wrapper.x + wrapper.w, wrapper.y);
            ctx.lineTo(wrapper.x + wrapper.w, wrapper.y + wrapper.h);
            ctx.lineTo(wrapper.x, wrapper.y + wrapper.h);
            ctx.lineTo(wrapper.x, wrapper.y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function drawElementListWrappers(ctx, config) {
        if (!Array.isArray(config === null || config === void 0 ? void 0 : config.selectedElementListWrappers)) {
            return;
        }
        var wrapperList = config.selectedElementListWrappers;
        wrapperList === null || wrapperList === void 0 ? void 0 : wrapperList.forEach(function (wrapper) {
            clearContext(ctx);
            rotateContext(ctx, wrapper.translate, wrapper.radian || 0, function () {
                clearContext(ctx);
                ctx.setGlobalAlpha(0.05);
                ctx.setFillStyle(wrapper.color);
                ctx.fillRect(wrapper.dots.topLeft.x, wrapper.dots.topLeft.y, wrapper.dots.bottomRight.x - wrapper.dots.topLeft.x, wrapper.dots.bottomRight.y - wrapper.dots.topLeft.y);
                clearContext(ctx);
                ctx.beginPath();
                ctx.setLineDash(wrapper.lineDash);
                ctx.setLineWidth(wrapper.lineWidth);
                ctx.setStrokeStyle(wrapper.color);
                ctx.moveTo(wrapper.dots.topLeft.x, wrapper.dots.topLeft.y);
                ctx.lineTo(wrapper.dots.topRight.x, wrapper.dots.topRight.y);
                ctx.lineTo(wrapper.dots.bottomRight.x, wrapper.dots.bottomRight.y);
                ctx.lineTo(wrapper.dots.bottomLeft.x, wrapper.dots.bottomLeft.y);
                ctx.lineTo(wrapper.dots.topLeft.x, wrapper.dots.topLeft.y - wrapper.lineWidth / 2);
                ctx.stroke();
                ctx.closePath();
                if (wrapper.lock === true) {
                    clearContext(ctx);
                    ctx.setStrokeStyle(wrapper.color);
                    [
                        wrapper.dots.topLeft, wrapper.dots.top, wrapper.dots.topRight, wrapper.dots.right,
                        wrapper.dots.bottomRight, wrapper.dots.bottom, wrapper.dots.bottomLeft, wrapper.dots.left,
                    ].forEach(function (dot) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x - wrapper.dotSize / 2, dot.y - wrapper.dotSize / 2);
                        ctx.lineTo(dot.x + wrapper.dotSize / 2, dot.y + wrapper.dotSize / 2);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.moveTo(dot.x + wrapper.dotSize / 2, dot.y - wrapper.dotSize / 2);
                        ctx.lineTo(dot.x - wrapper.dotSize / 2, dot.y + wrapper.dotSize / 2);
                        ctx.stroke();
                        ctx.closePath();
                    });
                }
            });
        });
    }
    var isColorStr$1 = index.color.isColorStr;
    function drawContext(ctx, data, helperConfig, loader) {
        clearContext(ctx);
        var size = ctx.getSize();
        ctx.clearRect(0, 0, size.width, size.height);
        if (typeof data.bgColor === 'string' && isColorStr$1(data.bgColor)) {
            drawBgColor(ctx, data.bgColor);
        }
        if (!(data.elements.length > 0)) {
            return;
        }
        for (var i = data.elements.length - 1; i >= 0; i--) {
            var elem = data.elements[i];
            switch (elem.type) {
                case 'rect': {
                    drawRect(ctx, elem);
                    break;
                }
                case 'text': {
                    drawText(ctx, elem);
                    break;
                }
                case 'image': {
                    drawImage(ctx, elem, loader);
                    break;
                }
                case 'svg': {
                    drawSVG(ctx, elem, loader);
                    break;
                }
                case 'html': {
                    drawHTML(ctx, elem, loader);
                    break;
                }
                case 'circle': {
                    drawCircle(ctx, elem);
                    break;
                }
            }
        }
        drawElementWrapper(ctx, helperConfig);
        drawAreaWrapper(ctx, helperConfig);
        drawElementListWrappers(ctx, helperConfig);
    }
    var LoaderEvent = (function () {
        function LoaderEvent() {
            this._listeners = new Map();
        }
        LoaderEvent.prototype.on = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                callbacks === null || callbacks === void 0 ? void 0 : callbacks.push(callback);
                this._listeners.set(eventKey, callbacks || []);
            }
            else {
                this._listeners.set(eventKey, [callback]);
            }
        };
        LoaderEvent.prototype.off = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                if (Array.isArray(callbacks)) {
                    for (var i = 0; i < (callbacks === null || callbacks === void 0 ? void 0 : callbacks.length); i++) {
                        if (callbacks[i] === callback) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                }
                this._listeners.set(eventKey, callbacks || []);
            }
        };
        LoaderEvent.prototype.trigger = function (eventKey, arg) {
            var callbacks = this._listeners.get(eventKey);
            if (Array.isArray(callbacks)) {
                callbacks.forEach(function (cb) {
                    cb(arg);
                });
                return true;
            }
            else {
                return false;
            }
        };
        LoaderEvent.prototype.has = function (name) {
            if (this._listeners.has(name)) {
                var list = this._listeners.get(name);
                if (Array.isArray(list) && list.length > 0) {
                    return true;
                }
            }
            return false;
        };
        return LoaderEvent;
    }());
    function filterScript(html) {
        return html.replace(/<script[\s\S]*?<\/script>/ig, '');
    }
    var _a$2 = index.loader, loadImage = _a$2.loadImage, loadSVG = _a$2.loadSVG, loadHTML = _a$2.loadHTML;
    var LoaderStatus;
    (function (LoaderStatus) {
        LoaderStatus["FREE"] = "free";
        LoaderStatus["LOADING"] = "loading";
        LoaderStatus["COMPLETE"] = "complete";
    })(LoaderStatus || (LoaderStatus = {}));
    var Loader = (function () {
        function Loader(opts) {
            this._patternMap = {};
            this._currentLoadData = {};
            this._currentUUIDQueue = [];
            this._storageLoadData = {};
            this._status = LoaderStatus.FREE;
            this._waitingLoadQueue = [];
            this._opts = opts;
            this._event = new LoaderEvent();
            this._waitingLoadQueue = [];
        }
        Loader.prototype.load = function (data) {
            var _a = this._resetLoadData(data), uuidQueue = _a[0], loadData = _a[1];
            if (this._status === LoaderStatus.FREE || this._status === LoaderStatus.COMPLETE) {
                this._currentUUIDQueue = uuidQueue;
                this._currentLoadData = loadData;
                this._loadTask();
            }
            else if (this._status === LoaderStatus.LOADING && uuidQueue.length > 0) {
                this._waitingLoadQueue.push({
                    uuidQueue: uuidQueue,
                    loadData: loadData,
                });
            }
        };
        Loader.prototype.on = function (name, callback) {
            this._event.on(name, callback);
        };
        Loader.prototype.off = function (name, callback) {
            this._event.off(name, callback);
        };
        Loader.prototype.isComplete = function () {
            return this._status === LoaderStatus.COMPLETE;
        };
        Loader.prototype.getContent = function (uuid) {
            var _a;
            if (((_a = this._storageLoadData[uuid]) === null || _a === void 0 ? void 0 : _a.status) === 'loaded') {
                return this._storageLoadData[uuid].content;
            }
            return null;
        };
        Loader.prototype.getPattern = function (elem, opts) {
            if (this._patternMap[elem.uuid]) {
                if (!(opts && opts.forceUpdate === true)) {
                    return this._patternMap[elem.uuid];
                }
            }
            var item = this._currentLoadData[elem.uuid];
            if ((item === null || item === void 0 ? void 0 : item.status) === 'loaded') {
                var board = this._opts.board;
                var tempCanvas = board.createCanvas();
                var tempCtx = board.createContext(tempCanvas);
                var image = this.getContent(elem.uuid);
                tempCtx.drawImage(image, elem.x, elem.y, elem.w, elem.h);
                var canvas = board.createCanvas();
                var ctx = board.createContext(canvas);
                var pattern = ctx.createPattern(tempCanvas, 'no-repeat');
                if (pattern)
                    this._patternMap[elem.uuid] = pattern;
                return pattern;
            }
            return null;
        };
        Loader.prototype._resetLoadData = function (data) {
            var loadData = {};
            var uuidQueue = [];
            var storageLoadData = this._storageLoadData;
            for (var i = data.elements.length - 1; i >= 0; i--) {
                var elem = data.elements[i];
                if (['image', 'svg', 'html',].includes(elem.type)) {
                    if (!storageLoadData[elem.uuid]) {
                        loadData[elem.uuid] = this._createEmptyLoadItem(elem);
                        uuidQueue.push(elem.uuid);
                    }
                    else {
                        if (elem.type === 'image') {
                            var _ele = elem;
                            if (_ele.desc.src !== storageLoadData[elem.uuid].source) {
                                loadData[elem.uuid] = this._createEmptyLoadItem(elem);
                                uuidQueue.push(elem.uuid);
                            }
                        }
                        else if (elem.type === 'svg') {
                            var _ele = elem;
                            if (_ele.desc.svg !== storageLoadData[elem.uuid].source) {
                                loadData[elem.uuid] = this._createEmptyLoadItem(elem);
                                uuidQueue.push(elem.uuid);
                            }
                        }
                        else if (elem.type === 'html') {
                            var _ele = elem;
                            if (filterScript(_ele.desc.html) !== storageLoadData[elem.uuid].source) {
                                loadData[elem.uuid] = this._createEmptyLoadItem(elem);
                                uuidQueue.push(elem.uuid);
                            }
                        }
                    }
                }
            }
            return [uuidQueue, loadData];
        };
        Loader.prototype._createEmptyLoadItem = function (elem) {
            var source = '';
            var type = elem.type;
            if (elem.type === 'image') {
                var _elem = elem;
                source = _elem.desc.src || '';
            }
            else if (elem.type === 'svg') {
                var _elem = elem;
                source = _elem.desc.svg || '';
            }
            else if (elem.type === 'html') {
                var _elem = elem;
                source = filterScript(_elem.desc.html || '');
            }
            return {
                type: type,
                status: 'null',
                content: null,
                source: source,
                elemW: elem.w,
                elemH: elem.h,
            };
        };
        Loader.prototype._loadTask = function () {
            var _this = this;
            if (this._status === LoaderStatus.LOADING) {
                return;
            }
            if (this._currentUUIDQueue.length === 0) {
                if (this._waitingLoadQueue.length === 0) {
                    this._status = LoaderStatus.COMPLETE;
                    this._event.trigger('complete', undefined);
                    return;
                }
                else {
                    var waitingItem = this._waitingLoadQueue.shift();
                    if (waitingItem) {
                        var uuidQueue = waitingItem.uuidQueue, loadData = waitingItem.loadData;
                        this._currentLoadData = loadData;
                        this._currentUUIDQueue = uuidQueue;
                    }
                }
            }
            var maxParallelNum = this._opts.maxParallelNum;
            var uuids = this._currentUUIDQueue.splice(0, maxParallelNum);
            var uuidMap = {};
            uuids.forEach(function (url, i) {
                uuidMap[url] = i;
            });
            var loadUUIDList = [];
            var _loadAction = function () {
                if (loadUUIDList.length >= maxParallelNum) {
                    return false;
                }
                if (uuids.length === 0) {
                    return true;
                }
                var _loop_1 = function (i) {
                    var uuid = uuids.shift();
                    if (uuid === undefined) {
                        return "break";
                    }
                    loadUUIDList.push(uuid);
                    _this._loadElementSource(_this._currentLoadData[uuid]).then(function (image) {
                        loadUUIDList.splice(loadUUIDList.indexOf(uuid), 1);
                        var status = _loadAction();
                        _this._storageLoadData[uuid] = {
                            type: _this._currentLoadData[uuid].type,
                            status: 'loaded',
                            content: image,
                            source: _this._currentLoadData[uuid].source,
                            elemW: _this._currentLoadData[uuid].elemW,
                            elemH: _this._currentLoadData[uuid].elemH,
                        };
                        if (loadUUIDList.length === 0 && uuids.length === 0 && status === true) {
                            _this._status = LoaderStatus.FREE;
                            _this._loadTask();
                        }
                        _this._event.trigger('load', {
                            type: _this._storageLoadData[uuid].type,
                            status: _this._storageLoadData[uuid].status,
                            content: _this._storageLoadData[uuid].content,
                            source: _this._storageLoadData[uuid].source,
                            elemW: _this._storageLoadData[uuid].elemW,
                            elemH: _this._storageLoadData[uuid].elemH,
                        });
                    }).catch(function (err) {
                        loadUUIDList.splice(loadUUIDList.indexOf(uuid), 1);
                        var status = _loadAction();
                        _this._storageLoadData[uuid] = {
                            type: _this._currentLoadData[uuid].type,
                            status: 'fail',
                            content: null,
                            error: err,
                            source: _this._currentLoadData[uuid].source,
                            elemW: _this._currentLoadData[uuid].elemW,
                            elemH: _this._currentLoadData[uuid].elemH,
                        };
                        if (loadUUIDList.length === 0 && uuids.length === 0 && status === true) {
                            _this._status = LoaderStatus.FREE;
                            _this._loadTask();
                        }
                        _this._event.trigger('error', {
                            type: _this._storageLoadData[uuid].type,
                            status: _this._storageLoadData[uuid].status,
                            content: _this._storageLoadData[uuid].content,
                            source: _this._storageLoadData[uuid].source,
                            elemW: _this._storageLoadData[uuid].elemW,
                            elemH: _this._storageLoadData[uuid].elemH,
                        });
                    });
                };
                for (var i = loadUUIDList.length; i < maxParallelNum; i++) {
                    var state_1 = _loop_1();
                    if (state_1 === "break")
                        break;
                }
                return false;
            };
            _loadAction();
        };
        Loader.prototype._loadElementSource = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var image, image, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(params && params.type === 'image')) return [3, 2];
                            return [4, loadImage(params.source)];
                        case 1:
                            image = _a.sent();
                            return [2, image];
                        case 2:
                            if (!(params && params.type === 'svg')) return [3, 4];
                            return [4, loadSVG(params.source)];
                        case 3:
                            image = _a.sent();
                            return [2, image];
                        case 4:
                            if (!(params && params.type === 'html')) return [3, 6];
                            return [4, loadHTML(params.source, {
                                    width: params.elemW, height: params.elemH
                                })];
                        case 5:
                            image = _a.sent();
                            return [2, image];
                        case 6: throw Error('Element\'s source is not support!');
                    }
                });
            });
        };
        return Loader;
    }());
    var requestAnimationFrame = window.requestAnimationFrame;
    var deepClone$2 = index.data.deepClone;
    var DrawStatus;
    (function (DrawStatus) {
        DrawStatus["FREE"] = "free";
        DrawStatus["DRAWING"] = "drawing";
    })(DrawStatus || (DrawStatus = {}));
    var Renderer = (function () {
        function Renderer(board) {
            var _this = this;
            this._queue = [];
            this._status = DrawStatus.FREE;
            this._board = board;
            this._loader = new Loader({
                board: board,
                maxParallelNum: 6
            });
            this._loader.on('load', function (res) {
                _this._drawFrame();
            });
            this._loader.on('error', function (res) {
                console.log('Loader Error: ', res);
            });
            this._loader.on('complete', function (res) {
            });
        }
        Renderer.prototype.render = function (data, helper) {
            var _data = deepClone$2({ data: data, helper: helper });
            this._queue.push(_data);
            if (this._status !== DrawStatus.DRAWING) {
                this._status = DrawStatus.DRAWING;
                this._drawFrame();
            }
            this._loader.load(data);
        };
        Renderer.prototype._drawFrame = function () {
            var _this = this;
            requestAnimationFrame(function () {
                var ctx = _this._board.getContext();
                var item = _this._queue[0];
                var isLastFrame = false;
                if (_this._queue.length > 1) {
                    item = _this._queue.shift();
                }
                else {
                    isLastFrame = true;
                }
                if (_this._loader.isComplete() !== true) {
                    _this._drawFrame();
                    if (item) {
                        drawContext(ctx, item.data, item.helper, _this._loader);
                        _this._board.draw();
                    }
                }
                else if (item) {
                    drawContext(ctx, item.data, item.helper, _this._loader);
                    _this._board.draw();
                    _this._retainQueueOneItem();
                    if (!isLastFrame) {
                        _this._drawFrame();
                    }
                    else {
                        _this._status = DrawStatus.FREE;
                    }
                }
                else {
                    _this._status = DrawStatus.FREE;
                }
            });
        };
        Renderer.prototype._retainQueueOneItem = function () {
            if (this._queue.length <= 1) {
                return;
            }
            var lastOne = deepClone$2(this._queue[this._queue.length - 1]);
            this._queue = [lastOne];
        };
        return Renderer;
    }());
    function limitNum(num) {
        var numStr = num.toFixed(2);
        return parseFloat(numStr);
    }
    function limitAngle(angle) {
        return limitNum(angle % 360);
    }
    var createUUID$1 = index.uuid.createUUID;
    var Element = (function () {
        function Element(ctx) {
            this._ctx = ctx;
        }
        Element.prototype.initData = function (data) {
            data.elements.forEach(function (elem) {
                if (!(elem.uuid && typeof elem.uuid === 'string')) {
                    elem.uuid = createUUID$1();
                }
            });
            return data;
        };
        Element.prototype.isPointInElement = function (p, data) {
            var _a;
            var ctx = this._ctx;
            var idx = -1;
            var uuid = null;
            var _loop_1 = function (i) {
                var ele = data.elements[i];
                var bw = 0;
                if (((_a = ele.desc) === null || _a === void 0 ? void 0 : _a.borderWidth) > 0) {
                    bw = ele.desc.borderWidth;
                }
                rotateElement(ctx, ele, function () {
                    ctx.beginPath();
                    ctx.moveTo(ele.x - bw, ele.y - bw);
                    ctx.lineTo(ele.x + ele.w + bw, ele.y - bw);
                    ctx.lineTo(ele.x + ele.w + bw, ele.y + ele.h + bw);
                    ctx.lineTo(ele.x - bw, ele.y + ele.h + bw);
                    ctx.lineTo(ele.x, ele.y);
                    ctx.rect(ele.x, ele.y, ele.w, ele.h);
                    ctx.closePath();
                    if (ctx.isPointInPath(p.x, p.y)) {
                        idx = i;
                        uuid = ele.uuid;
                    }
                });
                if (idx >= 0) {
                    return "break";
                }
            };
            for (var i = 0; i < data.elements.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
            return [idx, uuid];
        };
        Element.prototype.dragElement = function (data, uuid, point, prevPoint, scale) {
            var index = this.getElementIndex(data, uuid);
            if (!data.elements[index]) {
                return;
            }
            var moveX = point.x - prevPoint.x;
            var moveY = point.y - prevPoint.y;
            data.elements[index].x += (moveX / scale);
            data.elements[index].y += (moveY / scale);
            this.limitElementAttrs(data.elements[index]);
        };
        Element.prototype.transformElement = function (data, uuid, point, prevPoint, scale, direction) {
            var index = this.getElementIndex(data, uuid);
            if (!data.elements[index]) {
                return null;
            }
            var moveX = (point.x - prevPoint.x) / scale;
            var moveY = (point.y - prevPoint.y) / scale;
            var elem = data.elements[index];
            switch (direction) {
                case 'top-left': {
                    if (elem.w - moveX > 0 && elem.h - moveY > 0) {
                        elem.x += moveX;
                        elem.y += moveY;
                        elem.w -= moveX;
                        elem.h -= moveY;
                    }
                    break;
                }
                case 'top': {
                    if (elem.h - moveY > 0) {
                        elem.y += moveY;
                        elem.h -= moveY;
                    }
                    break;
                }
                case 'top-right': {
                    if (elem.h - moveY > 0 && elem.w + moveX > 0) {
                        elem.y += moveY;
                        elem.w += moveX;
                        elem.h -= moveY;
                    }
                    break;
                }
                case 'right': {
                    if (elem.w + moveX > 0) {
                        elem.w += moveX;
                    }
                    break;
                }
                case 'bottom-right': {
                    if (elem.w + moveX > 0 && elem.h + moveY > 0) {
                        elem.w += moveX;
                        elem.h += moveY;
                    }
                    break;
                }
                case 'bottom': {
                    if (elem.h + moveY > 0) {
                        elem.h += moveY;
                    }
                    break;
                }
                case 'bottom-left': {
                    if (elem.w - moveX > 0 && elem.h + moveY > 0) {
                        elem.x += moveX;
                        elem.w -= moveX;
                        elem.h += moveY;
                    }
                    break;
                }
                case 'left': {
                    if (elem.w - moveX > 0) {
                        elem.x += moveX;
                        elem.w -= moveX;
                    }
                    break;
                }
                case 'rotate': {
                    var center = calcElementCenter(elem);
                    var radian = calcRadian(center, prevPoint, point);
                    elem.angle = (elem.angle || 0) + parseRadianToAngle(radian);
                    break;
                }
            }
            this.limitElementAttrs(elem);
            return {
                width: limitNum(elem.w),
                height: limitNum(elem.h),
                angle: limitAngle(elem.angle || 0),
            };
        };
        Element.prototype.getElementIndex = function (data, uuid) {
            var idx = -1;
            for (var i = 0; i < data.elements.length; i++) {
                if (data.elements[i].uuid === uuid) {
                    idx = i;
                    break;
                }
            }
            return idx;
        };
        Element.prototype.limitElementAttrs = function (elem) {
            elem.x = limitNum(elem.x);
            elem.y = limitNum(elem.y);
            elem.w = limitNum(elem.w);
            elem.h = limitNum(elem.h);
            elem.angle = limitAngle(elem.angle || 0);
        };
        return Element;
    }());
    var deepClone$1 = index.data.deepClone;
    var Helper = (function () {
        function Helper(board, config) {
            this._areaStart = { x: 0, y: 0 };
            this._areaEnd = { x: 0, y: 0 };
            this._board = board;
            this._ctx = this._board.getContext();
            this._coreConfig = config;
            this._helperConfig = {
                elementIndexMap: {}
            };
        }
        Helper.prototype.updateConfig = function (data, opts) {
            this._updateElementIndex(data);
            this._updateSelectedElementWrapper(data, opts);
            this._updateSelectedElementListWrapper(data, opts);
        };
        Helper.prototype.getConfig = function () {
            return deepClone$1(this._helperConfig);
        };
        Helper.prototype.getElementIndexByUUID = function (uuid) {
            var index = this._helperConfig.elementIndexMap[uuid];
            if (index >= 0) {
                return index;
            }
            return null;
        };
        Helper.prototype.isPointInElementWrapperDot = function (p) {
            var _a, _b;
            var ctx = this._ctx;
            var uuid = (_b = (_a = this._helperConfig) === null || _a === void 0 ? void 0 : _a.selectedElementWrapper) === null || _b === void 0 ? void 0 : _b.uuid;
            var direction = null;
            if (!this._helperConfig.selectedElementWrapper) {
                return [null, null];
            }
            var wrapper = this._helperConfig.selectedElementWrapper;
            var dots = [
                wrapper.dots.topLeft, wrapper.dots.top, wrapper.dots.topRight, wrapper.dots.right,
                wrapper.dots.bottomRight, wrapper.dots.bottom, wrapper.dots.bottomLeft, wrapper.dots.left,
                wrapper.dots.rotate,
            ];
            var directionNames = [
                'top-left', 'top', 'top-right', 'right',
                'bottom-right', 'bottom', 'bottom-left', 'left',
                'rotate',
            ];
            rotateContext(ctx, wrapper.translate, wrapper.radian || 0, function () {
                for (var i = 0; i < dots.length; i++) {
                    var dot = dots[i];
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, wrapper.dotSize, 0, Math.PI * 2);
                    ctx.closePath();
                    if (ctx.isPointInPath(p.x, p.y)) {
                        direction = directionNames[i];
                    }
                    if (direction) {
                        break;
                    }
                }
            });
            return [uuid, direction];
        };
        Helper.prototype.isPointInElementList = function (p, data) {
            var _a, _b;
            var ctx = this._ctx;
            var idx = -1;
            var uuid = null;
            var wrapperList = ((_a = this._helperConfig) === null || _a === void 0 ? void 0 : _a.selectedElementListWrappers) || [];
            var _loop_1 = function (i) {
                var wrapper = wrapperList[i];
                var elemIdx = this_1._helperConfig.elementIndexMap[wrapper.uuid];
                var ele = data.elements[elemIdx];
                if (!ele)
                    return "continue";
                var bw = 0;
                if (((_b = ele.desc) === null || _b === void 0 ? void 0 : _b.borderWidth) > 0) {
                    bw = ele.desc.borderWidth;
                }
                rotateElement(ctx, ele, function () {
                    ctx.beginPath();
                    ctx.moveTo(ele.x - bw, ele.y - bw);
                    ctx.lineTo(ele.x + ele.w + bw, ele.y - bw);
                    ctx.lineTo(ele.x + ele.w + bw, ele.y + ele.h + bw);
                    ctx.lineTo(ele.x - bw, ele.y + ele.h + bw);
                    ctx.lineTo(ele.x, ele.y);
                    ctx.rect(ele.x, ele.y, ele.w, ele.h);
                    ctx.closePath();
                    if (ctx.isPointInPath(p.x, p.y)) {
                        idx = i;
                        uuid = ele.uuid;
                    }
                });
                if (idx >= 0) {
                    return "break";
                }
            };
            var this_1 = this;
            for (var i = 0; i < wrapperList.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
            if (uuid && idx >= 0) {
                return true;
            }
            else {
                return false;
            }
        };
        Helper.prototype.startSelectArea = function (p) {
            this._areaStart = p;
            this._areaEnd = p;
        };
        Helper.prototype.changeSelectArea = function (p) {
            this._areaEnd = p;
            this._calcSelectedArea();
        };
        Helper.prototype.clearSelectedArea = function () {
            this._areaStart = { x: 0, y: 0 };
            this._areaEnd = { x: 0, y: 0 };
            this._calcSelectedArea();
        };
        Helper.prototype.calcSelectedElements = function (data) {
            var transform = this._ctx.getTransform();
            var _a = transform.scale, scale = _a === void 0 ? 1 : _a, _b = transform.scrollX, scrollX = _b === void 0 ? 0 : _b, _c = transform.scrollY, scrollY = _c === void 0 ? 0 : _c;
            var start = this._areaStart;
            var end = this._areaEnd;
            var x = (Math.min(start.x, end.x) - scrollX) / scale;
            var y = (Math.min(start.y, end.y) - scrollY) / scale;
            var w = Math.abs(end.x - start.x) / scale;
            var h = Math.abs(end.y - start.y) / scale;
            var uuids = [];
            var ctx = this._ctx;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x + w, y + h);
            ctx.lineTo(x, y + h);
            ctx.lineTo(x, y);
            ctx.closePath();
            data.elements.forEach(function (elem) {
                var centerX = elem.x + elem.w / 2;
                var centerY = elem.y + elem.h / 2;
                if (ctx.isPointInPathWithoutScroll(centerX, centerY)) {
                    uuids.push(elem.uuid);
                }
            });
            return uuids;
        };
        Helper.prototype._calcSelectedArea = function () {
            var start = this._areaStart;
            var end = this._areaEnd;
            var transform = this._ctx.getTransform();
            var _a = transform.scale, scale = _a === void 0 ? 1 : _a, _b = transform.scrollX, scrollX = _b === void 0 ? 0 : _b, _c = transform.scrollY, scrollY = _c === void 0 ? 0 : _c;
            var elemWrapper = this._coreConfig.elementWrapper;
            var lineWidth = elemWrapper.lineWidth / scale;
            var lineDash = elemWrapper.lineDash.map(function (n) { return (n / scale); });
            this._helperConfig.selectedAreaWrapper = {
                x: (Math.min(start.x, end.x) - scrollX) / scale,
                y: (Math.min(start.y, end.y) - scrollY) / scale,
                w: Math.abs(end.x - start.x) / scale,
                h: Math.abs(end.y - start.y) / scale,
                startPoint: { x: start.x, y: start.y },
                endPoint: { x: end.x, y: end.y },
                lineWidth: lineWidth,
                lineDash: lineDash,
                color: elemWrapper.color,
            };
        };
        Helper.prototype._updateElementIndex = function (data) {
            var _this = this;
            this._helperConfig.elementIndexMap = {};
            data.elements.forEach(function (elem, i) {
                _this._helperConfig.elementIndexMap[elem.uuid] = i;
            });
        };
        Helper.prototype._updateSelectedElementWrapper = function (data, opts) {
            var uuid = opts.selectedUUID;
            if (!(typeof uuid === 'string' && this._helperConfig.elementIndexMap[uuid] >= 0)) {
                delete this._helperConfig.selectedElementWrapper;
                return;
            }
            var index = this._helperConfig.elementIndexMap[uuid];
            var elem = data.elements[index];
            var wrapper = this._createSelectedElementWrapper(elem, opts);
            this._helperConfig.selectedElementWrapper = wrapper;
        };
        Helper.prototype._updateSelectedElementListWrapper = function (data, opts) {
            var _this = this;
            var selectedUUIDList = opts.selectedUUIDList;
            var wrapperList = [];
            data.elements.forEach(function (elem, i) {
                if (selectedUUIDList === null || selectedUUIDList === void 0 ? void 0 : selectedUUIDList.includes(elem.uuid)) {
                    var wrapper = _this._createSelectedElementWrapper(elem, opts);
                    wrapperList.push(wrapper);
                }
            });
            this._helperConfig.selectedElementListWrappers = wrapperList;
        };
        Helper.prototype._createSelectedElementWrapper = function (elem, opts) {
            var _a;
            var scale = opts.scale;
            var elemWrapper = this._coreConfig.elementWrapper;
            var dotSize = elemWrapper.dotSize / scale;
            var lineWidth = elemWrapper.lineWidth / scale;
            var lineDash = elemWrapper.lineDash.map(function (n) { return (n / scale); });
            var rotateLimit = 12;
            var bw = ((_a = elem.desc) === null || _a === void 0 ? void 0 : _a.borderWidth) || 0;
            var wrapper = {
                uuid: elem.uuid,
                dotSize: dotSize,
                lock: elem.lock === true,
                dots: {
                    topLeft: {
                        x: elem.x - dotSize - bw,
                        y: elem.y - dotSize - bw,
                    },
                    top: {
                        x: elem.x + elem.w / 2,
                        y: elem.y - dotSize - bw,
                    },
                    topRight: {
                        x: elem.x + elem.w + dotSize + bw,
                        y: elem.y - dotSize - bw,
                    },
                    right: {
                        x: elem.x + elem.w + dotSize + bw,
                        y: elem.y + elem.h / 2,
                    },
                    bottomRight: {
                        x: elem.x + elem.w + dotSize + bw,
                        y: elem.y + elem.h + dotSize + bw,
                    },
                    bottom: {
                        x: elem.x + elem.w / 2,
                        y: elem.y + elem.h + dotSize + bw,
                    },
                    bottomLeft: {
                        x: elem.x - dotSize - bw,
                        y: elem.y + elem.h + dotSize + bw,
                    },
                    left: {
                        x: elem.x - dotSize - bw,
                        y: elem.y + elem.h / 2,
                    },
                    rotate: {
                        x: elem.x + elem.w / 2,
                        y: elem.y - dotSize - (dotSize * 2 + rotateLimit) - bw,
                    }
                },
                lineWidth: lineWidth,
                lineDash: lineDash,
                color: elem.lock === true ? elemWrapper.lockColor : elemWrapper.color,
            };
            if (typeof elem.angle === 'number' && (elem.angle > 0 || elem.angle < 0)) {
                wrapper.radian = parseAngleToRadian(elem.angle);
                wrapper.translate = calcElementCenter(elem);
            }
            return wrapper;
        };
        return Helper;
    }());
    var _board$1 = Symbol('_displayCtx');
    var _helper$1 = Symbol('_helper');
    var _element$1 = Symbol('_element');
    var _opts$1 = Symbol('_opts');
    var Mapper = (function () {
        function Mapper(opts) {
            this[_opts$1] = opts;
            this[_board$1] = this[_opts$1].board;
            this[_element$1] = this[_opts$1].element;
            this[_helper$1] = this[_opts$1].helper;
        }
        Mapper.prototype.isEffectivePoint = function (p) {
            var scrollLineWidth = this[_board$1].getScrollLineWidth();
            var screenInfo = this[_board$1].getScreenInfo();
            if (p.x <= (screenInfo.width - scrollLineWidth) && p.y <= (screenInfo.height - scrollLineWidth)) {
                return true;
            }
            return false;
        };
        Mapper.prototype.judgePointCursor = function (p, data) {
            var cursor = 'auto';
            if (!this.isEffectivePoint(p)) {
                return cursor;
            }
            var _a = this[_helper$1].isPointInElementWrapperDot(p), uuid = _a[0], direction = _a[1];
            if (uuid && direction) {
                switch (direction) {
                    case 'top-left': {
                        cursor = 'nw-resize';
                        break;
                    }
                    case 'top': {
                        cursor = 'n-resize';
                        break;
                    }
                    case 'top-right': {
                        cursor = 'ne-resize';
                        break;
                    }
                    case 'right': {
                        cursor = 'e-resize';
                        break;
                    }
                    case 'bottom-right': {
                        cursor = 'se-resize';
                        break;
                    }
                    case 'bottom': {
                        cursor = 's-resize';
                        break;
                    }
                    case 'bottom-left': {
                        cursor = 'sw-resize';
                        break;
                    }
                    case 'left': {
                        cursor = 'w-resize';
                        break;
                    }
                    case 'rotate': {
                        cursor = 'grab';
                        break;
                    }
                }
            }
            else {
                var index = this[_element$1].isPointInElement(p, data)[0];
                if (index >= 0) {
                    cursor = 'move';
                }
            }
            return cursor;
        };
        return Mapper;
    }());
    var defaultConfig = {
        elementWrapper: {
            color: '#2ab6f1',
            lockColor: '#aaaaaa',
            dotSize: 8,
            lineWidth: 1,
            lineDash: [4, 3],
        }
    };
    function mergeConfig(config) {
        var result = defaultConfig;
        if (config) {
            if (config.elementWrapper) {
                result.elementWrapper = __assign$1(__assign$1({}, result.elementWrapper), config.elementWrapper);
            }
        }
        return result;
    }
    var CoreEvent = (function () {
        function CoreEvent() {
            this._listeners = new Map();
        }
        CoreEvent.prototype.on = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                callbacks === null || callbacks === void 0 ? void 0 : callbacks.push(callback);
                this._listeners.set(eventKey, callbacks || []);
            }
            else {
                this._listeners.set(eventKey, [callback]);
            }
        };
        CoreEvent.prototype.off = function (eventKey, callback) {
            if (this._listeners.has(eventKey)) {
                var callbacks = this._listeners.get(eventKey);
                if (Array.isArray(callbacks)) {
                    for (var i = 0; i < (callbacks === null || callbacks === void 0 ? void 0 : callbacks.length); i++) {
                        if (callbacks[i] === callback) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                }
                this._listeners.set(eventKey, callbacks || []);
            }
        };
        CoreEvent.prototype.trigger = function (eventKey, arg) {
            var callbacks = this._listeners.get(eventKey);
            if (Array.isArray(callbacks)) {
                callbacks.forEach(function (cb) {
                    cb(arg);
                });
                return true;
            }
            else {
                return false;
            }
        };
        CoreEvent.prototype.has = function (name) {
            if (this._listeners.has(name)) {
                var list = this._listeners.get(name);
                if (Array.isArray(list) && list.length > 0) {
                    return true;
                }
            }
            return false;
        };
        return CoreEvent;
    }());
    var elementTypes = {
        'text': {},
        'rect': {},
        'image': {},
        'svg': {},
        'circle': {},
        'html': {},
    };
    var elementNames = Object.keys(elementTypes);
    function parseData(data) {
        var result = {
            elements: [],
        };
        if (Array.isArray(data === null || data === void 0 ? void 0 : data.elements)) {
            data === null || data === void 0 ? void 0 : data.elements.forEach(function (elem) {
                if (elem === void 0) { elem = {}; }
                if (isElement(elem)) {
                    result.elements.push(elem);
                }
            });
        }
        if (typeof data.bgColor === 'string') {
            result.bgColor = data.bgColor;
        }
        return result;
    }
    function isElement(elem) {
        if (!(isNumber(elem.x) && isNumber(elem.y) && isNumber(elem.w) && isNumber(elem.h))) {
            return false;
        }
        if (!(typeof elem.type === 'string' && elementNames.includes(elem.type))) {
            return false;
        }
        return true;
    }
    function isNumber(num) {
        return (num >= 0 || num < 0);
    }
    var isColorStr = index.color.isColorStr;
    function number(value) {
        return (typeof value === 'number' && (value > 0 || value <= 0));
    }
    function x(value) {
        return number(value);
    }
    function y(value) {
        return number(value);
    }
    function w(value) {
        return (typeof value === 'number' && value >= 0);
    }
    function h(value) {
        return (typeof value === 'number' && value >= 0);
    }
    function angle(value) {
        return (typeof value === 'number' && value >= -360 && value <= 360);
    }
    function borderWidth(value) {
        return w(value);
    }
    function borderRadius(value) {
        return number(value) && value >= 0;
    }
    function color(value) {
        return isColorStr(value);
    }
    function imageURL(value) {
        return (typeof value === 'string' && /^(http:\/\/|https:\/\/|\.\/|\/)/.test("" + value));
    }
    function imageBase64(value) {
        return (typeof value === 'string' && /^(data:image\/)/.test("" + value));
    }
    function imageSrc(value) {
        return (imageBase64(value) || imageURL(value));
    }
    function svg(value) {
        return (typeof value === 'string' && /^(<svg[\s]{1,}|<svg>)/i.test(("" + value).trim()) && /<\/[\s]{0,}svg>$/i.test(("" + value).trim()));
    }
    function html(value) {
        var result = false;
        if (typeof value === 'string') {
            var div = document.createElement('div');
            div.innerHTML = value;
            if (div.children.length > 0) {
                result = true;
            }
            div = null;
        }
        return result;
    }
    function text(value) {
        return typeof value === 'string';
    }
    function fontSize(value) {
        return number(value) && value > 0;
    }
    function lineHeight(value) {
        return number(value) && value > 0;
    }
    function textAlign(value) {
        return ['center', 'left', 'right'].includes(value);
    }
    function fontFamily(value) {
        return typeof value === 'string' && value.length > 0;
    }
    function fontWeight(value) {
        return ['bold'].includes(value);
    }
    var is = {
        x: x,
        y: y,
        w: w,
        h: h,
        angle: angle,
        number: number,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        color: color,
        imageSrc: imageSrc,
        imageURL: imageURL,
        imageBase64: imageBase64,
        svg: svg,
        html: html,
        text: text,
        fontSize: fontSize,
        lineHeight: lineHeight,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
    };
    function attrs(attrs) {
        var x = attrs.x, y = attrs.y, w = attrs.w, h = attrs.h, angle = attrs.angle;
        if (!(is.x(x) && is.y(y) && is.w(w) && is.h(h) && is.angle(angle))) {
            return false;
        }
        if (!(angle >= -360 && angle <= 360)) {
            return false;
        }
        return true;
    }
    function box(desc) {
        if (desc === void 0) { desc = {}; }
        var borderColor = desc.borderColor, borderRadius = desc.borderRadius, borderWidth = desc.borderWidth;
        if (desc.hasOwnProperty('borderColor') && !is.color(borderColor)) {
            return false;
        }
        if (desc.hasOwnProperty('borderRadius') && !is.number(borderRadius)) {
            return false;
        }
        if (desc.hasOwnProperty('borderWidth') && !is.number(borderWidth)) {
            return false;
        }
        return true;
    }
    function rectDesc(desc) {
        var color = desc.color;
        if (desc.hasOwnProperty('color') && !is.color(color)) {
            return false;
        }
        if (!box(desc)) {
            return false;
        }
        return true;
    }
    function circleDesc(desc) {
        var color = desc.color, borderColor = desc.borderColor, borderWidth = desc.borderWidth;
        if (desc.hasOwnProperty('color') && !is.color(color)) {
            return false;
        }
        if (desc.hasOwnProperty('borderColor') && !is.color(borderColor)) {
            return false;
        }
        if (desc.hasOwnProperty('borderWidth') && !is.number(borderWidth)) {
            return false;
        }
        return true;
    }
    function imageDesc(desc) {
        var src = desc.src;
        if (!is.imageSrc(src)) {
            return false;
        }
        return true;
    }
    function svgDesc(desc) {
        var svg = desc.svg;
        if (!is.svg(svg)) {
            return false;
        }
        return true;
    }
    function htmlDesc(desc) {
        var html = desc.html;
        if (!is.html(html)) {
            return false;
        }
        return true;
    }
    function textDesc(desc) {
        var text = desc.text, color = desc.color, fontSize = desc.fontSize, lineHeight = desc.lineHeight, fontFamily = desc.fontFamily, textAlign = desc.textAlign, fontWeight = desc.fontWeight, bgColor = desc.bgColor;
        if (!is.text(text)) {
            return false;
        }
        if (!is.color(color)) {
            return false;
        }
        if (!is.fontSize(fontSize)) {
            return false;
        }
        if (desc.hasOwnProperty('bgColor') && !is.color(bgColor)) {
            return false;
        }
        if (desc.hasOwnProperty('fontWeight') && !is.fontWeight(fontWeight)) {
            return false;
        }
        if (desc.hasOwnProperty('lineHeight') && !is.lineHeight(lineHeight)) {
            return false;
        }
        if (desc.hasOwnProperty('fontFamily') && !is.fontFamily(fontFamily)) {
            return false;
        }
        if (desc.hasOwnProperty('textAlign') && !is.textAlign(textAlign)) {
            return false;
        }
        if (!box(desc)) {
            return false;
        }
        return true;
    }
    var check = {
        attrs: attrs,
        textDesc: textDesc,
        rectDesc: rectDesc,
        circleDesc: circleDesc,
        imageDesc: imageDesc,
        svgDesc: svgDesc,
        htmlDesc: htmlDesc,
    };
    var _board = Symbol('_board');
    var _data = Symbol('_data');
    var _opts$3 = Symbol('_opts');
    var _config = Symbol('_config');
    var _renderer = Symbol('_renderer');
    var _element = Symbol('_element');
    var _helper = Symbol('_helper');
    var _hasInited$1 = Symbol('_hasInited');
    var _mode = Symbol('_mode');
    var _selectedUUID = Symbol('_selectedUUID');
    var _selectedUUIDList = Symbol('_selectedUUIDList');
    var _prevPoint = Symbol('_prevPoint');
    var _draw = Symbol('_draw');
    var _selectedDotDirection = Symbol('_selectedDotDirection');
    var _coreEvent = Symbol('_coreEvent');
    var _mapper = Symbol('_mapper');
    var _initEvent$2 = Symbol('_initEvent');
    var _handlePoint = Symbol('_handlePoint');
    var _handleMoveStart = Symbol('_handleMoveStart');
    var _handleMove = Symbol('_handleMove');
    var _handleMoveEnd = Symbol('_handleMoveEnd');
    var _handleHover = Symbol('_handleHover');
    var _dragElements = Symbol('_dragElements');
    var _transfromElement = Symbol('_transfromElement');
    var _emitChangeScreen = Symbol('_emitChangeScreen');
    var _emitChangeData = Symbol('_emitChangeData');
    var _onlyRender = Symbol('_onlyRender');
    var _cursorStatus = Symbol('_cursorStatus');
    var Mode;
    (function (Mode) {
        Mode["NULL"] = "null";
        Mode["SELECT_ELEMENT"] = "select-element";
        Mode["SELECT_ELEMENT_LIST"] = "select-element-list";
        Mode["SELECT_ELEMENT_WRAPPER_DOT"] = "select-element-wrapper-dot";
        Mode["SELECT_AREA"] = "select-area";
    })(Mode || (Mode = {}));
    var CursorStatus;
    (function (CursorStatus) {
        CursorStatus["DRAGGING"] = "dragging";
        CursorStatus["NULL"] = "null";
    })(CursorStatus || (CursorStatus = {}));
    var time = index.time;
    var deepClone = index.data.deepClone;
    var createUUID = index.uuid.createUUID;
    var Core = (function () {
        function Core(mount, opts, config) {
            var _k, _l, _m;
            this[_a] = false;
            this[_b] = Mode.NULL;
            this[_c] = new CoreEvent();
            this[_d] = null;
            this[_e] = [];
            this[_f] = null;
            this[_g] = null;
            this[_h] = false;
            this[_j] = CursorStatus.NULL;
            this[_data] = { elements: [] };
            this[_opts$3] = opts;
            this[_onlyRender] = opts.onlyRender === true;
            this[_config] = mergeConfig(config || {});
            this[_board] = new Board(mount, __assign$1(__assign$1({}, this[_opts$3]), { canScroll: (_k = config === null || config === void 0 ? void 0 : config.scrollWrapper) === null || _k === void 0 ? void 0 : _k.use, scrollConfig: {
                    color: ((_l = config === null || config === void 0 ? void 0 : config.scrollWrapper) === null || _l === void 0 ? void 0 : _l.color) || '#a0a0a0',
                    lineWidth: ((_m = config === null || config === void 0 ? void 0 : config.scrollWrapper) === null || _m === void 0 ? void 0 : _m.lineWidth) || 12,
                } }));
            this[_renderer] = new Renderer(this[_board]);
            this[_element] = new Element(this[_board].getContext());
            this[_helper] = new Helper(this[_board], this[_config]);
            this[_mapper] = new Mapper({
                board: this[_board],
                helper: this[_helper],
                element: this[_element]
            });
            this[_initEvent$2]();
            this[_hasInited$1] = true;
        }
        Core.prototype[(_a = _hasInited$1, _b = _mode, _c = _coreEvent, _d = _selectedUUID, _e = _selectedUUIDList, _f = _prevPoint, _g = _selectedDotDirection, _h = _onlyRender, _j = _cursorStatus, _draw)] = function () {
            var _k, _l;
            var transfrom = this[_board].getTransform();
            this[_helper].updateConfig(this[_data], {
                width: this[_opts$3].width,
                height: this[_opts$3].height,
                canScroll: ((_l = (_k = this[_config]) === null || _k === void 0 ? void 0 : _k.scrollWrapper) === null || _l === void 0 ? void 0 : _l.use) === true,
                selectedUUID: this[_selectedUUID],
                selectedUUIDList: this[_selectedUUIDList],
                devicePixelRatio: this[_opts$3].devicePixelRatio,
                scale: transfrom.scale,
                scrollX: transfrom.scrollX,
                scrollY: transfrom.scrollY,
            });
            this[_renderer].render(this[_data], this[_helper].getConfig());
        };
        Core.prototype.resetSize = function (opts) {
            this[_opts$3] = __assign$1(__assign$1({}, this[_opts$3]), opts);
            this[_board].resetSize(opts);
            this[_draw]();
        };
        Core.prototype.selectElementByIndex = function (index, opts) {
            if (this[_onlyRender] === true)
                return;
            if (this[_data].elements[index]) {
                var uuid = this[_data].elements[index].uuid;
                if ((opts === null || opts === void 0 ? void 0 : opts.useMode) === true) {
                    this[_mode] = Mode.SELECT_ELEMENT;
                }
                else {
                    this[_mode] = Mode.NULL;
                }
                this[_selectedUUID] = uuid;
                this[_selectedUUIDList] = [];
                this[_draw]();
            }
        };
        Core.prototype.selectElement = function (uuid, opts) {
            if (this[_onlyRender] === true)
                return;
            var index = this[_helper].getElementIndexByUUID(uuid);
            if (typeof index === 'number' && index >= 0) {
                this.selectElementByIndex(index, opts);
            }
        };
        Core.prototype.moveDownElement = function (uuid) {
            if (this[_onlyRender] === true)
                return;
            var index = this[_helper].getElementIndexByUUID(uuid);
            if (typeof index === 'number' && index >= 0 && index < this[_data].elements.length - 1) {
                var temp = this[_data].elements[index];
                this[_data].elements[index] = this[_data].elements[index + 1];
                this[_data].elements[index + 1] = temp;
            }
            this[_emitChangeData]();
            this[_draw]();
        };
        Core.prototype.moveUpElement = function (uuid) {
            if (this[_onlyRender] === true)
                return;
            var index = this[_helper].getElementIndexByUUID(uuid);
            if (typeof index === 'number' && index > 0 && index < this[_data].elements.length) {
                var temp = this[_data].elements[index];
                this[_data].elements[index] = this[_data].elements[index - 1];
                this[_data].elements[index - 1] = temp;
            }
            this[_emitChangeData]();
            this[_draw]();
        };
        Core.prototype.scale = function (ratio) {
            var screen = this[_board].scale(ratio);
            this[_draw]();
            this[_emitChangeScreen]();
            return screen;
        };
        Core.prototype.scrollX = function (x) {
            var screen = this[_board].scrollX(x);
            this[_draw]();
            this[_emitChangeScreen]();
            return screen;
        };
        Core.prototype.scrollY = function (y) {
            var screen = this[_board].scrollY(y);
            this[_draw]();
            this[_emitChangeScreen]();
            return screen;
        };
        Core.prototype.getData = function () {
            return deepClone(this[_data]);
        };
        Core.prototype.setData = function (data, opts) {
            this[_data] = this[_element].initData(deepClone(parseData(data)));
            if (opts && opts.triggerChangeEvent === true) {
                this[_emitChangeData]();
            }
            this[_draw]();
        };
        Core.prototype.updateElement = function (elem) {
            var _k;
            if (this[_onlyRender] === true)
                return;
            var _elem = deepClone(elem);
            var data = this[_data];
            for (var i = 0; i < data.elements.length; i++) {
                if (_elem.uuid === ((_k = data.elements[i]) === null || _k === void 0 ? void 0 : _k.uuid)) {
                    data.elements[i] = _elem;
                    break;
                }
            }
            this[_emitChangeData]();
            this[_draw]();
        };
        Core.prototype.addElement = function (elem) {
            if (this[_onlyRender] === true)
                return null;
            var _elem = deepClone(elem);
            _elem.uuid = createUUID();
            this[_data].elements.unshift(_elem);
            this[_emitChangeData]();
            this[_draw]();
            return _elem.uuid;
        };
        Core.prototype.deleteElement = function (uuid) {
            if (this[_onlyRender] === true)
                return;
            var index = this[_element].getElementIndex(this[_data], uuid);
            if (index >= 0) {
                this[_data].elements.splice(index, 1);
                this[_emitChangeData]();
                this[_draw]();
            }
        };
        Core.prototype.on = function (key, callback) {
            this[_coreEvent].on(key, callback);
        };
        Core.prototype.off = function (key, callback) {
            this[_coreEvent].off(key, callback);
        };
        Core.prototype.pointScreenToContext = function (p) {
            return this[_board].pointScreenToContext(p);
        };
        Core.prototype.pointContextToScreen = function (p) {
            return this[_board].pointContextToScreen(p);
        };
        Core.prototype.__getBoardContext = function () {
            return this[_board].getContext();
        };
        Core.prototype.__getDisplayContext = function () {
            return this[_board].getDisplayContext();
        };
        Core.prototype.__getOriginContext = function () {
            return this[_board].getOriginContext();
        };
        Core.prototype[_initEvent$2] = function () {
            if (this[_onlyRender] === true) {
                return;
            }
            if (this[_hasInited$1] === true) {
                return;
            }
            this[_board].on('point', this[_handlePoint].bind(this));
            this[_board].on('moveStart', this[_handleMoveStart].bind(this));
            this[_board].on('move', time.throttle(this[_handleMove].bind(this), 16));
            this[_board].on('moveEnd', this[_handleMoveEnd].bind(this));
            this[_board].on('hover', time.throttle(this[_handleHover].bind(this), 32));
        };
        Core.prototype[_handlePoint] = function (point) {
            var _k;
            if (!this[_mapper].isEffectivePoint(point)) {
                return;
            }
            if (this[_helper].isPointInElementList(point, this[_data])) {
                this[_mode] = Mode.SELECT_ELEMENT_LIST;
            }
            else {
                var _l = this[_helper].isPointInElementWrapperDot(point), uuid = _l[0], direction = _l[1];
                if (uuid && direction) {
                    this[_mode] = Mode.SELECT_ELEMENT_WRAPPER_DOT;
                    this[_selectedDotDirection] = direction;
                    this[_selectedUUID] = uuid;
                }
                else {
                    var _m = this[_element].isPointInElement(point, this[_data]), index = _m[0], uuid_1 = _m[1];
                    if (index >= 0) {
                        this.selectElementByIndex(index, { useMode: true });
                        if (typeof uuid_1 === 'string' && this[_coreEvent].has('screenSelectElement')) {
                            this[_coreEvent].trigger('screenSelectElement', { index: index, uuid: uuid_1, element: deepClone((_k = this[_data].elements) === null || _k === void 0 ? void 0 : _k[index]) });
                            this[_emitChangeScreen]();
                        }
                        this[_mode] = Mode.SELECT_ELEMENT;
                    }
                    else {
                        this[_selectedUUIDList] = [];
                        this[_mode] = Mode.SELECT_AREA;
                    }
                }
            }
            this[_draw]();
        };
        Core.prototype[_handleMoveStart] = function (point) {
            this[_prevPoint] = point;
            var uuid = this[_selectedUUID];
            if (this[_mode] === Mode.SELECT_ELEMENT_LIST) ;
            else if (this[_mode] === Mode.SELECT_ELEMENT) {
                if (typeof uuid === 'string' && this[_coreEvent].has('screenMoveElementStart')) {
                    this[_coreEvent].trigger('screenMoveElementStart', {
                        index: this[_element].getElementIndex(this[_data], uuid),
                        uuid: uuid,
                        x: point.x,
                        y: point.y
                    });
                }
            }
            else if (this[_mode] === Mode.SELECT_AREA) {
                this[_helper].startSelectArea(point);
            }
        };
        Core.prototype[_handleMove] = function (point) {
            if (this[_mode] === Mode.SELECT_ELEMENT_LIST) {
                this[_dragElements](this[_selectedUUIDList], point, this[_prevPoint]);
                this[_draw]();
                this[_cursorStatus] = CursorStatus.DRAGGING;
            }
            else if (typeof this[_selectedUUID] === 'string') {
                if (this[_mode] === Mode.SELECT_ELEMENT) {
                    this[_dragElements]([this[_selectedUUID]], point, this[_prevPoint]);
                    this[_draw]();
                    this[_cursorStatus] = CursorStatus.DRAGGING;
                }
                else if (this[_mode] === Mode.SELECT_ELEMENT_WRAPPER_DOT && this[_selectedDotDirection]) {
                    this[_transfromElement](this[_selectedUUID], point, this[_prevPoint], this[_selectedDotDirection]);
                    this[_cursorStatus] = CursorStatus.DRAGGING;
                }
            }
            else if (this[_mode] === Mode.SELECT_AREA) {
                this[_helper].changeSelectArea(point);
                this[_draw]();
            }
            this[_prevPoint] = point;
        };
        Core.prototype[_handleMoveEnd] = function (point) {
            var uuid = this[_selectedUUID];
            if (typeof uuid === 'string') {
                var index = this[_element].getElementIndex(this[_data], uuid);
                var elem = this[_data].elements[index];
                if (elem) {
                    if (this[_coreEvent].has('screenMoveElementEnd')) {
                        this[_coreEvent].trigger('screenMoveElementEnd', {
                            index: index,
                            uuid: uuid,
                            x: point.x,
                            y: point.y
                        });
                    }
                    if (this[_coreEvent].has('screenChangeElement')) {
                        this[_coreEvent].trigger('screenChangeElement', {
                            index: index,
                            uuid: uuid,
                            width: elem.w,
                            height: elem.h,
                            angle: elem.angle || 0
                        });
                    }
                    this[_emitChangeData]();
                }
            }
            else if (this[_mode] === Mode.SELECT_AREA) {
                var uuids = this[_helper].calcSelectedElements(this[_data]);
                if (uuids.length > 0) {
                    this[_selectedUUIDList] = uuids;
                    this[_selectedUUID] = null;
                }
                else {
                    this[_mode] = Mode.NULL;
                }
                this[_helper].clearSelectedArea();
                this[_draw]();
            }
            this[_selectedUUID] = null;
            this[_prevPoint] = null;
            this[_cursorStatus] = CursorStatus.NULL;
            this[_mode] = Mode.NULL;
        };
        Core.prototype[_handleHover] = function (point) {
            if (this[_mode] === Mode.SELECT_AREA) {
                this[_board].resetCursor();
            }
            else if (this[_cursorStatus] === CursorStatus.NULL) {
                var cursor = this[_mapper].judgePointCursor(point, this[_data]);
                this[_board].setCursor(cursor);
            }
        };
        Core.prototype[_dragElements] = function (uuids, point, prevPoint) {
            var _this = this;
            if (!prevPoint) {
                return;
            }
            uuids.forEach(function (uuid) {
                var idx = _this[_helper].getElementIndexByUUID(uuid);
                if (idx === null)
                    return;
                var elem = _this[_data].elements[idx];
                if (elem.lock !== true) {
                    _this[_element].dragElement(_this[_data], uuid, point, prevPoint, _this[_board].getContext().getTransform().scale);
                }
            });
            this[_draw]();
        };
        Core.prototype[_transfromElement] = function (uuid, point, prevPoint, direction) {
            if (!prevPoint) {
                return null;
            }
            var result = this[_element].transformElement(this[_data], uuid, point, prevPoint, this[_board].getContext().getTransform().scale, direction);
            this[_draw]();
            return result;
        };
        Core.prototype[_emitChangeScreen] = function () {
            if (this[_coreEvent].has('changeScreen')) {
                this[_coreEvent].trigger('changeScreen', __assign$1(__assign$1({}, this[_board].getTransform()), {
                    selectedElementUUID: this[_selectedUUID]
                }));
            }
        };
        Core.prototype[_emitChangeData] = function () {
            if (this[_coreEvent].has('changeData')) {
                this[_coreEvent].trigger('changeData', deepClone(this[_data]));
            }
        };
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        Core.is = is;
        Core.check = check;
        return Core;
    }());

    var defaultOptions = {
        width: 400,
        height: 300,
        contextWidth: 400,
        contextHeight: 300,
        devicePixelRatio: 1,
        onlyRender: false,
        maxRecords: 10,
    };

    var _a, _b, _c;
    var _opts = Symbol('_opts');
    var _doRecords = Symbol('_doRecords');
    var _unDoRecords = Symbol('_unDoRecords');
    var _hasInited = Symbol('_hasInited');
    var _initEvent = Symbol('_initEvent');
    var IDraw = (function (_super) {
        __extends(IDraw, _super);
        function IDraw(mount, opts, config) {
            var _this = _super.call(this, mount, {
                width: opts.width || defaultOptions.width,
                height: opts.height || defaultOptions.height,
                contextWidth: opts.contextWidth || defaultOptions.contextWidth,
                contextHeight: opts.contextHeight || defaultOptions.contextHeight,
                devicePixelRatio: opts.devicePixelRatio || defaultOptions.devicePixelRatio,
                onlyRender: opts.onlyRender || defaultOptions.onlyRender,
            }, config || {}) || this;
            _this[_a] = [];
            _this[_b] = [];
            _this[_c] = false;
            _this[_opts] = _this._createOpts(opts);
            _this[_initEvent]();
            return _this;
        }
        IDraw.prototype.undo = function () {
            if (!(this[_doRecords].length > 1)) {
                return {
                    doRecordCount: this[_doRecords].length,
                    data: null,
                };
            }
            var popRecord = this[_doRecords].pop();
            if (popRecord) {
                this[_unDoRecords].push(popRecord);
            }
            var record = this[_doRecords][this[_doRecords].length - 1];
            if (record === null || record === void 0 ? void 0 : record.data) {
                this.setData(record.data);
            }
            return {
                doRecordCount: this[_doRecords].length,
                data: (record === null || record === void 0 ? void 0 : record.data) || null,
            };
        };
        IDraw.prototype.redo = function () {
            if (!(this[_unDoRecords].length > 0)) {
                return {
                    undoRecordCount: this[_unDoRecords].length,
                    data: null,
                };
            }
            var record = this[_unDoRecords].pop();
            if (record === null || record === void 0 ? void 0 : record.data) {
                this.setData(record.data);
            }
            return {
                undoRecordCount: this[_unDoRecords].length,
                data: (record === null || record === void 0 ? void 0 : record.data) || null,
            };
        };
        IDraw.prototype[(_a = _doRecords, _b = _unDoRecords, _c = _hasInited, _initEvent)] = function () {
            var _this = this;
            if (this[_hasInited] === true) {
                return;
            }
            this.on('changeData', function (data) {
                _this._pushRecord(data);
            });
            this[_hasInited] = true;
        };
        IDraw.prototype._pushRecord = function (data) {
            if (this[_doRecords].length >= this[_opts].maxRecords) {
                this[_doRecords].shift();
            }
            this[_doRecords].push({ data: data, time: Date.now() });
            this[_unDoRecords] = [];
        };
        IDraw.prototype._createOpts = function (opts) {
            return __assign$2(__assign$2({}, defaultOptions), opts);
        };
        return IDraw;
    }(Core));

    return IDraw;

}());