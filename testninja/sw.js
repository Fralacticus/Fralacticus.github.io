! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}({
    2: function(e, t) {
        self.addEventListener("install", function(e) {
            console.log("sw installed")
        });
        self.addEventListener("fetch", function(e) {
            "GET" !== e.request.method || 0 !== e.request.url.indexOf(self.origin + "/") ? (console.log("sw fetch [ignore] " + e.request.url), e.respondWith(fetch(e.request))) : e.respondWith(fetch(e.request).then(function(t) {
                return console.log("sw fetch [network] " + e.request.url), caches.open("gba-ninja").then(function(n) {
                    return n.put(e.request, t.clone()), t
                })
            }).catch(function() {
                return console.log("sw fetch [cache] " + e.request.url), caches.open("gba-ninja").then(function(t) {
                    return t.match(e.request)
                })
            }))
        }), self.addEventListener("error", function(e) {
            var t = e.error,
                n = "";
            n += " Message: " + t.message + "; ";
            try {
                n += " StackTop: " + t.stack.split(/\n/g)[1].trim() + "; "
            } catch (e) {}
            console.error(n)
        }), console.log("sw loaded")
    }
});