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

/*! howler.js v2.1.1 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
! function() {
    "use strict";

    var e = function e() {
        this.init();
    };

    e.prototype = {
        init: function init() {
            var e = this || n;
            return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e;
        },
        volume: function volume(e) {
            var o = this || n;

            if (e = parseFloat(e), o.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
                if (o._volume = e, o._muted) return o;
                o.usingWebAudio && o.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);

                for (var t = 0; t < o._howls.length; t++) {
                    if (!o._howls[t]._webAudio)
                        for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                            var u = o._howls[t]._soundById(r[a]);

                            u && u._node && (u._node.volume = u._volume * e);
                        }
                }

                return o;
            }

            return o._volume;
        },
        mute: function mute(e) {
            var o = this || n;
            o.ctx || _(), o._muted = e, o.usingWebAudio && o.masterGain.gain.setValueAtTime(e ? 0 : o._volume, n.ctx.currentTime);

            for (var t = 0; t < o._howls.length; t++) {
                if (!o._howls[t]._webAudio)
                    for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                        var u = o._howls[t]._soundById(r[a]);

                        u && u._node && (u._node.muted = !!e || u._muted);
                    }
            }

            return o;
        },
        unload: function unload() {
            for (var e = this || n, o = e._howls.length - 1; o >= 0; o--) {
                e._howls[o].unload();
            }

            return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()), e;
        },
        codecs: function codecs(e) {
            return (this || n)._codecs[e.replace(/^x-/, "")];
        },
        _setup: function _setup() {
            var e = this || n;
            if (e.state = e.ctx ? e.ctx.state || "suspended" : "suspended", e._autoSuspend(), !e.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    var o = new Audio();
                    void 0 === o.oncanplaythrough && (e._canPlayEvent = "canplay");
                } catch (n) {
                    e.noAudio = !0;
                } else e.noAudio = !0;

            try {
                var o = new Audio();
                o.muted && (e.noAudio = !0);
            } catch (e) {}

            return e.noAudio || e._setupCodecs(), e;
        },
        _setupCodecs: function _setupCodecs() {
            var e = this || n,
                o = null;

            try {
                o = "undefined" != typeof Audio ? new Audio() : null;
            } catch (n) {
                return e;
            }

            if (!o || "function" != typeof o.canPlayType) return e;

            var t = o.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                a = r && parseInt(r[0].split("/")[1], 10) < 33;

            return e._codecs = {
                mp3: !(a || !t && !o.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!t,
                opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!o.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(o.canPlayType("audio/x-m4a;") || o.canPlayType("audio/m4a;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(o.canPlayType("audio/x-mp4;") || o.canPlayType("audio/mp4;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(o.canPlayType("audio/x-flac;") || o.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, e;
        },
        _unlockAudio: function _unlockAudio() {
            var e = this || n,
                o = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(e._navigator && e._navigator.userAgent);

            if (!e._audioUnlocked && e.ctx && o) {
                e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);

                var t = function t(n) {
                    for (var o = 0; o < e.html5PoolSize; o++) {
                        var r = new Audio();
                        r._unlocked = !0, e._releaseHtml5Audio(r);
                    }

                    for (var o = 0; o < e._howls.length; o++) {
                        if (!e._howls[o]._webAudio)
                            for (var a = e._howls[o]._getSoundIds(), u = 0; u < a.length; u++) {
                                var i = e._howls[o]._soundById(a[u]);

                                i && i._node && !i._node._unlocked && (i._node._unlocked = !0, i._node.load());
                            }
                    }

                    e._autoResume();

                    var d = e.ctx.createBufferSource();
                    d.buffer = e._scratchBuffer, d.connect(e.ctx.destination), void 0 === d.start ? d.noteOn(0) : d.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), d.onended = function() {
                        d.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0);

                        for (var n = 0; n < e._howls.length; n++) {
                            e._howls[n]._emit("unlock");
                        }
                    };
                };

                return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), e;
            }
        },
        _obtainHtml5Audio: function _obtainHtml5Audio() {
            var e = this || n;
            if (e._html5AudioPool.length) return e._html5AudioPool.pop();
            var o = new Audio().play();
            return o && "undefined" != typeof Promise && (o instanceof Promise || "function" == typeof o.then) && o["catch"](function() {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            }), new Audio();
        },
        _releaseHtml5Audio: function _releaseHtml5Audio(e) {
            var o = this || n;
            return e._unlocked && o._html5AudioPool.push(e), o;
        },
        _autoSuspend: function _autoSuspend() {
            var e = this;

            if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
                for (var o = 0; o < e._howls.length; o++) {
                    if (e._howls[o]._webAudio)
                        for (var t = 0; t < e._howls[o]._sounds.length; t++) {
                            if (!e._howls[o]._sounds[t]._paused) return e;
                        }
                }

                return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                    e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function() {
                        e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                    }));
                }, 3e4), e;
            }
        },
        _autoResume: function _autoResume() {
            var e = this;
            if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function() {
                e.state = "running";

                for (var n = 0; n < e._howls.length; n++) {
                    e._howls[n]._emit("resume");
                }
            }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e;
        }
    };

    var n = new e(),
        o = function o(e) {
            var n = this;
            if (!e.src || 0 === e.src.length) return void console.error("An array of source files must be passed with any new Howl.");
            n.init(e);
        };

    o.prototype = {
        init: function init(e) {
            var o = this;
            return n.ctx || _(), o._autoplay = e.autoplay || !1, o._format = "string" != typeof e.format ? e.format : [e.format], o._html5 = e.html5 || !1, o._muted = e.mute || !1, o._loop = e.loop || !1, o._pool = e.pool || 5, o._preload = "boolean" != typeof e.preload || e.preload, o._rate = e.rate || 1, o._sprite = e.sprite || {}, o._src = "string" != typeof e.src ? e.src : [e.src], o._volume = void 0 !== e.volume ? e.volume : 1, o._xhrWithCredentials = e.xhrWithCredentials || !1, o._duration = 0, o._state = "unloaded", o._sounds = [], o._endTimers = {}, o._queue = [], o._playLock = !1, o._onend = e.onend ? [{
                fn: e.onend
            }] : [], o._onfade = e.onfade ? [{
                fn: e.onfade
            }] : [], o._onload = e.onload ? [{
                fn: e.onload
            }] : [], o._onloaderror = e.onloaderror ? [{
                fn: e.onloaderror
            }] : [], o._onplayerror = e.onplayerror ? [{
                fn: e.onplayerror
            }] : [], o._onpause = e.onpause ? [{
                fn: e.onpause
            }] : [], o._onplay = e.onplay ? [{
                fn: e.onplay
            }] : [], o._onstop = e.onstop ? [{
                fn: e.onstop
            }] : [], o._onmute = e.onmute ? [{
                fn: e.onmute
            }] : [], o._onvolume = e.onvolume ? [{
                fn: e.onvolume
            }] : [], o._onrate = e.onrate ? [{
                fn: e.onrate
            }] : [], o._onseek = e.onseek ? [{
                fn: e.onseek
            }] : [], o._onunlock = e.onunlock ? [{
                fn: e.onunlock
            }] : [], o._onresume = [], o._webAudio = n.usingWebAudio && !o._html5, void 0 !== n.ctx && n.ctx && n.autoUnlock && n._unlockAudio(), n._howls.push(o), o._autoplay && o._queue.push({
                event: "play",
                action: function action() {
                    o.play();
                }
            }), o._preload && o.load(), o;
        },
        load: function load() {
            var e = this,
                o = null;
            if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
            "string" == typeof e._src && (e._src = [e._src]);

            for (var r = 0; r < e._src.length; r++) {
                var u, i;
                if (e._format && e._format[r]) u = e._format[r];
                else {
                    if ("string" != typeof(i = e._src[r])) {
                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");

                        continue;
                    }

                    u = /^data:audio\/([^;,]+);/i.exec(i), u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])), u && (u = u[1].toLowerCase());
                }

                if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), u && n.codecs(u)) {
                    o = e._src[r];
                    break;
                }
            }

            return o ? (e._src = o, e._state = "loading", "https:" === window.location.protocol && "http:" === o.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new t(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.");
        },
        play: function play(e, o) {
            var t = this,
                r = null;
            if ("number" == typeof e) r = e, e = null;
            else {
                if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;

                if (void 0 === e && (e = "__default", !t._playLock)) {
                    for (var a = 0, u = 0; u < t._sounds.length; u++) {
                        t._sounds[u]._paused && !t._sounds[u]._ended && (a++, r = t._sounds[u]._id);
                    }

                    1 === a ? e = null : r = null;
                }
            }
            var i = r ? t._soundById(r) : t._inactiveSound();
            if (!i) return null;

            if (r && !e && (e = i._sprite || "__default"), "loaded" !== t._state) {
                i._sprite = e, i._ended = !1;
                var d = i._id;
                return t._queue.push({
                    event: "play",
                    action: function action() {
                        t.play(d);
                    }
                }), d;
            }

            if (r && !i._paused) return o || t._loadQueue("play"), i._id;
            t._webAudio && n._autoResume();

            var _ = Math.max(0, i._seek > 0 ? i._seek : t._sprite[e][0] / 1e3),
                s = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
                l = 1e3 * s / Math.abs(i._rate),
                c = t._sprite[e][0] / 1e3,
                f = (t._sprite[e][0] + t._sprite[e][1]) / 1e3,
                p = !(!i._loop && !t._sprite[e][2]);

            i._sprite = e, i._ended = !1;

            var m = function m() {
                i._paused = !1, i._seek = _, i._start = c, i._stop = f, i._loop = p;
            };

            if (_ >= f) return void t._ended(i);
            var v = i._node;

            if (t._webAudio) {
                var h = function h() {
                    t._playLock = !1, m(), t._refreshBuffer(i);
                    var e = i._muted || t._muted ? 0 : i._volume;
                    v.gain.setValueAtTime(e, n.ctx.currentTime), i._playStart = n.ctx.currentTime, void 0 === v.bufferSource.start ? i._loop ? v.bufferSource.noteGrainOn(0, _, 86400) : v.bufferSource.noteGrainOn(0, _, s) : i._loop ? v.bufferSource.start(0, _, 86400) : v.bufferSource.start(0, _, s), l !== 1 / 0 && (t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l)), o || setTimeout(function() {
                        t._emit("play", i._id), t._loadQueue();
                    }, 0);
                };

                "running" === n.state ? h() : (t._playLock = !0, t.once("resume", h), t._clearTimer(i._id));
            } else {
                var y = function y() {
                        v.currentTime = _, v.muted = i._muted || t._muted || n._muted || v.muted, v.volume = i._volume * n.volume(), v.playbackRate = i._rate;

                        try {
                            var r = v.play();
                            if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (t._playLock = !0, m(), r.then(function() {
                                    t._playLock = !1, v._unlocked = !0, o || (t._emit("play", i._id), t._loadQueue());
                                })["catch"](function() {
                                    t._playLock = !1, t._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), i._ended = !0, i._paused = !0;
                                })) : o || (t._playLock = !1, m(), t._emit("play", i._id), t._loadQueue()), v.playbackRate = i._rate, v.paused) return void t._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            "__default" !== e || i._loop ? t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l) : (t._endTimers[i._id] = function() {
                                t._ended(i), v.removeEventListener("ended", t._endTimers[i._id], !1);
                            }, v.addEventListener("ended", t._endTimers[i._id], !1));
                        } catch (e) {
                            t._emit("playerror", i._id, e);
                        }
                    },
                    g = window && window.ejecta || !v.readyState && n._navigator.isCocoonJS;

                if (v.readyState >= 3 || g) y();
                else {
                    t._playLock = !0;

                    var b = function b() {
                        y(), v.removeEventListener(n._canPlayEvent, b, !1);
                    };

                    v.addEventListener(n._canPlayEvent, b, !1), t._clearTimer(i._id);
                }
            }

            return i._id;
        },
        pause: function pause(e) {
            var n = this;
            if ("loaded" !== n._state || n._playLock) return n._queue.push({
                event: "pause",
                action: function action() {
                    n.pause(e);
                }
            }), n;

            for (var o = n._getSoundIds(e), t = 0; t < o.length; t++) {
                n._clearTimer(o[t]);

                var r = n._soundById(o[t]);

                if (r && !r._paused && (r._seek = n.seek(o[t]), r._rateSeek = 0, r._paused = !0, n._stopFade(o[t]), r._node))
                    if (n._webAudio) {
                        if (!r._node.bufferSource) continue;
                        void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node);
                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || n._emit("pause", r ? r._id : null);
            }

            return n;
        },
        stop: function stop(e, n) {
            var o = this;
            if ("loaded" !== o._state || o._playLock) return o._queue.push({
                event: "stop",
                action: function action() {
                    o.stop(e);
                }
            }), o;

            for (var t = o._getSoundIds(e), r = 0; r < t.length; r++) {
                o._clearTimer(t[r]);

                var a = o._soundById(t[r]);

                a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, o._stopFade(t[r]), a._node && (o._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), o._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), n || o._emit("stop", a._id));
            }

            return o;
        },
        mute: function mute(e, o) {
            var t = this;
            if ("loaded" !== t._state || t._playLock) return t._queue.push({
                event: "mute",
                action: function action() {
                    t.mute(e, o);
                }
            }), t;

            if (void 0 === o) {
                if ("boolean" != typeof e) return t._muted;
                t._muted = e;
            }

            for (var r = t._getSoundIds(o), a = 0; a < r.length; a++) {
                var u = t._soundById(r[a]);

                u && (u._muted = e, u._interval && t._stopFade(u._id), t._webAudio && u._node ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime) : u._node && (u._node.muted = !!n._muted || e), t._emit("mute", u._id));
            }

            return t;
        },
        volume: function volume() {
            var e,
                o,
                t = this,
                r = arguments;
            if (0 === r.length) return t._volume;

            if (1 === r.length || 2 === r.length && void 0 === r[1]) {
                t._getSoundIds().indexOf(r[0]) >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]);
            } else r.length >= 2 && (e = parseFloat(r[0]), o = parseInt(r[1], 10));

            var a;
            if (!(void 0 !== e && e >= 0 && e <= 1)) return a = o ? t._soundById(o) : t._sounds[0], a ? a._volume : 0;
            if ("loaded" !== t._state || t._playLock) return t._queue.push({
                event: "volume",
                action: function action() {
                    t.volume.apply(t, r);
                }
            }), t;
            void 0 === o && (t._volume = e), o = t._getSoundIds(o);

            for (var u = 0; u < o.length; u++) {
                (a = t._soundById(o[u])) && (a._volume = e, r[2] || t._stopFade(o[u]), t._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), t._emit("volume", a._id));
            }

            return t;
        },
        fade: function fade(e, o, t, r) {
            var a = this;
            if ("loaded" !== a._state || a._playLock) return a._queue.push({
                event: "fade",
                action: function action() {
                    a.fade(e, o, t, r);
                }
            }), a;
            e = parseFloat(e), o = parseFloat(o), t = parseFloat(t), a.volume(e, r);

            for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
                var d = a._soundById(u[i]);

                if (d) {
                    if (r || a._stopFade(u[i]), a._webAudio && !d._muted) {
                        var _ = n.ctx.currentTime,
                            s = _ + t / 1e3;
                        d._volume = e, d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(o, s);
                    }

                    a._startFadeInterval(d, e, o, t, u[i], void 0 === r);
                }
            }

            return a;
        },
        _startFadeInterval: function _startFadeInterval(e, n, o, t, r, a) {
            var u = this,
                i = n,
                d = o - n,
                _ = Math.abs(d / .01),
                s = Math.max(4, _ > 0 ? t / _ : t),
                l = Date.now();

            e._fadeTo = o, e._interval = setInterval(function() {
                var r = (Date.now() - l) / t;
                l = Date.now(), i += d * r, i = Math.max(0, i), i = Math.min(1, i), i = Math.round(100 * i) / 100, u._webAudio ? e._volume = i : u.volume(i, e._id, !0), a && (u._volume = i), (o < n && i <= o || o > n && i >= o) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, u.volume(o, e._id), u._emit("fade", e._id));
            }, s);
        },
        _stopFade: function _stopFade(e) {
            var o = this,
                t = o._soundById(e);

            return t && t._interval && (o._webAudio && t._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(t._interval), t._interval = null, o.volume(t._fadeTo, e), t._fadeTo = null, o._emit("fade", e)), o;
        },
        loop: function loop() {
            var e,
                n,
                o,
                t = this,
                r = arguments;
            if (0 === r.length) return t._loop;

            if (1 === r.length) {
                if ("boolean" != typeof r[0]) return !!(o = t._soundById(parseInt(r[0], 10))) && o._loop;
                e = r[0], t._loop = e;
            } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));

            for (var a = t._getSoundIds(n), u = 0; u < a.length; u++) {
                (o = t._soundById(a[u])) && (o._loop = e, t._webAudio && o._node && o._node.bufferSource && (o._node.bufferSource.loop = e, e && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop)));
            }

            return t;
        },
        rate: function rate() {
            var e,
                o,
                t = this,
                r = arguments;
            if (0 === r.length) o = t._sounds[0]._id;
            else if (1 === r.length) {
                var a = t._getSoundIds(),
                    u = a.indexOf(r[0]);

                u >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]);
            } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
            var i;
            if ("number" != typeof e) return i = t._soundById(o), i ? i._rate : t._rate;
            if ("loaded" !== t._state || t._playLock) return t._queue.push({
                event: "rate",
                action: function action() {
                    t.rate.apply(t, r);
                }
            }), t;
            void 0 === o && (t._rate = e), o = t._getSoundIds(o);

            for (var d = 0; d < o.length; d++) {
                if (i = t._soundById(o[d])) {
                    t.playing(o[d]) && (i._rateSeek = t.seek(o[d]), i._playStart = t._webAudio ? n.ctx.currentTime : i._playStart), i._rate = e, t._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime) : i._node && (i._node.playbackRate = e);

                    var _ = t.seek(o[d]),
                        s = (t._sprite[i._sprite][0] + t._sprite[i._sprite][1]) / 1e3 - _,
                        l = 1e3 * s / Math.abs(i._rate);

                    !t._endTimers[o[d]] && i._paused || (t._clearTimer(o[d]), t._endTimers[o[d]] = setTimeout(t._ended.bind(t, i), l)), t._emit("rate", i._id);
                }
            }

            return t;
        },
        seek: function seek() {
            var e,
                o,
                t = this,
                r = arguments;
            if (0 === r.length) o = t._sounds[0]._id;
            else if (1 === r.length) {
                var a = t._getSoundIds(),
                    u = a.indexOf(r[0]);

                u >= 0 ? o = parseInt(r[0], 10) : t._sounds.length && (o = t._sounds[0]._id, e = parseFloat(r[0]));
            } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
            if (void 0 === o) return t;
            if ("loaded" !== t._state || t._playLock) return t._queue.push({
                event: "seek",
                action: function action() {
                    t.seek.apply(t, r);
                }
            }), t;

            var i = t._soundById(o);

            if (i) {
                if (!("number" == typeof e && e >= 0)) {
                    if (t._webAudio) {
                        var d = t.playing(o) ? n.ctx.currentTime - i._playStart : 0,
                            _ = i._rateSeek ? i._rateSeek - i._seek : 0;

                        return i._seek + (_ + d * Math.abs(i._rate));
                    }

                    return i._node.currentTime;
                }

                var s = t.playing(o);
                s && t.pause(o, !0), i._seek = e, i._ended = !1, t._clearTimer(o), t._webAudio || !i._node || isNaN(i._node.duration) || (i._node.currentTime = e);

                var l = function l() {
                    t._emit("seek", o), s && t.play(o, !0);
                };

                if (s && !t._webAudio) {
                    var c = function c() {
                        t._playLock ? setTimeout(c, 0) : l();
                    };

                    setTimeout(c, 0);
                } else l();
            }

            return t;
        },
        playing: function playing(e) {
            var n = this;

            if ("number" == typeof e) {
                var o = n._soundById(e);

                return !!o && !o._paused;
            }

            for (var t = 0; t < n._sounds.length; t++) {
                if (!n._sounds[t]._paused) return !0;
            }

            return !1;
        },
        duration: function duration(e) {
            var n = this,
                o = n._duration,
                t = n._soundById(e);

            return t && (o = n._sprite[t._sprite][1] / 1e3), o;
        },
        state: function state() {
            return this._state;
        },
        unload: function unload() {
            for (var e = this, o = e._sounds, t = 0; t < o.length; t++) {
                if (o[t]._paused || e.stop(o[t]._id), !e._webAudio) {
                    /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (o[t]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), o[t]._node.removeEventListener("error", o[t]._errorFn, !1), o[t]._node.removeEventListener(n._canPlayEvent, o[t]._loadFn, !1), n._releaseHtml5Audio(o[t]._node);
                }

                delete o[t]._node, e._clearTimer(o[t]._id);
            }

            var a = n._howls.indexOf(e);

            a >= 0 && n._howls.splice(a, 1);
            var u = !0;

            for (t = 0; t < n._howls.length; t++) {
                if (n._howls[t]._src === e._src || e._src.indexOf(n._howls[t]._src) >= 0) {
                    u = !1;
                    break;
                }
            }

            return r && u && delete r[e._src], n.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null;
        },
        on: function on(e, n, o, t) {
            var r = this,
                a = r["_on" + e];
            return "function" == typeof n && a.push(t ? {
                id: o,
                fn: n,
                once: t
            } : {
                id: o,
                fn: n
            }), r;
        },
        off: function off(e, n, o) {
            var t = this,
                r = t["_on" + e],
                a = 0;
            if ("number" == typeof n && (o = n, n = null), n || o)
                for (a = 0; a < r.length; a++) {
                    var u = o === r[a].id;

                    if (n === r[a].fn && u || !n && u) {
                        r.splice(a, 1);
                        break;
                    }
                } else if (e) t["_on" + e] = [];
                else {
                    var i = Object.keys(t);

                    for (a = 0; a < i.length; a++) {
                        0 === i[a].indexOf("_on") && Array.isArray(t[i[a]]) && (t[i[a]] = []);
                    }
                }
            return t;
        },
        once: function once(e, n, o) {
            var t = this;
            return t.on(e, n, o, 1), t;
        },
        _emit: function _emit(e, n, o) {
            for (var t = this, r = t["_on" + e], a = r.length - 1; a >= 0; a--) {
                r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function(e) {
                    e.call(this, n, o);
                }.bind(t, r[a].fn), 0), r[a].once && t.off(e, r[a].fn, r[a].id));
            }

            return t._loadQueue(e), t;
        },
        _loadQueue: function _loadQueue(e) {
            var n = this;

            if (n._queue.length > 0) {
                var o = n._queue[0];
                o.event === e && (n._queue.shift(), n._loadQueue()), e || o.action();
            }

            return n;
        },
        _ended: function _ended(e) {
            var o = this,
                t = e._sprite;
            if (!o._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(o._ended.bind(o, e), 100), o;
            var r = !(!e._loop && !o._sprite[t][2]);

            if (o._emit("end", e._id), !o._webAudio && r && o.stop(e._id, !0).play(e._id), o._webAudio && r) {
                o._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = n.ctx.currentTime;
                var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                o._endTimers[e._id] = setTimeout(o._ended.bind(o, e), a);
            }

            return o._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, o._clearTimer(e._id), o._cleanBuffer(e._node), n._autoSuspend()), o._webAudio || r || o.stop(e._id, !0), o;
        },
        _clearTimer: function _clearTimer(e) {
            var n = this;

            if (n._endTimers[e]) {
                if ("function" != typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
                else {
                    var o = n._soundById(e);

                    o && o._node && o._node.removeEventListener("ended", n._endTimers[e], !1);
                }
                delete n._endTimers[e];
            }

            return n;
        },
        _soundById: function _soundById(e) {
            for (var n = this, o = 0; o < n._sounds.length; o++) {
                if (e === n._sounds[o]._id) return n._sounds[o];
            }

            return null;
        },
        _inactiveSound: function _inactiveSound() {
            var e = this;

            e._drain();

            for (var n = 0; n < e._sounds.length; n++) {
                if (e._sounds[n]._ended) return e._sounds[n].reset();
            }

            return new t(e);
        },
        _drain: function _drain() {
            var e = this,
                n = e._pool,
                o = 0,
                t = 0;

            if (!(e._sounds.length < n)) {
                for (t = 0; t < e._sounds.length; t++) {
                    e._sounds[t]._ended && o++;
                }

                for (t = e._sounds.length - 1; t >= 0; t--) {
                    if (o <= n) return;
                    e._sounds[t]._ended && (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--);
                }
            }
        },
        _getSoundIds: function _getSoundIds(e) {
            var n = this;

            if (void 0 === e) {
                for (var o = [], t = 0; t < n._sounds.length; t++) {
                    o.push(n._sounds[t]._id);
                }

                return o;
            }

            return [e];
        },
        _refreshBuffer: function _refreshBuffer(e) {
            var o = this;
            return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = r[o._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime), o;
        },
        _cleanBuffer: function _cleanBuffer(e) {
            var o = this,
                t = n._navigator && n._navigator.vendor.indexOf("Apple") >= 0;
            if (n._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                e.bufferSource.buffer = n._scratchBuffer;
            } catch (e) {}
            return e.bufferSource = null, o;
        }
    };

    var t = function t(e) {
        this._parent = e, this.init();
    };

    t.prototype = {
        init: function init() {
            var e = this,
                o = e._parent;
            return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, o._sounds.push(e), e.create(), e;
        },
        create: function create() {
            var e = this,
                o = e._parent,
                t = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return o._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(t, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = n._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = o._src, e._node.preload = "auto", e._node.volume = t * n.volume(), e._node.load()), e;
        },
        reset: function reset() {
            var e = this,
                o = e._parent;
            return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, e;
        },
        _errorListener: function _errorListener() {
            var e = this;
            e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1);
        },
        _loadListener: function _loadListener() {
            var e = this,
                o = e._parent;
            o._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(o._sprite).length && (o._sprite = {
                __default: [0, 1e3 * o._duration]
            }), "loaded" !== o._state && (o._state = "loaded", o._emit("load"), o._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1);
        }
    };

    var r = {},
        a = function a(e) {
            var n = e._src;
            if (r[n]) return e._duration = r[n].duration, void d(e);

            if (/^data:[^;]+;base64,/.test(n)) {
                for (var o = atob(n.split(",")[1]), t = new Uint8Array(o.length), a = 0; a < o.length; ++a) {
                    t[a] = o.charCodeAt(a);
                }

                i(t.buffer, e);
            } else {
                var _ = new XMLHttpRequest();

                _.open("GET", n, !0), _.withCredentials = e._xhrWithCredentials, _.responseType = "arraybuffer", _.onload = function() {
                    var n = (_.status + "")[0];
                    if ("0" !== n && "2" !== n && "3" !== n) return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                    i(_.response, e);
                }, _.onerror = function() {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load());
                }, u(_);
            }
        },
        u = function u(e) {
            try {
                e.send();
            } catch (n) {
                e.onerror();
            }
        },
        i = function i(e, o) {
            var t = function t() {
                    o._emit("loaderror", null, "Decoding audio data failed.");
                },
                a = function a(e) {
                    e && o._sounds.length > 0 ? (r[o._src] = e, d(o, e)) : t();
                };

            "undefined" != typeof Promise && 1 === n.ctx.decodeAudioData.length ? n.ctx.decodeAudioData(e).then(a)["catch"](t) : n.ctx.decodeAudioData(e, a, t);
        },
        d = function d(e, n) {
            n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                __default: [0, 1e3 * e._duration]
            }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue());
        },
        _ = function _() {
            if (n.usingWebAudio) {
                try {
                    "undefined" != typeof AudioContext ? n.ctx = new AudioContext() : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext() : n.usingWebAudio = !1;
                } catch (e) {
                    n.usingWebAudio = !1;
                }

                n.ctx || (n.usingWebAudio = !1);

                var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
                    o = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    t = o ? parseInt(o[1], 10) : null;

                if (e && t && t < 9) {
                    var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
                    (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1);
                }

                n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime), n.masterGain.connect(n.ctx.destination)), n._setup();
            }
        };

    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: n,
            Howl: o
        };
    }), "undefined" != typeof exports && (exports.Howler = n, exports.Howl = o), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = o, window.Sound = t) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = o, global.Sound = t);
}();
/*! Spatial Plugin */

