/*! MagicMouse.js - v1.2.0
 * A lightweight javascript library to create some amazing effects for the mouse (cursor) on your website
 * https://github.com/dshongphuc/magic-mouse-js
 * Copyright (c) 2020 Phuc H. <dshongphuc@gmail.com> under MIT license; */
"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var STYLES = "\nbody #magicMouseCursor {\n  position: fixed;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  transition: transform 0.07s, width 0.3s, height 0.3s;\n  pointer-events: none; }\n  body #magicMouseCursor.cursor-square {\n    border-radius: 0; }\n\nbody #magicPointer {\n  height: 5px;\n  width: 5px;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: #fff;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: background 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s; }\n  body #magicPointer.is-hover {\n    background: red; }\n  body #magicPointer.pointer-blur {\n    height: 50px;\n    width: 50px;\n    background: none;\n    border: 1px solid #fff;\n    box-shadow: 0px 0px 15px -5px white; }\n  body #magicPointer.pointer-overlay {\n    height: 50px;\n    width: 50px;\n    mix-blend-mode: difference;\n    box-shadow: 0px 0px 15px -5px white; }\n\nbody .magic-hover {\n  transition: all 0.2s; }\n  body .magic-hover:hover {\n    cursor: none; }\n",
    magicMouse = function(e) {
        var t;
        if (!Modernizr.touchevents) {
            if ((e = e || {}).outerWidth = e.outerWidth || 30, e.outerHeight = e.outerHeight || 30, e.cursorOuter = e.cursorOuter || "circle-basic", e.hoverEffect = e.hoverEffect || "circle-move", e.hoverItemMove = e.hoverItemMove || !1, e.defaultCursor = e.defaultCursor || !1, "disable" != e.cursorOuter) {
                var o = document.createElement("div");
                o.setAttribute("id", "magicMouseCursor"), document.body.appendChild(o);
                var n = document.getElementById("magicMouseCursor");
                (t = document.createElement("style")).type = "text/css", t.innerText = STYLES, document.head.appendChild(t)
            }
            if (!e.defaultCursor) {
                document.body.style.cursor = "none";
                var r = document.createElement("div");
                r.setAttribute("id", "magicPointer"), document.body.appendChild(r);
                var i = document.getElementById("magicPointer")
            }
            if (n) {
                n.style.width = e.outerWidth + "px", n.style.height = e.outerHeight + "px";
                var s = e.outerWidth,
                    a = e.outerHeight,
                    c = e.outerWidth,
                    d = e.outerHeight
            }
            var u = 0,
                l = 0,
                f = 0,
                h = 0,
                p = !1;
            document.addEventListener("mousemove", (function(e) {
                f = e.clientX, h = e.clientY, setTimeout((function() {
                    p || (u = e.clientX - s / 2, l = e.clientY - a / 2)
                }), 50)
            })), document.querySelectorAll(".magic-hover").forEach((function(t, o) {
                t.addEventListener("mouseenter", (function(o) {
                    switch (e.hoverEffect) {
                        case "circle-move":
                            m(t), e.hoverItemMove && b(o, t);
                            break;
                        case "pointer-blur":
                            y(t, "pointer-blur");
                            break;
                        case "pointer-overlay":
                            y(t, "pointer-overlay")
                    }
                })), t.addEventListener("mouseleave", (function(o) {
                    switch (t.style.transform = "translate3d(0,0,0)", e.hoverEffect) {
                        case "circle-move":
                            v();
                            break;
                        case "pointer-blur":
                            g("pointer-blur");
                            break;
                        case "pointer-overlay":
                            g("pointer-overlay")
                    }
                }))
            })), document.querySelectorAll(".no-cursor").forEach((function(e, t) {
                e.addEventListener("mouseenter", (function(e) {
                    n.style.opacity = 0, i.style.opacity = 0, document.body.style.cursor = "auto"
                })), e.addEventListener("mouseleave", (function(e) {
                    n.style.opacity = 1, i.style.opacity = 1, document.body.style.cursor = "none"
                }))
            }));
            requestAnimationFrame((function e() {
                n && (n.style.transform = "matrix(1, 0, 0, 1, " + u + ", " + l + ")", n.style.width = s + "px", n.style.height = a + "px"), i && (i.style.transform = "matrix(1, 0, 0, 1, " + f + ", " + h + ") translate3d(-50%, -50%, 0)"), requestAnimationFrame(e)
            }));
            var m = function(e) {
                    if (p = !0, n) {
                        n.style.transition = "transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s", n.classList.add("is-hover");
                        var t = event.currentTarget.getBoundingClientRect();
                        e.classList.contains("magic-hover__square") ? (n.classList.add("cursor-square"), u = t.left, l = t.top, s = t.width, a = t.height) : (u = t.left, l = t.top, s = t.width, a = t.height)
                    }
                    i && i.classList.add("is-hover")
                },
                v = function() {
                    p = !1, n && (s = c, a = d, n.style.transition = "transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s", n.classList.remove("cursor-square"), n.classList.remove("is-hover")), i && i.classList.remove("is-hover")
                },
                y = function(e, t) {
                    i && i.classList.add(t)
                },
                g = function(e) {
                    i && i.classList.remove(e)
                },
                b = function(e, t) {
                    e.clientX, e.clientY, t.addEventListener("mousemove", (function(e) {
                        t.style.transform = "matrix(1,0,0,1," + (e.offsetX - e.target.offsetWidth / 2) / 2 + ", " + (e.offsetY - e.target.offsetHeight / 2) / 2 + ")"
                    }))
                }
        }
    };
