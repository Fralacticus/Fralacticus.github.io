import {
    S as e,
    i as t,
    s as n,
    e as s,
    a as l,
    b as r,
    c as a,
    d as o,
    l as c,
    f as i,
    n as $,
    g as u,
    r as p,
    h as d,
    u as f,
    j as m,
    k as g,
    t as x,
    m as w,
    o as C,
    p as h,
    q as y,
    v,
    w as k,
    x as b,
    y as M,
    z as F,
    A as G,
    B as L,
    C as V,
    D as H,
    E as S,
    F as K,
    G as j,
    H as B,
    I as _,
    J as A,
    M as R
} from "./vendor.e949d05d.js";



function D(e) {
    let t, n, d, f, m, g, x, w, C;
    return {
        c() {
            t = s("nav"), n = s("div"), n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>', d = l(), f = s("div"), m = s("button"), m.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>', g = l(), x = s("button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>', r(n, "class", "text-pink lg:invisible"), r(f, "class", "text-pink flex space-x-4"), r(t, "class", "bg-purple h-10 w-full justify-between items-center p-2.5 flex lg:hidden")
        },
        m(s, l) {
            a(s, t, l), o(t, n), o(t, d), o(t, f), o(f, m), o(f, g), o(f, x), w || (C = [c(n, "click", (function() {
                i(e[2]) && e[2].apply(this, arguments)
            })), c(m, "click", (function() {
                i(e[0]) && e[0].apply(this, arguments)
            })), c(x, "click", (function() {
                i(e[1]) && e[1].apply(this, arguments)
            }))], w = !0)
        },
        p(t, [n]) {
            e = t
        },
        i: $,
        o: $,
        d(e) {
            e && u(t), w = !1, p(C)
        }
    }
}

function Z(e, t, n) {
    let {
        loadFile: s
    } = t, {
        saveFile: l
    } = t, {
        openDrawer: r = (() => {})
    } = t;
    return e.$$set = e => {
        "loadFile" in e && n(0, s = e.loadFile), "saveFile" in e && n(1, l = e.saveFile), "openDrawer" in e && n(2, r = e.openDrawer)
    }, [s, l, r]
}! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
class P extends e {
    constructor(e) {
        super(), t(this, e, Z, D, n, {
            loadFile: 0,
            saveFile: 1,
            openDrawer: 2
        })
    }
}

function U(e) {
    let t = {};
    return t.A = e.getKeyA(), t.B = e.getKeyB(), t.Start = e.getKeyStart(), t.Select = e.getKeySelect(), t.R = e.getKeyR(), t.L = e.getKeyL(), t.Up = e.getKeyUp(), t.Down = e.getKeyDown(), t.Left = e.getKeyLeft(), t.Right = e.getKeyRight(), t.Forward = e.getKeyForward(), t
}

function O(e) {
    let t, n, l, o, i;
    const $ = e[3].default,
        p = d($, e, e[2], null);
    return {
        c() {
            t = s("li"), p && p.c(), r(t, "class", n = e[0] ? "text-white text-opacity-50 select-none" : e[1] ? z : `${E} ${z}`)
        },
        m(n, s) {
            a(n, t, s), p && p.m(t, null), l = !0, o || (i = c(t, "click", e[4]), o = !0)
        },
        p(e, [s]) {
            p && p.p && (!l || 4 & s) && f(p, $, e, e[2], l ? g($, e[2], s, null) : m(e[2]), null), (!l || 3 & s && n !== (n = e[0] ? "text-white text-opacity-50 select-none" : e[1] ? z : `${E} ${z}`)) && r(t, "class", n)
        },
        i(e) {
            l || (x(p, e), l = !0)
        },
        o(e) {
            w(p, e), l = !1
        },
        d(e) {
            e && u(t), p && p.d(e), o = !1, i()
        }
    }
}
let E = "cursor-pointer hover:text-pink active:text-white underline",
    z = "select-none  w-min";

function I(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: l
    } = t, {
        disabled: r = !1
    } = t, {
        noHover: a = !1
    } = t;
    return e.$$set = e => {
        "disabled" in e && n(0, r = e.disabled), "noHover" in e && n(1, a = e.noHover), "$$scope" in e && n(2, l = e.$$scope)
    }, [r, a, l, s, function(t) {
        C.call(this, e, t)
    }]
}
class N extends e {
    constructor(e) {
        super(), t(this, e, I, O, n, {
            disabled: 0,
            noHover: 1
        })
    }
}

function q(e) {
    let t, n, i, d, f, m, g, x, w, C, h;
    return {
        c() {
            t = s("div"), n = s("p"), n.textContent = "Pick what to bind:", i = l(), d = s("div"), f = l(), m = s("div"), g = s("button"), g.textContent = "Cancel", x = l(), w = s("button"), w.textContent = "Okay", r(n, "class", "text-4xl"), r(d, "class", "flex-grow py-6 h-10 flex items-center justify-around "), r(d, "id", "popupCont"), r(g, "class", "border-2 rounded-lg p-1"), r(w, "class", "border-2 rounded-lg p-1"), r(m, "class", "w-full text-xl flex justify-evenly"), r(t, "class", "flex flex-col items-center space-y-2")
        },
        m(s, l) {
            a(s, t, l), o(t, n), o(t, i), o(t, d), o(t, f), o(t, m), o(m, g), o(m, x), o(m, w), C || (h = [c(g, "click", e[0]), c(w, "click", e[1])], C = !0)
        },
        p: $,
        i: $,
        o: $,
        d(e) {
            e && u(t), C = !1, p(h)
        }
    }
}

function T(e, t, n) {
    let {
        onOkay: s = (e => {})
    } = t, {
        onCancel: l = (() => {})
    } = t, r = null;
    const {
        close: a
    } = h("simple-modal");
    return y((() => {
        let e = document.createElement("input");
        e.className = "bg-lightgray h-10 p-2 text-center uppercase", e.placeholder = "Type key", e.addEventListener("keydown", (t => {
            t.stopPropagation(), t.preventDefault(), t.key.startsWith("Arrow") ? (r = t.key.substr(5), e.value = r) : (r = t.key, e.value = r)
        })), document.getElementById("popupCont").appendChild(e), e.focus()
    })), e.$$set = e => {
        "onOkay" in e && n(2, s = e.onOkay), "onCancel" in e && n(3, l = e.onCancel)
    }, [function() {
        l(), a()
    }, function() {
        s(r.toUpperCase()), a()
    }, s, l]
}
class W extends e {
    constructor(e) {
        super(), t(this, e, T, q, n, {
            onOkay: 2,
            onCancel: 3
        })
    }
}