! function() {
    "use strict";

    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
        var n = this;
        if (!n.ctx || !n.ctx.listener) return n;

        for (var t = n._howls.length - 1; t >= 0; t--) {
            n._howls[t].stereo(e);
        }

        return n;
    }, HowlerGlobal.prototype.pos = function(e, n, t) {
        var r = this;
        return r.ctx && r.ctx.listener ? (n = "number" != typeof n ? r._pos[1] : n, t = "number" != typeof t ? r._pos[2] : t, "number" != typeof e ? r._pos : (r._pos = [e, n, t], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r;
    }, HowlerGlobal.prototype.orientation = function(e, n, t, r, o, i) {
        var a = this;
        if (!a.ctx || !a.ctx.listener) return a;
        var s = a._orientation;
        return n = "number" != typeof n ? s[1] : n, t = "number" != typeof t ? s[2] : t, r = "number" != typeof r ? s[3] : r, o = "number" != typeof o ? s[4] : o, i = "number" != typeof i ? s[5] : i, "number" != typeof e ? s : (a._orientation = [e, n, t, r, o, i], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, .1), a.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.upZ.setTargetAtTime(t, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, n, t, r, o, i), a);
    }, Howl.prototype.init = function(e) {
        return function(n) {
            var t = this;
            return t._orientation = n.orientation || [1, 0, 0], t._stereo = n.stereo || null, t._pos = n.pos || null, t._pannerAttr = {
                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse",
                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4,
                panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF",
                refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1
            }, t._onstereo = n.onstereo ? [{
                fn: n.onstereo
            }] : [], t._onpos = n.onpos ? [{
                fn: n.onpos
            }] : [], t._onorientation = n.onorientation ? [{
                fn: n.onorientation
            }] : [], e.call(this, n);
        };
    }(Howl.prototype.init), Howl.prototype.stereo = function(n, t) {
        var r = this;
        if (!r._webAudio) return r;
        if ("loaded" !== r._state) return r._queue.push({
            event: "stereo",
            action: function action() {
                r.stereo(n, t);
            }
        }), r;
        var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";

        if (void 0 === t) {
            if ("number" != typeof n) return r._stereo;
            r._stereo = n, r._pos = [n, 0, 0];
        }

        for (var i = r._getSoundIds(t), a = 0; a < i.length; a++) {
            var s = r._soundById(i[a]);

            if (s) {
                if ("number" != typeof n) return s._stereo;
                s._stereo = n, s._pos = [n, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || e(s, o), "spatial" === o ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(n, 0, 0) : s._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)), r._emit("stereo", s._id);
            }
        }

        return r;
    }, Howl.prototype.pos = function(n, t, r, o) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state) return i._queue.push({
            event: "pos",
            action: function action() {
                i.pos(n, t, r, o);
            }
        }), i;

        if (t = "number" != typeof t ? 0 : t, r = "number" != typeof r ? -.5 : r, void 0 === o) {
            if ("number" != typeof n) return i._pos;
            i._pos = [n, t, r];
        }

        for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
            var p = i._soundById(a[s]);

            if (p) {
                if ("number" != typeof n) return p._pos;
                p._pos = [n, t, r], p._node && (p._panner && !p._panner.pan || e(p, "spatial"), void 0 !== p._panner.positionX ? (p._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : p._panner.setPosition(n, t, r)), i._emit("pos", p._id);
            }
        }

        return i;
    }, Howl.prototype.orientation = function(n, t, r, o) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state) return i._queue.push({
            event: "orientation",
            action: function action() {
                i.orientation(n, t, r, o);
            }
        }), i;

        if (t = "number" != typeof t ? i._orientation[1] : t, r = "number" != typeof r ? i._orientation[2] : r, void 0 === o) {
            if ("number" != typeof n) return i._orientation;
            i._orientation = [n, t, r];
        }

        for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
            var p = i._soundById(a[s]);

            if (p) {
                if ("number" != typeof n) return p._orientation;
                p._orientation = [n, t, r], p._node && (p._panner || (p._pos || (p._pos = i._pos || [0, 0, -.5]), e(p, "spatial")), void 0 !== p._panner.orientationX ? (p._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), p._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : p._panner.setOrientation(n, t, r)), i._emit("orientation", p._id);
            }
        }

        return i;
    }, Howl.prototype.pannerAttr = function() {
        var n,
            t,
            r,
            o = this,
            i = arguments;
        if (!o._webAudio) return o;
        if (0 === i.length) return o._pannerAttr;

        if (1 === i.length) {
            if ("object" != _typeof(i[0])) return r = o._soundById(parseInt(i[0], 10)), r ? r._pannerAttr : o._pannerAttr;
            n = i[0], void 0 === t && (n.pannerAttr || (n.pannerAttr = {
                coneInnerAngle: n.coneInnerAngle,
                coneOuterAngle: n.coneOuterAngle,
                coneOuterGain: n.coneOuterGain,
                distanceModel: n.distanceModel,
                maxDistance: n.maxDistance,
                refDistance: n.refDistance,
                rolloffFactor: n.rolloffFactor,
                panningModel: n.panningModel
            }), o._pannerAttr = {
                coneInnerAngle: void 0 !== n.pannerAttr.coneInnerAngle ? n.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                coneOuterAngle: void 0 !== n.pannerAttr.coneOuterAngle ? n.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                coneOuterGain: void 0 !== n.pannerAttr.coneOuterGain ? n.pannerAttr.coneOuterGain : o._coneOuterGain,
                distanceModel: void 0 !== n.pannerAttr.distanceModel ? n.pannerAttr.distanceModel : o._distanceModel,
                maxDistance: void 0 !== n.pannerAttr.maxDistance ? n.pannerAttr.maxDistance : o._maxDistance,
                refDistance: void 0 !== n.pannerAttr.refDistance ? n.pannerAttr.refDistance : o._refDistance,
                rolloffFactor: void 0 !== n.pannerAttr.rolloffFactor ? n.pannerAttr.rolloffFactor : o._rolloffFactor,
                panningModel: void 0 !== n.pannerAttr.panningModel ? n.pannerAttr.panningModel : o._panningModel
            });
        } else 2 === i.length && (n = i[0], t = parseInt(i[1], 10));

        for (var a = o._getSoundIds(t), s = 0; s < a.length; s++) {
            if (r = o._soundById(a[s])) {
                var p = r._pannerAttr;
                p = {
                    coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : p.coneInnerAngle,
                    coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : p.coneOuterAngle,
                    coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : p.coneOuterGain,
                    distanceModel: void 0 !== n.distanceModel ? n.distanceModel : p.distanceModel,
                    maxDistance: void 0 !== n.maxDistance ? n.maxDistance : p.maxDistance,
                    refDistance: void 0 !== n.refDistance ? n.refDistance : p.refDistance,
                    rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : p.rolloffFactor,
                    panningModel: void 0 !== n.panningModel ? n.panningModel : p.panningModel
                };
                var c = r._panner;
                c ? (c.coneInnerAngle = p.coneInnerAngle, c.coneOuterAngle = p.coneOuterAngle, c.coneOuterGain = p.coneOuterGain, c.distanceModel = p.distanceModel, c.maxDistance = p.maxDistance, c.refDistance = p.refDistance, c.rolloffFactor = p.rolloffFactor, c.panningModel = p.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]), e(r, "spatial"));
            }
        }

        return o;
    }, Sound.prototype.init = function(e) {
        return function() {
            var n = this,
                t = n._parent;
            n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this), n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
        };
    }(Sound.prototype.init), Sound.prototype.reset = function(e) {
        return function() {
            var n = this,
                t = n._parent;
            return n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, n._stereo ? t.stereo(n._stereo) : n._pos ? t.pos(n._pos[0], n._pos[1], n._pos[2], n._id) : n._panner && (n._panner.disconnect(0), n._panner = void 0, t._refreshBuffer(n)), e.call(this);
        };
    }(Sound.prototype.reset);

    var e = function e(_e, n) {
        n = n || "spatial", "spatial" === n ? (_e._panner = Howler.ctx.createPanner(), _e._panner.coneInnerAngle = _e._pannerAttr.coneInnerAngle, _e._panner.coneOuterAngle = _e._pannerAttr.coneOuterAngle, _e._panner.coneOuterGain = _e._pannerAttr.coneOuterGain, _e._panner.distanceModel = _e._pannerAttr.distanceModel, _e._panner.maxDistance = _e._pannerAttr.maxDistance, _e._panner.refDistance = _e._pannerAttr.refDistance, _e._panner.rolloffFactor = _e._pannerAttr.rolloffFactor, _e._panner.panningModel = _e._pannerAttr.panningModel, void 0 !== _e._panner.positionX ? (_e._panner.positionX.setValueAtTime(_e._pos[0], Howler.ctx.currentTime), _e._panner.positionY.setValueAtTime(_e._pos[1], Howler.ctx.currentTime), _e._panner.positionZ.setValueAtTime(_e._pos[2], Howler.ctx.currentTime)) : _e._panner.setPosition(_e._pos[0], _e._pos[1], _e._pos[2]), void 0 !== _e._panner.orientationX ? (_e._panner.orientationX.setValueAtTime(_e._orientation[0], Howler.ctx.currentTime), _e._panner.orientationY.setValueAtTime(_e._orientation[1], Howler.ctx.currentTime), _e._panner.orientationZ.setValueAtTime(_e._orientation[2], Howler.ctx.currentTime)) : _e._panner.setOrientation(_e._orientation[0], _e._orientation[1], _e._orientation[2])) : (_e._panner = Howler.ctx.createStereoPanner(), _e._panner.pan.setValueAtTime(_e._stereo, Howler.ctx.currentTime)), _e._panner.connect(_e._node), _e._paused || _e._parent.pause(_e._id, !0).play(_e._id, !0);
    };
}();