! function(e, t, o) {
    function n(e, t) {
        return _typeof(e) === t
    }

    function r() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : f ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function i() {
        var e = t.body;
        return e || ((e = r(f ? "svg" : "body")).fake = !0), e
    }
    var s = [],
        a = [],
        c = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var o = this;
                setTimeout((function() {
                    t(o[e])
                }), 0)
            },
            addTest: function(e, t, o) {
                a.push({
                    name: e,
                    fn: t,
                    options: o
                })
            },
            addAsyncTest: function(e) {
                a.push({
                    name: null,
                    fn: e
                })
            }
        },
        d = function() {};
    d.prototype = c, d = new d;
    var u = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    c._prefixes = u;
    var l = t.documentElement,
        f = "svg" === l.nodeName.toLowerCase(),
        h = c.testStyles = function(e, o, n, s) {
            var a, c, d, u, f = "modernizr",
                h = r("div"),
                p = i();
            if (parseInt(n, 10))
                for (; n--;)(d = r("div")).id = s ? s[n] : f + (n + 1), h.appendChild(d);
            return (a = r("style")).type = "text/css", a.id = "s" + f, (p.fake ? p : h).appendChild(a), p.appendChild(h), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), h.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = l.style.overflow, l.style.overflow = "hidden", l.appendChild(p)), c = o(h, e), p.fake ? (p.parentNode.removeChild(p), l.style.overflow = u, l.offsetHeight) : h.parentNode.removeChild(h), !!c
        };
    d.addTest("touchevents", (function() {
            var o;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) o = !0;
            else {
                var n = ["@media (", u.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                h(n, (function(e) {
                    o = 9 === e.offsetTop
                }))
            }
            return o
        })),
        function() {
            var e, t, o, r, i, c;
            for (var u in a)
                if (a.hasOwnProperty(u)) {
                    if (e = [], (t = a[u]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (o = 0; o < t.options.aliases.length; o++) e.push(t.options.aliases[o].toLowerCase());
                    for (r = n(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) 1 === (c = e[i].split(".")).length ? d[c[0]] = r : (!d[c[0]] || d[c[0]] instanceof Boolean || (d[c[0]] = new Boolean(d[c[0]])), d[c[0]][c[1]] = r), s.push((r ? "" : "no-") + c.join("-"))
                }
        }(),
        function(e) {
            var t = l.className,
                o = d._config.classPrefix || "";
            if (f && (t = t.baseVal), d._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + o + "no-js(\\s|$)");
                t = t.replace(n, "$1" + o + "js$2")
            }
            d._config.enableClasses && (t += " " + o + e.join(" " + o), f ? l.className.baseVal = t : l.className = t)
        }(s), delete c.addTest, delete c.addAsyncTest;
    for (var p = 0; p < d._q.length; p++) d._q[p]();
    e.Modernizr = d
}(window, document);