function J(e) {
    let t;
    return {
        c() {
            t = k("Load Game")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Q(e) {
    let t;
    return {
        c() {
            t = k("Save Game")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function X(e) {
    let t;
    return {
        c() {
            t = k("Load SaveState")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Y(e) {
    let t;
    return {
        c() {
            t = k("Save SaveState")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function ee(e) {
    let t, n, s = e[0].A ? `(${e[0].A})` : "";
    return {
        c() {
            t = k("A "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].A ? `(${e[0].A})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function te(e) {
    let t, n, s = e[0].B ? `(${e[0].B})` : "";
    return {
        c() {
            t = k("B "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].B ? `(${e[0].B})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function ne(e) {
    let t, n, s = e[0].Up ? `(${e[0].Up})` : "";
    return {
        c() {
            t = k("Up "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Up ? `(${e[0].Up})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function se(e) {
    let t, n, s = e[0].Down ? `(${e[0].Down})` : "";
    return {
        c() {
            t = k("Down "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Down ? `(${e[0].Down})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function le(e) {
    let t, n, s = e[0].Left ? `(${e[0].Left})` : "";
    return {
        c() {
            t = k("Left "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Left ? `(${e[0].Left})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function re(e) {
    let t, n, s = e[0].Right ? `(${e[0].Right})` : "";
    return {
        c() {
            t = k("Right "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Right ? `(${e[0].Right})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function ae(e) {
    let t, n, s = e[0].Start ? `(${e[0].Start})` : "";
    return {
        c() {
            t = k("Start "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Start ? `(${e[0].Start})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function oe(e) {
    let t, n, s = e[0].Select ? `(${e[0].Select})` : "";
    return {
        c() {
            t = k("Select "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Select ? `(${e[0].Select})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function ce(e) {
    let t, n, s = e[0].Forward ? `(${e[0].Forward})` : "";
    return {
        c() {
            t = k("Forward "), n = k(s)
        },
        m(e, s) {
            a(e, t, s), a(e, n, s)
        },
        p(e, t) {
            1 & t && s !== (s = e[0].Forward ? `(${e[0].Forward})` : "") && G(n, s)
        },
        d(e) {
            e && u(t), e && u(n)
        }
    }
}

function ie(e) {
    let t;
    return {
        c() {
            t = k("Mute Sound")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function $e(e) {
    let t;
    return {
        c() {
            t = k("Unmute Sound")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function ue(e) {
    let t;
    return {
        c() {
            t = k("Load Cheats")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function pe(e) {
    let t;
    return {
        c() {
            t = k("Save Cheats")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function de(e) {
    let t;
    return {
        c() {
            t = k("Import Mappings")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function fe(e) {
    let t;
    return {
        c() {
            t = k("Export Mappings")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function me(e) {
    let t, n, $, d, f, m, g, C, h, y, V, H, S, K, j, B, _, A, R, D, Z, P, U, O, E, z, I, q, T, W, me, ge, xe, we, Ce, he, ye, ve, ke, be, Me, Fe, Ge, Le, Ve, He, Se, Ke, je, Be, _e, Ae, Re, De, Ze, Pe, Ue, Oe, Ee, ze, Ie, Ne, qe, Te, We, Je, Qe, Xe, Ye, et, tt, nt, st, lt, rt, at, ot, ct, it, $t, ut;
    return g = new N({
        props: {
            $$slots: {
                default: [J]
            },
            $$scope: {
                ctx: e
            }
        }
    }), g.$on("click", (function() {
        i(e[1]) && e[1].apply(this, arguments)
    })), h = new N({
        props: {
            $$slots: {
                default: [Q]
            },
            $$scope: {
                ctx: e
            }
        }
    }), h.$on("click", (function() {
        i(e[2]) && e[2].apply(this, arguments)
    })), V = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [X]
            },
            $$scope: {
                ctx: e
            }
        }
    }), S = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [Y]
            },
            $$scope: {
                ctx: e
            }
        }
    }), D = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [ee]
            },
            $$scope: {
                ctx: e
            }
        }
    }), D.$on("click", (function() {
        i(e[3] && e[15]) && (e[3] && e[15]).apply(this, arguments)
    })), P = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [te]
            },
            $$scope: {
                ctx: e
            }
        }
    }), P.$on("click", (function() {
        i(e[3] && e[16]) && (e[3] && e[16]).apply(this, arguments)
    })), O = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [ne]
            },
            $$scope: {
                ctx: e
            }
        }
    }), O.$on("click", (function() {
        i(e[3] && e[17]) && (e[3] && e[17]).apply(this, arguments)
    })), z = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [se]
            },
            $$scope: {
                ctx: e
            }
        }
    }), z.$on("click", (function() {
        i(e[3] && e[18]) && (e[3] && e[18]).apply(this, arguments)
    })), q = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [le]
            },
            $$scope: {
                ctx: e
            }
        }
    }), q.$on("click", (function() {
        i(e[3] && e[19]) && (e[3] && e[19]).apply(this, arguments)
    })), W = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [re]
            },
            $$scope: {
                ctx: e
            }
        }
    }), W.$on("click", (function() {
        i(e[3] && e[20]) && (e[3] && e[20]).apply(this, arguments)
    })), ge = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [ae]
            },
            $$scope: {
                ctx: e
            }
        }
    }), ge.$on("click", (function() {
        i(e[3] && e[21]) && (e[3] && e[21]).apply(this, arguments)
    })), we = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [oe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), we.$on("click", (function() {
        i(e[3] && e[22]) && (e[3] && e[22]).apply(this, arguments)
    })), he = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [ce]
            },
            $$scope: {
                ctx: e
            }
        }
    }), he.$on("click", (function() {
        i(e[3] && e[23]) && (e[3] && e[23]).apply(this, arguments)
    })), Ge = new N({
        props: {
            $$slots: {
                default: [ie]
            },
            $$scope: {
                ctx: e
            }
        }
    }), Ge.$on("click", e[13]), Ve = new N({
        props: {
            $$slots: {
                default: [$e]
            },
            $$scope: {
                ctx: e
            }
        }
    }), Ve.$on("click", e[14]), nt = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [ue]
            },
            $$scope: {
                ctx: e
            }
        }
    }), lt = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [pe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), at = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [de]
            },
            $$scope: {
                ctx: e
            }
        }
    }), at.$on("click", (function() {
        i(e[3] && e[26]) && (e[3] && e[26]).apply(this, arguments)
    })), ct = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [fe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), ct.$on("click", (function() {
        i(e[3] && e[27]) && (e[3] && e[27]).apply(this, arguments)
    })), {
        c() {
            t = s("div"), n = s("div"), $ = s("p"), $.textContent = "Game Options", d = l(), f = s("div"), m = s("ul"), v(g.$$.fragment), C = l(), v(h.$$.fragment), y = l(), v(V.$$.fragment), H = l(), v(S.$$.fragment), K = l(), j = s("div"), B = s("p"), B.textContent = "Input Mappings", _ = l(), A = s("div"), R = s("ul"), v(D.$$.fragment), Z = l(), v(P.$$.fragment), U = l(), v(O.$$.fragment), E = l(), v(z.$$.fragment), I = l(), v(q.$$.fragment), T = l(), v(W.$$.fragment), me = l(), v(ge.$$.fragment), xe = l(), v(we.$$.fragment), Ce = l(), v(he.$$.fragment), ye = l(), ve = s("div"), ke = s("p"), ke.textContent = "Emulation Settings", be = l(), Me = s("div"), Fe = s("ul"), v(Ge.$$.fragment), Le = l(), v(Ve.$$.fragment), He = l(), Se = s("div"), Ke = l(), je = s("div"), je.textContent = "Forward Speed", Be = l(), _e = s("input"), Ae = l(), Re = s("div"), De = s("button"), De.textContent = "-1", Ze = l(), Pe = s("p"), Ue = k(e[8]), Oe = l(), Ee = s("button"), Ee.textContent = "+1", ze = l(), Ie = s("div"), Ne = l(), qe = s("div"), qe.textContent = "Set Volume", Te = l(), We = s("input"), Je = l(), Qe = s("div"), Xe = s("p"), Xe.textContent = "Other Options", Ye = l(), et = s("div"), tt = s("ul"), v(nt.$$.fragment), st = l(), v(lt.$$.fragment), rt = l(), v(at.$$.fragment), ot = l(), v(ct.$$.fragment), r($, "class", "flex justify-around text-lightPink py-1"), r(m, "class", "px-2"), r(f, "class", "bg-darkPurple h-full text-purple p-2 leading-relaxed whitespace-nowrap"), r(n, "class", "w-40 bg-purple rounded-t-xl "), r(B, "class", "flex justify-around text-lightPink py-1"), r(R, "class", "px-2"), r(A, "class", "bg-darkPurple h-full whitespace-nowrap text-purple p-2 leading-relaxed "), r(j, "class", "w-40 bg-purple rounded-t-xl "), r(ke, "class", "flex justify-around text-lightPink py-1"), r(Se, "class", "h-4"), r(je, "class", "text-pink"), r(_e, "class", "hidden"), r(_e, "type", "number"), r(_e, "step", "1"), r(De, "class", "border h-10 w-10 text-pink borger-pink rounded"), r(Pe, "class", "self-center font-bold text-xl"), r(Ee, "class", "border h-10 w-10 text-pink borger-pink rounded"), r(Re, "class", "flex justify-between p-2"), r(Ie, "class", "h-4"), r(qe, "class", "text-pink"), r(We, "class", "w-full"), r(We, "type", "range"), r(We, "min", "0"), r(We, "max", "1"), r(We, "step", "0.01"), r(Fe, "class", "px-2"), r(Me, "class", "bg-darkPurple h-full whitespace-nowrap text-purple p-2 leading-relaxed "), r(ve, "class", "w-40 bg-purple rounded-t-xl "), r(Xe, "class", "flex justify-around text-lightPink py-1"), r(tt, "class", "px-2"), r(et, "class", "bg-darkPurple h-full whitespace-nowrap text-purple p-2 leading-relaxed "), r(Qe, "class", "w-40 bg-purple rounded-t-xl "), r(t, "class", "hidden lg:block mt-4 ml-4 space-y-6 w-min")
        },
        m(s, l) {
            a(s, t, l), o(t, n), o(n, $), o(n, d), o(n, f), o(f, m), b(g, m, null), o(m, C), b(h, m, null), o(m, y), b(V, m, null), o(m, H), b(S, m, null), o(t, K), o(t, j), o(j, B), o(j, _), o(j, A), o(A, R), b(D, R, null), o(R, Z), b(P, R, null), o(R, U), b(O, R, null), o(R, E), b(z, R, null), o(R, I), b(q, R, null), o(R, T), b(W, R, null), o(R, me), b(ge, R, null), o(R, xe), b(we, R, null), o(R, Ce), b(he, R, null), o(t, ye), o(t, ve), o(ve, ke), o(ve, be), o(ve, Me), o(Me, Fe), b(Ge, Fe, null), o(Fe, Le), b(Ve, Fe, null), o(Fe, He), o(Fe, Se), o(Fe, Ke), o(Fe, je), o(Fe, Be), o(Fe, _e), M(_e, e[8]), o(Fe, Ae), o(Fe, Re), o(Re, De), o(Re, Ze), o(Re, Pe), o(Pe, Ue), o(Re, Oe), o(Re, Ee), o(Fe, ze), o(Fe, Ie), o(Fe, Ne), o(Fe, qe), o(Fe, Te), o(Fe, We), e[25](We), o(t, Je), o(t, Qe), o(Qe, Xe), o(Qe, Ye), o(Qe, et), o(et, tt), b(nt, tt, null), o(tt, st), b(lt, tt, null), o(tt, rt), b(at, tt, null), o(tt, ot), b(ct, tt, null), it = !0, $t || (ut = [c(_e, "input", e[24]), c(De, "click", e[10]), c(Ee, "click", e[9]), c(We, "change", e[12])], $t = !0)
        },
        p(t, [n]) {
            e = t;
            const s = {};
            1073741824 & n && (s.$$scope = {
                dirty: n,
                ctx: e
            }), g.$set(s);
            const l = {};
            1073741824 & n && (l.$$scope = {
                dirty: n,
                ctx: e
            }), h.$set(l);
            const r = {};
            8 & n && (r.disabled = !e[3]), 1073741824 & n && (r.$$scope = {
                dirty: n,
                ctx: e
            }), V.$set(r);
            const a = {};
            8 & n && (a.disabled = !e[3]), 1073741824 & n && (a.$$scope = {
                dirty: n,
                ctx: e
            }), S.$set(a);
            const o = {};
            8 & n && (o.disabled = !e[3]), 1073741825 & n && (o.$$scope = {
                dirty: n,
                ctx: e
            }), D.$set(o);
            const c = {};
            8 & n && (c.disabled = !e[3]), 1073741825 & n && (c.$$scope = {
                dirty: n,
                ctx: e
            }), P.$set(c);
            const i = {};
            8 & n && (i.disabled = !e[3]), 1073741825 & n && (i.$$scope = {
                dirty: n,
                ctx: e
            }), O.$set(i);
            const $ = {};
            8 & n && ($.disabled = !e[3]), 1073741825 & n && ($.$$scope = {
                dirty: n,
                ctx: e
            }), z.$set($);
            const u = {};
            8 & n && (u.disabled = !e[3]), 1073741825 & n && (u.$$scope = {
                dirty: n,
                ctx: e
            }), q.$set(u);
            const p = {};
            8 & n && (p.disabled = !e[3]), 1073741825 & n && (p.$$scope = {
                dirty: n,
                ctx: e
            }), W.$set(p);
            const d = {};
            8 & n && (d.disabled = !e[3]), 1073741825 & n && (d.$$scope = {
                dirty: n,
                ctx: e
            }), ge.$set(d);
            const f = {};
            8 & n && (f.disabled = !e[3]), 1073741825 & n && (f.$$scope = {
                dirty: n,
                ctx: e
            }), we.$set(f);
            const m = {};
            8 & n && (m.disabled = !e[3]), 1073741825 & n && (m.$$scope = {
                dirty: n,
                ctx: e
            }), he.$set(m);
            const x = {};
            1073741824 & n && (x.$$scope = {
                dirty: n,
                ctx: e
            }), Ge.$set(x);
            const w = {};
            1073741824 & n && (w.$$scope = {
                dirty: n,
                ctx: e
            }), Ve.$set(w), 256 & n && F(_e.value) !== e[8] && M(_e, e[8]), (!it || 256 & n) && G(Ue, e[8]);
            const C = {};
            1073741824 & n && (C.$$scope = {
                dirty: n,
                ctx: e
            }), nt.$set(C);
            const y = {};
            1073741824 & n && (y.$$scope = {
                dirty: n,
                ctx: e
            }), lt.$set(y);
            const v = {};
            8 & n && (v.disabled = !e[3]), 1073741824 & n && (v.$$scope = {
                dirty: n,
                ctx: e
            }), at.$set(v);
            const k = {};
            8 & n && (k.disabled = !e[3]), 1073741824 & n && (k.$$scope = {
                dirty: n,
                ctx: e
            }), ct.$set(k)
        },
        i(e) {
            it || (x(g.$$.fragment, e), x(h.$$.fragment, e), x(V.$$.fragment, e), x(S.$$.fragment, e), x(D.$$.fragment, e), x(P.$$.fragment, e), x(O.$$.fragment, e), x(z.$$.fragment, e), x(q.$$.fragment, e), x(W.$$.fragment, e), x(ge.$$.fragment, e), x(we.$$.fragment, e), x(he.$$.fragment, e), x(Ge.$$.fragment, e), x(Ve.$$.fragment, e), x(nt.$$.fragment, e), x(lt.$$.fragment, e), x(at.$$.fragment, e), x(ct.$$.fragment, e), it = !0)
        },
        o(e) {
            w(g.$$.fragment, e), w(h.$$.fragment, e), w(V.$$.fragment, e), w(S.$$.fragment, e), w(D.$$.fragment, e), w(P.$$.fragment, e), w(O.$$.fragment, e), w(z.$$.fragment, e), w(q.$$.fragment, e), w(W.$$.fragment, e), w(ge.$$.fragment, e), w(we.$$.fragment, e), w(he.$$.fragment, e), w(Ge.$$.fragment, e), w(Ve.$$.fragment, e), w(nt.$$.fragment, e), w(lt.$$.fragment, e), w(at.$$.fragment, e), w(ct.$$.fragment, e), it = !1
        },
        d(n) {
            n && u(t), L(g), L(h), L(V), L(S), L(D), L(P), L(O), L(z), L(q), L(W), L(ge), L(we), L(he), L(Ge), L(Ve), e[25](null), L(nt), L(lt), L(at), L(ct), $t = !1, p(ut)
        }
    }
}

