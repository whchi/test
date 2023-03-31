var Mr = {}, Nt = {
  get exports() {
    return Mr;
  },
  set exports(R) {
    Mr = R;
  }
}, He = {}, Re = {}, Wt = {
  get exports() {
    return Re;
  },
  set exports(R) {
    Re = R;
  }
}, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Vt() {
  if (st)
    return g;
  st = 1;
  var R = Symbol.for("react.element"), v = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), te = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, Ie = {};
  function ne(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || H;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ne.prototype;
  function I(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || H;
  }
  var he = I.prototype = new ae();
  he.constructor = I, se(he, ne.prototype), he.isPureReactComponent = !0;
  var oe = Array.isArray, N = Object.prototype.hasOwnProperty, q = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, h) {
    var w, _ = {}, k = null, j = null;
    if (s != null)
      for (w in s.ref !== void 0 && (j = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        N.call(s, w) && !ce.hasOwnProperty(w) && (_[w] = s[w]);
    var O = arguments.length - 2;
    if (O === 1)
      _.children = h;
    else if (1 < O) {
      for (var S = Array(O), V = 0; V < O; V++)
        S[V] = arguments[V + 2];
      _.children = S;
    }
    if (n && n.defaultProps)
      for (w in O = n.defaultProps, O)
        _[w] === void 0 && (_[w] = O[w]);
    return { $$typeof: R, type: n, key: k, ref: j, props: _, _owner: q.current };
  }
  function Ce(n, s) {
    return { $$typeof: R, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === R;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Se = /\/+/g;
  function K(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function G(n, s, h, w, _) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var j = !1;
    if (n === null)
      j = !0;
    else
      switch (k) {
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case R:
            case v:
              j = !0;
          }
      }
    if (j)
      return j = n, _ = _(j), n = w === "" ? "." + K(j, 0) : w, oe(_) ? (h = "", n != null && (h = n.replace(Se, "$&/") + "/"), G(_, s, h, "", function(V) {
        return V;
      })) : _ != null && (we(_) && (_ = Ce(_, h + (!_.key || j && j.key === _.key ? "" : ("" + _.key).replace(Se, "$&/") + "/") + n)), s.push(_)), 1;
    if (j = 0, w = w === "" ? "." : w + ":", oe(n))
      for (var O = 0; O < n.length; O++) {
        k = n[O];
        var S = w + K(k, O);
        j += G(k, s, h, S, _);
      }
    else if (S = ee(n), typeof S == "function")
      for (n = S.call(n), O = 0; !(k = n.next()).done; )
        k = k.value, S = w + K(k, O++), j += G(k, s, h, S, _);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function Y(n, s, h) {
    if (n == null)
      return n;
    var w = [], _ = 0;
    return G(n, w, "", "", function(k) {
      return s.call(h, k, _++);
    }), w;
  }
  function ue(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, fe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: q };
  return g.Children = { map: Y, forEach: function(n, s, h) {
    Y(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ne, g.Fragment = de, g.Profiler = pe, g.PureComponent = I, g.StrictMode = X, g.Suspense = L, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var w = se({}, n.props), _ = n.key, k = n.ref, j = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, j = q.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var O = n.type.defaultProps;
      for (S in s)
        N.call(s, S) && !ce.hasOwnProperty(S) && (w[S] = s[S] === void 0 && O !== void 0 ? O[S] : s[S]);
    }
    var S = arguments.length - 2;
    if (S === 1)
      w.children = h;
    else if (1 < S) {
      O = Array(S);
      for (var V = 0; V < S; V++)
        O[V] = arguments[V + 2];
      w.children = O;
    }
    return { $$typeof: R, type: n.type, key: _, ref: k, props: w, _owner: j };
  }, g.createContext = function(n) {
    return n = { $$typeof: te, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: re, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, g.isValidElement = we, g.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: ue };
  }, g.memo = function(n, s) {
    return { $$typeof: Z, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = {}, Ut = {
  get exports() {
    return Je;
  },
  set exports(R) {
    Je = R;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Yt() {
  return ct || (ct = 1, function(R, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var de = "18.2.0", X = Symbol.for("react.element"), pe = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[ae];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, ve = null;
      function Ce(e) {
        ve = e;
      }
      ce.setExtraStackFrame = function(e) {
        ve = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Se = !1, K = !1, G = !1, Y = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: q
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = N;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Te[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, w = {};
      Object.freeze(w);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in k)
          k.hasOwnProperty(O) && j(O, k[O]);
      }
      function S() {
      }
      S.prototype = _.prototype;
      function V(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      var me = V.prototype = new S();
      me.constructor = V, h(me, _.prototype), me.isPureReactComponent = !0;
      function hr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function mr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Le(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case re:
            return "Fragment";
          case pe:
            return "Portal";
          case Q:
            return "Profiler";
          case te:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return ke(r) + ".Consumer";
            case L:
              var a = e;
              return ke(a._context) + ".Provider";
            case M:
              return Qe(e, e.render, "ForwardRef");
            case H:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var i = e, p = i._payload, l = i._init;
              try {
                return le(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Ne;
      Ne = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function gr(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && q.current && e.__self && q.current.stateNode !== e.__self) {
          var r = le(q.current.type);
          Ne[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var Ae = function(e, r, a, o, i, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: X,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function _r(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), ge(r) && (Pe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Me.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          i.children = a;
        else if (P > 1) {
          for (var A = Array(P), x = 0; x < P; x++)
            A[x] = arguments[x + 2];
          Object.freeze && Object.freeze(A), i.children = A;
        }
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (o in F)
            i[o] === void 0 && (i[o] = F[o]);
        }
        if (p || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && gr(i, W), l && rr(i, W);
        }
        return Ae(e, p, l, y, E, q.current, i);
      }
      function br(e, r) {
        var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Er(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, P = q.current), ge(r) && (Pe(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? i[o] = A[o] : i[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          i.children = a;
        else if (x > 1) {
          for (var F = Array(x), W = 0; W < x; W++)
            F[W] = arguments[W + 2];
          i.children = F;
        }
        return Ae(e.type, p, l, y, E, P, i);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === X;
      }
      var nr = ".", Rr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var We = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function xe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case X:
                case pe:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), P = o === "" ? nr + xe(y, 0) : o;
          if ($e(E)) {
            var A = "";
            P != null && (A = ye(P) + "/"), be(E, r, A, "", function(Mt) {
              return Mt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && Pe(E.key), E = br(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + P
            )), r.push(E));
          return 1;
        }
        var x, F, W = 0, z = o === "" ? nr : o + Rr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            x = e[yr], F = z + xe(x, yr), W += be(x, r, a, F, i);
        else {
          var Lr = I(e);
          if (typeof Lr == "function") {
            var ot = e;
            Lr === ot.entries && (We || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var $t = Lr.call(ot), ut, Lt = 0; !(ut = $t.next()).done; )
              x = ut.value, F = z + xe(x, Lt++), W += be(x, r, a, F, i);
          } else if (p === "object") {
            var it = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (it === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : it) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function wr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Sr(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Tr = 2;
      function Or(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = qe, l._result = p;
            }
          }, function(p) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = Tr, l._result = p;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function Pr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Or
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function kr(e) {
        e != null && e.$$typeof === H ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === re || e === Q || G || e === te || e === U || e === ee || K || e === Ie || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === H || e.$$typeof === L || e.$$typeof === Z || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: H,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function T(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function D(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function J(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ie(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function pt() {
        var e = f();
        return e.useTransition();
      }
      function vt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function yt() {
        var e = f();
        return e.useId();
      }
      function ht(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ke = 0, Nr, Wr, Vr, Ur, Yr, Br, zr;
      function qr() {
      }
      qr.__reactDisabledLog = !0;
      function mt() {
        {
          if (Ke === 0) {
            Nr = console.log, Wr = console.info, Vr = console.warn, Ur = console.error, Yr = console.group, Br = console.groupCollapsed, zr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ke++;
        }
      }
      function gt() {
        {
          if (Ke--, Ke === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Nr
              }),
              info: h({}, e, {
                value: Wr
              }),
              warn: h({}, e, {
                value: Vr
              }),
              error: h({}, e, {
                value: Ur
              }),
              group: h({}, e, {
                value: Yr
              }),
              groupCollapsed: h({}, e, {
                value: Br
              }),
              groupEnd: h({}, e, {
                value: zr
              })
            });
          }
          Ke < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var jr = Y.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var xr = !1, fr;
      {
        var _t = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new _t();
      }
      function Kr(e, r) {
        if (!e || xr)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        xr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = jr.current, jr.current = null, mt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, A = E.length - 1; P >= 1 && A >= 0 && y[P] !== E[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== E[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== E[A]) {
                      var x = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, x), x;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          xr = !1, jr.current = p, gt(), Error.prepareStackTrace = i;
        }
        var F = e ? e.displayName || e.name : "", W = F ? cr(F) : "";
        return typeof e == "function" && fr.set(e, W), W;
      }
      function bt(e, r, a) {
        return Kr(e, !1);
      }
      function Et(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, Et(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case U:
            return cr("Suspense");
          case ee:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return bt(e.render);
            case H:
              return lr(e.type, r, a);
            case se: {
              var o = e, i = o._payload, p = o._init;
              try {
                return lr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Hr = {}, Gr = Y.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Gr.setExtraStackFrame(a);
        } else
          Gr.setExtraStackFrame(null);
      }
      function Rt(e, r, a, o, i) {
        {
          var p = Function.call.bind(je);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (dr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), dr(null)), y instanceof Error && !(y.message in Hr) && (Hr[y.message] = !0, dr(i), d("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Dr;
      Dr = !1;
      function Jr() {
        if (q.current) {
          var e = le(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ct(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function wt(e) {
        return e != null ? Ct(e.__source) : "";
      }
      var Xr = {};
      function St(e) {
        var r = Jr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Qr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = St(r);
          if (!Xr[a]) {
            Xr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== q.current && (o = " It was passed a child from " + le(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function Zr(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && Qr(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = I(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                _e(l.value) && Qr(l.value, r);
          }
        }
      }
      function et(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === H))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            Rt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var i = le(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Tt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function rt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = wt(r);
          p ? i += p : i += Jr();
          var l;
          e === null ? l = "null" : $e(e) ? l = "array" : e !== void 0 && e.$$typeof === X ? (l = "<" + (le(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            Zr(arguments[E], e);
        return e === re ? Tt(y) : et(y), y;
      }
      var tt = !1;
      function Ot(e) {
        var r = rt.bind(null, e);
        return r.type = e, tt || (tt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Pt(e, r, a) {
        for (var o = Er.apply(this, arguments), i = 2; i < arguments.length; i++)
          Zr(arguments[i], o.type);
        return et(o), o;
      }
      function kt(e, r) {
        var a = oe.transition;
        oe.transition = {};
        var o = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (oe.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var nt = !1, pr = null;
      function jt(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = R && R[r];
            pr = a.call(R, "timers").setImmediate;
          } catch {
            pr = function(i) {
              nt === !1 && (nt = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ue = 0, at = !1;
      function At(e) {
        {
          var r = Ue;
          Ue++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var i = N.current;
              i !== null && (N.didScheduleLegacyUpdate = !1, $r(i));
            }
          } catch (F) {
            throw vr(r), F;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(F, W) {
                l = !0, p.then(function(z) {
                  vr(r), Ue === 0 ? Fr(z, F, W) : F(z);
                }, function(z) {
                  vr(r), W(z);
                });
              }
            };
            return !at && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (at = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (vr(r), Ue === 0) {
              var P = N.current;
              P !== null && ($r(P), N.current = null);
              var A = {
                then: function(F, W) {
                  N.current === null ? (N.current = [], Fr(E, F, W)) : F(E);
                }
              };
              return A;
            } else {
              var x = {
                then: function(F, W) {
                  F(E);
                }
              };
              return x;
            }
          }
        }
      }
      function vr(e) {
        e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Fr(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              $r(o), jt(function() {
                o.length === 0 ? (N.current = null, r(e)) : Fr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var Ir = !1;
      function $r(e) {
        if (!Ir) {
          Ir = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Ir = !1;
          }
        }
      }
      var xt = rt, Dt = Pt, Ft = Ot, It = {
        map: De,
        forEach: or,
        count: wr,
        toArray: Sr,
        only: ur
      };
      v.Children = It, v.Component = _, v.Fragment = re, v.Profiler = Q, v.PureComponent = V, v.StrictMode = te, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.cloneElement = Dt, v.createContext = ir, v.createElement = xt, v.createFactory = Ft, v.createRef = hr, v.forwardRef = kr, v.isValidElement = _e, v.lazy = Pr, v.memo = c, v.startTransition = kt, v.unstable_act = At, v.useCallback = J, v.useContext = C, v.useDebugValue = ie, v.useDeferredValue = vt, v.useEffect = B, v.useId = yt, v.useImperativeHandle = sr, v.useInsertionEffect = D, v.useLayoutEffect = $, v.useMemo = Ee, v.useReducer = b, v.useRef = m, v.useState = T, v.useSyncExternalStore = ht, v.useTransition = pt, v.version = de, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ut, Je)), Je;
}
(function(R) {
  process.env.NODE_ENV === "production" ? R.exports = Vt() : R.exports = Yt();
})(Wt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Bt() {
  if (ft)
    return He;
  ft = 1;
  var R = Re, v = Symbol.for("react.element"), de = Symbol.for("react.fragment"), X = Object.prototype.hasOwnProperty, pe = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(Q, L, Z) {
    var M, U = {}, ee = null, H = null;
    Z !== void 0 && (ee = "" + Z), L.key !== void 0 && (ee = "" + L.key), L.ref !== void 0 && (H = L.ref);
    for (M in L)
      X.call(L, M) && !re.hasOwnProperty(M) && (U[M] = L[M]);
    if (Q && Q.defaultProps)
      for (M in L = Q.defaultProps, L)
        U[M] === void 0 && (U[M] = L[M]);
    return { $$typeof: v, type: Q, key: ee, ref: H, props: U, _owner: pe.current };
  }
  return He.Fragment = de, He.jsx = te, He.jsxs = te, He;
}
var Ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function zt() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    var R = Re, v = Symbol.for("react.element"), de = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), Q = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), se = Symbol.iterator, Ie = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ae = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = ae.ReactDebugCurrentFrame, C = f.getStackAddendum();
        C !== "" && (u += "%s", c = c.concat([C]));
        var T = c.map(function(b) {
          return String(b);
        });
        T.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var oe = !1, N = !1, q = !1, ce = !1, ve = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === X || t === re || ve || t === pe || t === Z || t === M || ce || t === H || oe || N || q || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === te || t.$$typeof === Q || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var C = u.displayName || u.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function K(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case X:
          return "Fragment";
        case de:
          return "Portal";
        case re:
          return "Profiler";
        case pe:
          return "StrictMode";
        case Z:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return Se(u) + ".Consumer";
          case te:
            var c = t;
            return Se(c._context) + ".Provider";
          case L:
            return Ye(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : K(t.type) || "Memo";
          case ee: {
            var C = t, T = C._payload, b = C._init;
            try {
              return K(b(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, Y = 0, ue, d, fe, Te, n, s, h;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function _() {
      {
        if (Y === 0) {
          ue = console.log, d = console.info, fe = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function k() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, t, {
              value: ue
            }),
            info: G({}, t, {
              value: d
            }),
            warn: G({}, t, {
              value: fe
            }),
            error: G({}, t, {
              value: Te
            }),
            group: G({}, t, {
              value: n
            }),
            groupCollapsed: G({}, t, {
              value: s
            }),
            groupEnd: G({}, t, {
              value: h
            })
          });
        }
        Y < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = ae.ReactCurrentDispatcher, O;
    function S(t, u, c) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (C) {
            var f = C.stack.trim().match(/\n( *(at )?)/);
            O = f && f[1] || "";
          }
        return `
` + O + t;
      }
    }
    var V = !1, me;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new hr();
    }
    function Xe(t, u) {
      if (!t || V)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      V = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = j.current, j.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ie) {
              f = ie;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ie) {
              f = ie;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            f = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && f && typeof ie.stack == "string") {
          for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), D = m.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && m[D] !== B[$]; )
            $--;
          for (; D >= 1 && $ >= 0; D--, $--)
            if (m[D] !== B[$]) {
              if (D !== 1 || $ !== 1)
                do
                  if (D--, $--, $ < 0 || m[D] !== B[$]) {
                    var J = `
` + m[D].replace(" at new ", " at ");
                    return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, J), J;
                  }
                while (D >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        V = !1, j.current = T, k(), Error.prepareStackTrace = C;
      }
      var Ee = t ? t.displayName || t.name : "", sr = Ee ? S(Ee) : "";
      return typeof t == "function" && me.set(t, sr), sr;
    }
    function $e(t, u, c) {
      return Xe(t, !1);
    }
    function mr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, mr(t));
      if (typeof t == "string")
        return S(t);
      switch (t) {
        case Z:
          return S("Suspense");
        case M:
          return S("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return $e(t.render);
          case U:
            return Le(t.type, u, c);
          case ee: {
            var f = t, C = f._payload, T = f._init;
            try {
              return Le(T(C), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Pe = {}, Qe = ae.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function le(t, u, c, f, C) {
      {
        var T = Function.call.bind(Oe);
        for (var b in t)
          if (T(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              m = D;
            }
            m && !(m instanceof Error) && (ke(C), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Pe) && (Pe[m.message] = !0, ke(C), I("Failed %s type: %s", c, m.message), ke(null));
          }
      }
    }
    var je = Array.isArray;
    function Me(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ne(t);
    }
    var ge = ae.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, Ae;
    Ae = {};
    function _r(t) {
      if (Oe.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function br(t) {
      if (Oe.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Er(t, u) {
      if (typeof t.ref == "string" && ge.current && u && ge.current.stateNode !== u) {
        var c = K(ge.current.type);
        Ae[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), t.ref), Ae[c] = !0);
      }
    }
    function _e(t, u) {
      {
        var c = function() {
          rr || (rr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rr = function(t, u, c, f, C, T, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Cr(t, u, c, f, C) {
      {
        var T, b = {}, m = null, B = null;
        c !== void 0 && (Be(c), m = "" + c), br(u) && (Be(u.key), m = "" + u.key), _r(u) && (B = u.ref, Er(u, C));
        for (T in u)
          Oe.call(u, T) && !gr.hasOwnProperty(T) && (b[T] = u[T]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (T in D)
            b[T] === void 0 && (b[T] = D[T]);
        }
        if (m || B) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && _e(b, $), B && nr(b, $);
        }
        return Rr(t, m, B, C, f, ge.current, b);
      }
    }
    var We = ae.ReactCurrentOwner, ar = ae.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function De() {
      {
        if (We.current) {
          var t = K(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function wr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Sr(t) {
      {
        var u = De();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Sr(u);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== We.current && (f = " It was passed a child from " + K(t._owner.type) + "."), ye(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && ur(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ne(t);
          if (typeof C == "function" && C !== t.entries)
            for (var T = C.call(t), b; !(b = T.next()).done; )
              be(b.value) && ur(b.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = K(u);
          le(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !xe) {
          xe = !0;
          var C = K(u);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, u, c, f, C, T) {
      {
        var b = we(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = wr(C);
          B ? m += B : m += De();
          var D;
          t === null ? D = "null" : Me(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (K(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, m);
        }
        var $ = Cr(t, u, c, C, T);
        if ($ == null)
          return $;
        if (b) {
          var J = u.children;
          if (J !== void 0)
            if (f)
              if (Me(J)) {
                for (var Ee = 0; Ee < J.length; Ee++)
                  ir(J[Ee], t);
                Object.freeze && Object.freeze(J);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(J, t);
        }
        return t === X ? ze($) : Fe($), $;
      }
    }
    function Tr(t, u, c) {
      return qe(t, u, c, !0);
    }
    function Or(t, u, c) {
      return qe(t, u, c, !1);
    }
    var Pr = Or, kr = Tr;
    Ge.Fragment = X, Ge.jsx = Pr, Ge.jsxs = kr;
  }()), Ge;
}
(function(R) {
  process.env.NODE_ENV === "production" ? R.exports = Bt() : R.exports = zt();
})(Nt);
const dt = Re.createContext({
  config: null,
  children: null,
  router: null
}), Ht = ({ config: R, children: v, router: de }) => /* @__PURE__ */ Mr.jsx(dt.Provider, { value: { config: R, router: de }, children: v }), qt = Re.createContext({
  dispatch: () => {
  },
  localOrigin: "",
  hostOrigin: "",
  error: {},
  hooks: {},
  async getState() {
    return {
      staffMember: {
        accountAccess: "",
        locale: ""
      },
      context: "Main"
      /* Main */
    };
  },
  subscribe: () => () => {
  }
}), Kt = (R) => {
  if ((R == null ? void 0 : R.apiKey) !== "random-uuidv4-key")
    throw new Error("AppBridgeContext: invalid config apiKey");
  return qt;
}, Gt = () => {
  const { config: R } = Re.useContext(dt);
  return Re.useContext(Kt(R));
};
export {
  Ht as FrameProvider,
  Gt as useAppBridge
};
