var h;
h || (h = typeof Module !== 'undefined' ? Module : {});
var aa = Object.assign({}, h),
    ba = [],
    ca = "./this.program",
    da = (a, b) => {
        throw b;
    },
    k = "";
"undefined" != typeof document && document.currentScript && (k = document.currentScript.src);
k = 0 !== k.indexOf("blob:") ? k.substr(0, k.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
var ea = h.print || console.log.bind(console),
    m = h.printErr || console.warn.bind(console);
Object.assign(h, aa);
aa = null;
h.arguments && (ba = h.arguments);
h.thisProgram && (ca = h.thisProgram);
h.quit && (da = h.quit);
var fa;
h.wasmBinary && (fa = h.wasmBinary);
var noExitRuntime = h.noExitRuntime || !0;
"object" != typeof WebAssembly && n("no native wasm support detected");
var ha, ia = !1;

function ja(a, b, c) {
    var d = {
        string: function(p) {
            var r = 0;
            if (null !== p && void 0 !== p && 0 !== p) {
                var q = (p.length << 2) + 1;
                r = ka(q);
                u(p, v, r, q)
            }
            return r
        },
        array: function(p) {
            var r = ka(p.length);
            w.set(p, r);
            return r
        }
    };
    a = h["_" + a];
    var e = [],
        f = 0;
    if (c)
        for (var g = 0; g < c.length; g++) {
            var l = d[b[g]];
            l ? (0 === f && (f = la()), e[g] = l(c[g])) : e[g] = c[g]
        }
    b = a.apply(null, e);
    b = function(p) {
        0 !== f && ma(f);
        return p
    }(b)
}
var na = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

function oa(a, b, c) {
    var d = b + c;
    for (c = b; a[c] && !(c >= d);) ++c;
    if (16 < c - b && a.buffer && na) return na.decode(a.subarray(b, c));
    for (d = ""; b < c;) {
        var e = a[b++];
        if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else d += String.fromCharCode(e)
    }
    return d
}

function y(a, b) {
    return a ? oa(v, a, b) : ""
}

function u(a, b, c, d) {
    if (!(0 < d)) return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | l & 1023
        }
        if (127 >= g) {
            if (c >= d) break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d) break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d) break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d) break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}

function z(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
    }
    return b
}

function qa(a) {
    var b = z(a) + 1,
        c = A(b);
    c && u(a, w, c, b);
    return c
}

function ra(a) {
    var b = z(a) + 1,
        c = ka(b);
    u(a, w, c, b);
    return c
}
var sa, w, v, ta, ua, B, va, C, D, wa, xa = [],
    ya = [],
    za = [],
    Aa = [],
    Ba = [];

function Ca() {
    var a = h.preRun.shift();
    xa.unshift(a)
}
var E = 0,
    Da = null,
    Ea = null;

function n(a) {
    if (h.onAbort) h.onAbort(a);
    a = "Aborted(" + a + ")";
    m(a);
    ia = !0;
    throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
}

function Fa() {
    return F.startsWith("data:application/octet-stream;base64,")
}
var F;
F = "SkyEmu.wasm";
if (!Fa()) {
    var Ga = F;
    F = h.locateFile ? h.locateFile(Ga, k) : k + Ga
}

function Ha() {
    var a = F;
    try {
        if (a == F && fa) return new Uint8Array(fa);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        n(b)
    }
}

function Ia() {
    return fa || "function" != typeof fetch ? Promise.resolve().then(function() {
        return Ha()
    }) : fetch(F, {
        credentials: "same-origin"
    }).then(function(a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + F + "'";
        return a.arrayBuffer()
    }).catch(function() {
        return Ha()
    })
}
var G, H, Ma = {
    1981264: function() {
        document.getElementById("fileInput").style.visibility = "hidden"
    },
    1981352: function(a, b, c, d) {
        var e = document.getElementById("fileInput");
        e.style.left = a + "px";
        e.style.top = b + "px";
        e.style.width = c + "px";
        e.style.height = d + "px";
        e.style.visibility = "visible";
        if ("" != e.value) {
            console.log(e.value);
            var f = new FileReader;
            a = e.files[0];
            f.addEventListener("loadend", function() {
                const l = new Uint8Array(f.result);
                var p = "/offline/" + g;
                Ja(p, l);
                Ka(function() {});
                document.getElementById("fileStaging").value =
                    p
            });
            f.readAsArrayBuffer(a);
            var g = a.name;
            e.value = ""
        }
        a = document.getElementById("fileStaging");
        e = "";
        "" != a.value && (e = a.value, a.value = "");
        a = z(e) + 1;
        b = A(a);
        u(e, v, b, a);
        return b
    },
    1982376: function() {
        Ka(function() {})
    },
    1982406: function() {
        I("/offline");
        La(J, "/offline");
        Ka(!0, function() {})
    }
};

function Na(a) {
    for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b) b(h);
        else {
            var c = b.Zd;
            "number" == typeof c ? void 0 === b.Lc ? K(c)() : K(c)(b.Lc) : c(void 0 === b.Lc ? null : b.Lc)
        }
    }
}
var Oa = [];

function K(a) {
    var b = Oa[a];
    b || (a >= Oa.length && (Oa.length = a + 1), Oa[a] = b = wa.get(a));
    return b
}
var Pa = (a, b) => {
        for (var c = 0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
        }
        if (b)
            for (; c; c--) a.unshift("..");
        return a
    },
    L = a => {
        var b = "/" === a.charAt(0),
            c = "/" === a.substr(-1);
        (a = Pa(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a
    },
    Qa = a => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b
    },
    Ra = a => {
        if ("/" ===
            a) return "/";
        a = L(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1)
    };

function Sa() {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);
        return function() {
            crypto.getRandomValues(a);
            return a[0]
        }
    }
    return function() {
        n("randomDevice")
    }
}

function Ta() {
    for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = Pa(a.split("/").filter(d => !!d), !b).join("/");
    return (b ? "/" : "") + a || "."
}
var Ua = [];

