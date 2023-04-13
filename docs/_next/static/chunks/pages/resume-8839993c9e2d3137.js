(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [647],
  {
    8125: function (e) {
      var t = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Resume' },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'resume' },
                  name: { kind: 'Name', value: 'Resume_get' },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' }, arguments: [], directives: [] },
                      { kind: 'Field', name: { kind: 'Name', value: 'github' }, arguments: [], directives: [] },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'resumeList' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' }, arguments: [], directives: [] },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'logo' },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'src' }, arguments: [], directives: [] },
                                  { kind: 'Field', name: { kind: 'Name', value: 'alt' }, arguments: [], directives: [] },
                                  { kind: 'Field', name: { kind: 'Name', value: 'width' }, arguments: [], directives: [] },
                                  { kind: 'Field', name: { kind: 'Name', value: 'height' }, arguments: [], directives: [] },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'startDate' }, arguments: [], directives: [] },
                            { kind: 'Field', name: { kind: 'Name', value: 'endDate' }, arguments: [], directives: [] },
                            { kind: 'Field', name: { kind: 'Name', value: 'website' }, arguments: [], directives: [] },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' }, arguments: [], directives: [] },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'carrierList' },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'groupName' }, arguments: [], directives: [] },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'list' },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'name' }, arguments: [], directives: [] },
                                        { kind: 'Field', name: { kind: 'Name', value: 'completed' }, arguments: [], directives: [] },
                                        { kind: 'Field', name: { kind: 'Name', value: 'startDate' }, arguments: [], directives: [] },
                                        { kind: 'Field', name: { kind: 'Name', value: 'endDate' }, arguments: [], directives: [] },
                                        { kind: 'Field', name: { kind: 'Name', value: 'techList' }, arguments: [], directives: [] },
                                        { kind: 'Field', name: { kind: 'Name', value: 'description' }, arguments: [], directives: [] },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 420 },
      };
      t.loc.source = {
        body: 'query Resume {\n  resume: Resume_get {\n    title\n    github\n    resumeList {\n      name\n      logo {\n        src\n        alt\n        width\n        height\n      }\n      startDate\n      endDate\n      website\n      description\n      carrierList {\n        groupName\n        list {\n          name\n          completed\n          startDate\n          endDate\n          techList\n          description\n        }\n      }\n    }\n  }\n}\n',
        name: 'GraphQL request',
        locationOffset: { line: 1, column: 1 },
      };
      var n = {};
      function i(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == t) return i;
        }
      }
      t.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          (function e(t, n) {
            if ('FragmentSpread' === t.kind) n.add(t.name.value);
            else if ('VariableDefinition' === t.kind) {
              var i = t.type;
              'NamedType' === i.kind && n.add(i.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (n[e.name.value] = t);
        }
      }),
        (e.exports = t),
        (e.exports.Resume = (function (e, t) {
          var r = { kind: e.kind, definitions: [i(e, t)] };
          e.hasOwnProperty('loc') && (r.loc = e.loc);
          var s = n[t] || new Set(),
            o = new Set(),
            a = new Set();
          for (
            s.forEach(function (e) {
              a.add(e);
            });
            a.size > 0;

          ) {
            var u = a;
            (a = new Set()),
              u.forEach(function (e) {
                o.has(e) ||
                  (o.add(e),
                  (n[e] || new Set()).forEach(function (e) {
                    a.add(e);
                  }));
              });
          }
          return (
            o.forEach(function (t) {
              var n = i(e, t);
              n && r.definitions.push(n);
            }),
            r
          );
        })(t, 'Resume'));
    },
    9749: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/resume',
        function () {
          return n(1142);
        },
      ]);
    },
    1142: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var i,
        r,
        s = n(1874),
        o = n(9953),
        a = n.t(o, 2),
        u = (0, n(193).Z)(
          (0, s.jsx)('path', {
            d: 'M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27',
          }),
          'GitHub'
        ),
        l = n(2397),
        c = n(3386),
        d = n(2069),
        h = n(6894),
        p = n(1040),
        v = n(308),
        m = n(4445),
        f = n(2376),
        g = n(8884),
        y = n(2365),
        k = n(9707),
        b = !1,
        O =
          a.useSyncExternalStore ||
          function (e, t, n) {
            var i = t();
            __DEV__ && !b && i !== t() && ((b = !0), __DEV__ && y.kG.error('The result of getSnapshot should be cached to avoid an infinite loop'));
            var r = o.useState({ inst: { value: i, getSnapshot: t } }),
              s = r[0].inst,
              a = r[1];
            return (
              k.JC
                ? o.useLayoutEffect(
                    function () {
                      Object.assign(s, { value: i, getSnapshot: t }), S(s) && a({ inst: s });
                    },
                    [e, i, t]
                  )
                : Object.assign(s, { value: i, getSnapshot: t }),
              o.useEffect(
                function () {
                  return (
                    S(s) && a({ inst: s }),
                    e(function () {
                      S(s) && a({ inst: s });
                    })
                  );
                },
                [e]
              ),
              i
            );
          };
      function S(e) {
        var t = e.value,
          n = e.getSnapshot;
        try {
          return t !== n();
        } catch (e) {
          return !0;
        }
      }
      var w = n(2546),
        _ = n(3759),
        P = n(3296),
        D = n(1188),
        E = n(6243);
      ((i = r || (r = {}))[(i.Query = 0)] = 'Query'), (i[(i.Mutation = 1)] = 'Mutation'), (i[(i.Subscription = 2)] = 'Subscription');
      var F = new Map();
      function Q(e) {
        var t;
        switch (e) {
          case r.Query:
            t = 'Query';
            break;
          case r.Mutation:
            t = 'Mutation';
            break;
          case r.Subscription:
            t = 'Subscription';
        }
        return t;
      }
      var R = n(6944),
        N = n(1589),
        C = n(5418),
        q = Object.prototype.hasOwnProperty,
        j = (function () {
          function e(e, t, n) {
            (this.client = e),
              (this.query = t),
              (this.asyncResolveFns = new Set()),
              (this.optionsToIgnoreOnce = new (k.sy ? WeakSet : Set)()),
              (this.ssrDisabledResult = (0, R.J)({ loading: !0, data: void 0, error: void 0, networkStatus: E.I.loading })),
              (this.skipStandbyResult = (0, R.J)({ loading: !1, data: void 0, error: void 0, networkStatus: E.I.ready })),
              (this.toQueryResultCache = new (k.mr ? WeakMap : Map)()),
              (i = r.Query),
              (s = (function (e) {
                var t,
                  n,
                  i = F.get(e);
                if (i) return i;
                __DEV__
                  ? (0, y.kG)(
                      !!e && !!e.kind,
                      'Argument of '.concat(e, ' passed to parser was not a valid GraphQL ') +
                        "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                    )
                  : (0, y.kG)(!!e && !!e.kind, 32);
                for (var s = [], o = [], a = [], u = [], l = 0, c = e.definitions; l < c.length; l++) {
                  var d = c[l];
                  if ('FragmentDefinition' === d.kind) {
                    s.push(d);
                    continue;
                  }
                  if ('OperationDefinition' === d.kind)
                    switch (d.operation) {
                      case 'query':
                        o.push(d);
                        break;
                      case 'mutation':
                        a.push(d);
                        break;
                      case 'subscription':
                        u.push(d);
                    }
                }
                __DEV__
                  ? (0, y.kG)(!s.length || o.length || a.length || u.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well")
                  : (0, y.kG)(!s.length || o.length || a.length || u.length, 33),
                  __DEV__
                    ? (0, y.kG)(
                        o.length + a.length + u.length <= 1,
                        'react-apollo only supports a query, subscription, or a mutation per HOC. ' +
                          ''.concat(e, ' had ').concat(o.length, ' queries, ').concat(u.length, ' ') +
                          'subscriptions and '.concat(a.length, ' mutations. ') +
                          "You can use 'compose' to join multiple operation types to a component"
                      )
                    : (0, y.kG)(o.length + a.length + u.length <= 1, 34),
                  (n = o.length ? r.Query : r.Mutation),
                  o.length || a.length || (n = r.Subscription);
                var h = o.length ? o : a.length ? a : u;
                __DEV__
                  ? (0, y.kG)(
                      1 === h.length,
                      'react-apollo only supports one definition per HOC. '.concat(e, ' had ') +
                        ''.concat(h.length, ' definitions. ') +
                        "You can use 'compose' to join multiple operation types to a component"
                    )
                  : (0, y.kG)(1 === h.length, 35);
                var p = h[0];
                t = p.variableDefinitions || [];
                var v = { name: p.name && 'Name' === p.name.kind ? p.name.value : 'data', type: n, variables: t };
                return F.set(e, v), v;
              })(t)),
              (o = Q(i)),
              (a = Q(s.type)),
              __DEV__ ? (0, y.kG)(s.type === i, 'Running a '.concat(o, ' requires a graphql ') + ''.concat(o, ', but a ').concat(a, ' was used instead.')) : (0, y.kG)(s.type === i, 36);
            var i,
              s,
              o,
              a,
              u = n && n.result,
              l = u && u.data;
            l && (this.previousData = l);
          }
          return (
            (e.prototype.forceUpdate = function () {
              __DEV__ && y.kG.warn('Calling default no-op implementation of InternalState#forceUpdate');
            }),
            (e.prototype.asyncUpdate = function (e) {
              var t = this;
              return new Promise(function (n, i) {
                var r = t.watchQueryOptions,
                  s = function () {
                    t.asyncResolveFns.delete(n), t.optionsToIgnoreOnce.delete(r), e.removeEventListener('abort', s), i(e.reason);
                  };
                t.asyncResolveFns.add(n), t.optionsToIgnoreOnce.add(r), e.addEventListener('abort', s), t.forceUpdate();
              });
            }),
            (e.prototype.useQuery = function (e) {
              var t = this;
              (this.renderPromises = (0, o.useContext)((0, P.K)()).renderPromises), this.useOptions(e);
              var n = this.useObservableQuery(),
                i = O(
                  (0, o.useCallback)(
                    function () {
                      if (t.renderPromises) return function () {};
                      var e = function () {
                          var e = t.result,
                            i = n.getCurrentResult();
                          (e && e.loading === i.loading && e.networkStatus === i.networkStatus && (0, w.D)(e.data, i.data)) || t.setResult(i);
                        },
                        i = function (s) {
                          var o = n.last;
                          r.unsubscribe();
                          try {
                            n.resetLastResults(), (r = n.subscribe(e, i));
                          } finally {
                            n.last = o;
                          }
                          if (!q.call(s, 'graphQLErrors')) throw s;
                          var a = t.result;
                          (!a || (a && a.loading) || !(0, w.D)(s, a.error)) && t.setResult({ data: a && a.data, error: s, loading: !1, networkStatus: E.I.error });
                        },
                        r = n.subscribe(e, i);
                      return function () {
                        return r.unsubscribe();
                      };
                    },
                    [n, this.renderPromises, this.client.disableNetworkFetches]
                  ),
                  function () {
                    return t.getCurrentResult();
                  },
                  function () {
                    return t.getCurrentResult();
                  }
                );
              this.unsafeHandlePartialRefetch(i);
              var r = this.toQueryResult(i);
              return (
                !r.loading &&
                  this.asyncResolveFns.size &&
                  (this.asyncResolveFns.forEach(function (e) {
                    return e(r);
                  }),
                  this.asyncResolveFns.clear()),
                r
              );
            }),
            (e.prototype.useOptions = function (t) {
              var n,
                i = this.createWatchQueryOptions((this.queryHookOptions = t)),
                r = this.watchQueryOptions;
              (this.optionsToIgnoreOnce.has(r) || !(0, w.D)(i, r)) &&
                ((this.watchQueryOptions = i),
                r &&
                  this.observable &&
                  (this.optionsToIgnoreOnce.delete(r),
                  this.observable.reobserve(this.getObsQueryOptions()),
                  (this.previousData = (null === (n = this.result) || void 0 === n ? void 0 : n.data) || this.previousData),
                  (this.result = void 0))),
                (this.onCompleted = t.onCompleted || e.prototype.onCompleted),
                (this.onError = t.onError || e.prototype.onError),
                (this.renderPromises || this.client.disableNetworkFetches) && !1 === this.queryHookOptions.ssr && !this.queryHookOptions.skip
                  ? (this.result = this.ssrDisabledResult)
                  : this.queryHookOptions.skip || 'standby' === this.watchQueryOptions.fetchPolicy
                  ? (this.result = this.skipStandbyResult)
                  : (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) && (this.result = void 0);
            }),
            (e.prototype.getObsQueryOptions = function () {
              var e = [],
                t = this.client.defaultOptions.watchQuery;
              return (
                t && e.push(t),
                this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions),
                e.push((0, N.o)(this.observable && this.observable.options, this.watchQueryOptions)),
                e.reduce(_.J)
              );
            }),
            (e.prototype.createWatchQueryOptions = function (e) {
              void 0 === e && (e = {});
              var t,
                n = e.skip,
                i = Object.assign((e.ssr, e.onCompleted, e.onError, e.defaultOptions, (0, g._T)(e, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions'])), { query: this.query });
              if ((this.renderPromises && ('network-only' === i.fetchPolicy || 'cache-and-network' === i.fetchPolicy) && (i.fetchPolicy = 'cache-first'), i.variables || (i.variables = {}), n)) {
                var r = i.fetchPolicy,
                  s = void 0 === r ? this.getDefaultFetchPolicy() : r,
                  o = i.initialFetchPolicy;
                Object.assign(i, { initialFetchPolicy: void 0 === o ? s : o, fetchPolicy: 'standby' });
              } else i.fetchPolicy || (i.fetchPolicy = (null === (t = this.observable) || void 0 === t ? void 0 : t.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
              return i;
            }),
            (e.prototype.getDefaultFetchPolicy = function () {
              var e, t;
              return (
                (null === (e = this.queryHookOptions.defaultOptions) || void 0 === e ? void 0 : e.fetchPolicy) ||
                (null === (t = this.client.defaultOptions.watchQuery) || void 0 === t ? void 0 : t.fetchPolicy) ||
                'cache-first'
              );
            }),
            (e.prototype.onCompleted = function (e) {}),
            (e.prototype.onError = function (e) {}),
            (e.prototype.useObservableQuery = function () {
              var e = (this.observable = (this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions)) || this.observable || this.client.watchQuery(this.getObsQueryOptions()));
              this.obsQueryFields = (0, o.useMemo)(
                function () {
                  return {
                    refetch: e.refetch.bind(e),
                    reobserve: e.reobserve.bind(e),
                    fetchMore: e.fetchMore.bind(e),
                    updateQuery: e.updateQuery.bind(e),
                    startPolling: e.startPolling.bind(e),
                    stopPolling: e.stopPolling.bind(e),
                    subscribeToMore: e.subscribeToMore.bind(e),
                  };
                },
                [e]
              );
              var t = !(!1 === this.queryHookOptions.ssr || this.queryHookOptions.skip);
              return this.renderPromises && t && (this.renderPromises.registerSSRObservable(e), e.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(e)), e;
            }),
            (e.prototype.setResult = function (e) {
              var t = this.result;
              t && t.data && (this.previousData = t.data), (this.result = e), this.forceUpdate(), this.handleErrorOrCompleted(e);
            }),
            (e.prototype.handleErrorOrCompleted = function (e) {
              var t = this;
              if (!e.loading) {
                var n = this.toApolloError(e);
                Promise.resolve()
                  .then(function () {
                    n ? t.onError(n) : e.data && t.onCompleted(e.data);
                  })
                  .catch(function (e) {
                    __DEV__ && y.kG.warn(e);
                  });
              }
            }),
            (e.prototype.toApolloError = function (e) {
              return (0, C.O)(e.errors) ? new D.c({ graphQLErrors: e.errors }) : e.error;
            }),
            (e.prototype.getCurrentResult = function () {
              return this.result || this.handleErrorOrCompleted((this.result = this.observable.getCurrentResult())), this.result;
            }),
            (e.prototype.toQueryResult = function (e) {
              var t = this.toQueryResultCache.get(e);
              if (t) return t;
              var n = e.data,
                i = (e.partial, (0, g._T)(e, ['data', 'partial']));
              return (
                this.toQueryResultCache.set(
                  e,
                  (t = (0, g.pi)((0, g.pi)((0, g.pi)({ data: n }, i), this.obsQueryFields), {
                    client: this.client,
                    observable: this.observable,
                    variables: this.observable.variables,
                    called: !this.queryHookOptions.skip,
                    previousData: this.previousData,
                  }))
                ),
                !t.error && (0, C.O)(e.errors) && (t.error = new D.c({ graphQLErrors: e.errors })),
                t
              );
            }),
            (e.prototype.unsafeHandlePartialRefetch = function (e) {
              e.partial &&
                this.queryHookOptions.partialRefetch &&
                !e.loading &&
                (!e.data || 0 === Object.keys(e.data).length) &&
                'cache-only' !== this.observable.options.fetchPolicy &&
                (Object.assign(e, { loading: !0, networkStatus: E.I.refetch }), this.observable.refetch());
            }),
            e
          );
        })(),
        x = n(8125),
        G = n.n(x);
      let { Provider: H, useContext: L } = (0, f.Q)(function () {
        var e, t, n, i, r, s, a, u, l;
        let { data: c, loading: d } =
            ((e = G()),
            void 0 === t && (t = Object.create(null)),
            ((n = t.client),
            (i = (0, o.useContext)((0, P.K)())),
            (r = n || i.client),
            __DEV__
              ? (0, y.kG)(!!r, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.')
              : (0, y.kG)(!!r, 31),
            ((s = (0, o.useRef)()).current && r === s.current.client && e === s.current.query) || (s.current = new j(r, e, s.current)),
            (a = s.current),
            (u = (0, o.useState)(0))[0],
            (l = u[1]),
            (a.forceUpdate = function () {
              l(function (e) {
                return e + 1;
              });
            }),
            a).useQuery(t)),
          h = (0, o.useMemo)(() => (d ? null : null == c ? void 0 : c.resume), [d, c]);
        return { resumeData: h };
      });
      var M = (0, f.b)(H, function () {
        var e;
        let t = (0, l.Z)(),
          n = (0, c.Z)(t.breakpoints.down('sm')),
          i = L((e) => e.resumeData);
        return (0,
        s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(d.ZP, { display: 'flex', alignItems: 'center', paddingX: n ? 2 : 6, paddingTop: 2, paddingBottom: 4, gap: 2, children: [(0, s.jsx)(h.Z, { fontSize: n ? 26 : 36, fontWeight: 700, children: null == i ? void 0 : i.title }), (null == i ? void 0 : i.github) && (0, s.jsx)(p.Z, { href: null == i ? void 0 : i.github, target: '_blank', children: (0, s.jsx)(T, {}) })] }), (0, s.jsx)(d.ZP, { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingX: n ? 2 : 6, paddingTop: 2, paddingBottom: 20, children: (null !== (e = null == i ? void 0 : i.resumeList) && void 0 !== e ? e : []).map((e, t) => (0, s.jsx)(m.Nx, { data: e }, t)) })] });
      });
      let T = (0, v.ZP)(u)((e) => {
        let { theme: t } = e;
        return { width: 40, height: 40, fill: 'dark' === t.palette.mode ? 'white' : 'black', [t.breakpoints.down('sm')]: { width: 25, height: 25 } };
      });
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 9749));
    }),
      (_N_E = e.O());
  },
]);
