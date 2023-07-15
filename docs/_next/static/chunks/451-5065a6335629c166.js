(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [451],
  {
    2497: function (e, t, r) {
      'use strict';
      r.d(t, {
        ZP: function () {
          return y;
        },
      });
      var n = r(9624),
        i = r(6441),
        o = r(4065),
        a = r(5472);
      function s(e) {
        let { styles: t, defaultTheme: r = {} } = e;
        return (0, a.jsx)(o.xB, { styles: 'function' == typeof t ? (e) => t(null == e || 0 === Object.keys(e).length ? r : e) : t });
      }
      var u = r(3646),
        c = function ({ styles: e, themeId: t, defaultTheme: r = {} }) {
          let n = (0, u.Z)(r),
            i = 'function' == typeof e ? e((t && n[t]) || n) : e;
          return (0, a.jsx)(s, { styles: i });
        },
        l = r(3483),
        f = r(9916),
        p = function (e) {
          return (0, a.jsx)(c, { ...e, defaultTheme: l.Z, themeId: f.Z });
        };
      let h = (e, t) => ({
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          boxSizing: 'border-box',
          WebkitTextSizeAdjust: '100%',
          ...(t && !e.vars && { colorScheme: e.palette.mode }),
        }),
        d = (e) => ({
          color: (e.vars || e).palette.text.primary,
          ...e.typography.body1,
          backgroundColor: (e.vars || e).palette.background.default,
          '@media print': { backgroundColor: (e.vars || e).palette.common.white },
        }),
        v = (e, t = !1) => {
          var r, n;
          let i = {};
          t &&
            e.colorSchemes &&
            Object.entries(e.colorSchemes).forEach(([t, r]) => {
              var n;
              i[e.getColorSchemeSelector(t).replace(/\s*&/, '')] = { colorScheme: null == (n = r.palette) ? void 0 : n.mode };
            });
          let o = {
              html: h(e, t),
              '*, *::before, *::after': { boxSizing: 'inherit' },
              'strong, b': { fontWeight: e.typography.fontWeightBold },
              body: { margin: 0, ...d(e), '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default } },
              ...i,
            },
            a = null == (r = e.components) ? void 0 : null == (n = r.MuiCssBaseline) ? void 0 : n.styleOverrides;
          return a && (o = [o, a]), o;
        };
      var y = function (e) {
        let t = (0, i.Z)({ props: e, name: 'MuiCssBaseline' }),
          { children: r, enableColorScheme: o = !1 } = t;
        return (0, a.jsxs)(n.Fragment, { children: [(0, a.jsx)(p, { styles: (e) => v(e, o) }), r] });
      };
    },
    2007: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var n = r(9624);
      let i = n.createContext(null);
      function o() {
        let e = n.useContext(i);
        return e;
      }
      let a = 'function' == typeof Symbol && Symbol.for;
      var s = a ? Symbol.for('mui.nested') : '__THEME_NESTED__',
        u = r(5472),
        c = function (e) {
          let { children: t, theme: r } = e,
            a = o(),
            c = n.useMemo(() => {
              let e =
                null === a
                  ? r
                  : (function (e, t) {
                      if ('function' == typeof t) {
                        let r = t(e);
                        return r;
                      }
                      return { ...e, ...t };
                    })(a, r);
              return null != e && (e[s] = null !== a), e;
            }, [r, a]);
          return (0, u.jsx)(i.Provider, { value: c, children: t });
        },
        l = r(4264),
        f = r(2713);
      let p = {};
      function h(e, t, r, i = !1) {
        return n.useMemo(() => {
          let n = (e && t[e]) || t;
          if ('function' == typeof r) {
            let o = r(n),
              a = e ? { ...t, [e]: o } : o;
            return i ? () => a : a;
          }
          return e ? { ...t, [e]: r } : { ...t, ...r };
        }, [e, t, r, i]);
      }
      var d = function (e) {
          let { children: t, theme: r, themeId: n } = e,
            i = (0, f.Z)(p),
            a = o() || p,
            s = h(n, i, r),
            d = h(n, a, r, !0);
          return (0, u.jsx)(c, { theme: d, children: (0, u.jsx)(l.T.Provider, { value: s, children: t }) });
        },
        v = r(9916);
      function y({ theme: e, ...t }) {
        let r = e[v.Z];
        return (0, u.jsx)(d, { ...t, themeId: r ? v.Z : void 0, theme: r || e });
      }
    },
    9882: function (e) {
      e.exports = { style: { fontFamily: "'__fonts_2ba283', '__fonts_Fallback_2ba283'" }, className: '__className_2ba283' };
    },
    8364: function (e, t, r) {
      'use strict';
      r.d(t, {
        g7: function () {
          return c;
        },
      });
      var n = null,
        i = {},
        o = 1;
      function a(e) {
        try {
          return e();
        } catch (e) {}
      }
      var s = '@wry/context:Slot',
        u =
          a(function () {
            return globalThis;
          }) ||
          a(function () {
            return r.g;
          }) ||
          Object.create(null),
        c =
          u[s] ||
          Array[s] ||
          (function (e) {
            try {
              Object.defineProperty(u, s, { value: e, enumerable: !1, writable: !1, configurable: !0 });
            } finally {
              return e;
            }
          })(
            (function () {
              function e() {
                this.id = ['slot', o++, Date.now(), Math.random().toString(36).slice(2)].join(':');
              }
              return (
                (e.prototype.hasValue = function () {
                  for (var e = n; e; e = e.parent)
                    if (this.id in e.slots) {
                      var t = e.slots[this.id];
                      if (t === i) break;
                      return e !== n && (n.slots[this.id] = t), !0;
                    }
                  return n && (n.slots[this.id] = i), !1;
                }),
                (e.prototype.getValue = function () {
                  if (this.hasValue()) return n.slots[this.id];
                }),
                (e.prototype.withValue = function (e, t, r, i) {
                  var o,
                    a = (((o = { __proto__: null })[this.id] = e), o),
                    s = n;
                  n = { parent: s, slots: a };
                  try {
                    return t.apply(i, r);
                  } finally {
                    n = s;
                  }
                }),
                (e.bind = function (e) {
                  var t = n;
                  return function () {
                    var r = n;
                    try {
                      return (n = t), e.apply(this, arguments);
                    } finally {
                      n = r;
                    }
                  };
                }),
                (e.noContext = function (e, t, r) {
                  if (!n) return e.apply(r, t);
                  var i = n;
                  try {
                    return (n = null), e.apply(r, t);
                  } finally {
                    n = i;
                  }
                }),
                e
              );
            })()
          );
      c.bind, c.noContext;
    },
    9826: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return s;
        },
      });
      var n = function () {
          return Object.create(null);
        },
        i = Array.prototype,
        o = i.forEach,
        a = i.slice,
        s = (function () {
          function e(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = n), (this.weakness = e), (this.makeData = t);
          }
          return (
            (e.prototype.lookup = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              return this.lookupArray(e);
            }),
            (e.prototype.lookupArray = function (e) {
              var t = this;
              return (
                o.call(e, function (e) {
                  return (t = t.getChildTrie(e));
                }),
                t.data || (t.data = this.makeData(a.call(e)))
              );
            }),
            (e.prototype.getChildTrie = function (t) {
              var r =
                  this.weakness &&
                  (function (e) {
                    switch (typeof e) {
                      case 'object':
                        if (null === e) break;
                      case 'function':
                        return !0;
                    }
                    return !1;
                  })(t)
                    ? this.weak || (this.weak = new WeakMap())
                    : this.strong || (this.strong = new Map()),
                n = r.get(t);
              return n || r.set(t, (n = new e(this.weakness, this.makeData))), n;
            }),
            e
          );
        })();
    },
    2850: function (e, t, r) {
      'use strict';
      r.d(t, {
        dP: function () {
          return D;
        },
        re: function () {
          return x;
        },
      });
      var n,
        i = r(9826),
        o = r(8364);
      function a() {}
      var s = (function () {
          function e(e, t) {
            void 0 === e && (e = 1 / 0), void 0 === t && (t = a), (this.max = e), (this.dispose = t), (this.map = new Map()), (this.newest = null), (this.oldest = null);
          }
          return (
            (e.prototype.has = function (e) {
              return this.map.has(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getNode(e);
              return t && t.value;
            }),
            (e.prototype.getNode = function (e) {
              var t = this.map.get(e);
              if (t && t !== this.newest) {
                var r = t.older,
                  n = t.newer;
                n && (n.older = r), r && (r.newer = n), (t.older = this.newest), (t.older.newer = t), (t.newer = null), (this.newest = t), t === this.oldest && (this.oldest = n);
              }
              return t;
            }),
            (e.prototype.set = function (e, t) {
              var r = this.getNode(e);
              return r
                ? (r.value = t)
                : ((r = { key: e, value: t, newer: null, older: this.newest }),
                  this.newest && (this.newest.newer = r),
                  (this.newest = r),
                  (this.oldest = this.oldest || r),
                  this.map.set(e, r),
                  r.value);
            }),
            (e.prototype.clean = function () {
              for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key);
            }),
            (e.prototype.delete = function (e) {
              var t = this.map.get(e);
              return (
                !!t &&
                (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
              );
            }),
            e
          );
        })(),
        u = new o.g7(),
        c = Object.prototype.hasOwnProperty,
        l =
          void 0 === (n = Array.from)
            ? function (e) {
                var t = [];
                return (
                  e.forEach(function (e) {
                    return t.push(e);
                  }),
                  t
                );
              }
            : n;
      function f(e) {
        var t = e.unsubscribe;
        'function' == typeof t && ((e.unsubscribe = void 0), t());
      }
      var p = [];
      function h(e, t) {
        if (!e) throw Error(t || 'assertion failure');
      }
      function d(e) {
        switch (e.length) {
          case 0:
            throw Error('unknown value');
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      var v = (function () {
        function e(t) {
          (this.fn = t),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++e.count;
        }
        return (
          (e.prototype.peek = function () {
            if (1 === this.value.length && !b(this)) return y(this), this.value[0];
          }),
          (e.prototype.recompute = function (e) {
            var t;
            return (
              h(!this.recomputing, 'already recomputing'),
              y(this),
              b(this) &&
                (O(this),
                u.withValue(this, m, [this, e]),
                (function (e, t) {
                  if ('function' == typeof e.subscribe)
                    try {
                      f(e), (e.unsubscribe = e.subscribe.apply(null, t));
                    } catch (t) {
                      return e.setDirty(), !1;
                    }
                  return !0;
                })(this, e) && ((this.dirty = !1), b(this) || ((t = this), g(t, k)))),
              d(this.value)
            );
          }),
          (e.prototype.setDirty = function () {
            this.dirty || ((this.dirty = !0), (this.value.length = 0), g(this, _), f(this));
          }),
          (e.prototype.dispose = function () {
            var e = this;
            this.setDirty(),
              O(this),
              g(this, function (t, r) {
                t.setDirty(), E(t, e);
              });
          }),
          (e.prototype.forget = function () {
            this.dispose();
          }),
          (e.prototype.dependOn = function (e) {
            e.add(this), this.deps || (this.deps = p.pop() || new Set()), this.deps.add(e);
          }),
          (e.prototype.forgetDeps = function () {
            var e = this;
            this.deps &&
              (l(this.deps).forEach(function (t) {
                return t.delete(e);
              }),
              this.deps.clear(),
              p.push(this.deps),
              (this.deps = null));
          }),
          (e.count = 0),
          e
        );
      })();
      function y(e) {
        var t = u.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), b(e) ? _(t, e) : k(t, e), t;
      }
      function m(e, t) {
        (e.recomputing = !0), (e.value.length = 0);
        try {
          e.value[0] = e.fn.apply(null, t);
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function b(e) {
        return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
      }
      function g(e, t) {
        var r = e.parents.size;
        if (r) for (var n = l(e.parents), i = 0; i < r; ++i) t(n[i], e);
      }
      function _(e, t) {
        h(e.childValues.has(t)), h(b(t));
        var r = !b(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = p.pop() || new Set();
        e.dirtyChildren.add(t), r && g(e, _);
      }
      function k(e, t) {
        h(e.childValues.has(t)), h(!b(t));
        var r,
          n,
          i = e.childValues.get(t);
        0 === i.length ? e.childValues.set(t, t.value.slice(0)) : ((r = t.value), ((n = i.length) > 0 && n === r.length && i[n - 1] === r[n - 1]) || e.setDirty()), w(e, t), b(e) || g(e, k);
      }
      function w(e, t) {
        var r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (p.length < 100 && p.push(r), (e.dirtyChildren = null)));
      }
      function O(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach(function (t, r) {
            E(e, r);
          }),
          e.forgetDeps(),
          h(null === e.dirtyChildren);
      }
      function E(e, t) {
        t.parents.delete(e), e.childValues.delete(t), w(e, t);
      }
      var S = { setDirty: !0, dispose: !0, forget: !0 };
      function D(e) {
        var t = new Map(),
          r = e && e.subscribe;
        function n(e) {
          var n = u.getValue();
          if (n) {
            var i = t.get(e);
            i || t.set(e, (i = new Set())), n.dependOn(i), 'function' == typeof r && (f(i), (i.unsubscribe = r(e)));
          }
        }
        return (
          (n.dirty = function (e, r) {
            var n = t.get(e);
            if (n) {
              var i = r && c.call(S, r) ? r : 'setDirty';
              l(n).forEach(function (e) {
                return e[i]();
              }),
                t.delete(e),
                f(n);
            }
          }),
          n
        );
      }
      function T() {
        var e = new i.B('function' == typeof WeakMap);
        return function () {
          return e.lookupArray(arguments);
        };
      }
      T();
      var I = new Set();
      function x(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = new s(t.max || 65536, function (e) {
            return e.dispose();
          }),
          n = t.keyArgs,
          i = t.makeCacheKey || T(),
          o = function () {
            var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var a = r.get(o);
            a ||
              (r.set(o, (a = new v(e))),
              (a.subscribe = t.subscribe),
              (a.forget = function () {
                return r.delete(o);
              }));
            var s = a.recompute(Array.prototype.slice.call(arguments));
            return (
              r.set(o, a),
              I.add(r),
              u.hasValue() ||
                (I.forEach(function (e) {
                  return e.clean();
                }),
                I.clear()),
              s
            );
          };
        function a(e) {
          var t = r.get(e);
          t && t.setDirty();
        }
        function c(e) {
          var t = r.get(e);
          if (t) return t.peek();
        }
        function l(e) {
          return r.delete(e);
        }
        return (
          Object.defineProperty(o, 'size', {
            get: function () {
              return r.map.size;
            },
            configurable: !1,
            enumerable: !1,
          }),
          (o.dirtyKey = a),
          (o.dirty = function () {
            a(i.apply(null, arguments));
          }),
          (o.peekKey = c),
          (o.peek = function () {
            return c(i.apply(null, arguments));
          }),
          (o.forgetKey = l),
          (o.forget = function () {
            return l(i.apply(null, arguments));
          }),
          (o.makeCacheKey = i),
          (o.getKey = n
            ? function () {
                return i.apply(null, n.apply(null, arguments));
              }
            : i),
          Object.freeze(o)
        );
      }
    },
    1312: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return eb;
        },
      });
      var n,
        i,
        o = r(7045),
        a = r(6772),
        s = r(2850),
        u = r(7471),
        c = r(2500),
        l = (function () {
          function e() {
            this.getFragmentDoc = (0, s.re)(c.Yk);
          }
          return (
            (e.prototype.batch = function (e) {
              var t,
                r = this,
                n = 'string' == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
              return (
                this.performTransaction(function () {
                  return (t = e.update(r));
                }, n),
                t
              );
            }),
            (e.prototype.recordOptimisticTransaction = function (e, t) {
              this.performTransaction(e, t);
            }),
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.identify = function (e) {}),
            (e.prototype.gc = function () {
              return [];
            }),
            (e.prototype.modify = function (e) {
              return !1;
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !!e.optimistic), this.read((0, o.pi)((0, o.pi)({}, e), { rootId: e.id || 'ROOT_QUERY', optimistic: t }));
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !!e.optimistic), this.read((0, o.pi)((0, o.pi)({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }));
            }),
            (e.prototype.writeQuery = function (e) {
              var t = e.id,
                r = e.data,
                n = (0, o._T)(e, ['id', 'data']);
              return this.write(Object.assign(n, { dataId: t || 'ROOT_QUERY', result: r }));
            }),
            (e.prototype.writeFragment = function (e) {
              var t = e.id,
                r = e.data,
                n = e.fragment,
                i = e.fragmentName,
                a = (0, o._T)(e, ['id', 'data', 'fragment', 'fragmentName']);
              return this.write(Object.assign(a, { query: this.getFragmentDoc(n, i), dataId: t, result: r }));
            }),
            (e.prototype.updateQuery = function (e, t) {
              return this.batch({
                update: function (r) {
                  var n = r.readQuery(e),
                    i = t(n);
                  return null == i ? n : (r.writeQuery((0, o.pi)((0, o.pi)({}, e), { data: i })), i);
                },
              });
            }),
            (e.prototype.updateFragment = function (e, t) {
              return this.batch({
                update: function (r) {
                  var n = r.readFragment(e),
                    i = t(n);
                  return null == i ? n : (r.writeFragment((0, o.pi)((0, o.pi)({}, e), { data: i })), i);
                },
              });
            }),
            e
          );
        })(),
        f = (function (e) {
          function t(r, n, i, o) {
            var a,
              s = e.call(this, r) || this;
            if (((s.message = r), (s.path = n), (s.query = i), (s.variables = o), Array.isArray(s.path))) {
              s.missing = s.message;
              for (var u = s.path.length - 1; u >= 0; --u) s.missing = (((a = {})[s.path[u]] = s.missing), a);
            } else s.missing = s.path;
            return (s.__proto__ = t.prototype), s;
          }
          return (0, o.ZT)(t, e), t;
        })(Error),
        p = r(8745),
        h = r(6721),
        d = r(6955),
        v = r(1066),
        y = r(6270),
        m = r(6537),
        b = r(1317),
        g = r(1287),
        _ = r(1744),
        k = r(7919),
        w = r(9826),
        O = r(6388),
        E = Object.prototype.hasOwnProperty;
      function S(e) {
        return null == e;
      }
      function D(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ('string' == typeof r && (t && (t.keyObject = S(n) ? (S(i) ? void 0 : { _id: i }) : { id: n }), S(n) && !S(i) && (n = i), !S(n)))
          return ''.concat(r, ':').concat('number' == typeof n || 'string' == typeof n ? n : JSON.stringify(n));
      }
      var T = { dataIdFromObject: D, addTypename: !0, resultCaching: !0, canonizeResults: !1 };
      function I(e) {
        var t = e.canonizeResults;
        return void 0 === t ? T.canonizeResults : t;
      }
      var x = /^[_a-z][_0-9a-z]*/i;
      function F(e) {
        var t = e.match(x);
        return t ? t[0] : e;
      }
      function N(e) {
        return (0, k.s)(e) && !(0, p.Yk)(e) && !(0, O.k)(e);
      }
      function j(e, t) {
        var r = (0, c.F)((0, m.kU)(e));
        return {
          fragmentMap: r,
          lookupFragment: function (e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null;
          },
        };
      }
      var q = Object.create(null),
        R = function () {
          return q;
        },
        P = Object.create(null),
        V = (function () {
          function e(e, t) {
            var r = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return (0, _.J)((0, p.Yk)(e) ? r.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return (0, p.Yk)(e) ? r.has(e.__ref) : 'object' == typeof e;
              }),
              (this.toReference = function (e, t) {
                if ('string' == typeof e) return (0, p.kQ)(e);
                if ((0, p.Yk)(e)) return e;
                var n = r.policies.identify(e)[0];
                if (n) {
                  var i = (0, p.kQ)(n);
                  return t && r.merge(n, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return (0, o.pi)({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), E.call(this.data, e))) {
                var r = this.data[e];
                if (r && E.call(r, t)) return r[t];
              }
              return '__typename' === t && E.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Q ? this.parent.get(e, t) : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (t && this.group.depend(e, '__exists'), E.call(this.data, e))
                ? this.data[e]
                : this instanceof Q
                ? this.parent.lookup(e, t)
                : this.policies.rootTypenamesById[e]
                ? Object.create(null)
                : void 0;
            }),
            (e.prototype.merge = function (e, t) {
              var r,
                n = this;
              (0, p.Yk)(e) && (e = e.__ref), (0, p.Yk)(t) && (t = t.__ref);
              var i = 'string' == typeof e ? this.lookup((r = e)) : e,
                o = 'string' == typeof t ? this.lookup((r = t)) : t;
              if (o) {
                __DEV__ ? (0, a.kG)('string' == typeof r, 'store.merge expects a string ID') : (0, a.kG)('string' == typeof r, 1);
                var s = new b.w0(L).merge(i, o);
                if (((this.data[r] = s), s !== i && (delete this.refs[r], this.group.caching))) {
                  var u = Object.create(null);
                  i || (u.__exists = 1),
                    Object.keys(o).forEach(function (e) {
                      if (!i || i[e] !== s[e]) {
                        u[e] = 1;
                        var t = F(e);
                        t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof Q || delete s[e];
                      }
                    }),
                    u.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === s.__typename && delete u.__typename,
                    Object.keys(u).forEach(function (e) {
                      return n.group.dirty(r, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var r = this,
                n = this.lookup(e);
              if (n) {
                var i = Object.create(null),
                  a = !1,
                  s = !0,
                  u = {
                    DELETE: q,
                    INVALIDATE: P,
                    isReference: p.Yk,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, n) {
                      return r.policies.readField('string' == typeof t ? { fieldName: t, from: n || (0, p.kQ)(e) } : t, { store: r });
                    },
                  };
                if (
                  (Object.keys(n).forEach(function (c) {
                    var l = F(c),
                      f = n[c];
                    if (void 0 !== f) {
                      var p = 'function' == typeof t ? t : t[c] || t[l];
                      if (p) {
                        var h = p === R ? q : p((0, _.J)(f), (0, o.pi)((0, o.pi)({}, u), { fieldName: l, storeFieldName: c, storage: r.getStorage(e, c) }));
                        h === P ? r.group.dirty(e, c) : (h === q && (h = void 0), h !== f && ((i[c] = h), (a = !0), (f = h)));
                      }
                      void 0 !== f && (s = !1);
                    }
                  }),
                  a)
                )
                  return this.merge(e, i), s && (this instanceof Q ? (this.data[e] = void 0) : delete this.data[e], this.group.dirty(e, '__exists')), !0;
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, r) {
              var n,
                i = this.lookup(e);
              if (i) {
                var o = this.getFieldValue(i, '__typename'),
                  a = t && r ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: r }) : t;
                return this.modify(e, a ? (((n = {})[a] = R), n) : R);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var r = !1;
              return (
                e.id &&
                  (E.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof Q && this !== t && (r = this.parent.evict(e, t) || r),
                  (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || '__exists')),
                r
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                r = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  E.call(e.policies.rootTypenamesById, t) || r.push(t);
                }),
                r.length && (t.__META = { extraRootIds: r.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (r) {
                  (e && E.call(e, r)) || t.delete(r);
                }),
                e)
              ) {
                var r = e.__META,
                  n = (0, o._T)(e, ['__META']);
                Object.keys(n).forEach(function (e) {
                  t.merge(e, n[e]);
                }),
                  r && r.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof Q ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                r = this.toObject();
              t.forEach(function (n) {
                E.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n]);
              });
              var n = Object.keys(r);
              if (n.length) {
                for (var i = this; i instanceof Q; ) i = i.parent;
                n.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return n;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!E.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  r = this.data[e];
                if (!r) return t;
                var n = new Set([r]);
                n.forEach(function (e) {
                  (0, p.Yk)(e) && (t[e.__ref] = !0),
                    (0, k.s)(e) &&
                      Object.keys(e).forEach(function (t) {
                        var r = e[t];
                        (0, k.s)(r) && n.add(r);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        C = (function () {
          function e(e, t) {
            void 0 === t && (t = null), (this.caching = e), (this.parent = t), (this.d = null), this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? (0, s.dP)() : null), (this.keyMaker = new w.B(v.mr));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d(t + '#' + e);
                var r = F(t);
                r !== t && this.d(r + '#' + e), this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d && this.d.dirty(t + '#' + e, '__exists' === t ? 'forget' : 'setDirty');
            }),
            e
          );
        })();
      function M(e, t) {
        G(e) && e.group.depend(t, '__exists');
      }
      (i = (function (e) {
        function t(t) {
          var r = t.policies,
            n = t.resultCaching,
            i = t.seed,
            o = e.call(this, r, new C(void 0 === n || n)) || this;
          return (o.stump = new A(o)), (o.storageTrie = new w.B(v.mr)), i && o.replace(i), o;
        }
        return (
          (0, o.ZT)(t, e),
          (t.prototype.addLayer = function (e, t) {
            return this.stump.addLayer(e, t);
          }),
          (t.prototype.removeLayer = function () {
            return this;
          }),
          (t.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
          }),
          t
        );
      })((n = V || (V = {})))),
        (n.Root = i);
      var Q = (function (e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return (o.id = t), (o.parent = r), (o.replay = n), (o.group = i), n(o), o;
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.addLayer = function (e, r) {
              return new t(e, this, r, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                r = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var n = t.data[e],
                        i = r.lookup(e);
                      i
                        ? n
                          ? n !== i &&
                            Object.keys(n).forEach(function (r) {
                              (0, u.D)(n[r], i[r]) || t.group.dirty(e, r);
                            })
                          : (t.group.dirty(e, '__exists'),
                            Object.keys(i).forEach(function (r) {
                              t.group.dirty(e, r);
                            }))
                        : t.delete(e);
                    }),
                  r)
                : r === this.parent
                ? this
                : r.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return (0, o.pi)((0, o.pi)({}, this.parent.toObject()), this.data);
            }),
            (t.prototype.findChildRefIds = function (t) {
              var r = this.parent.findChildRefIds(t);
              return E.call(this.data, t) ? (0, o.pi)((0, o.pi)({}, r), e.prototype.findChildRefIds.call(this, t)) : r;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(V),
        A = (function (e) {
          function t(t) {
            return e.call(this, 'EntityStore.Stump', t, function () {}, new C(t.group.caching, t.group)) || this;
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function () {
              return this.parent.merge.apply(this.parent, arguments);
            }),
            t
          );
        })(Q);
      function L(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, u.D)(n, i) ? n : i;
      }
      function G(e) {
        return !!(e instanceof V && e.group.caching);
      }
      var B = r(5025);
      function z(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults];
      }
      var U = (function () {
          function e(e) {
            var t = this;
            (this.knownResults = new (v.mr ? WeakMap : Map)()),
              (this.config = (0, y.o)(e, { addTypename: !1 !== e.addTypename, canonizeResults: I(e) })),
              (this.canon = e.canon || new B.h()),
              (this.executeSelectionSet = (0, s.re)(
                function (e) {
                  var r,
                    n = e.context.canonizeResults,
                    i = z(e);
                  i[3] = !n;
                  var a = (r = t.executeSelectionSet).peek.apply(r, i);
                  return a ? (n ? (0, o.pi)((0, o.pi)({}, a), { result: t.canon.admit(a.result) }) : a) : (M(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
                },
                {
                  max: this.config.resultCacheMaxSize,
                  keyArgs: z,
                  makeCacheKey: function (e, t, r, n) {
                    if (G(r.store)) return r.store.makeCacheKey(e, (0, p.Yk)(t) ? t.__ref : t, r.varString, n);
                  },
                }
              )),
              (this.executeSubSelectedArray = (0, s.re)(
                function (e) {
                  return M(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
                },
                {
                  max: this.config.resultCacheMaxSize,
                  makeCacheKey: function (e) {
                    var t = e.field,
                      r = e.array,
                      n = e.context;
                    if (G(n.store)) return n.store.makeCacheKey(t, r, n.varString);
                  },
                }
              ));
          }
          return (
            (e.prototype.resetCanon = function () {
              this.canon = new B.h();
            }),
            (e.prototype.diffQueryAgainstStore = function (e) {
              var t,
                r = e.store,
                n = e.query,
                i = e.rootId,
                a = e.variables,
                s = e.returnPartialData,
                u = e.canonizeResults,
                c = void 0 === u ? this.config.canonizeResults : u,
                l = this.config.cache.policies;
              a = (0, o.pi)((0, o.pi)({}, (0, m.O4)((0, m.iW)(n))), a);
              var h = (0, p.kQ)(void 0 === i ? 'ROOT_QUERY' : i),
                d = this.executeSelectionSet({
                  selectionSet: (0, m.p$)(n).selectionSet,
                  objectOrReference: h,
                  enclosingRef: h,
                  context: (0, o.pi)({ store: r, query: n, policies: l, variables: a, varString: (0, B.B)(a), canonizeResults: c }, j(n, this.config.fragments)),
                });
              if (
                d.missing &&
                ((t = [
                  new f(
                    (function (e) {
                      try {
                        JSON.stringify(e, function (e, t) {
                          if ('string' == typeof t) throw t;
                          return t;
                        });
                      } catch (e) {
                        return e;
                      }
                    })(d.missing),
                    d.missing,
                    n,
                    a
                  ),
                ]),
                !(void 0 === s || s))
              )
                throw t[0];
              return { result: d.result, complete: !t, missing: t };
            }),
            (e.prototype.isFresh = function (e, t, r, n) {
              if (G(n.store) && this.knownResults.get(e) === r) {
                var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
                if (i && e === i.result) return !0;
              }
              return !1;
            }),
            (e.prototype.execSelectionSetImpl = function (e) {
              var t,
                r = this,
                n = e.selectionSet,
                i = e.objectOrReference,
                o = e.enclosingRef,
                s = e.context;
              if ((0, p.Yk)(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref))
                return { result: this.canon.empty, missing: 'Dangling reference to missing '.concat(i.__ref, ' object') };
              var u = s.variables,
                l = s.policies,
                f = s.store.getFieldValue(i, '__typename'),
                v = [],
                y = new b.w0();
              function m(e, r) {
                var n;
                return e.missing && (t = y.merge(t, (((n = {})[r] = e.missing), n))), e.result;
              }
              this.config.addTypename && 'string' == typeof f && !l.rootIdsByTypename[f] && v.push({ __typename: f });
              var k = new Set(n.selections);
              k.forEach(function (e) {
                var n, b;
                if ((0, g.LZ)(e, u)) {
                  if ((0, p.My)(e)) {
                    var _ = l.readField({ fieldName: e.name.value, field: e, variables: s.variables, from: i }, s),
                      w = (0, p.u2)(e);
                    void 0 === _
                      ? h.Gw.added(e) ||
                        (t = y.merge(t, (((n = {})[w] = "Can't find field '".concat(e.name.value, "' on ").concat((0, p.Yk)(i) ? i.__ref + ' object' : 'object ' + JSON.stringify(i, null, 2))), n)))
                      : (0, O.k)(_)
                      ? (_ = m(r.executeSubSelectedArray({ field: e, array: _, enclosingRef: o, context: s }), w))
                      : e.selectionSet
                      ? null != _ && (_ = m(r.executeSelectionSet({ selectionSet: e.selectionSet, objectOrReference: _, enclosingRef: (0, p.Yk)(_) ? _ : o, context: s }), w))
                      : s.canonizeResults && (_ = r.canon.pass(_)),
                      void 0 !== _ && v.push((((b = {})[w] = _), b));
                  } else {
                    var E = (0, c.hi)(e, s.lookupFragment);
                    if (!E && e.kind === d.h.FRAGMENT_SPREAD) throw __DEV__ ? new a.ej('No fragment named '.concat(e.name.value)) : new a.ej(5);
                    E && l.fragmentMatches(E, f) && E.selectionSet.selections.forEach(k.add, k);
                  }
                }
              });
              var w = { result: (0, b.bw)(v), missing: t },
                E = s.canonizeResults ? this.canon.admit(w) : (0, _.J)(w);
              return E.result && this.knownResults.set(E.result, n), E;
            }),
            (e.prototype.execSubSelectedArrayImpl = function (e) {
              var t,
                r = this,
                n = e.field,
                i = e.array,
                o = e.enclosingRef,
                s = e.context,
                u = new b.w0();
              function c(e, r) {
                var n;
                return e.missing && (t = u.merge(t, (((n = {})[r] = e.missing), n))), e.result;
              }
              return (
                n.selectionSet && (i = i.filter(s.store.canRead)),
                (i = i.map(function (e, t) {
                  return null === e
                    ? null
                    : (0, O.k)(e)
                    ? c(r.executeSubSelectedArray({ field: n, array: e, enclosingRef: o, context: s }), t)
                    : n.selectionSet
                    ? c(r.executeSelectionSet({ selectionSet: n.selectionSet, objectOrReference: e, enclosingRef: (0, p.Yk)(e) ? e : o, context: s }), t)
                    : (__DEV__ &&
                        (function (e, t, r) {
                          if (!t.selectionSet) {
                            var n = new Set([r]);
                            n.forEach(function (r) {
                              (0, k.s)(r) &&
                                (__DEV__
                                  ? (0, a.kG)(
                                      !(0, p.Yk)(r),
                                      'Missing selection set for object of type '
                                        .concat((0, p.Yk)(r) ? e.get(r.__ref, '__typename') : r && r.__typename, ' returned for query field ')
                                        .concat(t.name.value)
                                    )
                                  : (0, a.kG)(!(0, p.Yk)(r), 6),
                                Object.values(r).forEach(n.add, n));
                            });
                          }
                        })(s.store, n, e),
                      e);
                })),
                { result: s.canonizeResults ? this.canon.admit(i) : i, missing: t }
              );
            }),
            e
          );
        })(),
        W = r(9161),
        Y = r(3142),
        J = r(8942),
        $ = Object.create(null);
      function Z(e) {
        var t = JSON.stringify(e);
        return $[t] || ($[t] = Object.create(null));
      }
      function K(e) {
        var t = Z(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, r) {
            var n = function (e, t) {
                return r.readField(t, e);
              },
              i = (r.keyObject = X(e, function (e) {
                var i = et(r.storeObject, e, n);
                return (
                  void 0 === i && t !== r.storeObject && E.call(t, e[0]) && (i = et(t, e, ee)),
                  __DEV__ ? (0, a.kG)(void 0 !== i, "Missing field '".concat(e.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(t))) : (0, a.kG)(void 0 !== i, 2),
                  i
                );
              }));
            return ''.concat(r.typename, ':').concat(JSON.stringify(i));
          })
        );
      }
      function H(e) {
        var t = Z(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, r) {
            var n = r.field,
              i = r.variables,
              o = r.fieldName,
              a = JSON.stringify(
                X(e, function (e) {
                  var r = e[0],
                    o = r.charAt(0);
                  if ('@' === o) {
                    if (n && (0, O.O)(n.directives)) {
                      var a = r.slice(1),
                        s = n.directives.find(function (e) {
                          return e.name.value === a;
                        }),
                        u = s && (0, p.NC)(s, i);
                      return u && et(u, e.slice(1));
                    }
                    return;
                  }
                  if ('$' === o) {
                    var c = r.slice(1);
                    if (i && E.call(i, c)) {
                      var l = e.slice(0);
                      return (l[0] = c), et(i, l);
                    }
                    return;
                  }
                  if (t) return et(t, e);
                })
              );
            return (t || '{}' !== a) && (o += ':' + a), o;
          })
        );
      }
      function X(e, t) {
        var r = new b.w0();
        return (function e(t) {
          var r = Z(t);
          if (!r.paths) {
            var n = (r.paths = []),
              i = [];
            t.forEach(function (r, o) {
              (0, O.k)(r)
                ? (e(r).forEach(function (e) {
                    return n.push(i.concat(e));
                  }),
                  (i.length = 0))
                : (i.push(r), (0, O.k)(t[o + 1]) || (n.push(i.slice(0)), (i.length = 0)));
            });
          }
          return r.paths;
        })(e).reduce(function (e, n) {
          var i,
            o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a) ((i = {})[n[a]] = o), (o = i);
            e = r.merge(e, o);
          }
          return e;
        }, Object.create(null));
      }
      function ee(e, t) {
        return e[t];
      }
      function et(e, t, r) {
        return (
          (r = r || ee),
          (function e(t) {
            return (0, k.s)(t)
              ? (0, O.k)(t)
                ? t.map(e)
                : X(Object.keys(t).sort(), function (e) {
                    return et(t, e);
                  })
              : t;
          })(
            t.reduce(function e(t, n) {
              return (0, O.k)(t)
                ? t.map(function (t) {
                    return e(t, n);
                  })
                : t && r(t, n);
            }, e)
          )
        );
      }
      function er(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, p.NC)(e.field, e.variables) : null;
      }
      p.PT.setStringify(B.B);
      var en = function () {},
        ei = function (e, t) {
          return t.fieldName;
        },
        eo = function (e, t, r) {
          return (0, r.mergeObjects)(e, t);
        },
        ea = function (e, t) {
          return t;
        },
        es = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = (0, o.pi)({ dataIdFromObject: D }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename('Query'),
              this.setRootTypename('Mutation'),
              this.setRootTypename('Subscription'),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var r,
                n,
                i = this,
                a = (t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename))) || e.__typename;
              if (a === this.rootTypenamesById.ROOT_QUERY) return ['ROOT_QUERY'];
              for (
                var s = (t && t.storeObject) || e,
                  u = (0, o.pi)((0, o.pi)({}, t), {
                    typename: a,
                    storeObject: s,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = ec(arguments, s);
                        return i.readField(e, { store: i.cache.data, variables: e.variables });
                      },
                  }),
                  c = a && this.getTypePolicy(a),
                  l = (c && c.keyFn) || this.config.dataIdFromObject;
                l;

              ) {
                var f = l(e, u);
                if ((0, O.k)(f)) l = K(f);
                else {
                  n = f;
                  break;
                }
              }
              return (n = n ? String(n) : void 0), u.keyObject ? [n, u.keyObject] : [n];
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (r) {
                var n = e[r],
                  i = n.queryType,
                  a = n.mutationType,
                  s = n.subscriptionType,
                  u = (0, o._T)(n, ['queryType', 'mutationType', 'subscriptionType']);
                i && t.setRootTypename('Query', r),
                  a && t.setRootTypename('Mutation', r),
                  s && t.setRootTypename('Subscription', r),
                  E.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : (t.toBeAdded[r] = [u]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var r = this,
                n = this.getTypePolicy(e),
                i = t.keyFields,
                o = t.fields;
              function a(e, t) {
                e.merge = 'function' == typeof t ? t : !0 === t ? eo : !1 === t ? ea : e.merge;
              }
              a(n, t.merge),
                (n.keyFn = !1 === i ? en : (0, O.k)(i) ? K(i) : 'function' == typeof i ? i : n.keyFn),
                o &&
                  Object.keys(o).forEach(function (t) {
                    var n = r.getFieldPolicy(e, t, !0),
                      i = o[t];
                    if ('function' == typeof i) n.read = i;
                    else {
                      var s = i.keyArgs,
                        u = i.read,
                        c = i.merge;
                      (n.keyFn = !1 === s ? ei : (0, O.k)(s) ? H(s) : 'function' == typeof s ? s : n.keyFn), 'function' == typeof u && (n.read = u), a(n, c);
                    }
                    n.read && n.merge && (n.keyFn = n.keyFn || ei);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var r = 'ROOT_' + e.toUpperCase(),
                n = this.rootTypenamesById[r];
              t !== n &&
                (__DEV__ ? (0, a.kG)(!n || n === e, 'Cannot change root '.concat(e, ' __typename more than once')) : (0, a.kG)(!n || n === e, 3),
                n && delete this.rootIdsByTypename[n],
                (this.rootIdsByTypename[t] = r),
                (this.rootTypenamesById[r] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (r) {
                  t.getSupertypeSet(r, !0),
                    e[r].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(r);
                      var n = e.match(x);
                      (n && n[0] === e) || t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!E.call(this.typePolicies, e)) {
                var r = (this.typePolicies[e] = Object.create(null));
                r.fields = Object.create(null);
                var n = this.supertypeMap.get(e);
                n &&
                  n.size &&
                  n.forEach(function (e) {
                    var n = t.getTypePolicy(e),
                      i = n.fields;
                    Object.assign(r, (0, o._T)(n, ['fields'])), Object.assign(r.fields, i);
                  });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (r) {
                    t.updateTypePolicy(e, r);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, r) {
              if (e) {
                var n = this.getTypePolicy(e).fields;
                return n[t] || (r && (n[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var r = this.supertypeMap.get(e);
              return !r && t && this.supertypeMap.set(e, (r = new Set())), r;
            }),
            (e.prototype.fragmentMatches = function (e, t, r, n) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var o = e.typeCondition.name.value;
              if (t === o) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (
                  var s = this.getSupertypeSet(t, !0),
                    u = [s],
                    c = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && 0 > u.indexOf(t) && u.push(t);
                    },
                    l = !!(r && this.fuzzySubtypes.size),
                    f = !1,
                    h = 0;
                  h < u.length;
                  ++h
                ) {
                  var d = u[h];
                  if (d.has(o)) return s.has(o) || (f && __DEV__ && a.kG.warn('Inferring subtype '.concat(t, ' of supertype ').concat(o)), s.add(o)), !0;
                  d.forEach(c),
                    l &&
                      h === u.length - 1 &&
                      (function e(t, r, n) {
                        return (
                          !!(0, k.s)(r) &&
                          ((0, O.k)(r)
                            ? r.every(function (r) {
                                return e(t, r, n);
                              })
                            : t.selections.every(function (t) {
                                if ((0, p.My)(t) && (0, g.LZ)(t, n)) {
                                  var i = (0, p.u2)(t);
                                  return E.call(r, i) && (!t.selectionSet || e(t.selectionSet, r[i], n));
                                }
                                return !0;
                              }))
                        );
                      })(e.selectionSet, r, n) &&
                      ((l = !1),
                      (f = !0),
                      this.fuzzySubtypes.forEach(function (e, r) {
                        var n = t.match(e);
                        n && n[0] === t && c(r);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return !!(r && r.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                r = e.typename,
                n = e.fieldName,
                i = this.getFieldPolicy(r, n, !1),
                o = i && i.keyFn;
              if (o && r)
                for (var a = { typename: r, fieldName: n, field: e.field || null, variables: e.variables }, s = er(e); o; ) {
                  var u = o(s, a);
                  if ((0, O.k)(u)) o = H(u);
                  else {
                    t = u || n;
                    break;
                  }
                }
              return (void 0 === t && (t = e.field ? (0, p.vf)(e.field, e.variables) : (0, p.PT)(n, er(e))), !1 === t) ? n : n === F(t) ? t : n + ':' + t;
            }),
            (e.prototype.readField = function (e, t) {
              var r = e.from;
              if (r && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var n = t.store.getFieldValue(r, '__typename');
                  n && (e.typename = n);
                }
                var i = this.getStoreFieldName(e),
                  o = F(i),
                  a = t.store.getFieldValue(r, i),
                  s = this.getFieldPolicy(e.typename, o, !1),
                  u = s && s.read;
                if (u) {
                  var c = eu(this, r, e, t, t.store.getStorage((0, p.Yk)(r) ? r.__ref : r, i));
                  return J.ab.withValue(this.cache, u, [a, c]);
                }
                return a;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return r && r.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, r) {
              var n = this.getFieldPolicy(e, t, !1),
                i = n && n.merge;
              return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, r, n, i) {
              var o = r.field,
                a = r.typename,
                s = r.merge;
              return s === eo
                ? el(n.store)(e, t)
                : s === ea
                ? t
                : (n.overwrite && (e = void 0), s(e, t, eu(this, void 0, { typename: a, fieldName: o.name.value, field: o, variables: n.variables }, n, i || Object.create(null))));
            }),
            e
          );
        })();
      function eu(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = F(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: er(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: p.Yk,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function () {
            return e.readField(ec(arguments, t, s), n);
          },
          mergeObjects: el(n.store),
        };
      }
      function ec(e, t, r) {
        var n,
          i,
          s,
          u = e[0],
          c = e[1],
          l = e.length;
        return (
          'string' == typeof u ? (s = { fieldName: u, from: l > 1 ? c : t }) : ((s = (0, o.pi)({}, u)), E.call(s, 'from') || (s.from = t)),
          __DEV__ &&
            void 0 === s.from &&
            __DEV__ &&
            a.kG.warn(
              "Undefined 'from' passed to readField with arguments ".concat(
                ((n = Array.from(e)),
                (i = (0, Y.X)('stringifyForDisplay')),
                JSON.stringify(n, function (e, t) {
                  return void 0 === t ? i : t;
                })
                  .split(JSON.stringify(i))
                  .join('<undefined>'))
              )
            ),
          void 0 === s.variables && (s.variables = r),
          s
        );
      }
      function el(e) {
        return function (t, r) {
          if ((0, O.k)(t) || (0, O.k)(r)) throw __DEV__ ? new a.ej('Cannot automatically merge arrays') : new a.ej(4);
          if ((0, k.s)(t) && (0, k.s)(r)) {
            var n = e.getFieldValue(t, '__typename'),
              i = e.getFieldValue(r, '__typename');
            if (n && i && n !== i) return r;
            if ((0, p.Yk)(t) && N(r)) return e.merge(t.__ref, r), t;
            if (N(t) && (0, p.Yk)(r)) return e.merge(t, r.__ref), r;
            if (N(t) && N(r)) return (0, o.pi)((0, o.pi)({}, t), r);
          }
          return r;
        };
      }
      function ef(e, t, r) {
        var n = ''.concat(t).concat(r),
          i = e.flavors.get(n);
        return i || e.flavors.set(n, (i = e.clientOnly === t && e.deferred === r ? e : (0, o.pi)((0, o.pi)({}, e), { clientOnly: t, deferred: r }))), i;
      }
      var ep = (function () {
          function e(e, t, r) {
            (this.cache = e), (this.reader = t), (this.fragments = r);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var r = this,
                n = t.query,
                i = t.result,
                s = t.dataId,
                c = t.variables,
                l = t.overwrite,
                f = (0, m.$H)(n),
                h = new b.w0();
              c = (0, o.pi)((0, o.pi)({}, (0, m.O4)(f)), c);
              var d = (0, o.pi)(
                  (0, o.pi)(
                    {
                      store: e,
                      written: Object.create(null),
                      merge: function (e, t) {
                        return h.merge(e, t);
                      },
                      variables: c,
                      varString: (0, B.B)(c),
                    },
                    j(n, this.fragments)
                  ),
                  { overwrite: !!l, incomingById: new Map(), clientOnly: !1, deferred: !1, flavors: new Map() }
                ),
                v = this.processSelectionSet({ result: i || Object.create(null), dataId: s, selectionSet: f.selectionSet, mergeTree: { map: new Map() }, context: d });
              if (!(0, p.Yk)(v)) throw __DEV__ ? new a.ej('Could not identify object '.concat(JSON.stringify(i))) : new a.ej(7);
              return (
                d.incomingById.forEach(function (t, n) {
                  var i = t.storeObject,
                    o = t.mergeTree,
                    s = t.fieldNodeSet,
                    c = (0, p.kQ)(n);
                  if (o && o.map.size) {
                    var l = r.applyMerges(o, c, i, d);
                    if ((0, p.Yk)(l)) return;
                    i = l;
                  }
                  if (__DEV__ && !d.overwrite) {
                    var f = Object.create(null);
                    s.forEach(function (e) {
                      e.selectionSet && (f[e.name.value] = !0);
                    });
                    var h = function (e) {
                      var t = o && o.map.get(e);
                      return !!(t && t.info && t.info.merge);
                    };
                    Object.keys(i).forEach(function (e) {
                      !0 !== f[F(e)] ||
                        h(e) ||
                        (function (e, t, r, n) {
                          var i = function (e) {
                              var t = n.getFieldValue(e, r);
                              return 'object' == typeof t && t;
                            },
                            o = i(e);
                          if (o) {
                            var s = i(t);
                            if (
                              !(
                                !s ||
                                (0, p.Yk)(o) ||
                                (0, u.D)(o, s) ||
                                Object.keys(o).every(function (e) {
                                  return void 0 !== n.getFieldValue(s, e);
                                })
                              )
                            ) {
                              var c = n.getFieldValue(e, '__typename') || n.getFieldValue(t, '__typename'),
                                l = F(r),
                                f = ''.concat(c, '.').concat(l);
                              if (!em.has(f)) {
                                em.add(f);
                                var h = [];
                                (0, O.k)(o) ||
                                  (0, O.k)(s) ||
                                  [o, s].forEach(function (e) {
                                    var t = n.getFieldValue(e, '__typename');
                                    'string' != typeof t || h.includes(t) || h.push(t);
                                  }),
                                  __DEV__ &&
                                    a.kG.warn(
                                      'Cache data may be lost when replacing the '
                                        .concat(l, ' field of a ')
                                        .concat(c, ' object.\n\nTo address this problem (which is not a bug in Apollo Client), ')
                                        .concat(
                                          h.length ? 'either ensure all objects of type ' + h.join(' and ') + ' have an ID or a custom merge function, or ' : '',
                                          'define a custom merge function for the '
                                        )
                                        .concat(f, ' field, so InMemoryCache can safely merge these objects:\n\n  existing: ')
                                        .concat(JSON.stringify(o).slice(0, 1e3), '\n  incoming: ')
                                        .concat(
                                          JSON.stringify(s).slice(0, 1e3),
                                          '\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n'
                                        )
                                    );
                              }
                            }
                          }
                        })(c, i, e, d.store);
                    });
                  }
                  e.merge(n, i);
                }),
                e.retain(v.__ref),
                v
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                r = e.dataId,
                n = e.result,
                i = e.selectionSet,
                s = e.context,
                u = e.mergeTree,
                c = this.cache.policies,
                l = Object.create(null),
                f = (r && c.rootTypenamesById[r]) || (0, p.qw)(n, i, s.fragmentMap) || (r && s.store.get(r, '__typename'));
              'string' == typeof f && (l.__typename = f);
              var d = function () {
                  var e = ec(arguments, l, s.variables);
                  if ((0, p.Yk)(e.from)) {
                    var t = s.incomingById.get(e.from.__ref);
                    if (t) {
                      var r = c.readField((0, o.pi)((0, o.pi)({}, e), { from: t.storeObject }), s);
                      if (void 0 !== r) return r;
                    }
                  }
                  return c.readField(e, s);
                },
                v = new Set();
              this.flattenFields(i, n, s, f).forEach(function (e, r) {
                var i,
                  o = n[(0, p.u2)(r)];
                if ((v.add(r), void 0 !== o)) {
                  var s = c.getStoreFieldName({ typename: f, fieldName: r.name.value, field: r, variables: e.variables }),
                    y = ed(u, s),
                    m = t.processFieldValue(o, r, r.selectionSet ? ef(e, !1, !1) : e, y),
                    b = void 0;
                  r.selectionSet && ((0, p.Yk)(m) || N(m)) && (b = d('__typename', m));
                  var g = c.getMergeFunction(f, r.name.value, b);
                  g ? (y.info = { field: r, typename: f, merge: g }) : ey(u, s), (l = e.merge(l, (((i = {})[s] = m), i)));
                } else
                  __DEV__ &&
                    !e.clientOnly &&
                    !e.deferred &&
                    !h.Gw.added(r) &&
                    !c.getReadFunction(f, r.name.value) &&
                    __DEV__ &&
                    a.kG.error(
                      "Missing field '"
                        .concat((0, p.u2)(r), "' while writing result ")
                        .concat(JSON.stringify(n, null, 2))
                        .substring(0, 1e3)
                    );
              });
              try {
                var y = c.identify(n, { typename: f, selectionSet: i, fragmentMap: s.fragmentMap, storeObject: l, readField: d }),
                  m = y[0],
                  b = y[1];
                (r = r || m), b && (l = s.merge(l, b));
              } catch (e) {
                if (!r) throw e;
              }
              if ('string' == typeof r) {
                var g = (0, p.kQ)(r),
                  _ = s.written[r] || (s.written[r] = []);
                if (_.indexOf(i) >= 0 || (_.push(i), this.reader && this.reader.isFresh(n, g, i, s))) return g;
                var k = s.incomingById.get(r);
                return (
                  k
                    ? ((k.storeObject = s.merge(k.storeObject, l)),
                      (k.mergeTree = (function e(t, r) {
                        if (t === r || !r || ev(r)) return t;
                        if (!t || ev(t)) return r;
                        var n = t.info && r.info ? (0, o.pi)((0, o.pi)({}, t.info), r.info) : t.info || r.info,
                          i = t.map.size && r.map.size,
                          a = { info: n, map: i ? new Map() : t.map.size ? t.map : r.map };
                        if (i) {
                          var s = new Set(r.map.keys());
                          t.map.forEach(function (t, n) {
                            a.map.set(n, e(t, r.map.get(n))), s.delete(n);
                          }),
                            s.forEach(function (n) {
                              a.map.set(n, e(r.map.get(n), t.map.get(n)));
                            });
                        }
                        return a;
                      })(k.mergeTree, u)),
                      v.forEach(function (e) {
                        return k.fieldNodeSet.add(e);
                      }))
                    : s.incomingById.set(r, { storeObject: l, mergeTree: ev(u) ? void 0 : u, fieldNodeSet: v }),
                  g
                );
              }
              return l;
            }),
            (e.prototype.processFieldValue = function (e, t, r, n) {
              var i = this;
              return t.selectionSet && null !== e
                ? (0, O.k)(e)
                  ? e.map(function (e, o) {
                      var a = i.processFieldValue(e, t, r, ed(n, o));
                      return ey(n, o), a;
                    })
                  : this.processSelectionSet({ result: e, selectionSet: t.selectionSet, context: r, mergeTree: n })
                : __DEV__
                ? (0, W.X)(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, r, n) {
              void 0 === n && (n = (0, p.qw)(t, e, r.fragmentMap));
              var i = new Map(),
                o = this.cache.policies,
                s = new w.B(!1);
              return (
                (function e(u, l) {
                  var f = s.lookup(u, l.clientOnly, l.deferred);
                  f.visited ||
                    ((f.visited = !0),
                    u.selections.forEach(function (s) {
                      if ((0, g.LZ)(s, r.variables)) {
                        var u = l.clientOnly,
                          f = l.deferred;
                        if (
                          (!(u && f) &&
                            (0, O.O)(s.directives) &&
                            s.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (('client' === t && (u = !0), 'defer' === t)) {
                                var n = (0, p.NC)(e, r.variables);
                                (n && !1 === n.if) || (f = !0);
                              }
                            }),
                          (0, p.My)(s))
                        ) {
                          var h = i.get(s);
                          h && ((u = u && h.clientOnly), (f = f && h.deferred)), i.set(s, ef(r, u, f));
                        } else {
                          var v = (0, c.hi)(s, r.lookupFragment);
                          if (!v && s.kind === d.h.FRAGMENT_SPREAD) throw __DEV__ ? new a.ej('No fragment named '.concat(s.name.value)) : new a.ej(8);
                          v && o.fragmentMatches(v, n, t, r.variables) && e(v.selectionSet, ef(r, u, f));
                        }
                      }
                    }));
                })(e, r),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, r, n, i) {
              var s = this;
              if (e.map.size && !(0, p.Yk)(r)) {
                var u,
                  c,
                  l = !(0, O.k)(r) && ((0, p.Yk)(t) || N(t)) ? t : void 0,
                  f = r;
                l && !i && (i = [(0, p.Yk)(l) ? l.__ref : l]);
                var h = function (e, t) {
                  return (0, O.k)(e) ? ('number' == typeof t ? e[t] : void 0) : n.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var r = h(l, t),
                    o = h(f, t);
                  if (void 0 !== o) {
                    i && i.push(t);
                    var u = s.applyMerges(e, r, o, n, i);
                    u !== o && (c = c || new Map()).set(t, u), i && (0, a.kG)(i.pop() === t);
                  }
                }),
                  c &&
                    ((r = (0, O.k)(f) ? f.slice(0) : (0, o.pi)({}, f)),
                    c.forEach(function (e, t) {
                      r[t] = e;
                    }));
              }
              return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, n, i && (u = n.store).getStorage.apply(u, i)) : r;
            }),
            e
          );
        })(),
        eh = [];
      function ed(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, eh.pop() || { map: new Map() }), r.get(t);
      }
      function ev(e) {
        return !e || !(e.info || e.map.size);
      }
      function ey(e, t) {
        var r = e.map,
          n = r.get(t);
        n && ev(n) && (eh.push(n), r.delete(t));
      }
      var em = new Set(),
        eb = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r,
              n = e.call(this) || this;
            return (
              (n.watches = new Set()),
              (n.typenameDocumentCache = new Map()),
              (n.makeVar = J.QS),
              (n.txCount = 0),
              (n.config = ((r = t), (0, y.o)(T, r))),
              (n.addTypename = !!n.config.addTypename),
              (n.policies = new es({ cache: n, dataIdFromObject: n.config.dataIdFromObject, possibleTypes: n.config.possibleTypes, typePolicies: n.config.typePolicies })),
              n.init(),
              n
            );
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new V.Root({ policies: this.policies, resultCaching: this.config.resultCaching }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                r = this.storeReader,
                n = this.config.fragments;
              (this.storeWriter = new ep(
                this,
                (this.storeReader = new U({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: I(this.config),
                  canon: e ? void 0 : r && r.canon,
                  fragments: n,
                })),
                n
              )),
                (this.maybeBroadcastWatch = (0, s.re)(
                  function (e, r) {
                    return t.broadcastWatch(e, r);
                  },
                  {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function (e) {
                      var r = e.optimistic ? t.optimisticData : t.data;
                      if (G(r)) {
                        var n = e.optimistic,
                          i = e.id,
                          o = e.variables;
                        return r.makeCacheKey(e.query, e.callback, (0, B.B)({ optimistic: n, id: i, variables: o }));
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(function (e) {
                  return e.resetCaching();
                });
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract();
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    (0, o.pi)((0, o.pi)({}, e), { store: e.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: void 0 !== t && t })
                  ).result || null
                );
              } catch (e) {
                if (e instanceof f) return null;
                throw e;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (E.call(e, 'id') && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || 'ROOT_QUERY', e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore((0, o.pi)((0, o.pi)({}, e), { store: e.optimistic ? this.optimisticData : this.data, rootId: e.id || 'ROOT_QUERY', config: this.config }));
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size || (0, J._v)(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && (0, J.li)(t), t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              B.B.reset();
              var t = this.optimisticData.gc();
              return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if ((0, p.Yk)(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (e) {
                __DEV__ && a.kG.warn(e);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (E.call(e, 'id')) return !1;
                e = (0, o.pi)((0, o.pi)({}, e), { id: 'ROOT_QUERY' });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                B.B.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    (0, J.li)(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData && ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                r = this,
                n = e.update,
                i = e.optimistic,
                a = void 0 === i || i,
                s = e.removeOptimistic,
                u = e.onWatchUpdated,
                c = function (e) {
                  var i = r.data,
                    o = r.optimisticData;
                  ++r.txCount, e && (r.data = r.optimisticData = e);
                  try {
                    return (t = n(r));
                  } finally {
                    --r.txCount, (r.data = i), (r.optimisticData = o);
                  }
                },
                l = new Set();
              return (
                u &&
                  !this.txCount &&
                  this.broadcastWatches(
                    (0, o.pi)((0, o.pi)({}, e), {
                      onWatchUpdated: function (e) {
                        return l.add(e), !1;
                      },
                    })
                  ),
                'string' == typeof a ? (this.optimisticData = this.optimisticData.addLayer(a, c)) : !1 === a ? c(this.data) : c(),
                'string' == typeof s && (this.optimisticData = this.optimisticData.removeLayer(s)),
                u && l.size
                  ? (this.broadcastWatches(
                      (0, o.pi)((0, o.pi)({}, e), {
                        onWatchUpdated: function (e, t) {
                          var r = u.call(this, e, t);
                          return !1 !== r && l.delete(e), r;
                        },
                      })
                    ),
                    l.size &&
                      l.forEach(function (e) {
                        return r.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              if (this.addTypename) {
                var t = this.typenameDocumentCache.get(e);
                return t || ((t = (0, h.Gw)(e)), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t;
              }
              return e;
            }),
            (t.prototype.transformForLink = function (e) {
              var t = this.config.fragments;
              return t ? t.transform(e) : e;
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (r) {
                  return t.maybeBroadcastWatch(r, e);
                });
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var r = e.lastDiff,
                n = this.diff(e);
              (!t || (e.optimistic && 'string' == typeof t.optimistic && (n.fromOptimisticTransaction = !0), !t.onWatchUpdated || !1 !== t.onWatchUpdated.call(this, e, n, r))) &&
                ((r && (0, u.D)(r.result, n.result)) || e.callback((e.lastDiff = n), r));
            }),
            t
          );
        })(l);
    },
    5025: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return f;
        },
        h: function () {
          return l;
        },
      });
      var n,
        i,
        o = r(7045);
      r(6772);
      var a = r(9826),
        s = r(7919),
        u = r(1066),
        c = r(6388),
        l = (function () {
          function e() {
            (this.known = new (u.sy ? WeakSet : Set)()), (this.pool = new a.B(u.mr)), (this.passes = new WeakMap()), (this.keysByJSON = new Map()), (this.empty = this.admit({}));
          }
          return (
            (e.prototype.isKnown = function (e) {
              return (0, s.s)(e) && this.known.has(e);
            }),
            (e.prototype.pass = function (e) {
              if ((0, s.s)(e)) {
                var t = (0, s.s)(e) ? ((0, c.k)(e) ? e.slice(0) : (0, o.pi)({ __proto__: Object.getPrototypeOf(e) }, e)) : e;
                return this.passes.set(t, e), t;
              }
              return e;
            }),
            (e.prototype.admit = function (e) {
              var t = this;
              if ((0, s.s)(e)) {
                var r = this.passes.get(e);
                if (r) return r;
                switch (Object.getPrototypeOf(e)) {
                  case Array.prototype:
                    if (this.known.has(e)) break;
                    var n = e.map(this.admit, this),
                      i = this.pool.lookupArray(n);
                    return !i.array && (this.known.add((i.array = n)), __DEV__ && Object.freeze(n)), i.array;
                  case null:
                  case Object.prototype:
                    if (this.known.has(e)) break;
                    var o = Object.getPrototypeOf(e),
                      a = [o],
                      u = this.sortedKeys(e);
                    a.push(u.json);
                    var c = a.length;
                    u.sorted.forEach(function (r) {
                      a.push(t.admit(e[r]));
                    });
                    var i = this.pool.lookupArray(a);
                    if (!i.object) {
                      var l = (i.object = Object.create(o));
                      this.known.add(l),
                        u.sorted.forEach(function (e, t) {
                          l[e] = a[c + t];
                        }),
                        __DEV__ && Object.freeze(l);
                    }
                    return i.object;
                }
              }
              return e;
            }),
            (e.prototype.sortedKeys = function (e) {
              var t = Object.keys(e),
                r = this.pool.lookupArray(t);
              if (!r.keys) {
                t.sort();
                var n = JSON.stringify(t);
                (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, (r.keys = { sorted: t, json: n }));
              }
              return r.keys;
            }),
            e
          );
        })(),
        f = Object.assign(
          function (e) {
            if ((0, s.s)(e)) {
              void 0 === n && p();
              var t = n.admit(e),
                r = i.get(t);
              return void 0 === r && i.set(t, (r = JSON.stringify(t))), r;
            }
            return JSON.stringify(e);
          },
          { reset: p }
        );
      function p() {
        (n = new l()), (i = new (u.mr ? WeakMap : Map)());
      }
    },
    8942: function (e, t, r) {
      'use strict';
      r.d(t, {
        QS: function () {
          return c;
        },
        _v: function () {
          return u;
        },
        ab: function () {
          return i;
        },
        li: function () {
          return s;
        },
      });
      var n = r(2850),
        i = new (r(8364).g7)(),
        o = new WeakMap();
      function a(e) {
        var t = o.get(e);
        return t || o.set(e, (t = { vars: new Set(), dep: (0, n.dP)() })), t;
      }
      function s(e) {
        a(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function u(e) {
        a(e).vars.forEach(function (t) {
          return t.attachCache(e);
        });
      }
      function c(e) {
        var t = new Set(),
          r = new Set(),
          n = function (s) {
            if (arguments.length > 0) {
              if (e !== s) {
                (e = s),
                  t.forEach(function (e) {
                    a(e).dep.dirty(n), e.broadcastWatches && e.broadcastWatches();
                  });
                var u = Array.from(r);
                r.clear(),
                  u.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var c = i.getValue();
              c && (o(c), a(c).dep(n));
            }
            return e;
          };
        n.onNextChange = function (e) {
          return (
            r.add(e),
            function () {
              r.delete(e);
            }
          );
        };
        var o = (n.attachCache = function (e) {
          return t.add(e), a(e).vars.add(n), n;
        });
        return (
          (n.forgetCache = function (e) {
            return t.delete(e);
          }),
          n
        );
      }
    },
    5929: function (e, t, r) {
      'use strict';
      r.d(t, {
        f: function () {
          return ee;
        },
      });
      var n = r(7045),
        i = r(6772),
        o = r(6427),
        a = o.i.execute,
        s = r(7445),
        u = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, s.L)(t).request) || this;
            return (r.options = t), r;
          }
          return (0, n.ZT)(t, e), t;
        })(o.i),
        c = r(7471),
        l = r(29),
        f = r(5025),
        p = r(1066),
        h = r(4857);
      function d(e, t, r) {
        return new h.y(function (n) {
          var i = n.next,
            o = n.error,
            a = n.complete,
            s = 0,
            u = !1,
            c = {
              then: function (e) {
                return new Promise(function (t) {
                  return t(e());
                });
              },
            };
          function l(e, t) {
            return e
              ? function (t) {
                  ++s;
                  var r = function () {
                    return e(t);
                  };
                  c = c
                    .then(r, r)
                    .then(
                      function (e) {
                        --s, i && i.call(n, e), u && f.complete();
                      },
                      function (e) {
                        throw (--s, e);
                      }
                    )
                    .catch(function (e) {
                      o && o.call(n, e);
                    });
                }
              : function (e) {
                  return t && t.call(n, e);
                };
          }
          var f = {
              next: l(t, i),
              error: l(r, o),
              complete: function () {
                (u = !0), !s && a && a.call(n);
              },
            },
            p = e.subscribe(f);
          return function () {
            return p.unsubscribe();
          };
        });
      }
      var v = r(6388);
      function y(e) {
        var t = m(e);
        return (0, v.O)(t);
      }
      function m(e) {
        var t = (0, v.O)(e.errors) ? e.errors.slice(0) : [];
        return (
          (0, l.GG)(e) &&
            (0, v.O)(e.incremental) &&
            e.incremental.forEach(function (e) {
              e.errors && t.push.apply(t, e.errors);
            }),
          t
        );
      }
      var b = r(6537),
        g = r(6721),
        _ = r(1287),
        k = r(8745),
        w = r(7919),
        O = r(3142);
      function E(e, t, r) {
        var n = [];
        e.forEach(function (e) {
          return e[t] && n.push(e);
        }),
          n.forEach(function (e) {
            return e[t](r);
          });
      }
      function S(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: h.y });
        }
        return p.aS && Symbol.species && t(Symbol.species), t('@@species'), e;
      }
      function D(e) {
        return e && 'function' == typeof e.then;
      }
      var T = (function (e) {
        function t(t) {
          var r =
            e.call(this, function (e) {
              return (
                r.addObserver(e),
                function () {
                  return r.removeObserver(e);
                }
              );
            }) || this;
          return (
            (r.observers = new Set()),
            (r.promise = new Promise(function (e, t) {
              (r.resolve = e), (r.reject = t);
            })),
            (r.handlers = {
              next: function (e) {
                null !== r.sub && ((r.latest = ['next', e]), r.notify('next', e), E(r.observers, 'next', e));
              },
              error: function (e) {
                var t = r.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (r.sub = null),
                  (r.latest = ['error', e]),
                  r.reject(e),
                  r.notify('error', e),
                  E(r.observers, 'error', e));
              },
              complete: function () {
                var e = r.sub,
                  t = r.sources;
                if (null !== e) {
                  var n = (void 0 === t ? [] : t).shift();
                  n
                    ? D(n)
                      ? n.then(function (e) {
                          return (r.sub = e.subscribe(r.handlers));
                        })
                      : (r.sub = n.subscribe(r.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (r.sub = null),
                      r.latest && 'next' === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(),
                      r.notify('complete'),
                      E(r.observers, 'complete'));
                }
              },
            }),
            (r.nextResultListeners = new Set()),
            (r.cancel = function (e) {
              r.reject(e), (r.sources = []), r.handlers.complete();
            }),
            r.promise.catch(function (e) {}),
            'function' == typeof t && (t = [new h.y(t)]),
            D(t)
              ? t.then(function (e) {
                  return r.start(e);
                }, r.handlers.error)
              : r.start(t),
            r
          );
        }
        return (
          (0, n.ZT)(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub && ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                r = e[t];
              r && r.call(e, this.latest[1]), null === this.sub && 'next' === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e));
          }),
          (t.prototype.removeObserver = function (e) {
            this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete();
          }),
          (t.prototype.notify = function (e, t) {
            var r = this.nextResultListeners;
            r.size &&
              ((this.nextResultListeners = new Set()),
              r.forEach(function (r) {
                return r(e, t);
              }));
          }),
          (t.prototype.beforeNext = function (e) {
            var t = !1;
            this.nextResultListeners.add(function (r, n) {
              t || ((t = !0), e(r, n));
            });
          }),
          t
        );
      })(h.y);
      S(T);
      var I = r(1038),
        x = r(5963),
        F = r(9161),
        N = r(6270),
        j = Object.assign,
        q = Object.hasOwnProperty,
        R = (function (e) {
          function t(t) {
            var r = t.queryManager,
              i = t.queryInfo,
              o = t.options,
              a =
                e.call(this, function (e) {
                  try {
                    var t = e._subscription._observer;
                    t && !t.error && (t.error = V);
                  } catch (e) {}
                  var r = !a.observers.size;
                  a.observers.add(e);
                  var n = a.last;
                  return (
                    n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(n.result),
                    r && a.reobserve().catch(function () {}),
                    function () {
                      a.observers.delete(e) && !a.observers.size && a.tearDownQuery();
                    }
                  );
                }) || this;
            (a.observers = new Set()), (a.subscriptions = new Set()), (a.queryInfo = i), (a.queryManager = r), (a.isTornDown = !1);
            var s = r.defaultOptions.watchQuery,
              u = (void 0 === s ? {} : s).fetchPolicy,
              c = void 0 === u ? 'cache-first' : u,
              l = o.fetchPolicy,
              f = void 0 === l ? c : l,
              p = o.initialFetchPolicy;
            (a.options = (0, n.pi)((0, n.pi)({}, o), { initialFetchPolicy: void 0 === p ? ('standby' === f ? c : f) : p, fetchPolicy: f })), (a.queryId = i.queryId || r.generateQueryId());
            var h = (0, b.$H)(a.query);
            return (a.queryName = h && h.name && h.name.value), a;
          }
          return (
            (0, n.ZT)(t, e),
            Object.defineProperty(t.prototype, 'query', {
              get: function () {
                return this.queryManager.transform(this.options.query).document;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'variables', {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, r) {
                var n = {
                    next: function (r) {
                      t(r),
                        e.observers.delete(n),
                        e.observers.size || e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: r,
                  },
                  i = e.subscribe(n);
              });
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                r = this.queryInfo.networkStatus || (t && t.networkStatus) || x.I.ready,
                i = (0, n.pi)((0, n.pi)({}, t), { loading: (0, x.O)(r), networkStatus: r }),
                o = this.options.fetchPolicy,
                a = void 0 === o ? 'cache-first' : o;
              if ('network-only' === a || 'no-cache' === a || 'standby' === a || this.queryManager.transform(this.options.query).hasForcedResolvers);
              else {
                var s = this.queryInfo.getDiff();
                (s.complete || this.options.returnPartialData) && (i.data = s.result),
                  (0, c.D)(i.data, {}) && (i.data = void 0),
                  s.complete
                    ? (delete i.partial, s.complete && i.networkStatus === x.I.loading && ('cache-first' === a || 'cache-only' === a) && ((i.networkStatus = x.I.ready), (i.loading = !1)))
                    : (i.partial = !0),
                  !__DEV__ || s.complete || this.options.partialRefetch || i.loading || i.data || i.error || C(s.missing);
              }
              return e && this.updateLastResult(i), i;
            }),
            (t.prototype.isDifferentFromLastResult = function (e, t) {
              return !this.last || !(0, c.D)(this.last.result, e) || (t && !(0, c.D)(this.last.variables, t));
            }),
            (t.prototype.getLast = function (e, t) {
              var r = this.last;
              if (r && r[e] && (!t || (0, c.D)(r.variables, this.variables))) return r[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast('result', e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast('error', e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                r = { pollInterval: 0 },
                o = this.options.fetchPolicy;
              if (('cache-and-network' === o ? (r.fetchPolicy = o) : 'no-cache' === o ? (r.fetchPolicy = 'no-cache') : (r.fetchPolicy = 'network-only'), __DEV__ && e && q.call(e, 'variables'))) {
                var a = (0, b.iW)(this.query),
                  s = a.variableDefinitions;
                (!s ||
                  !s.some(function (e) {
                    return 'variables' === e.variable.name.value;
                  })) &&
                  __DEV__ &&
                  i.kG.warn(
                    'Called refetch('
                      .concat(JSON.stringify(e), ') for query ')
                      .concat(
                        (null === (t = a.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(a),
                        ', which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?'
                      )
                  );
              }
              return (
                e && !(0, c.D)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.pi)((0, n.pi)({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(r, x.I.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                r = (0, n.pi)(
                  (0, n.pi)(
                    {},
                    e.query ? e : (0, n.pi)((0, n.pi)((0, n.pi)((0, n.pi)({}, this.options), { query: this.query }), e), { variables: (0, n.pi)((0, n.pi)({}, this.options.variables), e.variables) })
                  ),
                  { fetchPolicy: 'no-cache' }
                ),
                i = this.queryManager.generateQueryId(),
                o = this.queryInfo,
                a = o.networkStatus;
              (o.networkStatus = x.I.fetchMore), r.notifyOnNetworkStatusChange && this.observe();
              var s = new Set();
              return this.queryManager
                .fetchQuery(i, r, x.I.fetchMore)
                .then(function (n) {
                  return (
                    t.queryManager.removeQuery(i),
                    o.networkStatus === x.I.fetchMore && (o.networkStatus = a),
                    t.queryManager.cache.batch({
                      update: function (i) {
                        var o = e.updateQuery;
                        o
                          ? i.updateQuery({ query: t.query, variables: t.variables, returnPartialData: !0, optimistic: !1 }, function (e) {
                              return o(e, { fetchMoreResult: n.data, variables: r.variables });
                            })
                          : i.writeQuery({ query: r.query, variables: r.variables, data: n.data });
                      },
                      onWatchUpdated: function (e) {
                        s.add(e.query);
                      },
                    }),
                    n
                  );
                })
                .finally(function () {
                  s.has(t.query) || P(t);
                });
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                r = this.queryManager.startGraphQLSubscription({ query: e.document, variables: e.variables, context: e.context }).subscribe({
                  next: function (r) {
                    var n = e.updateQuery;
                    n &&
                      t.updateQuery(function (e, t) {
                        return n(e, { subscriptionData: r, variables: t.variables });
                      });
                  },
                  error: function (t) {
                    if (e.onError) {
                      e.onError(t);
                      return;
                    }
                    __DEV__ && i.kG.error('Unhandled GraphQL subscription error', t);
                  },
                });
              return (
                this.subscriptions.add(r),
                function () {
                  t.subscriptions.delete(r) && r.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.setVariables = function (e) {
              return (0, c.D)(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e), this.observers.size)
                ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: e }, x.I.setVariables)
                : Promise.resolve();
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                r = e(t.cache.diff({ query: this.options.query, variables: this.variables, returnPartialData: !0, optimistic: !1 }).result, { variables: this.variables });
              r && (t.cache.writeQuery({ query: this.options.query, data: r, variables: this.variables }), t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var r = t.fetchPolicy,
                  n = void 0 === r ? 'cache-first' : r,
                  i = t.initialFetchPolicy,
                  o = void 0 === i ? n : i;
                'standby' === n ||
                  ('function' == typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(n, { reason: e, options: t, observable: this, initialFetchPolicy: o }))
                    : 'variables-changed' === e
                    ? (t.fetchPolicy = o)
                    : (t.fetchPolicy = t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t) {
              return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, e, t);
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  r = this.options.pollInterval;
                if (!r) {
                  t && (clearTimeout(t.timeout), delete this.pollingInfo);
                  return;
                }
                if (!t || t.interval !== r) {
                  __DEV__ ? (0, i.kG)(r, 'Attempted to start a polling query without a polling interval.') : (0, i.kG)(r, 13), ((t || (this.pollingInfo = {})).interval = r);
                  var n = function () {
                      e.pollingInfo &&
                        ((0, x.O)(e.queryInfo.networkStatus) ? o() : e.reobserve({ fetchPolicy: 'no-cache' === e.options.initialFetchPolicy ? 'no-cache' : 'network-only' }, x.I.poll).then(o, o));
                    },
                    o = function () {
                      var t = e.pollingInfo;
                      t && (clearTimeout(t.timeout), (t.timeout = setTimeout(n, t.interval)));
                    };
                  o();
                }
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              return (
                void 0 === t && (t = this.variables),
                (this.last = (0, n.pi)((0, n.pi)({}, this.last), { result: this.queryManager.assumeImmutableResults ? e : (0, F.X)(e), variables: t })),
                (0, v.O)(e.errors) || delete this.last.error,
                this.last
              );
            }),
            (t.prototype.reobserveAsConcast = function (e, t) {
              var r = this;
              this.isTornDown = !1;
              var i = t === x.I.refetch || t === x.I.fetchMore || t === x.I.poll,
                o = this.options.variables,
                a = this.options.fetchPolicy,
                s = (0, N.o)(this.options, e || {}),
                u = i ? s : j(this.options, s);
              !i &&
                (this.updatePolling(),
                e &&
                  e.variables &&
                  !(0, c.D)(e.variables, o) &&
                  'standby' !== u.fetchPolicy &&
                  u.fetchPolicy === a &&
                  (this.applyNextFetchPolicy('variables-changed', u), void 0 === t && (t = x.I.setVariables)));
              var l = u.variables && (0, n.pi)({}, u.variables),
                f = this.fetch(u, t),
                p = f.concast,
                h = f.fromLink,
                d = {
                  next: function (e) {
                    r.reportResult(e, l);
                  },
                  error: function (e) {
                    r.reportError(e, l);
                  },
                };
              return !i && h && (this.concast && this.observer && this.concast.removeObserver(this.observer), (this.concast = p), (this.observer = d)), p.addObserver(d), p;
            }),
            (t.prototype.reobserve = function (e, t) {
              return this.reobserveAsConcast(e, t).promise;
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var r = this.getLastError();
              (r || this.isDifferentFromLastResult(e, t)) && ((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), E(this.observers, 'next', e));
            }),
            (t.prototype.reportError = function (e, t) {
              var r = (0, n.pi)((0, n.pi)({}, this.getLastResult()), { error: e, errors: e.graphQLErrors, networkStatus: x.I.error, loading: !1 });
              this.updateLastResult(r, t), E(this.observers, 'error', (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            t
          );
        })(h.y);
      function P(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return 'cache-and-network' === r || 'network-only' === r
          ? e.reobserve({
              fetchPolicy: 'cache-first',
              nextFetchPolicy: function () {
                return ((this.nextFetchPolicy = n), 'function' == typeof n) ? n.apply(this, arguments) : r;
              },
            })
          : e.reobserve();
      }
      function V(e) {
        __DEV__ && i.kG.error('Unhandled error', e.message, e.stack);
      }
      function C(e) {
        __DEV__ && e && __DEV__ && i.kG.debug('Missing cache result fields: '.concat(JSON.stringify(e)), e);
      }
      S(R);
      var M = r(144),
        Q = r(6955);
      function A(e) {
        return e.kind === Q.h.FIELD || e.kind === Q.h.FRAGMENT_SPREAD || e.kind === Q.h.INLINE_FRAGMENT;
      }
      var L = r(1317),
        G = r(2500),
        B = r(8942),
        z = (function () {
          function e(e) {
            var t = e.cache,
              r = e.client,
              n = e.resolvers,
              i = e.fragmentMatcher;
            (this.selectionsToResolveCache = new WeakMap()), (this.cache = t), r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i);
          }
          return (
            (e.prototype.addResolvers = function (e) {
              var t = this;
              (this.resolvers = this.resolvers || {}),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.resolvers = (0, L.Ee)(t.resolvers, e);
                    })
                  : (this.resolvers = (0, L.Ee)(this.resolvers, e));
            }),
            (e.prototype.setResolvers = function (e) {
              (this.resolvers = {}), this.addResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.resolvers || {};
            }),
            (e.prototype.runResolvers = function (e) {
              var t = e.document,
                r = e.remoteResult,
                i = e.context,
                o = e.variables,
                a = e.onlyRunForcedResolvers,
                s = void 0 !== a && a;
              return (0, n.mG)(this, void 0, void 0, function () {
                return (0, n.Jh)(this, function (e) {
                  return t
                    ? [
                        2,
                        this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then(function (e) {
                          return (0, n.pi)((0, n.pi)({}, r), { data: e.result });
                        }),
                      ]
                    : [2, r];
                });
              });
            }),
            (e.prototype.setFragmentMatcher = function (e) {
              this.fragmentMatcher = e;
            }),
            (e.prototype.getFragmentMatcher = function () {
              return this.fragmentMatcher;
            }),
            (e.prototype.clientQuery = function (e) {
              return (0, _.FS)(['client'], e) && this.resolvers ? e : null;
            }),
            (e.prototype.serverQuery = function (e) {
              return (0, g.ob)(e);
            }),
            (e.prototype.prepareContext = function (e) {
              var t = this.cache;
              return (0, n.pi)((0, n.pi)({}, e), {
                cache: t,
                getCacheKey: function (e) {
                  return t.identify(e);
                },
              });
            }),
            (e.prototype.addExportedVariables = function (e, t, r) {
              return (
                void 0 === t && (t = {}),
                void 0 === r && (r = {}),
                (0, n.mG)(this, void 0, void 0, function () {
                  return (0, n.Jh)(this, function (i) {
                    return e
                      ? [
                          2,
                          this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function (e) {
                            return (0, n.pi)((0, n.pi)({}, t), e.exportedVariables);
                          }),
                        ]
                      : [2, (0, n.pi)({}, t)];
                  });
                })
              );
            }),
            (e.prototype.shouldForceResolvers = function (e) {
              var t = !1;
              return (
                (0, M.Vn)(e, {
                  Directive: {
                    enter: function (e) {
                      if (
                        'client' === e.name.value &&
                        e.arguments &&
                        (t = e.arguments.some(function (e) {
                          return 'always' === e.name.value && 'BooleanValue' === e.value.kind && !0 === e.value.value;
                        }))
                      )
                        return M.$_;
                    },
                  },
                }),
                t
              );
            }),
            (e.prototype.buildRootValueFromCache = function (e, t) {
              return this.cache.diff({ query: (0, g.aL)(e), variables: t, returnPartialData: !0, optimistic: !1 }).result;
            }),
            (e.prototype.resolveDocument = function (e, t, r, i, o, a) {
              return (
                void 0 === r && (r = {}),
                void 0 === i && (i = {}),
                void 0 === o &&
                  (o = function () {
                    return !0;
                  }),
                void 0 === a && (a = !1),
                (0, n.mG)(this, void 0, void 0, function () {
                  var s, u, c, l, f, p, h, d, v, y;
                  return (0, n.Jh)(this, function (m) {
                    return (
                      (s = (0, b.p$)(e)),
                      (u = (0, b.kU)(e)),
                      (c = (0, G.F)(u)),
                      (l = this.collectSelectionsToResolve(s, c)),
                      (p = (f = s.operation) ? f.charAt(0).toUpperCase() + f.slice(1) : 'Query'),
                      (h = this),
                      (d = h.cache),
                      (v = h.client),
                      (y = {
                        fragmentMap: c,
                        context: (0, n.pi)((0, n.pi)({}, r), { cache: d, client: v }),
                        variables: i,
                        fragmentMatcher: o,
                        defaultOperationType: p,
                        exportedVariables: {},
                        selectionsToResolve: l,
                        onlyRunForcedResolvers: a,
                      }),
                      [
                        2,
                        this.resolveSelectionSet(s.selectionSet, !1, t, y).then(function (e) {
                          return { result: e, exportedVariables: y.exportedVariables };
                        }),
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.resolveSelectionSet = function (e, t, r, o) {
              return (0, n.mG)(this, void 0, void 0, function () {
                var a,
                  s,
                  u,
                  c,
                  l,
                  f = this;
                return (0, n.Jh)(this, function (p) {
                  return (
                    (a = o.fragmentMap),
                    (s = o.context),
                    (u = o.variables),
                    (c = [r]),
                    (l = function (e) {
                      return (0, n.mG)(f, void 0, void 0, function () {
                        var l, f;
                        return (0, n.Jh)(this, function (n) {
                          return (t || o.selectionsToResolve.has(e)) && (0, _.LZ)(e, u)
                            ? (0, k.My)(e)
                              ? [
                                  2,
                                  this.resolveField(e, t, r, o).then(function (t) {
                                    var r;
                                    void 0 !== t && c.push((((r = {})[(0, k.u2)(e)] = t), r));
                                  }),
                                ]
                              : ((0, k.Ao)(e) ? (l = e) : ((l = a[e.name.value]), __DEV__ ? (0, i.kG)(l, 'No fragment named '.concat(e.name.value)) : (0, i.kG)(l, 11)),
                                l && l.typeCondition && ((f = l.typeCondition.name.value), o.fragmentMatcher(r, f, s)))
                              ? [
                                  2,
                                  this.resolveSelectionSet(l.selectionSet, t, r, o).then(function (e) {
                                    c.push(e);
                                  }),
                                ]
                              : [2]
                            : [2];
                        });
                      });
                    }),
                    [
                      2,
                      Promise.all(e.selections.map(l)).then(function () {
                        return (0, L.bw)(c);
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveField = function (e, t, r, i) {
              return (0, n.mG)(this, void 0, void 0, function () {
                var o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  h,
                  d = this;
                return (0, n.Jh)(this, function (n) {
                  return r
                    ? ((o = i.variables),
                      (u = (a = e.name.value) !== (s = (0, k.u2)(e))),
                      (l = Promise.resolve((c = r[s] || r[a]))),
                      (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) &&
                        ((f = r.__typename || i.defaultOperationType),
                        (p = this.resolvers && this.resolvers[f]) &&
                          (h = p[u ? a : s]) &&
                          (l = Promise.resolve(B.ab.withValue(this.cache, h, [r, (0, k.NC)(e, o), i.context, { field: e, fragmentMap: i.fragmentMap }])))),
                      [
                        2,
                        l.then(function (r) {
                          if (
                            (void 0 === r && (r = c),
                            e.directives &&
                              e.directives.forEach(function (e) {
                                'export' === e.name.value &&
                                  e.arguments &&
                                  e.arguments.forEach(function (e) {
                                    'as' === e.name.value && 'StringValue' === e.value.kind && (i.exportedVariables[e.value.value] = r);
                                  });
                              }),
                            !e.selectionSet || null == r)
                          )
                            return r;
                          var n,
                            o,
                            a =
                              null !==
                                (o =
                                  null === (n = e.directives) || void 0 === n
                                    ? void 0
                                    : n.some(function (e) {
                                        return 'client' === e.name.value;
                                      })) &&
                              void 0 !== o &&
                              o;
                          return Array.isArray(r) ? d.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? d.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0;
                        }),
                      ])
                    : [2, null];
                });
              });
            }),
            (e.prototype.resolveSubSelectedArray = function (e, t, r, n) {
              var i = this;
              return Promise.all(
                r.map(function (r) {
                  return null === r ? null : Array.isArray(r) ? i.resolveSubSelectedArray(e, t, r, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, r, n) : void 0;
                })
              );
            }),
            (e.prototype.collectSelectionsToResolve = function (e, t) {
              var r = function (e) {
                  return !Array.isArray(e);
                },
                n = this.selectionsToResolveCache;
              return (function e(o) {
                if (!n.has(o)) {
                  var a = new Set();
                  n.set(o, a),
                    (0, M.Vn)(o, {
                      Directive: function (e, t, n, i, o) {
                        'client' === e.name.value &&
                          o.forEach(function (e) {
                            r(e) && A(e) && a.add(e);
                          });
                      },
                      FragmentSpread: function (n, o, s, u, c) {
                        var l = t[n.name.value];
                        __DEV__ ? (0, i.kG)(l, 'No fragment named '.concat(n.name.value)) : (0, i.kG)(l, 12);
                        var f = e(l);
                        f.size > 0 &&
                          (c.forEach(function (e) {
                            r(e) && A(e) && a.add(e);
                          }),
                          a.add(n),
                          f.forEach(function (e) {
                            a.add(e);
                          }));
                      },
                    });
                }
                return n.get(o);
              })(e);
            }),
            e
          );
        })(),
        U = new (p.mr ? WeakMap : Map)();
      function W(e, t) {
        var r = e[t];
        'function' == typeof r &&
          (e[t] = function () {
            return U.set(e, (U.get(e) + 1) % 1e15), r.apply(this, arguments);
          });
      }
      function Y(e) {
        e.notifyTimeout && (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var J = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.subscriptions = new Set()),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var r = (this.cache = e.cache);
          U.has(r) || (U.set(r, 0), W(r, 'evict'), W(r, 'modify'), W(r, 'reset'));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || x.I.loading;
            return (
              this.variables && this.networkStatus !== x.I.loading && !(0, c.D)(this.variables, e.variables) && (t = x.I.setVariables),
              (0, c.D)(e.variables, this.variables) || (this.lastDiff = void 0),
              Object.assign(this, { document: e.document, variables: e.variables, networkError: null, graphQLErrors: this.graphQLErrors || [], networkStatus: t }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            Y(this), (this.dirty = !1);
          }),
          (e.prototype.getDiff = function (e) {
            void 0 === e && (e = this.variables);
            var t = this.getDiffOptions(e);
            if (this.lastDiff && (0, c.D)(t, this.lastDiff.options)) return this.lastDiff.diff;
            this.updateWatch((this.variables = e));
            var r = this.observableQuery;
            if (r && 'no-cache' === r.options.fetchPolicy) return { complete: !1 };
            var n = this.cache.diff(t);
            return this.updateLastDiff(n, t), n;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e ? { diff: e, options: t || this.getDiffOptions() } : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              { query: this.document, variables: e, returnPartialData: !0, optimistic: !0, canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t = this,
              r = this.lastDiff && this.lastDiff.diff;
            this.updateLastDiff(e),
              this.dirty ||
                (0, c.D)(r && r.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return t.notify();
                  }, 0)));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction ? e.observe() : P(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            Y(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if ((0, x.O)(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ('cache-only' !== e && 'cache-and-network' !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                });
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var r = this.observableQuery;
            if (!r || 'no-cache' !== r.options.fetchPolicy) {
              var i = (0, n.pi)((0, n.pi)({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && (0, c.D)(i, this.lastWatch)) || (this.cancel(), (this.cancel = this.cache.watch((this.lastWatch = i))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var r = this.lastWrite;
            return !(r && r.dmCount === U.get(this.cache) && (0, c.D)(t, r.variables) && (0, c.D)(e.data, r.result.data));
          }),
          (e.prototype.markResult = function (e, t, r, n) {
            var i = this,
              o = new L.w0(),
              a = (0, v.O)(e.errors) ? e.errors.slice(0) : [];
            if ((this.reset(), 'incremental' in e && (0, v.O)(e.incremental))) {
              var s = (0, l.mT)(this.getDiff().result, e);
              e.data = s;
            } else if ('hasNext' in e && e.hasNext) {
              var u = this.getDiff();
              e.data = o.merge(u.result, e.data);
            }
            (this.graphQLErrors = a),
              'no-cache' === r.fetchPolicy
                ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(r.variables))
                : 0 !== n &&
                  ($(e, r.errorPolicy)
                    ? this.cache.performTransaction(function (o) {
                        if (i.shouldWrite(e, r.variables))
                          o.writeQuery({ query: t, data: e.data, variables: r.variables, overwrite: 1 === n }), (i.lastWrite = { result: e, variables: r.variables, dmCount: U.get(i.cache) });
                        else if (i.lastDiff && i.lastDiff.diff.complete) {
                          e.data = i.lastDiff.diff.result;
                          return;
                        }
                        var a = i.getDiffOptions(r.variables),
                          s = o.diff(a);
                        i.stopped || i.updateWatch(r.variables), i.updateLastDiff(s, a), s.complete && (e.data = s.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (this.networkError = null), (this.networkStatus = x.I.ready);
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = x.I.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function $(e, t) {
        void 0 === t && (t = 'none');
        var r = 'ignore' === t || 'all' === t,
          n = !y(e);
        return !n && r && e.data && (n = !0), n;
      }
      var Z = Object.prototype.hasOwnProperty,
        K = (function () {
          function e(e) {
            var t = e.cache,
              r = e.link,
              n = e.defaultOptions,
              i = e.queryDeduplication,
              o = e.onBroadcast,
              a = e.ssrMode,
              s = e.clientAwareness,
              u = e.localState,
              c = e.assumeImmutableResults;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new (p.mr ? WeakMap : Map)()),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new Map()),
              (this.cache = t),
              (this.link = r),
              (this.defaultOptions = n || Object.create(null)),
              (this.queryDeduplication = void 0 !== i && i),
              (this.clientAwareness = void 0 === s ? {} : s),
              (this.localState = u || new z({ cache: t })),
              (this.ssrMode = void 0 !== a && a),
              (this.assumeImmutableResults = !!c),
              (this.onBroadcast = o) && (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, r) {
                e.stopQueryNoBroadcast(r);
              }),
                this.cancelPendingFetches(__DEV__ ? new i.ej('QueryManager stopped while query was in flight') : new i.ej(14));
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              var t,
                r,
                o = e.mutation,
                a = e.variables,
                s = e.optimisticResponse,
                u = e.updateQueries,
                c = e.refetchQueries,
                l = void 0 === c ? [] : c,
                f = e.awaitRefetchQueries,
                p = void 0 !== f && f,
                h = e.update,
                v = e.onQueryUpdated,
                b = e.fetchPolicy,
                g = void 0 === b ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || 'network-only' : b,
                _ = e.errorPolicy,
                k = void 0 === _ ? (null === (r = this.defaultOptions.mutate) || void 0 === r ? void 0 : r.errorPolicy) || 'none' : _,
                w = e.keepRootFields,
                O = e.context;
              return (0, n.mG)(this, void 0, void 0, function () {
                var e, t, r, c, f, b;
                return (0, n.Jh)(this, function (_) {
                  switch (_.label) {
                    case 0:
                      if (
                        (__DEV__ ? (0, i.kG)(o, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : (0, i.kG)(o, 15),
                        __DEV__
                          ? (0, i.kG)(
                              'network-only' === g || 'no-cache' === g,
                              "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                            )
                          : (0, i.kG)('network-only' === g || 'no-cache' === g, 16),
                        (e = this.generateMutationId()),
                        (r = (t = this.transform(o)).document),
                        (c = t.hasClientExports),
                        (o = this.cache.transformForLink(r)),
                        (a = this.getVariables(o, a)),
                        !c)
                      )
                        return [3, 2];
                      return [4, this.localState.addExportedVariables(o, a, O)];
                    case 1:
                      (a = _.sent()), (_.label = 2);
                    case 2:
                      return (
                        (f = this.mutationStore && (this.mutationStore[e] = { mutation: o, variables: a, loading: !0, error: null })),
                        s && this.markMutationOptimistic(s, { mutationId: e, document: o, variables: a, fetchPolicy: g, errorPolicy: k, context: O, updateQueries: u, update: h, keepRootFields: w }),
                        this.broadcastQueries(),
                        (b = this),
                        [
                          2,
                          new Promise(function (t, r) {
                            return d(b.getObservableFromLink(o, (0, n.pi)((0, n.pi)({}, O), { optimisticResponse: s }), a, !1), function (t) {
                              if (y(t) && 'none' === k) throw new I.cA({ graphQLErrors: m(t) });
                              f && ((f.loading = !1), (f.error = null));
                              var r = (0, n.pi)({}, t);
                              return (
                                'function' == typeof l && (l = l(r)),
                                'ignore' === k && y(r) && delete r.errors,
                                b.markMutationResult({
                                  mutationId: e,
                                  result: r,
                                  document: o,
                                  variables: a,
                                  fetchPolicy: g,
                                  errorPolicy: k,
                                  context: O,
                                  update: h,
                                  updateQueries: u,
                                  awaitRefetchQueries: p,
                                  refetchQueries: l,
                                  removeOptimistic: s ? e : void 0,
                                  onQueryUpdated: v,
                                  keepRootFields: w,
                                })
                              );
                            }).subscribe({
                              next: function (e) {
                                b.broadcastQueries(), ('hasNext' in e && !1 !== e.hasNext) || t(e);
                              },
                              error: function (t) {
                                f && ((f.loading = !1), (f.error = t)), s && b.cache.removeOptimistic(e), b.broadcastQueries(), r(t instanceof I.cA ? t : new I.cA({ networkError: t }));
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var r = this;
              void 0 === t && (t = this.cache);
              var i = e.result,
                o = [],
                a = 'no-cache' === e.fetchPolicy;
              if (!a && $(i, e.errorPolicy)) {
                if (((0, l.GG)(i) || o.push({ result: i.data, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }), (0, l.GG)(i) && (0, v.O)(i.incremental))) {
                  var s = t.diff({ id: 'ROOT_MUTATION', query: this.transform(e.document).asQuery, variables: e.variables, optimistic: !1, returnPartialData: !0 }),
                    u = void 0;
                  s.result && (u = (0, l.mT)(s.result, i)), void 0 !== u && ((i.data = u), o.push({ result: u, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }));
                }
                var c = e.updateQueries;
                c &&
                  this.queries.forEach(function (e, n) {
                    var a = e.observableQuery,
                      s = a && a.queryName;
                    if (s && Z.call(c, s)) {
                      var u = c[s],
                        l = r.queries.get(n),
                        f = l.document,
                        p = l.variables,
                        h = t.diff({ query: f, variables: p, returnPartialData: !0, optimistic: !1 }),
                        d = h.result;
                      if (h.complete && d) {
                        var v = u(d, { mutationResult: i, queryName: (f && (0, b.rY)(f)) || void 0, queryVariables: p });
                        v && o.push({ result: v, dataId: 'ROOT_QUERY', query: f, variables: p });
                      }
                    }
                  });
              }
              if (o.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
                var f = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      a ||
                        o.forEach(function (e) {
                          return t.write(e);
                        });
                      var s = e.update,
                        u = !(0, l.M0)(i) || ((0, l.GG)(i) && !i.hasNext);
                      if (s) {
                        if (!a) {
                          var c = t.diff({ id: 'ROOT_MUTATION', query: r.transform(e.document).asQuery, variables: e.variables, optimistic: !1, returnPartialData: !0 });
                          c.complete && ('incremental' in (i = (0, n.pi)((0, n.pi)({}, i), { data: c.result })) && delete i.incremental, 'hasNext' in i && delete i.hasNext);
                        }
                        u && s(t, i, { context: e.context, variables: e.variables });
                      }
                      a ||
                        e.keepRootFields ||
                        !u ||
                        t.modify({
                          id: 'ROOT_MUTATION',
                          fields: function (e, t) {
                            var r = t.fieldName,
                              n = t.DELETE;
                            return '__typename' === r ? e : n;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return f.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(f).then(function () {
                    return i;
                  });
              }
              return Promise.resolve(i);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var r = this,
                o = 'function' == typeof e ? e(t.variables) : e;
              return this.cache.recordOptimisticTransaction(function (e) {
                try {
                  r.markMutationResult((0, n.pi)((0, n.pi)({}, t), { result: { data: o } }), e);
                } catch (e) {
                  __DEV__ && i.kG.error(e);
                }
              }, t.mutationId);
            }),
            (e.prototype.fetchQuery = function (e, t, r) {
              return this.fetchQueryObservable(e, t, r).promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, r) {
                  e[r] = { variables: t.variables, networkStatus: t.networkStatus, networkError: t.networkError, graphQLErrors: t.graphQLErrors };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var r = this.cache.transformDocument(e),
                  i = (0, g.Fo)(r),
                  o = this.localState.clientQuery(r),
                  a = i && this.localState.serverQuery(i),
                  s = {
                    document: r,
                    hasClientExports: (0, _.mj)(r),
                    hasForcedResolvers: this.localState.shouldForceResolvers(r),
                    clientQuery: o,
                    serverQuery: a,
                    defaultVars: (0, b.O4)((0, b.$H)(r)),
                    asQuery: (0, n.pi)((0, n.pi)({}, r), {
                      definitions: r.definitions.map(function (e) {
                        return 'OperationDefinition' === e.kind && 'query' !== e.operation ? (0, n.pi)((0, n.pi)({}, e), { operation: 'query' }) : e;
                      }),
                    }),
                  },
                  u = function (e) {
                    e && !t.has(e) && t.set(e, s);
                  };
                u(e), u(r), u(o), u(a);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return (0, n.pi)((0, n.pi)({}, this.transform(e).defaultVars), t);
            }),
            (e.prototype.watchQuery = function (e) {
              void 0 === (e = (0, n.pi)((0, n.pi)({}, e), { variables: this.getVariables(e.query, e.variables) })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
              var t = new J(this),
                r = new R({ queryManager: this, queryInfo: t, options: e });
              return this.queries.set(r.queryId, t), t.init({ document: r.query, observableQuery: r, variables: r.variables }), r;
            }),
            (e.prototype.query = function (e, t) {
              var r = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                __DEV__ ? (0, i.kG)(e.query, 'query option is required. You must specify your GraphQL document in the query option.') : (0, i.kG)(e.query, 17),
                __DEV__ ? (0, i.kG)('Document' === e.query.kind, 'You must wrap the query string in a "gql" tag.') : (0, i.kG)('Document' === e.query.kind, 18),
                __DEV__ ? (0, i.kG)(!e.returnPartialData, 'returnPartialData option only supported on watchQuery.') : (0, i.kG)(!e.returnPartialData, 19),
                __DEV__ ? (0, i.kG)(!e.pollInterval, 'pollInterval option only supported on watchQuery.') : (0, i.kG)(!e.pollInterval, 20),
                this.fetchQuery(t, e).finally(function () {
                  return r.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches(__DEV__ ? new i.ej('Store reset while query was in flight (not completed in link chain)') : new i.ej(21)),
                this.queries.forEach(function (e) {
                  e.observableQuery ? (e.networkStatus = x.I.loading) : e.stop();
                }),
                this.mutationStore && (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = 'active');
              var r = new Map(),
                o = new Map(),
                a = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    'string' == typeof e ? o.set(e, !1) : (0, k.JW)(e) ? o.set(t.transform(e).document, !1) : (0, w.s)(e) && e.query && a.add(e);
                  }),
                this.queries.forEach(function (t, n) {
                  var i = t.observableQuery,
                    a = t.document;
                  if (i) {
                    if ('all' === e) {
                      r.set(n, i);
                      return;
                    }
                    var s = i.queryName;
                    if ('standby' === i.options.fetchPolicy || ('active' === e && !i.hasObservers())) return;
                    ('active' === e || (s && o.has(s)) || (a && o.has(a))) && (r.set(n, i), s && o.set(s, !0), a && o.set(a, !0));
                  }
                }),
                a.size &&
                  a.forEach(function (e) {
                    var o = (0, O.X)('legacyOneTimeQuery'),
                      a = t.getQuery(o).init({ document: e.query, variables: e.variables }),
                      s = new R({ queryManager: t, queryInfo: a, options: (0, n.pi)((0, n.pi)({}, e), { fetchPolicy: 'network-only' }) });
                    (0, i.kG)(s.queryId === o), a.setObservableQuery(s), r.set(o, s);
                  }),
                __DEV__ &&
                  o.size &&
                  o.forEach(function (e, t) {
                    !e && __DEV__ && i.kG.warn('Unknown query '.concat('string' == typeof t ? 'named ' : '').concat(JSON.stringify(t, null, 2), ' requested in refetchQueries options.include array'));
                  }),
                r
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var r = [];
              return (
                this.getObservableQueries(e ? 'all' : 'active').forEach(function (n, i) {
                  var o = n.options.fetchPolicy;
                  n.resetLastResults(), (e || ('standby' !== o && 'cache-only' !== o)) && r.push(n.refetch()), t.getQuery(i).setDiff(null);
                }),
                this.broadcastQueries(),
                Promise.all(r)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                r = e.query,
                n = e.fetchPolicy,
                i = e.errorPolicy,
                o = e.variables,
                a = e.context,
                s = void 0 === a ? {} : a;
              (r = this.transform(r).document), (o = this.getVariables(r, o));
              var u = function (e) {
                return t.getObservableFromLink(r, s, e).map(function (o) {
                  'no-cache' !== n && ($(o, i) && t.cache.write({ query: r, result: o.data, dataId: 'ROOT_SUBSCRIPTION', variables: e }), t.broadcastQueries());
                  var a = y(o),
                    s = (0, I.ls)(o);
                  if (a || s) {
                    var u = {};
                    throw (a && (u.graphQLErrors = o.errors), s && (u.protocolErrors = o.extensions[I.YG]), new I.cA(u));
                  }
                  return o;
                });
              };
              if (this.transform(r).hasClientExports) {
                var c = this.localState.addExportedVariables(r, o, s).then(u);
                return new h.y(function (e) {
                  var t = null;
                  return (
                    c.then(function (r) {
                      return (t = r.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return u(o);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, r, i) {
              var o,
                s,
                u = this;
              void 0 === i && (i = null !== (o = null == t ? void 0 : t.queryDeduplication) && void 0 !== o ? o : this.queryDeduplication);
              var c = this.transform(e).serverQuery;
              if (c) {
                var l = this.inFlightLinkObservables,
                  p = this.link,
                  v = { query: c, variables: r, operationName: (0, b.rY)(c) || void 0, context: this.prepareContext((0, n.pi)((0, n.pi)({}, t), { forceFetch: !i })) };
                if (((t = v.context), i)) {
                  var y = l.get(c) || new Map();
                  l.set(c, y);
                  var m = (0, f.B)(r);
                  if (!(s = y.get(m))) {
                    var g = new T([a(p, v)]);
                    y.set(m, (s = g)),
                      g.beforeNext(function () {
                        y.delete(m) && y.size < 1 && l.delete(c);
                      });
                  }
                } else s = new T([a(p, v)]);
              } else (s = new T([h.y.of({ data: {} })])), (t = this.prepareContext(t));
              var _ = this.transform(e).clientQuery;
              return (
                _ &&
                  (s = d(s, function (e) {
                    return u.localState.runResolvers({ document: _, remoteResult: e, context: t, variables: r });
                  })),
                s
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, r) {
              var n = (e.lastRequestId = this.generateRequestId()),
                i = this.cache.transformForLink(this.transform(e.document).document);
              return d(
                this.getObservableFromLink(i, r.context, r.variables),
                function (o) {
                  var a = m(o),
                    s = a.length > 0;
                  if (n >= e.lastRequestId) {
                    if (s && 'none' === r.errorPolicy) throw e.markError(new I.cA({ graphQLErrors: a }));
                    e.markResult(o, i, r, t), e.markReady();
                  }
                  var u = { data: o.data, loading: !1, networkStatus: x.I.ready };
                  return s && 'ignore' !== r.errorPolicy && ((u.errors = a), (u.networkStatus = x.I.error)), u;
                },
                function (t) {
                  var r = (0, I.MS)(t) ? t : new I.cA({ networkError: t });
                  throw (n >= e.lastRequestId && e.markError(r), r);
                }
              );
            }),
            (e.prototype.fetchQueryObservable = function (e, t, r) {
              return this.fetchConcastWithInfo(e, t, r).concast;
            }),
            (e.prototype.fetchConcastWithInfo = function (e, t, r) {
              var n,
                i,
                o = this;
              void 0 === r && (r = x.I.loading);
              var a = this.transform(t.query).document,
                s = this.getVariables(a, t.variables),
                u = this.getQuery(e),
                c = this.defaultOptions.watchQuery,
                l = t.fetchPolicy,
                f = void 0 === l ? (c && c.fetchPolicy) || 'cache-first' : l,
                p = t.errorPolicy,
                h = void 0 === p ? (c && c.errorPolicy) || 'none' : p,
                d = t.returnPartialData,
                v = t.notifyOnNetworkStatusChange,
                y = t.context,
                m = Object.assign({}, t, {
                  query: a,
                  variables: s,
                  fetchPolicy: f,
                  errorPolicy: h,
                  returnPartialData: void 0 !== d && d,
                  notifyOnNetworkStatusChange: void 0 !== v && v,
                  context: void 0 === y ? {} : y,
                }),
                b = function (e) {
                  m.variables = e;
                  var n = o.fetchQueryByPolicy(u, m, r);
                  return 'standby' !== m.fetchPolicy && n.sources.length > 0 && u.observableQuery && u.observableQuery.applyNextFetchPolicy('after-fetch', t), n;
                },
                g = function () {
                  return o.fetchCancelFns.delete(e);
                };
              if (
                (this.fetchCancelFns.set(e, function (e) {
                  g(),
                    setTimeout(function () {
                      return n.cancel(e);
                    });
                }),
                this.transform(m.query).hasClientExports)
              )
                (n = new T(
                  this.localState
                    .addExportedVariables(m.query, m.variables, m.context)
                    .then(b)
                    .then(function (e) {
                      return e.sources;
                    })
                )),
                  (i = !0);
              else {
                var _ = b(m.variables);
                (i = _.fromLink), (n = new T(_.sources));
              }
              return n.promise.then(g, g), { concast: n, fromLink: i };
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                r = e.updateCache,
                n = e.include,
                i = e.optimistic,
                o = void 0 !== i && i,
                a = e.removeOptimistic,
                s = void 0 === a ? (o ? (0, O.X)('refetchQueries') : void 0) : a,
                u = e.onQueryUpdated,
                c = new Map();
              n &&
                this.getObservableQueries(n).forEach(function (e, r) {
                  c.set(r, { oq: e, lastDiff: t.getQuery(r).getDiff() });
                });
              var l = new Map();
              return (
                r &&
                  this.cache.batch({
                    update: r,
                    optimistic: (o && s) || !1,
                    removeOptimistic: s,
                    onWatchUpdated: function (e, t, r) {
                      var n = e.watcher instanceof J && e.watcher.observableQuery;
                      if (n) {
                        if (u) {
                          c.delete(n.queryId);
                          var i = u(n, t, r);
                          return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i;
                        }
                        null !== u && c.set(n.queryId, { oq: n, lastDiff: r, diff: t });
                      }
                    },
                  }),
                c.size &&
                  c.forEach(function (e, r) {
                    var n,
                      i = e.oq,
                      o = e.lastDiff,
                      a = e.diff;
                    if (u) {
                      if (!a) {
                        var s = i.queryInfo;
                        s.reset(), (a = s.getDiff());
                      }
                      n = u(i, a, o);
                    }
                    (u && !0 !== n) || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf('legacyOneTimeQuery') >= 0 && t.stopQueryNoBroadcast(r);
                  }),
                s && this.cache.removeOptimistic(s),
                l
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, r) {
              var i = this,
                o = t.query,
                a = t.variables,
                s = t.fetchPolicy,
                u = t.refetchWritePolicy,
                l = t.errorPolicy,
                f = t.returnPartialData,
                p = t.context,
                d = t.notifyOnNetworkStatusChange,
                v = e.networkStatus;
              e.init({ document: this.transform(o).document, variables: a, networkStatus: r });
              var y = function () {
                  return e.getDiff(a);
                },
                m = function (t, r) {
                  void 0 === r && (r = e.networkStatus || x.I.loading);
                  var s = t.result;
                  !__DEV__ || f || (0, c.D)(s, {}) || C(t.missing);
                  var u = function (e) {
                    return h.y.of((0, n.pi)({ data: e, loading: (0, x.O)(r), networkStatus: r }, t.complete ? null : { partial: !0 }));
                  };
                  return s && i.transform(o).hasForcedResolvers
                    ? i.localState.runResolvers({ document: o, remoteResult: { data: s }, context: p, variables: a, onlyRunForcedResolvers: !0 }).then(function (e) {
                        return u(e.data || void 0);
                      })
                    : 'none' === l && r === x.I.refetch && Array.isArray(t.missing)
                    ? u(void 0)
                    : u(s);
                },
                b = 'no-cache' === s ? 0 : r === x.I.refetch && 'merge' !== u ? 1 : 2,
                g = function () {
                  return i.getResultsFromLink(e, b, { variables: a, context: p, fetchPolicy: s, errorPolicy: l });
                },
                _ = d && 'number' == typeof v && v !== r && (0, x.O)(r);
              switch (s) {
                default:
                case 'cache-first':
                  var k = y();
                  if (k.complete) return { fromLink: !1, sources: [m(k, e.markReady())] };
                  if (f || _) return { fromLink: !0, sources: [m(k), g()] };
                  return { fromLink: !0, sources: [g()] };
                case 'cache-and-network':
                  var k = y();
                  if (k.complete || f || _) return { fromLink: !0, sources: [m(k), g()] };
                  return { fromLink: !0, sources: [g()] };
                case 'cache-only':
                  return { fromLink: !1, sources: [m(y(), e.markReady())] };
                case 'network-only':
                  if (_) return { fromLink: !0, sources: [m(y()), g()] };
                  return { fromLink: !0, sources: [g()] };
                case 'no-cache':
                  if (_) return { fromLink: !0, sources: [m(e.getDiff()), g()] };
                  return { fromLink: !0, sources: [g()] };
                case 'standby':
                  return { fromLink: !1, sources: [] };
              }
            }),
            (e.prototype.getQuery = function (e) {
              return e && !this.queries.has(e) && this.queries.set(e, new J(this, e)), this.queries.get(e);
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return (0, n.pi)((0, n.pi)({}, t), { clientAwareness: this.clientAwareness });
            }),
            e
          );
        })(),
        H = r(3e3),
        X = !1,
        ee = (function () {
          function e(e) {
            var t = this;
            (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
            var r = e.uri,
              n = e.credentials,
              a = e.headers,
              s = e.cache,
              c = e.ssrMode,
              l = void 0 !== c && c,
              f = e.ssrForceFetchDelay,
              p = void 0 === f ? 0 : f,
              h = e.connectToDevTools,
              d = void 0 === h ? 'object' == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : h,
              v = e.queryDeduplication,
              y = void 0 === v || v,
              m = e.defaultOptions,
              b = e.assumeImmutableResults,
              g = e.resolvers,
              _ = e.typeDefs,
              k = e.fragmentMatcher,
              w = e.name,
              O = e.version,
              E = e.link;
            if ((E || (E = r ? new u({ uri: r, credentials: n, headers: a }) : o.i.empty()), !s))
              throw __DEV__
                ? new i.ej("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs")
                : new i.ej(9);
            if (
              ((this.link = E),
              (this.cache = s),
              (this.disableNetworkFetches = l || p > 0),
              (this.queryDeduplication = y),
              (this.defaultOptions = m || Object.create(null)),
              (this.typeDefs = _),
              p &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, p),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
              d && 'object' == typeof window && (window.__APOLLO_CLIENT__ = this),
              !X && d && __DEV__ && ((X = !0), 'undefined' != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
            ) {
              var S = window.navigator,
                D = S && S.userAgent,
                T = void 0;
              'string' == typeof D &&
                (D.indexOf('Chrome/') > -1
                  ? (T = 'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm')
                  : D.indexOf('Firefox/') > -1 && (T = 'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/')),
                T && __DEV__ && i.kG.log('Download the Apollo DevTools for a better development experience: ' + T);
            }
            (this.version = '3.7.14'),
              (this.localState = new z({ cache: s, client: this, resolvers: g, fragmentMatcher: k })),
              (this.queryManager = new K({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                queryDeduplication: y,
                ssrMode: l,
                clientAwareness: { name: w, version: O },
                localState: this.localState,
                assumeImmutableResults: void 0 !== b && b,
                onBroadcast: d
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: { queries: t.queryManager.getQueryStore(), mutations: t.queryManager.mutationStore || {} },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              }));
          }
          return (
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery && (e = (0, H.J)(this.defaultOptions.watchQuery, e)),
                this.disableNetworkFetches && ('network-only' === e.fetchPolicy || 'cache-and-network' === e.fetchPolicy) && (e = (0, n.pi)((0, n.pi)({}, e), { fetchPolicy: 'cache-first' })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query && (e = (0, H.J)(this.defaultOptions.query, e)),
                __DEV__
                  ? (0, i.kG)(
                      'cache-and-network' !== e.fetchPolicy,
                      'The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.'
                    )
                  : (0, i.kG)('cache-and-network' !== e.fetchPolicy, 10),
                this.disableNetworkFetches && 'network-only' === e.fetchPolicy && (e = (0, n.pi)((0, n.pi)({}, e), { fetchPolicy: 'cache-first' })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return this.defaultOptions.mutate && (e = (0, H.J)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              var t = this.cache.writeQuery(e);
              return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t;
            }),
            (e.prototype.writeFragment = function (e) {
              var t = this.cache.writeFragment(e);
              return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t;
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return a(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (t) {
                    return t !== e;
                  });
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (t) {
                    return t !== e;
                  });
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                r = [],
                n = [];
              t.forEach(function (e, t) {
                r.push(t), n.push(e);
              });
              var o = Promise.all(n);
              return (
                (o.queries = r),
                (o.results = n),
                o.catch(function (e) {
                  __DEV__ && i.kG.debug('In client.refetchQueries, Promise.all promise rejected with error '.concat(e));
                }),
                o
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return void 0 === e && (e = 'active'), this.queryManager.getObservableQueries(e);
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            e
          );
        })();
    },
    6427: function (e, t, r) {
      'use strict';
      r.d(t, {
        i: function () {
          return f;
        },
      });
      var n = r(7045),
        i = r(6772),
        o = r(4857),
        a = r(6537);
      function s(e, t) {
        return t ? t(e) : o.y.of();
      }
      function u(e) {
        return 'function' == typeof e ? new f(e) : e;
      }
      function c(e) {
        return e.request.length <= 1;
      }
      var l = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (n.link = r), n;
          }
          return (0, n.ZT)(t, e), t;
        })(Error),
        f = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return o.y.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(u).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, r, n) {
              var i = u(r),
                a = u(n || new e(s));
              return new e(
                c(i) && c(a)
                  ? function (e) {
                      return t(e) ? i.request(e) || o.y.of() : a.request(e) || o.y.of();
                    }
                  : function (e, r) {
                      return t(e) ? i.request(e, r) || o.y.of() : a.request(e, r) || o.y.of();
                    }
              );
            }),
            (e.execute = function (e, t) {
              var r, s, u, c;
              return (
                e.request(
                  ((u = t.context),
                  (s = {
                    variables:
                      (r = (function (e) {
                        for (var t = ['query', 'operationName', 'variables', 'extensions', 'context'], r = 0, n = Object.keys(e); r < n.length; r++) {
                          var o = n[r];
                          if (0 > t.indexOf(o)) throw __DEV__ ? new i.ej('illegal argument: '.concat(o)) : new i.ej(27);
                        }
                        return e;
                      })(t)).variables || {},
                    extensions: r.extensions || {},
                    operationName: r.operationName,
                    query: r.query,
                  }).operationName || (s.operationName = 'string' != typeof s.query ? (0, a.rY)(s.query) || void 0 : ''),
                  (c = (0, n.pi)({}, u)),
                  Object.defineProperty(s, 'setContext', {
                    enumerable: !1,
                    value: function (e) {
                      c = 'function' == typeof e ? (0, n.pi)((0, n.pi)({}, c), e(c)) : (0, n.pi)((0, n.pi)({}, c), e);
                    },
                  }),
                  Object.defineProperty(s, 'getContext', {
                    enumerable: !1,
                    value: function () {
                      return (0, n.pi)({}, c);
                    },
                  }),
                  s)
                ) || o.y.of()
              );
            }),
            (e.concat = function (t, r) {
              var n = u(t);
              if (c(n)) return __DEV__ && i.kG.warn(new l('You are calling concat on a terminating link, which will have no effect', n)), n;
              var a = u(r);
              return new e(
                c(a)
                  ? function (e) {
                      return (
                        n.request(e, function (e) {
                          return a.request(e) || o.y.of();
                        }) || o.y.of()
                      );
                    }
                  : function (e, t) {
                      return (
                        n.request(e, function (e) {
                          return a.request(e, t) || o.y.of();
                        }) || o.y.of()
                      );
                    }
              );
            }),
            (e.prototype.split = function (t, r, n) {
              return this.concat(e.split(t, r, n || new e(s)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw __DEV__ ? new i.ej('request is not implemented') : new i.ej(22);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })();
    },
    7445: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return V;
        },
      });
      var n = r(7045),
        i = r(6772),
        o = r(144),
        a = r(6427),
        s = r(1287),
        u = r(4857),
        c = function (e, t) {
          var r;
          try {
            r = JSON.stringify(e);
          } catch (e) {
            var n = __DEV__ ? new i.ej('Network request failed. '.concat(t, ' is not serializable: ').concat(e.message)) : new i.ej(24);
            throw ((n.parseError = e), n);
          }
          return r;
        },
        l = r(1066);
      function f(e) {
        var t = {
          next: function () {
            return e.read();
          },
        };
        return (
          l.DN &&
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
          t
        );
      }
      var p = function (e, t, r) {
          var n = Error(r);
          throw ((n.name = 'ServerError'), (n.response = e), (n.statusCode = e.status), (n.result = t), n);
        },
        h = r(1038),
        d = r(29),
        v = Object.prototype.hasOwnProperty;
      function y(e, t) {
        e.status >= 300 &&
          p(
            e,
            (function () {
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            })(),
            'Response not successful: Received status code '.concat(e.status)
          );
        try {
          return JSON.parse(t);
        } catch (n) {
          var r = n;
          throw ((r.name = 'ServerParseError'), (r.response = e), (r.statusCode = e.status), (r.bodyText = t), r);
        }
      }
      function m(e, t) {
        var r, n;
        'AbortError' !== e.name &&
          (e.result && e.result.errors && e.result.data && (null === (r = t.next) || void 0 === r || r.call(t, e.result)), null === (n = t.error) || void 0 === n || n.call(t, e));
      }
      var b = function (e) {
        if (!e && 'undefined' == typeof fetch)
          throw __DEV__
            ? new i.ej(
                "\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "
              )
            : new i.ej(23);
      };
      function g(e) {
        return 9 === e || 32 === e;
      }
      let _ = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function k(e) {
        return w[e.charCodeAt(0)];
      }
      let w = [
        '\\u0000',
        '\\u0001',
        '\\u0002',
        '\\u0003',
        '\\u0004',
        '\\u0005',
        '\\u0006',
        '\\u0007',
        '\\b',
        '\\t',
        '\\n',
        '\\u000B',
        '\\f',
        '\\r',
        '\\u000E',
        '\\u000F',
        '\\u0010',
        '\\u0011',
        '\\u0012',
        '\\u0013',
        '\\u0014',
        '\\u0015',
        '\\u0016',
        '\\u0017',
        '\\u0018',
        '\\u0019',
        '\\u001A',
        '\\u001B',
        '\\u001C',
        '\\u001D',
        '\\u001E',
        '\\u001F',
        '',
        '',
        '\\"',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '\\\\',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '\\u007F',
        '\\u0080',
        '\\u0081',
        '\\u0082',
        '\\u0083',
        '\\u0084',
        '\\u0085',
        '\\u0086',
        '\\u0087',
        '\\u0088',
        '\\u0089',
        '\\u008A',
        '\\u008B',
        '\\u008C',
        '\\u008D',
        '\\u008E',
        '\\u008F',
        '\\u0090',
        '\\u0091',
        '\\u0092',
        '\\u0093',
        '\\u0094',
        '\\u0095',
        '\\u0096',
        '\\u0097',
        '\\u0098',
        '\\u0099',
        '\\u009A',
        '\\u009B',
        '\\u009C',
        '\\u009D',
        '\\u009E',
        '\\u009F',
      ];
      function O(e) {
        return (0, o.Vn)(e, E);
      }
      let E = {
        Name: { leave: (e) => e.value },
        Variable: { leave: (e) => '$' + e.name },
        Document: { leave: (e) => S(e.definitions, '\n\n') },
        OperationDefinition: {
          leave(e) {
            let t = T('(', S(e.variableDefinitions, ', '), ')'),
              r = S([e.operation, S([e.name, t]), S(e.directives, ' ')], ' ');
            return ('query' === r ? '' : r + ' ') + e.selectionSet;
          },
        },
        VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ': ' + t + T(' = ', r) + T(' ', S(n, ' ')) },
        SelectionSet: { leave: ({ selections: e }) => D(e) },
        Field: {
          leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
            let o = T('', e, ': ') + t,
              a = o + T('(', S(r, ', '), ')');
            return a.length > 80 && (a = o + T('(\n', I(S(r, '\n')), '\n)')), S([a, S(n, ' '), i], ' ');
          },
        },
        Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
        FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + T(' ', S(t, ' ')) },
        InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: r }) => S(['...', T('on ', e), S(t, ' '), r], ' ') },
        FragmentDefinition: {
          leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => `fragment ${e}${T('(', S(r, ', '), ')')} on ${t} ${T('', S(n, ' '), ' ')}` + i,
        },
        IntValue: { leave: ({ value: e }) => e },
        FloatValue: { leave: ({ value: e }) => e },
        StringValue: {
          leave: ({ value: e, block: t }) =>
            t
              ? (function (e, t) {
                  let r = e.replace(/"""/g, '\\"""'),
                    n = r.split(/\r\n|[\n\r]/g),
                    i = 1 === n.length,
                    o = n.length > 1 && n.slice(1).every((e) => 0 === e.length || g(e.charCodeAt(0))),
                    a = r.endsWith('\\"""'),
                    s = e.endsWith('"') && !a,
                    u = e.endsWith('\\'),
                    c = s || u,
                    l = !(null != t && t.minimize) && (!i || e.length > 70 || c || o || a),
                    f = '',
                    p = i && g(e.charCodeAt(0));
                  return ((l && !p) || o) && (f += '\n'), (f += r), (l || c) && (f += '\n'), '"""' + f + '"""';
                })(e)
              : `"${e.replace(_, k)}"`,
        },
        BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
        NullValue: { leave: () => 'null' },
        EnumValue: { leave: ({ value: e }) => e },
        ListValue: { leave: ({ values: e }) => '[' + S(e, ', ') + ']' },
        ObjectValue: { leave: ({ fields: e }) => '{' + S(e, ', ') + '}' },
        ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
        Directive: { leave: ({ name: e, arguments: t }) => '@' + e + T('(', S(t, ', '), ')') },
        NamedType: { leave: ({ name: e }) => e },
        ListType: { leave: ({ type: e }) => '[' + e + ']' },
        NonNullType: { leave: ({ type: e }) => e + '!' },
        SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: r }) => T('', e, '\n') + S(['schema', S(t, ' '), D(r)], ' ') },
        OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
        ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: r }) => T('', e, '\n') + S(['scalar', t, S(r, ' ')], ' ') },
        ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => T('', e, '\n') + S(['type', t, T('implements ', S(r, ' & ')), S(n, ' '), D(i)], ' ') },
        FieldDefinition: {
          leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) =>
            T('', e, '\n') + t + (x(r) ? T('(\n', I(S(r, '\n')), '\n)') : T('(', S(r, ', '), ')')) + ': ' + n + T(' ', S(i, ' ')),
        },
        InputValueDefinition: { leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => T('', e, '\n') + S([t + ': ' + r, T('= ', n), S(i, ' ')], ' ') },
        InterfaceTypeDefinition: {
          leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => T('', e, '\n') + S(['interface', t, T('implements ', S(r, ' & ')), S(n, ' '), D(i)], ' '),
        },
        UnionTypeDefinition: { leave: ({ description: e, name: t, directives: r, types: n }) => T('', e, '\n') + S(['union', t, S(r, ' '), T('= ', S(n, ' | '))], ' ') },
        EnumTypeDefinition: { leave: ({ description: e, name: t, directives: r, values: n }) => T('', e, '\n') + S(['enum', t, S(r, ' '), D(n)], ' ') },
        EnumValueDefinition: { leave: ({ description: e, name: t, directives: r }) => T('', e, '\n') + S([t, S(r, ' ')], ' ') },
        InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: r, fields: n }) => T('', e, '\n') + S(['input', t, S(r, ' '), D(n)], ' ') },
        DirectiveDefinition: {
          leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) =>
            T('', e, '\n') + 'directive @' + t + (x(r) ? T('(\n', I(S(r, '\n')), '\n)') : T('(', S(r, ', '), ')')) + (n ? ' repeatable' : '') + ' on ' + S(i, ' | '),
        },
        SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => S(['extend schema', S(e, ' '), D(t)], ' ') },
        ScalarTypeExtension: { leave: ({ name: e, directives: t }) => S(['extend scalar', e, S(t, ' ')], ' ') },
        ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: r, fields: n }) => S(['extend type', e, T('implements ', S(t, ' & ')), S(r, ' '), D(n)], ' ') },
        InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: r, fields: n }) => S(['extend interface', e, T('implements ', S(t, ' & ')), S(r, ' '), D(n)], ' ') },
        UnionTypeExtension: { leave: ({ name: e, directives: t, types: r }) => S(['extend union', e, S(t, ' '), T('= ', S(r, ' | '))], ' ') },
        EnumTypeExtension: { leave: ({ name: e, directives: t, values: r }) => S(['extend enum', e, S(t, ' '), D(r)], ' ') },
        InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: r }) => S(['extend input', e, S(t, ' '), D(r)], ' ') },
      };
      function S(e, t = '') {
        var r;
        return null !== (r = null == e ? void 0 : e.filter((e) => e).join(t)) && void 0 !== r ? r : '';
      }
      function D(e) {
        return T('{\n', I(S(e, '\n')), '\n}');
      }
      function T(e, t, r = '') {
        return null != t && '' !== t ? e + t + r : '';
      }
      function I(e) {
        return T('  ', e.replace(/\n/g, '\n  '));
      }
      function x(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some((e) => e.includes('\n'))) && void 0 !== t && t;
      }
      var F = { http: { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 }, headers: { accept: '*/*', 'content-type': 'application/json' }, options: { method: 'POST' } },
        N = function (e, t) {
          return t(e);
        },
        j = function () {
          if ('undefined' == typeof AbortController) return { controller: !1, signal: !1 };
          var e = new AbortController(),
            t = e.signal;
          return { controller: e, signal: t };
        };
      function q(e) {
        return new u.y(function (t) {
          t.error(e);
        });
      }
      var R = r(6537),
        P = (0, i.wY)(function () {
          return fetch;
        }),
        V = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? '/graphql' : t,
            g = e.fetch,
            _ = e.print,
            k = void 0 === _ ? N : _,
            w = e.includeExtensions,
            E = e.preserveHeaderCase,
            S = e.useGETForQueries,
            D = e.includeUnusedVariables,
            T = void 0 !== D && D,
            I = (0, n._T)(e, ['uri', 'fetch', 'print', 'includeExtensions', 'preserveHeaderCase', 'useGETForQueries', 'includeUnusedVariables']);
          __DEV__ && b(g || P);
          var x = { http: { includeExtensions: w, preserveHeaderCase: E }, options: I.fetchOptions, credentials: I.credentials, headers: I.headers };
          return new a.i(function (e) {
            var t,
              a,
              b,
              _,
              w = ((t = e), (a = r), t.getContext().uri || ('function' == typeof a ? a(t) : a || '/graphql')),
              E = e.getContext(),
              D = {};
            if (E.clientAwareness) {
              var I = E.clientAwareness,
                N = I.name,
                V = I.version;
              N && (D['apollographql-client-name'] = N), V && (D['apollographql-client-version'] = V);
            }
            var C = (0, n.pi)((0, n.pi)({}, D), E.headers),
              M = (function (e, t) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var o = {},
                  a = {};
                r.forEach(function (e) {
                  (o = (0, n.pi)((0, n.pi)((0, n.pi)({}, o), e.options), { headers: (0, n.pi)((0, n.pi)({}, o.headers), e.headers) })),
                    e.credentials && (o.credentials = e.credentials),
                    (a = (0, n.pi)((0, n.pi)({}, a), e.http));
                }),
                  o.headers &&
                    (o.headers = (function (e, t) {
                      if (!t) {
                        var r = Object.create(null);
                        return (
                          Object.keys(Object(e)).forEach(function (t) {
                            r[t.toLowerCase()] = e[t];
                          }),
                          r
                        );
                      }
                      var n = Object.create(null);
                      Object.keys(Object(e)).forEach(function (t) {
                        n[t.toLowerCase()] = { originalName: t, value: e[t] };
                      });
                      var i = Object.create(null);
                      return (
                        Object.keys(n).forEach(function (e) {
                          i[n[e].originalName] = n[e].value;
                        }),
                        i
                      );
                    })(o.headers, a.preserveHeaderCase));
                var s = e.operationName,
                  u = e.extensions,
                  c = e.variables,
                  l = e.query,
                  f = { operationName: s, variables: c };
                return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, O)), { options: o, body: f };
              })(e, k, F, x, { http: E.http, options: E.fetchOptions, credentials: E.credentials, headers: C }),
              Q = M.options,
              A = M.body;
            if (A.variables && !T) {
              var L = new Set(Object.keys(A.variables));
              (0, o.Vn)(e.query, {
                Variable: function (e, t, r) {
                  r && 'VariableDefinition' !== r.kind && L.delete(e.name.value);
                },
              }),
                L.size &&
                  ((A.variables = (0, n.pi)({}, A.variables)),
                  L.forEach(function (e) {
                    delete A.variables[e];
                  }));
            }
            if (!Q.signal) {
              var G = j(),
                B = G.controller,
                z = G.signal;
              (_ = B) && (Q.signal = z);
            }
            var U = 'OperationDefinition' === (b = (0, R.p$)(e.query)).kind && 'subscription' === b.operation,
              W = (0, s.FS)(['defer'], e.query);
            if (
              (S &&
                !e.query.definitions.some(function (e) {
                  return 'OperationDefinition' === e.kind && 'mutation' === e.operation;
                }) &&
                (Q.method = 'GET'),
              W || U)
            ) {
              Q.headers = Q.headers || {};
              var Y = 'multipart/mixed;';
              U && W && __DEV__ && i.kG.warn('Multipart-subscriptions do not support @defer'),
                U ? (Y += 'boundary=graphql;subscriptionSpec=1.0,application/json') : W && (Y += 'deferSpec=20220824,application/json'),
                (Q.headers.accept = Y);
            }
            if ('GET' === Q.method) {
              var J = (function (e, t) {
                  var r = [],
                    n = function (e, t) {
                      r.push(''.concat(e, '=').concat(encodeURIComponent(t)));
                    };
                  if (('query' in t && n('query', t.query), t.operationName && n('operationName', t.operationName), t.variables)) {
                    var i = void 0;
                    try {
                      i = c(t.variables, 'Variables map');
                    } catch (e) {
                      return { parseError: e };
                    }
                    n('variables', i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = c(t.extensions, 'Extensions map');
                    } catch (e) {
                      return { parseError: e };
                    }
                    n('extensions', o);
                  }
                  var a = '',
                    s = e,
                    u = e.indexOf('#');
                  -1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)));
                  var l = -1 === s.indexOf('?') ? '?' : '&';
                  return { newURI: s + l + r.join('&') + a };
                })(w, A),
                $ = J.newURI,
                Z = J.parseError;
              if (Z) return q(Z);
              w = $;
            } else
              try {
                Q.body = c(A, 'Payload');
              } catch (e) {
                return q(e);
              }
            return new u.y(function (t) {
              return (
                (
                  g ||
                  (0, i.wY)(function () {
                    return fetch;
                  }) ||
                  P
                )(w, Q)
                  .then(function (r) {
                    e.setContext({ response: r });
                    var i,
                      o = null === (i = r.headers) || void 0 === i ? void 0 : i.get('content-type');
                    return null !== o && /^multipart\/mixed/i.test(o)
                      ? (function (e, t) {
                          var r, i, o, a, s;
                          return (0, n.mG)(this, void 0, void 0, function () {
                            var u, c, p, v, b, g, _, k, w, O, E, S, D, T, I, x, F, N, j, q, R;
                            return (0, n.Jh)(this, function (P) {
                              switch (P.label) {
                                case 0:
                                  if (void 0 === TextDecoder) throw Error('TextDecoder must be defined in the environment: please import a polyfill.');
                                  (u = new TextDecoder('utf-8')),
                                    (c = null === (r = e.headers) || void 0 === r ? void 0 : r.get('content-type')),
                                    (p = 'boundary='),
                                    (v = (null == c ? void 0 : c.includes(p))
                                      ? null == c
                                        ? void 0
                                        : c
                                            .substring((null == c ? void 0 : c.indexOf(p)) + p.length)
                                            .replace(/['"]/g, '')
                                            .replace(/\;(.*)/gm, '')
                                            .trim()
                                      : '-'),
                                    (b = '--'.concat(v)),
                                    (g = ''),
                                    (_ = (function (e) {
                                      var t,
                                        r,
                                        n,
                                        i,
                                        o,
                                        a,
                                        s = e;
                                      if ((e.body && (s = e.body), (t = s), l.DN && t[Symbol.asyncIterator]))
                                        return (
                                          (n = s[Symbol.asyncIterator]()),
                                          ((r = {
                                            next: function () {
                                              return n.next();
                                            },
                                          })[Symbol.asyncIterator] = function () {
                                            return this;
                                          }),
                                          r
                                        );
                                      if (s.getReader) return f(s.getReader());
                                      if (s.stream) return f(s.stream().getReader());
                                      if (s.arrayBuffer)
                                        return (
                                          (i = s.arrayBuffer()),
                                          (o = !1),
                                          (a = {
                                            next: function () {
                                              return o
                                                ? Promise.resolve({ value: void 0, done: !0 })
                                                : ((o = !0),
                                                  new Promise(function (e, t) {
                                                    i.then(function (t) {
                                                      e({ value: t, done: !1 });
                                                    }).catch(t);
                                                  }));
                                            },
                                          }),
                                          l.DN &&
                                            (a[Symbol.asyncIterator] = function () {
                                              return this;
                                            }),
                                          a
                                        );
                                      if (s.pipe)
                                        return (function (e) {
                                          var t = null,
                                            r = null,
                                            n = !1,
                                            i = [],
                                            o = [];
                                          function a(e) {
                                            if (!r) {
                                              if (o.length) {
                                                var t = o.shift();
                                                if (Array.isArray(t) && t[0]) return t[0]({ value: e, done: !1 });
                                              }
                                              i.push(e);
                                            }
                                          }
                                          function s(e) {
                                            (r = e),
                                              o.slice().forEach(function (t) {
                                                t[1](e);
                                              }),
                                              t && t();
                                          }
                                          function u() {
                                            (n = !0),
                                              o.slice().forEach(function (e) {
                                                e[0]({ value: void 0, done: !0 });
                                              }),
                                              t && t();
                                          }
                                          (t = function () {
                                            (t = null),
                                              e.removeListener('data', a),
                                              e.removeListener('error', s),
                                              e.removeListener('end', u),
                                              e.removeListener('finish', u),
                                              e.removeListener('close', u);
                                          }),
                                            e.on('data', a),
                                            e.on('error', s),
                                            e.on('end', u),
                                            e.on('finish', u),
                                            e.on('close', u);
                                          var c = {
                                            next: function () {
                                              return new Promise(function (e, t) {
                                                return r ? t(r) : i.length ? e({ value: i.shift(), done: !1 }) : n ? e({ value: void 0, done: !0 }) : void o.push([e, t]);
                                              });
                                            },
                                          };
                                          return (
                                            l.DN &&
                                              (c[Symbol.asyncIterator] = function () {
                                                return this;
                                              }),
                                            c
                                          );
                                        })(s);
                                      throw Error('Unknown body type for responseIterator. Please pass a streamable response.');
                                    })(e)),
                                    (k = !0),
                                    (P.label = 1);
                                case 1:
                                  if (!k) return [3, 3];
                                  return [4, _.next()];
                                case 2:
                                  for (O = (w = P.sent()).value, E = w.done, S = 'string' == typeof O ? O : u.decode(O), k = !E, g += S, D = g.indexOf(b); D > -1; ) {
                                    if (((T = void 0), (T = (q = [g.slice(0, D), g.slice(D + b.length)])[0]), (g = q[1]), T.trim())) {
                                      if (
                                        ((I = T.indexOf('\r\n\r\n')),
                                        (x = (function (e) {
                                          var t = {};
                                          return (
                                            e.split('\n').forEach(function (e) {
                                              var r = e.indexOf(':');
                                              if (r > -1) {
                                                var n = e.slice(0, r).trim().toLowerCase(),
                                                  i = e.slice(r + 1).trim();
                                                t[n] = i;
                                              }
                                            }),
                                            t
                                          );
                                        })(T.slice(0, I))['content-type']) && -1 === x.toLowerCase().indexOf('application/json'))
                                      )
                                        throw Error('Unsupported patch content type: application/json is required.');
                                      F = T.slice(I);
                                      try {
                                        (N = y(e, F.replace('\r\n', ''))),
                                          Object.keys(N).length > 1 || 'data' in N || 'incremental' in N || 'errors' in N || 'payload' in N
                                            ? (0, d.yU)(N)
                                              ? ((j = {}),
                                                'payload' in N && (j = (0, n.pi)({}, N.payload)),
                                                'errors' in N &&
                                                  (j = (0, n.pi)((0, n.pi)({}, j), {
                                                    extensions: (0, n.pi)((0, n.pi)({}, 'extensions' in j ? j.extensions : null), (((R = {})[h.YG] = N.errors), R)),
                                                  })),
                                                null === (i = t.next) || void 0 === i || i.call(t, j))
                                              : null === (o = t.next) || void 0 === o || o.call(t, N)
                                            : 1 === Object.keys(N).length && 'hasNext' in N && !N.hasNext && (null === (a = t.complete) || void 0 === a || a.call(t));
                                      } catch (e) {
                                        m(e, t);
                                      }
                                    }
                                    D = g.indexOf(b);
                                  }
                                  return [3, 1];
                                case 3:
                                  return null === (s = t.complete) || void 0 === s || s.call(t), [2];
                              }
                            });
                          });
                        })(r, t)
                      : (function (e, t, r) {
                          var n;
                          (n = e)
                            .text()
                            .then(function (e) {
                              return y(n, e);
                            })
                            .then(function (e) {
                              return (
                                n.status >= 300 && p(n, e, 'Response not successful: Received status code '.concat(n.status)),
                                Array.isArray(e) ||
                                  v.call(e, 'data') ||
                                  v.call(e, 'errors') ||
                                  p(
                                    n,
                                    e,
                                    "Server response was missing for query '".concat(
                                      Array.isArray(t)
                                        ? t.map(function (e) {
                                            return e.operationName;
                                          })
                                        : t.operationName,
                                      "'."
                                    )
                                  ),
                                e
                              );
                            })
                            .then(function (e) {
                              var t, n;
                              null === (t = r.next) || void 0 === t || t.call(r, e), null === (n = r.complete) || void 0 === n || n.call(r);
                            })
                            .catch(function (e) {
                              return m(e, r);
                            });
                        })(r, e, t);
                  })
                  .catch(function (e) {
                    return m(e, t);
                  }),
                function () {
                  _ && _.abort();
                }
              );
            });
          });
        };
    },
    1593: function (e, t, r) {
      'use strict';
      r.d(t, {
        e: function () {
          return a;
        },
      });
      var n = r(6772),
        i = r(9624),
        o = r(6668),
        a = function (e) {
          var t = e.client,
            r = e.children,
            a = (0, o.K)();
          return i.createElement(a.Consumer, null, function (e) {
            return (
              void 0 === e && (e = {}),
              t && e.client !== t && (e = Object.assign({}, e, { client: t })),
              __DEV__ ? (0, n.kG)(e.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : (0, n.kG)(e.client, 29),
              i.createElement(a.Provider, { value: e }, r)
            );
          });
        };
    },
    9161: function (e, t, r) {
      'use strict';
      r.d(t, {
        X: function () {
          return i;
        },
      });
      var n = Object.prototype.toString;
      function i(e) {
        return (function e(t, r) {
          switch (n.call(t)) {
            case '[object Array]':
              if ((r = r || new Map()).has(t)) return r.get(t);
              var i = t.slice(0);
              return (
                r.set(t, i),
                i.forEach(function (t, n) {
                  i[n] = e(t, r);
                }),
                i
              );
            case '[object Object]':
              if ((r = r || new Map()).has(t)) return r.get(t);
              var o = Object.create(Object.getPrototypeOf(t));
              return (
                r.set(t, o),
                Object.keys(t).forEach(function (n) {
                  o[n] = e(t[n], r);
                }),
                o
              );
            default:
              return t;
          }
        })(e);
      }
    },
    29: function (e, t, r) {
      'use strict';
      r.d(t, {
        GG: function () {
          return a;
        },
        M0: function () {
          return s;
        },
        mT: function () {
          return c;
        },
        yU: function () {
          return u;
        },
      });
      var n = r(7919),
        i = r(6388),
        o = r(1317);
      function a(e) {
        return 'incremental' in e;
      }
      function s(e) {
        return a(e) || ('hasNext' in e && 'data' in e);
      }
      function u(e) {
        return (0, n.s)(e) && 'payload' in e;
      }
      function c(e, t) {
        var r = e,
          n = new o.w0();
        return (
          a(t) &&
            (0, i.O)(t.incremental) &&
            t.incremental.forEach(function (e) {
              for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
                var a = i[o],
                  s = isNaN(+a) ? {} : [];
                (s[a] = t), (t = s);
              }
              r = n.merge(r, t);
            }),
          r
        );
      }
    },
    3142: function (e, t, r) {
      'use strict';
      r.d(t, {
        X: function () {
          return i;
        },
      });
      var n = new Map();
      function i(e) {
        var t = n.get(e) || 1;
        return n.set(e, t + 1), ''.concat(e, ':').concat(t, ':').concat(Math.random().toString(36).slice(2));
      }
    },
    1317: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ee: function () {
          return a;
        },
        bw: function () {
          return s;
        },
        w0: function () {
          return c;
        },
      });
      var n = r(7045),
        i = r(7919),
        o = Object.prototype.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(e);
      }
      function s(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1) for (var n = new c(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t;
      }
      var u = function (e, t, r) {
          return this.merge(e[r], t[r]);
        },
        c = (function () {
          function e(e) {
            void 0 === e && (e = u), (this.reconciler = e), (this.isObject = i.s), (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var r = this, a = [], s = 2; s < arguments.length; s++) a[s - 2] = arguments[s];
              return (0, i.s)(t) && (0, i.s)(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (o.call(e, i)) {
                      var s = e[i];
                      if (t[i] !== s) {
                        var u = r.reconciler.apply(r, (0, n.ev)([e, t, i], a, !1));
                        u !== s && ((e = r.shallowCopyForMerge(e))[i] = u);
                      }
                    } else (e = r.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (0, i.s)(e) && !this.pastCopies.has(e) && ((e = Array.isArray(e) ? e.slice(0) : (0, n.pi)({ __proto__: Object.getPrototypeOf(e) }, e)), this.pastCopies.add(e)), e;
            }),
            e
          );
        })();
    },
    1287: function (e, t, r) {
      'use strict';
      r.d(t, {
        FS: function () {
          return a;
        },
        LZ: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      var n = r(6772),
        i = r(144);
      function o(e, t) {
        var r,
          i = e.directives;
        return (
          !i ||
          !i.length ||
          ((r = []),
          i &&
            i.length &&
            i.forEach(function (e) {
              var t;
              if ('skip' === (t = e.name.value) || 'include' === t) {
                var i = e.arguments,
                  o = e.name.value;
                __DEV__ ? (0, n.kG)(i && 1 === i.length, 'Incorrect number of arguments for the @'.concat(o, ' directive.')) : (0, n.kG)(i && 1 === i.length, 41);
                var a = i[0];
                __DEV__ ? (0, n.kG)(a.name && 'if' === a.name.value, 'Invalid argument for the @'.concat(o, ' directive.')) : (0, n.kG)(a.name && 'if' === a.name.value, 42);
                var s = a.value;
                __DEV__
                  ? (0, n.kG)(s && ('Variable' === s.kind || 'BooleanValue' === s.kind), 'Argument for the @'.concat(o, ' directive must be a variable or a boolean value.'))
                  : (0, n.kG)(s && ('Variable' === s.kind || 'BooleanValue' === s.kind), 43),
                  r.push({ directive: e, ifArgument: a });
              }
            }),
          r).every(function (e) {
            var r = e.directive,
              i = e.ifArgument,
              o = !1;
            return (
              'Variable' === i.value.kind
                ? ((o = t && t[i.value.name.value]), __DEV__ ? (0, n.kG)(void 0 !== o, 'Invalid variable referenced in @'.concat(r.name.value, ' directive.')) : (0, n.kG)(void 0 !== o, 40))
                : (o = i.value.value),
              'skip' === r.name.value ? !o : o
            );
          })
        );
      }
      function a(e, t, r) {
        var n = new Set(e),
          o = n.size;
        return (
          (0, i.Vn)(t, {
            Directive: function (e) {
              if (n.delete(e.name.value) && (!r || !n.size)) return i.$_;
            },
          }),
          r ? !n.size : n.size < o
        );
      }
      function s(e) {
        return e && a(['client', 'export'], e, !0);
      }
    },
    2500: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return a;
        },
        Yk: function () {
          return o;
        },
        hi: function () {
          return s;
        },
      });
      var n = r(7045),
        i = r(6772);
      function o(e, t) {
        var r = t,
          o = [];
        return (
          e.definitions.forEach(function (e) {
            if ('OperationDefinition' === e.kind)
              throw __DEV__
                ? new i.ej(
                    'Found a '.concat(e.operation, ' operation').concat(e.name ? " named '".concat(e.name.value, "'") : '', '. ') +
                      'No operations are allowed when using a fragment as a query. Only fragments are allowed.'
                  )
                : new i.ej(44);
            'FragmentDefinition' === e.kind && o.push(e);
          }),
          void 0 === r &&
            (__DEV__ ? (0, i.kG)(1 === o.length, 'Found '.concat(o.length, ' fragments. `fragmentName` must be provided when there is not exactly 1 fragment.')) : (0, i.kG)(1 === o.length, 45),
            (r = o[0].name.value)),
          (0, n.pi)((0, n.pi)({}, e), {
            definitions: (0, n.ev)(
              [{ kind: 'OperationDefinition', operation: 'query', selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: r } }] } }],
              e.definitions,
              !0
            ),
          })
        );
      }
      function a(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function s(e, t) {
        switch (e.kind) {
          case 'InlineFragment':
            return e;
          case 'FragmentSpread':
            var r = e.name.value;
            if ('function' == typeof t) return t(r);
            var n = t && t[r];
            return __DEV__ ? (0, i.kG)(n, 'No fragment named '.concat(r)) : (0, i.kG)(n, 46), n || null;
          default:
            return null;
        }
      }
    },
    6537: function (e, t, r) {
      'use strict';
      r.d(t, {
        $H: function () {
          return a;
        },
        A$: function () {
          return o;
        },
        O4: function () {
          return p;
        },
        iW: function () {
          return c;
        },
        kU: function () {
          return u;
        },
        p$: function () {
          return f;
        },
        pD: function () {
          return l;
        },
        rY: function () {
          return s;
        },
      });
      var n = r(6772),
        i = r(8745);
      function o(e) {
        __DEV__
          ? (0, n.kG)(
              e && 'Document' === e.kind,
              'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
            )
          : (0, n.kG)(e && 'Document' === e.kind, 47);
        var t = e.definitions
          .filter(function (e) {
            return 'FragmentDefinition' !== e.kind;
          })
          .map(function (e) {
            if ('OperationDefinition' !== e.kind) throw __DEV__ ? new n.ej('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new n.ej(48);
            return e;
          });
        return __DEV__ ? (0, n.kG)(t.length <= 1, 'Ambiguous GraphQL document: contains '.concat(t.length, ' operations')) : (0, n.kG)(t.length <= 1, 49), e;
      }
      function a(e) {
        return (
          o(e),
          e.definitions.filter(function (e) {
            return 'OperationDefinition' === e.kind;
          })[0]
        );
      }
      function s(e) {
        return (
          e.definitions
            .filter(function (e) {
              return 'OperationDefinition' === e.kind && !!e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function u(e) {
        return e.definitions.filter(function (e) {
          return 'FragmentDefinition' === e.kind;
        });
      }
      function c(e) {
        var t = a(e);
        return __DEV__ ? (0, n.kG)(t && 'query' === t.operation, 'Must contain a query definition.') : (0, n.kG)(t && 'query' === t.operation, 50), t;
      }
      function l(e) {
        __DEV__
          ? (0, n.kG)('Document' === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')
          : (0, n.kG)('Document' === e.kind, 51),
          __DEV__ ? (0, n.kG)(e.definitions.length <= 1, 'Fragment must have exactly one definition.') : (0, n.kG)(e.definitions.length <= 1, 52);
        var t = e.definitions[0];
        return __DEV__ ? (0, n.kG)('FragmentDefinition' === t.kind, 'Must be a fragment definition.') : (0, n.kG)('FragmentDefinition' === t.kind, 53), t;
      }
      function f(e) {
        o(e);
        for (var t, r = 0, i = e.definitions; r < i.length; r++) {
          var a = i[r];
          if ('OperationDefinition' === a.kind) {
            var s = a.operation;
            if ('query' === s || 'mutation' === s || 'subscription' === s) return a;
          }
          'FragmentDefinition' !== a.kind || t || (t = a);
        }
        if (t) return t;
        throw __DEV__ ? new n.ej('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new n.ej(54);
      }
      function p(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return (
          r &&
            r.length &&
            r.forEach(function (e) {
              e.defaultValue && (0, i.vb)(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
    },
    8745: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ao: function () {
          return b;
        },
        JW: function () {
          return u;
        },
        My: function () {
          return m;
        },
        NC: function () {
          return v;
        },
        PT: function () {
          return p;
        },
        Yk: function () {
          return s;
        },
        kQ: function () {
          return a;
        },
        qw: function () {
          return function e(t, r, n) {
            if ('string' == typeof t.__typename) return t.__typename;
            for (var i = 0, a = r.selections; i < a.length; i++) {
              var s = a[i];
              if (m(s)) {
                if ('__typename' === s.name.value) return t[y(s)];
              } else {
                var u = e(t, (0, o.hi)(s, n).selectionSet, n);
                if ('string' == typeof u) return u;
              }
            }
          };
        },
        u2: function () {
          return y;
        },
        vb: function () {
          return c;
        },
        vf: function () {
          return l;
        },
      });
      var n = r(6772),
        i = r(7919),
        o = r(2500);
      function a(e) {
        return { __ref: String(e) };
      }
      function s(e) {
        return !!(e && 'object' == typeof e && 'string' == typeof e.__ref);
      }
      function u(e) {
        return (0, i.s)(e) && 'Document' === e.kind && Array.isArray(e.definitions);
      }
      function c(e, t, r, i) {
        if ('IntValue' === r.kind || 'FloatValue' === r.kind) e[t.value] = Number(r.value);
        else if ('BooleanValue' === r.kind || 'StringValue' === r.kind) e[t.value] = r.value;
        else if ('ObjectValue' === r.kind) {
          var o = {};
          r.fields.map(function (e) {
            return c(o, e.name, e.value, i);
          }),
            (e[t.value] = o);
        } else if ('Variable' === r.kind) {
          var a = (i || {})[r.name.value];
          e[t.value] = a;
        } else if ('ListValue' === r.kind)
          e[t.value] = r.values.map(function (e) {
            var r = {};
            return c(r, t, e, i), r[t.value];
          });
        else if ('EnumValue' === r.kind) e[t.value] = r.value;
        else if ('NullValue' === r.kind) e[t.value] = null;
        else
          throw __DEV__
            ? new n.ej('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + 'is not supported. Use variables instead of inline arguments to overcome this limitation.')
            : new n.ej(55);
      }
      function l(e, t) {
        var r = null;
        e.directives &&
          ((r = {}),
          e.directives.forEach(function (e) {
            (r[e.name.value] = {}),
              e.arguments &&
                e.arguments.forEach(function (n) {
                  var i = n.name,
                    o = n.value;
                  return c(r[e.name.value], i, o, t);
                });
          }));
        var n = null;
        return (
          e.arguments &&
            e.arguments.length &&
            ((n = {}),
            e.arguments.forEach(function (e) {
              return c(n, e.name, e.value, t);
            })),
          p(e.name.value, n, r)
        );
      }
      var f = ['connection', 'include', 'skip', 'client', 'rest', 'export'],
        p = Object.assign(
          function (e, t, r) {
            if (t && r && r.connection && r.connection.key) {
              if (!r.connection.filter || !(r.connection.filter.length > 0)) return r.connection.key;
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return (
                n.forEach(function (e) {
                  i[e] = t[e];
                }),
                ''.concat(r.connection.key, '(').concat(h(i), ')')
              );
            }
            var o = e;
            if (t) {
              var a = h(t);
              o += '('.concat(a, ')');
            }
            return (
              r &&
                Object.keys(r).forEach(function (e) {
                  -1 === f.indexOf(e) && (r[e] && Object.keys(r[e]).length ? (o += '@'.concat(e, '(').concat(h(r[e]), ')')) : (o += '@'.concat(e)));
                }),
              o
            );
          },
          {
            setStringify: function (e) {
              var t = h;
              return (h = e), t;
            },
          }
        ),
        h = function (e) {
          return JSON.stringify(e, d);
        };
      function d(e, t) {
        return (
          (0, i.s)(t) &&
            !Array.isArray(t) &&
            (t = Object.keys(t)
              .sort()
              .reduce(function (e, r) {
                return (e[r] = t[r]), e;
              }, {})),
          t
        );
      }
      function v(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return (
            e.arguments.forEach(function (e) {
              return c(r, e.name, e.value, t);
            }),
            r
          );
        }
        return null;
      }
      function y(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function m(e) {
        return 'Field' === e.kind;
      }
      function b(e) {
        return 'InlineFragment' === e.kind;
      }
    },
    6721: function (e, t, r) {
      'use strict';
      r.d(t, {
        Fo: function () {
          return y;
        },
        Gw: function () {
          return d;
        },
        aL: function () {
          return m;
        },
        ob: function () {
          return b;
        },
      });
      var n = r(7045),
        i = r(6772),
        o = r(6955),
        a = r(144),
        s = r(6537),
        u = r(8745),
        c = r(2500),
        l = r(6388),
        f = { kind: o.h.FIELD, name: { kind: o.h.NAME, value: '__typename' } };
      function p(e) {
        var t = new Map();
        return function (r) {
          void 0 === r && (r = e);
          var n = t.get(r);
          return n || t.set(r, (n = { variables: new Set(), fragmentSpreads: new Set() })), n;
        };
      }
      function h(e, t) {
        for (
          var r,
            u,
            f,
            h = p(''),
            d = p(''),
            v = function (e) {
              for (var t = 0, r = void 0; t < e.length && (r = e[t]); ++t)
                if (!(0, l.k)(r)) {
                  if (r.kind === o.h.OPERATION_DEFINITION) return h(r.name && r.name.value);
                  if (r.kind === o.h.FRAGMENT_DEFINITION) return d(r.name.value);
                }
              return __DEV__ && i.kG.error('Could not find operation or fragment'), null;
            },
            y = 0,
            m = t.definitions.length - 1;
          m >= 0;
          --m
        )
          t.definitions[m].kind === o.h.OPERATION_DEFINITION && ++y;
        var b =
            ((r = new Set()),
            (u = []),
            e.forEach(function (e) {
              e.name ? r.add(e.name) : e.test && u.push(e.test);
            }),
            function (e) {
              return (
                r.has(e.name.value) ||
                u.some(function (t) {
                  return t(e);
                })
              );
            }),
          g = e.some(function (e) {
            return e.remove;
          }),
          _ = function (e) {
            return g && e && e.some(b);
          },
          k = new Map(),
          w = !1,
          O = {
            enter: function (e) {
              if (_(e.directives)) return (w = !0), null;
            },
          },
          E = (0, a.Vn)(t, {
            Field: O,
            InlineFragment: O,
            VariableDefinition: {
              enter: function () {
                return !1;
              },
            },
            Variable: {
              enter: function (e, t, r, n, i) {
                var o = v(i);
                o && o.variables.add(e.name.value);
              },
            },
            FragmentSpread: {
              enter: function (e, t, r, n, i) {
                if (_(e.directives)) return (w = !0), null;
                var o = v(i);
                o && o.fragmentSpreads.add(e.name.value);
              },
            },
            FragmentDefinition: {
              enter: function (e, t, r, n) {
                k.set(JSON.stringify(n), e);
              },
              leave: function (e, t, r, n) {
                return e === k.get(JSON.stringify(n))
                  ? e
                  : y > 0 &&
                    e.selectionSet.selections.every(function (e) {
                      return e.kind === o.h.FIELD && '__typename' === e.name.value;
                    })
                  ? ((d(e.name.value).removed = !0), (w = !0), null)
                  : void 0;
              },
            },
            Directive: {
              leave: function (e) {
                if (b(e)) return (w = !0), null;
              },
            },
          });
        if (!w) return t;
        var S = function (e) {
            return (
              e.transitiveVars ||
                ((e.transitiveVars = new Set(e.variables)),
                e.removed ||
                  e.fragmentSpreads.forEach(function (t) {
                    S(d(t)).transitiveVars.forEach(function (t) {
                      e.transitiveVars.add(t);
                    });
                  })),
              e
            );
          },
          D = new Set();
        E.definitions.forEach(function (e) {
          e.kind === o.h.OPERATION_DEFINITION
            ? S(h(e.name && e.name.value)).fragmentSpreads.forEach(function (e) {
                D.add(e);
              })
            : e.kind !== o.h.FRAGMENT_DEFINITION || 0 !== y || d(e.name.value).removed || D.add(e.name.value);
        }),
          D.forEach(function (e) {
            S(d(e)).fragmentSpreads.forEach(function (e) {
              D.add(e);
            });
          });
        var T = {
          enter: function (e) {
            var t;
            if (((t = e.name.value), !D.has(t) || d(t).removed)) return null;
          },
        };
        return (
          (f = (0, a.Vn)(E, {
            FragmentSpread: T,
            FragmentDefinition: T,
            OperationDefinition: {
              leave: function (e) {
                if (e.variableDefinitions) {
                  var t = S(h(e.name && e.name.value)).transitiveVars;
                  if (t.size < e.variableDefinitions.length)
                    return (0, n.pi)((0, n.pi)({}, e), {
                      variableDefinitions: e.variableDefinitions.filter(function (e) {
                        return t.has(e.variable.name.value);
                      }),
                    });
                }
              },
            },
          })),
          !(function e(t, r) {
            return (
              !t ||
              t.selectionSet.selections.every(function (t) {
                return t.kind === o.h.FRAGMENT_SPREAD && e(r[t.name.value], r);
              })
            );
          })((0, s.$H)(f) || (0, s.pD)(f), (0, c.F)((0, s.kU)(f)))
            ? f
            : null
        );
      }
      var d = Object.assign(
          function (e) {
            return (0, a.Vn)(e, {
              SelectionSet: {
                enter: function (e, t, r) {
                  if (!r || r.kind !== o.h.OPERATION_DEFINITION) {
                    var i = e.selections;
                    if (
                      !(
                        !i ||
                        i.some(function (e) {
                          return (0, u.My)(e) && ('__typename' === e.name.value || 0 === e.name.value.lastIndexOf('__', 0));
                        })
                      ) &&
                      !(
                        (0, u.My)(r) &&
                        r.directives &&
                        r.directives.some(function (e) {
                          return 'export' === e.name.value;
                        })
                      )
                    )
                      return (0, n.pi)((0, n.pi)({}, e), { selections: (0, n.ev)((0, n.ev)([], i, !0), [f], !1) });
                  }
                },
              },
            });
          },
          {
            added: function (e) {
              return e === f;
            },
          }
        ),
        v = {
          test: function (e) {
            var t = 'connection' === e.name.value;
            return (
              t &&
                (!e.arguments ||
                  !e.arguments.some(function (e) {
                    return 'key' === e.name.value;
                  })) &&
                __DEV__ &&
                i.kG.warn('Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.'),
              t
            );
          },
        };
      function y(e) {
        return h([v], (0, s.A$)(e));
      }
      function m(e) {
        return 'query' === (0, s.p$)(e).operation
          ? e
          : (0, a.Vn)(e, {
              OperationDefinition: {
                enter: function (e) {
                  return (0, n.pi)((0, n.pi)({}, e), { operation: 'query' });
                },
              },
            });
      }
      function b(e) {
        return (
          (0, s.A$)(e),
          h(
            [
              {
                test: function (e) {
                  return 'client' === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          )
        );
      }
    },
    6955: function (e, t, r) {
      'use strict';
      var n, i;
      r.d(t, {
        h: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).NAME = 'Name'),
        (i.DOCUMENT = 'Document'),
        (i.OPERATION_DEFINITION = 'OperationDefinition'),
        (i.VARIABLE_DEFINITION = 'VariableDefinition'),
        (i.SELECTION_SET = 'SelectionSet'),
        (i.FIELD = 'Field'),
        (i.ARGUMENT = 'Argument'),
        (i.FRAGMENT_SPREAD = 'FragmentSpread'),
        (i.INLINE_FRAGMENT = 'InlineFragment'),
        (i.FRAGMENT_DEFINITION = 'FragmentDefinition'),
        (i.VARIABLE = 'Variable'),
        (i.INT = 'IntValue'),
        (i.FLOAT = 'FloatValue'),
        (i.STRING = 'StringValue'),
        (i.BOOLEAN = 'BooleanValue'),
        (i.NULL = 'NullValue'),
        (i.ENUM = 'EnumValue'),
        (i.LIST = 'ListValue'),
        (i.OBJECT = 'ObjectValue'),
        (i.OBJECT_FIELD = 'ObjectField'),
        (i.DIRECTIVE = 'Directive'),
        (i.NAMED_TYPE = 'NamedType'),
        (i.LIST_TYPE = 'ListType'),
        (i.NON_NULL_TYPE = 'NonNullType'),
        (i.SCHEMA_DEFINITION = 'SchemaDefinition'),
        (i.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
        (i.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
        (i.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
        (i.FIELD_DEFINITION = 'FieldDefinition'),
        (i.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
        (i.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
        (i.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
        (i.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
        (i.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
        (i.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
        (i.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
        (i.SCHEMA_EXTENSION = 'SchemaExtension'),
        (i.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
        (i.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
        (i.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
        (i.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
        (i.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
        (i.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
    },
    144: function (e, t, r) {
      'use strict';
      r.d(t, {
        $_: function () {
          return f;
        },
        Vn: function () {
          return p;
        },
      });
      var n,
        i,
        o = r(2779),
        a = r(6311);
      let s = {
          Name: [],
          Document: ['definitions'],
          OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
          VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
          Variable: ['name'],
          SelectionSet: ['selections'],
          Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
          Argument: ['name', 'value'],
          FragmentSpread: ['name', 'directives'],
          InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
          FragmentDefinition: ['name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ['values'],
          ObjectValue: ['fields'],
          ObjectField: ['name', 'value'],
          Directive: ['name', 'arguments'],
          NamedType: ['name'],
          ListType: ['type'],
          NonNullType: ['type'],
          SchemaDefinition: ['description', 'directives', 'operationTypes'],
          OperationTypeDefinition: ['type'],
          ScalarTypeDefinition: ['description', 'name', 'directives'],
          ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
          FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
          InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
          InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
          UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
          EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
          EnumValueDefinition: ['description', 'name', 'directives'],
          InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
          DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
          SchemaExtension: ['directives', 'operationTypes'],
          ScalarTypeExtension: ['name', 'directives'],
          ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
          InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
          UnionTypeExtension: ['name', 'directives', 'types'],
          EnumTypeExtension: ['name', 'directives', 'values'],
          InputObjectTypeExtension: ['name', 'directives', 'fields'],
        },
        u = new Set(Object.keys(s));
      function c(e) {
        let t = null == e ? void 0 : e.kind;
        return 'string' == typeof t && u.has(t);
      }
      ((n = i || (i = {})).QUERY = 'query'), (n.MUTATION = 'mutation'), (n.SUBSCRIPTION = 'subscription');
      var l = r(6955);
      let f = Object.freeze({});
      function p(e, t, r = s) {
        let n, i, u;
        let p = new Map();
        for (let e of Object.values(l.h))
          p.set(
            e,
            (function (e, t) {
              let r = e[t];
              return 'object' == typeof r ? r : 'function' == typeof r ? { enter: r, leave: void 0 } : { enter: e.enter, leave: e.leave };
            })(t, e)
          );
        let h = Array.isArray(e),
          d = [e],
          v = -1,
          y = [],
          m = e,
          b = [],
          g = [];
        do {
          var _, k, w;
          let e;
          v++;
          let s = v === d.length,
            l = s && 0 !== y.length;
          if (s) {
            if (((i = 0 === g.length ? void 0 : b[b.length - 1]), (m = u), (u = g.pop()), l)) {
              if (h) {
                m = m.slice();
                let e = 0;
                for (let [t, r] of y) {
                  let n = t - e;
                  null === r ? (m.splice(n, 1), e++) : (m[n] = r);
                }
              } else for (let [e, t] of ((m = Object.defineProperties({}, Object.getOwnPropertyDescriptors(m))), y)) m[e] = t;
            }
            (v = n.index), (d = n.keys), (y = n.edits), (h = n.inArray), (n = n.prev);
          } else if (u) {
            if (null == (m = u[(i = h ? v : d[v])])) continue;
            b.push(i);
          }
          if (!Array.isArray(m)) {
            c(m) || (0, o.a)(!1, `Invalid AST Node: ${(0, a.X)(m)}.`);
            let r = s ? (null === (_ = p.get(m.kind)) || void 0 === _ ? void 0 : _.leave) : null === (k = p.get(m.kind)) || void 0 === k ? void 0 : k.enter;
            if ((e = null == r ? void 0 : r.call(t, m, i, u, b, g)) === f) break;
            if (!1 === e) {
              if (!s) {
                b.pop();
                continue;
              }
            } else if (void 0 !== e && (y.push([i, e]), !s)) {
              if (c(e)) m = e;
              else {
                b.pop();
                continue;
              }
            }
          }
          void 0 === e && l && y.push([i, m]),
            s
              ? b.pop()
              : ((n = { inArray: h, index: v, keys: d, edits: y, prev: n }),
                (d = (h = Array.isArray(m)) ? m : null !== (w = r[m.kind]) && void 0 !== w ? w : []),
                (v = -1),
                (y = []),
                u && g.push(u),
                (u = m));
        } while (void 0 !== n);
        return 0 !== y.length ? y[y.length - 1][1] : e;
      }
    },
    4857: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
      }
      r.d(t, {
        y: function () {
          return w;
        },
      });
      var a = function () {
          return 'function' == typeof Symbol;
        },
        s = function (e) {
          return a() && !!Symbol[e];
        },
        u = function (e) {
          return s(e) ? Symbol[e] : '@@' + e;
        };
      a() && !s('observable') && (Symbol.observable = Symbol('observable'));
      var c = u('iterator'),
        l = u('observable'),
        f = u('species');
      function p(e, t) {
        var r = e[t];
        if (null != r) {
          if ('function' != typeof r) throw TypeError(r + ' is not a function');
          return r;
        }
      }
      function h(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : w;
      }
      function d(e) {
        d.log
          ? d.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function v(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (e) {
            d(e);
          }
        });
      }
      function y(e) {
        var t = e._cleanup;
        if (void 0 !== t) {
          if (((e._cleanup = void 0), !t)) return;
          try {
            if ('function' == typeof t) t();
            else {
              var r = p(t, 'unsubscribe');
              r && r.call(t);
            }
          } catch (e) {
            d(e);
          }
        }
      }
      function m(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = 'closed');
      }
      function b(e, t, r) {
        e._state = 'running';
        var n = e._observer;
        try {
          var i = p(n, t);
          switch (t) {
            case 'next':
              i && i.call(n, r);
              break;
            case 'error':
              if ((m(e), i)) i.call(n, r);
              else throw r;
              break;
            case 'complete':
              m(e), i && i.call(n);
          }
        } catch (e) {
          d(e);
        }
        'closed' === e._state ? y(e) : 'running' === e._state && (e._state = 'ready');
      }
      function g(e, t, r) {
        if ('closed' !== e._state) {
          if ('buffering' === e._state) {
            e._queue.push({ type: t, value: r });
            return;
          }
          if ('ready' !== e._state) {
            (e._state = 'buffering'),
              (e._queue = [{ type: t, value: r }]),
              v(function () {
                return (function (e) {
                  var t = e._queue;
                  if (t) {
                    (e._queue = void 0), (e._state = 'ready');
                    for (var r = 0; r < t.length && (b(e, t[r].type, t[r].value), 'closed' !== e._state); ++r);
                  }
                })(e);
              });
            return;
          }
          b(e, t, r);
        }
      }
      var _ = (function () {
          function e(e, t) {
            (this._cleanup = void 0), (this._observer = e), (this._queue = void 0), (this._state = 'initializing');
            var r = new k(this);
            try {
              this._cleanup = t.call(void 0, r);
            } catch (e) {
              r.error(e);
            }
            'initializing' === this._state && (this._state = 'ready');
          }
          return (
            (e.prototype.unsubscribe = function () {
              'closed' !== this._state && (m(this), y(this));
            }),
            o(e, [
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._state;
                },
              },
            ]),
            e
          );
        })(),
        k = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              g(this._subscription, 'next', e);
            }),
            (t.error = function (e) {
              g(this._subscription, 'error', e);
            }),
            (t.complete = function () {
              g(this._subscription, 'complete');
            }),
            o(e, [
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        w = (function () {
          function e(t) {
            if (!(this instanceof e)) throw TypeError('Observable cannot be called as a function');
            if ('function' != typeof t) throw TypeError('Observable initializer must be a function');
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return ('object' != typeof e || null === e) && (e = { next: e, error: arguments[1], complete: arguments[2] }), new _(e, this._subscriber);
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (r, n) {
                if ('function' != typeof e) {
                  n(TypeError(e + ' is not a function'));
                  return;
                }
                function i() {
                  o.unsubscribe(), r();
                }
                var o = t.subscribe({
                  next: function (t) {
                    try {
                      e(t, i);
                    } catch (e) {
                      n(e), o.unsubscribe();
                    }
                  },
                  error: n,
                  complete: r,
                });
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ('function' != typeof e) throw TypeError(e + ' is not a function');
              return new (h(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ('function' != typeof e) throw TypeError(e + ' is not a function');
              return new (h(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ('function' != typeof e) throw TypeError(e + ' is not a function');
              var r = h(this),
                n = arguments.length > 1,
                i = !1,
                o = arguments[1],
                a = o;
              return new r(function (r) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || n))
                      try {
                        a = e(a, t);
                      } catch (e) {
                        return r.error(e);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    if (!i && !n) return r.error(TypeError('Cannot reduce an empty sequence'));
                    r.next(a), r.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
              var i = h(this);
              return new i(function (t) {
                var n,
                  o = 0;
                return (
                  (function e(a) {
                    n = a.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        o === r.length ? ((n = void 0), t.complete()) : e(i.from(r[o++]));
                      },
                    });
                  })(e),
                  function () {
                    n && (n.unsubscribe(), (n = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ('function' != typeof e) throw TypeError(e + ' is not a function');
              var r = h(this);
              return new r(function (n) {
                var i = [],
                  o = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (e) {
                          return n.error(e);
                        }
                      var o = r.from(t).subscribe({
                        next: function (e) {
                          n.next(e);
                        },
                        error: function (e) {
                          n.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(o);
                          e >= 0 && i.splice(e, 1), a();
                        },
                      });
                      i.push(o);
                    },
                    error: function (e) {
                      n.error(e);
                    },
                    complete: function () {
                      a();
                    },
                  });
                function a() {
                  o.closed && 0 === i.length && n.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    o.unsubscribe();
                };
              });
            }),
            (t[l] = function () {
              return this;
            }),
            (e.from = function (t) {
              var r = 'function' == typeof this ? this : e;
              if (null == t) throw TypeError(t + ' is not an object');
              var i = p(t, l);
              if (i) {
                var o = i.call(t);
                if (Object(o) !== o) throw TypeError(o + ' is not an object');
                return o instanceof w && o.constructor === r
                  ? o
                  : new r(function (e) {
                      return o.subscribe(e);
                    });
              }
              if (s('iterator') && (i = p(t, c)))
                return new r(function (e) {
                  v(function () {
                    if (!e.closed) {
                      for (
                        var r,
                          o = (function (e, t) {
                            var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                            if (r) return (r = r.call(e)).next.bind(r);
                            if (
                              Array.isArray(e) ||
                              (r = (function (e, t) {
                                if (e) {
                                  if ('string' == typeof e) return n(e, t);
                                  var r = Object.prototype.toString.call(e).slice(8, -1);
                                  if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                                  if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
                                }
                              })(e))
                            ) {
                              r && (e = r);
                              var i = 0;
                              return function () {
                                return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                              };
                            }
                            throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                          })(i.call(t));
                        !(r = o()).done;

                      ) {
                        var a = r.value;
                        if ((e.next(a), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new r(function (e) {
                  v(function () {
                    if (!e.closed) {
                      for (var r = 0; r < t.length; ++r) if ((e.next(t[r]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw TypeError(t + ' is not observable');
            }),
            (e.of = function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
              return new ('function' == typeof this ? this : e)(function (e) {
                v(function () {
                  if (!e.closed) {
                    for (var t = 0; t < r.length; ++t) if ((e.next(r[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            o(e, null, [
              {
                key: f,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      a() && Object.defineProperty(w, Symbol('extensions'), { value: { symbol: l, hostReportError: d }, configurable: !0 });
    },
  },
]);