function Va(a, b) {
    Ua[a] = {
        input: [],
        $b: [],
        qc: b
    };
    Wa(a, Xa)
}
var Xa = {
        open: function(a) {
            var b = Ua[a.node.uc];
            if (!b) throw new M(43);
            a.Wb = b;
            a.seekable = !1
        },
        close: function(a) {
            a.Wb.qc.flush(a.Wb)
        },
        flush: function(a) {
            a.Wb.qc.flush(a.Wb)
        },
        read: function(a, b, c, d) {
            if (!a.Wb || !a.Wb.qc.$c) throw new M(60);
            for (var e = 0, f = 0; f < d; f++) {
                try {
                    var g = a.Wb.qc.$c(a.Wb)
                } catch (l) {
                    throw new M(29);
                }
                if (void 0 === g && 0 === e) throw new M(6);
                if (null === g || void 0 === g) break;
                e++;
                b[c + f] = g
            }
            e && (a.node.timestamp = Date.now());
            return e
        },
        write: function(a, b, c, d) {
            if (!a.Wb || !a.Wb.qc.Oc) throw new M(60);
            try {
                for (var e =
                        0; e < d; e++) a.Wb.qc.Oc(a.Wb, b[c + e])
            } catch (f) {
                throw new M(29);
            }
            d && (a.node.timestamp = Date.now());
            return e
        }
    },
    Ya = {
        $c: function(a) {
            if (!a.input.length) {
                var b = null;
                "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
                if (!b) return null;
                var c = Array(z(b) + 1);
                b = u(b, c, 0, c.length);
                c.length = b;
                a.input = c
            }
            return a.input.shift()
        },
        Oc: function(a, b) {
            null === b || 10 === b ? (ea(oa(a.$b, 0)), a.$b = []) : 0 != b && a.$b.push(b)
        },
        flush: function(a) {
            a.$b && 0 < a.$b.length && (ea(oa(a.$b, 0)), a.$b = [])
        }
    },
    Za = {
        Oc: function(a, b) {
            null === b || 10 === b ? (m(oa(a.$b, 0)), a.$b = []) : 0 != b && a.$b.push(b)
        },
        flush: function(a) {
            a.$b && 0 < a.$b.length && (m(oa(a.$b, 0)), a.$b = [])
        }
    },
    N = {
        ec: null,
        bc: function() {
            return N.createNode(null, "/", 16895, 0)
        },
        createNode: function(a, b, c, d) {
            if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new M(63);
            N.ec || (N.ec = {
                dir: {
                    node: {
                        dc: N.Tb.dc,
                        ac: N.Tb.ac,
                        sc: N.Tb.sc,
                        Dc: N.Tb.Dc,
                        fd: N.Tb.fd,
                        Jc: N.Tb.Jc,
                        Gc: N.Tb.Gc,
                        Fc: N.Tb.Fc,
                        Ic: N.Tb.Ic
                    },
                    stream: {
                        mc: N.Vb.mc
                    }
                },
                file: {
                    node: {
                        dc: N.Tb.dc,
                        ac: N.Tb.ac
                    },
                    stream: {
                        mc: N.Vb.mc,
                        read: N.Vb.read,
                        write: N.Vb.write,
                        Uc: N.Vb.Uc,
                        bd: N.Vb.bd,
                        dd: N.Vb.dd
                    }
                },
                link: {
                    node: {
                        dc: N.Tb.dc,
                        ac: N.Tb.ac,
                        vc: N.Tb.vc
                    },
                    stream: {}
                },
                Wc: {
                    node: {
                        dc: N.Tb.dc,
                        ac: N.Tb.ac
                    },
                    stream: $a
                }
            });
            c = ab(a, b, c, d);
            16384 === (c.mode & 61440) ? (c.Tb = N.ec.dir.node, c.Vb = N.ec.dir.stream, c.Ub = {}) : 32768 === (c.mode & 61440) ? (c.Tb = N.ec.file.node, c.Vb = N.ec.file.stream, c.Xb = 0, c.Ub = null) : 40960 === (c.mode & 61440) ? (c.Tb = N.ec.link.node, c.Vb = N.ec.link.stream) : 8192 === (c.mode & 61440) && (c.Tb = N.ec.Wc.node,
                c.Vb = N.ec.Wc.stream);
            c.timestamp = Date.now();
            a && (a.Ub[b] = c, a.timestamp = c.timestamp);
            return c
        },
        Cd: function(a) {
            return a.Ub ? a.Ub.subarray ? a.Ub.subarray(0, a.Xb) : new Uint8Array(a.Ub) : new Uint8Array(0)
        },
        Yc: function(a, b) {
            var c = a.Ub ? a.Ub.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Ub, a.Ub = new Uint8Array(b), 0 < a.Xb && a.Ub.set(c.subarray(0, a.Xb), 0))
        },
        Pd: function(a, b) {
            if (a.Xb != b)
                if (0 == b) a.Ub = null, a.Xb = 0;
                else {
                    var c = a.Ub;
                    a.Ub = new Uint8Array(b);
                    c && a.Ub.set(c.subarray(0, Math.min(b,
                        a.Xb)));
                    a.Xb = b
                }
        },
        Tb: {
            dc: function(a) {
                var b = {};
                b.xd = 8192 === (a.mode & 61440) ? a.id : 1;
                b.Nc = a.id;
                b.mode = a.mode;
                b.Ld = 1;
                b.uid = 0;
                b.Fd = 0;
                b.uc = a.uc;
                16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Xb : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                b.rd = new Date(a.timestamp);
                b.Ec = new Date(a.timestamp);
                b.vd = new Date(a.timestamp);
                b.sd = 4096;
                b.td = Math.ceil(b.size / b.sd);
                return b
            },
            ac: function(a, b) {
                void 0 !== b.mode && (a.mode = b.mode);
                void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                void 0 !== b.size &&
                    N.Pd(a, b.size)
            },
            sc: function() {
                throw bb[44];
            },
            Dc: function(a, b, c, d) {
                return N.createNode(a, b, c, d)
            },
            fd: function(a, b, c) {
                if (16384 === (a.mode & 61440)) {
                    try {
                        var d = O(b, c)
                    } catch (f) {}
                    if (d)
                        for (var e in d.Ub) throw new M(55);
                }
                delete a.parent.Ub[a.name];
                a.parent.timestamp = Date.now();
                a.name = c;
                b.Ub[c] = a;
                b.timestamp = a.parent.timestamp;
                a.parent = b
            },
            Jc: function(a, b) {
                delete a.Ub[b];
                a.timestamp = Date.now()
            },
            Gc: function(a, b) {
                var c = O(a, b),
                    d;
                for (d in c.Ub) throw new M(55);
                delete a.Ub[b];
                a.timestamp = Date.now()
            },
            Fc: function(a) {
                var b = [".", ".."],
                    c;
                for (c in a.Ub) a.Ub.hasOwnProperty(c) && b.push(c);
                return b
            },
            Ic: function(a, b, c) {
                a = N.createNode(a, b, 41471, 0);
                a.link = c;
                return a
            },
            vc: function(a) {
                if (40960 !== (a.mode & 61440)) throw new M(28);
                return a.link
            }
        },
        Vb: {
            read: function(a, b, c, d, e) {
                var f = a.node.Ub;
                if (e >= a.node.Xb) return 0;
                a = Math.min(a.node.Xb - e, d);
                if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
                else
                    for (d = 0; d < a; d++) b[c + d] = f[e + d];
                return a
            },
            write: function(a, b, c, d, e, f) {
                if (!d) return 0;
                a = a.node;
                a.timestamp = Date.now();
                if (b.subarray && (!a.Ub || a.Ub.subarray)) {
                    if (f) return a.Ub =
                        b.subarray(c, c + d), a.Xb = d;
                    if (0 === a.Xb && 0 === e) return a.Ub = b.slice(c, c + d), a.Xb = d;
                    if (e + d <= a.Xb) return a.Ub.set(b.subarray(c, c + d), e), d
                }
                N.Yc(a, e + d);
                if (a.Ub.subarray && b.subarray) a.Ub.set(b.subarray(c, c + d), e);
                else
                    for (f = 0; f < d; f++) a.Ub[e + f] = b[c + f];
                a.Xb = Math.max(a.Xb, e + d);
                return d
            },
            mc: function(a, b, c) {
                1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Xb);
                if (0 > b) throw new M(28);
                return b
            },
            Uc: function(a, b, c) {
                N.Yc(a.node, b + c);
                a.node.Xb = Math.max(a.node.Xb, b + c)
            },
            bd: function(a, b, c, d, e, f) {
                if (0 !== b) throw new M(28);
                if (32768 !== (a.node.mode & 61440)) throw new M(43);
                a = a.node.Ub;
                if (f & 2 || a.buffer !== sa) {
                    if (0 < d || d + c < a.length) a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                    d = !0;
                    n();
                    c = void 0;
                    if (!c) throw new M(48);
                    w.set(a, c)
                } else d = !1, c = a.byteOffset;
                return {
                    fe: c,
                    Vd: d
                }
            },
            dd: function(a, b, c, d, e) {
                if (32768 !== (a.node.mode & 61440)) throw new M(43);
                if (e & 2) return 0;
                N.Vb.write(a, b, 0, d, c, !1);
                return 0
            }
        }
    },
    J = {
        zc: {},
        indexedDB: () => {
            if ("undefined" != typeof indexedDB) return indexedDB;
            var a = null;
            "object" == typeof window && (a =
                window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
            a || n("IDBFS used, but indexedDB not supported");
            return a
        },
        qd: 21,
        lc: "FILE_DATA",
        bc: function(a) {
            return N.bc.apply(null, arguments)
        },
        nd: (a, b, c) => {
            J.Dd(a, (d, e) => {
                if (d) return c(d);
                J.Ed(a, (f, g) => {
                    if (f) return c(f);
                    J.Md(b ? g : e, b ? e : g, c)
                })
            })
        },
        ge: () => {
            Object.values(J.zc).forEach(a => a.close());
            J.zc = {}
        },
        Bd: (a, b) => {
            var c = J.zc[a];
            if (c) return b(null, c);
            try {
                var d = J.indexedDB().open(a, J.qd)
            } catch (e) {
                return b(e)
            }
            if (!d) return b("Unable to connect to IndexedDB");
            d.onupgradeneeded = e => {
                var f = e.target.result;
                e = e.target.transaction;
                var g;
                f.objectStoreNames.contains(J.lc) ? g = e.objectStore(J.lc) : g = f.createObjectStore(J.lc);
                g.indexNames.contains("timestamp") || g.createIndex("timestamp", "timestamp", {
                    unique: !1
                })
            };
            d.onsuccess = () => {
                c = d.result;
                J.zc[a] = c;
                b(null, c)
            };
            d.onerror = e => {
                b(this.error);
                e.preventDefault()
            }
        },
        Dd: (a, b) => {
            function c(l) {
                return "." !== l && ".." !== l
            }

            function d(l) {
                return p => L(l + "/" + p)
            }
            var e = {};
            for (a = cb(a.tc).filter(c).map(d(a.tc)); a.length;) {
                var f = a.pop();
                try {
                    var g =
                        db(f)
                } catch (l) {
                    return b(l)
                }
                16384 === (g.mode & 61440) && a.push.apply(a, cb(f).filter(c).map(d(f)));
                e[f] = {
                    timestamp: g.Ec
                }
            }
            return b(null, {
                type: "local",
                entries: e
            })
        },
        Ed: (a, b) => {
            var c = {};
            J.Bd(a.tc, (d, e) => {
                if (d) return b(d);
                try {
                    var f = e.transaction([J.lc], "readonly");
                    f.onerror = g => {
                        b(this.error);
                        g.preventDefault()
                    };
                    f.objectStore(J.lc).index("timestamp").openKeyCursor().onsuccess = g => {
                        g = g.target.result;
                        if (!g) return b(null, {
                            type: "remote",
                            db: e,
                            entries: c
                        });
                        c[g.primaryKey] = {
                            timestamp: g.key
                        };
                        g.continue()
                    }
                } catch (g) {
                    return b(g)
                }
            })
        },
        Id: (a, b) => {
            try {
                var c = P(a).node;
                var d = db(a)
            } catch (e) {
                return b(e)
            }
            return 16384 === (d.mode & 61440) ? b(null, {
                timestamp: d.Ec,
                mode: d.mode
            }) : 32768 === (d.mode & 61440) ? (c.Ub = N.Cd(c), b(null, {
                timestamp: d.Ec,
                mode: d.mode,
                contents: c.Ub
            })) : b(Error("node type not supported"))
        },
        Rd: (a, b, c) => {
            try {
                if (16384 === (b.mode & 61440))
                    for (var d = b.mode, e = a.split("/"), f = "", g = 0; g < e.length; ++g) {
                        if (e[g]) {
                            f += "/" + e[g];
                            try {
                                I(f, d)
                            } catch (x) {
                                if (20 != x.Zb) throw x;
                            }
                        }
                    } else if (32768 === (b.mode & 61440)) Ja(a, b.contents, {
                        Vc: !0
                    });
                    else return c(Error("node type not supported"));
                var l = b.mode;
                var p = "string" == typeof a ? P(a, {
                    nc: !0
                }).node : a;
                if (!p.Tb.ac) throw new M(63);
                p.Tb.ac(p, {
                    mode: l & 4095 | p.mode & -4096,
                    timestamp: Date.now()
                });
                var r = b.timestamp,
                    q = b.timestamp,
                    t = P(a, {
                        nc: !0
                    }).node;
                t.Tb.ac(t, {
                    timestamp: Math.max(r, q)
                })
            } catch (x) {
                return c(x)
            }
            c(null)
        },
        Nd: (a, b) => {
            try {
                var c = db(a);
                16384 === (c.mode & 61440) ? eb(a) : 32768 === (c.mode & 61440) && fb(a)
            } catch (d) {
                return b(d)
            }
            b(null)
        },
        Jd: (a, b, c) => {
            a = a.get(b);
            a.onsuccess = d => {
                c(null, d.target.result)
            };
            a.onerror = d => {
                c(this.error);
                d.preventDefault()
            }
        },
        Sd: (a, b,
            c, d) => {
            try {
                var e = a.put(c, b)
            } catch (f) {
                d(f);
                return
            }
            e.onsuccess = () => {
                d(null)
            };
            e.onerror = f => {
                d(this.error);
                f.preventDefault()
            }
        },
        Od: (a, b, c) => {
            a = a.delete(b);
            a.onsuccess = () => {
                c(null)
            };
            a.onerror = d => {
                c(this.error);
                d.preventDefault()
            }
        },
        Md: (a, b, c) => {
            function d(q) {
                if (q && !l) return l = !0, c(q)
            }
            var e = 0,
                f = [];
            Object.keys(a.entries).forEach(function(q) {
                var t = a.entries[q],
                    x = b.entries[q];
                x && t.timestamp.getTime() == x.timestamp.getTime() || (f.push(q), e++)
            });
            var g = [];
            Object.keys(b.entries).forEach(function(q) {
                a.entries[q] ||
                    (g.push(q), e++)
            });
            if (!e) return c(null);
            var l = !1,
                p = ("remote" === a.type ? a.db : b.db).transaction([J.lc], "readwrite"),
                r = p.objectStore(J.lc);
            p.onerror = q => {
                d(this.error);
                q.preventDefault()
            };
            p.oncomplete = () => {
                l || c(null)
            };
            f.sort().forEach(q => {
                "local" === b.type ? J.Jd(r, q, (t, x) => {
                    if (t) return d(t);
                    J.Rd(q, x, d)
                }) : J.Id(q, (t, x) => {
                    if (t) return d(t);
                    J.Sd(r, q, x, d)
                })
            });
            g.sort().reverse().forEach(q => {
                "local" === b.type ? J.Nd(q, d) : J.Od(r, q, d)
            })
        }
    },
    gb = null,
    hb = {},
    ib = [],
    jb = 1,
    Q = null,
    kb = !0,
    M = null,
    bb = {},
    lb = 0,
    P = (a, b = {}) => {
        a = Ta("/", a);
        if (!a) return {
            path: "",
            node: null
        };
        b = Object.assign({
            Zc: !0,
            Pc: 0
        }, b);
        if (8 < b.Pc) throw new M(32);
        a = Pa(a.split("/").filter(g => !!g), !1);
        for (var c = gb, d = "/", e = 0; e < a.length; e++) {
            var f = e === a.length - 1;
            if (f && b.parent) break;
            c = O(c, a[e]);
            d = L(d + "/" + a[e]);
            c.oc && (!f || f && b.Zc) && (c = c.oc.root);
            if (!f || b.nc)
                for (f = 0; 40960 === (c.mode & 61440);)
                    if (c = mb(d), d = Ta(Qa(d), c), c = P(d, {
                            Pc: b.Pc + 1
                        }).node, 40 < f++) throw new M(32);
        }
        return {
            path: d,
            node: c
        }
    },
    nb = a => {
        for (var b;;) {
            if (a === a.parent) return a = a.bc.tc, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
            b =
                b ? a.name + "/" + b : a.name;
            a = a.parent
        }
    },
    ob = (a, b) => {
        for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
        return (a + c >>> 0) % Q.length
    },
    pb = a => {
        var b = ob(a.parent.id, a.name);
        if (Q[b] === a) Q[b] = a.pc;
        else
            for (b = Q[b]; b;) {
                if (b.pc === a) {
                    b.pc = a.pc;
                    break
                }
                b = b.pc
            }
    },
    O = (a, b) => {
        var c;
        if (c = (c = qb(a, "x")) ? c : a.Tb.sc ? 0 : 2) throw new M(c, a);
        for (c = Q[ob(a.id, b)]; c; c = c.pc) {
            var d = c.name;
            if (c.parent.id === a.id && d === b) return c
        }
        return a.Tb.sc(a, b)
    },
    ab = (a, b, c, d) => {
        a = new rb(a, b, c, d);
        b = ob(a.parent.id, a.name);
        a.pc = Q[b];
        return Q[b] = a
    },
    sb = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
    },
    tb = a => {
        var b = ["r", "w", "rw"][a & 3];
        a & 512 && (b += "w");
        return b
    },
    qb = (a, b) => {
        if (kb) return 0;
        if (!b.includes("r") || a.mode & 292) {
            if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2
        } else return 2;
        return 0
    },
    wb = (a, b) => {
        try {
            return O(a, b), 20
        } catch (c) {}
        return qb(a, "wx")
    },
    xb = (a, b, c) => {
        try {
            var d = O(a, b)
        } catch (e) {
            return e.Zb
        }
        if (a = qb(a, "wx")) return a;
        if (c) {
            if (16384 !== (d.mode & 61440)) return 54;
            if (d === d.parent || "/" === nb(d)) return 10
        } else if (16384 === (d.mode &
                61440)) return 31;
        return 0
    },
    yb = (a = 0) => {
        for (; 4096 >= a; a++)
            if (!ib[a]) return a;
        throw new M(33);
    },
    Ab = (a, b) => {
        zb || (zb = function() {
            this.Hc = {}
        }, zb.prototype = {
            flags: {
                get: function() {
                    return this.Hc.flags
                },
                set: function(c) {
                    this.Hc.flags = c
                }
            },
            position: {
                get $d() {
                    return this.Hc.position
                },
                set: function(c) {
                    this.Hc.position = c
                }
            }
        });
        a = Object.assign(new zb, a);
        b = yb(b);
        a.jc = b;
        return ib[b] = a
    },
    $a = {
        open: a => {
            a.Vb = hb[a.node.uc].Vb;
            a.Vb.open && a.Vb.open(a)
        },
        mc: () => {
            throw new M(70);
        }
    },
    Wa = (a, b) => {
        hb[a] = {
            Vb: b
        }
    },
    Bb = () => {
        for (var a = [], b = [gb.bc]; b.length;) {
            var c = b.pop();
            a.push(c);
            b.push.apply(b, c.cd)
        }
        return a
    },
    Ka = (a, b) => {
        function c(g) {
            lb--;
            return b(g)
        }

        function d(g) {
            if (g) {
                if (!d.yd) return d.yd = !0, c(g)
            } else ++f >= e.length && c(null)
        }
        "function" == typeof a && (b = a, a = !1);
        lb++;
        1 < lb && m("warning: " + lb + " FS.syncfs operations in flight at once, probably just doing extra work");
        var e = Bb(),
            f = 0;
        e.forEach(g => {
            if (!g.type.nd) return d(null);
            g.type.nd(g, a, d)
        })
    },
    La = (a, b) => {
        var c = "/" === b,
            d = !b;
        if (c && gb) throw new M(10);
        if (!c && !d) {
            var e = P(b, {
                Zc: !1
            });
            b = e.path;
            e =
                e.node;
            if (e.oc) throw new M(10);
            if (16384 !== (e.mode & 61440)) throw new M(54);
        }
        b = {
            type: a,
            de: {},
            tc: b,
            cd: []
        };
        a = a.bc(b);
        a.bc = b;
        b.root = a;
        c ? gb = a : e && (e.oc = b, e.bc && e.bc.cd.push(b))
    },
    Cb = (a, b, c) => {
        var d = P(a, {
            parent: !0
        }).node;
        a = Ra(a);
        if (!a || "." === a || ".." === a) throw new M(28);
        var e = wb(d, a);
        if (e) throw new M(e);
        if (!d.Tb.Dc) throw new M(63);
        return d.Tb.Dc(d, a, b, c)
    },
    I = (a, b) => Cb(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0),
    Db = (a, b, c) => {
        "undefined" == typeof c && (c = b, b = 438);
        Cb(a, b | 8192, c)
    },
    Eb = (a, b) => {
        if (!Ta(a)) throw new M(44);
        var c =
            P(b, {
                parent: !0
            }).node;
        if (!c) throw new M(44);
        b = Ra(b);
        var d = wb(c, b);
        if (d) throw new M(d);
        if (!c.Tb.Ic) throw new M(63);
        c.Tb.Ic(c, b, a)
    },
    eb = a => {
        var b = P(a, {
            parent: !0
        }).node;
        a = Ra(a);
        var c = O(b, a),
            d = xb(b, a, !0);
        if (d) throw new M(d);
        if (!b.Tb.Gc) throw new M(63);
        if (c.oc) throw new M(10);
        b.Tb.Gc(b, a);
        pb(c)
    },
    cb = a => {
        a = P(a, {
            nc: !0
        }).node;
        if (!a.Tb.Fc) throw new M(54);
        return a.Tb.Fc(a)
    },
    fb = a => {
        var b = P(a, {
            parent: !0
        }).node;
        if (!b) throw new M(44);
        a = Ra(a);
        var c = O(b, a),
            d = xb(b, a, !1);
        if (d) throw new M(d);
        if (!b.Tb.Jc) throw new M(63);
        if (c.oc) throw new M(10);
        b.Tb.Jc(b, a);
        pb(c)
    },
    mb = a => {
        a = P(a).node;
        if (!a) throw new M(44);
        if (!a.Tb.vc) throw new M(28);
        return Ta(nb(a.parent), a.Tb.vc(a))
    },
    db = (a, b) => {
        a = P(a, {
            nc: !b
        }).node;
        if (!a) throw new M(44);
        if (!a.Tb.dc) throw new M(63);
        return a.Tb.dc(a)
    },
    Gb = (a, b, c) => {
        if ("" === a) throw new M(44);
        if ("string" == typeof b) {
            var d = sb[b];
            if ("undefined" == typeof d) throw Error("Unknown file open mode: " + b);
            b = d
        }
        c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
        if ("object" == typeof a) var e = a;
        else {
            a = L(a);
            try {
                e = P(a, {
                    nc: !(b &
                        131072)
                }).node
            } catch (f) {}
        }
        d = !1;
        if (b & 64)
            if (e) {
                if (b & 128) throw new M(20);
            } else e = Cb(a, c, 0), d = !0;
        if (!e) throw new M(44);
        8192 === (e.mode & 61440) && (b &= -513);
        if (b & 65536 && 16384 !== (e.mode & 61440)) throw new M(54);
        if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== tb(b) || b & 512) ? 31 : qb(e, tb(b)) : 44)) throw new M(c);
        if (b & 512 && !d) {
            c = e;
            c = "string" == typeof c ? P(c, {
                nc: !0
            }).node : c;
            if (!c.Tb.ac) throw new M(63);
            if (16384 === (c.mode & 61440)) throw new M(31);
            if (32768 !== (c.mode & 61440)) throw new M(28);
            if (d = qb(c, "w")) throw new M(d);
            c.Tb.ac(c, {
                size: 0,
                timestamp: Date.now()
            })
        }
        b &= -131713;
        e = Ab({
            node: e,
            path: nb(e),
            flags: b,
            seekable: !0,
            position: 0,
            Vb: e.Vb,
            Td: [],
            error: !1
        });
        e.Vb.open && e.Vb.open(e);
        !h.logReadFiles || b & 1 || (Fb || (Fb = {}), a in Fb || (Fb[a] = 1));
        return e
    },
    Hb = a => {
        if (null === a.jc) throw new M(8);
        a.Mc && (a.Mc = null);
        try {
            a.Vb.close && a.Vb.close(a)
        } catch (b) {
            throw b;
        } finally {
            ib[a.jc] = null
        }
        a.jc = null
    },
    Ib = (a, b, c) => {
        if (null === a.jc) throw new M(8);
        if (!a.seekable || !a.Vb.mc) throw new M(70);
        if (0 != c && 1 != c && 2 != c) throw new M(28);
        a.position = a.Vb.mc(a, b, c);
        a.Td = []
    },
    Jb = (a, b, c, d, e) => {
        var f = void 0;
        if (0 > d || 0 > f) throw new M(28);
        if (null === a.jc) throw new M(8);
        if (0 === (a.flags & 2097155)) throw new M(8);
        if (16384 === (a.node.mode & 61440)) throw new M(31);
        if (!a.Vb.write) throw new M(28);
        a.seekable && a.flags & 1024 && Ib(a, 0, 2);
        var g = "undefined" != typeof f;
        if (!g) f = a.position;
        else if (!a.seekable) throw new M(70);
        b = a.Vb.write(a, b, c, d, f, e);
        g || (a.position += b);
        return b
    },
    Ja = (a, b, c = {}) => {
        c.flags = c.flags || 577;
        a = Gb(a, c.flags, c.mode);
        if ("string" == typeof b) {
            var d = new Uint8Array(z(b) + 1);
            b = u(b, d, 0, d.length);
            Jb(a, d, 0, b, c.Vc)
        } else if (ArrayBuffer.isView(b)) Jb(a, b, 0, b.byteLength, c.Vc);
        else throw Error("Unsupported data type");
        Hb(a)
    },
    Kb = () => {
        M || (M = function(a, b) {
            this.node = b;
            this.Qd = function(c) {
                this.Zb = c
            };
            this.Qd(a);
            this.message = "FS error"
        }, M.prototype = Error(), M.prototype.constructor = M, [44].forEach(a => {
            bb[a] = new M(a);
            bb[a].stack = "<generic error, no stack>"
        }))
    },
    Lb, Mb = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c
    },
    Ob = (a, b, c) => {
        a = L("/dev/" + a);
        var d = Mb(!!b, !!c);
        Nb || (Nb = 64);
        var e = Nb++ << 8 |
            0;
        Wa(e, {
            open: f => {
                f.seekable = !1
            },
            close: () => {
                c && c.buffer && c.buffer.length && c(10)
            },
            read: (f, g, l, p) => {
                for (var r = 0, q = 0; q < p; q++) {
                    try {
                        var t = b()
                    } catch (x) {
                        throw new M(29);
                    }
                    if (void 0 === t && 0 === r) throw new M(6);
                    if (null === t || void 0 === t) break;
                    r++;
                    g[l + q] = t
                }
                r && (f.node.timestamp = Date.now());
                return r
            },
            write: (f, g, l, p) => {
                for (var r = 0; r < p; r++) try {
                    c(g[l + r])
                } catch (q) {
                    throw new M(29);
                }
                p && (f.node.timestamp = Date.now());
                return r
            }
        });
        Db(a, d, e)
    },
    Nb, R = {},
    zb, Fb;

