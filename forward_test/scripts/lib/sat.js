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

/*
 SAT.js - Version 0.7.1 - Copyright 2012 - 2018 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */
function x() {
    function c(a, d) {
        this.x = a || 0;
        this.y = d || 0;
    }

    function B(a, d) {
        this.pos = a || new c();
        this.r = d || 0;
    }

    function m(a, d) {
        this.pos = a || new c();
        this.angle = 0;
        this.offset = new c();
        this.u(d || []);
    }

    function p(a, d, b) {
        this.pos = a || new c();
        this.w = d || 0;
        this.h = b || 0;
    }

    function w() {
        this.b = this.a = null;
        this.overlapN = new c();
        this.overlapV = new c();
        this.clear();
    }

    function C(a, d, b) {
        for (var g = Number.MAX_VALUE, c = -Number.MAX_VALUE, l = a.length, v = 0; v < l; v++) {
            var e = a[v].f(d);
            e < g && (g = e);
            e > c && (c = e);
        }

        b[0] = g;
        b[1] = c;
    }

    function y(a, d, b, g, c, l) {
        var k = q.pop(),
            e = q.pop();
        a = h.pop().c(d).sub(a);
        d = a.f(c);
        C(b, c, k);
        C(g, c, e);
        e[0] += d;
        e[1] += d;
        if (k[0] > e[1] || e[0] > k[1]) return h.push(a), q.push(k), q.push(e), !0;
        l && (k[0] < e[0] ? (l.aInB = !1, k[1] < e[1] ? (b = k[1] - e[0], l.bInA = !1) : (b = k[1] - e[0], g = e[1] - k[0], b = b < g ? b : -g)) : (l.bInA = !1, k[1] > e[1] ? (b = k[0] - e[1], l.aInB = !1) : (b = k[1] - e[0], g = e[1] - k[0], b = b < g ? b : -g)), g = Math.abs(b), g < l.overlap && (l.overlap = g, l.overlapN.c(c), 0 > b && l.overlapN.reverse()));
        h.push(a);
        q.push(k);
        q.push(e);
        return !1;
    }

    function z(a, d) {
        var b = a.g(),
            g = d.f(a);
        return 0 > g ? -1 : g > b ? 1 : 0;
    }

    function D(a, d, b) {
        for (var g = h.pop().c(d.pos).sub(a.pos), c = d.r, l = c * c, v = a.calcPoints, e = v.length, t = h.pop(), f = h.pop(), m = 0; m < e; m++) {
            var u = m === e - 1 ? 0 : m + 1,
                q = 0 === m ? e - 1 : m - 1,
                p = 0,
                r = null;
            t.c(a.edges[m]);
            f.c(g).sub(v[m]);
            b && f.g() > l && (b.aInB = !1);
            var n = z(t, f);

            if (-1 === n) {
                t.c(a.edges[q]);
                u = h.pop().c(g).sub(v[q]);
                n = z(t, u);

                if (1 === n) {
                    n = f.j();
                    if (n > c) return h.push(g), h.push(t), h.push(f), h.push(u), !1;
                    b && (b.bInA = !1, r = f.normalize(), p = c - n);
                }

                h.push(u);
            } else if (1 === n) {
                if (t.c(a.edges[u]), f.c(g).sub(v[u]), n = z(t, f), -1 === n) {
                    n = f.j();
                    if (n > c) return h.push(g), h.push(t), h.push(f), !1;
                    b && (b.bInA = !1, r = f.normalize(), p = c - n);
                }
            } else {
                u = t.m().normalize();
                n = f.f(u);
                q = Math.abs(n);
                if (0 < n && q > c) return h.push(g), h.push(u), h.push(f), !1;
                b && (r = u, p = c - n, 0 <= n || p < 2 * c) && (b.bInA = !1);
            }

            r && b && Math.abs(p) < Math.abs(b.overlap) && (b.overlap = p, b.overlapN.c(r));
        }

        b && (b.a = a, b.b = d, b.overlapV.c(b.overlapN).scale(b.overlap));
        h.push(g);
        h.push(t);
        h.push(f);
        return !0;
    }

    function E(a, d, b) {
        for (var c = a.calcPoints, k = c.length, l = d.calcPoints, f = l.length, e = 0; e < k; e++) {
            if (y(a.pos, d.pos, c, l, a.normals[e], b)) return !1;
        }

        for (e = 0; e < f; e++) {
            if (y(a.pos, d.pos, c, l, d.normals[e], b)) return !1;
        }

        b && (b.a = a, b.b = d, b.overlapV.c(b.overlapN).scale(b.overlap));
        return !0;
    }

    var f = {};
    f.Vector = c;
    f.V = c;

    c.prototype.copy = c.prototype.c = function(a) {
        this.x = a.x;
        this.y = a.y;
        return this;
    };

    c.prototype.clone = c.prototype.clone = function() {
        return new c(this.x, this.y);
    };

    c.prototype.perp = c.prototype.m = function() {
        var a = this.x;
        this.x = this.y;
        this.y = -a;
        return this;
    };

    c.prototype.rotate = c.prototype.rotate = function(a) {
        var d = this.x,
            b = this.y;
        this.x = d * Math.cos(a) - b * Math.sin(a);
        this.y = d * Math.sin(a) + b * Math.cos(a);
        return this;
    };

    c.prototype.reverse = c.prototype.reverse = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };

    c.prototype.normalize = c.prototype.normalize = function() {
        var a = this.j();
        0 < a && (this.x /= a, this.y /= a);
        return this;
    };

    c.prototype.add = c.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y;
        return this;
    };

    c.prototype.sub = c.prototype.sub = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this;
    };

    c.prototype.scale = c.prototype.scale = function(a, d) {
        this.x *= a;
        this.y *= "undefined" != typeof d ? d : a;
        return this;
    };

    c.prototype.project = c.prototype.o = function(a) {
        var d = this.f(a) / a.g();
        this.x = d * a.x;
        this.y = d * a.y;
        return this;
    };

    c.prototype.projectN = c.prototype.s = function(a) {
        var d = this.f(a);
        this.x = d * a.x;
        this.y = d * a.y;
        return this;
    };

    c.prototype.reflect = function(a) {
        var d = this.x,
            b = this.y;
        this.o(a).scale(2);
        this.x -= d;
        this.y -= b;
        return this;
    };

    c.prototype.reflectN = function(a) {
        var d = this.x,
            b = this.y;
        this.s(a).scale(2);
        this.x -= d;
        this.y -= b;
        return this;
    };

    c.prototype.dot = c.prototype.f = function(a) {
        return this.x * a.x + this.y * a.y;
    };

    c.prototype.len2 = c.prototype.g = function() {
        return this.f(this);
    };

    c.prototype.len = c.prototype.j = function() {
        return Math.sqrt(this.g());
    };

    f.Circle = B;

    B.prototype.getAABB = function() {
        var a = this.r,
            d = this.pos.clone().sub(new c(a, a));
        return new p(d, 2 * a, 2 * a).l();
    };

    f.Polygon = m;

    m.prototype.setPoints = m.prototype.u = function(a) {
        if (!this.points || this.points.length !== a.length) {
            var d,
                b = this.calcPoints = [],
                g = this.edges = [],
                k = this.normals = [];

            for (d = 0; d < a.length; d++) {
                b.push(new c()), g.push(new c()), k.push(new c());
            }
        }

        this.points = a;
        this.i();
    };

    m.prototype.setAngle = function(a) {
        this.angle = a;
        this.i();
        return this;
    };

    m.prototype.setOffset = function(a) {
        this.offset = a;
        this.i();
        return this;
    };

    m.prototype.rotate = m.prototype.rotate = function(a) {
        for (var d = this.points, b = d.length, c = 0; c < b; c++) {
            d[c].rotate(a);
        }

        this.i();
        return this;
    };

    m.prototype.translate = m.prototype.translate = function(a, d) {
        for (var b = this.points, c = b.length, k = 0; k < c; k++) {
            b[k].x += a, b[k].y += d;
        }

        this.i();
        return this;
    };

    m.prototype.i = function() {
        var a = this.calcPoints,
            c = this.edges,
            b = this.normals,
            g = this.points,
            k = this.offset,
            l = this.angle,
            f = g.length,
            e;

        for (e = 0; e < f; e++) {
            var h = a[e].c(g[e]);
            h.x += k.x;
            h.y += k.y;
            0 !== l && h.rotate(l);
        }

        for (e = 0; e < f; e++) {
            g = a[e], g = c[e].c(e < f - 1 ? a[e + 1] : a[0]).sub(g), b[e].c(g).m().normalize();
        }
    };

    m.prototype.getAABB = function() {
        for (var a = this.calcPoints, d = a.length, b = a[0].x, g = a[0].y, k = a[0].x, l = a[0].y, f = 1; f < d; f++) {
            var e = a[f];
            e.x < b ? b = e.x : e.x > k && (k = e.x);
            e.y < g ? g = e.y : e.y > l && (l = e.y);
        }

        return new p(this.pos.clone().add(new c(b, g)), k - b, l - g).l();
    };

    m.prototype.getCentroid = function() {
        for (var a = this.calcPoints, d = a.length, b = 0, g = 0, k = 0, f = 0; f < d; f++) {
            var h = a[f],
                e = f === d - 1 ? a[0] : a[f + 1],
                m = h.x * e.y - e.x * h.y;
            b += (h.x + e.x) * m;
            g += (h.y + e.y) * m;
            k += m;
        }

        k *= 3;
        return new c(b / k, g / k);
    };

    f.Box = p;

    p.prototype.toPolygon = p.prototype.l = function() {
        var a = this.pos,
            d = this.w,
            b = this.h;
        return new m(new c(a.x, a.y), [new c(), new c(d, 0), new c(d, b), new c(0, b)]);
    };

    f.Response = w;

    w.prototype.clear = w.prototype.clear = function() {
        this.bInA = this.aInB = !0;
        this.overlap = Number.MAX_VALUE;
        return this;
    };

    for (var h = [], r = 0; 10 > r; r++) {
        h.push(new c());
    }

    var q = [];

    for (r = 0; 5 > r; r++) {
        q.push([]);
    }

    var A = new w(),
        F = new p(new c(), 1E-6, 1E-6).l();
    f.isSeparatingAxis = y;

    f.pointInCircle = function(a, c) {
        var b = h.pop().c(a).sub(c.pos),
            d = c.r * c.r,
            f = b.g();
        h.push(b);
        return f <= d;
    };

    f.pointInPolygon = function(a, c) {
        F.pos.c(a);
        A.clear();
        var b = E(F, c, A);
        b && (b = A.aInB);
        return b;
    };

    f.testCircleCircle = function(a, c, b) {
        var d = h.pop().c(c.pos).sub(a.pos),
            f = a.r + c.r,
            l = d.g();
        if (l > f * f) return h.push(d), !1;
        b && (l = Math.sqrt(l), b.a = a, b.b = c, b.overlap = f - l, b.overlapN.c(d.normalize()), b.overlapV.c(d).scale(b.overlap), b.aInB = a.r <= c.r && l <= c.r - a.r, b.bInA = c.r <= a.r && l <= a.r - c.r);
        h.push(d);
        return !0;
    };

    f.testPolygonCircle = D;

    f.testCirclePolygon = function(a, c, b) {
        if ((a = D(c, a, b)) && b) {
            c = b.a;
            var d = b.aInB;
            b.overlapN.reverse();
            b.overlapV.reverse();
            b.a = b.b;
            b.b = c;
            b.aInB = b.bInA;
            b.bInA = d;
        }

        return a;
    };

    f.testPolygonPolygon = E;
    return f;
}

"function" === typeof define && define.amd ? define(x) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = x() : (void 0).SAT = x();