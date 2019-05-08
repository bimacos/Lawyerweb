function dropdownEffectData(e) {
    var t = null,
        i = null,
        n = $(e),
        o = $(".dropdown-menu", e),
        r = n.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, i = r.data("dropdown-out") || null), {
        target: e,
        dropdown: n,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || i
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, o) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, o)
    },
    easeInQuad: function(e, t, i, n, o) {
        return n * (t /= o) * t + i
    },
    easeOutQuad: function(e, t, i, n, o) {
        return -n * (t /= o) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, o) {
        return n * (t /= o) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, o) {
        return n * (t /= o) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, o) {
        return -n * ((t = t / o - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, o) {
        return n * (t /= o) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, o) {
        return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, o) {
        return n * Math.sin(t / o * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, o) {
        return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + i
    },
    easeInExpo: function(e, t, i, n, o) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, o) {
        return t == o ? i + n : n * (1 - Math.pow(2, -10 * t / o)) + i
    },
    easeInOutExpo: function(e, t, i, n, o) {
        return 0 == t ? i : t == o ? i + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
    },
    easeInCirc: function(e, t, i, n, o) {
        return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, o) {
        return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, o) {
        var r = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (a || (a = .3 * o), s < Math.abs(n)) {
            s = n;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(n / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i
    },
    easeOutElastic: function(e, t, i, n, o) {
        var r = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (a || (a = .3 * o), s < Math.abs(n)) {
            s = n;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + n + i
    },
    easeInOutElastic: function(e, t, i, n, o) {
        var r = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (2 == (t /= o / 2)) return i + n;
        if (a || (a = o * (.3 * 1.5)), s < Math.abs(n)) {
            s = n;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(n / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * -.5 + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, o, r) {
        return void 0 == r && (r = 1.70158), n * (t /= o) * t * ((r + 1) * t - r) + i
    },
    easeOutBack: function(e, t, i, n, o, r) {
        return void 0 == r && (r = 1.70158), n * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, o, r) {
        return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + i : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + i
    },
    easeInBounce: function(e, t, i, n, o) {
        return n - jQuery.easing.easeOutBounce(e, o - t, 0, n, o) + i
    },
    easeOutBounce: function(e, t, i, n, o) {
        return (t /= o) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + i
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
    function t(e) {
        var t = e.length,
            n = i.type(e);
        return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e, t)
        };
        i.isWindow = function(e) {
            return null != e && e == e.window
        }, i.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
        }, i.isArray = Array.isArray || function(e) {
            return "array" === i.type(e)
        }, i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || r.call(e, t)
        }, i.each = function(e, i, n) {
            var o = 0,
                r = e.length,
                a = t(e);
            if (n) {
                if (a)
                    for (; r > o && !1 !== i.apply(e[o], n); o++);
                else
                    for (o in e)
                        if (!1 === i.apply(e[o], n)) break
            } else if (a)
                for (; r > o && !1 !== i.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === i.call(e[o], o, e[o])) break; return e
        }, i.data = function(e, t, o) {
            if (void 0 === o) {
                var r = (a = e[i.expando]) && n[a];
                if (void 0 === t) return r;
                if (r && t in r) return r[t]
            } else if (void 0 !== t) {
                var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                return n[a] = n[a] || {}, n[a][t] = o, o
            }
        }, i.removeData = function(e, t) {
            var o = e[i.expando],
                r = o && n[o];
            r && i.each(t, function(e, t) {
                delete r[t]
            })
        }, i.extend = function() {
            var e, t, n, o, r, a, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                if (null != (r = arguments[l]))
                    for (o in r) e = s[o], n = r[o], s !== n && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, a = e && i.isArray(e) ? e : []) : a = e && i.isPlainObject(e) ? e : {}, s[o] = i.extend(u, a, n)) : void 0 !== n && (s[o] = n));
            return s
        }, i.queue = function(e, n, o) {
            if (e) {
                n = (n || "fx") + "queue";
                var r = i.data(e, n);
                return o ? (!r || i.isArray(o) ? r = i.data(e, n, function(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n];) e[o++] = t[n++];
                        e.length = o
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }(o)) : r.push(o), r) : r || []
            }
        }, i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e, function(e, n) {
                t = t || "fx";
                var o = i.queue(n, t),
                    r = o.shift();
                "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(n, function() {
                    i.dequeue(n, t)
                }))
            })
        }, i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    n = this.offset(),
                    o = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : i(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: n.top - o.top,
                    left: n.left - o.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn, e.Velocity = {
            Utilities: i
        }
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, i, n) {
        function o(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                var o = e[t];
                o && n.push(o)
            }
            return n
        }

        function r(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
        }

        function a(e) {
            var t = p.data(e, "velocity");
            return null === t ? n : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, i, n, o) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function a(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, i) {
                return ((r(t, i) * e + a(t, i)) * e + s(t)) * e
            }

            function c(e, t, i) {
                return 3 * r(t, i) * e * e + 2 * a(t, i) * e + s(t)
            }

            function u(t, i) {
                for (var o = 0; m > o; ++o) {
                    var r = c(i, e, n);
                    if (0 === r) return i;
                    i -= (l(i, e, n) - t) / r
                }
                return i
            }

            function d() {
                for (var t = 0; b > t; ++t) C[t] = l(t * w, e, n)
            }

            function p(t, i, o) {
                var r, a, s = 0;
                do {
                    a = i + (o - i) / 2, r = l(a, e, n) - t, r > 0 ? o = a : i = a
                } while (Math.abs(r) > g && ++s < y);
                return a
            }

            function f(t) {
                for (var i = 0, o = 1, r = b - 1; o != r && C[o] <= t; ++o) i += w;
                var a = i + (t - C[--o]) / (C[o + 1] - C[o]) * w,
                    s = c(a, e, n);
                return s >= v ? u(t, a) : 0 == s ? a : p(t, i, i + w)
            }

            function h() {
                T = !0, (e != i || n != o) && d()
            }
            var m = 4,
                v = .001,
                g = 1e-7,
                y = 10,
                b = 11,
                w = 1 / (b - 1),
                x = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var k = 0; 4 > k; ++k)
                if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k])) return !1;
            e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
            var C = x ? new Float32Array(b) : new Array(b),
                T = !1,
                S = function(t) {
                    return T || h(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), i, o)
                };
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                }, {
                    x: n,
                    y: o
                }]
            };
            var I = "generateBezier(" + [e, i, n, o] + ")";
            return S.toString = function() {
                return I
            }, S
        }

        function c(e, t) {
            var i = e;
            return m.isString(e) ? b.Easings[e] || (i = !1) : i = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === i && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
        }

        function u(e) {
            if (e) {
                var t = (new Date).getTime(),
                    i = b.State.calls.length;
                i > 1e4 && (b.State.calls = o(b.State.calls));
                for (var r = 0; i > r; r++)
                    if (b.State.calls[r]) {
                        var s = b.State.calls[r],
                            l = s[0],
                            c = s[2],
                            f = s[3],
                            h = !!f,
                            v = null;
                        f || (f = b.State.calls[r][3] = t - 16);
                        for (var g = Math.min((t - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                            var k = l[y],
                                T = k.element;
                            if (a(T)) {
                                var S = !1;
                                if (c.display !== n && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var I = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        p.each(I, function(e, t) {
                                            x.setPropertyValue(T, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(T, "display", c.display)
                                }
                                c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(T, "visibility", c.visibility);
                                for (var E in k)
                                    if ("element" !== E) {
                                        var A, P = k[E],
                                            _ = m.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                        if (1 === g) A = P.endValue;
                                        else {
                                            var D = P.endValue - P.startValue;
                                            if (A = P.startValue + D * _(g, c, D), !h && A === P.currentValue) continue
                                        }
                                        if (P.currentValue = A, "tween" === E) v = A;
                                        else {
                                            if (x.Hooks.registered[E]) {
                                                var O = x.Hooks.getRoot(E),
                                                    M = a(T).rootPropertyValueCache[O];
                                                M && (P.rootPropertyValue = M)
                                            }
                                            var L = x.setPropertyValue(T, E, P.currentValue + (0 === parseFloat(A) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                            x.Hooks.registered[E] && (a(T).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, L[1]) : L[1]), "transform" === L[0] && (S = !0)
                                        }
                                    }
                                c.mobileHA && a(T).transformCache.translate3d === n && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(T)
                            }
                        }
                        c.display !== n && "none" !== c.display && (b.State.calls[r][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[r][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], g, Math.max(0, f + c.duration - t), f, v), 1 === g && d(r)
                    }
            }
            b.State.isTicking && C(u)
        }

        function d(e, t) {
            if (!b.State.calls[e]) return !1;
            for (var i = b.State.calls[e][0], o = b.State.calls[e][1], r = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = i.length; u > c; c++) {
                var d = i[c].element;
                if (t || r.loop || ("none" === r.display && x.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && x.setPropertyValue(d, "visibility", r.visibility)), !0 !== r.loop && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && a(d)) {
                    a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                    var f = !1;
                    p.each(x.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0,
                            o = a(d).transformCache[t];
                        a(d).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete a(d).transformCache[t])
                    }), r.mobileHA && (f = !0, delete a(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                }
                if (!t && r.complete && !r.loop && c === u - 1) try {
                    r.complete.call(o, o)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 1)
                }
                s && !0 !== r.loop && s(o), a(d) && !0 === r.loop && !t && (p.each(a(d).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), b(d, "reverse", {
                    loop: !0,
                    delay: r.delay
                })), !1 !== r.queue && p.dequeue(d, r.queue)
            }
            b.State.calls[e] = !1;
            for (var h = 0, m = b.State.calls.length; m > h; h++)
                if (!1 !== b.State.calls[h]) {
                    l = !0;
                    break
                }!1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var p, f = function() {
                if (i.documentMode) return i.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = i.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                }
                return n
            }(),
            h = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                        t(n + i)
                    }, i)
                }
            }(),
            m = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            v = !1;
        if (e.fn && e.fn.jquery ? (p = e, v = !0) : p = t.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity."); {
            if (!(7 >= f)) {
                var g = 400,
                    y = "swing",
                    b = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: p,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: y,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            p.data(e, "velocity", {
                                isSVG: m.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== n ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
                var w = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, i, n) {
                        var o = {
                            x: t.x + n.dx * i,
                            v: t.v + n.dv * i,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function i(i, n) {
                        var o = {
                                dx: i.v,
                                dv: e(i)
                            },
                            r = t(i, .5 * n, o),
                            a = t(i, .5 * n, r),
                            s = t(i, n, a),
                            l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
                            c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                        return i.x = i.x + l * n, i.v = i.v + c * n, i
                    }
                    return function e(t, n, o) {
                        var r, a, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, (r = null !== o) ? (u = e(t, n), a = u / o * .016) : a = .016; s = i(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return r ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                b.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, p.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    b.Easings[t[0]] = l.apply(null, t[1])
                });
                var x = b.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (r = 0; r < x.Lists.colors.length; r++) {
                                var e = "color" === x.Lists.colors[r] ? "0 0 0 1" : "255 255 255 1";
                                x.Hooks.templates[x.Lists.colors[r]] = ["Red Green Blue Alpha", e]
                            }
                            var t, i, n;
                            if (f)
                                for (t in x.Hooks.templates) {
                                    n = (i = x.Hooks.templates[t])[0].split(" ");
                                    var o = i[1].match(x.RegEx.valueSplit);
                                    "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[t] = [n.join(" "), o.join(" ")])
                                }
                            for (t in x.Hooks.templates) {
                                n = (i = x.Hooks.templates[t])[0].split(" ");
                                for (var r in n) {
                                    var a = t + n[r],
                                        s = r;
                                    x.Hooks.registered[a] = [t, s]
                                }
                            }
                        },
                        getRoot: function(e) {
                            var t = x.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var i = x.Hooks.registered[e];
                            if (i) {
                                var n = i[0],
                                    o = i[1];
                                return (t = x.Hooks.cleanRootPropertyValue(n, t)).toString().match(x.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function(e, t, i) {
                            var n = x.Hooks.registered[e];
                            if (n) {
                                var o, r = n[0],
                                    a = n[1];
                                return i = x.Hooks.cleanRootPropertyValue(r, i), o = i.toString().match(x.RegEx.valueSplit), o[a] = t, o.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return b.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = o ? o[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(e, t, i) {
                                if (8 >= f) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i = n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                            for (e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                                var t = x.Lists.transformsBase[e];
                                x.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return a(i) === n || a(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var r = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    b.State.isAndroid && a(i).transformCache[t] === n && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                    r = !/(deg|\d)$/i.test(o);
                                                    break;
                                                case "rotate":
                                                    r = !/(deg|\d)$/i.test(o)
                                            }
                                            return r || (a(i).transformCache[t] = "(" + o + ")"), a(i).transformCache[t]
                                    }
                                }
                            }();
                            for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                                var t = x.Lists.colors[e];
                                x.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var r;
                                            if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                            else {
                                                var a, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? a = s[o] !== n ? s[o] : s.black : x.RegEx.isHex.test(o) ? a = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                                var o;
                                if (o = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), m.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                            return e = e.replace(i, function(e, t, i, n) {
                                return t + t + i + i + n + n
                            }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, i, o, r) {
                        function s(e, i) {
                            function o() {
                                c && x.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= f) l = p.css(e, i);
                            else {
                                var c = !1;
                                if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (c = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !r) {
                                    if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var u = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), u
                                    }
                                    if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), d
                                    }
                                }
                                var h;
                                h = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === f && "filter" === i ? h.getPropertyValue(i) : h[i]) || null === l) && (l = e.style[i]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var m = s(e, "position");
                                ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = p(e).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (x.Hooks.registered[i]) {
                            var c = i,
                                u = x.Hooks.getRoot(c);
                            o === n && (o = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", e, o)), l = x.Hooks.extractValue(c, o)
                        } else if (x.Normalizations.registered[i]) {
                            var d, h;
                            "transform" !== (d = x.Normalizations.registered[i]("name", e)) && (h = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[i] && (h = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", e, h)
                        }
                        if (!/^[\d-]/.test(l))
                            if (a(e) && a(e).isSVG && x.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = e.getBBox()[i]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(i);
                                else l = s(e, x.Names.prefixCheck(i)[0]);
                        return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(e, i, n, o, r) {
                        var s = i;
                        if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? t.scrollTo(n, r.alternateValue) : t.scrollTo(r.alternateValue, n);
                        else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e)) x.Normalizations.registered[i]("inject", e, n), s = "transform", n = a(e).transformCache[i];
                        else {
                            if (x.Hooks.registered[i]) {
                                var l = i,
                                    c = x.Hooks.getRoot(i);
                                o = o || x.getPropertyValue(e, c), n = x.Hooks.injectValue(l, n, o), i = c
                            }
                            if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n), i = x.Normalizations.registered[i]("name", e)), s = x.Names.prefixCheck(i)[0], 8 >= f) try {
                                e.style[s] = n
                            } catch (e) {
                                b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            } else a(e) && a(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                            b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                        }
                        return [s, n]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(x.getPropertyValue(e, t))
                        }
                        var i = "";
                        if ((f || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            p.each(a(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            })
                        } else {
                            var o, r;
                            p.each(a(e).transformCache, function(t) {
                                return o = a(e).transformCache[t], "transformPerspective" === t ? (r = o, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                            }), r && (i = "perspective" + r + " " + i)
                        }
                        x.setPropertyValue(e, "transform", i)
                    }
                };
                x.Hooks.register(), x.Normalizations.register(), b.hook = function(e, t, i) {
                    var o = n;
                    return e = r(e), p.each(e, function(e, r) {
                        if (a(r) === n && b.init(r), i === n) o === n && (o = b.CSS.getPropertyValue(r, t));
                        else {
                            var s = b.CSS.setPropertyValue(r, t, i);
                            "transform" === s[0] && b.CSS.flushTransformCache(r), o = s
                        }
                    }), o
                };
                var k = function() {
                    function e() {
                        return s ? I.promise || null : l
                    }

                    function o() {
                        function e(e) {
                            function d(e, t) {
                                var i = n,
                                    o = n,
                                    a = n;
                                return m.isArray(e) ? (i = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? a = e[1] : (m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (o = t ? e[1] : c(e[1], s.duration), e[2] !== n && (a = e[2]))) : i = e, t || (o = o || s.easing), m.isFunction(i) && (i = i.call(r, T, C)), m.isFunction(a) && (a = a.call(r, T, C)), [i || 0, o, a]
                            }

                            function f(e, t) {
                                var i, n;
                                return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return i = e, ""
                                }), i || (i = x.Values.getUnitType(e)), [n, i]
                            }
                            if (s.begin && 0 === T) try {
                                s.begin.call(h, h)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === E) {
                                var g, w, k, S = /^x$/i.test(s.axis) ? "Left" : "Top",
                                    A = parseFloat(s.offset) || 0;
                                s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, g = s.container["scroll" + S], k = g + p(r).position()[S.toLowerCase()] + A) : s.container = null : (g = b.State.scrollAnchor[b.State["scrollProperty" + S]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], k = p(r).offset()[S.toLowerCase()] + A), l = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: g,
                                        currentValue: g,
                                        endValue: k,
                                        unitType: "",
                                        easing: s.easing,
                                        scrollData: {
                                            container: s.container,
                                            direction: S,
                                            alternateValue: w
                                        }
                                    },
                                    element: r
                                }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                            } else if ("reverse" === E) {
                                if (!a(r).tweensContainer) return void p.dequeue(r, s.queue);
                                "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, a(r).opts, s);
                                D = p.extend(!0, {}, a(r).tweensContainer);
                                for (var P in D)
                                    if ("element" !== P) {
                                        var _ = D[P].startValue;
                                        D[P].startValue = D[P].currentValue = D[P].endValue, D[P].endValue = _, m.isEmptyObject(y) || (D[P].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(D[P]), r)
                                    }
                                l = D
                            } else if ("start" === E) {
                                var D;
                                a(r).tweensContainer && !0 === a(r).isAnimating && (D = a(r).tweensContainer), p.each(v, function(e, t) {
                                    if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                        var i = d(t, !0),
                                            o = i[0],
                                            r = i[1],
                                            a = i[2];
                                        if (x.RegEx.isHex.test(o)) {
                                            for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = a ? x.Values.hexToRgb(a) : n, u = 0; u < s.length; u++) {
                                                var p = [l[u]];
                                                r && p.push(r), c !== n && p.push(c[u]), v[e + s[u]] = p
                                            }
                                            delete v[e]
                                        }
                                    }
                                });
                                for (var L in v) {
                                    var R = d(v[L]),
                                        W = R[0],
                                        $ = R[1],
                                        V = R[2];
                                    L = x.Names.camelCase(L);
                                    var F = x.Hooks.getRoot(L),
                                        Y = !1;
                                    if (a(r).isSVG || "tween" === F || !1 !== x.Names.prefixCheck(F)[1] || x.Normalizations.registered[F] !== n) {
                                        (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(L) && !V && 0 !== W && (V = 0), s._cacheValues && D && D[L] ? (V === n && (V = D[L].endValue + D[L].unitType), Y = a(r).rootPropertyValueCache[F]) : x.Hooks.registered[L] ? V === n ? (Y = x.getPropertyValue(r, F), V = x.getPropertyValue(r, L, Y)) : Y = x.Hooks.templates[F][1] : V === n && (V = x.getPropertyValue(r, L));
                                        var H, j, N, z = !1;
                                        if (H = f(L, V), V = H[0], N = H[1], H = f(L, W), W = H[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return z = t, ""
                                            }), j = H[1], V = parseFloat(V) || 0, W = parseFloat(W) || 0, "%" === j && (/^(fontSize|lineHeight)$/.test(L) ? (W /= 100, j = "em") : /^scale/.test(L) ? (W /= 100, j = "") : /(Red|Green|Blue)$/i.test(L) && (W = W / 100 * 255, j = "")), /[\/*]/.test(z)) j = N;
                                        else if (N !== j && 0 !== V)
                                            if (0 === W) j = N;
                                            else {
                                                o = o || function() {
                                                    var e = {
                                                            myParent: r.parentNode || i.body,
                                                            position: x.getPropertyValue(r, "position"),
                                                            fontSize: x.getPropertyValue(r, "fontSize")
                                                        },
                                                        n = e.position === O.lastPosition && e.myParent === O.lastParent,
                                                        o = e.fontSize === O.lastFontSize;
                                                    O.lastParent = e.myParent, O.lastPosition = e.position, O.lastFontSize = e.fontSize;
                                                    var s = 100,
                                                        l = {};
                                                    if (o && n) l.emToPx = O.lastEmToPx, l.percentToPxWidth = O.lastPercentToPxWidth, l.percentToPxHeight = O.lastPercentToPxHeight;
                                                    else {
                                                        var c = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                        b.init(c), e.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                            b.CSS.setPropertyValue(c, t, "hidden")
                                                        }), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                            b.CSS.setPropertyValue(c, t, s + "%")
                                                        }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = O.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                                    }
                                                    return null === O.remToPx && (O.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(t.innerWidth) / 100, O.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = O.remToPx, l.vwToPx = O.vwToPx, l.vhToPx = O.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                                                }();
                                                var X = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                                switch (N) {
                                                    case "%":
                                                        V *= "x" === X ? o.percentToPxWidth : o.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        V *= o[N + "ToPx"]
                                                }
                                                switch (j) {
                                                    case "%":
                                                        V *= 1 / ("x" === X ? o.percentToPxWidth : o.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        V *= 1 / o[j + "ToPx"]
                                                }
                                            }
                                        switch (z) {
                                            case "+":
                                                W = V + W;
                                                break;
                                            case "-":
                                                W = V - W;
                                                break;
                                            case "*":
                                                W *= V;
                                                break;
                                            case "/":
                                                W = V / W
                                        }
                                        l[L] = {
                                            rootPropertyValue: Y,
                                            startValue: V,
                                            currentValue: V,
                                            endValue: W,
                                            unitType: j,
                                            easing: $
                                        }, b.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(l[L]), r)
                                    } else b.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
                                }
                                l.element = r
                            }
                            l.element && (x.Values.addClass(r, "velocity-animating"), M.push(l), "" === s.queue && (a(r).tweensContainer = l, a(r).opts = s), a(r).isAnimating = !0, T === C - 1 ? (b.State.calls.push([M, h, s, null, I.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : T++)
                        }
                        var o, r = this,
                            s = p.extend({}, b.defaults, y),
                            l = {};
                        switch (a(r) === n && b.init(r), parseFloat(s.delay) && !1 !== s.queue && p.queue(r, s.queue, function(e) {
                            b.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(s.delay)),
                                next: e
                            }
                        }), s.duration.toString().toLowerCase()) {
                            case "fast":
                                s.duration = 200;
                                break;
                            case "normal":
                                s.duration = g;
                                break;
                            case "slow":
                                s.duration = 600;
                                break;
                            default:
                                s.duration = parseFloat(s.duration) || 1
                        }!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(r, s.queue, function(t, i) {
                            return !0 === i ? (I.promise && I.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(r)[0] || p.dequeue(r)
                    }
                    var s, l, f, h, v, y, w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                    if (m.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = r(h)) {
                        w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[f], y = arguments[f + 1]);
                        var C = h.length,
                            T = 0;
                        if (!/^(stop|finish)$/i.test(v) && !p.isPlainObject(y)) {
                            y = {};
                            for (var S = f + 1; S < arguments.length; S++) m.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? m.isString(arguments[S]) || m.isArray(arguments[S]) ? y.easing = arguments[S] : m.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
                        }
                        var I = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        s && b.Promise && (I.promise = new b.Promise(function(e, t) {
                            I.resolver = e, I.rejecter = t
                        }));
                        var E;
                        switch (v) {
                            case "scroll":
                                E = "scroll";
                                break;
                            case "reverse":
                                E = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                p.each(h, function(e, t) {
                                    a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                                });
                                var A = [];
                                return p.each(b.State.calls, function(e, t) {
                                    t && p.each(t[1], function(i, o) {
                                        var r = y === n ? "" : y;
                                        return !0 !== r && t[2].queue !== r && (y !== n || !1 !== t[2].queue) || void p.each(h, function(i, n) {
                                            n === o && ((!0 === y || m.isString(y)) && (p.each(p.queue(n, m.isString(y) ? y : ""), function(e, t) {
                                                m.isFunction(t) && t(null, !0)
                                            }), p.queue(n, m.isString(y) ? y : "", [])), "stop" === v ? (a(n) && a(n).tweensContainer && !1 !== r && p.each(a(n).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), A.push(e)) : "finish" === v && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === v && (p.each(A, function(e, t) {
                                    d(t, !0)
                                }), I.promise && I.resolver(h)), e();
                            default:
                                if (!p.isPlainObject(v) || m.isEmptyObject(v)) {
                                    if (m.isString(v) && b.Redirects[v]) {
                                        var P = (R = p.extend({}, y)).duration,
                                            _ = R.delay || 0;
                                        return !0 === R.backwards && (h = p.extend(!0, [], h).reverse()), p.each(h, function(e, t) {
                                            parseFloat(R.stagger) ? R.delay = _ + parseFloat(R.stagger) * e : m.isFunction(R.stagger) && (R.delay = _ + R.stagger.call(t, e, C)), R.drag && (R.duration = parseFloat(P) || (/^(callout|transition)/.test(v) ? 1e3 : g), R.duration = Math.max(R.duration * (R.backwards ? 1 - e / C : (e + 1) / C), .75 * R.duration, 200)), b.Redirects[v].call(t, t, R || {}, e, C, h, I.promise ? I : n)
                                        }), e()
                                    }
                                    var D = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return I.promise ? I.rejecter(new Error(D)) : console.log(D), e()
                                }
                                E = "start"
                        }
                        var O = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            M = [];
                        p.each(h, function(e, t) {
                            m.isNode(t) && o.call(t)
                        });
                        var L, R = p.extend({}, b.defaults, y);
                        if (R.loop = parseInt(R.loop), L = 2 * R.loop - 1, R.loop)
                            for (var W = 0; L > W; W++) {
                                var $ = {
                                    delay: R.delay,
                                    progress: R.progress
                                };
                                W === L - 1 && ($.display = R.display, $.visibility = R.visibility, $.complete = R.complete), k(h, "reverse", $)
                            }
                        return e()
                    }
                };
                (b = p.extend(k, b)).animate = k;
                var C = t.requestAnimationFrame || h;
                return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                    i.hidden ? (C = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, u()) : C = t.requestAnimationFrame || h
                }), e.Velocity = b, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function(e, t) {
                    b.Redirects["slide" + t] = function(e, i, o, r, a, s) {
                        var l = p.extend({}, i),
                            c = l.begin,
                            u = l.complete,
                            d = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === n && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            c && c.call(a, a);
                            for (var i in d) {
                                f[i] = e.style[i];
                                var n = b.CSS.getPropertyValue(e, i);
                                d[i] = "Down" === t ? [n, 0] : [0, n]
                            }
                            f.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in f) e.style[t] = f[t];
                            u && u.call(a, a), s && s.resolver(a)
                        }, b(e, d, l)
                    }
                }), p.each(["In", "Out"], function(e, t) {
                    b.Redirects["fade" + t] = function(e, i, o, r, a, s) {
                        var l = p.extend({}, i),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            u = l.complete;
                        l.complete = o !== r - 1 ? l.begin = null : function() {
                            u && u.call(a, a), s && s.resolver(a)
                        }, l.display === n && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
                    }
                }), b
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }
    }(window.jQuery || window.Zepto || window, window, document)
}));
var WOW = function(e) {
    var t = e || {};
    this._boxClass = t.boxClass || "wow", this._animateClass = t.animateClass || "animated", this._offset = t.offset || 0, this._mobile = void 0 === t.mobile, this._live = void 0 === t.live, this._seoFixEnabled = void 0 === t.seoFixEnabled, this._animationDuration = t.animationDuration || "1s", this._animationDelay = t.animationDelay || "0s", this._initStorageVariables()
};
WOW.prototype._initStorageVariables = function() {
    this._animation = [], this._boxes = [], this._cleanupBoxListener = [], this._cleanupBoxVisibleListener = []
}, WOW.prototype.init = function() {
    !this._mobile && this._isMobile() || (this._eachBoxInit(this._prepareBox.bind(this)), this._startWow())
}, WOW.prototype._isMobile = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}, WOW.prototype._eachBoxInit = function(e) {
    for (var t = document.getElementsByClassName(this._boxClass), i = 0; i < t.length; i++) ! function(i) {
        e(t[i], i)
    }(i)
}, WOW.prototype._prepareBox = function(e) {
    var t = this._boxes.push(e) - 1;
    this._animation[t] = {
        animationName: e.style.animationName || window.getComputedStyle(e, null).animationName
    }, e.style.animationName = "none", e.style.visibility = "hidden"
}, WOW.prototype._startWow = function() {
    this._live && this._checkForChanges(), 0 === this._scrollY() && this._seoFixEnabled && this._seoFix(), this._appearInView(), this._scrollHandler()
}, WOW.prototype._scrollY = function() {
    return this._isInt(window.pageYOffset) ? window.pageYOffset : this._isInt(document.documentElement.scrollTop) ? document.documentElement.scrollTop : this._isInt(document.body.scrollTop) ? document.body.scrollTop : void 0
}, WOW.prototype._isInt = function(e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
}, WOW.prototype._seoFix = function() {
    this._showNotInView()
}, WOW.prototype._appear = function(e, t) {
    e.style.animationPlayState || e.style.WebkitAnimationPlayState; - 1 === e.className.indexOf(this._animateClass) && (delete this._boxes[t], this._onStartAnimation(e, t), this._onStopAnimation(e, t), this._animate(e, t, this._getAnimationConfig(e)))
}, WOW.prototype._onStartAnimation = function(e, t) {
    this._cleanupBoxVisibleListener[t] = this._boxVisible.bind(this, e, t), e.addEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.addEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t])
}, WOW.prototype._onStopAnimation = function(e, t) {
    this._cleanupBoxListener[t] = this._cleanupBox.bind(this, e, t), e.addEventListener("animationend", this._cleanupBoxListener[t]), e.addEventListener("webkitAnimationEnd", this._cleanupBoxListener[t])
}, WOW.prototype._getAnimationConfig = function(e) {
    return {
        delay: this._getDelay(e),
        duration: this._getDuration(e),
        iterations: this._getIterations(e)
    }
}, WOW.prototype._getDelay = function(e) {
    return e.getAttribute("data-wow-delay") || this._animationDelay
}, WOW.prototype._getDuration = function(e) {
    return e.getAttribute("data-wow-duration") || this._animationDuration
}, WOW.prototype._getIterations = function(e) {
    return e.getAttribute("data-wow-iteration") || e.style.animationIterationCount || window.getComputedStyle(e, null).animationIterationCount || 1
}, WOW.prototype._animate = function(e, t, i) {
    e.style.animationDelay = i.delay, e.style.animationDuration = i.duration, e.style.animationIterationCount = i.iterations, e.style.animationName = this._animation[t].animationName, e.className += " " + this._animateClass
}, WOW.prototype._boxVisible = function(e, t) {
    e.style.visibility = "visible", e.removeEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.removeEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t]), delete this._cleanupBoxVisibleListener[t]
}, WOW.prototype._cleanupBox = function(e, t) {
    e.style.animationDelay = "", e.style.animationDuration = "", e.style.animationIterationCount = "", e.style.animationName = "none", this._cleanupClass(e), e.removeEventListener("animationend", this._cleanupBoxListener[t]), e.removeEventListener("webkitAnimationEnd", this._cleanupBoxListener[t]), delete this._cleanupBoxListener[t]
}, WOW.prototype._cleanupClass = function(e) {
    var t = e.className.split(" "),
        i = t.indexOf(this._animateClass); - 1 !== i && (t.splice(i, 1), e.className = t.join(" "))
}, WOW.prototype._eachBox = function(e) {
    for (var t = 0; t < this._boxes.length; t++) this._boxes[t] && function(t) {
        e(this._boxes[t], t)
    }.bind(this)(t)
}, WOW.prototype._scrollHandler = function() {
    this._hideSeoFixListener = this._hideSeoFix.bind(this), window.addEventListener("scroll", this._hideSeoFixListener), window.addEventListener("scroll", this._appearInView.bind(this)), window.addEventListener("resize", this._appearInView.bind(this))
}, WOW.prototype._hideSeoFix = function() {
    window.removeEventListener("scroll", this._hideSeoFixListener), delete this._hideSeoFixListener, this._eachBox(function(e, t) {
        this._isInView(e) || (e.style.visibility = "hidden")
    }.bind(this))
}, WOW.prototype._appearInView = function() {
    this._eachBox(function(e, t) {
        this._animateBox(e, t)
    }.bind(this))
}, WOW.prototype._animateBox = function(e, t) {
    this._isInView(e) && (delete this._boxes[t], this._appear(e, t))
}, WOW.prototype._showNotInView = function() {
    this._eachBox(function(e, t) {
        this._makeVisible(e, t)
    }.bind(this))
}, WOW.prototype._makeVisible = function(e, t) {
    this._isInView(e) || (this._boxes[t].style.visibility = "visible")
}, WOW.prototype._isInView = function(e) {
    var t = e.getAttribute("data-wow-offset") || this._offset,
        i = this._getElementOffset(e) + ~~t;
    return i <= window.innerHeight + this._scrollY() && (0 === i ? 10 : i) >= this._scrollY()
}, WOW.prototype._getElementOffset = function(e) {
    var t = e.getBoundingClientRect(),
        i = document.body,
        n = this._scrollY(),
        o = document.documentElement.clientTop || i.clientTop || 0,
        r = t.top + n - o;
    return Math.round(r)
}, WOW.prototype._checkForChanges = function() {
    var e = {
        childList: !0,
        subtree: !0
    };
    new(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(this._mutations.bind(this)).observe(document.body, e)
}, WOW.prototype._mutations = function(e) {
    e.forEach(function(e) {
        for (var t = 0; t < e.addedNodes.length; t++) this.doSync(e.addedNodes[t])
    }.bind(this))
}, WOW.prototype.doSync = function(e) {
    e.className && -1 !== e.className.split(" ").indexOf(this._boxClass) && this._prepareBox(e)
};
var OFFSET_TOP = 50,
    TRANSITION_DURATION = 1500;
$(window).scroll(function() {
        $(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return t.apply(e)
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function e(e) {
            return null !== e && e === e.window
        }

        function t(t) {
            return e(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function i(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function n(e) {
            return i(e) && e.nodeType > 0
        }

        function o(e) {
            var t = p.call(e);
            return "[object String]" === t ? d(e) : i(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : n(e) ? [e] : []
        }

        function r(e) {
            var i, n, o = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument;
            return i = r.documentElement, void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()), n = t(r), {
                top: o.top + n.pageYOffset - i.clientTop,
                left: o.left + n.pageXOffset - i.clientLeft
            }
        }

        function a(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }

        function s(e, t, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    r = i.getAttribute("data-scale"),
                    s = i.getAttribute("data-translate"),
                    l = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                l < 0 && (l = 0), "mousemove" === e.type && (l = 150);
                var c = "mousemove" === e.type ? 2500 : h.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": r + " " + s,
                        "-moz-transform": r + " " + s,
                        "-ms-transform": r + " " + s,
                        "-o-transform": r + " " + s,
                        transform: r + " " + s
                    };
                    i.setAttribute("style", a(e)), setTimeout(function() {
                        try {
                            t.removeChild(i)
                        } catch (e) {
                            return !1
                        }
                    }, c)
                }, l)
            }
        }

        function l(e) {
            if (!1 === v.allowEvent(e)) return null;
            for (var t = null, i = e.target || e.srcElement; null !== i.parentElement;) {
                if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                    t = i;
                    break
                }
                i = i.parentElement
            }
            return t
        }

        function c(e) {
            var t = l(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (v.registerEvent(e), "touchstart" === e.type && h.delay) {
                    var i = !1,
                        n = setTimeout(function() {
                            n = null, h.show(e, t)
                        }, h.delay),
                        o = function(o) {
                            n && (clearTimeout(n), n = null, h.show(e, t)), i || (i = !0, h.hide(o, t))
                        };
                    t.addEventListener("touchmove", function(e) {
                        n && (clearTimeout(n), n = null), o(e)
                    }, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1)
                } else h.show(e, t), f && (t.addEventListener("touchend", h.hide, !1), t.addEventListener("touchcancel", h.hide, !1)), t.addEventListener("mouseup", h.hide, !1), t.addEventListener("mouseleave", h.hide, !1)
            }
        }
        var u = u || {},
            d = document.querySelectorAll.bind(document),
            p = Object.prototype.toString,
            f = "ontouchstart" in window,
            h = {
                duration: 750,
                delay: 200,
                show: function(e, t, i) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", t.appendChild(n);
                    var o = r(t),
                        s = 0,
                        l = 0;
                    "touches" in e && e.touches.length ? (s = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left) : (s = e.pageY - o.top, l = e.pageX - o.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
                    var c = "scale(" + t.clientWidth / 100 * 3 + ")",
                        u = "translate(0,0)";
                    i && (u = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", l), n.setAttribute("data-y", s), n.setAttribute("data-scale", c), n.setAttribute("data-translate", u);
                    var d = {
                        top: s + "px",
                        left: l + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", a(d)), n.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
                    var p = "mousemove" === e.type ? 2500 : h.duration;
                    d["-webkit-transition-duration"] = p + "ms", d["-moz-transition-duration"] = p + "ms", d["-o-transition-duration"] = p + "ms", d["transition-duration"] = p + "ms", n.setAttribute("style", a(d))
                },
                hide: function(e, t) {
                    for (var i = (t = t || this).getElementsByClassName("waves-rippling"), n = 0, o = i.length; n < o; n++) s(e, t, i[n])
                }
            },
            m = {
                input: function(e) {
                    var t = e.parentNode,
                        i = document.createElement("div");
                    i.className = "waves-input-wrapper", t.replaceChild(i, e), i.appendChild(e)
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        t.replaceChild(i, e), i.appendChild(e)
                    }
                }
            },
            v = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return /^(mousedown|mousemove)$/.test(e.type) && v.touches && (t = !1), t
                },
                registerEvent: function(e) {
                    var t = e.type;
                    "touchstart" === t ? v.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                        v.touches && (v.touches -= 1)
                    }, 500)
                }
            };
        return u.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (h.duration = e.duration), "delay" in e && (h.delay = e.delay), f && (t.addEventListener("touchstart", c, !1), t.addEventListener("touchcancel", v.registerEvent, !1), t.addEventListener("touchend", v.registerEvent, !1)), t.addEventListener("mousedown", c, !1)
        }, u.attach = function(e, t) {
            e = o(e), "[object Array]" === p.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var i, n, r = 0, a = e.length; r < a; r++) n = (i = e[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(n) && (m[n](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
        }, u.ripple = function(e, t) {
            var i = (e = o(e)).length;
            if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, i)
                for (var n, a, s, l = {}, c = 0, u = {
                        type: "mousedown",
                        button: 1
                    }; c < i; c++)
                    if (n = e[c], a = t.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, s = r(n), l.x = s.left + a.x, l.y = s.top + a.y, u.pageX = l.x, u.pageY = l.y, h.show(u, n), t.wait >= 0 && null !== t.wait) {
                        var d = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(function(e, t) {
                            return function() {
                                h.hide(e, t)
                            }
                        }(d, n), t.wait)
                    }
        }, u.calm = function(e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = (e = o(e)).length; i < n; i++) h.hide(t, e[i])
        }, u.displayEffect = function(e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(e)
        }, u
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".waves-effect", ["waves-effect"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
    function(e) {
        e(document).ready(function() {
            var t = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
                    return "input[type=" + e + "]"
                }).join(", ") + ", textarea",
                i = function(e) {
                    var t = e.siblings("label, i"),
                        i = e.val().length,
                        n = e.attr("placeholder");
                    t[(i || n ? "add" : "remove") + "Class"]("active")
                },
                n = function(e) {
                    if (e.hasClass("validate")) {
                        var t = e.val(),
                            i = !t.length,
                            n = !e[0].validity.badInput;
                        if (i && n) e.removeClass("valid").removeClass("invalid");
                        else {
                            var o = e.is(":valid"),
                                r = +e.attr("length") || 0;
                            o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                        }
                    }
                },
                o = function() {
                    var t = e(void 0);
                    if (t.val().length) {
                        var i = e(".hiddendiv"),
                            n = t.css("font-family"),
                            o = t.css("font-size");
                        o && hiddenDiv.css("font-size", o), n && hiddenDiv.css("font-family", n), "off" === t.attr("wrap") && hiddenDiv.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
                        var r = hiddenDiv.html().replace(/\n/g, "<br>");
                        i.html(r), i.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", i.height())
                    }
                };
            e(t).each(function(t, n) {
                var o = e(n),
                    r = o.siblings("label, i");
                i(o), n.validity.badInput && r.addClass("active")
            }), e(document).on("focus", t, function(t) {
                e(t.target).siblings("label, i").addClass("active")
            }), e(document).on("blur", t, function(t) {
                var i = e(t.target),
                    o = !i.val(),
                    r = !t.target.validity.badInput,
                    a = void 0 === i.attr("placeholder");
                o && r && a && i.siblings("label, i").removeClass("active"), n(i)
            }), e(document).on("change", t, function(t) {
                var o = e(t.target);
                i(o), n(o)
            }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(i) {
                var n = e(i.target);
                n.is("form") && (n.find(t).removeClass("valid").removeClass("invalid").each(function(t, i) {
                    var n = e(i),
                        o = !n.val(),
                        r = !n.attr("placeholder");
                    o && r && n.siblings("label, i").removeClass("active")
                }), n.find("select.initialized").each(function(t, i) {
                    var n = e(i),
                        o = n.siblings("input.select-dropdown"),
                        r = n.children("[selected]").val();
                    n.val(r), o.val(r)
                }))
            }), e(".hiddendiv").first().length || ($hiddenDiv = e('<div class="hiddendiv common"></div>'), e("body").append($hiddenDiv)), e(".materialize-textarea").each(o), e("body").on("keyup keydown", ".materialize-textarea", o)
        })
    }(jQuery), $(document).ready(function() {
        $("#preloader-markup").load("mdb-addons/preloader.html", function() {
            $("#mdb-preloader").fadeOut("slow")
        })
    }),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.card", ".card", function(t) {
                var i = e(this);
                if (i.find(".card-reveal").length) {
                    var n = e(t.target),
                        o = n.is(".card-reveal .card-title"),
                        r = n.is(".card-reveal .card-title i"),
                        a = n.is(".card .activator"),
                        s = n.is(".card .activator i");
                    o || r ? i.find(".card-reveal").velocity({
                        translateY: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        easing: "easeInOutQuad",
                        complete: function() {
                            e(this).css({
                                display: "none"
                            })
                        }
                    }) : (a || s) && i.find(".card-reveal").css({
                        display: "block"
                    }).velocity("stop", !1).velocity({
                        translateY: "-100%"
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeInOutQuad"
                    })
                }
            }), e(".rotate-btn").on("click", function() {
                var t = e(this).attr("data-card");
                e("#" + t).toggleClass("flipped")
            })
        })
    }(jQuery), $(document).ready(function(e) {
        e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).parent().find("div").toggleClass("social-reveal-active"), e(this).toggleClass("share-expanded")
        })
    }), $(".smooth-scroll").on("click", "a", function(e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            i = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
            n = $(this).closest("ul").attr("data-allow-hashes");
        $("body,html").animate({
            scrollTop: $(t).offset().top - i
        }, 1700), void 0 !== n && !1 !== n && history.replaceState(null, null, t)
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !0,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function n() {
                    void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
                }

                function o(t) {
                    "focus" === t && (l = !0), n(), c.addClass("active"), a.addClass("active"), !0 === s.constrain_width ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
                    var i = window.innerHeight,
                        o = a.innerHeight(),
                        r = a.offset().left,
                        u = a.offset().top - e(window).scrollTop(),
                        d = s.alignment,
                        p = 0,
                        f = 0,
                        h = 0;
                    !0 === s.belowOrigin && (h = o);
                    var m = 0,
                        v = a.parent();
                    if (!v.is("body") && v[0].scrollHeight > v[0].clientHeight && (m = v[0].scrollTop), r + c.innerWidth() > e(window).width() ? d = "right" : r - c.innerWidth() + a.innerWidth() < 0 && (d = "left"), u + c.innerHeight() > i)
                        if (u + o - c.innerHeight() < 0) {
                            var g = i - u - h;
                            c.css("max-height", g)
                        } else h || (h += o), h -= c.innerHeight();
                        "left" === d ? (p = s.gutter, f = a.position().left + p) : "right" === d && (f = a.position().left + a.outerWidth() - c.outerWidth() + (p = -s.gutter)), c.css({
                        position: "absolute",
                        top: a.position().top + h + m,
                        left: f
                    }), c.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function r() {
                    l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function() {
                        c.css("max-height", "")
                    }, s.outDuration)
                }
                var a = e(this),
                    s = e.extend({}, i, t),
                    l = !1,
                    c = e("#" + a.attr("data-activates"));
                if (n(), a.after(c), s.hover) {
                    var u = !1;
                    a.unbind("click." + a.attr("id")), a.on("mouseenter", function(e) {
                        !1 === u && (o(), u = !0)
                    }), a.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(c) || (c.stop(!0, !0), r(), u = !1)
                    }), c.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(a) || (c.stop(!0, !0), r(), u = !1)
                    })
                } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function(t) {
                    l || (a[0] != t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (r(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (t.preventDefault(), o("click")), c.hasClass("active") && e(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function(t) {
                        c.is(t.target) || a.is(t.target) || a.find(t.target).length || (r(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                    }))
                });
                a.on("open", function(e, t) {
                    o(t)
                }), a.on("close", r)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            $(this).find(".dropdown-menu").first().stop(!0, !0).fadeIn();
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e, function() {})
        },
        "hide.bs.dropdown": function(e) {
            $(this).find(".dropdown-menu").first().stop(!0, !0).fadeOut();
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("open"), t.dropdown.removeClass("show")
            }))
        }
    }),
    function(e) {
        function t(t) {
            if ($this = t, !1 === $this.hasClass("active")) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                i = 0;
                $this.find("ul .btn-floating").reverse().each(function() {
                    e(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: i
                    }), i += 40
                })
            } else {
                $this.removeClass("active");
                var i = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
        }
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
                var n = e(this);
                i(n)
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
                var i = e(this);
                n(i)
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(t) {
                var o = e(this).parent();
                o.hasClass("active") ? n(o) : i(o)
            })
        }), e.fn.extend({
            openFAB: function() {
                i(e(this))
            },
            closeFAB: function() {
                n(e(this))
            }
        });
        var i = function(t) {
                if ($this = t, !1 === $this.hasClass("active")) {
                    var i, n;
                    !0 === $this.hasClass("horizontal") ? n = 40 : i = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: i + "px",
                        translateX: n + "px"
                    }, {
                        duration: 0
                    });
                    var o = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: o
                        }), o += 40
                    })
                }
            },
            n = function(e) {
                $this = e;
                var t, i;
                !0 === $this.hasClass("horizontal") ? i = 40 : t = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: t + "px",
                    translateX: i + "px"
                }, {
                    duration: 80
                })
            };
        e(".fixed-action-btn").on({
            click: function(i) {
                return i.preventDefault(), t(e(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(e, t, i, n) {
        "use strict";

        function o(e, t, i) {
            return setTimeout(c(e, i), t)
        }

        function r(e, t, i) {
            return !!Array.isArray(e) && (a(e, i[t], i), !0)
        }

        function a(e, t, i) {
            var o;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (e.length !== n)
                for (o = 0; o < e.length;) t.call(i, e[o], o, e), o++;
            else
                for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e)
        }

        function s(t, i, n) {
            var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = e.console && (e.console.warn || e.console.log);
                return r && r.call(e.console, o, n), t.apply(this, arguments)
            }
        }

        function l(e, t, i) {
            var n, o = t.prototype;
            (n = e.prototype = Object.create(o)).constructor = e, n._super = o, i && ue(n, i)
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function u(e, t) {
            return typeof e == fe ? e.apply(t ? t[0] || n : n, t) : e
        }

        function d(e, t) {
            return e === n ? t : e
        }

        function p(e, t, i) {
            a(v(t), function(t) {
                e.addEventListener(t, i, !1)
            })
        }

        function f(e, t, i) {
            a(v(t), function(t) {
                e.removeEventListener(t, i, !1)
            })
        }

        function h(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function m(e, t) {
            return e.indexOf(t) > -1
        }

        function v(e) {
            return e.trim().split(/\s+/g)
        }

        function g(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function y(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function b(e, t, i) {
            for (var n = [], o = [], r = 0; r < e.length;) {
                var a = t ? e[r][t] : e[r];
                g(o, a) < 0 && n.push(e[r]), o[r] = a, r++
            }
            return i && (n = t ? n.sort(function(e, i) {
                return e[t] > i[t]
            }) : n.sort()), n
        }

        function w(e, t) {
            for (var i, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < de.length;) {
                if (i = de[a], (o = i ? i + r : t) in e) return o;
                a++
            }
            return n
        }

        function x() {
            return be++
        }

        function k(t) {
            var i = t.ownerDocument || t;
            return i.defaultView || i.parentWindow || e
        }

        function C(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                u(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function T(e) {
            var t = e.options.inputClass;
            return new(t || (ke ? V : Ce ? H : xe ? N : $))(e, S)
        }

        function S(e, t, i) {
            var n = i.pointers.length,
                o = i.changedPointers.length,
                r = t & Se && n - o == 0,
                a = t & (Ee | Ae) && n - o == 0;
            i.isFirst = !!r, i.isFinal = !!a, r && (e.session = {}), i.eventType = t, I(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function I(e, t) {
            var i = e.session,
                n = t.pointers,
                o = n.length;
            i.firstInput || (i.firstInput = P(t)), o > 1 && !i.firstMultiple ? i.firstMultiple = P(t) : 1 === o && (i.firstMultiple = !1);
            var r = i.firstInput,
                a = i.firstMultiple,
                s = a ? a.center : r.center,
                l = t.center = _(n);
            t.timeStamp = ve(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = L(s, l), t.distance = M(s, l), E(i, t), t.offsetDirection = O(t.deltaX, t.deltaY);
            var c = D(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = me(c.x) > me(c.y) ? c.x : c.y, t.scale = a ? W(a.pointers, n) : 1, t.rotation = a ? R(a.pointers, n) : 0, t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length, A(i, t);
            var u = e.element;
            h(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
        }

        function E(e, t) {
            var i = t.center,
                n = e.offsetDelta || {},
                o = e.prevDelta || {},
                r = e.prevInput || {};
            t.eventType !== Se && r.eventType !== Ee || (o = e.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, n = e.offsetDelta = {
                x: i.x,
                y: i.y
            }), t.deltaX = o.x + (i.x - n.x), t.deltaY = o.y + (i.y - n.y)
        }

        function A(e, t) {
            var i, o, r, a, s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;
            if (t.eventType != Ae && (l > Te || s.velocity === n)) {
                var c = t.deltaX - s.deltaX,
                    u = t.deltaY - s.deltaY,
                    d = D(l, c, u);
                o = d.x, r = d.y, i = me(d.x) > me(d.y) ? d.x : d.y, a = O(c, u), e.lastInterval = t
            } else i = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
            t.velocity = i, t.velocityX = o, t.velocityY = r, t.direction = a
        }

        function P(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: he(e.pointers[i].clientX),
                clientY: he(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: ve(),
                pointers: t,
                center: _(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function _(e) {
            var t = e.length;
            if (1 === t) return {
                x: he(e[0].clientX),
                y: he(e[0].clientY)
            };
            for (var i = 0, n = 0, o = 0; o < t;) i += e[o].clientX, n += e[o].clientY, o++;
            return {
                x: he(i / t),
                y: he(n / t)
            }
        }

        function D(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }

        function O(e, t) {
            return e === t ? Pe : me(e) >= me(t) ? e < 0 ? _e : De : t < 0 ? Oe : Me
        }

        function M(e, t, i) {
            i || (i = $e);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + o * o)
        }

        function L(e, t, i) {
            i || (i = $e);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }

        function R(e, t) {
            return L(t[1], t[0], Ve) + L(e[1], e[0], Ve)
        }

        function W(e, t) {
            return M(t[0], t[1], Ve) / M(e[0], e[1], Ve)
        }

        function $() {
            this.evEl = Ye, this.evWin = He, this.pressed = !1, C.apply(this, arguments)
        }

        function V() {
            this.evEl = ze, this.evWin = Xe, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function F() {
            this.evTarget = qe, this.evWin = Ue, this.started = !1, C.apply(this, arguments)
        }

        function Y(e, t) {
            var i = y(e.touches),
                n = y(e.changedTouches);
            return t & (Ee | Ae) && (i = b(i.concat(n), "identifier", !0)), [i, n]
        }

        function H() {
            this.evTarget = Qe, this.targetIds = {}, C.apply(this, arguments)
        }

        function j(e, t) {
            var i = y(e.touches),
                n = this.targetIds;
            if (t & (Se | Ie) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var o, r, a = y(e.changedTouches),
                s = [],
                l = this.target;
            if (r = i.filter(function(e) {
                    return h(e.target, l)
                }), t === Se)
                for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
            for (o = 0; o < a.length;) n[a[o].identifier] && s.push(a[o]), t & (Ee | Ae) && delete n[a[o].identifier], o++;
            return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
        }

        function N() {
            C.apply(this, arguments);
            var e = c(this.handler, this);
            this.touch = new H(this.manager, e), this.mouse = new $(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function z(e, t) {
            e & Se ? (this.primaryTouch = t.changedPointers[0].identifier, X.call(this, t)) : e & (Ee | Ae) && X.call(this, t)
        }

        function X(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var i = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches;
                setTimeout(function() {
                    var e = n.indexOf(i);
                    e > -1 && n.splice(e, 1)
                }, Ge)
            }
        }

        function B(e) {
            for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var o = this.lastTouches[n],
                    r = Math.abs(t - o.x),
                    a = Math.abs(i - o.y);
                if (r <= Ke && a <= Ke) return !0
            }
            return !1
        }

        function q(e, t) {
            this.manager = e, this.set(t)
        }

        function U(e) {
            if (m(e, nt)) return nt;
            var t = m(e, ot),
                i = m(e, rt);
            return t && i ? nt : t || i ? t ? ot : rt : m(e, it) ? it : tt
        }

        function Z(e) {
            this.options = ue({}, this.defaults, e || {}), this.id = x(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = st, this.simultaneous = {}, this.requireFail = []
        }

        function Q(e) {
            return e & pt ? "cancel" : e & ut ? "end" : e & ct ? "move" : e & lt ? "start" : ""
        }

        function G(e) {
            return e == Me ? "down" : e == Oe ? "up" : e == _e ? "left" : e == De ? "right" : ""
        }

        function K(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function J() {
            Z.apply(this, arguments)
        }

        function ee() {
            J.apply(this, arguments), this.pX = null, this.pY = null
        }

        function te() {
            J.apply(this, arguments)
        }

        function ie() {
            Z.apply(this, arguments), this._timer = null, this._input = null
        }

        function ne() {
            J.apply(this, arguments)
        }

        function oe() {
            J.apply(this, arguments)
        }

        function re() {
            Z.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ae(e, t) {
            return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new se(e, t)
        }

        function se(e, t) {
            this.options = ue({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = T(this), this.touchAction = new q(this, this.options.touchAction), le(this, !0), a(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function le(e, t) {
            var i = e.element;
            if (i.style) {
                var n;
                a(e.options.cssProps, function(o, r) {
                    n = w(i.style, r), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
                }), t || (e.oldCssProps = {})
            }
        }

        function ce(e, i) {
            var n = t.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var ue, de = ["", "webkit", "Moz", "MS", "ms", "o"],
            pe = t.createElement("div"),
            fe = "function",
            he = Math.round,
            me = Math.abs,
            ve = Date.now;
        ue = "function" != typeof Object.assign ? function(e) {
            if (e === n || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (o !== n && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
            }
            return t
        } : Object.assign;
        var ge = s(function(e, t, i) {
                for (var o = Object.keys(t), r = 0; r < o.length;)(!i || i && e[o[r]] === n) && (e[o[r]] = t[o[r]]), r++;
                return e
            }, "extend", "Use `assign`."),
            ye = s(function(e, t) {
                return ge(e, t, !0)
            }, "merge", "Use `assign`."),
            be = 1,
            we = /mobile|tablet|ip(ad|hone|od)|android/i,
            xe = "ontouchstart" in e,
            ke = w(e, "PointerEvent") !== n,
            Ce = xe && we.test(navigator.userAgent),
            Te = 25,
            Se = 1,
            Ie = 2,
            Ee = 4,
            Ae = 8,
            Pe = 1,
            _e = 2,
            De = 4,
            Oe = 8,
            Me = 16,
            Le = _e | De,
            Re = Oe | Me,
            We = Le | Re,
            $e = ["x", "y"],
            Ve = ["clientX", "clientY"];
        C.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
            }
        };
        var Fe = {
                mousedown: Se,
                mousemove: Ie,
                mouseup: Ee
            },
            Ye = "mousedown",
            He = "mousemove mouseup";
        l($, C, {
            handler: function(e) {
                var t = Fe[e.type];
                t & Se && 0 === e.button && (this.pressed = !0), t & Ie && 1 !== e.which && (t = Ee), this.pressed && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var je = {
                pointerdown: Se,
                pointermove: Ie,
                pointerup: Ee,
                pointercancel: Ae,
                pointerout: Ae
            },
            Ne = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            ze = "pointerdown",
            Xe = "pointermove pointerup pointercancel";
        e.MSPointerEvent && !e.PointerEvent && (ze = "MSPointerDown", Xe = "MSPointerMove MSPointerUp MSPointerCancel"), l(V, C, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    o = je[n],
                    r = Ne[e.pointerType] || e.pointerType,
                    a = "touch" == r,
                    s = g(t, e.pointerId, "pointerId");
                o & Se && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : o & (Ee | Ae) && (i = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: r,
                    srcEvent: e
                }), i && t.splice(s, 1))
            }
        });
        var Be = {
                touchstart: Se,
                touchmove: Ie,
                touchend: Ee,
                touchcancel: Ae
            },
            qe = "touchstart",
            Ue = "touchstart touchmove touchend touchcancel";
        l(F, C, {
            handler: function(e) {
                var t = Be[e.type];
                if (t === Se && (this.started = !0), this.started) {
                    var i = Y.call(this, e, t);
                    t & (Ee | Ae) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var Ze = {
                touchstart: Se,
                touchmove: Ie,
                touchend: Ee,
                touchcancel: Ae
            },
            Qe = "touchstart touchmove touchend touchcancel";
        l(H, C, {
            handler: function(e) {
                var t = Ze[e.type],
                    i = j.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });
        var Ge = 2500,
            Ke = 25;
        l(N, C, {
            handler: function(e, t, i) {
                var n = "touch" == i.pointerType,
                    o = "mouse" == i.pointerType;
                if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) z.call(this, t, i);
                    else if (o && B.call(this, i)) return;
                    this.callback(e, t, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Je = w(pe.style, "touchAction"),
            et = Je !== n,
            tt = "auto",
            it = "manipulation",
            nt = "none",
            ot = "pan-x",
            rt = "pan-y",
            at = function() {
                if (!et) return !1;
                var t = {},
                    i = e.CSS && e.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    t[n] = !i || e.CSS.supports("touch-action", n)
                }), t
            }();
        q.prototype = {
            set: function(e) {
                "compute" == e && (e = this.compute()), et && this.manager.element.style && at[e] && (this.manager.element.style[Je] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return a(this.manager.recognizers, function(t) {
                    u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), U(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    i = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault();
                else {
                    var n = this.actions,
                        o = m(n, nt) && !at[nt],
                        r = m(n, rt) && !at[rt],
                        a = m(n, ot) && !at[ot];
                    if (o) {
                        var s = 1 === e.pointers.length,
                            l = e.distance < 2,
                            c = e.deltaTime < 250;
                        if (s && l && c) return
                    }
                    if (!a || !r) return o || r && i & Le || a && i & Re ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var st = 1,
            lt = 2,
            ct = 4,
            ut = 8,
            dt = ut,
            pt = 16;
        Z.prototype = {
            defaults: {},
            set: function(e) {
                return ue(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (r(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = K(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return r(e, "dropRecognizeWith", this) ? this : (e = K(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (r(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = K(e, this), -1 === g(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (r(e, "dropRequireFailure", this)) return this;
                e = K(e, this);
                var t = g(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    i.manager.emit(t, e)
                }
                var i = this,
                    n = this.state;
                n < ut && t(i.options.event + Q(n)), t(i.options.event), e.additionalEvent && t(e.additionalEvent), n >= ut && t(i.options.event + Q(n))
            },
            tryEmit: function(e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | st))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = ue({}, e);
                if (!u(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                this.state & (dt | pt | 32) && (this.state = st), this.state = this.process(t), this.state & (lt | ct | ut | pt) && this.tryEmit(t)
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, l(J, Z, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = t & (lt | ct),
                    o = this.attrTest(e);
                return n && (i & Ae || !o) ? t | pt : n || o ? i & Ee ? t | ut : t & lt ? t | ct : lt : 32
            }
        }), l(ee, J, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: We
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Le && t.push(rt), e & Re && t.push(ot), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    a = e.deltaY;
                return o & t.direction || (t.direction & Le ? (o = 0 === r ? Pe : r < 0 ? _e : De, i = r != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === a ? Pe : a < 0 ? Oe : Me, i = a != this.pY, n = Math.abs(e.deltaY))), e.direction = o, i && n > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return J.prototype.attrTest.call(this, e) && (this.state & lt || !(this.state & lt) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = G(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), l(te, J, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [nt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & lt)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), l(ie, Z, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [tt]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (Ee | Ae) && !r) this.reset();
                else if (e.eventType & Se) this.reset(), this._timer = o(function() {
                    this.state = dt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Ee) return dt;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === dt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
            }
        }), l(ne, J, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [nt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & lt)
            }
        }), l(oe, J, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Le | Re,
                pointers: 1
            },
            getTouchAction: function() {
                return ee.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (Le | Re) ? t = e.overallVelocity : i & Le ? t = e.overallVelocityX : i & Re && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Ee
            },
            emit: function(e) {
                var t = G(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), l(re, Z, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [it]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if (this.reset(), e.eventType & Se && 0 === this.count) return this.failTimeout();
                if (n && r && i) {
                    if (e.eventType != Ee) return this.failTimeout();
                    var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        s = !this.pCenter || M(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                        this.state = dt, this.tryEmit()
                    }, t.interval, this), lt) : dt
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = o(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == dt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ae.VERSION = "2.0.7", ae.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ne, {
                    enable: !1
                }],
                [te, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [oe, {
                    direction: Le
                }],
                [ee, {
                        direction: Le
                    },
                    ["swipe"]
                ],
                [re],
                [re, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ie]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        se.prototype = {
            set: function(e) {
                return ue(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var i, n = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && o.state & dt) && (o = t.curRecognizer = null);
                    for (var r = 0; r < n.length;) i = n[r], 2 === t.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(e), !o && i.state & (lt | ct | ut) && (o = t.curRecognizer = i), r++
                }
            },
            get: function(e) {
                if (e instanceof Z) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (r(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (r(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        i = g(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== n && t !== n) {
                    var i = this.handlers;
                    return a(v(e), function(e) {
                        i[e] = i[e] || [], i[e].push(t)
                    }), this
                }
            },
            off: function(e, t) {
                if (e !== n) {
                    var i = this.handlers;
                    return a(v(e), function(e) {
                        t ? i[e] && i[e].splice(g(i[e], t), 1) : delete i[e]
                    }), this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && ce(e, t);
                var i = this.handlers[e] && this.handlers[e].slice();
                if (i && i.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](t), n++
                }
            },
            destroy: function() {
                this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, ue(ae, {
            INPUT_START: Se,
            INPUT_MOVE: Ie,
            INPUT_END: Ee,
            INPUT_CANCEL: Ae,
            STATE_POSSIBLE: st,
            STATE_BEGAN: lt,
            STATE_CHANGED: ct,
            STATE_ENDED: ut,
            STATE_RECOGNIZED: dt,
            STATE_CANCELLED: pt,
            STATE_FAILED: 32,
            DIRECTION_NONE: Pe,
            DIRECTION_LEFT: _e,
            DIRECTION_RIGHT: De,
            DIRECTION_UP: Oe,
            DIRECTION_DOWN: Me,
            DIRECTION_HORIZONTAL: Le,
            DIRECTION_VERTICAL: Re,
            DIRECTION_ALL: We,
            Manager: se,
            Input: C,
            TouchAction: q,
            TouchInput: H,
            MouseInput: $,
            PointerEventInput: V,
            TouchMouseInput: N,
            SingleTouchInput: F,
            Recognizer: Z,
            AttrRecognizer: J,
            Tap: re,
            Pan: ee,
            Swipe: oe,
            Pinch: te,
            Rotate: ne,
            Press: ie,
            on: p,
            off: f,
            each: a,
            merge: ye,
            extend: ge,
            assign: ue,
            inherit: l,
            bindFn: c,
            prefixed: w
        }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ae, "function" == typeof define && define.amd ? define(function() {
            return ae
        }) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
    }(window, document),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }(function(e, t) {
        function i(i, n) {
            var o = e(i);
            o.data("hammer") || o.data("hammer", new t(o[0], n))
        }
        e.fn.hammer = function(e) {
            return this.each(function() {
                i(this, e)
            })
        }, t.Manager.prototype.emit = function(t) {
            return function(i, n) {
                t.call(this, i, n), e(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(t.Manager.prototype.emit)
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(e) {
        var t = function(e, t) {
                var i, n = document.createElement("canvas");
                e.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var o = n.getContext("2d");
                n.width = n.height = t.size;
                var r = 1;
                window.devicePixelRatio > 1 && (r = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
                var a = (t.size - t.lineWidth) / 2;
                t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var s = function(e, t, i) {
                        var n = (i = Math.min(Math.max(-1, i || 0), 1)) <= 0;
                        o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * i, n), o.strokeStyle = e, o.lineWidth = t, o.stroke()
                    },
                    l = function() {
                        var e, i;
                        o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
                        for (var n = 24; n > 0; --n) n % 6 == 0 ? (i = t.scaleLength, e = 0) : (i = .6 * t.scaleLength, e = t.scaleLength - i), o.fillRect(-t.size / 2 + e, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore()
                    },
                    c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    },
                    u = function() {
                        t.scaleColor && l(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return n
                }, this.getCtx = function() {
                    return o
                }, this.clear = function() {
                    o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
                }, this.draw = function(e) {
                    t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = t.lineCap;
                    var n;
                    n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(n, t.lineWidth, e / 100)
                }.bind(this), this.animate = function(e, i) {
                    var n = Date.now();
                    t.onStart(e, i);
                    var o = function() {
                        var r = Math.min(Date.now() - n, t.animate.duration),
                            a = t.easing(this, r, e, i - e, t.animate.duration);
                        this.draw(a), t.onStep(e, i, a), r >= t.animate.duration ? t.onStop(e, i) : c(o)
                    }.bind(this);
                    c(o)
                }.bind(this)
            },
            i = function(e, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(e, t, i, n, o) {
                        return t /= o / 2, t < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
                    },
                    onStart: function(e, t) {},
                    onStep: function(e, t, i) {},
                    onStop: function(e, t) {}
                };
                if (void 0 !== t) n.renderer = t;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var o = {},
                    r = 0,
                    a = function() {
                        this.el = e, this.options = o;
                        for (var t in n) n.hasOwnProperty(t) && (o[t] = i && void 0 !== i[t] ? i[t] : n[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
                        "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
                            duration: o.animate,
                            enabled: !0
                        }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                            duration: 1e3,
                            enabled: o.animate
                        }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(e) {
                    return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
                }.bind(this), this.disableAnimation = function() {
                    return o.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return o.animate.enabled = !0, this
                }, a()
            };
        e.fn.easyPieChart = function(t) {
            return this.each(function() {
                var n;
                e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new i(this, n)))
            })
        }
    }),
    function(e) {
        var t = "input[type=range]",
            i = !1,
            n = void 0,
            o = function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            };
        e(t).each(o), e(document).on("change", t, function(t) {
            var i = e(this);
            i.siblings(".thumb").find(".value").html(i.val())
        }), e(document).on("input mousedown touchstart", t, function(t) {
            var r = e(this),
                a = r.siblings(".thumb"),
                s = (a.find(".value"), r.outerWidth());
            if (!a.length && o(), a.find(".value").html(r.val()), i = !0, r.addClass("active"), a.hasClass("active") || a.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== t.type) {
                var l = void 0 === t.pageX || null === t.pageX;
                (n = l ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left) < 0 ? n = 0 : n > s && (n = s), a.addClass("active").css("left", n)
            }
            a.find(".value").html(r.val())
        }), e(document).on("mouseup touchend", ".range-field", function(t) {
            i = !1, e(this).removeClass("active")
        }), e(document).on("mousemove touchmove", ".range-field", function(n) {
            var o = e(this).children(".thumb"),
                r = void 0;
            if (i) {
                o.hasClass("active") || o.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), r = void 0 === n.pageX || null === n.pageX ? n.originalEvent.touches[0].pageX - e(this).offset().left : n.pageX - e(this).offset().left;
                var a = e(this).outerWidth();
                r < 0 ? r = 0 : r > a && (r = a), o.addClass("active").css("left", r), o.find(".value").html(o.siblings(t).val())
            }
        }), e(document).on("mouseout touchleave", ".range-field", function(t) {
            if (!i) {
                var n = e(this).children(".thumb");
                n.hasClass("active") && n.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), n.removeClass("active")
            }
        })
    }(jQuery),
    function(e) {
        e(document).on("change", '.file-field input[type="file"]', function(t) {
            for (var i = e(t.target), n = i.closest(".file-field").find("input.file-path"), o = i[0].files, r = [], a = 0; a < o.length; a++) {
                var s = o[a].name;
                r.push(s)
            }
            n.val(r.join(", ")), n.trigger("change")
        })
    }(jQuery),
    function(e) {
        e.fn.material_select = function(t) {
            function i(e, t, i) {
                var o = e.indexOf(t),
                    r = -1 === o;
                return r ? e.push(t) : e.splice(o, 1), i.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", r), n(e, i), r
            }

            function n(e, t) {
                for (var i = "", n = 0, o = e.length; n < o; n++) {
                    var r = t.find("option").eq(e[n]).text();
                    i += 0 === n ? r : ", " + r
                }
                "" === i && (i = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(i)
            }

            function o() {
                var e = (new Date).getTime();
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var i = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" == t ? i : 3 & i | 8).toString(16)
                })
            }
            e(this).each(function() {
                var n = e(this);
                if (!n.hasClass("browser-default")) {
                    var r = !!n.attr("multiple"),
                        a = !1,
                        s = !1,
                        l = n.data("select-id");
                    if (l && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), e("ul#select-options-" + l).remove()), "destroy" !== t) {
                        var c = o();
                        n.data("select-id", c);
                        var u = e('<div class="select-wrapper"></div>');
                        u.addClass(n.attr("class"));
                        var d = e('<ul id="select-options-' + c + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                            p = n.children("option, optgroup"),
                            f = [],
                            h = !1,
                            m = n.find("option:selected").html() || n.find("option:first").html() || "",
                            v = function() {
                                var t = e(this).closest("ul"),
                                    i = e(this).val();
                                t.find("li").find("span.filtrable").each(function() {
                                    "string" == typeof this.outerText && (this.outerText.toLowerCase().startsWith(i.toLowerCase()) ? (e(this).show(), e(this).parent().show()) : (e(this).hide(), e(this).parent().hide()))
                                })
                            },
                            g = !!n.attr("searchable");
                        g && function() {
                            var t = n.attr("searchable"),
                                i = e('<span class="search-wrap"><input type="text" class="search" placeholder="' + t + '"></span>');
                            d.append(i), i.find(".search").keyup(v)
                        }();
                        var y = function(t, i, n) {
                            s = t.attr("searchable");
                            var o = i.is(":disabled") ? "disabled " : "",
                                r = "optgroup-option" === n ? "optgroup-option " : "";
                            "" !== r && (n = "multiple" === t.attr("multiple") ? "multiple" : n, a = !0);
                            var l = i.data("icon"),
                                c = i.attr("class");
                            if (l) {
                                var u = "";
                                return c && (u = ' class="' + c + '"'), "multiple" === n ? d.append(e('<li class="' + o + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable">' + i.html() + "</span></li>")), !0
                            }
                            "multiple" === n ? d.append(e('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><span class="filtrable">' + i.html() + "</span></li>"))
                        };
                        p.length && p.each(function() {
                            if (e(this).is("option")) r ? y(n, e(this), "multiple") : y(n, e(this));
                            else if (e(this).is("optgroup")) {
                                var t = e(this).children("option");
                                d.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function() {
                                    y(n, e(this), "optgroup-option")
                                })
                            }
                        }), d.find("li:not(.optgroup)").each(function(o) {
                            e(this).click(function(l) {
                                if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                                    var c = !0;
                                    r && a ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                        return !t
                                    }), c = i(f, e(this).index(), n)) : r && s ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                        return !t
                                    }), c = i(f, e(this).index() - 1, n), x.trigger("focus")) : r ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                        return !t
                                    }), c = i(f, e(this).index(), n), x.trigger("focus")) : (d.find("li").removeClass("active"), e(this).toggleClass("active"), x.val(e(this).text())), k(d, e(this)), n.find("option").eq(o).prop("selected", c), n.trigger("change"), void 0 !== t && t()
                                }
                                l.stopPropagation()
                            })
                        }), n.wrap(u);
                        var b = e('<span class="caret">&#9660;</span>');
                        n.is(":disabled") && b.addClass("disabled");
                        var w = m.replace(/"/g, "&quot;"),
                            x = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + c + '" value="' + w + '"/>');
                        n.before(x), x.before(b), x.after(d), n.is(":disabled") || x.dropdown({
                            hover: !1,
                            closeOnClick: !1
                        }), n.attr("tabindex") && e(x[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), x.on({
                            focus: function() {
                                if (e("ul.select-dropdown").not(d[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !d.is(":visible")) {
                                    e(this).trigger("open", ["focus"]);
                                    var t = e(this).val(),
                                        i = d.find("li").filter(function() {
                                            return e(this).text().toLowerCase() === t.toLowerCase()
                                        })[0];
                                    k(d, i)
                                }
                            },
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }), x.on("blur", function() {
                            r || g || e(this).trigger("close"), d.find("li.selected").removeClass("selected")
                        }), !r && g && d.find("li").on("click", function() {
                            x.trigger("close")
                        }), d.hover(function() {
                            h = !0
                        }, function() {
                            h = !1
                        }), e(window).on({
                            click: function() {
                                (r || g) && (h || x.trigger("close"))
                            }
                        }), r && n.find("option:selected:not(:disabled)").each(function() {
                            var t = e(this).index();
                            i(f, t, n), d.find("li").eq(t).find(":checkbox").prop("checked", !0)
                        });
                        var k = function(t, i) {
                                if (i) {
                                    t.find("li.selected").removeClass("selected");
                                    var n = e(i);
                                    n.addClass("selected"), d.scrollTo(n)
                                }
                            },
                            C = [];
                        x.on("keydown", function(t) {
                            if (9 != t.which)
                                if (40 != t.which || d.is(":visible")) {
                                    if (13 != t.which || d.is(":visible")) {
                                        t.preventDefault();
                                        var i = String.fromCharCode(t.which).toLowerCase(),
                                            n = [9, 13, 27, 38, 40];
                                        if (i && -1 === n.indexOf(t.which)) {
                                            C.push(i);
                                            var o = C.join(""),
                                                a = d.find("li").filter(function() {
                                                    return 0 === e(this).text().toLowerCase().indexOf(o)
                                                })[0];
                                            a && k(d, a)
                                        }
                                        if (13 == t.which) {
                                            var s = d.find("li.selected:not(.disabled)")[0];
                                            s && (e(s).trigger("click"), r || x.trigger("close"))
                                        }
                                        40 == t.which && (a = d.find("li.selected").length ? d.find("li.selected").next("li:not(.disabled)")[0] : d.find("li:not(.disabled)")[0], k(d, a)), 27 == t.which && x.trigger("close"), 38 == t.which && (a = d.find("li.selected").prev("li:not(.disabled)")[0]) && k(d, a), setTimeout(function() {
                                            C = []
                                        }, 1e3)
                                    }
                                } else x.trigger("open");
                            else x.trigger("close")
                        })
                    } else n.data("select-id", null).removeClass("initialized")
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
    }),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        function t(r, s, d, p) {
            function f() {
                return t._.node("div", t._.node("div", t._.node("div", t._.node("div", E.component.nodes(k.open), T.box), T.wrap), T.frame), T.holder, 'tabindex="-1"')
            }

            function h() {
                S.data(s, E).addClass(T.input).val(S.data("value") ? E.get("select", C.format) : r.value), C.editable || S.on("focus." + k.id + " click." + k.id, function(e) {
                    e.preventDefault(), E.open()
                }).on("keydown." + k.id, w), o(r, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: r.id + "_root"
                })
            }

            function m() {
                o(E.$root[0], "hidden", !0)
            }

            function v() {
                E.$holder.on({
                    keydown: w,
                    "focus.toOpen": b,
                    blur: function() {
                        S.removeClass(T.target)
                    },
                    focusin: function(e) {
                        E.$root.removeClass(T.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var i = t.target;
                        i != E.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), E.$holder[0].focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        i = t.data(),
                        n = t.hasClass(T.navDisabled) || t.hasClass(T.disabled),
                        o = a();
                    o = o && (o.type || o.href), (n || o && !e.contains(E.$root[0], o)) && E.$holder[0].focus(), !n && i.nav ? E.set("highlight", E.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? (E.set("select", i.pick), C.closeOnSelect && E.close(!0)) : i.clear ? (E.clear(), C.closeOnClear && E.close(!0)) : i.close && E.close(!0)
                })
            }

            function g() {
                var t;
                !0 === C.hiddenName ? (t = r.name, r.name = "") : t = (t = ["string" == typeof C.hiddenPrefix ? C.hiddenPrefix : "", "string" == typeof C.hiddenSuffix ? C.hiddenSuffix : "_submit"])[0] + r.name + t[1], E._hidden = e('<input type=hidden name="' + t + '"' + (S.data("value") || r.value ? ' value="' + E.get("select", C.formatSubmit) + '"' : "") + ">")[0], S.on("change." + k.id, function() {
                    E._hidden.value = r.value ? E.get("select", C.formatSubmit) : ""
                })
            }

            function y() {
                x && u ? E.$holder.find("." + T.frame).one("transitionend", function() {
                    E.$holder[0].focus()
                }) : E.$holder[0].focus()
            }

            function b(e) {
                e.stopPropagation(), S.addClass(T.target), E.$root.addClass(T.focused), E.open()
            }

            function w(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                if (27 == t) return E.close(!0), !1;
                (32 == t || i || !k.open && E.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? E.clear().close() : E.open())
            }
            if (!r) return t;
            var x = !1,
                k = {
                    id: r.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                C = d ? e.extend(!0, {}, d.defaults, p) : p || {},
                T = e.extend({}, t.klasses(), C.klass),
                S = e(r),
                I = function() {
                    return this.start()
                },
                E = I.prototype = {
                    constructor: I,
                    $node: S,
                    start: function() {
                        return k && k.start ? E : (k.methods = {}, k.start = !0, k.open = !1, k.type = r.type, r.autofocus = r == a(), r.readOnly = !C.editable, r.id = r.id || k.id, "text" != r.type && (r.type = "text"), E.component = new d(E, C), E.$root = e('<div class="' + T.picker + '" id="' + r.id + '_root" />'), m(), E.$holder = e(f()).appendTo(E.$root), v(), C.formatSubmit && g(), h(), C.containerHidden ? e(C.containerHidden).append(E._hidden) : S.after(E._hidden), C.container ? e(C.container).append(E.$root) : S.after(E.$root), E.on({
                            start: E.component.onStart,
                            render: E.component.onRender,
                            stop: E.component.onStop,
                            open: E.component.onOpen,
                            close: E.component.onClose,
                            set: E.component.onSet
                        }).on({
                            start: C.onStart,
                            render: C.onRender,
                            stop: C.onStop,
                            open: C.onOpen,
                            close: C.onClose,
                            set: C.onSet
                        }), x = i(E.$holder[0]), r.autofocus && E.open(), E.trigger("start").trigger("render"))
                    },
                    render: function(t) {
                        return t ? (E.$holder = e(f()), v(), E.$root.html(E.$holder)) : E.$root.find("." + T.box).html(E.component.nodes(k.open)), E.trigger("render")
                    },
                    stop: function() {
                        return k.start ? (E.close(), E._hidden && E._hidden.parentNode.removeChild(E._hidden), E.$root.remove(), S.removeClass(T.input).removeData(s), setTimeout(function() {
                            S.off("." + k.id)
                        }, 0), r.type = k.type, r.readOnly = !1, E.trigger("stop"), k.methods = {}, k.start = !1, E) : E
                    },
                    open: function(i) {
                        return k.open ? E : (S.addClass(T.active), o(r, "expanded", !0), setTimeout(function() {
                            E.$root.addClass(T.opened), o(E.$root[0], "hidden", !1)
                        }, 0), !1 !== i && (k.open = !0, x && c.css("overflow", "hidden").css("padding-right", "+=" + n()), y(), l.on("click." + k.id + " focusin." + k.id, function(e) {
                            var t = e.target;
                            t != r && t != document && 3 != e.which && E.close(t === E.$holder[0])
                        }).on("keydown." + k.id, function(i) {
                            var n = i.keyCode,
                                o = E.component.key[n],
                                r = i.target;
                            27 == n ? E.close(!0) : r != E.$holder[0] || !o && 13 != n ? e.contains(E.$root[0], r) && 13 == n && (i.preventDefault(), r.click()) : (i.preventDefault(), o ? t._.trigger(E.component.key.go, E, [t._.trigger(o)]) : E.$root.find("." + T.highlighted).hasClass(T.disabled) || (E.set("select", E.component.item.highlight), C.closeOnSelect && E.close(!0)))
                        })), E.trigger("open"))
                    },
                    close: function(e) {
                        return e && (C.editable ? r.focus() : (E.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            E.$holder.on("focus.toOpen", b)
                        }, 0))), S.removeClass(T.active), o(r, "expanded", !1), setTimeout(function() {
                            E.$root.removeClass(T.opened + " " + T.focused), o(E.$root[0], "hidden", !0)
                        }, 0), k.open ? (k.open = !1, x && c.css("overflow", "").css("padding-right", "-=" + n()), l.off("." + k.id), E.trigger("close")) : E
                    },
                    clear: function(e) {
                        return E.set("clear", null, e)
                    },
                    set: function(t, i, n) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (n = a && e.isPlainObject(i) ? i : n || {}, t) {
                            a || (s[t] = i);
                            for (o in s) r = s[o], o in E.component.item && (void 0 === r && (r = null), E.component.set(o, r, n)), "select" != o && "clear" != o || S.val("clear" == o ? "" : E.get(o, C.format)).trigger("change");
                            E.render()
                        }
                        return n.muted ? E : E.trigger("set", s)
                    },
                    get: function(e, i) {
                        if (e = e || "value", null != k[e]) return k[e];
                        if ("valueSubmit" == e) {
                            if (E._hidden) return E._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return r.value;
                        if (e in E.component.item) {
                            if ("string" == typeof i) {
                                var n = E.component.get(e);
                                return n ? t._.trigger(E.component.formats.toString, E.component, [i, n]) : ""
                            }
                            return E.component.get(e)
                        }
                    },
                    on: function(t, i, n) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (t) {
                            a || (s[t] = i);
                            for (o in s) r = s[o], n && (o = "_" + o), k.methods[o] = k.methods[o] || [], k.methods[o].push(r)
                        }
                        return E
                    },
                    off: function() {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1)(t = i[e]) in k.methods && delete k.methods[t];
                        return E
                    },
                    trigger: function(e, i) {
                        var n = function(e) {
                            var n = k.methods[e];
                            n && n.map(function(e) {
                                t._.trigger(e, E, [i])
                            })
                        };
                        return n("_" + e), n(e), E
                    }
                };
            return new I
        }

        function i(e) {
            var t;
            return e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position), "fixed" == t
        }

        function n() {
            if (c.height() <= s.height()) return 0;
            var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                i = t[0].offsetWidth;
            t.css("overflow", "scroll");
            var n = e('<div style="width:100%" />').appendTo(t)[0].offsetWidth;
            return t.remove(), i - n
        }

        function o(t, i, n) {
            if (e.isPlainObject(i))
                for (var o in i) r(t, o, i[o]);
            else r(t, i, n)
        }

        function r(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function a() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        var s = e(window),
            l = e(document),
            c = e(document.documentElement),
            u = null != document.documentElement.style.transition;
        return t.klasses = function(e) {
            return e = e || "picker", {
                picker: e,
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, t._ = {
            group: function(e) {
                for (var i, n = "", o = t._.trigger(e.min, e); o <= t._.trigger(e.max, e, [o]); o += e.i) i = t._.trigger(e.item, e, [o]), n += t._.node(e.node, i[0], i[1], i[2]);
                return n
            },
            node: function(t, i, n, o) {
                return i ? (i = e.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", o = o ? " " + o : "", "<" + t + n + o + ">" + i + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function(e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function(t, i) {
                e.isPlainObject(t) || (t = {
                    attribute: i
                }), i = "";
                for (var n in t) {
                    var o = ("role" == n ? "" : "aria-") + n;
                    i += null == t[n] ? "" : o + '="' + t[n] + '"'
                }
                return i
            }
        }, t.extend = function(i, n) {
            e.fn[i] = function(o, r) {
                var a = this.data(i);
                return "picker" == o ? a : a && "string" == typeof o ? t._.trigger(a[o], a, [r]) : this.each(function() {
                    e(this).data(i) || new t(this, i, n, o)
                })
            }, e.fn[i].defaults = n.defaults
        }, t
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        function i(e, t) {
            var i = this,
                n = e.$node[0],
                o = n.value,
                r = e.$node.data("value"),
                a = r || o,
                s = r ? t.formatSubmit : t.format,
                l = function() {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            i.settings = t, i.$node = e.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = - function(e) {
                return !0 === e[0] ? e.shift() : -1
            }(i.item.disable), i.set("min", t.min).set("max", t.max).set("now"), a ? i.set("select", a, {
                format: s,
                defaultValue: !0
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return l() ? -1 : 1
                },
                37: function() {
                    return l() ? 1 : -1
                },
                go: function(e) {
                    var t = i.item.highlight,
                        n = new Date(t.year, t.month, t.date + e);
                    i.set("highlight", n, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var n = e._;
        i.prototype.set = function(e, t, i) {
            var n = this,
                o = n.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, n) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(o) {
                return t = n[o](e, t, i)
            }).pop(), "select" == e ? n.set("highlight", o.select, i) : "highlight" == e ? n.set("view", o.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, i.prototype.get = function(e) {
            return this.item[e]
        }, i.prototype.create = function(e, i, o) {
            var r, a = this;
            return i = void 0 === i ? e : i, i == -1 / 0 || i == 1 / 0 ? r = i : t.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : a.create().obj) : i = n.isInteger(i) || n.isDate(i) ? a.normalize(new Date(i), o) : a.now(e, i, o), {
                year: r || i.getFullYear(),
                month: r || i.getMonth(),
                date: r || i.getDate(),
                day: r || i.getDay(),
                obj: r || i,
                pick: r || i.getTime()
            }
        }, i.prototype.createRange = function(e, i) {
            var o = this,
                r = function(e) {
                    return !0 === e || t.isArray(e) || n.isDate(e) ? o.create(e) : e
                };
            return n.isInteger(e) || (e = r(e)), n.isInteger(i) || (i = r(i)), n.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : n.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: r(e),
                to: r(i)
            }
        }, i.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, i.prototype.overlapRanges = function(e, t) {
            var i = this;
            return e = i.createRange(e.from, e.to), t = i.createRange(t.from, t.to), i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
        }, i.prototype.now = function(e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, i.prototype.navigate = function(e, i, n) {
            var o, r, a, s, l = t.isArray(i),
                c = t.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (r = i.year, a = i.month, s = i.date) : (r = +i[0], a = +i[1], s = +i[2]), n && n.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (n && n.nav ? n.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
                i = [r, a, s]
            }
            return i
        }, i.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, i.prototype.measure = function(e, t) {
            var i = this;
            return t ? "string" == typeof t ? t = i.parse(e, t) : n.isInteger(t) && (t = i.now(e, t, {
                rel: t
            })) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, i.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, i.prototype.validate = function(e, i, o) {
            var r, a, s, l, c = this,
                u = i,
                d = o && o.interval ? o.interval : 1,
                p = -1 === c.item.enable,
                f = c.item.min,
                h = c.item.max,
                m = p && c.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var o = c.create(e).pick;
                        o < i.pick ? r = !0 : o > i.pick && (a = !0)
                    }
                    return n.isInteger(e)
                }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!p && c.disabled(i) || p && c.disabled(i) && (m || r || a) || !p && (i.pick <= f.pick || i.pick >= h.pick)))
                for (p && !m && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (s = !0, d = 1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (l = !0, d = -1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
            return i
        }, i.prototype.disabled = function(e) {
            var i = this,
                o = i.item.disable.filter(function(o) {
                    return n.isInteger(o) ? e.day === (i.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || n.isDate(o) ? e.pick === i.create(o).pick : t.isPlainObject(o) ? i.withinRange(o, e) : void 0
                });
            return o = o.length && !o.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === i.item.enable ? !o : o || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, i.prototype.parse = function(e, t, i) {
            var o = this,
                r = {};
            return t && "string" == typeof t ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function(e) {
                var i = o.formats[e],
                    a = i ? n.trigger(i, o, [t, r]) : e.replace(/^!/, "").length;
                i && (r[e] = t.substr(0, a)), t = t.substr(a)
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
        }, i.prototype.formats = function() {
            function e(e, t, i) {
                var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? n.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : n.lead(t.date)
                },
                ddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function(e, t) {
                    return e ? n.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : n.lead(t.month + 1)
                },
                mmm: function(t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function(t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var i = this;
                    return i.formats.toArray(e).map(function(e) {
                        return n.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), i.prototype.isDateExact = function(e, i) {
            var o = this;
            return n.isInteger(e) && n.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (n.isDate(e) || t.isArray(e)) && (n.isDate(i) || t.isArray(i)) ? o.create(e).pick === o.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (o.isDateExact(e.from, i.from) && o.isDateExact(e.to, i.to))
        }, i.prototype.isDateOverlap = function(e, i) {
            var o = this,
                r = o.settings.firstDay ? 1 : 0;
            return n.isInteger(e) && (n.isDate(i) || t.isArray(i)) ? (e = e % 7 + r) === o.create(i).day + 1 : n.isInteger(i) && (n.isDate(e) || t.isArray(e)) ? (i = i % 7 + r) === o.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && o.overlapRanges(e, i)
        }, i.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, i.prototype.deactivate = function(e, i) {
            var o = this,
                r = o.item.disable.slice(0);
            return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), r = []) : !0 === i ? (o.flipEnable(-1), r = []) : i.map(function(e) {
                for (var i, a = 0; a < r.length; a += 1)
                    if (o.isDateExact(e, r[a])) {
                        i = !0;
                        break
                    }
                i || (n.isInteger(e) || n.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
            }), r
        }, i.prototype.activate = function(e, i) {
            var o = this,
                r = o.item.disable,
                a = r.length;
            return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), r = []) : !1 === i ? (o.flipEnable(-1), r = []) : i.map(function(e) {
                var i, s, l, c;
                for (l = 0; l < a; l += 1) {
                    if (s = r[l], o.isDateExact(s, e)) {
                        i = r[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e)[3] || i.push("inverted") : n.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateExact(r[l], e)) {
                            r[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateOverlap(r[l], e)) {
                            r[l] = null;
                            break
                        }
                i && r.push(i)
            }), r.filter(function(e) {
                return null != e
            })
        }, i.prototype.nodes = function(e) {
            var t = this,
                i = t.settings,
                o = t.item,
                r = o.now,
                a = o.select,
                s = o.highlight,
                l = o.view,
                c = o.disable,
                u = o.min,
                d = o.max,
                p = function(e, t) {
                    return i.firstDay && (e.push(e.shift()), t.push(t.shift())), n.node("thead", n.node("tr", n.group({
                        min: 0,
                        max: 6,
                        i: 1,
                        node: "th",
                        item: function(n) {
                            return [e[n], i.klass.weekdays, 'scope=col title="' + t[n] + '"']
                        }
                    })))
                }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysShort).slice(0), i.weekdaysFull.slice(0)),
                f = function(e) {
                    return n.node("div", " ", i.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + n.ariaAttr({
                        role: "button",
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + (e ? i.labelMonthNext : i.labelMonthPrev) + '"')
                },
                h = function() {
                    var o = i.showMonthsShort ? i.monthsShort : i.monthsFull;
                    return i.selectMonths ? n.node("select", n.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [o[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
                        }
                    }), i.klass.selectMonth, (e ? "" : "disabled") + " " + n.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + i.labelMonthSelect + '"') : n.node("div", o[l.month], i.klass.month)
                },
                m = function() {
                    var o = l.year,
                        r = !0 === i.selectYears ? 5 : ~~(i.selectYears / 2);
                    if (r) {
                        var a = u.year,
                            s = d.year,
                            c = o - r,
                            p = o + r;
                        if (a > c && (p += a - c, c = a), s < p) {
                            var f = c - a,
                                h = p - s;
                            c -= f > h ? h : f, p = s
                        }
                        return n.node("select", n.group({
                            min: c,
                            max: p,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (o == e ? " selected" : "")]
                            }
                        }), i.klass.selectYear, (e ? "" : "disabled") + " " + n.ariaAttr({
                            controls: t.$node[0].id + "_table"
                        }) + ' title="' + i.labelYearSelect + '"')
                    }
                    return n.node("div", o, i.klass.year)
                };
            return n.node("div", (i.selectYears ? m() + h() : h() + m()) + f() + f(1), i.klass.header) + n.node("table", p + n.node("tbody", n.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(e) {
                    var o = i.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
                    return [n.group({
                        min: 7 * e - l.day + o + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = t.create([l.year, l.month, e + (i.firstDay ? 1 : 0)]);
                            var o = a && a.pick == e.pick,
                                p = s && s.pick == e.pick,
                                f = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick,
                                h = n.trigger(t.formats.toString, t, [i.format, e]);
                            return [n.node("div", e.date, function(t) {
                                return t.push(l.month == e.month ? i.klass.infocus : i.klass.outfocus), r.pick == e.pick && t.push(i.klass.now), o && t.push(i.klass.selected), p && t.push(i.klass.highlighted), f && t.push(i.klass.disabled), t.join(" ")
                            }([i.klass.day]), "data-pick=" + e.pick + " " + n.ariaAttr({
                                role: "gridcell",
                                label: h,
                                selected: !(!o || t.$node.val() !== h) || null,
                                activedescendant: !!p || null,
                                disabled: !!f || null
                            })), "", n.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), i.klass.table, 'id="' + t.$node[0].id + '_table" ' + n.ariaAttr({
                role: "grid",
                controls: t.$node[0].id,
                readonly: !0
            })) + n.node("div", n.node("button", i.today, i.klass.buttonToday, "type=button data-pick=" + r.pick + (e && !t.disabled(r) ? "" : " disabled") + " " + n.ariaAttr({
                controls: t.$node[0].id
            })) + n.node("button", i.clear, i.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: t.$node[0].id
            })) + n.node("button", i.close, i.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: t.$node[0].id
            })), i.klass.footer)
        }, i.defaults = function(e) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                closeOnSelect: !0,
                closeOnClear: !0,
                format: "d mmmm, yyyy",
                klass: {
                    table: e + "table",
                    header: e + "header",
                    navPrev: e + "nav--prev",
                    navNext: e + "nav--next",
                    navDisabled: e + "nav--disabled",
                    month: e + "month",
                    year: e + "year",
                    selectMonth: e + "select--month",
                    selectYear: e + "select--year",
                    weekdays: e + "weekday",
                    day: e + "day",
                    disabled: e + "day--disabled",
                    selected: e + "day--selected",
                    highlighted: e + "day--highlighted",
                    now: e + "day--today",
                    infocus: e + "day--infocus",
                    outfocus: e + "day--outfocus",
                    footer: e + "footer",
                    buttonClear: e + "button--clear",
                    buttonToday: e + "button--today",
                    buttonClose: e + "button--close"
                }
            }
        }(e.klasses().picker + "__"), e.extend("pickadate", i)
    }), $.extend($.fn.pickadate.defaults, {
        selectMonths: !0,
        selectYears: 15,
        onRender: function() {
            var e = this.$root,
                t = this.get("highlight", "yyyy"),
                i = this.get("highlight", "dd"),
                n = this.get("highlight", "mmm"),
                o = this.get("highlight", "dddd");
            e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
        }
    }),
    function() {
        function e(e) {
            return document.createElementNS(l, e)
        }

        function t(e) {
            return (e < 10 ? "0" : "") + e
        }

        function i(e) {
            var t = ++v + "";
            return e ? e + t : t
        }

        function n(n, a) {
            function l(e, t) {
                var i = d.offset(),
                    n = /^touch/.test(e.type),
                    o = i.left + g,
                    r = i.top + g,
                    l = (n ? e.originalEvent.touches[0] : e).pageX - o,
                    u = (n ? e.originalEvent.touches[0] : e).pageY - r,
                    p = Math.sqrt(l * l + u * u),
                    m = !1;
                if (!t || !(p < y - w || p > y + w)) {
                    e.preventDefault();
                    var v = setTimeout(function() {
                        P.popover.addClass("clockpicker-moving")
                    }, 200);
                    c && d.append(P.canvas), P.setHand(l, u, !t, !0), s.off(f).on(f, function(e) {
                        e.preventDefault();
                        var t = /^touch/.test(e.type),
                            i = (t ? e.originalEvent.touches[0] : e).pageX - o,
                            n = (t ? e.originalEvent.touches[0] : e).pageY - r;
                        (m || i !== l || n !== u) && (m = !0, P.setHand(i, n, !1, !0))
                    }), s.off(h).on(h, function(e) {
                        s.off(h), e.preventDefault();
                        var i = /^touch/.test(e.type),
                            n = (i ? e.originalEvent.changedTouches[0] : e).pageX - o,
                            c = (i ? e.originalEvent.changedTouches[0] : e).pageY - r;
                        (t || m) && n === l && c === u && P.setHand(n, c), "hours" === P.currentView ? P.toggleView("minutes", k / 2) : a.autoclose && (P.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
                            P.done()
                        }, k / 2)), d.prepend($), clearTimeout(v), P.popover.removeClass("clockpicker-moving"), s.off(f)
                    })
                }
            }
            var u = r(C),
                d = u.find(".clockpicker-plate"),
                m = u.find(".picker__holder"),
                v = u.find(".clockpicker-hours"),
                T = u.find(".clockpicker-minutes"),
                S = u.find(".clockpicker-am-pm-block"),
                I = "INPUT" === n.prop("tagName"),
                E = I ? n : n.find("input"),
                A = r("label[for=" + E.attr("id") + "]"),
                P = this;
            if (this.id = i("cp"), this.element = n, this.holder = m, this.options = a, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = I, this.input = E, this.label = A, this.popover = u, this.plate = d, this.hoursView = v, this.minutesView = T, this.amPmBlock = S, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", a.twelvehour) {
                var _ = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                r(_);
                a.ampmclickable ? (this.spanAmPm.empty(), r('<div id="click-am">AM</div>').on("click", function() {
                    P.spanAmPm.children("#click-am").addClass("text-primary"), P.spanAmPm.children("#click-pm").removeClass("text-primary"), P.amOrPm = "AM"
                }).appendTo(this.spanAmPm), r('<div id="click-pm">PM</div>').on("click", function() {
                    P.spanAmPm.children("#click-pm").addClass("text-primary"), P.spanAmPm.children("#click-am").removeClass("text-primary"), P.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (r('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                    P.amOrPm = "AM", P.amPmBlock.children(".pm-button").removeClass("active"), P.amPmBlock.children(".am-button").addClass("active"), P.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), r('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                    P.amOrPm = "PM", P.amPmBlock.children(".am-button").removeClass("active"), P.amPmBlock.children(".pm-button").addClass("active"), P.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            a.darktheme && u.addClass("darktheme"), r('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (a.twelvehour ? "3" : "1") + '">' + a.donetext + "</button>").click(r.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(r.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(r.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", r.proxy(this.show, this));
            var D, O, M, L, R = r('<div class="clockpicker-tick"></div>');
            if (a.twelvehour)
                for (D = 1; D < 13; D += 1) O = R.clone(), M = D / 6 * Math.PI, L = y, O.css("font-size", "140%"), O.css({
                    left: g + Math.sin(M) * L - w,
                    top: g - Math.cos(M) * L - w
                }), O.html(0 === D ? "00" : D), v.append(O), O.on(p, l);
            else
                for (D = 0; D < 24; D += 1) {
                    O = R.clone(), M = D / 6 * Math.PI;
                    var W = D > 0 && D < 13;
                    L = W ? b : y, O.css({
                        left: g + Math.sin(M) * L - w,
                        top: g - Math.cos(M) * L - w
                    }), W && O.css("font-size", "120%"), O.html(0 === D ? "00" : D), v.append(O), O.on(p, l)
                }
            for (D = 0; D < 60; D += 5) O = R.clone(), M = D / 30 * Math.PI, O.css({
                left: g + Math.sin(M) * y - w,
                top: g - Math.cos(M) * y - w
            }), O.css("font-size", "140%"), O.html(t(D)), T.append(O), O.on(p, l);
            if (d.on(p, function(e) {
                    0 === r(e.target).closest(".clockpicker-tick").length && l(e, !0)
                }), c) {
                var $ = u.find(".clockpicker-canvas"),
                    V = e("svg");
                V.setAttribute("class", "clockpicker-svg"), V.setAttribute("width", x), V.setAttribute("height", x);
                var F = e("g");
                F.setAttribute("transform", "translate(" + g + "," + g + ")");
                var Y = e("circle");
                Y.setAttribute("class", "clockpicker-canvas-bearing"), Y.setAttribute("cx", 0), Y.setAttribute("cy", 0), Y.setAttribute("r", 2);
                var H = e("line");
                H.setAttribute("x1", 0), H.setAttribute("y1", 0);
                var j = e("circle");
                j.setAttribute("class", "clockpicker-canvas-bg"), j.setAttribute("r", w);
                var N = e("circle");
                N.setAttribute("class", "clockpicker-canvas-fg"), N.setAttribute("r", 5), F.appendChild(H), F.appendChild(j), F.appendChild(N), F.appendChild(Y), V.appendChild(F), $.append(V), this.hand = H, this.bg = j, this.fg = N, this.bearing = Y, this.g = F, this.canvas = $
            }
            o(this.options.init)
        }

        function o(e) {
            e && "function" == typeof e && e()
        }
        var r = window.jQuery,
            a = r(window),
            s = r(document),
            l = "http://www.w3.org/2000/svg",
            c = "SVGAngle" in window && function() {
                var e, t = document.createElement("div");
                return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == l, t.innerHTML = "", e
            }(),
            u = function() {
                var e = document.createElement("div").style;
                return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e
            }(),
            d = "ontouchstart" in window,
            p = "mousedown" + (d ? " touchstart" : ""),
            f = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
            h = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
            m = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
            v = 0,
            g = 135,
            y = 110,
            b = 80,
            w = 20,
            x = 2 * g,
            k = u ? 350 : 1,
            C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        n.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !0,
            vibrate: !0
        }, n.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, n.prototype.locate = function() {
            var e = this.element,
                t = this.popover;
            e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
            t.show()
        }, n.prototype.show = function(e) {
            if (!this.isShown) {
                o(this.options.beforeShow), r(":input").each(function() {
                    r(this).attr("tabindex", -1)
                });
                var i = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), r(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), a.on("resize.clockpicker" + this.id, function() {
                    i.isShown && i.locate()
                }), this.isAppended = !0);
                var n = ((this.input.prop("value") || this.options.default || "") + "").split(":");
                if (this.options.twelvehour && void 0 !== n[1] && (n[1] = n[1].replace("AM", "").replace("PM", "")), "now" === n[0]) {
                    var l = new Date(+new Date + this.options.fromnow);
                    n = [l.getHours(), l.getMinutes()]
                }
                this.hours = +n[0] || 0, this.minutes = +n[1] || 0, this.spanHours.html(t(this.hours)), this.spanMinutes.html(t(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(e) {
                    var t = r(e.target);
                    0 === t.closest(i.popover.find(".picker__wrap")).length && 0 === t.closest(i.input).length && i.hide()
                }), s.on("keyup.clockpicker." + this.id, function(e) {
                    27 === e.keyCode && i.hide()
                }), o(this.options.afterShow)
            }
        }, n.prototype.hide = function() {
            o(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), r(document.body).css("overflow", "visible"), this.isShown = !1, r(":input").each(function(e) {
                r(this).attr("tabindex", e + 1)
            }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide)
        }, n.prototype.toggleView = function(e, t) {
            var i = !1;
            "minutes" === e && "visible" === r(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), i = !0);
            var n = "hours" === e,
                a = n ? this.hoursView : this.minutesView,
                s = n ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", n), this.spanMinutes.toggleClass("text-primary", !n), s.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
                s.css("visibility", "hidden")
            }, k), i && o(this.options.afterHourSelect)
        }, n.prototype.resetClock = function(e) {
            var t = this.currentView,
                i = this[t],
                n = "hours" === t,
                o = i * (Math.PI / (n ? 6 : 30)),
                r = n && i > 0 && i < 13 ? b : y,
                a = Math.sin(o) * r,
                s = -Math.cos(o) * r,
                l = this;
            c && e ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
                l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(a, s)
            }, e)) : this.setHand(a, s)
        }, n.prototype.setHand = function(e, i, n, o) {
            var a, s = Math.atan2(e, -i),
                l = "hours" === this.currentView,
                u = Math.PI / (l || n ? 6 : 30),
                d = Math.sqrt(e * e + i * i),
                p = this.options,
                f = l && d < (y + b) / 2,
                h = f ? b : y;
            if (p.twelvehour && (h = y), s < 0 && (s = 2 * Math.PI + s), a = Math.round(s / u), s = a * u, p.twelvehour ? l ? 0 === a && (a = 12) : (n && (a *= 5), 60 === a && (a = 0)) : l ? (12 === a && (a = 0), a = f ? 0 === a ? 12 : a : 0 === a ? 0 : a + 12) : (n && (a *= 5), 60 === a && (a = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && m && this.options.vibrate && (this.vibrateTimer || (navigator[m](10), this.vibrateTimer = setTimeout(r.proxy(function() {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = a, this[l ? "spanHours" : "spanMinutes"].html(t(a)), c) {
                o || !l && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var v = Math.sin(s) * (h - w),
                    g = -Math.cos(s) * (h - w),
                    x = Math.sin(s) * h,
                    k = -Math.cos(s) * h;
                this.hand.setAttribute("x2", v), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", k), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", k)
            } else this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var e = r(this);
                e.toggleClass("active", a === +e.html())
            })
        }, n.prototype.done = function() {
            o(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var e = this.input.prop("value"),
                i = t(this.hours) + ":" + t(this.minutes);
            this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone)
        }, n.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (a.off("resize.clockpicker" + this.id), this.popover.remove())
        }, r.fn.pickatime = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var i = r(this),
                    o = i.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, t);
                else {
                    var a = r.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                    i.data("clockpicker", new n(i, a))
                }
            })
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function() {
        "use strict";
        return function(e, t, i, n) {
            var o = {
                features: null,
                bind: function(e, t, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], i, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var i = document.createElement(t || "div");
                    return e && (i.className = e), i
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, i) {
                    o.bind(e, t, i, !0)
                },
                removeClass: function(e, t) {
                    var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var i = e.firstChild; i;) {
                        if (o.hasClass(i, t)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(e, t, i) {
                    for (var n = e.length; n--;)
                        if (e[n][i] === t) return n;
                    return -1
                },
                extend: function(e, t, i) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (i && e.hasOwnProperty(n)) continue;
                            e[n] = t[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl().style,
                        t = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (i.isOldIOSPhone = !0)
                        }
                        var a = n.match(/Android\s([0-9\.]*)/),
                            s = a ? a[1] : 0;
                        (s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                        t = d[p];
                        for (var f = 0; 3 > f; f++) l = u[f], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in e && (i[l] = c);
                        t && !i.raf && (t = t.toLowerCase(), i.raf = window[t + "RequestAnimationFrame"], i.raf && (i.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var h = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                i = Math.max(0, 16 - (t - h)),
                                n = window.setTimeout(function() {
                                    e(t + i)
                                }, i);
                            return h = t + i, n
                        }, i.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, i, n) {
                t = t.split(" ");
                for (var o, r = (n ? "detach" : "attach") + "Event", a = 0; a < t.length; a++)
                    if (o = t[a])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = function() {
                                i.handleEvent.call(i)
                            };
                            e[r]("on" + o, i["oldIE" + o])
                        } else e[r]("on" + o, i)
            });
            var r = this,
                a = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(a, n);
            var s, l, c, u, d, p, f, h, m, v, g, y, b, w, x, k, C, T, S, I, E, A, P, _, D, O, M, L, R, W, $, V, F, Y, H, j, N, z, X, B, q, U, Z, Q, G, K, J, ee, te, ie, ne, oe, re, ae, se, le, ce = {
                    x: 0,
                    y: 0
                },
                ue = {
                    x: 0,
                    y: 0
                },
                de = {
                    x: 0,
                    y: 0
                },
                pe = {},
                fe = 0,
                he = {},
                me = {
                    x: 0,
                    y: 0
                },
                ve = 0,
                ge = !0,
                ye = [],
                be = {},
                we = !1,
                xe = function(e, t) {
                    o.extend(r, t.publicMethods), ye.push(e)
                },
                ke = function(e) {
                    var t = Ut();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                Ce = {},
                Te = function(e, t) {
                    return Ce[e] || (Ce[e] = []), Ce[e].push(t)
                },
                Se = function(e) {
                    var t = Ce[e];
                    if (t) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < t.length; n++) t[n].apply(r, i)
                    }
                },
                Ie = function() {
                    return (new Date).getTime()
                },
                Ee = function(e) {
                    ae = e, r.bg.style.opacity = e * a.bgOpacity
                },
                Ae = function(e, t, i, n, o) {
                    (!we || o && o !== r.currItem) && (n /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = y + t + "px, " + i + "px" + b + " scale(" + n + ")"
                },
                Pe = function(e) {
                    te && (e && (v > r.currItem.fitRatio ? we || (ri(r.currItem, !1, !0), we = !0) : we && (ri(r.currItem), we = !1)), Ae(te, de.x, de.y, v))
                },
                _e = function(e) {
                    e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                De = function(e, t) {
                    t[A] = y + e + "px, 0px" + b
                },
                Oe = function(e, t) {
                    if (!a.loop && t) {
                        var i = u + (me.x * fe - e) / me.x,
                            n = Math.round(e - ft.x);
                        (0 > i && n > 0 || i >= Ut() - 1 && 0 > n) && (e = ft.x + n * a.mainScrollEndFriction)
                    }
                    ft.x = e, De(e, d)
                },
                Me = function(e, t) {
                    var i = ht[e] - he[e];
                    return ue[e] + ce[e] + i - i * (t / g)
                },
                Le = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                Re = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                We = null,
                $e = function() {
                    We && (o.unbind(document, "mousemove", $e), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Se("mouseUsed")), We = setTimeout(function() {
                        We = null
                    }, 100)
                },
                Ve = function() {
                    o.bind(document, "keydown", r), $.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", $e), o.bind(window, "resize scroll", r), Se("bindEvents")
                },
                Fe = function() {
                    o.unbind(window, "resize", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", $e), $.transform && o.unbind(r.scrollWrap, "click", r), z && o.unbind(window, f, r), Se("unbindEvents")
                },
                Ye = function(e, t) {
                    var i = ti(r.currItem, pe, e);
                    return t && (ee = i), i
                },
                He = function(e) {
                    return e || (e = r.currItem), e.initialZoomLevel
                },
                je = function(e) {
                    return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
                },
                Ne = function(e, t, i, n) {
                    return n === r.currItem.initialZoomLevel ? (i[e] = r.currItem.initialPosition[e], !0) : (i[e] = Me(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
                },
                ze = function() {
                    if (A) {
                        var t = $.perspective && !_;
                        return y = "translate" + (t ? "3d(" : "("), void(b = $.perspective ? ", 0px)" : ")")
                    }
                    A = "left", o.addClass(e, "pswp--ie"), De = function(e, t) {
                        t.left = e + "px"
                    }, _e = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            i = e.container.style,
                            n = t * e.w,
                            o = t * e.h;
                        i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                    }, Pe = function() {
                        if (te) {
                            var e = te,
                                t = r.currItem,
                                i = t.fitRatio > 1 ? 1 : t.fitRatio,
                                n = i * t.w,
                                o = i * t.h;
                            e.width = n + "px", e.height = o + "px", e.left = de.x + "px", e.top = de.y + "px"
                        }
                    }
                },
                Xe = function(e) {
                    var t = "";
                    a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                },
                Be = function(e) {
                    e && (q || B || ie || j) && (e.preventDefault(), e.stopPropagation())
                },
                qe = function() {
                    r.setScrollOffset(0, o.getScrollY())
                },
                Ue = {},
                Ze = 0,
                Qe = function(e) {
                    Ue[e] && (Ue[e].raf && O(Ue[e].raf), Ze--, delete Ue[e])
                },
                Ge = function(e) {
                    Ue[e] && Qe(e), Ue[e] || (Ze++, Ue[e] = {})
                },
                Ke = function() {
                    for (var e in Ue) Ue.hasOwnProperty(e) && Qe(e)
                },
                Je = function(e, t, i, n, o, r, a) {
                    var s, l = Ie();
                    Ge(e);
                    var c = function() {
                        if (Ue[e]) {
                            if ((s = Ie() - l) >= n) return Qe(e), r(i), void(a && a());
                            r((i - t) * o(s / n) + t), Ue[e].raf = D(c)
                        }
                    };
                    c()
                },
                et = {
                    shout: Se,
                    listen: Te,
                    viewportSize: pe,
                    options: a,
                    isMainScrollAnimating: function() {
                        return ie
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return z
                    },
                    isZooming: function() {
                        return G
                    },
                    setScrollOffset: function(e, t) {
                        he.x = e, W = he.y = t, Se("updateScrollOffset", he)
                    },
                    applyZoomPan: function(e, t, i, n) {
                        de.x = t, de.y = i, v = e, Pe(n)
                    },
                    init: function() {
                        if (!s && !l) {
                            var i;
                            r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), M = e.className, s = !0, $ = o.detectFeatures(), D = $.raf, O = $.caf, A = $.transform, R = $.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = k = [{
                                el: r.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[2],
                                wrap: 0,
                                index: -1
                            }], k[0].el.style.display = k[2].el.style.display = "none", ze(), m = {
                                resize: r.updateSize,
                                scroll: qe,
                                keydown: Xe,
                                click: Be
                            };
                            var n = $.isOldIOSPhone || $.isOldAndroid || $.isMobileOpera;
                            for ($.animationName && $.transform && !n || (a.showAnimationDuration = a.hideAnimationDuration = 0), i = 0; i < ye.length; i++) r["init" + ye[i]]();
                            t && (r.ui = new t(r, o)).init(), Se("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Ut()) && (u = 0), r.currItem = qt(u), ($.isOldIOSPhone || $.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === W && (Se("initialLayout"), W = L = o.getScrollY());
                            var c = "pswp--open ";
                            for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += _ ? "pswp--touch" : "pswp--notouch", c += $.animationName ? " pswp--css_animation" : "", c += $.svg ? " pswp--svg" : "", o.addClass(e, c), r.updateSize(), p = -1, ve = null, i = 0; 3 > i; i++) De((i + p) * me.x, k[i].el.style);
                            R || o.bind(r.scrollWrap, h, r), Te("initialZoomInEnd", function() {
                                r.setContent(k[0], u - 1), r.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", a.focus && e.focus(), Ve()
                            }), r.setContent(k[1], u), r.updateCurrItem(), Se("afterInit"), ge || (w = setInterval(function() {
                                Ze || z || G || v !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, l = !0, Se("close"), Fe(), Qt(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Se("destroy"), Nt && clearTimeout(Nt), e.setAttribute("aria-hidden", "true"), e.className = M, w && clearInterval(w), o.unbind(r.scrollWrap, h, r), o.unbind(window, "scroll", r), bt(), Ke(), Ce = null
                    },
                    panTo: function(e, t, i) {
                        i || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Pe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, m[e.type] && m[e.type](e)
                    },
                    goTo: function(e) {
                        var t = (e = ke(e)) - u;
                        ve = t, u = e, r.currItem = qt(u), fe -= t, Oe(me.x * fe), Ke(), ie = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(u + 1)
                    },
                    prev: function() {
                        r.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Se("beforeChange", 0), k[1].el.children.length) {
                            var t = k[1].el.children[0];
                            te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else te = null;
                        ee = r.currItem.bounds, g = v = r.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Se("afterChange")
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var e = 0; 3 > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== ve) {
                            var t, i = Math.abs(ve);
                            if (!(e && 2 > i)) {
                                r.currItem = qt(u), we = !1, Se("beforeChange", ve), i >= 3 && (p += ve + (ve > 0 ? -3 : 3), i = 3);
                                for (var n = 0; i > n; n++) ve > 0 ? (t = k.shift(), k[2] = t, p++, De((p + 2) * me.x, t.el.style), r.setContent(t, u - i + n + 1 + 1)) : (t = k.pop(), k.unshift(t), p--, De(p * me.x, t.el.style), r.setContent(t, u + i - n - 1 - 1));
                                if (te && 1 === Math.abs(ve)) {
                                    var o = qt(C);
                                    o.initialZoomLevel !== v && (ti(o, pe), ri(o), _e(o))
                                }
                                ve = 0, r.updateCurrZoomItem(), C = u, Se("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ge && a.modal) {
                            var i = o.getScrollY();
                            if (W !== i && (e.style.top = i + "px", W = i), !t && be.x === window.innerWidth && be.y === window.innerHeight) return;
                            be.x = window.innerWidth, be.y = window.innerHeight, e.style.height = be.y + "px"
                        }
                        if (pe.x = r.scrollWrap.clientWidth, pe.y = r.scrollWrap.clientHeight, qe(), me.x = pe.x + Math.round(pe.x * a.spacing), me.y = pe.y, Oe(me.x * fe), Se("beforeResize"), void 0 !== p) {
                            for (var n, s, l, c = 0; 3 > c; c++) n = k[c], De((c + p) * me.x, n.el.style), l = u + c - 1, a.loop && Ut() > 2 && (l = ke(l)), s = qt(l), s && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(n, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && l >= 0 && r.setContent(n, l), s && s.container && (ti(s, pe), ri(s), _e(s));
                            x = !1
                        }
                        g = v = r.currItem.initialZoomLevel, (ee = r.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Pe(!0)), Se("resize")
                    },
                    zoomTo: function(e, t, i, n, r) {
                        t && (g = v, ht.x = Math.abs(t.x) - de.x, ht.y = Math.abs(t.y) - de.y, Le(ue, de));
                        var a = Ye(e, !1),
                            s = {};
                        Ne("x", a, s, e), Ne("y", a, s, e);
                        var l = v,
                            c = {
                                x: de.x,
                                y: de.y
                            };
                        Re(s);
                        var u = function(t) {
                            1 === t ? (v = e, de.x = s.x, de.y = s.y) : (v = (e - l) * t + l, de.x = (s.x - c.x) * t + c.x, de.y = (s.y - c.y) * t + c.y), r && r(t), Pe(1 === t)
                        };
                        i ? Je("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, u) : u(1)
                    }
                },
                tt = {},
                it = {},
                nt = {},
                ot = {},
                rt = {},
                at = [],
                st = {},
                lt = [],
                ct = {},
                ut = 0,
                dt = {
                    x: 0,
                    y: 0
                },
                pt = 0,
                ft = {
                    x: 0,
                    y: 0
                },
                ht = {
                    x: 0,
                    y: 0
                },
                mt = {
                    x: 0,
                    y: 0
                },
                vt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                },
                gt = function(e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                },
                yt = function(e, t) {
                    return ct.x = Math.abs(e.x - t.x), ct.y = Math.abs(e.y - t.y), Math.sqrt(ct.x * ct.x + ct.y * ct.y)
                },
                bt = function() {
                    U && (O(U), U = null)
                },
                wt = function() {
                    z && (U = D(wt), Wt())
                },
                xt = function() {
                    return !("fit" === a.scaleMode && v === r.currItem.initialZoomLevel)
                },
                kt = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : kt(e.parentNode, t)))
                },
                Ct = {},
                Tt = function(e, t) {
                    return Ct.prevent = !kt(e.target, a.isClickableElement), Se("preventDragEvent", e, t, Ct), Ct.prevent
                },
                St = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                It = function(e, t, i) {
                    i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
                },
                Et = function(e, t, i) {
                    if (e - F > 50) {
                        var n = lt.length > 2 ? lt.shift() : {};
                        n.x = t, n.y = i, lt.push(n), F = e
                    }
                },
                At = function() {
                    var e = de.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (pe.y / 2))
                },
                Pt = {},
                _t = {},
                Dt = [],
                Ot = function(e) {
                    for (; Dt.length > 0;) Dt.pop();
                    return P ? (le = 0, at.forEach(function(e) {
                        0 === le ? Dt[0] = e : 1 === le && (Dt[1] = e), le++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Dt[0] = St(e.touches[0], Pt), e.touches.length > 1 && (Dt[1] = St(e.touches[1], _t))) : (Pt.x = e.pageX, Pt.y = e.pageY, Pt.id = "", Dt[0] = Pt), Dt
                },
                Mt = function(e, t) {
                    var i, n, o, s, l = de[e] + t[e],
                        c = t[e] > 0,
                        u = ft.x + t.x,
                        d = ft.x - st.x;
                    return i = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = de[e] + t[e] * i, !a.allowPanToNext && v !== r.currItem.initialZoomLevel || (te ? "h" !== ne || "x" !== e || B || (c ? (l > ee.min[e] && (i = a.panEndFriction, ee.min[e] - l, n = ee.min[e] - ue[e]), (0 >= n || 0 > d) && Ut() > 1 ? (s = u, 0 > d && u > st.x && (s = st.x)) : ee.min.x !== ee.max.x && (o = l)) : (l < ee.max[e] && (i = a.panEndFriction, l - ee.max[e], n = ue[e] - ee.max[e]), (0 >= n || d > 0) && Ut() > 1 ? (s = u, d > 0 && u < st.x && (s = st.x)) : ee.min.x !== ee.max.x && (o = l))) : s = u, "x" !== e) ? void(ie || Z || v > r.currItem.fitRatio && (de[e] += t[e] * i)) : (void 0 !== s && (Oe(s, !0), Z = s !== st.x), ee.min.x !== ee.max.x && (void 0 !== o ? de.x = o : Z || (de.x += t.x * i)), void 0 !== s)
                },
                Lt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Bt) return void e.preventDefault();
                        if (!N || "mousedown" !== e.type) {
                            if (Tt(e, !0) && e.preventDefault(), Se("pointerDown"), P) {
                                var t = o.arraySearch(at, e.pointerId, "id");
                                0 > t && (t = at.length), at[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var i = Ot(e),
                                n = i.length;
                            Q = null, Ke(), z && 1 !== n || (z = oe = !0, o.bind(window, f, r), H = se = re = j = Z = q = X = B = !1, ne = null, Se("firstTouchStart", i), Le(ue, de), ce.x = ce.y = 0, Le(ot, i[0]), Le(rt, ot), st.x = me.x * fe, lt = [{
                                x: ot.x,
                                y: ot.y
                            }], F = V = Ie(), Ye(v, !0), bt(), wt()), !G && n > 1 && !ie && !Z && (g = v, B = !1, G = X = !0, ce.y = ce.x = 0, Le(ue, de), Le(tt, i[0]), Le(it, i[1]), It(tt, it, mt), ht.x = Math.abs(mt.x) - de.x, ht.y = Math.abs(mt.y) - de.y, K = J = yt(tt, it))
                        }
                    }
                },
                Rt = function(e) {
                    if (e.preventDefault(), P) {
                        var t = o.arraySearch(at, e.pointerId, "id");
                        if (t > -1) {
                            var i = at[t];
                            i.x = e.pageX, i.y = e.pageY
                        }
                    }
                    if (z) {
                        var n = Ot(e);
                        if (ne || q || G) Q = n;
                        else if (ft.x !== me.x * fe) ne = "h";
                        else {
                            var r = Math.abs(n[0].x - ot.x) - Math.abs(n[0].y - ot.y);
                            Math.abs(r) >= 10 && (ne = r > 0 ? "h" : "v", Q = n)
                        }
                    }
                },
                Wt = function() {
                    if (Q) {
                        var e = Q.length;
                        if (0 !== e)
                            if (Le(tt, Q[0]), nt.x = tt.x - ot.x, nt.y = tt.y - ot.y, G && e > 1) {
                                if (ot.x = tt.x, ot.y = tt.y, !nt.x && !nt.y && vt(Q[1], it)) return;
                                Le(it, Q[1]), B || (B = !0, Se("zoomGestureStarted"));
                                var t = yt(tt, it),
                                    i = Ht(t);
                                i > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (se = !0);
                                var n = 1,
                                    o = He(),
                                    s = je();
                                if (o > i)
                                    if (a.pinchToClose && !se && g <= r.currItem.initialZoomLevel) {
                                        var l = 1 - (o - i) / (o / 1.2);
                                        Ee(l), Se("onPinchClose", l), re = !0
                                    } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                else i > s && ((n = (i - s) / (6 * o)) > 1 && (n = 1), i = s + n * o);
                                0 > n && (n = 0), K = t, It(tt, it, dt), ce.x += dt.x - mt.x, ce.y += dt.y - mt.y, Le(mt, dt), de.x = Me("x", i), de.y = Me("y", i), H = i > v, v = i, Pe()
                            } else {
                                if (!ne) return;
                                if (oe && (oe = !1, Math.abs(nt.x) >= 10 && (nt.x -= Q[0].x - rt.x), Math.abs(nt.y) >= 10 && (nt.y -= Q[0].y - rt.y)), ot.x = tt.x, ot.y = tt.y, 0 === nt.x && 0 === nt.y) return;
                                if ("v" === ne && a.closeOnVerticalDrag && !xt()) {
                                    ce.y += nt.y, de.y += nt.y;
                                    var c = At();
                                    return j = !0, Se("onVerticalDrag", c), Ee(c), void Pe()
                                }
                                Et(Ie(), tt.x, tt.y), q = !0, ee = r.currItem.bounds, Mt("x", nt) || (Mt("y", nt), Re(de), Pe())
                            }
                    }
                },
                $t = function(e) {
                    if ($.isOldAndroid) {
                        if (N && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(N), N = setTimeout(function() {
                            N = 0
                        }, 600))
                    }
                    Se("pointerUp"), Tt(e, !1) && e.preventDefault();
                    var t;
                    if (P) {
                        var i = o.arraySearch(at, e.pointerId, "id");
                        if (i > -1)
                            if (t = at.splice(i, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var n = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = n[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                            }
                    }
                    var s, l = Ot(e),
                        c = l.length;
                    if ("mouseup" === e.type && (c = 0), 2 === c) return Q = null, !0;
                    1 === c && Le(rt, l[0]), 0 !== c || ne || ie || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Se("touchRelease", e, t));
                    var u = -1;
                    if (0 === c && (z = !1, o.unbind(window, f, r), bt(), G ? u = 0 : -1 !== pt && (u = Ie() - pt)), pt = 1 === c ? Ie() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", G && 2 > c && (G = !1, 1 === c && (s = "zoomPointerUp"), Se("zoomGestureEnded")), Q = null, q || B || ie || j)
                        if (Ke(), Y || (Y = Vt()), Y.calculateSwipeSpeed("x"), j)
                            if (At() < a.verticalDragRange) r.close();
                            else {
                                var d = de.y,
                                    p = ae;
                                Je("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    de.y = (r.currItem.initialPosition.y - d) * e + d, Ee((1 - p) * e + p), Pe()
                                }), Se("onVerticalDrag", 1)
                            } else {
                        if ((Z || ie) && 0 === c) {
                            if (Yt(s, Y)) return;
                            s = "zoomPointerUp"
                        }
                        if (!ie) return "swipe" !== s ? void jt() : void(!Z && v > r.currItem.fitRatio && Ft(Y))
                    }
                },
                Vt = function() {
                    var e, t, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            lt.length > 1 ? (e = Ie() - F + 50, t = lt[lt.length - 2][n]) : (e = Ie() - V, t = rt[n]), i.lastFlickOffset[n] = ot[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            i.backAnimStarted[e] || (de[e] > ee.min[e] ? i.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (i.backAnimDestination[e] = ee.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, Je("bounceZoomPan" + e, de[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                de[e] = t, Pe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, de[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            return Ue.zoomPan && (Ue.zoomPan.raf = D(i.panAnimLoop), i.now = Ie(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Pe(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (de.x = Math.round(de.x), de.y = Math.round(de.y), Pe(), void Qe("zoomPan")) : void 0
                        }
                    };
                    return i
                },
                Ft = function(e) {
                    return e.calculateSwipeSpeed("y"), ee = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ge("zoomPan"), e.lastNow = Ie(), void e.panAnimLoop())
                },
                Yt = function(e, t) {
                    var i;
                    ie || (ut = u);
                    var n;
                    if ("swipe" === e) {
                        var s = ot.x - rt.x,
                            l = t.lastFlickDist.x < 10;
                        s > 30 && (l || t.lastFlickOffset.x > 20) ? n = -1 : -30 > s && (l || t.lastFlickOffset.x < -20) && (n = 1)
                    }
                    var c;
                    n && (u += n, 0 > u ? (u = a.loop ? Ut() - 1 : 0, c = !0) : u >= Ut() && (u = a.loop ? 0 : Ut() - 1, c = !0), (!c || a.loop) && (ve += n, fe -= n, i = !0));
                    var d, p = me.x * fe,
                        f = Math.abs(p - ft.x);
                    return i || p > ft.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ut === u && (i = !1), ie = !0, Se("mainScrollAnimStart"), Je("mainScroll", ft.x, p, d, o.easing.cubic.out, Oe, function() {
                        Ke(), ie = !1, ut = -1, (i || ut !== u) && r.updateCurrItem(), Se("mainScrollAnimComplete")
                    }), i && r.updateCurrItem(!0), i
                },
                Ht = function(e) {
                    return 1 / J * e * g
                },
                jt = function() {
                    var e = v,
                        t = He(),
                        i = je();
                    t > v ? e = t : v > i && (e = i);
                    var n, a = ae;
                    return re && !H && !se && t > v ? (r.close(), !0) : (re && (n = function(e) {
                        Ee((1 - a) * e + a)
                    }), r.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
                };
            xe("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, i, n, o) {
                            T = e + t, S = e + i, I = e + n, E = o ? e + o : ""
                        };
                        (P = $.pointerEvent) && $.touch && ($.touch = !1), P ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : $.touch ? (e("touch", "start", "move", "end", "cancel"), _ = !0) : e("mouse", "down", "move", "up"), f = S + " " + I + " " + E, h = T, P && !_ && (_ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = _, m[T] = Lt, m[S] = Rt, m[I] = $t, E && (m[E] = m[I]), $.touch && (h += " mousedown", f += " mousemove mouseup", m.mousedown = m[T], m.mousemove = m[S], m.mouseup = m[I]), _ || (a.allowPanToNext = !1)
                    }
                }
            });
            var Nt, zt, Xt, Bt, qt, Ut, Zt, Qt = function(t, i, n, s) {
                    Nt && clearTimeout(Nt), Bt = !0, Xt = !0;
                    var l;
                    t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
                    var d = n ? a.hideAnimationDuration : a.showAnimationDuration,
                        p = function() {
                            Qe("initialZoom"), n ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ee(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Se("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Bt = !1
                        };
                    if (!d || !l || void 0 === l.x) return Se("initialZoom" + (n ? "Out" : "In")), v = t.initialZoomLevel, Le(de, t.initialPosition), Pe(), e.style.opacity = n ? 0 : 1, Ee(1), void(d ? setTimeout(function() {
                        p()
                    }, d) : p());
                    ! function() {
                        var i = c,
                            s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = l.w / t.w, de.x = l.x, de.y = l.y - L, r[s ? "template" : "bg"].style.opacity = .001, Pe()), Ge("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), Nt = setTimeout(function() {
                            if (Se("initialZoom" + (n ? "Out" : "In")), n) {
                                var r = l.w / t.w,
                                    a = {
                                        x: de.x,
                                        y: de.y
                                    },
                                    c = v,
                                    u = ae,
                                    f = function(t) {
                                        1 === t ? (v = r, de.x = l.x, de.y = l.y - W) : (v = (r - c) * t + c, de.x = (l.x - a.x) * t + a.x, de.y = (l.y - W - a.y) * t + a.y), Pe(), s ? e.style.opacity = 1 - t : Ee(u - t * u)
                                    };
                                i ? Je("initialZoom", 0, 1, d, o.easing.cubic.out, f, p) : (f(1), Nt = setTimeout(p, d + 20))
                            } else v = t.initialZoomLevel, Le(de, t.initialPosition), Pe(), Ee(1), s ? e.style.opacity = 1 : Ee(1), Nt = setTimeout(p, d + 20)
                        }, n ? 25 : 90)
                    }()
                },
                Gt = {},
                Kt = [],
                Jt = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return zt.length
                    }
                },
                ei = function(e, t, i) {
                    var n = e.bounds;
                    n.center.x = Math.round((Gt.x - t) / 2), n.center.y = Math.round((Gt.y - i) / 2) + e.vGap.top, n.max.x = t > Gt.x ? Math.round(Gt.x - t) : n.center.x, n.max.y = i > Gt.y ? Math.round(Gt.y - i) + e.vGap.top : n.center.y, n.min.x = t > Gt.x ? 0 : n.center.x, n.min.y = i > Gt.y ? e.vGap.top : n.center.y
                },
                ti = function(e, t, i) {
                    if (e.src && !e.loadError) {
                        var n = !i;
                        if (n && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Se("parseVerticalMargin", e)), Gt.x = t.x, Gt.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                            var o = Gt.x / e.w,
                                r = Gt.y / e.h;
                            e.fitRatio = r > o ? o : r;
                            var s = a.scaleMode;
                            "orig" === s ? i = 1 : "fit" === s && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!i) return;
                        return ei(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, e.initialPosition = e.bounds.center, e.bounds
                },
                ii = function(e, t, i, n, o, a) {
                    t.loadError || n && (t.imageAppended = !0, ri(t, n, t === r.currItem && we), i.appendChild(n), a && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                ni = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = i, t.onerror = function() {
                        e.loadError = !0, i()
                    }, t.src = e.src, t
                },
                oi = function(e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                ri = function(e, t, i) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var n = i ? e.w : Math.round(e.w * e.fitRatio),
                            o = i ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
                    }
                },
                ai = function() {
                    if (Kt.length) {
                        for (var e, t = 0; t < Kt.length; t++)(e = Kt[t]).holder.index === e.index && ii(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Kt = []
                    }
                };
            xe("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = ke(e);
                        var t = qt(e);
                        t && (!t.loaded && !t.loading || x) && (Se("gettingData", e, t), t.src && ni(t))
                    },
                    initController: function() {
                        o.extend(a, Jt, !0), r.items = zt = i, qt = r.getItemAt, Ut = a.getNumItemsFn, Zt = a.loop, Ut() < 3 && (a.loop = !1), Te("beforeChange", function(e) {
                            var t, i = a.preload,
                                n = null === e || e >= 0,
                                o = Math.min(i[0], Ut()),
                                s = Math.min(i[1], Ut());
                            for (t = 1;
                                (n ? s : o) >= t; t++) r.lazyLoadItem(u + t);
                            for (t = 1;
                                (n ? o : s) >= t; t++) r.lazyLoadItem(u - t)
                        }), Te("initialLayout", function() {
                            r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                        }), Te("mainScrollAnimComplete", ai), Te("initialZoomInEnd", ai), Te("destroy", function() {
                            for (var e, t = 0; t < zt.length; t++)(e = zt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Kt = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== zt[e] && zt[e]
                    },
                    allowProgressiveImg: function() {
                        return a.forceProgressiveLoading || !_ || a.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        a.loop && (t = ke(t));
                        var i = r.getItemAt(e.index);
                        i && (i.container = null);
                        var n, l = r.getItemAt(t);
                        if (l) {
                            Se("gettingData", t, l), e.index = t, e.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), oi(l), ti(l, pe), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (n = o.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = l.src, ri(l, n), ii(0, l, c, n));
                            else {
                                if (l.loadComplete = function(i) {
                                        if (s) {
                                            if (e && e.index === t) {
                                                if (oi(i, !0)) return i.loadComplete = i.img = null, ti(i, pe), _e(i), void(e.index === u && r.updateCurrZoomItem());
                                                i.imageAppended ? !Bt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : $.transform && (ie || Bt) ? Kt.push({
                                                    item: i,
                                                    baseDiv: c,
                                                    img: i.img,
                                                    index: t,
                                                    holder: e,
                                                    clearPlaceholder: !0
                                                }) : ii(0, i, c, i.img, 0, !0)
                                            }
                                            i.loadComplete = null, i.img = null, Se("imageLoadComplete", t, i)
                                        }
                                    }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var p = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (p.src = l.msrc), ri(l, p), c.appendChild(p), l.placeholder = p
                                }
                                l.loading || ni(l), r.allowProgressiveImg() && (!Xt && $.transform ? Kt.push({
                                    item: l,
                                    baseDiv: c,
                                    img: l.img,
                                    index: t,
                                    holder: e
                                }) : ii(0, l, c, l.img, 0, !0))
                            }
                            Xt || t !== u ? _e(l) : (te = c.style, Qt(l, n || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var si, li = {},
                ci = function(e, t, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
                };
            xe("Tap", {
                publicMethods: {
                    initTap: function() {
                        Te("firstTouchStart", r.onTapStart), Te("touchRelease", r.onTapRelease), Te("destroy", function() {
                            li = {}, si = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(si), si = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !q && !X && !Ze) {
                            var i = t;
                            if (si && (clearTimeout(si), si = null, gt(i, li))) return void Se("doubleTap", i);
                            if ("mouse" === t.type) return void ci(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void ci(e, t);
                            Le(li, i), si = setTimeout(function() {
                                ci(e, t), si = null
                            }, 300)
                        }
                    }
                }
            });
            var ui;
            xe("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        R || (_ ? Te("mouseUsed", function() {
                            r.setupDesktopZoom()
                        }) : r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        ui = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Te("bindEvents", function() {
                            o.bind(e, i, r.handleMouseWheel)
                        }), Te("unbindEvents", function() {
                            ui && o.unbind(e, i, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var n, a = function() {
                                r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > v ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                n && (o.removeClass(e, "pswp--dragging"), n = !1)
                            };
                        Te("resize", a), Te("afterChange", a), Te("pointerDown", function() {
                            r.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
                        }), Te("pointerUp", s), t || a()
                    },
                    handleMouseWheel: function(e) {
                        if (v <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Ze || z ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (c = !0, r.close())), !0;
                        if (e.stopPropagation(), ui.x = 0, "deltaX" in e) 1 === e.deltaMode ? (ui.x = 18 * e.deltaX, ui.y = 18 * e.deltaY) : (ui.x = e.deltaX, ui.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (ui.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? ui.y = -.16 * e.wheelDeltaY : ui.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            ui.y = e.detail
                        }
                        Ye(v, !0);
                        var t = de.x - ui.x,
                            i = de.y - ui.y;
                        (a.modal || t <= ee.min.x && t >= ee.max.x && i <= ee.min.y && i >= ee.max.y) && e.preventDefault(), r.panTo(t, i)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: pe.x / 2 + he.x,
                            y: pe.y / 2 + he.y
                        };
                        var i = a.getDoubleTapZoom(!0, r.currItem),
                            n = v === i;
                        r.mouseZoomedIn = !n, r.zoomTo(n ? r.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var di, pi, fi, hi, mi, vi, gi, yi, bi, wi, xi, ki, Ci = {
                    history: !0,
                    galleryUID: 1
                },
                Ti = function() {
                    return xi.hash.substring(1)
                },
                Si = function() {
                    di && clearTimeout(di), fi && clearTimeout(fi)
                },
                Ii = function() {
                    var e = Ti(),
                        t = {};
                    if (e.length < 5) return t;
                    var i, n = e.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (a.galleryPIDs) {
                        var r = t.pid;
                        for (t.pid = 0, i = 0; i < zt.length; i++)
                            if (zt[i].pid === r) {
                                t.pid = i;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                Ei = function() {
                    if (fi && clearTimeout(fi), Ze || z) fi = setTimeout(Ei, 500);
                    else {
                        hi ? clearTimeout(pi) : hi = !0;
                        var e = u + 1,
                            t = qt(u);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var i = gi + "&gid=" + a.galleryUID + "&pid=" + e;
                        yi || -1 === xi.hash.indexOf(i) && (wi = !0);
                        var n = xi.href.split("#")[0] + "#" + i;
                        ki ? "#" + i !== window.location.hash && history[yi ? "replaceState" : "pushState"]("", document.title, n) : yi ? xi.replace(n) : xi.hash = i, yi = !0, pi = setTimeout(function() {
                            hi = !1
                        }, 60)
                    }
                };
            xe("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(a, Ci, !0), a.history) {
                            xi = window.location, wi = !1, bi = !1, yi = !1, gi = Ti(), ki = "pushState" in history, gi.indexOf("gid=") > -1 && (gi = gi.split("&gid=")[0], gi = gi.split("?gid=")[0]), Te("afterChange", r.updateURL), Te("unbindEvents", function() {
                                o.unbind(window, "hashchange", r.onHashChange)
                            });
                            var e = function() {
                                vi = !0, bi || (wi ? history.back() : gi ? xi.hash = gi : ki ? history.pushState("", document.title, xi.pathname + xi.search) : xi.hash = ""), Si()
                            };
                            Te("unbindEvents", function() {
                                c && e()
                            }), Te("destroy", function() {
                                vi || e()
                            }), Te("firstUpdate", function() {
                                u = Ii().pid
                            });
                            var t = gi.indexOf("pid=");
                            t > -1 && "&" === (gi = gi.substring(0, t)).slice(-1) && (gi = gi.slice(0, -1)), setTimeout(function() {
                                s && o.bind(window, "hashchange", r.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return Ti() === gi ? (bi = !0, void r.close()) : void(hi || (mi = !0, r.goTo(Ii().pid), mi = !1))
                    },
                    updateURL: function() {
                        Si(), mi || (yi ? di = setTimeout(Ei, 800) : Ei())
                    }
                }
            }), o.extend(r, et)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        return function(e, t) {
            var i, n, o, r, a, s, l, c, u, d, p, f, h, m, v, g, y, b, w, x = this,
                k = !1,
                C = !0,
                T = !0,
                S = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                I = function(e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !u && W();
                    for (var i, n, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < z.length; r++)(i = z[r]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var a = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            g = !1
                        }, a)
                    }
                },
                E = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
                },
                A = function(e, i, n) {
                    t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
                },
                P = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && (A(n, "ui--one-slide", e), m = e)
                },
                _ = function() {
                    A(l, "share-modal--hidden", T)
                },
                D = function() {
                    return T = !T, T ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        T && _()
                    }, 300)) : (_(), setTimeout(function() {
                        T || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), T || M(), !1
                },
                O = function(t) {
                    var i = (t = t || window.event).target || t.srcElement;
                    return e.shout("shareLinkClick", t, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || D(), !1))
                },
                M = function() {
                    for (var e, t, i, n, o, r = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], i = v.getImageURLForShare(e), n = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
                    l.children[0].innerHTML = r, l.children[0].onclick = O
                },
                L = function(e) {
                    for (var i = 0; i < v.closeElClasses.length; i++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[i])) return !0
                },
                R = 0,
                W = function() {
                    clearTimeout(w), R = 0, u && x.setIdle(!1)
                },
                $ = function(e) {
                    var t = (e = e || window.event).relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                        x.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                V = function() {
                    v.fullscreenEl && !t.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (t.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                },
                F = function() {
                    v.preloaderEl && (Y(!0), d("beforeChange", function() {
                        clearTimeout(h), h = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && Y(!1) : Y(!0)
                        }, v.loadingIndicatorDelay)
                    }), d("imageLoadComplete", function(t, i) {
                        e.currItem === i && Y(!0)
                    }))
                },
                Y = function(e) {
                    f !== e && (A(p, "preloader--active", !e), f = e)
                },
                H = function(e) {
                    var i = e.vGap;
                    if (E()) {
                        var a = v.barsSize;
                        if (v.captionEl && "auto" === a.bottom)
                            if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), n.insertBefore(r, o), t.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
                                var s = r.clientHeight;
                                i.bottom = parseInt(s, 10) || 44
                            } else i.bottom = a.top;
                        else i.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        i.top = a.top
                    } else i.top = i.bottom = 0
                },
                j = function() {
                    v.timeToIdle && d("mouseUsed", function() {
                        t.bind(document, "mousemove", W), t.bind(document, "mouseout", $), b = setInterval(function() {
                            2 == ++R && x.setIdle(!0)
                        }, v.timeToIdle / 2)
                    })
                },
                N = function() {
                    d("onVerticalDrag", function(e) {
                        C && .95 > e ? x.hideControls() : !C && e >= .95 && x.showControls()
                    });
                    var e;
                    d("onPinchClose", function(t) {
                        C && .9 > t ? (x.hideControls(), e = !0) : e && !C && t > .9 && x.showControls()
                    }), d("zoomGestureEnded", function() {
                        (e = !1) && !C && x.showControls()
                    })
                },
                z = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        D()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        D()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        a = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }],
                X = function() {
                    var e, i, o, r = function(n) {
                        if (n)
                            for (var r = n.length, a = 0; r > a; a++) {
                                e = n[a], i = e.className;
                                for (var s = 0; s < z.length; s++) o = z[s], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    r(n.children);
                    var a = t.getChildByClass(n, "pswp__top-bar");
                    a && r(a.children)
                };
            x.init = function() {
                t.extend(e.options, S, !0), v = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, N(), d("beforeChange", x.update), d("doubleTap", function(t) {
                    var i = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), d("preventDragEvent", function(e, t, i) {
                    var n = e.target || e.srcElement;
                    n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                }), d("bindEvents", function() {
                    t.bind(n, "pswpTap click", I), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                }), d("unbindEvents", function() {
                    T || D(), b && clearInterval(b), t.unbind(document, "mouseout", $), t.unbind(document, "mousemove", W), t.unbind(n, "pswpTap click", I), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), i && (t.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null)
                }), d("destroy", function() {
                    v.captionEl && (r && n.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
                }), v.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", function() {
                    v.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                }), d("initialZoomOut", function() {
                    t.addClass(n, "pswp__ui--hidden")
                }), d("parseVerticalMargin", H), X(), v.shareEl && s && l && (T = !0), P(), j(), V(), F()
            }, x.setIdle = function(e) {
                u = e, A(n, "ui--idle", e)
            }, x.update = function() {
                C && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), A(o, "caption--empty", !e.currItem.title)), k = !0) : k = !1, T || D(), P()
            }, x.updateFullscreen = function(n) {
                n && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, x.onGlobalTap = function(i) {
                var n = (i = i || window.event).target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (L(n)) return void e.close();
                        t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (v.tapToToggleControls && (C ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(n, "pswp__img") || L(n))) return void e.close()
            }, x.onMouseOver = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                A(n, "ui--over-close", L(t))
            }, x.hideControls = function() {
                t.addClass(n, "pswp__ui--hidden"), C = !1
            }, x.showControls = function() {
                C = !0, k || x.update(), t.removeClass(n, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var t, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return v.closeOnScroll = c, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        }
    });
var initPhotoSwipeFromDOM = function(e) {
    for (var t = function(e) {
            for (var t, i, n, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (t = r[l]).nodeType && (n = (i = t.children[0]).getAttribute("data-size").split("x"), o = {
                src: i.getAttribute("href"),
                w: parseInt(n[0], 10),
                h: parseInt(n[1], 10)
            }, t.children.length > 1 && (o.title = t.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = t, s.push(o));
            return s
        }, i = function e(t, i) {
            return t && (i(t) ? t : e(t.parentNode, i))
        }, n = function(e, i, n, o) {
            var r, a, s = document.querySelectorAll(".pswp")[0];
            if (a = t(i), r = {
                    galleryUID: i.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function(e) {
                        var t = a[e].el.getElementsByTagName("img")[0],
                            i = window.pageYOffset || document.documentElement.scrollTop,
                            n = t.getBoundingClientRect();
                        return {
                            x: n.left,
                            y: n.top + i,
                            w: n.width
                        }
                    }
                }, o)
                if (r.galleryPIDs) {
                    for (var l = 0; l < a.length; l++)
                        if (a[l].pid == e) {
                            r.index = l;
                            break
                        }
                } else r.index = parseInt(e, 10) - 1;
            else r.index = parseInt(e, 10);
            isNaN(r.index) || (n && (r.showAnimationDuration = 0), new PhotoSwipe(s, PhotoSwipeUI_Default, a, r).init())
        }, o = document.querySelectorAll(e), r = 0, a = o.length; r < a; r++) o[r].setAttribute("data-pswp-uid", r + 1), o[r].onclick = function(e) {
        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
        var t = e.target || e.srcElement,
            o = i(t, function(e) {
                return e.tagName && "FIGURE" === e.tagName.toUpperCase()
            });
        if (o) {
            for (var r, a = o.parentNode, s = o.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)
                if (1 === s[u].nodeType) {
                    if (s[u] === o) {
                        r = c;
                        break
                    }
                    c++
                }
            return r >= 0 && n(r, a), !1
        }
    };
    var s = function() {
        var e = window.location.hash.substring(1),
            t = {};
        if (e.length < 5) return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++)
            if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    s.pid && s.gid && n(s.pid, o[s.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(e) {
        e.fn.sticky = function(t) {
            var i = {
                    topSpacing: 0,
                    zIndex: "",
                    stopper: ".sticky-stopper",
                    stickyClass: !1
                },
                n = e.extend({}, i, t),
                o = "number" == typeof n.zIndex,
                r = 0 < e(n.stopper).length || "number" == typeof n.stopper;
            return this.each(function() {
                function t() {
                    var t = f.scrollTop(),
                        s = p,
                        h = i.parent().width();
                    if (d.width(h), r && "string" == typeof p && (s = e(p).offset().top - a - l), u < t) {
                        if (n.stickyClass && i.addClass(n.stickyClass), i.after(d).css({
                                position: "fixed",
                                top: l,
                                width: h
                            }), o && i.css({
                                zIndex: c
                            }), r && s < t) {
                            var m = s - t + l;
                            i.css({
                                top: m
                            })
                        }
                    } else n.stickyClass && i.removeClass(n.stickyClass), i.css({
                        position: "static",
                        top: null,
                        left: null,
                        width: "auto"
                    }), d.remove()
                }
                var i = e(this),
                    a = i.outerHeight(),
                    s = i.outerWidth(),
                    l = n.topSpacing,
                    c = n.zIndex,
                    u = i.offset().top - l,
                    d = e("<div></div>").width(s).height(a).addClass("sticky-placeholder"),
                    p = n.stopper,
                    f = e(window);
                f.innerHeight() > a && (f.bind("scroll", t), f.bind("load", t), f.bind("resize", t))
            })
        }
    }(jQuery),
    function e(t, i, n) {
        function o(a, s) {
            if (!i[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var i = t[a][1][e];
                    return o(i || e)
                }, u, u.exports, e, t, i, n)
            }
            return i[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(e, t, i) {
            "use strict";
            var n = e("../main");
            "function" == typeof define && define.amd ? define(n) : (window.PerfectScrollbar = n, void 0 === window.Ps && (window.Ps = n))
        }, {
            "../main": 7
        }],
        2: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i = e.className.split(" ");
                i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
            }

            function o(e, t) {
                var i = e.className.split(" "),
                    n = i.indexOf(t);
                n >= 0 && i.splice(n, 1), e.className = i.join(" ")
            }
            i.add = function(e, t) {
                e.classList ? e.classList.add(t) : n(e, t)
            }, i.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : o(e, t)
            }, i.list = function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return window.getComputedStyle(e)[t]
            }

            function o(e, t, i) {
                return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
            }

            function r(e, t) {
                for (var i in t) {
                    var n = t[i];
                    "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
                }
                return e
            }
            var a = {};
            a.e = function(e, t) {
                var i = document.createElement(e);
                return i.className = t, i
            }, a.appendTo = function(e, t) {
                return t.appendChild(e), e
            }, a.css = function(e, t, i) {
                return "object" == typeof t ? r(e, t) : void 0 === i ? n(e, t) : o(e, t, i)
            }, a.matches = function(e, t) {
                return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, a.remove = function(e) {
                void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, a.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return a.matches(e, t)
                })
            }, t.exports = a
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            var n = function(e) {
                this.element = e, this.events = {}
            };
            n.prototype.bind = function(e, t) {
                void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, n.prototype.unbind = function(e, t) {
                var i = void 0 !== t;
                this.events[e] = this.events[e].filter(function(n) {
                    return !(!i || n === t) || (this.element.removeEventListener(e, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
            }, o.prototype.bind = function(e, t, i) {
                this.eventElement(e).bind(t, i)
            }, o.prototype.unbind = function(e, t, i) {
                this.eventElement(e).unbind(t, i)
            }, o.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, o.prototype.once = function(e, t, i) {
                var n = this.eventElement(e),
                    o = function(e) {
                        n.unbind(t, o), i(e)
                    };
                n.bind(t, o)
            }, t.exports = o
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, i) {
            "use strict";

            function n(e) {
                return function(t, i) {
                    e(t, "ps--in-scrolling"), void 0 !== i ? e(t, "ps--" + i) : (e(t, "ps--x"), e(t, "ps--y"))
                }
            }
            var o = e("./class"),
                r = e("./dom"),
                a = i.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                s = i.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(s);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var i in e) t[i] = s(e[i]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            i.extend = function(e, t) {
                var i = s(e);
                for (var n in t) i[n] = s(t[n]);
                return i
            }, i.isEditable = function(e) {
                return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
            }, i.removePsClasses = function(e) {
                for (var t = o.list(e), i = 0; i < t.length; i++) {
                    var n = t[i];
                    0 === n.indexOf("ps-") && o.remove(e, n)
                }
            }, i.outerWidth = function(e) {
                return a(r.css(e, "width")) + a(r.css(e, "paddingLeft")) + a(r.css(e, "paddingRight")) + a(r.css(e, "borderLeftWidth")) + a(r.css(e, "borderRightWidth"))
            }, i.startScrolling = n(o.add), i.stopScrolling = n(o.remove), i.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, i) {
            "use strict";
            var n = e("./plugin/destroy"),
                o = e("./plugin/initialize"),
                r = e("./plugin/update");
            t.exports = {
                initialize: o,
                update: r,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(e, t, i) {
            "use strict";
            t.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), n.removePsClasses(e), r.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(e) {
                    return e.getBoundingClientRect()
                }
                var n = function(e) {
                    e.stopPropagation()
                };
                t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
                    var o = n.pageY - window.pageYOffset - i(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                    a(e, "top", e.scrollTop + o * t.containerHeight), r(e), n.stopPropagation()
                }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
                    var o = n.pageX - window.pageXOffset - i(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                    a(e, "left", e.scrollLeft + o * t.containerWidth), r(e), n.stopPropagation()
                })
            }
            var o = e("../instances"),
                r = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                n(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i) {
                    var o = n + i * t.railXRatio,
                        a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    t.scrollbarXLeft = o < 0 ? 0 : o > a ? a : o;
                    var s = r.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                    c(e, "left", s)
                }
                var n = null,
                    o = null,
                    s = function(t) {
                        i(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    u = function() {
                        r.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", s)
                    };
                t.event.bind(t.scrollbarX, "mousedown", function(i) {
                    o = i.pageX, n = r.toInt(a.css(t.scrollbarX, "left")) * t.railXRatio, r.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                })
            }

            function o(e, t) {
                function i(i) {
                    var o = n + i * t.railYRatio,
                        a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    t.scrollbarYTop = o < 0 ? 0 : o > a ? a : o;
                    var s = r.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                    c(e, "top", s)
                }
                var n = null,
                    o = null,
                    s = function(t) {
                        i(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    u = function() {
                        r.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", s)
                    };
                t.event.bind(t.scrollbarY, "mousedown", function(i) {
                    o = i.pageY, n = r.toInt(a.css(t.scrollbarY, "top")) * t.railYRatio, r.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                })
            }
            var r = e("../../lib/helper"),
                a = e("../../lib/dom"),
                s = e("../instances"),
                l = e("../update-geometry"),
                c = e("../update-scroll");
            t.exports = function(e) {
                var t = s.get(e);
                n(e, t), o(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i, n) {
                    var o = e.scrollTop;
                    if (0 === i) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                    }
                    var r = e.scrollLeft;
                    if (0 === n) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === r && i < 0 || r >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }
                var n = !1;
                t.event.bind(e, "mouseenter", function() {
                    n = !0
                }), t.event.bind(e, "mouseleave", function() {
                    n = !1
                });
                var a = !1;
                t.event.bind(t.ownerDocument, "keydown", function(c) {
                    if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                        var u = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
                        if (n || u) {
                            var d = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (d) {
                                if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                                else
                                    for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                                if (o.isEditable(d)) return
                            }
                            var p = 0,
                                f = 0;
                            switch (c.which) {
                                case 37:
                                    p = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    f = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    p = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    f = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                                    break;
                                case 33:
                                    f = 90;
                                    break;
                                case 32:
                                    f = c.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    f = -90;
                                    break;
                                case 35:
                                    f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                    break;
                                case 36:
                                    f = c.ctrlKey ? e.scrollTop : t.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + p), s(e), (a = i(p, f)) && c.preventDefault()
                        }
                    }
                })
            }
            var o = e("../../lib/helper"),
                r = e("../../lib/dom"),
                a = e("../instances"),
                s = e("../update-geometry"),
                l = e("../update-scroll");
            t.exports = function(e) {
                n(e, a.get(e))
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i, n) {
                    var o = e.scrollTop;
                    if (0 === i) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                    }
                    var r = e.scrollLeft;
                    if (0 === n) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === r && i < 0 || r >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }

                function n(e) {
                    var t = e.deltaX,
                        i = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t !== t && i !== i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
                }

                function o(t, i) {
                    var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (n) {
                        var o = window.getComputedStyle(n);
                        if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
                        var r = n.scrollHeight - n.clientHeight;
                        if (r > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === r && i < 0)) return !0;
                        var a = n.scrollLeft - n.clientWidth;
                        if (a > 0 && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === a && t > 0)) return !0
                    }
                    return !1
                }

                function s(s) {
                    var c = n(s),
                        u = c[0],
                        d = c[1];
                    o(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? a(e, "top", e.scrollTop - d * t.settings.wheelSpeed) : a(e, "top", e.scrollTop + u * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed) : a(e, "left", e.scrollLeft - d * t.settings.wheelSpeed), l = !0) : (a(e, "top", e.scrollTop - d * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)), r(e), (l = l || i(u, d)) && (s.stopPropagation(), s.preventDefault()))
                }
                var l = !1;
                void 0 !== window.onwheel ? t.event.bind(e, "wheel", s) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", s)
            }
            var o = e("../instances"),
                r = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                n(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                t.event.bind(e, "scroll", function() {
                    r(e)
                })
            }
            var o = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                n(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                }

                function n() {
                    c || (c = setInterval(function() {
                        return r.get(e) ? (s(e, "top", e.scrollTop + u.top), s(e, "left", e.scrollLeft + u.left), void a(e)) : void clearInterval(c)
                    }, 50))
                }

                function l() {
                    c && (clearInterval(c), c = null), o.stopScrolling(e)
                }
                var c = null,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(i()) ? d = !0 : (d = !1, l())
                }), t.event.bind(window, "mouseup", function() {
                    d && (d = !1, l())
                }), t.event.bind(window, "keyup", function() {
                    d && (d = !1, l())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (d) {
                        var i = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            r = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        i.x < r.left + 3 ? (u.left = -5, o.startScrolling(e, "x")) : i.x > r.right - 3 ? (u.left = 5, o.startScrolling(e, "x")) : u.left = 0, i.y < r.top + 3 ? (u.top = r.top + 3 - i.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : i.y > r.bottom - 3 ? (u.top = i.y - r.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : n()
                    }
                })
            }
            var o = e("../../lib/helper"),
                r = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                n(e, r.get(e))
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(e, t, i) {
            "use strict";

            function n(e, t, i, n) {
                function o(i, n) {
                    var o = e.scrollTop,
                        r = e.scrollLeft,
                        a = Math.abs(i),
                        s = Math.abs(n);
                    if (s > a) {
                        if (n < 0 && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
                    } else if (a > s && (i < 0 && r === t.contentWidth - t.containerWidth || i > 0 && 0 === r)) return !t.settings.swipePropagation;
                    return !0
                }

                function l(t, i) {
                    s(e, "top", e.scrollTop - i), s(e, "left", e.scrollLeft - t), a(e)
                }

                function c() {
                    w = !0
                }

                function u() {
                    w = !1
                }

                function d(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function p(e) {
                    return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                }

                function f(e) {
                    if (p(e)) {
                        x = !0;
                        var t = d(e);
                        v.pageX = t.pageX, v.pageY = t.pageY, g = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                    }
                }

                function h(e) {
                    if (!x && t.settings.swipePropagation && f(e), !w && x && p(e)) {
                        var i = d(e),
                            n = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            r = n.pageX - v.pageX,
                            a = n.pageY - v.pageY;
                        l(r, a), v = n;
                        var s = (new Date).getTime(),
                            c = s - g;
                        c > 0 && (y.x = r / c, y.y = a / c, g = s), o(r, a) && (e.stopPropagation(), e.preventDefault())
                    }
                }

                function m() {
                    !w && x && (x = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function() {
                        return r.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                    }, 10)))
                }
                var v = {},
                    g = 0,
                    y = {},
                    b = null,
                    w = !1,
                    x = !1;
                i ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", m)) : n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", m)))
            }
            var o = e("../../lib/helper"),
                r = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                (o.env.supportsTouch || o.env.supportsIePointer) && n(e, r.get(e), o.env.supportsTouch, o.env.supportsIePointer)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/class"),
                r = e("./instances"),
                a = e("./update-geometry"),
                s = {
                    "click-rail": e("./handler/click-rail"),
                    "drag-scrollbar": e("./handler/drag-scrollbar"),
                    keyboard: e("./handler/keyboard"),
                    wheel: e("./handler/mouse-wheel"),
                    touch: e("./handler/touch"),
                    selection: e("./handler/selection")
                },
                l = e("./handler/native-scroll");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, o.add(e, "ps");
                var i = r.add(e);
                i.settings = n.extend(i.settings, t), o.add(e, "ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
                    s[t](e)
                }), l(e), a(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, i) {
            "use strict";

            function n(e) {
                function t() {
                    l.add(e, "ps--focus")
                }

                function i() {
                    l.remove(e, "ps--focus")
                }
                var n = this;
                n.settings = s.clone(c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === u.css(e, "direction"), n.isNegativeScroll = function() {
                    var t = e.scrollLeft,
                        i = null;
                    return e.scrollLeft = -1, i = e.scrollLeft < 0, e.scrollLeft = t, i
                }(), n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.event = new d, n.ownerDocument = e.ownerDocument || document, n.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), e), n.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", t), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = s.toInt(u.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : s.toInt(u.css(n.scrollbarXRail, "top")), n.railBorderXWidth = s.toInt(u.css(n.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(n.scrollbarXRail, "borderRightWidth")), u.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = s.toInt(u.css(n.scrollbarXRail, "marginLeft")) + s.toInt(u.css(n.scrollbarXRail, "marginRight")), u.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), e), n.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", t), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = s.toInt(u.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : s.toInt(u.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? s.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = s.toInt(u.css(n.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(n.scrollbarYRail, "borderBottomWidth")), u.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = s.toInt(u.css(n.scrollbarYRail, "marginTop")) + s.toInt(u.css(n.scrollbarYRail, "marginBottom")), u.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
            }

            function o(e) {
                return e.getAttribute("data-ps-id")
            }

            function r(e, t) {
                e.setAttribute("data-ps-id", t)
            }

            function a(e) {
                e.removeAttribute("data-ps-id")
            }
            var s = e("../lib/helper"),
                l = e("../lib/class"),
                c = e("./default-setting"),
                u = e("../lib/dom"),
                d = e("../lib/event-manager"),
                p = e("../lib/guid"),
                f = {};
            i.add = function(e) {
                var t = p();
                return r(e, t), f[t] = new n(e), f[t]
            }, i.remove = function(e) {
                delete f[o(e)], a(e)
            }, i.get = function(e) {
                return f[o(e)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }

            function o(e, t) {
                var i = {
                    width: t.railXWidth
                };
                t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, s.css(t.scrollbarXRail, i);
                var n = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, s.css(t.scrollbarYRail, n), s.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }), s.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                })
            }
            var r = e("../lib/helper"),
                a = e("../lib/class"),
                s = e("../lib/dom"),
                l = e("./instances"),
                c = e("./update-scroll");
            t.exports = function(e) {
                var t = l.get(e);
                t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
                var i;
                e.contains(t.scrollbarXRail) || ((i = s.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && i.forEach(function(e) {
                    s.remove(e)
                }), s.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || ((i = s.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && i.forEach(function(e) {
                    s.remove(e)
                }), s.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = n(t, r.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = r.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = n(t, r.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = r.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? a.add(e, "ps--active-x") : (a.remove(e, "ps--active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? a.add(e, "ps--active-y") : (a.remove(e, "ps--active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(e, t, i) {
            "use strict";
            var n = e("./instances"),
                o = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0), t
                };
            t.exports = function(e, t, i) {
                if (void 0 === e) throw "You must provide an element to the update-scroll function";
                if (void 0 === t) throw "You must provide an axis to the update-scroll function";
                if (void 0 === i) throw "You must provide a value to the update-scroll function";
                "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(o("ps-x-reach-start")));
                var r = n.get(e);
                "top" === t && i >= r.contentHeight - r.containerHeight && (i = r.contentHeight - r.containerHeight, i - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && i >= r.contentWidth - r.containerWidth && (i = r.contentWidth - r.containerWidth, i - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = e.scrollTop), void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft), "top" === t && i < r.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && i > r.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && i < r.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && i > r.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && i !== r.lastTop && (e.scrollTop = r.lastTop = i, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && i !== r.lastLeft && (e.scrollLeft = r.lastLeft = i, e.dispatchEvent(o("ps-scroll-x")))
            }
        }, {
            "./instances": 18
        }],
        21: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances"),
                a = e("./update-geometry"),
                s = e("./update-scroll");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = n.toInt(o.css(t.scrollbarXRail, "marginLeft")) + n.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = n.toInt(o.css(t.scrollbarYRail, "marginTop")) + n.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]),
    function(e) {
        var t = !1,
            i = {
                data: [],
                placeholder: "",
                secondaryPlaceholder: ""
            };
        e(document).ready(function() {
            e(document).on("click", ".chip .close", function(t) {
                var i = e(this);
                i.closest(".chips").data("initialized") || i.closest(".chip").remove()
            })
        }), e.fn.material_chip = function(n) {
            var o = this;
            return this.$el = e(this), this.$document = e(document), this.SELS = {
                CHIPS: ".chips",
                CHIP: ".chip",
                INPUT: "input",
                DELETE: ".fa",
                SELECTED_CHIP: ".selected"
            }, "data" === n ? this.$el.data("chips") : "options" === n ? this.$el.data("options") : (this.$el.data("options", e.extend({}, i, n)), this.init = function() {
                var t = 0;
                o.$el.each(function() {
                    var i = e(this);
                    if (!i.data("initialized")) {
                        var n = i.data("options");
                        (!n.data || !n.data instanceof Array) && (n.data = []), i.data("chips", n.data), i.data("index", t), i.data("initialized", !0), i.hasClass(o.SELS.CHIPS) || i.addClass("chips"), o.chips(i), t++
                    }
                })
            }, this.handleEvents = function() {
                var t = o.SELS;
                o.$document.on("click", t.CHIPS, function(i) {
                    e(i.target).find(t.INPUT).focus()
                }), o.$document.on("click", t.CHIP, function(i) {
                    e(t.CHIP).removeClass("selected"), e(this).toggleClass("selected")
                }), o.$document.on("keydown", function(i) {
                    if (!e(i.target).is("input, textarea")) {
                        var n, r = o.$document.find(t.CHIP + t.SELECTED_CHIP),
                            a = r.closest(t.CHIPS),
                            s = r.siblings(t.CHIP).length;
                        if (r.length) {
                            var l = 8 === i.which || 46 === i.which,
                                c = 37 === i.which,
                                u = 39 === i.which;
                            if (l) {
                                i.preventDefault();
                                var d = a.data("index");
                                n = r.index(), o.deleteChip(d, n, a);
                                var p = null;
                                n + 1 < s ? p = n : n !== s && n + 1 !== s || (p = s - 1), p < 0 && (p = null), null !== p && o.selectChip(d, p, a), s || a.find("input").focus()
                            } else if (c) {
                                if ((n = r.index() - 1) < 0) return;
                                e(t.CHIP).removeClass("selected"), o.selectChip(a.data("index"), n, a)
                            } else if (u) {
                                if (n = r.index() + 1, e(t.CHIP).removeClass("selected"), n > s) return void a.find("input").focus();
                                o.selectChip(a.data("index"), n, a)
                            }
                        }
                    }
                }), o.$document.on("focusin", t.CHIPS + " " + t.INPUT, function(i) {
                    e(i.target).closest(t.CHIPS).addClass("focus"), e(t.CHIP).removeClass("selected")
                }), o.$document.on("focusout", t.CHIPS + " " + t.INPUT, function(i) {
                    e(i.target).closest(t.CHIPS).removeClass("focus")
                }), o.$document.on("keydown", t.CHIPS + " " + t.INPUT, function(i) {
                    var n = e(i.target),
                        r = n.closest(t.CHIPS),
                        a = r.data("index"),
                        s = r.children(t.CHIP).length;
                    if (13 === i.which) return i.preventDefault(), o.addChip(a, {
                        tag: n.val()
                    }, r), void n.val("");
                    var l = 8 === i.keyCode || 37 === i.keyCode,
                        c = "" === n.val();
                    return l && c && s ? (o.selectChip(a, s - 1, r), void n.blur()) : void 0
                }), o.$document.on("click", t.CHIPS + " " + t.DELETE, function(i) {
                    var n = e(i.target),
                        r = n.closest(t.CHIPS),
                        a = n.closest(t.CHIP);
                    i.stopPropagation(), o.deleteChip(r.data("index"), a.index(), r), r.find("input").focus()
                })
            }, this.chips = function(e) {
                var t = "";
                e.data("options");
                e.data("chips").forEach(function(e) {
                    t += o.renderChip(e)
                }), t += '<input class="input" placeholder="">', e.html(t), o.setPlaceholder(e)
            }, this.renderChip = function(e) {
                if (e.tag) {
                    var t = '<div class="chip">' + e.tag;
                    return e.image && (t += ' <img src="' + e.image + '"> '), t += '<i class="close fa fa-times"></i>', t += "</div>"
                }
            }, this.setPlaceholder = function(e) {
                var t = e.data("options");
                e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
            }, this.isValid = function(e, t) {
                for (var i = e.data("chips"), n = !1, o = 0; o < i.length; o++)
                    if (i[o].tag === t.tag) return void(n = !0);
                return "" !== t.tag && !n
            }, this.addChip = function(t, i, n) {
                if (o.isValid(n, i)) {
                    n.data("options");
                    var r = o.renderChip(i);
                    n.data("chips").push(i), e(r).insertBefore(n.find("input")), n.trigger("chip.add", i), o.setPlaceholder(n)
                }
            }, this.deleteChip = function(e, t, i) {
                var n = i.data("chips")[t];
                i.find(".chip").eq(t).remove(), i.data("chips").splice(t, 1), i.trigger("chip.delete", n), o.setPlaceholder(i)
            }, this.selectChip = function(e, t, i) {
                var n = i.find(".chip").eq(t);
                n && !1 === n.hasClass("selected") && (n.addClass("selected"), i.trigger("chip.select", i.data("chips")[t]))
            }, this.getChipsElement = function(e, t) {
                return t.eq(e)
            }, this.init(), void(t || (this.handleEvents(), t = !0)))
        }
    }(jQuery),
    function(e) {
        "use strict";

        function t(e) {
            var t = ["O", "Moz", "ms", "Ms", "Webkit"],
                i = t.length;
            if (void 0 !== s.style[e]) return !0;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); --i > -1 && void 0 === s.style[t[i] + e];);
            return i >= 0
        }

        function i() {
            r = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
        }

        function n(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
                i.call(e)
            })
        }

        function o(t) {
            e.requestAnimationFrame(function() {
                "scroll" !== t.type && i();
                for (var e = 0, n = v.length; e < n; e++) "scroll" !== t.type && (v[e].coverImage(), v[e].clipContainer()), v[e].onScroll()
            })
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), e.requestAnimationFrame || function() {
            for (var t = ["webkit", "moz"], i = 0; i < t.length && !e.requestAnimationFrame; ++i) {
                var n = t[i];
                e.requestAnimationFrame = e[n + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n + "CancelAnimationFrame"] || e[n + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
                var o = 0;
                e.requestAnimationFrame = function(e) {
                    var t = Date.now(),
                        i = Math.max(o + 16, t);
                    return setTimeout(function() {
                        e(o = i)
                    }, i - t)
                }, e.cancelAnimationFrame = clearTimeout
            }
        }();
        var r, a, s = document.createElement("div"),
            l = t("transform"),
            c = t("perspective"),
            u = navigator.userAgent,
            d = u.toLowerCase().indexOf("android") > -1,
            p = /iPad|iPhone|iPod/.test(u) && !e.MSStream,
            f = u.toLowerCase().indexOf("firefox") > -1,
            h = u.indexOf("MSIE ") > -1 || u.indexOf("Trident/") > -1 || u.indexOf("Edge/") > -1,
            m = document.all && !e.atob;
        i();
        var v = [],
            g = function() {
                var e = 0;
                return function(t, i) {
                    var n, o = this;
                    if (o.$item = t, o.defaults = {
                            type: "scroll",
                            speed: .5,
                            imgSrc: null,
                            imgWidth: null,
                            imgHeight: null,
                            elementInViewport: null,
                            zIndex: -100,
                            noAndroid: !1,
                            noIos: !0,
                            onScroll: null,
                            onInit: null,
                            onDestroy: null,
                            onCoverImage: null
                        }, n = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, n, i), !(!l || d && o.options.noAndroid || p && o.options.noIos)) {
                        o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
                        var r = o.options.elementInViewport;
                        r && "object" == typeof r && void 0 !== r.length && (r = r[0]), !r instanceof Element && (r = null), o.options.elementInViewport = r, o.instanceID = e++, o.image = {
                            src: o.options.imgSrc || null,
                            $container: null,
                            $item: null,
                            width: o.options.imgWidth || null,
                            height: o.options.imgHeight || null,
                            useImgTag: p || d || h,
                            position: !c || f ? "absolute" : "fixed"
                        }, o.initImg() && o.init()
                    }
                }
            }();
        g.prototype.css = function(t, i) {
            if ("string" == typeof i) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(i) : t.style[i];
            i.transform && (c && (i.transform += " translateZ(0)"), i.WebkitTransform = i.MozTransform = i.msTransform = i.OTransform = i.transform);
            for (var n in i) t.style[n] = i[n];
            return t
        }, g.prototype.extend = function(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        }, g.prototype.initImg = function() {
            var e = this;
            return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
        }, g.prototype.init = function() {
            function e() {
                t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), setTimeout(function() {
                    t.$item && t.css(t.$item, {
                        "background-image": "none",
                        "background-attachment": "scroll",
                        "background-size": "auto"
                    })
                }, 0)
            }
            var t = this,
                i = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none"
                },
                n = {};
            t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), "static" === t.css(t.$item, "position") && t.css(t.$item, {
                position: "relative"
            }), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
                zIndex: 0
            }), t.image.$container = document.createElement("div"), t.css(t.image.$container, i), t.css(t.image.$container, {
                visibility: "hidden",
                "z-index": t.options.zIndex
            }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), n = t.extend({
                "max-width": "none"
            }, i, n)) : (t.image.$item = document.createElement("div"), n = t.extend({
                "background-position": "50% 50%",
                "background-size": "100% auto",
                "background-repeat": "no-repeat no-repeat",
                "background-image": 'url("' + t.image.src + '")'
            }, i, n));
            for (var o = 0, r = t.$item; null !== r && r !== document && 0 === o;) {
                var a = t.css(r, "-webkit-transform") || t.css(r, "-moz-transform") || t.css(r, "transform");
                a && "none" !== a && (o = 1, t.css(t.image.$container, {
                    transform: "translateX(0) translateY(0)"
                })), r = r.parentNode
            }(o || "opacity" === t.options.type || "scale" === t.options.type || "scale-opacity" === t.options.type) && (t.image.position = "absolute"), n.position = t.image.position, t.css(t.image.$item, n), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function(i, n) {
                t.image.width = i, t.image.height = n, e()
            }), v.push(t)
        }, g.prototype.destroy = function() {
            for (var e = this, t = 0, i = v.length; t < i; t++)
                if (v[t].instanceID === e.instanceID) {
                    v.splice(t, 1);
                    break
                }
            var n = e.$item.getAttribute("data-jarallax-original-styles");
            e.$item.removeAttribute("data-jarallax-original-styles"), "null" === n ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", n), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
            for (var o in e) delete e[o]
        }, g.prototype.getImageSize = function(e, t) {
            if (e && t) {
                var i = new Image;
                i.onload = function() {
                    t(i.width, i.height)
                }, i.src = e
            }
        }, g.prototype.clipContainer = function() {
            if (!m) {
                var e = this,
                    t = e.image.$container.getBoundingClientRect(),
                    i = t.width,
                    n = t.height;
                e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
                var o = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + i + "px " + n + "px 0);", "   clip: rect(0, " + i + "px, " + n + "px, 0);", "}"].join("\n");
                e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
            }
        }, g.prototype.coverImage = function() {
            var e = this;
            if (e.image.width && e.image.height) {
                var t = e.image.$container.getBoundingClientRect(),
                    i = t.width,
                    n = t.height,
                    o = t.left,
                    r = e.image.width,
                    s = e.image.height,
                    l = e.options.speed,
                    c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                    u = 0,
                    d = 0,
                    p = n,
                    f = 0,
                    h = 0;
                c && (u = l < 0 ? l * Math.max(n, a) : l * (n + a), l > 1 ? p = Math.abs(u - a) : l < 0 ? p = u / l + Math.abs(u) : p += Math.abs(a - n) * (1 - l), u /= 2), (d = p * r / s) < i && (p = (d = i) * s / r), c ? (f = o + (i - d) / 2, h = (a - p) / 2) : (f = (i - d) / 2, h = (n - p) / 2), "absolute" === e.image.position && (f -= o), e.parallaxScrollDistance = u, e.css(e.image.$item, {
                    width: d + "px",
                    height: p + "px",
                    marginLeft: f + "px",
                    marginTop: h + "px"
                }), e.options.onCoverImage && e.options.onCoverImage.call(e)
            }
        }, g.prototype.isVisible = function() {
            return this.isElementInViewport || !1
        }, g.prototype.onScroll = function(e) {
            var t = this;
            if (t.image.width && t.image.height) {
                var i = t.$item.getBoundingClientRect(),
                    n = i.top,
                    o = i.height,
                    s = {
                        visibility: "visible",
                        backgroundPosition: "50% 50%"
                    },
                    l = i;
                if (t.options.elementInViewport && (l = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = l.bottom >= 0 && l.right >= 0 && l.top <= a && l.left <= r, e || t.isElementInViewport) {
                    var c = Math.max(0, n),
                        u = Math.max(0, o + n),
                        d = Math.max(0, -n),
                        p = Math.max(0, n + o - a),
                        f = Math.max(0, o - (n + o - a)),
                        h = Math.max(0, -n + a - o),
                        m = 1 - 2 * (a - n) / (a + o),
                        v = 1;
                    if (o < a ? v = 1 - (d || p) / o : u <= a ? v = u / a : f <= a && (v = f / a), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "", s.opacity = v), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                        var g = 1;
                        t.options.speed < 0 ? g -= t.options.speed * v : g += t.options.speed * (1 - v), s.transform = "scale(" + g + ")"
                    }
                    if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                        var y = t.parallaxScrollDistance * m;
                        "absolute" === t.image.position && (y -= n), s.transform = "translateY(" + y + "px)"
                    }
                    t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                        section: i,
                        beforeTop: c,
                        beforeTopEnd: u,
                        afterTop: d,
                        beforeBottom: p,
                        beforeBottomEnd: f,
                        afterBottom: h,
                        visiblePercent: v,
                        fromViewportCenter: m
                    })
                }
            }
        }, n(e, "scroll", o), n(e, "resize", o), n(e, "orientationchange", o), n(e, "load", o);
        var y = function(e) {
            ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            var t, i = arguments[1],
                n = Array.prototype.slice.call(arguments, 2),
                o = e.length,
                r = 0;
            for (r; r < o; r++)
                if ("object" == typeof i || void 0 === i ? e[r].jarallax || (e[r].jarallax = new g(e[r], i)) : e[r].jarallax && (t = e[r].jarallax[i].apply(e[r].jarallax, n)), void 0 !== t) return t;
            return e
        };
        y.constructor = g;
        var b = e.jarallax;
        if (e.jarallax = y, e.jarallax.noConflict = function() {
                return e.jarallax = b, this
            }, "undefined" != typeof jQuery) {
            var w = function() {
                var t = arguments || [];
                Array.prototype.unshift.call(t, this);
                var i = y.apply(e, t);
                return "object" != typeof i ? i : this
            };
            w.constructor = g;
            var x = jQuery.fn.jarallax;
            jQuery.fn.jarallax = w, jQuery.fn.jarallax.noConflict = function() {
                return jQuery.fn.jarallax = x, this
            }
        }
        n(e, "DOMContentLoaded", function() {
            y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
        })
    }(window),
    function(e) {
        "use strict";

        function t(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        }

        function i() {
            this._done = [], this._fail = []
        }

        function n(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
                i.call(e)
            })
        }
        i.prototype = {
            execute: function(e, t) {
                var i = e.length;
                for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
            },
            resolve: function() {
                this.execute(this._done, arguments)
            },
            reject: function() {
                this.execute(this._fail, arguments)
            },
            done: function(e) {
                this._done.push(e)
            },
            fail: function(e) {
                this._fail.push(e)
            }
        };
        var o = function() {
            var e = 0;
            return function(i, n) {
                var o = this;
                o.url = i, o.options_default = {
                    autoplay: 1,
                    loop: 1,
                    mute: 1,
                    controls: 0,
                    startTime: 0,
                    endTime: 0
                }, o.options = t({}, o.options_default, n), o.videoID = o.parseURL(i), o.videoID && (o.ID = e++, o.loadAPI(), o.init())
            }
        }();
        o.prototype.parseURL = function(e) {
            var t = function(e) {
                    var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                        i = e.match(t);
                    return !(!i || 11 !== i[1].length) && i[1]
                }(e),
                i = function(e) {
                    var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                        i = e.match(t);
                    return !(!i || !i[3]) && i[3]
                }(e),
                n = function(e) {
                    for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, n = 0, o = 0; o < t.length; o++) {
                        var r = t[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        r && r[1] && r[2] && (i["ogv" === r[1] ? "ogg" : r[1]] = r[2], n = 1)
                    }
                    return !!n && i
                }(e);
            return t ? (this.type = "youtube", t) : i ? (this.type = "vimeo", i) : !!n && (this.type = "local", n)
        }, o.prototype.isValid = function() {
            return !!this.videoID
        }, o.prototype.on = function(e, t) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
        }, o.prototype.off = function(e, t) {
            if (this.userEventsList && this.userEventsList[e])
                if (t)
                    for (var i = 0; i < this.userEventsList[e].length; i++) this.userEventsList[e][i] === t && (this.userEventsList[e][i] = !1);
                else delete this.userEventsList[e]
        }, o.prototype.fire = function(e) {
            var t = [].slice.call(arguments, 1);
            if (this.userEventsList && void 0 !== this.userEventsList[e])
                for (var i in this.userEventsList[e]) this.userEventsList[e][i] && this.userEventsList[e][i].apply(this, t)
        }, o.prototype.play = function(e) {
            var t = this;
            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                e && t.player.play()
            })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.play()))
        }, o.prototype.pause = function() {
            this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
        }, o.prototype.getImageURL = function(e) {
            var t = this;
            if (t.videoImage) e(t.videoImage);
            else {
                if ("youtube" === t.type) {
                    var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                        n = 0,
                        o = new Image;
                    o.onload = function() {
                        120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg", e(t.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg")
                    }, o.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg"
                }
                if ("vimeo" === t.type) {
                    var r = new XMLHttpRequest;
                    r.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), r.onreadystatechange = function() {
                        if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                            var i = JSON.parse(this.responseText);
                            t.videoImage = i[0].thumbnail_large, e(t.videoImage)
                        }
                    }, r.send(), r = null
                }
            }
        }, o.prototype.getIframe = function(t) {
            var i = this;
            i.$iframe ? t(i.$iframe) : i.onAPIready(function() {
                var o;
                if (i.$iframe || ((o = document.createElement("div")).style.display = "none"), "youtube" === i.type) {
                    i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.playerVars = {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0
                    }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1);
                    var r, a;
                    i.playerOptions.events = {
                        onReady: function(e) {
                            i.options.mute && e.target.mute(), i.options.autoplay && i.play(i.options.startTime), i.fire("ready", e)
                        },
                        onStateChange: function(e) {
                            i.options.loop && e.data === YT.PlayerState.ENDED && i.play(i.options.startTime), r || e.data !== YT.PlayerState.PLAYING || (r = 1, i.fire("started", e)), e.data === YT.PlayerState.PLAYING && i.fire("play", e), e.data === YT.PlayerState.PAUSED && i.fire("pause", e), e.data === YT.PlayerState.ENDED && i.fire("end", e), i.options.endTime && (e.data === YT.PlayerState.PLAYING ? a = setInterval(function() {
                                i.options.endTime && i.player.getCurrentTime() >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                            }, 150) : clearInterval(a))
                        }
                    };
                    var s = !i.$iframe;
                    if (s) {
                        var l = document.createElement("div");
                        l.setAttribute("id", i.playerID), o.appendChild(l), document.body.appendChild(o)
                    }
                    i.player = i.player || new e.YT.Player(i.playerID, i.playerOptions), s && (i.$iframe = document.getElementById(i.playerID), i.videoWidth = parseInt(i.$iframe.getAttribute("width"), 10) || 1280, i.videoHeight = parseInt(i.$iframe.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === i.type) {
                    i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=" + (i.options.autoplay ? "1" : "0"), i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), o.appendChild(i.$iframe), document.body.appendChild(o)), i.player = i.player || new Vimeo.Player(i.$iframe), i.player.getVideoWidth().then(function(e) {
                        i.videoWidth = e || 1280
                    }), i.player.getVideoHeight().then(function(e) {
                        i.videoHeight = e || 720
                    }), i.player.setVolume(i.options.mute ? 0 : 100);
                    var c;
                    i.player.on("timeupdate", function(e) {
                        c || i.fire("started", e), c = 1, i.options.endTime && i.options.endTime && e.seconds >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                    }), i.player.on("play", function(e) {
                        i.fire("play", e), i.options.startTime && 0 === e.seconds && i.play(i.options.startTime)
                    }), i.player.on("pause", function(e) {
                        i.fire("pause", e)
                    }), i.player.on("ended", function(e) {
                        i.fire("end", e)
                    }), i.player.on("loaded", function(e) {
                        i.fire("ready", e)
                    })
                }
                if ("local" === i.type) {
                    if (!i.$iframe) {
                        i.$iframe = document.createElement("video"), i.options.mute && (i.$iframe.muted = !0), i.options.loop && (i.$iframe.loop = !0), i.$iframe.setAttribute("id", i.playerID), o.appendChild(i.$iframe), document.body.appendChild(o);
                        for (var u in i.videoID) ! function(e, t, i) {
                            var n = document.createElement("source");
                            n.src = t, n.type = i, e.appendChild(n)
                        }(i.$iframe, i.videoID[u], "video/" + u)
                    }
                    i.player = i.player || i.$iframe;
                    var d;
                    n(i.player, "playing", function(e) {
                        d || i.fire("started", e), d = 1
                    }), n(i.player, "timeupdate", function() {
                        i.options.endTime && i.options.endTime && this.currentTime >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                    }), n(i.player, "play", function(e) {
                        i.fire("play", e)
                    }), n(i.player, "pause", function(e) {
                        i.fire("pause", e)
                    }), n(i.player, "ended", function(e) {
                        i.fire("end", e)
                    }), n(i.player, "loadedmetadata", function() {
                        i.videoWidth = this.videoWidth || 1280, i.videoHeight = this.videoHeight || 720, i.fire("ready"), i.options.autoplay && i.play(i.options.startTime)
                    })
                }
                t(i.$iframe)
            })
        }, o.prototype.init = function() {
            var e = this;
            e.playerID = "VideoWorker-" + e.ID
        };
        var r = 0,
            a = 0;
        o.prototype.loadAPI = function() {
            var t = this;
            if (!r || !a) {
                var i = "";
                if ("youtube" !== t.type || r || (r = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || a || (a = 1, i = "//player.vimeo.com/api/player.js"), i) {
                    "file://" === e.location.origin && (i = "http:" + i);
                    var n = document.createElement("script"),
                        o = document.getElementsByTagName("head")[0];
                    n.src = i, o.appendChild(n), o = null, n = null
                }
            }
        };
        var s = 0,
            l = 0,
            c = new i,
            u = new i;
        o.prototype.onAPIready = function(t) {
            var i = this;
            if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? t() : c.done(function() {
                    t()
                }) : (s = 1, e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeIframeAPIReady = null, c.resolve("done"), t()
                })), "vimeo" === i.type)
                if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? t() : u.done(function() {
                    t()
                });
                else {
                    l = 1;
                    var n = setInterval(function() {
                        "undefined" != typeof Vimeo && (clearInterval(n), u.resolve("done"), t())
                    }, 20)
                }
                "local" === i.type && t()
        }, e.VideoWorker = o
    }(window),
    function() {
        "use strict";
        if ("undefined" != typeof jarallax) {
            var e = jarallax.constructor,
                t = e.prototype.init;
            e.prototype.init = function() {
                var e = this;
                t.apply(e), e.video && e.video.getIframe(function(t) {
                    var i = t.parentNode;
                    e.css(t, {
                        position: e.image.position,
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        visibility: "hidden",
                        margin: 0,
                        zIndex: -1
                    }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
                })
            };
            var i = e.prototype.coverImage;
            e.prototype.coverImage = function() {
                var e = this;
                i.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
                    height: e.image.$item.getBoundingClientRect().height + 400 + "px",
                    marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
                })
            };
            var n = e.prototype.initImg;
            e.prototype.initImg = function() {
                var e = this,
                    t = n.apply(e);
                if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
                    var i = new VideoWorker(e.options.videoSrc, {
                        startTime: e.options.videoStartTime || 0,
                        endTime: e.options.videoEndTime || 0
                    });
                    if (i.isValid() && (e.image.useImgTag = !0, i.on("ready", function() {
                            var t = e.onScroll;
                            e.onScroll = function() {
                                t.apply(e), e.isVisible() ? i.play() : i.pause()
                            }
                        }), i.on("started", function() {
                            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.video.videoWidth || 1280, e.image.height = e.options.imgHeight = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                        }), e.video = i, "local" !== i.type && i.getImageURL(function(t) {
                            e.image.src = t, e.init()
                        })), "local" !== i.type) return !1;
                    if (!t) return e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
                }
                return t
            };
            var o = e.prototype.destroy;
            e.prototype.destroy = function() {
                var e = this;
                o.apply(e)
            }
        }
    }(), $.fn.mdb_autocomplete = function(e) {
        var t = {
            data: {}
        };
        return e = $.extend(t, e), this.each(function() {
            var t = $(this),
                i = e.data;
            if (Object.keys(i).length) {
                var n = $('<ul class="mdb-autocomplete-wrap"></ul>');
                n.insertAfter($(this))
            }
            t.on("keyup", function(e) {
                var o = t.val();
                if (n.empty(), o.length)
                    for (var r in i)
                        if (-1 !== i[r].toLowerCase().indexOf(o.toLowerCase())) {
                            var a = $("<li>" + i[r] + "</li>");
                            n.append(a)
                        }
                13 == e.which && (n.children(":first").trigger("click"), n.empty()), 0 == o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
            }), n.on("click", "li", function() {
                t.val($(this).text()), n.empty()
            }), $(".mdb-autocomplete-clear").on("click", function(e) {
                e.preventDefault(), t.val(""), $(this).css("visibility", "hidden"), n.empty(), $(this).parent().find("label").removeClass("active")
            })
        })
    };