function Pb(a, b) {
    if ("/" === b.charAt(0)) return b;
    if (-100 === a) a = "/";
    else {
        a = ib[a];
        if (!a) throw new M(8);
        a = a.path
    }
    if (0 == b.length) throw new M(44);
    return L(a + "/" + b)
}
var Qb = void 0;

function Rb() {
    Qb += 4;
    return B[Qb - 4 >> 2]
}

function S(a) {
    a = ib[a];
    if (!a) throw new M(8);
    return a
}

function Sb(a, b, c) {
    function d(p) {
        return (p = p.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? p[1] : "GMT"
    }
    var e = (new Date).getFullYear(),
        f = new Date(e, 0, 1),
        g = new Date(e, 6, 1);
    e = f.getTimezoneOffset();
    var l = g.getTimezoneOffset();
    B[a >> 2] = 60 * Math.max(e, l);
    B[b >> 2] = Number(e != l);
    a = d(f);
    b = d(g);
    a = qa(a);
    b = qa(b);
    l < e ? (B[c >> 2] = a, B[c + 4 >> 2] = b) : (B[c >> 2] = b, B[c + 4 >> 2] = a)
}

function Tb(a, b, c) {
    Tb.ud || (Tb.ud = !0, Sb(a, b, c))
}
var Ub = [],
    Vb = 0;

function Wb() {
    for (var a = T.length - 1; 0 <= a; --a) Xb(a);
    T = [];
    Yb = []
}
var Yb = [];

function Zb() {
    if (Vb && $b.yc)
        for (var a = 0; a < Yb.length; ++a) {
            var b = Yb[a];
            Yb.splice(a, 1);
            --a;
            b.je.apply(null, b.Wd)
        }
}
var T = [];

function Xb(a) {
    var b = T[a];
    b.target.removeEventListener(b.cc, b.zd, b.fc);
    T.splice(a, 1)
}

function U(a) {
    function b(d) {
        ++Vb;
        $b = a;
        Zb();
        a.kc(d);
        Zb();
        --Vb
    }
    if (a.ic) a.zd = b, a.target.addEventListener(a.cc, b, a.fc), T.push(a), ac || (Aa.push(Wb), ac = !0);
    else
        for (var c = 0; c < T.length; ++c) T[c].target == a.target && T[c].cc == a.cc && Xb(c--)
}
var ac, $b, bc, cc, dc, ec, fc, gc, hc = [0, document, window];

function V(a) {
    a = 2 < a ? y(a) : a;
    return hc[a] || document.querySelector(a)
}

function ic(a) {
    return 0 > hc.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}

function jc(a, b, c, d, e, f) {
    bc || (bc = A(176));
    a = {
        target: V(a),
        yc: !0,
        cc: f,
        ic: d,
        kc: function(g) {
            var l = bc;
            D[l >> 3] = g.timeStamp;
            var p = l >> 2;
            B[p + 2] = g.location;
            B[p + 3] = g.ctrlKey;
            B[p + 4] = g.shiftKey;
            B[p + 5] = g.altKey;
            B[p + 6] = g.metaKey;
            B[p + 7] = g.repeat;
            B[p + 8] = g.charCode;
            B[p + 9] = g.keyCode;
            B[p + 10] = g.which;
            u(g.key || "", v, l + 44, 32);
            u(g.code || "", v, l + 76, 32);
            u(g.char || "", v, l + 108, 32);
            u(g.locale || "", v, l + 140, 32);
            K(d)(e, l, b) && g.preventDefault()
        },
        fc: c
    };
    U(a)
}

function kc(a, b, c) {
    D[a >> 3] = b.timeStamp;
    a >>= 2;
    B[a + 2] = b.screenX;
    B[a + 3] = b.screenY;
    B[a + 4] = b.clientX;
    B[a + 5] = b.clientY;
    B[a + 6] = b.ctrlKey;
    B[a + 7] = b.shiftKey;
    B[a + 8] = b.altKey;
    B[a + 9] = b.metaKey;
    ta[2 * a + 20] = b.button;
    ta[2 * a + 21] = b.buttons;
    B[a + 11] = b.movementX;
    B[a + 12] = b.movementY;
    c = ic(c);
    B[a + 13] = b.clientX - c.left;
    B[a + 14] = b.clientY - c.top
}

function lc(a, b, c, d, e, f) {
    cc || (cc = A(72));
    a = V(a);
    U({
        target: a,
        yc: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        cc: f,
        ic: d,
        kc: function(g) {
            g = g || event;
            kc(cc, g, a);
            K(d)(e, cc, b) && g.preventDefault()
        },
        fc: c
    })
}

function mc(a, b, c, d, e) {
    dc || (dc = A(260));
    U({
        target: a,
        cc: e,
        ic: d,
        kc: function(f) {
            f = f || event;
            var g = dc,
                l = document.pointerLockElement || document.rc || document.Tc || document.Sc;
            B[g >> 2] = !!l;
            var p = l && l.id ? l.id : "";
            u(l ? l == window ? "#window" : l == screen ? "#screen" : l && l.nodeName ? l.nodeName : "" : "", v, g + 4, 128);
            u(p, v, g + 132, 128);
            K(d)(20, g, b) && f.preventDefault()
        },
        fc: c
    })
}

function nc(a, b, c, d, e) {
    U({
        target: a,
        cc: e,
        ic: d,
        kc: function(f) {
            f = f || event;
            K(d)(38, 0, b) && f.preventDefault()
        },
        fc: c
    })
}

function oc(a, b, c, d) {
    ec || (ec = A(36));
    a = V(a);
    U({
        target: a,
        cc: "resize",
        ic: d,
        kc: function(e) {
            e = e || event;
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = ec;
                    B[g >> 2] = e.detail;
                    B[g + 4 >> 2] = f.clientWidth;
                    B[g + 8 >> 2] = f.clientHeight;
                    B[g + 12 >> 2] = innerWidth;
                    B[g + 16 >> 2] = innerHeight;
                    B[g + 20 >> 2] = outerWidth;
                    B[g + 24 >> 2] = outerHeight;
                    B[g + 28 >> 2] = pageXOffset;
                    B[g + 32 >> 2] = pageYOffset;
                    K(d)(10, g, b) && e.preventDefault()
                }
            }
        },
        fc: c
    })
}

