'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    0: function (t, e, r) {
      r(9624);
      var o = r(4957),
        s = r(5472);
      e.Z = (0, o.Z)(
        (0, s.jsx)('path', {
          d: 'M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27',
        }),
        'GitHub'
      );
    },
    5703: function (t, e, r) {
      r.d(e, {
        a: function () {
          return P;
        },
      });
      var o,
        s,
        i = r(7045),
        n = r(6772),
        a = r(9624),
        u = r.t(a, 2),
        l = r(1066),
        c = !1,
        h =
          u.useSyncExternalStore ||
          function (t, e, r) {
            var o = e();
            __DEV__ && !c && o !== e() && ((c = !0), __DEV__ && n.kG.error('The result of getSnapshot should be cached to avoid an infinite loop'));
            var s = a.useState({ inst: { value: o, getSnapshot: e } }),
              i = s[0].inst,
              u = s[1];
            return (
              l.JC
                ? a.useLayoutEffect(
                    function () {
                      Object.assign(i, { value: o, getSnapshot: e }), p(i) && u({ inst: i });
                    },
                    [t, o, e]
                  )
                : Object.assign(i, { value: o, getSnapshot: e }),
              a.useEffect(
                function () {
                  return (
                    p(i) && u({ inst: i }),
                    t(function () {
                      p(i) && u({ inst: i });
                    })
                  );
                },
                [t]
              ),
              o
            );
          };
      function p(t) {
        var e = t.value,
          r = t.getSnapshot;
        try {
          return e !== r();
        } catch (t) {
          return !0;
        }
      }
      var d = r(7471),
        y = r(3e3),
        b = r(6668),
        f = r(1038),
        v = r(5963);
      ((o = s || (s = {}))[(o.Query = 0)] = 'Query'), (o[(o.Mutation = 1)] = 'Mutation'), (o[(o.Subscription = 2)] = 'Subscription');
      var g = new Map();
      function k(t) {
        var e;
        switch (t) {
          case s.Query:
            e = 'Query';
            break;
          case s.Mutation:
            e = 'Mutation';
            break;
          case s.Subscription:
            e = 'Subscription';
        }
        return e;
      }
      var O = r(1744),
        m = r(6270),
        _ = r(6388),
        Q = Object.prototype.hasOwnProperty;
      function P(t, e) {
        var r, o, s, i, u, l, c;
        return (
          void 0 === e && (e = Object.create(null)),
          ((r = e.client),
          (o = (0, a.useContext)((0, b.K)())),
          (s = r || o.client),
          __DEV__
            ? (0, n.kG)(!!s, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.')
            : (0, n.kG)(!!s, 32),
          ((i = (0, a.useRef)()).current && s === i.current.client && t === i.current.query) || (i.current = new w(s, t, i.current)),
          (u = i.current),
          (l = (0, a.useState)(0))[0],
          (c = l[1]),
          (u.forceUpdate = function () {
            c(function (t) {
              return t + 1;
            });
          }),
          u).useQuery(e)
        );
      }
      var w = (function () {
        function t(t, e, r) {
          (this.client = t),
            (this.query = e),
            (this.ssrDisabledResult = (0, O.J)({ loading: !0, data: void 0, error: void 0, networkStatus: v.I.loading })),
            (this.skipStandbyResult = (0, O.J)({ loading: !1, data: void 0, error: void 0, networkStatus: v.I.ready })),
            (this.toQueryResultCache = new (l.mr ? WeakMap : Map)()),
            (o = s.Query),
            (i = (function (t) {
              var e,
                r,
                o = g.get(t);
              if (o) return o;
              __DEV__
                ? (0, n.kG)(
                    !!t && !!t.kind,
                    'Argument of '.concat(t, ' passed to parser was not a valid GraphQL ') +
                      "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                  )
                : (0, n.kG)(!!t && !!t.kind, 33);
              for (var i = [], a = [], u = [], l = [], c = 0, h = t.definitions; c < h.length; c++) {
                var p = h[c];
                if ('FragmentDefinition' === p.kind) {
                  i.push(p);
                  continue;
                }
                if ('OperationDefinition' === p.kind)
                  switch (p.operation) {
                    case 'query':
                      a.push(p);
                      break;
                    case 'mutation':
                      u.push(p);
                      break;
                    case 'subscription':
                      l.push(p);
                  }
              }
              __DEV__
                ? (0, n.kG)(!i.length || a.length || u.length || l.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well")
                : (0, n.kG)(!i.length || a.length || u.length || l.length, 34),
                __DEV__
                  ? (0, n.kG)(
                      a.length + u.length + l.length <= 1,
                      'react-apollo only supports a query, subscription, or a mutation per HOC. ' +
                        ''.concat(t, ' had ').concat(a.length, ' queries, ').concat(l.length, ' ') +
                        'subscriptions and '.concat(u.length, ' mutations. ') +
                        "You can use 'compose' to join multiple operation types to a component"
                    )
                  : (0, n.kG)(a.length + u.length + l.length <= 1, 35),
                (r = a.length ? s.Query : s.Mutation),
                a.length || u.length || (r = s.Subscription);
              var d = a.length ? a : u.length ? u : l;
              __DEV__
                ? (0, n.kG)(
                    1 === d.length,
                    'react-apollo only supports one definition per HOC. '.concat(t, ' had ') +
                      ''.concat(d.length, ' definitions. ') +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : (0, n.kG)(1 === d.length, 36);
              var y = d[0];
              e = y.variableDefinitions || [];
              var b = { name: y.name && 'Name' === y.name.kind ? y.name.value : 'data', type: r, variables: e };
              return g.set(t, b), b;
            })(e)),
            (a = k(o)),
            (u = k(i.type)),
            __DEV__ ? (0, n.kG)(i.type === o, 'Running a '.concat(a, ' requires a graphql ') + ''.concat(a, ', but a ').concat(u, ' was used instead.')) : (0, n.kG)(i.type === o, 37);
          var o,
            i,
            a,
            u,
            c = r && r.result,
            h = c && c.data;
          h && (this.previousData = h);
        }
        return (
          (t.prototype.forceUpdate = function () {
            __DEV__ && n.kG.warn('Calling default no-op implementation of InternalState#forceUpdate');
          }),
          (t.prototype.executeQuery = function (t) {
            var e,
              r = this;
            t.query && Object.assign(this, { query: t.query }), (this.watchQueryOptions = this.createWatchQueryOptions((this.queryHookOptions = t)));
            var o = this.observable.reobserveAsConcast(this.getObsQueryOptions());
            return (
              (this.previousData = (null === (e = this.result) || void 0 === e ? void 0 : e.data) || this.previousData),
              (this.result = void 0),
              this.forceUpdate(),
              new Promise(function (t) {
                var e;
                o.subscribe({
                  next: function (t) {
                    e = t;
                  },
                  error: function () {
                    t(r.toQueryResult(r.observable.getCurrentResult()));
                  },
                  complete: function () {
                    t(r.toQueryResult(e));
                  },
                });
              })
            );
          }),
          (t.prototype.useQuery = function (t) {
            var e = this;
            (this.renderPromises = (0, a.useContext)((0, b.K)()).renderPromises), this.useOptions(t);
            var r = this.useObservableQuery(),
              o = h(
                (0, a.useCallback)(
                  function () {
                    if (e.renderPromises) return function () {};
                    var t = function () {
                        var t = e.result,
                          o = r.getCurrentResult();
                        (t && t.loading === o.loading && t.networkStatus === o.networkStatus && (0, d.D)(t.data, o.data)) || e.setResult(o);
                      },
                      o = function (i) {
                        var n = r.last;
                        s.unsubscribe();
                        try {
                          r.resetLastResults(), (s = r.subscribe(t, o));
                        } finally {
                          r.last = n;
                        }
                        if (!Q.call(i, 'graphQLErrors')) throw i;
                        var a = e.result;
                        (!a || (a && a.loading) || !(0, d.D)(i, a.error)) && e.setResult({ data: a && a.data, error: i, loading: !1, networkStatus: v.I.error });
                      },
                      s = r.subscribe(t, o);
                    return function () {
                      return setTimeout(function () {
                        return s.unsubscribe();
                      });
                    };
                  },
                  [r, this.renderPromises, this.client.disableNetworkFetches]
                ),
                function () {
                  return e.getCurrentResult();
                },
                function () {
                  return e.getCurrentResult();
                }
              );
            return this.unsafeHandlePartialRefetch(o), this.toQueryResult(o);
          }),
          (t.prototype.useOptions = function (e) {
            var r,
              o = this.createWatchQueryOptions((this.queryHookOptions = e)),
              s = this.watchQueryOptions;
            !(0, d.D)(o, s) &&
              ((this.watchQueryOptions = o),
              s &&
                this.observable &&
                (this.observable.reobserve(this.getObsQueryOptions()),
                (this.previousData = (null === (r = this.result) || void 0 === r ? void 0 : r.data) || this.previousData),
                (this.result = void 0))),
              (this.onCompleted = e.onCompleted || t.prototype.onCompleted),
              (this.onError = e.onError || t.prototype.onError),
              (this.renderPromises || this.client.disableNetworkFetches) && !1 === this.queryHookOptions.ssr && !this.queryHookOptions.skip
                ? (this.result = this.ssrDisabledResult)
                : this.queryHookOptions.skip || 'standby' === this.watchQueryOptions.fetchPolicy
                ? (this.result = this.skipStandbyResult)
                : (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) && (this.result = void 0);
          }),
          (t.prototype.getObsQueryOptions = function () {
            var t = [],
              e = this.client.defaultOptions.watchQuery;
            return (
              e && t.push(e),
              this.queryHookOptions.defaultOptions && t.push(this.queryHookOptions.defaultOptions),
              t.push((0, m.o)(this.observable && this.observable.options, this.watchQueryOptions)),
              t.reduce(y.J)
            );
          }),
          (t.prototype.createWatchQueryOptions = function (t) {
            void 0 === t && (t = {});
            var e,
              r = t.skip,
              o = Object.assign((t.ssr, t.onCompleted, t.onError, t.defaultOptions, (0, i._T)(t, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions'])), { query: this.query });
            if ((this.renderPromises && ('network-only' === o.fetchPolicy || 'cache-and-network' === o.fetchPolicy) && (o.fetchPolicy = 'cache-first'), o.variables || (o.variables = {}), r)) {
              var s = o.fetchPolicy,
                n = void 0 === s ? this.getDefaultFetchPolicy() : s,
                a = o.initialFetchPolicy;
              Object.assign(o, { initialFetchPolicy: void 0 === a ? n : a, fetchPolicy: 'standby' });
            } else o.fetchPolicy || (o.fetchPolicy = (null === (e = this.observable) || void 0 === e ? void 0 : e.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
            return o;
          }),
          (t.prototype.getDefaultFetchPolicy = function () {
            var t, e;
            return (
              (null === (t = this.queryHookOptions.defaultOptions) || void 0 === t ? void 0 : t.fetchPolicy) ||
              (null === (e = this.client.defaultOptions.watchQuery) || void 0 === e ? void 0 : e.fetchPolicy) ||
              'cache-first'
            );
          }),
          (t.prototype.onCompleted = function (t) {}),
          (t.prototype.onError = function (t) {}),
          (t.prototype.useObservableQuery = function () {
            var t = (this.observable = (this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions)) || this.observable || this.client.watchQuery(this.getObsQueryOptions()));
            this.obsQueryFields = (0, a.useMemo)(
              function () {
                return {
                  refetch: t.refetch.bind(t),
                  reobserve: t.reobserve.bind(t),
                  fetchMore: t.fetchMore.bind(t),
                  updateQuery: t.updateQuery.bind(t),
                  startPolling: t.startPolling.bind(t),
                  stopPolling: t.stopPolling.bind(t),
                  subscribeToMore: t.subscribeToMore.bind(t),
                };
              },
              [t]
            );
            var e = !(!1 === this.queryHookOptions.ssr || this.queryHookOptions.skip);
            return this.renderPromises && e && (this.renderPromises.registerSSRObservable(t), t.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(t)), t;
          }),
          (t.prototype.setResult = function (t) {
            var e = this.result;
            e && e.data && (this.previousData = e.data), (this.result = t), this.forceUpdate(), this.handleErrorOrCompleted(t);
          }),
          (t.prototype.handleErrorOrCompleted = function (t) {
            var e = this;
            if (!t.loading) {
              var r = this.toApolloError(t);
              Promise.resolve()
                .then(function () {
                  r ? e.onError(r) : t.data && e.onCompleted(t.data);
                })
                .catch(function (t) {
                  __DEV__ && n.kG.warn(t);
                });
            }
          }),
          (t.prototype.toApolloError = function (t) {
            return (0, _.O)(t.errors) ? new f.cA({ graphQLErrors: t.errors }) : t.error;
          }),
          (t.prototype.getCurrentResult = function () {
            return this.result || this.handleErrorOrCompleted((this.result = this.observable.getCurrentResult())), this.result;
          }),
          (t.prototype.toQueryResult = function (t) {
            var e = this.toQueryResultCache.get(t);
            if (e) return e;
            var r = t.data,
              o = (t.partial, (0, i._T)(t, ['data', 'partial']));
            return (
              this.toQueryResultCache.set(
                t,
                (e = (0, i.pi)((0, i.pi)((0, i.pi)({ data: r }, o), this.obsQueryFields), {
                  client: this.client,
                  observable: this.observable,
                  variables: this.observable.variables,
                  called: !this.queryHookOptions.skip,
                  previousData: this.previousData,
                }))
              ),
              !e.error && (0, _.O)(t.errors) && (e.error = new f.cA({ graphQLErrors: t.errors })),
              e
            );
          }),
          (t.prototype.unsafeHandlePartialRefetch = function (t) {
            t.partial &&
              this.queryHookOptions.partialRefetch &&
              !t.loading &&
              (!t.data || 0 === Object.keys(t.data).length) &&
              'cache-only' !== this.observable.options.fetchPolicy &&
              (Object.assign(t, { loading: !0, networkStatus: v.I.refetch }), this.observable.refetch());
          }),
          t
        );
      })();
    },
  },
]);