function ge(e, t, n) {
    let {
        loadFile: s
    } = t, {
        saveFile: l
    } = t, {
        startedGame: r
    } = t, {
        currentKeys: a
    } = t, {
        Module: o
    } = t, {
        exportMappings: c
    } = t, {
        importMappings: i
    } = t;
    const {
        open: $
    } = h("simple-modal");
    let u, p = 1,
        d = 2,
        f = e => {
            console.log("onSetKey");
            $(W, {
                onOkay: t => {
                    console.log(t), Object.values(a).some((e => e === t)) || (e(t), n(0, a = U(o)))
                }
            })
        };
    return e.$$set = e => {
        "loadFile" in e && n(1, s = e.loadFile), "saveFile" in e && n(2, l = e.saveFile), "startedGame" in e && n(3, r = e.startedGame), "currentKeys" in e && n(0, a = e.currentKeys), "Module" in e && n(4, o = e.Module), "exportMappings" in e && n(5, c = e.exportMappings), "importMappings" in e && n(6, i = e.importMappings)
    }, [a, s, l, r, o, c, i, u, d, () => {
        n(8, d++, d), o._setSpeed(d)
    }, () => {
        n(8, d--, d), d < 2 && n(8, d = 2), o._setSpeed(d)
    }, f, e => {
        p = e.target.value, o._setVolume(e.target.value)
    }, function() {
        o._mute(), p = u.value, n(7, u.value = 0, u)
    }, function() {
        o._unMute(), n(7, u.value = p, u)
    }, () => f(o.setKeyA), () => f(o.setKeyB), () => f(o.setKeyUp), () => f(o.setKeyDown), () => f(o.setKeyLeft), () => f(o.setKeyRight), () => f(o.setKeyStart), () => f(o.setKeySelect), () => f(o.setKeyForward), function() {
        d = F(this.value), n(8, d)
    }, function(e) {
        V[e ? "unshift" : "push"]((() => {
            u = e, n(7, u)
        }))
    }, () => i(), () => c()]
}
class xe extends e {
    constructor(e) {
        super(), t(this, e, ge, me, n, {
            loadFile: 1,
            saveFile: 2,
            startedGame: 3,
            currentKeys: 0,
            Module: 4,
            exportMappings: 5,
            importMappings: 6
        })
    }
}

function we(e) {
    let t, n, l, o, i;
    const $ = e[6].default,
        C = d($, e, e[5], null);
    return {
        c() {
            t = s("button"), C && C.c(), r(t, "class", n = (e[3] ? "text-purple" : "active:text-purple") + ` ${e[4].class}`)
        },
        m(n, s) {
            a(n, t, s), C && C.m(t, null), l = !0, o || (i = [c(t, "mousedown", e[7]), c(t, "mouseup", e[8]), c(t, "touchstart", e[9]), c(t, "touchend", e[10])], o = !0)
        },
        p(e, [s]) {
            C && C.p && (!l || 32 & s) && f(C, $, e, e[5], l ? g($, e[5], s, null) : m(e[5]), null), (!l || 24 & s && n !== (n = (e[3] ? "text-purple" : "active:text-purple") + ` ${e[4].class}`)) && r(t, "class", n)
        },
        i(e) {
            l || (x(C, e), l = !0)
        },
        o(e) {
            w(C, e), l = !1
        },
        d(e) {
            e && u(t), C && C.d(e), o = !1, p(i)
        }
    }
}

function Ce(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: l
    } = t, {
        pressFunc: r = (() => {})
    } = t, {
        releaseFunc: a = (() => {})
    } = t, o = !1, {
        startedGame: c = !0
    } = t;
    return e.$$set = e => {
        n(4, t = H(H({}, t), S(e))), "pressFunc" in e && n(0, r = e.pressFunc), "releaseFunc" in e && n(1, a = e.releaseFunc), "startedGame" in e && n(2, c = e.startedGame), "$$scope" in e && n(5, l = e.$$scope)
    }, t = S(t), [r, a, c, o, t, l, s, () => {
        c && r()
    }, () => {
        c && a()
    }, e => {
        e.cancelable && (e.stopPropagation(), e.preventDefault(), n(3, o = !0), c && r())
    }, e => {
        e.cancelable && (e.stopPropagation(), e.preventDefault(), n(3, o = !1), c && a())
    }]
}
class he extends e {
    constructor(e) {
        super(), t(this, e, Ce, we, n, {
            pressFunc: 0,
            releaseFunc: 1,
            startedGame: 2
        })
    }
}