function pc(a, b, c, d, e, f) {
    fc || (fc = A(1696));
    a = V(a);
    U({
        target: a,
        yc: "touchstart" == f || "touchend" == f,
        cc: f,
        ic: d,
        kc: function(g) {
            for (var l, p = {}, r = g.touches, q = 0; q < r.length; ++q) l = r[q], l.ad = l.ed = 0, p[l.identifier] = l;
            for (q = 0; q < g.changedTouches.length; ++q) l = g.changedTouches[q], l.ad = 1, p[l.identifier] = l;
            for (q = 0; q < g.targetTouches.length; ++q) p[g.targetTouches[q].identifier].ed = 1;
            r = fc;
            D[r >> 3] = g.timeStamp;
            var t = r >> 2;
            B[t + 3] = g.ctrlKey;
            B[t + 4] = g.shiftKey;
            B[t + 5] = g.altKey;
            B[t + 6] = g.metaKey;
            t += 7;
            var x = ic(a),
                pa = 0;
            for (q in p)
                if (l =
                    p[q], B[t] = l.identifier, B[t + 1] = l.screenX, B[t + 2] = l.screenY, B[t + 3] = l.clientX, B[t + 4] = l.clientY, B[t + 5] = l.pageX, B[t + 6] = l.pageY, B[t + 7] = l.ad, B[t + 8] = l.ed, B[t + 9] = l.clientX - x.left, B[t + 10] = l.clientY - x.top, t += 13, 31 < ++pa) break;
            B[r + 8 >> 2] = pa;
            K(d)(e, r, b) && g.preventDefault()
        },
        fc: c
    })
}

function qc(a, b, c, d, e, f) {
    a = {
        target: V(a),
        cc: f,
        ic: d,
        kc: function(g) {
            g = g || event;
            K(d)(e, 0, b) && g.preventDefault()
        },
        fc: c
    };
    U(a)
}

function rc(a, b, c, d) {
    gc || (gc = A(104));
    U({
        target: a,
        yc: !0,
        cc: "wheel",
        ic: d,
        kc: function(e) {
            e = e || event;
            var f = gc;
            kc(f, e, a);
            D[f + 72 >> 3] = e.deltaX;
            D[f + 80 >> 3] = e.deltaY;
            D[f + 88 >> 3] = e.deltaZ;
            B[f + 96 >> 2] = e.deltaMode;
            K(d)(9, f, b) && e.preventDefault()
        },
        fc: c
    })
}

function sc(a) {
    var b = a.getExtension("ANGLE_instanced_arrays");
    b && (a.vertexAttribDivisor = function(c, d) {
        b.vertexAttribDivisorANGLE(c, d)
    }, a.drawArraysInstanced = function(c, d, e, f) {
        b.drawArraysInstancedANGLE(c, d, e, f)
    }, a.drawElementsInstanced = function(c, d, e, f, g) {
        b.drawElementsInstancedANGLE(c, d, e, f, g)
    })
}

function tc(a) {
    var b = a.getExtension("OES_vertex_array_object");
    b && (a.createVertexArray = function() {
        return b.createVertexArrayOES()
    }, a.deleteVertexArray = function(c) {
        b.deleteVertexArrayOES(c)
    }, a.bindVertexArray = function(c) {
        b.bindVertexArrayOES(c)
    }, a.isVertexArray = function(c) {
        return b.isVertexArrayOES(c)
    })
}

function uc(a) {
    var b = a.getExtension("WEBGL_draw_buffers");
    b && (a.drawBuffers = function(c, d) {
        b.drawBuffersWEBGL(c, d)
    })
}

