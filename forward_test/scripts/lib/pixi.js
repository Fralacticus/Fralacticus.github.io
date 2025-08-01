"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

/*!
 * pixi.js - v5.2.1
 * Compiled Tue, 28 Jan 2020 23:37:37 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var PIXI = function(t) {
    "use strict";

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function r(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }

    var i = r(function(t, r) {
            ! function(t) {
                var e = t.Promise,
                    i = e && "resolve" in e && "reject" in e && "all" in e && "race" in e && function() {
                        var t;
                        return new e(function(e) {
                            t = e;
                        }), "function" == typeof t;
                    }();

                r ? (r.Promise = i ? e : T, r.Polyfill = T) : i || (t.Promise = T);

                var n = "pending",
                    o = "sealed",
                    s = "fulfilled",
                    a = "rejected",
                    h = function h() {};

                function u(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                }

                var l,
                    c = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
                    d = [];

                function p() {
                    for (var t = 0; t < d.length; t++) {
                        d[t][0](d[t][1]);
                    }

                    d = [], l = !1;
                }

                function f(t, e) {
                    d.push([t, e]), l || (l = !0, c(p, 0));
                }

                function v(t) {
                    var e = t.owner,
                        r = e.state_,
                        i = e.data_,
                        n = t[r],
                        o = t.then;

                    if ("function" == typeof n) {
                        r = s;

                        try {
                            i = n(i);
                        } catch (t) {
                            _(o, t);
                        }
                    }

                    m(o, i) || (r === s && g(o, i), r === a && _(o, i));
                }

                function m(t, e) {
                    var r;

                    try {
                        if (t === e) throw new TypeError("A promises callback cannot return that same promise.");

                        if (e && ("function" == typeof e || "object" == _typeof(e))) {
                            var i = e.then;
                            if ("function" == typeof i) return i.call(e, function(i) {
                                r || (r = !0, e !== i ? g(t, i) : y(t, i));
                            }, function(e) {
                                r || (r = !0, _(t, e));
                            }), !0;
                        }
                    } catch (e) {
                        return r || _(t, e), !0;
                    }

                    return !1;
                }

                function g(t, e) {
                    t !== e && m(t, e) || y(t, e);
                }

                function y(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(b, t));
                }

                function _(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(E, t));
                }

                function x(t) {
                    var e = t.then_;
                    t.then_ = void 0;

                    for (var r = 0; r < e.length; r++) {
                        v(e[r]);
                    }
                }

                function b(t) {
                    t.state_ = s, x(t);
                }

                function E(t) {
                    t.state_ = a, x(t);
                }

                function T(t) {
                    if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
                    if (this instanceof T == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this.then_ = [],
                        function(t, e) {
                            function r(t) {
                                _(e, t);
                            }

                            try {
                                t(function(t) {
                                    g(e, t);
                                }, r);
                            } catch (t) {
                                r(t);
                            }
                        }(t, this);
                }

                T.prototype = {
                    constructor: T,
                    state_: n,
                    then_: null,
                    data_: void 0,
                    then: function then(t, e) {
                        var r = {
                            owner: this,
                            then: new this.constructor(h),
                            fulfilled: t,
                            rejected: e
                        };
                        return this.state_ === s || this.state_ === a ? f(v, r) : this.then_.push(r), r.then;
                    },
                    "catch": function _catch(t) {
                        return this.then(null, t);
                    }
                }, T.all = function(t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.all().");
                    return new this(function(e, r) {
                        var i = [],
                            n = 0;

                        function o(t) {
                            return n++,
                                function(r) {
                                    i[t] = r, --n || e(i);
                                };
                        }

                        for (var s, a = 0; a < t.length; a++) {
                            (s = t[a]) && "function" == typeof s.then ? s.then(o(a), r) : i[a] = s;
                        }

                        n || e(i);
                    });
                }, T.race = function(t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.race().");
                    return new this(function(e, r) {
                        for (var i, n = 0; n < t.length; n++) {
                            (i = t[n]) && "function" == typeof i.then ? i.then(e, r) : e(i);
                        }
                    });
                }, T.resolve = function(t) {
                    return t && "object" == _typeof(t) && t.constructor === this ? t : new this(function(e) {
                        e(t);
                    });
                }, T.reject = function(t) {
                    return new this(function(e, r) {
                        r(t);
                    });
                };
            }("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : e);
        }),
        n = (i.Promise, i.Polyfill),
        o = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    var h = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

            for (var e = {}, r = 0; r < 10; r++) {
                e["_" + String.fromCharCode(r)] = r;
            }

            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t];
                }).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                i[t] = t;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
        } catch (t) {
            return !1;
        }
    }() ? Object.assign : function(t, e) {
        for (var r, i, n = arguments, h = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t);
            }(t), u = 1; u < arguments.length; u++) {
            for (var l in r = Object(n[u])) {
                s.call(r, l) && (h[l] = r[l]);
            }

            if (o) {
                i = o(r);

                for (var c = 0; c < i.length; c++) {
                    a.call(r, i[c]) && (h[i[c]] = r[i[c]]);
                }
            }
        }

        return h;
    };
    window.Promise || (window.Promise = n), Object.assign || (Object.assign = h);
    var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    if (Date.now && Date.prototype.getTime || (Date.now = function() {
            return new Date().getTime();
        }), !u.performance || !u.performance.now) {
        var l = Date.now();
        u.performance || (u.performance = {}), u.performance.now = function() {
            return Date.now() - l;
        };
    }

    for (var c = Date.now(), d = ["ms", "moz", "webkit", "o"], p = 0; p < d.length && !u.requestAnimationFrame; ++p) {
        var f = d[p];
        u.requestAnimationFrame = u[f + "RequestAnimationFrame"], u.cancelAnimationFrame = u[f + "CancelAnimationFrame"] || u[f + "CancelRequestAnimationFrame"];
    }

    u.requestAnimationFrame || (u.requestAnimationFrame = function(t) {
        if ("function" != typeof t) throw new TypeError(t + "is not a function");
        var e = Date.now(),
            r = 16 + c - e;
        return r < 0 && (r = 0), c = e, setTimeout(function() {
            c = Date.now(), t(performance.now());
        }, r);
    }), u.cancelAnimationFrame || (u.cancelAnimationFrame = function(t) {
        return clearTimeout(t);
    }), Math.sign || (Math.sign = function(t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }), Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array);
    var v = /iPhone/i,
        m = /iPod/i,
        g = /iPad/i,
        y = /\bAndroid(?:.+)Mobile\b/i,
        _ = /Android/i,
        x = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        b = /Silk/i,
        E = /Windows Phone/i,
        T = /\bWindows(?:.+)ARM\b/i,
        w = /BlackBerry/i,
        S = /BB10/i,
        I = /Opera Mini/i,
        P = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        A = /Mobile(?:.+)Firefox\b/i;

    function O(t, e) {
        return t.test(e);
    }

    var D = function(t) {
        var e = (t = t || ("undefined" != typeof navigator ? navigator.userAgent : "")).split("[FBAN");
        void 0 !== e[1] && (t = e[0]), void 0 !== (e = t.split("Twitter"))[1] && (t = e[0]);
        var r = {
            apple: {
                phone: O(v, t) && !O(E, t),
                ipod: O(m, t),
                tablet: !O(v, t) && O(g, t) && !O(E, t),
                device: (O(v, t) || O(m, t) || O(g, t)) && !O(E, t)
            },
            amazon: {
                phone: O(x, t),
                tablet: !O(x, t) && O(b, t),
                device: O(x, t) || O(b, t)
            },
            android: {
                phone: !O(E, t) && O(x, t) || !O(E, t) && O(y, t),
                tablet: !O(E, t) && !O(x, t) && !O(y, t) && (O(b, t) || O(_, t)),
                device: !O(E, t) && (O(x, t) || O(b, t) || O(y, t) || O(_, t)) || O(/\bokhttp\b/i, t)
            },
            windows: {
                phone: O(E, t),
                tablet: O(T, t),
                device: O(E, t) || O(T, t)
            },
            other: {
                blackberry: O(w, t),
                blackberry10: O(S, t),
                opera: O(I, t),
                firefox: O(A, t),
                chrome: O(P, t),
                device: O(w, t) || O(S, t) || O(I, t) || O(A, t) || O(P, t)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
        return r.any = r.apple.device || r.android.device || r.windows.device || r.other.device, r.phone = r.apple.phone || r.android.phone || r.windows.phone, r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet, r;
    }();

    var M = {
            MIPMAP_TEXTURES: 1,
            ANISOTROPIC_LEVEL: 0,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            SPRITE_MAX_TEXTURES: function(t) {
                var e = !0;

                if (D.tablet || D.phone) {
                    if (e = !1, D.apple.device) {
                        var r = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                        r && parseInt(r[1], 10) >= 11 && (e = !0);
                    }

                    if (D.android.device) {
                        var i = navigator.userAgent.match(/Android\s([0-9.]*)/);
                        i && parseInt(i[1], 10) >= 7 && (e = !0);
                    }
                }

                return e ? t : 4;
            }(32),
            SPRITE_BATCH_SIZE: 4096,
            RENDER_OPTIONS: {
                view: null,
                antialias: !1,
                forceFXAA: !1,
                autoDensity: !1,
                transparent: !1,
                backgroundColor: 0,
                clearBeforeRender: !0,
                preserveDrawingBuffer: !1,
                width: 800,
                height: 600,
                legacy: !1
            },
            GC_MODE: 0,
            GC_MAX_IDLE: 3600,
            GC_MAX_CHECK_COUNT: 600,
            WRAP_MODE: 33071,
            SCALE_MODE: 1,
            PRECISION_VERTEX: "highp",
            PRECISION_FRAGMENT: D.apple.device ? "highp" : "mediump",
            CAN_UPLOAD_SAME_BUFFER: !D.apple.device,
            CREATE_IMAGE_BITMAP: !1,
            ROUND_PIXELS: !1
        },
        C = r(function(t) {
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function i() {}

            function n(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1;
            }

            function o(t, e, i, o, s) {
                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                var a = new n(i, o || t, s),
                    h = r ? r + e : e;
                return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t;
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new i() : delete t._events[e];
            }

            function a() {
                this._events = new i(), this._eventsCount = 0;
            }

            Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var t,
                    i,
                    n = [];
                if (0 === this._eventsCount) return n;

                for (i in t = this._events) {
                    e.call(t, i) && n.push(r ? i.slice(1) : i);
                }

                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
            }, a.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                if (!i) return [];
                if (i.fn) return [i.fn];

                for (var n = 0, o = i.length, s = new Array(o); n < o; n++) {
                    s[n] = i[n].fn;
                }

                return s;
            }, a.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0;
            }, a.prototype.emit = function(t, e, i, n, o, s) {
                var a = arguments,
                    h = r ? r + t : t;
                if (!this._events[h]) return !1;
                var u,
                    l,
                    c = this._events[h],
                    d = arguments.length;

                if (c.fn) {
                    switch (c.once && this.removeListener(t, c.fn, void 0, !0), d) {
                        case 1:
                            return c.fn.call(c.context), !0;

                        case 2:
                            return c.fn.call(c.context, e), !0;

                        case 3:
                            return c.fn.call(c.context, e, i), !0;

                        case 4:
                            return c.fn.call(c.context, e, i, n), !0;

                        case 5:
                            return c.fn.call(c.context, e, i, n, o), !0;

                        case 6:
                            return c.fn.call(c.context, e, i, n, o, s), !0;
                    }

                    for (l = 1, u = new Array(d - 1); l < d; l++) {
                        u[l - 1] = a[l];
                    }

                    c.fn.apply(c.context, u);
                } else {
                    var p,
                        f = c.length;

                    for (l = 0; l < f; l++) {
                        switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), d) {
                            case 1:
                                c[l].fn.call(c[l].context);
                                break;

                            case 2:
                                c[l].fn.call(c[l].context, e);
                                break;

                            case 3:
                                c[l].fn.call(c[l].context, e, i);
                                break;

                            case 4:
                                c[l].fn.call(c[l].context, e, i, n);
                                break;

                            default:
                                if (!u)
                                    for (p = 1, u = new Array(d - 1); p < d; p++) {
                                        u[p - 1] = a[p];
                                    }
                                c[l].fn.apply(c[l].context, u);
                        }
                    }
                }

                return !0;
            }, a.prototype.on = function(t, e, r) {
                return o(this, t, e, r, !1);
            }, a.prototype.once = function(t, e, r) {
                return o(this, t, e, r, !0);
            }, a.prototype.removeListener = function(t, e, i, n) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || n && !a.once || i && a.context !== i || s(this, o);
                else {
                    for (var h = 0, u = [], l = a.length; h < l; h++) {
                        (a[h].fn !== e || n && !a[h].once || i && a[h].context !== i) && u.push(a[h]);
                    }

                    u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o);
                }
                return this;
            }, a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i(), this._eventsCount = 0), this;
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
        }),
        R = N,
        L = N;

    function N(t, e, r) {
        r = r || 2;
        var i,
            n,
            o,
            s,
            a,
            h,
            u,
            l = e && e.length,
            c = l ? e[0] * r : t.length,
            d = F(t, 0, c, r, !0),
            p = [];
        if (!d || d.next === d.prev) return p;

        if (l && (d = function(t, e, r, i) {
                var n,
                    o,
                    s,
                    a,
                    h,
                    u = [];

                for (n = 0, o = e.length; n < o; n++) {
                    s = e[n] * i, a = n < o - 1 ? e[n + 1] * i : t.length, (h = F(t, s, a, i, !1)) === h.next && (h.steiner = !0), u.push(W(h));
                }

                for (u.sort(G), n = 0; n < u.length; n++) {
                    Y(u[n], r), r = B(r, r.next);
                }

                return r;
            }(t, e, d, r)), t.length > 80 * r) {
            i = o = t[0], n = s = t[1];

            for (var f = r; f < c; f += r) {
                (a = t[f]) < i && (i = a), (h = t[f + 1]) < n && (n = h), a > o && (o = a), h > s && (s = h);
            }

            u = 0 !== (u = Math.max(o - i, s - n)) ? 1 / u : 0;
        }

        return U(d, p, r, i, n, u), p;
    }

    function F(t, e, r, i, n) {
        var o, s;
        if (n === st(t, e, r, i) > 0)
            for (o = e; o < r; o += i) {
                s = it(o, t[o], t[o + 1], s);
            } else
                for (o = r - i; o >= e; o -= i) {
                    s = it(o, t[o], t[o + 1], s);
                }
        return s && J(s, s.next) && (nt(s), s = s.next), s;
    }

    function B(t, e) {
        if (!t) return t;
        e || (e = t);
        var r,
            i = t;

        do {
            if (r = !1, i.steiner || !J(i, i.next) && 0 !== Z(i.prev, i, i.next)) i = i.next;
            else {
                if (nt(i), (i = e = i.prev) === i.next) break;
                r = !0;
            }
        } while (r || i !== e);

        return e;
    }

    function U(t, e, r, i, n, o, s) {
        if (t) {
            !s && o && function(t, e, r, i) {
                var n = t;

                do {
                    null === n.z && (n.z = z(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next;
                } while (n !== t);

                n.prevZ.nextZ = null, n.prevZ = null,
                    function(t) {
                        var e,
                            r,
                            i,
                            n,
                            o,
                            s,
                            a,
                            h,
                            u = 1;

                        do {
                            for (r = t, t = null, o = null, s = 0; r;) {
                                for (s++, i = r, a = 0, e = 0; e < u && (a++, i = i.nextZ); e++) {;
                                }

                                for (h = u; a > 0 || h > 0 && i;) {
                                    0 !== a && (0 === h || !i || r.z <= i.z) ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                                }

                                r = i;
                            }

                            o.nextZ = null, u *= 2;
                        } while (s > 1);
                    }(n);
            }(t, i, n, o);

            for (var a, h, u = t; t.prev !== t.next;) {
                if (a = t.prev, h = t.next, o ? X(t, i, n, o) : k(t)) e.push(a.i / r), e.push(t.i / r), e.push(h.i / r), nt(t), t = h.next, u = h.next;
                else if ((t = h) === u) {
                    s ? 1 === s ? U(t = j(B(t), e, r), e, r, i, n, o, 2) : 2 === s && H(t, e, r, i, n, o) : U(B(t), e, r, i, n, o, 1);
                    break;
                }
            }
        }
    }

    function k(t) {
        var e = t.prev,
            r = t,
            i = t.next;
        if (Z(e, r, i) >= 0) return !1;

        for (var n = t.next.next; n !== t.prev;) {
            if (q(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && Z(n.prev, n, n.next) >= 0) return !1;
            n = n.next;
        }

        return !0;
    }

    function X(t, e, r, i) {
        var n = t.prev,
            o = t,
            s = t.next;
        if (Z(n, o, s) >= 0) return !1;

        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = z(a, h, e, r, i), d = z(u, l, e, r, i), p = t.prevZ, f = t.nextZ; p && p.z >= c && f && f.z <= d;) {
            if (p !== t.prev && p !== t.next && q(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && Z(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, f !== t.prev && f !== t.next && q(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && Z(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ;
        }

        for (; p && p.z >= c;) {
            if (p !== t.prev && p !== t.next && q(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && Z(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }

        for (; f && f.z <= d;) {
            if (f !== t.prev && f !== t.next && q(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && Z(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ;
        }

        return !0;
    }

    function j(t, e, r) {
        var i = t;

        do {
            var n = i.prev,
                o = i.next.next;
            !J(n, o) && Q(n, i, i.next, o) && et(n, o) && et(o, n) && (e.push(n.i / r), e.push(i.i / r), e.push(o.i / r), nt(i), nt(i.next), i = t = o), i = i.next;
        } while (i !== t);

        return B(i);
    }

    function H(t, e, r, i, n, o) {
        var s = t;

        do {
            for (var a = s.next.next; a !== s.prev;) {
                if (s.i !== a.i && K(s, a)) {
                    var h = rt(s, a);
                    return s = B(s, s.next), h = B(h, h.next), U(s, e, r, i, n, o), void U(h, e, r, i, n, o);
                }

                a = a.next;
            }

            s = s.next;
        } while (s !== t);
    }

    function G(t, e) {
        return t.x - e.x;
    }

    function Y(t, e) {
        if (e = function(t, e) {
                var r,
                    i = e,
                    n = t.x,
                    o = t.y,
                    s = -1 / 0;

                do {
                    if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                        var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);

                        if (a <= n && a > s) {
                            if (s = a, a === n) {
                                if (o === i.y) return i;
                                if (o === i.next.y) return i.next;
                            }

                            r = i.x < i.next.x ? i : i.next;
                        }
                    }

                    i = i.next;
                } while (i !== e);

                if (!r) return null;
                if (n === s) return r;
                var h,
                    u = r,
                    l = r.x,
                    c = r.y,
                    d = 1 / 0;
                i = r;

                do {
                    n >= i.x && i.x >= l && n !== i.x && q(o < c ? n : s, o, l, c, o < c ? s : n, o, i.x, i.y) && (h = Math.abs(o - i.y) / (n - i.x), et(i, t) && (h < d || h === d && (i.x > r.x || i.x === r.x && V(r, i))) && (r = i, d = h)), i = i.next;
                } while (i !== u);

                return r;
            }(t, e)) {
            var r = rt(e, t);
            B(e, e.next), B(r, r.next);
        }
    }

    function V(t, e) {
        return Z(t.prev, t, e.prev) < 0 && Z(e.next, t, t.next) < 0;
    }

    function z(t, e, r, i, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }

    function W(t) {
        var e = t,
            r = t;

        do {
            (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next;
        } while (e !== t);

        return r;
    }

    function q(t, e, r, i, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (n - s) * (i - a) >= 0;
    }

    function K(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
            var r = t;

            do {
                if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && Q(r, r.next, t, e)) return !0;
                r = r.next;
            } while (r !== t);

            return !1;
        }(t, e) && (et(t, e) && et(e, t) && function(t, e) {
            var r = t,
                i = !1,
                n = (t.x + e.x) / 2,
                o = (t.y + e.y) / 2;

            do {
                r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next;
            } while (r !== t);

            return i;
        }(t, e) && (Z(t.prev, t, e.prev) || Z(t, e.prev, e)) || J(t, e) && Z(t.prev, t, t.next) > 0 && Z(e.prev, e, e.next) > 0);
    }

    function Z(t, e, r) {
        return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
    }

    function J(t, e) {
        return t.x === e.x && t.y === e.y;
    }

    function Q(t, e, r, i) {
        var n = tt(Z(t, e, r)),
            o = tt(Z(t, e, i)),
            s = tt(Z(r, i, t)),
            a = tt(Z(r, i, e));
        return n !== o && s !== a || !(0 !== n || !$(t, r, e)) || !(0 !== o || !$(t, i, e)) || !(0 !== s || !$(r, t, i)) || !(0 !== a || !$(r, e, i));
    }

    function $(t, e, r) {
        return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y);
    }

    function tt(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }

    function et(t, e) {
        return Z(t.prev, t, t.next) < 0 ? Z(t, e, t.next) >= 0 && Z(t, t.prev, e) >= 0 : Z(t, e, t.prev) < 0 || Z(t, t.next, e) < 0;
    }

    function rt(t, e) {
        var r = new ot(t.i, t.x, t.y),
            i = new ot(e.i, e.x, e.y),
            n = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i;
    }

    function it(t, e, r, i) {
        var n = new ot(t, e, r);
        return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n;
    }

    function nt(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }

    function ot(t, e, r) {
        this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }

    function st(t, e, r, i) {
        for (var n = 0, o = e, s = r - i; o < r; o += i) {
            n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        }

        return n;
    }

    N.deviation = function(t, e, r, i) {
        var n = e && e.length,
            o = n ? e[0] * r : t.length,
            s = Math.abs(st(t, 0, o, r));
        if (n)
            for (var a = 0, h = e.length; a < h; a++) {
                var u = e[a] * r,
                    l = a < h - 1 ? e[a + 1] * r : t.length;
                s -= Math.abs(st(t, u, l, r));
            }
        var c = 0;

        for (a = 0; a < i.length; a += 3) {
            var d = i[a] * r,
                p = i[a + 1] * r,
                f = i[a + 2] * r;
            c += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]));
        }

        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
    }, N.flatten = function(t) {
        for (var e = t[0][0].length, r = {
                vertices: [],
                holes: [],
                dimensions: e
            }, i = 0, n = 0; n < t.length; n++) {
            for (var o = 0; o < t[n].length; o++) {
                for (var s = 0; s < e; s++) {
                    r.vertices.push(t[n][o][s]);
                }
            }

            n > 0 && (i += t[n - 1].length, r.holes.push(i));
        }

        return r;
    }, R["default"] = L;
    var at = r(function(t, r) {
            ! function(i) {
                var n = r && !r.nodeType && r,
                    o = t && !t.nodeType && t,
                    s = "object" == _typeof(e) && e;
                s.global !== s && s.window !== s && s.self !== s || (i = s);
                var a,
                    h,
                    u = 2147483647,
                    l = 36,
                    c = 1,
                    d = 26,
                    p = 38,
                    f = 700,
                    v = 72,
                    m = 128,
                    g = "-",
                    y = /^xn--/,
                    _ = /[^\x20-\x7E]/,
                    x = /[\x2E\u3002\uFF0E\uFF61]/g,
                    b = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    E = l - c,
                    T = Math.floor,
                    w = String.fromCharCode;

                function S(t) {
                    throw RangeError(b[t]);
                }

                function I(t, e) {
                    for (var r = t.length, i = []; r--;) {
                        i[r] = e(t[r]);
                    }

                    return i;
                }

                function P(t, e) {
                    var r = t.split("@"),
                        i = "";
                    return r.length > 1 && (i = r[0] + "@", t = r[1]), i + I((t = t.replace(x, ".")).split("."), e).join(".");
                }

                function A(t) {
                    for (var e, r, i = [], n = 0, o = t.length; n < o;) {
                        (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--) : i.push(e);
                    }

                    return i;
                }

                function O(t) {
                    return I(t, function(t) {
                        var e = "";
                        return t > 65535 && (e += w((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += w(t);
                    }).join("");
                }

                function D(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                }

                function M(t, e, r) {
                    var i = 0;

                    for (t = r ? T(t / f) : t >> 1, t += T(t / e); t > E * d >> 1; i += l) {
                        t = T(t / E);
                    }

                    return T(i + (E + 1) * t / (t + p));
                }

                function C(t) {
                    var e,
                        r,
                        i,
                        n,
                        o,
                        s,
                        a,
                        h,
                        p,
                        f,
                        y,
                        _ = [],
                        x = t.length,
                        b = 0,
                        E = m,
                        w = v;

                    for ((r = t.lastIndexOf(g)) < 0 && (r = 0), i = 0; i < r; ++i) {
                        t.charCodeAt(i) >= 128 && S("not-basic"), _.push(t.charCodeAt(i));
                    }

                    for (n = r > 0 ? r + 1 : 0; n < x;) {
                        for (o = b, s = 1, a = l; n >= x && S("invalid-input"), ((h = (y = t.charCodeAt(n++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : l) >= l || h > T((u - b) / s)) && S("overflow"), b += h * s, !(h < (p = a <= w ? c : a >= w + d ? d : a - w)); a += l) {
                            s > T(u / (f = l - p)) && S("overflow"), s *= f;
                        }

                        w = M(b - o, e = _.length + 1, 0 == o), T(b / e) > u - E && S("overflow"), E += T(b / e), b %= e, _.splice(b++, 0, E);
                    }

                    return O(_);
                }

                function R(t) {
                    var e,
                        r,
                        i,
                        n,
                        o,
                        s,
                        a,
                        h,
                        p,
                        f,
                        y,
                        _,
                        x,
                        b,
                        E,
                        I = [];

                    for (_ = (t = A(t)).length, e = m, r = 0, o = v, s = 0; s < _; ++s) {
                        (y = t[s]) < 128 && I.push(w(y));
                    }

                    for (i = n = I.length, n && I.push(g); i < _;) {
                        for (a = u, s = 0; s < _; ++s) {
                            (y = t[s]) >= e && y < a && (a = y);
                        }

                        for (a - e > T((u - r) / (x = i + 1)) && S("overflow"), r += (a - e) * x, e = a, s = 0; s < _; ++s) {
                            if ((y = t[s]) < e && ++r > u && S("overflow"), y == e) {
                                for (h = r, p = l; !(h < (f = p <= o ? c : p >= o + d ? d : p - o)); p += l) {
                                    E = h - f, b = l - f, I.push(w(D(f + E % b, 0))), h = T(E / b);
                                }

                                I.push(w(D(h, 0))), o = M(r, x, i == n), r = 0, ++i;
                            }
                        }

                        ++r, ++e;
                    }

                    return I.join("");
                }

                if (a = {
                        version: "1.3.2",
                        ucs2: {
                            decode: A,
                            encode: O
                        },
                        decode: C,
                        encode: R,
                        toASCII: function toASCII(t) {
                            return P(t, function(t) {
                                return _.test(t) ? "xn--" + R(t) : t;
                            });
                        },
                        toUnicode: function toUnicode(t) {
                            return P(t, function(t) {
                                return y.test(t) ? C(t.slice(4).toLowerCase()) : t;
                            });
                        }
                    }, n && o) {
                    if (t.exports == n) o.exports = a;
                    else
                        for (h in a) {
                            a.hasOwnProperty(h) && (n[h] = a[h]);
                        }
                } else i.punycode = a;
            }(e);
        }),
        ht = {
            isString: function isString(t) {
                return "string" == typeof t;
            },
            isObject: function isObject(t) {
                return "object" == _typeof(t) && null !== t;
            },
            isNull: function isNull(t) {
                return null === t;
            },
            isNullOrUndefined: function isNullOrUndefined(t) {
                return null == t;
            }
        };
    ht.isString, ht.isObject, ht.isNull, ht.isNullOrUndefined;

    function ut(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }

    var lt = function lt(t, e, r, i) {
            e = e || "&", r = r || "=";
            var n = {};
            if ("string" != typeof t || 0 === t.length) return n;
            var o = /\+/g;
            t = t.split(e);
            var s = 1e3;
            i && "number" == typeof i.maxKeys && (s = i.maxKeys);
            var a = t.length;
            s > 0 && a > s && (a = s);

            for (var h = 0; h < a; ++h) {
                var u,
                    l,
                    c,
                    d,
                    p = t[h].replace(o, "%20"),
                    f = p.indexOf(r);
                f >= 0 ? (u = p.substr(0, f), l = p.substr(f + 1)) : (u = p, l = ""), c = decodeURIComponent(u), d = decodeURIComponent(l), ut(n, c) ? Array.isArray(n[c]) ? n[c].push(d) : n[c] = [n[c], d] : n[c] = d;
            }

            return n;
        },
        ct = function ct(t) {
            switch (_typeof(t)) {
                case "string":
                    return t;

                case "boolean":
                    return t ? "true" : "false";

                case "number":
                    return isFinite(t) ? t : "";

                default:
                    return "";
            }
        },
        dt = function dt(t, e, r, i) {
            return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == _typeof(t) ? Object.keys(t).map(function(i) {
                var n = encodeURIComponent(ct(i)) + r;
                return Array.isArray(t[i]) ? t[i].map(function(t) {
                    return n + encodeURIComponent(ct(t));
                }).join(e) : n + encodeURIComponent(ct(t[i]));
            }).join(e) : i ? encodeURIComponent(ct(i)) + r + encodeURIComponent(ct(t)) : "";
        },
        pt = r(function(t, e) {
            e.decode = e.parse = lt, e.encode = e.stringify = dt;
        }),
        ft = (pt.decode, pt.parse, pt.encode, pt.stringify, Ct),
        vt = function vt(t, e) {
            return Ct(t, !1, !0).resolve(e);
        },
        mt = function mt(t, e) {
            if (!t) return e;
            return Ct(t, !1, !0).resolveObject(e);
        },
        gt = function gt(t) {
            ht.isString(t) && (t = Ct(t));
            if (!(t instanceof _t)) return _t.prototype.format.call(t);
            return t.format();
        },
        yt = _t;

    function _t() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }

    var xt = /^([a-z0-9.+-]+:)/i,
        bt = /:[0-9]*$/,
        Et = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        Tt = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        wt = ["'"].concat(Tt),
        St = ["%", "/", "?", ";", "#"].concat(wt),
        It = ["/", "?", "#"],
        Pt = /^[+a-z0-9A-Z_-]{0,63}$/,
        At = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        Ot = {
            javascript: !0,
            "javascript:": !0
        },
        Dt = {
            javascript: !0,
            "javascript:": !0
        },
        Mt = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function Ct(t, e, r) {
        if (t && ht.isObject(t) && t instanceof _t) return t;
        var i = new _t();
        return i.parse(t, e, r), i;
    }

    _t.prototype.parse = function(t, e, r) {
        if (!ht.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(t));
        var i = t.indexOf("?"),
            n = -1 !== i && i < t.indexOf("#") ? "?" : "#",
            o = t.split(n);
        o[0] = o[0].replace(/\\/g, "/");
        var s = t = o.join(n);

        if (s = s.trim(), !r && 1 === t.split("#").length) {
            var a = Et.exec(s);
            if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? pt.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
        }

        var h = xt.exec(s);

        if (h) {
            var u = (h = h[0]).toLowerCase();
            this.protocol = u, s = s.substr(h.length);
        }

        if (r || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var l = "//" === s.substr(0, 2);
            !l || h && Dt[h] || (s = s.substr(2), this.slashes = !0);
        }

        if (!Dt[h] && (l || h && !Mt[h])) {
            for (var c, d, p = -1, f = 0; f < It.length; f++) {
                -1 !== (v = s.indexOf(It[f])) && (-1 === p || v < p) && (p = v);
            }

            -
            1 !== (d = -1 === p ? s.lastIndexOf("@") : s.lastIndexOf("@", p)) && (c = s.slice(0, d), s = s.slice(d + 1), this.auth = decodeURIComponent(c)), p = -1;

            for (f = 0; f < St.length; f++) {
                var v; -
                1 !== (v = s.indexOf(St[f])) && (-1 === p || v < p) && (p = v);
            }

            -
            1 === p && (p = s.length), this.host = s.slice(0, p), s = s.slice(p), this.parseHost(), this.hostname = this.hostname || "";
            var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!m)
                for (var g = this.hostname.split(/\./), y = (f = 0, g.length); f < y; f++) {
                    var _ = g[f];

                    if (_ && !_.match(Pt)) {
                        for (var x = "", b = 0, E = _.length; b < E; b++) {
                            _.charCodeAt(b) > 127 ? x += "x" : x += _[b];
                        }

                        if (!x.match(Pt)) {
                            var T = g.slice(0, f),
                                w = g.slice(f + 1),
                                S = _.match(At);

                            S && (T.push(S[1]), w.unshift(S[2])), w.length && (s = "/" + w.join(".") + s), this.hostname = T.join(".");
                            break;
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), m || (this.hostname = at.toASCII(this.hostname));
            var I = this.port ? ":" + this.port : "",
                P = this.hostname || "";
            this.host = P + I, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
        }

        if (!Ot[u])
            for (f = 0, y = wt.length; f < y; f++) {
                var A = wt[f];

                if (-1 !== s.indexOf(A)) {
                    var O = encodeURIComponent(A);
                    O === A && (O = escape(A)), s = s.split(A).join(O);
                }
            }
        var D = s.indexOf("#"); -
        1 !== D && (this.hash = s.substr(D), s = s.slice(0, D));
        var M = s.indexOf("?");

        if (-1 !== M ? (this.search = s.substr(M), this.query = s.substr(M + 1), e && (this.query = pt.parse(this.query)), s = s.slice(0, M)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), Mt[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            I = this.pathname || "";
            var C = this.search || "";
            this.path = I + C;
        }

        return this.href = this.format(), this;
    }, _t.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            r = this.pathname || "",
            i = this.hash || "",
            n = !1,
            o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && ht.isObject(this.query) && Object.keys(this.query).length && (o = pt.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || Mt[e]) && !1 !== n ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), e + n + (r = r.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t);
        })) + (s = s.replace("#", "%23")) + i;
    }, _t.prototype.resolve = function(t) {
        return this.resolveObject(Ct(t, !1, !0)).format();
    }, _t.prototype.resolveObject = function(t) {
        if (ht.isString(t)) {
            var e = new _t();
            e.parse(t, !1, !0), t = e;
        }

        for (var r = new _t(), i = Object.keys(this), n = 0; n < i.length; n++) {
            var o = i[n];
            r[o] = this[o];
        }

        if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;

        if (t.slashes && !t.protocol) {
            for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                var h = s[a];
                "protocol" !== h && (r[h] = t[h]);
            }

            return Mt[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
        }

        if (t.protocol && t.protocol !== r.protocol) {
            if (!Mt[t.protocol]) {
                for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                    var c = u[l];
                    r[c] = t[c];
                }

                return r.href = r.format(), r;
            }

            if (r.protocol = t.protocol, t.host || Dt[t.protocol]) r.pathname = t.pathname;
            else {
                for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift());) {;
                }

                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/");
            }

            if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                var p = r.pathname || "",
                    f = r.search || "";
                r.path = p + f;
            }

            return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
        }

        var v = r.pathname && "/" === r.pathname.charAt(0),
            m = t.host || t.pathname && "/" === t.pathname.charAt(0),
            g = m || v || r.host && t.pathname,
            y = g,
            _ = r.pathname && r.pathname.split("/") || [],
            x = (d = t.pathname && t.pathname.split("/") || [], r.protocol && !Mt[r.protocol]);

        if (x && (r.hostname = "", r.port = null, r.host && ("" === _[0] ? _[0] = r.host : _.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), g = g && ("" === d[0] || "" === _[0])), m) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, _ = d;
        else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), r.search = t.search, r.query = t.query;
        else if (!ht.isNullOrUndefined(t.search)) {
            if (x) r.hostname = r.host = _.shift(), (S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = S.shift(), r.host = r.hostname = S.shift());
            return r.search = t.search, r.query = t.query, ht.isNull(r.pathname) && ht.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
        }
        if (!_.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;

        for (var b = _.slice(-1)[0], E = (r.host || t.host || _.length > 1) && ("." === b || ".." === b) || "" === b, T = 0, w = _.length; w >= 0; w--) {
            "." === (b = _[w]) ? _.splice(w, 1): ".." === b ? (_.splice(w, 1), T++) : T && (_.splice(w, 1), T--);
        }

        if (!g && !y)
            for (; T--; T) {
                _.unshift("..");
            }!g || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), E && "/" !== _.join("/").substr(-1) && _.push("");

        var S,
            I = "" === _[0] || _[0] && "/" === _[0].charAt(0);

        x && (r.hostname = r.host = I ? "" : _.length ? _.shift() : "", (S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = S.shift(), r.host = r.hostname = S.shift()));
        return (g = g || r.host && _.length) && !I && _.unshift(""), _.length ? r.pathname = _.join("/") : (r.pathname = null, r.path = null), ht.isNull(r.pathname) && ht.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
    }, _t.prototype.parseHost = function() {
        var t = this.host,
            e = bt.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
    var Rt,
        Lt,
        Nt,
        Ft,
        Bt,
        Ut,
        kt,
        Xt,
        jt,
        Ht,
        Gt,
        Yt,
        Vt,
        zt,
        Wt = {
            parse: ft,
            resolve: vt,
            resolveObject: mt,
            format: gt,
            Url: yt
        };
    (Rt = t.ENV || (t.ENV = {}))[Rt.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", Rt[Rt.WEBGL = 1] = "WEBGL", Rt[Rt.WEBGL2 = 2] = "WEBGL2", (Lt = t.RENDERER_TYPE || (t.RENDERER_TYPE = {}))[Lt.UNKNOWN = 0] = "UNKNOWN", Lt[Lt.WEBGL = 1] = "WEBGL", Lt[Lt.CANVAS = 2] = "CANVAS", (Nt = t.BLEND_MODES || (t.BLEND_MODES = {}))[Nt.NORMAL = 0] = "NORMAL", Nt[Nt.ADD = 1] = "ADD", Nt[Nt.MULTIPLY = 2] = "MULTIPLY", Nt[Nt.SCREEN = 3] = "SCREEN", Nt[Nt.OVERLAY = 4] = "OVERLAY", Nt[Nt.DARKEN = 5] = "DARKEN", Nt[Nt.LIGHTEN = 6] = "LIGHTEN", Nt[Nt.COLOR_DODGE = 7] = "COLOR_DODGE", Nt[Nt.COLOR_BURN = 8] = "COLOR_BURN", Nt[Nt.HARD_LIGHT = 9] = "HARD_LIGHT", Nt[Nt.SOFT_LIGHT = 10] = "SOFT_LIGHT", Nt[Nt.DIFFERENCE = 11] = "DIFFERENCE", Nt[Nt.EXCLUSION = 12] = "EXCLUSION", Nt[Nt.HUE = 13] = "HUE", Nt[Nt.SATURATION = 14] = "SATURATION", Nt[Nt.COLOR = 15] = "COLOR", Nt[Nt.LUMINOSITY = 16] = "LUMINOSITY", Nt[Nt.NORMAL_NPM = 17] = "NORMAL_NPM", Nt[Nt.ADD_NPM = 18] = "ADD_NPM", Nt[Nt.SCREEN_NPM = 19] = "SCREEN_NPM", Nt[Nt.NONE = 20] = "NONE", Nt[Nt.SRC_OVER = 0] = "SRC_OVER", Nt[Nt.SRC_IN = 21] = "SRC_IN", Nt[Nt.SRC_OUT = 22] = "SRC_OUT", Nt[Nt.SRC_ATOP = 23] = "SRC_ATOP", Nt[Nt.DST_OVER = 24] = "DST_OVER", Nt[Nt.DST_IN = 25] = "DST_IN", Nt[Nt.DST_OUT = 26] = "DST_OUT", Nt[Nt.DST_ATOP = 27] = "DST_ATOP", Nt[Nt.ERASE = 26] = "ERASE", Nt[Nt.SUBTRACT = 28] = "SUBTRACT", Nt[Nt.XOR = 29] = "XOR", (Ft = t.DRAW_MODES || (t.DRAW_MODES = {}))[Ft.POINTS = 0] = "POINTS", Ft[Ft.LINES = 1] = "LINES", Ft[Ft.LINE_LOOP = 2] = "LINE_LOOP", Ft[Ft.LINE_STRIP = 3] = "LINE_STRIP", Ft[Ft.TRIANGLES = 4] = "TRIANGLES", Ft[Ft.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", Ft[Ft.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", (Bt = t.FORMATS || (t.FORMATS = {}))[Bt.RGBA = 6408] = "RGBA", Bt[Bt.RGB = 6407] = "RGB", Bt[Bt.ALPHA = 6406] = "ALPHA", Bt[Bt.LUMINANCE = 6409] = "LUMINANCE", Bt[Bt.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", Bt[Bt.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", Bt[Bt.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", (Ut = t.TARGETS || (t.TARGETS = {}))[Ut.TEXTURE_2D = 3553] = "TEXTURE_2D", Ut[Ut.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", Ut[Ut.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", Ut[Ut.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", Ut[Ut.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", Ut[Ut.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", Ut[Ut.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", Ut[Ut.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", Ut[Ut.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", (kt = t.TYPES || (t.TYPES = {}))[kt.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", kt[kt.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", kt[kt.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", kt[kt.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", kt[kt.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", kt[kt.FLOAT = 5126] = "FLOAT", kt[kt.HALF_FLOAT = 36193] = "HALF_FLOAT", (Xt = t.SCALE_MODES || (t.SCALE_MODES = {}))[Xt.NEAREST = 0] = "NEAREST", Xt[Xt.LINEAR = 1] = "LINEAR", (jt = t.WRAP_MODES || (t.WRAP_MODES = {}))[jt.CLAMP = 33071] = "CLAMP", jt[jt.REPEAT = 10497] = "REPEAT", jt[jt.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", (Ht = t.MIPMAP_MODES || (t.MIPMAP_MODES = {}))[Ht.OFF = 0] = "OFF", Ht[Ht.POW2 = 1] = "POW2", Ht[Ht.ON = 2] = "ON", (Gt = t.ALPHA_MODES || (t.ALPHA_MODES = {}))[Gt.NPM = 0] = "NPM", Gt[Gt.UNPACK = 1] = "UNPACK", Gt[Gt.PMA = 2] = "PMA", Gt[Gt.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", Gt[Gt.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", Gt[Gt.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", (Yt = t.GC_MODES || (t.GC_MODES = {}))[Yt.AUTO = 0] = "AUTO", Yt[Yt.MANUAL = 1] = "MANUAL", (Vt = t.PRECISION || (t.PRECISION = {})).LOW = "lowp", Vt.MEDIUM = "mediump", Vt.HIGH = "highp", (zt = t.MASK_TYPES || (t.MASK_TYPES = {}))[zt.NONE = 0] = "NONE", zt[zt.SCISSOR = 1] = "SCISSOR", zt[zt.STENCIL = 2] = "STENCIL", zt[zt.SPRITE = 3] = "SPRITE", M.RETINA_PREFIX = /@([0-9\.]+)x/, M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0;
    var qt,
        Kt = !1,
        Zt = "5.2.1";

    function Jt(t) {
        var e;

        if (!Kt) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var r = ["\n %c %c %c PixiJS " + Zt + " - âœ° " + t + " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                (e = window.console).log.apply(e, r);
            } else window.console && window.console.log("PixiJS " + Zt + " - " + t + " - http://www.pixijs.com/");

            Kt = !0;
        }
    }

    function Qt() {
        return void 0 === qt && (qt = function() {
            var t = {
                stencil: !0,
                failIfMajorPerformanceCaveat: M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
            };

            try {
                if (!window.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                    r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                    i = !(!r || !r.getContextAttributes().stencil);

                if (r) {
                    var n = r.getExtension("WEBGL_lose_context");
                    n && n.loseContext();
                }

                return r = null, i;
            } catch (t) {
                return !1;
            }
        }()), qt;
    }

    function $t(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e;
    }

    function te(t) {
        var e = t.toString(16);
        return "#" + (e = "000000".substr(0, 6 - e.length) + e);
    }

    function ee(t) {
        return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16);
    }

    var re = function() {
        for (var e = [], r = [], i = 0; i < 32; i++) {
            e[i] = i, r[i] = i;
        }

        e[t.BLEND_MODES.NORMAL_NPM] = t.BLEND_MODES.NORMAL, e[t.BLEND_MODES.ADD_NPM] = t.BLEND_MODES.ADD, e[t.BLEND_MODES.SCREEN_NPM] = t.BLEND_MODES.SCREEN, r[t.BLEND_MODES.NORMAL] = t.BLEND_MODES.NORMAL_NPM, r[t.BLEND_MODES.ADD] = t.BLEND_MODES.ADD_NPM, r[t.BLEND_MODES.SCREEN] = t.BLEND_MODES.SCREEN_NPM;
        var n = [];
        return n.push(r), n.push(e), n;
    }();

    function ie(t, e) {
        return re[e ? 1 : 0][t];
    }

    function ne(t, e, r, i) {
        return r = r || new Float32Array(4), i || void 0 === i ? (r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]), r[3] = e, r;
    }

    function oe(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var r = t >> 16 & 255,
            i = t >> 8 & 255,
            n = 255 & t;
        return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n = n * e + .5 | 0);
    }

    function se(t, e, r, i) {
        return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (i || void 0 === i) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r;
    }

    function ae(t, e) {
        void 0 === e && (e = null);
        var r = 6 * t;
        if ((e = e || new Uint16Array(r)).length !== r) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + r);

        for (var i = 0, n = 0; i < r; i += 6, n += 4) {
            e[i + 0] = n + 0, e[i + 1] = n + 1, e[i + 2] = n + 2, e[i + 3] = n + 0, e[i + 4] = n + 2, e[i + 5] = n + 3;
        }

        return e;
    }

    function he(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";

        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";

        return null;
    }

    var ue = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    };

    function le(t) {
        return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1;
    }

    function ce(t) {
        return !(t & t - 1 || !t);
    }

    function de(t) {
        var e = (t > 65535 ? 1 : 0) << 4,
            r = ((t >>>= e) > 255 ? 1 : 0) << 3;
        return e |= r, e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2, (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | (t >>>= r) >> 1;
    }

    function pe(t, e, r) {
        var i,
            n = t.length;

        if (!(e >= n || 0 === r)) {
            var o = n - (r = e + r > n ? n - e : r);

            for (i = e; i < o; ++i) {
                t[i] = t[i + r];
            }

            t.length = o;
        }
    }

    function fe(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1;
    }

    var ve = 0;

    function me() {
        return ++ve;
    }

    var ge = {};

    function ye(t, e, r) {
        if (void 0 === r && (r = 3), !ge[e]) {
            var i = new Error().stack;
            void 0 === i ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (i = i.split("\n").splice(r).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(i))), ge[e] = !0;
        }
    }

    var _e = {},
        xe = Object.create(null),
        be = Object.create(null);

    var Ee = function() {
        function t(t, e, r) {
            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || M.RESOLUTION, this.resize(t, e);
        }

        return t.prototype.clear = function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }, t.prototype.resize = function(t, e) {
            this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution;
        }, t.prototype.destroy = function() {
            this.context = null, this.canvas = null;
        }, Object.defineProperty(t.prototype, "width", {
            get: function get() {
                return this.canvas.width;
            },
            set: function set(t) {
                this.canvas.width = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "height", {
            get: function get() {
                return this.canvas.height;
            },
            set: function set(t) {
                this.canvas.height = t;
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }();

    function Te(t) {
        var e,
            r,
            i,
            n = t.width,
            o = t.height,
            s = t.getContext("2d"),
            a = s.getImageData(0, 0, n, o).data,
            h = a.length,
            u = {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            l = null;

        for (e = 0; e < h; e += 4) {
            0 !== a[e + 3] && (r = e / 4 % n, i = ~~(e / 4 / n), null === u.top && (u.top = i), null === u.left ? u.left = r : r < u.left && (u.left = r), null === u.right ? u.right = r + 1 : u.right < r && (u.right = r + 1), null === u.bottom ? u.bottom = i : u.bottom < i && (u.bottom = i));
        }

        return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
            height: o,
            width: n,
            data: l
        };
    }

    var we,
        Se = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

    function Ie(t, e) {
        if (void 0 === e && (e = window.location), 0 === t.indexOf("data:")) return "";
        e = e || window.location, we || (we = document.createElement("a")), we.href = t;
        var r = ft(we.href),
            i = !r.port && "" === e.port || r.port === e.port;
        return r.hostname === e.hostname && i && r.protocol === e.protocol ? "" : "anonymous";
    }

    function Pe(t, e) {
        var r = M.RETINA_PREFIX.exec(t);
        return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
    }

    var Ae,
        Oe = {
            BaseTextureCache: be,
            CanvasRenderTarget: Ee,
            DATA_URI: Se,
            ProgramCache: _e,
            TextureCache: xe,
            clearTextureCache: function clearTextureCache() {
                var t;

                for (t in xe) {
                    delete xe[t];
                }

                for (t in be) {
                    delete be[t];
                }
            },
            correctBlendMode: ie,
            createIndicesForQuads: ae,
            decomposeDataUri: function decomposeDataUri(t) {
                var e = Se.exec(t);
                if (e) return {
                    mediaType: e[1] ? e[1].toLowerCase() : void 0,
                    subType: e[2] ? e[2].toLowerCase() : void 0,
                    charset: e[3] ? e[3].toLowerCase() : void 0,
                    encoding: e[4] ? e[4].toLowerCase() : void 0,
                    data: e[5]
                };
            },
            deprecation: ye,
            destroyTextureCache: function destroyTextureCache() {
                var t;

                for (t in xe) {
                    xe[t].destroy();
                }

                for (t in be) {
                    be[t].destroy();
                }
            },
            determineCrossOrigin: Ie,
            getBufferType: he,
            getResolutionOfUrl: Pe,
            hex2rgb: $t,
            hex2string: te,
            interleaveTypedArrays: function interleaveTypedArrays(t, e) {
                for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++) {
                    i += e[o], r += t[o].length;
                }

                var s = new ArrayBuffer(4 * r),
                    a = null,
                    h = 0;

                for (o = 0; o < t.length; o++) {
                    var u = e[o],
                        l = t[o],
                        c = he(l);
                    n[c] || (n[c] = new ue[c](s)), a = n[c];

                    for (var d = 0; d < l.length; d++) {
                        a[(d / u | 0) * i + h + d % u] = l[d];
                    }

                    h += u;
                }

                return new Float32Array(s);
            },
            isPow2: ce,
            isWebGLSupported: Qt,
            log2: de,
            nextPow2: le,
            premultiplyBlendMode: re,
            premultiplyRgba: ne,
            premultiplyTint: oe,
            premultiplyTintToRgba: se,
            removeItems: pe,
            rgb2hex: function rgb2hex(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0);
            },
            sayHello: Jt,
            sign: fe,
            skipHello: function skipHello() {
                Kt = !0;
            },
            string2hex: ee,
            trimCanvas: Te,
            uid: me,
            isMobile: D,
            EventEmitter: C,
            earcut: R,
            url: Wt
        },
        De = function() {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
            }

            return t.prototype.clone = function() {
                return new t(this.x, this.y);
            }, t.prototype.copyFrom = function(t) {
                return this.set(t.x, t.y), this;
            }, t.prototype.copyTo = function(t) {
                return t.set(this.x, this.y), t;
            }, t.prototype.equals = function(t) {
                return t.x === this.x && t.y === this.y;
            }, t.prototype.set = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e, this;
            }, t;
        }(),
        Me = function() {
            function t(t, e, r, i) {
                void 0 === r && (r = 0), void 0 === i && (i = 0), this._x = r, this._y = i, this.cb = t, this.scope = e;
            }

            return t.prototype.clone = function(e, r) {
                return void 0 === e && (e = this.cb), void 0 === r && (r = this.scope), new t(e, r, this._x, this._y);
            }, t.prototype.set = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this;
            }, t.prototype.copyFrom = function(t) {
                return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this;
            }, t.prototype.copyTo = function(t) {
                return t.set(this._x, this._y), t;
            }, t.prototype.equals = function(t) {
                return t.x === this._x && t.y === this._y;
            }, Object.defineProperty(t.prototype, "x", {
                get: function get() {
                    return this._x;
                },
                set: function set(t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope));
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "y", {
                get: function get() {
                    return this._y;
                },
                set: function set(t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope));
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }(),
        Ce = 2 * Math.PI,
        Re = 180 / Math.PI,
        Le = Math.PI / 180;

    (Ae = t.SHAPES || (t.SHAPES = {}))[Ae.POLY = 0] = "POLY", Ae[Ae.RECT = 1] = "RECT", Ae[Ae.CIRC = 2] = "CIRC", Ae[Ae.ELIP = 3] = "ELIP", Ae[Ae.RREC = 4] = "RREC";

    var Ne = function() {
            function t(t, e, r, i, n, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o;
            }

            return t.prototype.fromArray = function(t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
            }, t.prototype.set = function(t, e, r, i, n, o) {
                return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this;
            }, t.prototype.toArray = function(t, e) {
                this.array || (this.array = new Float32Array(9));
                var r = e || this.array;
                return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r;
            }, t.prototype.apply = function(t, e) {
                e = e || new De();
                var r = t.x,
                    i = t.y;
                return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e;
            }, t.prototype.applyInverse = function(t, e) {
                e = e || new De();
                var r = 1 / (this.a * this.d + this.c * -this.b),
                    i = t.x,
                    n = t.y;
                return e.x = this.d * r * i + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * n + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e;
            }, t.prototype.translate = function(t, e) {
                return this.tx += t, this.ty += e, this;
            }, t.prototype.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
            }, t.prototype.rotate = function(t) {
                var e = Math.cos(t),
                    r = Math.sin(t),
                    i = this.a,
                    n = this.c,
                    o = this.tx;
                return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this;
            }, t.prototype.append = function(t) {
                var e = this.a,
                    r = this.b,
                    i = this.c,
                    n = this.d;
                return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this;
            }, t.prototype.setTransform = function(t, e, r, i, n, o, s, a, h) {
                return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + i * this.c), this.ty = e - (r * this.b + i * this.d), this;
            }, t.prototype.prepend = function(t) {
                var e = this.tx;

                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var r = this.a,
                        i = this.c;
                    this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d;
                }

                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
            }, t.prototype.decompose = function(t) {
                var e = this.a,
                    r = this.b,
                    i = this.c,
                    n = this.d,
                    o = -Math.atan2(-i, n),
                    s = Math.atan2(r, e),
                    a = Math.abs(o + s);
                return a < 1e-5 || Math.abs(Ce - a) < 1e-5 ? (t.rotation = s, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx, t.position.y = this.ty, t;
            }, t.prototype.invert = function() {
                var t = this.a,
                    e = this.b,
                    r = this.c,
                    i = this.d,
                    n = this.tx,
                    o = t * i - e * r;
                return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this;
            }, t.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
            }, t.prototype.clone = function() {
                var e = new t();
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
            }, t.prototype.copyTo = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
            }, t.prototype.copyFrom = function(t) {
                return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
            }, Object.defineProperty(t, "IDENTITY", {
                get: function get() {
                    return new t();
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "TEMP_MATRIX", {
                get: function get() {
                    return new t();
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }(),
        Fe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        Be = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        Ue = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        ke = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        Xe = [],
        je = [],
        He = Math.sign;

    ! function() {
        for (var t = 0; t < 16; t++) {
            var e = [];
            Xe.push(e);

            for (var r = 0; r < 16; r++) {
                for (var i = He(Fe[t] * Fe[r] + Ue[t] * Be[r]), n = He(Be[t] * Fe[r] + ke[t] * Be[r]), o = He(Fe[t] * Ue[r] + Ue[t] * ke[r]), s = He(Be[t] * Ue[r] + ke[t] * ke[r]), a = 0; a < 16; a++) {
                    if (Fe[a] === i && Be[a] === n && Ue[a] === o && ke[a] === s) {
                        e.push(a);
                        break;
                    }
                }
            }
        }

        for (t = 0; t < 16; t++) {
            var h = new Ne();
            h.set(Fe[t], Be[t], Ue[t], ke[t], 0, 0), je.push(h);
        }
    }();

    var Ge = {
            E: 0,
            SE: 1,
            S: 2,
            SW: 3,
            W: 4,
            NW: 5,
            N: 6,
            NE: 7,
            MIRROR_VERTICAL: 8,
            MAIN_DIAGONAL: 10,
            MIRROR_HORIZONTAL: 12,
            REVERSE_DIAGONAL: 14,
            uX: function uX(t) {
                return Fe[t];
            },
            uY: function uY(t) {
                return Be[t];
            },
            vX: function vX(t) {
                return Ue[t];
            },
            vY: function vY(t) {
                return ke[t];
            },
            inv: function inv(t) {
                return 8 & t ? 15 & t : 7 & -t;
            },
            add: function add(t, e) {
                return Xe[t][e];
            },
            sub: function sub(t, e) {
                return Xe[t][Ge.inv(e)];
            },
            rotate180: function rotate180(t) {
                return 4 ^ t;
            },
            isVertical: function isVertical(t) {
                return 2 == (3 & t);
            },
            byDirection: function byDirection(t, e) {
                return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? Ge.S : Ge.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? Ge.E : Ge.W : e > 0 ? t > 0 ? Ge.SE : Ge.SW : t > 0 ? Ge.NE : Ge.NW;
            },
            matrixAppendRotationInv: function matrixAppendRotationInv(t, e, r, i) {
                void 0 === r && (r = 0), void 0 === i && (i = 0);
                var n = je[Ge.inv(e)];
                n.tx = r, n.ty = i, t.append(n);
            }
        },
        Ye = function() {
            function t() {
                this.worldTransform = new Ne(), this.localTransform = new Ne(), this.position = new Me(this.onChange, this, 0, 0), this.scale = new Me(this.onChange, this, 1, 1), this.pivot = new Me(this.onChange, this, 0, 0), this.skew = new Me(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
            }

            return t.prototype.onChange = function() {
                this._localID++;
            }, t.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
            }, t.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1);
            }, t.prototype.updateTransform = function(t) {
                var e = this.localTransform;

                if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                    var r = t.worldTransform,
                        i = this.worldTransform;
                    i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++;
                }
            }, t.prototype.setFromMatrix = function(t) {
                t.decompose(this), this._localID++;
            }, Object.defineProperty(t.prototype, "rotation", {
                get: function get() {
                    return this._rotation;
                },
                set: function set(t) {
                    this._rotation !== t && (this._rotation = t, this.updateSkew());
                },
                enumerable: !0,
                configurable: !0
            }), t.IDENTITY = new t(), t;
        }(),
        Ve = function() {
            function e(e, r, i, n) {
                void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.x = Number(e), this.y = Number(r), this.width = Number(i), this.height = Number(n), this.type = t.SHAPES.RECT;
            }

            return Object.defineProperty(e.prototype, "left", {
                get: function get() {
                    return this.x;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "right", {
                get: function get() {
                    return this.x + this.width;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "top", {
                get: function get() {
                    return this.y;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bottom", {
                get: function get() {
                    return this.y + this.height;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "EMPTY", {
                get: function get() {
                    return new e(0, 0, 0, 0);
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.clone = function() {
                return new e(this.x, this.y, this.width, this.height);
            }, e.prototype.copyFrom = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
            }, e.prototype.copyTo = function(t) {
                return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
            }, e.prototype.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
            }, e.prototype.pad = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this;
            }, e.prototype.fit = function(t) {
                var e = Math.max(this.x, t.x),
                    r = Math.min(this.x + this.width, t.x + t.width),
                    i = Math.max(this.y, t.y),
                    n = Math.min(this.y + this.height, t.y + t.height);
                return this.x = e, this.width = Math.max(r - e, 0), this.y = i, this.height = Math.max(n - i, 0), this;
            }, e.prototype.ceil = function(t, e) {
                void 0 === t && (t = 1), void 0 === e && (e = .001);
                var r = Math.ceil((this.x + this.width - e) * t) / t,
                    i = Math.ceil((this.y + this.height - e) * t) / t;
                return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = i - this.y, this;
            }, e.prototype.enlarge = function(t) {
                var e = Math.min(this.x, t.x),
                    r = Math.max(this.x + this.width, t.x + t.width),
                    i = Math.min(this.y, t.y),
                    n = Math.max(this.y + this.height, t.y + t.height);
                return this.x = e, this.width = r - e, this.y = i, this.height = n - i, this;
            }, e;
        }(),
        ze = function() {
            function e(e, r, i) {
                void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = e, this.y = r, this.radius = i, this.type = t.SHAPES.CIRC;
            }

            return e.prototype.clone = function() {
                return new e(this.x, this.y, this.radius);
            }, e.prototype.contains = function(t, e) {
                if (this.radius <= 0) return !1;
                var r = this.radius * this.radius,
                    i = this.x - t,
                    n = this.y - e;
                return (i *= i) + (n *= n) <= r;
            }, e.prototype.getBounds = function() {
                return new Ve(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
            }, e;
        }(),
        We = function() {
            function e(e, r, i, n) {
                void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.x = e, this.y = r, this.width = i, this.height = n, this.type = t.SHAPES.ELIP;
            }

            return e.prototype.clone = function() {
                return new e(this.x, this.y, this.width, this.height);
            }, e.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var r = (t - this.x) / this.width,
                    i = (e - this.y) / this.height;
                return (r *= r) + (i *= i) <= 1;
            }, e.prototype.getBounds = function() {
                return new Ve(this.x - this.width, this.y - this.height, this.width, this.height);
            }, e;
        }(),
        qe = function() {
            function e() {
                for (var e = arguments, r = [], i = 0; i < arguments.length; i++) {
                    r[i] = e[i];
                }

                if (Array.isArray(r[0]) && (r = r[0]), r[0] instanceof De) {
                    for (var n = [], o = 0, s = (r = r).length; o < s; o++) {
                        n.push(r[o].x, r[o].y);
                    }

                    r = n;
                }

                this.points = r, this.type = t.SHAPES.POLY, this.closeStroke = !0;
            }

            return e.prototype.clone = function() {
                var t = new e(this.points.slice());
                return t.closeStroke = this.closeStroke, t;
            }, e.prototype.contains = function(t, e) {
                for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
                    var s = this.points[2 * n],
                        a = this.points[2 * n + 1],
                        h = this.points[2 * o],
                        u = this.points[2 * o + 1];
                    a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (r = !r);
                }

                return r;
            }, e;
        }(),
        Ke = function() {
            function e(e, r, i, n, o) {
                void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === o && (o = 20), this.x = e, this.y = r, this.width = i, this.height = n, this.radius = o, this.type = t.SHAPES.RREC;
            }

            return e.prototype.clone = function() {
                return new e(this.x, this.y, this.width, this.height, this.radius);
            }, e.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;

                if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                    if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                    var r = t - (this.x + this.radius),
                        i = e - (this.y + this.radius),
                        n = this.radius * this.radius;
                    if (r * r + i * i <= n) return !0;
                    if ((r = t - (this.x + this.width - this.radius)) * r + i * i <= n) return !0;
                    if (r * r + (i = e - (this.y + this.height - this.radius)) * i <= n) return !0;
                    if ((r = t - (this.x + this.radius)) * r + i * i <= n) return !0;
                }

                return !1;
            }, e;
        }();

    M.SORTABLE_CHILDREN = !1;

    var Ze = function Ze() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null;
    };

    Ze.prototype.isEmpty = function() {
        return this.minX > this.maxX || this.minY > this.maxY;
    }, Ze.prototype.clear = function() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
    }, Ze.prototype.getRectangle = function(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? Ve.EMPTY : ((t = t || new Ve(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t);
    }, Ze.prototype.addPoint = function(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y);
    }, Ze.prototype.addQuad = function(t) {
        var e = this.minX,
            r = this.minY,
            i = this.maxX,
            n = this.maxY,
            o = t[0],
            s = t[1];
        e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, r = (s = t[7]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, this.minX = e, this.minY = r, this.maxX = i, this.maxY = n;
    }, Ze.prototype.addFrame = function(t, e, r, i, n) {
        this.addFrameMatrix(t.worldTransform, e, r, i, n);
    }, Ze.prototype.addFrameMatrix = function(t, e, r, i, n) {
        var o = t.a,
            s = t.b,
            a = t.c,
            h = t.d,
            u = t.tx,
            l = t.ty,
            c = this.minX,
            d = this.minY,
            p = this.maxX,
            f = this.maxY,
            v = o * e + a * r + u,
            m = s * e + h * r + l;
        c = v < c ? v : c, d = m < d ? m : d, p = v > p ? v : p, f = m > f ? m : f, c = (v = o * i + a * r + u) < c ? v : c, d = (m = s * i + h * r + l) < d ? m : d, p = v > p ? v : p, f = m > f ? m : f, c = (v = o * e + a * n + u) < c ? v : c, d = (m = s * e + h * n + l) < d ? m : d, p = v > p ? v : p, f = m > f ? m : f, c = (v = o * i + a * n + u) < c ? v : c, d = (m = s * i + h * n + l) < d ? m : d, p = v > p ? v : p, f = m > f ? m : f, this.minX = c, this.minY = d, this.maxX = p, this.maxY = f;
    }, Ze.prototype.addVertexData = function(t, e, r) {
        for (var i = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < r; a += 2) {
            var h = t[a],
                u = t[a + 1];
            i = h < i ? h : i, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s;
        }

        this.minX = i, this.minY = n, this.maxX = o, this.maxY = s;
    }, Ze.prototype.addVertices = function(t, e, r, i) {
        this.addVerticesMatrix(t.worldTransform, e, r, i);
    }, Ze.prototype.addVerticesMatrix = function(t, e, r, i, n, o) {
        var s = t.a,
            a = t.b,
            h = t.c,
            u = t.d,
            l = t.tx,
            c = t.ty;
        n = n || 0, o = o || 0;

        for (var d = this.minX, p = this.minY, f = this.maxX, v = this.maxY, m = r; m < i; m += 2) {
            var g = e[m],
                y = e[m + 1],
                _ = s * g + h * y + l,
                x = u * y + a * g + c;

            d = Math.min(d, _ - n), f = Math.max(f, _ + n), p = Math.min(p, x - o), v = Math.max(v, x + o);
        }

        this.minX = d, this.minY = p, this.maxX = f, this.maxY = v;
    }, Ze.prototype.addBounds = function(t) {
        var e = this.minX,
            r = this.minY,
            i = this.maxX,
            n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, this.maxY = t.maxY > n ? t.maxY : n;
    }, Ze.prototype.addBoundsMask = function(t, e) {
        var r = t.minX > e.minX ? t.minX : e.minX,
            i = t.minY > e.minY ? t.minY : e.minY,
            n = t.maxX < e.maxX ? t.maxX : e.maxX,
            o = t.maxY < e.maxY ? t.maxY : e.maxY;

        if (r <= n && i <= o) {
            var s = this.minX,
                a = this.minY,
                h = this.maxX,
                u = this.maxY;
            this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u;
        }
    }, Ze.prototype.addBoundsMatrix = function(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
    }, Ze.prototype.addBoundsArea = function(t, e) {
        var r = t.minX > e.x ? t.minX : e.x,
            i = t.minY > e.y ? t.minY : e.y,
            n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
            o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;

        if (r <= n && i <= o) {
            var s = this.minX,
                a = this.minY,
                h = this.maxX,
                u = this.maxY;
            this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u;
        }
    }, Ze.prototype.pad = function(t, e) {
        t = t || 0, e = e || (0 !== e ? t : 0), this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e);
    }, Ze.prototype.addFramePad = function(t, e, r, i, n, o) {
        t -= n, e -= o, r += n, i += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > i ? this.maxY : i;
    };

    var Je = function(t) {
        function e() {
            t.call(this), this.tempDisplayObjectParent = null, this.transform = new Ye(), this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Ze(), this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, this.isSprite = !1, this.isMask = !1;
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var r = {
            _tempDisplayObjectParent: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            worldTransform: {
                configurable: !0
            },
            localTransform: {
                configurable: !0
            },
            position: {
                configurable: !0
            },
            scale: {
                configurable: !0
            },
            pivot: {
                configurable: !0
            },
            skew: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            angle: {
                configurable: !0
            },
            zIndex: {
                configurable: !0
            },
            worldVisible: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return e.mixin = function(t) {
            for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
                var n = r[i];
                Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n));
            }
        }, r._tempDisplayObjectParent.get = function() {
            return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e()), this.tempDisplayObjectParent;
        }, e.prototype.updateTransform = function() {
            this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        }, e.prototype.calculateBounds = function() {}, e.prototype._recursivePostUpdateTransform = function() {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }, e.prototype.getBounds = function(t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && (this.calculateBounds(), this._lastBoundsID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new Ve()), e = this._boundsRect), this._bounds.getRectangle(e);
        }, e.prototype.getLocalBounds = function(t) {
            var e = this.transform,
                r = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new Ve()), t = this._localBoundsRect);
            var i = this.getBounds(!1, t);
            return this.parent = r, this.transform = e, i;
        }, e.prototype.toGlobal = function(t, e, r) {
            return void 0 === r && (r = !1), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
        }, e.prototype.toLocal = function(t, e, r, i) {
            return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r);
        }, e.prototype.render = function(t) {}, e.prototype.setParent = function(t) {
            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t;
        }, e.prototype.setTransform = function(t, e, r, i, n, o, s, a, h) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = i || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this;
        }, e.prototype.destroy = function() {
            this.parent && this.parent.removeChild(this), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0;
        }, r.x.get = function() {
            return this.position.x;
        }, r.x.set = function(t) {
            this.transform.position.x = t;
        }, r.y.get = function() {
            return this.position.y;
        }, r.y.set = function(t) {
            this.transform.position.y = t;
        }, r.worldTransform.get = function() {
            return this.transform.worldTransform;
        }, r.localTransform.get = function() {
            return this.transform.localTransform;
        }, r.position.get = function() {
            return this.transform.position;
        }, r.position.set = function(t) {
            this.transform.position.copyFrom(t);
        }, r.scale.get = function() {
            return this.transform.scale;
        }, r.scale.set = function(t) {
            this.transform.scale.copyFrom(t);
        }, r.pivot.get = function() {
            return this.transform.pivot;
        }, r.pivot.set = function(t) {
            this.transform.pivot.copyFrom(t);
        }, r.skew.get = function() {
            return this.transform.skew;
        }, r.skew.set = function(t) {
            this.transform.skew.copyFrom(t);
        }, r.rotation.get = function() {
            return this.transform.rotation;
        }, r.rotation.set = function(t) {
            this.transform.rotation = t;
        }, r.angle.get = function() {
            return this.transform.rotation * Re;
        }, r.angle.set = function(t) {
            this.transform.rotation = t * Le;
        }, r.zIndex.get = function() {
            return this._zIndex;
        }, r.zIndex.set = function(t) {
            this._zIndex = t, this.parent && (this.parent.sortDirty = !0);
        }, r.worldVisible.get = function() {
            var t = this;

            do {
                if (!t.visible) return !1;
                t = t.parent;
            } while (t);

            return !0;
        }, r.mask.get = function() {
            return this._mask;
        }, r.mask.set = function(t) {
            if (this._mask) {
                var e = this._mask.maskObject || this._mask;
                e.renderable = !0, e.isMask = !1;
            }

            if (this._mask = t, this._mask) {
                var r = this._mask.maskObject || this._mask;
                r.renderable = !1, r.isMask = !0;
            }
        }, Object.defineProperties(e.prototype, r), e;
    }(C);

    function Qe(t, e) {
        return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex;
    }

    Je.prototype.displayObjectUpdateTransform = Je.prototype.updateTransform;

    var $e = function(t) {
        function e() {
            t.call(this), this.children = [], this.sortableChildren = M.SORTABLE_CHILDREN, this.sortDirty = !1;
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var r = {
            width: {
                configurable: !0
            },
            height: {
                configurable: !0
            }
        };
        return e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
            var e = arguments,
                r = arguments.length;
            if (r > 1)
                for (var i = 0; i < r; i++) {
                    this.addChild(e[i]);
                } else t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
            return t;
        }, e.prototype.addChildAt = function(t, e) {
            if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t;
        }, e.prototype.swapChildren = function(t, e) {
            if (t !== e) {
                var r = this.getChildIndex(t),
                    i = this.getChildIndex(e);
                this.children[r] = e, this.children[i] = t, this.onChildrenChange(r < i ? r : i);
            }
        }, e.prototype.getChildIndex = function(t) {
            var e = this.children.indexOf(t);
            if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e;
        }, e.prototype.setChildIndex = function(t, e) {
            if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var r = this.getChildIndex(t);
            pe(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e);
        }, e.prototype.getChildAt = function(t) {
            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t];
        }, e.prototype.removeChild = function(t) {
            var e = arguments,
                r = arguments.length;
            if (r > 1)
                for (var i = 0; i < r; i++) {
                    this.removeChild(e[i]);
                } else {
                    var n = this.children.indexOf(t);
                    if (-1 === n) return null;
                    t.parent = null, t.transform._parentID = -1, pe(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n);
                }
            return t;
        }, e.prototype.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e.parent = null, e.transform._parentID = -1, pe(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e;
        }, e.prototype.removeChildren = function(t, e) {
            void 0 === t && (t = 0);
            var r,
                i = t,
                n = "number" == typeof e ? e : this.children.length,
                o = n - i;

            if (o > 0 && o <= n) {
                r = this.children.splice(i, o);

                for (var s = 0; s < r.length; ++s) {
                    r[s].parent = null, r[s].transform && (r[s].transform._parentID = -1);
                }

                this._boundsID++, this.onChildrenChange(t);

                for (var a = 0; a < r.length; ++a) {
                    r[a].emit("removed", this), this.emit("childRemoved", r[a], this, a);
                }

                return r;
            }

            if (0 === o && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
        }, e.prototype.sortChildren = function() {
            for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
                var i = this.children[e];
                i._lastSortedIndex = e, t || 0 === i.zIndex || (t = !0);
            }

            t && this.children.length > 1 && this.children.sort(Qe), this.sortDirty = !1;
        }, e.prototype.updateTransform = function() {
            this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;

            for (var t = 0, e = this.children.length; t < e; ++t) {
                var r = this.children[t];
                r.visible && r.updateTransform();
            }
        }, e.prototype.calculateBounds = function() {
            this._bounds.clear(), this._calculateBounds();

            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                if (e.visible && e.renderable)
                    if (e.calculateBounds(), e._mask) {
                        var r = e._mask.maskObject || e._mask;
                        r.calculateBounds(), this._bounds.addBoundsMask(e._bounds, r._bounds);
                    } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds);
            }

            this._lastBoundsID = this._boundsID;
        }, e.prototype._calculateBounds = function() {}, e.prototype.render = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
                else {
                    this._render(t);

                    for (var e = 0, r = this.children.length; e < r; ++e) {
                        this.children[e].render(t);
                    }
                }
        }, e.prototype.renderAdvanced = function(t) {
            t.batch.flush();
            var e = this.filters,
                r = this._mask;

            if (e) {
                this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;

                for (var i = 0; i < e.length; i++) {
                    e[i].enabled && this._enabledFilters.push(e[i]);
                }

                this._enabledFilters.length && t.filter.push(this, this._enabledFilters);
            }

            r && t.mask.push(this, this._mask), this._render(t);

            for (var n = 0, o = this.children.length; n < o; n++) {
                this.children[n].render(t);
            }

            t.batch.flush(), r && t.mask.pop(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop();
        }, e.prototype._render = function(t) {}, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this), this.sortDirty = !1;
            var r = "boolean" == typeof e ? e : e && e.children,
                i = this.removeChildren(0, this.children.length);
            if (r)
                for (var n = 0; n < i.length; ++n) {
                    i[n].destroy(e);
                }
        }, r.width.get = function() {
            return this.scale.x * this.getLocalBounds().width;
        }, r.width.set = function(t) {
            var e = this.getLocalBounds().width;
            this.scale.x = 0 !== e ? t / e : 1, this._width = t;
        }, r.height.get = function() {
            return this.scale.y * this.getLocalBounds().height;
        }, r.height.set = function(t) {
            var e = this.getLocalBounds().height;
            this.scale.y = 0 !== e ? t / e : 1, this._height = t;
        }, Object.defineProperties(e.prototype, r), e;
    }(Je);

    $e.prototype.containerUpdateTransform = $e.prototype.updateTransform;
    var tr = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0
    };
    Je.mixin(tr);

    var er = function er(t) {
        this._hookDiv = null, (D.tablet || D.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessibility = !1, window.addEventListener("keydown", this._onKeyDown, !1);
    };

    er.prototype.createTouchHook = function() {
        var t = this,
            e = document.createElement("button");
        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function() {
            t.isMobileAccessibility = !0, t.activate(), t.destroyTouchHook();
        }), document.body.appendChild(e), this._hookDiv = e;
    }, er.prototype.destroyTouchHook = function() {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
    }, er.prototype.activate = function() {
        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div));
    }, er.prototype.deactivate = function() {
        this.isActive && !this.isMobileAccessibility && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div));
    }, er.prototype.updateAccessibleObjects = function(t) {
        if (t.visible && t.accessibleChildren) {
            t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);

            for (var e = t.children, r = 0; r < e.length; r++) {
                this.updateAccessibleObjects(e[r]);
            }
        }
    }, er.prototype.update = function() {
        if (this.renderer.renderingToScreen) {
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect(),
                e = t.width / this.renderer.width,
                r = t.height / this.renderer.height,
                i = this.div;
            i.style.left = t.left + "px", i.style.top = t.top + "px", i.style.width = this.renderer.width + "px", i.style.height = this.renderer.height + "px";

            for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                if (o.renderId !== this.renderId) o._accessibleActive = !1, pe(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate();
                else {
                    i = o._accessibleDiv;
                    var s = o.hitArea,
                        a = o.worldTransform;
                    o.hitArea ? (i.style.left = (a.tx + s.x * a.a) * e + "px", i.style.top = (a.ty + s.y * a.d) * r + "px", i.style.width = s.width * a.a * e + "px", i.style.height = s.height * a.d * r + "px") : (s = o.getBounds(), this.capHitArea(s), i.style.left = s.x * e + "px", i.style.top = s.y * r + "px", i.style.width = s.width * e + "px", i.style.height = s.height * r + "px", i.title !== o.accessibleTitle && null !== o.accessibleTitle && (i.title = o.accessibleTitle), i.getAttribute("aria-label") !== o.accessibleHint && null !== o.accessibleHint && i.setAttribute("aria-label", o.accessibleHint)), o.accessibleTitle === i.title && o.tabIndex === i.tabIndex || (i.title = o.accessibleTitle, i.tabIndex = o.tabIndex, this.debug && this.updateDebugHTML(i));
                }
            }

            this.renderId++;
        }
    }, er.prototype.updateDebugHTML = function(t) {
        t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex;
    }, er.prototype.capHitArea = function(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y);
    }, er.prototype.addChild = function(t) {
        var e = this.pool.pop();
        e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
    }, er.prototype._onClick = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "click", e.eventData), e.dispatchEvent(t.target.displayObject, "pointertap", e.eventData), e.dispatchEvent(t.target.displayObject, "tap", e.eventData);
    }, er.prototype._onFocus = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData);
    }, er.prototype._onFocusOut = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData);
    }, er.prototype._onKeyDown = function(t) {
        9 === t.keyCode && this.activate();
    }, er.prototype._onMouseMove = function(t) {
        0 === t.movementX && 0 === t.movementY || this.deactivate();
    }, er.prototype.destroy = function() {
        this.destroyTouchHook(), this.div = null;

        for (var t = 0; t < this.children.length; t++) {
            this.children[t].div = null;
        }

        window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
    };
    var rr,
        ir = {
            AccessibilityManager: er,
            accessibleTarget: tr
        };
    M.TARGET_FPMS = .06, (rr = t.UPDATE_PRIORITY || (t.UPDATE_PRIORITY = {}))[rr.INTERACTION = 50] = "INTERACTION", rr[rr.HIGH = 25] = "HIGH", rr[rr.NORMAL = 0] = "NORMAL", rr[rr.LOW = -25] = "LOW", rr[rr.UTILITY = -50] = "UTILITY";

    var nr = function() {
            function t(t, e, r, i) {
                void 0 === e && (e = null), void 0 === r && (r = 0), void 0 === i && (i = !1), this.fn = t, this.context = e, this.priority = r, this.once = i, this.next = null, this.previous = null, this._destroyed = !1;
            }

            return t.prototype.match = function(t, e) {
                return void 0 === e && (e = null), this.fn === t && this.context === e;
            }, t.prototype.emit = function(t) {
                this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                var e = this.next;
                return this.once && this.destroy(!0), this._destroyed && (this.next = null), e;
            }, t.prototype.connect = function(t) {
                this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
            }, t.prototype.destroy = function(t) {
                void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                var e = this.next;
                return this.next = t ? null : e, this.previous = null, e;
            }, t;
        }(),
        or = function() {
            function e() {
                var t = this;
                this._head = new nr(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / M.TARGET_FPMS, this.elapsedMS = 1 / M.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._protected = !1, this._lastFrame = -1, this._tick = function(e) {
                    t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)));
                };
            }

            return e.prototype._requestIfNeeded = function() {
                null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
            }, e.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
            }, e.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start();
            }, e.prototype.add = function(e, r, i) {
                return void 0 === i && (i = t.UPDATE_PRIORITY.NORMAL), this._addListener(new nr(e, r, i));
            }, e.prototype.addOnce = function(e, r, i) {
                return void 0 === i && (i = t.UPDATE_PRIORITY.NORMAL), this._addListener(new nr(e, r, i, !0));
            }, e.prototype._addListener = function(t) {
                var e = this._head.next,
                    r = this._head;

                if (e) {
                    for (; e;) {
                        if (t.priority > e.priority) {
                            t.connect(r);
                            break;
                        }

                        r = e, e = e.next;
                    }

                    t.previous || t.connect(r);
                } else t.connect(r);

                return this._startIfPossible(), this;
            }, e.prototype.remove = function(t, e) {
                for (var r = this._head.next; r;) {
                    r = r.match(t, e) ? r.destroy() : r.next;
                }

                return this._head.next || this._cancelIfNeeded(), this;
            }, Object.defineProperty(e.prototype, "count", {
                get: function get() {
                    if (!this._head) return 0;

                    for (var t = 0, e = this._head; e = e.next;) {
                        t++;
                    }

                    return t;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded());
            }, e.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded());
            }, e.prototype.destroy = function() {
                if (!this._protected) {
                    this.stop();

                    for (var t = this._head.next; t;) {
                        t = t.destroy(!0);
                    }

                    this._head.destroy(), this._head = null;
                }
            }, e.prototype.update = function(t) {
                var e;

                if (void 0 === t && (t = performance.now()), t > this.lastTime) {
                    if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                        var r = t - this._lastFrame | 0;
                        if (r < this._minElapsedMS) return;
                        this._lastFrame = t - r % this._minElapsedMS;
                    }

                    this.deltaMS = e, this.deltaTime = this.deltaMS * M.TARGET_FPMS;

                    for (var i = this._head, n = i.next; n;) {
                        n = n.emit(this.deltaTime);
                    }

                    i.next || this._cancelIfNeeded();
                } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;

                this.lastTime = t;
            }, Object.defineProperty(e.prototype, "FPS", {
                get: function get() {
                    return 1e3 / this.elapsedMS;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "minFPS", {
                get: function get() {
                    return 1e3 / this._maxElapsedMS;
                },
                set: function set(t) {
                    var e = Math.min(this.maxFPS, t),
                        r = Math.min(Math.max(0, e) / 1e3, M.TARGET_FPMS);
                    this._maxElapsedMS = 1 / r;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxFPS", {
                get: function get() {
                    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
                },
                set: function set(t) {
                    if (0 === t) this._minElapsedMS = 0;
                    else {
                        var e = Math.max(this.minFPS, t);
                        this._minElapsedMS = 1 / (e / 1e3);
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "shared", {
                get: function get() {
                    if (!e._shared) {
                        var t = e._shared = new e();
                        t.autoStart = !0, t._protected = !0;
                    }

                    return e._shared;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "system", {
                get: function get() {
                    if (!e._system) {
                        var t = e._system = new e();
                        t.autoStart = !0, t._protected = !0;
                    }

                    return e._system;
                },
                enumerable: !0,
                configurable: !0
            }), e;
        }(),
        sr = function() {
            function e() {}

            return e.init = function(e) {
                var r = this;
                e = Object.assign({
                    autoStart: !0,
                    sharedTicker: !1
                }, e), Object.defineProperty(this, "ticker", {
                    set: function set(e) {
                        this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, t.UPDATE_PRIORITY.LOW);
                    },
                    get: function get() {
                        return this._ticker;
                    }
                }), this.stop = function() {
                    r._ticker.stop();
                }, this.start = function() {
                    r._ticker.start();
                }, this._ticker = null, this.ticker = e.sharedTicker ? or.shared : new or(), e.autoStart && this.start();
            }, e.destroy = function() {
                if (this._ticker) {
                    var t = this._ticker;
                    this.ticker = null, t.destroy();
                }
            }, e;
        }(),
        ar = function ar() {
            this.global = new De(), this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0;
        },
        hr = {
            pointerId: {
                configurable: !0
            }
        };

    hr.pointerId.get = function() {
        return this.identifier;
    }, ar.prototype.getLocalPosition = function(t, e, r) {
        return t.worldTransform.applyInverse(r || this.global, e);
    }, ar.prototype.copyEvent = function(t) {
        t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0;
    }, ar.prototype.reset = function() {
        this.isPrimary = !1;
    }, Object.defineProperties(ar.prototype, hr);

    var ur = function ur() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null;
    };

    ur.prototype.stopPropagation = function() {
        this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget;
    }, ur.prototype.reset = function() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null;
    };

    var lr = function t(e) {
            this._pointerId = e, this._flags = t.FLAGS.NONE;
        },
        cr = {
            pointerId: {
                configurable: !0
            },
            flags: {
                configurable: !0
            },
            none: {
                configurable: !0
            },
            over: {
                configurable: !0
            },
            rightDown: {
                configurable: !0
            },
            leftDown: {
                configurable: !0
            }
        };

    lr.prototype._doSet = function(t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t;
    }, cr.pointerId.get = function() {
        return this._pointerId;
    }, cr.flags.get = function() {
        return this._flags;
    }, cr.flags.set = function(t) {
        this._flags = t;
    }, cr.none.get = function() {
        return this._flags === this.constructor.FLAGS.NONE;
    }, cr.over.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.OVER);
    }, cr.over.set = function(t) {
        this._doSet(this.constructor.FLAGS.OVER, t);
    }, cr.rightDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN);
    }, cr.rightDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t);
    }, cr.leftDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN);
    }, cr.leftDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.LEFT_DOWN, t);
    }, Object.defineProperties(lr.prototype, cr), lr.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    });

    var dr = function dr() {
        this._tempPoint = new De();
    };

    dr.prototype.recursiveFindHit = function(t, e, r, i, n) {
        if (!e || !e.visible) return !1;
        var o = t.data.global,
            s = !1,
            a = n = e.interactive || n,
            h = !0;
        if (e.hitArea ? (i && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (i = !1, h = !1)), a = !1) : e._mask && i && (e._mask.containsPoint && e._mask.containsPoint(o) || (i = !1)), h && e.interactiveChildren && e.children)
            for (var u = e.children, l = u.length - 1; l >= 0; l--) {
                var c = u[l],
                    d = this.recursiveFindHit(t, c, r, i, a);

                if (d) {
                    if (!c.parent) continue;
                    a = !1, d && (t.target && (i = !1), s = !0);
                }
            }
        return n && (i && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s;
    }, dr.prototype.findHit = function(t, e, r, i) {
        this.recursiveFindHit(t, e, r, i, !1);
    };
    var pr = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,

        get buttonMode() {
            return "pointer" === this.cursor;
        },

        set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
        },

        cursor: null,

        get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers;
        },

        _trackedPointers: void 0
    };
    Je.mixin(pr);

    var fr = 1,
        vr = {
            target: null,
            data: {
                global: null
            }
        },
        mr = function(e) {
            function r(t, r) {
                e.call(this), r = r || {}, this.renderer = t, this.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault, this.interactionFrequency = r.interactionFrequency || 10, this.mouse = new ar(), this.mouse.identifier = fr, this.mouse.global.set(-999999), this.activeInteractionData = {}, this.activeInteractionData[fr] = this.mouse, this.interactionDataPool = [], this.eventData = new ur(), this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.tickerAdded = !1, this.mouseOverRenderer = !1, this.supportsTouchEvents = "ontouchstart" in window, this.supportsPointerEvents = !!window.PointerEvent, this.onPointerUp = this.onPointerUp.bind(this), this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), this.cursorStyles = {
                    "default": "inherit",
                    pointer: "pointer"
                }, this.currentCursorMode = null, this.cursor = null, this.resolution = 1, this.delayedEvents = [], this.search = new dr(), this._useSystemTicker = void 0 === r.useSystemTicker || r.useSystemTicker, this.setTargetElement(this.renderer.view, this.renderer.resolution);
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                useSystemTicker: {
                    configurable: !0
                }
            };
            return i.useSystemTicker.get = function() {
                return this._useSystemTicker;
            }, i.useSystemTicker.set = function(t) {
                this._useSystemTicker = t, t ? this.addTickerListener() : this.removeTickerListener();
            }, r.prototype.hitTest = function(t, e) {
                return vr.target = null, vr.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(vr, e, null, !0), vr.target;
            }, r.prototype.setTargetElement = function(t, e) {
                void 0 === e && (e = 1), this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents(), this.addTickerListener();
            }, r.prototype.addTickerListener = function() {
                !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (or.system.add(this.tickerUpdate, this, t.UPDATE_PRIORITY.INTERACTION), this.tickerAdded = !0);
            }, r.prototype.removeTickerListener = function() {
                this.tickerAdded && (or.system.remove(this.tickerUpdate, this), this.tickerAdded = !1);
            }, r.prototype.addEvents = function() {
                !this.eventsAdded && this.interactionDOMElement && (window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0);
            }, r.prototype.removeEvents = function() {
                this.eventsAdded && this.interactionDOMElement && (window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1);
            }, r.prototype.tickerUpdate = function(t) {
                this._deltaTime += t, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update());
            }, r.prototype.update = function() {
                if (this.interactionDOMElement)
                    if (this.didMove) this.didMove = !1;
                    else {
                        for (var t in this.cursor = null, this.activeInteractionData) {
                            if (this.activeInteractionData.hasOwnProperty(t)) {
                                var e = this.activeInteractionData[t];

                                if (e.originalEvent && "touch" !== e.pointerType) {
                                    var r = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
                                    this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !0);
                                }
                            }
                        }

                        this.setCursorMode(this.cursor);
                    }
            }, r.prototype.setCursorMode = function(t) {
                if (t = t || "default", this.currentCursorMode !== t) {
                    this.currentCursorMode = t;
                    var e = this.cursorStyles[t];
                    if (e) switch (_typeof(e)) {
                        case "string":
                            this.interactionDOMElement.style.cursor = e;
                            break;

                        case "function":
                            e(t);
                            break;

                        case "object":
                            Object.assign(this.interactionDOMElement.style, e);
                    } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t);
                }
            }, r.prototype.dispatchEvent = function(t, e, r) {
                r.stopPropagationHint && t !== r.stopsPropagatingAt || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r));
            }, r.prototype.delayDispatchEvent = function(t, e, r) {
                this.delayedEvents.push({
                    displayObject: t,
                    eventString: e,
                    eventData: r
                });
            }, r.prototype.mapPositionToPoint = function(t, e, r) {
                var i;
                i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var n = 1 / this.resolution;
                t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n;
            }, r.prototype.processInteractive = function(t, e, r, i) {
                var n = this.search.findHit(t, e, r, i),
                    o = this.delayedEvents;
                if (!o.length) return n;
                t.stopPropagationHint = !1;
                var s = o.length;
                this.delayedEvents = [];

                for (var a = 0; a < s; a++) {
                    var h = o[a],
                        u = h.displayObject,
                        l = h.eventString,
                        c = h.eventData;
                    c.stopsPropagatingAt === u && (c.stopPropagationHint = !0), this.dispatchEvent(u, l, c);
                }

                return n;
            }, r.prototype.onPointerDown = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    if (this.autoPreventDefault && e[0].isNormalized)(t.cancelable || !("cancelable" in t)) && t.preventDefault();

                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
                        else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                            var a = 2 === n.button;
                            this.emit(a ? "rightdown" : "mousedown", this.eventData);
                        }
                    }
                }
            }, r.prototype.processPointerDown = function(t, e, r) {
                var i = t.data,
                    n = t.data.identifier;
                if (r)
                    if (e.trackedPointers[n] || (e.trackedPointers[n] = new lr(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === i.pointerType) this.dispatchEvent(e, "touchstart", t);
                    else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                    var o = 2 === i.button;
                    o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t);
                }
            }, r.prototype.onPointerComplete = function(t, e, r) {
                for (var i = this.normalizeToPointerData(t), n = i.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                    var a = i[s],
                        h = this.getInteractionDataForPointerId(a),
                        u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);

                    if (u.data.originalEvent = t, this.processInteractive(u, this.renderer._lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
                        var l = 2 === a.button;
                        this.emit(l ? "rightup" + o : "mouseup" + o, u);
                    } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, h));
                }
            }, r.prototype.onPointerCancel = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel);
            }, r.prototype.processPointerCancel = function(t, e) {
                var r = t.data,
                    i = t.data.identifier;
                void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t));
            }, r.prototype.onPointerUp = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp);
            }, r.prototype.processPointerUp = function(t, e, r) {
                var i = t.data,
                    n = t.data.identifier,
                    o = e.trackedPointers[n],
                    s = "touch" === i.pointerType,
                    a = "mouse" === i.pointerType || "pen" === i.pointerType,
                    h = !1;

                if (a) {
                    var u = 2 === i.button,
                        l = lr.FLAGS,
                        c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                        d = void 0 !== o && o.flags & c;
                    r ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1);
                }

                r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n];
            }, r.prototype.onPointerMove = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);

                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s);
                    }

                    "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
                }
            }, r.prototype.processPointerMove = function(t, e, r) {
                var i = t.data,
                    n = "touch" === i.pointerType,
                    o = "mouse" === i.pointerType || "pen" === i.pointerType;
                o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t));
            }, r.prototype.onPointerOut = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t)[0];
                    "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                    var r = this.getInteractionDataForPointerId(e),
                        i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                    i.data.originalEvent = e, this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(r.identifier);
                }
            }, r.prototype.processPointerOverOut = function(t, e, r) {
                var i = t.data,
                    n = t.data.identifier,
                    o = "mouse" === i.pointerType || "pen" === i.pointerType,
                    s = e.trackedPointers[n];
                r && !s && (s = e.trackedPointers[n] = new lr(n)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]));
            }, r.prototype.onPointerOver = function(t) {
                var e = this.normalizeToPointerData(t)[0],
                    r = this.getInteractionDataForPointerId(e),
                    i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                i.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", i);
            }, r.prototype.getInteractionDataForPointerId = function(t) {
                var e,
                    r = t.pointerId;
                return r === fr || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[r] ? e = this.activeInteractionData[r] : ((e = this.interactionDataPool.pop() || new ar()).identifier = r, this.activeInteractionData[r] = e), e.copyEvent(t), e;
            }, r.prototype.releaseInteractionDataForPointerId = function(t) {
                var e = this.activeInteractionData[t];
                e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e));
            }, r.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
                return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t.reset(), t;
            }, r.prototype.normalizeToPointerData = function(t) {
                var e = [];
                if (this.supportsTouchEvents && t instanceof TouchEvent)
                    for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                        var n = t.changedTouches[r];
                        void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n);
                    } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent ? e.push(t) : (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = fr), void 0 === t.pressure && (t.pressure = .5), void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), t.isNormalized = !0, e.push(t));
                return e;
            }, r.prototype.destroy = function() {
                this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null;
            }, Object.defineProperties(r.prototype, i), r;
        }(C),
        gr = {
            InteractionData: ar,
            InteractionEvent: ur,
            InteractionManager: mr,
            InteractionTrackingData: lr,
            interactiveTarget: pr
        },
        yr = function() {
            function t(t) {
                this.items = [], this._name = t, this._aliasCount = 0;
            }

            return t.prototype.emit = function(t, e, r, i, n, o, s, a) {
                if (arguments.length > 8) throw new Error("max arguments reached");
                var h = this.name,
                    u = this.items;
                this._aliasCount++;

                for (var l = 0, c = u.length; l < c; l++) {
                    u[l][h](t, e, r, i, n, o, s, a);
                }

                return u === this.items && this._aliasCount--, this;
            }, t.prototype.ensureNonAliasedItems = function() {
                this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
            }, t.prototype.add = function(t) {
                return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
            }, t.prototype.remove = function(t) {
                var e = this.items.indexOf(t);
                return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this;
            }, t.prototype.contains = function(t) {
                return -1 !== this.items.indexOf(t);
            }, t.prototype.removeAll = function() {
                return this.ensureNonAliasedItems(), this.items.length = 0, this;
            }, t.prototype.destroy = function() {
                this.removeAll(), this.items = null, this._name = null;
            }, Object.defineProperty(t.prototype, "empty", {
                get: function get() {
                    return 0 === this.items.length;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function get() {
                    return this._name;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }();

    Object.defineProperties(yr.prototype, {
        dispatch: {
            value: yr.prototype.emit
        },
        run: {
            value: yr.prototype.emit
        }
    });

    var _r = function _r(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new yr("setRealSize", 2), this.onUpdate = new yr("update"), this.onError = new yr("onError", 1);
        },
        xr = {
            valid: {
                configurable: !0
            },
            width: {
                configurable: !0
            },
            height: {
                configurable: !0
            }
        };

    _r.prototype.bind = function(t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.run(this._width, this._height);
    }, _r.prototype.unbind = function(t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
    }, _r.prototype.resize = function(t, e) {
        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.run(t, e));
    }, xr.valid.get = function() {
        return !!this._width && !!this._height;
    }, _r.prototype.update = function() {
        this.destroyed || this.onUpdate.run();
    }, _r.prototype.load = function() {
        return Promise.resolve();
    }, xr.width.get = function() {
        return this._width;
    }, xr.height.get = function() {
        return this._height;
    }, _r.prototype.upload = function(t, e, r) {
        return !1;
    }, _r.prototype.style = function(t, e, r) {
        return !1;
    }, _r.prototype.dispose = function() {}, _r.prototype.destroy = function() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
    }, Object.defineProperties(_r.prototype, xr);

    var br = function(e) {
            function r(t) {
                var r = t.naturalWidth || t.videoWidth || t.width,
                    i = t.naturalHeight || t.videoHeight || t.height;
                e.call(this, r, i), this.source = t, this.noSubImage = !1;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.crossOrigin = function(t, e, r) {
                void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = Ie(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous");
            }, r.prototype.upload = function(e, r, i, n) {
                var o = e.gl,
                    s = r.realWidth,
                    a = r.realHeight;
                return n = n || this.source, o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK), this.noSubImage || r.target !== o.TEXTURE_2D || i.width !== s || i.height !== a ? (i.width = s, i.height = a, o.texImage2D(r.target, 0, r.format, r.format, r.type, n)) : o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, r.format, r.type, n), !0;
            }, r.prototype.update = function() {
                if (!this.destroyed) {
                    var t = this.source.naturalWidth || this.source.videoWidth || this.source.width,
                        r = this.source.naturalHeight || this.source.videoHeight || this.source.height;
                    this.resize(t, r), e.prototype.update.call(this);
                }
            }, r.prototype.dispose = function() {
                this.source = null;
            }, r;
        }(_r),
        Er = function(e) {
            function r(t, r) {
                if (r = r || {}, !(t instanceof HTMLImageElement)) {
                    var i = new Image();
                    e.crossOrigin(i, t, r.crossorigin), i.src = t, t = i;
                }

                e.call(this, t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : M.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap, this.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null, void 0 !== r.premultiplyAlpha && (this.premultiplyAlpha = r.premultiplyAlpha), this.bitmap = null, this._load = null, !1 !== r.autoLoad && this.load();
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.load = function(t) {
                var e = this;
                return void 0 !== t && (this.createBitmap = t), this._load ? this._load : (this._load = new Promise(function(t) {
                    e.url = e.source.src;

                    var r = e.source,
                        i = function i() {
                            e.destroyed || (r.onload = null, r.onerror = null, e.resize(r.width, r.height), e._load = null, e.createBitmap ? t(e.process()) : t(e));
                        };

                    r.complete && r.src ? i() : (r.onload = i, r.onerror = function(t) {
                        return e.onError.run(t);
                    });
                }), this._load);
            }, r.prototype.process = function() {
                var e = this;
                return null !== this._process ? this._process : null === this.bitmap && window.createImageBitmap ? (this._process = window.createImageBitmap(this.source, 0, 0, this.source.width, this.source.height, {
                    premultiplyAlpha: this.premultiplyAlpha === t.ALPHA_MODES.UNPACK ? "premultiply" : "none"
                }).then(function(t) {
                    return e.destroyed ? Promise.reject() : (e.bitmap = t, e.update(), e._process = null, Promise.resolve(e));
                }), this._process) : Promise.resolve(this);
            }, r.prototype.upload = function(t, r, i) {
                if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode), !this.createBitmap) return e.prototype.upload.call(this, t, r, i);
                if (!this.bitmap && (this.process(), !this.bitmap)) return !1;

                if (e.prototype.upload.call(this, t, r, i, this.bitmap), !this.preserveBitmap) {
                    var n = !0;

                    for (var o in r._glTextures) {
                        var s = r._glTextures[o];

                        if (s !== i && s.dirtyId !== r.dirtyId) {
                            n = !1;
                            break;
                        }
                    }

                    n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
                }

                return !0;
            }, r.prototype.dispose = function() {
                this.source.onload = null, this.source.onerror = null, e.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
            }, r;
        }(br),
        Tr = [];

    function wr(t, e) {
        if (!t) return null;
        var r = "";

        if ("string" == typeof t) {
            var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
            i && (r = i[1].toLowerCase());
        }

        for (var n = Tr.length - 1; n >= 0; --n) {
            var o = Tr[n];
            if (o.test && o.test(t, r)) return new o(t, e);
        }

        return new Er(t, e);
    }

    var Sr = function(e) {
            function r(t, r) {
                var i = r || {},
                    n = i.width,
                    o = i.height;
                if (!n || !o) throw new Error("BufferResource width or height invalid");
                e.call(this, n, o), this.data = t;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.upload = function(e, r, i) {
                var n = e.gl;
                return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK), i.width === r.width && i.height === r.height ? n.texSubImage2D(r.target, 0, 0, 0, r.width, r.height, r.format, r.type, this.data) : (i.width = r.width, i.height = r.height, n.texImage2D(r.target, 0, i.internalFormat, r.width, r.height, 0, r.format, i.type, this.data)), !0;
            }, r.prototype.dispose = function() {
                this.data = null;
            }, r.test = function(t) {
                return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
            }, r;
        }(_r),
        Ir = {
            scaleMode: t.SCALE_MODES.NEAREST,
            format: t.FORMATS.RGBA,
            alphaMode: t.ALPHA_MODES.NPM
        },
        Pr = function(e) {
            function r(r, i) {
                void 0 === r && (r = null), void 0 === i && (i = null), e.call(this);
                var n = (i = i || {}).alphaMode,
                    o = i.mipmap,
                    s = i.anisotropicLevel,
                    a = i.scaleMode,
                    h = i.width,
                    u = i.height,
                    l = i.wrapMode,
                    c = i.format,
                    d = i.type,
                    p = i.target,
                    f = i.resolution,
                    v = i.resourceOptions;
                !r || r instanceof _r || ((r = wr(r, v)).internal = !0), this.width = h || 0, this.height = u || 0, this.resolution = f || M.RESOLUTION, this.mipmap = void 0 !== o ? o : M.MIPMAP_TEXTURES, this.anisotropicLevel = void 0 !== s ? s : M.ANISOTROPIC_LEVEL, this.wrapMode = l || M.WRAP_MODE, this.scaleMode = void 0 !== a ? a : M.SCALE_MODE, this.format = c || t.FORMATS.RGBA, this.type = d || t.TYPES.UNSIGNED_BYTE, this.target = p || t.TARGETS.TEXTURE_2D, this.alphaMode = void 0 !== n ? n : t.ALPHA_MODES.UNPACK, void 0 !== i.premultiplyAlpha && (this.premultiplyAlpha = i.premultiplyAlpha), this.uid = me(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = h > 0 && u > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.setResource(r);
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                realWidth: {
                    configurable: !0
                },
                realHeight: {
                    configurable: !0
                }
            };
            return i.realWidth.get = function() {
                return Math.ceil(this.width * this.resolution - 1e-4);
            }, i.realHeight.get = function() {
                return Math.ceil(this.height * this.resolution - 1e-4);
            }, r.prototype.setStyle = function(t, e) {
                var r;
                return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this;
            }, r.prototype.setSize = function(t, e, r) {
                return this.resolution = r || this.resolution, this.width = t, this.height = e, this._refreshPOT(), this.update(), this;
            }, r.prototype.setRealSize = function(t, e, r) {
                return this.resolution = r || this.resolution, this.width = t / this.resolution, this.height = e / this.resolution, this._refreshPOT(), this.update(), this;
            }, r.prototype._refreshPOT = function() {
                this.isPowerOfTwo = ce(this.realWidth) && ce(this.realHeight);
            }, r.prototype.setResolution = function(t) {
                var e = this.resolution;
                return e === t ? this : (this.resolution = t, this.valid && (this.width = this.width * e / t, this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT(), this);
            }, r.prototype.setResource = function(t) {
                if (this.resource === t) return this;
                if (this.resource) throw new Error("Resource can be set only once");
                return t.bind(this), this.resource = t, this;
            }, r.prototype.update = function() {
                this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
            }, r.prototype.onError = function(t) {
                this.emit("error", this, t);
            }, r.prototype.destroy = function() {
                this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete be[this.cacheId], delete xe[this.cacheId], this.cacheId = null), this.dispose(), r.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0;
            }, r.prototype.dispose = function() {
                this.emit("dispose", this);
            }, r.from = function(t, e, i) {
                void 0 === i && (i = M.STRICT_TEXTURE_CACHE);
                var n = "string" == typeof t,
                    o = null;
                n ? o = t : (t._pixiId || (t._pixiId = "pixiid_" + me()), o = t._pixiId);
                var s = be[o];
                if (n && i && !s) throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.');
                return s || ((s = new r(t, e)).cacheId = o, r.addToCache(s, o)), s;
            }, r.fromBuffer = function(e, i, n, o) {
                e = e || new Float32Array(i * n * 4);
                var s = new Sr(e, {
                        width: i,
                        height: n
                    }),
                    a = e instanceof Float32Array ? t.TYPES.FLOAT : t.TYPES.UNSIGNED_BYTE;
                return new r(s, Object.assign(Ir, o || {
                    width: i,
                    height: n,
                    type: a
                }));
            }, r.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), be[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), be[e] = t);
            }, r.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = be[t];

                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return r > -1 && e.textureCacheIds.splice(r, 1), delete be[t], e;
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i) {
                        delete be[t.textureCacheIds[i]];
                    }

                    return t.textureCacheIds.length = 0, t;
                }

                return null;
            }, Object.defineProperties(r.prototype, i), r;
        }(C);

    Pr._globalBatch = 0;

    var Ar = function(e) {
            function r(t, r) {
                var i;
                r = r || {};
                var n = t;
                Array.isArray(t) && (i = t, n = t.length), e.call(this, r.width, r.height), this.items = [], this.itemDirtyIds = [];

                for (var o = 0; o < n; o++) {
                    var s = new Pr();
                    this.items.push(s), this.itemDirtyIds.push(-1);
                }

                if (this.length = n, this._load = null, i)
                    for (var a = 0; a < n; a++) {
                        this.addResourceAt(wr(i[a], r), a);
                    }
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.dispose = function() {
                for (var t = 0, e = this.length; t < e; t++) {
                    this.items[t].destroy();
                }

                this.items = null, this.itemDirtyIds = null, this._load = null;
            }, r.prototype.addResourceAt = function(t, e) {
                if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
                return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this;
            }, r.prototype.bind = function(r) {
                e.prototype.bind.call(this, r), r.target = t.TARGETS.TEXTURE_2D_ARRAY;

                for (var i = 0; i < this.length; i++) {
                    this.items[i].on("update", r.update, r);
                }
            }, r.prototype.unbind = function(t) {
                e.prototype.unbind.call(this, t);

                for (var r = 0; r < this.length; r++) {
                    this.items[r].off("update", t.update, t);
                }
            }, r.prototype.load = function() {
                var t = this;
                if (this._load) return this._load;
                var e = this.items.map(function(t) {
                        return t.resource;
                    }),
                    r = e.map(function(t) {
                        return t.load();
                    });
                return this._load = Promise.all(r).then(function() {
                    var r = e[0],
                        i = r.width,
                        n = r.height;
                    return t.resize(i, n), Promise.resolve(t);
                }), this._load;
            }, r.prototype.upload = function(t, e, r) {
                var i = this.length,
                    n = this.itemDirtyIds,
                    o = this.items,
                    s = t.gl;
                r.dirtyId < 0 && s.texImage3D(s.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, i, 0, e.format, e.type, null);

                for (var a = 0; a < i; a++) {
                    var h = o[a];
                    n[a] < h.dirtyId && (n[a] = h.dirtyId, h.valid && s.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, e.type, h.resource.source));
                }

                return !0;
            }, r;
        }(_r),
        Or = function(t) {
            function e() {
                t.apply(this, arguments);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
                var e = window.OffscreenCanvas;
                return !!(e && t instanceof e) || t instanceof HTMLCanvasElement;
            }, e;
        }(br),
        Dr = function(e) {
            function r(i, n) {
                if (n = n || {}, e.call(this, i, n), this.length !== r.SIDES) throw new Error("Invalid length. Got " + this.length + ", expected 6");

                for (var o = 0; o < r.SIDES; o++) {
                    this.items[o].target = t.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + o;
                }

                !1 !== n.autoLoad && this.load();
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.bind = function(r) {
                e.prototype.bind.call(this, r), r.target = t.TARGETS.TEXTURE_CUBE_MAP;
            }, r.prototype.upload = function(t, e, i) {
                for (var n = this.itemDirtyIds, o = 0; o < r.SIDES; o++) {
                    var s = this.items[o];
                    n[o] < s.dirtyId && (n[o] = s.dirtyId, s.valid && s.resource.upload(t, s, i));
                }

                return !0;
            }, r;
        }(Ar);

    Dr.SIDES = 6;

    var Mr = function(t) {
        function e(e, r) {
            r = r || {}, t.call(this, document.createElement("canvas")), this._width = 0, this._height = 0, this.svg = e, this.scale = r.scale || 1, this._overrideWidth = r.width, this._overrideHeight = r.height, this._resolve = null, this._crossorigin = r.crossorigin, this._load = null, !1 !== r.autoLoad && this.load();
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function() {
            var t = this;
            return this._load ? this._load : (this._load = new Promise(function(e) {
                if (t._resolve = function() {
                        t.resize(t.source.width, t.source.height), e(t);
                    }, /^\<svg/.test(t.svg.trim())) {
                    if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                    t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)));
                }

                t._loadSvg();
            }), this._load);
        }, e.prototype._loadSvg = function() {
            var e = this,
                r = new Image();
            t.crossOrigin(r, this.svg, this._crossorigin), r.src = this.svg, r.onerror = function(t) {
                r.onerror = null, e.onError.run(t);
            }, r.onload = function() {
                var t = r.width,
                    i = r.height;
                if (!t || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                var n = t * e.scale,
                    o = i * e.scale;
                (e._overrideWidth || e._overrideHeight) && (n = e._overrideWidth || e._overrideHeight / i * t, o = e._overrideHeight || e._overrideWidth / t * i), n = Math.round(n), o = Math.round(o);
                var s = e.source;
                s.width = n, s.height = o, s._pixiId = "canvas_" + me(), s.getContext("2d").drawImage(r, 0, 0, t, i, 0, 0, n, o), e._resolve(), e._resolve = null;
            };
        }, e.getSize = function(t) {
            var r = e.SVG_SIZE.exec(t),
                i = {};
            return r && (i[r[1]] = Math.round(parseFloat(r[3])), i[r[5]] = Math.round(parseFloat(r[7]))), i;
        }, e.prototype.dispose = function() {
            t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null;
        }, e.test = function(t, e) {
            return "svg" === e || "string" == typeof t && 0 === t.indexOf("data:image/svg+xml;base64") || "string" == typeof t && 0 === t.indexOf("<svg");
        }, e;
    }(br);

    Mr.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;

    var Cr = function(t) {
        function e(e, r) {
            if (r = r || {}, !(e instanceof HTMLVideoElement)) {
                var i = document.createElement("video");
                i.setAttribute("preload", "auto"), i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", ""), "string" == typeof e && (e = [e]), t.crossOrigin(i, e[0].src || e[0], r.crossorigin);

                for (var n = 0; n < e.length; ++n) {
                    var o = document.createElement("source"),
                        s = e[n],
                        a = s.src,
                        h = s.mime,
                        u = (a = a || e[n]).split("?").shift().toLowerCase(),
                        l = u.substr(u.lastIndexOf(".") + 1);
                    h = h || "video/" + l, o.src = a, o.type = h, i.appendChild(o);
                }

                e = i;
            }

            t.call(this, e), this.noSubImage = !0, this._autoUpdate = !0, this._isAutoUpdating = !1, this._updateFPS = r.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== r.autoPlay, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), !1 !== r.autoLoad && this.load();
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var r = {
            autoUpdate: {
                configurable: !0
            },
            updateFPS: {
                configurable: !0
            }
        };
        return e.prototype.update = function(e) {
            if (void 0 === e && (e = 0), !this.destroyed) {
                var r = or.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - r), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this, e), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
            }
        }, e.prototype.load = function() {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise(function(r) {
                t.valid ? r(t) : (t._resolve = r, e.load());
            }), this._load;
        }, e.prototype._onError = function() {
            this.source.removeEventListener("error", this._onError, !0), this.onError.run(event);
        }, e.prototype._isSourcePlaying = function() {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2;
        }, e.prototype._isSourceReady = function() {
            return 3 === this.source.readyState || 4 === this.source.readyState;
        }, e.prototype._onPlayStart = function() {
            this.valid || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (or.shared.add(this.update, this), this._isAutoUpdating = !0);
        }, e.prototype._onPlayStop = function() {
            this._isAutoUpdating && (or.shared.remove(this.update, this), this._isAutoUpdating = !1);
        }, e.prototype._onCanPlay = function() {
            var t = this.source;
            t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
        }, e.prototype.dispose = function() {
            this._isAutoUpdating && or.shared.remove(this.update, this), this.source && (this.source.removeEventListener("error", this._onError, !0), this.source.pause(), this.source.src = "", this.source.load()), t.prototype.dispose.call(this);
        }, r.autoUpdate.get = function() {
            return this._autoUpdate;
        }, r.autoUpdate.set = function(t) {
            t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (or.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (or.shared.add(this.update, this), this._isAutoUpdating = !0));
        }, r.updateFPS.get = function() {
            return this._updateFPS;
        }, r.updateFPS.set = function(t) {
            t !== this._updateFPS && (this._updateFPS = t);
        }, e.test = function(t, r) {
            return t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1;
        }, Object.defineProperties(e.prototype, r), e;
    }(br);

    Cr.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];

    var Rr = function(t) {
        function e() {
            t.apply(this, arguments);
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
            return !!window.createImageBitmap && t instanceof ImageBitmap;
        }, e;
    }(br);

    Tr.push(Er, Rr, Or, Cr, Mr, Sr, Dr, Ar);

    var Lr = {
            INSTALLED: Tr,
            autoDetectResource: wr,
            ArrayResource: Ar,
            BufferResource: Sr,
            CanvasResource: Or,
            CubeResource: Dr,
            ImageResource: Er,
            ImageBitmapResource: Rr,
            SVGResource: Mr,
            VideoResource: Cr,
            Resource: _r,
            BaseImageResource: br
        },
        Nr = function Nr(t) {
            this.renderer = t;
        };

    Nr.prototype.destroy = function() {
        this.renderer = null;
    };

    var Fr = function(e) {
            function r() {
                e.apply(this, arguments);
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.upload = function(e, r, i) {
                var n = e.gl;
                return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK), i.width === r.width && i.height === r.height ? n.texSubImage2D(r.target, 0, 0, 0, r.width, r.height, r.format, r.type, this.data) : (i.width = r.width, i.height = r.height, n.texImage2D(r.target, 0, n.DEPTH_COMPONENT16, r.width, r.height, 0, r.format, r.type, this.data)), !0;
            }, r;
        }(Sr),
        Br = function Br(t, e) {
            this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new yr("disposeFramebuffer", 2);
        },
        Ur = {
            colorTexture: {
                configurable: !0
            }
        };

    Ur.colorTexture.get = function() {
        return this.colorTextures[0];
    }, Br.prototype.addColorTexture = function(t, e) {
        return void 0 === t && (t = 0), this.colorTextures[t] = e || new Pr(null, {
            scaleMode: 0,
            resolution: 1,
            mipmap: !1,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this;
    }, Br.prototype.addDepthTexture = function(e) {
        return this.depthTexture = e || new Pr(new Fr(null, {
            width: this.width,
            height: this.height
        }), {
            scaleMode: 0,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: !1,
            format: t.FORMATS.DEPTH_COMPONENT,
            type: t.TYPES.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this;
    }, Br.prototype.enableDepth = function() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
    }, Br.prototype.enableStencil = function() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
    }, Br.prototype.resize = function(t, e) {
        if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
            this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;

            for (var r = 0; r < this.colorTextures.length; r++) {
                var i = this.colorTextures[r],
                    n = i.resolution;
                i.setSize(t / n, e / n);
            }

            if (this.depthTexture) {
                var o = this.depthTexture.resolution;
                this.depthTexture.setSize(t / o, e / o);
            }
        }
    }, Br.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, Object.defineProperties(Br.prototype, Ur);

    var kr = function(t) {
            function e(e) {
                "number" == typeof e && (e = {
                    width: arguments[0],
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                });
                t.call(this, null, e);
                var r = e || {},
                    i = r.width,
                    n = r.height;
                this.mipmap = !1, this.width = Math.ceil(i) || 100, this.height = Math.ceil(n) || 100, this.valid = !0, this._canvasRenderTarget = null, this.clearColor = [0, 0, 0, 0], this.framebuffer = new Br(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this), this.maskStack = [], this.filterStack = [{}];
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e) {
                t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution);
            }, e.prototype.dispose = function() {
                this.framebuffer.dispose(), t.prototype.dispose.call(this);
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this, !0), this.framebuffer = null;
            }, e;
        }(Pr),
        Xr = function Xr() {
            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
        };

    Xr.prototype.set = function(t, e, r) {
        var i = e.width,
            n = e.height;

        if (r) {
            var o = t.width / 2 / i,
                s = t.height / 2 / n,
                a = t.x / i + o,
                h = t.y / n + s;
            r = Ge.add(r, Ge.NW), this.x0 = a + o * Ge.uX(r), this.y0 = h + s * Ge.uY(r), r = Ge.add(r, 2), this.x1 = a + o * Ge.uX(r), this.y1 = h + s * Ge.uY(r), r = Ge.add(r, 2), this.x2 = a + o * Ge.uX(r), this.y2 = h + s * Ge.uY(r), r = Ge.add(r, 2), this.x3 = a + o * Ge.uX(r), this.y3 = h + s * Ge.uY(r);
        } else this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n;

        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
    };

    var jr = new Xr(),
        Hr = function(t) {
            function e(r, i, n, o, s, a) {
                if (t.call(this), this.noFrame = !1, i || (this.noFrame = !0, i = new Ve(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), this.baseTexture = r, this._frame = i, this.trim = o, this.valid = !1, this.requiresUpdate = !1, this._uvs = jr, this.uvMatrix = null, this.orig = n || i, this._rotate = Number(s || 0), !0 === s) this._rotate = 2;
                else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                this.defaultAnchor = a ? new De(a.x, a.y) : new De(0, 0), this._updateID = 0, this.textureCacheIds = [], r.valid ? this.noFrame ? r.valid && this.onBaseTextureUpdated(r) : this.frame = i : r.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && r.on("update", this.onBaseTextureUpdated, this);
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                resolution: {
                    configurable: !0
                },
                frame: {
                    configurable: !0
                },
                rotate: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return e.prototype.update = function() {
                this.baseTexture.resource && this.baseTexture.resource.update();
            }, e.prototype.onBaseTextureUpdated = function(t) {
                if (this.noFrame) {
                    if (!this.baseTexture.valid) return;
                    this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
                } else this.frame = this._frame;

                this.emit("update", this);
            }, e.prototype.destroy = function(t) {
                if (this.baseTexture) {
                    if (t) {
                        var r = this.baseTexture.resource;
                        r && xe[r.url] && e.removeFromCache(r.url), this.baseTexture.destroy();
                    }

                    this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
                }

                this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null;
            }, e.prototype.clone = function() {
                return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor);
            }, e.prototype.updateUvs = function() {
                this._uvs === jr && (this._uvs = new Xr()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
            }, e.from = function(t, r, i) {
                void 0 === r && (r = {}), void 0 === i && (i = M.STRICT_TEXTURE_CACHE);
                var n = "string" == typeof t,
                    o = null;
                n ? o = t : (t._pixiId || (t._pixiId = "pixiid_" + me()), o = t._pixiId);
                var s = xe[o];
                if (n && i && !s) throw new Error('The cacheId "' + o + '" does not exist in TextureCache.');
                return s || (r.resolution || (r.resolution = Pe(t)), (s = new e(new Pr(t, r))).baseTexture.cacheId = o, Pr.addToCache(s.baseTexture, o), e.addToCache(s, o)), s;
            }, e.fromBuffer = function(t, r, i, n) {
                return new e(Pr.fromBuffer(t, r, i, n));
            }, e.fromLoader = function(t, r, i) {
                var n = new Er(t);
                n.url = r;
                var o = new e(new Pr(n, {
                    scaleMode: M.SCALE_MODE,
                    resolution: Pe(r)
                }));
                return i || (i = r), Pr.addToCache(o.baseTexture, i), e.addToCache(o, i), i !== r && (Pr.addToCache(o.baseTexture, r), e.addToCache(o, r)), o;
            }, e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), xe[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), xe[e] = t);
            }, e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = xe[t];

                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return r > -1 && e.textureCacheIds.splice(r, 1), delete xe[t], e;
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i) {
                        xe[t.textureCacheIds[i]] === t && delete xe[t.textureCacheIds[i]];
                    }

                    return t.textureCacheIds.length = 0, t;
                }

                return null;
            }, r.resolution.get = function() {
                return this.baseTexture.resolution;
            }, r.frame.get = function() {
                return this._frame;
            }, r.frame.set = function(t) {
                this._frame = t, this.noFrame = !1;
                var e = t.x,
                    r = t.y,
                    i = t.width,
                    n = t.height,
                    o = e + i > this.baseTexture.width,
                    s = r + n > this.baseTexture.height;

                if (o || s) {
                    var a = o && s ? "and" : "or",
                        h = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width,
                        u = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u);
                }

                this.valid = i && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs();
            }, r.rotate.get = function() {
                return this._rotate;
            }, r.rotate.set = function(t) {
                this._rotate = t, this.valid && this.updateUvs();
            }, r.width.get = function() {
                return this.orig.width;
            }, r.height.get = function() {
                return this.orig.height;
            }, Object.defineProperties(e.prototype, r), e;
        }(C);

    function Gr(t) {
        t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {};
    }

    Hr.EMPTY = new Hr(new Pr()), Gr(Hr.EMPTY), Gr(Hr.EMPTY.baseTexture), Hr.WHITE = function() {
        var t = document.createElement("canvas");
        t.width = 16, t.height = 16;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new Hr(new Pr(new Or(t)));
    }(), Gr(Hr.WHITE), Gr(Hr.WHITE.baseTexture);

    var Yr = function(t) {
            function e(e, r) {
                var i = null;

                if (!(e instanceof kr)) {
                    var n = arguments[1],
                        o = arguments[2],
                        s = arguments[3],
                        a = arguments[4];
                    console.warn("Please use RenderTexture.create(" + n + ", " + o + ") instead of the ctor directly."), i = arguments[0], r = null, e = new kr({
                        width: n,
                        height: o,
                        scaleMode: s,
                        resolution: a
                    });
                }

                t.call(this, e, r), this.legacyRenderer = i, this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e, r) {
                void 0 === r && (r = !0), t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, r && this.baseTexture.resize(t, e), this.updateUvs();
            }, e.prototype.setResolution = function(t) {
                var e = this.baseTexture;
                e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1));
            }, e.create = function(t) {
                return "number" == typeof t && (t = {
                    width: t,
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                }), new e(new kr(t));
            }, e;
        }(Hr),
        Vr = function Vr(t) {
            this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
        };

    Vr.prototype.createTexture = function(t, e) {
        var r = new kr(Object.assign({
            width: t,
            height: e,
            resolution: 1
        }, this.textureOptions));
        return new Yr(r);
    }, Vr.prototype.getOptimalTexture = function(t, e, r) {
        void 0 === r && (r = 1);
        var i = Vr.SCREEN_KEY;
        t *= r, e *= r, this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight || (i = (65535 & (t = le(t))) << 16 | 65535 & (e = le(e))), this.texturePool[i] || (this.texturePool[i] = []);
        var n = this.texturePool[i].pop();
        return n || (n = this.createTexture(t, e)), n.filterPoolKey = i, n.setResolution(r), n;
    }, Vr.prototype.getFilterTexture = function(t, e) {
        var r = this.getOptimalTexture(t.width, t.height, e || t.resolution);
        return r.filterFrame = t.filterFrame, r;
    }, Vr.prototype.returnTexture = function(t) {
        var e = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[e].push(t);
    }, Vr.prototype.returnFilterTexture = function(t) {
        this.returnTexture(t);
    }, Vr.prototype.clear = function(t) {
        if (t = !1 !== t)
            for (var e in this.texturePool) {
                var r = this.texturePool[e];
                if (r)
                    for (var i = 0; i < r.length; i++) {
                        r[i].destroy(!0);
                    }
            }
        this.texturePool = {};
    }, Vr.prototype.setScreenSize = function(t) {
        if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
            var e = Vr.SCREEN_KEY,
                r = this.texturePool[e];
            if (this.enableFullScreen = t.width > 0 && t.height > 0, r)
                for (var i = 0; i < r.length; i++) {
                    r[i].destroy(!0);
                }
            this.texturePool[e] = [], this._pixelsWidth = t.width, this._pixelsHeight = t.height;
        }
    }, Vr.SCREEN_KEY = "screen";

    var zr = function zr(t, e, r, i, n, o, s) {
        void 0 === r && (r = !1), void 0 === i && (i = 5126), this.buffer = t, this.size = e, this.normalized = r, this.type = i, this.stride = n, this.start = o, this.instance = s;
    };

    zr.prototype.destroy = function() {
        this.buffer = null;
    }, zr.from = function(t, e, r, i, n) {
        return new zr(t, e, r, i, n);
    };

    var Wr = 0,
        qr = function qr(t, e, r) {
            void 0 === e && (e = !0), void 0 === r && (r = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this["static"] = e, this.id = Wr++, this.disposeRunner = new yr("disposeBuffer", 2);
        };

    function Kr(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";

        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";

        return null;
    }

    qr.prototype.update = function(t) {
        this.data = t || this.data, this._updateID++;
    }, qr.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, qr.prototype.destroy = function() {
        this.dispose(), this.data = null;
    }, qr.from = function(t) {
        return t instanceof Array && (t = new Float32Array(t)), new qr(t);
    };
    var Zr = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    };

    var Jr = {
            5126: 4,
            5123: 2,
            5121: 1
        },
        Qr = 0,
        $r = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array
        },
        ti = function ti(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Qr++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new yr("disposeGeometry", 2), this.refCount = 0;
        };

    ti.prototype.addAttribute = function(t, e, r, i, n, o, s, a) {
        if (void 0 === i && (i = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
        e.data || (e instanceof Array && (e = new Float32Array(e)), e = new qr(e));
        var h = t.split("|");

        if (h.length > 1) {
            for (var u = 0; u < h.length; u++) {
                this.addAttribute(h[u], e, r, i, n);
            }

            return this;
        }

        var l = this.buffers.indexOf(e);
        return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new zr(l, r, i, n, o, s, a), this.instanced = this.instanced || a, this;
    }, ti.prototype.getAttribute = function(t) {
        return this.attributes[t];
    }, ti.prototype.getBuffer = function(t) {
        return this.buffers[this.getAttribute(t).buffer];
    }, ti.prototype.addIndex = function(t) {
        return t.data || (t instanceof Array && (t = new Uint16Array(t)), t = new qr(t)), t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this;
    }, ti.prototype.getIndex = function() {
        return this.indexBuffer;
    }, ti.prototype.interleave = function() {
        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
        var t,
            e = [],
            r = [],
            i = new qr();

        for (t in this.attributes) {
            var n = this.attributes[t],
                o = this.buffers[n.buffer];
            e.push(o.data), r.push(n.size * Jr[n.type] / 4), n.buffer = 0;
        }

        for (i.data = function(t, e) {
                for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++) {
                    i += e[o], r += t[o].length;
                }

                for (var s = new ArrayBuffer(4 * r), a = null, h = 0, u = 0; u < t.length; u++) {
                    var l = e[u],
                        c = t[u],
                        d = Kr(c);
                    n[d] || (n[d] = new Zr[d](s)), a = n[d];

                    for (var p = 0; p < c.length; p++) {
                        a[(p / l | 0) * i + h + p % l] = c[p];
                    }

                    h += l;
                }

                return new Float32Array(s);
            }(e, r), t = 0; t < this.buffers.length; t++) {
            this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
        }

        return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
    }, ti.prototype.getSize = function() {
        for (var t in this.attributes) {
            var e = this.attributes[t];
            return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
        }

        return 0;
    }, ti.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, ti.prototype.destroy = function() {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
    }, ti.prototype.clone = function() {
        for (var t = new ti(), e = 0; e < this.buffers.length; e++) {
            t.buffers[e] = new qr(this.buffers[e].data.slice());
        }

        for (var r in this.attributes) {
            var i = this.attributes[r];
            t.attributes[r] = new zr(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance);
        }

        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0), t;
    }, ti.merge = function(t) {
        for (var e, r = new ti(), i = [], n = [], o = [], s = 0; s < t.length; s++) {
            e = t[s];

            for (var a = 0; a < e.buffers.length; a++) {
                n[a] = n[a] || 0, n[a] += e.buffers[a].data.length, o[a] = 0;
            }
        }

        for (var h = 0; h < e.buffers.length; h++) {
            i[h] = new $r[Kr(e.buffers[h].data)](n[h]), r.buffers[h] = new qr(i[h]);
        }

        for (var u = 0; u < t.length; u++) {
            e = t[u];

            for (var l = 0; l < e.buffers.length; l++) {
                i[l].set(e.buffers[l].data, o[l]), o[l] += e.buffers[l].data.length;
            }
        }

        if (r.attributes = e.attributes, e.indexBuffer) {
            r.indexBuffer = r.buffers[e.buffers.indexOf(e.indexBuffer)], r.indexBuffer.index = !0;

            for (var c = 0, d = 0, p = 0, f = 0, v = 0; v < e.buffers.length; v++) {
                if (e.buffers[v] !== e.indexBuffer) {
                    f = v;
                    break;
                }
            }

            for (var m in e.attributes) {
                var g = e.attributes[m];
                (0 | g.buffer) === f && (d += g.size * Jr[g.type] / 4);
            }

            for (var y = 0; y < t.length; y++) {
                for (var _ = t[y].indexBuffer.data, x = 0; x < _.length; x++) {
                    r.indexBuffer.data[x + p] += c;
                }

                c += e.buffers[f].data.length / d, p += _.length;
            }
        }

        return r;
    };

    var ei = function(t) {
            function e() {
                t.call(this), this.addAttribute("aVertexPosition", [0, 0, 1, 0, 1, 1, 0, 1]).addIndex([0, 1, 3, 2]);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
        }(ti),
        ri = function(t) {
            function e() {
                t.call(this), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new qr(this.vertices), this.uvBuffer = new qr(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.map = function(t, e) {
                var r = 0,
                    i = 0;
                return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.invalidate(), this;
            }, e.prototype.invalidate = function() {
                return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
            }, e;
        }(ti),
        ii = 0,
        ni = function ni(t, e) {
            this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = ii++, this["static"] = !!e;
        };

    ni.prototype.update = function() {
        this.dirtyId++;
    }, ni.prototype.add = function(t, e, r) {
        this.uniforms[t] = new ni(e, r);
    }, ni.from = function(t, e) {
        return new ni(t, e);
    };

    var oi = function oi() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.sourceFrame = new Ve(), this.destinationFrame = new Ve(), this.filters = [];
    };

    oi.prototype.clear = function() {
        this.target = null, this.filters = null, this.renderTexture = null;
    };

    var si = function(e) {
            function r(t) {
                e.call(this, t), this.defaultFilterStack = [{}], this.texturePool = new Vr(), this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new ei(), this.quadUv = new ri(), this.tempRect = new Ve(), this.activeState = {}, this.globalUniforms = new ni({
                    outputFrame: this.tempRect,
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4)
                }, !0), this._pixelsWidth = t.view.width, this._pixelsHeight = t.view.height;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.push = function(t, e) {
                for (var r = this.renderer, i = this.defaultFilterStack, n = this.statePool.pop() || new oi(), o = e[0].resolution, s = e[0].padding, a = e[0].autoFit, h = e[0].legacy, u = 1; u < e.length; u++) {
                    var l = e[u];
                    o = Math.min(o, l.resolution), s = Math.max(s, l.padding), a = a || l.autoFit, h = h || l.legacy;
                }

                1 === i.length && (this.defaultFilterStack[0].renderTexture = r.renderTexture.current), i.push(n), n.resolution = o, n.legacy = h, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(s), a && n.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), n.sourceFrame.ceil(o), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, o), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height, n.renderTexture.filterFrame = n.sourceFrame, r.renderTexture.bind(n.renderTexture, n.sourceFrame), r.renderTexture.clear();
            }, r.prototype.pop = function() {
                var t = this.defaultFilterStack,
                    e = t.pop(),
                    r = e.filters;
                this.activeState = e;
                var i = this.globalUniforms.uniforms;
                i.outputFrame = e.sourceFrame, i.resolution = e.resolution;
                var n = i.inputSize,
                    o = i.inputPixel,
                    s = i.inputClamp;

                if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = n[0] * e.resolution, o[1] = n[1] * e.resolution, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
                    var a = i.filterArea;
                    a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, i.filterClamp = i.inputClamp;
                }

                this.globalUniforms.update();
                var h = t[t.length - 1];
                if (1 === r.length) r[0].apply(this, e.renderTexture, h.renderTexture, !1, e), this.returnFilterTexture(e.renderTexture);
                else {
                    var u = e.renderTexture,
                        l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
                    l.filterFrame = u.filterFrame;
                    var c = 0;

                    for (c = 0; c < r.length - 1; ++c) {
                        r[c].apply(this, u, l, !0, e);
                        var d = u;
                        u = l, l = d;
                    }

                    r[c].apply(this, u, h.renderTexture, !1, e), this.returnFilterTexture(u), this.returnFilterTexture(l);
                }
                e.clear(), this.statePool.push(e);
            }, r.prototype.applyFilter = function(e, r, i, n) {
                var o = this.renderer;
                o.renderTexture.bind(i, i ? i.filterFrame : null), n && o.renderTexture.clear(), e.uniforms.uSampler = r, e.uniforms.filterGlobals = this.globalUniforms, o.state.set(e.state), o.shader.bind(e), e.legacy ? (this.quadUv.map(r._frame, r.filterFrame), o.geometry.bind(this.quadUv), o.geometry.draw(t.DRAW_MODES.TRIANGLES)) : (o.geometry.bind(this.quad), o.geometry.draw(t.DRAW_MODES.TRIANGLE_STRIP));
            }, r.prototype.calculateSpriteMatrix = function(t, e) {
                var r = this.activeState,
                    i = r.sourceFrame,
                    n = r.destinationFrame,
                    o = e._texture.orig,
                    s = t.set(n.width, 0, 0, n.height, i.x, i.y),
                    a = e.worldTransform.copyTo(Ne.TEMP_MATRIX);
                return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s;
            }, r.prototype.destroy = function() {
                this.texturePool.clear(!1);
            }, r.prototype.getOptimalFilterTexture = function(t, e, r) {
                return void 0 === r && (r = 1), this.texturePool.getOptimalTexture(t, e, r);
            }, r.prototype.getFilterTexture = function(t, e) {
                if ("number" == typeof t) {
                    var r = t;
                    t = e, e = r;
                }

                t = t || this.activeState.renderTexture;
                var i = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
                return i.filterFrame = t.filterFrame, i;
            }, r.prototype.returnFilterTexture = function(t) {
                this.texturePool.returnTexture(t);
            }, r.prototype.emptyPool = function() {
                this.texturePool.clear(!0);
            }, r.prototype.resize = function() {
                this.texturePool.setScreenSize(this.renderer.view);
            }, r;
        }(Nr),
        ai = function ai(t) {
            this.renderer = t;
        };

    ai.prototype.flush = function() {}, ai.prototype.destroy = function() {
        this.renderer = null;
    }, ai.prototype.start = function() {}, ai.prototype.stop = function() {
        this.flush();
    }, ai.prototype.render = function(t) {};

    var hi = function(t) {
        function e(e) {
            t.call(this, e), this.emptyRenderer = new ai(e), this.currentRenderer = this.emptyRenderer;
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setObjectRenderer = function(t) {
            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start());
        }, e.prototype.flush = function() {
            this.setObjectRenderer(this.emptyRenderer);
        }, e.prototype.reset = function() {
            this.setObjectRenderer(this.emptyRenderer);
        }, e.prototype.copyBoundTextures = function(t, e) {
            for (var r = this.renderer.texture.boundTextures, i = e - 1; i >= 0; --i) {
                t[i] = r[i] || null, t[i] && (t[i]._batchLocation = i);
            }
        }, e.prototype.boundArray = function(t, e, r, i) {
            for (var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0; h < s; h++) {
                var u = n[h],
                    l = u._batchLocation;
                if (l >= 0 && l < i && e[l] === u) o[h] = l;
                else
                    for (; a < i;) {
                        var c = e[a];

                        if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
                            o[h] = a, u._batchLocation = a, e[a] = u;
                            break;
                        }

                        a++;
                    }
            }
        }, e;
    }(Nr);

    M.PREFER_ENV = D.any ? t.ENV.WEBGL : t.ENV.WEBGL2, M.STRICT_TEXTURE_CACHE = !1;

    var ui = 0,
        li = function(e) {
            function r(t) {
                e.call(this, t), this.webGLVersion = 1, this.extensions = {}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                isLost: {
                    configurable: !0
                }
            };
            return i.isLost.get = function() {
                return !this.gl || this.gl.isContextLost();
            }, r.prototype.contextChange = function(t) {
                this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = ui++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
            }, r.prototype.initFromContext = function(t) {
                this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = ui++, this.renderer.runners.contextChange.run(t);
            }, r.prototype.initFromOptions = function(t) {
                var e = this.createContext(this.renderer.view, t);
                this.initFromContext(e);
            }, r.prototype.createContext = function(e, r) {
                var i;
                if (M.PREFER_ENV >= t.ENV.WEBGL2 && (i = e.getContext("webgl2", r)), i) this.webGLVersion = 2;
                else if (this.webGLVersion = 1, !(i = e.getContext("webgl", r) || e.getContext("experimental-webgl", r))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                return this.gl = i, this.getExtensions(), i;
            }, r.prototype.getExtensions = function() {
                var t = this.gl;
                1 === this.webGLVersion ? Object.assign(this.extensions, {
                    drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                    depthTexture: t.getExtension("WEBKIT_WEBGL_depth_texture"),
                    loseContext: t.getExtension("WEBGL_lose_context"),
                    vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                    floatTexture: t.getExtension("OES_texture_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: t.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                }) : 2 === this.webGLVersion && Object.assign(this.extensions, {
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear")
                });
            }, r.prototype.handleContextLost = function(t) {
                t.preventDefault();
            }, r.prototype.handleContextRestored = function() {
                this.renderer.runners.contextChange.run(this.gl);
            }, r.prototype.destroy = function() {
                var t = this.renderer.view;
                t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
            }, r.prototype.postrender = function() {
                this.renderer.renderingToScreen && this.gl.flush();
            }, r.prototype.validateContext = function(t) {
                t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
            }, Object.defineProperties(r.prototype, i), r;
        }(Nr),
        ci = function(e) {
            function r(t) {
                e.call(this, t), this.managedFramebuffers = [], this.unknownFramebuffer = new Br(10, 10);
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                size: {
                    configurable: !0
                }
            };
            return r.prototype.contextChange = function() {
                var e = this.gl = this.renderer.gl;

                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new Ve(), this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                    var r = this.renderer.context.extensions.drawBuffers,
                        i = this.renderer.context.extensions.depthTexture;
                    M.PREFER_ENV === t.ENV.WEBGL_LEGACY && (r = null, i = null), r ? e.drawBuffers = function(t) {
                        return r.drawBuffersWEBGL(t);
                    } : (this.hasMRT = !1, e.drawBuffers = function() {}), i || (this.writeDepthTexture = !1);
                }
            }, r.prototype.bind = function(t, e) {
                var r = this.gl;

                if (t) {
                    var i = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                    this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer)), i.dirtyId !== t.dirtyId && (i.dirtyId = t.dirtyId, i.dirtyFormat !== t.dirtyFormat ? (i.dirtyFormat = t.dirtyFormat, this.updateFramebuffer(t)) : i.dirtySize !== t.dirtySize && (i.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));

                    for (var n = 0; n < t.colorTextures.length; n++) {
                        t.colorTextures[n].texturePart ? this.renderer.texture.unbind(t.colorTextures[n].texture) : this.renderer.texture.unbind(t.colorTextures[n]);
                    }

                    t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height);
                } else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
            }, r.prototype.setViewport = function(t, e, r, i) {
                var n = this.viewport;
                n.width === r && n.height === i && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = r, n.height = i, this.gl.viewport(t, e, r, i));
            }, i.size.get = function() {
                return this.current ? {
                    x: 0,
                    y: 0,
                    width: this.current.width,
                    height: this.current.height
                } : {
                    x: 0,
                    y: 0,
                    width: this.renderer.width,
                    height: this.renderer.height
                };
            }, r.prototype.clear = function(t, e, r, i) {
                var n = this.gl;
                n.clearColor(t, e, r, i), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
            }, r.prototype.initFramebuffer = function(t) {
                var e = {
                    framebuffer: this.gl.createFramebuffer(),
                    stencil: null,
                    dirtyId: 0,
                    dirtyFormat: 0,
                    dirtySize: 0
                };
                return t.glFramebuffers[this.CONTEXT_UID] = e, this.managedFramebuffers.push(t), t.disposeRunner.add(this), e;
            }, r.prototype.resizeFramebuffer = function(t) {
                var e = this.gl,
                    r = t.glFramebuffers[this.CONTEXT_UID];
                r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));

                for (var i = t.colorTextures, n = 0; n < i.length; n++) {
                    this.renderer.texture.bind(i[n], 0);
                }

                t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0);
            }, r.prototype.updateFramebuffer = function(t) {
                var e = this.gl,
                    r = t.glFramebuffers[this.CONTEXT_UID],
                    i = t.colorTextures.length;
                e.drawBuffers || (i = Math.min(i, 1));

                for (var n = [], o = 0; o < i; o++) {
                    var s = t.colorTextures[o];
                    s.texturePart ? (this.renderer.texture.bind(s.texture, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_CUBE_MAP_NEGATIVE_X + s.side, s.texture._glTextures[this.CONTEXT_UID].texture, 0)) : (this.renderer.texture.bind(s, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_2D, s._glTextures[this.CONTEXT_UID].texture, 0)), n.push(e.COLOR_ATTACHMENT0 + o);
                }

                if ((n.length > 1 && e.drawBuffers(n), t.depthTexture) && this.writeDepthTexture) {
                    var a = t.depthTexture;
                    this.renderer.texture.bind(a, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a._glTextures[this.CONTEXT_UID].texture, 0);
                }

                r.stencil || !t.stencil && !t.depth || (r.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height), t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, r.stencil));
            }, r.prototype.disposeFramebuffer = function(t, e) {
                var r = t.glFramebuffers[this.CONTEXT_UID],
                    i = this.gl;

                if (r) {
                    delete t.glFramebuffers[this.CONTEXT_UID];
                    var n = this.managedFramebuffers.indexOf(t);
                    n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (i.deleteFramebuffer(r.framebuffer), r.stencil && i.deleteRenderbuffer(r.stencil));
                }
            }, r.prototype.disposeAll = function(t) {
                var e = this.managedFramebuffers;
                this.managedFramebuffers = [];

                for (var r = 0; r < e.length; r++) {
                    this.disposeFramebuffer(e[r], t);
                }
            }, r.prototype.forceStencil = function() {
                var t = this.current;

                if (t) {
                    var e = t.glFramebuffers[this.CONTEXT_UID];

                    if (e && !e.stencil) {
                        t.enableStencil();
                        var r = t.width,
                            i = t.height,
                            n = this.gl,
                            o = n.createRenderbuffer();
                        n.bindRenderbuffer(n.RENDERBUFFER, o), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o);
                    }
                }
            }, r.prototype.reset = function() {
                this.current = this.unknownFramebuffer, this.viewport = new Ve();
            }, Object.defineProperties(r.prototype, i), r;
        }(Nr),
        di = function di(t) {
            this.buffer = t, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
        },
        pi = {
            5126: 4,
            5123: 2,
            5121: 1
        },
        fi = function(e) {
            function r(t) {
                e.call(this, t), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.boundBuffers = {}, this.managedGeometries = {}, this.managedBuffers = {};
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.contextChange = function() {
                this.disposeAll(!0);
                var e = this.gl = this.renderer.gl,
                    r = this.renderer.context;

                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, !e.createVertexArray) {
                    var i = this.renderer.context.extensions.vertexArrayObject;
                    M.PREFER_ENV === t.ENV.WEBGL_LEGACY && (i = null), i ? (e.createVertexArray = function() {
                        return i.createVertexArrayOES();
                    }, e.bindVertexArray = function(t) {
                        return i.bindVertexArrayOES(t);
                    }, e.deleteVertexArray = function(t) {
                        return i.deleteVertexArrayOES(t);
                    }) : (this.hasVao = !1, e.createVertexArray = function() {}, e.bindVertexArray = function() {}, e.deleteVertexArray = function() {});
                }

                if (!e.vertexAttribDivisor) {
                    var n = e.getExtension("ANGLE_instanced_arrays");
                    n ? (e.vertexAttribDivisor = function(t, e) {
                        return n.vertexAttribDivisorANGLE(t, e);
                    }, e.drawElementsInstanced = function(t, e, r, i, o) {
                        return n.drawElementsInstancedANGLE(t, e, r, i, o);
                    }, e.drawArraysInstanced = function(t, e, r, i) {
                        return n.drawArraysInstancedANGLE(t, e, r, i);
                    }) : this.hasInstance = !1;
                }

                this.canUseUInt32ElementIndex = 2 === r.webGLVersion || !!r.extensions.uint32ElementIndex;
            }, r.prototype.bind = function(t, e) {
                e = e || this.renderer.shader.shader;
                var r = this.gl,
                    i = t.glVertexArrayObjects[this.CONTEXT_UID];
                i || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = i = {});
                var n = i[e.program.id] || this.initGeometryVao(t, e.program);
                this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? r.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers();
            }, r.prototype.reset = function() {
                this.unbind();
            }, r.prototype.updateBuffers = function() {
                for (var t = this._activeGeometry, e = this.gl, r = 0; r < t.buffers.length; r++) {
                    var i = t.buffers[r],
                        n = i._glBuffers[this.CONTEXT_UID];

                    if (i._updateID !== n.updateID) {
                        n.updateID = i._updateID;
                        var o = i.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                        if (e.bindBuffer(o, n.buffer), this._boundBuffer = n, n.byteLength >= i.data.byteLength) e.bufferSubData(o, 0, i.data);
                        else {
                            var s = i["static"] ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                            n.byteLength = i.data.byteLength, e.bufferData(o, i.data, s);
                        }
                    }
                }
            }, r.prototype.checkCompatibility = function(t, e) {
                var r = t.attributes,
                    i = e.attributeData;

                for (var n in i) {
                    if (!r[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute');
                }
            }, r.prototype.getSignature = function(t, e) {
                var r = t.attributes,
                    i = e.attributeData,
                    n = ["g", t.id];

                for (var o in r) {
                    i[o] && n.push(o);
                }

                return n.join("-");
            }, r.prototype.initGeometryVao = function(t, e) {
                this.checkCompatibility(t, e);
                var r = this.gl,
                    i = this.CONTEXT_UID,
                    n = this.getSignature(t, e),
                    o = t.glVertexArrayObjects[this.CONTEXT_UID],
                    s = o[n];
                if (s) return o[e.id] = s, s;
                var a = t.buffers,
                    h = t.attributes,
                    u = {},
                    l = {};

                for (var c in a) {
                    u[c] = 0, l[c] = 0;
                }

                for (var d in h) {
                    !h[d].size && e.attributeData[d] ? h[d].size = e.attributeData[d].size : h[d].size || console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)"), u[h[d].buffer] += h[d].size * pi[h[d].type];
                }

                for (var p in h) {
                    var f = h[p],
                        v = f.size;
                    void 0 === f.stride && (u[f.buffer] === v * pi[f.type] ? f.stride = 0 : f.stride = u[f.buffer]), void 0 === f.start && (f.start = l[f.buffer], l[f.buffer] += v * pi[f.type]);
                }

                s = r.createVertexArray(), r.bindVertexArray(s);

                for (var m = 0; m < a.length; m++) {
                    var g = a[m];
                    g._glBuffers[i] || (g._glBuffers[i] = new di(r.createBuffer()), this.managedBuffers[g.id] = g, g.disposeRunner.add(this)), g._glBuffers[i].refCount++;
                }

                return this.activateVao(t, e), this._activeVao = s, o[e.id] = s, o[n] = s, s;
            }, r.prototype.disposeBuffer = function(t, e) {
                if (this.managedBuffers[t.id]) {
                    delete this.managedBuffers[t.id];
                    var r = t._glBuffers[this.CONTEXT_UID],
                        i = this.gl;
                    t.disposeRunner.remove(this), r && (e || i.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID]);
                }
            }, r.prototype.disposeGeometry = function(t, e) {
                if (this.managedGeometries[t.id]) {
                    delete this.managedGeometries[t.id];
                    var r = t.glVertexArrayObjects[this.CONTEXT_UID],
                        i = this.gl,
                        n = t.buffers;

                    if (t.disposeRunner.remove(this), r) {
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o]._glBuffers[this.CONTEXT_UID];
                            s.refCount--, 0 !== s.refCount || e || this.disposeBuffer(n[o], e);
                        }

                        if (!e)
                            for (var a in r) {
                                if ("g" === a[0]) {
                                    var h = r[a];
                                    this._activeVao === h && this.unbind(), i.deleteVertexArray(h);
                                }
                            }
                        delete t.glVertexArrayObjects[this.CONTEXT_UID];
                    }
                }
            }, r.prototype.disposeAll = function(t) {
                for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++) {
                    this.disposeGeometry(this.managedGeometries[e[r]], t);
                }

                e = Object.keys(this.managedBuffers);

                for (var i = 0; i < e.length; i++) {
                    this.disposeBuffer(this.managedBuffers[e[i]], t);
                }
            }, r.prototype.activateVao = function(t, e) {
                var r = this.gl,
                    i = this.CONTEXT_UID,
                    n = t.buffers,
                    o = t.attributes;
                t.indexBuffer && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[i].buffer);
                var s = null;

                for (var a in o) {
                    var h = o[a],
                        u = n[h.buffer]._glBuffers[i];

                    if (e.attributeData[a]) {
                        s !== u && (r.bindBuffer(r.ARRAY_BUFFER, u.buffer), s = u);
                        var l = e.attributeData[a].location;

                        if (r.enableVertexAttribArray(l), r.vertexAttribPointer(l, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                            if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                            r.vertexAttribDivisor(l, 1);
                        }
                    }
                }
            }, r.prototype.draw = function(t, e, r, i) {
                var n = this.gl,
                    o = this._activeGeometry;

                if (o.indexBuffer) {
                    var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                        a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                    2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s) : console.warn("unsupported index buffer type: uint32");
                } else o.instanced ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1) : n.drawArrays(t, r, e || o.getSize());

                return this;
            }, r.prototype.unbind = function() {
                this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
            }, r;
        }(Nr),
        vi = function vi(e) {
            this.type = t.MASK_TYPES.NONE, this.autoDetect = !0, this.maskObject = e || null, this.pooled = !1, this.isMaskData = !0, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null;
        };

    function mi(t, e, r, i) {
        var n = gi(t, t.VERTEX_SHADER, e),
            o = gi(t, t.FRAGMENT_SHADER, r),
            s = t.createProgram();
        if (t.attachShader(s, n), t.attachShader(s, o), i)
            for (var a in i) {
                t.bindAttribLocation(s, i[a], a);
            }
        return t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (t.getShaderParameter(n, t.COMPILE_STATUS) || (console.warn(e), console.error(t.getShaderInfoLog(n))), t.getShaderParameter(o, t.COMPILE_STATUS) || (console.warn(r), console.error(t.getShaderInfoLog(o))), console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s;
    }

    function gi(t, e, r) {
        var i = t.createShader(e);
        return t.shaderSource(i, r), t.compileShader(i), i;
    }

    function yi(t, e) {
        switch (t) {
            case "float":
                return 0;

            case "vec2":
                return new Float32Array(2 * e);

            case "vec3":
                return new Float32Array(3 * e);

            case "vec4":
                return new Float32Array(4 * e);

            case "int":
            case "sampler2D":
            case "sampler2DArray":
                return 0;

            case "ivec2":
                return new Int32Array(2 * e);

            case "ivec3":
                return new Int32Array(3 * e);

            case "ivec4":
                return new Int32Array(4 * e);

            case "bool":
                return !1;

            case "bvec2":
                return _i(2 * e);

            case "bvec3":
                return _i(3 * e);

            case "bvec4":
                return _i(4 * e);

            case "mat2":
                return new Float32Array([1, 0, 0, 1]);

            case "mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

            case "mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }

        return null;
    }

    function _i(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++) {
            e[r] = !1;
        }

        return e;
    }

    vi.prototype.reset = function() {
        this.pooled && (this.maskObject = null, this.type = t.MASK_TYPES.NONE, this.autoDetect = !0), this._target = null;
    }, vi.prototype.copyCountersOrReset = function(t) {
        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
    };
    var xi,
        bi = {},
        Ei = bi;

    function Ti() {
        if (Ei === bi || Ei && Ei.isContextLost()) {
            var e,
                r = document.createElement("canvas");
            M.PREFER_ENV >= t.ENV.WEBGL2 && (e = r.getContext("webgl2", {})), e || ((e = r.getContext("webgl", {}) || r.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null), Ei = e;
        }

        return Ei;
    }

    function wi(e, r, i) {
        if ("precision" !== e.substring(0, 9)) {
            var n = r;
            return r === t.PRECISION.HIGH && i !== t.PRECISION.HIGH && (n = t.PRECISION.MEDIUM), "precision " + n + " float;\n" + e;
        }

        return i !== t.PRECISION.HIGH && "precision highp" === e.substring(0, 15) ? e.replace("precision highp", "precision mediump") : e;
    }

    var Si = {
        "float": 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        "int": 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };

    function Ii(t) {
        return Si[t];
    }

    var Pi = null,
        Ai = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray"
        };

    function Oi(t, e) {
        if (!Pi) {
            var r = Object.keys(Ai);
            Pi = {};

            for (var i = 0; i < r.length; ++i) {
                var n = r[i];
                Pi[t[n]] = Ai[n];
            }
        }

        return Pi[e];
    }

    var Di = {
            "float": "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
            vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
            vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
            vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
            "int": "gl.uniform1i(location, v)",
            ivec2: "gl.uniform2i(location, v[0], v[1])",
            ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            bool: "gl.uniform1i(location, v)",
            bvec2: "gl.uniform2i(location, v[0], v[1])",
            bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            sampler2D: "gl.uniform1i(location, v)",
            samplerCube: "gl.uniform1i(location, v)",
            sampler2DArray: "gl.uniform1i(location, v)"
        },
        Mi = {
            "float": "gl.uniform1fv(location, v)",
            vec2: "gl.uniform2fv(location, v)",
            vec3: "gl.uniform3fv(location, v)",
            vec4: "gl.uniform4fv(location, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            "int": "gl.uniform1iv(location, v)",
            ivec2: "gl.uniform2iv(location, v)",
            ivec3: "gl.uniform3iv(location, v)",
            ivec4: "gl.uniform4iv(location, v)",
            bool: "gl.uniform1iv(location, v)",
            bvec2: "gl.uniform2iv(location, v)",
            bvec3: "gl.uniform3iv(location, v)",
            bvec4: "gl.uniform4iv(location, v)",
            sampler2D: "gl.uniform1iv(location, v)",
            samplerCube: "gl.uniform1iv(location, v)",
            sampler2DArray: "gl.uniform1iv(location, v)"
        };
    var Ci,
        Ri = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

    function Li(t, e) {
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");

        for (var r = e.createShader(e.FRAGMENT_SHADER);;) {
            var i = Ri.replace(/%forloop%/gi, Ni(t));
            if (e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
            t = t / 2 | 0;
        }

        return t;
    }

    function Ni(t) {
        for (var e = "", r = 0; r < t; ++r) {
            r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
        }

        return e;
    }

    var Fi = 0,
        Bi = {},
        Ui = function e(r, i, n) {
            void 0 === n && (n = "pixi-shader"), this.id = Fi++, this.vertexSrc = r || e.defaultVertexSrc, this.fragmentSrc = i || e.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (n = n.replace(/\s+/g, "-"), Bi[n] ? (Bi[n]++, n += "-" + Bi[n]) : Bi[n] = 1, this.vertexSrc = "#define SHADER_NAME " + n + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + n + "\n" + this.fragmentSrc, this.vertexSrc = wi(this.vertexSrc, M.PRECISION_VERTEX, t.PRECISION.HIGH), this.fragmentSrc = wi(this.fragmentSrc, M.PRECISION_FRAGMENT, function() {
                if (!xi) {
                    xi = t.PRECISION.MEDIUM;
                    var e = Ti();

                    if (e && e.getShaderPrecisionFormat) {
                        var r = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
                        xi = r.precision ? t.PRECISION.HIGH : t.PRECISION.MEDIUM;
                    }
                }

                return xi;
            }())), this.extractData(this.vertexSrc, this.fragmentSrc), this.glPrograms = {}, this.syncUniforms = null;
        },
        ki = {
            defaultVertexSrc: {
                configurable: !0
            },
            defaultFragmentSrc: {
                configurable: !0
            }
        };

    Ui.prototype.extractData = function(t, e) {
        var r = Ti();

        if (r) {
            var i = mi(r, t, e);
            this.attributeData = this.getAttributeData(i, r), this.uniformData = this.getUniformData(i, r), r.deleteProgram(i);
        } else this.uniformData = {}, this.attributeData = {};
    }, Ui.prototype.getAttributeData = function(t, e) {
        for (var r = {}, i = [], n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; o < n; o++) {
            var s = e.getActiveAttrib(t, o),
                a = Oi(e, s.type),
                h = {
                    type: a,
                    name: s.name,
                    size: Ii(a),
                    location: 0
                };
            r[s.name] = h, i.push(h);
        }

        i.sort(function(t, e) {
            return t.name > e.name ? 1 : -1;
        });

        for (var u = 0; u < i.length; u++) {
            i[u].location = u;
        }

        return r;
    }, Ui.prototype.getUniformData = function(t, e) {
        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
            var o = e.getActiveUniform(t, n),
                s = o.name.replace(/\[.*?\]/, ""),
                a = o.name.match(/\[.*?\]/, ""),
                h = Oi(e, o.type);
            r[s] = {
                type: h,
                size: o.size,
                isArray: a,
                value: yi(h, o.size)
            };
        }

        return r;
    }, ki.defaultVertexSrc.get = function() {
        return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
    }, ki.defaultFragmentSrc.get = function() {
        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
    }, Ui.from = function(t, e, r) {
        var i = t + e,
            n = _e[i];
        return n || (_e[i] = n = new Ui(t, e, r)), n;
    }, Object.defineProperties(Ui, ki);

    var Xi = function Xi(t, e) {
            for (var r in this.program = t, this.uniformGroup = e ? e instanceof ni ? e : new ni(e) : new ni({}), t.uniformData) {
                this.uniformGroup.uniforms[r] instanceof Array && (this.uniformGroup.uniforms[r] = new Float32Array(this.uniformGroup.uniforms[r]));
            }
        },
        ji = {
            uniforms: {
                configurable: !0
            }
        };

    Xi.prototype.checkUniformExists = function(t, e) {
        if (e.uniforms[t]) return !0;

        for (var r in e.uniforms) {
            var i = e.uniforms[r];
            if (i.group && this.checkUniformExists(t, i)) return !0;
        }

        return !1;
    }, Xi.prototype.destroy = function() {
        this.uniformGroup = null;
    }, ji.uniforms.get = function() {
        return this.uniformGroup.uniforms;
    }, Xi.from = function(t, e, r) {
        var i = Ui.from(t, e);
        return new Xi(i, r);
    }, Object.defineProperties(Xi.prototype, ji);

    var Hi = function Hi() {
            this.data = 0, this.blendMode = t.BLEND_MODES.NORMAL, this.polygonOffset = 0, this.blend = !0;
        },
        Gi = {
            blend: {
                configurable: !0
            },
            offsets: {
                configurable: !0
            },
            culling: {
                configurable: !0
            },
            depthTest: {
                configurable: !0
            },
            clockwiseFrontFace: {
                configurable: !0
            },
            blendMode: {
                configurable: !0
            },
            polygonOffset: {
                configurable: !0
            }
        };

    Gi.blend.get = function() {
        return !!(1 & this.data);
    }, Gi.blend.set = function(t) {
        !!(1 & this.data) !== t && (this.data ^= 1);
    }, Gi.offsets.get = function() {
        return !!(2 & this.data);
    }, Gi.offsets.set = function(t) {
        !!(2 & this.data) !== t && (this.data ^= 2);
    }, Gi.culling.get = function() {
        return !!(4 & this.data);
    }, Gi.culling.set = function(t) {
        !!(4 & this.data) !== t && (this.data ^= 4);
    }, Gi.depthTest.get = function() {
        return !!(8 & this.data);
    }, Gi.depthTest.set = function(t) {
        !!(8 & this.data) !== t && (this.data ^= 8);
    }, Gi.clockwiseFrontFace.get = function() {
        return !!(16 & this.data);
    }, Gi.clockwiseFrontFace.set = function(t) {
        !!(16 & this.data) !== t && (this.data ^= 16);
    }, Gi.blendMode.get = function() {
        return this._blendMode;
    }, Gi.blendMode.set = function(e) {
        this.blend = e !== t.BLEND_MODES.NONE, this._blendMode = e;
    }, Gi.polygonOffset.get = function() {
        return this._polygonOffset;
    }, Gi.polygonOffset.set = function(t) {
        this.offsets = !!t, this._polygonOffset = t;
    }, Hi.for2d = function() {
        var t = new Hi();
        return t.depthTest = !1, t.blend = !0, t;
    }, Object.defineProperties(Hi.prototype, Gi);

    var Yi = function(t) {
        function e(r, i, n) {
            var o = Ui.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
            t.call(this, o, n), this.padding = 0, this.resolution = M.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new Hi();
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var r = {
                blendMode: {
                    configurable: !0
                }
            },
            i = {
                defaultVertexSrc: {
                    configurable: !0
                },
                defaultFragmentSrc: {
                    configurable: !0
                }
            };
        return e.prototype.apply = function(t, e, r, i, n) {
            t.applyFilter(this, e, r, i, n);
        }, r.blendMode.get = function() {
            return this.state.blendMode;
        }, r.blendMode.set = function(t) {
            this.state.blendMode = t;
        }, i.defaultVertexSrc.get = function() {
            return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
        }, i.defaultFragmentSrc.get = function() {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
        }, Object.defineProperties(e.prototype, r), Object.defineProperties(e, i), e;
    }(Xi);

    Yi.SOURCE_KEY_MAP = {};

    var Vi = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
        zi = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
        Wi = new Ne(),
        qi = function qi(t, e) {
            this._texture = t, this.mapCoord = new Ne(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = -1, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1;
        },
        Ki = {
            texture: {
                configurable: !0
            }
        };

    Ki.texture.get = function() {
        return this._texture;
    }, Ki.texture.set = function(t) {
        this._texture = t, this._updateID = -1;
    }, qi.prototype.multiplyUvs = function(t, e) {
        void 0 === e && (e = t);

        for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
            var n = t[i],
                o = t[i + 1];
            e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty;
        }

        return e;
    }, qi.prototype.update = function(t) {
        var e = this._texture;
        if (!e || !e.valid) return !1;
        if (!t && this._updateID === e._updateID) return !1;
        this._updateID = e._updateID;
        var r = e._uvs;
        this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
        var i = e.orig,
            n = e.trim;
        n && (Wi.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Wi));
        var o = e.baseTexture,
            s = this.uClampFrame,
            a = this.clampMargin / o.resolution,
            h = this.clampOffset;
        return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0;
    }, Object.defineProperties(qi.prototype, Ki);

    var Zi = function(t) {
            function e(e) {
                var r = new Ne();
                t.call(this, Vi, zi), e.renderable = !1, this.maskSprite = e, this.maskMatrix = r;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t, e, r, i) {
                var n = this.maskSprite,
                    o = this.maskSprite.texture;
                o.valid && (o.transform || (o.transform = new qi(o, 0)), o.transform.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.transform.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.transform.uClampFrame, t.applyFilter(this, e, r, i));
            }, e;
        }(Yi),
        Ji = function(e) {
            function r(t) {
                e.call(this, t), this.scissorRenderTarget = null, this.enableScissor = !1, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.setMaskStack = function(t) {
                this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
            }, r.prototype.push = function(e, r) {
                if (!r.isMaskData) {
                    var i = this.maskDataPool.pop() || new vi();
                    i.pooled = !0, i.maskObject = r, r = i;
                }

                switch (r.autoDetect && this.detect(r), r.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), r._target = e, r.type) {
                    case t.MASK_TYPES.SCISSOR:
                        this.maskStack.push(r), this.renderer.scissor.push(r);
                        break;

                    case t.MASK_TYPES.STENCIL:
                        this.maskStack.push(r), this.renderer.stencil.push(r);
                        break;

                    case t.MASK_TYPES.SPRITE:
                        r.copyCountersOrReset(null), this.pushSpriteMask(r), this.maskStack.push(r);
                }
            }, r.prototype.pop = function(e) {
                var r = this.maskStack.pop();

                if (r && r._target === e) {
                    switch (r.type) {
                        case t.MASK_TYPES.SCISSOR:
                            this.renderer.scissor.pop();
                            break;

                        case t.MASK_TYPES.STENCIL:
                            this.renderer.stencil.pop(r.maskObject);
                            break;

                        case t.MASK_TYPES.SPRITE:
                            this.popSpriteMask();
                    }

                    r.reset(), r.pooled && this.maskDataPool.push(r);
                }
            }, r.prototype.detect = function(e) {
                var r = e.maskObject;
                if (r.isSprite) e.type = t.MASK_TYPES.SPRITE;
                else if (e.type = t.MASK_TYPES.STENCIL, this.enableScissor && r.isFastRect && r.isFastRect()) {
                    var i = r.worldTransform,
                        n = Math.atan2(i.b, i.a),
                        o = Math.atan2(i.d, i.c);
                    n = Math.round(n * (180 / Math.PI) * 100), o = ((o = Math.round(o * (180 / Math.PI) * 100) - n) % 18e3 + 18e3) % 18e3, 0 === (n = (n % 9e3 + 9e3) % 9e3) && 9e3 === o && (e.type = t.MASK_TYPES.SCISSOR);
                }
            }, r.prototype.pushSpriteMask = function(t) {
                var e = t.maskObject,
                    r = t._target,
                    i = this.alphaMaskPool[this.alphaMaskIndex];
                i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new Zi(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e;
                var n = r.filterArea;
                r.filterArea = e.getBounds(!0), this.renderer.filter.push(r, i), r.filterArea = n, this.alphaMaskIndex++;
            }, r.prototype.popSpriteMask = function() {
                this.renderer.filter.pop(), this.alphaMaskIndex--;
            }, r;
        }(Nr),
        Qi = function(t) {
            function e(e) {
                t.call(this, e), this.maskStack = [], this.glConst = 0;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                return this.maskStack.length;
            }, e.prototype.setMaskStack = function(t) {
                var e = this.renderer.gl,
                    r = this.getStackLength();
                this.maskStack = t;
                var i = this.getStackLength();
                i !== r && (0 === i ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()));
            }, e.prototype._useCurrent = function() {}, e.prototype.destroy = function() {
                t.prototype.destroy.call(this, this), this.maskStack = null;
            }, e;
        }(Nr),
        $i = function(t) {
            function e(e) {
                t.call(this, e), this.glConst = WebGLRenderingContext.SCISSOR_TEST;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._scissorCounter : 0;
            }, e.prototype.push = function(t) {
                var e = t.maskObject;
                e.renderable = !0;
                var r = t._scissorRect,
                    i = e.getBounds(!0),
                    n = this.renderer.gl;
                e.renderable = !1, r ? i.fit(r) : n.enable(n.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = i, this._useCurrent();
            }, e.prototype.pop = function() {
                var t = this.renderer.gl;
                this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
            }, e.prototype._useCurrent = function() {
                var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
                    e = this.renderer.renderTexture.current,
                    r = this.renderer.projection,
                    i = r.transform,
                    n = r.sourceFrame,
                    o = r.destinationFrame,
                    s = e ? e.resolution : this.renderer.resolution,
                    a = (t.x - n.x) * s + o.x,
                    h = (t.y - n.y) * s + o.y,
                    u = t.width * s,
                    l = t.height * s;
                i && (a += i.tx * s, h += i.ty * s), e || (h = this.renderer.height - l - h), this.renderer.gl.scissor(a, h, u, l);
            }, e;
        }(Qi),
        tn = function(t) {
            function e(e) {
                t.call(this, e), this.glConst = WebGLRenderingContext.STENCIL_TEST;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._stencilCounter : 0;
            }, e.prototype.push = function(t) {
                var e = t.maskObject,
                    r = this.renderer.gl,
                    i = t._stencilCounter;
                0 === i && (this.renderer.framebuffer.forceStencil(), r.enable(r.STENCIL_TEST)), t._stencilCounter++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, i, this._getBitwiseMask()), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent();
            }, e.prototype.pop = function(t) {
                var e = this.renderer.gl;
                0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent());
            }, e.prototype._useCurrent = function() {
                var t = this.renderer.gl;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
            }, e.prototype._getBitwiseMask = function() {
                return (1 << this.getStackLength()) - 1;
            }, e;
        }(Qi),
        en = function(t) {
            function e(e) {
                t.call(this, e), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new Ne(), this.transform = null;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function(t, e, r, i) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i), this.transform && this.projectionMatrix.append(this.transform);
                var n = this.renderer;
                n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
            }, e.prototype.calculateProjection = function(t, e, r, i) {
                var n = this.projectionMatrix;
                i ? (n.a = 1 / t.width * 2 * r, n.d = -1 / t.height * 2 * r, n.tx = -1 - e.x * n.a, n.ty = 1 - e.y * n.d) : (n.a = 1 / t.width * 2 * r, n.d = 1 / t.height * 2 * r, n.tx = -1 - e.x * n.a, n.ty = -1 - e.y * n.d);
            }, e.prototype.setTransform = function() {}, e;
        }(Nr),
        rn = new Ve(),
        nn = function(t) {
            function e(e) {
                t.call(this, e), this.clearColor = e._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new Ve(), this.destinationFrame = new Ve();
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function(t, e, r) {
                void 0 === t && (t = null), this.current = t;
                var i,
                    n = this.renderer;

                if (t) {
                    var o = t.baseTexture;
                    i = o.resolution, r || (rn.width = o.realWidth, rn.height = o.realHeight, r = rn), e || (e = r), this.renderer.framebuffer.bind(o.framebuffer, r), this.renderer.projection.update(r, e, i, !1), this.renderer.mask.setMaskStack(o.maskStack);
                } else i = this.renderer.resolution, r || (rn.width = n.width, rn.height = n.height, r = rn), e || (e = r), n.framebuffer.bind(null, r), this.renderer.projection.update(r, e, i, !0), this.renderer.mask.setMaskStack(this.defaultMaskStack);

                this.sourceFrame.copyFrom(e), this.destinationFrame.x = r.x / i, this.destinationFrame.y = r.y / i, this.destinationFrame.width = r.width / i, this.destinationFrame.height = r.height / i, e === r && this.sourceFrame.copyFrom(this.destinationFrame);
            }, e.prototype.clear = function(t) {
                t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3]);
            }, e.prototype.resize = function() {
                this.bind(null);
            }, e.prototype.reset = function() {
                this.bind(null);
            }, e;
        }(Nr),
        on = function on(t, e) {
            this.program = t, this.uniformData = e, this.uniformGroups = {};
        };

    on.prototype.destroy = function() {
        this.uniformData = null, this.uniformGroups = null, this.program = null;
    };

    var sn = 0,
        an = {
            textureCount: 0
        },
        hn = function(t) {
            function e(e) {
                t.call(this, e), this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this.id = sn++;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.systemCheck = function() {
                if (! function() {
                        if ("boolean" == typeof Ci) return Ci;

                        try {
                            var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                            Ci = !0 === t({
                                a: "b"
                            }, "a", "b");
                        } catch (t) {
                            Ci = !1;
                        }

                        return Ci;
                    }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
            }, e.prototype.contextChange = function(t) {
                this.gl = t, this.reset();
            }, e.prototype.bind = function(t, e) {
                t.uniforms.globals = this.renderer.globalUniforms;
                var r = t.program,
                    i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
                return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(i.program)), e || (an.textureCount = 0, this.syncUniformGroup(t.uniformGroup, an)), i;
            }, e.prototype.setUniforms = function(t) {
                var e = this.shader.program,
                    r = e.glPrograms[this.renderer.CONTEXT_UID];
                e.syncUniforms(r.uniformData, t, this.renderer);
            }, e.prototype.syncUniformGroup = function(t, e) {
                var r = this.getglProgram();
                t["static"] && t.dirtyId === r.uniformGroups[t.id] || (r.uniformGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e));
            }, e.prototype.syncUniforms = function(t, e, r) {
                (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r);
            }, e.prototype.createSyncGroups = function(t) {
                var e = this.getSignature(t, this.shader.program.uniformData);
                return this.cache[e] || (this.cache[e] = function(t, e) {
                    var r = "var v = null;\n    var cv = null\n    var t = 0;\n    var gl = renderer.gl\n    ";

                    for (var i in t.uniforms) {
                        var n = e[i];
                        n ? "float" === n.type && 1 === n.size ? r += "\n            if(uv." + i + " !== ud." + i + ".value)\n            {\n                ud." + i + ".value = uv." + i + "\n                gl.uniform1f(ud." + i + ".location, uv." + i + ")\n            }\n" : "sampler2D" !== n.type && "samplerCube" !== n.type && "sampler2DArray" !== n.type || 1 !== n.size || n.isArray ? "mat3" === n.type && 1 === n.size ? void 0 !== t.uniforms[i].a ? r += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ".toArray(true));\n                \n" : r += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ");\n                \n" : "vec2" === n.type && 1 === n.size ? void 0 !== t.uniforms[i].x ? r += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + i + ".location, v.x, v.y);\n                }\n" : r += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + i + ".location, v[0], v[1]);\n                }\n                \n" : "vec4" === n.type && 1 === n.size ? void 0 !== t.uniforms[i].width ? r += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + i + ".location, v.x, v.y, v.width, v.height)\n                }\n" : r += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + i + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n" : r += "\n            cv = ud." + i + ".value;\n            v = uv." + i + ";\n            " + (1 === n.size ? Di : Mi)[n.type].replace("location", "ud." + i + ".location") + ";\n" : r += "\n\n            t = syncData.textureCount++;\n\n            renderer.texture.bind(uv." + i + ", t);\n            \n            if(ud." + i + ".value !== t)\n            {\n                ud." + i + ".value = t;\n                gl.uniform1i(ud." + i + ".location, t);\n; // eslint-disable-line max-len\n            }\n" : t.uniforms[i].group && (r += "\n                    renderer.shader.syncUniformGroup(uv." + i + ", syncData);\n                ");
                    }

                    return new Function("ud", "uv", "renderer", "syncData", r);
                }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id];
            }, e.prototype.getSignature = function(t, e) {
                var r = t.uniforms,
                    i = [];

                for (var n in r) {
                    i.push(n), e[n] && i.push(e[n].type);
                }

                return i.join("-");
            }, e.prototype.getglProgram = function() {
                return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
            }, e.prototype.generateShader = function(t) {
                var e = this.gl,
                    r = t.program,
                    i = {};

                for (var n in r.attributeData) {
                    i[n] = r.attributeData[n].location;
                }

                var o = mi(e, r.vertexSrc, r.fragmentSrc, i),
                    s = {};

                for (var a in r.uniformData) {
                    var h = r.uniformData[a];
                    s[a] = {
                        location: e.getUniformLocation(o, a),
                        value: yi(h.type, h.size)
                    };
                }

                var u = new on(o, s);
                return r.glPrograms[this.renderer.CONTEXT_UID] = u, u;
            }, e.prototype.reset = function() {
                this.program = null, this.shader = null;
            }, e.prototype.destroy = function() {
                this.destroyed = !0;
            }, e;
        }(Nr);

    var un = 0,
        ln = 1,
        cn = 2,
        dn = 3,
        pn = 4,
        fn = function(e) {
            function r(r) {
                e.call(this, r), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = t.BLEND_MODES.NONE, this._blendEq = !1, this.map = [], this.map[un] = this.setBlend, this.map[ln] = this.setOffset, this.map[cn] = this.setCullFace, this.map[dn] = this.setDepthTest, this.map[pn] = this.setFrontFace, this.checks = [], this.defaultState = new Hi(), this.defaultState.blend = !0, this.defaultState.depth = !0;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.contextChange = function(e) {
                this.gl = e, this.blendModes = function(e, r) {
                    return void 0 === r && (r = []), r[t.BLEND_MODES.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.ADD] = [e.ONE, e.ONE], r[t.BLEND_MODES.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.NONE] = [0, 0], r[t.BLEND_MODES.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], r[t.BLEND_MODES.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.SRC_IN] = [e.DST_ALPHA, e.ZERO], r[t.BLEND_MODES.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO], r[t.BLEND_MODES.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE], r[t.BLEND_MODES.DST_IN] = [e.ZERO, e.SRC_ALPHA], r[t.BLEND_MODES.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA], r[t.BLEND_MODES.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], r[t.BLEND_MODES.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD], r;
                }(e), this.set(this.defaultState), this.reset();
            }, r.prototype.set = function(t) {
                if (t = t || this.defaultState, this.stateId !== t.data) {
                    for (var e = this.stateId ^ t.data, r = 0; e;) {
                        1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
                    }

                    this.stateId = t.data;
                }

                for (var i = 0; i < this.checks.length; i++) {
                    this.checks[i](this, t);
                }
            }, r.prototype.forceState = function(t) {
                t = t || this.defaultState;

                for (var e = 0; e < this.map.length; e++) {
                    this.map[e].call(this, !!(t.data & 1 << e));
                }

                for (var r = 0; r < this.checks.length; r++) {
                    this.checks[r](this, t);
                }

                this.stateId = t.data;
            }, r.prototype.setBlend = function(t) {
                this.updateCheck(r.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND);
            }, r.prototype.setOffset = function(t) {
                this.updateCheck(r.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
            }, r.prototype.setDepthTest = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
            }, r.prototype.setCullFace = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
            }, r.prototype.setFrontFace = function(t) {
                this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
            }, r.prototype.setBlendMode = function(t) {
                if (t !== this.blendMode) {
                    this.blendMode = t;
                    var e = this.blendModes[t],
                        r = this.gl;
                    2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
                }
            }, r.prototype.setPolygonOffset = function(t, e) {
                this.gl.polygonOffset(t, e);
            }, r.prototype.reset = function() {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(0), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
            }, r.prototype.updateCheck = function(t, e) {
                var r = this.checks.indexOf(t);
                e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1);
            }, r.checkBlendMode = function(t, e) {
                t.setBlendMode(e.blendMode);
            }, r.checkPolygonOffset = function(t, e) {
                t.setPolygonOffset(e.polygonOffset, 0);
            }, r;
        }(Nr),
        vn = function(e) {
            function r(t) {
                e.call(this, t), this.count = 0, this.checkCount = 0, this.maxIdle = M.GC_MAX_IDLE, this.checkCountMax = M.GC_MAX_CHECK_COUNT, this.mode = M.GC_MODE;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.postrender = function() {
                this.renderer.renderingToScreen && (this.count++, this.mode !== t.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
            }, r.prototype.run = function() {
                for (var t = this.renderer.texture, e = t.managedTextures, r = !1, i = 0; i < e.length; i++) {
                    var n = e[i];
                    !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0);
                }

                if (r) {
                    for (var o = 0, s = 0; s < e.length; s++) {
                        null !== e[s] && (e[o++] = e[s]);
                    }

                    e.length = o;
                }
            }, r.prototype.unload = function(t) {
                var e = this.renderer.textureSystem;
                t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture);

                for (var r = t.children.length - 1; r >= 0; r--) {
                    this.unload(t.children[r]);
                }
            }, r;
        }(Nr),
        mn = function mn(t) {
            this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = 6408, this.internalFormat = 5121;
        },
        gn = function(e) {
            function r(t) {
                e.call(this, t), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new Pr();
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.contextChange = function() {
                var t = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion;
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = e;

                for (var r = 0; r < e; r++) {
                    this.boundTextures[r] = null;
                }

                this.emptyTextures = {};
                var i = new mn(t.createTexture());
                t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new mn(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);

                for (var n = 0; n < 6; n++) {
                    t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                }

                t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);

                for (var o = 0; o < this.boundTextures.length; o++) {
                    this.bind(null, o);
                }
            }, r.prototype.bind = function(t, e) {
                void 0 === e && (e = 0);
                var r = this.gl;

                if (t) {
                    if ((t = t.baseTexture || t).valid) {
                        t.touched = this.renderer.textureGC.count;
                        var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                        this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, i.texture)), i.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t;
                    }
                } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null;
            }, r.prototype.reset = function() {
                this._unknownBoundTextures = !0, this.currentLocation = -1;

                for (var t = 0; t < this.boundTextures.length; t++) {
                    this.boundTextures[t] = this.unknownTexture;
                }
            }, r.prototype.unbind = function(t) {
                var e = this.gl,
                    r = this.boundTextures;

                if (this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;

                    for (var i = 0; i < r.length; i++) {
                        r[i] === this.unknownTexture && this.bind(null, i);
                    }
                }

                for (var n = 0; n < r.length; n++) {
                    r[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n), this.currentLocation = n), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[t.target].texture), r[n] = null);
                }
            }, r.prototype.initTexture = function(t) {
                var e = new mn(this.gl.createTexture());
                return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e;
            }, r.prototype.initTextureType = function(e, r) {
                if (r.internalFormat = e.format, r.type = e.type, 2 === this.webGLVersion) {
                    var i = this.renderer.gl;
                    e.type === i.FLOAT && e.format === i.RGBA && (r.internalFormat = i.RGBA32F), e.type === t.TYPES.HALF_FLOAT && (r.type = i.HALF_FLOAT), r.type === i.HALF_FLOAT && e.format === i.RGBA && (r.internalFormat = i.RGBA16F);
                }
            }, r.prototype.updateTexture = function(t) {
                var e = t._glTextures[this.CONTEXT_UID];

                if (e) {
                    var r = this.renderer;
                    if (this.initTextureType(t, e), t.resource && t.resource.upload(r, t, e));
                    else {
                        var i = t.realWidth,
                            n = t.realHeight,
                            o = r.gl;
                        (e.width !== i || e.height !== n || e.dirtyId < 0) && (e.width = i, e.height = n, o.texImage2D(t.target, 0, e.internalFormat, i, n, 0, t.format, e.type, null));
                    }
                    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId;
                }
            }, r.prototype.destroyTexture = function(t, e) {
                var r = this.gl;

                if ((t = t.baseTexture || t)._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                    var i = this.managedTextures.indexOf(t); -
                    1 !== i && pe(this.managedTextures, i, 1);
                }
            }, r.prototype.updateTextureStyle = function(e) {
                var r = e._glTextures[this.CONTEXT_UID];
                r && (e.mipmap !== t.MIPMAP_MODES.POW2 && 2 === this.webGLVersion || e.isPowerOfTwo ? r.mipmap = e.mipmap >= 1 : r.mipmap = 0, 2 === this.webGLVersion || e.isPowerOfTwo ? r.wrapMode = e.wrapMode : r.wrapMode = t.WRAP_MODES.CLAMP, e.resource && e.resource.style(this.renderer, e, r) || this.setStyle(e, r), r.dirtyStyleId = e.dirtyStyleId);
            }, r.prototype.setStyle = function(e, r) {
                var i = this.gl;

                if (r.mipmap && i.generateMipmap(e.target), i.texParameteri(e.target, i.TEXTURE_WRAP_S, r.wrapMode), i.texParameteri(e.target, i.TEXTURE_WRAP_T, r.wrapMode), r.mipmap) {
                    i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
                    var n = this.renderer.context.extensions.anisotropicFiltering;

                    if (n && e.anisotropicLevel > 0 && e.scaleMode === t.SCALE_MODES.LINEAR) {
                        var o = Math.min(e.anisotropicLevel, i.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                        i.texParameterf(e.target, n.TEXTURE_MAX_ANISOTROPY_EXT, o);
                    }
                } else i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode ? i.LINEAR : i.NEAREST);

                i.texParameteri(e.target, i.TEXTURE_MAG_FILTER, e.scaleMode ? i.LINEAR : i.NEAREST);
            }, r;
        }(Nr),
        yn = {
            FilterSystem: si,
            BatchSystem: hi,
            ContextSystem: li,
            FramebufferSystem: ci,
            GeometrySystem: fi,
            MaskSystem: Ji,
            ScissorSystem: $i,
            StencilSystem: tn,
            ProjectionSystem: en,
            RenderTextureSystem: nn,
            ShaderSystem: hn,
            StateSystem: fn,
            TextureGCSystem: vn,
            TextureSystem: gn
        },
        _n = new Ne(),
        xn = function(e) {
            function r(r, i) {
                e.call(this), (i = Object.assign({}, M.RENDER_OPTIONS, i)).roundPixels && (M.ROUND_PIXELS = i.roundPixels, ye("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)), this.options = i, this.type = t.RENDERER_TYPE.UNKNOWN, this.screen = new Ve(0, 0, i.width, i.height), this.view = i.view || document.createElement("canvas"), this.resolution = i.resolution || M.RESOLUTION, this.transparent = i.transparent, this.autoDensity = i.autoDensity || i.autoResize || !1, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = i.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new $e(), this._lastObjectRendered = this._tempDisplayObjectParent, this.plugins = {};
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                backgroundColor: {
                    configurable: !0
                }
            };
            return r.prototype.initPlugins = function(t) {
                for (var e in t) {
                    this.plugins[e] = new t[e](this);
                }
            }, i.width.get = function() {
                return this.view.width;
            }, i.height.get = function() {
                return this.view.height;
            }, r.prototype.resize = function(t, e) {
                this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = t + "px", this.view.style.height = e + "px");
            }, r.prototype.generateTexture = function(t, e, r, i) {
                0 === (i = i || t.getLocalBounds()).width && (i.width = 1), 0 === i.height && (i.height = 1);
                var n = Yr.create(0 | i.width, 0 | i.height, e, r);
                return _n.tx = -i.x, _n.ty = -i.y, this.render(t, n, !1, _n, !!t.parent), n;
            }, r.prototype.destroy = function(e) {
                for (var r in this.plugins) {
                    this.plugins[r].destroy(), this.plugins[r] = null;
                }

                e && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, this.type = t.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoDensity = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null;
            }, i.backgroundColor.get = function() {
                return this._backgroundColor;
            }, i.backgroundColor.set = function(t) {
                this._backgroundColor = t, this._backgroundColorString = te(t), $t(t, this._backgroundColorRgba);
            }, Object.defineProperties(r.prototype, i), r;
        }(C),
        bn = function(e) {
            function r(i) {
                void 0 === i && (i = {}), e.call(this, "WebGL", i), i = this.options, this.type = t.RENDERER_TYPE.WEBGL, this.gl = null, this.CONTEXT_UID = 0, this.runners = {
                    destroy: new yr("destroy"),
                    contextChange: new yr("contextChange", 1),
                    reset: new yr("reset"),
                    update: new yr("update"),
                    postrender: new yr("postrender"),
                    prerender: new yr("prerender"),
                    resize: new yr("resize", 2)
                }, this.globalUniforms = new ni({
                    projectionMatrix: new Ne()
                }, !0), this.addSystem(Ji, "mask").addSystem(li, "context").addSystem(fn, "state").addSystem(hn, "shader").addSystem(gn, "texture").addSystem(fi, "geometry").addSystem(ci, "framebuffer").addSystem($i, "scissor").addSystem(tn, "stencil").addSystem(en, "projection").addSystem(vn, "textureGC").addSystem(si, "filter").addSystem(nn, "renderTexture").addSystem(hi, "batch"), this.initPlugins(r.__plugins), i.context ? this.context.initFromContext(i.context) : this.context.initFromOptions({
                    alpha: this.transparent,
                    antialias: i.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: i.preserveDrawingBuffer,
                    powerPreference: this.options.powerPreference
                }), this.renderingToScreen = !0, Jt(2 === this.context.webGLVersion ? "WebGL 2" : "WebGL 1"), this.resize(this.options.width, this.options.height);
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.create = function(t) {
                if (Qt()) return new r(t);
                throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
            }, r.prototype.addSystem = function(t, e) {
                e || (e = t.name);
                var r = new t(this);
                if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');

                for (var i in this[e] = r, this.runners) {
                    this.runners[i].add(r);
                }

                return this;
            }, r.prototype.render = function(t, e, r, i, n) {
                if (this.renderingToScreen = !e, this.runners.prerender.run(), this.emit("prerender"), this.projection.transform = i, !this.context.isLost) {
                    if (e || (this._lastObjectRendered = t), !n) {
                        var o = t.parent;
                        t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o;
                    }

                    this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), this.runners.postrender.run(), this.projection.transform = null, this.emit("postrender");
                }
            }, r.prototype.resize = function(t, r) {
                e.prototype.resize.call(this, t, r), this.runners.resize.run(t, r);
            }, r.prototype.reset = function() {
                return this.runners.reset.run(), this;
            }, r.prototype.clear = function() {
                this.framebuffer.bind(), this.framebuffer.clear();
            }, r.prototype.destroy = function(t) {
                for (var r in this.runners.destroy.run(), this.runners) {
                    this.runners[r].destroy();
                }

                e.prototype.destroy.call(this, t), this.gl = null;
            }, r.registerPlugin = function(t, e) {
                r.__plugins = r.__plugins || {}, r.__plugins[t] = e;
            }, r;
        }(xn);

    function En(t) {
        return bn.create(t);
    }

    var Tn = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        wn = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Sn = function(t) {
            function e() {
                t.apply(this, arguments);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.from = function(t, r) {
                return new e(new Dr(t, r));
            }, e;
        }(Pr),
        In = function In() {
            this.texArray = null, this.blend = 0, this.type = t.DRAW_MODES.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
        },
        Pn = function Pn() {
            this.elements = [], this.ids = [], this.count = 0;
        };

    Pn.prototype.clear = function() {
        for (var t = 0; t < this.count; t++) {
            this.elements[t] = null;
        }

        this.count = 0;
    };

    var An = function An(t) {
            this.rawBinaryData = new ArrayBuffer(t), this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
        },
        On = {
            int8View: {
                configurable: !0
            },
            uint8View: {
                configurable: !0
            },
            int16View: {
                configurable: !0
            },
            uint16View: {
                configurable: !0
            },
            int32View: {
                configurable: !0
            }
        };

    On.int8View.get = function() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
    }, On.uint8View.get = function() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
    }, On.int16View.get = function() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
    }, On.uint16View.get = function() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
    }, On.int32View.get = function() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
    }, An.prototype.view = function(t) {
        return this[t + "View"];
    }, An.prototype.destroy = function() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
    }, An.sizeOf = function(t) {
        switch (t) {
            case "int8":
            case "uint8":
                return 1;

            case "int16":
            case "uint16":
                return 2;

            case "int32":
            case "uint32":
            case "float32":
                return 4;

            default:
                throw new Error(t + " isn't a valid view type");
        }
    }, Object.defineProperties(An.prototype, On);

    var Dn = function(e) {
        function r(t) {
            e.call(this, t), this.shaderGenerator = null, this.geometryClass = null, this.vertexSize = null, this.state = Hi.for2d(), this.size = 4 * M.SPRITE_BATCH_SIZE, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.MAX_TEXTURES = 1, this.renderer.on("prerender", this.onPrerender, this), t.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
        }

        return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.contextChange = function() {
            var e = this.renderer.gl;
            M.PREFER_ENV === t.ENV.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), M.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Li(this.MAX_TEXTURES, e)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);

            for (var r = 0; r < this._packedGeometryPoolSize; r++) {
                this._packedGeometries[r] = new this.geometryClass();
            }

            this.initFlushBuffers();
        }, r.prototype.initFlushBuffers = function() {
            for (var t = r._drawCallPool, e = r._textureArrayPool, i = this.size / 4, n = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i;) {
                t.push(new In());
            }

            for (; e.length < n;) {
                e.push(new Pn());
            }

            for (var o = 0; o < this.MAX_TEXTURES; o++) {
                this._tempBoundTextures[o] = null;
            }
        }, r.prototype.onPrerender = function() {
            this._flushId = 0;
        }, r.prototype.render = function(t) {
            t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t);
        }, r.prototype.buildTexturesAndDrawCalls = function() {
            var t = this._bufferedTextures,
                e = this.MAX_TEXTURES,
                i = r._textureArrayPool,
                n = this.renderer.batch,
                o = this._tempBoundTextures,
                s = this.renderer.textureGC.count,
                a = ++Pr._globalBatch,
                h = 0,
                u = i[0],
                l = 0;
            n.copyBoundTextures(o, e);

            for (var c = 0; c < this._bufferSize; ++c) {
                var d = t[c];
                t[c] = null, d._batchEnabled !== a && (u.count >= e && (n.boundArray(u, o, a, e), this.buildDrawCalls(u, l, c), l = c, u = i[++h], ++a), d._batchEnabled = a, d.touched = s, u.elements[u.count++] = d);
            }

            u.count > 0 && (n.boundArray(u, o, a, e), this.buildDrawCalls(u, l, this._bufferSize), ++h, ++a);

            for (var p = 0; p < o.length; p++) {
                o[p] = null;
            }

            Pr._globalBatch = a;
        }, r.prototype.buildDrawCalls = function(t, e, i) {
            var n = this._bufferedElements,
                o = this._attributeBuffer,
                s = this._indexBuffer,
                a = this.vertexSize,
                h = r._drawCallPool,
                u = this._dcIndex,
                l = this._aIndex,
                c = this._iIndex,
                d = h[u];
            d.start = this._iIndex, d.texArray = t;

            for (var p = e; p < i; ++p) {
                var f = n[p],
                    v = f._texture.baseTexture,
                    m = re[v.alphaMode ? 1 : 0][f.blendMode];
                n[p] = null, e < p && d.blend !== m && (d.size = c - d.start, e = p, (d = h[++u]).texArray = t, d.start = c), this.packInterleavedGeometry(f, o, s, l, c), l += f.vertexData.length / 2 * a, c += f.indices.length, d.blend = m;
            }

            e < i && (d.size = c - d.start, ++u), this._dcIndex = u, this._aIndex = l, this._iIndex = c;
        }, r.prototype.bindAndClearTexArray = function(t) {
            for (var e = this.renderer.texture, r = 0; r < t.count; r++) {
                e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
            }

            t.count = 0;
        }, r.prototype.updateGeometry = function() {
            var t = this._packedGeometries,
                e = this._attributeBuffer,
                r = this._indexBuffer;
            M.CAN_UPLOAD_SAME_BUFFER ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass()), t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
        }, r.prototype.drawBatches = function() {
            for (var t = this._dcIndex, e = this.renderer, i = e.gl, n = e.state, o = r._drawCallPool, s = null, a = 0; a < t; a++) {
                var h = o[a],
                    u = h.texArray,
                    l = h.type,
                    c = h.size,
                    d = h.start,
                    p = h.blend;
                s !== u && (s = u, this.bindAndClearTexArray(u)), this.state.blendMode = p, n.set(this.state), i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * d);
            }
        }, r.prototype.flush = function() {
            0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
        }, r.prototype.start = function() {
            this.renderer.state.set(this.state), this.renderer.shader.bind(this._shader), M.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
        }, r.prototype.stop = function() {
            this.flush();
        }, r.prototype.destroy = function() {
            for (var t = 0; t < this._packedGeometryPoolSize; t++) {
                this._packedGeometries[t] && this._packedGeometries[t].destroy();
            }

            this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), e.prototype.destroy.call(this);
        }, r.prototype.getAttributeBuffer = function(t) {
            var e = le(Math.ceil(t / 8)),
                r = de(e),
                i = 8 * e;
            this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
            var n = this._aBuffers[i];
            return n || (this._aBuffers[i] = n = new An(i * this.vertexSize * 4)), n;
        }, r.prototype.getIndexBuffer = function(t) {
            var e = le(Math.ceil(t / 12)),
                r = de(e),
                i = 12 * e;
            this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
            var n = this._iBuffers[r];
            return n || (this._iBuffers[r] = n = new Uint16Array(i)), n;
        }, r.prototype.packInterleavedGeometry = function(t, e, r, i, n) {
            for (var o = e.uint32View, s = e.float32View, a = i / this.vertexSize, h = t.uvs, u = t.indices, l = t.vertexData, c = t._texture.baseTexture._batchLocation, d = Math.min(t.worldAlpha, 1), p = d < 1 && t._texture.baseTexture.alphaMode ? oe(t._tintRGB, d) : t._tintRGB + (255 * d << 24), f = 0; f < l.length; f += 2) {
                s[i++] = l[f], s[i++] = l[f + 1], s[i++] = h[f], s[i++] = h[f + 1], o[i++] = p, s[i++] = c;
            }

            for (var v = 0; v < u.length; v++) {
                r[n++] = a + u[v];
            }
        }, r;
    }(ai);

    Dn._drawCallPool = [], Dn._textureArrayPool = [];

    var Mn = function Mn(t, e) {
        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
        if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".');
    };

    Mn.prototype.generateShader = function(t) {
        if (!this.programCache[t]) {
            for (var e = new Int32Array(t), r = 0; r < t; r++) {
                e[r] = r;
            }

            this.defaultGroupCache[t] = ni.from({
                uSamplers: e
            }, !0);
            var i = this.fragTemplate;
            i = (i = i.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Ui(this.vertexSrc, i);
        }

        var n = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new Ne(),
            "default": this.defaultGroupCache[t]
        };
        return new Xi(this.programCache[t], n);
    }, Mn.prototype.generateSampleSrc = function(t) {
        var e = "";
        e += "\n", e += "\n";

        for (var r = 0; r < t; r++) {
            r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(vTextureId < " + r + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
        }

        return e += "\n", e += "\n";
    };

    var Cn = function(e) {
            function r(r) {
                void 0 === r && (r = !1), e.call(this), this._buffer = new qr(null, r, !1), this._indexBuffer = new qr(null, r, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aColor", this._buffer, 4, !0, t.TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, t.TYPES.FLOAT).addIndex(this._indexBuffer);
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r;
        }(ti),
        Rn = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        Ln = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        Nn = function Nn() {},
        Fn = {
            defaultVertexSrc: {
                configurable: !0
            },
            defaultFragmentTemplate: {
                configurable: !0
            }
        };

    Nn.create = function(t) {
        var e = Object.assign({
                vertex: Rn,
                fragment: Ln,
                geometryClass: Cn,
                vertexSize: 6
            }, t),
            r = e.vertex,
            i = e.fragment,
            n = e.vertexSize,
            o = e.geometryClass;
        return function(t) {
            function e(e) {
                t.call(this, e), this.shaderGenerator = new Mn(r, i), this.geometryClass = o, this.vertexSize = n;
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
        }(Dn);
    }, Fn.defaultVertexSrc.get = function() {
        return Rn;
    }, Fn.defaultFragmentTemplate.get = function() {
        return Ln;
    }, Object.defineProperties(Nn, Fn);

    var Bn = Nn.create(),
        Un = function t(e) {
            var r = this;
            e = Object.assign({
                forceCanvas: !1
            }, e), this.renderer = En(e), this.stage = new $e(), t._plugins.forEach(function(t) {
                t.init.call(r, e);
            });
        },
        kn = {
            view: {
                configurable: !0
            },
            screen: {
                configurable: !0
            }
        };

    Un.registerPlugin = function(t) {
        Un._plugins.push(t);
    }, Un.prototype.render = function() {
        this.renderer.render(this.stage);
    }, kn.view.get = function() {
        return this.renderer.view;
    }, kn.screen.get = function() {
        return this.renderer.screen;
    }, Un.prototype.destroy = function(t, e) {
        var r = this,
            i = Un._plugins.slice(0);

        i.reverse(), i.forEach(function(t) {
            t.destroy.call(r);
        }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null;
    }, Object.defineProperties(Un.prototype, kn), Un._plugins = [];

    var Xn = function Xn() {};

    Xn.init = function(t) {
        var e = this;
        Object.defineProperty(this, "resizeTo", {
            set: function set(t) {
                window.removeEventListener("resize", this.resize), this._resizeTo = t, t && (window.addEventListener("resize", this.resize), this.resize());
            },
            get: function get() {
                return this._resizeTo;
            }
        }), this.resize = function() {
            e._resizeTo && (e._resizeTo === window ? e.renderer.resize(window.innerWidth, window.innerHeight) : e.renderer.resize(e._resizeTo.clientWidth, e._resizeTo.clientHeight));
        }, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
    }, Xn.destroy = function() {
        this.resizeTo = null, this.resize = null;
    }, Un.registerPlugin(Xn);

    var jn = new Ve(),
        Hn = function Hn(t) {
            this.renderer = t, t.extract = this;
        };

    Hn.prototype.image = function(t, e, r) {
        var i = new Image();
        return i.src = this.base64(t, e, r), i;
    }, Hn.prototype.base64 = function(t, e, r) {
        return this.canvas(t).toDataURL(e, r);
    }, Hn.prototype.canvas = function(t) {
        var e,
            r,
            i,
            n = this.renderer,
            o = !1,
            s = !1;
        t && (t instanceof Yr ? i = t : (i = this.renderer.generateTexture(t), s = !0)), i ? (e = i.baseTexture.resolution, r = i.frame, o = !1, n.renderTexture.bind(i)) : (e = this.renderer.resolution, o = !0, (r = jn).width = this.renderer.width, r.height = this.renderer.height, n.renderTexture.bind(null));
        var a = Math.floor(r.width * e + 1e-4),
            h = Math.floor(r.height * e + 1e-4),
            u = new Ee(a, h, 1),
            l = new Uint8Array(4 * a * h),
            c = n.gl;
        c.readPixels(r.x * e, r.y * e, a, h, c.RGBA, c.UNSIGNED_BYTE, l);
        var d = u.context.getImageData(0, 0, a, h);
        return Hn.arrayPostDivide(l, d.data), u.context.putImageData(d, 0, 0), o && (u.context.scale(1, -1), u.context.drawImage(u.canvas, 0, -h)), s && i.destroy(!0), u.canvas;
    }, Hn.prototype.pixels = function(t) {
        var e,
            r,
            i,
            n = this.renderer,
            o = !1;
        t && (t instanceof Yr ? i = t : (i = this.renderer.generateTexture(t), o = !0)), i ? (e = i.baseTexture.resolution, r = i.frame, n.renderTexture.bind(i)) : (e = n.resolution, (r = jn).width = n.width, r.height = n.height, n.renderTexture.bind(null));
        var s = r.width * e,
            a = r.height * e,
            h = new Uint8Array(4 * s * a),
            u = n.gl;
        return u.readPixels(r.x * e, r.y * e, s, a, u.RGBA, u.UNSIGNED_BYTE, h), o && i.destroy(!0), Hn.arrayPostDivide(h, h), h;
    }, Hn.prototype.destroy = function() {
        this.renderer.extract = null, this.renderer = null;
    }, Hn.arrayPostDivide = function(t, e) {
        for (var r = 0; r < t.length; r += 4) {
            var i = e[r + 3] = t[r + 3];
            0 !== i ? (e[r] = Math.round(Math.min(255 * t[r] / i, 255)), e[r + 1] = Math.round(Math.min(255 * t[r + 1] / i, 255)), e[r + 2] = Math.round(Math.min(255 * t[r + 2] / i, 255))) : (e[r] = t[r], e[r + 1] = t[r + 1], e[r + 2] = t[r + 2]);
        }
    };

    var Gn = function Gn(t, e) {
            e = e || {};

            for (var r = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) {
                n[r.key[o]] = i[o] || "";
            }

            return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, function(t, e, i) {
                e && (n[r.q.name][e] = i);
            }), n;
        },
        Yn = function(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
        }(r(function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });

            var r = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }

                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e;
                };
            }();

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }

            var n = function() {
                function t(e, r, n) {
                    void 0 === r && (r = !1), i(this, t), this._fn = e, this._once = r, this._thisArg = n, this._next = this._prev = this._owner = null;
                }

                return r(t, [{
                    key: "detach",
                    value: function value() {
                        return null !== this._owner && (this._owner.detach(this), !0);
                    }
                }]), t;
            }();

            function o(t, e) {
                return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e;
            }

            var s = function() {
                function t() {
                    i(this, t), this._head = this._tail = void 0;
                }

                return r(t, [{
                    key: "handlers",
                    value: function value() {
                        var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                            e = this._head;
                        if (t) return !!e;

                        for (var r = []; e;) {
                            r.push(e), e = e._next;
                        }

                        return r;
                    }
                }, {
                    key: "has",
                    value: function value(t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                        return t._owner === this;
                    }
                }, {
                    key: "dispatch",
                    value: function value() {
                        var t = arguments,
                            e = this._head;
                        if (!e) return !1;

                        for (; e;) {
                            e._once && this.detach(e), e._fn.apply(e._thisArg, t), e = e._next;
                        }

                        return !0;
                    }
                }, {
                    key: "add",
                    value: function value(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                        return o(this, new n(t, !1, e));
                    }
                }, {
                    key: "once",
                    value: function value(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                        return o(this, new n(t, !0, e));
                    }
                }, {
                    key: "detach",
                    value: function value(t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                        return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this);
                    }
                }, {
                    key: "detachAll",
                    value: function value() {
                        var t = this._head;
                        if (!t) return this;

                        for (this._head = this._tail = null; t;) {
                            t._owner = null, t = t._next;
                        }

                        return this;
                    }
                }]), t;
            }();

            s.MiniSignalBinding = n, e["default"] = s, t.exports = e["default"];
        }));

    function Vn() {}

    function zn(t, e, r, i) {
        var n = 0,
            o = t.length;
        ! function s(a) {
            a || n === o ? r && r(a) : i ? setTimeout(function() {
                e(t[n++], s);
            }, 1) : e(t[n++], s);
        }();
    }

    function Wn(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments);
        };
    }

    function qn(t, e) {
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var r = 0,
            i = {
                _tasks: [],
                concurrency: e,
                saturated: Vn,
                unsaturated: Vn,
                buffer: e / 4,
                empty: Vn,
                drain: Vn,
                error: Vn,
                started: !1,
                paused: !1,
                push: function push(t, e) {
                    n(t, !1, e);
                },
                kill: function kill() {
                    r = 0, i.drain = Vn, i.started = !1, i._tasks = [];
                },
                unshift: function unshift(t, e) {
                    n(t, !0, e);
                },
                process: function process() {
                    for (; !i.paused && r < i.concurrency && i._tasks.length;) {
                        var e = i._tasks.shift();

                        0 === i._tasks.length && i.empty(), (r += 1) === i.concurrency && i.saturated(), t(e.data, Wn(o(e)));
                    }
                },
                length: function length() {
                    return i._tasks.length;
                },
                running: function running() {
                    return r;
                },
                idle: function idle() {
                    return i._tasks.length + r === 0;
                },
                pause: function pause() {
                    !0 !== i.paused && (i.paused = !0);
                },
                resume: function resume() {
                    if (!1 !== i.paused) {
                        i.paused = !1;

                        for (var t = 1; t <= i.concurrency; t++) {
                            i.process();
                        }
                    }
                }
            };

        function n(t, e, r) {
            if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
            if (i.started = !0, null == t && i.idle()) setTimeout(function() {
                return i.drain();
            }, 1);
            else {
                var n = {
                    data: t,
                    callback: "function" == typeof r ? r : Vn
                };
                e ? i._tasks.unshift(n) : i._tasks.push(n), setTimeout(function() {
                    return i.process();
                }, 1);
            }
        }

        function o(t) {
            return function() {
                r -= 1, t.callback.apply(t, arguments), null != arguments[0] && i.error(arguments[0], t.data), r <= i.concurrency - i.buffer && i.unsaturated(), i.idle() && i.drain(), i.process();
            };
        }

        return i;
    }

    var Kn = {};

    function Zn(t, e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }

    function Jn(t, e, r) {
        return e && Zn(t.prototype, e), r && Zn(t, r), t;
    }

    var Qn = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest()),
        $n = null;

    function to() {}

    var eo = function() {
        function t(e, r, i) {
            if ("string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
            i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = to, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new Yn(), this.onProgress = new Yn(), this.onComplete = new Yn(), this.onAfterMiddleware = new Yn();
        }

        t.setExtensionLoadType = function(e, r) {
            ro(t._loadTypeMap, e, r);
        }, t.setExtensionXhrType = function(e, r) {
            ro(t._xhrTypeMap, e, r);
        };
        var e = t.prototype;
        return e.complete = function() {
            this._clearEvents(), this._finish();
        }, e.abort = function(e) {
            if (!this.error) {
                if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                else if (this.xdr) this.xdr.abort();
                else if (this.data)
                    if (this.data.src) this.data.src = t.EMPTY_GIF;
                    else
                        for (; this.data.firstChild;) {
                            this.data.removeChild(this.data.firstChild);
                        }

                this._finish();
            }
        }, e.load = function(e) {
            var r = this;
            if (!this.isLoading)
                if (this.isComplete) e && setTimeout(function() {
                    return e(r);
                }, 1);
                else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;

                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;

                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;

                    case t.LOAD_TYPE.XHR:
                    default:
                        Qn && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                }
        }, e._hasFlag = function(t) {
            return 0 != (this._flags & t);
        }, e._setFlag = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t;
        }, e._clearEvents = function() {
            clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null));
        }, e._finish = function() {
            if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this);
        }, e._loadElement = function(t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image() : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
        }, e._loadSourceElement = function(t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio() : this.data = document.createElement(t), null !== this.data) {
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                    for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) {
                        this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
                    } else {
                        var i = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(i) ? i[0] : i));
                    }
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
            } else this.abort("Unsupported element: " + t);
        }, e._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest();
            e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send();
        }, e._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new XDomainRequest();
            t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                return t.send();
            }, 1);
        }, e._createSource = function(t, e, r) {
            r || (r = t + "/" + this._getExtension(e));
            var i = document.createElement("source");
            return i.src = e, i.type = r, i;
        }, e._onError = function(t) {
            this.abort("Failed to load element using: " + t.target.nodeName);
        }, e._onProgress = function(t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total);
        }, e._onTimeout = function() {
            this.abort("Load timed out.");
        }, e._xhrOnError = function() {
            var t = this.xhr;
            this.abort(io(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"');
        }, e._xhrOnTimeout = function() {
            var t = this.xhr;
            this.abort(io(t) + " Request timed out.");
        }, e._xhrOnAbort = function() {
            var t = this.xhr;
            this.abort(io(t) + " Request was aborted by the user.");
        }, e._xhrOnLoad = function() {
            var e = this.xhr,
                r = "",
                i = void 0 === e.status ? 200 : e.status;

            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 === (i / 100 | 0)) {
                if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT;
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(r), this.type = t.TYPE.JSON;
                } catch (t) {
                    return void this.abort("Error trying to parse loaded json: " + t);
                } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) {
                        var n = new DOMParser();
                        this.data = n.parseFromString(r, "text/xml");
                    } else {
                        var o = document.createElement("div");
                        o.innerHTML = r, this.data = o;
                    }

                    this.type = t.TYPE.XML;
                } catch (t) {
                    return void this.abort("Error trying to parse loaded xml: " + t);
                } else this.data = e.response || r;
                this.complete();
            } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
        }, e._determineCrossOrigin = function(t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (window.origin !== window.location.origin) return "anonymous";
            e = e || window.location, $n || ($n = document.createElement("a")), $n.href = t;
            var r = !(t = Gn($n.href, {
                    strictMode: !0
                })).port && "" === e.port || t.port === e.port,
                i = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && r && i === e.protocol ? "" : "anonymous";
        }, e._determineXhrType = function() {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
        }, e._determineLoadType = function() {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
        }, e._getExtension = function() {
            var t = this.url,
                e = "";

            if (this.isDataUrl) {
                var r = t.indexOf("/");
                e = t.substring(r + 1, t.indexOf(";", r));
            } else {
                var i = t.indexOf("?"),
                    n = t.indexOf("#"),
                    o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
                e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1);
            }

            return e.toLowerCase();
        }, e._getMimeFromXhrType = function(e) {
            switch (e) {
                case t.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";

                case t.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";

                case t.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";

                case t.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";

                case t.XHR_RESPONSE_TYPE.DEFAULT:
                case t.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain";
            }
        }, Jn(t, [{
            key: "isDataUrl",
            get: function get() {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
            }
        }, {
            key: "isComplete",
            get: function get() {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
            }
        }, {
            key: "isLoading",
            get: function get() {
                return this._hasFlag(t.STATUS_FLAGS.LOADING);
            }
        }]), t;
    }();

    function ro(t, e, r) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r);
    }

    function io(t) {
        return t.toString().replace("object ", "");
    }

    eo.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    }, eo.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    }, eo.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, eo.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, eo._loadTypeMap = {
        gif: eo.LOAD_TYPE.IMAGE,
        png: eo.LOAD_TYPE.IMAGE,
        bmp: eo.LOAD_TYPE.IMAGE,
        jpg: eo.LOAD_TYPE.IMAGE,
        jpeg: eo.LOAD_TYPE.IMAGE,
        tif: eo.LOAD_TYPE.IMAGE,
        tiff: eo.LOAD_TYPE.IMAGE,
        webp: eo.LOAD_TYPE.IMAGE,
        tga: eo.LOAD_TYPE.IMAGE,
        svg: eo.LOAD_TYPE.IMAGE,
        "svg+xml": eo.LOAD_TYPE.IMAGE,
        mp3: eo.LOAD_TYPE.AUDIO,
        ogg: eo.LOAD_TYPE.AUDIO,
        wav: eo.LOAD_TYPE.AUDIO,
        mp4: eo.LOAD_TYPE.VIDEO,
        webm: eo.LOAD_TYPE.VIDEO
    }, eo._xhrTypeMap = {
        xhtml: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        html: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: eo.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: eo.XHR_RESPONSE_TYPE.BLOB,
        png: eo.XHR_RESPONSE_TYPE.BLOB,
        bmp: eo.XHR_RESPONSE_TYPE.BLOB,
        jpg: eo.XHR_RESPONSE_TYPE.BLOB,
        jpeg: eo.XHR_RESPONSE_TYPE.BLOB,
        tif: eo.XHR_RESPONSE_TYPE.BLOB,
        tiff: eo.XHR_RESPONSE_TYPE.BLOB,
        webp: eo.XHR_RESPONSE_TYPE.BLOB,
        tga: eo.XHR_RESPONSE_TYPE.BLOB,
        json: eo.XHR_RESPONSE_TYPE.JSON,
        text: eo.XHR_RESPONSE_TYPE.TEXT,
        txt: eo.XHR_RESPONSE_TYPE.TEXT,
        ttf: eo.XHR_RESPONSE_TYPE.BUFFER,
        otf: eo.XHR_RESPONSE_TYPE.BUFFER
    }, eo.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    var no = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var oo = window.URL || window.webkitURL;

    var so = {
            caching: function caching(t, e) {
                var r = this;
                Kn[t.url] ? (t.data = Kn[t.url], t.complete()) : t.onComplete.once(function() {
                    return Kn[r.url] = r.data;
                }), e();
            },
            parsing: function parsing(t, e) {
                if (t.data) {
                    if (t.xhr && t.xhrType === eo.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var r = oo.createObjectURL(t.data);
                                return t.blob = t.data, t.data = new Image(), t.data.src = r, t.type = eo.TYPE.IMAGE, void(t.data.onload = function() {
                                    oo.revokeObjectURL(r), t.data.onload = null, e();
                                });
                            }
                        } else {
                            var i = t.xhr.getResponseHeader("content-type");
                            if (i && 0 === i.indexOf("image")) return t.data = new Image(), t.data.src = "data:" + i + ";base64," + function(t) {
                                for (var e = "", r = 0; r < t.length;) {
                                    for (var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < i.length; ++o) {
                                        r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;
                                    }

                                    switch (n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, n[3] = 63 & i[2], r - (t.length - 1)) {
                                        case 2:
                                            n[3] = 64, n[2] = 64;
                                            break;

                                        case 1:
                                            n[3] = 64;
                                    }

                                    for (var s = 0; s < n.length; ++s) {
                                        e += no.charAt(n[s]);
                                    }
                                }

                                return e;
                            }(t.xhr.responseText), t.type = eo.TYPE.IMAGE, void(t.data.onload = function() {
                                t.data.onload = null, e();
                            });
                        }
                    e();
                } else e();
            }
        },
        ao = /(#[\w-]+)?$/,
        ho = function() {
            function t(e, r) {
                var i = this;
                void 0 === e && (e = ""), void 0 === r && (r = 10), this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                    return i._loadResource(t, e);
                }, this._queue = qn(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new Yn(), this.onError = new Yn(), this.onLoad = new Yn(), this.onStart = new Yn(), this.onComplete = new Yn();

                for (var n = 0; n < t._defaultBeforeMiddleware.length; ++n) {
                    this.pre(t._defaultBeforeMiddleware[n]);
                }

                for (var o = 0; o < t._defaultAfterMiddleware.length; ++o) {
                    this.use(t._defaultAfterMiddleware[o]);
                }
            }

            var e = t.prototype;
            return e.add = function(t, e, r, i) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) {
                        this.add(t[n]);
                    }

                    return this;
                }

                if ("object" == _typeof(t) && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof r && (i = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');

                if (e = this._prepareUrl(e), this.resources[t] = new eo(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
                    for (var o = r.parentResource, s = [], a = 0; a < o.children.length; ++a) {
                        o.children[a].isComplete || s.push(o.children[a]);
                    }

                    var h = o.progressChunk * (s.length + 1) / (s.length + 2);
                    o.children.push(this.resources[t]), o.progressChunk = h;

                    for (var u = 0; u < s.length; ++u) {
                        s[u].progressChunk = h;
                    }

                    this.resources[t].progressChunk = h;
                }

                return this._queue.push(this.resources[t]), this;
            }, e.pre = function(t) {
                return this._beforeMiddleware.push(t), this;
            }, e.use = function(t) {
                return this._afterMiddleware.push(t), this;
            }, e.reset = function() {
                for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort();
                }

                return this.resources = {}, this;
            }, e.load = function(t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                if (this._queue.idle()) this._onStart(), this._onComplete();
                else {
                    for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) {
                        this._queue._tasks[r].data.progressChunk = e;
                    }

                    this._onStart(), this._queue.resume();
                }
                return this;
            }, e._prepareUrl = function(t) {
                var e,
                    r = Gn(t, {
                        strictMode: !0
                    });

                if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                    var i = ao.exec(e)[0]; -
                    1 !== (e = e.substr(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += i;
                }

                return e;
            }, e._loadResource = function(t, e) {
                var r = this;
                t._dequeue = e, zn(this._beforeMiddleware, function(e, i) {
                    e.call(r, t, function() {
                        i(t.isComplete ? {} : null);
                    });
                }, function() {
                    t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load());
                }, !0);
            }, e._onStart = function() {
                this.progress = 0, this.loading = !0, this.onStart.dispatch(this);
            }, e._onComplete = function() {
                this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources);
            }, e._onLoad = function(t) {
                var e = this;
                t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), zn(this._afterMiddleware, function(r, i) {
                    r.call(e, t, i);
                }, function() {
                    t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete();
                }, !0);
            }, Jn(t, [{
                key: "concurrency",
                get: function get() {
                    return this._queue.concurrency;
                },
                set: function set(t) {
                    this._queue.concurrency = t;
                }
            }]), t;
        }();

    ho._defaultBeforeMiddleware = [], ho._defaultAfterMiddleware = [], ho.pre = function(t) {
        return ho._defaultBeforeMiddleware.push(t), ho;
    }, ho.use = function(t) {
        return ho._defaultAfterMiddleware.push(t), ho;
    };

    var uo = function uo() {};

    uo.use = function(t, e) {
        t.data && t.type === eo.TYPE.IMAGE && (t.texture = Hr.fromLoader(t.data, t.url, t.name)), e();
    };

    var lo = function(t) {
        function e(r, i) {
            var n = this;
            t.call(this, r, i), C.call(this);

            for (var o = 0; o < e._plugins.length; ++o) {
                var s = e._plugins[o],
                    a = s.pre,
                    h = s.use;
                a && this.pre(a), h && this.use(h);
            }

            this.onStart.add(function(t) {
                return n.emit("start", t);
            }), this.onProgress.add(function(t, e) {
                return n.emit("progress", t, e);
            }), this.onError.add(function(t, e, r) {
                return n.emit("error", t, e, r);
            }), this.onLoad.add(function(t, e) {
                return n.emit("load", t, e);
            }), this.onComplete.add(function(t, e) {
                return n.emit("complete", t, e);
            }), this._protected = !1;
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var r = {
            shared: {
                configurable: !0
            }
        };
        return e.prototype.destroy = function() {
            this._protected || (this.removeAllListeners(), this.reset());
        }, r.shared.get = function() {
            var t = e._shared;
            return t || ((t = new e())._protected = !0, e._shared = t), t;
        }, Object.defineProperties(e, r), e;
    }(ho);

    Object.assign(lo.prototype, C.prototype), lo._plugins = [], lo.registerPlugin = function(t) {
        return lo._plugins.push(t), t.add && t.add(), lo;
    }, lo.registerPlugin({
        use: so.parsing
    }), lo.registerPlugin(uo);

    var co = function co() {};

    co.init = function(t) {
        t = Object.assign({
            sharedLoader: !1
        }, t), this.loader = t.sharedLoader ? lo.shared : new lo();
    }, co.destroy = function() {
        this.loader && (this.loader.destroy(), this.loader = null);
    };

    var po = eo,
        fo = function(e) {
            function r(r, i, n, o) {
                void 0 === r && (r = 1500), void 0 === n && (n = 16384), void 0 === o && (o = !1), e.call(this);
                n > 16384 && (n = 16384), this._properties = [!1, !0, !1, !1, !1], this._maxSize = r, this._batchSize = n, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = t.BLEND_MODES.NORMAL, this.autoResize = o, this.roundPixels = !0, this.baseTexture = null, this.setProperties(i), this._tint = 0, this.tintRgb = new Float32Array(4), this.tint = 16777215;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                tint: {
                    configurable: !0
                }
            };
            return r.prototype.setProperties = function(t) {
                t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4]);
            }, r.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform();
            }, i.tint.get = function() {
                return this._tint;
            }, i.tint.set = function(t) {
                this._tint = t, $t(t, this.tintRgb);
            }, r.prototype.render = function(t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function() {
                    return e.onChildrenChange(0);
                })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
            }, r.prototype.onChildrenChange = function(t) {
                for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) {
                    this._bufferUpdateIDs.push(0);
                }

                this._bufferUpdateIDs[e] = ++this._updateID;
            }, r.prototype.dispose = function() {
                if (this._buffers) {
                    for (var t = 0; t < this._buffers.length; ++t) {
                        this._buffers[t].destroy();
                    }

                    this._buffers = null;
                }
            }, r.prototype.destroy = function(t) {
                e.prototype.destroy.call(this, t), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
            }, Object.defineProperties(r.prototype, i), r;
        }($e),
        vo = function vo(e, r, i) {
            this.geometry = new ti(), this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];

            for (var n = 0; n < e.length; ++n) {
                var o = e[n];
                o = {
                    attributeName: o.attributeName,
                    size: o.size,
                    uploadFunction: o.uploadFunction,
                    type: o.type || t.TYPES.FLOAT,
                    offset: o.offset
                }, r[n] ? this.dynamicProperties.push(o) : this.staticProperties.push(o);
            }

            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
        };

    vo.prototype.initBuffers = function() {
        var e = this.geometry,
            r = 0;
        this.indexBuffer = new qr(ae(this.size), !0, !0), e.addIndex(this.indexBuffer), this.dynamicStride = 0;

        for (var i = 0; i < this.dynamicProperties.length; ++i) {
            var n = this.dynamicProperties[i];
            n.offset = r, r += n.size, this.dynamicStride += n.size;
        }

        var o = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(o), this.dynamicDataUint32 = new Uint32Array(o), this.dynamicBuffer = new qr(this.dynamicData, !1, !1);
        var s = 0;
        this.staticStride = 0;

        for (var a = 0; a < this.staticProperties.length; ++a) {
            var h = this.staticProperties[a];
            h.offset = s, s += h.size, this.staticStride += h.size;
        }

        var u = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(u), this.staticDataUint32 = new Uint32Array(u), this.staticBuffer = new qr(this.staticData, !0, !1);

        for (var l = 0; l < this.dynamicProperties.length; ++l) {
            var c = this.dynamicProperties[l];
            e.addAttribute(c.attributeName, this.dynamicBuffer, 0, c.type === t.TYPES.UNSIGNED_BYTE, c.type, 4 * this.dynamicStride, 4 * c.offset);
        }

        for (var d = 0; d < this.staticProperties.length; ++d) {
            var p = this.staticProperties[d];
            e.addAttribute(p.attributeName, this.staticBuffer, 0, p.type === t.TYPES.UNSIGNED_BYTE, p.type, 4 * this.staticStride, 4 * p.offset);
        }
    }, vo.prototype.uploadDynamic = function(e, r, i) {
        for (var n = 0; n < this.dynamicProperties.length; n++) {
            var o = this.dynamicProperties[n];
            o.uploadFunction(e, r, i, o.type === t.TYPES.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, o.offset);
        }

        this.dynamicBuffer._updateID++;
    }, vo.prototype.uploadStatic = function(e, r, i) {
        for (var n = 0; n < this.staticProperties.length; n++) {
            var o = this.staticProperties[n];
            o.uploadFunction(e, r, i, o.type === t.TYPES.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, o.offset);
        }

        this.staticBuffer._updateID++;
    }, vo.prototype.destroy = function() {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
    };

    var mo = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
        go = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
        yo = function(e) {
            function r(r) {
                e.call(this, r), this.shader = null, this.properties = null, this.tempMatrix = new Ne(), this.properties = [{
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attributeName: "aColor",
                    size: 1,
                    type: t.TYPES.UNSIGNED_BYTE,
                    uploadFunction: this.uploadTint,
                    offset: 0
                }], this.shader = Xi.from(mo, go, {}), this.state = Hi.for2d();
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(t) {
                var e = t.children,
                    r = t._maxSize,
                    i = t._batchSize,
                    n = this.renderer,
                    o = e.length;

                if (0 !== o) {
                    o > r && !t.autoResize && (o = r);
                    var s = t._buffers;
                    s || (s = t._buffers = this.generateBuffers(t));
                    var a = e[0]._texture.baseTexture;
                    this.state.blendMode = ie(t.blendMode, a.alphaMode), n.state.set(this.state);
                    var h = n.gl,
                        u = t.worldTransform.copyTo(this.tempMatrix);
                    u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = ne(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.alphaMode), this.shader.uniforms.uSampler = a, this.renderer.shader.bind(this.shader);

                    for (var l = !1, c = 0, d = 0; c < o; c += i, d += 1) {
                        var p = o - c;
                        p > i && (p = i), d >= s.length && s.push(this._generateOneMoreBuffer(t));
                        var f = s[d];
                        f.uploadDynamic(e, c, p);
                        var v = t._bufferUpdateIDs[d] || 0;
                        (l = l || f._updateID < v) && (f._updateID = t._updateID, f.uploadStatic(e, c, p)), n.geometry.bind(f.geometry), h.drawElements(h.TRIANGLES, 6 * p, h.UNSIGNED_SHORT, 0);
                    }
                }
            }, r.prototype.generateBuffers = function(t) {
                for (var e = [], r = t._maxSize, i = t._batchSize, n = t._properties, o = 0; o < r; o += i) {
                    e.push(new vo(this.properties, n, i));
                }

                return e;
            }, r.prototype._generateOneMoreBuffer = function(t) {
                var e = t._batchSize,
                    r = t._properties;
                return new vo(this.properties, r, e);
            }, r.prototype.uploadVertices = function(t, e, r, i, n, o) {
                for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < r; ++l) {
                    var c = t[e + l],
                        d = c._texture,
                        p = c.scale.x,
                        f = c.scale.y,
                        v = d.trim,
                        m = d.orig;
                    v ? (s = (a = v.x - c.anchor.x * m.width) + v.width, h = (u = v.y - c.anchor.y * m.height) + v.height) : (s = m.width * (1 - c.anchor.x), a = m.width * -c.anchor.x, h = m.height * (1 - c.anchor.y), u = m.height * -c.anchor.y), i[o] = a * p, i[o + 1] = u * f, i[o + n] = s * p, i[o + n + 1] = u * f, i[o + 2 * n] = s * p, i[o + 2 * n + 1] = h * f, i[o + 3 * n] = a * p, i[o + 3 * n + 1] = h * f, o += 4 * n;
                }
            }, r.prototype.uploadPosition = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].position;
                    i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n;
                }
            }, r.prototype.uploadRotation = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].rotation;
                    i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n;
                }
            }, r.prototype.uploadUvs = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n);
                }
            }, r.prototype.uploadTint = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s],
                        h = a._texture.baseTexture.alphaMode > 0,
                        u = a.alpha,
                        l = u < 1 && h ? oe(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
                    i[o] = l, i[o + n] = l, i[o + 2 * n] = l, i[o + 3 * n] = l, o += 4 * n;
                }
            }, r.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
            }, r;
        }(ai),
        _o = {
            adaptive: !0,
            maxLength: 10,
            minSegments: 8,
            maxSegments: 2048,
            _segmentsCount: function _segmentsCount(t, e) {
                if (void 0 === e && (e = 20), !this.adaptive || !t || Number.isNaN(t)) return e;
                var r = Math.ceil(t / this.maxLength);
                return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r;
            }
        },
        xo = function xo() {
            this.reset();
        };

    xo.prototype.clone = function() {
        var t = new xo();
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t;
    }, xo.prototype.reset = function() {
        this.color = 16777215, this.alpha = 1, this.texture = Hr.WHITE, this.matrix = null, this.visible = !1;
    }, xo.prototype.destroy = function() {
        this.texture = null, this.matrix = null;
    };
    var bo = {
            build: function build(t) {
                t.points = t.shape.points.slice();
            },
            triangulate: function triangulate(t, e) {
                var r = t.points,
                    i = t.holes,
                    n = e.points,
                    o = e.indices;

                if (r.length >= 6) {
                    for (var s = [], a = 0; a < i.length; a++) {
                        var h = i[a];
                        s.push(r.length / 2), r = r.concat(h.points);
                    }

                    var u = R(r, s, 2);
                    if (!u) return;

                    for (var l = n.length / 2, c = 0; c < u.length; c += 3) {
                        o.push(u[c] + l), o.push(u[c + 1] + l), o.push(u[c + 2] + l);
                    }

                    for (var d = 0; d < r.length; d++) {
                        n.push(r[d]);
                    }
                }
            }
        },
        Eo = {
            build: function build(e) {
                var r,
                    i,
                    n = e.shape,
                    o = e.points,
                    s = n.x,
                    a = n.y;

                if (o.length = 0, e.type === t.SHAPES.CIRC ? (r = n.radius, i = n.radius) : (r = n.width, i = n.height), 0 !== r && 0 !== i) {
                    var h = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height));
                    h /= 2.3;

                    for (var u = 2 * Math.PI / h, l = 0; l < h - .5; l++) {
                        o.push(s + Math.sin(-u * l) * r, a + Math.cos(-u * l) * i);
                    }

                    o.push(o[0], o[1]);
                }
            },
            triangulate: function triangulate(t, e) {
                var r = t.points,
                    i = e.points,
                    n = e.indices,
                    o = i.length / 2,
                    s = o;
                i.push(t.shape.x, t.shape.y);

                for (var a = 0; a < r.length; a += 2) {
                    i.push(r[a], r[a + 1]), n.push(o++, s, o);
                }
            }
        },
        To = {
            build: function build(t) {
                var e = t.shape,
                    r = e.x,
                    i = e.y,
                    n = e.width,
                    o = e.height,
                    s = t.points;
                s.length = 0, s.push(r, i, r + n, i, r + n, i + o, r, i + o);
            },
            triangulate: function triangulate(t, e) {
                var r = t.points,
                    i = e.points,
                    n = i.length / 2;
                i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3);
            }
        },
        wo = {
            build: function build(t) {
                var e = t.shape,
                    r = t.points,
                    i = e.x,
                    n = e.y,
                    o = e.width,
                    s = e.height,
                    a = e.radius;
                r.length = 0, Io(i, n + a, i, n, i + a, n, r), Io(i + o - a, n, i + o, n, i + o, n + a, r), Io(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r), Io(i + a, n + s, i, n + s, i, n + s - a, r);
            },
            triangulate: function triangulate(t, e) {
                for (var r = t.points, i = e.points, n = e.indices, o = i.length / 2, s = R(r, null, 2), a = 0, h = s.length; a < h; a += 3) {
                    n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
                }

                for (var u = 0, l = r.length; u < l; u++) {
                    i.push(r[u], r[++u]);
                }
            }
        };

    function So(t, e, r) {
        return t + (e - t) * r;
    }

    function Io(t, e, r, i, n, o, s) {
        void 0 === s && (s = []);

        for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0; f <= 20; ++f) {
            h = So(t, r, v = f / 20), u = So(e, i, v), l = So(r, n, v), c = So(i, o, v), d = So(h, l, v), p = So(u, c, v), a.push(d, p);
        }

        return a;
    }

    function Po(e, r) {
        e.lineStyle["native"] ? function(e, r) {
            var i = 0,
                n = e.shape,
                o = e.points || n.points,
                s = n.type !== t.SHAPES.POLY || n.closeStroke;
            if (0 === o.length) return;
            var a = r.points,
                h = r.indices,
                u = o.length / 2,
                l = a.length / 2,
                c = l;

            for (a.push(o[0], o[1]), i = 1; i < u; i++) {
                a.push(o[2 * i], o[2 * i + 1]), h.push(c, c + 1), c++;
            }

            s && h.push(c, l);
        }(e, r) : function(e, r) {
            var i = e.shape,
                n = e.points || i.points.slice(),
                o = r.closePointEps;
            if (0 === n.length) return;
            var s = e.lineStyle,
                a = new De(n[0], n[1]),
                h = new De(n[n.length - 2], n[n.length - 1]),
                u = i.type !== t.SHAPES.POLY || i.closeStroke,
                l = Math.abs(a.x - h.x) < o && Math.abs(a.y - h.y) < o;

            if (u) {
                n = n.slice(), l && (n.pop(), n.pop(), h.set(n[n.length - 2], n[n.length - 1]));
                var c = h.x + .5 * (a.x - h.x),
                    d = h.y + .5 * (a.y - h.y);
                n.unshift(c, d), n.push(c, d);
            }

            var p = r.points,
                f = n.length / 2,
                v = n.length,
                m = p.length / 2,
                g = s.width / 2,
                y = n[0],
                _ = n[1],
                x = n[2],
                b = n[3],
                E = 0,
                T = 0,
                w = -(_ - b),
                S = y - x,
                I = 0,
                P = 0,
                A = 0,
                O = 0,
                D = Math.sqrt(w * w + S * S);
            w /= D, S /= D, w *= g, S *= g;
            var M = s.alignment,
                C = 2 * (1 - M),
                R = 2 * M;
            p.push(y - w * C, _ - S * C), p.push(y + w * R, _ + S * R);

            for (var L = 1; L < f - 1; ++L) {
                y = n[2 * (L - 1)], _ = n[2 * (L - 1) + 1], x = n[2 * L], b = n[2 * L + 1], E = n[2 * (L + 1)], T = n[2 * (L + 1) + 1], w = -(_ - b), S = y - x, D = Math.sqrt(w * w + S * S), w /= D, S /= D, w *= g, S *= g, I = -(b - T), P = x - E, D = Math.sqrt(I * I + P * P), I /= D, P /= D;
                var N = -S + _ - (-S + b),
                    F = -w + x - (-w + y),
                    B = (-w + y) * (-S + b) - (-w + x) * (-S + _),
                    U = -(P *= g) + T - (-P + b),
                    k = -(I *= g) + x - (-I + E),
                    X = (-I + E) * (-P + b) - (-I + x) * (-P + T),
                    j = N * k - U * F;
                if (Math.abs(j) < .1) j += 10.1, p.push(x - w * C, b - S * C), p.push(x + w * R, b + S * R);
                else {
                    var H = (F * X - k * B) / j,
                        G = (U * B - N * X) / j,
                        Y = (H - x) * (H - x) + (G - b) * (G - b);
                    Y > 196 * g * g ? (A = w - I, O = S - P, D = Math.sqrt(A * A + O * O), A /= D, O /= D, A *= g, O *= g, p.push(x - A * C, b - O * C), p.push(x + A * R, b + O * R), p.push(x - A * R * C, b - O * C), v++) : (p.push(x + (H - x) * C, b + (G - b) * C), p.push(x - (H - x) * R, b - (G - b) * R));
                }
            }

            y = n[2 * (f - 2)], _ = n[2 * (f - 2) + 1], x = n[2 * (f - 1)], b = n[2 * (f - 1) + 1], w = -(_ - b), S = y - x, D = Math.sqrt(w * w + S * S), w /= D, S /= D, w *= g, S *= g, p.push(x - w * C, b - S * C), p.push(x + w * R, b + S * R);

            for (var V = r.indices, z = 0; z < v - 2; ++z) {
                V.push(m, m + 1, m + 2), m++;
            }
        }(e, r);
    }

    var Ao = function(t) {
            function e(e, r, i, n, o, s) {
                o = o || n / 2;

                for (var a = -1 * Math.PI / 2 + s, h = 2 * i, u = Ce / h, l = [], c = 0; c < h; c++) {
                    var d = c % 2 ? o : n,
                        p = c * u + a;
                    l.push(e + d * Math.cos(p), r + d * Math.sin(p));
                }

                t.call(this, l);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
        }(qe),
        Oo = function Oo() {};

    Oo.curveTo = function(t, e, r, i, n, o) {
        var s = o[o.length - 2],
            a = o[o.length - 1] - e,
            h = s - t,
            u = i - e,
            l = r - t,
            c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;

        var d = a * a + h * h,
            p = u * u + l * l,
            f = a * u + h * l,
            v = n * Math.sqrt(d) / c,
            m = n * Math.sqrt(p) / c,
            g = v * f / d,
            y = m * f / p,
            _ = v * l + m * h,
            x = v * u + m * a,
            b = h * (m + g),
            E = a * (m + g),
            T = l * (v + y),
            w = u * (v + y);

        return {
            cx: _ + t,
            cy: x + e,
            radius: n,
            startAngle: Math.atan2(E - x, b - _),
            endAngle: Math.atan2(w - x, T - _),
            anticlockwise: h * u > l * a
        };
    }, Oo.arc = function(t, e, r, i, n, o, s, a, h) {
        for (var u = s - o, l = _o._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / Ce)), c = u / (2 * l), d = 2 * c, p = Math.cos(c), f = Math.sin(c), v = l - 1, m = v % 1 / v, g = 0; g <= v; ++g) {
            var y = c + o + d * (g + m * g),
                _ = Math.cos(y),
                x = -Math.sin(y);

            h.push((p * _ + f * x) * n + r, (p * -x + f * _) * n + i);
        }
    };

    var Do = function Do() {};

    Do.curveLength = function(t, e, r, i, n, o, s, a) {
        for (var h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0, m = 0, g = 0, y = 0, _ = t, x = e, b = 1; b <= 10; ++b) {
            g = _ - (v = (f = (p = (d = 1 - (u = b / 10)) * d) * d) * t + 3 * p * u * r + 3 * d * (l = u * u) * n + (c = l * u) * s), y = x - (m = f * e + 3 * p * u * i + 3 * d * l * o + c * a), _ = v, x = m, h += Math.sqrt(g * g + y * y);
        }

        return h;
    }, Do.curveTo = function(t, e, r, i, n, o, s) {
        var a = s[s.length - 2],
            h = s[s.length - 1];
        s.length -= 2;

        var u = _o._segmentsCount(Do.curveLength(a, h, t, e, r, i, n, o)),
            l = 0,
            c = 0,
            d = 0,
            p = 0,
            f = 0;

        s.push(a, h);

        for (var v = 1, m = 0; v <= u; ++v) {
            d = (c = (l = 1 - (m = v / u)) * l) * l, f = (p = m * m) * m, s.push(d * a + 3 * c * m * t + 3 * l * p * r + f * n, d * h + 3 * c * m * e + 3 * l * p * i + f * o);
        }
    };

    var Mo = function Mo() {};

    Mo.curveLength = function(t, e, r, i, n, o) {
        var s = t - 2 * r + n,
            a = e - 2 * i + o,
            h = 2 * r - 2 * t,
            u = 2 * i - 2 * e,
            l = 4 * (s * s + a * a),
            c = 4 * (s * h + a * u),
            d = h * h + u * u,
            p = 2 * Math.sqrt(l + c + d),
            f = Math.sqrt(l),
            v = 2 * l * f,
            m = 2 * Math.sqrt(d),
            g = c / f;
        return (v * p + f * c * (p - m) + (4 * d * l - c * c) * Math.log((2 * f + g + p) / (g + m))) / (4 * v);
    }, Mo.curveTo = function(t, e, r, i, n) {
        for (var o = n[n.length - 2], s = n[n.length - 1], a = _o._segmentsCount(Mo.curveLength(o, s, t, e, r, i)), h = 0, u = 0, l = 1; l <= a; ++l) {
            var c = l / a;
            h = o + (t - o) * c, u = s + (e - s) * c, n.push(h + (t + (r - t) * c - h) * c, u + (e + (i - e) * c - u) * c);
        }
    };

    var Co = function Co() {
        this.reset();
    };

    Co.prototype.begin = function(t, e, r) {
        this.reset(), this.style = t, this.start = e, this.attribStart = r;
    }, Co.prototype.end = function(t, e) {
        this.attribSize = e - this.attribStart, this.size = t - this.start;
    }, Co.prototype.reset = function() {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
    };
    var Ro = {};
    Ro[t.SHAPES.POLY] = bo, Ro[t.SHAPES.CIRC] = Eo, Ro[t.SHAPES.ELIP] = Eo, Ro[t.SHAPES.RECT] = To, Ro[t.SHAPES.RREC] = wo;

    var Lo = [],
        No = [],
        Fo = {
            buildPoly: bo,
            buildCircle: Eo,
            buildRectangle: To,
            buildRoundedRectangle: wo,
            FILL_COMMANDS: Ro,
            BATCH_POOL: Lo,
            DRAW_CALL_POOL: No,
            buildLine: Po,
            buildComplexPoly: function buildComplexPoly(t, e) {
                var r = t.points.slice();

                if (!(r.length < 6)) {
                    var i = e.indices;
                    e.points = r, e.alpha = t.fillAlpha, e.color = $t(t.fillColor);

                    for (var n = 1 / 0, o = -1 / 0, s = 1 / 0, a = -1 / 0, h = 0, u = 0, l = 0; l < r.length; l += 2) {
                        n = (h = r[l]) < n ? h : n, o = h > o ? h : o, s = (u = r[l + 1]) < s ? u : s, a = u > a ? u : a;
                    }

                    r.push(n, s, o, s, o, a, n, a);

                    for (var c = r.length / 2, d = 0; d < c; d++) {
                        i.push(d);
                    }
                }
            },
            bezierCurveTo: function bezierCurveTo(t, e, r, i, n, o, s, a, h, u) {
                void 0 === u && (u = []);
                var l = 0,
                    c = 0,
                    d = 0,
                    p = 0,
                    f = 0;
                u.push(t, e);

                for (var v = 1, m = 0; v <= h; ++v) {
                    d = (c = (l = 1 - (m = v / h)) * l) * l, f = (p = m * m) * m, u.push(d * t + 3 * c * m * r + 3 * l * p * n + f * s, d * e + 3 * c * m * i + 3 * l * p * o + f * a);
                }

                return u;
            },
            Star: Ao,
            ArcUtils: Oo,
            BezierUtils: Do,
            QuadraticUtils: Mo,
            BatchPart: Co
        },
        Bo = function Bo(t, e, r, i) {
            void 0 === e && (e = null), void 0 === r && (r = null), void 0 === i && (i = null), this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = i, this.type = t.type, this.points = [], this.holes = [];
        };

    Bo.prototype.clone = function() {
        return new Bo(this.shape, this.fillStyle, this.lineStyle, this.matrix);
    }, Bo.prototype.destroy = function() {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
    };

    var Uo = new De(),
        ko = new Ze(),
        Xo = function(e) {
            function r() {
                e.call(this), this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], this.shapeIndex = 0, this._bounds = new Ze(), this.boundsDirty = -1, this.boundsPadding = 0, this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null, this.closePointEps = 1e-4;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                bounds: {
                    configurable: !0
                }
            };
            return i.bounds.get = function() {
                return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
            }, r.prototype.invalidate = function() {
                this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;

                for (var t = 0; t < this.drawCalls.length; t++) {
                    this.drawCalls[t].textures.length = 0, No.push(this.drawCalls[t]);
                }

                this.drawCalls.length = 0;

                for (var e = 0; e < this.batches.length; e++) {
                    var r = this.batches[e];
                    r.reset(), Lo.push(r);
                }

                this.batches.length = 0;
            }, r.prototype.clear = function() {
                return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
            }, r.prototype.drawShape = function(t, e, r, i) {
                var n = new Bo(t, e, r, i);
                return this.graphicsData.push(n), this.dirty++, this;
            }, r.prototype.drawHole = function(t, e) {
                if (!this.graphicsData.length) return null;
                var r = new Bo(t, null, null, e),
                    i = this.graphicsData[this.graphicsData.length - 1];
                return r.lineStyle = i.lineStyle, i.holes.push(r), this.dirty++, this;
            }, r.prototype.destroy = function(t) {
                e.prototype.destroy.call(this, t);

                for (var r = 0; r < this.graphicsData.length; ++r) {
                    this.graphicsData[r].destroy();
                }

                this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
            }, r.prototype.containsPoint = function(t) {
                for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                    var i = e[r];

                    if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(t, Uo) : Uo.copyFrom(t), i.shape.contains(Uo.x, Uo.y))) {
                        var n = !1;
                        if (i.holes)
                            for (var o = 0; o < i.holes.length; o++) {
                                if (i.holes[o].shape.contains(Uo.x, Uo.y)) {
                                    n = !0;
                                    break;
                                }
                            }
                        if (!n) return !0;
                    }
                }

                return !1;
            }, r.prototype.updateBatches = function() {
                if (this.graphicsData.length) {
                    if (this.validateBatching()) {
                        this.cacheDirty = this.dirty;
                        var e = this.uvs,
                            r = this.graphicsData,
                            i = null,
                            n = null;
                        this.batches.length > 0 && (n = (i = this.batches[this.batches.length - 1]).style);

                        for (var o = this.shapeIndex; o < r.length; o++) {
                            this.shapeIndex++;
                            var s = r[o],
                                a = s.fillStyle,
                                h = s.lineStyle;
                            Ro[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix);

                            for (var u = 0; u < 2; u++) {
                                var l = 0 === u ? a : h;

                                if (l.visible) {
                                    var c = l.texture.baseTexture,
                                        d = this.indices.length,
                                        p = this.points.length / 2;
                                    c.wrapMode = t.WRAP_MODES.REPEAT, 0 === u ? this.processFill(s) : this.processLine(s);
                                    var f = this.points.length / 2 - p;
                                    0 !== f && (i && !this._compareStyles(n, l) && (i.end(d, p), i = null), i || ((i = Lo.pop() || new Co()).begin(l, d, p), this.batches.push(i), n = l), this.addUvs(this.points, e, l.texture, p, f, l.matrix));
                                }
                            }
                        }

                        if (i) {
                            var v = this.indices.length,
                                m = this.points.length / 2;
                            i.end(v, m);
                        }

                        0 !== this.batches.length ? (this.indicesUint16 = new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()) : this.batchable = !0;
                    }
                } else this.batchable = !0;
            }, r.prototype._compareStyles = function(t, e) {
                return !(!t || !e) && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t["native"] == !!e["native"];
            }, r.prototype.validateBatching = function() {
                if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;

                for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                    var r = this.graphicsData[t],
                        i = r.fillStyle,
                        n = r.lineStyle;
                    if (i && !i.texture.baseTexture.valid) return !1;
                    if (n && !n.texture.baseTexture.valid) return !1;
                }

                return !0;
            }, r.prototype.packBatches = function() {
                this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);

                for (var t = this.batches, e = 0, r = t.length; e < r; e++) {
                    for (var i = t[e], n = 0; n < i.size; n++) {
                        var o = i.start + n;
                        this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
                    }
                }
            }, r.prototype.isBatchable = function() {
                for (var t = this.batches, e = 0; e < t.length; e++) {
                    if (t[e].style["native"]) return !1;
                }

                return this.points.length < 2 * r.BATCHABLE_SIZE;
            }, r.prototype.buildDrawCalls = function() {
                for (var e = ++Pr._globalBatch, r = 0; r < this.drawCalls.length; r++) {
                    this.drawCalls[r].textures.length = 0, No.push(this.drawCalls[r]);
                }

                this.drawCalls.length = 0;
                var i = this.colors,
                    n = this.textureIds,
                    o = No.pop();
                o || ((o = new In()).textures = new Pn()), o.textures.count = 0, o.start = 0, o.size = 0, o.type = t.DRAW_MODES.TRIANGLES;
                var s = 0,
                    a = null,
                    h = 0,
                    u = !1,
                    l = t.DRAW_MODES.TRIANGLES,
                    c = 0;
                this.drawCalls.push(o);

                for (var d = 0; d < this.batches.length; d++) {
                    var p = this.batches[d],
                        f = p.style,
                        v = f.texture.baseTexture;
                    u !== !!f["native"] && (l = (u = !!f["native"]) ? t.DRAW_MODES.LINES : t.DRAW_MODES.TRIANGLES, a = null, s = 8, e++), a !== v && (a = v, v._batchEnabled !== e && (8 === s && (e++, s = 0, o.size > 0 && ((o = No.pop()) || ((o = new In()).textures = new Pn()), this.drawCalls.push(o)), o.start = c, o.size = 0, o.textures.count = 0, o.type = l), v.touched = 1, v._batchEnabled = e, v._batchLocation = s, v.wrapMode = 10497, o.textures.elements[o.textures.count++] = v, s++)), o.size += p.size, c += p.size, h = v._batchLocation, this.addColors(i, f.color, f.alpha, p.attribSize), this.addTextureIds(n, h, p.attribSize);
                }

                Pr._globalBatch = e, this.packAttributes();
            }, r.prototype.packAttributes = function() {
                for (var t = this.points, e = this.uvs, r = this.colors, i = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(n), s = new Uint32Array(n), a = 0, h = 0; h < t.length / 2; h++) {
                    o[a++] = t[2 * h], o[a++] = t[2 * h + 1], o[a++] = e[2 * h], o[a++] = e[2 * h + 1], s[a++] = r[h], o[a++] = i[h];
                }

                this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
            }, r.prototype.processFill = function(t) {
                t.holes.length ? (this.processHoles(t.holes), bo.triangulate(t, this)) : Ro[t.type].triangulate(t, this);
            }, r.prototype.processLine = function(t) {
                Po(t, this);

                for (var e = 0; e < t.holes.length; e++) {
                    Po(t.holes[e], this);
                }
            }, r.prototype.processHoles = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    Ro[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix);
                }
            }, r.prototype.calculateBounds = function() {
                var e = this._bounds,
                    r = ko,
                    i = Ne.IDENTITY;
                this._bounds.clear(), r.clear();

                for (var n = 0; n < this.graphicsData.length; n++) {
                    var o = this.graphicsData[n],
                        s = o.shape,
                        a = o.type,
                        h = o.lineStyle,
                        u = o.matrix || Ne.IDENTITY,
                        l = 0;

                    if (h && h.visible) {
                        var c = h.alignment;
                        l = h.width, a === t.SHAPES.POLY ? l *= .5 + Math.abs(.5 - c) : l *= Math.max(0, c);
                    }

                    i !== u && (r.isEmpty() || (e.addBoundsMatrix(r, i), r.clear()), i = u), a === t.SHAPES.RECT || a === t.SHAPES.RREC ? r.addFramePad(s.x, s.y, s.x + s.width, s.y + s.height, l, l) : a === t.SHAPES.CIRC ? r.addFramePad(s.x, s.y, s.x, s.y, s.radius + l, s.radius + l) : a === t.SHAPES.ELIP ? r.addFramePad(s.x, s.y, s.x, s.y, s.width + l, s.height + l) : e.addVerticesMatrix(i, s.points, 0, s.points.length, l, l);
                }

                r.isEmpty() || e.addBoundsMatrix(r, i), e.pad(this.boundsPadding, this.boundsPadding);
            }, r.prototype.transformPoints = function(t, e) {
                for (var r = 0; r < t.length / 2; r++) {
                    var i = t[2 * r],
                        n = t[2 * r + 1];
                    t[2 * r] = e.a * i + e.c * n + e.tx, t[2 * r + 1] = e.b * i + e.d * n + e.ty;
                }
            }, r.prototype.addColors = function(t, e, r, i) {
                for (var n = oe((e >> 16) + (65280 & e) + ((255 & e) << 16), r); i-- > 0;) {
                    t.push(n);
                }
            }, r.prototype.addTextureIds = function(t, e, r) {
                for (; r-- > 0;) {
                    t.push(e);
                }
            }, r.prototype.addUvs = function(t, e, r, i, n, o) {
                for (var s = 0, a = e.length, h = r.frame; s < n;) {
                    var u = t[2 * (i + s)],
                        l = t[2 * (i + s) + 1];

                    if (o) {
                        var c = o.a * u + o.c * l + o.tx;
                        l = o.b * u + o.d * l + o.ty, u = c;
                    }

                    s++, e.push(u / h.width, l / h.height);
                }

                var d = r.baseTexture;
                (h.width < d.width || h.height < d.height) && this.adjustUvs(e, r, a, n);
            }, r.prototype.adjustUvs = function(t, e, r, i) {
                for (var n = e.baseTexture, o = r + 2 * i, s = e.frame, a = s.width / n.width, h = s.height / n.height, u = s.x / s.width, l = s.y / s.height, c = Math.floor(t[r] + 1e-6), d = Math.floor(t[r + 1] + 1e-6), p = r + 2; p < o; p += 2) {
                    c = Math.min(c, Math.floor(t[p] + 1e-6)), d = Math.min(d, Math.floor(t[p + 1] + 1e-6));
                }

                u -= c, l -= d;

                for (var f = r; f < o; f += 2) {
                    t[f] = (t[f] + u) * a, t[f + 1] = (t[f + 1] + l) * h;
                }
            }, Object.defineProperties(r.prototype, i), r;
        }(Cn);

    Xo.BATCHABLE_SIZE = 100;

    var jo = function(t) {
            function e() {
                t.apply(this, arguments);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function() {
                var t = new e();
                return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t["native"] = this["native"], t;
            }, e.prototype.reset = function() {
                t.prototype.reset.call(this), this.color = 0, this.width = 0, this.alignment = .5, this["native"] = !1;
            }, e;
        }(xo),
        Ho = new Float32Array(3),
        Go = {},
        Yo = function(e) {
            function r(r) {
                void 0 === r && (r = null), e.call(this), this.geometry = r || new Xo(), this.geometry.refCount++, this.shader = null, this.state = Hi.for2d(), this._fillStyle = new xo(), this._lineStyle = new jo(), this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], this.batchTint = -1, this.vertexData = null, this._transformID = -1, this.batchDirty = -1, this.pluginName = "batch", this.tint = 16777215, this.blendMode = t.BLEND_MODES.NORMAL;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                blendMode: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                fill: {
                    configurable: !0
                },
                line: {
                    configurable: !0
                }
            };
            return r.prototype.clone = function() {
                return this.finishPoly(), new r(this.geometry);
            }, i.blendMode.set = function(t) {
                this.state.blendMode = t;
            }, i.blendMode.get = function() {
                return this.state.blendMode;
            }, i.tint.get = function() {
                return this._tint;
            }, i.tint.set = function(t) {
                this._tint = t;
            }, i.fill.get = function() {
                return this._fillStyle;
            }, i.line.get = function() {
                return this._lineStyle;
            }, r.prototype.lineStyle = function(t) {
                if ("number" == typeof t) {
                    var e = arguments;
                    t = {
                        width: e[0] || 0,
                        color: e[1] || 0,
                        alpha: void 0 !== e[2] ? e[2] : 1,
                        alignment: void 0 !== e[3] ? e[3] : .5,
                        "native": !!e[4]
                    };
                }

                return this.lineTextureStyle(t);
            }, r.prototype.lineTextureStyle = function(t) {
                if ("number" == typeof t) {
                    ye("v5.2.0", "Please use object-based options for Graphics#lineTextureStyle");
                    var e = arguments[0],
                        r = arguments[1],
                        i = arguments[2],
                        n = arguments[3],
                        o = arguments[4],
                        s = arguments[5],
                        a = arguments[6];
                    t = {
                        width: e,
                        texture: r,
                        color: i,
                        alpha: n,
                        matrix: o,
                        alignment: s,
                        "native": a
                    }, Object.keys(t).forEach(function(e) {
                        return void 0 === t[e] && delete t[e];
                    });
                }

                t = Object.assign({
                    width: 0,
                    texture: Hr.WHITE,
                    color: t && t.texture ? 16777215 : 0,
                    alpha: 1,
                    matrix: null,
                    alignment: .5,
                    "native": !1
                }, t), this.currentPath && this.startPoly();
                var h = t.width > 0 && t.alpha > 0;
                return h ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
                    visible: h
                }, t)) : this._lineStyle.reset(), this;
            }, r.prototype.startPoly = function() {
                if (this.currentPath) {
                    var t = this.currentPath.points,
                        e = this.currentPath.points.length;
                    e > 2 && (this.drawShape(this.currentPath), this.currentPath = new qe(), this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]));
                } else this.currentPath = new qe(), this.currentPath.closeStroke = !1;
            }, r.prototype.finishPoly = function() {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
            }, r.prototype.moveTo = function(t, e) {
                return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this;
            }, r.prototype.lineTo = function(t, e) {
                this.currentPath || this.moveTo(0, 0);
                var r = this.currentPath.points,
                    i = r[r.length - 2],
                    n = r[r.length - 1];
                return i === t && n === e || r.push(t, e), this;
            }, r.prototype._initCurve = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e);
            }, r.prototype.quadraticCurveTo = function(t, e, r, i) {
                this._initCurve();

                var n = this.currentPath.points;
                return 0 === n.length && this.moveTo(0, 0), Mo.curveTo(t, e, r, i, n), this;
            }, r.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
                return this._initCurve(), Do.curveTo(t, e, r, i, n, o, this.currentPath.points), this;
            }, r.prototype.arcTo = function(t, e, r, i, n) {
                this._initCurve(t, e);

                var o = this.currentPath.points,
                    s = Oo.curveTo(t, e, r, i, n, o);

                if (s) {
                    var a = s.cx,
                        h = s.cy,
                        u = s.radius,
                        l = s.startAngle,
                        c = s.endAngle,
                        d = s.anticlockwise;
                    this.arc(a, h, u, l, c, d);
                }

                return this;
            }, r.prototype.arc = function(t, e, r, i, n, o) {
                if (void 0 === o && (o = !1), i === n) return this;
                if (!o && n <= i ? n += Ce : o && i <= n && (i += Ce), 0 === n - i) return this;
                var s = t + Math.cos(i) * r,
                    a = e + Math.sin(i) * r,
                    h = this.geometry.closePointEps,
                    u = this.currentPath ? this.currentPath.points : null;

                if (u) {
                    var l = Math.abs(u[u.length - 2] - s),
                        c = Math.abs(u[u.length - 1] - a);
                    l < h && c < h || u.push(s, a);
                } else this.moveTo(s, a), u = this.currentPath.points;

                return Oo.arc(s, a, t, e, r, i, n, o, u), this;
            }, r.prototype.beginFill = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill({
                    texture: Hr.WHITE,
                    color: t,
                    alpha: e
                });
            }, r.prototype.beginTextureFill = function(t) {
                if (t instanceof Hr) {
                    ye("v5.2.0", "Please use object-based options for Graphics#beginTextureFill");
                    var e = arguments[0],
                        r = arguments[1],
                        i = arguments[2],
                        n = arguments[3];
                    t = {
                        texture: e,
                        color: r,
                        alpha: i,
                        matrix: n
                    }, Object.keys(t).forEach(function(e) {
                        return void 0 === t[e] && delete t[e];
                    });
                }

                t = Object.assign({
                    texture: Hr.WHITE,
                    color: 16777215,
                    alpha: 1,
                    matrix: null
                }, t), this.currentPath && this.startPoly();
                var o = t.alpha > 0;
                return o ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
                    visible: o
                }, t)) : this._fillStyle.reset(), this;
            }, r.prototype.endFill = function() {
                return this.finishPoly(), this._fillStyle.reset(), this;
            }, r.prototype.drawRect = function(t, e, r, i) {
                return this.drawShape(new Ve(t, e, r, i));
            }, r.prototype.drawRoundedRect = function(t, e, r, i, n) {
                return this.drawShape(new Ke(t, e, r, i, n));
            }, r.prototype.drawCircle = function(t, e, r) {
                return this.drawShape(new ze(t, e, r));
            }, r.prototype.drawEllipse = function(t, e, r, i) {
                return this.drawShape(new We(t, e, r, i));
            }, r.prototype.drawPolygon = function(t) {
                var e = arguments,
                    r = t,
                    i = !0;

                if (r.points && (i = r.closeStroke, r = r.points), !Array.isArray(r)) {
                    r = new Array(arguments.length);

                    for (var n = 0; n < r.length; ++n) {
                        r[n] = e[n];
                    }
                }

                var o = new qe(r);
                return o.closeStroke = i, this.drawShape(o), this;
            }, r.prototype.drawShape = function(t) {
                return this._holeMode ? this.geometry.drawHole(t, this._matrix) : this.geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
            }, r.prototype.drawStar = function(t, e, r, i, n, o) {
                return void 0 === o && (o = 0), this.drawPolygon(new Ao(t, e, r, i, n, o));
            }, r.prototype.clear = function() {
                return this.geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
            }, r.prototype.isFastRect = function() {
                return 1 === this.geometry.graphicsData.length && this.geometry.graphicsData[0].shape.type === t.SHAPES.RECT && !this.geometry.graphicsData[0].lineWidth;
            }, r.prototype._render = function(t) {
                this.finishPoly();
                var e = this.geometry;
                e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t));
            }, r.prototype._populateBatches = function() {
                var t = this.geometry,
                    e = this.blendMode;
                this.batches = [], this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.vertexData = new Float32Array(t.points);

                for (var r = 0, i = t.batches.length; r < i; r++) {
                    var n = t.batches[r],
                        o = n.style.color,
                        s = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                        a = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                        h = {
                            vertexData: s,
                            blendMode: e,
                            indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
                            uvs: a,
                            _batchRGB: $t(o),
                            _tintRGB: o,
                            _texture: n.style.texture,
                            alpha: n.style.alpha,
                            worldAlpha: 1
                        };
                    this.batches[r] = h;
                }
            }, r.prototype._renderBatched = function(t) {
                if (this.batches.length) {
                    t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();

                    for (var e = 0, r = this.batches.length; e < r; e++) {
                        var i = this.batches[e];
                        i.worldAlpha = this.worldAlpha * i.alpha, t.plugins[this.pluginName].render(i);
                    }
                }
            }, r.prototype._renderDirect = function(t) {
                var e = this._resolveDirectShader(t),
                    r = this.geometry,
                    i = this.tint,
                    n = this.worldAlpha,
                    o = e.uniforms,
                    s = r.drawCalls;

                o.translationMatrix = this.transform.worldTransform, o.tint[0] = (i >> 16 & 255) / 255 * n, o.tint[1] = (i >> 8 & 255) / 255 * n, o.tint[2] = (255 & i) / 255 * n, o.tint[3] = n, t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);

                for (var a = 0, h = s.length; a < h; a++) {
                    this._renderDrawCallDirect(t, r.drawCalls[a]);
                }
            }, r.prototype._renderDrawCallDirect = function(t, e) {
                for (var r = e.textures, i = e.type, n = e.size, o = e.start, s = r.count, a = 0; a < s; a++) {
                    t.texture.bind(r.elements[a], a);
                }

                t.geometry.draw(i, n, o);
            }, r.prototype._resolveDirectShader = function(t) {
                var e = this.shader,
                    r = this.pluginName;

                if (!e) {
                    if (!Go[r]) {
                        for (var i = new Int32Array(16), n = 0; n < 16; n++) {
                            i[n] = n;
                        }

                        var o = {
                                tint: new Float32Array([1, 1, 1, 1]),
                                translationMatrix: new Ne(),
                                "default": ni.from({
                                    uSamplers: i
                                }, !0)
                            },
                            s = t.plugins[r]._shader.program;
                        Go[r] = new Xi(s, o);
                    }

                    e = Go[r];
                }

                return e;
            }, r.prototype._calculateBounds = function() {
                this.finishPoly();
                var t = this.geometry;

                if (t.graphicsData.length) {
                    var e = t.bounds,
                        r = e.minX,
                        i = e.minY,
                        n = e.maxX,
                        o = e.maxY;

                    this._bounds.addFrame(this.transform, r, i, n, o);
                }
            }, r.prototype.containsPoint = function(t) {
                return this.worldTransform.applyInverse(t, r._TEMP_POINT), this.geometry.containsPoint(r._TEMP_POINT);
            }, r.prototype.calculateTints = function() {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;

                    for (var t = $t(this.tint, Ho), e = 0; e < this.batches.length; e++) {
                        var r = this.batches[e],
                            i = r._batchRGB,
                            n = (t[0] * i[0] * 255 << 16) + (t[1] * i[1] * 255 << 8) + (0 | t[2] * i[2] * 255);
                        r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16);
                    }
                }
            }, r.prototype.calculateVertices = function() {
                if (this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID;

                    for (var t = this.transform.worldTransform, e = t.a, r = t.b, i = t.c, n = t.d, o = t.tx, s = t.ty, a = this.geometry.points, h = this.vertexData, u = 0, l = 0; l < a.length; l += 2) {
                        var c = a[l],
                            d = a[l + 1];
                        h[u++] = e * c + i * d + o, h[u++] = n * d + r * c + s;
                    }
                }
            }, r.prototype.closePath = function() {
                var t = this.currentPath;
                return t && (t.closeStroke = !0), this;
            }, r.prototype.setMatrix = function(t) {
                return this._matrix = t, this;
            }, r.prototype.beginHole = function() {
                return this.finishPoly(), this._holeMode = !0, this;
            }, r.prototype.endHole = function() {
                return this.finishPoly(), this._holeMode = !1, this;
            }, r.prototype.destroy = function(t) {
                e.prototype.destroy.call(this, t), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this.geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, e.prototype.destroy.call(this, t);
            }, Object.defineProperties(r.prototype, i), r;
        }($e);

    Yo._TEMP_POINT = new De();

    var Vo = new De(),
        zo = new Uint16Array([0, 1, 2, 0, 2, 3]),
        Wo = function(e) {
            function r(r) {
                e.call(this), this._anchor = new Me(this._onAnchorUpdate, this, r ? r.defaultAnchor.x : 0, r ? r.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = t.BLEND_MODES.NORMAL, this.shader = null, this._cachedTint = 16777215, this.uvs = null, this.texture = r || Hr.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = zo, this.size = 4, this.start = 0, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = M.ROUND_PIXELS;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                roundPixels: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                anchor: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                texture: {
                    configurable: !0
                }
            };
            return r.prototype._onTextureUpdate = function() {
                this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = fe(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = fe(this.scale.y) * this._height / this._texture.orig.height);
            }, r.prototype._onAnchorUpdate = function() {
                this._transformID = -1, this._transformTrimmedID = -1;
            }, r.prototype.calculateVertices = function() {
                var t = this._texture;

                if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                    var e = this.transform.worldTransform,
                        r = e.a,
                        i = e.b,
                        n = e.c,
                        o = e.d,
                        s = e.tx,
                        a = e.ty,
                        h = this.vertexData,
                        u = t.trim,
                        l = t.orig,
                        c = this._anchor,
                        d = 0,
                        p = 0,
                        f = 0,
                        v = 0;
                    if (u ? (d = (p = u.x - c._x * l.width) + u.width, f = (v = u.y - c._y * l.height) + u.height) : (d = (p = -c._x * l.width) + l.width, f = (v = -c._y * l.height) + l.height), h[0] = r * p + n * v + s, h[1] = o * v + i * p + a, h[2] = r * d + n * v + s, h[3] = o * v + i * d + a, h[4] = r * d + n * f + s, h[5] = o * f + i * d + a, h[6] = r * p + n * f + s, h[7] = o * f + i * p + a, this._roundPixels)
                        for (var m = M.RESOLUTION, g = 0; g < h.length; ++g) {
                            h[g] = Math.round((h[g] * m | 0) / m);
                        }
                }
            }, r.prototype.calculateTrimmedVertices = function() {
                if (this.vertexTrimmedData) {
                    if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
                } else this.vertexTrimmedData = new Float32Array(8);

                this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                var t = this._texture,
                    e = this.vertexTrimmedData,
                    r = t.orig,
                    i = this._anchor,
                    n = this.transform.worldTransform,
                    o = n.a,
                    s = n.b,
                    a = n.c,
                    h = n.d,
                    u = n.tx,
                    l = n.ty,
                    c = -i._x * r.width,
                    d = c + r.width,
                    p = -i._y * r.height,
                    f = p + r.height;
                e[0] = o * c + a * p + u, e[1] = h * p + s * c + l, e[2] = o * d + a * p + u, e[3] = h * p + s * d + l, e[4] = o * d + a * f + u, e[5] = h * f + s * d + l, e[6] = o * c + a * f + u, e[7] = h * f + s * c + l;
            }, r.prototype._render = function(t) {
                this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
            }, r.prototype._calculateBounds = function() {
                var t = this._texture.trim,
                    e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
            }, r.prototype.getLocalBounds = function(t) {
                return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new Ve()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t);
            }, r.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, Vo);
                var e = this._texture.orig.width,
                    r = this._texture.orig.height,
                    i = -e * this.anchor.x,
                    n = 0;
                return Vo.x >= i && Vo.x < i + e && (n = -r * this.anchor.y, Vo.y >= n && Vo.y < n + r);
            }, r.prototype.destroy = function(t) {
                if (e.prototype.destroy.call(this, t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof t ? t : t && t.texture) {
                    var r = "boolean" == typeof t ? t : t && t.baseTexture;

                    this._texture.destroy(!!r);
                }

                this._texture = null, this.shader = null;
            }, r.from = function(t, e) {
                return new r(t instanceof Hr ? t : Hr.from(t, e));
            }, i.roundPixels.set = function(t) {
                this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
            }, i.roundPixels.get = function() {
                return this._roundPixels;
            }, i.width.get = function() {
                return Math.abs(this.scale.x) * this._texture.orig.width;
            }, i.width.set = function(t) {
                var e = fe(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t;
            }, i.height.get = function() {
                return Math.abs(this.scale.y) * this._texture.orig.height;
            }, i.height.set = function(t) {
                var e = fe(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t;
            }, i.anchor.get = function() {
                return this._anchor;
            }, i.anchor.set = function(t) {
                this._anchor.copyFrom(t);
            }, i.tint.get = function() {
                return this._tint;
            }, i.tint.set = function(t) {
                this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16);
            }, i.texture.get = function() {
                return this._texture;
            }, i.texture.set = function(t) {
                this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || Hr.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
            }, Object.defineProperties(r.prototype, i), r;
        }($e),
        qo = {
            LINEAR_VERTICAL: 0,
            LINEAR_HORIZONTAL: 1
        },
        Ko = {
            align: "left",
            breakWords: !1,
            dropShadow: !1,
            dropShadowAlpha: 1,
            dropShadowAngle: Math.PI / 6,
            dropShadowBlur: 0,
            dropShadowColor: "black",
            dropShadowDistance: 5,
            fill: "black",
            fillGradientType: qo.LINEAR_VERTICAL,
            fillGradientStops: [],
            fontFamily: "Arial",
            fontSize: 26,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            letterSpacing: 0,
            lineHeight: 0,
            lineJoin: "miter",
            miterLimit: 10,
            padding: 0,
            stroke: "black",
            strokeThickness: 0,
            textBaseline: "alphabetic",
            trim: !1,
            whiteSpace: "pre",
            wordWrap: !1,
            wordWrapWidth: 100,
            leading: 0
        },
        Zo = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
        Jo = function Jo(t) {
            this.styleID = 0, this.reset(), es(this, t, t);
        },
        Qo = {
            align: {
                configurable: !0
            },
            breakWords: {
                configurable: !0
            },
            dropShadow: {
                configurable: !0
            },
            dropShadowAlpha: {
                configurable: !0
            },
            dropShadowAngle: {
                configurable: !0
            },
            dropShadowBlur: {
                configurable: !0
            },
            dropShadowColor: {
                configurable: !0
            },
            dropShadowDistance: {
                configurable: !0
            },
            fill: {
                configurable: !0
            },
            fillGradientType: {
                configurable: !0
            },
            fillGradientStops: {
                configurable: !0
            },
            fontFamily: {
                configurable: !0
            },
            fontSize: {
                configurable: !0
            },
            fontStyle: {
                configurable: !0
            },
            fontVariant: {
                configurable: !0
            },
            fontWeight: {
                configurable: !0
            },
            letterSpacing: {
                configurable: !0
            },
            lineHeight: {
                configurable: !0
            },
            leading: {
                configurable: !0
            },
            lineJoin: {
                configurable: !0
            },
            miterLimit: {
                configurable: !0
            },
            padding: {
                configurable: !0
            },
            stroke: {
                configurable: !0
            },
            strokeThickness: {
                configurable: !0
            },
            textBaseline: {
                configurable: !0
            },
            trim: {
                configurable: !0
            },
            whiteSpace: {
                configurable: !0
            },
            wordWrap: {
                configurable: !0
            },
            wordWrapWidth: {
                configurable: !0
            }
        };

    function $o(t) {
        return "number" == typeof t ? te(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t);
    }

    function ts(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) {
                t[e] = $o(t[e]);
            }

            return t;
        }

        return $o(t);
    }

    function es(t, e, r) {
        for (var i in r) {
            Array.isArray(e[i]) ? t[i] = e[i].slice() : t[i] = e[i];
        }
    }

    Jo.prototype.clone = function() {
        var t = {};
        return es(t, this, Ko), new Jo(t);
    }, Jo.prototype.reset = function() {
        es(this, Ko, Ko);
    }, Qo.align.get = function() {
        return this._align;
    }, Qo.align.set = function(t) {
        this._align !== t && (this._align = t, this.styleID++);
    }, Qo.breakWords.get = function() {
        return this._breakWords;
    }, Qo.breakWords.set = function(t) {
        this._breakWords !== t && (this._breakWords = t, this.styleID++);
    }, Qo.dropShadow.get = function() {
        return this._dropShadow;
    }, Qo.dropShadow.set = function(t) {
        this._dropShadow !== t && (this._dropShadow = t, this.styleID++);
    }, Qo.dropShadowAlpha.get = function() {
        return this._dropShadowAlpha;
    }, Qo.dropShadowAlpha.set = function(t) {
        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++);
    }, Qo.dropShadowAngle.get = function() {
        return this._dropShadowAngle;
    }, Qo.dropShadowAngle.set = function(t) {
        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++);
    }, Qo.dropShadowBlur.get = function() {
        return this._dropShadowBlur;
    }, Qo.dropShadowBlur.set = function(t) {
        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++);
    }, Qo.dropShadowColor.get = function() {
        return this._dropShadowColor;
    }, Qo.dropShadowColor.set = function(t) {
        var e = ts(t);
        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++);
    }, Qo.dropShadowDistance.get = function() {
        return this._dropShadowDistance;
    }, Qo.dropShadowDistance.set = function(t) {
        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++);
    }, Qo.fill.get = function() {
        return this._fill;
    }, Qo.fill.set = function(t) {
        var e = ts(t);
        this._fill !== e && (this._fill = e, this.styleID++);
    }, Qo.fillGradientType.get = function() {
        return this._fillGradientType;
    }, Qo.fillGradientType.set = function(t) {
        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++);
    }, Qo.fillGradientStops.get = function() {
        return this._fillGradientStops;
    }, Qo.fillGradientStops.set = function(t) {
        (function(t, e) {
            if (!Array.isArray(t) || !Array.isArray(e)) return !1;
            if (t.length !== e.length) return !1;

            for (var r = 0; r < t.length; ++r) {
                if (t[r] !== e[r]) return !1;
            }

            return !0;
        })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++);
    }, Qo.fontFamily.get = function() {
        return this._fontFamily;
    }, Qo.fontFamily.set = function(t) {
        this.fontFamily !== t && (this._fontFamily = t, this.styleID++);
    }, Qo.fontSize.get = function() {
        return this._fontSize;
    }, Qo.fontSize.set = function(t) {
        this._fontSize !== t && (this._fontSize = t, this.styleID++);
    }, Qo.fontStyle.get = function() {
        return this._fontStyle;
    }, Qo.fontStyle.set = function(t) {
        this._fontStyle !== t && (this._fontStyle = t, this.styleID++);
    }, Qo.fontVariant.get = function() {
        return this._fontVariant;
    }, Qo.fontVariant.set = function(t) {
        this._fontVariant !== t && (this._fontVariant = t, this.styleID++);
    }, Qo.fontWeight.get = function() {
        return this._fontWeight;
    }, Qo.fontWeight.set = function(t) {
        this._fontWeight !== t && (this._fontWeight = t, this.styleID++);
    }, Qo.letterSpacing.get = function() {
        return this._letterSpacing;
    }, Qo.letterSpacing.set = function(t) {
        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++);
    }, Qo.lineHeight.get = function() {
        return this._lineHeight;
    }, Qo.lineHeight.set = function(t) {
        this._lineHeight !== t && (this._lineHeight = t, this.styleID++);
    }, Qo.leading.get = function() {
        return this._leading;
    }, Qo.leading.set = function(t) {
        this._leading !== t && (this._leading = t, this.styleID++);
    }, Qo.lineJoin.get = function() {
        return this._lineJoin;
    }, Qo.lineJoin.set = function(t) {
        this._lineJoin !== t && (this._lineJoin = t, this.styleID++);
    }, Qo.miterLimit.get = function() {
        return this._miterLimit;
    }, Qo.miterLimit.set = function(t) {
        this._miterLimit !== t && (this._miterLimit = t, this.styleID++);
    }, Qo.padding.get = function() {
        return this._padding;
    }, Qo.padding.set = function(t) {
        this._padding !== t && (this._padding = t, this.styleID++);
    }, Qo.stroke.get = function() {
        return this._stroke;
    }, Qo.stroke.set = function(t) {
        var e = ts(t);
        this._stroke !== e && (this._stroke = e, this.styleID++);
    }, Qo.strokeThickness.get = function() {
        return this._strokeThickness;
    }, Qo.strokeThickness.set = function(t) {
        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++);
    }, Qo.textBaseline.get = function() {
        return this._textBaseline;
    }, Qo.textBaseline.set = function(t) {
        this._textBaseline !== t && (this._textBaseline = t, this.styleID++);
    }, Qo.trim.get = function() {
        return this._trim;
    }, Qo.trim.set = function(t) {
        this._trim !== t && (this._trim = t, this.styleID++);
    }, Qo.whiteSpace.get = function() {
        return this._whiteSpace;
    }, Qo.whiteSpace.set = function(t) {
        this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++);
    }, Qo.wordWrap.get = function() {
        return this._wordWrap;
    }, Qo.wordWrap.set = function(t) {
        this._wordWrap !== t && (this._wordWrap = t, this.styleID++);
    }, Qo.wordWrapWidth.get = function() {
        return this._wordWrapWidth;
    }, Qo.wordWrapWidth.set = function(t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++);
    }, Jo.prototype.toFontString = function() {
        var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
            e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));

        for (var r = e.length - 1; r >= 0; r--) {
            var i = e[r].trim();
            !/([\"\'])[^\'\"]+\1/.test(i) && Zo.indexOf(i) < 0 && (i = '"' + i + '"'), e[r] = i;
        }

        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",");
    }, Object.defineProperties(Jo.prototype, Qo);

    var rs = function rs(t, e, r, i, n, o, s, a, h) {
        this.text = t, this.style = e, this.width = r, this.height = i, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h;
    };

    rs.measureText = function(t, e, r, i) {
        void 0 === i && (i = rs._canvas), r = null == r ? e.wordWrap : r;
        var n = e.toFontString(),
            o = rs.measureFont(n);
        0 === o.fontSize && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
        var s = i.getContext("2d");
        s.font = n;

        for (var a = (r ? rs.wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), h = new Array(a.length), u = 0, l = 0; l < a.length; l++) {
            var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
            h[l] = c, u = Math.max(u, c);
        }

        var d = u + e.strokeThickness;
        e.dropShadow && (d += e.dropShadowDistance);
        var p = e.lineHeight || o.fontSize + e.strokeThickness,
            f = Math.max(p, o.fontSize + e.strokeThickness) + (a.length - 1) * (p + e.leading);
        return e.dropShadow && (f += e.dropShadowDistance), new rs(t, e, d, f, a, h, p + e.leading, u, o);
    }, rs.wordWrap = function(t, e, r) {
        void 0 === r && (r = rs._canvas);

        for (var i = r.getContext("2d"), n = 0, o = "", s = "", a = {}, h = e.letterSpacing, u = e.whiteSpace, l = rs.collapseSpaces(u), c = rs.collapseNewlines(u), d = !l, p = e.wordWrapWidth + h, f = rs.tokenize(t), v = 0; v < f.length; v++) {
            var m = f[v];

            if (rs.isNewline(m)) {
                if (!c) {
                    s += rs.addLine(o), d = !l, o = "", n = 0;
                    continue;
                }

                m = " ";
            }

            if (l) {
                var g = rs.isBreakingSpace(m),
                    y = rs.isBreakingSpace(o[o.length - 1]);
                if (g && y) continue;
            }

            var _ = rs.getFromCache(m, h, a, i);

            if (_ > p) {
                if ("" !== o && (s += rs.addLine(o), o = "", n = 0), rs.canBreakWords(m, e.breakWords))
                    for (var x = rs.wordWrapSplit(m), b = 0; b < x.length; b++) {
                        for (var E = x[b], T = 1; x[b + T];) {
                            var w = x[b + T],
                                S = E[E.length - 1];
                            if (rs.canBreakChars(S, w, m, b, e.breakWords)) break;
                            E += w, T++;
                        }

                        b += E.length - 1;
                        var I = rs.getFromCache(E, h, a, i);
                        I + n > p && (s += rs.addLine(o), d = !1, o = "", n = 0), o += E, n += I;
                    } else {
                        o.length > 0 && (s += rs.addLine(o), o = "", n = 0);
                        var P = v === f.length - 1;
                        s += rs.addLine(m, !P), d = !1, o = "", n = 0;
                    }
            } else _ + n > p && (d = !1, s += rs.addLine(o), o = "", n = 0), (o.length > 0 || !rs.isBreakingSpace(m) || d) && (o += m, n += _);
        }

        return s += rs.addLine(o, !1);
    }, rs.addLine = function(t, e) {
        return void 0 === e && (e = !0), t = rs.trimRight(t), t = e ? t + "\n" : t;
    }, rs.getFromCache = function(t, e, r, i) {
        var n = r[t];

        if (void 0 === n) {
            var o = t.length * e;
            n = i.measureText(t).width + o, r[t] = n;
        }

        return n;
    }, rs.collapseSpaces = function(t) {
        return "normal" === t || "pre-line" === t;
    }, rs.collapseNewlines = function(t) {
        return "normal" === t;
    }, rs.trimRight = function(t) {
        if ("string" != typeof t) return "";

        for (var e = t.length - 1; e >= 0; e--) {
            var r = t[e];
            if (!rs.isBreakingSpace(r)) break;
            t = t.slice(0, -1);
        }

        return t;
    }, rs.isNewline = function(t) {
        return "string" == typeof t && rs._newlines.indexOf(t.charCodeAt(0)) >= 0;
    }, rs.isBreakingSpace = function(t) {
        return "string" == typeof t && rs._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0;
    }, rs.tokenize = function(t) {
        var e = [],
            r = "";
        if ("string" != typeof t) return e;

        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            rs.isBreakingSpace(n) || rs.isNewline(n) ? ("" !== r && (e.push(r), r = ""), e.push(n)) : r += n;
        }

        return "" !== r && e.push(r), e;
    }, rs.canBreakWords = function(t, e) {
        return e;
    }, rs.canBreakChars = function(t, e, r, i, n) {
        return !0;
    }, rs.wordWrapSplit = function(t) {
        return t.split("");
    }, rs.measureFont = function(t) {
        if (rs._fonts[t]) return rs._fonts[t];
        var e = {},
            r = rs._canvas,
            i = rs._context;
        i.font = t;
        var n = rs.METRICS_STRING + rs.BASELINE_SYMBOL,
            o = Math.ceil(i.measureText(n).width),
            s = Math.ceil(i.measureText(rs.BASELINE_SYMBOL).width),
            a = 2 * s;
        s = s * rs.BASELINE_MULTIPLIER | 0, r.width = o, r.height = a, i.fillStyle = "#f00", i.fillRect(0, 0, o, a), i.font = t, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(n, 0, s);
        var h = i.getImageData(0, 0, o, a).data,
            u = h.length,
            l = 4 * o,
            c = 0,
            d = 0,
            p = !1;

        for (c = 0; c < s; ++c) {
            for (var f = 0; f < l; f += 4) {
                if (255 !== h[d + f]) {
                    p = !0;
                    break;
                }
            }

            if (p) break;
            d += l;
        }

        for (e.ascent = s - c, d = u - l, p = !1, c = a; c > s; --c) {
            for (var v = 0; v < l; v += 4) {
                if (255 !== h[d + v]) {
                    p = !0;
                    break;
                }
            }

            if (p) break;
            d -= l;
        }

        return e.descent = c - s, e.fontSize = e.ascent + e.descent, rs._fonts[t] = e, e;
    }, rs.clearMetrics = function(t) {
        void 0 === t && (t = ""), t ? delete rs._fonts[t] : rs._fonts = {};
    };

    var is = function() {
        try {
            var t = new OffscreenCanvas(0, 0),
                e = t.getContext("2d");
            return e && e.measureText ? t : document.createElement("canvas");
        } catch (t) {
            return document.createElement("canvas");
        }
    }();

    is.width = is.height = 10, rs._canvas = is, rs._context = is.getContext("2d"), rs._fonts = {}, rs.METRICS_STRING = "|Ã‰qÃ…", rs.BASELINE_SYMBOL = "M", rs.BASELINE_MULTIPLIER = 1.4, rs._newlines = [10, 13], rs._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];

    var ns = {
            texture: !0,
            children: !1,
            baseTexture: !0
        },
        os = function(t) {
            function e(e, r, i) {
                (i = i || document.createElement("canvas")).width = 3, i.height = 3;
                var n = Hr.from(i);
                n.orig = new Ve(), n.trim = new Ve(), t.call(this, n), this.canvas = i, this.context = this.canvas.getContext("2d"), this._resolution = M.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = r, this.localStyleID = -1;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                style: {
                    configurable: !0
                },
                text: {
                    configurable: !0
                },
                resolution: {
                    configurable: !0
                }
            };
            return e.prototype.updateText = function(t) {
                var e = this._style;

                if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                    this._font = this._style.toFontString();
                    var r,
                        i,
                        n = this.context,
                        o = rs.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                        s = o.width,
                        a = o.height,
                        h = o.lines,
                        u = o.lineHeight,
                        l = o.lineWidths,
                        c = o.maxLineWidth,
                        d = o.fontProperties;
                    this.canvas.width = Math.ceil((Math.max(1, s) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil((Math.max(1, a) + 2 * e.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit;

                    for (var p = e.dropShadow ? 2 : 1, f = 0; f < p; ++f) {
                        var v = e.dropShadow && 0 === f,
                            m = v ? 2 * a : 0,
                            g = m * this.resolution;

                        if (v) {
                            n.fillStyle = "black", n.strokeStyle = "black";

                            var y = e.dropShadowColor,
                                _ = $t("number" == typeof y ? y : ee(y));

                            n.shadowColor = "rgba(" + 255 * _[0] + "," + 255 * _[1] + "," + 255 * _[2] + "," + e.dropShadowAlpha + ")", n.shadowBlur = e.dropShadowBlur, n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + g;
                        } else n.fillStyle = this._generateFillStyle(e, h), n.strokeStyle = e.stroke, n.shadowColor = 0, n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;

                        for (var x = 0; x < h.length; x++) {
                            r = e.strokeThickness / 2, i = e.strokeThickness / 2 + x * u + d.ascent, "right" === e.align ? r += c - l[x] : "center" === e.align && (r += (c - l[x]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(h[x], r + e.padding, i + e.padding - m, !0), e.fill && this.drawLetterSpacing(h[x], r + e.padding, i + e.padding - m);
                        }
                    }

                    this.updateTexture();
                }
            }, e.prototype.drawLetterSpacing = function(t, e, r, i) {
                void 0 === i && (i = !1);
                var n = this._style.letterSpacing;
                if (0 !== n)
                    for (var o = e, s = Array.from ? Array.from(t) : t.split(""), a = this.context.measureText(t).width, h = 0, u = 0; u < s.length; ++u) {
                        var l = s[u];
                        i ? this.context.strokeText(l, o, r) : this.context.fillText(l, o, r), o += a - (h = this.context.measureText(t.substring(u + 1)).width) + n, a = h;
                    } else i ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
            }, e.prototype.updateTexture = function() {
                var t = this.canvas;

                if (this._style.trim) {
                    var e = Te(t);
                    e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0));
                }

                var r = this._texture,
                    i = this._style,
                    n = i.trim ? 0 : i.padding,
                    o = r.baseTexture;
                r.trim.width = r._frame.width = Math.ceil(t.width / this._resolution), r.trim.height = r._frame.height = Math.ceil(t.height / this._resolution), r.trim.x = -n, r.trim.y = -n, r.orig.width = r._frame.width - 2 * n, r.orig.height = r._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), this.dirty = !1;
            }, e.prototype._render = function(e) {
                this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e);
            }, e.prototype.getLocalBounds = function(e) {
                return this.updateText(!0), t.prototype.getLocalBounds.call(this, e);
            }, e.prototype._calculateBounds = function() {
                this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
            }, e.prototype._onStyleChange = function() {
                this.dirty = !0;
            }, e.prototype._generateFillStyle = function(t, e) {
                if (!Array.isArray(t.fill)) return t.fill;
                if (1 === t.fill.length) return t.fill[0];
                var r,
                    i,
                    n,
                    o,
                    s = t.dropShadow ? t.dropShadowDistance : 0,
                    a = Math.ceil(this.canvas.width / this._resolution) - s,
                    h = Math.ceil(this.canvas.height / this._resolution) - s,
                    u = t.fill.slice(),
                    l = t.fillGradientStops.slice();
                if (!l.length)
                    for (var c = u.length + 1, d = 1; d < c; ++d) {
                        l.push(d / c);
                    }

                if (u.unshift(t.fill[0]), l.unshift(0), u.push(t.fill[t.fill.length - 1]), l.push(1), t.fillGradientType === qo.LINEAR_VERTICAL) {
                    r = this.context.createLinearGradient(a / 2, 0, a / 2, h), i = (u.length + 1) * e.length, n = 0;

                    for (var p = 0; p < e.length; p++) {
                        n += 1;

                        for (var f = 0; f < u.length; f++) {
                            o = "number" == typeof l[f] ? l[f] / e.length + p / e.length : n / i, r.addColorStop(o, u[f]), n++;
                        }
                    }
                } else {
                    r = this.context.createLinearGradient(0, h / 2, a, h / 2), i = u.length + 1, n = 1;

                    for (var v = 0; v < u.length; v++) {
                        o = "number" == typeof l[v] ? l[v] : n / i, r.addColorStop(o, u[v]), n++;
                    }
                }

                return r;
            }, e.prototype.destroy = function(e) {
                "boolean" == typeof e && (e = {
                    children: e
                }), e = Object.assign({}, ns, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null;
            }, r.width.get = function() {
                return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
            }, r.width.set = function(t) {
                this.updateText(!0);
                var e = fe(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t;
            }, r.height.get = function() {
                return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
            }, r.height.set = function(t) {
                this.updateText(!0);
                var e = fe(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t;
            }, r.style.get = function() {
                return this._style;
            }, r.style.set = function(t) {
                t = t || {}, this._style = t instanceof Jo ? t : new Jo(t), this.localStyleID = -1, this.dirty = !0;
            }, r.text.get = function() {
                return this._text;
            }, r.text.set = function(t) {
                t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
            }, r.resolution.get = function() {
                return this._resolution;
            }, r.resolution.set = function(t) {
                this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
            }, Object.defineProperties(e.prototype, r), e;
        }(Wo);

    M.UPLOADS_PER_FRAME = 4;

    var ss = function ss(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0;
    };

    ss.prototype.beginFrame = function() {
        this.itemsLeft = this.maxItemsPerFrame;
    }, ss.prototype.allowedToUpload = function() {
        return this.itemsLeft-- > 0;
    };

    var as = function as(t) {
        var e = this;
        this.limiter = new ss(M.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
            e.queue && e.prepareItems();
        }, this.registerFindHook(ps), this.registerFindHook(fs), this.registerFindHook(hs), this.registerFindHook(us), this.registerFindHook(ls), this.registerUploadHook(cs), this.registerUploadHook(ds);
    };

    function hs(t, e) {
        var r = !1;
        if (t && t._textures && t._textures.length)
            for (var i = 0; i < t._textures.length; i++) {
                if (t._textures[i] instanceof Hr) {
                    var n = t._textures[i].baseTexture; -
                    1 === e.indexOf(n) && (e.push(n), r = !0);
                }
            }
        return r;
    }

    function us(t, e) {
        if (t.baseTexture instanceof Pr) {
            var r = t.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0;
        }

        return !1;
    }

    function ls(t, e) {
        if (t._texture && t._texture instanceof Hr) {
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0;
        }

        return !1;
    }

    function cs(t, e) {
        return e instanceof os && (e.updateText(!0), !0);
    }

    function ds(t, e) {
        if (e instanceof Jo) {
            var r = e.toFontString();
            return rs.measureFont(r), !0;
        }

        return !1;
    }

    function ps(t, e) {
        if (t instanceof os) {
            -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0;
        }

        return !1;
    }

    function fs(t, e) {
        return t instanceof Jo && (-1 === e.indexOf(t) && e.push(t), !0);
    }

    as.prototype.upload = function(e, r) {
        "function" == typeof e && (r = e, e = null), e && this.add(e), this.queue.length ? (r && this.completes.push(r), this.ticking || (this.ticking = !0, or.system.addOnce(this.tick, this, t.UPDATE_PRIORITY.UTILITY))) : r && r();
    }, as.prototype.tick = function() {
        setTimeout(this.delayedTick, 0);
    }, as.prototype.prepareItems = function() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
            var e = this.queue[0],
                r = !1;
            if (e && !e._destroyed)
                for (var i = 0, n = this.uploadHooks.length; i < n; i++) {
                    if (this.uploadHooks[i](this.uploadHookHelper, e)) {
                        this.queue.shift(), r = !0;
                        break;
                    }
                }
            r || this.queue.shift();
        }

        if (this.queue.length) or.system.addOnce(this.tick, this, t.UPDATE_PRIORITY.UTILITY);
        else {
            this.ticking = !1;
            var o = this.completes.slice(0);
            this.completes.length = 0;

            for (var s = 0, a = o.length; s < a; s++) {
                o[s]();
            }
        }
    }, as.prototype.registerFindHook = function(t) {
        return t && this.addHooks.push(t), this;
    }, as.prototype.registerUploadHook = function(t) {
        return t && this.uploadHooks.push(t), this;
    }, as.prototype.add = function(t) {
        for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++) {;
        }

        if (t instanceof $e)
            for (var i = t.children.length - 1; i >= 0; i--) {
                this.add(t.children[i]);
            }
        return this;
    }, as.prototype.destroy = function() {
        this.ticking && or.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
    };

    var vs = function(t) {
        function e(e) {
            t.call(this, e), this.uploadHookHelper = this.renderer, this.registerFindHook(ys), this.registerUploadHook(ms), this.registerUploadHook(gs);
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(as);

    function ms(t, e) {
        return e instanceof Pr && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0);
    }

    function gs(t, e) {
        if (!(e instanceof Yo)) return !1;
        var r = e.geometry;
        e.finishPoly(), r.updateBatches();

        for (var i = r.batches, n = 0; n < i.length; n++) {
            var o = i[n].style.texture;
            o && ms(t, o.baseTexture);
        }

        return r.batchable || t.geometry.bind(r, e._resolveDirectShader()), !0;
    }

    function ys(t, e) {
        return t instanceof Yo && (e.push(t), !0);
    }

    var _s = function _s(t) {
        this.maxMilliseconds = t, this.frameStart = 0;
    };

    _s.prototype.beginFrame = function() {
        this.frameStart = Date.now();
    }, _s.prototype.allowedToUpload = function() {
        return Date.now() - this.frameStart < this.maxMilliseconds;
    };

    var xs = function xs(t, e, r) {
            void 0 === r && (r = null), this.baseTexture = t, this.textures = {}, this.animations = {}, this.data = e, this.resolution = this._updateResolution(r || (this.baseTexture.resource ? this.baseTexture.resource.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
        },
        bs = {
            BATCH_SIZE: {
                configurable: !0
            }
        };

    bs.BATCH_SIZE.get = function() {
        return 1e3;
    }, xs.prototype._updateResolution = function(t) {
        var e = this.data.meta.scale,
            r = Pe(t, null);
        return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && this.baseTexture.setResolution(r), r;
    }, xs.prototype.parse = function(t) {
        this._batchIndex = 0, this._callback = t, this._frameKeys.length <= xs.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    }, xs.prototype._processFrames = function(t) {
        for (var e = t, r = xs.BATCH_SIZE; e - t < r && e < this._frameKeys.length;) {
            var i = this._frameKeys[e],
                n = this._frames[i],
                o = n.frame;

            if (o) {
                var s = null,
                    a = null,
                    h = !1 !== n.trimmed && n.sourceSize ? n.sourceSize : n.frame,
                    u = new Ve(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                s = n.rotated ? new Ve(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : new Ve(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), !1 !== n.trimmed && n.spriteSourceSize && (a = new Ve(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[i] = new Hr(this.baseTexture, s, u, a, n.rotated ? 2 : 0, n.anchor), Hr.addToCache(this.textures[i], i);
            }

            e++;
        }
    }, xs.prototype._processAnimations = function() {
        var t = this.data.animations || {};

        for (var e in t) {
            this.animations[e] = [];

            for (var r = 0; r < t[e].length; r++) {
                var i = t[e][r];
                this.animations[e].push(this.textures[i]);
            }
        }
    }, xs.prototype._parseComplete = function() {
        var t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
    }, xs.prototype._nextBatch = function() {
        var t = this;
        this._processFrames(this._batchIndex * xs.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
            t._batchIndex * xs.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : (t._processAnimations(), t._parseComplete());
        }, 0);
    }, xs.prototype.destroy = function(t) {
        for (var e in void 0 === t && (t = !1), this.textures) {
            this.textures[e].destroy();
        }

        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null;
    }, Object.defineProperties(xs, bs);

    var Es = function Es() {};

    Es.use = function(t, e) {
        var r = t.name + "_image";

        if (t.data && t.type === po.TYPE.JSON && t.data.frames && !this.resources[r]) {
            var i = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                },
                n = Es.getResourcePath(t, this.baseUrl);
            this.add(r, n, i, function(r) {
                if (r.error) e(r.error);
                else {
                    var i = new xs(r.texture.baseTexture, t.data, t.url);
                    i.parse(function() {
                        t.spritesheet = i, t.textures = i.textures, e();
                    });
                }
            });
        } else e();
    }, Es.getResourcePath = function(t, e) {
        return t.isDataUrl ? t.data.meta.image : Wt.resolve(t.url.replace(e, ""), t.data.meta.image);
    };

    var Ts = new De(),
        ws = function(t) {
            function e(e, r, i) {
                void 0 === r && (r = 100), void 0 === i && (i = 100), t.call(this, e), this.tileTransform = new Ye(), this._width = r, this._height = i, this._canvasPattern = null, this.uvMatrix = e.uvMatrix || new qi(e), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                clampMargin: {
                    configurable: !0
                },
                tileScale: {
                    configurable: !0
                },
                tilePosition: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return r.clampMargin.get = function() {
                return this.uvMatrix.clampMargin;
            }, r.clampMargin.set = function(t) {
                this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0);
            }, r.tileScale.get = function() {
                return this.tileTransform.scale;
            }, r.tileScale.set = function(t) {
                this.tileTransform.scale.copyFrom(t);
            }, r.tilePosition.get = function() {
                return this.tileTransform.position;
            }, r.tilePosition.set = function(t) {
                this.tileTransform.position.copyFrom(t);
            }, e.prototype._onTextureUpdate = function() {
                this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
            }, e.prototype._render = function(t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
            }, e.prototype._calculateBounds = function() {
                var t = this._width * -this._anchor._x,
                    e = this._height * -this._anchor._y,
                    r = this._width * (1 - this._anchor._x),
                    i = this._height * (1 - this._anchor._y);

                this._bounds.addFrame(this.transform, t, e, r, i);
            }, e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new Ve()), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e);
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, Ts);
                var e = this._width,
                    r = this._height,
                    i = -e * this.anchor._x;

                if (Ts.x >= i && Ts.x < i + e) {
                    var n = -r * this.anchor._y;
                    if (Ts.y >= n && Ts.y < n + r) return !0;
                }

                return !1;
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null;
            }, e.from = function(t, r, i) {
                return new e(Hr.from(t), r, i);
            }, e.fromFrame = function(t, r, i) {
                var n = xe[t];
                if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new e(n, r, i);
            }, e.fromImage = function(t, r, i, n) {
                return n && "object" != _typeof(n) && (n = {
                    scaleMode: arguments[4],
                    resourceOptions: {
                        crossorigin: arguments[3]
                    }
                }), new e(Hr.from(t, n), r, i);
            }, r.width.get = function() {
                return this._width;
            }, r.width.set = function(t) {
                this._width = t;
            }, r.height.get = function() {
                return this._height;
            }, r.height.set = function(t) {
                this._height = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Wo),
        Ss = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        Is = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord - floor(vTextureCoord - uClampOffset);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
        Ps = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
        As = new Ne(),
        Os = function(e) {
            function r(t) {
                e.call(this, t);
                var r = {
                    globals: this.renderer.globalUniforms
                };
                this.shader = Xi.from(Ss, Is, r), this.simpleShader = Xi.from(Ss, Ps, r), this.quad = new ri(), this.state = Hi.for2d();
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(e) {
                var r = this.renderer,
                    i = this.quad,
                    n = i.vertices;
                n[0] = n[6] = e._width * -e.anchor.x, n[1] = n[3] = e._height * -e.anchor.y, n[2] = n[4] = e._width * (1 - e.anchor.x), n[5] = n[7] = e._height * (1 - e.anchor.y), e.uvRespectAnchor && ((n = i.uvs)[0] = n[6] = -e.anchor.x, n[1] = n[3] = -e.anchor.y, n[2] = n[4] = 1 - e.anchor.x, n[5] = n[7] = 1 - e.anchor.y), i.invalidate();
                var o = e._texture,
                    s = o.baseTexture,
                    a = e.tileTransform.localTransform,
                    h = e.uvMatrix,
                    u = s.isPowerOfTwo && o.frame.width === s.width && o.frame.height === s.height;
                u && (s._glTextures[r.CONTEXT_UID] ? u = s.wrapMode !== t.WRAP_MODES.CLAMP : s.wrapMode === t.WRAP_MODES.CLAMP && (s.wrapMode = t.WRAP_MODES.REPEAT));
                var l = u ? this.simpleShader : this.shader,
                    c = o.width,
                    d = o.height,
                    p = e._width,
                    f = e._height;
                As.set(a.a * c / p, a.b * c / f, a.c * d / p, a.d * d / f, a.tx / p, a.ty / f), As.invert(), u ? As.prepend(h.mapCoord) : (l.uniforms.uMapCoord = h.mapCoord.toArray(!0), l.uniforms.uClampFrame = h.uClampFrame, l.uniforms.uClampOffset = h.uClampOffset), l.uniforms.uTransform = As.toArray(!0), l.uniforms.uColor = se(e.tint, e.worldAlpha, l.uniforms.uColor, s.alphaMode), l.uniforms.translationMatrix = e.transform.worldTransform.toArray(!0), l.uniforms.uSampler = o, r.shader.bind(l), r.geometry.bind(i), this.state.blendMode = ie(e.blendMode, s.alphaMode), r.state.set(this.state), r.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
            }, r;
        }(ai),
        Ds = function(t) {
            function e(e, r) {
                var i = this;
                void 0 === r && (r = {}), t.call(this), this._textWidth = 0, this._textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== r.tint ? r.tint : 16777215,
                    align: r.align || "left",
                    name: null,
                    size: 0
                }, this.font = r.font, this._text = e, this._maxWidth = 0, this._maxLineHeight = 0, this._letterSpacing = 0, this._anchor = new Me(function() {
                    i.dirty = !0;
                }, this, 0, 0), this.dirty = !1, this.roundPixels = M.ROUND_PIXELS, this.updateText();
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                tint: {
                    configurable: !0
                },
                align: {
                    configurable: !0
                },
                anchor: {
                    configurable: !0
                },
                font: {
                    configurable: !0
                },
                text: {
                    configurable: !0
                },
                maxWidth: {
                    configurable: !0
                },
                maxLineHeight: {
                    configurable: !0
                },
                textWidth: {
                    configurable: !0
                },
                letterSpacing: {
                    configurable: !0
                },
                textHeight: {
                    configurable: !0
                }
            };
            return e.prototype.updateText = function() {
                for (var t = e.fonts[this._font.name], r = this._font.size / t.size, i = new De(), n = [], o = [], s = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", a = s.length, h = this._maxWidth * t.size / this._font.size, u = null, l = 0, c = 0, d = 0, p = -1, f = 0, v = 0, m = 0, g = 0; g < a; g++) {
                    var y = s.charCodeAt(g),
                        _ = s.charAt(g);

                    if (/(?:\s)/.test(_) && (p = g, f = l), "\r" !== _ && "\n" !== _) {
                        var x = t.chars[y];
                        x && (u && x.kerning[u] && (i.x += x.kerning[u]), n.push({
                            texture: x.texture,
                            line: d,
                            charCode: y,
                            position: new De(i.x + x.xOffset + this._letterSpacing / 2, i.y + x.yOffset)
                        }), i.x += x.xAdvance + this._letterSpacing, l = i.x, m = Math.max(m, x.yOffset + x.texture.height), u = y, -1 !== p && h > 0 && i.x > h && (pe(n, 1 + p - ++v, 1 + g - p), g = p, p = -1, o.push(f), c = Math.max(c, f), d++, i.x = 0, i.y += t.lineHeight, u = null));
                    } else o.push(l), c = Math.max(c, l), ++d, ++v, i.x = 0, i.y += t.lineHeight, u = null;
                }

                var b = s.charAt(s.length - 1);
                "\r" !== b && "\n" !== b && (/(?:\s)/.test(b) && (l = f), o.push(l), c = Math.max(c, l));

                for (var E = [], T = 0; T <= d; T++) {
                    var w = 0;
                    "right" === this._font.align ? w = c - o[T] : "center" === this._font.align && (w = (c - o[T]) / 2), E.push(w);
                }

                for (var S = n.length, I = this.tint, P = 0; P < S; P++) {
                    var A = this._glyphs[P];
                    A ? A.texture = n[P].texture : ((A = new Wo(n[P].texture)).roundPixels = this.roundPixels, this._glyphs.push(A)), A.position.x = (n[P].position.x + E[n[P].line]) * r, A.position.y = n[P].position.y * r, A.scale.x = A.scale.y = r, A.tint = I, A.parent || this.addChild(A);
                }

                for (var O = S; O < this._glyphs.length; ++O) {
                    this.removeChild(this._glyphs[O]);
                }

                if (this._textWidth = c * r, this._textHeight = (i.y + t.lineHeight) * r, 0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (var D = 0; D < S; D++) {
                        this._glyphs[D].x -= this._textWidth * this.anchor.x, this._glyphs[D].y -= this._textHeight * this.anchor.y;
                    }
                this._maxLineHeight = m * r;
            }, e.prototype.updateTransform = function() {
                this.validate(), this.containerUpdateTransform();
            }, e.prototype.getLocalBounds = function() {
                return this.validate(), t.prototype.getLocalBounds.call(this);
            }, e.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1);
            }, r.tint.get = function() {
                return this._font.tint;
            }, r.tint.set = function(t) {
                this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0;
            }, r.align.get = function() {
                return this._font.align;
            }, r.align.set = function(t) {
                this._font.align = t || "left", this.dirty = !0;
            }, r.anchor.get = function() {
                return this._anchor;
            }, r.anchor.set = function(t) {
                "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t);
            }, r.font.get = function() {
                return this._font;
            }, r.font.set = function(t) {
                t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0);
            }, r.text.get = function() {
                return this._text;
            }, r.text.set = function(t) {
                t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
            }, r.maxWidth.get = function() {
                return this._maxWidth;
            }, r.maxWidth.set = function(t) {
                this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0);
            }, r.maxLineHeight.get = function() {
                return this.validate(), this._maxLineHeight;
            }, r.textWidth.get = function() {
                return this.validate(), this._textWidth;
            }, r.letterSpacing.get = function() {
                return this._letterSpacing;
            }, r.letterSpacing.set = function(t) {
                this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0);
            }, r.textHeight.get = function() {
                return this.validate(), this._textHeight;
            }, e.registerFont = function(t, r) {
                var i = {},
                    n = t.getElementsByTagName("info")[0],
                    o = t.getElementsByTagName("common")[0],
                    s = t.getElementsByTagName("page"),
                    a = Pe(s[0].getAttribute("file"), M.RESOLUTION),
                    h = {};
                i.font = n.getAttribute("face"), i.size = parseInt(n.getAttribute("size"), 10), i.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / a, i.chars = {}, r instanceof Hr && (r = [r]);

                for (var u = 0; u < s.length; u++) {
                    var l = s[u].getAttribute("id"),
                        c = s[u].getAttribute("file");
                    h[l] = r instanceof Array ? r[u] : r[c];
                }

                for (var d = t.getElementsByTagName("char"), p = 0; p < d.length; p++) {
                    var f = d[p],
                        v = parseInt(f.getAttribute("id"), 10),
                        m = f.getAttribute("page") || 0,
                        g = new Ve(parseInt(f.getAttribute("x"), 10) / a + h[m].frame.x / a, parseInt(f.getAttribute("y"), 10) / a + h[m].frame.y / a, parseInt(f.getAttribute("width"), 10) / a, parseInt(f.getAttribute("height"), 10) / a);
                    i.chars[v] = {
                        xOffset: parseInt(f.getAttribute("xoffset"), 10) / a,
                        yOffset: parseInt(f.getAttribute("yoffset"), 10) / a,
                        xAdvance: parseInt(f.getAttribute("xadvance"), 10) / a,
                        kerning: {},
                        texture: new Hr(h[m].baseTexture, g),
                        page: m
                    };
                }

                for (var y = t.getElementsByTagName("kerning"), _ = 0; _ < y.length; _++) {
                    var x = y[_],
                        b = parseInt(x.getAttribute("first"), 10) / a,
                        E = parseInt(x.getAttribute("second"), 10) / a,
                        T = parseInt(x.getAttribute("amount"), 10) / a;
                    i.chars[E] && (i.chars[E].kerning[b] = T);
                }

                return e.fonts[i.font] = i, i;
            }, Object.defineProperties(e.prototype, r), e;
        }($e);

    Ds.fonts = {};

    var Ms = function Ms() {};

    Ms.parse = function(t, e) {
        t.bitmapFont = Ds.registerFont(t.data, e);
    }, Ms.add = function() {
        po.setExtensionXhrType("fnt", po.XHR_RESPONSE_TYPE.DOCUMENT);
    }, Ms.dirname = function(t) {
        var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return e === t ? "." : "" === e ? "/" : e;
    }, Ms.use = function(t, e) {
        if (t.data && t.type === po.TYPE.XML) {
            if (0 !== t.data.getElementsByTagName("page").length && 0 !== t.data.getElementsByTagName("info").length && null !== t.data.getElementsByTagName("info")[0].getAttribute("face")) {
                var r = t.isDataUrl ? "" : Ms.dirname(t.url);
                t.isDataUrl && ("." === r && (r = ""), this.baseUrl && r && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/")), (r = r.replace(this.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/");

                for (var i = t.data.getElementsByTagName("page"), n = {}, o = function o(r) {
                        n[r.metadata.pageFile] = r.texture, Object.keys(n).length === i.length && (Ms.parse(t, n), e());
                    }, s = 0; s < i.length; ++s) {
                    var a = i[s].getAttribute("file"),
                        h = r + a,
                        u = !1;

                    for (var l in this.resources) {
                        var c = this.resources[l];

                        if (c.url === h) {
                            c.metadata.pageFile = a, c.texture ? o(c) : c.onAfterMiddleware.add(o), u = !0;
                            break;
                        }
                    }

                    if (!u) {
                        var d = {
                            crossOrigin: t.crossOrigin,
                            loadType: po.LOAD_TYPE.IMAGE,
                            metadata: Object.assign({
                                pageFile: a
                            }, t.metadata.imageMetadata),
                            parentResource: t
                        };
                        this.add(h, d, o);
                    }
                }
            } else e();
        } else e();
    };

    var Cs = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
        Rs = function(t) {
            function e(e) {
                void 0 === e && (e = 1), t.call(this, Tn, Cs, {
                    uAlpha: 1
                }), this.alpha = e;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                alpha: {
                    configurable: !0
                }
            };
            return r.alpha.get = function() {
                return this.uniforms.uAlpha;
            }, r.alpha.set = function(t) {
                this.uniforms.uAlpha = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi),
        Ls = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";

    var Ns = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        Fs = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");

    var Bs = function(t) {
            function e(e, r, i, n, o) {
                var s = function(t, e) {
                        var r,
                            i = Math.ceil(t / 2),
                            n = Ls,
                            o = "";
                        r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";

                        for (var s = 0; s < t; s++) {
                            var a = r.replace("%index%", s);
                            o += a = a.replace("%sampleIndex%", s - (i - 1) + ".0"), o += "\n";
                        }

                        return n = (n = n.replace("%blur%", o)).replace("%size%", t);
                    }(o = o || 5, e),
                    a = function(t) {
                        for (var e, r = Ns[t], i = r.length, n = Fs, o = "", s = 0; s < t; s++) {
                            var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                            e = s, s >= i && (e = t - s - 1), o += a = a.replace("%value%", r[e]), o += "\n";
                        }

                        return n = (n = n.replace("%blur%", o)).replace("%size%", t);
                    }(o);

                t.call(this, s, a), this.horizontal = e, this.resolution = n || M.RESOLUTION, this._quality = 0, this.quality = i || 4, this.blur = r || 8;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, r, i) {
                if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
                else {
                    var n = t.getFilterTexture(),
                        o = t.renderer,
                        s = e,
                        a = n;
                    this.state.blend = !1, t.applyFilter(this, s, a, !0);

                    for (var h = 1; h < this.passes - 1; h++) {
                        o.renderTexture.bind(s, s.filterFrame), this.uniforms.uSampler = a;
                        var u = a;
                        a = s, s = u, o.shader.bind(this), o.geometry.draw(5);
                    }

                    this.state.blend = !0, t.applyFilter(this, a, r, i), t.returnFilterTexture(n);
                }
            }, r.blur.get = function() {
                return this.strength;
            }, r.blur.set = function(t) {
                this.padding = 1 + 2 * Math.abs(t), this.strength = t;
            }, r.quality.get = function() {
                return this._quality;
            }, r.quality.set = function(t) {
                this._quality = t, this.passes = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi),
        Us = function(t) {
            function e(e, r, i, n) {
                t.call(this), this.blurXFilter = new Bs(!0, e, r, i, n), this.blurYFilter = new Bs(!1, e, r, i, n), this.resolution = i || M.RESOLUTION, this.quality = r || 4, this.blur = e || 8, this.repeatEdgePixels = !1;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                },
                blurX: {
                    configurable: !0
                },
                blurY: {
                    configurable: !0
                },
                blendMode: {
                    configurable: !0
                },
                repeatEdgePixels: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, r, i) {
                var n = Math.abs(this.blurXFilter.strength),
                    o = Math.abs(this.blurYFilter.strength);

                if (n && o) {
                    var s = t.getFilterTexture();
                    this.blurXFilter.apply(t, e, s, !0), this.blurYFilter.apply(t, s, r, i), t.returnFilterTexture(s);
                } else o ? this.blurYFilter.apply(t, e, r, i) : this.blurXFilter.apply(t, e, r, i);
            }, e.prototype.updatePadding = function() {
                this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
            }, r.blur.get = function() {
                return this.blurXFilter.blur;
            }, r.blur.set = function(t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
            }, r.quality.get = function() {
                return this.blurXFilter.quality;
            }, r.quality.set = function(t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t;
            }, r.blurX.get = function() {
                return this.blurXFilter.blur;
            }, r.blurX.set = function(t) {
                this.blurXFilter.blur = t, this.updatePadding();
            }, r.blurY.get = function() {
                return this.blurYFilter.blur;
            }, r.blurY.set = function(t) {
                this.blurYFilter.blur = t, this.updatePadding();
            }, r.blendMode.get = function() {
                return this.blurYFilter.blendMode;
            }, r.blendMode.set = function(t) {
                this.blurYFilter.blendMode = t;
            }, r.repeatEdgePixels.get = function() {
                return this._repeatEdgePixels;
            }, r.repeatEdgePixels.set = function(t) {
                this._repeatEdgePixels = t, this.updatePadding();
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi),
        ks = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
        Xs = function(t) {
            function e() {
                var e = {
                    m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                    uAlpha: 1
                };
                t.call(this, wn, ks, e), this.alpha = 1;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                matrix: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                }
            };
            return e.prototype._loadMatrix = function(t, e) {
                void 0 === e && (e = !1);
                var r = t;
                e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r;
            }, e.prototype._multiply = function(t, e, r) {
                return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t;
            }, e.prototype._colorMatrix = function(t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e;
            }, e.prototype.brightness = function(t, e) {
                var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];

                this._loadMatrix(r, e);
            }, e.prototype.greyscale = function(t, e) {
                var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];

                this._loadMatrix(r, e);
            }, e.prototype.blackAndWhite = function(t) {
                this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var r = Math.cos(t),
                    i = Math.sin(t),
                    n = 1 / 3,
                    o = (0, Math.sqrt)(n),
                    s = [r + (1 - r) * n, n * (1 - r) - o * i, n * (1 - r) + o * i, 0, 0, n * (1 - r) + o * i, r + n * (1 - r), n * (1 - r) - o * i, 0, 0, n * (1 - r) - o * i, n * (1 - r) + o * i, r + n * (1 - r), 0, 0, 0, 0, 0, 1, 0];

                this._loadMatrix(s, e);
            }, e.prototype.contrast = function(t, e) {
                var r = (t || 0) + 1,
                    i = -.5 * (r - 1),
                    n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];

                this._loadMatrix(n, e);
            }, e.prototype.saturate = function(t, e) {
                void 0 === t && (t = 0);
                var r = 2 * t / 3 + 1,
                    i = -.5 * (r - 1),
                    n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];

                this._loadMatrix(n, e);
            }, e.prototype.desaturate = function() {
                this.saturate(-1);
            }, e.prototype.negative = function(t) {
                this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.sepia = function(t) {
                this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.technicolor = function(t) {
                this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t);
            }, e.prototype.polaroid = function(t) {
                this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.toBGR = function(t) {
                this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.kodachrome = function(t) {
                this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t);
            }, e.prototype.browni = function(t) {
                this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t);
            }, e.prototype.vintage = function(t) {
                this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t);
            }, e.prototype.colorTone = function(t, e, r, i, n) {
                var o = ((r = r || 16770432) >> 16 & 255) / 255,
                    s = (r >> 8 & 255) / 255,
                    a = (255 & r) / 255,
                    h = ((i = i || 3375104) >> 16 & 255) / 255,
                    u = (i >> 8 & 255) / 255,
                    l = (255 & i) / 255,
                    c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];

                this._loadMatrix(c, n);
            }, e.prototype.night = function(t, e) {
                var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];

                this._loadMatrix(r, e);
            }, e.prototype.predator = function(t, e) {
                var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];

                this._loadMatrix(r, e);
            }, e.prototype.lsd = function(t) {
                this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t);
            }, e.prototype.reset = function() {
                this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1);
            }, r.matrix.get = function() {
                return this.uniforms.m;
            }, r.matrix.set = function(t) {
                this.uniforms.m = t;
            }, r.alpha.get = function() {
                return this.uniforms.uAlpha;
            }, r.alpha.set = function(t) {
                this.uniforms.uAlpha = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi);

    Xs.prototype.grayscale = Xs.prototype.greyscale;

    var js = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
        Hs = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
        Gs = function(t) {
            function e(e, r) {
                var i = new Ne();
                e.renderable = !1, t.call(this, js, Hs, {
                    mapSampler: e._texture,
                    filterMatrix: i,
                    scale: {
                        x: 1,
                        y: 1
                    },
                    rotation: new Float32Array([1, 0, 0, 1])
                }), this.maskSprite = e, this.maskMatrix = i, null == r && (r = 20), this.scale = new De(r, r);
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                map: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, r, i) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
                var n = this.maskSprite.transform.worldTransform,
                    o = Math.sqrt(n.a * n.a + n.b * n.b),
                    s = Math.sqrt(n.c * n.c + n.d * n.d);
                0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, r, i);
            }, r.map.get = function() {
                return this.uniforms.mapSampler;
            }, r.map.set = function(t) {
                this.uniforms.mapSampler = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi),
        Ys = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
        Vs = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
        zs = function(t) {
            function e() {
                t.call(this, Ys, Vs);
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
        }(Yi),
        Ws = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
        qs = function(t) {
            function e(e, r) {
                void 0 === e && (e = .5), void 0 === r && (r = Math.random()), t.call(this, wn, Ws, {
                    uNoise: 0,
                    uSeed: 0
                }), this.noise = e, this.seed = r;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                noise: {
                    configurable: !0
                },
                seed: {
                    configurable: !0
                }
            };
            return r.noise.get = function() {
                return this.uniforms.uNoise;
            }, r.noise.set = function(t) {
                this.uniforms.uNoise = t;
            }, r.seed.get = function() {
                return this.uniforms.uSeed;
            }, r.seed.set = function(t) {
                this.uniforms.uSeed = t;
            }, Object.defineProperties(e.prototype, r), e;
        }(Yi),
        Ks = new Ne();

    Je.prototype._cacheAsBitmap = !1, Je.prototype._cacheData = !1;

    var Zs = function Zs() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null;
    };

    Object.defineProperties(Je.prototype, {
        cacheAsBitmap: {
            get: function get() {
                return this._cacheAsBitmap;
            },
            set: function set(t) {
                var e;
                this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new Zs()), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea));
            }
        }
    }), Je.prototype._renderCached = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t));
    }, Je.prototype._initCachedDisplayObject = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            this.alpha = 1, t.batch.flush();
            var r = this.getLocalBounds().clone();

            if (this.filters) {
                var i = this.filters[0].padding;
                r.pad(i);
            }

            r.ceil(M.RESOLUTION);
            var n = t.renderTexture.current,
                o = t.renderTexture.sourceFrame,
                s = t.projection.transform,
                a = Yr.create(r.width, r.height),
                h = "cacheAsBitmap_" + me();
            this._cacheData.textureCacheId = h, Pr.addToCache(a.baseTexture, h), Hr.addToCache(a, h);
            var u = Ks;
            u.tx = -r.x, u.ty = -r.y, this.transform.worldTransform.identity(), this.render = this._cacheData.originalRender, t.render(this, a, !0, u, !0), t.projection.transform = s, t.renderTexture.bind(n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var l = new Wo(a);
            l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -r.x / r.width, l.anchor.y = -r.y / r.height, l.alpha = e, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l);
        }
    }, Je.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t));
    }, Je.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(),
                r = this.alpha;
            this.alpha = 1;
            var i = t.context;
            e.ceil(M.RESOLUTION);
            var n = Yr.create(e.width, e.height),
                o = "cacheAsBitmap_" + me();
            this._cacheData.textureCacheId = o, Pr.addToCache(n.baseTexture, o), Hr.addToCache(n, o);
            var s = Ks;
            this.transform.localTransform.copyTo(s), s.invert(), s.tx -= e.x, s.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, s, !1), t.context = i, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var a = new Wo(n);
            a.transform.worldTransform = this.transform.worldTransform, a.anchor.x = -e.x / e.width, a.anchor.y = -e.y / e.height, a.alpha = r, a._bounds = this._bounds, this._cacheData.sprite = a, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = a.containsPoint.bind(a);
        }
    }, Je.prototype._calculateCachedBounds = function() {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID;
    }, Je.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds();
    }, Je.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, Pr.removeFromCache(this._cacheData.textureCacheId), Hr.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
    }, Je.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1, this.destroy(t);
    }, Je.prototype.name = null, $e.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++) {
            if (this.children[e].name === t) return this.children[e];
        }

        return null;
    }, Je.prototype.getGlobalPosition = function(t, e) {
        return void 0 === t && (t = new De()), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t;
    };
    var Js = "5.0.0";

    var Qs = function Qs(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
    };

    Qs.prototype.update = function(t) {
        if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
            this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
            var e = this.uvBuffer.data;
            this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++;
        }
    };

    var $s = new De(),
        ta = new qe(),
        ea = function(e) {
            function r(r, i, n, o) {
                void 0 === o && (o = t.DRAW_MODES.TRIANGLES), e.call(this), this.geometry = r, r.refCount++, this.shader = i, this.state = n || Hi.for2d(), this.drawMode = o, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = 0, this._transformID = -1, this.tint = 16777215, this.blendMode = t.BLEND_MODES.NORMAL, this._roundPixels = M.ROUND_PIXELS, this.batchUvs = null;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                uvBuffer: {
                    configurable: !0
                },
                verticesBuffer: {
                    configurable: !0
                },
                material: {
                    configurable: !0
                },
                blendMode: {
                    configurable: !0
                },
                roundPixels: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                texture: {
                    configurable: !0
                }
            };
            return i.uvBuffer.get = function() {
                return this.geometry.buffers[1];
            }, i.verticesBuffer.get = function() {
                return this.geometry.buffers[0];
            }, i.material.set = function(t) {
                this.shader = t;
            }, i.material.get = function() {
                return this.shader;
            }, i.blendMode.set = function(t) {
                this.state.blendMode = t;
            }, i.blendMode.get = function() {
                return this.state.blendMode;
            }, i.roundPixels.set = function(t) {
                this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
            }, i.roundPixels.get = function() {
                return this._roundPixels;
            }, i.tint.get = function() {
                return this.shader.tint;
            }, i.tint.set = function(t) {
                this.shader.tint = t;
            }, i.texture.get = function() {
                return this.shader.texture;
            }, i.texture.set = function(t) {
                this.shader.texture = t;
            }, r.prototype._render = function(e) {
                var i = this.geometry.buffers[0].data;
                this.shader.batchable && this.drawMode === t.DRAW_MODES.TRIANGLES && i.length < 2 * r.BATCHABLE_SIZE ? this._renderToBatch(e) : this._renderDefault(e);
            }, r.prototype._renderDefault = function(t) {
                var e = this.shader;
                e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
            }, r.prototype._renderToBatch = function(t) {
                var e = this.geometry;
                this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture;
                var r = this.material.pluginName;
                t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this);
            }, r.prototype.calculateVertices = function() {
                var t = this.geometry,
                    e = t.buffers[0].data;

                if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));

                    for (var r = this.transform.worldTransform, i = r.a, n = r.b, o = r.c, s = r.d, a = r.tx, h = r.ty, u = this.vertexData, l = 0; l < u.length / 2; l++) {
                        var c = e[2 * l],
                            d = e[2 * l + 1];
                        u[2 * l] = i * c + o * d + a, u[2 * l + 1] = n * c + s * d + h;
                    }

                    if (this._roundPixels)
                        for (var p = M.RESOLUTION, f = 0; f < u.length; ++f) {
                            u[f] = Math.round((u[f] * p | 0) / p);
                        }
                    this.vertexDirty = t.vertexDirtyId;
                }
            }, r.prototype.calculateUvs = function() {
                var t = this.geometry.buffers[1];
                this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Qs(t, this.shader.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
            }, r.prototype._calculateBounds = function() {
                this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
            }, r.prototype.containsPoint = function(t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, $s);

                for (var e = this.geometry.getBuffer("aVertexPosition").data, r = ta.points, i = this.geometry.getIndex().data, n = i.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
                    var a = 2 * i[s],
                        h = 2 * i[s + 1],
                        u = 2 * i[s + 2];
                    if (r[0] = e[a], r[1] = e[a + 1], r[2] = e[h], r[3] = e[h + 1], r[4] = e[u], r[5] = e[u + 1], ta.contains($s.x, $s.y)) return !0;
                }

                return !1;
            }, r.prototype.destroy = function(t) {
                e.prototype.destroy.call(this, t), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
            }, Object.defineProperties(r.prototype, i), r;
        }($e);

    ea.BATCHABLE_SIZE = 100;

    var ra = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        ia = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
        na = function(t) {
            function e(e, r) {
                var i = {
                    uSampler: e,
                    alpha: 1,
                    uTextureMatrix: Ne.IDENTITY,
                    uColor: new Float32Array([1, 1, 1, 1])
                };
                (r = Object.assign({
                    tint: 16777215,
                    alpha: 1,
                    pluginName: "batch"
                }, r)).uniforms && Object.assign(i, r.uniforms), t.call(this, r.program || Ui.from(ra, ia), i), this._colorDirty = !1, this.uvMatrix = new qi(e), this.batchable = void 0 === r.program, this.pluginName = r.pluginName, this.tint = r.tint, this.alpha = r.alpha;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                texture: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                }
            };
            return r.texture.get = function() {
                return this.uniforms.uSampler;
            }, r.texture.set = function(t) {
                this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t);
            }, r.alpha.set = function(t) {
                t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
            }, r.alpha.get = function() {
                return this._alpha;
            }, r.tint.set = function(t) {
                t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0);
            }, r.tint.get = function() {
                return this._tint;
            }, e.prototype.update = function() {
                if (this._colorDirty) {
                    this._colorDirty = !1;
                    var t = this.texture.baseTexture;
                    se(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
                }

                this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
            }, Object.defineProperties(e.prototype, r), e;
        }(Xi),
        oa = function(e) {
            function r(r, i, n) {
                e.call(this);
                var o = new qr(r),
                    s = new qr(i, !0),
                    a = new qr(n, !0, !0);
                this.addAttribute("aVertexPosition", o, 2, !1, t.TYPES.FLOAT).addAttribute("aTextureCoord", s, 2, !1, t.TYPES.FLOAT).addIndex(a), this._updateId = -1;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                vertexDirtyId: {
                    configurable: !0
                }
            };
            return i.vertexDirtyId.get = function() {
                return this.buffers[0]._updateID;
            }, Object.defineProperties(r.prototype, i), r;
        }(ti),
        sa = function(t) {
            function e(e, r, i, n) {
                void 0 === e && (e = 100), void 0 === r && (r = 100), void 0 === i && (i = 10), void 0 === n && (n = 10), t.call(this), this.segWidth = i, this.segHeight = n, this.width = e, this.height = r, this.build();
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                for (var t = this.segWidth * this.segHeight, e = [], r = [], i = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
                    var u = h % this.segWidth,
                        l = h / this.segWidth | 0;
                    e.push(u * s, l * a), r.push(u / n, l / o);
                }

                for (var c = n * o, d = 0; d < c; d++) {
                    var p = d % n,
                        f = d / n | 0,
                        v = f * this.segWidth + p,
                        m = f * this.segWidth + p + 1,
                        g = (f + 1) * this.segWidth + p,
                        y = (f + 1) * this.segWidth + p + 1;
                    i.push(v, m, g, m, y, g);
                }

                this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(i), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
            }, e;
        }(oa),
        aa = function(t) {
            function e(e, r, i) {
                void 0 === e && (e = 200), void 0 === i && (i = 0), t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))), this.points = r, this.width = e, this.textureScale = i, this.build();
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                var t = this.points;

                if (t) {
                    var e = this.getBuffer("aVertexPosition"),
                        r = this.getBuffer("aTextureCoord"),
                        i = this.getIndex();

                    if (!(t.length < 1)) {
                        e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), i.data = new Uint16Array(6 * (t.length - 1)));
                        var n = r.data,
                            o = i.data;
                        n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;

                        for (var s = 0, a = t[0], h = this.width * this.textureScale, u = t.length, l = 0; l < u; l++) {
                            var c = 4 * l;

                            if (this.textureScale > 0) {
                                var d = a.x - t[l].x,
                                    p = a.y - t[l].y,
                                    f = Math.sqrt(d * d + p * p);
                                a = t[l], s += f / h;
                            } else s = l / (u - 1);

                            n[c] = s, n[c + 1] = 0, n[c + 2] = s, n[c + 3] = 1;
                        }

                        for (var v = 0, m = 0; m < u - 1; m++) {
                            var g = 2 * m;
                            o[v++] = g, o[v++] = g + 1, o[v++] = g + 2, o[v++] = g + 2, o[v++] = g + 1, o[v++] = g + 3;
                        }

                        r.update(), i.update(), this.updateVertices();
                    }
                }
            }, e.prototype.updateVertices = function() {
                var t = this.points;

                if (!(t.length < 1)) {
                    for (var e, r = t[0], i = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                        var h = t[a],
                            u = 4 * a;
                        n = -((e = a < t.length - 1 ? t[a + 1] : h).x - r.x), i = e.y - r.y;
                        var l = Math.sqrt(i * i + n * n),
                            c = this.textureScale > 0 ? this.textureScale * this.width / 2 : this.width / 2;
                        i /= l, n /= l, i *= c, n *= c, o[u] = h.x + i, o[u + 1] = h.y + n, o[u + 2] = h.x - i, o[u + 3] = h.y - n, r = h;
                    }

                    this.buffers[0].update();
                }
            }, e.prototype.update = function() {
                this.textureScale > 0 ? this.build() : this.updateVertices();
            }, e;
        }(oa),
        ha = function(e) {
            function r(r, i, n) {
                void 0 === n && (n = 0);
                var o = new aa(r.height, i, n),
                    s = new na(r);
                n > 0 && (r.baseTexture.wrapMode = t.WRAP_MODES.REPEAT), e.call(this, o, s), this.autoUpdate = !0;
            }

            return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype._render = function(t) {
                (this.autoUpdate || this.geometry.width !== this.shader.texture.height) && (this.geometry.width = this.shader.texture.height, this.geometry.update()), e.prototype._render.call(this, t);
            }, r;
        }(ea),
        ua = function(t) {
            function e(e, r, i) {
                var n = new sa(e.width, e.height, r, i),
                    o = new na(Hr.WHITE);
                t.call(this, n, o), this.texture = e;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                texture: {
                    configurable: !0
                }
            };
            return e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID, this.geometry.width = this.shader.texture.width, this.geometry.height = this.shader.texture.height, this.geometry.build();
            }, r.texture.set = function(t) {
                this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this));
            }, r.texture.get = function() {
                return this.shader.texture;
            }, e.prototype._render = function(e) {
                this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e);
            }, Object.defineProperties(e.prototype, r), e;
        }(ea),
        la = function(t) {
            function e(e, r, i, n, o) {
                void 0 === e && (e = Hr.EMPTY);
                var s = new oa(r, i, n);
                s.getBuffer("aVertexPosition")["static"] = !1;
                var a = new na(e);
                t.call(this, s, a, null, o), this.autoUpdate = !0;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                vertices: {
                    configurable: !0
                }
            };
            return r.vertices.get = function() {
                return this.geometry.getBuffer("aVertexPosition").data;
            }, r.vertices.set = function(t) {
                this.geometry.getBuffer("aVertexPosition").data = t;
            }, e.prototype._render = function(e) {
                this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e);
            }, Object.defineProperties(e.prototype, r), e;
        }(ea),
        ca = 10,
        da = function(t) {
            function e(e, r, i, n, o) {
                t.call(this, Hr.WHITE, 4, 4), this._origWidth = e.orig.width, this._origHeight = e.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = void 0 !== r ? r : ca, this._rightWidth = void 0 !== n ? n : ca, this._topHeight = void 0 !== i ? i : ca, this._bottomHeight = void 0 !== o ? o : ca, this.texture = e;
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                vertices: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                leftWidth: {
                    configurable: !0
                },
                rightWidth: {
                    configurable: !0
                },
                topHeight: {
                    configurable: !0
                },
                bottomHeight: {
                    configurable: !0
                }
            };
            return e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID, this._refresh();
            }, r.vertices.get = function() {
                return this.geometry.getBuffer("aVertexPosition").data;
            }, r.vertices.set = function(t) {
                this.geometry.getBuffer("aVertexPosition").data = t;
            }, e.prototype.updateHorizontalVertices = function() {
                var t = this.vertices,
                    e = this._getMinScale();

                t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height;
            }, e.prototype.updateVerticalVertices = function() {
                var t = this.vertices,
                    e = this._getMinScale();

                t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width;
            }, e.prototype._getMinScale = function() {
                var t = this._leftWidth + this._rightWidth,
                    e = this._width > t ? 1 : this._width / t,
                    r = this._topHeight + this._bottomHeight,
                    i = this._height > r ? 1 : this._height / r;
                return Math.min(e, i);
            }, r.width.get = function() {
                return this._width;
            }, r.width.set = function(t) {
                this._width = t, this._refresh();
            }, r.height.get = function() {
                return this._height;
            }, r.height.set = function(t) {
                this._height = t, this._refresh();
            }, r.leftWidth.get = function() {
                return this._leftWidth;
            }, r.leftWidth.set = function(t) {
                this._leftWidth = t, this._refresh();
            }, r.rightWidth.get = function() {
                return this._rightWidth;
            }, r.rightWidth.set = function(t) {
                this._rightWidth = t, this._refresh();
            }, r.topHeight.get = function() {
                return this._topHeight;
            }, r.topHeight.set = function(t) {
                this._topHeight = t, this._refresh();
            }, r.bottomHeight.get = function() {
                return this._bottomHeight;
            }, r.bottomHeight.set = function(t) {
                this._bottomHeight = t, this._refresh();
            }, e.prototype._refresh = function() {
                var t = this.texture,
                    e = this.geometry.buffers[1].data;
                this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                var r = 1 / this._origWidth,
                    i = 1 / this._origHeight;
                e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
            }, Object.defineProperties(e.prototype, r), e;
        }(ua),
        pa = function(e) {
            function r(t, r) {
                e.call(this, t[0] instanceof Hr ? t[0] : t[0].texture), this._textures = null, this._durations = null, this.textures = t, this._autoUpdate = !1 !== r, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this.playing = !1;
            }

            e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
            var i = {
                totalFrames: {
                    configurable: !0
                },
                textures: {
                    configurable: !0
                },
                currentFrame: {
                    configurable: !0
                }
            };
            return r.prototype.stop = function() {
                this.playing && (this.playing = !1, this._autoUpdate && or.shared.remove(this.update, this));
            }, r.prototype.play = function() {
                this.playing || (this.playing = !0, this._autoUpdate && or.shared.add(this.update, this, t.UPDATE_PRIORITY.HIGH));
            }, r.prototype.gotoAndStop = function(t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture();
            }, r.prototype.gotoAndPlay = function(t) {
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play();
            }, r.prototype.update = function(t) {
                var e = this.animationSpeed * t,
                    r = this.currentFrame;

                if (null !== this._durations) {
                    var i = this._currentTime % 1 * this._durations[this.currentFrame];

                    for (i += e / 60 * 1e3; i < 0;) {
                        this._currentTime--, i += this._durations[this.currentFrame];
                    }

                    var n = Math.sign(this.animationSpeed * t);

                    for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) {
                        i -= this._durations[this.currentFrame] * n, this._currentTime += n;
                    }

                    this._currentTime += i / this._durations[this.currentFrame];
                } else this._currentTime += e;

                this._currentTime < 0 && !this.loop ? (this._currentTime = 0, this.stop(), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this._currentTime = this._textures.length - 1, this.stop(), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r && this.onLoop()), this.updateTexture());
            }, r.prototype.updateTexture = function() {
                this._texture = this._textures[this.currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame);
            }, r.prototype.destroy = function(t) {
                this.stop(), e.prototype.destroy.call(this, t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
            }, r.fromFrames = function(t) {
                for (var e = [], i = 0; i < t.length; ++i) {
                    e.push(Hr.from(t[i]));
                }

                return new r(e);
            }, r.fromImages = function(t) {
                for (var e = [], i = 0; i < t.length; ++i) {
                    e.push(Hr.from(t[i]));
                }

                return new r(e);
            }, i.totalFrames.get = function() {
                return this._textures.length;
            }, i.textures.get = function() {
                return this._textures;
            }, i.textures.set = function(t) {
                if (t[0] instanceof Hr) this._textures = t, this._durations = null;
                else {
                    this._textures = [], this._durations = [];

                    for (var e = 0; e < t.length; e++) {
                        this._textures.push(t[e].texture), this._durations.push(t[e].time);
                    }
                }
                this.gotoAndStop(0), this.updateTexture();
            }, i.currentFrame.get = function() {
                var t = Math.floor(this._currentTime) % this._textures.length;

                return t < 0 && (t += this._textures.length), t;
            }, Object.defineProperties(r.prototype, i), r;
        }(Wo);

    bn.registerPlugin("accessibility", er), bn.registerPlugin("extract", Hn), bn.registerPlugin("interaction", mr), bn.registerPlugin("particle", yo), bn.registerPlugin("prepare", vs), bn.registerPlugin("batch", Bn), bn.registerPlugin("tilingSprite", Os), lo.registerPlugin(Ms), lo.registerPlugin(Es), Un.registerPlugin(sr), Un.registerPlugin(co);
    var fa = {
        AlphaFilter: Rs,
        BlurFilter: Us,
        BlurFilterPass: Bs,
        ColorMatrixFilter: Xs,
        DisplacementFilter: Gs,
        FXAAFilter: zs,
        NoiseFilter: qs
    };
    return t.AbstractBatchRenderer = Dn, t.AbstractRenderer = xn, t.AnimatedSprite = pa, t.AppLoaderPlugin = co, t.Application = Un, t.Attribute = zr, t.BasePrepare = as, t.BaseRenderTexture = kr, t.BaseTexture = Pr, t.BatchDrawCall = In, t.BatchGeometry = Cn, t.BatchPluginFactory = Nn, t.BatchRenderer = Bn, t.BatchShaderGenerator = Mn, t.BatchTextureArray = Pn, t.BitmapFontLoader = Ms, t.BitmapText = Ds, t.Bounds = Ze, t.Buffer = qr, t.Circle = ze, t.Container = $e, t.CountLimiter = ss, t.CubeTexture = Sn, t.DEG_TO_RAD = Le, t.DisplayObject = Je, t.Ellipse = We, t.Extract = Hn, t.FillStyle = xo, t.Filter = Yi, t.Framebuffer = Br, t.GLProgram = on, t.GLTexture = mn, t.GRAPHICS_CURVES = _o, t.Geometry = ti, t.Graphics = Yo, t.GraphicsData = Bo, t.GraphicsGeometry = Xo, t.LineStyle = jo, t.Loader = lo, t.LoaderResource = po, t.MaskData = vi, t.Matrix = Ne, t.Mesh = ea, t.MeshBatchUvs = Qs, t.MeshGeometry = oa, t.MeshMaterial = na, t.NineSlicePlane = da, t.ObjectRenderer = ai, t.ObservablePoint = Me, t.PI_2 = Ce, t.ParticleContainer = fo, t.ParticleRenderer = yo, t.PlaneGeometry = sa, t.Point = De, t.Polygon = qe, t.Prepare = vs, t.Program = Ui, t.Quad = ei, t.QuadUv = ri, t.RAD_TO_DEG = Re, t.Rectangle = Ve, t.RenderTexture = Yr, t.RenderTexturePool = Vr, t.Renderer = bn, t.RopeGeometry = aa, t.RoundedRectangle = Ke, t.Runner = yr, t.Shader = Xi, t.SimpleMesh = la, t.SimplePlane = ua, t.SimpleRope = ha, t.Sprite = Wo, t.SpriteMaskFilter = Zi, t.Spritesheet = xs, t.SpritesheetLoader = Es, t.State = Hi, t.System = Nr, t.TEXT_GRADIENT = qo, t.Text = os, t.TextMetrics = rs, t.TextStyle = Jo, t.Texture = Hr, t.TextureLoader = uo, t.TextureMatrix = qi, t.TextureUvs = Xr, t.Ticker = or, t.TickerPlugin = sr, t.TilingSprite = ws, t.TilingSpriteRenderer = Os, t.TimeLimiter = _s, t.Transform = Ye, t.UniformGroup = ni, t.VERSION = "5.2.1", t.ViewableBuffer = An, t.accessibility = ir, t.autoDetectRenderer = En, t.checkMaxIfStatementsInShader = Li, t.defaultFilterVertex = wn, t.defaultVertex = Tn, t.filters = fa, t.graphicsUtils = Fo, t.groupD8 = Ge, t.interaction = gr, t.isMobile = D, t.resources = Lr, t.settings = M, t.systems = yn, t.useDeprecated = function() {
        var t = this;
        Object.defineProperties(t, {
            SVG_SIZE: {
                get: function get() {
                    return ye(Js, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"), t.SVGResource.SVG_SIZE;
                }
            },
            TransformStatic: {
                get: function get() {
                    return ye(Js, "PIXI.TransformStatic class has been removed, use PIXI.Transform"), t.Transform;
                }
            },
            TransformBase: {
                get: function get() {
                    return ye(Js, "PIXI.TransformBase class has been removed, use PIXI.Transform"), t.Transform;
                }
            },
            TRANSFORM_MODE: {
                get: function get() {
                    return ye(Js, "PIXI.TRANSFORM_MODE property has been removed"), {
                        STATIC: 0,
                        DYNAMIC: 1
                    };
                }
            },
            WebGLRenderer: {
                get: function get() {
                    return ye(Js, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), t.Renderer;
                }
            },
            CanvasRenderTarget: {
                get: function get() {
                    return ye(Js, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"), t.utils.CanvasRenderTarget;
                }
            },
            loader: {
                get: function get() {
                    return ye(Js, "PIXI.loader instance has moved to PIXI.Loader.shared"), t.Loader.shared;
                }
            },
            FilterManager: {
                get: function get() {
                    return ye(Js, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"), t.systems.FilterSystem;
                }
            },
            CanvasTinter: {
                get: function get() {
                    return ye("5.2.0", "PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"), t.canvasUtils;
                }
            },
            GroupD8: {
                get: function get() {
                    return ye("5.2.0", "PIXI.GroupD8 namespace has moved to PIXI.groupD8"), t.groupD8;
                }
            }
        }), t.prepare = {}, Object.defineProperties(t.prepare, {
            BasePrepare: {
                get: function get() {
                    return ye("5.2.1", "PIXI.prepare.BasePrepare moved to PIXI.BasePrepare"), t.BasePrepare;
                }
            },
            Prepare: {
                get: function get() {
                    return ye("5.2.1", "PIXI.prepare.Prepare moved to PIXI.Prepare"), t.Prepare;
                }
            },
            CanvasPrepare: {
                get: function get() {
                    return ye("5.2.1", "PIXI.prepare.CanvasPrepare moved to PIXI.CanvasPrepare"), t.CanvasPrepare;
                }
            }
        }), t.extract = {}, Object.defineProperties(t.extract, {
            Extract: {
                get: function get() {
                    return ye("5.2.1", "PIXI.extract.Extract moved to PIXI.Extract"), t.Extract;
                }
            },
            CanvasExtract: {
                get: function get() {
                    return ye("5.2.1", "PIXI.extract.CanvasExtract moved to PIXI.CanvasExtract"), t.CanvasExtract;
                }
            }
        }), t.extras = {}, Object.defineProperties(t.extras, {
            TilingSprite: {
                get: function get() {
                    return ye(Js, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"), t.TilingSprite;
                }
            },
            TilingSpriteRenderer: {
                get: function get() {
                    return ye(Js, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"), t.TilingSpriteRenderer;
                }
            },
            AnimatedSprite: {
                get: function get() {
                    return ye(Js, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"), t.AnimatedSprite;
                }
            },
            BitmapText: {
                get: function get() {
                    return ye(Js, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"), t.BitmapText;
                }
            }
        }), Object.defineProperties(t.utils, {
            getSvgSize: {
                get: function get() {
                    return ye(Js, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"), t.SVGResource.getSize;
                }
            }
        }), t.mesh = {}, Object.defineProperties(t.mesh, {
            Mesh: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), t.SimpleMesh;
                }
            },
            NineSlicePlane: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"), t.NineSlicePlane;
                }
            },
            Plane: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), t.SimplePlane;
                }
            },
            Rope: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), t.SimpleRope;
                }
            },
            RawMesh: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), t.Mesh;
                }
            },
            CanvasMeshRenderer: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"), t.CanvasMeshRenderer;
                }
            },
            MeshRenderer: {
                get: function get() {
                    return ye(Js, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"), t.MeshRenderer;
                }
            }
        }), t.particles = {}, Object.defineProperties(t.particles, {
            ParticleContainer: {
                get: function get() {
                    return ye(Js, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"), t.ParticleContainer;
                }
            },
            ParticleRenderer: {
                get: function get() {
                    return ye(Js, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"), t.ParticleRenderer;
                }
            }
        }), t.ticker = {}, Object.defineProperties(t.ticker, {
            Ticker: {
                get: function get() {
                    return ye(Js, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), t.Ticker;
                }
            },
            shared: {
                get: function get() {
                    return ye(Js, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"), t.Ticker.shared;
                }
            }
        }), t.loaders = {}, Object.defineProperties(t.loaders, {
            Loader: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.Loader class has moved to PIXI.Loader"), t.Loader;
                }
            },
            Resource: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"), t.LoaderResource;
                }
            },
            bitmapFontParser: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"), t.BitmapFontLoader.use;
                }
            },
            parseBitmapFontData: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.parseBitmapFontData function has moved to PIXI.BitmapFontLoader.parse"), t.BitmapFontLoader.parse;
                }
            },
            spritesheetParser: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"), t.SpritesheetLoader.use;
                }
            },
            getResourcePath: {
                get: function get() {
                    return ye(Js, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"), t.SpritesheetLoader.getResourcePath;
                }
            }
        }), t.Loader.addPixiMiddleware = function(e) {
            return ye(Js, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"), t.loaders.Loader.registerPlugin({
                use: e()
            });
        }, Object.defineProperty(t.extract, "WebGLExtract", {
            get: function get() {
                return ye(Js, "PIXI.extract.WebGLExtract method has moved to PIXI.Extract"), t.Extract;
            }
        }), Object.defineProperty(t.prepare, "WebGLPrepare", {
            get: function get() {
                return ye(Js, "PIXI.prepare.WebGLPrepare class has moved to PIXI.Prepare"), t.Prepare;
            }
        }), t.Container.prototype._renderWebGL = function(t) {
            ye(Js, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"), this._render(t);
        }, t.Container.prototype.renderWebGL = function(t) {
            ye(Js, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"), this.render(t);
        }, t.DisplayObject.prototype.renderWebGL = function(t) {
            ye(Js, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"), this.render(t);
        }, t.Container.prototype.renderAdvancedWebGL = function(t) {
            ye(Js, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"), this.renderAdvanced(t);
        }, Object.defineProperties(t.settings, {
            TRANSFORM_MODE: {
                get: function get() {
                    return ye(Js, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0;
                },
                set: function set() {
                    ye(Js, "PIXI.settings.TRANSFORM_MODE property has been removed");
                }
            }
        });
        var e = t.BaseTexture;

        e.prototype.loadSource = function(e) {
            ye(Js, "PIXI.BaseTexture.loadSource method has been deprecated");
            var r = t.resources.autoDetectResource(e);
            r.internal = !0, this.setResource(r), this.update();
        };

        var r = !1;
        Object.defineProperties(e.prototype, {
            hasLoaded: {
                get: function get() {
                    return ye(Js, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"), this.valid;
                }
            },
            imageUrl: {
                get: function get() {
                    return ye(Js, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && this.resource.url;
                },
                set: function set(t) {
                    ye(Js, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && (this.resource.url = t);
                }
            },
            source: {
                get: function get() {
                    return ye(Js, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"), this.resource && this.resource.source;
                },
                set: function set(t) {
                    ye(Js, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."), this.resource && (this.resource.source = t);
                }
            },
            premultiplyAlpha: {
                get: function get() {
                    return ye("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 0 !== this.alphaMode;
                },
                set: function set(t) {
                    ye("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), this.alphaMode = Number(t);
                }
            },
            _id: {
                get: function get() {
                    return r || (ye("5.2.0", "PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"), r = !0), this._batchLocation;
                },
                set: function set(t) {
                    this._batchLocation = t;
                }
            }
        }), e.fromImage = function(t, r, i, n) {
            ye(Js, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");
            var o = {
                scale: n,
                crossorigin: r
            };
            return e.from(t, {
                scaleMode: i,
                resourceOptions: o
            });
        }, e.fromCanvas = function(t, r) {
            return ye(Js, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"), e.from(t, {
                scaleMode: r
            });
        }, e.fromSVG = function(t, r, i, n) {
            ye(Js, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");
            var o = {
                scale: n,
                crossorigin: r
            };
            return e.from(t, {
                scaleMode: i,
                resourceOptions: o
            });
        }, Object.defineProperties(t.resources.ImageResource.prototype, {
            premultiplyAlpha: {
                get: function get() {
                    return ye("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 0 !== this.alphaMode;
                },
                set: function set(t) {
                    ye("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), this.alphaMode = Number(t);
                }
            }
        }), t.Point.prototype.copy = function(t) {
            return ye(Js, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"), this.copyFrom(t);
        }, t.ObservablePoint.prototype.copy = function(t) {
            return ye(Js, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"), this.copyFrom(t);
        }, t.Rectangle.prototype.copy = function(t) {
            return ye(Js, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"), this.copyFrom(t);
        }, t.Matrix.prototype.copy = function(t) {
            return ye(Js, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"), this.copyTo(t);
        }, t.systems.StateSystem.prototype.setState = function(t) {
            return ye("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"), this.set(t);
        }, Object.assign(t.systems.FilterSystem.prototype, {
            getRenderTarget: function getRenderTarget(t, e) {
                return ye(Js, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"), this.getFilterTexture(e);
            },
            returnRenderTarget: function returnRenderTarget(t) {
                ye(Js, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"), this.returnFilterTexture(t);
            },
            calculateScreenSpaceMatrix: function calculateScreenSpaceMatrix(t) {
                ye(Js, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
                var e = t.identity(),
                    r = this.activeState,
                    i = r.sourceFrame,
                    n = r.destinationFrame;
                return e.translate(i.x / n.width, i.y / n.height), e.scale(n.width, n.height), e;
            },
            calculateNormalizedScreenSpaceMatrix: function calculateNormalizedScreenSpaceMatrix(t) {
                ye(Js, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
                var e = this.activeState,
                    r = e.sourceFrame,
                    i = e.destinationFrame,
                    n = t.identity();
                n.translate(r.x / i.width, r.y / i.height);
                var o = i.width / r.width,
                    s = i.height / r.height;
                return n.scale(o, s), n;
            }
        }), Object.defineProperties(t.RenderTexture.prototype, {
            sourceFrame: {
                get: function get() {
                    return ye(Js, "PIXI.RenderTexture.sourceFrame property has been removed"), this.filterFrame;
                }
            },
            size: {
                get: function get() {
                    return ye(Js, "PIXI.RenderTexture.size property has been removed"), this._frame;
                }
            }
        });

        var i = function(t) {
                function e(e, r, i, n) {
                    ye(Js, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !0, e, r, i, n);
                }

                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
            }(t.filters.BlurFilterPass),
            n = function(t) {
                function e(e, r, i, n) {
                    ye(Js, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !1, e, r, i, n);
                }

                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
            }(t.filters.BlurFilterPass);

        Object.assign(t.filters, {
            BlurXFilter: i,
            BlurYFilter: n
        });
        var o = t.Sprite,
            s = t.Texture,
            a = t.Graphics;

        function h(t, e, r, i) {
            return ye(Js, "PIXI.Sprite." + t + " method is deprecated, use PIXI.Sprite.from"), o.from(e, {
                resourceOptions: {
                    scale: i,
                    crossorigin: r
                }
            });
        }

        function u(t, e, r, i) {
            return ye(Js, "PIXI.Texture." + t + " method is deprecated, use PIXI.Texture.from"), s.from(e, {
                resourceOptions: {
                    scale: i,
                    crossorigin: r
                }
            });
        }

        a.prototype.generateCanvasTexture || (a.prototype.generateCanvasTexture = function() {
            ye(Js, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"');
        }), Object.defineProperty(t.Graphics.prototype, "graphicsData", {
            get: function get() {
                return ye(Js, "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"), this.geometry.graphicsData;
            }
        }), Object.defineProperty(t.SimpleRope.prototype, "points", {
            get: function get() {
                return ye(Js, "PIXI.SimpleRope.points property is deprecated, use PIXI.SimpleRope.geometry.points"), this.geometry.points;
            },
            set: function set(t) {
                ye(Js, "PIXI.SimpleRope.points property is deprecated, use PIXI.SimpleRope.geometry.points"), this.geometry.points = t;
            }
        }), o.fromImage = h.bind(null, "fromImage"), o.fromSVG = h.bind(null, "fromSVG"), o.fromCanvas = h.bind(null, "fromCanvas"), o.fromVideo = h.bind(null, "fromVideo"), o.fromFrame = h.bind(null, "fromFrame"), s.fromImage = u.bind(null, "fromImage"), s.fromSVG = u.bind(null, "fromSVG"), s.fromCanvas = u.bind(null, "fromCanvas"), s.fromVideo = u.bind(null, "fromVideo"), s.fromFrame = u.bind(null, "fromFrame"), Object.defineProperty(t.AbstractRenderer.prototype, "autoResize", {
            get: function get() {
                return ye(Js, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity;
            },
            set: function set(t) {
                ye(Js, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity = t;
            }
        }), Object.defineProperty(t.Renderer.prototype, "textureManager", {
            get: function get() {
                return ye(Js, "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"), this.texture;
            }
        }), t.utils.mixins = {
            mixin: function mixin() {
                ye(Js, "PIXI.utils.mixins.mixin function is no longer available");
            },
            delayMixin: function delayMixin() {
                ye(Js, "PIXI.utils.mixins.delayMixin function is no longer available");
            },
            performMixins: function performMixins() {
                ye(Js, "PIXI.utils.mixins.performMixins function is no longer available");
            }
        };
    }, t.utils = Oe, t;
}({});

PIXI.useDeprecated();