function ye(e) {
    let t, n;
    return {
        c() {
            t = K("svg"), n = K("path"), r(n, "d", "M1 1H70.5M1.42121 1.29851V20.7015M1.42121 20.7015V21M1.42121 20.7015C3.92917 20.7015 6.41783 20.3908 8.77479 19.7834L66.5161 4.90319C68.655 4.35199 70.0788 2.91141 70.0788 1.29851M18 11V11.4954H10.8823V8V4.63113"), r(t, "stroke", "currentColor"), r(t, "viewBox", "0 0 71 22"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, s) {
            a(e, t, s), o(t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function ve(e) {
    let t, n;
    return t = new he({
        props: {
            class: "w-20",
            pressFunc: e[2],
            releaseFunc: e[3],
            startedGame: e[1],
            $$slots: {
                default: [ye]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            v(t.$$.fragment)
        },
        m(e, s) {
            b(t, e, s), n = !0
        },
        p(e, [n]) {
            const s = {};
            1 & n && (s.pressFunc = e[2]), 1 & n && (s.releaseFunc = e[3]), 2 & n && (s.startedGame = e[1]), 16 & n && (s.$$scope = {
                dirty: n,
                ctx: e
            }), t.$set(s)
        },
        i(e) {
            n || (x(t.$$.fragment, e), n = !0)
        },
        o(e) {
            w(t.$$.fragment, e), n = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function ke(e, t, n) {
    let {
        Module: s
    } = t, {
        startedGame: l
    } = t;
    return e.$$set = e => {
        "Module" in e && n(0, s = e.Module), "startedGame" in e && n(1, l = e.startedGame)
    }, [s, l, () => s._pressKeyL(), () => s._releaseKeyL()]
}
class be extends e {
    constructor(e) {
        super(), t(this, e, ke, ve, n, {
            Module: 0,
            startedGame: 1
        })
    }
}

function Me(e) {
    let t, n;
    return {
        c() {
            t = K("svg"), n = K("path"), r(n, "d", "M22.6559 12.6C23.0528 12.4137 23.375 12.1721 23.5968 11.8944C23.8187 11.6167 23.9342 11.3105 23.9342 11C23.9342 10.6895 23.8187 10.3833 23.5968 10.1056C23.375 9.82786 23.0528 9.58629 22.6559 9.4L5.61315 1.4C5.13837 1.17715 4.5738 1.04144 3.98272 1.00808C3.39163 0.974726 2.79738 1.04504 2.26655 1.21115C1.73572 1.37725 1.28929 1.63259 0.977279 1.94854C0.665266 2.26449 0.5 2.62858 0.5 3V19C0.5 19.3714 0.665266 19.7355 0.977279 20.0515C1.28929 20.3674 1.73572 20.6227 2.26655 20.7889C2.79738 20.955 3.39163 21.0253 3.98272 20.9919C4.5738 20.9586 5.13837 20.8229 5.61315 20.6L22.6559 12.6ZM48.2217 12.6C48.6186 12.4137 48.9407 12.1721 49.1626 11.8944C49.3845 11.6167 49.5 11.3105 49.5 11C49.5 10.6895 49.3845 10.3833 49.1626 10.1056C48.9407 9.82786 48.6186 9.58629 48.2217 9.4L31.1789 1.4C30.7041 1.17715 30.1396 1.04144 29.5485 1.00808C28.9574 0.974726 28.3632 1.04504 27.8323 1.21115C27.3015 1.37725 26.8551 1.63259 26.5431 1.94854C26.231 2.26449 26.0658 2.62858 26.0658 3V19C26.0658 19.3714 26.231 19.7355 26.5431 20.0515C26.8551 20.3674 27.3015 20.6227 27.8323 20.7889C28.3632 20.955 28.9574 21.0253 29.5485 20.9919C30.1396 20.9586 30.7041 20.8229 31.1789 20.6L48.2217 12.6Z"), r(n, "stroke-linecap", "round"), r(n, "stroke-linejoin", "round"), r(t, "stroke", "currentColor"), r(t, "viewBox", "0 0 50 22"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, s) {
            a(e, t, s), o(t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Fe(e) {
    let t, n;
    return t = new he({
        props: {
            class: "w-14",
            startedGame: e[1],
            pressFunc: e[2],
            releaseFunc: e[3],
            $$slots: {
                default: [Me]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            v(t.$$.fragment)
        },
        m(e, s) {
            b(t, e, s), n = !0
        },
        p(e, [n]) {
            const s = {};
            2 & n && (s.startedGame = e[1]), 1 & n && (s.pressFunc = e[2]), 1 & n && (s.releaseFunc = e[3]), 16 & n && (s.$$scope = {
                dirty: n,
                ctx: e
            }), t.$set(s)
        },
        i(e) {
            n || (x(t.$$.fragment, e), n = !0)
        },
        o(e) {
            w(t.$$.fragment, e), n = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function Ge(e, t, n) {
    let {
        Module: s
    } = t, {
        startedGame: l
    } = t;
    return e.$$set = e => {
        "Module" in e && n(0, s = e.Module), "startedGame" in e && n(1, l = e.startedGame)
    }, [s, l, () => s._pressForward(), () => s._releaseForward()]
}
class Le extends e {
    constructor(e) {
        super(), t(this, e, Ge, Fe, n, {
            Module: 0,
            startedGame: 1
        })
    }
}

function Ve(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("svg"), s = K("path"), r(s, "d", "M70 1H0.5M69.5788 1.29851V20.7015M69.5788 20.7015V21M69.5788 20.7015C67.0708 20.7015 64.5822 20.3908 62.2252 19.7834L4.48389 4.90319C2.34501 4.35199 0.921211 2.91141 0.921211 1.29851M60.1177 11.4954V8V4.63113C60.1177 4.63113 56.5 4.5 55.6943 4.63113C54.8885 4.76226 54 5.5 54.5 7C54.7723 7.81703 56.3798 8.04069 57.7871 8.07499M60 8C60 8 58.9634 8.10366 57.7871 8.07499M57.7871 8.07499L57 12"), r(n, "stroke", "currentColor"), r(n, "viewBox", "0 0 71 22"), r(n, "fill", "none"), r(n, "xmlns", "http://www.w3.org/2000/svg"), r(t, "viewBox", "0 0 71 22"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(n, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function He(e) {
    let t, n;
    return t = new he({
        props: {
            class: "w-20",
            startedGame: e[1],
            pressFunc: e[2],
            releaseFunc: e[3],
            $$slots: {
                default: [Ve]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            v(t.$$.fragment)
        },
        m(e, s) {
            b(t, e, s), n = !0
        },
        p(e, [n]) {
            const s = {};
            2 & n && (s.startedGame = e[1]), 1 & n && (s.pressFunc = e[2]), 1 & n && (s.releaseFunc = e[3]), 16 & n && (s.$$scope = {
                dirty: n,
                ctx: e
            }), t.$set(s)
        },
        i(e) {
            n || (x(t.$$.fragment, e), n = !0)
        },
        o(e) {
            w(t.$$.fragment, e), n = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function Se(e, t, n) {
    let {
        Module: s
    } = t, {
        startedGame: l
    } = t;
    return e.$$set = e => {
        "Module" in e && n(0, s = e.Module), "startedGame" in e && n(1, l = e.startedGame)
    }, [s, l, () => s._pressKeyR(), () => s._releaseKeyR()]
}
class Ke extends e {
    constructor(e) {
        super(), t(this, e, Se, He, n, {
            Module: 0,
            startedGame: 1
        })
    }
}

function je(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "0.5"), r(n, "y", "0.5"), r(n, "width", "39"), r(n, "height", "39"), r(n, "transform", "matrix(0 1 1 0 0 0)"), r(s, "d", "M24.2727 11.9231L16 20.1958L24.2727 28.4685"), r(s, "stroke-width", "2"), r(s, "stroke-linecap", "round"), r(s, "stroke-linejoin", "round"), r(t, "stroke", "currentColor"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Be(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "0.5"), r(n, "y", "0.5"), r(n, "width", "39"), r(n, "height", "39"), r(s, "d", "M11.9231 24.2727L20.1958 16L28.4685 24.2727"), r(s, "stroke-width", "2"), r(s, "stroke-linecap", "round"), r(s, "stroke-linejoin", "round"), r(t, "stroke", "currentColor"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function _e(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "0.5"), r(n, "y", "-0.5"), r(n, "width", "39"), r(n, "height", "39"), r(n, "transform", "matrix(1 0 0 -1 0 39)"), r(s, "d", "M11.9231 15.7273L20.1958 24L28.4685 15.7273"), r(s, "stroke-width", "2"), r(s, "stroke-linecap", "round"), r(s, "stroke-linejoin", "round"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg"), r(t, "stroke", "currentColor")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Ae(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "-0.5"), r(n, "y", "-0.5"), r(n, "width", "39"), r(n, "height", "39"), r(n, "transform", "matrix(0 -1 -1 0 39 39)"), r(s, "d", "M15.7273 28.0769L24 19.8042L15.7273 11.5315"), r(s, "stroke-width", "2"), r(s, "stroke-linecap", "round"), r(s, "stroke-linejoin", "round"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "stroke", "currentColor"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Re(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("circle"), s = K("path"), r(n, "cx", "20"), r(n, "cy", "20"), r(n, "r", "19.5"), r(n, "stroke", "currentColor"), r(s, "d", "M17.2939 24.1239V14.1708H20.5479C21.6279 14.1708 22.4391 14.3941 22.9814 14.8407C23.5283 15.2873 23.8018 15.9481 23.8018 16.8231C23.8018 17.288 23.6696 17.7004 23.4053 18.0604C23.1409 18.4159 22.7809 18.6916 22.3252 18.8876C22.863 19.038 23.2868 19.3251 23.5967 19.7489C23.9111 20.1682 24.0684 20.6695 24.0684 21.2528C24.0684 22.146 23.779 22.8479 23.2002 23.3583C22.6214 23.8687 21.8034 24.1239 20.7461 24.1239H17.2939ZM18.6064 19.4686V23.0507H20.7734C21.3841 23.0507 21.8649 22.8934 22.2158 22.579C22.5713 22.26 22.749 21.8225 22.749 21.2665C22.749 20.0679 22.0973 19.4686 20.7939 19.4686H18.6064ZM18.6064 18.4159H20.5889C21.1631 18.4159 21.6211 18.2723 21.9629 17.9852C22.3092 17.6981 22.4824 17.3085 22.4824 16.8163C22.4824 16.2694 22.3229 15.8729 22.0039 15.6268C21.6849 15.3762 21.1995 15.2509 20.5479 15.2509H18.6064V18.4159Z"), r(s, "fill", "currentColor"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function De(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("circle"), s = K("path"), r(n, "cx", "20"), r(n, "cy", "20"), r(n, "r", "19.5"), r(s, "d", "M22.0407 21.5262H17.8708L16.9342 24.1239H15.5807L19.3815 14.1708H20.5299L24.3376 24.1239H22.9909L22.0407 21.5262ZM18.2672 20.4462H21.651L19.9557 15.7909L18.2672 20.4462Z"), r(s, "fill", "currentColor"), r(t, "stroke", "currentColor"), r(t, "viewBox", "0 0 40 40"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Ze(e) {
    let t, n, c, i, $, p, d, f, m, g, C, h, y, k, M, F, G, V, H, S, K, j, B, _, A, R, D, Z, P, U;
    return $ = new he({
        props: {
            class: "w-14",
            startedGame: e[0],
            pressFunc: e[2],
            releaseFunc: e[3],
            $$slots: {
                default: [je]
            },
            $$scope: {
                ctx: e
            }
        }
    }), g = new he({
        props: {
            class: "w-14",
            startedGame: e[0],
            pressFunc: e[4],
            releaseFunc: e[5],
            $$slots: {
                default: [Be]
            },
            $$scope: {
                ctx: e
            }
        }
    }), M = new he({
        props: {
            class: "w-14",
            startedGame: e[0],
            pressFunc: e[6],
            releaseFunc: e[7],
            $$slots: {
                default: [_e]
            },
            $$scope: {
                ctx: e
            }
        }
    }), S = new he({
        props: {
            class: "w-14",
            startedGame: e[0],
            pressFunc: e[8],
            releaseFunc: e[9],
            $$slots: {
                default: [Ae]
            },
            $$scope: {
                ctx: e
            }
        }
    }), R = new he({
        props: {
            class: "w-14 translate-y-6 md:self-end",
            startedGame: e[0],
            pressFunc: e[10],
            releaseFunc: e[11],
            $$slots: {
                default: [Re]
            },
            $$scope: {
                ctx: e
            }
        }
    }), P = new he({
        props: {
            class: "w-14 -translate-y-6 md:self-start",
            startedGame: e[0],
            pressFunc: e[12],
            releaseFunc: e[13],
            $$slots: {
                default: [De]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            t = s("div"), n = s("div"), c = l(), i = s("div"), v($.$$.fragment), p = l(), d = s("div"), f = l(), m = s("div"), v(g.$$.fragment), C = l(), h = s("div"), y = l(), k = s("div"), v(M.$$.fragment), F = l(), G = s("div"), V = l(), H = s("div"), v(S.$$.fragment), K = l(), j = s("div"), B = l(), _ = s("div"), A = s("div"), v(R.$$.fragment), D = l(), Z = s("div"), v(P.$$.fragment), r(n, "class", "h-full w-full "), r(i, "class", "h-full w-full flex justify-end items-center translate-x-1 md:translate-x-8"), r(d, "class", "h-full w-full "), r(m, "class", "h-full w-full flex justify-center items-end translate-y-7 md:translate-y-11 lg:translate-y-10"), r(h, "class", "h-full w-full "), r(k, "class", "h-full w-full flex justify-center items-start -translate-y-7 md:-translate-y-11 lg:-translate-y-10"), r(G, "class", "h-full w-full "), r(H, "class", "h-full w-full flex justify-start items-center -translate-x-1 md:-translate-x-8"), r(j, "class", "h-full w-full "), r(t, "class", "flex-grow grid grid-rows-3 grid-flow-col gap-0"), r(A, "class", "h-full w-full flex flex-col items-center justify-center"), r(Z, "class", "h-full w-full flex flex-col items-center justify-center"), r(_, "class", "flex-grow flex gap-0 flex-shrink-0")
        },
        m(e, s) {
            a(e, t, s), o(t, n), o(t, c), o(t, i), b($, i, null), o(t, p), o(t, d), o(t, f), o(t, m), b(g, m, null), o(t, C), o(t, h), o(t, y), o(t, k), b(M, k, null), o(t, F), o(t, G), o(t, V), o(t, H), b(S, H, null), o(t, K), o(t, j), a(e, B, s), a(e, _, s), o(_, A), b(R, A, null), o(_, D), o(_, Z), b(P, Z, null), U = !0
        },
        p(e, [t]) {
            const n = {};
            1 & t && (n.startedGame = e[0]), 2 & t && (n.pressFunc = e[2]), 2 & t && (n.releaseFunc = e[3]), 16384 & t && (n.$$scope = {
                dirty: t,
                ctx: e
            }), $.$set(n);
            const s = {};
            1 & t && (s.startedGame = e[0]), 2 & t && (s.pressFunc = e[4]), 2 & t && (s.releaseFunc = e[5]), 16384 & t && (s.$$scope = {
                dirty: t,
                ctx: e
            }), g.$set(s);
            const l = {};
            1 & t && (l.startedGame = e[0]), 2 & t && (l.pressFunc = e[6]), 2 & t && (l.releaseFunc = e[7]), 16384 & t && (l.$$scope = {
                dirty: t,
                ctx: e
            }), M.$set(l);
            const r = {};
            1 & t && (r.startedGame = e[0]), 2 & t && (r.pressFunc = e[8]), 2 & t && (r.releaseFunc = e[9]), 16384 & t && (r.$$scope = {
                dirty: t,
                ctx: e
            }), S.$set(r);
            const a = {};
            1 & t && (a.startedGame = e[0]), 2 & t && (a.pressFunc = e[10]), 2 & t && (a.releaseFunc = e[11]), 16384 & t && (a.$$scope = {
                dirty: t,
                ctx: e
            }), R.$set(a);
            const o = {};
            1 & t && (o.startedGame = e[0]), 2 & t && (o.pressFunc = e[12]), 2 & t && (o.releaseFunc = e[13]), 16384 & t && (o.$$scope = {
                dirty: t,
                ctx: e
            }), P.$set(o)
        },
        i(e) {
            U || (x($.$$.fragment, e), x(g.$$.fragment, e), x(M.$$.fragment, e), x(S.$$.fragment, e), x(R.$$.fragment, e), x(P.$$.fragment, e), U = !0)
        },
        o(e) {
            w($.$$.fragment, e), w(g.$$.fragment, e), w(M.$$.fragment, e), w(S.$$.fragment, e), w(R.$$.fragment, e), w(P.$$.fragment, e), U = !1
        },
        d(e) {
            e && u(t), L($), L(g), L(M), L(S), e && u(B), e && u(_), L(R), L(P)
        }
    }
}

function Pe(e, t, n) {
    let {
        startedGame: s = !1
    } = t, {
        Module: l
    } = t;
    return e.$$set = e => {
        "startedGame" in e && n(0, s = e.startedGame), "Module" in e && n(1, l = e.Module)
    }, [s, l, () => l._pressKeyLeft(), () => l._releaseKeyLeft(), () => l._pressKeyUp(), () => l._releaseKeyUp(), () => l._pressKeyDown(), () => l._releaseKeyDown(), () => l._pressKeyRight(), () => l._releaseKeyRight(), () => l._pressKeyB(), () => l._releaseKeyB(), () => l._pressKeyA(), () => l._releaseKeyA()]
}
class Ue extends e {
    constructor(e) {
        super(), t(this, e, Pe, Ze, n, {
            startedGame: 0,
            Module: 1
        })
    }
}

function Oe(e) {
    let t, n, i, $, p, C, h, y;
    const v = e[7].default,
        k = d(v, e, e[6], null);
    return {
        c() {
            t = s("aside"), n = s("div"), i = l(), $ = s("div"), k && k.c(), r(n, "class", "overlay svelte-pai9dq"), r($, "class", p = "panel " + e[1] + " svelte-pai9dq"), j($, "size", e[2]), r(t, "class", "drawer svelte-pai9dq"), r(t, "style", e[3]), j(t, "open", e[0])
        },
        m(s, l) {
            a(s, t, l), o(t, n), o(t, i), o(t, $), k && k.m($, null), C = !0, h || (y = c(n, "click", e[4]), h = !0)
        },
        p(e, [n]) {
            k && k.p && (!C || 64 & n) && f(k, v, e, e[6], C ? g(v, e[6], n, null) : m(e[6]), null), (!C || 2 & n && p !== (p = "panel " + e[1] + " svelte-pai9dq")) && r($, "class", p), 6 & n && j($, "size", e[2]), (!C || 8 & n) && r(t, "style", e[3]), 1 & n && j(t, "open", e[0])
        },
        i(e) {
            C || (x(k, e), C = !0)
        },
        o(e) {
            w(k, e), C = !1
        },
        d(e) {
            e && u(t), k && k.d(e), h = !1, y()
        }
    }
}

function Ee(e, t, n) {
    let s, {
            $$slots: l = {},
            $$scope: r
        } = t,
        {
            open: a = !1
        } = t,
        {
            duration: o = .2
        } = t,
        {
            placement: c = "left"
        } = t,
        {
            size: i = null
        } = t,
        $ = !1;
    const u = B();

    function p(e) {
        if ($) {
            document.querySelector("body").style.overflow = e ? "hidden" : "auto"
        }
    }
    return y((() => {
        $ = !0, p(a)
    })), e.$$set = e => {
        "open" in e && n(0, a = e.open), "duration" in e && n(5, o = e.duration), "placement" in e && n(1, c = e.placement), "size" in e && n(2, i = e.size), "$$scope" in e && n(6, r = e.$$scope)
    }, e.$$.update = () => {
        36 & e.$$.dirty && n(3, s = `--duration: ${o}s; --size: ${i};`), 1 & e.$$.dirty && p(a)
    }, [a, c, i, s, function() {
        u("clickAway")
    }, o, r, l]
}
class ze extends e {
    constructor(e) {
        super(), t(this, e, Ee, Oe, n, {
            open: 0,
            duration: 5,
            placement: 1,
            size: 2
        })
    }
}
const {
    window: Ie
} = A;

function Ne(e) {
    let t;
    return {
        c() {
            t = k("Load Game")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function qe(e) {
    let t;
    return {
        c() {
            t = k("Save Game")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Te(e) {
    let t;
    return {
        c() {
            t = k("Load SaveState")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function We(e) {
    let t;
    return {
        c() {
            t = k("Save SaveState")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Je(e) {
    let t;
    return {
        c() {
            t = k("Mute Sound")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Qe(e) {
    let t;
    return {
        c() {
            t = k("Unmute Sound")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Xe(e) {
    let t;
    return {
        c() {
            t = k("Load Cheats")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Ye(e) {
    let t;
    return {
        c() {
            t = k("Save Cheats")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function et(e) {
    let t;
    return {
        c() {
            t = k("Import Mappings")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function tt(e) {
    let t;
    return {
        c() {
            t = k("Export Mappings")
        },
        m(e, n) {
            a(e, t, n)
        },
        d(e) {
            e && u(t)
        }
    }
}

function nt(e) {
    let t, n, $, d, f, m, g, C, h, y, V, H, S, K, j, B, _, A, R, D, Z, P, U, O, E, z, I, q, T, W, J, Q, X, Y, ee, te, ne, se, le, re, ae, oe, ce, ie, $e, ue, pe, de, fe, me, ge, xe, we, Ce, he, ye, ve, ke, be, Me;
    return h = new N({
        props: {
            $$slots: {
                default: [Ne]
            },
            $$scope: {
                ctx: e
            }
        }
    }), h.$on("click", e[9]), V = new N({
        props: {
            $$slots: {
                default: [qe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), V.$on("click", e[10]), S = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [Te]
            },
            $$scope: {
                ctx: e
            }
        }
    }), j = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [We]
            },
            $$scope: {
                ctx: e
            }
        }
    }), P = new N({
        props: {
            $$slots: {
                default: [Je]
            },
            $$scope: {
                ctx: e
            }
        }
    }), P.$on("click", e[16]), O = new N({
        props: {
            $$slots: {
                default: [Qe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), O.$on("click", e[17]), ge = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [Xe]
            },
            $$scope: {
                ctx: e
            }
        }
    }), we = new N({
        props: {
            disabled: !0,
            $$slots: {
                default: [Ye]
            },
            $$scope: {
                ctx: e
            }
        }
    }), he = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [et]
            },
            $$scope: {
                ctx: e
            }
        }
    }), he.$on("click", (function() {
        i(e[3] && e[21]) && (e[3] && e[21]).apply(this, arguments)
    })), ve = new N({
        props: {
            disabled: !e[3],
            $$slots: {
                default: [tt]
            },
            $$scope: {
                ctx: e
            }
        }
    }), ve.$on("click", (function() {
        i(e[3] && e[22]) && (e[3] && e[22]).apply(this, arguments)
    })), {
        c() {
            t = s("div"), n = s("p"), n.textContent = "mGBA", $ = l(), d = s("div"), f = s("p"), f.textContent = "Game Options", m = l(), g = s("div"), C = s("ul"), v(h.$$.fragment), y = l(), v(V.$$.fragment), H = l(), v(S.$$.fragment), K = l(), v(j.$$.fragment), B = l(), _ = s("div"), A = s("p"), A.textContent = "Emulation Settings", R = l(), D = s("div"), Z = s("ul"), v(P.$$.fragment), U = l(), v(O.$$.fragment), E = l(), z = s("div"), I = l(), q = s("div"), q.textContent = "Forward Speed", T = l(), W = s("input"), J = l(), Q = s("div"), X = s("button"), X.textContent = "-1", Y = l(), ee = s("p"), te = k(e[7]), ne = l(), se = s("button"), se.textContent = "+1", le = l(), re = s("div"), ae = l(), oe = s("div"), oe.textContent = "Set Volume", ce = l(), ie = s("input"), $e = l(), ue = s("div"), pe = s("p"), pe.textContent = "Other Options", de = l(), fe = s("div"), me = s("ul"), v(ge.$$.fragment), xe = l(), v(we.$$.fragment), Ce = l(), v(he.$$.fragment), ye = l(), v(ve.$$.fragment), r(n, "class", "bg-purple text-pink text-center pt-1 pb-2 h-10"), r(f, "class", "text-lightPink py-1 ml-4"), r(C, "class", "px-2"), r(g, "class", "bg-darkPurple h-min text-purple p-2 leading-relaxed whitespace-nowrap "), r(d, "class", "bg-darkBlue "), r(A, "class", "flex justify-around text-lightPink py-1"), r(z, "class", "h-4"), r(q, "class", "text-pink"), r(W, "class", "hidden"), r(W, "type", "number"), r(W, "step", "1"), r(X, "class", "border h-10 w-10 text-pink borger-pink rounded"), r(ee, "class", "self-center font-bold text-xl"), r(se, "class", "border h-10 w-10 text-pink borger-pink rounded"), r(Q, "class", "flex justify-between p-2"), r(re, "class", "h-4"), r(oe, "class", "text-pink"), r(ie, "class", "w-full"), r(ie, "type", "range"), r(ie, "min", "0"), r(ie, "max", "1"), r(ie, "step", "0.01"), r(Z, "class", "px-2"), r(D, "class", "bg-darkPurple h-full whitespace-nowrap text-purple p-2 leading-relaxed "), r(_, "class", "bg-darkBlue "), r(pe, "class", "flex justify-around text-lightPink py-1"), r(me, "class", "px-2"), r(fe, "class", "bg-darkPurple h-full whitespace-nowrap text-purple p-2 leading-relaxed "), r(ue, "class", "bg-darkBlue "), r(t, "class", "h-full w-full flex flex-col bg-darkPurple")
        },
        m(s, l) {
            a(s, t, l), o(t, n), o(t, $), o(t, d), o(d, f), o(d, m), o(d, g), o(g, C), b(h, C, null), o(C, y), b(V, C, null), o(C, H), b(S, C, null), o(C, K), b(j, C, null), o(t, B), o(t, _), o(_, A), o(_, R), o(_, D), o(D, Z), b(P, Z, null), o(Z, U), b(O, Z, null), o(Z, E), o(Z, z), o(Z, I), o(Z, q), o(Z, T), o(Z, W), M(W, e[7]), o(Z, J), o(Z, Q), o(Q, X), o(Q, Y), o(Q, ee), o(ee, te), o(Q, ne), o(Q, se), o(Z, le), o(Z, re), o(Z, ae), o(Z, oe), o(Z, ce), o(Z, ie), e[20](ie), o(t, $e), o(t, ue), o(ue, pe), o(ue, de), o(ue, fe), o(fe, me), b(ge, me, null), o(me, xe), b(we, me, null), o(me, Ce), b(he, me, null), o(me, ye), b(ve, me, null), ke = !0, be || (Me = [c(W, "input", e[19]), c(X, "click", e[14]), c(se, "click", e[13]), c(ie, "change", e[15])], be = !0)
        },
        p(t, n) {
            e = t;
            const s = {};
            128 & n[1] && (s.$$scope = {
                dirty: n,
                ctx: e
            }), h.$set(s);
            const l = {};
            128 & n[1] && (l.$$scope = {
                dirty: n,
                ctx: e
            }), V.$set(l);
            const r = {};
            128 & n[1] && (r.$$scope = {
                dirty: n,
                ctx: e
            }), S.$set(r);
            const a = {};
            128 & n[1] && (a.$$scope = {
                dirty: n,
                ctx: e
            }), j.$set(a);
            const o = {};
            128 & n[1] && (o.$$scope = {
                dirty: n,
                ctx: e
            }), P.$set(o);
            const c = {};
            128 & n[1] && (c.$$scope = {
                dirty: n,
                ctx: e
            }), O.$set(c), 128 & n[0] && F(W.value) !== e[7] && M(W, e[7]), (!ke || 128 & n[0]) && G(te, e[7]);
            const i = {};
            128 & n[1] && (i.$$scope = {
                dirty: n,
                ctx: e
            }), ge.$set(i);
            const $ = {};
            128 & n[1] && ($.$$scope = {
                dirty: n,
                ctx: e
            }), we.$set($);
            const u = {};
            8 & n[0] && (u.disabled = !e[3]), 128 & n[1] && (u.$$scope = {
                dirty: n,
                ctx: e
            }), he.$set(u);
            const p = {};
            8 & n[0] && (p.disabled = !e[3]), 128 & n[1] && (p.$$scope = {
                dirty: n,
                ctx: e
            }), ve.$set(p)
        },
        i(e) {
            ke || (x(h.$$.fragment, e), x(V.$$.fragment, e), x(S.$$.fragment, e), x(j.$$.fragment, e), x(P.$$.fragment, e), x(O.$$.fragment, e), x(ge.$$.fragment, e), x(we.$$.fragment, e), x(he.$$.fragment, e), x(ve.$$.fragment, e), ke = !0)
        },
        o(e) {
            w(h.$$.fragment, e), w(V.$$.fragment, e), w(S.$$.fragment, e), w(j.$$.fragment, e), w(P.$$.fragment, e), w(O.$$.fragment, e), w(ge.$$.fragment, e), w(we.$$.fragment, e), w(he.$$.fragment, e), w(ve.$$.fragment, e), ke = !1
        },
        d(n) {
            n && u(t), L(h), L(V), L(S), L(j), L(P), L(O), e[20](null), L(ge), L(we), L(he), L(ve), be = !1, p(Me)
        }
    }
}

function st(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "0.499756"), r(n, "y", "0.5"), r(n, "width", "90"), r(n, "height", "19"), r(n, "rx", "9.5"), r(n, "stroke", "currentColor"), r(s, "d", "M34.0879 10.5635C32.9622 10.2399 32.1419 9.84342 31.627 9.37402C31.1165 8.90007 30.8613 8.31673 30.8613 7.62402C30.8613 6.84017 31.1735 6.19303 31.7979 5.68262C32.4268 5.16764 33.2425 4.91016 34.2451 4.91016C34.9287 4.91016 35.5371 5.04232 36.0703 5.30664C36.6081 5.57096 37.0228 5.93555 37.3145 6.40039C37.6107 6.86523 37.7588 7.37337 37.7588 7.9248H36.4395C36.4395 7.32324 36.248 6.85156 35.8652 6.50977C35.4824 6.16341 34.9424 5.99023 34.2451 5.99023C33.598 5.99023 33.0921 6.13379 32.7275 6.4209C32.3675 6.70345 32.1875 7.09766 32.1875 7.60352C32.1875 8.00911 32.3584 8.35319 32.7002 8.63574C33.0465 8.91374 33.6322 9.16895 34.457 9.40137C35.2865 9.63379 35.9336 9.89128 36.3984 10.1738C36.8678 10.4518 37.2142 10.7777 37.4375 11.1514C37.6654 11.5251 37.7793 11.9648 37.7793 12.4707C37.7793 13.2773 37.4648 13.9245 36.8359 14.4121C36.207 14.8952 35.3662 15.1367 34.3135 15.1367C33.6299 15.1367 32.9919 15.0068 32.3994 14.7471C31.807 14.4827 31.349 14.1227 31.0254 13.667C30.7064 13.2113 30.5469 12.694 30.5469 12.1152H31.8662C31.8662 12.7168 32.0872 13.193 32.5293 13.5439C32.9759 13.8903 33.5706 14.0635 34.3135 14.0635C35.0062 14.0635 35.5371 13.9222 35.9062 13.6396C36.2754 13.3571 36.46 12.972 36.46 12.4844C36.46 11.9967 36.2891 11.6208 35.9473 11.3564C35.6055 11.0876 34.9857 10.8232 34.0879 10.5635ZM40.9854 5.8125V7.60352H42.3662V8.58105H40.9854V13.168C40.9854 13.4642 41.0469 13.6875 41.1699 13.8379C41.293 13.9837 41.5026 14.0566 41.7988 14.0566C41.9447 14.0566 42.1452 14.0293 42.4004 13.9746V15C42.0677 15.0911 41.7441 15.1367 41.4297 15.1367C40.8646 15.1367 40.4385 14.9658 40.1514 14.624C39.8643 14.2822 39.7207 13.7969 39.7207 13.168V8.58105H38.374V7.60352H39.7207V5.8125H40.9854ZM48.416 15C48.3431 14.8542 48.2839 14.5944 48.2383 14.2207C47.6504 14.8314 46.9486 15.1367 46.1328 15.1367C45.4036 15.1367 44.8044 14.9316 44.335 14.5215C43.8701 14.1068 43.6377 13.5827 43.6377 12.9492C43.6377 12.179 43.9294 11.582 44.5127 11.1582C45.1006 10.7298 45.9255 10.5156 46.9873 10.5156H48.2178V9.93457C48.2178 9.49251 48.0856 9.1416 47.8213 8.88184C47.557 8.61751 47.1673 8.48535 46.6523 8.48535C46.2012 8.48535 45.8229 8.59928 45.5176 8.82715C45.2122 9.05501 45.0596 9.33073 45.0596 9.6543H43.7881C43.7881 9.28516 43.918 8.92969 44.1777 8.58789C44.4421 8.24154 44.7975 7.9681 45.2441 7.76758C45.6953 7.56706 46.1898 7.4668 46.7275 7.4668C47.5798 7.4668 48.2474 7.68099 48.7305 8.10938C49.2135 8.5332 49.4642 9.11882 49.4824 9.86621V13.2705C49.4824 13.9495 49.569 14.4896 49.7422 14.8906V15H48.416ZM46.3174 14.0361C46.7139 14.0361 47.0898 13.9336 47.4453 13.7285C47.8008 13.5234 48.0583 13.2568 48.2178 12.9287V11.4111H47.2266C45.6771 11.4111 44.9023 11.8646 44.9023 12.7715C44.9023 13.168 45.0345 13.4779 45.2988 13.7012C45.5632 13.9245 45.9027 14.0361 46.3174 14.0361ZM55.04 8.73828C54.8486 8.70638 54.6413 8.69043 54.418 8.69043C53.5885 8.69043 53.0257 9.04362 52.7295 9.75V15H51.4648V7.60352H52.6953L52.7158 8.45801C53.1305 7.7972 53.7184 7.4668 54.4795 7.4668C54.7256 7.4668 54.9124 7.4987 55.04 7.5625V8.73828ZM58.2666 5.8125V7.60352H59.6475V8.58105H58.2666V13.168C58.2666 13.4642 58.3281 13.6875 58.4512 13.8379C58.5742 13.9837 58.7839 14.0566 59.0801 14.0566C59.2259 14.0566 59.4264 14.0293 59.6816 13.9746V15C59.349 15.0911 59.0254 15.1367 58.7109 15.1367C58.1458 15.1367 57.7197 14.9658 57.4326 14.624C57.1455 14.2822 57.002 13.7969 57.002 13.168V8.58105H55.6553V7.60352H57.002V5.8125H58.2666Z"), r(s, "fill", "currentColor"), r(t, "viewBox", "0 0 91 20"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function lt(e) {
    let t, n, s;
    return {
        c() {
            t = K("svg"), n = K("rect"), s = K("path"), r(n, "x", "0.499756"), r(n, "y", "0.5"), r(n, "width", "90"), r(n, "height", "19"), r(n, "rx", "9.5"), r(n, "stroke", "currentColor"), r(s, "d", "M29.0876 10.5635C27.962 10.2399 27.1417 9.84342 26.6267 9.37402C26.1163 8.90007 25.8611 8.31673 25.8611 7.62402C25.8611 6.84017 26.1733 6.19303 26.7976 5.68262C27.4265 5.16764 28.2423 4.91016 29.2449 4.91016C29.9285 4.91016 30.5369 5.04232 31.0701 5.30664C31.6078 5.57096 32.0225 5.93555 32.3142 6.40039C32.6104 6.86523 32.7585 7.37337 32.7585 7.9248H31.4392C31.4392 7.32324 31.2478 6.85156 30.865 6.50977C30.4822 6.16341 29.9421 5.99023 29.2449 5.99023C28.5977 5.99023 28.0919 6.13379 27.7273 6.4209C27.3673 6.70345 27.1873 7.09766 27.1873 7.60352C27.1873 8.00911 27.3582 8.35319 27.7 8.63574C28.0463 8.91374 28.6319 9.16895 29.4568 9.40137C30.2862 9.63379 30.9333 9.89128 31.3982 10.1738C31.8676 10.4518 32.2139 10.7777 32.4373 11.1514C32.6651 11.5251 32.7791 11.9648 32.7791 12.4707C32.7791 13.2773 32.4646 13.9245 31.8357 14.4121C31.2068 14.8952 30.366 15.1367 29.3132 15.1367C28.6296 15.1367 27.9916 15.0068 27.3992 14.7471C26.8067 14.4827 26.3487 14.1227 26.0251 13.667C25.7061 13.2113 25.5466 12.694 25.5466 12.1152H26.866C26.866 12.7168 27.087 13.193 27.5291 13.5439C27.9757 13.8903 28.5704 14.0635 29.3132 14.0635C30.0059 14.0635 30.5369 13.9222 30.906 13.6396C31.2751 13.3571 31.4597 12.972 31.4597 12.4844C31.4597 11.9967 31.2888 11.6208 30.947 11.3564C30.6052 11.0876 29.9854 10.8232 29.0876 10.5635ZM37.3386 15.1367C36.336 15.1367 35.5203 14.8086 34.8914 14.1523C34.2625 13.4915 33.948 12.6097 33.948 11.5068V11.2744C33.948 10.5407 34.087 9.88672 34.365 9.3125C34.6475 8.73372 35.0395 8.28255 35.5408 7.95898C36.0466 7.63086 36.5935 7.4668 37.1814 7.4668C38.143 7.4668 38.8904 7.78353 39.4236 8.41699C39.9568 9.05046 40.2234 9.95736 40.2234 11.1377V11.6641H35.2126C35.2309 12.3932 35.4428 12.9834 35.8484 13.4346C36.2585 13.8812 36.7781 14.1045 37.407 14.1045C37.8536 14.1045 38.2319 14.0133 38.5417 13.8311C38.8516 13.6488 39.1228 13.4072 39.3552 13.1064L40.1277 13.708C39.5079 14.6605 38.5782 15.1367 37.3386 15.1367ZM37.1814 8.50586C36.671 8.50586 36.2426 8.69271 35.8962 9.06641C35.5499 9.43555 35.3357 9.95508 35.2537 10.625H38.9587V10.5293C38.9223 9.88672 38.7491 9.38997 38.4392 9.03906C38.1293 8.68359 37.71 8.50586 37.1814 8.50586ZM43.0671 15H41.8025V4.5H43.0671V15ZM48.1667 15.1367C47.1641 15.1367 46.3484 14.8086 45.7195 14.1523C45.0906 13.4915 44.7761 12.6097 44.7761 11.5068V11.2744C44.7761 10.5407 44.9151 9.88672 45.1931 9.3125C45.4757 8.73372 45.8676 8.28255 46.3689 7.95898C46.8748 7.63086 47.4216 7.4668 48.0095 7.4668C48.9711 7.4668 49.7185 7.78353 50.2517 8.41699C50.7849 9.05046 51.0515 9.95736 51.0515 11.1377V11.6641H46.0408C46.059 12.3932 46.2709 12.9834 46.6765 13.4346C47.0867 13.8812 47.6062 14.1045 48.2351 14.1045C48.6817 14.1045 49.06 14.0133 49.3699 13.8311C49.6798 13.6488 49.9509 13.4072 50.1833 13.1064L50.9558 13.708C50.336 14.6605 49.4063 15.1367 48.1667 15.1367ZM48.0095 8.50586C47.4991 8.50586 47.0707 8.69271 46.7244 9.06641C46.378 9.43555 46.1638 9.95508 46.0818 10.625H49.7869V10.5293C49.7504 9.88672 49.5772 9.38997 49.2673 9.03906C48.9574 8.68359 48.5382 8.50586 48.0095 8.50586ZM55.488 14.1045C55.9392 14.1045 56.3334 13.9678 56.6707 13.6943C57.0079 13.4209 57.1947 13.0791 57.2312 12.6689H58.4275C58.4047 13.0928 58.2589 13.4961 57.99 13.8789C57.7211 14.2617 57.3611 14.5671 56.9099 14.7949C56.4633 15.0228 55.9893 15.1367 55.488 15.1367C54.4809 15.1367 53.6788 14.8018 53.0818 14.1318C52.4893 13.4574 52.1931 12.5368 52.1931 11.3701V11.1582C52.1931 10.4382 52.3253 9.79785 52.5896 9.2373C52.8539 8.67676 53.2322 8.24154 53.7244 7.93164C54.2211 7.62174 54.8067 7.4668 55.4812 7.4668C56.3106 7.4668 56.9988 7.71517 57.5457 8.21191C58.0971 8.70866 58.391 9.35352 58.4275 10.1465H57.2312C57.1947 9.66797 57.0125 9.27604 56.6843 8.9707C56.3608 8.66081 55.9597 8.50586 55.4812 8.50586C54.8386 8.50586 54.3396 8.73828 53.9841 9.20312C53.6332 9.66341 53.4578 10.3311 53.4578 11.2061V11.4453C53.4578 12.2975 53.6332 12.9538 53.9841 13.4141C54.335 13.8743 54.8363 14.1045 55.488 14.1045ZM61.5652 5.8125V7.60352H62.946V8.58105H61.5652V13.168C61.5652 13.4642 61.6267 13.6875 61.7498 13.8379C61.8728 13.9837 62.0824 14.0566 62.3787 14.0566C62.5245 14.0566 62.725 14.0293 62.9802 13.9746V15C62.6475 15.0911 62.324 15.1367 62.0095 15.1367C61.4444 15.1367 61.0183 14.9658 60.7312 14.624C60.4441 14.2822 60.3005 13.7969 60.3005 13.168V8.58105H58.9539V7.60352H60.3005V5.8125H61.5652Z"), r(s, "fill", "currentColor"), r(t, "viewBox", "0 0 91 20"), r(t, "fill", "none"), r(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, l) {
            a(e, t, l), o(t, n), o(t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function rt(e) {
    let t, n, l = e[4].version.projectName + " " + e[4].version.projectVersion;
    return {
        c() {
            t = s("span"), n = k(l), r(t, "id", "version"), r(t, "class", "text-white bg-darkBlue w-full text-center h-full")
        },
        m(e, s) {
            a(e, t, s), o(t, n)
        },
        p(e, t) {
            16 & t[0] && l !== (l = e[4].version.projectName + " " + e[4].version.projectVersion) && G(n, l)
        },
        d(e) {
            e && u(t)
        }
    }
}

function at(e) {
    let t, n, i, $, p, d, f, m, g, C, h, y, k, M, F, G, V, S, K, j, B, A, R, D, Z, U, O, E, z, I, N, q;
    t = new ze({
        props: {
            open: e[0],
            size: "75%",
            placement: "left",
            $$slots: {
                default: [nt]
            },
            $$scope: {
                ctx: e
            }
        }
    }), t.$on("clickAway", e[23]), i = new P({
        props: {
            openDrawer: e[24],
            loadFile: e[9],
            saveFile: e[10]
        }
    });
    const T = [{
        loadFile: e[9],
        saveFile: e[10],
        startedGame: e[3],
        currentKeys: e[1],
        Module: e[4],
        exportMappings: e[11],
        importMappings: e[12]
    }];
    let W = {};
    for (let s = 0; s < T.length; s += 1) W = H(W, T[s]);
    d = new xe({
        props: W
    }), k = new be({
        props: {
            startedGame: e[3],
            Module: e[4]
        }
    }), F = new Le({
        props: {
            startedGame: e[3],
            Module: e[4]
        }
    }), V = new Ke({
        props: {
            startedGame: e[3],
            Module: e[4]
        }
    });
    const J = [{
        Module: e[4],
        startedGame: e[3]
    }];
    let Q = {};
    for (let s = 0; s < J.length; s += 1) Q = H(Q, J[s]);
    j = new Ue({
        props: Q
    }), R = new he({
        props: {
            pressFunc: e[26],
            releaseFunc: e[27],
            class: "w-20",
            $$slots: {
                default: [st]
            },
            $$scope: {
                ctx: e
            }
        }
    }), Z = new he({
        props: {
            class: "w-20",
            pressFunc: e[28],
            releaseFunc: e[29],
            $$slots: {
                default: [lt]
            },
            $$scope: {
                ctx: e
            }
        }
    });
    let X = e[2] && rt(e);
    return {
        c() {
            v(t.$$.fragment), n = l(), v(i.$$.fragment), $ = l(), p = s("main"), v(d.$$.fragment), f = l(), m = s("div"), g = s("div"), g.innerHTML = '<canvas id="canvas"></canvas>', C = l(), h = s("div"), y = s("div"), v(k.$$.fragment), M = l(), v(F.$$.fragment), G = l(), v(V.$$.fragment), S = l(), K = s("div"), v(j.$$.fragment), B = l(), A = s("div"), v(R.$$.fragment), D = l(), v(Z.$$.fragment), U = l(), O = s("div"), E = l(), z = s("footer"), X && X.c(), r(g, "class", "bg-black w-full  grid place-items-center  "), r(y, "class", "p-2 flex justify-between flex-nowrap "), r(K, "class", "flex-grow flex justify-evenly p-2 space-x-2 "), r(A, "class", "flex-shrink-0 flex flex-col justify-center items-center space-y-4"), r(h, "class", "flex flex-col flex-grow w-full text-pink"), r(m, "class", "flex flex-col place-items-start w-full lg:w-3/5 h-min"), r(O, "class", "hidden lg:block"), r(p, "class", "bg-darkBlue flex h-max relative justify-between flex-grow lg:pt-4"), r(z, "class", "flex justify-around")
        },
        m(s, l) {
            b(t, s, l), a(s, n, l), b(i, s, l), a(s, $, l), a(s, p, l), b(d, p, null), o(p, f), o(p, m), o(m, g), e[25](g), o(m, C), o(m, h), o(h, y), b(k, y, null), o(y, M), b(F, y, null), o(y, G), b(V, y, null), o(h, S), o(h, K), b(j, K, null), o(h, B), o(h, A), b(R, A, null), o(A, D), b(Z, A, null), o(p, U), o(p, O), a(s, E, l), a(s, z, l), X && X.m(z, null), I = !0, N || (q = c(Ie, "resize", e[18]), N = !0)
        },
        p(e, n) {
            const s = {};
            1 & n[0] && (s.open = e[0]), 200 & n[0] | 128 & n[1] && (s.$$scope = {
                dirty: n,
                ctx: e
            }), t.$set(s);
            const l = {};
            1 & n[0] && (l.openDrawer = e[24]), i.$set(l);
            const r = 7706 & n[0] ? _(T, [{
                loadFile: e[9],
                saveFile: e[10],
                startedGame: e[3],
                currentKeys: e[1],
                Module: e[4],
                exportMappings: e[11],
                importMappings: e[12]
            }]) : {};
            d.$set(r);
            const a = {};
            8 & n[0] && (a.startedGame = e[3]), 16 & n[0] && (a.Module = e[4]), k.$set(a);
            const o = {};
            8 & n[0] && (o.startedGame = e[3]), 16 & n[0] && (o.Module = e[4]), F.$set(o);
            const c = {};
            8 & n[0] && (c.startedGame = e[3]), 16 & n[0] && (c.Module = e[4]), V.$set(c);
            const $ = 24 & n[0] ? _(J, [{
                Module: e[4],
                startedGame: e[3]
            }]) : {};
            j.$set($);
            const u = {};
            16 & n[0] && (u.pressFunc = e[26]), 16 & n[0] && (u.releaseFunc = e[27]), 128 & n[1] && (u.$$scope = {
                dirty: n,
                ctx: e
            }), R.$set(u);
            const p = {};
            16 & n[0] && (p.pressFunc = e[28]), 16 & n[0] && (p.releaseFunc = e[29]), 128 & n[1] && (p.$$scope = {
                dirty: n,
                ctx: e
            }), Z.$set(p), e[2] ? X ? X.p(e, n) : (X = rt(e), X.c(), X.m(z, null)) : X && (X.d(1), X = null)
        },
        i(e) {
            I || (x(t.$$.fragment, e), x(i.$$.fragment, e), x(d.$$.fragment, e), x(k.$$.fragment, e), x(F.$$.fragment, e), x(V.$$.fragment, e), x(j.$$.fragment, e), x(R.$$.fragment, e), x(Z.$$.fragment, e), I = !0)
        },
        o(e) {
            w(t.$$.fragment, e), w(i.$$.fragment, e), w(d.$$.fragment, e), w(k.$$.fragment, e), w(F.$$.fragment, e), w(V.$$.fragment, e), w(j.$$.fragment, e), w(R.$$.fragment, e), w(Z.$$.fragment, e), I = !1
        },
        d(s) {
            L(t, s), s && u(n), L(i, s), s && u($), s && u(p), L(d), e[25](null), L(k), L(F), L(V), L(j), L(R), L(Z), s && u(E), s && u(z), X && X.d(), N = !1, q()
        }
    }
}

function ot(e, t, n) {
    let s, l, r = !1,
        a = {
            A: null,
            B: null,
            Start: null,
            Select: null,
            R: null,
            L: null,
            Up: null,
            Down: null,
            Left: null,
            Right: null,
            Forward: null
        },
        o = !1,
        c = !1;

    function i(e, t) {
        s._setSize(e, t)
    }
    let $ = document.createElement("input");
    $.type = "file", $.addEventListener("change", (function(e) {
        let t = e.target.files[0];
        var r = new FileReader;
        r.onload = function(e) {
            var r, o;
            r = t.name, o = e.target.result, s.FS.writeFile(r, new Uint8Array(o)), s.loadFile(r), i(l.clientWidth, l.clientHeight), n(3, c = !0), n(1, a = U(s))
        }, r.readAsArrayBuffer(t)
    }));
    let u = document.createElement("input");
    u.type = "file", u.addEventListener("change", (function(e) {
        let t = e.target.files[0];
        var l = new FileReader;
        l.onload = function(e) {
            n(1, a = U(s)), n(6, d.value = 1, d), g = 1, s._setVolume(1)
        }, l.readAsText(t)
    }));


 // Fralacticus
    // Fonction pour gérer les données du fichier
function handleFileData(fileName, fileData) {
    s.FS.writeFile(fileName, new Uint8Array(fileData));
    s.loadFile(fileName);
    i(l.clientWidth, l.clientHeight);
    n(3, c = !0);
    n(1, a = U(s));
    // Ici, ajoutez tout traitement supplémentaire nécessaire
    // Par exemple, i(l.clientWidth, l.clientHeight), etc.
}

// Fonction pour charger un fichier depuis l'URL
async function loadFileFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file'); // Remplacez 'file' par le paramètre approprié de l'URL

    
    if (fileName) {
        try {
            const fileUrl = `https://fralacticus.github.io/mgbawasm/${fileName}`; //new URL(fileName, window.location.origin).href;
            const response = await fetch(fileUrl);
            const arrayBuffer = await response.arrayBuffer();
            handleFileData(fileName, arrayBuffer);
        } catch (error) {
            console.error('Erreur lors de la lecture du fichier:', error);
        }
    }
}

// Appeler la fonction au chargement de la page
window.onload = () => {
    loadFileFromURL();
};













    
    let p = document.createElement("a");
    let d;

    function f() {
        p.download = "mappings.json";
        var e = new Blob([JSON.stringify(a)], {
            type: "aplication/json"
        });
        p.href = URL.createObjectURL(e), p.click()
    }

    function m() {
        u.click()
    }
    y((() => {
        n(4, s = {
            canvas: document.getElementById("canvas")
        }), mGBA(s).then((() => {
            window.Module = s, n(2, o = !0)
        }))
    }));
    let g = 1,
        x = 2;
    return [r, a, o, c, s, l, d, x, i, () => $.click(), () => {
        var e = s.getSave();
        p.download = s.saveName;
        var t = new Blob([e], {
            type: "application/octet-stream"
        });
        p.href = URL.createObjectURL(t), p.click()
    }, f, m, () => {
        n(7, x++, x), s._setSpeed(x)
    }, () => {
        n(7, x--, x), x < 2 && n(7, x = 2), s._setSpeed(x)
    }, e => {
        c && s._setVolume(e.target.value)
    }, function() {
        s._mute(), g = d.value, n(6, d.value = 0, d)
    }, function() {
        s._unMute(), n(6, d.value = g, d)
    }, () => {
        c && i(l.clientWidth, l.clientHeight)
    }, function() {
        x = F(this.value), n(7, x)
    }, function(e) {
        V[e ? "unshift" : "push"]((() => {
            d = e, n(6, d)
        }))
    }, () => m(), () => f(), () => n(0, r = !1), () => {
        console.log("open"), n(0, r = !0)
    }, function(e) {
        V[e ? "unshift" : "push"]((() => {
            l = e, n(5, l)
        }))
    }, () => s._pressKeyStart(), () => s._releaseKeyStart(), () => s._pressKeySelect(), () => s._releaseKeySelect()]
}
class ct extends e {
    constructor(e) {
        super(), t(this, e, ot, at, n, {}, null, [-1, -1])
    }
}

function it(e) {
    let t, n;
    return t = new ct({}), {
        c() {
            v(t.$$.fragment)
        },
        m(e, s) {
            b(t, e, s), n = !0
        },
        i(e) {
            n || (x(t.$$.fragment, e), n = !0)
        },
        o(e) {
            w(t.$$.fragment, e), n = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function $t(e) {
    let t, n;
    return t = new R({
        props: {
            $$slots: {
                default: [it]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            v(t.$$.fragment)
        },
        m(e, s) {
            b(t, e, s), n = !0
        },
        p(e, [n]) {
            const s = {};
            1 & n && (s.$$scope = {
                dirty: n,
                ctx: e
            }), t.$set(s)
        },
        i(e) {
            n || (x(t.$$.fragment, e), n = !0)
        },
        o(e) {
            w(t.$$.fragment, e), n = !1
        },
        d(e) {
            L(t, e)
        }
    }
}
new class extends e {
    constructor(e) {
        super(), t(this, e, null, $t, n, {})
    }
}({
    target: document.getElementById("app")
});