function vc(a) {
    a.ce = a.getExtension("WEBGL_multi_draw")
}
var wc = 1,
    xc = [],
    W = [],
    yc = [],
    Bc = [],
    Cc = [],
    X = [],
    Dc = [],
    Ec = {};

function Y(a) {
    Fc || (Fc = a)
}

function Gc(a) {
    for (var b = wc++, c = a.length; c < b; c++) a[c] = null;
    return b
}

function Hc(a, b) {
    a.rc || (a.rc = a.getContext, a.getContext = function(d, e) {
        e = a.rc(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    });
    var c = a.getContext("webgl", b);
    return c ? Ic(c, b) : 0
}

function Ic(a, b) {
    var c = Gc(Dc),
        d = {
            ae: c,
            attributes: b,
            version: b.Kd,
            Kc: a
        };
    a.canvas && (a.canvas.Ud = d);
    Dc[c] = d;
    ("undefined" == typeof b.Xc || b.Xc) && Jc(d);
    return c
}

function Jc(a) {
    a || (a = Kc);
    if (!a.Gd) {
        a.Gd = !0;
        var b = a.Kc;
        sc(b);
        tc(b);
        uc(b);
        b.Yd = b.getExtension("EXT_disjoint_timer_query");
        vc(b);
        (b.getSupportedExtensions() || []).forEach(function(c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        })
    }
}
var Fc, Kc, Lc = ["default", "low-power", "high-performance"],
    Mc = {};

function Nc() {
    if (!Oc) {
        var a = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: ca || "./this.program"
            },
            b;
        for (b in Mc) void 0 === Mc[b] ? delete a[b] : a[b] = Mc[b];
        var c = [];
        for (b in a) c.push(b + "=" + a[b]);
        Oc = c
    }
    return Oc
}
var Oc;

function Pc(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var f = Z[c](),
            g = f && Gc(d);
        f ? (f.name = g, d[g] = f) : Y(1282);
        B[b + 4 * e >> 2] = g
    }
}

function Qc(a, b) {
    if (b) {
        var c = void 0;
        switch (a) {
            case 36346:
                c = 1;
                break;
            case 36344:
                return;
            case 36345:
                c = 0;
                break;
            case 34466:
                var d = Z.getParameter(34467);
                c = d ? d.length : 0
        }
        if (void 0 === c) switch (d = Z.getParameter(a), typeof d) {
            case "number":
                c = d;
                break;
            case "boolean":
                c = d ? 1 : 0;
                break;
            case "string":
                Y(1280);
                return;
            case "object":
                if (null === d) switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 34068:
                        c = 0;
                        break;
                    default:
                        Y(1280);
                        return
                } else {
                    if (d instanceof Float32Array || d instanceof Uint32Array ||
                        d instanceof Int32Array || d instanceof Array) {
                        for (a = 0; a < d.length; ++a) B[b + 4 * a >> 2] = d[a];
                        return
                    }
                    try {
                        c = d.name | 0
                    } catch (e) {
                        Y(1280);
                        m("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + e + ")");
                        return
                    }
                }
                break;
            default:
                Y(1280);
                m("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" + a + ") and it returns " + d + " of type " + typeof d + "!");
                return
        }
        B[b >> 2] = c
    } else Y(1281)
}

function Rc(a) {
    var b = z(a) + 1,
        c = A(b);
    u(a, v, c, b);
    return c
}

function Sc(a) {
    return "]" == a.slice(-1) && a.lastIndexOf("[")
}

function Tc(a) {
    var b = Z.wd;
    if (b) {
        var c = b.xc[a];
        "number" == typeof c && (b.xc[a] = c = Z.getUniformLocation(b, b.od[a] + (0 < c ? "[" + c + "]" : "")));
        return c
    }
    Y(1282)
}
var Uc = [];

