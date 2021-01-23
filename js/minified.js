! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        T = E.document,
        i = Object.getPrototypeOf,
        s = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        c = a.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        C = function(e, t) {
            return new C.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: f,
        constructor: C,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        first: function() {
            return this.eq(0)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, a[t] = C.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, C.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || a.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) != a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                a = [];
            if (h(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return m.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, h, _, o, a, p, d, g, w, l, c, x, E, s, T, m, u, v, y, C = "sizzle" + 1 * new Date,
            b = n.document,
            S = 0,
            i = 0,
            D = le(),
            A = le(),
            k = le(),
            N = le(),
            I = function(e, t) {
                return e === t && (c = !0), 0
            },
            O = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            L = t.push,
            M = t.push,
            H = t.slice,
            P = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
            B = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            U = new RegExp(R + "+", "g"),
            V = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            $ = new RegExp("^" + R + "*," + R + "*"),
            Q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            K = new RegExp(R + "|>"),
            z = new RegExp(B),
            Y = new RegExp("^" + F + "$"),
            X = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ae = _e(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply(t = H.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: t.length ? function(e, t) {
                    L.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, i) {
            var r, o, a, s, l, c, u, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== E && x(t), t = t || E, T)) {
                if (11 !== d && (l = te.exec(e)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (f && (a = f.getElementById(r)) && y(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (l[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(r)), n
                    } if (h.qsa && !N[e + " "] && (!m || !m.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, f = t, 1 === d && K.test(e)) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(re, oe) : t.setAttribute("id", s = C), o = (c = p(e)).length; o--;) c[o] = "#" + s + " " + be(c[o]);
                        u = c.join(","), f = ne.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return M.apply(n, f.querySelectorAll(u)), n
                    } catch (t) {
                        N(e, !0)
                    } finally {
                        s === C && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(V, "$1"), t, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ce(e) {
            return e[C] = !0, e
        }

        function ue(e) {
            var t = E.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }


        function he(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(a) {
            return ce(function(o) {
                return o = +o, ce(function(e, t) {
                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        for (e in h = se.support = {}, a = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !G.test(t || n && n.nodeName || "HTML")
            }, x = se.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : b;
                return i !== E && 9 === i.nodeType && i.documentElement && (s = (E = i).documentElement, T = !a(E), b !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), h.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = ue(function(e) {
                    return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = ee.test(E.getElementsByClassName), h.getById = ue(function(e) {
                    return s.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length
                }), h.getById ? (_.filter.ID = function(e) {
                    var t = e.replace(ie, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (_.filter.ID = function(e) {
                    var n = e.replace(ie, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), _.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, _.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
                }, u = [], m = [], (h.qsa = ee.test(E.querySelectorAll)) && (ue(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = E.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = ee.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function(e) {
                    h.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", B)
                }), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), t = ee.test(s.compareDocumentPosition), y = t || ee.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === b && y(b, e) ? -1 : t === E || t.ownerDocument === b && y(b, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!r || !o) return e === E ? -1 : t === E ? 1 : r ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                    if (r === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? de(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0
                }), E
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== E && x(e), h.matchesSelector && T && !N[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
                    var n = v.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, E, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== E && x(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== E && x(e);
                var n = _.attrHandle[t.toLowerCase()],
                    i = n && O.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== i ? i : h.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, oe)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(I), c) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (_ = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ie, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = D[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && D(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(U, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, a, s, l, c = v != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                h = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (a = e; a = a[c];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        l = c = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && d) {
                                    for (h = (s = (i = (r = (o = (a = u)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) {
                                            r[p] = [S, s, h];
                                            break
                                        }
                                } else if (d && (h = s = (i = (r = (o = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[c] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (d && ((r = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [S, h]), a !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                            for (var n, i = a(e, o), r = i.length; r--;) e[n = P(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var i = [],
                            r = [],
                            s = d(e.replace(V, "$1"));
                        return s[C] ? ce(function(e, t, n, i) {
                            for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ce(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: ce(function(t) {
                        return t = t.replace(ie, f),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: ce(function(n) {
                        return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = _.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[e] = he(e);
        for (e in {
                submit: !0,
                reset: !0
            }) _.pseudos[e] = pe(e);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function _e(s, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                f = t && "parentNode" === u,
                d = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, o, a = [S, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === S && i[1] === d) return a[2] = i[2];
                                if ((r[u] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function xe(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function Ee(h, p, g, m, v, e) {
            return m && !m[C] && (m = Ee(m)), v && !v[C] && (v = Ee(v, e)), ce(function(e, t, n, i) {
                var r, o, a, s = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && p ? u : xe(u, s, h, n, i),
                    d = g ? v || (e ? h : c || m) ? [] : t : f;
                if (g && g(f, d, n, i), m)
                    for (r = xe(d, l), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (d[l[o]] = !(f[l[o]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = d.length; o--;)(a = d[o]) && r.push(f[o] = a);
                            v(null, d = [], r, i)
                        }
                        for (o = d.length; o--;)(a = d[o]) && -1 < (r = v ? P(e, a) : s[o]) && (e[r] = !(t[r] = a))
                    }
                } else d = xe(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, i) : M.apply(t, d)
            })
        }

        function Te(e) {
            for (var r, t, n, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = _e(function(e) {
                    return e === r
                }, a, !0), c = _e(function(e) {
                    return -1 < P(r, e)
                }, a, !0), u = [function(e, t, n) {
                    var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return r = null, i
                }]; s < i; s++)
                if (t = _.relative[e[s].type]) u = [_e(we(u), t)];
                else {
                    if ((t = _.filter[e[s].type].apply(null, e[s].matches))[C]) {
                        for (n = ++s; n < i && !_.relative[e[n].type]; n++);
                        return Ee(1 < s && we(u), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(V, "$1"), t, s < n && Te(e.slice(s, n)), n < i && Te(e = e.slice(n)), n < i && be(e))
                    }
                    u.push(t)
                } return we(u)
        }
        return ye.prototype = _.filters = _.pseudos, _.setFilters = new ye, p = se.tokenize = function(e, t) {
            var n, i, r, o, a, s, l, c = A[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = _.preFilter; a;) {
                for (o in n && !(i = $.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = Q.exec(a)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(V, " ")
                    }), a = a.slice(n.length)), _.filter) !(i = X[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : A(e, s).slice(0)
        }, d = se.compile = function(e, t) {
            var n, m, v, y, b, i, r = [],
                o = [],
                a = k[e + " "];
            if (!a) {
                for (n = (t = t || p(e)).length; n--;)(a = Te(t[n]))[C] ? r.push(a) : o.push(a);
                (a = k(e, (m = o, y = 0 < (v = r).length, b = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, a, s, l = 0,
                        c = "0",
                        u = e && [],
                        f = [],
                        d = w,
                        h = e || b && _.find.TAG("*", r),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (r && (w = t === E || t || r); c !== g && null != (o = h[c]); c++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument === E || (x(o), n = !T); s = m[a++];)
                                if (s(o, t || E, n)) {
                                    i.push(o);
                                    break
                                } r && (S = p)
                        }
                        y && ((o = !s && o) && l--, e && u.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (a = 0; s = v[a++];) s(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || f[c] || (f[c] = j.call(i));
                            f = xe(f)
                        }
                        M.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && se.uniqueSort(i)
                    }
                    return r && (S = p, w = d), u
                }, y ? ce(i) : i))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                u = !i && p(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(a.matches[0].replace(ie, f), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                    if ((l = _.find[s]) && (i = l(a.matches[0].replace(ie, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && be(o))) return M.apply(n, i), n;
                        break
                    }
            }
            return (c || d(e, u))(i, t, !T, n, !t || ne.test(e) && ve(t.parentNode) || t), n
        }, h.sortStable = C.split("").sort(I).join("") === C, h.detectDuplicates = !!c, x(), h.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(q, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), se
    }(E);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;

    function x(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && C(e).is(n)) break;
                i.push(e)
            } return i
    }

    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var D = C.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, i) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && D.test(e) ? C(e) : e || [], !1).length
        }
    });
    var I, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || I, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), k.test(i[1]) && C.isPlainObject(t))
                for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = T.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = C.fn, I = C(T);
    var j = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && C(e);
            if (!D.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && b(r = e.promise) ? r.call(e).done(t).fail(n) : e && b(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);

        function r() {
            for (s = s || i.once, a = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1), o = !1, s && (l = t ? [] : "")
        }
        var o, t, a, s, l = [],
            c = [],
            u = -1,
            f = {
                add: function() {
                    return l && (t && !o && (u = l.length - 1, c.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            b(t) ? i.unique && f.has(t) || l.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !o && r()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return s = c = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return s = c = [], t || o || (l = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), o || r()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return f
    }, C.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                a = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return C.Deferred(function(i) {
                            C.each(o, function(e, t) {
                                var n = b(r[t[4]]) && r[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(r, o, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, c(l, o, P, s), c(l, o, q, s)) : (l++, t.call(e, c(l, o, P, s), c(l, o, q, s), c(l, o, P, o.notifyWith))) : (a !== P && (n = void 0, i = [e]), (s || o.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (a !== q && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            o[0][3].add(c(0, e, b(i) ? i : P, e.notifyWith)), o[1][3].add(c(0, e, b(t) ? t : P)), o[2][3].add(c(0, e, b(n) ? n : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, a) : a
                    }
                },
                s = {};
            return C.each(o, function(e, t) {
                var n = t[2],
                    i = t[5];
                a[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(r, o)
                }
            }
            var n = arguments.length,
                i = n,
                r = Array(i),
                o = s.call(arguments),
                a = C.Deferred();
            if (n <= 1 && (R(e, a.done(t(i)).resolve, a.reject, !n), "pending" === a.state() || b(o[i] && o[i].then))) return a.then();
            for (; i--;) R(o[i], t(i), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        E.console && E.console.warn && e && F.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function(e) {
        E.setTimeout(function() {
            throw e
        })
    };
    var W = C.Deferred();

    function B() {
        T.removeEventListener("DOMContentLoaded", B), E.removeEventListener("load", B), C.ready()
    }
    C.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || W.resolveWith(T, [C])
        }
    }), C.ready.then = W.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? E.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", B), E.addEventListener("load", B));
    var U = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === w(n))
                for (s in r = !0, n) U(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, b(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                    return c.call(C(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        V = /^-ms-/,
        $ = /-([a-z])/g;

    function Q(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(V, "ms-").replace($, Q)
    }

    function z(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = C.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[K(t)] = n;
            else
                for (i in t) r[K(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var X = new Y,
        G = new Y,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : U(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = K(i.slice(5)), ee(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                C.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(a, [a])
            }
            var i, r = 1,
                o = C.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = X.get(a[s], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = T.documentElement,
        oe = function(e) {
            return C.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    re.getRootNode && (oe = function(e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });

    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
    }

    function le(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
        return r
    }

    function ce(e, t, n, i) {
        var r, o, a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ne.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) C.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, C.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ue = {};

    function fe(e, t) {
        for (var n, i, r, o, a, s, l, c = [], u = 0, f = e.length; u < f; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = X.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = ue[s]) || (o = a.body.appendChild(a.createElement(s)), l = C.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[s] = l)))) : "none" !== n && (c[u] = "none", X.set(i, "display", n)));
        for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    C.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, _e = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var o, a, s, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            C.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (c = oe(o), a = me(f.appendChild(o), "script"), c && ve(a), n)
            for (u = 0; o = a[u++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    ye = T.createDocumentFragment().appendChild(T.createElement("div")), (be = T.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var xe = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Se() {
        return !1
    }

    function De(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function(e) {
            return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, r, i, n)
        })
    }

    function ke(e, r, o) {
        o ? (X.set(e, r, !1), C.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = X.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)(C.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = s.call(arguments), X.set(this, r, i), t = o(this, r), this[r](), i !== (n = X.get(this, r)) || t ? X.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else i.length && (X.set(this, r, {
                    value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, r) && C.event.add(e, r, Ce)
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, c, u, f, d, h, p, g, m = X.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(re, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(H) || [""]).length; c--;) h = g = (s = Te.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, u = C.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, f, d, h, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--;)
                    if (h = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = C.event.fix(e),
                l = new Array(arguments.length),
                c = (X.get(this, "events") || {})[s.type] || [],
                u = C.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = C.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && A(t, "input") && ke(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && A(t, "input") && ke(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && A(t, "input") && X.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        C.event.special[e] = {
            setup: function() {
                return ke(this, e, De), !1
            },
            trigger: function() {
                return ke(this, e), !0
            },
            delegateType: t
        }
    }), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, i) {
            return Ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                C.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) C.event.add(t, r, c[r][n]);
            G.hasData(e) && (s = G.access(e), l = C.extend({}, s), G.set(t, l))
        }
    }

    function qe(n, i, r, o) {
        i = m.apply([], i);
        var e, t, a, s, l, c, u = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = b(h);
        if (p || 1 < f && "string" == typeof h && !y.checkClone && Oe.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), qe(t, i, r, o)
        });
        if (f && (t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = C.map(me(e, "script"), Me)).length; u < f; u++) l = e, u !== d && (l = C.clone(l, !0, !0), s && C.merge(a, me(l, "script"))), r.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument, C.map(a, He), u = 0; u < s; u++) l = a[u], pe.test(l.type || "") && !X.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : _(l.textContent.replace(je, ""), l, c))
        }
        return n
    }

    function Re(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = me(u), i = 0, r = (o = me(e)).length; i < r; i++) s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), i = 0, r = o.length; i < r; i++) Pe(o[i], a[i]);
                else Pe(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !f && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[a](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Fe, We, Be, Ue, Ve, $e, Qe, Ke = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = E), t.getComputedStyle(e)
        },
        Ye = new RegExp(ie.join("|"), "i");

    function Xe(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = C.style(e, t)), !y.pixelBoxStyles() && Ke.test(a) && Ye.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ge(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Je() {
        if (Qe) {
            $e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Qe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild($e).appendChild(Qe);
            var e = E.getComputedStyle(Qe);
            Fe = "1%" !== e.top, Ve = 12 === Ze(e.marginLeft), Qe.style.right = "60%", Ue = 36 === Ze(e.right), We = 36 === Ze(e.width), Qe.style.position = "absolute", Be = 12 === Ze(Qe.offsetWidth / 3), re.removeChild($e), Qe = null
        }
    }

    function Ze(e) {
        return Math.round(parseFloat(e))
    }
    $e = T.createElement("div"), (Qe = T.createElement("div")).style && (Qe.style.backgroundClip = "content-box", Qe.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Qe.style.backgroundClip, C.extend(y, {
        boxSizingReliable: function() {
            return Je(), We
        },
        pixelBoxStyles: function() {
            return Je(), Ue
        },
        pixelPosition: function() {
            return Je(), Fe
        },
        reliableMarginLeft: function() {
            return Je(), Ve
        },
        scrollboxSize: function() {
            return Je(), Be
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = T.createElement("div").style,
        nt = {};

    function it(e) {
        return C.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var rt = /^(none|table(?!-c[ea]).+)/,
        ot = /^--/,
        at = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        st = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ct(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += C.css(e, n + ie[a], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ie[a], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ie[a] + "Width", !0, r))) : (l += C.css(e, "padding" + ie[a], !0, r), "padding" !== n ? l += C.css(e, "border" + ie[a] + "Width", !0, r) : s += C.css(e, "border" + ie[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function ut(e, t, n) {
        var i = ze(e),
            r = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            o = r,
            a = Xe(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ke.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ct(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
    }

    function ft(e, t, n, i, r) {
        return new ft.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = K(t),
                    l = ot.test(t),
                    c = e.style;
                if (l || (t = it(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = K(t);
            return ot.test(t) || (t = it(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Xe(e, t, i)), "normal" === r && t in st && (r = st[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), C.each(["height", "width"], function(e, l) {
        C.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !rt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, l, n) : le(e, at, function() {
                    return ut(e, l, n)
                })
            },
            set: function(e, t, n) {
                var i, r = ze(e),
                    o = !y.scrollboxSize() && "absolute" === r.position,
                    a = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    s = n ? ct(e, l, n, a, r) : 0;
                return a && o && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - ct(e, l, "border", !1, r) - .5)), s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = C.css(e, l)), lt(0, t, s)
            }
        }
    }), C.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        C.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (C.cssHooks[r + o].set = lt)
    }), C.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (i = ze(e), r = t.length; a < r; a++) o[t[a]] = C.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = ft).prototype = {
        constructor: ft,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ft.propHooks[this.prop];
            return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ft.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this
        }
    }).init.prototype = ft.prototype, (ft.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ft.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = ft.prototype.init, C.fx.step = {};
    var dt, ht, pt, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;

    function yt() {
        ht && (!1 === T.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(yt) : E.setTimeout(yt, C.fx.interval), C.fx.tick())
    }

    function bt() {
        return E.setTimeout(function() {
            dt = void 0
        }), dt = Date.now()
    }

    function _t(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function wt(e, t, n) {
        for (var i, r = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function xt(o, e, t) {
        var n, a, i = 0,
            r = xt.prefilters.length,
            s = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = dt || bt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return s.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c]), !1)
            },
            c = s.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: dt || bt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = xt.prefilters[i].call(c, o, u, c.opts)) return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(u, wt, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    C.Animation = C.extend(xt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = b(e) ? (t = e, ["*"]) : e.match(H)).length; i < r; i++) n = e[i], xt.tweeners[n] = xt.tweeners[n] || [], xt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, a, s, l, c, u, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && se(e),
                m = X.get(e, "fxshow");
            for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (r = t[i], mt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || C.style(e, i)
                } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = X.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = C.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && fe([e], !0), d.done(function() {
                    for (i in g || fe([e]), X.remove(e, "fxshow"), h) C.style(e, i, h[i])
                })), l = wt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? xt.prefilters.unshift(e) : xt.prefilters.push(e)
        }
    }), C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
        }, i
    }, C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = xt(this, C.extend({}, t), a);
                (o || X.get(this, "finish")) && e.stop(!0)
            }
            var o = C.isEmptyObject(t),
                a = C.speed(e, n, i);
            return r.finish = r, o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(r, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = C.timers,
                    i = X.get(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && vt.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, r)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    r = C.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(_t(i, !0), e, t, n)
        }
    }), C.each({
        slideDown: _t("show"),
        slideUp: _t("hide"),
        slideToggle: _t("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), dt = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function() {
        ht || (ht = !0, yt())
    }, C.fx.stop = function() {
        ht = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = E.setTimeout(e, i);
            t.stop = function() {
                E.clearTimeout(n)
            }
        })
    }, pt = T.createElement("input"), gt = T.createElement("select").appendChild(T.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = gt.selected, (pt = T.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
    var Et, Tt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return U(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), Et = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = Tt[t] || C.find.attr;
        Tt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = Tt[o], Tt[o] = i, i = null != a(e, t, n) ? o : null, Tt[o] = r), i
        }
    });
    var Ct = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;

    function Dt(e) {
        return (e.match(H) || []).join(" ")
    }

    function At(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return U(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (b(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, At(this)))
            });
            if ((e = kt(t)).length)
                for (; n = this[l++];)
                    if (r = At(n), i = 1 === n.nodeType && " " + Dt(r) + " ") {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = Dt(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (b(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, At(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = kt(t)).length)
                for (; n = this[l++];)
                    if (r = At(n), i = 1 === n.nodeType && " " + Dt(r) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = Dt(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                a = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : b(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, At(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (a)
                    for (t = 0, n = C(this), i = kt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != o || ((e = At(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Dt(At(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Nt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Nt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : Dt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = C.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in E;

    function It(e) {
        e.stopPropagation()
    }
    var Ot = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, o, a, s, l, c, u, f, d = [n || T],
                h = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (s = u.delegateType || h, Ot.test(s + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || T) && d.push(a.defaultView || a.parentWindow || E)
                }
                for (r = 0;
                    (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? s : u.bindType || h, (c = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && z(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !z(n) || l && b(n[h]) && !g(n) && ((a = n[l]) && (n[l] = null), C.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, It), n[h](), e.isPropagationStopped() && f.removeEventListener(h, It), C.event.triggered = void 0, a && (n[l] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    }), y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i);
                t || e.addEventListener(n, r, !0), X.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i) - 1;
                t ? X.access(e, i, t) : (e.removeEventListener(n, r, !0), X.remove(e, i))
            }
        }
    });
    var jt = E.location,
        Lt = Date.now(),
        Mt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new E.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Ht = /\[\]$/,
        Pt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;

    function Ft(n, e, i, r) {
        var t;
        if (Array.isArray(e)) C.each(e, function(e, t) {
            i || Ht.test(n) ? r(n, t) : Ft(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) Ft(n + "[" + t + "]", e[t], i, r)
    }
    C.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) Ft(i, e[i], t, n);
        return r.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !qt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Pt, "\r\n")
                }
            }).get()
        }
    });
    var Wt = /%20/g,
        Bt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Kt = {},
        zt = {},
        Yt = "*/".concat("*"),
        Xt = T.createElement("a");

    function Gt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(H) || [];
            if (b(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Jt(t, r, o, a) {
        var s = {},
            l = t === zt;

        function c(e) {
            var i;
            return s[e] = !0, C.each(t[e] || [], function(e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !s["*"] && c("*")
    }

    function Zt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    Xt.href = jt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, C.ajaxSettings), t) : Zt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Gt(Kt),
        ajaxTransport: Gt(zt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, f, d, n, h, i, p, g, r, o, m = C.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                b = C.Deferred(),
                _ = C.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Vt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) x.always(e[x.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(x), m.url = ((e || m.url || jt.href) + "").replace(Qt, jt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Xt.protocol + "//" + Xt.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Jt(Kt, m, t, x), p) return x;
            for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !$t.test(m.type), f = m.url.replace(Bt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Wt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Mt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ut, "$1"), o = (Mt.test(f) ? "&" : "?") + "_=" + Lt++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && x.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && x.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || p)) return x.abort();
            if (l = "abort", _.add(m.complete), x.done(m.success), x.fail(m.error), u = Jt(zt, m, t, x)) {
                if (x.readyState = 1, g && y.trigger("ajaxSend", [x, m]), p) return x;
                m.async && 0 < m.timeout && (h = E.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, u.send(a, c)
                } catch (e) {
                    if (p) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, i) {
                var r, o, a, s, l, c = t;
                p || (p = !0, h && E.clearTimeout(h), u = void 0, d = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a = a || r
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, x, n)), s = function(e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = x.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, x]) : b.rejectWith(v, [x, c, a]), x.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : a]), _.fireWith(v, [x, c]), g && (y.trigger("ajaxComplete", [x, m]), --C.active || C.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function(e, t) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                C.globalEval(e, t)
            }
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new E.XMLHttpRequest
        } catch (e) {}
    };
    var en = {
            0: 200,
            1223: 204
        },
        tn = C.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, C.ajaxTransport(function(r) {
        var o, a;
        if (y.cors || tn && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(en[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                    4 === i.readyState && E.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = C("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var nn, rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || C.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || C.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = E[i], E[i] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === r ? C(E).removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, rn.push(i)), o && b(r) && r(o[0]), o = r = void 0
        }), "script"
    }), y.createHTMLDocument = ((nn = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), o = !n && [], (r = k.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
        var i, r, o
    }, C.fn.load = function(e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = Dt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c = C.css(e, "position"),
                u = C(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Ge(y.pixelPosition, function(e, t) {
            if (t) return t = Xe(e, n), Ke.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        C.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, s, n ? e : void 0, n)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = s.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, r
    }, C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = b, C.isWindow = g, C.camelCase = K, C.type = w, C.now = Date.now, C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var an = E.jQuery,
        sn = E.$;
    return C.noConflict = function(e) {
        return E.$ === C && (E.$ = sn), e && E.jQuery === C && (E.jQuery = an), C
    }, e || (E.jQuery = E.$ = C), C
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function a(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var t = "transitionend";
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        a = o && g.isElement(o) ? "element" : (s = o, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                } var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e), this
    }, p.event.special[g.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n, r = "alert",
        s = "bs.alert",
        l = "." + s,
        c = p.fn[r],
        u = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        },
        f = ((n = d.prototype).close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, n.dispose = function() {
            p.removeData(this._element, s), this._element = null
        }, n._getRootElement = function(e) {
            var t = g.getSelectorFromElement(e),
                n = !1;
            return t && (n = document.querySelector(t)), n = n || p(e).closest(".alert")[0]
        }, n._triggerCloseEvent = function(e) {
            var t = p.Event(u.CLOSE);
            return p(e).trigger(t), t
        }, n._removeElement = function(t) {
            var n = this;
            if (p(t).removeClass("show"), p(t).hasClass("fade")) {
                var e = g.getTransitionDurationFromElement(t);
                p(t).one(g.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else this._destroyElement(t)
        }, n._destroyElement = function(e) {
            p(e).detach().trigger(u.CLOSED).remove()
        }, d._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(s);
                t || (t = new d(this), e.data(s, t)), "close" === n && t[n](this)
            })
        }, d._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, o(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), d);

    function d(e) {
        this._element = e
    }
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), p.fn[r] = f._jQueryInterface, p.fn[r].Constructor = f, p.fn[r].noConflict = function() {
        return p.fn[r] = c, f._jQueryInterface
    };
    var h, m = "button",
        v = "bs.button",
        y = "." + v,
        b = ".data-api",
        _ = p.fn[m],
        w = "active",
        x = '[data-toggle^="button"]',
        E = {
            CLICK_DATA_API: "click" + y + b,
            FOCUS_BLUR_DATA_API: "focus" + y + b + " blur" + y + b
        },
        T = ((h = C.prototype).toggle = function() {
            var e = !0,
                t = !0,
                n = p(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector('input:not([type="hidden"])');
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(w)) e = !1;
                        else {
                            var r = n.querySelector(".active");
                            r && p(r).removeClass(w)
                        } if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(w), p(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), e && p(this._element).toggleClass(w)
        }, h.dispose = function() {
            p.removeData(this._element, v), this._element = null
        }, C._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(v);
                e || (e = new C(this), p(this).data(v, e)), "toggle" === t && e[t]()
            })
        }, o(C, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), C);

    function C(e) {
        this._element = e
    }
    p(document).on(E.CLICK_DATA_API, x, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass("btn") || (t = p(t).closest(".btn")), T._jQueryInterface.call(p(t), "toggle")
    }).on(E.FOCUS_BLUR_DATA_API, x, function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), p.fn[m] = T._jQueryInterface, p.fn[m].Constructor = T, p.fn[m].noConflict = function() {
        return p.fn[m] = _, T._jQueryInterface
    };
    var S, D = "carousel",
        A = "bs.carousel",
        k = "." + A,
        N = ".data-api",
        I = p.fn[D],
        O = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        j = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        L = "next",
        M = "prev",
        H = {
            SLIDE: "slide" + k,
            SLID: "slid" + k,
            KEYDOWN: "keydown" + k,
            MOUSEENTER: "mouseenter" + k,
            MOUSELEAVE: "mouseleave" + k,
            TOUCHSTART: "touchstart" + k,
            TOUCHMOVE: "touchmove" + k,
            TOUCHEND: "touchend" + k,
            POINTERDOWN: "pointerdown" + k,
            POINTERUP: "pointerup" + k,
            DRAG_START: "dragstart" + k,
            LOAD_DATA_API: "load" + k + N,
            CLICK_DATA_API: "click" + k + N
        },
        P = "active",
        q = ".active.carousel-item",
        R = {
            TOUCH: "touch",
            PEN: "pen"
        },
        F = ((S = W.prototype).next = function() {
            this._isSliding || this._slide(L)
        }, S.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }, S.prev = function() {
            this._isSliding || this._slide(M)
        }, S.pause = function(e) {
            e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, S.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, S.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(q);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) p(this._element).one(H.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? L : M;
                    this._slide(i, this._items[e])
                }
        }, S.dispose = function() {
            p(this._element).off(k), p.removeData(this._element, A), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, S._getConfig = function(e) {
            return e = a({}, O, e), g.typeCheckConfig(D, e, j), e
        }, S._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                0 < t && this.prev(), t < 0 && this.next()
            }
        }, S._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(H.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && p(this._element).on(H.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(H.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), this._config.touch && this._addTouchEventListeners()
        }, S._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var t = function(e) {
                        n._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                    },
                    i = function(e) {
                        n._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                            return n.cycle(e)
                        }, 500 + n._config.interval))
                    };
                p(this._element.querySelectorAll(".carousel-item img")).on(H.DRAG_START, function(e) {
                    return e.preventDefault()
                }), this._pointerEvent ? (p(this._element).on(H.POINTERDOWN, function(e) {
                    return t(e)
                }), p(this._element).on(H.POINTERUP, function(e) {
                    return i(e)
                }), this._element.classList.add("pointer-event")) : (p(this._element).on(H.TOUCHSTART, function(e) {
                    return t(e)
                }), p(this._element).on(H.TOUCHMOVE, function(e) {
                    var t;
                    (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                }), p(this._element).on(H.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }, S._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, S._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
        }, S._getItemByDirection = function(e, t) {
            var n = e === L,
                i = e === M,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var a = (r + (e === M ? -1 : 1)) % this._items.length;
            return -1 == a ? this._items[this._items.length - 1] : this._items[a]
        }, S._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(this._element.querySelector(q)),
                r = p.Event(H.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
            return p(this._element).trigger(r), r
        }, S._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                p(t).removeClass(P);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass(P)
            }
        }, S._slide = function(e, t) {
            var n, i, r, o = this,
                a = this._element.querySelector(q),
                s = this._getItemIndex(a),
                l = t || a && this._getItemByDirection(e, a),
                c = this._getItemIndex(l),
                u = Boolean(this._interval);
            if (r = e === L ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && p(l).hasClass(P)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && a && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var f = p.Event(H.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: s,
                    to: c
                });
                if (p(this._element).hasClass("slide")) {
                    p(l).addClass(i), g.reflow(l), p(a).addClass(n), p(l).addClass(n);
                    var d = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, d) : this._config.defaultInterval || this._config.interval;
                    var h = g.getTransitionDurationFromElement(a);
                    p(a).one(g.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass(P), p(a).removeClass(P + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                            return p(o._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(h)
                } else p(a).removeClass(P), p(l).addClass(P), this._isSliding = !1, p(this._element).trigger(f);
                u && this.cycle()
            }
        }, W._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(A),
                    t = a({}, O, p(this).data());
                "object" == typeof i && (t = a({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new W(this, t), p(this).data(A, e)), "number" == typeof i) e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else t.interval && t.ride && (e.pause(), e.cycle())
            })
        }, W._dataApiClickHandler = function(e) {
            var t = g.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass("carousel")) {
                    var i = a({}, p(n).data(), p(this).data()),
                        r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), W._jQueryInterface.call(p(n), i), r && p(n).data(A).to(r), e.preventDefault()
                }
            }
        }, o(W, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return O
            }
        }]), W);

    function W(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
    }
    p(document).on(H.CLICK_DATA_API, "[data-slide], [data-slide-to]", F._dataApiClickHandler), p(window).on(H.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            F._jQueryInterface.call(i, i.data())
        }
    }), p.fn[D] = F._jQueryInterface, p.fn[D].Constructor = F, p.fn[D].noConflict = function() {
        return p.fn[D] = I, F._jQueryInterface
    };
    var B, U = "collapse",
        V = "bs.collapse",
        $ = "." + V,
        Q = p.fn[U],
        K = {
            toggle: !0,
            parent: ""
        },
        z = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Y = {
            SHOW: "show" + $,
            SHOWN: "shown" + $,
            HIDE: "hide" + $,
            HIDDEN: "hidden" + $,
            CLICK_DATA_API: "click" + $ + ".data-api"
        },
        X = "show",
        G = "collapse",
        J = "collapsing",
        Z = "collapsed",
        ee = '[data-toggle="collapse"]',
        te = ((B = ne.prototype).toggle = function() {
            p(this._element).hasClass(X) ? this.hide() : this.show()
        }, B.show = function() {
            var e, t, n = this;
            if (!(this._isTransitioning || p(this._element).hasClass(X) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                    return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(G)
                })).length && (e = null), e && (t = p(e).not(this._selector).data(V)) && t._isTransitioning))) {
                var i = p.Event(Y.SHOW);
                if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                    e && (ne._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(V, null));
                    var r = this._getDimension();
                    p(this._element).removeClass(G).addClass(J), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(Z).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                        a = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        p(n._element).removeClass(J).addClass(G).addClass(X), n._element.style[r] = "", n.setTransitioning(!1), p(n._element).trigger(Y.SHOWN)
                    }).emulateTransitionEnd(a), this._element.style[r] = this._element[o] + "px"
                }
            }
        }, B.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(X)) {
                var t = p.Event(Y.HIDE);
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p(this._element).addClass(J).removeClass(G).removeClass(X);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r],
                                a = g.getSelectorFromElement(o);
                            null !== a && (p([].slice.call(document.querySelectorAll(a))).hasClass(X) || p(o).addClass(Z).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var s = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        e.setTransitioning(!1), p(e._element).removeClass(J).addClass(G).trigger(Y.HIDDEN)
                    }).emulateTransitionEnd(s)
                }
            }
        }, B.setTransitioning = function(e) {
            this._isTransitioning = e
        }, B.dispose = function() {
            p.removeData(this._element, V), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, B._getConfig = function(e) {
            return (e = a({}, K, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(U, e, z), e
        }, B._getDimension = function() {
            return p(this._element).hasClass("width") ? "width" : "height"
        }, B._getParent = function() {
            var e, n = this;
            g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                i = [].slice.call(e.querySelectorAll(t));
            return p(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(ne._getTargetFromElement(t), [t])
            }), e
        }, B._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(X);
            t.length && p(t).toggleClass(Z, !n).attr("aria-expanded", n)
        }, ne._getTargetFromElement = function(e) {
            var t = g.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }, ne._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(V),
                    n = a({}, K, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new ne(this, n), e.data(V, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, o(ne, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return K
            }
        }]), ne);

    function ne(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(ee)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
                a = g.getSelectorFromElement(o),
                s = [].slice.call(document.querySelectorAll(a)).filter(function(e) {
                    return e === t
                });
            null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(o))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    p(document).on(Y.CLICK_DATA_API, ee, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this),
                t = e.data(V) ? "toggle" : n.data();
            te._jQueryInterface.call(e, t)
        })
    }), p.fn[U] = te._jQueryInterface, p.fn[U].Constructor = te, p.fn[U].noConflict = function() {
        return p.fn[U] = Q, te._jQueryInterface
    };
    for (var ie = "undefined" != typeof window && "undefined" != typeof document, re = ["Edge", "Trident", "Firefox"], oe = 0, ae = 0; ae < re.length; ae += 1)
        if (ie && 0 <= navigator.userAgent.indexOf(re[ae])) {
            oe = 1;
            break
        } var se = ie && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, oe))
        }
    };

    function le(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function ce(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ue(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function fe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = ce(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : fe(ue(e))
    }
    var de = ie && !(!window.MSInputMethodContext || !document.documentMode),
        he = ie && /MSIE 10/.test(navigator.userAgent);

    function pe(e) {
        return 11 === e ? de : 10 === e ? he : de || he
    }

    function ge(e) {
        if (!e) return document.documentElement;
        for (var t = pe(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ce(n, "position") ? ge(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function me(e) {
        return null !== e.parentNode ? me(e.parentNode) : e
    }

    function ve(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && ge(a.firstElementChild) !== a ? ge(l) : l;
        var c = me(e);
        return c.host ? ve(c.host, t) : ve(e, me(t).host)
    }

    function ye(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n]
    }

    function be(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function _e(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], pe(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function we(e) {
        var t = e.body,
            n = e.documentElement,
            i = pe(10) && getComputedStyle(n);
        return {
            height: _e("Height", t, n, i),
            width: _e("Width", t, n, i)
        }
    }

    function xe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Ee = function(e, t, n) {
            return t && Ce(e.prototype, t), n && Ce(e, n), e
        },
        Te = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Se(e) {
        return Te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function De(e) {
        var t = {};
        try {
            if (pe(10)) {
                t = e.getBoundingClientRect();
                var n = ye(e, "top"),
                    i = ye(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? we(e.ownerDocument) : {},
            a = o.width || e.clientWidth || r.right - r.left,
            s = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - a,
            c = e.offsetHeight - s;
        if (l || c) {
            var u = ce(e);
            l -= be(u, "x"), c -= be(u, "y"), r.width -= l, r.height -= c
        }
        return Se(r)
    }

    function Ae(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            r = pe(10),
            o = "HTML" === t.nodeName,
            a = De(e),
            s = De(t),
            l = fe(e),
            c = ce(t),
            u = parseFloat(c.borderTopWidth, 10),
            f = parseFloat(c.borderLeftWidth, 10);
        i && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var d = Se({
            top: a.top - s.top - u,
            left: a.left - s.left - f,
            width: a.width,
            height: a.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !r && o) {
            var h = parseFloat(c.marginTop, 10),
                p = parseFloat(c.marginLeft, 10);
            d.top -= u - h, d.bottom -= u - h, d.left -= f - p, d.right -= f - p, d.marginTop = h, d.marginLeft = p
        }
        return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (d = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                r = ye(t, "top"),
                o = ye(t, "left"),
                a = i ? -1 : 1;
            return e.top += r * a, e.bottom += r * a, e.left += o * a, e.right += o * a, e
        }(d, t)), d
    }

    function ke(e) {
        if (!e || !e.parentElement || pe()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === ce(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Ne(e, t, n, i, r) {
        var o = 4 < arguments.length && void 0 !== r && r,
            a = {
                top: 0,
                left: 0
            },
            s = o ? ke(e) : ve(e, t);
        if ("viewport" === i) a = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                r = Ae(e, i),
                o = Math.max(i.clientWidth, window.innerWidth || 0),
                a = Math.max(i.clientHeight, window.innerHeight || 0),
                s = n ? 0 : ye(i),
                l = n ? 0 : ye(i, "left");
            return Se({
                top: s - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: a
            })
        }(s, o);
        else {
            var l = void 0;
            "scrollParent" === i ? "BODY" === (l = fe(ue(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = Ae(l, s, o);
            if ("HTML" !== l.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === ce(t, "position")) return !0;
                    var i = ue(t);
                    return !!i && e(i)
                }(s)) a = c;
            else {
                var u = we(e.ownerDocument),
                    f = u.height,
                    d = u.width;
                a.top += c.top - c.marginTop, a.bottom = f + c.top, a.left += c.left - c.marginLeft, a.right = d + c.left
            }
        }
        var h = "number" == typeof(n = n || 0);
        return a.left += h ? n : n.left || 0, a.top += h ? n : n.top || 0, a.right -= h ? n : n.right || 0, a.bottom -= h ? n : n.bottom || 0, a
    }

    function Ie(e, t, i, n, r, o) {
        var a = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = Ne(i, n, a, r),
            l = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            c = Object.keys(l).map(function(e) {
                return Te({
                    key: e
                }, l[e], {
                    area: (t = l[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = c.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            f = 0 < u.length ? u[0].key : c[0].key,
            d = e.split("-")[1];
        return f + (d ? "-" + d : "")
    }

    function Oe(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return Ae(n, r ? ke(t) : ve(t, n), r)
    }

    function je(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function Le(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function Me(e, t, n) {
        n = n.split("-")[0];
        var i = je(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[Le(s)], r
    }

    function He(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function Pe(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e.name === n
            });
            var i = He(e, function(e) {
                return e.name === n
            });
            return e.indexOf(i)
        }(e, 0, t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && le(t) && (n.offsets.popper = Se(n.offsets.popper), n.offsets.reference = Se(n.offsets.reference), n = t(n, e))
        }), n
    }

    function qe(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function Re(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function Fe(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function We(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Be(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && We(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }
    var Ue = ie && /Firefox/i.test(navigator.userAgent);

    function Ve(e, t, n) {
        var i = He(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var $e = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Qe = $e.slice(3);

    function Ke(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = Qe.indexOf(e),
            r = Qe.slice(i + 1).concat(Qe.slice(0, i));
        return n ? r.reverse() : r
    }
    var ze = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = {
                                    start: xe({}, l, o[l]),
                                    end: xe({}, l, o[l] + o[c] - a[c])
                                };
                            e.offsets.popper = Te({}, a, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = r.split("-")[0];
                        return n = We(+i) ? [+i, 0] : function(e, r, o, t) {
                            var a = [0, 0],
                                s = -1 !== ["right", "left"].indexOf(t),
                                n = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                i = n.indexOf(He(n, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                            return (c = c.map(function(e, t) {
                                var n = (1 === t ? !s : s) ? "height" : "width",
                                    i = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, i) {
                                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            a = r[2];
                                        if (!o) return e;
                                        if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? o : ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                        var s = void 0;
                                        switch (a) {
                                            case "%p":
                                                s = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                s = i
                                        }
                                        return Se(s)[t] / 100 * o
                                    }(e, n, r, o)
                                })
                            })).forEach(function(n, i) {
                                n.forEach(function(e, t) {
                                    We(e) && (a[i] += e * ("-" === n[t - 1] ? -1 : 1))
                                })
                            }), a
                        }(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || ge(e.instance.popper);
                        e.instance.reference === t && (t = ge(t));
                        var n = Re("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            a = r.left,
                            s = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = Ne(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = a, r[n] = s, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), xe({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), xe({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = Te({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!Ve(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            d = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = je(i)[c];
                        s[h] - p < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - p)), s[f] + p > a[h] && (e.offsets.popper[f] += s[f] + p - a[h]), e.offsets.popper = Se(e.offsets.popper);
                        var g = s[f] + s[c] / 2 - p / 2,
                            m = ce(e.instance.popper),
                            v = parseFloat(m["margin" + u], 10),
                            y = parseFloat(m["border" + u + "Width"], 10),
                            b = g - e.offsets.popper[f] - v - y;
                        return b = Math.max(Math.min(a[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (xe(n = {}, f, Math.round(b)), xe(n, d, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, g) {
                        if (qe(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var m = Ne(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                            v = p.placement.split("-")[0],
                            y = Le(v),
                            b = p.placement.split("-")[1] || "",
                            _ = [];
                        switch (g.behavior) {
                            case "flip":
                                _ = [v, y];
                                break;
                            case "clockwise":
                                _ = Ke(v);
                                break;
                            case "counterclockwise":
                                _ = Ke(v, !0);
                                break;
                            default:
                                _ = g.behavior
                        }
                        return _.forEach(function(e, t) {
                            if (v !== e || _.length === t + 1) return p;
                            v = p.placement.split("-")[0], y = Le(v);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                a = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
                                s = o(i.left) < o(m.left),
                                l = o(i.right) > o(m.right),
                                c = o(i.top) < o(m.top),
                                u = o(i.bottom) > o(m.bottom),
                                f = "left" === v && s || "right" === v && l || "top" === v && c || "bottom" === v && u,
                                d = -1 !== ["top", "bottom"].indexOf(v),
                                h = !!g.flipVariations && (d && "start" === b && s || d && "end" === b && l || !d && "start" === b && c || !d && "end" === b && u);
                            (a || f || h) && (p.flipped = !0, (a || f) && (v = _[t + 1]), h && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), p.placement = v + (b ? "-" + b : ""), p.offsets.popper = Te({}, p.offsets.popper, Me(p.instance.popper, p.offsets.reference, p.placement)), p = Pe(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = Le(t), e.offsets.popper = Se(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!Ve(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = He(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = He(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, s, l, c, u, f, d, h, p, g, m, v, y, b, _, w, x = void 0 !== o ? o : t.gpuAcceleration,
                            E = ge(e.instance.popper),
                            T = De(E),
                            C = {
                                position: r.position
                            },
                            S = (a = e, s = window.devicePixelRatio < 2 || !Ue, c = (l = a.offsets).popper, u = l.reference, f = Math.round, d = Math.floor, h = function(e) {
                                return e
                            }, p = f(u.width), g = f(c.width), m = -1 !== ["left", "right"].indexOf(a.placement), v = -1 !== a.placement.indexOf("-"), b = s ? f : h, {
                                left: (y = s ? m || v || p % 2 == g % 2 ? f : d : h)(p % 2 == 1 && g % 2 == 1 && !v && s ? c.left - 1 : c.left),
                                top: b(c.top),
                                bottom: b(c.bottom),
                                right: y(c.right)
                            }),
                            D = "bottom" === n ? "top" : "bottom",
                            A = "right" === i ? "left" : "right",
                            k = Re("transform");
                        if (w = "bottom" == D ? "HTML" === E.nodeName ? -E.clientHeight + S.bottom : -T.height + S.bottom : S.top, _ = "right" == A ? "HTML" === E.nodeName ? -E.clientWidth + S.right : -T.width + S.right : S.left, x && k) C[k] = "translate3d(" + _ + "px, " + w + "px, 0)", C[D] = 0, C[A] = 0, C.willChange = "transform";
                        else {
                            var N = "bottom" == D ? -1 : 1,
                                I = "right" == A ? -1 : 1;
                            C[D] = w * N, C[A] = _ * I, C.willChange = D + ", " + A
                        }
                        var O = {
                            "x-placement": e.placement
                        };
                        return e.attributes = Te({}, O, e.attributes), e.styles = Te({}, C, e.styles), e.arrowStyles = Te({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return Be(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && Be(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = Oe(r, t, e, n.positionFixed),
                            a = Ie(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), Be(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ye = (Ee(Xe, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = Oe(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Ie(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Me(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Pe(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, qe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = function(e, t, n, i) {
                        n.updateBound = i, Fe(e).addEventListener("resize", n.updateBound, {
                            passive: !0
                        });
                        var r = fe(e);
                        return function e(t, n, i, r) {
                            var o = "BODY" === t.nodeName,
                                a = o ? t.ownerDocument.defaultView : t;
                            a.addEventListener(n, i, {
                                passive: !0
                            }), o || e(fe(a.parentNode), n, i, r), r.push(a)
                        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                    }(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return function() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Fe(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }.call(this)
            }
        }]), Xe);

    function Xe(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ! function(e) {
            if (!(e instanceof Xe)) throw new TypeError("Cannot call a class as a function")
        }(this), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = se(this.update.bind(this)), this.options = Te({}, Xe.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(Te({}, Xe.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = Te({}, Xe.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return Te({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function(e) {
            e.enabled && le(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r
    }
    Ye.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ye.placements = $e, Ye.Defaults = ze;
    var Ge, Je = "dropdown",
        Ze = "bs.dropdown",
        et = "." + Ze,
        tt = ".data-api",
        nt = p.fn[Je],
        it = new RegExp("38|40|27"),
        rt = {
            HIDE: "hide" + et,
            HIDDEN: "hidden" + et,
            SHOW: "show" + et,
            SHOWN: "shown" + et,
            CLICK: "click" + et,
            CLICK_DATA_API: "click" + et + tt,
            KEYDOWN_DATA_API: "keydown" + et + tt,
            KEYUP_DATA_API: "keyup" + et + tt
        },
        ot = "disabled",
        at = "show",
        st = "dropdown-menu-right",
        lt = '[data-toggle="dropdown"]',
        ct = ".dropdown-menu",
        ut = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        ft = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        dt = ((Ge = ht.prototype).toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(ot)) {
                var e = ht._getParentFromElement(this._element),
                    t = p(this._menu).hasClass(at);
                if (ht._clearMenus(), !t) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = p.Event(rt.SHOW, n);
                    if (p(e).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === Ye) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(e).addClass("position-static"), this._popper = new Ye(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === p(e).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(at), p(e).toggleClass(at).trigger(p.Event(rt.SHOWN, n))
                    }
                }
            }
        }, Ge.show = function() {
            if (!(this._element.disabled || p(this._element).hasClass(ot) || p(this._menu).hasClass(at))) {
                var e = {
                        relatedTarget: this._element
                    },
                    t = p.Event(rt.SHOW, e),
                    n = ht._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(at), p(n).toggleClass(at).trigger(p.Event(rt.SHOWN, e)))
            }
        }, Ge.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(ot) && p(this._menu).hasClass(at)) {
                var e = {
                        relatedTarget: this._element
                    },
                    t = p.Event(rt.HIDE, e),
                    n = ht._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(at), p(n).toggleClass(at).trigger(p.Event(rt.HIDDEN, e)))
            }
        }, Ge.dispose = function() {
            p.removeData(this._element, Ze), p(this._element).off(et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, Ge.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, Ge._addEventListeners = function() {
            var t = this;
            p(this._element).on(rt.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, Ge._getConfig = function(e) {
            return e = a({}, this.constructor.Default, p(this._element).data(), e), g.typeCheckConfig(Je, e, this.constructor.DefaultType), e
        }, Ge._getMenuElement = function() {
            if (!this._menu) {
                var e = ht._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(ct))
            }
            return this._menu
        }, Ge._getPlacement = function() {
            var e = p(this._element.parentNode),
                t = "bottom-start";
            return e.hasClass("dropup") ? (t = "top-start", p(this._menu).hasClass(st) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass(st) && (t = "bottom-end"), t
        }, Ge._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }, Ge._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
            } : e.offset = this._config.offset, e
        }, Ge._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }), e
        }, ht._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(Ze);
                if (e || (e = new ht(this, "object" == typeof t ? t : null), p(this).data(Ze, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, ht._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(lt)), n = 0, i = t.length; n < i; n++) {
                    var r = ht._getParentFromElement(t[n]),
                        o = p(t[n]).data(Ze),
                        a = {
                            relatedTarget: t[n]
                        };
                    if (e && "click" === e.type && (a.clickEvent = e), o) {
                        var s = o._menu;
                        if (p(r).hasClass(at) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                            var l = p.Event(rt.HIDE, a);
                            p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), p(s).removeClass(at), p(r).removeClass(at).trigger(p.Event(rt.HIDDEN, a)))
                        }
                    }
                }
        }, ht._getParentFromElement = function(e) {
            var t, n = g.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode
        }, ht._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(ct).length)) : it.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(ot))) {
                var t = ht._getParentFromElement(this),
                    n = p(t).hasClass(at);
                if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var o = t.querySelector(lt);
                        p(o).trigger("focus")
                    }
                    p(this).trigger("click")
                }
            }
        }, o(ht, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ut
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ft
            }
        }]), ht);

    function ht(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    p(document).on(rt.KEYDOWN_DATA_API, lt, dt._dataApiKeydownHandler).on(rt.KEYDOWN_DATA_API, ct, dt._dataApiKeydownHandler).on(rt.CLICK_DATA_API + " " + rt.KEYUP_DATA_API, dt._clearMenus).on(rt.CLICK_DATA_API, lt, function(e) {
        e.preventDefault(), e.stopPropagation(), dt._jQueryInterface.call(p(this), "toggle")
    }).on(rt.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), p.fn[Je] = dt._jQueryInterface, p.fn[Je].Constructor = dt, p.fn[Je].noConflict = function() {
        return p.fn[Je] = nt, dt._jQueryInterface
    };
    var pt, gt = "modal",
        mt = "bs.modal",
        vt = "." + mt,
        yt = p.fn[gt],
        bt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        _t = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        wt = {
            HIDE: "hide" + vt,
            HIDDEN: "hidden" + vt,
            SHOW: "show" + vt,
            SHOWN: "shown" + vt,
            FOCUSIN: "focusin" + vt,
            RESIZE: "resize" + vt,
            CLICK_DISMISS: "click.dismiss" + vt,
            KEYDOWN_DISMISS: "keydown.dismiss" + vt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + vt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + vt,
            CLICK_DATA_API: "click" + vt + ".data-api"
        },
        xt = "modal-open",
        Et = "fade",
        Tt = "show",
        Ct = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        St = ".sticky-top",
        Dt = ((pt = At.prototype).toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, pt.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(Et) && (this._isTransitioning = !0);
                var n = p.Event(wt.SHOW, {
                    relatedTarget: e
                });
                p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(wt.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                    return t.hide(e)
                }), p(this._dialog).on(wt.MOUSEDOWN_DISMISS, function() {
                    p(t._element).one(wt.MOUSEUP_DISMISS, function(e) {
                        p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }, pt.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = p.Event(wt.HIDE);
                if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(Et);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(wt.FOCUSIN), p(this._element).removeClass(Tt), p(this._element).off(wt.CLICK_DISMISS), p(this._dialog).off(wt.MOUSEDOWN_DISMISS), i) {
                        var r = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else this._hideModal()
                }
            }
        }, pt.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return p(e).off(vt)
            }), p(document).off(wt.FOCUSIN), p.removeData(this._element, mt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, pt.handleUpdate = function() {
            this._adjustDialog()
        }, pt._getConfig = function(e) {
            return e = a({}, bt, e), g.typeCheckConfig(gt, e, _t), e
        }, pt._showElement = function(e) {
            var t = this,
                n = p(this._element).hasClass(Et);

            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p(this._element).addClass(Tt), this._config.focus && this._enforceFocus();
            var r = p.Event(wt.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var o = g.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(g.TRANSITION_END, i).emulateTransitionEnd(o)
            } else i()
        }, pt._enforceFocus = function() {
            var t = this;
            p(document).off(wt.FOCUSIN).on(wt.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
            })
        }, pt._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(wt.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || p(this._element).off(wt.KEYDOWN_DISMISS)
        }, pt._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(wt.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : p(window).off(wt.RESIZE)
        }, pt._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                p(document.body).removeClass(xt), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(wt.HIDDEN)
            })
        }, pt._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
        }, pt._showBackdrop = function(e) {
            var t = this,
                n = p(this._element).hasClass(Et) ? Et : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(wt.CLICK_DISMISS, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && g.reflow(this._backdrop), p(this._backdrop).addClass(Tt), !e) return;
                if (!n) return void e();
                var i = g.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(Tt);
                var r = function() {
                    t._removeBackdrop(), e && e()
                };
                if (p(this._element).hasClass(Et)) {
                    var o = g.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            } else e && e()
        }, pt._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, pt._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, pt._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, pt._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(Ct)),
                    t = [].slice.call(document.querySelectorAll(St));
                p(e).each(function(e, t) {
                    var n = t.style.paddingRight,
                        i = p(t).css("padding-right");
                    p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }), p(t).each(function(e, t) {
                    var n = t.style.marginRight,
                        i = p(t).css("margin-right");
                    p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight,
                    i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            p(document.body).addClass(xt)
        }, pt._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(Ct));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"), t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll(St));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        }, pt._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, At._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = p(this).data(mt),
                    t = a({}, bt, p(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new At(this, t), p(this).data(mt, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else t.show && e.show(i)
            })
        }, o(At, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return bt
            }
        }]), At);

    function At(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
    }
    p(document).on(wt.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this,
            i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(mt) ? "toggle" : a({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one(wt.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(wt.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        Dt._jQueryInterface.call(p(t), r, this)
    }), p.fn[gt] = Dt._jQueryInterface, p.fn[gt].Constructor = Dt, p.fn[gt].noConflict = function() {
        return p.fn[gt] = yt, Dt._jQueryInterface
    };
    var kt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        It = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Ot(e, a, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(a), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
                var n = l[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === s.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var r = [].slice.call(n.attributes),
                    o = [].concat(a["*"] || [], a[i] || []);
                r.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === kt.indexOf(n) || Boolean(e.nodeValue.match(Nt) || e.nodeValue.match(It));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    }(e, o) && n.removeAttribute(e.nodeName)
                })
            }, r = 0, o = l.length; r < o; r++) i(r);
        return n.body.innerHTML
    }
    var jt, Lt = "tooltip",
        Mt = "bs.tooltip",
        Ht = "." + Mt,
        Pt = p.fn[Lt],
        qt = "bs-tooltip",
        Rt = new RegExp("(^|\\s)" + qt + "\\S+", "g"),
        Ft = ["sanitize", "whiteList", "sanitizeFn"],
        Wt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Bt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Ut = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Vt = "show",
        $t = {
            HIDE: "hide" + Ht,
            HIDDEN: "hidden" + Ht,
            SHOW: "show" + Ht,
            SHOWN: "shown" + Ht,
            INSERTED: "inserted" + Ht,
            CLICK: "click" + Ht,
            FOCUSIN: "focusin" + Ht,
            FOCUSOUT: "focusout" + Ht,
            MOUSEENTER: "mouseenter" + Ht,
            MOUSELEAVE: "mouseleave" + Ht
        },
        Qt = "fade",
        Kt = "show",
        zt = "hover",
        Yt = "focus",
        Xt = ((jt = Gt.prototype).enable = function() {
            this._isEnabled = !0
        }, jt.disable = function() {
            this._isEnabled = !1
        }, jt.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, jt.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY,
                        n = p(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(Kt)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, jt.dispose = function() {
            clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, jt.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = g.findShadowRoot(this.element),
                    i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                    o = g.getUID(this.constructor.NAME);
                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && p(r).addClass(Qt);
                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                    s = this._getAttachment(a);
                this.addAttachmentClass(s);
                var l = this._getContainer();
                p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ye(this.element, r, {
                    placement: s,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }), p(r).addClass(Kt), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                };
                if (p(this.tip).hasClass(Qt)) {
                    var u = g.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(g.TRANSITION_END, c).emulateTransitionEnd(u)
                } else c()
            }
        }, jt.hide = function(e) {
            function t() {
                n._hoverState !== Vt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            }
            var n = this,
                i = this.getTipElement(),
                r = p.Event(this.constructor.Event.HIDE);
            if (p(this.element).trigger(r), !r.isDefaultPrevented()) {
                if (p(i).removeClass(Kt), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger.click = !1, this._activeTrigger[Yt] = !1, this._activeTrigger[zt] = !1, p(this.tip).hasClass(Qt)) {
                    var o = g.getTransitionDurationFromElement(i);
                    p(i).one(g.TRANSITION_END, t).emulateTransitionEnd(o)
                } else t();
                this._hoverState = ""
            }
        }, jt.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, jt.isWithContent = function() {
            return Boolean(this.getTitle())
        }, jt.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(qt + "-" + e)
        }, jt.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0], this.tip
        }, jt.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p(e).removeClass(Qt + " " + Kt)
        }, jt.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Ot(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
        }, jt.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, jt._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
            } : e.offset = this.config.offset, e
        }, jt._getContainer = function() {
            return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }, jt._getAttachment = function(e) {
            return Bt[e.toUpperCase()]
        }, jt._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                });
                else if ("manual" !== e) {
                    var t = e === zt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                        n = e === zt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
            }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }), this.config.selector ? this.config = a({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, jt._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, jt._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Yt : zt] = !0), p(t.getTipElement()).hasClass(Kt) || t._hoverState === Vt ? t._hoverState = Vt : (clearTimeout(t._timeout), t._hoverState = Vt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Vt && t.show()
            }, t.config.delay.show) : t.show())
        }, jt._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Yt : zt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }, jt._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }, jt._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Ft.indexOf(e) && delete t[e]
            }), "number" == typeof(e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(Lt, e, this.constructor.DefaultType), e.sanitize && (e.template = Ot(e.template, e.whiteList, e.sanitizeFn)), e
        }, jt._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }, jt._cleanTipClass = function() {
            var e = p(this.getTipElement()),
                t = e.attr("class").match(Rt);
            null !== t && t.length && e.removeClass(t.join(""))
        }, jt._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, jt._fixTransition = function() {
            var e = this.getTipElement(),
                t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(Qt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
        }, Gt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Mt),
                    t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new Gt(this, t), p(this).data(Mt, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, o(Gt, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Ut
            }
        }, {
            key: "NAME",
            get: function() {
                return Lt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Mt
            }
        }, {
            key: "Event",
            get: function() {
                return $t
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ht
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Wt
            }
        }]), Gt);

    function Gt(e, t) {
        if (void 0 === Ye) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
    }
    p.fn[Lt] = Xt._jQueryInterface, p.fn[Lt].Constructor = Xt, p.fn[Lt].noConflict = function() {
        return p.fn[Lt] = Pt, Xt._jQueryInterface
    };
    var Jt = "popover",
        Zt = "bs.popover",
        en = "." + Zt,
        tn = p.fn[Jt],
        nn = "bs-popover",
        rn = new RegExp("(^|\\s)" + nn + "\\S+", "g"),
        on = a({}, Xt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        an = a({}, Xt.DefaultType, {
            content: "(string|element|function)"
        }),
        sn = {
            HIDE: "hide" + en,
            HIDDEN: "hidden" + en,
            SHOW: "show" + en,
            SHOWN: "shown" + en,
            INSERTED: "inserted" + en,
            CLICK: "click" + en,
            FOCUSIN: "focusin" + en,
            FOCUSOUT: "focusout" + en,
            MOUSEENTER: "mouseenter" + en,
            MOUSELEAVE: "mouseleave" + en
        },
        ln = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(nn + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(rn);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(Zt),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(Zt, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return on
                }
            }, {
                key: "NAME",
                get: function() {
                    return Jt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Zt
                }
            }, {
                key: "Event",
                get: function() {
                    return sn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return en
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return an
                }
            }]), i
        }(Xt);
    p.fn[Jt] = ln._jQueryInterface, p.fn[Jt].Constructor = ln, p.fn[Jt].noConflict = function() {
        return p.fn[Jt] = tn, ln._jQueryInterface
    };
    var cn, un = "scrollspy",
        fn = "bs.scrollspy",
        dn = "." + fn,
        hn = p.fn[un],
        pn = {
            offset: 10,
            method: "auto",
            target: ""
        },
        gn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        mn = {
            ACTIVATE: "activate" + dn,
            SCROLL: "scroll" + dn,
            LOAD_DATA_API: "load" + dn + ".data-api"
        },
        vn = "active",
        yn = ".nav, .list-group",
        bn = ".nav-link",
        _n = ".list-group-item",
        wn = "position",
        xn = ((cn = En.prototype).refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? "offset" : wn,
                r = "auto" === this._config.method ? e : this._config.method,
                o = r === wn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = g.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [p(t)[r]().top + o, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, cn.dispose = function() {
            p.removeData(this._element, fn), p(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, cn._getConfig = function(e) {
            if ("string" != typeof(e = a({}, pn, "object" == typeof e && e ? e : {})).target) {
                var t = p(e.target).attr("id");
                t || (t = g.getUID(un), p(e.target).attr("id", t)), e.target = "#" + t
            }
            return g.typeCheckConfig(un, e, gn), e
        }, cn._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, cn._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, cn._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, cn._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }, cn._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",").map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                }),
                n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(vn), n.addClass(vn)) : (n.addClass(vn), n.parents(yn).prev(bn + ", " + _n).addClass(vn), n.parents(yn).prev(".nav-item").children(bn).addClass(vn)), p(this._scrollElement).trigger(mn.ACTIVATE, {
                relatedTarget: t
            })
        }, cn._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(vn)
            }).forEach(function(e) {
                return e.classList.remove(vn)
            })
        }, En._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(fn);
                if (e || (e = new En(this, "object" == typeof t && t), p(this).data(fn, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, o(En, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return pn
            }
        }]), En);

    function En(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + bn + "," + this._config.target + " " + _n + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(mn.SCROLL, function(e) {
            return n._process(e)
        }), this.refresh(), this._process()
    }
    p(window).on(mn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = p(e[t]);
            xn._jQueryInterface.call(n, n.data())
        }
    }), p.fn[un] = xn._jQueryInterface, p.fn[un].Constructor = xn, p.fn[un].noConflict = function() {
        return p.fn[un] = hn, xn._jQueryInterface
    };
    var Tn, Cn = "bs.tab",
        Sn = "." + Cn,
        Dn = p.fn.tab,
        An = {
            HIDE: "hide" + Sn,
            HIDDEN: "hidden" + Sn,
            SHOW: "show" + Sn,
            SHOWN: "shown" + Sn,
            CLICK_DATA_API: "click" + Sn + ".data-api"
        },
        kn = "active",
        Nn = ".active",
        In = "> li > .active",
        On = ((Tn = jn.prototype).show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(kn) || p(this._element).hasClass("disabled"))) {
                var e, i, t = p(this._element).closest(".nav, .list-group")[0],
                    r = g.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName || "OL" === t.nodeName ? In : Nn;
                    i = (i = p.makeArray(p(t).find(o)))[i.length - 1]
                }
                var a = p.Event(An.HIDE, {
                        relatedTarget: this._element
                    }),
                    s = p.Event(An.SHOW, {
                        relatedTarget: i
                    });
                if (i && p(i).trigger(a), p(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)), this._activate(this._element, t);
                    var l = function() {
                        var e = p.Event(An.HIDDEN, {
                                relatedTarget: n._element
                            }),
                            t = p.Event(An.SHOWN, {
                                relatedTarget: i
                            });
                        p(i).trigger(e), p(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }, Tn.dispose = function() {
            p.removeData(this._element, Cn), this._element = null
        }, Tn._activate = function(e, t, n) {
            function i() {
                return r._transitionComplete(e, o, n)
            }
            var r = this,
                o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Nn) : p(t).find(In))[0],
                a = n && o && p(o).hasClass("fade");
            if (o && a) {
                var s = g.getTransitionDurationFromElement(o);
                p(o).removeClass("show").one(g.TRANSITION_END, i).emulateTransitionEnd(s)
            } else i()
        }, Tn._transitionComplete = function(e, t, n) {
            if (t) {
                p(t).removeClass(kn);
                var i = p(t.parentNode).find("> .dropdown-menu .active")[0];
                i && p(i).removeClass(kn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (p(e).addClass(kn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p(e.parentNode).hasClass("dropdown-menu")) {
                var r = p(e).closest(".dropdown")[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                    p(o).addClass(kn)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }, jn._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(Cn);
                if (t || (t = new jn(this), e.data(Cn, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, o(jn, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]), jn);

    function jn(e) {
        this._element = e
    }
    p(document).on(An.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), On._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = On._jQueryInterface, p.fn.tab.Constructor = On, p.fn.tab.noConflict = function() {
        return p.fn.tab = Dn, On._jQueryInterface
    };
    var Ln, Mn = "toast",
        Hn = "bs.toast",
        Pn = "." + Hn,
        qn = p.fn[Mn],
        Rn = {
            CLICK_DISMISS: "click.dismiss" + Pn,
            HIDE: "hide" + Pn,
            HIDDEN: "hidden" + Pn,
            SHOW: "show" + Pn,
            SHOWN: "shown" + Pn
        },
        Fn = "show",
        Wn = "showing",
        Bn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Un = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Vn = ((Ln = $n.prototype).show = function() {
            var e = this;

            function t() {
                e._element.classList.remove(Wn), e._element.classList.add(Fn), p(e._element).trigger(Rn.SHOWN), e._config.autohide && e.hide()
            }
            if (p(this._element).trigger(Rn.SHOW), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), this._element.classList.add(Wn), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
            } else t()
        }, Ln.hide = function(e) {
            var t = this;
            this._element.classList.contains(Fn) && (p(this._element).trigger(Rn.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                t._close()
            }, this._config.delay))
        }, Ln.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Fn) && this._element.classList.remove(Fn), p(this._element).off(Rn.CLICK_DISMISS), p.removeData(this._element, Hn), this._element = null, this._config = null
        }, Ln._getConfig = function(e) {
            return e = a({}, Un, p(this._element).data(), "object" == typeof e && e ? e : {}), g.typeCheckConfig(Mn, e, this.constructor.DefaultType), e
        }, Ln._setListeners = function() {
            var e = this;
            p(this._element).on(Rn.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                return e.hide(!0)
            })
        }, Ln._close = function() {
            function e() {
                t._element.classList.add("hide"), p(t._element).trigger(Rn.HIDDEN)
            }
            var t = this;
            if (this._element.classList.remove(Fn), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(n)
            } else e()
        }, $n._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(Hn);
                if (t || (t = new $n(this, "object" == typeof n && n), e.data(Hn, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }, o($n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Bn
            }
        }, {
            key: "Default",
            get: function() {
                return Un
            }
        }]), $n);

    function $n(e, t) {
        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
    }
    p.fn[Mn] = Vn._jQueryInterface, p.fn[Mn].Constructor = Vn, p.fn[Mn].noConflict = function() {
            return p.fn[Mn] = qn, Vn._jQueryInterface
        },
        function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = g, e.Alert = f, e.Button = T, e.Carousel = F, e.Collapse = te, e.Dropdown = dt, e.Modal = Dt, e.Popover = ln, e.Scrollspy = xn, e.Tab = On, e.Toast = Vn, e.Tooltip = Xt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    t.easing.jswing = t.easing.swing;
    var n = Math.pow,
        i = Math.sqrt,
        r = Math.sin,
        o = Math.cos,
        a = Math.PI,
        s = 1.70158,
        l = 1.525 * s,
        c = 2 * a / 3,
        u = 2 * a / 4.5;

    function f(e) {
        var t = 7.5625,
            n = 2.75;
        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
    }
    t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return t.easing[t.easing.def](e)
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return 1 - (1 - e) * (1 - e)
        },
        easeInOutQuad: function(e) {
            return e < .5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 - n(1 - e, 3)
        },
        easeInOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return 1 - n(1 - e, 4)
        },
        easeInOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2
        },
        easeInQuint: function(e) {
            return e * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 - n(1 - e, 5)
        },
        easeInOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2
        },
        easeInSine: function(e) {
            return 1 - o(e * a / 2)
        },
        easeOutSine: function(e) {
            return r(e * a / 2)
        },
        easeInOutSine: function(e) {
            return -(o(a * e) - 1) / 2
        },
        easeInExpo: function(e) {
            return 0 === e ? 0 : n(2, 10 * e - 10)
        },
        easeOutExpo: function(e) {
            return 1 === e ? 1 : 1 - n(2, -10 * e)
        },
        easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? n(2, 20 * e - 10) / 2 : (2 - n(2, -20 * e + 10)) / 2
        },
        easeInCirc: function(e) {
            return 1 - i(1 - n(e, 2))
        },
        easeOutCirc: function(e) {
            return i(1 - n(e - 1, 2))
        },
        easeInOutCirc: function(e) {
            return e < .5 ? (1 - i(1 - n(2 * e, 2))) / 2 : (i(1 - n(-2 * e + 2, 2)) + 1) / 2
        },
        easeInElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : -n(2, 10 * e - 10) * r((10 * e - 10.75) * c)
        },
        easeOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : n(2, -10 * e) * r((10 * e - .75) * c) + 1
        },
        easeInOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -n(2, 20 * e - 10) * r((20 * e - 11.125) * u) / 2 : n(2, -20 * e + 10) * r((20 * e - 11.125) * u) / 2 + 1
        },
        easeInBack: function(e) {
            return 2.70158 * e * e * e - s * e * e
        },
        easeOutBack: function(e) {
            return 1 + 2.70158 * n(e - 1, 3) + s * n(e - 1, 2)
        },
        easeInOutBack: function(e) {
            return e < .5 ? n(2 * e, 2) * (7.189819 * e - l) / 2 : (n(2 * e - 2, 2) * ((1 + l) * (2 * e - 2) + l) + 2) / 2
        },
        easeInBounce: function(e) {
            return 1 - f(1 - e)
        },
        easeOutBounce: f,
        easeInOutBounce: function(e) {
            return e < .5 ? (1 - f(1 - 2 * e)) / 2 : (1 + f(2 * e - 1)) / 2
        }
    })
}),
function(d) {
    var h = [],
        n = {
            options: {
                prependExistingHelpBlock: !1,
                sniffHtml: !0,
                preventSubmit: !0,
                submitError: !1,
                submitSuccess: !1,
                semanticallyStrict: !1,
                autoAdd: {
                    helpBlocks: !0
                },
                filter: function() {
                    return !0
                }
            },
            methods: {
                init: function(e) {
                    var f = d.extend(!0, {}, n);
                    f.options = d.extend(!0, f.options, e);
                    var t = d.unique(this.map(function() {
                        return d(this).parents("form")[0]
                    }).toArray());
                    return d(t).bind("submit", function(e) {
                        var t = d(this),
                            i = 0,
                            n = t.find("input,textarea,select").not("[type=submit],[type=image]").filter(f.options.filter);
                        n.trigger("submit.validation").trigger("validationLostFocus.validation"), n.each(function(e, t) {
                            var n = d(t).parents(".control-group").first();
                            n.hasClass("warning") && (n.removeClass("warning").addClass("error"), i++)
                        }), n.trigger("validationLostFocus.validation"), i ? (f.options.preventSubmit && e.preventDefault(), t.addClass("error"), d.isFunction(f.options.submitError) && f.options.submitError(t, e, n.jqBootstrapValidation("collectErrors", !0))) : (t.removeClass("error"), d.isFunction(f.options.submitSuccess) && f.options.submitSuccess(t, e))
                    }), this.each(function() {
                        var s = d(this),
                            n = s.parents(".control-group").first(),
                            i = n.find(".help-block").first(),
                            a = s.parents("form").first(),
                            r = [];
                        if (!i.length && f.options.autoAdd && f.options.autoAdd.helpBlocks && (i = d('<div class="help-block" />'), n.find(".controls").append(i), h.push(i[0])), f.options.sniffHtml) {
                            var e = "";
                            if (void 0 !== s.attr("pattern") && (e = "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e", s.data("validationPatternMessage") && (e = s.data("validationPatternMessage")), s.data("validationPatternMessage", e), s.data("validationPatternRegex", s.attr("pattern"))), void 0 !== s.attr("max") || void 0 !== s.attr("aria-valuemax")) {
                                var t = void 0 !== s.attr("max") ? s.attr("max") : s.attr("aria-valuemax");
                                e = "Too high: Maximum of '" + t + "'\x3c!-- data-validation-max-message to override --\x3e", s.data("validationMaxMessage") && (e = s.data("validationMaxMessage")), s.data("validationMaxMessage", e), s.data("validationMaxMax", t)
                            }
                            if (void 0 !== s.attr("min") || void 0 !== s.attr("aria-valuemin")) {
                                var o = void 0 !== s.attr("min") ? s.attr("min") : s.attr("aria-valuemin");
                                e = "Too low: Minimum of '" + o + "'\x3c!-- data-validation-min-message to override --\x3e", s.data("validationMinMessage") && (e = s.data("validationMinMessage")), s.data("validationMinMessage", e), s.data("validationMinMin", o)
                            }
                            void 0 !== s.attr("maxlength") && (e = "Too long: Maximum of '" + s.attr("maxlength") + "' characters\x3c!-- data-validation-maxlength-message to override --\x3e", s.data("validationMaxlengthMessage") && (e = s.data("validationMaxlengthMessage")), s.data("validationMaxlengthMessage", e), s.data("validationMaxlengthMaxlength", s.attr("maxlength"))), void 0 !== s.attr("minlength") && (e = "skriv venligst mindst " + s.attr("minlength") + " tegn\x3c!-- data-validation-minlength-message to override --\x3e", s.data("validationMinlengthMessage") && (e = s.data("validationMinlengthMessage")), s.data("validationMinlengthMessage", e), s.data("validationMinlengthMinlength", s.attr("minlength"))), void 0 === s.attr("required") && void 0 === s.attr("aria-required") || (e = f.builtInValidators.required.message, s.data("validationRequiredMessage") && (e = s.data("validationRequiredMessage")), s.data("validationRequiredMessage", e)), void 0 !== s.attr("type") && "number" === s.attr("type").toLowerCase() && (e = f.builtInValidators.number.message, s.data("validationNumberMessage") && (e = s.data("validationNumberMessage")), s.data("validationNumberMessage", e)), void 0 !== s.attr("type") && "email" === s.attr("type").toLowerCase() && (e = "Ikke en gyldig email adresse\x3c!-- data-validator-validemail-message to override --\x3e", s.data("validationValidemailMessage") ? e = s.data("validationValidemailMessage") : s.data("validationEmailMessage") && (e = s.data("validationEmailMessage")), s.data("validationValidemailMessage", e)), void 0 !== s.attr("minchecked") && (e = "Not enough options checked; Minimum of '" + s.attr("minchecked") + "' required\x3c!-- data-validation-minchecked-message to override --\x3e", s.data("validationMincheckedMessage") && (e = s.data("validationMincheckedMessage")), s.data("validationMincheckedMessage", e), s.data("validationMincheckedMinchecked", s.attr("minchecked"))), void 0 !== s.attr("maxchecked") && (e = "Too many options checked; Maximum of '" + s.attr("maxchecked") + "' required\x3c!-- data-validation-maxchecked-message to override --\x3e", s.data("validationMaxcheckedMessage") && (e = s.data("validationMaxcheckedMessage")), s.data("validationMaxcheckedMessage", e), s.data("validationMaxcheckedMaxchecked", s.attr("maxchecked")))
                        }
                        void 0 !== s.data("validation") && (r = s.data("validation").split(",")), d.each(s.data(), function(e, t) {
                            var n = e.replace(/([A-Z])/g, ",$1").split(",");
                            "validation" === n[0] && n[1] && r.push(n[1])
                        });
                        for (var l = r, c = []; d.each(r, function(e, t) {
                                r[e] = p(t)
                            }), r = d.unique(r), c = [], d.each(l, function(e, t) {
                                if (void 0 !== s.data("validation" + t + "Shortcut")) d.each(s.data("validation" + t + "Shortcut").split(","), function(e, t) {
                                    c.push(t)
                                });
                                else if (f.builtInValidators[t.toLowerCase()]) {
                                    var n = f.builtInValidators[t.toLowerCase()];
                                    "shortcut" === n.type.toLowerCase() && d.each(n.shortcut.split(","), function(e, t) {
                                        t = p(t), c.push(t), r.push(t)
                                    })
                                }
                            }), 0 < (l = c).length;);
                        var u = {};
                        d.each(r, function(e, n) {
                            var i = s.data("validation" + n + "Message"),
                                t = void 0 !== i,
                                r = !1;
                            if (i = i || "'" + n + "' validation failed \x3c!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message --\x3e", d.each(f.validatorTypes, function(e, t) {
                                    void 0 === u[e] && (u[e] = []), r || void 0 === s.data("validation" + n + p(t.name)) || (u[e].push(d.extend(!0, {
                                        name: p(t.name),
                                        message: i
                                    }, t.init(s, n))), r = !0)
                                }), !r && f.builtInValidators[n.toLowerCase()]) {
                                var o = d.extend(!0, {}, f.builtInValidators[n.toLowerCase()]);
                                t && (o.message = i);
                                var a = o.type.toLowerCase();
                                "shortcut" === a ? r = !0 : d.each(f.validatorTypes, function(e, t) {
                                    void 0 === u[e] && (u[e] = []), r || a !== e.toLowerCase() || (s.data("validation" + n + p(t.name), o[t.name.toLowerCase()]), u[a].push(d.extend(o, t.init(s, n))), r = !0)
                                })
                            }
                            r || d.error("Cannot find validation info for '" + n + "'")
                        }), i.data("original-contents", i.data("original-contents") ? i.data("original-contents") : i.html()), i.data("original-role", i.data("original-role") ? i.data("original-role") : i.attr("role")), n.data("original-classes", n.data("original-clases") ? n.data("original-classes") : n.attr("class")), s.data("original-aria-invalid", s.data("original-aria-invalid") ? s.data("original-aria-invalid") : s.attr("aria-invalid")), s.bind("validation.validation", function(e, t) {
                            var i = g(s),
                                r = [];
                            return d.each(u, function(n, e) {
                                (i || i.length || t && t.includeEmpty || f.validatorTypes[n].blockSubmit && t && t.submitting) && d.each(e, function(e, t) {
                                    f.validatorTypes[n].validate(s, i, t) && r.push(t.message)
                                })
                            }), r
                        }), s.bind("getValidators.validation", function() {
                            return u
                        }), s.bind("submit.validation", function() {
                            return s.triggerHandler("change.validation", {
                                submitting: !0
                            })
                        }), s.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(e, r) {
                            var t = g(s),
                                o = [];
                            n.find("input,textarea,select").each(function(e, t) {
                                var n = o.length;
                                if (d.each(d(t).triggerHandler("validation.validation", r), function(e, t) {
                                        o.push(t)
                                    }), o.length > n) d(t).attr("aria-invalid", "true");
                                else {
                                    var i = s.data("original-aria-invalid");
                                    d(t).attr("aria-invalid", void 0 !== i && i)
                                }
                            }), a.find("input,select,textarea").not(s).not('[name="' + s.attr("name") + '"]').trigger("validationLostFocus.validation"), (o = d.unique(o.sort())).length ? (n.removeClass("success error").addClass("warning"), f.options.semanticallyStrict && 1 === o.length ? i.html(o[0] + (f.options.prependExistingHelpBlock ? i.data("original-contents") : "")) : i.html('<ul role="alert"><li>' + o.join("</li><li>") + "</li></ul>" + (f.options.prependExistingHelpBlock ? i.data("original-contents") : ""))) : (n.removeClass("warning error success"), 0 < t.length && n.addClass("success"), i.html(i.data("original-contents"))), "blur" === e.type && n.removeClass("success")
                        }), s.bind("validationLostFocus.validation", function() {
                            n.removeClass("success")
                        })
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        var e = d(this),
                            t = e.parents(".control-group").first(),
                            n = t.find(".help-block").first();
                        e.unbind(".validation"), n.html(n.data("original-contents")), t.attr("class", t.data("original-classes")), e.attr("aria-invalid", e.data("original-aria-invalid")), n.attr("role", e.data("original-role")), -1 < h.indexOf(n[0]) && n.remove()
                    })
                },
                collectErrors: function(e) {
                    var o = {};
                    return this.each(function(e, t) {
                        var n = d(t),
                            i = n.attr("name"),
                            r = n.triggerHandler("validation.validation", {
                                includeEmpty: !0
                            });
                        o[i] = d.extend(!0, r, o[i])
                    }), d.each(o, function(e, t) {
                        0 === t.length && delete o[e]
                    }), o
                },
                hasErrors: function() {
                    var n = [];
                    return this.each(function(e, t) {
                        n = n.concat(d(t).triggerHandler("getValidators.validation") ? d(t).triggerHandler("validation.validation", {
                            submitting: !0
                        }) : [])
                    }), 0 < n.length
                },
                override: function(e) {
                    n = d.extend(!0, n, e)
                }
            },
            validatorTypes: {
                callback: {
                    name: "callback",
                    init: function(e, t) {
                        return {
                            validatorName: t,
                            callback: e.data("validation" + t + "Callback"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(e, t, n) {
                        if (n.lastValue === t && n.lastFinished) return !n.lastValid;
                        if (!0 === n.lastFinished) {
                            n.lastValue = t, n.lastValid = !0, n.lastFinished = !1;
                            var i = n,
                                r = e;
                            ! function(e, t) {
                                for (var n = Array.prototype.slice.call(arguments).splice(2), i = e.split("."), r = i.pop(), o = 0; o < i.length; o++) t = t[i[o]];
                                t[r].apply(this, n)
                            }(n.callback, window, e, t, function(e) {
                                i.lastValue === e.value && (i.lastValid = e.valid, e.message && (i.message = e.message), i.lastFinished = !0, r.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                    r.trigger("change.validation")
                                }, 1))
                            })
                        }
                        return !1
                    }
                },
                ajax: {
                    name: "ajax",
                    init: function(e, t) {
                        return {
                            validatorName: t,
                            url: e.data("validation" + t + "Ajax"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(t, e, n) {
                        return "" + n.lastValue == "" + e && !0 === n.lastFinished ? !1 === n.lastValid : (!0 === n.lastFinished && (n.lastValue = e, n.lastValid = !0, n.lastFinished = !1, d.ajax({
                            url: n.url,
                            data: "value=" + e + "&field=" + t.attr("name"),
                            dataType: "json",
                            success: function(e) {
                                "" + n.lastValue == "" + e.value && (n.lastValid = !!e.valid, e.message && (n.message = e.message), n.lastFinished = !0, t.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() {
                                    t.trigger("change.validation")
                                }, 1))
                            },
                            failure: function() {
                                n.lastValid = !0, n.message = "ajax call failed", n.lastFinished = !0, t.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() {
                                    t.trigger("change.validation")
                                }, 1)
                            }
                        })), !1)
                    }
                },
                regex: {
                    name: "regex",
                    init: function(e, t) {
                        return {
                            regex: (n = e.data("validation" + t + "Regex"), new RegExp("^" + n + "$"))
                        };
                        var n
                    },
                    validate: function(e, t, n) {
                        return !n.regex.test(t) && !n.negative || n.regex.test(t) && n.negative
                    }
                },
                required: {
                    name: "required",
                    init: function(e, t) {
                        return {}
                    },
                    validate: function(e, t, n) {
                        return !(0 !== t.length || n.negative) || !!(0 < t.length && n.negative)
                    },
                    blockSubmit: !0
                },
                match: {
                    name: "match",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.data("validation" + t + "Match") + '"]').first();
                        return n.bind("validation.validation", function() {
                            e.trigger("change.validation", {
                                submitting: !0
                            })
                        }), {
                            element: n
                        }
                    },
                    validate: function(e, t, n) {
                        return t !== n.element.val() && !n.negative || t === n.element.val() && n.negative
                    },
                    blockSubmit: !0
                },
                max: {
                    name: "max",
                    init: function(e, t) {
                        return {
                            max: e.data("validation" + t + "Max")
                        }
                    },
                    validate: function(e, t, n) {
                        return parseFloat(t, 10) > parseFloat(n.max, 10) && !n.negative || parseFloat(t, 10) <= parseFloat(n.max, 10) && n.negative
                    }
                },
                min: {
                    name: "min",
                    init: function(e, t) {
                        return {
                            min: e.data("validation" + t + "Min")
                        }
                    },
                    validate: function(e, t, n) {
                        return parseFloat(t) < parseFloat(n.min) && !n.negative || parseFloat(t) >= parseFloat(n.min) && n.negative
                    }
                },
                maxlength: {
                    name: "maxlength",
                    init: function(e, t) {
                        return {
                            maxlength: e.data("validation" + t + "Maxlength")
                        }
                    },
                    validate: function(e, t, n) {
                        return t.length > n.maxlength && !n.negative || t.length <= n.maxlength && n.negative
                    }
                },
                minlength: {
                    name: "minlength",
                    init: function(e, t) {
                        return {
                            minlength: e.data("validation" + t + "Minlength")
                        }
                    },
                    validate: function(e, t, n) {
                        return t.length < n.minlength && !n.negative || t.length >= n.minlength && n.negative
                    }
                },
                maxchecked: {
                    name: "maxchecked",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return n.bind("click.validation", function() {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            maxchecked: e.data("validation" + t + "Maxchecked"),
                            elements: n
                        }
                    },
                    validate: function(e, t, n) {
                        return n.elements.filter(":checked").length > n.maxchecked && !n.negative || n.elements.filter(":checked").length <= n.maxchecked && n.negative
                    },
                    blockSubmit: !0
                },
                minchecked: {
                    name: "minchecked",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return n.bind("click.validation", function() {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            minchecked: e.data("validation" + t + "Minchecked"),
                            elements: n
                        }
                    },
                    validate: function(e, t, n) {
                        return n.elements.filter(":checked").length < n.minchecked && !n.negative || n.elements.filter(":checked").length >= n.minchecked && n.negative
                    },
                    blockSubmit: !0
                }
            },
            builtInValidators: {
                email: {
                    name: "Email",
                    type: "shortcut",
                    shortcut: "validemail"
                },
                validemail: {
                    name: "Validemail",
                    type: "regex",
                    regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                    message: "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"
                },
                passwordagain: {
                    name: "Passwordagain",
                    type: "match",
                    match: "password",
                    message: "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"
                },
                positive: {
                    name: "Positive",
                    type: "shortcut",
                    shortcut: "number,positivenumber"
                },
                negative: {
                    name: "Negative",
                    type: "shortcut",
                    shortcut: "number,negativenumber"
                },
                number: {
                    name: "Number",
                    type: "regex",
                    regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                    message: "Must be a number\x3c!-- data-validator-number-message to override --\x3e"
                },
                integer: {
                    name: "Integer",
                    type: "regex",
                    regex: "[+-]?\\d+",
                    message: "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"
                },
                positivenumber: {
                    name: "Positivenumber",
                    type: "min",
                    min: 0,
                    message: "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"
                },
                negativenumber: {
                    name: "Negativenumber",
                    type: "max",
                    max: 0,
                    message: "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"
                },
                required: {
                    name: "Required",
                    type: "required",
                    message: "This is required\x3c!-- data-validator-required-message to override --\x3e"
                },
                checkone: {
                    name: "Checkone",
                    type: "minchecked",
                    minchecked: 1,
                    message: "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"
                }
            }
        },
        p = function(e) {
            return e.toLowerCase().replace(/(^|\s)([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            })
        },
        g = function(e) {
            var t = e.val(),
                n = e.attr("type");
            return "checkbox" === n && (t = e.is(":checked") ? t : ""), "radio" === n && (t = 0 < d('input[name="' + e.attr("name") + '"]:checked').length ? t : ""), t
        };
    d.fn.jqBootstrapValidation = function(e) {
        return n.methods[e] ? n.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (d.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : n.methods.init.apply(this, arguments)
    }, d.jqBootstrapValidation = function(e) {
        d(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery), $(function() {
        $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
            preventSubmit: !0,
            submitError: function(e, t, n) {},
            submitSuccess: function(e, t) {
                t.preventDefault();
                var n = $("input#name").val(),
                    i = $("input#email").val(),
                    r = $("textarea#message").val(),
                    o = $("#g-recaptcha-response").val(),
                    a = n;
                0 <= a.indexOf(" ") && (a = n.split(" ").slice(0, -1).join(" ")), $this = $("#sendMessageButton"), $this.prop("disabled", !0), $.ajax({
                    url: "../php/contact_me.php",
                    type: "POST",
                    data: {
                        name: n,
                        email: i,
                        message: r,
                        captcha: o
                    },
                    cache: !1,
                    success: function(e) {
                        console.log(e), $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Din besked er blevet sendt. Jeg svarer hurtigst mulig. </strong>"), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset")
                    },
                    error: function() {
                        $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append($("<strong>").text("Beklager " + a + ", det ser ud til, at min mail server ikke kan oprette forbindelse. PrĂ¸v igen senere!")), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                    },
                    complete: function() {
                        setTimeout(function() {
                            $this.prop("disabled", !1)
                        }, 1e3)
                    }
                })
            },
            filter: function() {
                return $(this).is(":visible")
            }
        }), $('a[data-toggle="tab"]').click(function(e) {
            e.preventDefault(), $(this).tab("show")
        })
    }), $("#name").focus(function() {
        $("#success").html("")
    }),
    function(t) {
        "use strict";

        function e() {
            100 < t("#mainNav").offset().top ? t("#mainNav").addClass("navbar-shrink") : t("#mainNav").removeClass("navbar-shrink")
        }
        t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = t(this.hash);
                if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return t("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3, "easeInOutExpo"), !1
            }
        }), t(document).scroll(function() {
            100 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn() : t(".scroll-to-top").fadeOut()
        }), t(".js-scroll-trigger").click(function() {
            t(".navbar-collapse").collapse("hide")
        }), t("body").scrollspy({
            target: "#mainNav",
            offset: 80
        }), e(), t(window).scroll(e), t(function() {
            t("body").on("input propertychange", ".floating-label-form-group", function(e) {
                t(this).toggleClass("floating-label-form-group-with-value", !!t(e.target).val())
            }).on("focus", ".floating-label-form-group", function() {
                t(this).addClass("floating-label-form-group-with-focus")
            }).on("blur", ".floating-label-form-group", function() {
                t(this).removeClass("floating-label-form-group-with-focus")
            })
        })
    }(jQuery),
    function(r) {
        var e = 0;
        r.fn.scrolled = function(t, n) {
            "function" == typeof t && (n = t, t = 200);
            var i = "scrollTimer" + e++;
            this.scroll(function() {
                var e = r(this);
                clearTimeout(e.data(i)), e.data(i, setTimeout(function() {
                    e.removeData(i), n.call(e[0])
                }, t))
            })
        }, r.fn.AniView = function(e) {
            var i = r.extend({
                    animateThreshold: 0,
                    scrollPollInterval: 20
                }, e),
                t = this;

            function n(e) {
                r(e).each(function(e, t) {
                    var n = r(t).parent(".av-container");
                    r(t).is("[data-av-animation]") && !r(n).hasClass("av-visible") && function(e) {
                        return r(e).offset().top < r(window).scrollTop() + r(window).height() - i.animateThreshold
                    }(n) && (r(t).css("opacity", 1), r(n).addClass("av-visible"), r(t).addClass("animated " + r(t).attr("data-av-animation")))
                })
            }
            r(t).each(function(e, t) {
                r(t).wrap('<div class="av-container"></div>'), r(t).css("opacity", 0)
            }), n(t), r(window).scrolled(i.scrollPollInterval, function() {
                n(t)
            })
        }
    }(jQuery);

    /* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
  
    /* particles.js variables with default values */
    this.pJS = {
      canvas: {
        el: canvas_el,
        w: canvas_el.offsetWidth,
        h: canvas_el.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 20,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        array: []
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 100,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 200,
            size: 80,
            duration: 0.4
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: false,
      fn: {
        interact: {},
        modes: {},
        vendors:{}
      },
      tmp: {}
    };
  
    var pJS = this.pJS;
  
    /* params settings */
    if(params){
      Object.deepExtend(pJS, params);
    }
  
    pJS.tmp.obj = {
      size_value: pJS.particles.size.value,
      size_anim_speed: pJS.particles.size.anim.speed,
      move_speed: pJS.particles.move.speed,
      line_linked_distance: pJS.particles.line_linked.distance,
      line_linked_width: pJS.particles.line_linked.width,
      mode_grab_distance: pJS.interactivity.modes.grab.distance,
      mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
      mode_bubble_size: pJS.interactivity.modes.bubble.size,
      mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };
  
  
    pJS.fn.retinaInit = function(){
  
      if(pJS.retina_detect && window.devicePixelRatio > 1){
        pJS.canvas.pxratio = window.devicePixelRatio; 
        pJS.tmp.retina = true;
      } 
      else{
        pJS.canvas.pxratio = 1;
        pJS.tmp.retina = false;
      }
  
      pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
      pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
  
      pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
      pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
      pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
      pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
      pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
      pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
      pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
      pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
      pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  
    };
  
  
  
    /* ---------- pJS functions - canvas ------------ */
  
    pJS.fn.canvasInit = function(){
      pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    };
  
    pJS.fn.canvasSize = function(){
  
      pJS.canvas.el.width = pJS.canvas.w;
      pJS.canvas.el.height = pJS.canvas.h;
  
      if(pJS && pJS.interactivity.events.resize){
  
        window.addEventListener('resize', function(){
  
            pJS.canvas.w = pJS.canvas.el.offsetWidth;
            pJS.canvas.h = pJS.canvas.el.offsetHeight;
  
            /* resize canvas */
            if(pJS.tmp.retina){
              pJS.canvas.w *= pJS.canvas.pxratio;
              pJS.canvas.h *= pJS.canvas.pxratio;
            }
  
            pJS.canvas.el.width = pJS.canvas.w;
            pJS.canvas.el.height = pJS.canvas.h;
  
            /* repaint canvas on anim disabled */
            if(!pJS.particles.move.enable){
              pJS.fn.particlesEmpty();
              pJS.fn.particlesCreate();
              pJS.fn.particlesDraw();
              pJS.fn.vendors.densityAutoParticles();
            }
  
          /* density particles enabled */
          pJS.fn.vendors.densityAutoParticles();
  
        });
  
      }
  
    };
  
  
    pJS.fn.canvasPaint = function(){
      pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
  
    pJS.fn.canvasClear = function(){
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
  
  
    /* --------- pJS functions - particles ----------- */
  
    pJS.fn.particle = function(color, opacity, position){
  
      /* size */
      this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
      if(pJS.particles.size.anim.enable){
        this.size_status = false;
        this.vs = pJS.particles.size.anim.speed / 100;
        if(!pJS.particles.size.anim.sync){
          this.vs = this.vs * Math.random();
        }
      }
  
      /* position */
      this.x = position ? position.x : Math.random() * pJS.canvas.w;
      this.y = position ? position.y : Math.random() * pJS.canvas.h;
  
      /* check position  - into the canvas */
      if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
      else if(this.x < this.radius*2) this.x = this.x + this.radius;
      if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
      else if(this.y < this.radius*2) this.y = this.y + this.radius;
  
      /* check position - avoid overlap */
      if(pJS.particles.move.bounce){
        pJS.fn.vendors.checkOverlap(this, position);
      }
  
      /* color */
      this.color = {};
      if(typeof(color.value) == 'object'){
  
        if(color.value instanceof Array){
          var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
          this.color.rgb = hexToRgb(color_selected);
        }else{
          if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
            this.color.rgb = {
              r: color.value.r,
              g: color.value.g,
              b: color.value.b
            }
          }
          if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
            this.color.hsl = {
              h: color.value.h,
              s: color.value.s,
              l: color.value.l
            }
          }
        }
  
      }
      else if(color.value == 'random'){
        this.color.rgb = {
          r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
          g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
          b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
        }
      }
      else if(typeof(color.value) == 'string'){
        this.color = color;
        this.color.rgb = hexToRgb(this.color.value);
      }
  
      /* opacity */
      this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
      if(pJS.particles.opacity.anim.enable){
        this.opacity_status = false;
        this.vo = pJS.particles.opacity.anim.speed / 100;
        if(!pJS.particles.opacity.anim.sync){
          this.vo = this.vo * Math.random();
        }
      }
  
      /* animation - velocity for speed */
      var velbase = {}
      switch(pJS.particles.move.direction){
        case 'top':
          velbase = { x:0, y:-1 };
        break;
        case 'top-right':
          velbase = { x:0.5, y:-0.5 };
        break;
        case 'right':
          velbase = { x:1, y:-0 };
        break;
        case 'bottom-right':
          velbase = { x:0.5, y:0.5 };
        break;
        case 'bottom':
          velbase = { x:0, y:1 };
        break;
        case 'bottom-left':
          velbase = { x:-0.5, y:1 };
        break;
        case 'left':
          velbase = { x:-1, y:0 };
        break;
        case 'top-left':
          velbase = { x:-0.5, y:-0.5 };
        break;
        default:
          velbase = { x:0, y:0 };
        break;
      }
  
      if(pJS.particles.move.straight){
        this.vx = velbase.x;
        this.vy = velbase.y;
        if(pJS.particles.move.random){
          this.vx = this.vx * (Math.random());
          this.vy = this.vy * (Math.random());
        }
      }else{
        this.vx = velbase.x + Math.random()-0.5;
        this.vy = velbase.y + Math.random()-0.5;
      }
  
      // var theta = 2.0 * Math.PI * Math.random();
      // this.vx = Math.cos(theta);
      // this.vy = Math.sin(theta);
  
      this.vx_i = this.vx;
      this.vy_i = this.vy;
  
      
  
      /* if shape is image */
  
      var shape_type = pJS.particles.shape.type;
      if(typeof(shape_type) == 'object'){
        if(shape_type instanceof Array){
          var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
          this.shape = shape_selected;
        }
      }else{
        this.shape = shape_type;
      }
  
      if(this.shape == 'image'){
        var sh = pJS.particles.shape;
        this.img = {
          src: sh.image.src,
          ratio: sh.image.width / sh.image.height
        }
        if(!this.img.ratio) this.img.ratio = 1;
        if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
          pJS.fn.vendors.createSvgImg(this);
          if(pJS.tmp.pushing){
            this.img.loaded = false;
          }
        }
      }
  
      
  
    };
  
  
    pJS.fn.particle.prototype.draw = function() {
  
      var p = this;
  
      if(p.radius_bubble != undefined){
        var radius = p.radius_bubble; 
      }else{
        var radius = p.radius;
      }
  
      if(p.opacity_bubble != undefined){
        var opacity = p.opacity_bubble;
      }else{
        var opacity = p.opacity;
      }
  
      if(p.color.rgb){
        var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
      }else{
        var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
      }
  
      pJS.canvas.ctx.fillStyle = color_value;
      pJS.canvas.ctx.beginPath();
  
      switch(p.shape){
  
        case 'circle':
          pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;
  
        case 'edge':
          pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
        break;
  
        case 'triangle':
          pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
        break;
  
        case 'polygon':
          pJS.fn.vendors.drawShape(
            pJS.canvas.ctx,
            p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
            p.y - radius / (2.66/3.5), // startY
            radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
            pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
            1 // sideCountDenominator
          );
        break;
  
        case 'star':
          pJS.fn.vendors.drawShape(
            pJS.canvas.ctx,
            p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
            p.y - radius / (2*2.66/3.5), // startY
            radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
            pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
            2 // sideCountDenominator
          );
        break;
  
        case 'image':
  
          function draw(){
            pJS.canvas.ctx.drawImage(
              img_obj,
              p.x-radius,
              p.y-radius,
              radius*2,
              radius*2 / p.img.ratio
            );
          }
  
          if(pJS.tmp.img_type == 'svg'){
            var img_obj = p.img.obj;
          }else{
            var img_obj = pJS.tmp.img_obj;
          }
  
          if(img_obj){
            draw();
          }
  
        break;
  
      }
  
      pJS.canvas.ctx.closePath();
  
      if(pJS.particles.shape.stroke.width > 0){
        pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
        pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
        pJS.canvas.ctx.stroke();
      }
      
      pJS.canvas.ctx.fill();
      
    };
  
  
    pJS.fn.particlesCreate = function(){
      for(var i = 0; i < pJS.particles.number.value; i++) {
        pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
      }
    };
  
    pJS.fn.particlesUpdate = function(){
  
      for(var i = 0; i < pJS.particles.array.length; i++){
  
        /* the particle */
        var p = pJS.particles.array[i];
  
        // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
        // var f = -BANG_SIZE / d;
        // if ( d < BANG_SIZE ) {
        //     var t = Math.atan2( dy, dx );
        //     p.vx = f * Math.cos(t);
        //     p.vy = f * Math.sin(t);
        // }
  
        /* move the particle */
        if(pJS.particles.move.enable){
          var ms = pJS.particles.move.speed/2;
          p.x += p.vx * ms;
          p.y += p.vy * ms;
        }
  
        /* change opacity status */
        if(pJS.particles.opacity.anim.enable) {
          if(p.opacity_status == true) {
            if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
            p.opacity += p.vo;
          }else {
            if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
            p.opacity -= p.vo;
          }
          if(p.opacity < 0) p.opacity = 0;
        }
  
        /* change size */
        if(pJS.particles.size.anim.enable){
          if(p.size_status == true){
            if(p.radius >= pJS.particles.size.value) p.size_status = false;
            p.radius += p.vs;
          }else{
            if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
            p.radius -= p.vs;
          }
          if(p.radius < 0) p.radius = 0;
        }
  
        /* change particle position if it is out of canvas */
        if(pJS.particles.move.out_mode == 'bounce'){
          var new_pos = {
            x_left: p.radius,
            x_right:  pJS.canvas.w,
            y_top: p.radius,
            y_bottom: pJS.canvas.h
          }
        }else{
          var new_pos = {
            x_left: -p.radius,
            x_right: pJS.canvas.w + p.radius,
            y_top: -p.radius,
            y_bottom: pJS.canvas.h + p.radius
          }
        }
  
        if(p.x - p.radius > pJS.canvas.w){
          p.x = new_pos.x_left;
          p.y = Math.random() * pJS.canvas.h;
        }
        else if(p.x + p.radius < 0){
          p.x = new_pos.x_right;
          p.y = Math.random() * pJS.canvas.h;
        }
        if(p.y - p.radius > pJS.canvas.h){
          p.y = new_pos.y_top;
          p.x = Math.random() * pJS.canvas.w;
        }
        else if(p.y + p.radius < 0){
          p.y = new_pos.y_bottom;
          p.x = Math.random() * pJS.canvas.w;
        }
  
        /* out of canvas modes */
        switch(pJS.particles.move.out_mode){
          case 'bounce':
            if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (p.x - p.radius < 0) p.vx = -p.vx;
            if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
        }
  
        /* events */
        if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
          pJS.fn.modes.grabParticle(p);
        }
  
        if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
          pJS.fn.modes.bubbleParticle(p);
        }
  
        if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
          pJS.fn.modes.repulseParticle(p);
        }
  
        /* interaction auto between particles */
        if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
          for(var j = i + 1; j < pJS.particles.array.length; j++){
            var p2 = pJS.particles.array[j];
  
            /* link particles */
            if(pJS.particles.line_linked.enable){
              pJS.fn.interact.linkParticles(p,p2);
            }
  
            /* attract particles */
            if(pJS.particles.move.attract.enable){
              pJS.fn.interact.attractParticles(p,p2);
            }
  
            /* bounce particles */
            if(pJS.particles.move.bounce){
              pJS.fn.interact.bounceParticles(p,p2);
            }
  
          }
        }
  
  
      }
  
    };
  
    pJS.fn.particlesDraw = function(){
  
      /* clear canvas */
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  
      /* update each particles param */
      pJS.fn.particlesUpdate();
  
      /* draw each particle */
      for(var i = 0; i < pJS.particles.array.length; i++){
        var p = pJS.particles.array[i];
        p.draw();
      }
  
    };
  
    pJS.fn.particlesEmpty = function(){
      pJS.particles.array = [];
    };
  
    pJS.fn.particlesRefresh = function(){
  
      /* init all */
      cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
      cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      pJS.tmp.source_svg = undefined;
      pJS.tmp.img_obj = undefined;
      pJS.tmp.count_svg = 0;
      pJS.fn.particlesEmpty();
      pJS.fn.canvasClear();
      
      /* restart */
      pJS.fn.vendors.start();
  
    };
  
  
    /* ---------- pJS functions - particles interaction ------------ */
  
    pJS.fn.interact.linkParticles = function(p1, p2){
  
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);
  
      /* draw a line between p1 and p2 if the distance between them is under the config distance */
      if(dist <= pJS.particles.line_linked.distance){
  
        var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;
  
        if(opacity_line > 0){        
          
          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p1.x, p1.y);
          pJS.canvas.ctx.lineTo(p2.x, p2.y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
  
        }
  
      }
  
    };
  
  
    pJS.fn.interact.attractParticles  = function(p1, p2){
  
      /* condensed particles */
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);
  
      if(dist <= pJS.particles.line_linked.distance){
  
        var ax = dx/(pJS.particles.move.attract.rotateX*1000),
            ay = dy/(pJS.particles.move.attract.rotateY*1000);
  
        p1.vx -= ax;
        p1.vy -= ay;
  
        p2.vx += ax;
        p2.vy += ay;
  
      }
      
  
    }
  
  
    pJS.fn.interact.bounceParticles = function(p1, p2){
  
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy),
          dist_p = p1.radius+p2.radius;
  
      if(dist <= dist_p){
        p1.vx = -p1.vx;
        p1.vy = -p1.vy;
  
        p2.vx = -p2.vx;
        p2.vy = -p2.vy;
      }
  
    }
  
  
    /* ---------- pJS functions - modes events ------------ */
  
    pJS.fn.modes.pushParticles = function(nb, pos){
  
      pJS.tmp.pushing = true;
  
      for(var i = 0; i < nb; i++){
        pJS.particles.array.push(
          new pJS.fn.particle(
            pJS.particles.color,
            pJS.particles.opacity.value,
            {
              'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
              'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
            }
          )
        )
        if(i == nb-1){
          if(!pJS.particles.move.enable){
            pJS.fn.particlesDraw();
          }
          pJS.tmp.pushing = false;
        }
      }
  
    };
  
  
    pJS.fn.modes.removeParticles = function(nb){
  
      pJS.particles.array.splice(0, nb);
      if(!pJS.particles.move.enable){
        pJS.fn.particlesDraw();
      }
  
    };
  
  
    pJS.fn.modes.bubbleParticle = function(p){
  
      /* on hover event */
      if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){
  
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
  
        function init(){
          p.opacity_bubble = p.opacity;
          p.radius_bubble = p.radius;
        }
  
        /* mousemove - check ratio */
        if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
  
          if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
            
            /* size */
            if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){
  
              if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
                var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
                if(size >= 0){
                  p.radius_bubble = size;
                }
              }else{
                var dif = p.radius - pJS.interactivity.modes.bubble.size,
                    size = p.radius - (dif*ratio);
                if(size > 0){
                  p.radius_bubble = size;
                }else{
                  p.radius_bubble = 0;
                }
              }
  
            }
  
            /* opacity */
            if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){
  
              if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
                var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
                if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                  p.opacity_bubble = opacity;
                }
              }else{
                var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
                if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                  p.opacity_bubble = opacity;
                }
              }
  
            }
  
          }
  
        }else{
          init();
        }
  
  
        /* mouseleave */
        if(pJS.interactivity.status == 'mouseleave'){
          init();
        }
      
      }
  
      /* on click event */
      else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){
  
  
        if(pJS.tmp.bubble_clicking){
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;
  
          if(time_spent > pJS.interactivity.modes.bubble.duration){
            pJS.tmp.bubble_duration_end = true;
          }
  
          if(time_spent > pJS.interactivity.modes.bubble.duration*2){
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }
  
  
        function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){
  
          if(bubble_param != particles_param){
  
            if(!pJS.tmp.bubble_duration_end){
              if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
                if(p_obj_bubble != undefined) var obj = p_obj_bubble;
                else var obj = p_obj;
                if(obj != bubble_param){
                  var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                  if(id == 'size') p.radius_bubble = value;
                  if(id == 'opacity') p.opacity_bubble = value;
                }
              }else{
                if(id == 'size') p.radius_bubble = undefined;
                if(id == 'opacity') p.opacity_bubble = undefined;
              }
            }else{
              if(p_obj_bubble != undefined){
                var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                    dif = bubble_param - value_tmp;
                    value = bubble_param + dif;
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }
  
          }
  
        }
  
        if(pJS.tmp.bubble_clicking){
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */
          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
  
      }
  
    };
  
  
    pJS.fn.modes.repulseParticle = function(p){
  
      if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
  
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
  
        var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
            repulseRadius = pJS.interactivity.modes.repulse.distance,
            velocity = 100,
            repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
        
        var pos = {
          x: p.x + normVec.x * repulseFactor,
          y: p.y + normVec.y * repulseFactor
        }
  
        if(pJS.particles.move.out_mode == 'bounce'){
          if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
          if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
        }else{
          p.x = pos.x;
          p.y = pos.y;
        }
      
      }
  
  
      else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
  
        if(!pJS.tmp.repulse_finish){
          pJS.tmp.repulse_count++;
          if(pJS.tmp.repulse_count == pJS.particles.array.length){
            pJS.tmp.repulse_finish = true;
          }
        }
  
        if(pJS.tmp.repulse_clicking){
  
          var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);
  
          var dx = pJS.interactivity.mouse.click_pos_x - p.x,
              dy = pJS.interactivity.mouse.click_pos_y - p.y,
              d = dx*dx + dy*dy;
  
          var force = -repulseRadius / d * 1;
  
          function process(){
  
            var f = Math.atan2(dy,dx);
            p.vx = force * Math.cos(f);
            p.vy = force * Math.sin(f);
  
            if(pJS.particles.move.out_mode == 'bounce'){
              var pos = {
                x: p.x + p.vx,
                y: p.y + p.vy
              }
              if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
              else if (pos.x - p.radius < 0) p.vx = -p.vx;
              if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
              else if (pos.y - p.radius < 0) p.vy = -p.vy;
            }
  
          }
  
          // default
          if(d <= repulseRadius){
            process();
          }
  
          // bang - slow motion mode
          // if(!pJS.tmp.repulse_finish){
          //   if(d <= repulseRadius){
          //     process();
          //   }
          // }else{
          //   process();
          // }
          
  
        }else{
  
          if(pJS.tmp.repulse_clicking == false){
  
            p.vx = p.vx_i;
            p.vy = p.vy_i;
          
          }
  
        }
  
      }
  
    }
  
  
    pJS.fn.modes.grabParticle = function(p){
  
      if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){
  
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
  
        /* draw a line between the cursor and the particle if the distance between them is under the config distance */
        if(dist_mouse <= pJS.interactivity.modes.grab.distance){
  
          var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;
  
          if(opacity_line > 0){
  
            /* style */
            var color_line = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
            
            /* path */
            pJS.canvas.ctx.beginPath();
            pJS.canvas.ctx.moveTo(p.x, p.y);
            pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
            pJS.canvas.ctx.stroke();
            pJS.canvas.ctx.closePath();
  
          }
  
        }
  
      }
  
    };
  
  
  
    /* ---------- pJS functions - vendors ------------ */
  
    pJS.fn.vendors.eventsListeners = function(){
  
      /* events target element */
      if(pJS.interactivity.detect_on == 'window'){
        pJS.interactivity.el = window;
      }else{
        pJS.interactivity.el = pJS.canvas.el;
      }
  
  
      /* detect mouse pos - on hover / click event */
      if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){
  
        /* el on mousemove */
        pJS.interactivity.el.addEventListener('mousemove', function(e){
  
          if(pJS.interactivity.el == window){
            var pos_x = e.clientX,
                pos_y = e.clientY;
          }
          else{
            var pos_x = e.offsetX || e.clientX,
                pos_y = e.offsetY || e.clientY;
          }
  
          pJS.interactivity.mouse.pos_x = pos_x;
          pJS.interactivity.mouse.pos_y = pos_y;
  
          if(pJS.tmp.retina){
            pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
            pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
          }
  
          pJS.interactivity.status = 'mousemove';
  
        });
  
        /* el on onmouseleave */
        pJS.interactivity.el.addEventListener('mouseleave', function(e){
  
          pJS.interactivity.mouse.pos_x = null;
          pJS.interactivity.mouse.pos_y = null;
          pJS.interactivity.status = 'mouseleave';
  
        });
  
      }
  
      /* on click event */
      if(pJS.interactivity.events.onclick.enable){
  
        pJS.interactivity.el.addEventListener('click', function(){
  
          pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
          pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
          pJS.interactivity.mouse.click_time = new Date().getTime();
  
          if(pJS.interactivity.events.onclick.enable){
  
            switch(pJS.interactivity.events.onclick.mode){
  
              case 'push':
                if(pJS.particles.move.enable){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }else{
                  if(pJS.interactivity.modes.push.particles_nb == 1){
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                  }
                  else if(pJS.interactivity.modes.push.particles_nb > 1){
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                  }
                }
              break;
  
              case 'remove':
                pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;
  
              case 'bubble':
                pJS.tmp.bubble_clicking = true;
              break;
  
              case 'repulse':
                pJS.tmp.repulse_clicking = true;
                pJS.tmp.repulse_count = 0;
                pJS.tmp.repulse_finish = false;
                setTimeout(function(){
                  pJS.tmp.repulse_clicking = false;
                }, pJS.interactivity.modes.repulse.duration*1000)
              break;
  
            }
  
          }
  
        });
          
      }
  
  
    };
  
    pJS.fn.vendors.densityAutoParticles = function(){
  
      if(pJS.particles.number.density.enable){
  
        /* calc area */
        var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
        if(pJS.tmp.retina){
          area = area/(pJS.canvas.pxratio*2);
        }
  
        /* calc number of particles based on density area */
        var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
  
        /* add or remove X particles */
        var missing_particles = pJS.particles.array.length - nb_particles;
        if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
        else pJS.fn.modes.removeParticles(missing_particles);
  
      }
  
    };
  
  
    pJS.fn.vendors.checkOverlap = function(p1, position){
      for(var i = 0; i < pJS.particles.array.length; i++){
        var p2 = pJS.particles.array[i];
  
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);
  
        if(dist <= p1.radius + p2.radius){
          p1.x = position ? position.x : Math.random() * pJS.canvas.w;
          p1.y = position ? position.y : Math.random() * pJS.canvas.h;
          pJS.fn.vendors.checkOverlap(p1);
        }
      }
    };
  
  
    pJS.fn.vendors.createSvgImg = function(p){
  
      /* set color to svg element */
      var svgXml = pJS.tmp.source_svg,
          rgbHex = /#([0-9A-F]{3,6})/gi,
          coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
            if(p.color.rgb){
              var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
            }else{
              var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
            }
            return color_value;
          });
  
      /* prepare to create img with colored svg */
      var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
          DOMURL = window.URL || window.webkitURL || window,
          url = DOMURL.createObjectURL(svg);
  
      /* create particle img obj */
      var img = new Image();
      img.addEventListener('load', function(){
        p.img.obj = img;
        p.img.loaded = true;
        DOMURL.revokeObjectURL(url);
        pJS.tmp.count_svg++;
      });
      img.src = url;
  
    };
  
  
    pJS.fn.vendors.destroypJS = function(){
      cancelAnimationFrame(pJS.fn.drawAnimFrame);
      canvas_el.remove();
      pJSDom = null;
    };
  
  
    pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){
  
      // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
      var sideCount = sideCountNumerator * sideCountDenominator;
      var decimalSides = sideCountNumerator / sideCountDenominator;
      var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
      var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
      c.save();
      c.beginPath();
      c.translate(startX, startY);
      c.moveTo(0,0);
      for (var i = 0; i < sideCount; i++) {
        c.lineTo(sideLength,0);
        c.translate(sideLength,0);
        c.rotate(interiorAngle);
      }
      //c.stroke();
      c.fill();
      c.restore();
  
    };
  
    pJS.fn.vendors.exportImg = function(){
      window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
    };
  
  
    pJS.fn.vendors.loadImg = function(type){
  
      pJS.tmp.img_error = undefined;
  
      if(pJS.particles.shape.image.src != ''){
  
        if(type == 'svg'){
  
          var xhr = new XMLHttpRequest();
          xhr.open('GET', pJS.particles.shape.image.src);
          xhr.onreadystatechange = function (data) {
            if(xhr.readyState == 4){
              if(xhr.status == 200){
                pJS.tmp.source_svg = data.currentTarget.response;
                pJS.fn.vendors.checkBeforeDraw();
              }else{
                console.log('Error pJS - Image not found');
                pJS.tmp.img_error = true;
              }
            }
          }
          xhr.send();
  
        }else{
  
          var img = new Image();
          img.addEventListener('load', function(){
            pJS.tmp.img_obj = img;
            pJS.fn.vendors.checkBeforeDraw();
          });
          img.src = pJS.particles.shape.image.src;
  
        }
  
      }else{
        console.log('Error pJS - No image.src');
        pJS.tmp.img_error = true;
      }
  
    };
  
  
    pJS.fn.vendors.draw = function(){
  
      if(pJS.particles.shape.type == 'image'){
  
        if(pJS.tmp.img_type == 'svg'){
  
          if(pJS.tmp.count_svg >= pJS.particles.number.value){
            pJS.fn.particlesDraw();
            if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }else{
            //console.log('still loading...');
            if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }
  
        }else{
  
          if(pJS.tmp.img_obj != undefined){
            pJS.fn.particlesDraw();
            if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }else{
            if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }
  
        }
  
      }else{
        pJS.fn.particlesDraw();
        if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
      }
  
    };
  
  
    pJS.fn.vendors.checkBeforeDraw = function(){
  
      // if shape is image
      if(pJS.particles.shape.type == 'image'){
  
        if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
          pJS.tmp.checkAnimFrame = requestAnimFrame(check);
        }else{
          //console.log('images loaded! cancel check');
          cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
          if(!pJS.tmp.img_error){
            pJS.fn.vendors.init();
            pJS.fn.vendors.draw();
          }
          
        }
  
      }else{
        pJS.fn.vendors.init();
        pJS.fn.vendors.draw();
      }
  
    };
  
  
    pJS.fn.vendors.init = function(){
  
      /* init canvas + particles */
      pJS.fn.retinaInit();
      pJS.fn.canvasInit();
      pJS.fn.canvasSize();
      pJS.fn.canvasPaint();
      pJS.fn.particlesCreate();
      pJS.fn.vendors.densityAutoParticles();
  
      /* particles.line_linked - convert hex colors to rgb */
      pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  
    };
  
  
    pJS.fn.vendors.start = function(){
  
      if(isInArray('image', pJS.particles.shape.type)){
        pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
        pJS.fn.vendors.loadImg(pJS.tmp.img_type);
      }else{
        pJS.fn.vendors.checkBeforeDraw();
      }
  
    };
  
  
  
  
    /* ---------- pJS - start ------------ */
  
  
    pJS.fn.vendors.eventsListeners();
  
    pJS.fn.vendors.start();
    
  
  
  };
  
  /* ---------- global functions - vendors ------------ */
  
  Object.deepExtend = function(destination, source) {
    for (var property in source) {
      if (source[property] && source[property].constructor &&
       source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        arguments.callee(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  };
  
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  })();
  
  window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame         ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame    ||
      window.oCancelRequestAnimationFrame      ||
      window.msCancelRequestAnimationFrame     ||
      clearTimeout
  } )();
  
  function hexToRgb(hex){
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
       return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  };
  
  function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
  };
  
  function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }
  
  
  /* ---------- particles.js functions - start ------------ */
  
  window.pJSDom = [];
  
  window.particlesJS = function(tag_id, params){
  
    //console.log(params);
  
    /* no string id? so it's object params, and set the id with default id */
    if(typeof(tag_id) != 'string'){
      params = tag_id;
      tag_id = 'particles-js';
    }
  
    /* no id? set the id to default id */
    if(!tag_id){
      tag_id = 'particles-js';
    }
  
    /* pJS elements */
    var pJS_tag = document.getElementById(tag_id),
        pJS_canvas_class = 'particles-js-canvas-el',
        exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  
    /* remove canvas if exists into the pJS target tag */
    if(exist_canvas.length){
      while(exist_canvas.length > 0){
        pJS_tag.removeChild(exist_canvas[0]);
      }
    }
  
    /* create canvas element */
    var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;
  
    /* set size canvas */
    canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";
  
    /* append canvas */
    var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  
    /* launch particle.js */
    if(canvas != null){
      pJSDom.push(new pJS(tag_id, params));
    }
  
  };
  
  window.particlesJS.load = function(tag_id, path_config_json, callback){
  
    /* load json config */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function (data) {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          var params = JSON.parse(data.currentTarget.response);
          window.particlesJS(tag_id, params);
          if(callback) callback();
        }else{
          console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
          console.log('Error pJS - File config not found');
        }
      }
    };
    xhr.send();
  
  };