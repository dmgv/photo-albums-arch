parcelRequire = (function(e, r, n, t) {
  let i = typeof parcelRequire === "function" && parcelRequire,
    o = typeof require === "function" && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        const f = typeof parcelRequire === "function" && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && typeof n === "string") return o(n);
        const c = new Error(`Cannot find module '${n}'`);
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function(r) {
        return e[n][1][r] || r;
      };
      const l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {},
      ];
    });
  for (let f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    const c = u(n[n.length - 1]);
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = c)
      : typeof define === "function" && define.amd
        ? define(() => c)
        : t && (this[t] = c);
  }
  return u;
})(
  {
    61: [
      function(require, module, exports) {
        let t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function() {
          try {
            t = typeof setTimeout === "function" ? setTimeout : r;
          } catch (e) {
            t = r;
          }
          try {
            e = typeof clearTimeout === "function" ? clearTimeout : o;
          } catch (t) {
            e = o;
          }
        })();
        let c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            const t = i(f);
            l = !0;
            for (let e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function(t) {
          const e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (let n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), s.length !== 1 || l || i(h);
        }),
          (m.prototype.run = function() {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function(t) {
            return [];
          }),
          (n.binding = function(t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function() {
            return "/";
          }),
          (n.chdir = function(t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function() {
            return 0;
          });
      },
      {},
    ],
    53: [
      function(require, module, exports) {
        const global = arguments[3];
        const process = require("process");
        let define;
        let e,
          t = arguments[3],
          n = require("process");
        !(function(e, t) {
          typeof module === "object" && typeof module.exports === "object"
            ? (module.exports = e.document
                ? t(e, !0)
                : function(e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document",
                      );
                    return t(e);
                  })
            : t(e);
        })(typeof window !== "undefined" ? window : this, (t, n) => {
          let r = [],
            i = t.document,
            o = Object.getPrototypeOf,
            a = r.slice,
            s = r.concat,
            u = r.push,
            l = r.indexOf,
            c = {},
            f = c.toString,
            p = c.hasOwnProperty,
            d = p.toString,
            h = d.call(Object),
            g = {},
            v = function(e) {
              return typeof e === "function" && typeof e.nodeType !== "number";
            },
            y = function(e) {
              return e != null && e === e.window;
            },
            m = { type: !0, src: !0, noModule: !0 };
          function x(e, t, n) {
            let r,
              o = (t = t || i).createElement("script");
            if (((o.text = e), n)) for (r in m) n[r] && (o[r] = n[r]);
            t.head.appendChild(o).parentNode.removeChild(o);
          }
          function b(e) {
            return e == null
              ? `${e}`
              : typeof e === "object" || typeof e === "function"
                ? c[f.call(e)] || "object"
                : typeof e;
          }
          var w = function(e, t) {
              return new w.fn.init(e, t);
            },
            T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          function C(e) {
            let t = !!e && "length" in e && e.length,
              n = b(e);
            return (
              !v(e) &&
              !y(e) &&
              (n === "array" ||
                t === 0 ||
                (typeof t === "number" && t > 0 && t - 1 in e))
            );
          }
          (w.fn = w.prototype = {
            jquery: "3.3.1",
            constructor: w,
            length: 0,
            toArray() {
              return a.call(this);
            },
            get(e) {
              return e == null
                ? a.call(this)
                : e < 0
                  ? this[e + this.length]
                  : this[e];
            },
            pushStack(e) {
              const t = w.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each(e) {
              return w.each(this, e);
            },
            map(e) {
              return this.pushStack(
                w.map(this, (t, n) => e.call(t, n, t)),
              );
            },
            slice() {
              return this.pushStack(a.apply(this, arguments));
            },
            first() {
              return this.eq(0);
            },
            last() {
              return this.eq(-1);
            },
            eq(e) {
              let t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end() {
              return this.prevObject || this.constructor();
            },
            push: u,
            sort: r.sort,
            splice: r.splice,
          }),
            (w.extend = w.fn.extend = function() {
              let e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
              for (
                typeof a === "boolean" &&
                  ((l = a), (a = arguments[s] || {}), s++),
                  typeof a === "object" || v(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if ((e = arguments[s]) != null)
                  for (t in e)
                    (n = a[t]),
                      a !== (r = e[t]) &&
                        (l &&
                        r &&
                        (w.isPlainObject(r) || (i = Array.isArray(r)))
                          ? (i
                              ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                              : (o = n && w.isPlainObject(n) ? n : {}),
                            (a[t] = w.extend(l, o, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
            w.extend({
              expando: `jQuery${`3.3.1${Math.random()}`.replace(/\D/g, "")}`,
              isReady: !0,
              error(e) {
                throw new Error(e);
              },
              noop() {},
              isPlainObject(e) {
                let t, n;
                return (
                  !(!e || f.call(e) !== "[object Object]") &&
                  (!(t = o(e)) ||
                    (typeof (n = p.call(t, "constructor") && t.constructor) ===
                      "function" &&
                      d.call(n) === h))
                );
              },
              isEmptyObject(e) {
                let t;
                for (t in e) return !1;
                return !0;
              },
              globalEval(e) {
                x(e);
              },
              each(e, t) {
                let n,
                  r = 0;
                if (C(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              trim(e) {
                return e == null ? "" : `${e}`.replace(T, "");
              },
              makeArray(e, t) {
                const n = t || [];
                return (
                  e != null &&
                    (C(Object(e))
                      ? w.merge(n, typeof e === "string" ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray(e, t, n) {
                return t == null ? -1 : l.call(t, e, n);
              },
              merge(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map(e, t, n) {
                let r,
                  i,
                  o = 0,
                  a = [];
                if (C(e))
                  for (r = e.length; o < r; o++)
                    (i = t(e[o], o, n)) != null && a.push(i);
                else for (o in e) (i = t(e[o], o, n)) != null && a.push(i);
                return s.apply([], a);
              },
              guid: 1,
              support: g,
            }),
            typeof Symbol === "function" &&
              (w.fn[Symbol.iterator] = r[Symbol.iterator]),
            w.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              (e, t) => {
                c[`[object ${t}]`] = t.toLowerCase();
              },
            );
          const E = (function(e) {
            let t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              y,
              m,
              x,
              b = `sizzle${1 * new Date()}`,
              w = e.document,
              T = 0,
              C = 0,
              E = ae(),
              k = ae(),
              S = ae(),
              D = function(e, t) {
                return e === t && (f = !0), 0;
              },
              N = {}.hasOwnProperty,
              A = [],
              j = A.pop,
              q = A.push,
              L = A.push,
              H = A.slice,
              O = function(e, t) {
                for (let n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              I = `\\[${M}*(${R})(?:${M}*([*^$|!~]?=)${M}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${R}))|)${M}*\\]`,
              W = `:(${R})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${I})*)|.*)\\)|)`,
              $ = new RegExp(`${M}+`, "g"),
              B = new RegExp(`^${M}+|((?:^|[^\\\\])(?:\\\\.)*)${M}+$`, "g"),
              F = new RegExp(`^${M}*,${M}*`),
              _ = new RegExp(`^${M}*([>+~]|${M})${M}*`),
              z = new RegExp(`=${M}*([^\\]'"]*?)${M}*\\]`, "g"),
              X = new RegExp(W),
              U = new RegExp(`^${R}$`),
              V = {
                ID: new RegExp(`^#(${R})`),
                CLASS: new RegExp(`^\\.(${R})`),
                TAG: new RegExp(`^(${R}|[*])`),
                ATTR: new RegExp(`^${I}`),
                PSEUDO: new RegExp(`^${W}`),
                CHILD: new RegExp(
                  `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${M}*(even|odd|(([+-]|)(\\d*)n|)${M}*(?:([+-]|)${M}*(\\d+)|))${M}*\\)|)`,
                  "i",
                ),
                bool: new RegExp(`^(?:${P})$`, "i"),
                needsContext: new RegExp(
                  `^${M}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${M}*((?:-\\d)?\\d*)${M}*\\)|)(?=[^-]|$)`,
                  "i",
                ),
              },
              G = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              K = /[+~]/,
              Z = new RegExp(`\\\\([\\da-f]{1,6}${M}?|(${M})|.)`, "ig"),
              ee = function(e, t, n) {
                const r = `0x${t}` - 65536;
                return r != r || n
                  ? t
                  : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                        (r >> 10) | 55296,
                        (1023 & r) | 56320,
                      );
              },
              te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ne = function(e, t) {
                return t
                  ? e === "\0"
                    ? "�"
                    : `${e.slice(0, -1)}\\${e
                        .charCodeAt(e.length - 1)
                        .toString(16)} `
                  : `\\${e}`;
              },
              re = function() {
                p();
              },
              ie = me(e => !0 === e.disabled && ("form" in e || "label" in e), {
                dir: "parentNode",
                next: "legend",
              });
            try {
              L.apply((A = H.call(w.childNodes)), w.childNodes),
                A[w.childNodes.length].nodeType;
            } catch (e) {
              L = {
                apply: A.length
                  ? function(e, t) {
                      q.apply(e, H.call(t));
                    }
                  : function(e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function oe(e, t, r, i) {
              let o,
                s,
                l,
                c,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                typeof e !== "string" || !e || (T !== 1 && T !== 9 && T !== 11))
              )
                return r;
              if (
                !i &&
                ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
              ) {
                if (T !== 11 && (f = J.exec(e)))
                  if ((o = f[1])) {
                    if (T === 9) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      m &&
                      (l = m.getElementById(o)) &&
                      x(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return L.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (n.qsa && !S[`${e} `] && (!v || !v.test(e))) {
                  if (T !== 1) (m = t), (y = e);
                  else if (t.nodeName.toLowerCase() !== "object") {
                    for (
                      (c = t.getAttribute("id"))
                        ? (c = c.replace(te, ne))
                        : t.setAttribute("id", (c = b)),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = `#${c} ${ye(h[s])}`;
                    (y = h.join(",")),
                      (m = (K.test(e) && ge(t.parentNode)) || t);
                  }
                  if (y)
                    try {
                      return L.apply(r, m.querySelectorAll(y)), r;
                    } catch (e) {
                    } finally {
                      c === b && t.removeAttribute("id");
                    }
                }
              }
              return u(e.replace(B, "$1"), t, r, i);
            }
            function ae() {
              const e = [];
              return function t(n, i) {
                return (
                  e.push(`${n} `) > r.cacheLength && delete t[e.shift()],
                  (t[`${n} `] = i)
                );
              };
            }
            function se(e) {
              return (e[b] = !0), e;
            }
            function ue(e) {
              let t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function le(e, t) {
              for (let n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function ce(e, t) {
              let n = t && e,
                r =
                  n &&
                  e.nodeType === 1 &&
                  t.nodeType === 1 &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function(t) {
                return t.nodeName.toLowerCase() === "input" && t.type === e;
              };
            }
            function pe(e) {
              return function(t) {
                const n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e;
              };
            }
            function de(e) {
              return function(t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ie(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function he(e) {
              return se(
                t => (
                  (t = +t),
                  se((n, r) => {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                ),
              );
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = oe.support = {}),
            (o = oe.isXML = function(e) {
              const t = e && (e.ownerDocument || e).documentElement;
              return !!t && t.nodeName !== "HTML";
            }),
            (p = oe.setDocument = function(e) {
              let t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a !== d && a.nodeType === 9 && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !o(d)),
                  w !== d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", re, !1)
                      : i.attachEvent && i.attachEvent("onunload", re)),
                  (n.attributes = ue(
                    e => (e.className = "i"),
                    !e.getAttribute("className"),
                  )),
                  (n.getElementsByTagName = ue(
                    e => (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    ),
                  )),
                  (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                  (n.getById = ue(
                    e => (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    ),
                  )),
                  n.getById
                    ? ((r.filter.ID = function(e) {
                        const t = e.replace(Z, ee);
                        return function(e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          const n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function(e) {
                        const t = e.replace(Z, ee);
                        return function(e) {
                          const n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          let n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function(e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                      }
                    : function(e, t) {
                        let n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if (e === "*") {
                          for (; (n = o[i++]); ) n.nodeType === 1 && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function(e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (y = []),
                  (v = []),
                  (n.qsa = Q.test(d.querySelectorAll)) &&
                    (ue(e => {
                      (h.appendChild(
                        e,
                      ).innerHTML = `<a id='${b}'></a><select id='${b}-\r\\' msallowcapture=''><option selected=''></option></select>`),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push(`[*^$]=${M}*(?:''|"")`),
                        e.querySelectorAll("[selected]").length ||
                          v.push(`\\[${M}*(?:value|${P})`),
                        e.querySelectorAll(`[id~=${b}-]`).length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll(`a#${b}+*`).length ||
                          v.push(".#.+[+~]");
                    }),
                    ue(e => {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      const t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push(`name${M}*[*^$|!~]?=`),
                        e.querySelectorAll(":enabled").length !== 2 &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        e.querySelectorAll(":disabled").length !== 2 &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = Q.test(
                    (m =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector),
                  )) &&
                    ue(e => {
                      (n.disconnectedMatch = m.call(e, "*")),
                        m.call(e, "[s!='']:x"),
                        y.push("!=", W);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (y = y.length && new RegExp(y.join("|"))),
                  (t = Q.test(h.compareDocumentPosition)),
                  (x =
                    t || Q.test(h.contains)
                      ? function(e, t) {
                          let n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              r.nodeType !== 1 ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function(e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (D = t
                    ? function(e, t) {
                        if (e === t) return (f = !0), 0;
                        let r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === d || (e.ownerDocument === w && x(w, e))
                              ? -1
                              : t === d || (t.ownerDocument === w && x(w, t))
                                ? 1
                                : c
                                  ? O(c, e) - O(c, t)
                                  : 0
                            : 4 & r
                              ? -1
                              : 1)
                        );
                      }
                    : function(e, t) {
                        if (e === t) return (f = !0), 0;
                        let n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e === d
                            ? -1
                            : t === d
                              ? 1
                              : i
                                ? -1
                                : o
                                  ? 1
                                  : c
                                    ? O(c, e) - O(c, t)
                                    : 0;
                        if (i === o) return ce(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? ce(a[r], s[r])
                          : a[r] === w
                            ? -1
                            : s[r] === w
                              ? 1
                              : 0;
                      }),
                  d)
                : d;
            }),
            (oe.matches = function(e, t) {
              return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function(e, t) {
              if (
                ((e.ownerDocument || e) !== d && p(e),
                (t = t.replace(z, "='$1']")),
                n.matchesSelector &&
                  g &&
                  !S[`${t} `] &&
                  (!y || !y.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  const r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && e.document.nodeType !== 11)
                  )
                    return r;
                } catch (e) {}
              return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function(e, t) {
              return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function(e, t) {
              (e.ownerDocument || e) !== d && p(e);
              let i = r.attrHandle[t.toLowerCase()],
                o =
                  i && N.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                    ? o.value
                    : null;
            }),
            (oe.escape = function(e) {
              return `${e}`.replace(te, ne);
            }),
            (oe.error = function(e) {
              throw new Error(`Syntax error, unrecognized expression: ${e}`);
            }),
            (oe.uniqueSort = function(e) {
              let t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(D),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = oe.getText = function(e) {
              let t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (o === 1 || o === 9 || o === 11) {
                  if (typeof e.textContent === "string") return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (o === 3 || o === 4) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
            ((r = oe.selectors = {
              cacheLength: 50,
              createPseudo: se,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR(e) {
                  return (
                    (e[1] = e[1].replace(Z, ee)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                    e[2] === "~=" && (e[3] = ` ${e[3]} `),
                    e.slice(0, 4)
                  );
                },
                CHILD(e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    e[1].slice(0, 3) === "nth"
                      ? (e[3] || oe.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * (e[3] === "even" || e[3] === "odd"))),
                        (e[5] = +(e[7] + e[8] || e[3] === "odd")))
                      : e[3] && oe.error(e[0]),
                    e
                  );
                },
                PSEUDO(e) {
                  let t,
                    n = !e[6] && e[2];
                  return V.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG(e) {
                  const t = e.replace(Z, ee).toLowerCase();
                  return e === "*"
                    ? function() {
                        return !0;
                      }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS(e) {
                  let t = E[`${e} `];
                  return (
                    t ||
                    ((t = new RegExp(`(^|${M})${e}(${M}|$)`)) &&
                      E(e, e => t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            "",
                        )))
                  );
                },
                ATTR(e, t, n) {
                  return function(r) {
                    let i = oe.attr(r, e);
                    return i == null
                      ? t === "!="
                      : !t ||
                          ((i += ""),
                          t === "="
                            ? i === n
                            : t === "!="
                              ? i !== n
                              : t === "^="
                                ? n && i.indexOf(n) === 0
                                : t === "*="
                                  ? n && i.indexOf(n) > -1
                                  : t === "$="
                                    ? n && i.slice(-n.length) === n
                                    : t === "~="
                                      ? ` ${i.replace($, " ")} `.indexOf(n) > -1
                                      : t === "|=" &&
                                        (i === n ||
                                          i.slice(0, n.length + 1) ===
                                            `${n}-`));
                  };
                },
                CHILD(e, t, n, r, i) {
                  let o = e.slice(0, 3) !== "nth",
                    a = e.slice(-4) !== "last",
                    s = t === "of-type";
                  return r === 1 && i === 0
                    ? function(e) {
                        return !!e.parentNode;
                      }
                    : function(t, n, u) {
                        let l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          x = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === y
                                    : p.nodeType === 1
                                )
                                  return !1;
                              h = g = e === "only" && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && m)
                          ) {
                            for (
                              x =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop());

                            )
                              if (p.nodeType === 1 && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (m &&
                              (x = d =
                                (l =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== y
                                : p.nodeType !== 1) ||
                                !++x ||
                                (m &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO(e, t) {
                  let n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      oe.error(`unsupported pseudo: ${e}`);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? se((e, n) => {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function(e) {
                              return i(e, 0, n);
                            })
                      : i;
                },
              },
              pseudos: {
                not: se(e => {
                  let t = [],
                    n = [],
                    r = s(e.replace(B, "$1"));
                  return r[b]
                    ? se((e, t, n, i) => {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function(e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: se(
                  e =>
                    function(t) {
                      return oe(e, t).length > 0;
                    },
                ),
                contains: se(
                  e => (
                    (e = e.replace(Z, ee)),
                    function(t) {
                      return (
                        (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                      );
                    }
                  ),
                ),
                lang: se(
                  e => (
                    U.test(e || "") || oe.error(`unsupported lang: ${  e}`),
                    (e = e.replace(Z, ee).toLowerCase()),
                    function(t) {
                      let n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            n.indexOf(e + "-") === 0
                          );
                      } while ((t = t.parentNode) && t.nodeType === 1);
                      return !1;
                    }
                  ),
                ),
                target(t) {
                  const n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root(e) {
                  return e === h;
                },
                focus(e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: de(!1),
                disabled: de(!0),
                checked(e) {
                  const t = e.nodeName.toLowerCase();
                  return (
                    (t === "input" && !!e.checked) ||
                    (t === "option" && !!e.selected)
                  );
                },
                selected(e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent(e) {
                  return !r.pseudos.empty(e);
                },
                header(e) {
                  return Y.test(e.nodeName);
                },
                input(e) {
                  return G.test(e.nodeName);
                },
                button(e) {
                  const t = e.nodeName.toLowerCase();
                  return (
                    (t === "input" && e.type === "button") || t === "button"
                  );
                },
                text(e) {
                  let t;
                  return (
                    e.nodeName.toLowerCase() === "input" &&
                    e.type === "text" &&
                    ((t = e.getAttribute("type")) == null ||
                      t.toLowerCase() === "text")
                  );
                },
                first: he(() => [0]),
                last: he((e, t) => [t - 1]),
                eq: he((e, t, n) => [n < 0 ? n + t : n]),
                even: he((e, t) => {
                  for (let n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: he((e, t) => {
                  for (let n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: he((e, t, n) => {
                  for (let r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: he((e, t, n) => {
                  for (let r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth =
              r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
            function ve() {}
            function ye(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function me(e, t, n) {
              let r = t.dir,
                i = t.next,
                o = i || r,
                a = n && o === "parentNode",
                s = C++;
              return t.first
                ? function(t, n, i) {
                    for (; (t = t[r]); )
                      if (t.nodeType === 1 || a) return e(t, n, i);
                    return !1;
                  }
                : function(t, n, u) {
                    let l,
                      c,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((t.nodeType === 1 || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (t.nodeType === 1 || a)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[o]) && l[0] === T && l[1] === s)
                              return (p[2] = l[2]);
                            if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function(t, n, r) {
                    for (let i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function be(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, l = t != null;
                s < u;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
              return a;
            }
            function we(e, t, n, r, i, o) {
              return (
                r && !r[b] && (r = we(r)),
                i && !i[b] && (i = we(i, o)),
                se((o, a, s, u) => {
                  let l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      o ||
                      (function(e, t, n) {
                        for (let r = 0, i = t.length; r < i; r++)
                          oe(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || (!o && t) ? g : be(g, p, e, s, u),
                    y = n ? (i || (o ? e : h || r) ? [] : a) : v;
                  if ((n && n(v, y, s, u), r))
                    for (l = be(y, d), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = y.length; c--; )
                          (f = y[c]) && l.push((v[c] = f));
                        i(null, (y = []), l, u);
                      }
                      for (c = y.length; c--; )
                        (f = y[c]) &&
                          (l = i ? O(o, f) : p[c]) > -1 &&
                          (o[l] = !(a[l] = f));
                    }
                  } else
                    (y = be(y === a ? y.splice(h, y.length) : y)),
                      i ? i(null, a, y, u) : L.apply(a, y);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = me(e => e === t, s, !0),
                  f = me(e => O(t, e) > -1, s, !0),
                  p = [
                    function(e, n, r) {
                      const i =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return we(
                      u > 1 && xe(p),
                      u > 1 &&
                        ye(
                          e.slice(0, u - 1).concat({
                            value: e[u - 2].type === " " ? "*" : "",
                          }),
                        ).replace(B, "$1"),
                      n,
                      u < i && Te(e.slice(u, i)),
                      i < o && Te((e = e.slice(i))),
                      i < o && ye(e),
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ve.prototype = r.filters = r.pseudos),
              (r.setFilters = new ve()),
              (a = oe.tokenize = function(e, t) {
                let n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = k[`${e} `];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = F.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = _.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(B, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = V[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
              }),
              (s = oe.compile = function(e, t) {
                let n,
                  i = [],
                  o = [],
                  s = S[`${e} `];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Te(t[n]))[b] ? i.push(s) : o.push(s);
                  (s = S(
                    e,
                    (function(e, t) {
                      let n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                          let f,
                            h,
                            v,
                            y = 0,
                            m = "0",
                            x = o && [],
                            b = [],
                            w = l,
                            C = o || (i && r.find.TAG("*", c)),
                            E = (T += w == null ? 1 : Math.random() || 0.1),
                            k = C.length;
                          for (
                            c && (l = a === d || a || c);
                            m !== k && (f = C[m]) != null;
                            m++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  a ||
                                    f.ownerDocument === d ||
                                    (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (T = E);
                            }
                            n && ((f = !v && f) && y--, o && x.push(f));
                          }
                          if (((y += m), n && m !== y)) {
                            for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                            if (o) {
                              if (y > 0)
                                for (; m--; )
                                  x[m] || b[m] || (b[m] = j.call(u));
                              b = be(b);
                            }
                            L.apply(u, b),
                              c &&
                                !o &&
                                b.length > 0 &&
                                y + t.length > 1 &&
                                oe.uniqueSort(u);
                          }
                          return c && ((T = E), (l = w)), x;
                        };
                      return n ? se(o) : o;
                    })(o, i),
                  )).selector = e;
                }
                return s;
              }),
              (u = oe.select = function(e, t, n, i) {
                let o,
                  u,
                  l,
                  c,
                  f,
                  p = typeof e === "function" && e,
                  d = !i && a((e = p.selector || e));
                if (((n = n || []), d.length === 1)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    (l = u[0]).type === "ID" &&
                    t.nodeType === 9 &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(Z, ee), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = V.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(Z, ee),
                        (K.test(u[0].type) && ge(t.parentNode)) || t,
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && ye(u))))
                        return L.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || s(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (K.test(e) && ge(t.parentNode)) || t,
                  ),
                  n
                );
              }),
              (n.sortStable =
                b
                  .split("")
                  .sort(D)
                  .join("") === b),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ue(
                e => 1 & e.compareDocumentPosition(d.createElement("fieldset")),
              )),
              ue(
                e => (
                  (e.innerHTML = "<a href='#'></a>"),
                  e.firstChild.getAttribute("href") === "#"
                ),
              ) ||
                le("type|href|height|width", (e, t, n) => {
                  if (!n)
                    return e.getAttribute(
                      t,
                      t.toLowerCase() === "type" ? 1 : 2,
                    );
                }),
              (n.attributes &&
                ue(
                  e => (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    e.firstChild.getAttribute("value") === ""
                  ),
                )) ||
                le("value", (e, t, n) => {
                  if (!n && e.nodeName.toLowerCase() === "input")
                    return e.defaultValue;
                }),
              ue(e => e.getAttribute("disabled") == null) ||
                le(P, (e, t, n) => {
                  let r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                }),
              oe
            );
          })(t);
          (w.find = E),
            (w.expr = E.selectors),
            (w.expr[":"] = w.expr.pseudos),
            (w.uniqueSort = w.unique = E.uniqueSort),
            (w.text = E.getText),
            (w.isXMLDoc = E.isXML),
            (w.contains = E.contains),
            (w.escapeSelector = E.escape);
          let k = function(e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && e.nodeType !== 9;

              )
                if (e.nodeType === 1) {
                  if (i && w(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            S = function(e, t) {
              for (var n = []; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
              return n;
            },
            D = w.expr.match.needsContext;
          function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          const A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function j(e, t, n) {
            return v(t)
              ? w.grep(e, (e, r) => !!t.call(e, r, e) !== n)
              : t.nodeType
                ? w.grep(e, e => (e === t) !== n)
                : typeof t !== "string"
                  ? w.grep(e, e => l.call(t, e) > -1 !== n)
                  : w.filter(t, e, n);
          }
          (w.filter = function(e, t, n) {
            const r = t[0];
            return (
              n && (e = `:not(${e})`),
              t.length === 1 && r.nodeType === 1
                ? w.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : w.find.matches(e, w.grep(t, e => 1 === e.nodeType))
            );
          }),
            w.fn.extend({
              find(e) {
                let t,
                  n,
                  r = this.length,
                  i = this;
                if (typeof e !== "string")
                  return this.pushStack(
                    w(e).filter(function() {
                      for (t = 0; t < r; t++)
                        if (w.contains(i[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
              },
              filter(e) {
                return this.pushStack(j(this, e || [], !1));
              },
              not(e) {
                return this.pushStack(j(this, e || [], !0));
              },
              is(e) {
                return !!j(
                  this,
                  typeof e === "string" && D.test(e) ? w(e) : e || [],
                  !1,
                ).length;
              },
            });
          let q,
            L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((w.fn.init = function(e, t, n) {
            let r, o;
            if (!e) return this;
            if (((n = n || q), typeof e === "string")) {
              if (
                !(r =
                  e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                    ? [null, e, null]
                    : L.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof w ? t[0] : t),
                  w.merge(
                    this,
                    w.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : i,
                      !0,
                    ),
                  ),
                  A.test(r[1]) && w.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = i.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(w)
                : w.makeArray(e, this);
          }).prototype =
            w.fn),
            (q = w(i));
          let H = /^(?:parents|prev(?:Until|All))/,
            O = { children: !0, contents: !0, next: !0, prev: !0 };
          function P(e, t) {
            for (; (e = e[t]) && e.nodeType !== 1; );
            return e;
          }
          w.fn.extend({
            has(e) {
              let t = w(e, this),
                n = t.length;
              return this.filter(function() {
                for (let e = 0; e < n; e++)
                  if (w.contains(this, t[e])) return !0;
              });
            },
            closest(e, t) {
              let n,
                r = 0,
                i = this.length,
                o = [],
                a = typeof e !== "string" && w(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : n.nodeType === 1 && w.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
            },
            index(e) {
              return e
                ? typeof e === "string"
                  ? l.call(w(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
            },
            add(e, t) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack(e) {
              return this.add(
                e == null ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            w.each(
              {
                parent(e) {
                  const t = e.parentNode;
                  return t && t.nodeType !== 11 ? t : null;
                },
                parents(e) {
                  return k(e, "parentNode");
                },
                parentsUntil(e, t, n) {
                  return k(e, "parentNode", n);
                },
                next(e) {
                  return P(e, "nextSibling");
                },
                prev(e) {
                  return P(e, "previousSibling");
                },
                nextAll(e) {
                  return k(e, "nextSibling");
                },
                prevAll(e) {
                  return k(e, "previousSibling");
                },
                nextUntil(e, t, n) {
                  return k(e, "nextSibling", n);
                },
                prevUntil(e, t, n) {
                  return k(e, "previousSibling", n);
                },
                siblings(e) {
                  return S((e.parentNode || {}).firstChild, e);
                },
                children(e) {
                  return S(e.firstChild);
                },
                contents(e) {
                  return N(e, "iframe")
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                      w.merge([], e.childNodes));
                },
              },
              (e, t) => {
                w.fn[e] = function(n, r) {
                  let i = w.map(this, t, n);
                  return (
                    e.slice(-5) !== "Until" && (r = n),
                    r && typeof r === "string" && (i = w.filter(r, i)),
                    this.length > 1 &&
                      (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              },
            );
          const M = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function I(e) {
            throw e;
          }
          function W(e, t, n, r) {
            let i;
            try {
              e && v((i = e.promise))
                ? i
                    .call(e)
                    .done(t)
                    .fail(n)
                : e && v((i = e.then))
                  ? i.call(e, t, n)
                  : t(...[e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (w.Callbacks = function(e) {
            e =
              typeof e === "string"
                ? (function(e) {
                    const t = {};
                    return (
                      w.each(e.match(M) || [], (e, n) => {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : w.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              l = {
                add() {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        w.each(n, (n, r) => {
                          v(r)
                            ? (e.unique && l.has(r)) || o.push(r)
                            : r && r.length && b(r) !== "string" && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove() {
                  return (
                    w.each(arguments, (e, t) => {
                      for (var n; (n = w.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has(e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty() {
                  return o && (o = []), this;
                },
                disable() {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled() {
                  return !o;
                },
                lock() {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked() {
                  return !!i;
                },
                fireWith(e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire() {
                  return l.fireWith(this, arguments), this;
                },
                fired() {
                  return !!r;
                },
              };
            return l;
          }),
            w.extend({
              Deferred(e) {
                var n = [
                    [
                      "notify",
                      "progress",
                      w.Callbacks("memory"),
                      w.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      w.Callbacks("once memory"),
                      w.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      w.Callbacks("once memory"),
                      w.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  r = "pending",
                  i = {
                    state() {
                      return r;
                    },
                    always() {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch(e) {
                      return i.then(null, e);
                    },
                    pipe() {
                      let e = arguments;
                      return w
                        .Deferred((t) => {
                          w.each(n, function(n, r) {
                            var i = v(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                              var e = i && i.apply(this, arguments);
                              e && v(e.promise)
                                ? e
                                    .promise()
                                    .progress(t.notify)
                                    .done(t.resolve)
                                    .fail(t.reject)
                                : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then(e, r, i) {
                      let o = 0;
                      function a(e, n, r, i) {
                        return function() {
                          var s = this,
                            u = arguments,
                            l = function() {
                              let t, l;
                              if (!(e < o)) {
                                if ((t = r.apply(s, u)) === n.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution",
                                  );
                                (l =
                                  t &&
                                  (typeof t == "object" ||
                                    typeof t == "function") &&
                                  t.then),
                                  v(l)
                                    ? i
                                      ? l.call(t, a(o, n, R, i), a(o, n, I, i))
                                      : (o++,
                                        l.call(
                                          t,
                                          a(o, n, R, i),
                                          a(o, n, I, i),
                                          a(o, n, R, n.notifyWith),
                                        ))
                                    : (r !== R && ((s = void 0), (u = [t])),
                                      (i || n.resolveWith)(s, u));
                              }
                            },
                            c = i
                              ? l
                              : function() {
                                  try {
                                    l();
                                  } catch (t) {
                                    w.Deferred.exceptionHook &&
                                      w.Deferred.exceptionHook(t, c.stackTrace),
                                      e + 1 >= o &&
                                        (r !== I && ((s = void 0), (u = [t])),
                                        n.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (w.Deferred.getStackHook &&
                                (c.stackTrace = w.Deferred.getStackHook()),
                              t.setTimeout(c));
                        };
                      }
                      return w
                        .Deferred((t) => {
                          n[0][3].add(a(0, t, v(i) ? i : R, t.notifyWith)),
                            n[1][3].add(a(0, t, v(e) ? e : R)),
                            n[2][3].add(a(0, t, v(r) ? r : I));
                        })
                        .promise();
                    },
                    promise(e) {
                      return e != null ? w.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  w.each(n, (e, t) => {
                    let a = t[2],
                      s = t[5];
                    (i[t[1]] = a.add),
                      s &&
                        a.add(
                          () => {
                            r = s;
                          },
                          n[3 - e][2].disable,
                          n[3 - e][3].disable,
                          n[0][2].lock,
                          n[0][3].lock,
                        ),
                      a.add(t[3].fire),
                      (o[t[0]] = function() {
                        return (
                          o[`${t[0]  }With`](
                            this === o ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (o[`${t[0]  }With`] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when(e) {
                let t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = a.call(arguments),
                  o = w.Deferred(),
                  s = function(e) {
                    return function(n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, o.done(s(n)).resolve, o.reject, !t),
                  o.state() === "pending" || v(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) W(i[n], s(n), o.reject);
                return o.promise();
              },
            });
          const $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (w.Deferred.exceptionHook = function(e, n) {
            t.console &&
              t.console.warn &&
              e &&
              $.test(e.name) &&
              t.console.warn(
                `jQuery.Deferred exception: ${e.message}`,
                e.stack,
                n,
              );
          }),
            (w.readyException = function(e) {
              t.setTimeout(() => {
                throw e;
              });
            });
          const B = w.Deferred();
          function F() {
            i.removeEventListener("DOMContentLoaded", F),
              t.removeEventListener("load", F),
              w.ready();
          }
          (w.fn.ready = function(e) {
            return (
              B.then(e).catch(e => {
                w.readyException(e);
              }),
              this
            );
          }),
            w.extend({
              isReady: !1,
              readyWait: 1,
              ready(e) {
                (!0 === e ? --w.readyWait : w.isReady) ||
                  ((w.isReady = !0),
                  (!0 !== e && --w.readyWait > 0) || B.resolveWith(i, [w]));
              },
            }),
            (w.ready.then = B.then),
            i.readyState === "complete" ||
            (i.readyState !== "loading" && !i.documentElement.doScroll)
              ? t.setTimeout(w.ready)
              : (i.addEventListener("DOMContentLoaded", F),
                t.addEventListener("load", F));
          var _ = function(e, t, n, r, i, o, a) {
              let s = 0,
                u = e.length,
                l = n == null;
              if (b(n) === "object")
                for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function(e, t, n) {
                        return l.call(w(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            z = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function V(e) {
            return e.replace(z, "ms-").replace(X, U);
          }
          const G = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
          };
          function Y() {
            this.expando = w.expando + Y.uid++;
          }
          (Y.uid = 1),
            (Y.prototype = {
              cache(e) {
                let t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    G(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set(e, t, n) {
                let r,
                  i = this.cache(e);
                if (typeof t === "string") i[V(t)] = n;
                else for (r in t) i[V(r)] = t[r];
                return i;
              },
              get(e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][V(t)];
              },
              access(e, t, n) {
                return void 0 === t ||
                  (t && typeof t === "string" && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove(e, t) {
                let n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(V)
                      : (t = V(t)) in r
                        ? [t]
                        : t.match(M) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || w.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData(e) {
                const t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
              },
            });
          let Q = new Y(),
            J = new Y(),
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;
          function ee(e, t, n) {
            let r;
            if (void 0 === n && e.nodeType === 1)
              if (
                ((r = `data-${t.replace(Z, "-$&").toLowerCase()}`),
                typeof (n = e.getAttribute(r)) === "string")
              ) {
                try {
                  n = (function(e) {
                    return (
                      e === "true" ||
                      (e !== "false" &&
                        (e === "null"
                          ? null
                          : e === `${+e}`
                            ? +e
                            : K.test(e)
                              ? JSON.parse(e)
                              : e))
                    );
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          w.extend({
            hasData(e) {
              return J.hasData(e) || Q.hasData(e);
            },
            data(e, t, n) {
              return J.access(e, t, n);
            },
            removeData(e, t) {
              J.remove(e, t);
            },
            _data(e, t, n) {
              return Q.access(e, t, n);
            },
            _removeData(e, t) {
              Q.remove(e, t);
            },
          }),
            w.fn.extend({
              data(e, t) {
                let n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = J.get(o)),
                    o.nodeType === 1 && !Q.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        (r = a[n].name).indexOf("data-") === 0 &&
                        ((r = V(r.slice(5))), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return typeof e === "object"
                  ? this.each(function() {
                      J.set(this, e);
                    })
                  : _(
                      this,
                      function(t) {
                        let n;
                        if (o && void 0 === t)
                          return void 0 !== (n = J.get(o, e))
                            ? n
                            : void 0 !== (n = ee(o, e))
                              ? n
                              : void 0;
                        this.each(function() {
                          J.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData(e) {
                return this.each(function() {
                  J.remove(this, e);
                });
              },
            }),
            w.extend({
              queue(e, t, n) {
                let r;
                if (e)
                  return (
                    (t = `${t || "fx"}queue`),
                    (r = Q.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Q.access(e, t, w.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue(e, t) {
                t = t || "fx";
                let n = w.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = w._queueHooks(e, t);
                i === "inprogress" && ((i = n.shift()), r--),
                  i &&
                    (t === "fx" && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      () => {
                        w.dequeue(e, t);
                      },
                      o,
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks(e, t) {
                const n = `${t}queueHooks`;
                return (
                  Q.get(e, n) ||
                  Q.access(e, n, {
                    empty: w.Callbacks("once memory").add(() => {
                      Q.remove(e, [`${t  }queue`, n]);
                    }),
                  })
                );
              },
            }),
            w.fn.extend({
              queue(e, t) {
                let n = 2;
                return (
                  typeof e !== "string" && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? w.queue(this[0], e)
                    : void 0 === t
                      ? this
                      : this.each(function() {
                          const n = w.queue(this, e, t);
                          w._queueHooks(this, e),
                            e === "fx" &&
                              n[0] !== "inprogress" &&
                              w.dequeue(this, e);
                        })
                );
              },
              dequeue(e) {
                return this.each(function() {
                  w.dequeue(this, e);
                });
              },
              clearQueue(e) {
                return this.queue(e || "fx", []);
              },
              promise(e, t) {
                let n,
                  r = 1,
                  i = w.Deferred(),
                  o = this,
                  a = this.length,
                  s = function() {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  typeof e !== "string" && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = Q.get(o[a], `${e}queueHooks`)) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          let te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ne = new RegExp(`^(?:([+-])=|)(${te})([a-z%]*)$`, "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            ie = function(e, t) {
              return (
                (e = t || e).style.display === "none" ||
                (e.style.display === "" &&
                  w.contains(e.ownerDocument, e) &&
                  w.css(e, "display") === "none")
              );
            },
            oe = function(e, t, n, r) {
              let i,
                o,
                a = {};
              for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
              return i;
            };
          function ae(e, t, n, r) {
            let i,
              o,
              a = 20,
              s = r
                ? function() {
                    return r.cur();
                  }
                : function() {
                    return w.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
              c =
                (w.cssNumber[t] || (l !== "px" && +u)) && ne.exec(w.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                w.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), w.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          const se = {};
          function ue(e) {
            let t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = se[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = w.css(t, "display")),
              t.parentNode.removeChild(t),
              i === "none" && (i = "block"),
              (se[r] = i),
              i)
            );
          }
          function le(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? (n === "none" &&
                      ((i[o] = Q.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    r.style.display === "" && ie(r) && (i[o] = ue(r)))
                  : n !== "none" && ((i[o] = "none"), Q.set(r, "display", n)));
            for (o = 0; o < a; o++) i[o] != null && (e[o].style.display = i[o]);
            return e;
          }
          w.fn.extend({
            show() {
              return le(this, !0);
            },
            hide() {
              return le(this);
            },
            toggle(e) {
              return typeof e === "boolean"
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function() {
                    ie(this) ? w(this).show() : w(this).hide();
                  });
            },
          });
          let ce = /^(?:checkbox|radio)$/i,
            fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            pe = /^$|^module$|\/(?:java|ecma)script/i,
            de = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          function he(e, t) {
            let n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
              void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
            );
          }
          function ge(e, t) {
            for (let n = 0, r = e.length; n < r; n++)
              Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
          }
          (de.optgroup = de.option),
            (de.tbody = de.tfoot = de.colgroup = de.caption = de.thead),
            (de.th = de.td);
          let ve,
            ye,
            me = /<|&#?\w+;/;
          function xe(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((o = e[d]) || o === 0)
                if (b(o) === "object") w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (fe.exec(o) || ["", ""])[1].toLowerCase(),
                      u = de[s] || de._default,
                      a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  w.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (f.textContent = "", d = 0; (o = p[d++]); )
              if (r && w.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((l = w.contains(o.ownerDocument, o)),
                (a = he(f.appendChild(o), "script")),
                l && ge(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) pe.test(o.type || "") && n.push(o);
            return f;
          }
          (ve = i.createDocumentFragment().appendChild(i.createElement("div"))),
            (ye = i.createElement("input")).setAttribute("type", "radio"),
            ye.setAttribute("checked", "checked"),
            ye.setAttribute("name", "t"),
            ve.appendChild(ye),
            (g.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ve.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue);
          let be = i.documentElement,
            we = /^key/,
            Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Se() {
            try {
              return i.activeElement;
            } catch (e) {}
          }
          function De(e, t, n, r, i, o) {
            let a, s;
            if (typeof t === "object") {
              for (s in (typeof n !== "string" && ((r = r || n), (n = void 0)),
              t))
                De(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (r == null && i == null
                ? ((i = n), (r = n = void 0))
                : i == null &&
                  (typeof n === "string"
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = ke;
            else if (!i) return e;
            return (
              o === 1 &&
                ((a = i),
                ((i = function(e) {
                  return w().off(e), a.apply(this, arguments);
                }).guid =
                  a.guid || (a.guid = w.guid++))),
              e.each(function() {
                w.event.add(this, t, i, r, n);
              })
            );
          }
          (w.event = {
            global: {},
            add(e, t, n, r, i) {
              let o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.get(e);
              if (v)
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (a = v.handle) ||
                      (a = v.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type
                          ? w.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                    l = (t = (t || "").match(M) || [""]).length;
                  l--;

                )
                  (d = g = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = w.event.special[d] || {}),
                      (d = (i ? f.delegateType : f.bindType) || d),
                      (f = w.event.special[d] || {}),
                      (c = w.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && w.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o,
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (w.event.global[d] = !0));
            },
            remove(e, t, n, r, i) {
              let o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.hasData(e) && Q.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(M) || [""]).length; l--; )
                  if (
                    ((d = g = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = w.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            `(^|\\.)${h.join("\\.(?:.*\\.|)")}(\\.|$)`,
                          ),
                        a = o = p.length;
                      o--;

                    )
                      (c = p[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            (r !== "**" || !c.selector)) ||
                          (p.splice(o, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        w.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && Q.remove(e, "handle events");
              }
            },
            dispatch(e) {
              let t,
                n,
                r,
                i,
                o,
                a,
                s = w.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = w.event.special[s.type] || {};
              for (u[0] = s, t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
              if (
                ((s.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, s))
              ) {
                for (
                  a = w.event.handlers.call(this, s, l), t = 0;
                  (i = a[t++]) && !s.isPropagationStopped();

                )
                  for (
                    s.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

                  )
                    (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                      ((s.handleObj = o),
                      (s.data = o.data),
                      void 0 !==
                        (r = (
                          (w.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, u)) &&
                        !1 === (s.result = r) &&
                        (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
              }
            },
            handlers(e, t) {
              let n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !(e.type === "click" && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    l.nodeType === 1 &&
                    (e.type !== "click" || !0 !== l.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = `${(r = t[n]).selector} `)] &&
                        (a[i] = r.needsContext
                          ? w(i, this).index(l) > -1
                          : w.find(i, this, null, [l]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: l, handlers: o });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp(e, t) {
              Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function() {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function() {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set(t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix(e) {
              return e[w.expando] ? e : new w.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              focus: {
                trigger() {
                  if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
              },
              blur: {
                trigger() {
                  if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
              },
              click: {
                trigger() {
                  if (
                    this.type === "checkbox" &&
                    this.click &&
                    N(this, "input")
                  )
                    return this.click(), !1;
                },
                _default(e) {
                  return N(e.target, "a");
                },
              },
              beforeunload: {
                postDispatch(e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (w.removeEvent = function(e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (w.Event = function(e, t) {
              if (!(this instanceof w.Event)) return new w.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : ke),
                  (this.target =
                    e.target && e.target.nodeType === 3
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
            }),
            (w.Event.prototype = {
              constructor: w.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault() {
                const e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation() {
                const e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation() {
                const e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            w.each(
              {
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
                which(e) {
                  const t = e.button;
                  return e.which == null && we.test(e.type)
                    ? e.charCode != null
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Te.test(e.type)
                      ? 1 & t
                        ? 1
                        : 2 & t
                          ? 3
                          : 4 & t
                            ? 2
                            : 0
                      : e.which;
                },
              },
              w.event.addProp,
            ),
            w.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              (e, t) => {
                w.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle(e) {
                    let n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || w.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            w.fn.extend({
              on(e, t, n, r) {
                return De(this, e, t, n, r);
              },
              one(e, t, n, r) {
                return De(this, e, t, n, r, 1);
              },
              off(e, t, n) {
                let r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    w(e.delegateTarget).off(
                      r.namespace ? `${r.origType}.${r.namespace}` : r.origType,
                      r.selector,
                      r.handler,
                    ),
                    this
                  );
                if (typeof e === "object") {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && typeof t !== "function") ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function() {
                    w.event.remove(this, e, n, t);
                  })
                );
              },
            });
          let Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ae = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Le(e, t) {
            return (
              (N(e, "table") &&
                N(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
                w(e).children("tbody")[0]) ||
              e
            );
          }
          function He(e) {
            return (e.type = `${e.getAttribute("type") !== null}/${e.type}`), e;
          }
          function Oe(e) {
            return (
              (e.type || "").slice(0, 5) === "true/"
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Pe(e, t) {
            let n, r, i, o, a, s, u, l;
            if (t.nodeType === 1) {
              if (
                Q.hasData(e) &&
                ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
              )
                for (i in (delete a.handle, (a.events = {}), l))
                  for (n = 0, r = l[i].length; n < r; n++)
                    w.event.add(t, i, l[i][n]);
              J.hasData(e) &&
                ((s = J.access(e)), (u = w.extend({}, s)), J.set(t, u));
            }
          }
          function Me(e, t, n, r) {
            t = s.apply([], t);
            let i,
              o,
              a,
              u,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              y = v(h);
            if (
              y ||
              (p > 1 && typeof h === "string" && !g.checkClone && je.test(h))
            )
              return e.each(function(i) {
                const o = e.eq(i);
                y && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r);
              });
            if (
              p &&
              ((o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
              i.childNodes.length === 1 && (i = o),
              o || r)
            ) {
              for (u = (a = w.map(he(i, "script"), He)).length; f < p; f++)
                (l = i),
                  f !== d &&
                    ((l = w.clone(l, !0, !0)),
                    u && w.merge(a, he(l, "script"))),
                  n.call(e[f], l, f);
              if (u)
                for (
                  c = a[a.length - 1].ownerDocument, w.map(a, Oe), f = 0;
                  f < u;
                  f++
                )
                  (l = a[f]),
                    pe.test(l.type || "") &&
                      !Q.access(l, "globalEval") &&
                      w.contains(c, l) &&
                      (l.src && (l.type || "").toLowerCase() !== "module"
                        ? w._evalUrl && w._evalUrl(l.src)
                        : x(l.textContent.replace(qe, ""), c, l));
            }
            return e;
          }
          function Re(e, t, n) {
            for (
              var r, i = t ? w.filter(t, e) : e, o = 0;
              (r = i[o]) != null;
              o++
            )
              n || r.nodeType !== 1 || w.cleanData(he(r)),
                r.parentNode &&
                  (n && w.contains(r.ownerDocument, r) && ge(he(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          w.extend({
            htmlPrefilter(e) {
              return e.replace(Ne, "<$1></$2>");
            },
            clone(e, t, n) {
              let r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = w.contains(e.ownerDocument, e);
              if (
                !(
                  g.noCloneChecked ||
                  (e.nodeType !== 1 && e.nodeType !== 11) ||
                  w.isXMLDoc(e)
                )
              )
                for (a = he(c), r = 0, i = (o = he(e)).length; r < i; r++)
                  (s = o[r]),
                    (u = a[r]),
                    void 0,
                    (l = u.nodeName.toLowerCase()) === "input" &&
                    ce.test(s.type)
                      ? (u.checked = s.checked)
                      : (l !== "input" && l !== "textarea") ||
                        (u.defaultValue = s.defaultValue);
              if (t)
                if (n)
                  for (
                    o = o || he(e), a = a || he(c), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Pe(o[r], a[r]);
                else Pe(e, c);
              return (
                (a = he(c, "script")).length > 0 &&
                  ge(a, !f && he(e, "script")),
                c
              );
            },
            cleanData(e) {
              for (
                var t, n, r, i = w.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (G(n)) {
                  if ((t = n[Q.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? w.event.remove(n, r)
                          : w.removeEvent(n, r, t.handle);
                    n[Q.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            w.fn.extend({
              detach(e) {
                return Re(this, e, !0);
              },
              remove(e) {
                return Re(this, e);
              },
              text(e) {
                return _(
                  this,
                  function(e) {
                    return void 0 === e
                      ? w.text(this)
                      : this.empty().each(function() {
                          (this.nodeType !== 1 &&
                            this.nodeType !== 11 &&
                            this.nodeType !== 9) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append() {
                return Me(this, arguments, function(e) {
                  (this.nodeType !== 1 &&
                    this.nodeType !== 11 &&
                    this.nodeType !== 9) ||
                    Le(this, e).appendChild(e);
                });
              },
              prepend() {
                return Me(this, arguments, function(e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    const t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before() {
                return Me(this, arguments, function(e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after() {
                return Me(this, arguments, function(e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty() {
                for (var e, t = 0; (e = this[t]) != null; t++)
                  e.nodeType === 1 &&
                    (w.cleanData(he(e, !1)), (e.textContent = ""));
                return this;
              },
              clone(e, t) {
                return (
                  (e = e != null && e),
                  (t = t == null ? e : t),
                  this.map(function() {
                    return w.clone(this, e, t);
                  })
                );
              },
              html(e) {
                return _(
                  this,
                  function(e) {
                    let t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && t.nodeType === 1) return t.innerHTML;
                    if (
                      typeof e === "string" &&
                      !Ae.test(e) &&
                      !de[(fe.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = w.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          (t = this[n] || {}).nodeType === 1 &&
                            (w.cleanData(he(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith() {
                const e = [];
                return Me(
                  this,
                  arguments,
                  function(t) {
                    const n = this.parentNode;
                    w.inArray(this, e) < 0 &&
                      (w.cleanData(he(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            w.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              (e, t) => {
                w.fn[e] = function(e) {
                  for (
                    var n, r = [], i = w(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      w(i[a])[t](n),
                      u.apply(r, n.get());
                  return this.pushStack(r);
                };
              },
            );
          let Ie = new RegExp(`^(${te})(?!px)[a-z%]+$`, "i"),
            We = function(e) {
              let n = e.ownerDocument.defaultView;
              return (n && n.opener) || (n = t), n.getComputedStyle(e);
            },
            $e = new RegExp(re.join("|"), "i");
          function Be(e, t, n) {
            let r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || We(e)) &&
                ((a = n.getPropertyValue(t) || n[t]) !== "" ||
                  w.contains(e.ownerDocument, e) ||
                  (a = w.style(e, t)),
                !g.pixelBoxStyles() &&
                  Ie.test(a) &&
                  $e.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? `${a}` : a
            );
          }
          function Fe(e, t) {
            return {
              get() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function() {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  be.appendChild(l).appendChild(c);
                const e = t.getComputedStyle(c);
                (r = e.top !== "1%"),
                  (u = n(e.marginLeft) === 12),
                  (c.style.right = "60%"),
                  (s = n(e.right) === 36),
                  (o = n(e.width) === 36),
                  (c.style.position = "absolute"),
                  (a = c.offsetWidth === 36 || "absolute"),
                  be.removeChild(l),
                  (c = null);
              }
            }
            function n(e) {
              return Math.round(parseFloat(e));
            }
            var r,
              o,
              a,
              s,
              u,
              l = i.createElement("div"),
              c = i.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = c.style.backgroundClip === "content-box"),
              w.extend(g, {
                boxSizingReliable() {
                  return e(), o;
                },
                pixelBoxStyles() {
                  return e(), s;
                },
                pixelPosition() {
                  return e(), r;
                },
                reliableMarginLeft() {
                  return e(), u;
                },
                scrollboxSize() {
                  return e(), a;
                },
              }));
          })();
          let _e = /^(none|table(?!-c[ea]).+)/,
            ze = /^--/,
            Xe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ue = { letterSpacing: "0", fontWeight: "400" },
            Ve = ["Webkit", "Moz", "ms"],
            Ge = i.createElement("div").style;
          function Ye(e) {
            let t = w.cssProps[e];
            return (
              t ||
                (t = w.cssProps[e] =
                  (function(e) {
                    if (e in Ge) return e;
                    for (
                      let t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                      n--;

                    )
                      if ((e = Ve[n] + t) in Ge) return e;
                  })(e) || e),
              t
            );
          }
          function Qe(e, t, n) {
            const r = ne.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function Je(e, t, n, r, i, o) {
            let a = t === "width" ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              n === "margin" && (u += w.css(e, n + re[a], !0, i)),
                r
                  ? (n === "content" &&
                      (u -= w.css(e, `padding${re[a]}`, !0, i)),
                    n !== "margin" &&
                      (u -= w.css(e, `border${re[a]}Width`, !0, i)))
                  : ((u += w.css(e, `padding${re[a]}`, !0, i)),
                    n !== "padding"
                      ? (u += w.css(e, `border${re[a]}Width`, !0, i))
                      : (s += w.css(e, `border${re[a]}Width`, !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u += Math.max(
                  0,
                  Math.ceil(
                    e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                      o -
                      u -
                      s -
                      0.5,
                  ),
                )),
              u
            );
          }
          function Ke(e, t, n) {
            let r = We(e),
              i = Be(e, t, r),
              o = w.css(e, "boxSizing", !1, r) === "border-box",
              a = o;
            if (Ie.test(i)) {
              if (!n) return i;
              i = "auto";
            }
            return (
              (a = a && (g.boxSizingReliable() || i === e.style[t])),
              (i === "auto" ||
                (!parseFloat(i) && w.css(e, "display", !1, r) === "inline")) &&
                ((i = e[`offset${t[0].toUpperCase()}${t.slice(1)}`]), (a = !0)),
              `${(i = parseFloat(i) || 0) +
                Je(e, t, n || (o ? "border" : "content"), a, r, i)}px`
            );
          }
          function Ze(e, t, n, r, i) {
            return new Ze.prototype.init(e, t, n, r, i);
          }
          w.extend({
            cssHooks: {
              opacity: {
                get(e, t) {
                  if (t) {
                    const n = Be(e, "opacity");
                    return n === "" ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style(e, t, n, r) {
              if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                let i,
                  o,
                  a,
                  s = V(t),
                  u = ze.test(t),
                  l = e.style;
                if (
                  (u || (t = Ye(s)),
                  (a = w.cssHooks[t] || w.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : l[t];
                (o = typeof n) === "string" &&
                  (i = ne.exec(n)) &&
                  i[1] &&
                  ((n = ae(e, t, i)), (o = "number")),
                  n != null &&
                    n == n &&
                    (o === "number" &&
                      (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      n !== "" ||
                      t.indexOf("background") !== 0 ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css(e, t, n, r) {
              let i,
                o,
                a,
                s = V(t);
              return (
                ze.test(t) || (t = Ye(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                i === "normal" && t in Ue && (i = Ue[t]),
                n === "" || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            w.each(["height", "width"], (e, t) => {
              w.cssHooks[t] = {
                get(e, n, r) {
                  if (n)
                    return !_e.test(w.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? Ke(e, t, r)
                      : oe(e, Xe, () => {
                          return Ke(e, t, r);
                        });
                },
                set(e, n, r) {
                  let i,
                    o = We(e),
                    a = w.css(e, "boxSizing", !1, o) === "border-box",
                    s = r && Je(e, t, r, a, o);
                  return (
                    a &&
                      g.scrollboxSize() === o.position &&
                      (s -= Math.ceil(
                        e[`offset${  t[0].toUpperCase()  }${t.slice(1)}`] -
                          parseFloat(o[t]) -
                          Je(e, t, "border", !1, o) -
                          0.5,
                      )),
                    s &&
                      (i = ne.exec(n)) &&
                      (i[3] || "px") !== "px" &&
                      ((e.style[t] = n), (n = w.css(e, t))),
                    Qe(0, n, s)
                  );
                },
              };
            }),
            (w.cssHooks.marginLeft = Fe(g.reliableMarginLeft, (e, t) => {
              if (t)
                return `${parseFloat(Be(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    oe(e, { marginLeft: 0 }, () => {
                        return e.getBoundingClientRect().left;
                      })  }px`
                );
            })),
            w.each({ margin: "", padding: "", border: "Width" }, (e, t) => {
              (w.cssHooks[e + t] = {
                expand(n) {
                  for (
                    var r = 0,
                      i = {},
                      o = typeof n == "string" ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                e !== "margin" && (w.cssHooks[e + t].set = Qe);
            }),
            w.fn.extend({
              css(e, t) {
                return _(
                  this,
                  (e, t, n) => {
                    let r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (w.Tween = Ze),
            (Ze.prototype = {
              constructor: Ze,
              init(e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || w.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (w.cssNumber[n] ? "" : "px"));
              },
              cur() {
                const e = Ze.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : Ze.propHooks._default.get(this);
              },
              run(e) {
                let t,
                  n = Ze.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = w.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration,
                      ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                  this
                );
              },
            }),
            (Ze.prototype.init.prototype = Ze.prototype),
            (Ze.propHooks = {
              _default: {
                get(e) {
                  let t;
                  return e.elem.nodeType !== 1 ||
                    (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                    ? e.elem[e.prop]
                    : (t = w.css(e.elem, e.prop, "")) && t !== "auto"
                      ? t
                      : 0;
                },
                set(e) {
                  w.fx.step[e.prop]
                    ? w.fx.step[e.prop](e)
                    : e.elem.nodeType !== 1 ||
                      (e.elem.style[w.cssProps[e.prop]] == null &&
                        !w.cssHooks[e.prop])
                      ? (e.elem[e.prop] = e.now)
                      : w.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
              set(e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
            (w.easing = {
              linear(e) {
                return e;
              },
              swing(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (w.fx = Ze.prototype.init),
            (w.fx.step = {});
          let et,
            tt,
            nt = /^(?:toggle|show|hide)$/,
            rt = /queueHooks$/;
          function it() {
            tt &&
              (!1 === i.hidden && t.requestAnimationFrame
                ? t.requestAnimationFrame(it)
                : t.setTimeout(it, w.fx.interval),
              w.fx.tick());
          }
          function ot() {
            return (
              t.setTimeout(() => {
                et = void 0;
              }),
              (et = Date.now())
            );
          }
          function at(e, t) {
            let n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i[`margin${(n = re[r])}`] = i[`padding${n}`] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function st(e, t, n) {
            for (
              var r,
                i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ut(e, t, n) {
            var r,
              i,
              o = 0,
              a = ut.prefilters.length,
              s = w.Deferred().always(() => {
                delete u.elem;
              }),
              u = function() {
                if (i) return !1;
                for (
                  var t = et || ot(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    a = l.tweens.length;
                  o < a;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(
                  !0,
                  { specialEasing: {}, easing: w.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: et || ot(),
                duration: n.duration,
                tweens: [],
                createTween(t, n) {
                  const r = w.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing,
                  );
                  return l.tweens.push(r), r;
                },
                stop(t) {
                  let n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function(e, t) {
                let n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = V(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = w.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = ut.prefilters[o].call(l, e, c, l.opts)))
                return (
                  v(r.stop) &&
                    (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              w.map(c, st, l),
              v(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              w.fx.timer(
                w.extend(u, { elem: e, anim: l, queue: l.opts.queue }),
              ),
              l
            );
          }
          (w.Animation = w.extend(ut, {
            tweeners: {
              "*": [
                function(e, t) {
                  const n = this.createTween(e, t);
                  return ae(n.elem, e, ne.exec(t), n), n;
                },
              ],
            },
            tweener(e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ut.tweeners[n] = ut.tweeners[n] || []),
                  ut.tweeners[n].unshift(t);
            },
            prefilters: [
              function(e, t, n) {
                let r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && ie(e),
                  v = Q.get(e, "fxshow");
                for (r in (n.queue ||
                  ((a = w._queueHooks(e, "fx")).unqueued == null &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function() {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(() => {
                    p.always(() => {
                      a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), nt.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || i === "toggle"),
                      i === (g ? "hide" : "show"))
                    ) {
                      if (i !== "show" || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || w.style(e, r);
                  }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                  for (r in (f &&
                    e.nodeType === 1 &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    (l = v && v.display) == null && (l = Q.get(e, "display")),
                    (c = w.css(e, "display")) === "none" &&
                      (l
                        ? (c = l)
                        : (le([e], !0),
                          (l = e.style.display || l),
                          (c = w.css(e, "display")),
                          le([e]))),
                    (c === "inline" || (c === "inline-block" && l != null)) &&
                      w.css(e, "float") === "none" &&
                      (u ||
                        (p.done(() => {
                          h.display = l;
                        }),
                        l == null &&
                          ((c = h.display), (l = c === "none" ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(() => {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = Q.access(e, "fxshow", { display: l })),
                      o && (v.hidden = !g),
                      g && le([e], !0),
                      p.done(() => {
                        for (r in (g || le([e]), Q.remove(e, "fxshow"), d))
                          w.style(e, r, d[r]);
                      })),
                      (u = st(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter(e, t) {
              t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
            },
          })),
            (w.speed = function(e, t, n) {
              const r =
                e && typeof e === "object"
                  ? w.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                w.fx.off
                  ? (r.duration = 0)
                  : typeof r.duration !== "number" &&
                    (r.duration in w.fx.speeds
                      ? (r.duration = w.fx.speeds[r.duration])
                      : (r.duration = w.fx.speeds._default)),
                (r.queue != null && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function() {
                  v(r.old) && r.old.call(this),
                    r.queue && w.dequeue(this, r.queue);
                }),
                r
              );
            }),
            w.fn.extend({
              fadeTo(e, t, n, r) {
                return this.filter(ie)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate(e, t, n, r) {
                let i = w.isEmptyObject(e),
                  o = w.speed(t, n, r),
                  a = function() {
                    const t = ut(this, w.extend({}, e), o);
                    (i || Q.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop(e, t, n) {
                const r = function(e) {
                  const t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  typeof e !== "string" && ((n = t), (t = e), (e = void 0)),
                  t && !1 !== e && this.queue(e || "fx", []),
                  this.each(function() {
                    let t = !0,
                      i = e != null && `${e}queueHooks`,
                      o = w.timers,
                      a = Q.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && rt.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (e != null && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || w.dequeue(this, e);
                  })
                );
              },
              finish(e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function() {
                    let t,
                      n = Q.get(this),
                      r = n[`${e}queue`],
                      i = n[`${e}queueHooks`],
                      o = w.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        w.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            w.each(["toggle", "show", "hide"], (e, t) => {
              const n = w.fn[t];
              w.fn[t] = function(e, r, i) {
                return e == null || typeof e === "boolean"
                  ? n.apply(this, arguments)
                  : this.animate(at(t, !0), e, r, i);
              };
            }),
            w.each(
              {
                slideDown: at("show"),
                slideUp: at("hide"),
                slideToggle: at("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              (e, t) => {
                w.fn[e] = function(e, n, r) {
                  return this.animate(t, e, n, r);
                };
              },
            ),
            (w.timers = []),
            (w.fx.tick = function() {
              let e,
                t = 0,
                n = w.timers;
              for (et = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || w.fx.stop(), (et = void 0);
            }),
            (w.fx.timer = function(e) {
              w.timers.push(e), w.fx.start();
            }),
            (w.fx.interval = 13),
            (w.fx.start = function() {
              tt || ((tt = !0), it());
            }),
            (w.fx.stop = function() {
              tt = null;
            }),
            (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (w.fn.delay = function(e, n) {
              return (
                (e = (w.fx && w.fx.speeds[e]) || e),
                (n = n || "fx"),
                this.queue(n, (n, r) => {
                  const i = t.setTimeout(n, e);
                  r.stop = function() {
                    t.clearTimeout(i);
                  };
                })
              );
            }),
            (function() {
              let e = i.createElement("input"),
                t = i
                  .createElement("select")
                  .appendChild(i.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = e.value !== ""),
                (g.optSelected = t.selected),
                ((e = i.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = e.value === "t");
            })();
          let lt,
            ct = w.expr.attrHandle;
          w.fn.extend({
            attr(e, t) {
              return _(this, w.attr, e, t, arguments.length > 1);
            },
            removeAttr(e) {
              return this.each(function() {
                w.removeAttr(this, e);
              });
            },
          }),
            w.extend({
              attr(e, t, n) {
                let r,
                  i,
                  o = e.nodeType;
                if (o !== 3 && o !== 8 && o !== 2)
                  return void 0 === e.getAttribute
                    ? w.prop(e, t, n)
                    : ((o === 1 && w.isXMLDoc(e)) ||
                        (i =
                          w.attrHooks[t.toLowerCase()] ||
                          (w.expr.match.bool.test(t) ? lt : void 0)),
                      void 0 !== n
                        ? n === null
                          ? void w.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : (e.setAttribute(t, `${n}`), n)
                        : i && "get" in i && (r = i.get(e, t)) !== null
                          ? r
                          : (r = w.find.attr(e, t)) == null
                            ? void 0
                            : r);
              },
              attrHooks: {
                type: {
                  set(e, t) {
                    if (!g.radioValue && t === "radio" && N(e, "input")) {
                      const n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr(e, t) {
                let n,
                  r = 0,
                  i = t && t.match(M);
                if (i && e.nodeType === 1)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (lt = {
              set(e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            w.each(w.expr.match.bool.source.match(/\w+/g), (e, t) => {
              const n = ct[t] || w.find.attr;
              ct[t] = function(e, t, r) {
                let i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ct[a]),
                    (ct[a] = i),
                    (i = n(e, t, r) != null ? a : null),
                    (ct[a] = o)),
                  i
                );
              };
            });
          let ft = /^(?:input|select|textarea|button)$/i,
            pt = /^(?:a|area)$/i;
          function dt(e) {
            return (e.match(M) || []).join(" ");
          }
          function ht(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function gt(e) {
            return Array.isArray(e)
              ? e
              : (typeof e === "string" && e.match(M)) || [];
          }
          w.fn.extend({
            prop(e, t) {
              return _(this, w.prop, e, t, arguments.length > 1);
            },
            removeProp(e) {
              return this.each(function() {
                delete this[w.propFix[e] || e];
              });
            },
          }),
            w.extend({
              prop(e, t, n) {
                let r,
                  i,
                  o = e.nodeType;
                if (o !== 3 && o !== 8 && o !== 2)
                  return (
                    (o === 1 && w.isXMLDoc(e)) ||
                      ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && (r = i.get(e, t)) !== null
                        ? r
                        : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get(e) {
                    const t = w.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : ft.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (w.propHooks.selected = {
                get(e) {
                  const t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set(e) {
                  const t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            w.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function() {
                w.propFix[this.toLowerCase()] = this;
              },
            ),
            w.fn.extend({
              addClass(e) {
                let t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (v(e))
                  return this.each(function(t) {
                    w(this).addClass(e.call(this, t, ht(this)));
                  });
                if ((t = gt(e)).length)
                  for (; (n = this[u++]); )
                    if (((i = ht(n)), (r = n.nodeType === 1 && ` ${dt(i)} `))) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(` ${o} `) < 0 && (r += `${o} `);
                      i !== (s = dt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass(e) {
                let t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (v(e))
                  return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, ht(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = gt(e)).length)
                  for (; (n = this[u++]); )
                    if (((i = ht(n)), (r = n.nodeType === 1 && ` ${dt(i)} `))) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(` ${o} `) > -1; )
                          r = r.replace(` ${o} `, " ");
                      i !== (s = dt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass(e, t) {
                let n = typeof e,
                  r = n === "string" || Array.isArray(e);
                return typeof t === "boolean" && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                    ? this.each(function(n) {
                        w(this).toggleClass(e.call(this, n, ht(this), t), t);
                      })
                    : this.each(function() {
                        let t, i, o, a;
                        if (r)
                          for (i = 0, o = w(this), a = gt(e); (t = a[i++]); )
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                          (void 0 !== e && n !== "boolean") ||
                            ((t = ht(this)) && Q.set(this, "__className__", t),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                t || !1 === e
                                  ? ""
                                  : Q.get(this, "__className__") || "",
                              ));
                      });
              },
              hasClass(e) {
                let t,
                  n,
                  r = 0;
                for (t = ` ${e} `; (n = this[r++]); )
                  if (n.nodeType === 1 && ` ${dt(ht(n))} `.indexOf(t) > -1)
                    return !0;
                return !1;
              },
            });
          const vt = /\r/g;
          w.fn.extend({
            val(e) {
              let t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function(n) {
                    let i;
                    this.nodeType === 1 &&
                      ((i = r ? e.call(this, n, w(this).val()) : e) == null
                        ? (i = "")
                        : typeof i === "number"
                          ? (i += "")
                          : Array.isArray(i) &&
                            (i = w.map(i, e => null == e ? "" : e + "")),
                      ((t =
                        w.valHooks[this.type] ||
                        w.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                  ? (t =
                      w.valHooks[i.type] ||
                      w.valHooks[i.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(i, "value"))
                    ? n
                    : typeof (n = i.value) === "string"
                      ? n.replace(vt, "")
                      : n == null
                        ? ""
                        : n
                  : void 0;
            },
          }),
            w.extend({
              valHooks: {
                option: {
                  get(e) {
                    const t = w.find.attr(e, "value");
                    return t != null ? t : dt(w.text(e));
                  },
                },
                select: {
                  get(e) {
                    let t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = e.type === "select-one",
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                      ) {
                        if (((t = w(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set(e, t) {
                    for (
                      var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        w.inArray(w.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            w.each(["radio", "checkbox"], function() {
              (w.valHooks[this] = {
                set(e, t) {
                  if (Array.isArray(t))
                    return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (w.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in t);
          let yt = /^(?:focusinfocus|focusoutblur)$/,
            mt = function(e) {
              e.stopPropagation();
            };
          w.extend(w.event, {
            trigger(e, n, r, o) {
              let a,
                s,
                u,
                l,
                c,
                f,
                d,
                h,
                g = [r || i],
                m = p.call(e, "type") ? e.type : e,
                x = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = h = u = r = r || i),
                r.nodeType !== 3 &&
                  r.nodeType !== 8 &&
                  !yt.test(m + w.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((x = m.split(".")), (m = x.shift()), x.sort()),
                  (c = m.indexOf(":") < 0 && `on${m}`),
                  ((e = e[w.expando]
                    ? e
                    : new w.Event(m, typeof e === "object" && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = x.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(`(^|\\.)${x.join("\\.(?:.*\\.|)")}(\\.|$)`)
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = r),
                  (n = n == null ? [e] : w.makeArray(n, [e])),
                  (d = w.event.special[m] || {}),
                  o || !d.trigger || !1 !== d.trigger.apply(r, n)))
              ) {
                if (!o && !d.noBubble && !y(r)) {
                  for (
                    l = d.delegateType || m,
                      yt.test(l + m) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    g.push(s), (u = s);
                  u === (r.ownerDocument || i) &&
                    g.push(u.defaultView || u.parentWindow || t);
                }
                for (a = 0; (s = g[a++]) && !e.isPropagationStopped(); )
                  (h = s),
                    (e.type = a > 1 ? l : d.bindType || m),
                    (f =
                      (Q.get(s, "events") || {})[e.type] &&
                      Q.get(s, "handle")) && f.apply(s, n),
                    (f = c && s[c]) &&
                      f.apply &&
                      G(s) &&
                      ((e.result = f.apply(s, n)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  o ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(g.pop(), n)) ||
                    !G(r) ||
                    (c &&
                      v(r[m]) &&
                      !y(r) &&
                      ((u = r[c]) && (r[c] = null),
                      (w.event.triggered = m),
                      e.isPropagationStopped() && h.addEventListener(m, mt),
                      r[m](),
                      e.isPropagationStopped() && h.removeEventListener(m, mt),
                      (w.event.triggered = void 0),
                      u && (r[c] = u))),
                  e.result
                );
              }
            },
            simulate(e, t, n) {
              const r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
              w.event.trigger(r, null, t);
            },
          }),
            w.fn.extend({
              trigger(e, t) {
                return this.each(function() {
                  w.event.trigger(e, t, this);
                });
              },
              triggerHandler(e, t) {
                const n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              w.each({ focus: "focusin", blur: "focusout" }, (e, t) => {
                const n = function(e) {
                  w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                  setup() {
                    let r = this.ownerDocument || this,
                      i = Q.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      Q.access(r, t, (i || 0) + 1);
                  },
                  teardown() {
                    let r = this.ownerDocument || this,
                      i = Q.access(r, t) - 1;
                    i
                      ? Q.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Q.remove(r, t));
                  },
                };
              });
          let xt = t.location,
            bt = Date.now(),
            wt = /\?/;
          w.parseXML = function(e) {
            let n;
            if (!e || typeof e !== "string") return null;
            try {
              n = new t.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              n = void 0;
            }
            return (
              (n && !n.getElementsByTagName("parsererror").length) ||
                w.error(`Invalid XML: ${e}`),
              n
            );
          };
          let Tt = /\[\]$/,
            Ct = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;
          function St(e, t, n, r) {
            let i;
            if (Array.isArray(t))
              w.each(t, (t, i) => {
                n || Tt.test(e)
                  ? r(e, i)
                  : St(
                      `${e}[${"object" == typeof i && null != i ? t : ""}]`,
                      i,
                      n,
                      r,
                    );
              });
            else if (n || b(t) !== "object") r(e, t);
            else for (i in t) St(`${e}[${i}]`, t[i], n, r);
          }
          (w.param = function(e, t) {
            let n,
              r = [],
              i = function(e, t) {
                const n = v(t) ? t() : t;
                r[r.length] = `${encodeURIComponent(e)}=${encodeURIComponent(
                  n == null ? "" : n,
                )}`;
              };
            if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
              w.each(e, function() {
                i(this.name, this.value);
              });
            else for (n in e) St(n, e[n], t, i);
            return r.join("&");
          }),
            w.fn.extend({
              serialize() {
                return w.param(this.serializeArray());
              },
              serializeArray() {
                return this.map(function() {
                  const e = w.prop(this, "elements");
                  return e ? w.makeArray(e) : this;
                })
                  .filter(function() {
                    const e = this.type;
                    return (
                      this.name &&
                      !w(this).is(":disabled") &&
                      kt.test(this.nodeName) &&
                      !Et.test(e) &&
                      (this.checked || !ce.test(e))
                    );
                  })
                  .map(function(e, t) {
                    const n = w(this).val();
                    return n == null
                      ? null
                      : Array.isArray(n)
                        ? w.map(n, e => ({
                              name: t.name,
                              value: e.replace(Ct, "\r\n"),
                            }))
                        : { name: t.name, value: n.replace(Ct, "\r\n") };
                  })
                  .get();
              },
            });
          let Dt = /%20/g,
            Nt = /#.*$/,
            At = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Ht = {},
            Ot = {},
            Pt = "*/".concat("*"),
            Mt = i.createElement("a");
          function Rt(e) {
            return function(t, n) {
              typeof t !== "string" && ((n = t), (t = "*"));
              let r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
              if (v(n))
                for (; (r = o[i++]); )
                  r[0] === "+"
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function It(e, t, n, r) {
            let i = {},
              o = e === Ot;
            function a(s) {
              let u;
              return (
                (i[s] = !0),
                w.each(e[s] || [], (e, s) => {
                  const l = s(t, n, r);
                  return typeof l !== "string" || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function Wt(e, t) {
            let n,
              r,
              i = w.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && w.extend(!0, e, r), e;
          }
          (Mt.href = xt.href),
            w.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  xt.protocol,
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Pt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": w.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup(e, t) {
                return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e);
              },
              ajaxPrefilter: Rt(Ht),
              ajaxTransport: Rt(Ot),
              ajax(e, n) {
                typeof e === "object" && ((n = e), (e = void 0)), (n = n || {});
                var r,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d,
                  h = w.ajaxSetup({}, n),
                  g = h.context || h,
                  v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                  y = w.Deferred(),
                  m = w.Callbacks("once memory"),
                  x = h.statusCode || {},
                  b = {},
                  T = {},
                  C = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader(e) {
                      let t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = jt.exec(a)); )
                            s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()];
                      }
                      return t == null ? null : t;
                    },
                    getAllResponseHeaders() {
                      return c ? a : null;
                    },
                    setRequestHeader(e, t) {
                      return (
                        c == null &&
                          ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType(e) {
                      return c == null && (h.mimeType = e), this;
                    },
                    statusCode(e) {
                      let t;
                      if (e)
                        if (c) E.always(e[E.status]);
                        else for (t in e) x[t] = [x[t], e[t]];
                      return this;
                    },
                    abort(e) {
                      let t = e || C;
                      return r && r.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (y.promise(E),
                  (h.url = `${e || h.url || xt.href}`.replace(
                    Lt,
                    `${xt.protocol}//`,
                  )),
                  (h.type = n.method || n.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [
                    "",
                  ]),
                  h.crossDomain == null)
                ) {
                  l = i.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        `${Mt.protocol}//${Mt.host}` !=
                        `${l.protocol}//${l.host}`);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    typeof h.data !== "string" &&
                    (h.data = w.param(h.data, h.traditional)),
                  It(Ht, h, n, E),
                  c)
                )
                  return E;
                for (p in ((f = w.event && h.global) &&
                  w.active++ == 0 &&
                  w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !qt.test(h.type)),
                (o = h.url.replace(Nt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded",
                    ) === 0 &&
                    (h.data = h.data.replace(Dt, "+"))
                  : ((d = h.url.slice(o.length)),
                    h.data &&
                      (h.processData || typeof h.data === "string") &&
                      ((o += (wt.test(o) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((o = o.replace(At, "$1")),
                      (d = `${wt.test(o) ? "&" : "?"}_=${bt++}${d}`)),
                    (h.url = o + d)),
                h.ifModified &&
                  (w.lastModified[o] &&
                    E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
                  w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  n.contentType) &&
                  E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                      (h.dataTypes[0] !== "*" ? `, ${Pt}; q=0.01` : "")
                    : h.accepts["*"],
                ),
                h.headers))
                  E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                  return E.abort();
                if (
                  ((C = "abort"),
                  m.add(h.complete),
                  E.done(h.success),
                  E.fail(h.error),
                  (r = It(Ot, h, n, E)))
                ) {
                  if (
                    ((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), c)
                  )
                    return E;
                  h.async &&
                    h.timeout > 0 &&
                    (u = t.setTimeout(() => {
                      E.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), r.send(b, k);
                  } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");
                function k(e, n, i, s) {
                  let l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                  c ||
                    ((c = !0),
                    u && t.clearTimeout(u),
                    (r = void 0),
                    (a = s || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (l = (e >= 200 && e < 300) || e === 304),
                    i &&
                      (b = (function(e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          u[0] === "*";

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[`${i} ${u[0]}`]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(h, E, i)),
                    (b = (function(e, t, n, r) {
                      let i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if (o === "*") o = u;
                          else if (u !== "*" && u !== o) {
                            if (!(a = l[`${u} ${o}`] || l[`* ${o}`]))
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[`${u} ${s[0]}`] || l[`* ${s[0]}`])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : `No conversion from ${u} to ${o}`,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, b, E, l)),
                    l
                      ? (h.ifModified &&
                          ((T = E.getResponseHeader("Last-Modified")) &&
                            (w.lastModified[o] = T),
                          (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                        e === 204 || h.type === "HEAD"
                          ? (C = "nocontent")
                          : e === 304
                            ? (C = "notmodified")
                            : ((C = b.state),
                              (p = b.data),
                              (l = !(d = b.error))))
                      : ((d = C),
                        (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = `${n || C}`),
                    l
                      ? y.resolveWith(g, [p, C, E])
                      : y.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f &&
                      v.trigger(l ? "ajaxSuccess" : "ajaxError", [
                        E,
                        h,
                        l ? p : d,
                      ]),
                    m.fireWith(g, [E, C]),
                    f &&
                      (v.trigger("ajaxComplete", [E, h]),
                      --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON(e, t, n) {
                return w.get(e, t, n, "json");
              },
              getScript(e, t) {
                return w.get(e, void 0, t, "script");
              },
            }),
            w.each(["get", "post"], (e, t) => {
              w[t] = function(e, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  w.ajax(
                    w.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      w.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            (w._evalUrl = function(e) {
              return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
              });
            }),
            w.fn.extend({
              wrapAll(e) {
                let t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = w(e, this[0].ownerDocument)
                      .eq(0)
                      .clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function() {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner(e) {
                return v(e)
                  ? this.each(function(t) {
                      w(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function() {
                      let t = w(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap(e) {
                const t = v(e);
                return this.each(function(n) {
                  w(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap(e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function() {
                      w(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (w.expr.pseudos.hidden = function(e) {
              return !w.expr.pseudos.visible(e);
            }),
            (w.expr.pseudos.visible = function(e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (w.ajaxSettings.xhr = function() {
              try {
                return new t.XMLHttpRequest();
              } catch (e) {}
            });
          let $t = { 0: 200, 1223: 204 },
            Bt = w.ajaxSettings.xhr();
          (g.cors = !!Bt && "withCredentials" in Bt),
            (g.ajax = Bt = !!Bt),
            w.ajaxTransport(e => {
              let n, r;
              if (g.cors || (Bt && !e.crossDomain))
                return {
                  send(i, o) {
                    let a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (n = function(e) {
                      return function() {
                        n &&
                          ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                          e === "abort"
                            ? s.abort()
                            : e === "error"
                              ? typeof s.status != "number"
                                ? o(0, "error")
                                : o(s.status, s.statusText)
                              : o(
                                  $t[s.status] || s.status,
                                  s.statusText,
                                  (s.responseType || "text") !== "text" ||
                                  typeof s.responseText != "string"
                                    ? { binary: s.response }
                                    : { text: s.responseText },
                                  s.getAllResponseHeaders(),
                                ));
                      };
                    }),
                      (s.onload = n()),
                      (r = s.onerror = s.ontimeout = n("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = r)
                        : (s.onreadystatechange = function() {
                            s.readyState === 4 &&
                              t.setTimeout(() => {
                                n && r();
                              });
                          }),
                      (n = n("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (n) throw e;
                    }
                  },
                  abort() {
                    n && n();
                  },
                };
            }),
            w.ajaxPrefilter(e => {
              e.crossDomain && (e.contents.script = !1);
            }),
            w.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function(e) {
                  return w.globalEval(e), e;
                },
              },
            }),
            w.ajaxPrefilter("script", e => {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            w.ajaxTransport("script", e => {
              let t, n;
              if (e.crossDomain)
                return {
                  send(r, o) {
                    (t = w("<script>")
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function(e) {
                          t.remove(),
                            (n = null),
                            e && o(e.type === "error" ? 404 : 200, e.type);
                        }),
                      )),
                      i.head.appendChild(t[0]);
                  },
                  abort() {
                    n && n();
                  },
                };
            });
          let Ft,
            _t = [],
            zt = /(=)\?(?=&|$)|\?\?/;
          w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback() {
              const e = _t.pop() || `${w.expando}_${bt++}`;
              return (this[e] = !0), e;
            },
          }),
            w.ajaxPrefilter("json jsonp", (e, n, r) => {
              let i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (zt.test(e.url)
                    ? "url"
                    : typeof e.data === "string" &&
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) === 0 &&
                      zt.test(e.data) &&
                      "data");
              if (s || e.dataTypes[0] === "jsonp")
                return (
                  (i = e.jsonpCallback = v(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(zt, `$1${i}`))
                    : !1 !== e.jsonp &&
                      (e.url += `${(wt.test(e.url) ? "&" : "?") +
                        e.jsonp}=${i}`),
                  (e.converters["script json"] = function() {
                    return a || w.error(`${i} was not called`), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = t[i]),
                  (t[i] = function() {
                    a = arguments;
                  }),
                  r.always(() => {
                    void 0 === o ? w(t).removeProp(i) : (t[i] = o),
                      e[i] && ((e.jsonpCallback = n.jsonpCallback), _t.push(i)),
                      a && v(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument = (((Ft = i.implementation.createHTMLDocument(
              "",
            ).body).innerHTML =
              "<form></form><form></form>"),
            Ft.childNodes.length === 2)),
            (w.parseHTML = function(e, t, n) {
              return typeof e !== "string"
                ? []
                : (typeof t === "boolean" && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t = i.implementation.createHTMLDocument(
                          "",
                        )).createElement("base")).href =
                          i.location.href),
                        t.head.appendChild(r))
                      : (t = i)),
                  (a = !n && []),
                  (o = A.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = xe([e], t, a)),
                      a && a.length && w(a).remove(),
                      w.merge([], o.childNodes)));
              let r, o, a;
            }),
            (w.fn.load = function(e, t, n) {
              let r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = dt(e.slice(s))), (e = e.slice(0, s))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && typeof t === "object" && (i = "POST"),
                a.length > 0 &&
                  w
                    .ajax({
                      url: e,
                      type: i || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function(e) {
                      (o = arguments),
                        a.html(
                          r
                            ? w("<div>")
                                .append(w.parseHTML(e))
                                .find(r)
                            : e,
                        );
                    })
                    .always(
                      n &&
                        ((e, t) => {
                          a.each(function() {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }),
                    ),
                this
              );
            }),
            w.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              (e, t) => {
                w.fn[t] = function(e) {
                  return this.on(t, e);
                };
              },
            ),
            (w.expr.pseudos.animated = function(e) {
              return w.grep(w.timers, t => e === t.elem).length;
            }),
            (w.offset = {
              setOffset(e, t, n) {
                let r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = w.css(e, "position"),
                  c = w(e),
                  f = {};
                l === "static" && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = w.css(e, "top")),
                  (u = w.css(e, "left")),
                  (l === "absolute" || l === "fixed") &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  v(t) && (t = t.call(e, n, w.extend({}, s))),
                  t.top != null && (f.top = t.top - s.top + a),
                  t.left != null && (f.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            w.fn.extend({
              offset(e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function(t) {
                        w.offset.setOffset(this, e, t);
                      });
                let t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position() {
                if (this[0]) {
                  let e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if (w.css(r, "position") === "fixed")
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      w.css(e, "position") === "static";

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      e.nodeType === 1 &&
                      (((i = w(e).offset()).top += w.css(
                        e,
                        "borderTopWidth",
                        !0,
                      )),
                      (i.left += w.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent() {
                return this.map(function() {
                  for (
                    var e = this.offsetParent;
                    e && w.css(e, "position") === "static";

                  )
                    e = e.offsetParent;
                  return e || be;
                });
              },
            }),
            w.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              (e, t) => {
                const n = t === "pageYOffset";
                w.fn[e] = function(r) {
                  return _(
                    this,
                    (e, r, i) => {
                      let o;
                      if (
                        (y(e)
                          ? (o = e)
                          : e.nodeType === 9 && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset,
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length,
                  );
                };
              },
            ),
            w.each(["top", "left"], (e, t) => {
              w.cssHooks[t] = Fe(g.pixelPosition, (e, n) => {
                if (n)
                  return (
                    (n = Be(e, t)), Ie.test(n) ? `${w(e).position()[t]  }px` : n
                  );
              });
            }),
            w.each({ Height: "height", Width: "width" }, (e, t) => {
              w.each(
                { padding: `inner${e}`, content: t, "": `outer${e}` },
                (n, r) => {
                  w.fn[r] = function(i, o) {
                    let a = arguments.length && (n || typeof i != "boolean"),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return _(
                      this,
                      (t, n, i) => {
                        var o;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                            ? ((o = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                o["scroll" + e],
                                t.body["offset" + e],
                                o["offset" + e],
                                o["client" + e],
                              ))
                            : void 0 === i
                              ? w.css(t, n, s)
                              : w.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a,
                    );
                  };
                },
              );
            }),
            w.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " ",
              ),
              (e, t) => {
                w.fn[t] = function(e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            ),
            w.fn.extend({
              hover(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            w.fn.extend({
              bind(e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind(e, t) {
                return this.off(e, null, t);
              },
              delegate(e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate(e, t, n) {
                return arguments.length === 1
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
            }),
            (w.proxy = function(e, t) {
              let n, r, i;
              if (
                (typeof t === "string" && ((n = e[t]), (t = e), (e = n)), v(e))
              )
                return (
                  (r = a.call(arguments, 2)),
                  ((i = function() {
                    return e.apply(t || this, r.concat(a.call(arguments)));
                  }).guid = e.guid = e.guid || w.guid++),
                  i
                );
            }),
            (w.holdReady = function(e) {
              e ? w.readyWait++ : w.ready(!0);
            }),
            (w.isArray = Array.isArray),
            (w.parseJSON = JSON.parse),
            (w.nodeName = N),
            (w.isFunction = v),
            (w.isWindow = y),
            (w.camelCase = V),
            (w.type = b),
            (w.now = Date.now),
            (w.isNumeric = function(e) {
              const t = w.type(e);
              return (
                (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
              );
            }),
            typeof e === "function" && e.amd && e("jquery", [], () => w);
          let Xt = t.jQuery,
            Ut = t.$;
          return (
            (w.noConflict = function(e) {
              return (
                t.$ === w && (t.$ = Ut),
                e && t.jQuery === w && (t.jQuery = Xt),
                w
              );
            }),
            n || (t.jQuery = t.$ = w),
            w
          );
        });
      },
      { process: 61 },
    ],
    54: [
      function(require, module, exports) {
        const global = arguments[3];
        const e = arguments[3];
        Object.defineProperty(exports, "__esModule", { value: !0 });
        for (
          var t =
              typeof window !== "undefined" && typeof document !== "undefined",
            n = ["Edge", "Trident", "Firefox"],
            o = 0,
            r = 0;
          r < n.length;
          r += 1
        )
          if (t && navigator.userAgent.indexOf(n[r]) >= 0) {
            o = 1;
            break;
          }
        function i(e) {
          let t = !1;
          return function() {
            t ||
              ((t = !0),
              window.Promise.resolve().then(() => {
                (t = !1), e();
              }));
          };
        }
        function a(e) {
          let t = !1;
          return function() {
            t ||
              ((t = !0),
              setTimeout(() => {
                (t = !1), e();
              }, o));
          };
        }
        let s = t && window.Promise,
          f = s ? i : a;
        function p(e) {
          return e && {}.toString.call(e) === "[object Function]";
        }
        function l(e, t) {
          if (e.nodeType !== 1) return [];
          const n = getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function u(e) {
          returne.nodeName === "HTML" ? e : e.parentNode || e.host;
        }
        function d(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          let t = l(e),
            n = t.overflow,
            o = t.overflowX,
            r = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + o) ? e : d(u(e));
        }
        let c = t && !(!window.MSInputMethodContext || !document.documentMode),
          h = t && /MSIE 10/.test(navigator.userAgent);
        function m(e) {
          return e === 11 ? c : e === 10 ? h : c || h;
        }
        function v(e) {
          if (!e) return document.documentElement;
          for (
            var t = m(10) ? document.body : null, n = e.offsetParent;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          const o = n && n.nodeName;
          return o && o !== "BODY" && o !== "HTML"
            ? ["TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
              l(n, "position") === "static"
              ? v(n)
              : n
            : e
              ? e.ownerDocument.documentElement
              : document.documentElement;
        }
        function g(e) {
          const t = e.nodeName;
          returnt !== "BODY" && (t === "HTML" || v(e.firstElementChild) === e);
        }
        function b(e) {
          return e.parentNode !== null ? b(e.parentNode) : e;
        }
        function w(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          let n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            r = n ? t : e,
            i = document.createRange();
          i.setStart(o, 0), i.setEnd(r, 0);
          const a = i.commonAncestorContainer;
          if ((e !== a && t !== a) || o.contains(r)) return g(a) ? a : v(a);
          const s = b(e);
          return s.host ? w(s.host, t) : w(e, b(t).host);
        }
        function y(e) {
          let t =
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top") === "top"
                ? "scrollTop"
                : "scrollLeft",
            n = e.nodeName;
          if (n === "BODY" || n === "HTML") {
            const o = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || o)[t];
          }
          return e[t];
        }
        function E(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = y(t, "top"),
            r = y(t, "left"),
            i = n ? -1 : 1;
          return (
            (e.top += o * i),
            (e.bottom += o * i),
            (e.left += r * i),
            (e.right += r * i),
            e
          );
        }
        function x(e, t) {
          let n = t === "x" ? "Left" : "Top",
            o = n === "Left" ? "Right" : "Bottom";
          return (
            parseFloat(e[`border${n}Width`], 10) +
            parseFloat(e[`border${o}Width`], 10)
          );
        }
        function O(e, t, n, o) {
          return Math.max(
            t[`offset${e}`],
            t[`scroll${e}`],
            n[`client${e}`],
            n[`offset${e}`],
            n[`scroll${e}`],
            m(10)
              ? n[`offset${e}`] +
                o[`margin${e === "Height" ? "Top" : "Left"}`] +
                o[`margin${e === "Height" ? "Bottom" : "Right"}`]
              : 0,
          );
        }
        function L() {
          let e = document.body,
            t = document.documentElement,
            n = m(10) && getComputedStyle(t);
          return { height: O("Height", e, t, n), width: O("Width", e, t, n) };
        }
        let M = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          T = (function() {
            function e(e, t) {
              for (let n = 0; n < t.length; n++) {
                const o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function(t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          C = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          N =
            Object.assign ||
            function(e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            };
        function F(e) {
          return N({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function D(e) {
          let t = {};
          try {
            if (m(10)) {
              t = e.getBoundingClientRect();
              let n = y(e, "top"),
                o = y(e, "left");
              (t.top += n), (t.left += o), (t.bottom += n), (t.right += o);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          let r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            i = e.nodeName === "HTML" ? L() : {},
            a = i.width || e.clientWidth || r.right - r.left,
            s = i.height || e.clientHeight || r.bottom - r.top,
            f = e.offsetWidth - a,
            p = e.offsetHeight - s;
          if (f || p) {
            const u = l(e);
            (f -= x(u, "x")), (p -= x(u, "y")), (r.width -= f), (r.height -= p);
          }
          return F(r);
        }
        function k(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = m(10),
            r = t.nodeName === "HTML",
            i = D(e),
            a = D(t),
            s = d(e),
            f = l(t),
            p = parseFloat(f.borderTopWidth, 10),
            u = parseFloat(f.borderLeftWidth, 10);
          n &&
            t.nodeName === "HTML" &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          let c = F({
            top: i.top - a.top - p,
            left: i.left - a.left - u,
            width: i.width,
            height: i.height,
          });
          if (((c.marginTop = 0), (c.marginLeft = 0), !o && r)) {
            let h = parseFloat(f.marginTop, 10),
              v = parseFloat(f.marginLeft, 10);
            (c.top -= p - h),
              (c.bottom -= p - h),
              (c.left -= u - v),
              (c.right -= u - v),
              (c.marginTop = h),
              (c.marginLeft = v);
          }
          return (
            (o && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") &&
              (c = E(c, t)),
            c
          );
        }
        function S(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            o = k(e, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            i = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : y(n),
            s = t ? 0 : y(n, "left");
          return F({
            top: a - o.top + o.marginTop,
            left: s - o.left + o.marginLeft,
            width: r,
            height: i,
          });
        }
        function W(e) {
          const t = e.nodeName;
          returnt !== "BODY" &&
            t !== "HTML" &&
            (l(e, "position") === "fixed" || W(u(e)));
        }
        function P(e) {
          if (!e || !e.parentElement || m()) return document.documentElement;
          for (var t = e.parentElement; t && l(t, "transform") === "none"; )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function H(e, t, n, o) {
          let r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = { top: 0, left: 0 },
            a = r ? P(e) : w(e, t);
          if (o === "viewport") i = S(a, r);
          else {
            let s = void 0;
            o === "scrollParent"
              ? (s = d(u(t))).nodeName === "BODY" &&
                (s = e.ownerDocument.documentElement)
              : (s = o === "window" ? e.ownerDocument.documentElement : o);
            const f = k(s, a, r);
            if (s.nodeName !== "HTML" || W(a)) i = f;
            else {
              let p = L(),
                l = p.height,
                c = p.width;
              (i.top += f.top - f.marginTop),
                (i.bottom = l + f.top),
                (i.left += f.left - f.marginLeft),
                (i.right = c + f.left);
            }
          }
          return (
            (i.left += n), (i.top += n), (i.right -= n), (i.bottom -= n), i
          );
        }
        function A(e) {
          return e.width * e.height;
        }
        function B(e, t, n, o, r) {
          const i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (e.indexOf("auto") === -1) return e;
          let a = H(n, o, i, r),
            s = {
              top: { width: a.width, height: t.top - a.top },
              right: { width: a.right - t.right, height: a.height },
              bottom: { width: a.width, height: a.bottom - t.bottom },
              left: { width: t.left - a.left, height: a.height },
            },
            f = Object.keys(s)
              .map(e => N({ key: e }, s[e], { area: A(s[e]) }))
              .sort((e, t) => t.area - e.area),
            p = f.filter(e => {
              let t = e.width,
                o = e.height;
              return t >= n.clientWidth && o >= n.clientHeight;
            }),
            l = p.length > 0 ? p[0].key : f[0].key,
            u = e.split("-")[1];
          return l + (u ? `-${u}` : "");
        }
        function j(e, t, n) {
          const o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return k(n, o ? P(t) : w(t, n), o);
        }
        function I(e) {
          let t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            o = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
          return { width: e.offsetWidth + o, height: e.offsetHeight + n };
        }
        function R(e) {
          const t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, e => t[e]);
        }
        function U(e, t, n) {
          n = n.split("-")[0];
          let o = I(e),
            r = { width: o.width, height: o.height },
            i = ["right", "left"].indexOf(n) !== -1,
            a = i ? "top" : "left",
            s = i ? "left" : "top",
            f = i ? "height" : "width",
            p = i ? "width" : "height";
          return (
            (r[a] = t[a] + t[f] / 2 - o[f] / 2),
            (r[s] = n === s ? t[s] - o[p] : t[R(s)]),
            r
          );
        }
        function Y(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function q(e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex(e => e[t] === n);
          const o = Y(e, e => e[t] === n);
          return e.indexOf(o);
        }
        function K(e, t, n) {
          return (
            (void 0 === n ? e : e.slice(0, q(e, "name", n))).forEach(e => {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!",
                );
              const n = e.function || e.fn;
              e.enabled &&
                p(n) &&
                ((t.offsets.popper = F(t.offsets.popper)),
                (t.offsets.reference = F(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function _() {
          if (!this.state.isDestroyed) {
            let e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = j(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed,
            )),
              (e.placement = B(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding,
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = U(
                this.popper,
                e.offsets.reference,
                e.placement,
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (e = K(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function z(e, t) {
          return e.some(e => {
            const n = e.name;
            return e.enabled && n === t;
          });
        }
        function G(e) {
          for (
            let t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              o = 0;
            o < t.length;
            o++
          ) {
            let r = t[o],
              i = r ? `${r}${n}` : e;
            if (void 0 !== document.body.style[i]) return i;
          }
          return null;
        }
        function V() {
          return (
            (this.state.isDestroyed = !0),
            z(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[G("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function X(e) {
          const t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function J(e, t, n, o) {
          let r = e.nodeName === "BODY",
            i = r ? e.ownerDocument.defaultView : e;
          i.addEventListener(t, n, { passive: !0 }),
            r || J(d(i.parentNode), t, n, o),
            o.push(i);
        }
        function Q(e, t, n, o) {
          (n.updateBound = o),
            X(e).addEventListener("resize", n.updateBound, { passive: !0 });
          const r = d(e);
          return (
            J(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function Z() {
          this.state.eventsEnabled ||
            (this.state = Q(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate,
            ));
        }
        function $(e, t) {
          return (
            X(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(e => {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        }
        function ee() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = $(this.reference, this.state)));
        }
        function te(e) {
          returne !== "" && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function ne(e, t) {
          Object.keys(t).forEach(n => {
            let o = "";
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
              -1 &&
              te(t[n]) &&
              (o = "px"),
              (e.style[n] = t[n] + o);
          });
        }
        function oe(e, t) {
          Object.keys(t).forEach(n => {
            !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
          });
        }
        function re(e) {
          return (
            ne(e.instance.popper, e.styles),
            oe(e.instance.popper, e.attributes),
            e.arrowElement &&
              Object.keys(e.arrowStyles).length &&
              ne(e.arrowElement, e.arrowStyles),
            e
          );
        }
        function ie(e, t, n, o, r) {
          let i = j(r, t, e, n.positionFixed),
            a = B(
              n.placement,
              i,
              t,
              e,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding,
            );
          return (
            t.setAttribute("x-placement", a),
            ne(t, { position: n.positionFixed ? "fixed" : "absolute" }),
            n
          );
        }
        function ae(e, t) {
          let n = t.x,
            o = t.y,
            r = e.offsets.popper,
            i = Y(e.instance.modifiers, e => e.name === "applyStyle")
              .gpuAcceleration;
          void 0 !== i &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
            );
          let a = void 0 !== i ? i : t.gpuAcceleration,
            s = D(v(e.instance.popper)),
            f = { position: r.position },
            p = {
              left: Math.floor(r.left),
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              right: Math.floor(r.right),
            },
            l = n === "bottom" ? "top" : "bottom",
            u = o === "right" ? "left" : "right",
            d = G("transform"),
            c = void 0,
            h = void 0;
          if (
            ((h = l === "bottom" ? -s.height + p.bottom : p.top),
            (c = u === "right" ? -s.width + p.right : p.left),
            a && d)
          )
            (f[d] = `translate3d(${c}px, ${h}px, 0)`),
              (f[l] = 0),
              (f[u] = 0),
              (f.willChange = "transform");
          else {
            let m = l === "bottom" ? -1 : 1,
              g = u === "right" ? -1 : 1;
            (f[l] = h * m), (f[u] = c * g), (f.willChange = `${l}, ${u}`);
          }
          const b = { "x-placement": e.placement };
          return (
            (e.attributes = N({}, b, e.attributes)),
            (e.styles = N({}, f, e.styles)),
            (e.arrowStyles = N({}, e.offsets.arrow, e.arrowStyles)),
            e
          );
        }
        function se(e, t, n) {
          let o = Y(e, e => e.name === t),
            r =
              !!o &&
              e.some(e => e.name === n && e.enabled && e.order < o.order);
          if (!r) {
            let i = `\`${t}\``,
              a = `\`${n}\``;
            console.warn(
              `${a} modifier is required by ${i} modifier in order to work, be sure to include it before ${i}!`,
            );
          }
          return r;
        }
        function fe(e, t) {
          let n;
          if (!se(e.instance.modifiers, "arrow", "keepTogether")) return e;
          let o = t.element;
          if (typeof o === "string") {
            if (!(o = e.instance.popper.querySelector(o))) return e;
          } else if (!e.instance.popper.contains(o))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!",
              ),
              e
            );
          let r = e.placement.split("-")[0],
            i = e.offsets,
            a = i.popper,
            s = i.reference,
            f = ["left", "right"].indexOf(r) !== -1,
            p = f ? "height" : "width",
            u = f ? "Top" : "Left",
            d = u.toLowerCase(),
            c = f ? "left" : "top",
            h = f ? "bottom" : "right",
            m = I(o)[p];
          s[h] - m < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - m)),
            s[d] + m > a[h] && (e.offsets.popper[d] += s[d] + m - a[h]),
            (e.offsets.popper = F(e.offsets.popper));
          let v = s[d] + s[p] / 2 - m / 2,
            g = l(e.instance.popper),
            b = parseFloat(g[`margin${u}`], 10),
            w = parseFloat(g[`border${u}Width`], 10),
            y = v - e.offsets.popper[d] - b - w;
          return (
            (y = Math.max(Math.min(a[p] - m, y), 0)),
            (e.arrowElement = o),
            (e.offsets.arrow = (C((n = {}), d, Math.round(y)), C(n, c, ""), n)),
            e
          );
        }
        function pe(e) {
          returne === "end" ? "start" : e === "start" ? "end" : e;
        }
        let le = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          ue = le.slice(3);
        function de(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = ue.indexOf(e),
            o = ue.slice(n + 1).concat(ue.slice(0, n));
          return t ? o.reverse() : o;
        }
        const ce = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise",
        };
        function he(e, t) {
          if (z(e.instance.modifiers, "inner")) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          let n = H(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              t.boundariesElement,
              e.positionFixed,
            ),
            o = e.placement.split("-")[0],
            r = R(o),
            i = e.placement.split("-")[1] || "",
            a = [];
          switch (t.behavior) {
            case ce.FLIP:
              a = [o, r];
              break;
            case ce.CLOCKWISE:
              a = de(o);
              break;
            case ce.COUNTERCLOCKWISE:
              a = de(o, !0);
              break;
            default:
              a = t.behavior;
          }
          return (
            a.forEach((s, f) => {
              if (o !== s || a.length === f + 1) return e;
              (o = e.placement.split("-")[0]), (r = R(o));
              let p = e.offsets.popper,
                l = e.offsets.reference,
                u = Math.floor,
                d =
                  (o === "left" && u(p.right) > u(l.left)) ||
                  (o === "right" && u(p.left) < u(l.right)) ||
                  (o === "top" && u(p.bottom) > u(l.top)) ||
                  (o === "bottom" && u(p.top) < u(l.bottom)),
                c = u(p.left) < u(n.left),
                h = u(p.right) > u(n.right),
                m = u(p.top) < u(n.top),
                v = u(p.bottom) > u(n.bottom),
                g =
                  (o === "left" && c) ||
                  (o === "right" && h) ||
                  (o === "top" && m) ||
                  (o === "bottom" && v),
                b = ["top", "bottom"].indexOf(o) !== -1,
                w =
                  !!t.flipVariations &&
                  ((b && i === "start" && c) ||
                    (b && i === "end" && h) ||
                    (!b && i === "start" && m) ||
                    (!b && i === "end" && v));
              (d || g || w) &&
                ((e.flipped = !0),
                (d || g) && (o = a[f + 1]),
                w && (i = pe(i)),
                (e.placement = o + (i ? `-${i}` : "")),
                (e.offsets.popper = N(
                  {},
                  e.offsets.popper,
                  U(e.instance.popper, e.offsets.reference, e.placement),
                )),
                (e = K(e.instance.modifiers, e, "flip")));
            }),
            e
          );
        }
        function me(e) {
          let t = e.offsets,
            n = t.popper,
            o = t.reference,
            r = e.placement.split("-")[0],
            i = Math.floor,
            a = ["top", "bottom"].indexOf(r) !== -1,
            s = a ? "right" : "bottom",
            f = a ? "left" : "top",
            p = a ? "width" : "height";
          return (
            n[s] < i(o[f]) && (e.offsets.popper[f] = i(o[f]) - n[p]),
            n[f] > i(o[s]) && (e.offsets.popper[f] = i(o[s])),
            e
          );
        }
        function ve(e, t, n, o) {
          let r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            i = +r[1],
            a = r[2];
          if (!i) return e;
          if (a.indexOf("%") === 0) {
            let s = void 0;
            switch (a) {
              case "%p":
                s = n;
                break;
              case "%":
              case "%r":
              default:
                s = o;
            }
            return (F(s)[t] / 100) * i;
          }
          if (a === "vh" || a === "vw") {
            return (
              ((a === "vh"
                ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0,
                  )
                : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0,
                  )) /
                100) *
              i
            );
          }
          return i;
        }
        function ge(e, t, n, o) {
          let r = [0, 0],
            i = ["right", "left"].indexOf(o) !== -1,
            a = e.split(/(\+|\-)/).map(e => e.trim()),
            s = a.indexOf(Y(a, e => e.search(/,|\s/) !== -1));
          a[s] &&
            a[s].indexOf(",") === -1 &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
            );
          let f = /\s*,\s*|\s+/,
            p =
              s !== -1
                ? [
                    a.slice(0, s).concat([a[s].split(f)[0]]),
                    [a[s].split(f)[1]].concat(a.slice(s + 1)),
                  ]
                : [a];
          return (
            (p = p.map((e, o) => {
              let r = (o === 1 ? !i : i) ? "height" : "width",
                a = !1;
              return e
                .reduce(
                  (e, t) =>
                    e[e.length - 1] === "" && ["+", "-"].indexOf(t) !== -1
                      ? ((e[e.length - 1] = t), (a = !0), e)
                      : a
                        ? ((e[e.length - 1] += t), (a = !1), e)
                        : e.concat(t),
                  [],
                )
                .map(e => ve(e, r, t, n));
            })).forEach((e, t) => {
              e.forEach((n, o) => {
                te(n) && (r[t] += n * (e[o - 1] === "-" ? -1 : 1));
              });
            }),
            r
          );
        }
        function be(e, t) {
          let n = t.offset,
            o = e.placement,
            r = e.offsets,
            i = r.popper,
            a = r.reference,
            s = o.split("-")[0],
            f = void 0;
          return (
            (f = te(+n) ? [+n, 0] : ge(n, i, a, s)),
            s === "left"
              ? ((i.top += f[0]), (i.left -= f[1]))
              : s === "right"
                ? ((i.top += f[0]), (i.left += f[1]))
                : s === "top"
                  ? ((i.left += f[0]), (i.top -= f[1]))
                  : s === "bottom" && ((i.left += f[0]), (i.top += f[1])),
            (e.popper = i),
            e
          );
        }
        function we(e, t) {
          let n = t.boundariesElement || v(e.instance.popper);
          e.instance.reference === n && (n = v(n));
          let o = G("transform"),
            r = e.instance.popper.style,
            i = r.top,
            a = r.left,
            s = r[o];
          (r.top = ""), (r.left = ""), (r[o] = "");
          const f = H(
            e.instance.popper,
            e.instance.reference,
            t.padding,
            n,
            e.positionFixed,
          );
          (r.top = i), (r.left = a), (r[o] = s), (t.boundaries = f);
          let p = t.priority,
            l = e.offsets.popper,
            u = {
              primary(e) {
                let n = l[e];
                return (
                  l[e] < f[e] &&
                    !t.escapeWithReference &&
                    (n = Math.max(l[e], f[e])),
                  C({}, e, n)
                );
              },
              secondary(e) {
                let n = e === "right" ? "left" : "top",
                  o = l[n];
                return (
                  l[e] > f[e] &&
                    !t.escapeWithReference &&
                    (o = Math.min(
                      l[n],
                      f[e] - (e === "right" ? l.width : l.height),
                    )),
                  C({}, n, o)
                );
              },
            };
          return (
            p.forEach(e => {
              const t =
                ["left", "top"].indexOf(e) !== -1 ? "primary" : "secondary";
              l = N({}, l, u[t](e));
            }),
            (e.offsets.popper = l),
            e
          );
        }
        function ye(e) {
          let t = e.placement,
            n = t.split("-")[0],
            o = t.split("-")[1];
          if (o) {
            let r = e.offsets,
              i = r.reference,
              a = r.popper,
              s = ["bottom", "top"].indexOf(n) !== -1,
              f = s ? "left" : "top",
              p = s ? "width" : "height",
              l = { start: C({}, f, i[f]), end: C({}, f, i[f] + i[p] - a[p]) };
            e.offsets.popper = N({}, a, l[o]);
          }
          return e;
        }
        function Ee(e) {
          if (!se(e.instance.modifiers, "hide", "preventOverflow")) return e;
          let t = e.offsets.reference,
            n = Y(e.instance.modifiers, e => e.name === "preventOverflow")
              .boundaries;
          if (
            t.bottom < n.top ||
            t.left > n.right ||
            t.top > n.bottom ||
            t.right < n.left
          ) {
            if (!0 === e.hide) return e;
            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
          } else {
            if (!1 === e.hide) return e;
            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
          }
          return e;
        }
        function xe(e) {
          let t = e.placement,
            n = t.split("-")[0],
            o = e.offsets,
            r = o.popper,
            i = o.reference,
            a = ["left", "right"].indexOf(n) !== -1,
            s = ["top", "left"].indexOf(n) === -1;
          return (
            (r[a ? "left" : "top"] =
              i[n] - (s ? r[a ? "width" : "height"] : 0)),
            (e.placement = R(t)),
            (e.offsets.popper = F(r)),
            e
          );
        }
        let Oe = {
            shift: { order: 100, enabled: !0, fn: ye },
            offset: { order: 200, enabled: !0, fn: be, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: we,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: me },
            arrow: { order: 500, enabled: !0, fn: fe, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: he,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
            },
            inner: { order: 700, enabled: !1, fn: xe },
            hide: { order: 800, enabled: !0, fn: Ee },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: ae,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: re,
              onLoad: ie,
              gpuAcceleration: void 0,
            },
          },
          Le = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate() {},
            onUpdate() {},
            modifiers: Oe,
          },
          Me = (function() {
            function e(t, n) {
              let o = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              M(this, e),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(o.update);
                }),
                (this.update = f(this.update.bind(this))),
                (this.options = N({}, e.Defaults, r)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(N({}, e.Defaults.modifiers, r.modifiers)).forEach(
                  t => {
                    o.options.modifiers[t] = N(
                      {},
                      e.Defaults.modifiers[t] || {},
                      r.modifiers ? r.modifiers[t] : {},
                    );
                  },
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(e => N({ name: e }, o.options.modifiers[e]))
                  .sort((e, t) => e.order - t.order)),
                this.modifiers.forEach(e => {
                  e.enabled &&
                    p(e.onLoad) &&
                    e.onLoad(o.reference, o.popper, o.options, e, o.state);
                }),
                this.update();
              const i = this.options.eventsEnabled;
              i && this.enableEventListeners(), (this.state.eventsEnabled = i);
            }
            return (
              T(e, [
                {
                  key: "update",
                  value() {
                    return _.call(this);
                  },
                },
                {
                  key: "destroy",
                  value() {
                    return V.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value() {
                    return Z.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value() {
                    return ee.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (Me.Utils = (typeof window !== "undefined" ? window : e).PopperUtils),
          (Me.placements = le),
          (Me.Defaults = Le),
          (exports.default = Me);
      },
      {},
    ],
    56: [
      function(require, module, exports) {
        let define;
        const global = arguments[3];
        let t,
          e = arguments[3];
        !(function(e, n) {
          typeof exports === "object" && typeof module !== "undefined"
            ? n(exports, require("jquery"), require("popper.js"))
            : typeof t === "function" && t.amd
              ? t(["exports", "jquery", "popper.js"], n)
              : n((e.bootstrap = {}), e.jQuery, e.Popper);
        })(this, (t, e, n) => {
          function i(t, e) {
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          function s(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t;
          }
          function r(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function o(t) {
            for (let e = 1; e < arguments.length; e++) {
              var n = arguments[e] != null ? arguments[e] : {},
                i = Object.keys(n);
              typeof Object.getOwnPropertySymbols === "function" &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(
                    t => Object.getOwnPropertyDescriptor(n, t).enumerable,
                  ),
                )),
                i.forEach(e => {
                  r(t, e, n[e]);
                });
            }
            return t;
          }
          (e = e && e.hasOwnProperty("default") ? e.default : e),
            (n = n && n.hasOwnProperty("default") ? n.default : n);
          let a = (function(t) {
              const e = "transitionend";
              function n(e) {
                let n = this,
                  s = !1;
                return (
                  t(this).one(i.TRANSITION_END, () => {
                    s = !0;
                  }),
                  setTimeout(() => {
                    s || i.triggerTransitionEnd(n);
                  }, e),
                  this
                );
              }
              var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID(t) {
                  do {
                    t += ~~(1e6 * Math.random());
                  } while (document.getElementById(t));
                  return t;
                },
                getSelectorFromElement(e) {
                  let n = e.getAttribute("data-target");
                  (n && n !== "#") || (n = e.getAttribute("href") || "");
                  try {
                    return t(document).find(n).length > 0 ? n : null;
                  } catch (t) {
                    return null;
                  }
                },
                getTransitionDurationFromElement(e) {
                  if (!e) return 0;
                  let n = t(e).css("transition-duration");
                  return parseFloat(n)
                    ? ((n = n.split(",")[0]), 1e3 * parseFloat(n))
                    : 0;
                },
                reflow(t) {
                  return t.offsetHeight;
                },
                triggerTransitionEnd(n) {
                  t(n).trigger(e);
                },
                supportsTransitionEnd() {
                  return Boolean(e);
                },
                isElement(t) {
                  return (t[0] || t).nodeType;
                },
                typeCheckConfig(t, e, n) {
                  for (const s in n)
                    if (Object.prototype.hasOwnProperty.call(n, s)) {
                      let r = n[s],
                        o = e[s],
                        a =
                          o && i.isElement(o)
                            ? "element"
                            : ((l = o),
                              {}.toString
                                .call(l)
                                .match(/\s([a-z]+)/i)[1]
                                .toLowerCase());
                      if (!new RegExp(r).test(a))
                        throw new Error(
                          `${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${r}".`,
                        );
                    }
                  let l;
                },
              };
              return (
                (t.fn.emulateTransitionEnd = n),
                (t.event.special[i.TRANSITION_END] = {
                  bindType: e,
                  delegateType: e,
                  handle(e) {
                    if (t(e.target).is(this))
                      return e.handleObj.handler.apply(this, arguments);
                  },
                }),
                i
              );
            })(e),
            l = (function(t) {
              let e = t.fn.alert,
                n = {
                  CLOSE: "close.bs.alert",
                  CLOSED: "closed.bs.alert",
                  CLICK_DATA_API: "click.bs.alert.data-api",
                },
                i = "alert",
                r = "fade",
                o = "show",
                l = (function() {
                  function e(t) {
                    this._element = t;
                  }
                  const l = e.prototype;
                  return (
                    (l.close = function(t) {
                      let e = this._element;
                      t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                          this._removeElement(e);
                    }),
                    (l.dispose = function() {
                      t.removeData(this._element, "bs.alert"),
                        (this._element = null);
                    }),
                    (l._getRootElement = function(e) {
                      let n = a.getSelectorFromElement(e),
                        s = !1;
                      return (
                        n && (s = t(n)[0]),
                        s || (s = t(e).closest(`.${i}`)[0]),
                        s
                      );
                    }),
                    (l._triggerCloseEvent = function(e) {
                      const i = t.Event(n.CLOSE);
                      return t(e).trigger(i), i;
                    }),
                    (l._removeElement = function(e) {
                      const n = this;
                      if ((t(e).removeClass(o), t(e).hasClass(r))) {
                        const i = a.getTransitionDurationFromElement(e);
                        t(e)
                          .one(a.TRANSITION_END, t => n._destroyElement(e, t))
                          .emulateTransitionEnd(i);
                      } else this._destroyElement(e);
                    }),
                    (l._destroyElement = function(e) {
                      t(e)
                        .detach()
                        .trigger(n.CLOSED)
                        .remove();
                    }),
                    (e._jQueryInterface = function(n) {
                      return this.each(function() {
                        let i = t(this),
                          s = i.data("bs.alert");
                        s || ((s = new e(this)), i.data("bs.alert", s)),
                          n === "close" && s[n](this);
                      });
                    }),
                    (e._handleDismiss = function(t) {
                      return function(e) {
                        e && e.preventDefault(), t.close(this);
                      };
                    }),
                    s(e, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                    ]),
                    e
                  );
                })();
              return (
                t(document).on(
                  n.CLICK_DATA_API,
                  '[data-dismiss="alert"]',
                  l._handleDismiss(new l()),
                ),
                (t.fn.alert = l._jQueryInterface),
                (t.fn.alert.Constructor = l),
                (t.fn.alert.noConflict = function() {
                  return (t.fn.alert = e), l._jQueryInterface;
                }),
                l
              );
            })(e),
            c = (function(t) {
              let e = "button",
                n = t.fn[e],
                i = "active",
                r = "btn",
                o = "focus",
                a = '[data-toggle^="button"]',
                l = '[data-toggle="buttons"]',
                c = "input",
                h = ".active",
                u = ".btn",
                f = {
                  CLICK_DATA_API: "click.bs.button.data-api",
                  FOCUS_BLUR_DATA_API:
                    "focus.bs.button.data-api blur.bs.button.data-api",
                },
                d = (function() {
                  function e(t) {
                    this._element = t;
                  }
                  const n = e.prototype;
                  return (
                    (n.toggle = function() {
                      let e = !0,
                        n = !0,
                        s = t(this._element).closest(l)[0];
                      if (s) {
                        const r = t(this._element).find(c)[0];
                        if (r) {
                          if (r.type === "radio")
                            if (r.checked && t(this._element).hasClass(i))
                              e = !1;
                            else {
                              const o = t(s).find(h)[0];
                              o && t(o).removeClass(i);
                            }
                          if (e) {
                            if (
                              r.hasAttribute("disabled") ||
                              s.hasAttribute("disabled") ||
                              r.classList.contains("disabled") ||
                              s.classList.contains("disabled")
                            )
                              return;
                            (r.checked = !t(this._element).hasClass(i)),
                              t(r).trigger("change");
                          }
                          r.focus(), (n = !1);
                        }
                      }
                      n &&
                        this._element.setAttribute(
                          "aria-pressed",
                          !t(this._element).hasClass(i),
                        ),
                        e && t(this._element).toggleClass(i);
                    }),
                    (n.dispose = function() {
                      t.removeData(this._element, "bs.button"),
                        (this._element = null);
                    }),
                    (e._jQueryInterface = function(n) {
                      return this.each(function() {
                        let i = t(this).data("bs.button");
                        i || ((i = new e(this)), t(this).data("bs.button", i)),
                          n === "toggle" && i[n]();
                      });
                    }),
                    s(e, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                    ]),
                    e
                  );
                })();
              return (
                t(document)
                  .on(f.CLICK_DATA_API, a, e => {
                    e.preventDefault();
                    let n = e.target;
                    t(n).hasClass(r) || (n = t(n).closest(u)),
                      d._jQueryInterface.call(t(n), "toggle");
                  })
                  .on(f.FOCUS_BLUR_DATA_API, a, e => {
                    const n = t(e.target).closest(u)[0];
                    t(n).toggleClass(o, /^focus(in)?$/.test(e.type));
                  }),
                (t.fn[e] = d._jQueryInterface),
                (t.fn[e].Constructor = d),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = n), d._jQueryInterface;
                }),
                d
              );
            })(e),
            h = (function(t) {
              let e = "carousel",
                n = "bs.carousel",
                i = `.${n}`,
                r = t.fn[e],
                l = {
                  interval: 5e3,
                  keyboard: !0,
                  slide: !1,
                  pause: "hover",
                  wrap: !0,
                },
                c = {
                  interval: "(number|boolean)",
                  keyboard: "boolean",
                  slide: "(boolean|string)",
                  pause: "(string|boolean)",
                  wrap: "boolean",
                },
                h = "next",
                u = "prev",
                f = "left",
                d = "right",
                g = {
                  SLIDE: `slide${i}`,
                  SLID: `slid${i}`,
                  KEYDOWN: `keydown${i}`,
                  MOUSEENTER: `mouseenter${i}`,
                  MOUSELEAVE: `mouseleave${i}`,
                  TOUCHEND: `touchend${i}`,
                  LOAD_DATA_API: "load.bs.carousel.data-api",
                  CLICK_DATA_API: "click.bs.carousel.data-api",
                },
                _ = "carousel",
                m = "active",
                p = "slide",
                v = "carousel-item-right",
                E = "carousel-item-left",
                T = "carousel-item-next",
                b = "carousel-item-prev",
                y = {
                  ACTIVE: ".active",
                  ACTIVE_ITEM: ".active.carousel-item",
                  ITEM: ".carousel-item",
                  NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                  INDICATORS: ".carousel-indicators",
                  DATA_SLIDE: "[data-slide], [data-slide-to]",
                  DATA_RIDE: '[data-ride="carousel"]',
                },
                C = (function() {
                  function r(e, n) {
                    (this._items = null),
                      (this._interval = null),
                      (this._activeElement = null),
                      (this._isPaused = !1),
                      (this._isSliding = !1),
                      (this.touchTimeout = null),
                      (this._config = this._getConfig(n)),
                      (this._element = t(e)[0]),
                      (this._indicatorsElement = t(this._element).find(
                        y.INDICATORS,
                      )[0]),
                      this._addEventListeners();
                  }
                  const C = r.prototype;
                  return (
                    (C.next = function() {
                      this._isSliding || this._slide(h);
                    }),
                    (C.nextWhenVisible = function() {
                      !document.hidden &&
                        t(this._element).is(":visible") &&
                        t(this._element).css("visibility") !== "hidden" &&
                        this.next();
                    }),
                    (C.prev = function() {
                      this._isSliding || this._slide(u);
                    }),
                    (C.pause = function(e) {
                      e || (this._isPaused = !0),
                        t(this._element).find(y.NEXT_PREV)[0] &&
                          (a.triggerTransitionEnd(this._element),
                          this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                    }),
                    (C.cycle = function(t) {
                      t || (this._isPaused = !1),
                        this._interval &&
                          (clearInterval(this._interval),
                          (this._interval = null)),
                        this._config.interval &&
                          !this._isPaused &&
                          (this._interval = setInterval(
                            (document.visibilityState
                              ? this.nextWhenVisible
                              : this.next
                            ).bind(this),
                            this._config.interval,
                          ));
                    }),
                    (C.to = function(e) {
                      const n = this;
                      this._activeElement = t(this._element).find(
                        y.ACTIVE_ITEM,
                      )[0];
                      const i = this._getItemIndex(this._activeElement);
                      if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                          t(this._element).one(g.SLID, () => n.to(e));
                        else {
                          if (i === e) return this.pause(), void this.cycle();
                          const s = e > i ? h : u;
                          this._slide(s, this._items[e]);
                        }
                    }),
                    (C.dispose = function() {
                      t(this._element).off(i),
                        t.removeData(this._element, n),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                    }),
                    (C._getConfig = function(t) {
                      return (t = o({}, l, t)), a.typeCheckConfig(e, t, c), t;
                    }),
                    (C._addEventListeners = function() {
                      const e = this;
                      this._config.keyboard &&
                        t(this._element).on(g.KEYDOWN, t => e._keydown(t)),
                        this._config.pause === "hover" &&
                          (t(this._element)
                            .on(g.MOUSEENTER, t => e.pause(t))
                            .on(g.MOUSELEAVE, t => e.cycle(t)),
                          "ontouchstart" in document.documentElement &&
                            t(this._element).on(g.TOUCHEND, () => {
                              e.pause(),
                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                (e.touchTimeout = setTimeout(t => e.cycle(t), 500 + e._config.interval));
                            }));
                    }),
                    (C._keydown = function(t) {
                      if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                          case 37:
                            t.preventDefault(), this.prev();
                            break;
                          case 39:
                            t.preventDefault(), this.next();
                        }
                    }),
                    (C._getItemIndex = function(e) {
                      return (
                        (this._items = t.makeArray(
                          t(e)
                            .parent()
                            .find(y.ITEM),
                        )),
                        this._items.indexOf(e)
                      );
                    }),
                    (C._getItemByDirection = function(t, e) {
                      let n = t === h,
                        i = t === u,
                        s = this._getItemIndex(e),
                        r = this._items.length - 1;
                      if (
                        ((i && s === 0) || (n && s === r)) &&
                        !this._config.wrap
                      )
                        return e;
                      const o = (s + (t === u ? -1 : 1)) % this._items.length;
                      return o === -1
                        ? this._items[this._items.length - 1]
                        : this._items[o];
                    }),
                    (C._triggerSlideEvent = function(e, n) {
                      let i = this._getItemIndex(e),
                        s = this._getItemIndex(
                          t(this._element).find(y.ACTIVE_ITEM)[0],
                        ),
                        r = t.Event(g.SLIDE, {
                          relatedTarget: e,
                          direction: n,
                          from: s,
                          to: i,
                        });
                      return t(this._element).trigger(r), r;
                    }),
                    (C._setActiveIndicatorElement = function(e) {
                      if (this._indicatorsElement) {
                        t(this._indicatorsElement)
                          .find(y.ACTIVE)
                          .removeClass(m);
                        const n = this._indicatorsElement.children[
                          this._getItemIndex(e)
                        ];
                        n && t(n).addClass(m);
                      }
                    }),
                    (C._slide = function(e, n) {
                      let i,
                        s,
                        r,
                        o = this,
                        l = t(this._element).find(y.ACTIVE_ITEM)[0],
                        c = this._getItemIndex(l),
                        u = n || (l && this._getItemByDirection(e, l)),
                        _ = this._getItemIndex(u),
                        C = Boolean(this._interval);
                      if (
                        (e === h
                          ? ((i = E), (s = T), (r = f))
                          : ((i = v), (s = b), (r = d)),
                        u && t(u).hasClass(m))
                      )
                        this._isSliding = !1;
                      else if (
                        !this._triggerSlideEvent(u, r).isDefaultPrevented() &&
                        l &&
                        u
                      ) {
                        (this._isSliding = !0),
                          C && this.pause(),
                          this._setActiveIndicatorElement(u);
                        const I = t.Event(g.SLID, {
                          relatedTarget: u,
                          direction: r,
                          from: c,
                          to: _,
                        });
                        if (t(this._element).hasClass(p)) {
                          t(u).addClass(s),
                            a.reflow(u),
                            t(l).addClass(i),
                            t(u).addClass(i);
                          const A = a.getTransitionDurationFromElement(l);
                          t(l)
                            .one(a.TRANSITION_END, () => {
                              t(u)
                                .removeClass(`${i} ${s}`)
                                .addClass(m),
                                t(l).removeClass(`${m} ${s} ${i}`),
                                (o._isSliding = !1),
                                setTimeout(() => t(o._element).trigger(I), 0);
                            })
                            .emulateTransitionEnd(A);
                        } else
                          t(l).removeClass(m),
                            t(u).addClass(m),
                            (this._isSliding = !1),
                            t(this._element).trigger(I);
                        C && this.cycle();
                      }
                    }),
                    (r._jQueryInterface = function(e) {
                      return this.each(function() {
                        let i = t(this).data(n),
                          s = o({}, l, t(this).data());
                        typeof e === "object" && (s = o({}, s, e));
                        const a = typeof e === "string" ? e : s.slide;
                        if (
                          (i || ((i = new r(this, s)), t(this).data(n, i)),
                          typeof e === "number")
                        )
                          i.to(e);
                        else if (typeof a === "string") {
                          if (void 0 === i[a])
                            throw new TypeError(`No method named "${a}"`);
                          i[a]();
                        } else s.interval && (i.pause(), i.cycle());
                      });
                    }),
                    (r._dataApiClickHandler = function(e) {
                      const i = a.getSelectorFromElement(this);
                      if (i) {
                        const s = t(i)[0];
                        if (s && t(s).hasClass(_)) {
                          let l = o({}, t(s).data(), t(this).data()),
                            c = this.getAttribute("data-slide-to");
                          c && (l.interval = !1),
                            r._jQueryInterface.call(t(s), l),
                            c &&
                              t(s)
                                .data(n)
                                .to(c),
                            e.preventDefault();
                        }
                      }
                    }),
                    s(r, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return l;
                        },
                      },
                    ]),
                    r
                  );
                })();
              return (
                t(document).on(
                  g.CLICK_DATA_API,
                  y.DATA_SLIDE,
                  C._dataApiClickHandler,
                ),
                t(window).on(g.LOAD_DATA_API, () => {
                  t(y.DATA_RIDE).each(function() {
                    const e = t(this);
                    C._jQueryInterface.call(e, e.data());
                  });
                }),
                (t.fn[e] = C._jQueryInterface),
                (t.fn[e].Constructor = C),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = r), C._jQueryInterface;
                }),
                C
              );
            })(e),
            u = (function(t) {
              let e = "collapse",
                n = "bs.collapse",
                i = t.fn[e],
                r = { toggle: !0, parent: "" },
                l = { toggle: "boolean", parent: "(string|element)" },
                c = {
                  SHOW: "show.bs.collapse",
                  SHOWN: "shown.bs.collapse",
                  HIDE: "hide.bs.collapse",
                  HIDDEN: "hidden.bs.collapse",
                  CLICK_DATA_API: "click.bs.collapse.data-api",
                },
                h = "show",
                u = "collapse",
                f = "collapsing",
                d = "collapsed",
                g = "width",
                _ = "height",
                m = {
                  ACTIVES: ".show, .collapsing",
                  DATA_TOGGLE: '[data-toggle="collapse"]',
                },
                p = (function() {
                  function i(e, n) {
                    (this._isTransitioning = !1),
                      (this._element = e),
                      (this._config = this._getConfig(n)),
                      (this._triggerArray = t.makeArray(
                        t(
                          `[data-toggle="collapse"][href="#${
                            e.id
                          }"],[data-toggle="collapse"][data-target="#${e.id}"]`,
                        ),
                      ));
                    for (let i = t(m.DATA_TOGGLE), s = 0; s < i.length; s++) {
                      let r = i[s],
                        o = a.getSelectorFromElement(r);
                      o !== null &&
                        t(o).filter(e).length > 0 &&
                        ((this._selector = o), this._triggerArray.push(r));
                    }
                    (this._parent = this._config.parent
                      ? this._getParent()
                      : null),
                      this._config.parent ||
                        this._addAriaAndCollapsedClass(
                          this._element,
                          this._triggerArray,
                        ),
                      this._config.toggle && this.toggle();
                  }
                  const p = i.prototype;
                  return (
                    (p.toggle = function() {
                      t(this._element).hasClass(h) ? this.hide() : this.show();
                    }),
                    (p.show = function() {
                      let e,
                        s,
                        r = this;
                      if (
                        !this._isTransitioning &&
                        !t(this._element).hasClass(h) &&
                        (this._parent &&
                          (e = t.makeArray(
                            t(this._parent)
                              .find(m.ACTIVES)
                              .filter(`[data-parent="${this._config.parent}"]`),
                          )).length === 0 &&
                          (e = null),
                        !(
                          e &&
                          (s = t(e)
                            .not(this._selector)
                            .data(n)) &&
                          s._isTransitioning
                        ))
                      ) {
                        const o = t.Event(c.SHOW);
                        if (
                          (t(this._element).trigger(o), !o.isDefaultPrevented())
                        ) {
                          e &&
                            (i._jQueryInterface.call(
                              t(e).not(this._selector),
                              "hide",
                            ),
                            s || t(e).data(n, null));
                          const l = this._getDimension();
                          t(this._element)
                            .removeClass(u)
                            .addClass(f),
                            (this._element.style[l] = 0),
                            this._triggerArray.length > 0 &&
                              t(this._triggerArray)
                                .removeClass(d)
                                .attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                          let g = `scroll${l[0].toUpperCase() + l.slice(1)}`,
                            _ = a.getTransitionDurationFromElement(
                              this._element,
                            );
                          t(this._element)
                            .one(a.TRANSITION_END, () => {
                              t(r._element)
                                .removeClass(f)
                                .addClass(u)
                                .addClass(h),
                                (r._element.style[l] = ""),
                                r.setTransitioning(!1),
                                t(r._element).trigger(c.SHOWN);
                            })
                            .emulateTransitionEnd(_),
                            (this._element.style[l] = `${this._element[g]}px`);
                        }
                      }
                    }),
                    (p.hide = function() {
                      const e = this;
                      if (
                        !this._isTransitioning &&
                        t(this._element).hasClass(h)
                      ) {
                        const n = t.Event(c.HIDE);
                        if (
                          (t(this._element).trigger(n), !n.isDefaultPrevented())
                        ) {
                          const i = this._getDimension();
                          if (
                            ((this._element.style[i] = `${
                              this._element.getBoundingClientRect()[i]
                            }px`),
                            a.reflow(this._element),
                            t(this._element)
                              .addClass(f)
                              .removeClass(u)
                              .removeClass(h),
                            this._triggerArray.length > 0)
                          )
                            for (
                              let s = 0;
                              s < this._triggerArray.length;
                              s++
                            ) {
                              let r = this._triggerArray[s],
                                o = a.getSelectorFromElement(r);
                              if (o !== null)
                                t(o).hasClass(h) ||
                                  t(r)
                                    .addClass(d)
                                    .attr("aria-expanded", !1);
                            }
                          this.setTransitioning(!0);
                          this._element.style[i] = "";
                          const l = a.getTransitionDurationFromElement(
                            this._element,
                          );
                          t(this._element)
                            .one(a.TRANSITION_END, () => {
                              e.setTransitioning(!1),
                                t(e._element)
                                  .removeClass(f)
                                  .addClass(u)
                                  .trigger(c.HIDDEN);
                            })
                            .emulateTransitionEnd(l);
                        }
                      }
                    }),
                    (p.setTransitioning = function(t) {
                      this._isTransitioning = t;
                    }),
                    (p.dispose = function() {
                      t.removeData(this._element, n),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                    }),
                    (p._getConfig = function(t) {
                      return (
                        ((t = o({}, r, t)).toggle = Boolean(t.toggle)),
                        a.typeCheckConfig(e, t, l),
                        t
                      );
                    }),
                    (p._getDimension = function() {
                      return t(this._element).hasClass(g) ? g : _;
                    }),
                    (p._getParent = function() {
                      let e = this,
                        n = null;
                      a.isElement(this._config.parent)
                        ? ((n = this._config.parent),
                          void 0 !== this._config.parent.jquery &&
                            (n = this._config.parent[0]))
                        : (n = t(this._config.parent)[0]);
                      const s = `[data-toggle="collapse"][data-parent="${
                        this._config.parent
                      }"]`;
                      return (
                        t(n)
                          .find(s)
                          .each((t, n) => {
                            e._addAriaAndCollapsedClass(
                              i._getTargetFromElement(n),
                              [n],
                            );
                          }),
                        n
                      );
                    }),
                    (p._addAriaAndCollapsedClass = function(e, n) {
                      if (e) {
                        const i = t(e).hasClass(h);
                        n.length > 0 &&
                          t(n)
                            .toggleClass(d, !i)
                            .attr("aria-expanded", i);
                      }
                    }),
                    (i._getTargetFromElement = function(e) {
                      const n = a.getSelectorFromElement(e);
                      return n ? t(n)[0] : null;
                    }),
                    (i._jQueryInterface = function(e) {
                      return this.each(function() {
                        let s = t(this),
                          a = s.data(n),
                          l = o(
                            {},
                            r,
                            s.data(),
                            typeof e === "object" && e ? e : {},
                          );
                        if (
                          (!a &&
                            l.toggle &&
                            /show|hide/.test(e) &&
                            (l.toggle = !1),
                          a || ((a = new i(this, l)), s.data(n, a)),
                          typeof e === "string")
                        ) {
                          if (void 0 === a[e])
                            throw new TypeError(`No method named "${e}"`);
                          a[e]();
                        }
                      });
                    }),
                    s(i, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return r;
                        },
                      },
                    ]),
                    i
                  );
                })();
              return (
                t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                  e.currentTarget.tagName === "A" && e.preventDefault();
                  let i = t(this),
                    s = a.getSelectorFromElement(this);
                  t(s).each(function() {
                    let e = t(this),
                      s = e.data(n) ? "toggle" : i.data();
                    p._jQueryInterface.call(e, s);
                  });
                }),
                (t.fn[e] = p._jQueryInterface),
                (t.fn[e].Constructor = p),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = i), p._jQueryInterface;
                }),
                p
              );
            })(e),
            f = (function(t) {
              let e = "dropdown",
                i = "bs.dropdown",
                r = `.${i}`,
                l = t.fn[e],
                c = new RegExp("38|40|27"),
                h = {
                  HIDE: `hide${r}`,
                  HIDDEN: `hidden${r}`,
                  SHOW: `show${r}`,
                  SHOWN: `shown${r}`,
                  CLICK: `click${r}`,
                  CLICK_DATA_API: "click.bs.dropdown.data-api",
                  KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                  KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
                },
                u = "disabled",
                f = "show",
                d = "dropup",
                g = "dropright",
                _ = "dropleft",
                m = "dropdown-menu-right",
                p = "position-static",
                v = '[data-toggle="dropdown"]',
                E = ".dropdown form",
                T = ".dropdown-menu",
                b = ".navbar-nav",
                y =
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                C = "top-start",
                I = "top-end",
                A = "bottom-start",
                D = "bottom-end",
                S = "right-start",
                w = "left-start",
                N = {
                  offset: 0,
                  flip: !0,
                  boundary: "scrollParent",
                  reference: "toggle",
                  display: "dynamic",
                },
                O = {
                  offset: "(number|string|function)",
                  flip: "boolean",
                  boundary: "(string|element)",
                  reference: "(string|element)",
                  display: "string",
                },
                k = (function() {
                  function l(t, e) {
                    (this._element = t),
                      (this._popper = null),
                      (this._config = this._getConfig(e)),
                      (this._menu = this._getMenuElement()),
                      (this._inNavbar = this._detectNavbar()),
                      this._addEventListeners();
                  }
                  const E = l.prototype;
                  return (
                    (E.toggle = function() {
                      if (
                        !this._element.disabled &&
                        !t(this._element).hasClass(u)
                      ) {
                        let e = l._getParentFromElement(this._element),
                          i = t(this._menu).hasClass(f);
                        if ((l._clearMenus(), !i)) {
                          let s = { relatedTarget: this._element },
                            r = t.Event(h.SHOW, s);
                          if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                            if (!this._inNavbar) {
                              if (void 0 === n)
                                throw new TypeError(
                                  "Bootstrap dropdown require Popper.js (https://popper.js.org)",
                                );
                              let o = this._element;
                              this._config.reference === "parent"
                                ? (o = e)
                                : a.isElement(this._config.reference) &&
                                  ((o = this._config.reference),
                                  void 0 !== this._config.reference.jquery &&
                                    (o = this._config.reference[0])),
                                this._config.boundary !== "scrollParent" &&
                                  t(e).addClass(p),
                                (this._popper = new n(
                                  o,
                                  this._menu,
                                  this._getPopperConfig(),
                                ));
                            }
                            "ontouchstart" in document.documentElement &&
                              t(e).closest(b).length === 0 &&
                              t(document.body)
                                .children()
                                .on("mouseover", null, t.noop),
                              this._element.focus(),
                              this._element.setAttribute("aria-expanded", !0),
                              t(this._menu).toggleClass(f),
                              t(e)
                                .toggleClass(f)
                                .trigger(t.Event(h.SHOWN, s));
                          }
                        }
                      }
                    }),
                    (E.dispose = function() {
                      t.removeData(this._element, i),
                        t(this._element).off(r),
                        (this._element = null),
                        (this._menu = null),
                        this._popper !== null &&
                          (this._popper.destroy(), (this._popper = null));
                    }),
                    (E.update = function() {
                      (this._inNavbar = this._detectNavbar()),
                        this._popper !== null && this._popper.scheduleUpdate();
                    }),
                    (E._addEventListeners = function() {
                      const e = this;
                      t(this._element).on(h.CLICK, t => {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                      });
                    }),
                    (E._getConfig = function(n) {
                      return (
                        (n = o(
                          {},
                          this.constructor.Default,
                          t(this._element).data(),
                          n,
                        )),
                        a.typeCheckConfig(e, n, this.constructor.DefaultType),
                        n
                      );
                    }),
                    (E._getMenuElement = function() {
                      if (!this._menu) {
                        const e = l._getParentFromElement(this._element);
                        this._menu = t(e).find(T)[0];
                      }
                      return this._menu;
                    }),
                    (E._getPlacement = function() {
                      let e = t(this._element).parent(),
                        n = A;
                      return (
                        e.hasClass(d)
                          ? ((n = C), t(this._menu).hasClass(m) && (n = I))
                          : e.hasClass(g)
                            ? (n = S)
                            : e.hasClass(_)
                              ? (n = w)
                              : t(this._menu).hasClass(m) && (n = D),
                        n
                      );
                    }),
                    (E._detectNavbar = function() {
                      return t(this._element).closest(".navbar").length > 0;
                    }),
                    (E._getPopperConfig = function() {
                      let t = this,
                        e = {};
                      typeof this._config.offset === "function"
                        ? (e.fn = function(e) {
                            return (
                              (e.offsets = o(
                                {},
                                e.offsets,
                                t._config.offset(e.offsets) || {},
                              )),
                              e
                            );
                          })
                        : (e.offset = this._config.offset);
                      const n = {
                        placement: this._getPlacement(),
                        modifiers: {
                          offset: e,
                          flip: { enabled: this._config.flip },
                          preventOverflow: {
                            boundariesElement: this._config.boundary,
                          },
                        },
                      };
                      return (
                        this._config.display === "static" &&
                          (n.modifiers.applyStyle = { enabled: !1 }),
                        n
                      );
                    }),
                    (l._jQueryInterface = function(e) {
                      return this.each(function() {
                        let n = t(this).data(i);
                        if (
                          (n ||
                            ((n = new l(
                              this,
                              typeof e === "object" ? e : null,
                            )),
                            t(this).data(i, n)),
                          typeof e === "string")
                        ) {
                          if (void 0 === n[e])
                            throw new TypeError(`No method named "${e}"`);
                          n[e]();
                        }
                      });
                    }),
                    (l._clearMenus = function(e) {
                      if (
                        !e ||
                        (e.which !== 3 && (e.type !== "keyup" || e.which === 9))
                      )
                        for (
                          let n = t.makeArray(t(v)), s = 0;
                          s < n.length;
                          s++
                        ) {
                          let r = l._getParentFromElement(n[s]),
                            o = t(n[s]).data(i),
                            a = { relatedTarget: n[s] };
                          if (o) {
                            const c = o._menu;
                            if (
                              t(r).hasClass(f) &&
                              !(
                                e &&
                                ((e.type === "click" &&
                                  /input|textarea/i.test(e.target.tagName)) ||
                                  (e.type === "keyup" && e.which === 9)) &&
                                t.contains(r, e.target)
                              )
                            ) {
                              const u = t.Event(h.HIDE, a);
                              t(r).trigger(u),
                                u.isDefaultPrevented() ||
                                  ("ontouchstart" in document.documentElement &&
                                    t(document.body)
                                      .children()
                                      .off("mouseover", null, t.noop),
                                  n[s].setAttribute("aria-expanded", "false"),
                                  t(c).removeClass(f),
                                  t(r)
                                    .removeClass(f)
                                    .trigger(t.Event(h.HIDDEN, a)));
                            }
                          }
                        }
                    }),
                    (l._getParentFromElement = function(e) {
                      let n,
                        i = a.getSelectorFromElement(e);
                      return i && (n = t(i)[0]), n || e.parentNode;
                    }),
                    (l._dataApiKeydownHandler = function(e) {
                      if (
                        (/input|textarea/i.test(e.target.tagName)
                          ? !(
                              e.which === 32 ||
                              (e.which !== 27 &&
                                ((e.which !== 40 && e.which !== 38) ||
                                  t(e.target).closest(T).length))
                            )
                          : c.test(e.which)) &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        !this.disabled && !t(this).hasClass(u))
                      ) {
                        let n = l._getParentFromElement(this),
                          i = t(n).hasClass(f);
                        if (
                          (i || (e.which === 27 && e.which === 32)) &&
                          (!i || (e.which !== 27 && e.which !== 32))
                        ) {
                          const s = t(n)
                            .find(y)
                            .get();
                          if (s.length !== 0) {
                            let r = s.indexOf(e.target);
                            e.which === 38 && r > 0 && r--,
                              e.which === 40 && r < s.length - 1 && r++,
                              r < 0 && (r = 0),
                              s[r].focus();
                          }
                        } else {
                          if (e.which === 27) {
                            const o = t(n).find(v)[0];
                            t(o).trigger("focus");
                          }
                          t(this).trigger("click");
                        }
                      }
                    }),
                    s(l, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return N;
                        },
                      },
                      {
                        key: "DefaultType",
                        get() {
                          return O;
                        },
                      },
                    ]),
                    l
                  );
                })();
              return (
                t(document)
                  .on(h.KEYDOWN_DATA_API, v, k._dataApiKeydownHandler)
                  .on(h.KEYDOWN_DATA_API, T, k._dataApiKeydownHandler)
                  .on(`${h.CLICK_DATA_API} ${h.KEYUP_DATA_API}`, k._clearMenus)
                  .on(h.CLICK_DATA_API, v, function(e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      k._jQueryInterface.call(t(this), "toggle");
                  })
                  .on(h.CLICK_DATA_API, E, t => {
                    t.stopPropagation();
                  }),
                (t.fn[e] = k._jQueryInterface),
                (t.fn[e].Constructor = k),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = l), k._jQueryInterface;
                }),
                k
              );
            })(e),
            d = (function(t) {
              let e = "modal",
                n = ".bs.modal",
                i = t.fn.modal,
                r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                l = {
                  backdrop: "(boolean|string)",
                  keyboard: "boolean",
                  focus: "boolean",
                  show: "boolean",
                },
                c = {
                  HIDE: "hide.bs.modal",
                  HIDDEN: "hidden.bs.modal",
                  SHOW: "show.bs.modal",
                  SHOWN: "shown.bs.modal",
                  FOCUSIN: "focusin.bs.modal",
                  RESIZE: "resize.bs.modal",
                  CLICK_DISMISS: "click.dismiss.bs.modal",
                  KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                  MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                  MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                  CLICK_DATA_API: "click.bs.modal.data-api",
                },
                h = "modal-scrollbar-measure",
                u = "modal-backdrop",
                f = "modal-open",
                d = "fade",
                g = "show",
                _ = {
                  DIALOG: ".modal-dialog",
                  DATA_TOGGLE: '[data-toggle="modal"]',
                  DATA_DISMISS: '[data-dismiss="modal"]',
                  FIXED_CONTENT:
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                  STICKY_CONTENT: ".sticky-top",
                  NAVBAR_TOGGLER: ".navbar-toggler",
                },
                m = (function() {
                  function i(e, n) {
                    (this._config = this._getConfig(n)),
                      (this._element = e),
                      (this._dialog = t(e).find(_.DIALOG)[0]),
                      (this._backdrop = null),
                      (this._isShown = !1),
                      (this._isBodyOverflowing = !1),
                      (this._ignoreBackdropClick = !1),
                      (this._scrollbarWidth = 0);
                  }
                  const m = i.prototype;
                  return (
                    (m.toggle = function(t) {
                      return this._isShown ? this.hide() : this.show(t);
                    }),
                    (m.show = function(e) {
                      const n = this;
                      if (!this._isTransitioning && !this._isShown) {
                        t(this._element).hasClass(d) &&
                          (this._isTransitioning = !0);
                        const i = t.Event(c.SHOW, { relatedTarget: e });
                        t(this._element).trigger(i),
                          this._isShown ||
                            i.isDefaultPrevented() ||
                            ((this._isShown = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            t(document.body).addClass(f),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            t(this._element).on(
                              c.CLICK_DISMISS,
                              _.DATA_DISMISS,
                              t => n.hide(t),
                            ),
                            t(this._dialog).on(c.MOUSEDOWN_DISMISS, () => {
                              t(n._element).one(c.MOUSEUP_DISMISS, e => {
                                t(e.target).is(n._element) &&
                                  (n._ignoreBackdropClick = !0);
                              });
                            }),
                            this._showBackdrop(() => n._showElement(e)));
                      }
                    }),
                    (m.hide = function(e) {
                      const n = this;
                      if (
                        (e && e.preventDefault(),
                        !this._isTransitioning && this._isShown)
                      ) {
                        const i = t.Event(c.HIDE);
                        if (
                          (t(this._element).trigger(i),
                          this._isShown && !i.isDefaultPrevented())
                        ) {
                          this._isShown = !1;
                          const s = t(this._element).hasClass(d);
                          if (
                            (s && (this._isTransitioning = !0),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            t(document).off(c.FOCUSIN),
                            t(this._element).removeClass(g),
                            t(this._element).off(c.CLICK_DISMISS),
                            t(this._dialog).off(c.MOUSEDOWN_DISMISS),
                            s)
                          ) {
                            const r = a.getTransitionDurationFromElement(
                              this._element,
                            );
                            t(this._element)
                              .one(a.TRANSITION_END, t => n._hideModal(t))
                              .emulateTransitionEnd(r);
                          } else this._hideModal();
                        }
                      }
                    }),
                    (m.dispose = function() {
                      t.removeData(this._element, "bs.modal"),
                        t(window, document, this._element, this._backdrop).off(
                          n,
                        ),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._scrollbarWidth = null);
                    }),
                    (m.handleUpdate = function() {
                      this._adjustDialog();
                    }),
                    (m._getConfig = function(t) {
                      return (t = o({}, r, t)), a.typeCheckConfig(e, t, l), t;
                    }),
                    (m._showElement = function(e) {
                      let n = this,
                        i = t(this._element).hasClass(d);
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        (this._element.scrollTop = 0),
                        i && a.reflow(this._element),
                        t(this._element).addClass(g),
                        this._config.focus && this._enforceFocus();
                      let s = t.Event(c.SHOWN, { relatedTarget: e }),
                        r = function() {
                          n._config.focus && n._element.focus(),
                            (n._isTransitioning = !1),
                            t(n._element).trigger(s);
                        };
                      if (i) {
                        const o = a.getTransitionDurationFromElement(
                          this._element,
                        );
                        t(this._dialog)
                          .one(a.TRANSITION_END, r)
                          .emulateTransitionEnd(o);
                      } else r();
                    }),
                    (m._enforceFocus = function() {
                      const e = this;
                      t(document)
                        .off(c.FOCUSIN)
                        .on(c.FOCUSIN, n => {
                          document !== n.target &&
                            e._element !== n.target &&
                            t(e._element).has(n.target).length === 0 &&
                            e._element.focus();
                        });
                    }),
                    (m._setEscapeEvent = function() {
                      const e = this;
                      this._isShown && this._config.keyboard
                        ? t(this._element).on(c.KEYDOWN_DISMISS, t => {
                            t.which === 27 && (t.preventDefault(), e.hide());
                          })
                        : this._isShown ||
                          t(this._element).off(c.KEYDOWN_DISMISS);
                    }),
                    (m._setResizeEvent = function() {
                      const e = this;
                      this._isShown
                        ? t(window).on(c.RESIZE, t => e.handleUpdate(t))
                        : t(window).off(c.RESIZE);
                    }),
                    (m._hideModal = function() {
                      const e = this;
                      (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        (this._isTransitioning = !1),
                        this._showBackdrop(() => {
                          t(document.body).removeClass(f),
                            e._resetAdjustments(),
                            e._resetScrollbar(),
                            t(e._element).trigger(c.HIDDEN);
                        });
                    }),
                    (m._removeBackdrop = function() {
                      this._backdrop &&
                        (t(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (m._showBackdrop = function(e) {
                      let n = this,
                        i = t(this._element).hasClass(d) ? d : "";
                      if (this._isShown && this._config.backdrop) {
                        if (
                          ((this._backdrop = document.createElement("div")),
                          (this._backdrop.className = u),
                          i && t(this._backdrop).addClass(i),
                          t(this._backdrop).appendTo(document.body),
                          t(this._element).on(c.CLICK_DISMISS, t => {
                            n._ignoreBackdropClick
                              ? (n._ignoreBackdropClick = !1)
                              : t.target === t.currentTarget &&
                                (n._config.backdrop === "static"
                                  ? n._element.focus()
                                  : n.hide());
                          }),
                          i && a.reflow(this._backdrop),
                          t(this._backdrop).addClass(g),
                          !e)
                        )
                          return;
                        if (!i) return void e();
                        const s = a.getTransitionDurationFromElement(
                          this._backdrop,
                        );
                        t(this._backdrop)
                          .one(a.TRANSITION_END, e)
                          .emulateTransitionEnd(s);
                      } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(g);
                        const r = function() {
                          n._removeBackdrop(), e && e();
                        };
                        if (t(this._element).hasClass(d)) {
                          const o = a.getTransitionDurationFromElement(
                            this._backdrop,
                          );
                          t(this._backdrop)
                            .one(a.TRANSITION_END, r)
                            .emulateTransitionEnd(o);
                        } else r();
                      } else e && e();
                    }),
                    (m._adjustDialog = function() {
                      const t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                      !this._isBodyOverflowing &&
                        t &&
                        (this._element.style.paddingLeft = `${
                          this._scrollbarWidth
                        }px`),
                        this._isBodyOverflowing &&
                          !t &&
                          (this._element.style.paddingRight = `${
                            this._scrollbarWidth
                          }px`);
                    }),
                    (m._resetAdjustments = function() {
                      (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                    }),
                    (m._checkScrollbar = function() {
                      const t = document.body.getBoundingClientRect();
                      (this._isBodyOverflowing =
                        t.left + t.right < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (m._setScrollbar = function() {
                      const e = this;
                      if (this._isBodyOverflowing) {
                        t(_.FIXED_CONTENT).each((n, i) => {
                          let s = t(i)[0].style.paddingRight,
                            r = t(i).css("padding-right");
                          t(i)
                            .data("padding-right", s)
                            .css(
                              "padding-right",
                              `${parseFloat(r) + e._scrollbarWidth}px`,
                            );
                        }),
                          t(_.STICKY_CONTENT).each((n, i) => {
                            let s = t(i)[0].style.marginRight,
                              r = t(i).css("margin-right");
                            t(i)
                              .data("margin-right", s)
                              .css(
                                "margin-right",
                                `${parseFloat(r) - e._scrollbarWidth}px`,
                              );
                          }),
                          t(_.NAVBAR_TOGGLER).each((n, i) => {
                            let s = t(i)[0].style.marginRight,
                              r = t(i).css("margin-right");
                            t(i)
                              .data("margin-right", s)
                              .css(
                                "margin-right",
                                `${parseFloat(r) + e._scrollbarWidth}px`,
                              );
                          });
                        let n = document.body.style.paddingRight,
                          i = t(document.body).css("padding-right");
                        t(document.body)
                          .data("padding-right", n)
                          .css(
                            "padding-right",
                            `${parseFloat(i) + this._scrollbarWidth}px`,
                          );
                      }
                    }),
                    (m._resetScrollbar = function() {
                      t(_.FIXED_CONTENT).each((e, n) => {
                        const i = t(n).data("padding-right");
                        void 0 !== i &&
                          t(n)
                            .css("padding-right", i)
                            .removeData("padding-right");
                      }),
                        t(`${_.STICKY_CONTENT}, ${_.NAVBAR_TOGGLER}`).each(
                          (e, n) => {
                            const i = t(n).data("margin-right");
                            void 0 !== i &&
                              t(n)
                                .css("margin-right", i)
                                .removeData("margin-right");
                          },
                        );
                      const e = t(document.body).data("padding-right");
                      void 0 !== e &&
                        t(document.body)
                          .css("padding-right", e)
                          .removeData("padding-right");
                    }),
                    (m._getScrollbarWidth = function() {
                      const t = document.createElement("div");
                      (t.className = h), document.body.appendChild(t);
                      const e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                    }),
                    (i._jQueryInterface = function(e, n) {
                      return this.each(function() {
                        let s = t(this).data("bs.modal"),
                          a = o(
                            {},
                            r,
                            t(this).data(),
                            typeof e === "object" && e ? e : {},
                          );
                        if (
                          (s ||
                            ((s = new i(this, a)), t(this).data("bs.modal", s)),
                          typeof e === "string")
                        ) {
                          if (void 0 === s[e])
                            throw new TypeError(`No method named "${e}"`);
                          s[e](n);
                        } else a.show && s.show(n);
                      });
                    }),
                    s(i, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return r;
                        },
                      },
                    ]),
                    i
                  );
                })();
              return (
                t(document).on(c.CLICK_DATA_API, _.DATA_TOGGLE, function(e) {
                  let n,
                    i = this,
                    s = a.getSelectorFromElement(this);
                  s && (n = t(s)[0]);
                  const r = t(n).data("bs.modal")
                    ? "toggle"
                    : o({}, t(n).data(), t(this).data());
                  (this.tagName !== "A" && this.tagName !== "AREA") ||
                    e.preventDefault();
                  var l = t(n).one(c.SHOW, e => {
                    e.isDefaultPrevented() ||
                      l.one(c.HIDDEN, () => {
                        t(i).is(":visible") && i.focus();
                      });
                  });
                  m._jQueryInterface.call(t(n), r, this);
                }),
                (t.fn.modal = m._jQueryInterface),
                (t.fn.modal.Constructor = m),
                (t.fn.modal.noConflict = function() {
                  return (t.fn.modal = i), m._jQueryInterface;
                }),
                m
              );
            })(e),
            g = (function(t) {
              let e = "tooltip",
                i = ".bs.tooltip",
                r = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                c = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(number|string)",
                  container: "(string|element|boolean)",
                  fallbackPlacement: "(string|array)",
                  boundary: "(string|element)",
                },
                h = {
                  AUTO: "auto",
                  TOP: "top",
                  RIGHT: "right",
                  BOTTOM: "bottom",
                  LEFT: "left",
                },
                u = {
                  animation: !0,
                  template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
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
                },
                f = "show",
                d = "out",
                g = {
                  HIDE: `hide${i}`,
                  HIDDEN: `hidden${i}`,
                  SHOW: `show${i}`,
                  SHOWN: `shown${i}`,
                  INSERTED: `inserted${i}`,
                  CLICK: `click${i}`,
                  FOCUSIN: `focusin${i}`,
                  FOCUSOUT: `focusout${i}`,
                  MOUSEENTER: `mouseenter${i}`,
                  MOUSELEAVE: `mouseleave${i}`,
                },
                _ = "fade",
                m = "show",
                p = ".tooltip-inner",
                v = ".arrow",
                E = "hover",
                T = "focus",
                b = "click",
                y = "manual",
                C = (function() {
                  function r(t, e) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap tooltips require Popper.js (https://popper.js.org)",
                      );
                    (this._isEnabled = !0),
                      (this._timeout = 0),
                      (this._hoverState = ""),
                      (this._activeTrigger = {}),
                      (this._popper = null),
                      (this.element = t),
                      (this.config = this._getConfig(e)),
                      (this.tip = null),
                      this._setListeners();
                  }
                  const C = r.prototype;
                  return (
                    (C.enable = function() {
                      this._isEnabled = !0;
                    }),
                    (C.disable = function() {
                      this._isEnabled = !1;
                    }),
                    (C.toggleEnabled = function() {
                      this._isEnabled = !this._isEnabled;
                    }),
                    (C.toggle = function(e) {
                      if (this._isEnabled)
                        if (e) {
                          let n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                          i ||
                            ((i = new this.constructor(
                              e.currentTarget,
                              this._getDelegateConfig(),
                            )),
                            t(e.currentTarget).data(n, i)),
                            (i._activeTrigger.click = !i._activeTrigger.click),
                            i._isWithActiveTrigger()
                              ? i._enter(null, i)
                              : i._leave(null, i);
                        } else {
                          if (t(this.getTipElement()).hasClass(m))
                            return void this._leave(null, this);
                          this._enter(null, this);
                        }
                    }),
                    (C.dispose = function() {
                      clearTimeout(this._timeout),
                        t.removeData(this.element, this.constructor.DATA_KEY),
                        t(this.element).off(this.constructor.EVENT_KEY),
                        t(this.element)
                          .closest(".modal")
                          .off("hide.bs.modal"),
                        this.tip && t(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper !== null && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                    }),
                    (C.show = function() {
                      const e = this;
                      if (t(this.element).css("display") === "none")
                        throw new Error("Please use show on visible elements");
                      const i = t.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(i);
                        const s = t.contains(
                          this.element.ownerDocument.documentElement,
                          this.element,
                        );
                        if (i.isDefaultPrevented() || !s) return;
                        let r = this.getTipElement(),
                          o = a.getUID(this.constructor.NAME);
                        r.setAttribute("id", o),
                          this.element.setAttribute("aria-describedby", o),
                          this.setContent(),
                          this.config.animation && t(r).addClass(_);
                        let l =
                            typeof this.config.placement === "function"
                              ? this.config.placement.call(
                                  this,
                                  r,
                                  this.element,
                                )
                              : this.config.placement,
                          c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        const h =
                          !1 === this.config.container
                            ? document.body
                            : t(this.config.container);
                        t(r).data(this.constructor.DATA_KEY, this),
                          t.contains(
                            this.element.ownerDocument.documentElement,
                            this.tip,
                          ) || t(r).appendTo(h),
                          t(this.element).trigger(
                            this.constructor.Event.INSERTED,
                          ),
                          (this._popper = new n(this.element, r, {
                            placement: c,
                            modifiers: {
                              offset: { offset: this.config.offset },
                              flip: { behavior: this.config.fallbackPlacement },
                              arrow: { element: v },
                              preventOverflow: {
                                boundariesElement: this.config.boundary,
                              },
                            },
                            onCreate(t) {
                              t.originalPlacement !== t.placement &&
                                e._handlePopperPlacementChange(t);
                            },
                            onUpdate(t) {
                              e._handlePopperPlacementChange(t);
                            },
                          })),
                          t(r).addClass(m),
                          "ontouchstart" in document.documentElement &&
                            t(document.body)
                              .children()
                              .on("mouseover", null, t.noop);
                        const u = function() {
                          e.config.animation && e._fixTransition();
                          const n = e._hoverState;
                          (e._hoverState = null),
                            t(e.element).trigger(e.constructor.Event.SHOWN),
                            n === d && e._leave(null, e);
                        };
                        if (t(this.tip).hasClass(_)) {
                          const f = a.getTransitionDurationFromElement(
                            this.tip,
                          );
                          t(this.tip)
                            .one(a.TRANSITION_END, u)
                            .emulateTransitionEnd(f);
                        } else u();
                      }
                    }),
                    (C.hide = function(e) {
                      let n = this,
                        i = this.getTipElement(),
                        s = t.Event(this.constructor.Event.HIDE),
                        r = function() {
                          n._hoverState !== f &&
                            i.parentNode &&
                            i.parentNode.removeChild(i),
                            n._cleanTipClass(),
                            n.element.removeAttribute("aria-describedby"),
                            t(n.element).trigger(n.constructor.Event.HIDDEN),
                            n._popper !== null && n._popper.destroy(),
                            e && e();
                        };
                      if (
                        (t(this.element).trigger(s), !s.isDefaultPrevented())
                      ) {
                        if (
                          (t(i).removeClass(m),
                          "ontouchstart" in document.documentElement &&
                            t(document.body)
                              .children()
                              .off("mouseover", null, t.noop),
                          (this._activeTrigger[b] = !1),
                          (this._activeTrigger[T] = !1),
                          (this._activeTrigger[E] = !1),
                          t(this.tip).hasClass(_))
                        ) {
                          const o = a.getTransitionDurationFromElement(i);
                          t(i)
                            .one(a.TRANSITION_END, r)
                            .emulateTransitionEnd(o);
                        } else r();
                        this._hoverState = "";
                      }
                    }),
                    (C.update = function() {
                      this._popper !== null && this._popper.scheduleUpdate();
                    }),
                    (C.isWithContent = function() {
                      return Boolean(this.getTitle());
                    }),
                    (C.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass(`bs-tooltip-${e}`);
                    }),
                    (C.getTipElement = function() {
                      return (
                        (this.tip = this.tip || t(this.config.template)[0]),
                        this.tip
                      );
                    }),
                    (C.setContent = function() {
                      const e = t(this.getTipElement());
                      this.setElementContent(e.find(p), this.getTitle()),
                        e.removeClass(`${_} ${m}`);
                    }),
                    (C.setElementContent = function(e, n) {
                      const i = this.config.html;
                      typeof n === "object" && (n.nodeType || n.jquery)
                        ? i
                          ? t(n)
                              .parent()
                              .is(e) || e.empty().append(n)
                          : e.text(t(n).text())
                        : e[i ? "html" : "text"](n);
                    }),
                    (C.getTitle = function() {
                      let t = this.element.getAttribute("data-original-title");
                      return (
                        t ||
                          (t =
                            typeof this.config.title === "function"
                              ? this.config.title.call(this.element)
                              : this.config.title),
                        t
                      );
                    }),
                    (C._getAttachment = function(t) {
                      return h[t.toUpperCase()];
                    }),
                    (C._setListeners = function() {
                      const e = this;
                      this.config.trigger.split(" ").forEach(n => {
                        if (n === "click")
                          t(e.element).on(
                            e.constructor.Event.CLICK,
                            e.config.selector,
                            t => e.toggle(t),
                          );
                        else if (n !== y) {
                          let i =
                              n === E
                                ? e.constructor.Event.MOUSEENTER
                                : e.constructor.Event.FOCUSIN,
                            s =
                              n === E
                                ? e.constructor.Event.MOUSELEAVE
                                : e.constructor.Event.FOCUSOUT;
                          t(e.element)
                            .on(i, e.config.selector, t => e._enter(t))
                            .on(s, e.config.selector, t => e._leave(t));
                        }
                        t(e.element)
                          .closest(".modal")
                          .on("hide.bs.modal", () => e.hide());
                      }),
                        this.config.selector
                          ? (this.config = o({}, this.config, {
                              trigger: "manual",
                              selector: "",
                            }))
                          : this._fixTitle();
                    }),
                    (C._fixTitle = function() {
                      const t = typeof this.element.getAttribute(
                        "data-original-title",
                      );
                      (this.element.getAttribute("title") || t !== "string") &&
                        (this.element.setAttribute(
                          "data-original-title",
                          this.element.getAttribute("title") || "",
                        ),
                        this.element.setAttribute("title", ""));
                    }),
                    (C._enter = function(e, n) {
                      const i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) ||
                        ((n = new this.constructor(
                          e.currentTarget,
                          this._getDelegateConfig(),
                        )),
                        t(e.currentTarget).data(i, n)),
                        e &&
                          (n._activeTrigger[e.type === "focusin" ? T : E] = !0),
                        t(n.getTipElement()).hasClass(m) || n._hoverState === f
                          ? (n._hoverState = f)
                          : (clearTimeout(n._timeout),
                            (n._hoverState = f),
                            n.config.delay && n.config.delay.show
                              ? (n._timeout = setTimeout(() => {
                                  n._hoverState === f && n.show();
                                }, n.config.delay.show))
                              : n.show());
                    }),
                    (C._leave = function(e, n) {
                      const i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) ||
                        ((n = new this.constructor(
                          e.currentTarget,
                          this._getDelegateConfig(),
                        )),
                        t(e.currentTarget).data(i, n)),
                        e &&
                          (n._activeTrigger[
                            e.type === "focusout" ? T : E
                          ] = !1),
                        n._isWithActiveTrigger() ||
                          (clearTimeout(n._timeout),
                          (n._hoverState = d),
                          n.config.delay && n.config.delay.hide
                            ? (n._timeout = setTimeout(() => {
                                n._hoverState === d && n.hide();
                              }, n.config.delay.hide))
                            : n.hide());
                    }),
                    (C._isWithActiveTrigger = function() {
                      for (const t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                      return !1;
                    }),
                    (C._getConfig = function(n) {
                      return (
                        typeof (n = o(
                          {},
                          this.constructor.Default,
                          t(this.element).data(),
                          typeof n === "object" && n ? n : {},
                        )).delay === "number" &&
                          (n.delay = { show: n.delay, hide: n.delay }),
                        typeof n.title === "number" &&
                          (n.title = n.title.toString()),
                        typeof n.content === "number" &&
                          (n.content = n.content.toString()),
                        a.typeCheckConfig(e, n, this.constructor.DefaultType),
                        n
                      );
                    }),
                    (C._getDelegateConfig = function() {
                      const t = {};
                      if (this.config)
                        for (const e in this.config)
                          this.constructor.Default[e] !== this.config[e] &&
                            (t[e] = this.config[e]);
                      return t;
                    }),
                    (C._cleanTipClass = function() {
                      let e = t(this.getTipElement()),
                        n = e.attr("class").match(l);
                      n !== null && n.length > 0 && e.removeClass(n.join(""));
                    }),
                    (C._handlePopperPlacementChange = function(t) {
                      this._cleanTipClass(),
                        this.addAttachmentClass(
                          this._getAttachment(t.placement),
                        );
                    }),
                    (C._fixTransition = function() {
                      let e = this.getTipElement(),
                        n = this.config.animation;
                      e.getAttribute("x-placement") === null &&
                        (t(e).removeClass(_),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = n));
                    }),
                    (r._jQueryInterface = function(e) {
                      return this.each(function() {
                        let n = t(this).data("bs.tooltip"),
                          i = typeof e === "object" && e;
                        if (
                          (n || !/dispose|hide/.test(e)) &&
                          (n ||
                            ((n = new r(this, i)),
                            t(this).data("bs.tooltip", n)),
                          typeof e === "string")
                        ) {
                          if (void 0 === n[e])
                            throw new TypeError(`No method named "${e}"`);
                          n[e]();
                        }
                      });
                    }),
                    s(r, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return u;
                        },
                      },
                      {
                        key: "NAME",
                        get() {
                          return e;
                        },
                      },
                      {
                        key: "DATA_KEY",
                        get() {
                          return "bs.tooltip";
                        },
                      },
                      {
                        key: "Event",
                        get() {
                          return g;
                        },
                      },
                      {
                        key: "EVENT_KEY",
                        get() {
                          return i;
                        },
                      },
                      {
                        key: "DefaultType",
                        get() {
                          return c;
                        },
                      },
                    ]),
                    r
                  );
                })();
              return (
                (t.fn[e] = C._jQueryInterface),
                (t.fn[e].Constructor = C),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = r), C._jQueryInterface;
                }),
                C
              );
            })(e),
            _ = (function(t) {
              let e = "popover",
                n = ".bs.popover",
                i = t.fn[e],
                r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                a = o({}, g.Default, {
                  placement: "right",
                  trigger: "click",
                  content: "",
                  template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                }),
                l = o({}, g.DefaultType, {
                  content: "(string|element|function)",
                }),
                c = "fade",
                h = "show",
                u = ".popover-header",
                f = ".popover-body",
                d = {
                  HIDE: `hide${n}`,
                  HIDDEN: `hidden${n}`,
                  SHOW: `show${n}`,
                  SHOWN: `shown${n}`,
                  INSERTED: `inserted${n}`,
                  CLICK: `click${n}`,
                  FOCUSIN: `focusin${n}`,
                  FOCUSOUT: `focusout${n}`,
                  MOUSEENTER: `mouseenter${n}`,
                  MOUSELEAVE: `mouseleave${n}`,
                },
                _ = (function(i) {
                  let o, g;
                  function _() {
                    return i.apply(this, arguments) || this;
                  }
                  (g = i),
                    ((o = _).prototype = Object.create(g.prototype)),
                    (o.prototype.constructor = o),
                    (o.__proto__ = g);
                  const m = _.prototype;
                  return (
                    (m.isWithContent = function() {
                      return this.getTitle() || this._getContent();
                    }),
                    (m.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass(`bs-popover-${e}`);
                    }),
                    (m.getTipElement = function() {
                      return (
                        (this.tip = this.tip || t(this.config.template)[0]),
                        this.tip
                      );
                    }),
                    (m.setContent = function() {
                      const e = t(this.getTipElement());
                      this.setElementContent(e.find(u), this.getTitle());
                      let n = this._getContent();
                      typeof n === "function" && (n = n.call(this.element)),
                        this.setElementContent(e.find(f), n),
                        e.removeClass(`${c} ${h}`);
                    }),
                    (m._getContent = function() {
                      return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                      );
                    }),
                    (m._cleanTipClass = function() {
                      let e = t(this.getTipElement()),
                        n = e.attr("class").match(r);
                      n !== null && n.length > 0 && e.removeClass(n.join(""));
                    }),
                    (_._jQueryInterface = function(e) {
                      return this.each(function() {
                        let n = t(this).data("bs.popover"),
                          i = typeof e === "object" ? e : null;
                        if (
                          (n || !/destroy|hide/.test(e)) &&
                          (n ||
                            ((n = new _(this, i)),
                            t(this).data("bs.popover", n)),
                          typeof e === "string")
                        ) {
                          if (void 0 === n[e])
                            throw new TypeError(`No method named "${e}"`);
                          n[e]();
                        }
                      });
                    }),
                    s(_, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return a;
                        },
                      },
                      {
                        key: "NAME",
                        get() {
                          return e;
                        },
                      },
                      {
                        key: "DATA_KEY",
                        get() {
                          return "bs.popover";
                        },
                      },
                      {
                        key: "Event",
                        get() {
                          return d;
                        },
                      },
                      {
                        key: "EVENT_KEY",
                        get() {
                          return n;
                        },
                      },
                      {
                        key: "DefaultType",
                        get() {
                          return l;
                        },
                      },
                    ]),
                    _
                  );
                })(g);
              return (
                (t.fn[e] = _._jQueryInterface),
                (t.fn[e].Constructor = _),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = i), _._jQueryInterface;
                }),
                _
              );
            })(e),
            m = (function(t) {
              let e = "scrollspy",
                n = t.fn[e],
                i = { offset: 10, method: "auto", target: "" },
                r = {
                  offset: "number",
                  method: "string",
                  target: "(string|element)",
                },
                l = {
                  ACTIVATE: "activate.bs.scrollspy",
                  SCROLL: "scroll.bs.scrollspy",
                  LOAD_DATA_API: "load.bs.scrollspy.data-api",
                },
                c = "dropdown-item",
                h = "active",
                u = {
                  DATA_SPY: '[data-spy="scroll"]',
                  ACTIVE: ".active",
                  NAV_LIST_GROUP: ".nav, .list-group",
                  NAV_LINKS: ".nav-link",
                  NAV_ITEMS: ".nav-item",
                  LIST_ITEMS: ".list-group-item",
                  DROPDOWN: ".dropdown",
                  DROPDOWN_ITEMS: ".dropdown-item",
                  DROPDOWN_TOGGLE: ".dropdown-toggle",
                },
                f = "offset",
                d = "position",
                g = (function() {
                  function n(e, n) {
                    const i = this;
                    (this._element = e),
                      (this._scrollElement = e.tagName === "BODY" ? window : e),
                      (this._config = this._getConfig(n)),
                      (this._selector = `${this._config.target} ${
                        u.NAV_LINKS
                      },${this._config.target} ${u.LIST_ITEMS},${
                        this._config.target
                      } ${u.DROPDOWN_ITEMS}`),
                      (this._offsets = []),
                      (this._targets = []),
                      (this._activeTarget = null),
                      (this._scrollHeight = 0),
                      t(this._scrollElement).on(l.SCROLL, t => i._process(t)),
                      this.refresh(),
                      this._process();
                  }
                  const g = n.prototype;
                  return (
                    (g.refresh = function() {
                      let e = this,
                        n =
                          this._scrollElement === this._scrollElement.window
                            ? f
                            : d,
                        i =
                          this._config.method === "auto"
                            ? n
                            : this._config.method,
                        s = i === d ? this._getScrollTop() : 0;
                      (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        t
                          .makeArray(t(this._selector))
                          .map(e => {
                            let n,
                              r = a.getSelectorFromElement(e);
                            if ((r && (n = t(r)[0]), n)) {
                              const o = n.getBoundingClientRect();
                              if (o.width || o.height)
                                return [t(n)[i]().top + s, r];
                            }
                            return null;
                          })
                          .filter(t => t)
                          .sort((t, e) => t[0] - e[0])
                          .forEach(t => {
                            e._offsets.push(t[0]), e._targets.push(t[1]);
                          });
                    }),
                    (g.dispose = function() {
                      t.removeData(this._element, "bs.scrollspy"),
                        t(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                    }),
                    (g._getConfig = function(n) {
                      if (
                        typeof (n = o(
                          {},
                          i,
                          typeof n === "object" && n ? n : {},
                        )).target !== "string"
                      ) {
                        let s = t(n.target).attr("id");
                        s || ((s = a.getUID(e)), t(n.target).attr("id", s)),
                          (n.target = `#${s}`);
                      }
                      return a.typeCheckConfig(e, n, r), n;
                    }),
                    (g._getScrollTop = function() {
                      return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                    }),
                    (g._getScrollHeight = function() {
                      return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight,
                        )
                      );
                    }),
                    (g._getOffsetHeight = function() {
                      return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (g._process = function() {
                      let t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                      if (
                        (this._scrollHeight !== e && this.refresh(), t >= n)
                      ) {
                        const i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                      } else {
                        if (
                          this._activeTarget &&
                          t < this._offsets[0] &&
                          this._offsets[0] > 0
                        )
                          return (
                            (this._activeTarget = null), void this._clear()
                          );
                        for (let s = this._offsets.length; s--; ) {
                          this._activeTarget !== this._targets[s] &&
                            t >= this._offsets[s] &&
                            (void 0 === this._offsets[s + 1] ||
                              t < this._offsets[s + 1]) &&
                            this._activate(this._targets[s]);
                        }
                      }
                    }),
                    (g._activate = function(e) {
                      (this._activeTarget = e), this._clear();
                      let n = this._selector.split(",");
                      n = n.map(
                        t =>
                          `${t 
                          }[data-target="${ 
                          e 
                          }"],${ 
                          t 
                          }[href="${ 
                          e 
                          }"]`
                      );
                      const i = t(n.join(","));
                      i.hasClass(c)
                        ? (i
                            .closest(u.DROPDOWN)
                            .find(u.DROPDOWN_TOGGLE)
                            .addClass(h),
                          i.addClass(h))
                        : (i.addClass(h),
                          i
                            .parents(u.NAV_LIST_GROUP)
                            .prev(`${u.NAV_LINKS}, ${u.LIST_ITEMS}`)
                            .addClass(h),
                          i
                            .parents(u.NAV_LIST_GROUP)
                            .prev(u.NAV_ITEMS)
                            .children(u.NAV_LINKS)
                            .addClass(h)),
                        t(this._scrollElement).trigger(l.ACTIVATE, {
                          relatedTarget: e,
                        });
                    }),
                    (g._clear = function() {
                      t(this._selector)
                        .filter(u.ACTIVE)
                        .removeClass(h);
                    }),
                    (n._jQueryInterface = function(e) {
                      return this.each(function() {
                        let i = t(this).data("bs.scrollspy");
                        if (
                          (i ||
                            ((i = new n(this, typeof e === "object" && e)),
                            t(this).data("bs.scrollspy", i)),
                          typeof e === "string")
                        ) {
                          if (void 0 === i[e])
                            throw new TypeError(`No method named "${e}"`);
                          i[e]();
                        }
                      });
                    }),
                    s(n, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                      {
                        key: "Default",
                        get() {
                          return i;
                        },
                      },
                    ]),
                    n
                  );
                })();
              return (
                t(window).on(l.LOAD_DATA_API, () => {
                  for (
                    let e = t.makeArray(t(u.DATA_SPY)), n = e.length;
                    n--;

                  ) {
                    const i = t(e[n]);
                    g._jQueryInterface.call(i, i.data());
                  }
                }),
                (t.fn[e] = g._jQueryInterface),
                (t.fn[e].Constructor = g),
                (t.fn[e].noConflict = function() {
                  return (t.fn[e] = n), g._jQueryInterface;
                }),
                g
              );
            })(e),
            p = (function(t) {
              let e = t.fn.tab,
                n = {
                  HIDE: "hide.bs.tab",
                  HIDDEN: "hidden.bs.tab",
                  SHOW: "show.bs.tab",
                  SHOWN: "shown.bs.tab",
                  CLICK_DATA_API: "click.bs.tab.data-api",
                },
                i = "dropdown-menu",
                r = "active",
                o = "disabled",
                l = "fade",
                c = "show",
                h = ".dropdown",
                u = ".nav, .list-group",
                f = ".active",
                d = "> li > .active",
                g =
                  '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                _ = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                p = (function() {
                  function e(t) {
                    this._element = t;
                  }
                  const g = e.prototype;
                  return (
                    (g.show = function() {
                      const e = this;
                      if (
                        !(
                          (this._element.parentNode &&
                            this._element.parentNode.nodeType ===
                              Node.ELEMENT_NODE &&
                            t(this._element).hasClass(r)) ||
                          t(this._element).hasClass(o)
                        )
                      ) {
                        let i,
                          s,
                          l = t(this._element).closest(u)[0],
                          c = a.getSelectorFromElement(this._element);
                        if (l) {
                          const h = l.nodeName === "UL" ? d : f;
                          s = (s = t.makeArray(t(l).find(h)))[s.length - 1];
                        }
                        let g = t.Event(n.HIDE, {
                            relatedTarget: this._element,
                          }),
                          _ = t.Event(n.SHOW, { relatedTarget: s });
                        if (
                          (s && t(s).trigger(g),
                          t(this._element).trigger(_),
                          !_.isDefaultPrevented() && !g.isDefaultPrevented())
                        ) {
                          c && (i = t(c)[0]), this._activate(this._element, l);
                          const m = function() {
                            let i = t.Event(n.HIDDEN, {
                                relatedTarget: e._element,
                              }),
                              r = t.Event(n.SHOWN, { relatedTarget: s });
                            t(s).trigger(i), t(e._element).trigger(r);
                          };
                          i ? this._activate(i, i.parentNode, m) : m();
                        }
                      }
                    }),
                    (g.dispose = function() {
                      t.removeData(this._element, "bs.tab"),
                        (this._element = null);
                    }),
                    (g._activate = function(e, n, i) {
                      let s = this,
                        r = (n.nodeName === "UL"
                          ? t(n).find(d)
                          : t(n).children(f))[0],
                        o = i && r && t(r).hasClass(l),
                        c = function() {
                          return s._transitionComplete(e, r, i);
                        };
                      if (r && o) {
                        const h = a.getTransitionDurationFromElement(r);
                        t(r)
                          .one(a.TRANSITION_END, c)
                          .emulateTransitionEnd(h);
                      } else c();
                    }),
                    (g._transitionComplete = function(e, n, s) {
                      if (n) {
                        t(n).removeClass(`${c} ${r}`);
                        const o = t(n.parentNode).find(m)[0];
                        o && t(o).removeClass(r),
                          n.getAttribute("role") === "tab" &&
                            n.setAttribute("aria-selected", !1);
                      }
                      if (
                        (t(e).addClass(r),
                        e.getAttribute("role") === "tab" &&
                          e.setAttribute("aria-selected", !0),
                        a.reflow(e),
                        t(e).addClass(c),
                        e.parentNode && t(e.parentNode).hasClass(i))
                      ) {
                        const l = t(e).closest(h)[0];
                        l &&
                          t(l)
                            .find(_)
                            .addClass(r),
                          e.setAttribute("aria-expanded", !0);
                      }
                      s && s();
                    }),
                    (e._jQueryInterface = function(n) {
                      return this.each(function() {
                        let i = t(this),
                          s = i.data("bs.tab");
                        if (
                          (s || ((s = new e(this)), i.data("bs.tab", s)),
                          typeof n === "string")
                        ) {
                          if (void 0 === s[n])
                            throw new TypeError(`No method named "${n}"`);
                          s[n]();
                        }
                      });
                    }),
                    s(e, null, [
                      {
                        key: "VERSION",
                        get() {
                          return "4.1.1";
                        },
                      },
                    ]),
                    e
                  );
                })();
              return (
                t(document).on(n.CLICK_DATA_API, g, function(e) {
                  e.preventDefault(), p._jQueryInterface.call(t(this), "show");
                }),
                (t.fn.tab = p._jQueryInterface),
                (t.fn.tab.Constructor = p),
                (t.fn.tab.noConflict = function() {
                  return (t.fn.tab = e), p._jQueryInterface;
                }),
                p
              );
            })(e);
          !(function(t) {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
              );
            const e = t.fn.jquery.split(" ")[0].split(".");
            if (
              (e[0] < 2 && e[1] < 9) ||
              (e[0] === 1 && e[1] === 9 && e[2] < 1) ||
              e[0] >= 4
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
              );
          })(e),
            (t.Util = a),
            (t.Alert = l),
            (t.Button = c),
            (t.Carousel = h),
            (t.Collapse = u),
            (t.Dropdown = f),
            (t.Modal = d),
            (t.Popover = _),
            (t.Scrollspy = m),
            (t.Tab = p),
            (t.Tooltip = g),
            Object.defineProperty(t, "__esModule", { value: !0 });
        });
      },
      { jquery: 53, "popper.js": 54 },
    ],
    55: [
      function(require, module, exports) {
        let define;
        let t;
        !(function(e, n) {
          typeof t === "function" && t.amd
            ? t(n)
            : typeof exports === "object"
              ? (module.exports = n())
              : (e.baguetteBox = n());
        })(this, () => {
          let t,
            e,
            n,
            o,
            i,
            a = {},
            s = {
              captions: !0,
              buttons: "auto",
              fullScreen: !1,
              noScrollbars: !1,
              bodyClass: "baguetteBox-open",
              titleTag: !1,
              async: !1,
              preload: 2,
              animation: "slideIn",
              afterShow: null,
              afterHide: null,
              onChange: null,
              overlayBackgroundColor: "rgba(0,0,0,.8)",
            },
            l = {},
            r = [],
            u = 0,
            c = !1,
            d = {},
            f = !1,
            g = /.+\.(gif|jpe?g|png|webp)/i,
            p = {},
            b = [],
            m = null,
            v = function(t) {
              t.target.id.indexOf("baguette-img") !== -1 && S();
            },
            h = function(t) {
              t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0),
                I();
            },
            y = function(t) {
              t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0),
                H();
            },
            w = function(t) {
              t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0),
                S();
            },
            k = function(t) {
              d.count++,
                d.count > 1 && (d.multitouch = !0),
                (d.startX = t.changedTouches[0].pageX),
                (d.startY = t.changedTouches[0].pageY);
            },
            x = function(t) {
              if (!f && !d.multitouch) {
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                const e = t.touches[0] || t.changedTouches[0];
                e.pageX - d.startX > 40
                  ? ((f = !0), I())
                  : e.pageX - d.startX < -40
                    ? ((f = !0), H())
                    : d.startY - e.pageY > 100 && S();
              }
            },
            C = function() {
              d.count--, d.count <= 0 && (d.multitouch = !1), (f = !1);
            },
            E = function() {
              C();
            },
            B = function(e) {
              t.style.display === "block" &&
                t.contains &&
                !t.contains(e.target) &&
                (e.stopPropagation(), P());
            };
          function T(t) {
            if (p.hasOwnProperty(t)) {
              const e = p[t].galleries;
              [].forEach.call(e, t => {
                [].forEach.call(t, t => {
                  R(t.imageElement, "click", t.eventHandler);
                }),
                  r === t && (r = []);
              }),
                delete p[t];
            }
          }
          function N(t) {
            switch (t.keyCode) {
              case 37:
                I();
                break;
              case 39:
                H();
                break;
              case 27:
                S();
            }
          }
          function L(i, l) {
            if (r !== i) {
              for (
                r = i,
                  (function(i) {
                    for (const l in (i || (i = {}), s))
                      (a[l] = s[l]), void 0 !== i[l] && (a[l] = i[l]);
                    (e.style.transition = e.style.webkitTransition =
                      a.animation === "fadeIn"
                        ? "opacity .4s ease"
                        : a.animation === "slideIn"
                          ? ""
                          : "none"),
                      a.buttons === "auto" &&
                        (("ontouchstart" in window) || r.length === 1) &&
                        (a.buttons = !1),
                      (n.style.display = o.style.display = a.buttons
                        ? ""
                        : "none");
                    try {
                      t.style.backgroundColor = a.overlayBackgroundColor;
                    } catch (t) {}
                  })(l);
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              b.length = 0;
              for (var u, c = [], d = [], f = 0; f < i.length; f++)
                ((u = D("div")).className = "full-image"),
                  (u.id = `baguette-img-${f}`),
                  b.push(u),
                  c.push(`baguetteBox-figure-${f}`),
                  d.push(`baguetteBox-figcaption-${f}`),
                  e.appendChild(b[f]);
              t.setAttribute("aria-labelledby", c.join(" ")),
                t.setAttribute("aria-describedby", d.join(" "));
            }
          }
          function A(e) {
            a.noScrollbars &&
              ((document.documentElement.style.overflowY = "hidden"),
              (document.body.style.overflowY = "scroll")),
              t.style.display !== "block" &&
                (O(document, "keydown", N),
                (d = { count: 0, startX: null, startY: null }),
                F((u = e), () => {
                  X(u), M(u);
                }),
                q(),
                (t.style.display = "block"),
                a.fullScreen &&
                  (t.requestFullscreen
                    ? t.requestFullscreen()
                    : t.webkitRequestFullscreen
                      ? t.webkitRequestFullscreen()
                      : t.mozRequestFullScreen && t.mozRequestFullScreen()),
                setTimeout(() => {
                  (t.className = "visible"),
                    a.bodyClass &&
                      document.body.classList &&
                      document.body.classList.add(a.bodyClass),
                    a.afterShow && a.afterShow();
                }, 50),
                a.onChange && a.onChange(u, b.length),
                (m = document.activeElement),
                P(),
                (c = !0));
          }
          function P() {
            a.buttons ? n.focus() : i.focus();
          }
          function S() {
            a.noScrollbars &&
              ((document.documentElement.style.overflowY = "auto"),
              (document.body.style.overflowY = "auto")),
              t.style.display !== "none" &&
                (R(document, "keydown", N),
                (t.className = ""),
                setTimeout(() => {
                  (t.style.display = "none"),
                    document.exitFullscreen
                      ? document.exitFullscreen()
                      : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.webkitExitFullscreen &&
                          document.webkitExitFullscreen(),
                    a.bodyClass &&
                      document.body.classList &&
                      document.body.classList.remove(a.bodyClass),
                    a.afterHide && a.afterHide(),
                    m && m.focus(),
                    (c = !1);
                }, 500));
          }
          function F(t, e) {
            let n = b[t],
              o = r[t];
            if (void 0 !== n && void 0 !== o)
              if (n.getElementsByTagName("img")[0]) e && e();
              else {
                let i = o.imageElement,
                  s = i.getElementsByTagName("img")[0],
                  l =
                    typeof a.captions === "function"
                      ? a.captions.call(r, i)
                      : i.getAttribute("data-caption") || i.title,
                  u = (function(t) {
                    let e = t.href;
                    if (t.dataset) {
                      const n = [];
                      for (const o in t.dataset)
                        o.substring(0, 3) !== "at-" ||
                          isNaN(o.substring(3)) ||
                          (n[o.replace("at-", "")] = t.dataset[o]);
                      for (
                        var i = Object.keys(n).sort(
                            (t, e) =>
                              parseInt(t, 10) < parseInt(e, 10) ? -1 : 1,
                          ),
                          a = window.innerWidth * window.devicePixelRatio,
                          s = 0;
                        s < i.length - 1 && i[s] < a;

                      )
                        s++;
                      e = n[i[s]] || e;
                    }
                    return e;
                  })(i),
                  c = D("figure");
                if (
                  ((c.id = `baguetteBox-figure-${t}`),
                  (c.innerHTML =
                    '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>'),
                  a.captions && l)
                ) {
                  const d = D("figcaption");
                  (d.id = `baguetteBox-figcaption-${t}`),
                    (d.innerHTML = l),
                    c.appendChild(d);
                }
                n.appendChild(c);
                const f = D("img");
                (f.onload = function() {
                  const n = document.querySelector(
                    `#baguette-img-${t} .baguetteBox-spinner`,
                  );
                  c.removeChild(n), !a.async && e && e();
                }),
                  f.setAttribute("src", u),
                  (f.alt = (s && s.alt) || ""),
                  a.titleTag && l && (f.title = l),
                  c.appendChild(f),
                  a.async && e && e();
              }
          }
          function H() {
            return Y(u + 1);
          }
          function I() {
            return Y(u - 1);
          }
          function Y(t, e) {
            return !c && t >= 0 && t < e.length
              ? (L(e, a), A(t), !0)
              : t < 0
                ? (a.animation && j("left"), !1)
                : t >= b.length
                  ? (a.animation && j("right"), !1)
                  : (F((u = t), () => {
                      X(u), M(u);
                    }),
                    q(),
                    a.onChange && a.onChange(u, b.length),
                    !0);
          }
          function j(t) {
            (e.className = `bounce-from-${t}`),
              setTimeout(() => {
                e.className = "";
              }, 400);
          }
          function q() {
            const t = `${100 * -u}%`;
            a.animation === "fadeIn"
              ? ((e.style.opacity = 0),
                setTimeout(() => {
                  l.transforms
                    ? (e.style.transform = e.style.webkitTransform = `translate3d(${t},0,0)`)
                    : (e.style.left = t),
                    (e.style.opacity = 1);
                }, 400))
              : l.transforms
                ? (e.style.transform = e.style.webkitTransform = `translate3d(${t},0,0)`)
                : (e.style.left = t);
          }
          function X(t) {
            t - u >= a.preload ||
              F(t + 1, () => {
                X(t + 1);
              });
          }
          function M(t) {
            u - t >= a.preload ||
              F(t - 1, () => {
                M(t - 1);
              });
          }
          function O(t, e, n, o) {
            t.addEventListener
              ? t.addEventListener(e, n, o)
              : t.attachEvent(`on${e}`, t => {
                  ((t = t || window.event).target = t.target || t.srcElement),
                    n(t);
                });
          }
          function R(t, e, n, o) {
            t.removeEventListener
              ? t.removeEventListener(e, n, o)
              : t.detachEvent(`on${e}`, n);
          }
          function z(t) {
            return document.getElementById(t);
          }
          function D(t) {
            return document.createElement(t);
          }
          return (
            [].forEach ||
              (Array.prototype.forEach = function(t, e) {
                for (let n = 0; n < this.length; n++)
                  t.call(e, this[n], n, this);
              }),
            [].filter ||
              (Array.prototype.filter = function(t, e, n, o, i) {
                for (n = this, o = [], i = 0; i < n.length; i++)
                  t.call(e, n[i], i, n) && o.push(n[i]);
                return o;
              }),
            {
              run(a, s) {
                let r, u, c, d, f, b;
                return (
                  (l.transforms =
                    void 0 !== (r = D("div")).style.perspective ||
                    void 0 !== r.style.webkitPerspective),
                  (l.svg = (((u = D("div")).innerHTML = "<svg/>"),
                  (u.firstChild && u.firstChild.namespaceURI) ===
                    "http://www.w3.org/2000/svg")),
                  (l.passiveEvents = (function() {
                    let t = !1;
                    try {
                      const e = Object.defineProperty({}, "passive", {
                        get() {
                          t = !0;
                        },
                      });
                      window.addEventListener("test", null, e);
                    } catch (t) {}
                    return t;
                  })()),
                  (function() {
                    if ((t = z("baguetteBox-overlay")))
                      return (
                        (e = z("baguetteBox-slider")),
                        (n = z("previous-button")),
                        (o = z("next-button")),
                        void (i = z("close-button"))
                      );
                    let a;
                    (t = D("div")).setAttribute("role", "dialog"),
                      (t.id = "baguetteBox-overlay"),
                      document.getElementsByTagName("body")[0].appendChild(t),
                      ((e = D("div")).id = "baguetteBox-slider"),
                      t.appendChild(e),
                      (n = D("button")).setAttribute("type", "button"),
                      (n.id = "previous-button"),
                      n.setAttribute("aria-label", "Previous"),
                      (n.innerHTML = l.svg
                        ? '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>'
                        : "&lt;"),
                      t.appendChild(n),
                      (o = D("button")).setAttribute("type", "button"),
                      (o.id = "next-button"),
                      o.setAttribute("aria-label", "Next"),
                      (o.innerHTML = l.svg
                        ? '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>'
                        : "&gt;"),
                      t.appendChild(o),
                      (i = D("button")).setAttribute("type", "button"),
                      (i.id = "close-button"),
                      i.setAttribute("aria-label", "Close"),
                      (i.innerHTML = l.svg
                        ? '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>'
                        : "&times;"),
                      t.appendChild(i),
                      (n.className = o.className = i.className =
                        "baguetteBox-button"),
                      (a = l.passiveEvents ? { passive: !0 } : null),
                      O(t, "click", v),
                      O(n, "click", h),
                      O(o, "click", y),
                      O(i, "click", w),
                      O(e, "contextmenu", E),
                      O(t, "touchstart", k, a),
                      O(t, "touchmove", x, a),
                      O(t, "touchend", C),
                      O(document, "focus", B, !0);
                  })(),
                  T(a),
                  (c = a),
                  (d = s),
                  (f = document.querySelectorAll(c)),
                  (b = { galleries: [], nodeList: f }),
                  (p[c] = b),
                  [].forEach.call(f, t => {
                    d && d.filter && (g = d.filter);
                    let e = [];
                    if (
                      ((e =
                        t.tagName === "A" ? [t] : t.getElementsByTagName("a")),
                      (e = [].filter.call(e, function(t) {
                          if (-1 === t.className.indexOf(d && d.ignoreClass))
                            return g.test(t.href);
                        })).length !==
                        0)
                    ) {
                      let n = [];
                      [].forEach.call(e, (t, e) => {
                        var o = function(t) {
                            t.preventDefault
                              ? t.preventDefault()
                              : (t.returnValue = !1),
                              L(n, d),
                              A(e);
                          },
                          i = { eventHandler: o, imageElement: t };
                        O(t, "click", o), n.push(i);
                      }),
                        b.galleries.push(n);
                    }
                  }),
                  b.galleries
                );
              },
              show: Y,
              showNext: H,
              showPrevious: I,
              hide: S,
              destroy() {
                let a;
                (a = l.passiveEvents ? { passive: !0 } : null),
                  R(t, "click", v),
                  R(n, "click", h),
                  R(o, "click", y),
                  R(i, "click", w),
                  R(e, "contextmenu", E),
                  R(t, "touchstart", k, a),
                  R(t, "touchmove", x, a),
                  R(t, "touchend", C),
                  R(document, "focus", B, !0),
                  (function() {
                    for (const t in p) p.hasOwnProperty(t) && T(t);
                  })(),
                  R(document, "keydown", N),
                  document
                    .getElementsByTagName("body")[0]
                    .removeChild(
                      document.getElementById("baguetteBox-overlay"),
                    ),
                  (p = {}),
                  (r = []),
                  (u = 0);
              },
            }
          );
        });
      },
      {},
    ],
    51: [function(require, module, exports) {}, {}],
    22: [
      function(require, module, exports) {
        let e = require("jquery"),
          r = n(e),
          t = require("popper.js"),
          a = n(t),
          s = require("bootstrap"),
          u = n(s),
          i = require("baguettebox.js"),
          l = n(i);
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        require("./scss/main.scss"),
          l.default.run(".grid-gallery", { animation: "slideIn" }),
          (0, r.default)(document).ready(() => {
            (0, r.default)("#sidebarCollapse").on("click", function() {
              (0, r.default)("#sidebar").toggleClass("active"),
                (0, r.default)(this).toggleClass("active");
            });
          });
      },
      {
        jquery: 53,
        "popper.js": 54,
        bootstrap: 56,
        "baguettebox.js": 55,
        "./scss/main.scss": 51,
      },
    ],
  },
  {},
  [22],
  null,
);
// # sourceMappingURL=photo-albums-arch.744d5ae2.map