function rb(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.bc = a.bc;
    this.oc = null;
    this.id = jb++;
    this.name = b;
    this.mode = c;
    this.Tb = {};
    this.Vb = {};
    this.uc = d
}
Object.defineProperties(rb.prototype, {
    read: {
        get: function() {
            return 365 === (this.mode & 365)
        },
        set: function(a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function() {
            return 146 === (this.mode & 146)
        },
        set: function(a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    }
});
Kb();
Q = Array(4096);
La(N, "/");
I("/tmp");
I("/home");
I("/home/web_user");
(() => {
    I("/dev");
    Wa(259, {
        read: () => 0,
        write: (b, c, d, e) => e
    });
    Db("/dev/null", 259);
    Va(1280, Ya);
    Va(1536, Za);
    Db("/dev/tty", 1280);
    Db("/dev/tty1", 1536);
    var a = Sa();
    Ob("random", a);
    Ob("urandom", a);
    I("/dev/shm");
    I("/dev/shm/tmp")
})();
(() => {
    I("/proc");
    var a = I("/proc/self");
    I("/proc/self/fd");
    La({
        bc: () => {
            var b = ab(a, "fd", 16895, 73);
            b.Tb = {
                sc: (c, d) => {
                    var e = ib[+d];
                    if (!e) throw new M(8);
                    c = {
                        parent: null,
                        bc: {
                            tc: "fake"
                        },
                        Tb: {
                            vc: () => e.path
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
})();
for (var Z, Vc = new Float32Array(288), Wc = 0; 288 > Wc; ++Wc) Uc[Wc] = Vc.subarray(0, Wc + 1);
var dd = {
    na: function(a, b, c) {
        Qb = c;
        try {
            var d = S(a);
            switch (b) {
                case 0:
                    var e = Rb();
                    return 0 > e ? -28 : Ab(d, e).jc;
                case 1:
                case 2:
                    return 0;
                case 3:
                    return d.flags;
                case 4:
                    return e = Rb(), d.flags |= e, 0;
                case 5:
                    return e = Rb(), ta[e + 0 >> 1] = 2, 0;
                case 6:
                case 7:
                    return 0;
                case 16:
                case 8:
                    return -28;
                case 9:
                    return B[Xc() >> 2] = 28, -1;
                default:
                    return -28
            }
        } catch (f) {
            if ("undefined" == typeof R || !(f instanceof M)) throw f;
            return -f.Zb
        }
    },
    jb: function(a, b) {
        try {
            if (0 === b) return -28;
            var c = z("/") + 1;
            if (b < c) return -68;
            u("/", v, a, b);
            return c
        } catch (d) {
            if ("undefined" ==
                typeof R || !(d instanceof M)) throw d;
            return -d.Zb
        }
    },
    ma: function(a, b, c) {
        Qb = c;
        try {
            var d = S(a);
            switch (b) {
                case 21509:
                case 21505:
                    return d.Wb ? 0 : -59;
                case 21510:
                case 21511:
                case 21512:
                case 21506:
                case 21507:
                case 21508:
                    return d.Wb ? 0 : -59;
                case 21519:
                    if (!d.Wb) return -59;
                    var e = Rb();
                    return B[e >> 2] = 0;
                case 21520:
                    return d.Wb ? -28 : -59;
                case 21531:
                    a = e = Rb();
                    if (!d.Vb.Hd) throw new M(59);
                    return d.Vb.Hd(d, b, a);
                case 21523:
                    return d.Wb ? 0 : -59;
                case 21524:
                    return d.Wb ? 0 : -59;
                default:
                    n("bad ioctl syscall " + b)
            }
        } catch (f) {
            if ("undefined" == typeof R ||
                !(f instanceof M)) throw f;
            return -f.Zb
        }
    },
    mb: function(a, b, c, d) {
        Qb = d;
        try {
            b = y(b);
            b = Pb(a, b);
            var e = d ? Rb() : 0;
            return Gb(b, c, e).jc
        } catch (f) {
            if ("undefined" == typeof R || !(f instanceof M)) throw f;
            return -f.Zb
        }
    },
    fb: function(a, b, c, d) {
        try {
            b = y(b);
            b = Pb(a, b);
            if (0 >= d) return -28;
            var e = mb(b),
                f = Math.min(d, z(e)),
                g = w[c + f];
            u(e, v, c, d + 1);
            w[c + f] = g;
            return f
        } catch (l) {
            if ("undefined" == typeof R || !(l instanceof M)) throw l;
            return -l.Zb
        }
    },
    db: function(a) {
        try {
            return a = y(a), eb(a), 0
        } catch (b) {
            if ("undefined" == typeof R || !(b instanceof M)) throw b;
            return -b.Zb
        }
    },
    cb: function(a, b) {
        try {
            a = y(a);
            a: {
                var c = db;
                try {
                    var d = c(a)
                } catch (f) {
                    if (f && f.node && L(a) !== L(nb(f.node))) {
                        var e = -54;
                        break a
                    }
                    throw f;
                }
                B[b >> 2] = d.xd;B[b + 4 >> 2] = 0;B[b + 8 >> 2] = d.Nc;B[b + 12 >> 2] = d.mode;B[b + 16 >> 2] = d.Ld;B[b + 20 >> 2] = d.uid;B[b + 24 >> 2] = d.Fd;B[b + 28 >> 2] = d.uc;B[b + 32 >> 2] = 0;H = [d.size >>> 0, (G = d.size, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];B[b + 40 >> 2] = H[0];B[b + 44 >> 2] = H[1];B[b + 48 >> 2] = 4096;B[b + 52 >> 2] = d.td;B[b + 56 >> 2] = d.rd.getTime() /
                1E3 | 0;B[b + 60 >> 2] = 0;B[b + 64 >> 2] = d.Ec.getTime() / 1E3 | 0;B[b + 68 >> 2] = 0;B[b + 72 >> 2] = d.vd.getTime() / 1E3 | 0;B[b + 76 >> 2] = 0;H = [d.Nc >>> 0, (G = d.Nc, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];B[b + 80 >> 2] = H[0];B[b + 84 >> 2] = H[1];e = 0
            }
            return e
        } catch (f) {
            if ("undefined" == typeof R || !(f instanceof M)) throw f;
            return -f.Zb
        }
    },
    eb: function(a, b, c) {
        try {
            return b = y(b), b = Pb(a, b), 0 === c ? fb(b) : 512 === c ? eb(b) : n("Invalid flags passed to unlinkat"), 0
        } catch (d) {
            if ("undefined" ==
                typeof R || !(d instanceof M)) throw d;
            return -d.Zb
        }
    },
    nb: function() {
        return Date.now()
    },
    ob: function(a, b) {
        a = new Date(1E3 * B[a >> 2]);
        B[b >> 2] = a.getSeconds();
        B[b + 4 >> 2] = a.getMinutes();
        B[b + 8 >> 2] = a.getHours();
        B[b + 12 >> 2] = a.getDate();
        B[b + 16 >> 2] = a.getMonth();
        B[b + 20 >> 2] = a.getFullYear() - 1900;
        B[b + 24 >> 2] = a.getDay();
        var c = new Date(a.getFullYear(), 0, 1);
        B[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
        B[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
        var d = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
        c = c.getTimezoneOffset();
        B[b +
            32 >> 2] = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0
    },
    pb: Tb,
    q: function(a, b, c) {
        Ub.length = 0;
        var d;
        for (c >>= 2; d = v[b++];) c += 105 != d & c, Ub.push(105 == d ? B[c] : D[c++ >> 1]), ++c;
        return Ma[a].apply(null, Ub)
    },
    X: function() {
        return devicePixelRatio
    },
    ea: function(a, b, c) {
        a = V(a);
        if (!a) return -4;
        a = ic(a);
        D[b >> 3] = a.width;
        D[c >> 3] = a.height;
        return 0
    },
    qb: function(a, b, c) {
        v.copyWithin(a, b, b + c)
    },
    Ya: function(a, b) {
        function c(d) {
            K(a)(d, b) && requestAnimationFrame(c)
        }
        return requestAnimationFrame(c)
    },
    y: function() {
        n("OOM")
    },
    W: function(a,
        b, c) {
        a = V(a);
        if (!a) return -4;
        a.width = b;
        a.height = c;
        return 0
    },
    ia: function(a, b, c, d) {
        jc(a, b, c, d, 2, "keydown");
        return 0
    },
    ga: function(a, b, c, d) {
        jc(a, b, c, d, 1, "keypress");
        return 0
    },
    ha: function(a, b, c, d) {
        jc(a, b, c, d, 3, "keyup");
        return 0
    },
    ta: function(a, b, c, d) {
        lc(a, b, c, d, 5, "mousedown");
        return 0
    },
    la: function(a, b, c, d) {
        lc(a, b, c, d, 33, "mouseenter");
        return 0
    },
    ka: function(a, b, c, d) {
        lc(a, b, c, d, 34, "mouseleave");
        return 0
    },
    oa: function(a, b, c, d) {
        lc(a, b, c, d, 8, "mousemove");
        return 0
    },
    ra: function(a, b, c, d) {
        lc(a, b, c, d, 6, "mouseup");
        return 0
    },
    aa: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.rc || document.body.Tc || document.body.Sc)) return -1;
        a = V(a);
        if (!a) return -4;
        mc(a, b, c, d, "pointerlockchange");
        mc(a, b, c, d, "mozpointerlockchange");
        mc(a, b, c, d, "webkitpointerlockchange");
        mc(a, b, c, d, "mspointerlockchange");
        return 0
    },
    $: function(a, b, c, d) {
        if (!document || !(document.body.requestPointerLock || document.body.rc || document.body.Tc || document.body.Sc)) return -1;
        a = V(a);
        if (!a) return -4;
        nc(a, b, c, d, "pointerlockerror");
        nc(a, b, c, d, "mozpointerlockerror");
        nc(a, b, c, d, "webkitpointerlockerror");
        nc(a, b, c, d, "mspointerlockerror");
        return 0
    },
    Za: function(a, b, c, d) {
        oc(a, b, c, d);
        return 0
    },
    ba: function(a, b, c, d) {
        pc(a, b, c, d, 25, "touchcancel");
        return 0
    },
    ca: function(a, b, c, d) {
        pc(a, b, c, d, 23, "touchend");
        return 0
    },
    da: function(a, b, c, d) {
        pc(a, b, c, d, 24, "touchmove");
        return 0
    },
    fa: function(a, b, c, d) {
        pc(a, b, c, d, 22, "touchstart");
        return 0
    },
    _: function(a, b, c, d) {
        qc(a, b, c, d, 31, "webglcontextlost");
        return 0
    },
    Z: function(a, b, c, d) {
        qc(a, b, c, d, 32, "webglcontextrestored");
        return 0
    },
    ja: function(a, b, c, d) {
        a = V(a);
        return "undefined" != typeof a.onwheel ? (rc(a, b, c, d), 0) : -1
    },
    Q: function(a, b) {
        b >>= 2;
        b = {
            alpha: !!B[b],
            depth: !!B[b + 1],
            stencil: !!B[b + 2],
            antialias: !!B[b + 3],
            premultipliedAlpha: !!B[b + 4],
            preserveDrawingBuffer: !!B[b + 5],
            powerPreference: Lc[B[b + 6]],
            failIfMajorPerformanceCaveat: !!B[b + 7],
            Kd: B[b + 8],
            be: B[b + 9],
            Xc: B[b + 10],
            Ad: B[b + 11],
            ee: B[b + 12],
            he: B[b + 13]
        };
        a = V(a);
        return !a || b.Ad ? 0 : Hc(a, b)
    },
    Aa: function(a, b) {
        a = Dc[a];
        b = y(b);
        b.startsWith("GL_") && (b = b.substr(3));
        "ANGLE_instanced_arrays" == b &&
            sc(Z);
        "OES_vertex_array_object" == b && tc(Z);
        "WEBGL_draw_buffers" == b && uc(Z);
        "WEBGL_multi_draw" == b && vc(Z);
        return !!a.Kc.getExtension(b)
    },
    Ja: function(a) {
        a >>= 2;
        for (var b = 0; 14 > b; ++b) B[a + b] = 0;
        B[a] = B[a + 1] = B[a + 3] = B[a + 4] = B[a + 8] = B[a + 10] = 1
    },
    Ea: function(a) {
        Kc = Dc[a];
        h.Xd = Z = Kc && Kc.Kc;
        return !a || Z ? 0 : -5
    },
    hb: function(a, b) {
        var c = 0;
        Nc().forEach(function(d, e) {
            var f = b + c;
            e = B[a + 4 * e >> 2] = f;
            for (f = 0; f < d.length; ++f) w[e++ >> 0] = d.charCodeAt(f);
            w[e >> 0] = 0;
            c += d.length + 1
        });
        return 0
    },
    ib: function(a, b) {
        var c = Nc();
        B[a >> 2] = c.length;
        var d = 0;
        c.forEach(function(e) {
            d += e.length + 1
        });
        B[b >> 2] = d;
        return 0
    },
    pa: function(a) {
        try {
            var b = S(a);
            Hb(b);
            return 0
        } catch (c) {
            if ("undefined" == typeof R || !(c instanceof M)) throw c;
            return c.Zb
        }
    },
    gb: function(a, b) {
        try {
            var c = S(a);
            w[b >> 0] = c.Wb ? 2 : 16384 === (c.mode & 61440) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
            return 0
        } catch (d) {
            if ("undefined" == typeof R || !(d instanceof M)) throw d;
            return d.Zb
        }
    },
    lb: function(a, b, c, d) {
        try {
            a: {
                var e = S(a);a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = va[a >> 2],
                        l = va[a + 4 >> 2];
                    a += 8;
                    var p = e,
                        r = g,
                        q = l,
                        t = void 0,
                        x = w;
                    if (0 > q || 0 > t) throw new M(28);
                    if (null === p.jc) throw new M(8);
                    if (1 === (p.flags & 2097155)) throw new M(8);
                    if (16384 === (p.node.mode & 61440)) throw new M(31);
                    if (!p.Vb.read) throw new M(28);
                    var pa = "undefined" != typeof t;
                    if (!pa) t = p.position;
                    else if (!p.seekable) throw new M(70);
                    var zc = p.Vb.read(p, x, r, q, t);
                    pa || (p.position += zc);
                    var ub = zc;
                    if (0 > ub) {
                        var Ac = -1;
                        break a
                    }
                    b += ub;
                    if (ub < l) break
                }
                Ac = b
            }
            B[d >> 2] = Ac;
            return 0
        }
        catch (vb) {
            if ("undefined" == typeof R || !(vb instanceof M)) throw vb;
            return vb.Zb
        }
    },
    bb: function(a, b, c, d, e) {
        try {
            var f = S(a);
            a = 4294967296 * c + (b >>> 0);
            if (-9007199254740992 >= a || 9007199254740992 <= a) return 61;
            Ib(f, a, d);
            H = [f.position >>> 0, (G = f.position, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            B[e >> 2] = H[0];
            B[e + 4 >> 2] = H[1];
            f.Mc && 0 === a && 0 === d && (f.Mc = null);
            return 0
        } catch (g) {
            if ("undefined" == typeof R || !(g instanceof M)) throw g;
            return g.Zb
        }
    },
    kb: function(a, b, c, d) {
        try {
            a: {
                var e = S(a);a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = va[a >> 2],
                        l = va[a + 4 >> 2];
                    a += 8;
                    var p = Jb(e, w, g, l);
                    if (0 > p) {
                        var r = -1;
                        break a
                    }
                    b +=
                        p
                }
                r = b
            }
            B[d >> 2] = r;
            return 0
        }
        catch (q) {
            if ("undefined" == typeof R || !(q instanceof M)) throw q;
            return q.Zb
        }
    },
    b: function(a) {
        Z.activeTexture(a)
    },
    V: function(a, b) {
        Z.attachShader(W[a], X[b])
    },
    c: function(a, b) {
        Z.bindBuffer(a, xc[b])
    },
    S: function(a, b) {
        Z.bindFramebuffer(a, yc[b])
    },
    Ra: function(a, b) {
        Z.bindRenderbuffer(a, Bc[b])
    },
    a: function(a, b) {
        Z.bindTexture(a, Cc[b])
    },
    K: function(a, b, c, d) {
        Z.blendColor(a, b, c, d)
    },
    L: function(a, b) {
        Z.blendEquationSeparate(a, b)
    },
    M: function(a, b, c, d) {
        Z.blendFuncSeparate(a, b, c, d)
    },
    Ta: function(a, b,
        c, d) {
        Z.bufferData(a, c ? v.subarray(c, c + b) : b, d)
    },
    w: function(a, b, c, d) {
        Z.bufferSubData(a, b, v.subarray(d, d + c))
    },
    Fa: function(a) {
        Z.clear(a)
    },
    Ha: function(a, b, c, d) {
        Z.clearColor(a, b, c, d)
    },
    R: function(a) {
        Z.clearDepth(a)
    },
    Ga: function(a) {
        Z.clearStencil(a)
    },
    i: function(a, b, c, d) {
        Z.colorMask(!!a, !!b, !!c, !!d)
    },
    sb: function(a) {
        Z.compileShader(X[a])
    },
    Oa: function(a, b, c, d, e, f, g, l) {
        Z.compressedTexImage2D(a, b, c, d, e, f, l ? v.subarray(l, l + g) : null)
    },
    Ma: function() {
        var a = Gc(W),
            b = Z.createProgram();
        b.name = a;
        b.Cc = b.Ac = b.Bc = 0;
        b.Rc = 1;
        W[a] =
            b;
        return a
    },
    ub: function(a) {
        var b = Gc(X);
        X[b] = Z.createShader(a);
        return b
    },
    J: function(a) {
        Z.cullFace(a)
    },
    yb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = B[b + 4 * c >> 2],
                e = xc[d];
            e && (Z.deleteBuffer(e), e.name = 0, xc[d] = null)
        }
    },
    h: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = B[b + 4 * c >> 2],
                e = yc[d];
            e && (Z.deleteFramebuffer(e), e.name = 0, yc[d] = null)
        }
    },
    x: function(a) {
        if (a) {
            var b = W[a];
            b ? (Z.deleteProgram(b), b.name = 0, W[a] = null) : Y(1281)
        }
    },
    sa: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = B[b + 4 * c >> 2],
                e = Bc[d];
            e && (Z.deleteRenderbuffer(e), e.name =
                0, Bc[d] = null)
        }
    },
    v: function(a) {
        if (a) {
            var b = X[a];
            b ? (Z.deleteShader(b), X[a] = null) : Y(1281)
        }
    },
    xb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = B[b + 4 * c >> 2],
                e = Cc[d];
            e && (Z.deleteTexture(e), e.name = 0, Cc[d] = null)
        }
    },
    t: function(a) {
        Z.depthFunc(a)
    },
    u: function(a) {
        Z.depthMask(!!a)
    },
    d: function(a) {
        Z.disable(a)
    },
    H: function(a) {
        Z.disableVertexAttribArray(a)
    },
    ya: function(a, b, c) {
        Z.drawArrays(a, b, c)
    },
    za: function(a, b, c, d) {
        Z.drawElements(a, b, c, d)
    },
    e: function(a) {
        Z.enable(a)
    },
    Ba: function(a) {
        Z.enableVertexAttribArray(a)
    },
    I: function(a) {
        Z.frontFace(a)
    },
    Ua: function(a, b) {
        Pc(a, b, "createBuffer", xc)
    },
    Sa: function(a, b) {
        Pc(a, b, "createRenderbuffer", Bc)
    },
    Pa: function(a, b) {
        Pc(a, b, "createTexture", Cc)
    },
    Ia: function(a, b) {
        return Z.getAttribLocation(W[a], y(b))
    },
    f: function(a, b) {
        Qc(a, b)
    },
    Ka: function(a, b, c, d) {
        a = Z.getProgramInfoLog(W[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, v, d, b) : 0;
        c && (B[c >> 2] = b)
    },
    U: function(a, b, c) {
        if (c)
            if (a >= wc) Y(1281);
            else if (a = W[a], 35716 == b) a = Z.getProgramInfoLog(a), null === a && (a = "(unknown error)"), B[c >> 2] = a.length + 1;
        else if (35719 == b) {
            if (!a.Cc)
                for (b =
                    0; b < Z.getProgramParameter(a, 35718); ++b) a.Cc = Math.max(a.Cc, Z.getActiveUniform(a, b).name.length + 1);
            B[c >> 2] = a.Cc
        } else if (35722 == b) {
            if (!a.Ac)
                for (b = 0; b < Z.getProgramParameter(a, 35721); ++b) a.Ac = Math.max(a.Ac, Z.getActiveAttrib(a, b).name.length + 1);
            B[c >> 2] = a.Ac
        } else if (35381 == b) {
            if (!a.Bc)
                for (b = 0; b < Z.getProgramParameter(a, 35382); ++b) a.Bc = Math.max(a.Bc, Z.getActiveUniformBlockName(a, b).length + 1);
            B[c >> 2] = a.Bc
        } else B[c >> 2] = Z.getProgramParameter(a, b);
        else Y(1281)
    },
    rb: function(a, b, c, d) {
        a = Z.getShaderInfoLog(X[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, v, d, b) : 0;
        c && (B[c >> 2] = b)
    },
    qa: function(a, b, c) {
        c ? 35716 == b ? (a = Z.getShaderInfoLog(X[a]), null === a && (a = "(unknown error)"), B[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = Z.getShaderSource(X[a]), B[c >> 2] = a ? a.length + 1 : 0) : B[c >> 2] = Z.getShaderParameter(X[a], b) : Y(1281)
    },
    Va: function(a) {
        var b = Ec[a];
        if (!b) {
            switch (a) {
                case 7939:
                    b = Z.getSupportedExtensions() || [];
                    b = b.concat(b.map(function(d) {
                        return "GL_" + d
                    }));
                    b = Rc(b.join(" "));
                    break;
                case 7936:
                case 7937:
                case 37445:
                case 37446:
                    (b = Z.getParameter(a)) ||
                    Y(1280);
                    b = b && Rc(b);
                    break;
                case 7938:
                    b = Rc("OpenGL ES 2.0 (" + Z.getParameter(7938) + ")");
                    break;
                case 35724:
                    b = Z.getParameter(35724);
                    var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                    null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                    b = Rc(b);
                    break;
                default:
                    Y(1280)
            }
            Ec[a] = b
        }
        return b
    },
    m: function(a, b) {
        b = y(b);
        if (a = W[a]) {
            var c = a,
                d = c.xc,
                e = c.pd,
                f;
            if (!d)
                for (c.xc = d = {}, c.od = {}, f = 0; f < Z.getProgramParameter(c, 35718); ++f) {
                    var g = Z.getActiveUniform(c, f);
                    var l = g.name;
                    g = g.size;
                    var p = Sc(l);
                    p = 0 < p ? l.slice(0, p) : l;
                    var r = c.Rc;
                    c.Rc += g;
                    e[p] = [g, r];
                    for (l = 0; l < g; ++l) d[r] = l, c.od[r++] = p
                }
            c = a.xc;
            d = 0;
            e = b;
            f = Sc(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0, e = b.slice(0, f));
            if ((e = a.pd[e]) && d < e[0] && (d += e[1], c[d] = c[d] || Z.getUniformLocation(a, b))) return d
        } else Y(1281);
        return -1
    },
    La: function(a) {
        a = W[a];
        Z.linkProgram(a);
        a.xc = 0;
        a.pd = {}
    },
    P: function(a, b) {
        Z.polygonOffset(a, b)
    },
    Qa: function(a, b, c, d) {
        Z.renderbufferStorage(a, b, c, d)
    },
    k: function(a, b, c, d) {
        Z.scissor(a, b, c, d)
    },
    tb: function(a, b, c, d) {
        for (var e = "", f = 0; f < b; ++f) {
            var g =
                d ? B[d + 4 * f >> 2] : -1;
            e += y(B[c + 4 * f >> 2], 0 > g ? void 0 : g)
        }
        Z.shaderSource(X[a], e)
    },
    wb: function(a, b, c) {
        Z.stencilFunc(a, b, c)
    },
    O: function(a, b, c, d) {
        Z.stencilFuncSeparate(a, b, c, d)
    },
    s: function(a) {
        Z.stencilMask(a)
    },
    vb: function(a, b, c) {
        Z.stencilOp(a, b, c)
    },
    N: function(a, b, c, d) {
        Z.stencilOpSeparate(a, b, c, d)
    },
    Na: function(a, b, c, d, e, f, g, l, p) {
        var r = Z,
            q = r.texImage2D;
        if (p) {
            var t = l - 5120;
            t = 1 == t ? v : 4 == t ? B : 6 == t ? C : 5 == t || 28922 == t ? va : ua;
            var x = 31 - Math.clz32(t.BYTES_PER_ELEMENT);
            p = t.subarray(p >> x, p + e * (d * ({
                5: 3,
                6: 4,
                8: 2,
                29502: 3,
                29504: 4
            }[g -
                6402
            ] || 1) * (1 << x) + 4 - 1 & -4) >> x)
        } else p = null;
        q.call(r, a, b, c, d, e, f, g, l, p)
    },
    g: function(a, b, c) {
        Z.texParameteri(a, b, c)
    },
    G: function(a, b, c) {
        if (288 >= b)
            for (var d = Uc[b - 1], e = 0; e < b; ++e) d[e] = C[c + 4 * e >> 2];
        else d = C.subarray(c >> 2, c + 4 * b >> 2);
        Z.uniform1fv(Tc(a), d)
    },
    T: function(a, b) {
        Z.uniform1i(Tc(a), b)
    },
    F: function(a, b, c) {
        if (144 >= b)
            for (var d = Uc[2 * b - 1], e = 0; e < 2 * b; e += 2) d[e] = C[c + 4 * e >> 2], d[e + 1] = C[c + (4 * e + 4) >> 2];
        else d = C.subarray(c >> 2, c + 8 * b >> 2);
        Z.uniform2fv(Tc(a), d)
    },
    E: function(a, b, c) {
        if (96 >= b)
            for (var d = Uc[3 * b - 1], e = 0; e < 3 * b; e += 3) d[e] =
                C[c + 4 * e >> 2], d[e + 1] = C[c + (4 * e + 4) >> 2], d[e + 2] = C[c + (4 * e + 8) >> 2];
        else d = C.subarray(c >> 2, c + 12 * b >> 2);
        Z.uniform3fv(Tc(a), d)
    },
    D: function(a, b, c) {
        if (72 >= b) {
            var d = Uc[4 * b - 1],
                e = C;
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
                var g = c + f;
                d[f] = e[g];
                d[f + 1] = e[g + 1];
                d[f + 2] = e[g + 2];
                d[f + 3] = e[g + 3]
            }
        } else d = C.subarray(c >> 2, c + 16 * b >> 2);
        Z.uniform4fv(Tc(a), d)
    },
    C: function(a, b, c, d) {
        if (18 >= b) {
            var e = Uc[16 * b - 1],
                f = C;
            d >>= 2;
            for (var g = 0; g < 16 * b; g += 16) {
                var l = d + g;
                e[g] = f[l];
                e[g + 1] = f[l + 1];
                e[g + 2] = f[l + 2];
                e[g + 3] = f[l + 3];
                e[g + 4] = f[l + 4];
                e[g + 5] = f[l + 5];
                e[g + 6] = f[l + 6];
                e[g +
                    7] = f[l + 7];
                e[g + 8] = f[l + 8];
                e[g + 9] = f[l + 9];
                e[g + 10] = f[l + 10];
                e[g + 11] = f[l + 11];
                e[g + 12] = f[l + 12];
                e[g + 13] = f[l + 13];
                e[g + 14] = f[l + 14];
                e[g + 15] = f[l + 15]
            }
        } else e = C.subarray(d >> 2, d + 64 * b >> 2);
        Z.uniformMatrix4fv(Tc(a), !!c, e)
    },
    j: function(a) {
        a = W[a];
        Z.useProgram(a);
        Z.wd = a
    },
    Ca: function(a, b) {
        Z.vertexAttribDivisor(a, b)
    },
    Da: function(a, b, c, d, e, f) {
        Z.vertexAttribPointer(a, b, c, !!d, e, f)
    },
    l: function(a, b, c, d) {
        Z.viewport(a, b, c, d)
    },
    ab: function() {
        h.gd = function(a) {
            0 != Yc() && (a.preventDefault(), a.returnValue = " ")
        };
        window.addEventListener("beforeunload",
            h.gd)
    },
    $a: function() {
        h.md = function(a) {
            a = a.clipboardData.getData("text");
            ja("_sapp_emsc_onpaste", ["string"], [a])
        };
        window.addEventListener("paste", h.md)
    },
    _a: function(a) {
        h.ie = [];
        a = y(a);
        a = document.getElementById(a);
        h.hd = function(b) {
            b.stopPropagation();
            b.preventDefault()
        };
        h.jd = function(b) {
            b.stopPropagation();
            b.preventDefault()
        };
        h.kd = function(b) {
            b.stopPropagation();
            b.preventDefault()
        };
        h.ld = function(b) {
            b.stopPropagation();
            b.preventDefault();
            var c = b.dataTransfer.files;
            h.Qc = c;
            Zc(c.length);
            var d;
            for (d = 0; d <
                c.length; d++) ja("_sapp_emsc_drop", ["number", "string"], [d, c[d].name]);
            $c(b.clientX, b.clientY)
        };
        a.addEventListener("dragenter", h.hd, !1);
        a.addEventListener("dragleave", h.jd, !1);
        a.addEventListener("dragover", h.kd, !1);
        a.addEventListener("drop", h.ld, !1)
    },
    p: function() {
        var a = document.createElement("input");
        a.type = "text";
        a.id = "_sokol_app_input_element";
        a.autocapitalize = "none";
        a.addEventListener("focusout", function() {
            ad()
        });
        document.body.append(a)
    },
    Y: function(a) {
        return 0 > a || a >= h.Qc.length ? 0 : h.Qc[a].size
    },
    Wa: function(a,
        b, c, d, e) {
        var f = new FileReader;
        f.onload = function(g) {
            g = g.target.result;
            g.byteLength > d ? bd(a, 0, 1, b, 0, c, d, e) : (v.set(new Uint8Array(g), c), bd(a, 1, 0, b, g.byteLength, c, d, e))
        };
        f.onerror = function() {
            bd(a, 0, 2, b, 0, c, d, e)
        };
        f.readAsArrayBuffer(h.Qc[a])
    },
    o: function() {
        document.getElementById("_sokol_app_input_element").focus()
    },
    Bb: function(a) {
        a = y(a);
        h.wc = document.getElementById(a);
        h.wc || console.log("sokol_app.h: invalid target:" + a);
        h.wc.requestPointerLock || console.log("sokol_app.h: target doesn't support requestPointerLock:" +
            a)
    },
    ua: function() {
        window.removeEventListener("beforeunload", h.gd)
    },
    Ab: function() {
        window.removeEventListener("paste", h.md)
    },
    zb: function(a) {
        a = y(a);
        a = document.getElementById(a);
        a.removeEventListener("dragenter", h.hd);
        a.removeEventListener("dragleave", h.jd);
        a.removeEventListener("dragover", h.kd);
        a.removeEventListener("drop", h.ld)
    },
    z: function() {
        h.wc && h.wc.requestPointerLock && h.wc.requestPointerLock()
    },
    n: function() {
        document.getElementById("_sokol_app_input_element").blur()
    },
    Xa: function(a) {
        a = y(a);
        var b =
            document.createElement("textarea");
        b.setAttribute("autocomplete", "off");
        b.setAttribute("autocorrect", "off");
        b.setAttribute("autocapitalize", "off");
        b.setAttribute("spellcheck", "false");
        b.style.left = "-100px";
        b.style.top = "-100px";
        b.style.height = 1;
        b.style.width = 1;
        b.value = a;
        document.body.appendChild(b);
        b.select();
        document.execCommand("copy");
        document.body.removeChild(b)
    },
    va: function() {
        return h.hc ? h.hc.bufferSize : 0
    },
    xa: function(a, b, c) {
        h.Yb = null;
        h.hc = null;
        "undefined" !== typeof AudioContext ? h.Yb = new AudioContext({
            sampleRate: a,
            latencyHint: "interactive"
        }) : "undefined" !== typeof webkitAudioContext ? h.Yb = new webkitAudioContext({
            sampleRate: a,
            latencyHint: "interactive"
        }) : (h.Yb = null, console.log("sokol_audio.h: no WebAudio support"));
        return h.Yb ? (console.log("sokol_audio.h: sample rate ", h.Yb.sampleRate), h.hc = h.Yb.createScriptProcessor(c, 0, b), h.hc.onaudioprocess = function(d) {
            var e = d.outputBuffer.length,
                f = cd(e);
            if (f)
                for (var g = d.outputBuffer.numberOfChannels, l = 0; l < g; l++)
                    for (var p = d.outputBuffer.getChannelData(l), r = 0; r < e; r++) p[r] = C[(f >>
                        2) + (g * r + l)]
        }, h.hc.connect(h.Yb.destination), a = function() {
            h.Yb && "suspended" === h.Yb.state && h.Yb.resume()
        }, document.addEventListener("click", a, {
            once: !0
        }), document.addEventListener("touchstart", a, {
            once: !0
        }), document.addEventListener("keydown", a, {
            once: !0
        }), 1) : 0
    },
    wa: function() {
        return h.Yb ? h.Yb.sampleRate : 0
    },
    B: function() {
        null !== h.Yb && (h.hc && h.hc.disconnect(), h.Yb.close(), h.Yb = null, h.hc = null)
    },
    A: function() {
        return navigator.userAgent.includes("Macintosh") ? 1 : 0
    },
    r: function() {
        return performance.now()
    }
};
(function() {
    function a(e) {
        h.asm = e.exports;
        ha = h.asm.Cb;
        sa = e = ha.buffer;
        h.HEAP8 = w = new Int8Array(e);
        h.HEAP16 = ta = new Int16Array(e);
        h.HEAP32 = B = new Int32Array(e);
        h.HEAPU8 = v = new Uint8Array(e);
        h.HEAPU16 = ua = new Uint16Array(e);
        h.HEAPU32 = va = new Uint32Array(e);
        h.HEAPF32 = C = new Float32Array(e);
        h.HEAPF64 = D = new Float64Array(e);
        wa = h.asm.Fb;
        ya.unshift(h.asm.Db);
        E--;
        h.monitorRunDependencies && h.monitorRunDependencies(E);
        0 == E && (null !== Da && (clearInterval(Da), Da = null), Ea && (e = Ea, Ea = null, e()))
    }

    function b(e) {
        a(e.instance)
    }

    function c(e) {
        return Ia().then(function(f) {
            return WebAssembly.instantiate(f, d)
        }).then(function(f) {
            return f
        }).then(e, function(f) {
            m("failed to asynchronously prepare wasm: " + f);
            n(f)
        })
    }
    var d = {
        a: dd
    };
    E++;
    h.monitorRunDependencies && h.monitorRunDependencies(E);
    if (h.instantiateWasm) try {
        return h.instantiateWasm(d, a)
    } catch (e) {
        return m("Module.instantiateWasm callback failed with error: " + e), !1
    }(function() {
        return fa || "function" != typeof WebAssembly.instantiateStreaming || Fa() || "function" != typeof fetch ? c(b) : fetch(F, {
            credentials: "same-origin"
        }).then(function(e) {
            return WebAssembly.instantiateStreaming(e, d).then(b, function(f) {
                m("wasm streaming compile failed: " + f);
                m("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    })();
    return {}
})();
h.___wasm_call_ctors = function() {
    return (h.___wasm_call_ctors = h.asm.Db).apply(null, arguments)
};
var A = h._malloc = function() {
        return (A = h._malloc = h.asm.Eb).apply(null, arguments)
    },
    ad = h.__sapp_emsc_notify_keyboard_hidden = function() {
        return (ad = h.__sapp_emsc_notify_keyboard_hidden = h.asm.Gb).apply(null, arguments)
    };
h.__sapp_emsc_onpaste = function() {
    return (h.__sapp_emsc_onpaste = h.asm.Hb).apply(null, arguments)
};
var Yc = h.__sapp_html5_get_ask_leave_site = function() {
        return (Yc = h.__sapp_html5_get_ask_leave_site = h.asm.Ib).apply(null, arguments)
    },
    Zc = h.__sapp_emsc_begin_drop = function() {
        return (Zc = h.__sapp_emsc_begin_drop = h.asm.Jb).apply(null, arguments)
    };
h.__sapp_emsc_drop = function() {
    return (h.__sapp_emsc_drop = h.asm.Kb).apply(null, arguments)
};
var $c = h.__sapp_emsc_end_drop = function() {
        return ($c = h.__sapp_emsc_end_drop = h.asm.Lb).apply(null, arguments)
    },
    bd = h.__sapp_emsc_invoke_fetch_cb = function() {
        return (bd = h.__sapp_emsc_invoke_fetch_cb = h.asm.Mb).apply(null, arguments)
    };
h._main = function() {
    return (h._main = h.asm.Nb).apply(null, arguments)
};
var cd = h.__saudio_emsc_pull = function() {
        return (cd = h.__saudio_emsc_pull = h.asm.Ob).apply(null, arguments)
    },
    Xc = h.___errno_location = function() {
        return (Xc = h.___errno_location = h.asm.Pb).apply(null, arguments)
    },
    la = h.stackSave = function() {
        return (la = h.stackSave = h.asm.Qb).apply(null, arguments)
    },
    ma = h.stackRestore = function() {
        return (ma = h.stackRestore = h.asm.Rb).apply(null, arguments)
    },
    ka = h.stackAlloc = function() {
        return (ka = h.stackAlloc = h.asm.Sb).apply(null, arguments)
    },
    ed;

function fd(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
Ea = function gd() {
    ed || hd();
    ed || (Ea = gd)
};

function hd(a) {
    function b() {
        if (!ed && (ed = !0, h.calledRun = !0, !ia)) {
            h.noFSInit || Lb || (Lb = !0, Kb(), h.stdin = h.stdin, h.stdout = h.stdout, h.stderr = h.stderr, h.stdin ? Ob("stdin", h.stdin) : Eb("/dev/tty", "/dev/stdin"), h.stdout ? Ob("stdout", null, h.stdout) : Eb("/dev/tty", "/dev/stdout"), h.stderr ? Ob("stderr", null, h.stderr) : Eb("/dev/tty1", "/dev/stderr"), Gb("/dev/stdin", 0), Gb("/dev/stdout", 1), Gb("/dev/stderr", 1));
            kb = !1;
            Na(ya);
            Na(za);
            if (h.onRuntimeInitialized) h.onRuntimeInitialized();
            if (jd) {
                var c = a,
                    d = h._main;
                c = c || [];
                var e =
                    c.length + 1,
                    f = ka(4 * (e + 1));
                B[f >> 2] = ra(ca);
                for (var g = 1; g < e; g++) B[(f >> 2) + g] = ra(c[g - 1]);
                B[(f >> 2) + e] = 0;
                try {
                    var l = d(e, f);
                    if (!noExitRuntime) {
                        if (h.onExit) h.onExit(l);
                        ia = !0
                    }
                    da(l, new fd(l))
                } catch (p) {
                    p instanceof fd || "unwind" == p || da(1, p)
                } finally {}
            }
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length;) c = h.postRun.shift(), Ba.unshift(c);
            Na(Ba)
        }
    }
    a = a || ba;
    if (!(0 < E)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length;) Ca();
        Na(xa);
        0 < E || (h.setStatus ? (h.setStatus("Running..."),
            setTimeout(function() {
                setTimeout(function() {
                    h.setStatus("")
                }, 1);
                b()
            }, 1)) : b())
    }
}
h.run = hd;
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length;) h.preInit.pop()();
var jd = !0;
h.noInitialRun && (jd = !1);
hd();