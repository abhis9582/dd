var Ad = (e) => {
  throw TypeError(e);
};
var Jl = (e, t, n) => t.has(e) || Ad("Cannot " + n);
var P = (e, t, n) => (
    Jl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ie = (e, t, n) =>
    t.has(e)
      ? Ad("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  q = (e, t, n, r) => (
    Jl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ze = (e, t, n) => (Jl(e, t, "access private method"), n);
var Fs = (e, t, n, r) => ({
  set _(o) {
    q(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function py(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function qp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gp = { exports: {} },
  hl = {},
  Xp = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var js = Symbol.for("react.element"),
  hy = Symbol.for("react.portal"),
  my = Symbol.for("react.fragment"),
  gy = Symbol.for("react.strict_mode"),
  vy = Symbol.for("react.profiler"),
  yy = Symbol.for("react.provider"),
  xy = Symbol.for("react.context"),
  wy = Symbol.for("react.forward_ref"),
  by = Symbol.for("react.suspense"),
  Sy = Symbol.for("react.memo"),
  Cy = Symbol.for("react.lazy"),
  Md = Symbol.iterator;
function Ey(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Md && e[Md]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Jp = Object.assign,
  eh = {};
function bo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Zp);
}
bo.prototype.isReactComponent = {};
bo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function th() {}
th.prototype = bo.prototype;
function lu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Zp);
}
var au = (lu.prototype = new th());
au.constructor = lu;
Jp(au, bo.prototype);
au.isPureReactComponent = !0;
var _d = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  cu = { current: null },
  rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function oh(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      nh.call(t, r) && !rh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: js,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: cu.current,
  };
}
function Ny(e, t) {
  return {
    $$typeof: js,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === js;
}
function ky(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Od = /\/+/g;
function ea(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ky("" + e.key)
    : t.toString(36);
}
function fi(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case js:
          case hy:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ea(i, 0) : r),
      _d(o)
        ? ((n = ""),
          e != null && (n = e.replace(Od, "$&/") + "/"),
          fi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (uu(o) &&
            (o = Ny(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Od, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), _d(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ea(s, l);
      i += fi(s, t, n, a, o);
    }
  else if (((a = Ey(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + ea(s, l++)), (i += fi(s, t, n, a, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function $s(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    fi(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function jy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var qe = { current: null },
  pi = { transition: null },
  Py = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: pi,
    ReactCurrentOwner: cu,
  };
function sh() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: $s,
  forEach: function (e, t, n) {
    $s(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $s(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $s(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = bo;
X.Fragment = my;
X.Profiler = vy;
X.PureComponent = lu;
X.StrictMode = gy;
X.Suspense = by;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
X.act = sh;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Jp({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = cu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      nh.call(t, a) &&
        !rh.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: js, type: e.type, key: o, ref: s, props: r, _owner: i };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: xy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yy, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = oh;
X.createFactory = function (e) {
  var t = oh.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: wy, render: e };
};
X.isValidElement = uu;
X.lazy = function (e) {
  return { $$typeof: Cy, _payload: { _status: -1, _result: e }, _init: jy };
};
X.memo = function (e, t) {
  return { $$typeof: Sy, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
X.unstable_act = sh;
X.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
X.useContext = function (e) {
  return qe.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
X.useId = function () {
  return qe.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return qe.current.useRef(e);
};
X.useState = function (e) {
  return qe.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return qe.current.useTransition();
};
X.version = "18.3.1";
Xp.exports = X;
var h = Xp.exports;
const _ = qp(h),
  ih = py({ __proto__: null, default: _ }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty = h,
  Ry = Symbol.for("react.element"),
  Ay = Symbol.for("react.fragment"),
  My = Object.prototype.hasOwnProperty,
  _y = Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oy = { key: !0, ref: !0, __self: !0, __source: !0 };
function lh(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) My.call(t, r) && !Oy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ry,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: _y.current,
  };
}
hl.Fragment = Ay;
hl.jsx = lh;
hl.jsxs = lh;
Gp.exports = hl;
var c = Gp.exports,
  ah = { exports: {} },
  ft = {},
  ch = { exports: {} },
  uh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, A) {
    var $ = E.length;
    E.push(A);
    e: for (; 0 < $; ) {
      var L = ($ - 1) >>> 1,
        U = E[L];
      if (0 < o(U, A)) (E[L] = A), (E[$] = U), ($ = L);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var A = E[0],
      $ = E.pop();
    if ($ !== A) {
      E[0] = $;
      e: for (var L = 0, U = E.length, G = U >>> 1; L < G; ) {
        var oe = 2 * (L + 1) - 1,
          Re = E[oe],
          Z = oe + 1,
          B = E[Z];
        if (0 > o(Re, $))
          Z < U && 0 > o(B, Re)
            ? ((E[L] = B), (E[Z] = $), (L = Z))
            : ((E[L] = Re), (E[oe] = $), (L = oe));
        else if (Z < U && 0 > o(B, $)) (E[L] = B), (E[Z] = $), (L = Z);
        else break e;
      }
    }
    return A;
  }
  function o(E, A) {
    var $ = E.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : E.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    u = [],
    f = 1,
    p = null,
    d = 3,
    x = !1,
    b = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(E) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= E)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function S(E) {
    if (((g = !1), y(E), !b))
      if (n(a) !== null) (b = !0), F(C);
      else {
        var A = n(u);
        A !== null && H(S, A.startTime - E);
      }
  }
  function C(E, A) {
    (b = !1), g && ((g = !1), v(j), (j = -1)), (x = !0);
    var $ = d;
    try {
      for (
        y(A), p = n(a);
        p !== null && (!(p.expirationTime > A) || (E && !z()));

      ) {
        var L = p.callback;
        if (typeof L == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var U = L(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof U == "function" ? (p.callback = U) : p === n(a) && r(a),
            y(A);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var G = !0;
      else {
        var oe = n(u);
        oe !== null && H(S, oe.startTime - A), (G = !1);
      }
      return G;
    } finally {
      (p = null), (d = $), (x = !1);
    }
  }
  var k = !1,
    N = null,
    j = -1,
    T = 5,
    M = -1;
  function z() {
    return !(e.unstable_now() - M < T);
  }
  function I() {
    if (N !== null) {
      var E = e.unstable_now();
      M = E;
      var A = !0;
      try {
        A = N(!0, E);
      } finally {
        A ? W() : ((k = !1), (N = null));
      }
    } else k = !1;
  }
  var W;
  if (typeof m == "function")
    W = function () {
      m(I);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      V = O.port2;
    (O.port1.onmessage = I),
      (W = function () {
        V.postMessage(null);
      });
  } else
    W = function () {
      w(I, 0);
    };
  function F(E) {
    (N = E), k || ((k = !0), W());
  }
  function H(E, A) {
    j = w(function () {
      E(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || x || ((b = !0), F(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var $ = d;
      d = A;
      try {
        return E();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var $ = d;
      d = E;
      try {
        return A();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (E, A, $) {
      var L = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? L + $ : L))
          : ($ = L),
        E)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = $ + U),
        (E = {
          id: f++,
          callback: A,
          priorityLevel: E,
          startTime: $,
          expirationTime: U,
          sortIndex: -1,
        }),
        $ > L
          ? ((E.sortIndex = $),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (g ? (v(j), (j = -1)) : (g = !0), H(S, $ - L)))
          : ((E.sortIndex = U), t(a, E), b || x || ((b = !0), F(C))),
        E
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (E) {
      var A = d;
      return function () {
        var $ = d;
        d = A;
        try {
          return E.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(uh);
ch.exports = uh;
var Iy = ch.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ly = h,
  dt = Iy;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var dh = new Set(),
  ts = {};
function yr(e, t) {
  ao(e, t), ao(e + "Capture", t);
}
function ao(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) dh.add(t[e]);
}
var on = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ua = Object.prototype.hasOwnProperty,
  Dy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Id = {},
  Ld = {};
function zy(e) {
  return Ua.call(Ld, e)
    ? !0
    : Ua.call(Id, e)
    ? !1
    : Dy.test(e)
    ? (Ld[e] = !0)
    : ((Id[e] = !0), !1);
}
function Fy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $y(e, t, n, r) {
  if (t === null || typeof t > "u" || Fy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var du = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(du, fu);
    Le[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(du, fu);
    Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(du, fu);
  Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pu(e, t, n, r) {
  var o = Le.hasOwnProperty(t) ? Le[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($y(t, n, o, r) && (n = null),
    r || o === null
      ? zy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Us = Symbol.for("react.element"),
  Mr = Symbol.for("react.portal"),
  _r = Symbol.for("react.fragment"),
  hu = Symbol.for("react.strict_mode"),
  Ba = Symbol.for("react.profiler"),
  fh = Symbol.for("react.provider"),
  ph = Symbol.for("react.context"),
  mu = Symbol.for("react.forward_ref"),
  Wa = Symbol.for("react.suspense"),
  Ha = Symbol.for("react.suspense_list"),
  gu = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  hh = Symbol.for("react.offscreen"),
  Dd = Symbol.iterator;
function To(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dd && e[Dd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  ta;
function Fo(e) {
  if (ta === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ta = (t && t[1]) || "";
    }
  return (
    `
` +
    ta +
    e
  );
}
var na = !1;
function ra(e, t) {
  if (!e || na) return "";
  na = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (na = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fo(e) : "";
}
function Uy(e) {
  switch (e.tag) {
    case 5:
      return Fo(e.type);
    case 16:
      return Fo("Lazy");
    case 13:
      return Fo("Suspense");
    case 19:
      return Fo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ra(e.type, !1)), e;
    case 11:
      return (e = ra(e.type.render, !1)), e;
    case 1:
      return (e = ra(e.type, !0)), e;
    default:
      return "";
  }
}
function Va(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _r:
      return "Fragment";
    case Mr:
      return "Portal";
    case Ba:
      return "Profiler";
    case hu:
      return "StrictMode";
    case Wa:
      return "Suspense";
    case Ha:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ph:
        return (e.displayName || "Context") + ".Consumer";
      case fh:
        return (e._context.displayName || "Context") + ".Provider";
      case mu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gu:
        return (
          (t = e.displayName || null), t !== null ? t : Va(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return Va(e(t));
        } catch {}
    }
  return null;
}
function By(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Va(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wy(e) {
  var t = mh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Bs(e) {
  e._valueTracker || (e._valueTracker = Wy(e));
}
function gh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ri(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ka(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vh(e, t) {
  (t = t.checked), t != null && pu(e, "checked", t, !1);
}
function Qa(e, t) {
  vh(e, t);
  var n = $n(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ya(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ya(e, t.type, $n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ya(e, t, n) {
  (t !== "number" || Ri(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $o = Array.isArray;
function Hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function qa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $d(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if ($o(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $n(n) };
}
function yh(e, t) {
  var n = $n(t.value),
    r = $n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ud(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ga(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ws,
  wh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ws = Ws || document.createElement("div"),
          Ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ws.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function (e) {
  Hy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ho[t] = Ho[e]);
  });
});
function bh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ho.hasOwnProperty(e) && Ho[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = bh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Vy = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Xa(e, t) {
  if (t) {
    if (Vy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Za(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ja = null;
function vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ec = null,
  Vr = null,
  Kr = null;
function Bd(e) {
  if ((e = Rs(e))) {
    if (typeof ec != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = xl(t)), ec(e.stateNode, e.type, t));
  }
}
function Ch(e) {
  Vr ? (Kr ? Kr.push(e) : (Kr = [e])) : (Vr = e);
}
function Eh() {
  if (Vr) {
    var e = Vr,
      t = Kr;
    if (((Kr = Vr = null), Bd(e), t)) for (e = 0; e < t.length; e++) Bd(t[e]);
  }
}
function Nh(e, t) {
  return e(t);
}
function kh() {}
var oa = !1;
function jh(e, t, n) {
  if (oa) return e(t, n);
  oa = !0;
  try {
    return Nh(e, t, n);
  } finally {
    (oa = !1), (Vr !== null || Kr !== null) && (kh(), Eh());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var tc = !1;
if (on)
  try {
    var Ro = {};
    Object.defineProperty(Ro, "passive", {
      get: function () {
        tc = !0;
      },
    }),
      window.addEventListener("test", Ro, Ro),
      window.removeEventListener("test", Ro, Ro);
  } catch {
    tc = !1;
  }
function Ky(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Vo = !1,
  Ai = null,
  Mi = !1,
  nc = null,
  Qy = {
    onError: function (e) {
      (Vo = !0), (Ai = e);
    },
  };
function Yy(e, t, n, r, o, s, i, l, a) {
  (Vo = !1), (Ai = null), Ky.apply(Qy, arguments);
}
function qy(e, t, n, r, o, s, i, l, a) {
  if ((Yy.apply(this, arguments), Vo)) {
    if (Vo) {
      var u = Ai;
      (Vo = !1), (Ai = null);
    } else throw Error(R(198));
    Mi || ((Mi = !0), (nc = u));
  }
}
function xr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wd(e) {
  if (xr(e) !== e) throw Error(R(188));
}
function Gy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Wd(o), e;
        if (s === r) return Wd(o), t;
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Th(e) {
  return (e = Gy(e)), e !== null ? Rh(e) : null;
}
function Rh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ah = dt.unstable_scheduleCallback,
  Hd = dt.unstable_cancelCallback,
  Xy = dt.unstable_shouldYield,
  Zy = dt.unstable_requestPaint,
  Ee = dt.unstable_now,
  Jy = dt.unstable_getCurrentPriorityLevel,
  yu = dt.unstable_ImmediatePriority,
  Mh = dt.unstable_UserBlockingPriority,
  _i = dt.unstable_NormalPriority,
  ex = dt.unstable_LowPriority,
  _h = dt.unstable_IdlePriority,
  ml = null,
  Vt = null;
function tx(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : ox,
  nx = Math.log,
  rx = Math.LN2;
function ox(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nx(e) / rx) | 0)) | 0;
}
var Hs = 64,
  Vs = 4194304;
function Uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Uo(l)) : ((s &= i), s !== 0 && (r = Uo(s)));
  } else (i = n & ~o), i !== 0 ? (r = Uo(i)) : s !== 0 && (r = Uo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - At(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function sx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ix(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - At(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = sx(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function rc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oh() {
  var e = Hs;
  return (Hs <<= 1), !(Hs & 4194240) && (Hs = 64), e;
}
function sa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ps(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = n);
}
function lx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - At(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var le = 0;
function Ih(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lh,
  wu,
  Dh,
  zh,
  Fh,
  oc = !1,
  Ks = [],
  An = null,
  Mn = null,
  _n = null,
  os = new Map(),
  ss = new Map(),
  bn = [],
  ax =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Vd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ss.delete(t.pointerId);
  }
}
function Ao(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Rs(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function cx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (An = Ao(An, e, t, n, r, o)), !0;
    case "dragenter":
      return (Mn = Ao(Mn, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = Ao(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return os.set(s, Ao(os.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), ss.set(s, Ao(ss.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function $h(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ph(n)), t !== null)) {
          (e.blockedOn = t),
            Fh(e.priority, function () {
              Dh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ja = r), n.target.dispatchEvent(r), (Ja = null);
    } else return (t = Rs(n)), t !== null && wu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Kd(e, t, n) {
  hi(e) && n.delete(t);
}
function ux() {
  (oc = !1),
    An !== null && hi(An) && (An = null),
    Mn !== null && hi(Mn) && (Mn = null),
    _n !== null && hi(_n) && (_n = null),
    os.forEach(Kd),
    ss.forEach(Kd);
}
function Mo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    oc ||
      ((oc = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, ux)));
}
function is(e) {
  function t(o) {
    return Mo(o, e);
  }
  if (0 < Ks.length) {
    Mo(Ks[0], e);
    for (var n = 1; n < Ks.length; n++) {
      var r = Ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    An !== null && Mo(An, e),
      Mn !== null && Mo(Mn, e),
      _n !== null && Mo(_n, e),
      os.forEach(t),
      ss.forEach(t),
      n = 0;
    n < bn.length;
    n++
  )
    (r = bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bn.length && ((n = bn[0]), n.blockedOn === null); )
    $h(n), n.blockedOn === null && bn.shift();
}
var Qr = dn.ReactCurrentBatchConfig,
  Ii = !0;
function dx(e, t, n, r) {
  var o = le,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (le = 1), bu(e, t, n, r);
  } finally {
    (le = o), (Qr.transition = s);
  }
}
function fx(e, t, n, r) {
  var o = le,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (le = 4), bu(e, t, n, r);
  } finally {
    (le = o), (Qr.transition = s);
  }
}
function bu(e, t, n, r) {
  if (Ii) {
    var o = sc(e, t, n, r);
    if (o === null) ma(e, t, r, Li, n), Vd(e, r);
    else if (cx(o, e, t, n, r)) r.stopPropagation();
    else if ((Vd(e, r), t & 4 && -1 < ax.indexOf(e))) {
      for (; o !== null; ) {
        var s = Rs(o);
        if (
          (s !== null && Lh(s),
          (s = sc(e, t, n, r)),
          s === null && ma(e, t, r, Li, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ma(e, t, r, null, n);
  }
}
var Li = null;
function sc(e, t, n, r) {
  if (((Li = null), (e = vu(r)), (e = er(e)), e !== null))
    if (((t = xr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ph(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Li = e), null;
}
function Uh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jy()) {
        case yu:
          return 1;
        case Mh:
          return 4;
        case _i:
        case ex:
          return 16;
        case _h:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pn = null,
  Su = null,
  mi = null;
function Bh() {
  if (mi) return mi;
  var e,
    t = Su,
    n = t.length,
    r,
    o = "value" in Pn ? Pn.value : Pn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (mi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function gi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qs() {
  return !0;
}
function Qd() {
  return !1;
}
function pt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Qs
        : Qd),
      (this.isPropagationStopped = Qd),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qs));
      },
      persist: function () {},
      isPersistent: Qs,
    }),
    t
  );
}
var So = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = pt(So),
  Ts = we({}, So, { view: 0, detail: 0 }),
  px = pt(Ts),
  ia,
  la,
  _o,
  gl = we({}, Ts, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _o &&
            (_o && e.type === "mousemove"
              ? ((ia = e.screenX - _o.screenX), (la = e.screenY - _o.screenY))
              : (la = ia = 0),
            (_o = e)),
          ia);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : la;
    },
  }),
  Yd = pt(gl),
  hx = we({}, gl, { dataTransfer: 0 }),
  mx = pt(hx),
  gx = we({}, Ts, { relatedTarget: 0 }),
  aa = pt(gx),
  vx = we({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yx = pt(vx),
  xx = we({}, So, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wx = pt(xx),
  bx = we({}, So, { data: 0 }),
  qd = pt(bx),
  Sx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Cx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ex = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ex[e]) ? !!t[e] : !1;
}
function Eu() {
  return Nx;
}
var kx = we({}, Ts, {
    key: function (e) {
      if (e.key) {
        var t = Sx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eu,
    charCode: function (e) {
      return e.type === "keypress" ? gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? gi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jx = pt(kx),
  Px = we({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gd = pt(Px),
  Tx = we({}, Ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eu,
  }),
  Rx = pt(Tx),
  Ax = we({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mx = pt(Ax),
  _x = we({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ox = pt(_x),
  Ix = [9, 13, 27, 32],
  Nu = on && "CompositionEvent" in window,
  Ko = null;
on && "documentMode" in document && (Ko = document.documentMode);
var Lx = on && "TextEvent" in window && !Ko,
  Wh = on && (!Nu || (Ko && 8 < Ko && 11 >= Ko)),
  Xd = " ",
  Zd = !1;
function Hh(e, t) {
  switch (e) {
    case "keyup":
      return Ix.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Or = !1;
function Dx(e, t) {
  switch (e) {
    case "compositionend":
      return Vh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zd = !0), Xd);
    case "textInput":
      return (e = t.data), e === Xd && Zd ? null : e;
    default:
      return null;
  }
}
function zx(e, t) {
  if (Or)
    return e === "compositionend" || (!Nu && Hh(e, t))
      ? ((e = Bh()), (mi = Su = Pn = null), (Or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fx[e.type] : t === "textarea";
}
function Kh(e, t, n, r) {
  Ch(r),
    (t = Di(t, "onChange")),
    0 < t.length &&
      ((n = new Cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Qo = null,
  ls = null;
function $x(e) {
  rm(e, 0);
}
function vl(e) {
  var t = Dr(e);
  if (gh(t)) return e;
}
function Ux(e, t) {
  if (e === "change") return t;
}
var Qh = !1;
if (on) {
  var ca;
  if (on) {
    var ua = "oninput" in document;
    if (!ua) {
      var ef = document.createElement("div");
      ef.setAttribute("oninput", "return;"),
        (ua = typeof ef.oninput == "function");
    }
    ca = ua;
  } else ca = !1;
  Qh = ca && (!document.documentMode || 9 < document.documentMode);
}
function tf() {
  Qo && (Qo.detachEvent("onpropertychange", Yh), (ls = Qo = null));
}
function Yh(e) {
  if (e.propertyName === "value" && vl(ls)) {
    var t = [];
    Kh(t, ls, e, vu(e)), jh($x, t);
  }
}
function Bx(e, t, n) {
  e === "focusin"
    ? (tf(), (Qo = t), (ls = n), Qo.attachEvent("onpropertychange", Yh))
    : e === "focusout" && tf();
}
function Wx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(ls);
}
function Hx(e, t) {
  if (e === "click") return vl(t);
}
function Vx(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function Kx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : Kx;
function as(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ua.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function nf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rf(e, t) {
  var n = nf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = nf(n);
  }
}
function qh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gh() {
  for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ri(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qx(e) {
  var t = Gh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ku(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = rf(n, s));
        var i = rf(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Yx = on && "documentMode" in document && 11 >= document.documentMode,
  Ir = null,
  ic = null,
  Yo = null,
  lc = !1;
function of(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lc ||
    Ir == null ||
    Ir !== Ri(r) ||
    ((r = Ir),
    "selectionStart" in r && ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yo && as(Yo, r)) ||
      ((Yo = r),
      (r = Di(ic, "onSelect")),
      0 < r.length &&
        ((t = new Cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ir))));
}
function Ys(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Lr = {
    animationend: Ys("Animation", "AnimationEnd"),
    animationiteration: Ys("Animation", "AnimationIteration"),
    animationstart: Ys("Animation", "AnimationStart"),
    transitionend: Ys("Transition", "TransitionEnd"),
  },
  da = {},
  Xh = {};
on &&
  ((Xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Lr.animationend.animation,
    delete Lr.animationiteration.animation,
    delete Lr.animationstart.animation),
  "TransitionEvent" in window || delete Lr.transitionend.transition);
function yl(e) {
  if (da[e]) return da[e];
  if (!Lr[e]) return e;
  var t = Lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xh) return (da[e] = t[n]);
  return e;
}
var Zh = yl("animationend"),
  Jh = yl("animationiteration"),
  em = yl("animationstart"),
  tm = yl("transitionend"),
  nm = new Map(),
  sf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kn(e, t) {
  nm.set(e, t), yr(t, [e]);
}
for (var fa = 0; fa < sf.length; fa++) {
  var pa = sf[fa],
    qx = pa.toLowerCase(),
    Gx = pa[0].toUpperCase() + pa.slice(1);
  Kn(qx, "on" + Gx);
}
Kn(Zh, "onAnimationEnd");
Kn(Jh, "onAnimationIteration");
Kn(em, "onAnimationStart");
Kn("dblclick", "onDoubleClick");
Kn("focusin", "onFocus");
Kn("focusout", "onBlur");
Kn(tm, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
yr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Bo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));
function lf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qy(r, t, void 0, e), (e.currentTarget = null);
}
function rm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          lf(o, l, u), (s = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          lf(o, l, u), (s = a);
        }
    }
  }
  if (Mi) throw ((e = nc), (Mi = !1), (nc = null), e);
}
function me(e, t) {
  var n = t[fc];
  n === void 0 && (n = t[fc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (om(t, e, 2, !1), n.add(r));
}
function ha(e, t, n) {
  var r = 0;
  t && (r |= 4), om(n, e, r, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[qs]) {
    (e[qs] = !0),
      dh.forEach(function (n) {
        n !== "selectionchange" && (Xx.has(n) || ha(n, !1, e), ha(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qs] || ((t[qs] = !0), ha("selectionchange", !1, t));
  }
}
function om(e, t, n, r) {
  switch (Uh(t)) {
    case 1:
      var o = dx;
      break;
    case 4:
      o = fx;
      break;
    default:
      o = bu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !tc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ma(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = er(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  jh(function () {
    var u = s,
      f = vu(n),
      p = [];
    e: {
      var d = nm.get(e);
      if (d !== void 0) {
        var x = Cu,
          b = e;
        switch (e) {
          case "keypress":
            if (gi(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = jx;
            break;
          case "focusin":
            (b = "focus"), (x = aa);
            break;
          case "focusout":
            (b = "blur"), (x = aa);
            break;
          case "beforeblur":
          case "afterblur":
            x = aa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Yd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = mx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Rx;
            break;
          case Zh:
          case Jh:
          case em:
            x = yx;
            break;
          case tm:
            x = Mx;
            break;
          case "scroll":
            x = px;
            break;
          case "wheel":
            x = Ox;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = wx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Gd;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          v = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              v !== null && ((S = rs(m, v)), S != null && g.push(us(m, S, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((d = new x(d, b, null, n, f)), p.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ja &&
            (b = n.relatedTarget || n.fromElement) &&
            (er(b) || b[sn]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          x
            ? ((b = n.relatedTarget || n.toElement),
              (x = u),
              (b = b ? er(b) : null),
              b !== null &&
                ((w = xr(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((x = null), (b = u)),
          x !== b)
        ) {
          if (
            ((g = Yd),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Gd),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (w = x == null ? d : Dr(x)),
            (y = b == null ? d : Dr(b)),
            (d = new g(S, m + "leave", x, n, f)),
            (d.target = w),
            (d.relatedTarget = y),
            (S = null),
            er(f) === u &&
              ((g = new g(v, m + "enter", b, n, f)),
              (g.target = y),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            x && b)
          )
            t: {
              for (g = x, v = b, m = 0, y = g; y; y = jr(y)) m++;
              for (y = 0, S = v; S; S = jr(S)) y++;
              for (; 0 < m - y; ) (g = jr(g)), m--;
              for (; 0 < y - m; ) (v = jr(v)), y--;
              for (; m--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = jr(g)), (v = jr(v));
              }
              g = null;
            }
          else g = null;
          x !== null && af(p, d, x, g, !1),
            b !== null && w !== null && af(p, w, b, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? Dr(u) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === "select" || (x === "input" && d.type === "file"))
        )
          var C = Ux;
        else if (Jd(d))
          if (Qh) C = Vx;
          else {
            C = Wx;
            var k = Bx;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = Hx);
        if (C && (C = C(e, u))) {
          Kh(p, C, n, f);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            Ya(d, "number", d.value);
      }
      switch (((k = u ? Dr(u) : window), e)) {
        case "focusin":
          (Jd(k) || k.contentEditable === "true") &&
            ((Ir = k), (ic = u), (Yo = null));
          break;
        case "focusout":
          Yo = ic = Ir = null;
          break;
        case "mousedown":
          lc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (lc = !1), of(p, n, f);
          break;
        case "selectionchange":
          if (Yx) break;
        case "keydown":
        case "keyup":
          of(p, n, f);
      }
      var N;
      if (Nu)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Or
          ? Hh(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Wh &&
          n.locale !== "ko" &&
          (Or || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Or && (N = Bh())
            : ((Pn = f),
              (Su = "value" in Pn ? Pn.value : Pn.textContent),
              (Or = !0))),
        (k = Di(u, j)),
        0 < k.length &&
          ((j = new qd(j, e, null, n, f)),
          p.push({ event: j, listeners: k }),
          N ? (j.data = N) : ((N = Vh(n)), N !== null && (j.data = N)))),
        (N = Lx ? Dx(e, n) : zx(e, n)) &&
          ((u = Di(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new qd("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: u }),
            (f.data = N)));
    }
    rm(p, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Di(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = rs(e, n)),
      s != null && r.unshift(us(e, s, o)),
      (s = rs(e, t)),
      s != null && r.push(us(e, s, o))),
      (e = e.return);
  }
  return r;
}
function jr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function af(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = rs(n, s)), a != null && i.unshift(us(n, a, l)))
        : o || ((a = rs(n, s)), a != null && i.push(us(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Zx = /\r\n?/g,
  Jx = /\u0000|\uFFFD/g;
function cf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zx,
      `
`
    )
    .replace(Jx, "");
}
function Gs(e, t, n) {
  if (((t = cf(t)), cf(e) !== t && n)) throw Error(R(425));
}
function zi() {}
var ac = null,
  cc = null;
function uc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var dc = typeof setTimeout == "function" ? setTimeout : void 0,
  ew = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uf = typeof Promise == "function" ? Promise : void 0,
  tw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uf < "u"
      ? function (e) {
          return uf.resolve(null).then(e).catch(nw);
        }
      : dc;
function nw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ga(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), is(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  is(t);
}
function On(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Co = Math.random().toString(36).slice(2),
  Wt = "__reactFiber$" + Co,
  ds = "__reactProps$" + Co,
  sn = "__reactContainer$" + Co,
  fc = "__reactEvents$" + Co,
  rw = "__reactListeners$" + Co,
  ow = "__reactHandles$" + Co;
function er(e) {
  var t = e[Wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sn] || n[Wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = df(e); e !== null; ) {
          if ((n = e[Wt])) return n;
          e = df(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[Wt] || e[sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function xl(e) {
  return e[ds] || null;
}
var pc = [],
  zr = -1;
function Qn(e) {
  return { current: e };
}
function ge(e) {
  0 > zr || ((e.current = pc[zr]), (pc[zr] = null), zr--);
}
function fe(e, t) {
  zr++, (pc[zr] = e.current), (e.current = t);
}
var Un = {},
  We = Qn(Un),
  Je = Qn(!1),
  dr = Un;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function et(e) {
  return (e = e.childContextTypes), e != null;
}
function Fi() {
  ge(Je), ge(We);
}
function ff(e, t, n) {
  if (We.current !== Un) throw Error(R(168));
  fe(We, t), fe(Je, n);
}
function sm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, By(e) || "Unknown", o));
  return we({}, n, r);
}
function $i(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Un),
    (dr = We.current),
    fe(We, e),
    fe(Je, Je.current),
    !0
  );
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = sm(e, t, dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(Je),
      ge(We),
      fe(We, e))
    : ge(Je),
    fe(Je, n);
}
var en = null,
  wl = !1,
  va = !1;
function im(e) {
  en === null ? (en = [e]) : en.push(e);
}
function sw(e) {
  (wl = !0), im(e);
}
function Yn() {
  if (!va && en !== null) {
    va = !0;
    var e = 0,
      t = le;
    try {
      var n = en;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (wl = !1);
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), Ah(yu, Yn), o);
    } finally {
      (le = t), (va = !1);
    }
  }
  return null;
}
var Fr = [],
  $r = 0,
  Ui = null,
  Bi = 0,
  gt = [],
  vt = 0,
  fr = null,
  tn = 1,
  nn = "";
function Zn(e, t) {
  (Fr[$r++] = Bi), (Fr[$r++] = Ui), (Ui = e), (Bi = t);
}
function lm(e, t, n) {
  (gt[vt++] = tn), (gt[vt++] = nn), (gt[vt++] = fr), (fr = e);
  var r = tn;
  e = nn;
  var o = 32 - At(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - At(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (tn = (1 << (32 - At(t) + o)) | (n << o) | r),
      (nn = s + e);
  } else (tn = (1 << s) | (n << o) | r), (nn = e);
}
function ju(e) {
  e.return !== null && (Zn(e, 1), lm(e, 1, 0));
}
function Pu(e) {
  for (; e === Ui; )
    (Ui = Fr[--$r]), (Fr[$r] = null), (Bi = Fr[--$r]), (Fr[$r] = null);
  for (; e === fr; )
    (fr = gt[--vt]),
      (gt[vt] = null),
      (nn = gt[--vt]),
      (gt[vt] = null),
      (tn = gt[--vt]),
      (gt[vt] = null);
}
var ct = null,
  lt = null,
  ve = !1,
  Rt = null;
function am(e, t) {
  var n = yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (lt = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (lt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fr !== null ? { id: tn, overflow: nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (lt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mc(e) {
  if (ve) {
    var t = lt;
    if (t) {
      var n = t;
      if (!hf(e, t)) {
        if (hc(e)) throw Error(R(418));
        t = On(n.nextSibling);
        var r = ct;
        t && hf(e, t)
          ? am(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ct = e));
      }
    } else {
      if (hc(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (ct = e);
    }
  }
}
function mf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ct = e;
}
function Xs(e) {
  if (e !== ct) return !1;
  if (!ve) return mf(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !uc(e.type, e.memoizedProps))),
    t && (t = lt))
  ) {
    if (hc(e)) throw (cm(), Error(R(418)));
    for (; t; ) am(e, t), (t = On(t.nextSibling));
  }
  if ((mf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = ct ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function cm() {
  for (var e = lt; e; ) e = On(e.nextSibling);
}
function uo() {
  (lt = ct = null), (ve = !1);
}
function Tu(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
var iw = dn.ReactCurrentBatchConfig;
function Oo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Zs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gf(e) {
  var t = e._init;
  return t(e._payload);
}
function um(e) {
  function t(v, m) {
    if (e) {
      var y = v.deletions;
      y === null ? ((v.deletions = [m]), (v.flags |= 16)) : y.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function o(v, m) {
    return (v = zn(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, m, y) {
    return (
      (v.index = y),
      e
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((v.flags |= 2), m) : y)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, m, y, S) {
    return m === null || m.tag !== 6
      ? ((m = Ea(y, v.mode, S)), (m.return = v), m)
      : ((m = o(m, y)), (m.return = v), m);
  }
  function a(v, m, y, S) {
    var C = y.type;
    return C === _r
      ? f(v, m, y.props.children, S, y.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === xn &&
            gf(C) === m.type))
      ? ((S = o(m, y.props)), (S.ref = Oo(v, m, y)), (S.return = v), S)
      : ((S = Ci(y.type, y.key, y.props, null, v.mode, S)),
        (S.ref = Oo(v, m, y)),
        (S.return = v),
        S);
  }
  function u(v, m, y, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Na(y, v.mode, S)), (m.return = v), m)
      : ((m = o(m, y.children || [])), (m.return = v), m);
  }
  function f(v, m, y, S, C) {
    return m === null || m.tag !== 7
      ? ((m = ar(y, v.mode, S, C)), (m.return = v), m)
      : ((m = o(m, y)), (m.return = v), m);
  }
  function p(v, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Ea("" + m, v.mode, y)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Us:
          return (
            (y = Ci(m.type, m.key, m.props, null, v.mode, y)),
            (y.ref = Oo(v, null, m)),
            (y.return = v),
            y
          );
        case Mr:
          return (m = Na(m, v.mode, y)), (m.return = v), m;
        case xn:
          var S = m._init;
          return p(v, S(m._payload), y);
      }
      if ($o(m) || To(m))
        return (m = ar(m, v.mode, y, null)), (m.return = v), m;
      Zs(v, m);
    }
    return null;
  }
  function d(v, m, y, S) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : l(v, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Us:
          return y.key === C ? a(v, m, y, S) : null;
        case Mr:
          return y.key === C ? u(v, m, y, S) : null;
        case xn:
          return (C = y._init), d(v, m, C(y._payload), S);
      }
      if ($o(y) || To(y)) return C !== null ? null : f(v, m, y, S, null);
      Zs(v, y);
    }
    return null;
  }
  function x(v, m, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(y) || null), l(m, v, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Us:
          return (v = v.get(S.key === null ? y : S.key) || null), a(m, v, S, C);
        case Mr:
          return (v = v.get(S.key === null ? y : S.key) || null), u(m, v, S, C);
        case xn:
          var k = S._init;
          return x(v, m, y, k(S._payload), C);
      }
      if ($o(S) || To(S)) return (v = v.get(y) || null), f(m, v, S, C, null);
      Zs(m, S);
    }
    return null;
  }
  function b(v, m, y, S) {
    for (
      var C = null, k = null, N = m, j = (m = 0), T = null;
      N !== null && j < y.length;
      j++
    ) {
      N.index > j ? ((T = N), (N = null)) : (T = N.sibling);
      var M = d(v, N, y[j], S);
      if (M === null) {
        N === null && (N = T);
        break;
      }
      e && N && M.alternate === null && t(v, N),
        (m = s(M, m, j)),
        k === null ? (C = M) : (k.sibling = M),
        (k = M),
        (N = T);
    }
    if (j === y.length) return n(v, N), ve && Zn(v, j), C;
    if (N === null) {
      for (; j < y.length; j++)
        (N = p(v, y[j], S)),
          N !== null &&
            ((m = s(N, m, j)), k === null ? (C = N) : (k.sibling = N), (k = N));
      return ve && Zn(v, j), C;
    }
    for (N = r(v, N); j < y.length; j++)
      (T = x(N, v, j, y[j], S)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? j : T.key),
          (m = s(T, m, j)),
          k === null ? (C = T) : (k.sibling = T),
          (k = T));
    return (
      e &&
        N.forEach(function (z) {
          return t(v, z);
        }),
      ve && Zn(v, j),
      C
    );
  }
  function g(v, m, y, S) {
    var C = To(y);
    if (typeof C != "function") throw Error(R(150));
    if (((y = C.call(y)), y == null)) throw Error(R(151));
    for (
      var k = (C = null), N = m, j = (m = 0), T = null, M = y.next();
      N !== null && !M.done;
      j++, M = y.next()
    ) {
      N.index > j ? ((T = N), (N = null)) : (T = N.sibling);
      var z = d(v, N, M.value, S);
      if (z === null) {
        N === null && (N = T);
        break;
      }
      e && N && z.alternate === null && t(v, N),
        (m = s(z, m, j)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (N = T);
    }
    if (M.done) return n(v, N), ve && Zn(v, j), C;
    if (N === null) {
      for (; !M.done; j++, M = y.next())
        (M = p(v, M.value, S)),
          M !== null &&
            ((m = s(M, m, j)), k === null ? (C = M) : (k.sibling = M), (k = M));
      return ve && Zn(v, j), C;
    }
    for (N = r(v, N); !M.done; j++, M = y.next())
      (M = x(N, v, j, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && N.delete(M.key === null ? j : M.key),
          (m = s(M, m, j)),
          k === null ? (C = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        N.forEach(function (I) {
          return t(v, I);
        }),
      ve && Zn(v, j),
      C
    );
  }
  function w(v, m, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === _r &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Us:
          e: {
            for (var C = y.key, k = m; k !== null; ) {
              if (k.key === C) {
                if (((C = y.type), C === _r)) {
                  if (k.tag === 7) {
                    n(v, k.sibling),
                      (m = o(k, y.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === xn &&
                    gf(C) === k.type)
                ) {
                  n(v, k.sibling),
                    (m = o(k, y.props)),
                    (m.ref = Oo(v, k, y)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, k);
                break;
              } else t(v, k);
              k = k.sibling;
            }
            y.type === _r
              ? ((m = ar(y.props.children, v.mode, S, y.key)),
                (m.return = v),
                (v = m))
              : ((S = Ci(y.type, y.key, y.props, null, v.mode, S)),
                (S.ref = Oo(v, m, y)),
                (S.return = v),
                (v = S));
          }
          return i(v);
        case Mr:
          e: {
            for (k = y.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(v, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Na(y, v.mode, S)), (m.return = v), (v = m);
          }
          return i(v);
        case xn:
          return (k = y._init), w(v, m, k(y._payload), S);
      }
      if ($o(y)) return b(v, m, y, S);
      if (To(y)) return g(v, m, y, S);
      Zs(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = o(m, y)), (m.return = v), (v = m))
          : (n(v, m), (m = Ea(y, v.mode, S)), (m.return = v), (v = m)),
        i(v))
      : n(v, m);
  }
  return w;
}
var fo = um(!0),
  dm = um(!1),
  Wi = Qn(null),
  Hi = null,
  Ur = null,
  Ru = null;
function Au() {
  Ru = Ur = Hi = null;
}
function Mu(e) {
  var t = Wi.current;
  ge(Wi), (e._currentValue = t);
}
function gc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yr(e, t) {
  (Hi = e),
    (Ru = Ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
      if (Hi === null) throw Error(R(308));
      (Ur = e), (Hi.dependencies = { lanes: 0, firstContext: e });
    } else Ur = Ur.next = e;
  return t;
}
var tr = null;
function _u(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function fm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _u(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ln(e, r)
  );
}
function ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function Ou(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function In(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ln(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _u(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ln(e, n)
  );
}
function vi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
function vf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Vi(e, t, n, r) {
  var o = e.updateQueue;
  wn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), i === null ? (s = u) : (i.next = u), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== i &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var p = o.baseState;
    (i = 0), (f = u = a = null), (l = s);
    do {
      var d = l.lane,
        x = l.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var b = e,
            g = l;
          switch (((d = t), (x = n), g.tag)) {
            case 1:
              if (((b = g.payload), typeof b == "function")) {
                p = b.call(x, p, d);
                break e;
              }
              p = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = g.payload),
                (d = typeof b == "function" ? b.call(x, p, d) : b),
                d == null)
              )
                break e;
              p = we({}, p, d);
              break e;
            case 2:
              wn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = x), (a = p)) : (f = f.next = x),
          (i |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (hr |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function yf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var As = {},
  Kt = Qn(As),
  fs = Qn(As),
  ps = Qn(As);
function nr(e) {
  if (e === As) throw Error(R(174));
  return e;
}
function Iu(e, t) {
  switch ((fe(ps, t), fe(fs, e), fe(Kt, As), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ga(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ga(t, e));
  }
  ge(Kt), fe(Kt, t);
}
function po() {
  ge(Kt), ge(fs), ge(ps);
}
function hm(e) {
  nr(ps.current);
  var t = nr(Kt.current),
    n = Ga(t, e.type);
  t !== n && (fe(fs, e), fe(Kt, n));
}
function Lu(e) {
  fs.current === e && (ge(Kt), ge(fs));
}
var ye = Qn(0);
function Ki(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ya = [];
function Du() {
  for (var e = 0; e < ya.length; e++)
    ya[e]._workInProgressVersionPrimary = null;
  ya.length = 0;
}
var yi = dn.ReactCurrentDispatcher,
  xa = dn.ReactCurrentBatchConfig,
  pr = 0,
  xe = null,
  Pe = null,
  Ae = null,
  Qi = !1,
  qo = !1,
  hs = 0,
  lw = 0;
function Fe() {
  throw Error(R(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, s) {
  if (
    ((pr = s),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yi.current = e === null || e.memoizedState === null ? dw : fw),
    (e = n(r, o)),
    qo)
  ) {
    s = 0;
    do {
      if (((qo = !1), (hs = 0), 25 <= s)) throw Error(R(301));
      (s += 1),
        (Ae = Pe = null),
        (t.updateQueue = null),
        (yi.current = pw),
        (e = n(r, o));
    } while (qo);
  }
  if (
    ((yi.current = Yi),
    (t = Pe !== null && Pe.next !== null),
    (pr = 0),
    (Ae = Pe = xe = null),
    (Qi = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function $u() {
  var e = hs !== 0;
  return (hs = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (xe.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function bt() {
  if (Pe === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Ae === null ? xe.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Pe = e);
  else {
    if (e === null) throw Error(R(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Ae === null ? (xe.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wa(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      u = s;
    do {
      var f = u.lane;
      if ((pr & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (i = r)) : (a = a.next = p),
          (xe.lanes |= f),
          (hr |= f);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (i = r) : (a.next = l),
      _t(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (xe.lanes |= s), (hr |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ba(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    _t(s, t.memoizedState) || (Ze = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function mm() {}
function gm(e, t) {
  var n = xe,
    r = bt(),
    o = t(),
    s = !_t(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    Uu(xm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gs(9, ym.bind(null, n, r, o, t), void 0, null),
      Me === null)
    )
      throw Error(R(349));
    pr & 30 || vm(n, t, o);
  }
  return o;
}
function vm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ym(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wm(t) && bm(e);
}
function xm(e, t, n) {
  return n(function () {
    wm(t) && bm(e);
  });
}
function wm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function bm(e) {
  var t = ln(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function xf(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ms,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uw.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function gs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sm() {
  return bt().memoizedState;
}
function xi(e, t, n, r) {
  var o = Ft();
  (xe.flags |= e),
    (o.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r));
}
function bl(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Pe !== null) {
    var i = Pe.memoizedState;
    if (((s = i.destroy), r !== null && zu(r, i.deps))) {
      o.memoizedState = gs(t, n, s, r);
      return;
    }
  }
  (xe.flags |= e), (o.memoizedState = gs(1 | t, n, s, r));
}
function wf(e, t) {
  return xi(8390656, 8, e, t);
}
function Uu(e, t) {
  return bl(2048, 8, e, t);
}
function Cm(e, t) {
  return bl(4, 2, e, t);
}
function Em(e, t) {
  return bl(4, 4, e, t);
}
function Nm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function km(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bl(4, 4, Nm.bind(null, t, e), n)
  );
}
function Bu() {}
function jm(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pm(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tm(e, t, n) {
  return pr & 21
    ? (_t(n, t) || ((n = Oh()), (xe.lanes |= n), (hr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function aw(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xa.transition;
  xa.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (xa.transition = r);
  }
}
function Rm() {
  return bt().memoizedState;
}
function cw(e, t, n) {
  var r = Dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(e))
  )
    Mm(t, n);
  else if (((n = fm(e, t, n, r)), n !== null)) {
    var o = Ye();
    Mt(n, e, r, o), _m(n, t, r);
  }
}
function uw(e, t, n) {
  var r = Dn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(e)) Mm(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), _t(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), _u(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = fm(e, t, o, r)),
      n !== null && ((o = Ye()), Mt(n, e, r, o), _m(n, t, r));
  }
}
function Am(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Mm(e, t) {
  qo = Qi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _m(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
var Yi = {
    readContext: wt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  dw = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: wf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xi(4194308, 4, Nm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cw.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xf,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = xf(!1),
        t = e[0];
      return (e = aw.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        o = Ft();
      if (ve) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Me === null)) throw Error(R(349));
        pr & 30 || vm(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        wf(xm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        gs(9, ym.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = Me.identifierPrefix;
      if (ve) {
        var n = nn,
          r = tn;
        (n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fw = {
    readContext: wt,
    useCallback: jm,
    useContext: wt,
    useEffect: Uu,
    useImperativeHandle: km,
    useInsertionEffect: Cm,
    useLayoutEffect: Em,
    useMemo: Pm,
    useReducer: wa,
    useRef: Sm,
    useState: function () {
      return wa(ms);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = bt();
      return Tm(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = wa(ms)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  },
  pw = {
    readContext: wt,
    useCallback: jm,
    useContext: wt,
    useEffect: Uu,
    useImperativeHandle: km,
    useInsertionEffect: Cm,
    useLayoutEffect: Em,
    useMemo: Pm,
    useReducer: ba,
    useRef: Sm,
    useState: function () {
      return ba(ms);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = bt();
      return Pe === null ? (t.memoizedState = e) : Tm(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(ms)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  };
function kt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = Dn(e),
      s = rn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = In(e, s, o)),
      t !== null && (Mt(t, e, o, r), vi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = Dn(e),
      s = rn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = In(e, s, o)),
      t !== null && (Mt(t, e, o, r), vi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ye(),
      r = Dn(e),
      o = rn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = In(e, o, r)),
      t !== null && (Mt(t, e, r, n), vi(t, e, r));
  },
};
function bf(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !as(n, r) || !as(o, s)
      : !0
  );
}
function Om(e, t, n) {
  var r = !1,
    o = Un,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = wt(s))
      : ((o = et(t) ? dr : We.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? co(e, o) : Un)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Sf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function yc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ou(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = wt(s))
    : ((s = et(t) ? dr : We.current), (o.context = co(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (vc(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Sl.enqueueReplaceState(o, o.state, null),
      Vi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Uy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hw = typeof WeakMap == "function" ? WeakMap : Map;
function Im(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gi || ((Gi = !0), (Tc = r)), xc(e, t);
    }),
    n
  );
}
function Lm(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xc(e, t),
          typeof r != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Cf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Pw.bind(null, e, t, n)), t.then(e, e));
}
function Ef(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rn(-1, 1)), (t.tag = 2), In(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var mw = dn.ReactCurrentOwner,
  Ze = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? dm(t, null, n, r) : fo(t, e.child, n, r);
}
function kf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Yr(t, o),
    (r = Fu(e, t, n, r, s, o)),
    (n = $u()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        an(e, t, o))
      : (ve && n && ju(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  );
}
function jf(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Gu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Dm(e, t, s, r, o))
      : ((e = Ci(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : as), n(i, r) && e.ref === t.ref)
    )
      return an(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = zn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dm(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (as(s, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), an(e, t, o);
  }
  return wc(e, t, n, r, o);
}
function zm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Wr, st),
        (st |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(Wr, st),
          (st |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        fe(Wr, st),
        (st |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(Wr, st),
      (st |= r);
  return Ke(e, t, o, n), t.child;
}
function Fm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wc(e, t, n, r, o) {
  var s = et(n) ? dr : We.current;
  return (
    (s = co(t, s)),
    Yr(t, o),
    (n = Fu(e, t, n, r, s, o)),
    (r = $u()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        an(e, t, o))
      : (ve && r && ju(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  );
}
function Pf(e, t, n, r, o) {
  if (et(n)) {
    var s = !0;
    $i(t);
  } else s = !1;
  if ((Yr(t, o), t.stateNode === null))
    wi(e, t), Om(t, n, r), yc(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = et(n) ? dr : We.current), (u = co(t, u)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Sf(t, i, r, u)),
      (wn = !1);
    var d = t.memoizedState;
    (i.state = d),
      Vi(t, r, i, o),
      (a = t.memoizedState),
      l !== r || d !== a || Je.current || wn
        ? (typeof f == "function" && (vc(t, n, f, r), (a = t.memoizedState)),
          (l = wn || bf(t, n, l, r, d, a, u))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      pm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : kt(t.type, l)),
      (i.props = u),
      (p = t.pendingProps),
      (d = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = wt(a))
        : ((a = et(n) ? dr : We.current), (a = co(t, a)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== p || d !== a) && Sf(t, i, r, a)),
      (wn = !1),
      (d = t.memoizedState),
      (i.state = d),
      Vi(t, r, i, o);
    var b = t.memoizedState;
    l !== p || d !== b || Je.current || wn
      ? (typeof x == "function" && (vc(t, n, x, r), (b = t.memoizedState)),
        (u = wn || bf(t, n, u, r, d, b, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, b, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, b, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (i.props = r),
        (i.state = b),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bc(e, t, n, r, s, o);
}
function bc(e, t, n, r, o, s) {
  Fm(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && pf(t, n, !1), an(e, t, s);
  (r = t.stateNode), (mw.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = fo(t, e.child, null, s)), (t.child = fo(t, null, l, s)))
      : Ke(e, t, l, s),
    (t.memoizedState = r.state),
    o && pf(t, n, !0),
    t.child
  );
}
function $m(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ff(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ff(e, t.context, !1),
    Iu(e, t.containerInfo);
}
function Tf(e, t, n, r, o) {
  return uo(), Tu(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var Sc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Um(e, t, n) {
  var r = t.pendingProps,
    o = ye.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(ye, o & 1),
    e === null)
  )
    return (
      mc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Nl(i, r, 0, null)),
              (e = ar(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Cc(n)),
              (t.memoizedState = Sc),
              e)
            : Wu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return gw(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = zn(l, s)) : ((s = ar(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Cc(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Sc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = zn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Wu(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Js(e, t, n, r) {
  return (
    r !== null && Tu(r),
    fo(t, e.child, null, n),
    (e = Wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gw(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sa(Error(R(422)))), Js(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, o, 0, null)),
        (s = ar(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && fo(t, e.child, null, i),
        (t.child.memoizedState = Cc(i)),
        (t.memoizedState = Sc),
        s);
  if (!(t.mode & 1)) return Js(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(R(419))), (r = Sa(s, r, void 0)), Js(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), Ze || l)) {
    if (((r = Me), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), ln(e, o), Mt(r, e, o, -1));
    }
    return qu(), (r = Sa(Error(R(421)))), Js(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (lt = On(o.nextSibling)),
      (ct = t),
      (ve = !0),
      (Rt = null),
      e !== null &&
        ((gt[vt++] = tn),
        (gt[vt++] = nn),
        (gt[vt++] = fr),
        (tn = e.id),
        (nn = e.overflow),
        (fr = t)),
      (t = Wu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gc(e.return, t, n);
}
function Ca(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Bm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Ke(e, t, r.children, n), (r = ye.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rf(e, n, t);
        else if (e.tag === 19) Rf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ki(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ca(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ki(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ca(t, !0, n, null, s);
        break;
      case "together":
        Ca(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function an(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vw(e, t, n) {
  switch (t.tag) {
    case 3:
      $m(t), uo();
      break;
    case 5:
      hm(t);
      break;
    case 1:
      et(t.type) && $i(t);
      break;
    case 4:
      Iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      fe(Wi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ye, ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Um(e, t, n)
          : (fe(ye, ye.current & 1),
            (e = an(e, t, n)),
            e !== null ? e.sibling : null);
      fe(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zm(e, t, n);
  }
  return an(e, t, n);
}
var Wm, Ec, Hm, Vm;
Wm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ec = function () {};
Hm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), nr(Kt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Ka(e, o)), (r = Ka(e, r)), (s = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = qa(e, o)), (r = qa(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zi);
    }
    Xa(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ts.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ts.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && me("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Io(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yw(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return et(t.type) && Fi(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        po(),
        ge(Je),
        ge(We),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Rt !== null && (Mc(Rt), (Rt = null)))),
        Ec(e, t),
        $e(t),
        null
      );
    case 5:
      Lu(t);
      var o = nr(ps.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return $e(t), null;
        }
        if (((e = nr(Kt.current)), Xs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Wt] = t), (r[ds] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Bo.length; o++) me(Bo[o], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              zd(r, s), me("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                me("invalid", r);
              break;
            case "textarea":
              $d(r, s), me("invalid", r);
          }
          Xa(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Gs(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Gs(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ts.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              Bs(r), Fd(r, s, !0);
              break;
            case "textarea":
              Bs(r), Ud(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = zi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Wt] = t),
            (e[ds] = r),
            Wm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Za(n, r)), n)) {
              case "dialog":
                me("cancel", e), me("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Bo.length; o++) me(Bo[o], e);
                o = r;
                break;
              case "source":
                me("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), (o = r);
                break;
              case "details":
                me("toggle", e), (o = r);
                break;
              case "input":
                zd(e, r), (o = Ka(e, r)), me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  me("invalid", e);
                break;
              case "textarea":
                $d(e, r), (o = qa(e, r)), me("invalid", e);
                break;
              default:
                o = r;
            }
            Xa(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Sh(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wh(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ns(e, a)
                    : typeof a == "number" && ns(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (ts.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && me("scroll", e)
                      : a != null && pu(e, s, a, i));
              }
            switch (n) {
              case "input":
                Bs(e), Fd(e, r, !1);
                break;
              case "textarea":
                Bs(e), Ud(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Hr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Hr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Vm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = nr(ps.current)), nr(Kt.current), Xs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Wt] = t),
            (s = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Wt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (ge(ye),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && lt !== null && t.mode & 1 && !(t.flags & 128))
          cm(), uo(), (t.flags |= 98560), (s = !1);
        else if (((s = Xs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[Wt] = t;
          } else
            uo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (s = !1);
        } else Rt !== null && (Mc(Rt), (Rt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ye.current & 1 ? Te === 0 && (Te = 3) : qu())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        po(), Ec(e, t), e === null && cs(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return Mu(t.type._context), $e(t), null;
    case 17:
      return et(t.type) && Fi(), $e(t), null;
    case 19:
      if ((ge(ye), (s = t.memoizedState), s === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Io(s, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ki(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Io(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return fe(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ee() > mo &&
            ((t.flags |= 128), (r = !0), Io(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ki(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Io(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !ve)
            )
              return $e(t), null;
          } else
            2 * Ee() - s.renderingStartTime > mo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Io(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = ye.current),
          fe(ye, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        Yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? st & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function xw(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return (
        et(t.type) && Fi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        ge(Je),
        ge(We),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (ge(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        uo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(ye), null;
    case 4:
      return po(), null;
    case 10:
      return Mu(t.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  Be = !1,
  ww = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function Nc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var Af = !1;
function bw(e, t) {
  if (((ac = Ii), (e = Gh()), ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            u = 0,
            f = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = i + o),
                p !== s || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (d = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++u === o && (l = i),
                d === s && ++f === r && (a = i),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = x;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (cc = { focusedElem: e, selectionRange: n }, Ii = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var g = b.memoizedProps,
                    w = b.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : kt(t.type, g),
                      w
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          Ce(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (b = Af), (Af = !1), b;
}
function Go(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Nc(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function kc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Km(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Km(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Wt], delete t[ds], delete t[fc], delete t[rw], delete t[ow])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jc(e, t, n), e = e.sibling; e !== null; ) jc(e, t, n), (e = e.sibling);
}
function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null; ) Pc(e, t, n), (e = e.sibling);
}
var Oe = null,
  Tt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) Ym(e, t, n), (n = n.sibling);
}
function Ym(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Br(n, t);
    case 6:
      var r = Oe,
        o = Tt;
      (Oe = null),
        hn(e, t, n),
        (Oe = r),
        (Tt = o),
        Oe !== null &&
          (Tt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null &&
        (Tt
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ga(e.parentNode, n)
              : e.nodeType === 1 && ga(e, n),
            is(e))
          : ga(Oe, n.stateNode));
      break;
    case 4:
      (r = Oe),
        (o = Tt),
        (Oe = n.stateNode.containerInfo),
        (Tt = !0),
        hn(e, t, n),
        (Oe = r),
        (Tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Nc(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (Br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ce(n, t, l);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), hn(e, t, n), (Be = r))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function _f(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ww()),
      t.forEach(function (r) {
        var o = Rw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Oe = l.stateNode), (Tt = !1);
              break e;
            case 3:
              (Oe = l.stateNode.containerInfo), (Tt = !0);
              break e;
            case 4:
              (Oe = l.stateNode.containerInfo), (Tt = !0);
              break e;
          }
          l = l.return;
        }
        if (Oe === null) throw Error(R(160));
        Ym(s, i, o), (Oe = null), (Tt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ce(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qm(t, e), (t = t.sibling);
}
function qm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), zt(e), r & 4)) {
        try {
          Go(3, e, e.return), Cl(3, e);
        } catch (g) {
          Ce(e, e.return, g);
        }
        try {
          Go(5, e, e.return);
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 1:
      Ct(t, e), zt(e), r & 512 && n !== null && Br(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        zt(e),
        r & 512 && n !== null && Br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && vh(o, s),
              Za(l, i);
            var u = Za(l, s);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                p = a[i + 1];
              f === "style"
                ? Sh(o, p)
                : f === "dangerouslySetInnerHTML"
                ? wh(o, p)
                : f === "children"
                ? ns(o, p)
                : pu(o, f, p, u);
            }
            switch (l) {
              case "input":
                Qa(o, s);
                break;
              case "textarea":
                yh(o, s);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? Hr(o, !!s.multiple, x, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Hr(o, !!s.multiple, s.defaultValue, !0)
                      : Hr(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[ds] = s;
          } catch (g) {
            Ce(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), zt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          is(t.containerInfo);
        } catch (g) {
          Ce(e, e.return, g);
        }
      break;
    case 4:
      Ct(t, e), zt(e);
      break;
    case 13:
      Ct(t, e),
        zt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ku = Ee())),
        r & 4 && _f(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || f), Ct(t, e), (Be = u)) : Ct(t, e),
        zt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (D = e, f = e.child; f !== null; ) {
            for (p = D = f; D !== null; ) {
              switch (((d = D), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Go(4, d, d.return);
                  break;
                case 1:
                  Br(d, d.return);
                  var b = d.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (g) {
                      Ce(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Br(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    If(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (D = x)) : If(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = bh("display", i)));
              } catch (g) {
                Ce(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (g) {
                Ce(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), zt(e), r & 4 && _f(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), zt(e);
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ns(o, ""), (r.flags &= -33));
          var s = Mf(e);
          Pc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Mf(e);
          jc(e, l, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      Ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sw(e, t, n) {
  (D = e), Gm(e);
}
function Gm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ei;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Be;
        l = ei;
        var u = Be;
        if (((ei = i), (Be = a) && !u))
          for (D = o; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Lf(o)
                : a !== null
                ? ((a.return = i), (D = a))
                : Lf(o);
        for (; s !== null; ) (D = s), Gm(s), (s = s.sibling);
        (D = o), (ei = l), (Be = u);
      }
      Of(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (D = s)) : Of(e);
  }
}
function Of(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && yf(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yf(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && is(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Be || (t.flags & 512 && kc(t));
      } catch (d) {
        Ce(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function If(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Lf(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (a) {
            Ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ce(t, o, a);
            }
          }
          var s = t.return;
          try {
            kc(t);
          } catch (a) {
            Ce(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            kc(t);
          } catch (a) {
            Ce(t, i, a);
          }
      }
    } catch (a) {
      Ce(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var Cw = Math.ceil,
  qi = dn.ReactCurrentDispatcher,
  Hu = dn.ReactCurrentOwner,
  xt = dn.ReactCurrentBatchConfig,
  J = 0,
  Me = null,
  Ne = null,
  Ie = 0,
  st = 0,
  Wr = Qn(0),
  Te = 0,
  vs = null,
  hr = 0,
  El = 0,
  Vu = 0,
  Xo = null,
  Xe = null,
  Ku = 0,
  mo = 1 / 0,
  Jt = null,
  Gi = !1,
  Tc = null,
  Ln = null,
  ti = !1,
  Tn = null,
  Xi = 0,
  Zo = 0,
  Rc = null,
  bi = -1,
  Si = 0;
function Ye() {
  return J & 6 ? Ee() : bi !== -1 ? bi : (bi = Ee());
}
function Dn(e) {
  return e.mode & 1
    ? J & 2 && Ie !== 0
      ? Ie & -Ie
      : iw.transition !== null
      ? (Si === 0 && (Si = Oh()), Si)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uh(e.type))),
        e)
    : 1;
}
function Mt(e, t, n, r) {
  if (50 < Zo) throw ((Zo = 0), (Rc = null), Error(R(185)));
  Ps(e, n, r),
    (!(J & 2) || e !== Me) &&
      (e === Me && (!(J & 2) && (El |= n), Te === 4 && Sn(e, Ie)),
      tt(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((mo = Ee() + 500), wl && Yn()));
}
function tt(e, t) {
  var n = e.callbackNode;
  ix(e, t);
  var r = Oi(e, e === Me ? Ie : 0);
  if (r === 0)
    n !== null && Hd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hd(n), t === 1))
      e.tag === 0 ? sw(Df.bind(null, e)) : im(Df.bind(null, e)),
        tw(function () {
          !(J & 6) && Yn();
        }),
        (n = null);
    else {
      switch (Ih(r)) {
        case 1:
          n = yu;
          break;
        case 4:
          n = Mh;
          break;
        case 16:
          n = _i;
          break;
        case 536870912:
          n = _h;
          break;
        default:
          n = _i;
      }
      n = og(n, Xm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xm(e, t) {
  if (((bi = -1), (Si = 0), J & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (qr() && e.callbackNode !== n) return null;
  var r = Oi(e, e === Me ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zi(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var s = Jm();
    (Me !== e || Ie !== t) && ((Jt = null), (mo = Ee() + 500), lr(e, t));
    do
      try {
        kw();
        break;
      } catch (l) {
        Zm(e, l);
      }
    while (!0);
    Au(),
      (qi.current = s),
      (J = o),
      Ne !== null ? (t = 0) : ((Me = null), (Ie = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = rc(e)), o !== 0 && ((r = o), (t = Ac(e, o)))), t === 1)
    )
      throw ((n = vs), lr(e, 0), Sn(e, r), tt(e, Ee()), n);
    if (t === 6) Sn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ew(o) &&
          ((t = Zi(e, r)),
          t === 2 && ((s = rc(e)), s !== 0 && ((r = s), (t = Ac(e, s)))),
          t === 1))
      )
        throw ((n = vs), lr(e, 0), Sn(e, r), tt(e, Ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Jn(e, Xe, Jt);
          break;
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = Ku + 500 - Ee()), 10 < t))
          ) {
            if (Oi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = dc(Jn.bind(null, e, Xe, Jt), t);
            break;
          }
          Jn(e, Xe, Jt);
          break;
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - At(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = dc(Jn.bind(null, e, Xe, Jt), r);
            break;
          }
          Jn(e, Xe, Jt);
          break;
        case 5:
          Jn(e, Xe, Jt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return tt(e, Ee()), e.callbackNode === n ? Xm.bind(null, e) : null;
}
function Ac(e, t) {
  var n = Xo;
  return (
    e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256),
    (e = Zi(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && Mc(t)),
    e
  );
}
function Mc(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function Ew(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Sn(e, t) {
  for (
    t &= ~Vu,
      t &= ~El,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - At(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Df(e) {
  if (J & 6) throw Error(R(327));
  qr();
  var t = Oi(e, 0);
  if (!(t & 1)) return tt(e, Ee()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rc(e);
    r !== 0 && ((t = r), (n = Ac(e, r)));
  }
  if (n === 1) throw ((n = vs), lr(e, 0), Sn(e, t), tt(e, Ee()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jn(e, Xe, Jt),
    tt(e, Ee()),
    null
  );
}
function Qu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((mo = Ee() + 500), wl && Yn());
  }
}
function mr(e) {
  Tn !== null && Tn.tag === 0 && !(J & 6) && qr();
  var t = J;
  J |= 1;
  var n = xt.transition,
    r = le;
  try {
    if (((xt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (xt.transition = n), (J = t), !(J & 6) && Yn();
  }
}
function Yu() {
  (st = Wr.current), ge(Wr);
}
function lr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ew(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fi();
          break;
        case 3:
          po(), ge(Je), ge(We), Du();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          po();
          break;
        case 13:
          ge(ye);
          break;
        case 19:
          ge(ye);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (
    ((Me = e),
    (Ne = e = zn(e.current, null)),
    (Ie = st = t),
    (Te = 0),
    (vs = null),
    (Vu = El = hr = 0),
    (Xe = Xo = null),
    tr !== null)
  ) {
    for (t = 0; t < tr.length; t++)
      if (((n = tr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    tr = null;
  }
  return e;
}
function Zm(e, t) {
  do {
    var n = Ne;
    try {
      if ((Au(), (yi.current = Yi), Qi)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Qi = !1;
      }
      if (
        ((pr = 0),
        (Ae = Pe = xe = null),
        (qo = !1),
        (hs = 0),
        (Hu.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (vs = t), (Ne = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ie),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = Ef(i);
          if (x !== null) {
            (x.flags &= -257),
              Nf(x, i, l, s, t),
              x.mode & 1 && Cf(s, u, t),
              (t = x),
              (a = u);
            var b = t.updateQueue;
            if (b === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else b.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Cf(s, u, t), qu();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ve && l.mode & 1) {
          var w = Ef(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Nf(w, i, l, s, t),
              Tu(ho(a, l));
            break e;
          }
        }
        (s = a = ho(a, l)),
          Te !== 4 && (Te = 2),
          Xo === null ? (Xo = [s]) : Xo.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = Im(s, a, t);
              vf(s, v);
              break e;
            case 1:
              l = a;
              var m = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = Lm(s, l, t);
                vf(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      tg(n);
    } catch (C) {
      (t = C), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jm() {
  var e = qi.current;
  return (qi.current = Yi), e === null ? Yi : e;
}
function qu() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Me === null || (!(hr & 268435455) && !(El & 268435455)) || Sn(Me, Ie);
}
function Zi(e, t) {
  var n = J;
  J |= 2;
  var r = Jm();
  (Me !== e || Ie !== t) && ((Jt = null), lr(e, t));
  do
    try {
      Nw();
      break;
    } catch (o) {
      Zm(e, o);
    }
  while (!0);
  if ((Au(), (J = n), (qi.current = r), Ne !== null)) throw Error(R(261));
  return (Me = null), (Ie = 0), Te;
}
function Nw() {
  for (; Ne !== null; ) eg(Ne);
}
function kw() {
  for (; Ne !== null && !Xy(); ) eg(Ne);
}
function eg(e) {
  var t = rg(e.alternate, e, st);
  (e.memoizedProps = e.pendingProps),
    t === null ? tg(e) : (Ne = t),
    (Hu.current = null);
}
function tg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (Ne = null);
        return;
      }
    } else if (((n = yw(n, t, st)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Jn(e, t, n) {
  var r = le,
    o = xt.transition;
  try {
    (xt.transition = null), (le = 1), jw(e, t, n, r);
  } finally {
    (xt.transition = o), (le = r);
  }
  return null;
}
function jw(e, t, n, r) {
  do qr();
  while (Tn !== null);
  if (J & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (lx(e, s),
    e === Me && ((Ne = Me = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      og(_i, function () {
        return qr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = xt.transition), (xt.transition = null);
    var i = le;
    le = 1;
    var l = J;
    (J |= 4),
      (Hu.current = null),
      bw(e, n),
      qm(n, e),
      Qx(cc),
      (Ii = !!ac),
      (cc = ac = null),
      (e.current = n),
      Sw(n),
      Zy(),
      (J = l),
      (le = i),
      (xt.transition = s);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Tn = e), (Xi = o)),
    (s = e.pendingLanes),
    s === 0 && (Ln = null),
    tx(n.stateNode),
    tt(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Gi) throw ((Gi = !1), (e = Tc), (Tc = null), e);
  return (
    Xi & 1 && e.tag !== 0 && qr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Rc ? Zo++ : ((Zo = 0), (Rc = e))) : (Zo = 0),
    Yn(),
    null
  );
}
function qr() {
  if (Tn !== null) {
    var e = Ih(Xi),
      t = xt.transition,
      n = le;
    try {
      if (((xt.transition = null), (le = 16 > e ? 16 : e), Tn === null))
        var r = !1;
      else {
        if (((e = Tn), (Tn = null), (Xi = 0), J & 6)) throw Error(R(331));
        var o = J;
        for (J |= 4, D = e.current; D !== null; ) {
          var s = D,
            i = s.child;
          if (D.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (D = u; D !== null; ) {
                  var f = D;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, f, s);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (D = p);
                  else
                    for (; D !== null; ) {
                      f = D;
                      var d = f.sibling,
                        x = f.return;
                      if ((Km(f), f === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), (D = d);
                        break;
                      }
                      D = x;
                    }
                }
              }
              var b = s.alternate;
              if (b !== null) {
                var g = b.child;
                if (g !== null) {
                  b.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (D = i);
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Go(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (D = v);
                break e;
              }
              D = s.return;
            }
        }
        var m = e.current;
        for (D = m; D !== null; ) {
          i = D;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (D = y);
          else
            e: for (i = m; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, l);
                  }
                } catch (C) {
                  Ce(l, l.return, C);
                }
              if (l === i) {
                D = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (D = S);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((J = o), Yn(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        )
          try {
            Vt.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (xt.transition = t);
    }
  }
  return !1;
}
function zf(e, t, n) {
  (t = ho(n, t)),
    (t = Im(e, t, 1)),
    (e = In(e, t, 1)),
    (t = Ye()),
    e !== null && (Ps(e, 1, t), tt(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) zf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(r)))
        ) {
          (e = ho(n, e)),
            (e = Lm(t, e, 1)),
            (t = In(t, e, 1)),
            (e = Ye()),
            t !== null && (Ps(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Me === e &&
      (Ie & n) === n &&
      (Te === 4 || (Te === 3 && (Ie & 130023424) === Ie && 500 > Ee() - Ku)
        ? lr(e, 0)
        : (Vu |= n)),
    tt(e, t);
}
function ng(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vs), (Vs <<= 1), !(Vs & 130023424) && (Vs = 4194304))
      : (t = 1));
  var n = Ye();
  (e = ln(e, t)), e !== null && (Ps(e, t, n), tt(e, n));
}
function Tw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ng(e, n);
}
function Rw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), ng(e, n);
}
var rg;
rg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), vw(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), ve && t.flags & 1048576 && lm(t, Bi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      wi(e, t), (e = t.pendingProps);
      var o = co(t, We.current);
      Yr(t, n), (o = Fu(null, t, r, e, o, n));
      var s = $u();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((s = !0), $i(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ou(t),
            (o.updater = Sl),
            (t.stateNode = o),
            (o._reactInternals = t),
            yc(t, r, e, n),
            (t = bc(null, t, r, !0, s, n)))
          : ((t.tag = 0), ve && s && ju(t), Ke(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (wi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Mw(r)),
          (e = kt(r, e)),
          o)
        ) {
          case 0:
            t = wc(null, t, r, e, n);
            break e;
          case 1:
            t = Pf(null, t, r, e, n);
            break e;
          case 11:
            t = kf(null, t, r, e, n);
            break e;
          case 14:
            t = jf(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        wc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        Pf(e, t, r, o, n)
      );
    case 3:
      e: {
        if (($m(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          pm(e, t),
          Vi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = ho(Error(R(423)), t)), (t = Tf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ho(Error(R(424)), t)), (t = Tf(e, t, r, n, o));
            break e;
          } else
            for (
              lt = On(t.stateNode.containerInfo.firstChild),
                ct = t,
                ve = !0,
                Rt = null,
                n = dm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((uo(), r === o)) {
            t = an(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        hm(t),
        e === null && mc(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        uc(r, o) ? (i = null) : s !== null && uc(r, s) && (t.flags |= 32),
        Fm(e, t),
        Ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && mc(t), null;
    case 13:
      return Um(e, t, n);
    case 4:
      return (
        Iu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        kf(e, t, r, o, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          fe(Wi, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (_t(s.value, i)) {
            if (s.children === o.children && !Je.current) {
              t = an(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = rn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      gc(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  gc(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        Ke(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yr(t, n),
        (o = wt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = kt(r, t.pendingProps)),
        (o = kt(r.type, o)),
        jf(e, t, r, o, n)
      );
    case 15:
      return Dm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        wi(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), $i(t)) : (e = !1),
        Yr(t, n),
        Om(t, r, o),
        yc(t, r, o, n),
        bc(null, t, r, !0, e, n)
      );
    case 19:
      return Bm(e, t, n);
    case 22:
      return zm(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function og(e, t) {
  return Ah(e, t);
}
function Aw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function yt(e, t, n, r) {
  return new Aw(e, t, n, r);
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mw(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === mu)) return 11;
    if (e === gu) return 14;
  }
  return 2;
}
function zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = yt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ci(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case _r:
        return ar(n.children, o, s, t);
      case hu:
        (i = 8), (o |= 8);
        break;
      case Ba:
        return (
          (e = yt(12, n, t, o | 2)), (e.elementType = Ba), (e.lanes = s), e
        );
      case Wa:
        return (e = yt(13, n, t, o)), (e.elementType = Wa), (e.lanes = s), e;
      case Ha:
        return (e = yt(19, n, t, o)), (e.elementType = Ha), (e.lanes = s), e;
      case hh:
        return Nl(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fh:
              i = 10;
              break e;
            case ph:
              i = 9;
              break e;
            case mu:
              i = 11;
              break e;
            case gu:
              i = 14;
              break e;
            case xn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = yt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function ar(e, t, n, r) {
  return (e = yt(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = yt(22, e, r, t)),
    (e.elementType = hh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ea(e, t, n) {
  return (e = yt(6, e, null, t)), (e.lanes = n), e;
}
function Na(e, t, n) {
  return (
    (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _w(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = sa(0)),
    (this.expirationTimes = sa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Xu(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new _w(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = yt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ou(s),
    e
  );
}
function Ow(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sg(e) {
  if (!e) return Un;
  e = e._reactInternals;
  e: {
    if (xr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return sm(e, n, t);
  }
  return t;
}
function ig(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Xu(n, r, !0, e, o, s, i, l, a)),
    (e.context = sg(null)),
    (n = e.current),
    (r = Ye()),
    (o = Dn(n)),
    (s = rn(r, o)),
    (s.callback = t ?? null),
    In(n, s, o),
    (e.current.lanes = o),
    Ps(e, o, r),
    tt(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var o = t.current,
    s = Ye(),
    i = Dn(o);
  return (
    (n = sg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = In(o, t, i)),
    e !== null && (Mt(e, o, i, s), vi(e, o, i)),
    i
  );
}
function Ji(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ff(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  Ff(e, t), (e = e.alternate) && Ff(e, t);
}
function Iw() {
  return null;
}
var lg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ju(e) {
  this._internalRoot = e;
}
jl.prototype.render = Ju.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  kl(e, t, null, null);
};
jl.prototype.unmount = Ju.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mr(function () {
      kl(null, e, null, null);
    }),
      (t[sn] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++);
    bn.splice(n, 0, e), n === 0 && $h(e);
  }
};
function ed(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $f() {}
function Lw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ji(i);
        s.call(u);
      };
    }
    var i = ig(t, r, e, 0, null, !1, !1, "", $f);
    return (
      (e._reactRootContainer = i),
      (e[sn] = i.current),
      cs(e.nodeType === 8 ? e.parentNode : e),
      mr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ji(a);
      l.call(u);
    };
  }
  var a = Xu(e, 0, !1, null, null, !1, !1, "", $f);
  return (
    (e._reactRootContainer = a),
    (e[sn] = a.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    mr(function () {
      kl(t, a, n, r);
    }),
    a
  );
}
function Tl(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ji(i);
        l.call(a);
      };
    }
    kl(t, i, e, o);
  } else i = Lw(n, t, e, o, r);
  return Ji(i);
}
Lh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Uo(t.pendingLanes);
        n !== 0 &&
          (xu(t, n | 1), tt(t, Ee()), !(J & 6) && ((mo = Ee() + 500), Yn()));
      }
      break;
    case 13:
      mr(function () {
        var r = ln(e, 1);
        if (r !== null) {
          var o = Ye();
          Mt(r, e, 1, o);
        }
      }),
        Zu(e, 1);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = ln(e, 134217728);
    if (t !== null) {
      var n = Ye();
      Mt(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Dh = function (e) {
  if (e.tag === 13) {
    var t = Dn(e),
      n = ln(e, t);
    if (n !== null) {
      var r = Ye();
      Mt(n, e, t, r);
    }
    Zu(e, t);
  }
};
zh = function () {
  return le;
};
Fh = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
ec = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = xl(r);
            if (!o) throw Error(R(90));
            gh(r), Qa(r, o);
          }
        }
      }
      break;
    case "textarea":
      yh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hr(e, !!n.multiple, t, !1);
  }
};
Nh = Qu;
kh = mr;
var Dw = { usingClientEntryPoint: !1, Events: [Rs, Dr, xl, Ch, Eh, Qu] },
  Lo = {
    findFiberByHostInstance: er,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zw = {
    bundleType: Lo.bundleType,
    version: Lo.version,
    rendererPackageName: Lo.rendererPackageName,
    rendererConfig: Lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Th(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lo.findFiberByHostInstance || Iw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (ml = ni.inject(zw)), (Vt = ni);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dw;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ed(t)) throw Error(R(200));
  return Ow(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!ed(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = lg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, n, !1, r, o)),
    (e[sn] = t.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    new Ju(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Th(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return mr(e);
};
ft.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(R(200));
  return Tl(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!ed(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = lg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ig(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[sn] = t.current),
    cs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new jl(t);
};
ft.render = function (e, t, n) {
  if (!Pl(t)) throw Error(R(200));
  return Tl(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (mr(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sn] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = Qu;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Tl(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function ag() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag);
    } catch (e) {
      console.error(e);
    }
}
ag(), (ah.exports = ft);
var wr = ah.exports;
const cg = qp(wr);
var ug,
  Uf = wr;
(ug = Uf.createRoot), Uf.hydrateRoot;
const Fw = 1,
  $w = 1e6;
let ka = 0;
function Uw() {
  return (ka = (ka + 1) % Number.MAX_SAFE_INTEGER), ka.toString();
}
const ja = new Map(),
  Bf = (e) => {
    if (ja.has(e)) return;
    const t = setTimeout(() => {
      ja.delete(e), Jo({ type: "REMOVE_TOAST", toastId: e });
    }, $w);
    ja.set(e, t);
  },
  Bw = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Fw) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Bf(n)
            : e.toasts.forEach((r) => {
                Bf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ei = [];
let Ni = { toasts: [] };
function Jo(e) {
  (Ni = Bw(Ni, e)),
    Ei.forEach((t) => {
      t(Ni);
    });
}
function Ww({ ...e }) {
  const t = Uw(),
    n = (o) => Jo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Jo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Jo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function dg() {
  const [e, t] = h.useState(Ni);
  return (
    h.useEffect(
      () => (
        Ei.push(t),
        () => {
          const n = Ei.indexOf(t);
          n > -1 && Ei.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: Ww,
      dismiss: (n) => Jo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Hw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fg(...e) {
  return (t) => e.forEach((n) => Hw(n, t));
}
function ce(...e) {
  return h.useCallback(fg(...e), e);
}
function Vw(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = h.createContext(i),
      a = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: d, children: x, ...b } = p,
        g = (d == null ? void 0 : d[e][a]) || l,
        w = h.useMemo(() => b, Object.values(b));
      return c.jsx(g.Provider, { value: w, children: x });
    }
    function f(p, d) {
      const x = (d == null ? void 0 : d[e][a]) || l,
        b = h.useContext(x);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, f];
  }
  const o = () => {
    const s = n.map((i) => h.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, Kw(o, ...t)];
}
function Kw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var go = h.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = h.Children.toArray(n),
    s = o.find(Qw);
  if (s) {
    const i = s.props.children,
      l = o.map((a) =>
        a === s
          ? h.Children.count(i) > 1
            ? h.Children.only(null)
            : h.isValidElement(i)
            ? i.props.children
            : null
          : a
      );
    return c.jsx(_c, {
      ...r,
      ref: t,
      children: h.isValidElement(i) ? h.cloneElement(i, void 0, l) : null,
    });
  }
  return c.jsx(_c, { ...r, ref: t, children: n });
});
go.displayName = "Slot";
var _c = h.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (h.isValidElement(n)) {
    const o = qw(n);
    return h.cloneElement(n, { ...Yw(r, n.props), ref: t ? fg(t, o) : o });
  }
  return h.Children.count(n) > 1 ? h.Children.only(null) : null;
});
_c.displayName = "SlotClone";
var pg = ({ children: e }) => c.jsx(c.Fragment, { children: e });
function Qw(e) {
  return h.isValidElement(e) && e.type === pg;
}
function Yw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            s(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qw(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function hg(e) {
  const t = e + "CollectionProvider",
    [n, r] = Vw(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (x) => {
      const { scope: b, children: g } = x,
        w = _.useRef(null),
        v = _.useRef(new Map()).current;
      return c.jsx(o, { scope: b, itemMap: v, collectionRef: w, children: g });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    a = _.forwardRef((x, b) => {
      const { scope: g, children: w } = x,
        v = s(l, g),
        m = ce(b, v.collectionRef);
      return c.jsx(go, { ref: m, children: w });
    });
  a.displayName = l;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = _.forwardRef((x, b) => {
      const { scope: g, children: w, ...v } = x,
        m = _.useRef(null),
        y = ce(b, m),
        S = s(u, g);
      return (
        _.useEffect(
          () => (
            S.itemMap.set(m, { ref: m, ...v }), () => void S.itemMap.delete(m)
          )
        ),
        c.jsx(go, { [f]: "", ref: y, children: w })
      );
    });
  p.displayName = u;
  function d(x) {
    const b = s(e + "CollectionConsumer", x);
    return _.useCallback(() => {
      const w = b.collectionRef.current;
      if (!w) return [];
      const v = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, C) => v.indexOf(S.ref.current) - v.indexOf(C.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: i, Slot: a, ItemSlot: p }, d, r];
}
function Rl(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = h.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = (p) => {
      var v;
      const { scope: d, children: x, ...b } = p,
        g = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[a]) || l,
        w = h.useMemo(() => b, Object.values(b));
      return c.jsx(g.Provider, { value: w, children: x });
    };
    u.displayName = s + "Provider";
    function f(p, d) {
      var g;
      const x = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[a]) || l,
        b = h.useContext(x);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const o = () => {
    const s = n.map((i) => h.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, Gw(o, ...t)];
}
function Gw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Xw = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  ee = Xw.reduce((e, t) => {
    const n = h.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        l = s ? go : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function mg(e, t) {
  e && wr.flushSync(() => e.dispatchEvent(t));
}
function ke(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }),
    h.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Zw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e);
  h.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Jw = "DismissableLayer",
  Oc = "dismissableLayer.update",
  e1 = "dismissableLayer.pointerDownOutside",
  t1 = "dismissableLayer.focusOutside",
  Wf,
  gg = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Al = h.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...a
      } = e,
      u = h.useContext(gg),
      [f, p] = h.useState(null),
      d =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, x] = h.useState({}),
      b = ce(t, (N) => p(N)),
      g = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = g.indexOf(w),
      m = f ? g.indexOf(f) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = m >= v,
      C = r1((N) => {
        const j = N.target,
          T = [...u.branches].some((M) => M.contains(j));
        !S ||
          T ||
          (o == null || o(N),
          i == null || i(N),
          N.defaultPrevented || l == null || l());
      }, d),
      k = o1((N) => {
        const j = N.target;
        [...u.branches].some((M) => M.contains(j)) ||
          (s == null || s(N),
          i == null || i(N),
          N.defaultPrevented || l == null || l());
      }, d);
    return (
      Zw((N) => {
        m === u.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && l && (N.preventDefault(), l()));
      }, d),
      h.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Wf = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Hf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = Wf);
            }
          );
      }, [f, d, n, u]),
      h.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            Hf());
        },
        [f, u]
      ),
      h.useEffect(() => {
        const N = () => x({});
        return (
          document.addEventListener(Oc, N),
          () => document.removeEventListener(Oc, N)
        );
      }, []),
      c.jsx(ee.div, {
        ...a,
        ref: b,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: K(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: K(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
Al.displayName = Jw;
var n1 = "DismissableLayerBranch",
  vg = h.forwardRef((e, t) => {
    const n = h.useContext(gg),
      r = h.useRef(null),
      o = ce(t, r);
    return (
      h.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      c.jsx(ee.div, { ...e, ref: o })
    );
  });
vg.displayName = n1;
function r1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e),
    r = h.useRef(!1),
    o = h.useRef(() => {});
  return (
    h.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              yg(e1, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function o1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e),
    r = h.useRef(!1);
  return (
    h.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          yg(t1, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Hf() {
  const e = new CustomEvent(Oc);
  document.dispatchEvent(e);
}
function yg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? mg(o, s) : o.dispatchEvent(s);
}
var s1 = Al,
  i1 = vg,
  De = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
  l1 = "Portal",
  td = h.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = h.useState(!1);
    De(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? cg.createPortal(c.jsx(ee.div, { ...r, ref: t }), i) : null;
  });
td.displayName = l1;
function a1(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var br = (e) => {
  const { present: t, children: n } = e,
    r = c1(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n),
    s = ce(r.ref, u1(o));
  return typeof n == "function" || r.isPresent
    ? h.cloneElement(o, { ref: s })
    : null;
};
br.displayName = "Presence";
function c1(e) {
  const [t, n] = h.useState(),
    r = h.useRef({}),
    o = h.useRef(e),
    s = h.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, a] = a1(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    h.useEffect(() => {
      const u = ri(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    De(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const d = s.current,
          x = ri(u);
        e
          ? a("MOUNT")
          : x === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(f && d !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    De(() => {
      if (t) {
        let u;
        const f = t.ownerDocument.defaultView ?? window,
          p = (x) => {
            const g = ri(r.current).includes(x.animationName);
            if (x.target === t && g && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          d = (x) => {
            x.target === t && (s.current = ri(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            f.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: h.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function ri(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function u1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ic({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = d1({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    l = ke(n),
    a = h.useCallback(
      (u) => {
        if (s) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && l(p);
        } else o(u);
      },
      [s, e, o, l]
    );
  return [i, a];
}
function d1({ defaultProp: e, onChange: t }) {
  const n = h.useState(e),
    [r] = n,
    o = h.useRef(r),
    s = ke(t);
  return (
    h.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
var f1 = "VisuallyHidden",
  Ms = h.forwardRef((e, t) =>
    c.jsx(ee.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Ms.displayName = f1;
var p1 = Ms,
  nd = "ToastProvider",
  [rd, h1, m1] = hg("Toast"),
  [xg, fk] = Rl("Toast", [m1]),
  [g1, Ml] = xg(nd),
  wg = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [l, a] = h.useState(null),
      [u, f] = h.useState(0),
      p = h.useRef(!1),
      d = h.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${nd}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(rd.Provider, {
        scope: t,
        children: c.jsx(g1, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: h.useCallback(() => f((x) => x + 1), []),
          onToastRemove: h.useCallback(() => f((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: d,
          children: i,
        }),
      })
    );
  };
wg.displayName = nd;
var bg = "ToastViewport",
  v1 = ["F8"],
  Lc = "toast.viewportPause",
  Dc = "toast.viewportResume",
  Sg = h.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = v1,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = Ml(bg, n),
      l = h1(n),
      a = h.useRef(null),
      u = h.useRef(null),
      f = h.useRef(null),
      p = h.useRef(null),
      d = ce(t, p, i.onViewportChange),
      x = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = i.toastCount > 0;
    h.useEffect(() => {
      const w = (v) => {
        var y;
        r.length !== 0 &&
          r.every((S) => v[S] || v.code === S) &&
          ((y = p.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      h.useEffect(() => {
        const w = a.current,
          v = p.current;
        if (b && w && v) {
          const m = () => {
              if (!i.isClosePausedRef.current) {
                const k = new CustomEvent(Lc);
                v.dispatchEvent(k), (i.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (i.isClosePausedRef.current) {
                const k = new CustomEvent(Dc);
                v.dispatchEvent(k), (i.isClosePausedRef.current = !1);
              }
            },
            S = (k) => {
              !w.contains(k.relatedTarget) && y();
            },
            C = () => {
              w.contains(document.activeElement) || y();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [b, i.isClosePausedRef]);
    const g = h.useCallback(
      ({ tabbingDirection: w }) => {
        const m = l().map((y) => {
          const S = y.ref.current,
            C = [S, ...R1(S)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [l]
    );
    return (
      h.useEffect(() => {
        const w = p.current;
        if (w) {
          const v = (m) => {
            var C, k, N;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const j = document.activeElement,
                T = m.shiftKey;
              if (m.target === w && T) {
                (C = u.current) == null || C.focus();
                return;
              }
              const I = g({ tabbingDirection: T ? "backwards" : "forwards" }),
                W = I.findIndex((O) => O === j);
              Pa(I.slice(W + 1))
                ? m.preventDefault()
                : T
                ? (k = u.current) == null || k.focus()
                : (N = f.current) == null || N.focus();
            }
          };
          return (
            w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
          );
        }
      }, [l, g]),
      c.jsxs(i1, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", x),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
            c.jsx(zc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "forwards" });
                Pa(w);
              },
            }),
          c.jsx(rd.Slot, {
            scope: n,
            children: c.jsx(ee.ol, { tabIndex: -1, ...s, ref: d }),
          }),
          b &&
            c.jsx(zc, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "backwards" });
                Pa(w);
              },
            }),
        ],
      })
    );
  });
Sg.displayName = bg;
var Cg = "ToastFocusProxy",
  zc = h.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Ml(Cg, n);
    return c.jsx(Ms, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const l = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r();
      },
    });
  });
zc.displayName = Cg;
var _l = "Toast",
  y1 = "toast.swipeStart",
  x1 = "toast.swipeMove",
  w1 = "toast.swipeCancel",
  b1 = "toast.swipeEnd",
  Eg = h.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l = !0, a] = Ic({ prop: r, defaultProp: o, onChange: s });
    return c.jsx(br, {
      present: n || l,
      children: c.jsx(E1, {
        open: l,
        ...i,
        ref: t,
        onClose: () => a(!1),
        onPause: ke(e.onPause),
        onResume: ke(e.onResume),
        onSwipeStart: K(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: K(e.onSwipeMove, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${f}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: K(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: K(e.onSwipeEnd, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${f}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
Eg.displayName = _l;
var [S1, C1] = xg(_l, { onClose() {} }),
  E1 = h.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: p,
        onSwipeCancel: d,
        onSwipeEnd: x,
        ...b
      } = e,
      g = Ml(_l, n),
      [w, v] = h.useState(null),
      m = ce(t, (O) => v(O)),
      y = h.useRef(null),
      S = h.useRef(null),
      C = o || g.duration,
      k = h.useRef(0),
      N = h.useRef(C),
      j = h.useRef(0),
      { onToastAdd: T, onToastRemove: M } = g,
      z = ke(() => {
        var V;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((V = g.viewport) == null || V.focus()),
          i();
      }),
      I = h.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(j.current),
            (k.current = new Date().getTime()),
            (j.current = window.setTimeout(z, O)));
        },
        [z]
      );
    h.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const V = () => {
            I(N.current), u == null || u();
          },
          F = () => {
            const H = new Date().getTime() - k.current;
            (N.current = N.current - H),
              window.clearTimeout(j.current),
              a == null || a();
          };
        return (
          O.addEventListener(Lc, F),
          O.addEventListener(Dc, V),
          () => {
            O.removeEventListener(Lc, F), O.removeEventListener(Dc, V);
          }
        );
      }
    }, [g.viewport, C, a, u, I]),
      h.useEffect(() => {
        s && !g.isClosePausedRef.current && I(C);
      }, [s, C, g.isClosePausedRef, I]),
      h.useEffect(() => (T(), () => M()), [T, M]);
    const W = h.useMemo(() => (w ? Ag(w) : null), [w]);
    return g.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            W &&
              c.jsx(N1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            c.jsx(S1, {
              scope: n,
              onClose: z,
              children: wr.createPortal(
                c.jsx(rd.ItemSlot, {
                  scope: n,
                  children: c.jsx(s1, {
                    asChild: !0,
                    onEscapeKeyDown: K(l, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || z(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(ee.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...b,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: K(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (l == null || l(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: K(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: K(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const V = O.clientX - y.current.x,
                          F = O.clientY - y.current.y,
                          H = !!S.current,
                          E = ["left", "right"].includes(g.swipeDirection),
                          A = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          $ = E ? A(0, V) : 0,
                          L = E ? 0 : A(0, F),
                          U = O.pointerType === "touch" ? 10 : 2,
                          G = { x: $, y: L },
                          oe = { originalEvent: O, delta: G };
                        H
                          ? ((S.current = G), oi(x1, p, oe, { discrete: !1 }))
                          : Vf(G, g.swipeDirection, U)
                          ? ((S.current = G),
                            oi(y1, f, oe, { discrete: !1 }),
                            O.target.setPointerCapture(O.pointerId))
                          : (Math.abs(V) > U || Math.abs(F) > U) &&
                            (y.current = null);
                      }),
                      onPointerUp: K(e.onPointerUp, (O) => {
                        const V = S.current,
                          F = O.target;
                        if (
                          (F.hasPointerCapture(O.pointerId) &&
                            F.releasePointerCapture(O.pointerId),
                          (S.current = null),
                          (y.current = null),
                          V)
                        ) {
                          const H = O.currentTarget,
                            E = { originalEvent: O, delta: V };
                          Vf(V, g.swipeDirection, g.swipeThreshold)
                            ? oi(b1, x, E, { discrete: !0 })
                            : oi(w1, d, E, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  N1 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ml(_l, t),
      [s, i] = h.useState(!1),
      [l, a] = h.useState(!1);
    return (
      P1(() => i(!0)),
      h.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(td, {
            asChild: !0,
            children: c.jsx(Ms, {
              ...r,
              children:
                s && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  k1 = "ToastTitle",
  Ng = h.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
Ng.displayName = k1;
var j1 = "ToastDescription",
  kg = h.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
kg.displayName = j1;
var jg = "ToastAction",
  Pg = h.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(Rg, {
          altText: n,
          asChild: !0,
          children: c.jsx(od, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${jg}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Pg.displayName = jg;
var Tg = "ToastClose",
  od = h.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = C1(Tg, n);
    return c.jsx(Rg, {
      asChild: !0,
      children: c.jsx(ee.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: K(e.onClick, o.onClose),
      }),
    });
  });
od.displayName = Tg;
var Rg = h.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(ee.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Ag(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        T1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...Ag(r));
      }
    }),
    t
  );
}
function oi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? mg(o, s) : o.dispatchEvent(s);
}
var Vf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function P1(e = () => {}) {
  const t = ke(e);
  De(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function T1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function R1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pa(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var A1 = wg,
  Mg = Sg,
  _g = Eg,
  Og = Ng,
  Ig = kg,
  Lg = Pg,
  Dg = od;
function zg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = zg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Fg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = zg(e)) && (r && (r += " "), (r += t));
  return r;
}
const Kf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Qf = Fg,
  Ol = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Qf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const f = n == null ? void 0 : n[u],
          p = s == null ? void 0 : s[u];
        if (f === null) return null;
        const d = Kf(f) || Kf(p);
        return o[u][d];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [p, d] = f;
          return d === void 0 || (u[p] = d), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: p, className: d, ...x } = f;
              return Object.entries(x).every((b) => {
                let [g, w] = b;
                return Array.isArray(w)
                  ? w.includes({ ...s, ...l }[g])
                  : { ...s, ...l }[g] === w;
              })
                ? [...u, p, d]
                : u;
            }, []);
    return Qf(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $g = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = h.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    a
  ) =>
    h.createElement(
      "svg",
      {
        ref: a,
        ..._1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: $g("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, f]) => h.createElement(u, f)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ae = (e, t) => {
  const n = h.forwardRef(({ className: r, ...o }, s) =>
    h.createElement(O1, {
      ref: s,
      iconNode: t,
      className: $g(`lucide-${M1(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = ae("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = ae("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = ae("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = ae("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = ae("FileCheck", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = ae("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = ae("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = ae("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = ae("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = ae("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = ae("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $c = ae("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = ae("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = ae("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vo = ae("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = ae("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = ae("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = ae("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = ae("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = ae("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = ae("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = ae("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = ae("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = ae("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  id = "-",
  G1 = (e) => {
    const t = Z1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(id);
        return l[0] === "" && l.length !== 1 && l.shift(), Kg(l, t) || X1(i);
      },
      getConflictingClassGroupIds: (i, l) => {
        const a = n[i] || [];
        return l && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Kg = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Kg(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(id);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  Zf = /^\[(.+)\]$/,
  X1 = (e) => {
    if (Zf.test(e)) {
      const t = Zf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Z1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      eb(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Uc(i, r, s, t);
      }),
      r
    );
  },
  Uc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Jf(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (J1(o)) {
          Uc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Uc(i, Jf(t, s), n, r);
      });
    });
  },
  Jf = (e, t) => {
    let n = e;
    return (
      t.split(id).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  J1 = (e) => e.isThemeGetter,
  eb = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(([i, l]) => [t + i, l])
                )
              : s
          );
          return [n, o];
        })
      : e,
  tb = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  Qg = "!",
  nb = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const a = [];
        let u = 0,
          f = 0,
          p;
        for (let w = 0; w < l.length; w++) {
          let v = l[w];
          if (u === 0) {
            if (v === o && (r || l.slice(w, w + s) === t)) {
              a.push(l.slice(f, w)), (f = w + s);
              continue;
            }
            if (v === "/") {
              p = w;
              continue;
            }
          }
          v === "[" ? u++ : v === "]" && u--;
        }
        const d = a.length === 0 ? l : l.substring(f),
          x = d.startsWith(Qg),
          b = x ? d.substring(1) : d,
          g = p && p > f ? p - f : void 0;
        return {
          modifiers: a,
          hasImportantModifier: x,
          baseClassName: b,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  rb = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  ob = (e) => ({ cache: tb(e.cacheSize), parseClassName: nb(e), ...G1(e) }),
  sb = /\s+/,
  ib = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(sb);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: f,
          hasImportantModifier: p,
          baseClassName: d,
          maybePostfixModifierPosition: x,
        } = n(u);
      let b = !!x,
        g = r(b ? d.substring(0, x) : d);
      if (!g) {
        if (!b) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((g = r(d)), !g)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        b = !1;
      }
      const w = rb(f).join(":"),
        v = p ? w + Qg : w,
        m = v + g;
      if (s.includes(m)) continue;
      s.push(m);
      const y = o(g, b);
      for (let S = 0; S < y.length; ++S) {
        const C = y[S];
        s.push(v + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function lb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Yg(t)) && (r && (r += " "), (r += n));
  return r;
}
const Yg = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Yg(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function ab(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((f, p) => p(f), e());
    return (n = ob(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const f = ib(a, n);
    return o(a, f), f;
  }
  return function () {
    return s(lb.apply(null, arguments));
  };
}
const he = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  qg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  cb = /^\d+\/\d+$/,
  ub = new Set(["px", "full", "screen"]),
  db = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  pb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  hb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Gt = (e) => Gr(e) || ub.has(e) || cb.test(e),
  mn = (e) => Eo(e, "length", Cb),
  Gr = (e) => !!e && !Number.isNaN(Number(e)),
  Ta = (e) => Eo(e, "number", Gr),
  Do = (e) => !!e && Number.isInteger(Number(e)),
  gb = (e) => e.endsWith("%") && Gr(e.slice(0, -1)),
  Y = (e) => qg.test(e),
  gn = (e) => db.test(e),
  vb = new Set(["length", "size", "percentage"]),
  yb = (e) => Eo(e, vb, Gg),
  xb = (e) => Eo(e, "position", Gg),
  wb = new Set(["image", "url"]),
  bb = (e) => Eo(e, wb, Nb),
  Sb = (e) => Eo(e, "", Eb),
  zo = () => !0,
  Eo = (e, t, n) => {
    const r = qg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Cb = (e) => fb.test(e) && !pb.test(e),
  Gg = () => !1,
  Eb = (e) => hb.test(e),
  Nb = (e) => mb.test(e),
  kb = () => {
    const e = he("colors"),
      t = he("spacing"),
      n = he("blur"),
      r = he("brightness"),
      o = he("borderColor"),
      s = he("borderRadius"),
      i = he("borderSpacing"),
      l = he("borderWidth"),
      a = he("contrast"),
      u = he("grayscale"),
      f = he("hueRotate"),
      p = he("invert"),
      d = he("gap"),
      x = he("gradientColorStops"),
      b = he("gradientColorStopPositions"),
      g = he("inset"),
      w = he("margin"),
      v = he("opacity"),
      m = he("padding"),
      y = he("saturate"),
      S = he("scale"),
      C = he("sepia"),
      k = he("skew"),
      N = he("space"),
      j = he("translate"),
      T = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", Y, t],
      I = () => [Y, t],
      W = () => ["", Gt, mn],
      O = () => ["auto", Gr, Y],
      V = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      F = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      E = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", Y],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      L = () => [Gr, Y];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [zo],
        spacing: [Gt, mn],
        blur: ["none", "", gn, Y],
        brightness: L(),
        borderColor: [e],
        borderRadius: ["none", "", "full", gn, Y],
        borderSpacing: I(),
        borderWidth: W(),
        contrast: L(),
        grayscale: A(),
        hueRotate: L(),
        invert: A(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [gb, mn],
        inset: z(),
        margin: z(),
        opacity: L(),
        padding: I(),
        saturate: L(),
        scale: L(),
        sepia: A(),
        skew: L(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Y] }],
        container: ["container"],
        columns: [{ columns: [gn] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...V(), Y] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
        overscroll: [{ overscroll: T() }],
        "overscroll-x": [{ "overscroll-x": T() }],
        "overscroll-y": [{ "overscroll-y": T() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Do, Y] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Y] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", Do, Y] }],
        "grid-cols": [{ "grid-cols": [zo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Do, Y] }, Y] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [zo] }],
        "row-start-end": [{ row: ["auto", { span: [Do, Y] }, Y] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Y] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Y] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...E()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...E(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...E(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t] }],
        "min-w": [{ "min-w": [Y, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Y,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [gn] },
              gn,
            ],
          },
        ],
        h: [{ h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Y, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", gn, mn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ta,
            ],
          },
        ],
        "font-family": [{ font: [zo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Y,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Gr, Ta] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Gt,
              Y,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Y] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Y] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [v] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [v] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Gt, mn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Gt, Y] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Y,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Y] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [v] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...V(), xb] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", yb] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              bb,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [v] }],
        "border-style": [{ border: [...F(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [v] }],
        "divide-style": [{ divide: F() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...F()] }],
        "outline-offset": [{ "outline-offset": [Gt, Y] }],
        "outline-w": [{ outline: [Gt, mn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [v] }],
        "ring-offset-w": [{ "ring-offset": [Gt, mn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", gn, Sb] }],
        "shadow-color": [{ shadow: [zo] }],
        opacity: [{ opacity: [v] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", gn, Y] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [v] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Y,
            ],
          },
        ],
        duration: [{ duration: L() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Y] }],
        delay: [{ delay: L() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Y] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Do, Y] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Y,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Y,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Y] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Gt, mn, Ta] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  jb = ab(kb);
function ue(...e) {
  return jb(Fg(e));
}
const Pb = A1,
  Xg = h.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Mg, {
      ref: n,
      className: ue(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Xg.displayName = Mg.displayName;
const Tb = Ol(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Zg = h.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(_g, { ref: r, className: ue(Tb({ variant: t }), e), ...n })
  );
Zg.displayName = _g.displayName;
const Rb = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Lg, {
    ref: n,
    className: ue(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
Rb.displayName = Lg.displayName;
const Jg = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Dg, {
    ref: n,
    className: ue(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(Vg, { className: "h-4 w-4" }),
  })
);
Jg.displayName = Dg.displayName;
const ev = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Og, { ref: n, className: ue("text-sm font-semibold", e), ...t })
);
ev.displayName = Og.displayName;
const tv = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ig, { ref: n, className: ue("text-sm opacity-90", e), ...t })
);
tv.displayName = Ig.displayName;
function Ab() {
  const { toasts: e } = dg();
  return c.jsxs(Pb, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return c.jsxs(
          Zg,
          {
            ...s,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(ev, { children: n }),
                  r && c.jsx(tv, { children: r }),
                ],
              }),
              o,
              c.jsx(Jg, {}),
            ],
          },
          t
        );
      }),
      c.jsx(Xg, {}),
    ],
  });
}
var ep = ["light", "dark"],
  Mb = "(prefers-color-scheme: dark)",
  _b = h.createContext(void 0),
  Ob = { setTheme: (e) => {}, themes: [] },
  Ib = () => {
    var e;
    return (e = h.useContext(_b)) != null ? e : Ob;
  };
h.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: a,
  }) => {
    let u = s === "system",
      f =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((b) => `'${b}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = o
        ? ep.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      d = (b, g = !1, w = !0) => {
        let v = i ? i[b] : b,
          m = g ? b + "|| ''" : `'${v}'`,
          y = "";
        return (
          o &&
            w &&
            !g &&
            ep.includes(b) &&
            (y += `d.style.colorScheme = '${b}';`),
          n === "class"
            ? g || v
              ? (y += `c.add(${m})`)
              : (y += "null")
            : v && (y += `d[s](n,${m})`),
          y
        );
      },
      x = e
        ? `!function(){${f}${d(e)}}()`
        : r
        ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Mb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d(
            "dark"
          )}}else{${d("light")}}}else if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${d(i ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + d(s, !1, !1) + "}"
          }${p}}catch(e){}}()`
        : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${d(i ? "x[e]" : "e", !0)}}else{${d(
            s,
            !1,
            !1
          )};}${p}}catch(t){}}();`;
    return h.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: x },
    });
  }
);
var Lb = (e) => {
    switch (e) {
      case "success":
        return Fb;
      case "info":
        return Ub;
      case "warning":
        return $b;
      case "error":
        return Bb;
      default:
        return null;
    }
  },
  Db = Array(12).fill(0),
  zb = ({ visible: e }) =>
    _.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      _.createElement(
        "div",
        { className: "sonner-spinner" },
        Db.map((t, n) =>
          _.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Fb = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  $b = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Ub = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Bb = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Wb = () => {
    let [e, t] = _.useState(document.hidden);
    return (
      _.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Bc = 1,
  Hb = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Bc++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (s) => {
                if (Kb(s) && !s.ok) {
                  o = !1;
                  let i =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${s.status}`)
                        : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${s.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: l,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let i =
                      typeof t.success == "function"
                        ? await t.success(s)
                        : t.success,
                    l =
                      typeof t.description == "function"
                        ? await t.description(s)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: i,
                    description: l,
                  });
                }
              })
              .catch(async (s) => {
                if (t.error !== void 0) {
                  o = !1;
                  let i =
                      typeof t.error == "function" ? await t.error(s) : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(s)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: l,
                  });
                }
              })
              .finally(() => {
                var s;
                o && (this.dismiss(n), (n = void 0)),
                  (s = t.finally) == null || s.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Bc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  ot = new Hb(),
  Vb = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Bc++;
    return ot.addToast({ title: e, ...t, id: n }), n;
  },
  Kb = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Qb = Vb,
  Yb = () => ot.toasts;
Object.assign(
  Qb,
  {
    success: ot.success,
    info: ot.info,
    warning: ot.warning,
    error: ot.error,
    custom: ot.custom,
    message: ot.message,
    promise: ot.promise,
    dismiss: ot.dismiss,
    loading: ot.loading,
  },
  { getHistory: Yb }
);
function qb(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
qb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function si(e) {
  return e.label !== void 0;
}
var Gb = 3,
  Xb = "32px",
  Zb = 4e3,
  Jb = 356,
  eS = 14,
  tS = 20,
  nS = 200;
function rS(...e) {
  return e.filter(Boolean).join(" ");
}
var oS = (e) => {
  var t, n, r, o, s, i, l, a, u, f;
  let {
      invert: p,
      toast: d,
      unstyled: x,
      interacting: b,
      setHeights: g,
      visibleToasts: w,
      heights: v,
      index: m,
      toasts: y,
      expanded: S,
      removeToast: C,
      defaultRichColors: k,
      closeButton: N,
      style: j,
      cancelButtonStyle: T,
      actionButtonStyle: M,
      className: z = "",
      descriptionClassName: I = "",
      duration: W,
      position: O,
      gap: V,
      loadingIcon: F,
      expandByDefault: H,
      classNames: E,
      icons: A,
      closeButtonAriaLabel: $ = "Close toast",
      pauseWhenPageIsHidden: L,
      cn: U,
    } = e,
    [G, oe] = _.useState(!1),
    [Re, Z] = _.useState(!1),
    [B, re] = _.useState(!1),
    [be, te] = _.useState(!1),
    [se, ne] = _.useState(0),
    [He, nt] = _.useState(0),
    fn = _.useRef(null),
    ht = _.useRef(null),
    Xn = m === 0,
    Gl = m + 1 <= w,
    _e = d.type,
    Er = d.dismissible !== !1,
    iy = d.className || "",
    ly = d.descriptionClassName || "",
    Ds = _.useMemo(
      () => v.findIndex((Q) => Q.toastId === d.id) || 0,
      [v, d.id]
    ),
    ay = _.useMemo(() => {
      var Q;
      return (Q = d.closeButton) != null ? Q : N;
    }, [d.closeButton, N]),
    kd = _.useMemo(() => d.duration || W || Zb, [d.duration, W]),
    Xl = _.useRef(0),
    Nr = _.useRef(0),
    jd = _.useRef(0),
    kr = _.useRef(null),
    [Pd, cy] = O.split("-"),
    Td = _.useMemo(
      () => v.reduce((Q, pe, de) => (de >= Ds ? Q : Q + pe.height), 0),
      [v, Ds]
    ),
    Rd = Wb(),
    uy = d.invert || p,
    Zl = _e === "loading";
  (Nr.current = _.useMemo(() => Ds * V + Td, [Ds, Td])),
    _.useEffect(() => {
      oe(!0);
    }, []),
    _.useLayoutEffect(() => {
      if (!G) return;
      let Q = ht.current,
        pe = Q.style.height;
      Q.style.height = "auto";
      let de = Q.getBoundingClientRect().height;
      (Q.style.height = pe),
        nt(de),
        g((Lt) =>
          Lt.find((Dt) => Dt.toastId === d.id)
            ? Lt.map((Dt) => (Dt.toastId === d.id ? { ...Dt, height: de } : Dt))
            : [{ toastId: d.id, height: de, position: d.position }, ...Lt]
        );
    }, [G, d.title, d.description, g, d.id]);
  let pn = _.useCallback(() => {
    Z(!0),
      ne(Nr.current),
      g((Q) => Q.filter((pe) => pe.toastId !== d.id)),
      setTimeout(() => {
        C(d);
      }, nS);
  }, [d, C, g, Nr]);
  _.useEffect(() => {
    if (
      (d.promise && _e === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let Q,
      pe = kd;
    return (
      S || b || (L && Rd)
        ? (() => {
            if (jd.current < Xl.current) {
              let de = new Date().getTime() - Xl.current;
              pe = pe - de;
            }
            jd.current = new Date().getTime();
          })()
        : pe !== 1 / 0 &&
          ((Xl.current = new Date().getTime()),
          (Q = setTimeout(() => {
            var de;
            (de = d.onAutoClose) == null || de.call(d, d), pn();
          }, pe))),
      () => clearTimeout(Q)
    );
  }, [S, b, H, d, kd, pn, d.promise, _e, L, Rd]),
    _.useEffect(() => {
      let Q = ht.current;
      if (Q) {
        let pe = Q.getBoundingClientRect().height;
        return (
          nt(pe),
          g((de) => [
            { toastId: d.id, height: pe, position: d.position },
            ...de,
          ]),
          () => g((de) => de.filter((Lt) => Lt.toastId !== d.id))
        );
      }
    }, [g, d.id]),
    _.useEffect(() => {
      d.delete && pn();
    }, [pn, d.delete]);
  function dy() {
    return A != null && A.loading
      ? _.createElement(
          "div",
          { className: "sonner-loader", "data-visible": _e === "loading" },
          A.loading
        )
      : F
      ? _.createElement(
          "div",
          { className: "sonner-loader", "data-visible": _e === "loading" },
          F
        )
      : _.createElement(zb, { visible: _e === "loading" });
  }
  return _.createElement(
    "li",
    {
      "aria-live": d.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: ht,
      className: U(
        z,
        iy,
        E == null ? void 0 : E.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        E == null ? void 0 : E.default,
        E == null ? void 0 : E[_e],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[_e]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : k,
      "data-styled": !(d.jsx || d.unstyled || x),
      "data-mounted": G,
      "data-promise": !!d.promise,
      "data-removed": Re,
      "data-visible": Gl,
      "data-y-position": Pd,
      "data-x-position": cy,
      "data-index": m,
      "data-front": Xn,
      "data-swiping": B,
      "data-dismissible": Er,
      "data-type": _e,
      "data-invert": uy,
      "data-swipe-out": be,
      "data-expanded": !!(S || (H && G)),
      style: {
        "--index": m,
        "--toasts-before": m,
        "--z-index": y.length - m,
        "--offset": `${Re ? se : Nr.current}px`,
        "--initial-height": H ? "auto" : `${He}px`,
        ...j,
        ...d.style,
      },
      onPointerDown: (Q) => {
        Zl ||
          !Er ||
          ((fn.current = new Date()),
          ne(Nr.current),
          Q.target.setPointerCapture(Q.pointerId),
          Q.target.tagName !== "BUTTON" &&
            (re(!0), (kr.current = { x: Q.clientX, y: Q.clientY })));
      },
      onPointerUp: () => {
        var Q, pe, de, Lt;
        if (be || !Er) return;
        kr.current = null;
        let Dt = Number(
            ((Q = ht.current) == null
              ? void 0
              : Q.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          zs =
            new Date().getTime() -
            ((pe = fn.current) == null ? void 0 : pe.getTime()),
          fy = Math.abs(Dt) / zs;
        if (Math.abs(Dt) >= tS || fy > 0.11) {
          ne(Nr.current),
            (de = d.onDismiss) == null || de.call(d, d),
            pn(),
            te(!0);
          return;
        }
        (Lt = ht.current) == null ||
          Lt.style.setProperty("--swipe-amount", "0px"),
          re(!1);
      },
      onPointerMove: (Q) => {
        var pe;
        if (!kr.current || !Er) return;
        let de = Q.clientY - kr.current.y,
          Lt = Q.clientX - kr.current.x,
          Dt = (Pd === "top" ? Math.min : Math.max)(0, de),
          zs = Q.pointerType === "touch" ? 10 : 2;
        Math.abs(Dt) > zs
          ? (pe = ht.current) == null ||
            pe.style.setProperty("--swipe-amount", `${de}px`)
          : Math.abs(Lt) > zs && (kr.current = null);
      },
    },
    ay && !d.jsx
      ? _.createElement(
          "button",
          {
            "aria-label": $,
            "data-disabled": Zl,
            "data-close-button": !0,
            onClick:
              Zl || !Er
                ? () => {}
                : () => {
                    var Q;
                    pn(), (Q = d.onDismiss) == null || Q.call(d, d);
                  },
            className: U(
              E == null ? void 0 : E.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          _.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            _.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            _.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    d.jsx || _.isValidElement(d.title)
      ? d.jsx || d.title
      : _.createElement(
          _.Fragment,
          null,
          _e || d.icon || d.promise
            ? _.createElement(
                "div",
                {
                  "data-icon": "",
                  className: U(
                    E == null ? void 0 : E.icon,
                    (s = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || dy()
                  : null,
                d.type !== "loading"
                  ? d.icon || (A == null ? void 0 : A[_e]) || Lb(_e)
                  : null
              )
            : null,
          _.createElement(
            "div",
            {
              "data-content": "",
              className: U(
                E == null ? void 0 : E.content,
                (i = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            _.createElement(
              "div",
              {
                "data-title": "",
                className: U(
                  E == null ? void 0 : E.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              d.title
            ),
            d.description
              ? _.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: U(
                      I,
                      ly,
                      E == null ? void 0 : E.description,
                      (a = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : a.description
                    ),
                  },
                  d.description
                )
              : null
          ),
          _.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && si(d.cancel)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || T,
                  onClick: (Q) => {
                    var pe, de;
                    si(d.cancel) &&
                      Er &&
                      ((de = (pe = d.cancel).onClick) == null || de.call(pe, Q),
                      pn());
                  },
                  className: U(
                    E == null ? void 0 : E.cancelButton,
                    (u = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          _.isValidElement(d.action)
            ? d.action
            : d.action && si(d.action)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || M,
                  onClick: (Q) => {
                    var pe, de;
                    si(d.action) &&
                      (Q.defaultPrevented ||
                        ((de = (pe = d.action).onClick) == null ||
                          de.call(pe, Q),
                        pn()));
                  },
                  className: U(
                    E == null ? void 0 : E.actionButton,
                    (f = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function tp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var sS = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: i,
      offset: l,
      theme: a = "light",
      richColors: u,
      duration: f,
      style: p,
      visibleToasts: d = Gb,
      toastOptions: x,
      dir: b = tp(),
      gap: g = eS,
      loadingIcon: w,
      icons: v,
      containerAriaLabel: m = "Notifications",
      pauseWhenPageIsHidden: y,
      cn: S = rS,
    } = e,
    [C, k] = _.useState([]),
    N = _.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(C.filter((L) => L.position).map((L) => L.position))
          )
        ),
      [C, n]
    ),
    [j, T] = _.useState([]),
    [M, z] = _.useState(!1),
    [I, W] = _.useState(!1),
    [O, V] = _.useState(
      a !== "system"
        ? a
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    F = _.useRef(null),
    H = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    E = _.useRef(null),
    A = _.useRef(!1),
    $ = _.useCallback(
      (L) => {
        var U;
        ((U = C.find((G) => G.id === L.id)) != null && U.delete) ||
          ot.dismiss(L.id),
          k((G) => G.filter(({ id: oe }) => oe !== L.id));
      },
      [C]
    );
  return (
    _.useEffect(
      () =>
        ot.subscribe((L) => {
          if (L.dismiss) {
            k((U) => U.map((G) => (G.id === L.id ? { ...G, delete: !0 } : G)));
            return;
          }
          setTimeout(() => {
            cg.flushSync(() => {
              k((U) => {
                let G = U.findIndex((oe) => oe.id === L.id);
                return G !== -1
                  ? [...U.slice(0, G), { ...U[G], ...L }, ...U.slice(G + 1)]
                  : [L, ...U];
              });
            });
          });
        }),
      []
    ),
    _.useEffect(() => {
      if (a !== "system") {
        V(a);
        return;
      }
      a === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? V("dark")
          : V("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: L }) => {
              V(L ? "dark" : "light");
            });
    }, [a]),
    _.useEffect(() => {
      C.length <= 1 && z(!1);
    }, [C]),
    _.useEffect(() => {
      let L = (U) => {
        var G, oe;
        r.every((Re) => U[Re] || U.code === Re) &&
          (z(!0), (G = F.current) == null || G.focus()),
          U.code === "Escape" &&
            (document.activeElement === F.current ||
              ((oe = F.current) != null &&
                oe.contains(document.activeElement))) &&
            z(!1);
      };
      return (
        document.addEventListener("keydown", L),
        () => document.removeEventListener("keydown", L)
      );
    }, [r]),
    _.useEffect(() => {
      if (F.current)
        return () => {
          E.current &&
            (E.current.focus({ preventScroll: !0 }),
            (E.current = null),
            (A.current = !1));
        };
    }, [F.current]),
    C.length
      ? _.createElement(
          "section",
          { "aria-label": `${m} ${H}`, tabIndex: -1 },
          N.map((L, U) => {
            var G;
            let [oe, Re] = L.split("-");
            return _.createElement(
              "ol",
              {
                key: L,
                dir: b === "auto" ? tp() : b,
                tabIndex: -1,
                ref: F,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": O,
                "data-y-position": oe,
                "data-x-position": Re,
                style: {
                  "--front-toast-height": `${
                    ((G = j[0]) == null ? void 0 : G.height) || 0
                  }px`,
                  "--offset": typeof l == "number" ? `${l}px` : l || Xb,
                  "--width": `${Jb}px`,
                  "--gap": `${g}px`,
                  ...p,
                },
                onBlur: (Z) => {
                  A.current &&
                    !Z.currentTarget.contains(Z.relatedTarget) &&
                    ((A.current = !1),
                    E.current &&
                      (E.current.focus({ preventScroll: !0 }),
                      (E.current = null)));
                },
                onFocus: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    A.current ||
                    ((A.current = !0), (E.current = Z.relatedTarget));
                },
                onMouseEnter: () => z(!0),
                onMouseMove: () => z(!0),
                onMouseLeave: () => {
                  I || z(!1);
                },
                onPointerDown: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    W(!0);
                },
                onPointerUp: () => W(!1),
              },
              C.filter((Z) => (!Z.position && U === 0) || Z.position === L).map(
                (Z, B) => {
                  var re, be;
                  return _.createElement(oS, {
                    key: Z.id,
                    icons: v,
                    index: B,
                    toast: Z,
                    defaultRichColors: u,
                    duration:
                      (re = x == null ? void 0 : x.duration) != null ? re : f,
                    className: x == null ? void 0 : x.className,
                    descriptionClassName:
                      x == null ? void 0 : x.descriptionClassName,
                    invert: t,
                    visibleToasts: d,
                    closeButton:
                      (be = x == null ? void 0 : x.closeButton) != null
                        ? be
                        : s,
                    interacting: I,
                    position: L,
                    style: x == null ? void 0 : x.style,
                    unstyled: x == null ? void 0 : x.unstyled,
                    classNames: x == null ? void 0 : x.classNames,
                    cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                    actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                    removeToast: $,
                    toasts: C.filter((te) => te.position == Z.position),
                    heights: j.filter((te) => te.position == Z.position),
                    setHeights: T,
                    expandByDefault: o,
                    gap: g,
                    loadingIcon: w,
                    expanded: M,
                    pauseWhenPageIsHidden: y,
                    cn: S,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
const iS = ({ ...e }) => {
  const { theme: t = "system" } = Ib();
  return c.jsx(sS, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var lS = ih.useId || (() => {}),
  aS = 0;
function ld(e) {
  const [t, n] = h.useState(lS());
  return (
    De(() => {
      n((r) => r ?? String(aS++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const cS = ["top", "right", "bottom", "left"],
  Bn = Math.min,
  it = Math.max,
  el = Math.round,
  ii = Math.floor,
  Wn = (e) => ({ x: e, y: e }),
  uS = { left: "right", right: "left", bottom: "top", top: "bottom" },
  dS = { start: "end", end: "start" };
function Wc(e, t, n) {
  return it(e, Bn(t, n));
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function un(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function ad(e) {
  return e === "x" ? "y" : "x";
}
function cd(e) {
  return e === "y" ? "height" : "width";
}
function Hn(e) {
  return ["top", "bottom"].includes(un(e)) ? "y" : "x";
}
function ud(e) {
  return ad(Hn(e));
}
function fS(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e),
    o = ud(e),
    s = cd(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = tl(i)), [i, tl(i)];
}
function pS(e) {
  const t = tl(e);
  return [Hc(e), t, Hc(t)];
}
function Hc(e) {
  return e.replace(/start|end/g, (t) => dS[t]);
}
function hS(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function mS(e, t, n, r) {
  const o = No(e);
  let s = hS(un(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Hc)))), s
  );
}
function tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uS[t]);
}
function gS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function nv(e) {
  return typeof e != "number"
    ? gS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function nl(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function np(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Hn(t),
    i = ud(t),
    l = cd(i),
    a = un(t),
    u = s === "y",
    f = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    d = r[l] / 2 - o[l] / 2;
  let x;
  switch (a) {
    case "top":
      x = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      x = { x: f, y: r.y + r.height };
      break;
    case "right":
      x = { x: r.x + r.width, y: p };
      break;
    case "left":
      x = { x: r.x - o.width, y: p };
      break;
    default:
      x = { x: r.x, y: r.y };
  }
  switch (No(t)) {
    case "start":
      x[i] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      x[i] += d * (n && u ? -1 : 1);
      break;
  }
  return x;
}
const vS = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: p } = np(u, r, a),
    d = r,
    x = {},
    b = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: w, fn: v } = l[g],
      {
        x: m,
        y,
        data: S,
        reset: C,
      } = await v({
        x: f,
        y: p,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: x,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (f = m ?? f),
      (p = y ?? p),
      (x = { ...x, [w]: { ...x[w], ...S } }),
      C &&
        b <= 50 &&
        (b++,
        typeof C == "object" &&
          (C.placement && (d = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: f, y: p } = np(u, d, a))),
        (g = -1));
  }
  return { x: f, y: p, placement: d, strategy: o, middlewareData: x };
};
async function ys(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: p = "floating",
      altBoundary: d = !1,
      padding: x = 0,
    } = cn(t, e),
    b = nv(x),
    w = l[d ? (p === "floating" ? "reference" : "floating") : p],
    v = nl(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: a,
      })
    ),
    m =
      p === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    y = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(y)))
      ? (await (s.getScale == null ? void 0 : s.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = nl(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: m,
            offsetParent: y,
            strategy: a,
          })
        : m
    );
  return {
    top: (v.top - C.top + b.top) / S.y,
    bottom: (C.bottom - v.bottom + b.bottom) / S.y,
    left: (v.left - C.left + b.left) / S.x,
    right: (C.right - v.right + b.right) / S.x,
  };
}
const yS = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: f = 0 } = cn(e, t) || {};
      if (u == null) return {};
      const p = nv(f),
        d = { x: n, y: r },
        x = ud(o),
        b = cd(x),
        g = await i.getDimensions(u),
        w = x === "y",
        v = w ? "top" : "left",
        m = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        S = s.reference[b] + s.reference[x] - d[x] - s.floating[b],
        C = d[x] - s.reference[x],
        k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let N = k ? k[y] : 0;
      (!N || !(await (i.isElement == null ? void 0 : i.isElement(k)))) &&
        (N = l.floating[y] || s.floating[b]);
      const j = S / 2 - C / 2,
        T = N / 2 - g[b] / 2 - 1,
        M = Bn(p[v], T),
        z = Bn(p[m], T),
        I = M,
        W = N - g[b] - z,
        O = N / 2 - g[b] / 2 + j,
        V = Wc(I, O, W),
        F =
          !a.arrow &&
          No(o) != null &&
          O !== V &&
          s.reference[b] / 2 - (O < I ? M : z) - g[b] / 2 < 0,
        H = F ? (O < I ? O - I : O - W) : 0;
      return {
        [x]: d[x] + H,
        data: {
          [x]: V,
          centerOffset: O - V - H,
          ...(F && { alignmentOffset: H }),
        },
        reset: F,
      };
    },
  }),
  xS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: p = !0,
              fallbackPlacements: d,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: g = !0,
              ...w
            } = cn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = un(o),
            m = Hn(l),
            y = un(l) === l,
            S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = d || (y || !g ? [tl(l)] : pS(l)),
            k = b !== "none";
          !d && k && C.push(...mS(l, g, b, S));
          const N = [l, ...C],
            j = await ys(t, w),
            T = [];
          let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((f && T.push(j[v]), p)) {
            const O = fS(o, i, S);
            T.push(j[O[0]], j[O[1]]);
          }
          if (
            ((M = [...M, { placement: o, overflows: T }]),
            !T.every((O) => O <= 0))
          ) {
            var z, I;
            const O = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
              V = N[O];
            if (V)
              return {
                data: { index: O, overflows: M },
                reset: { placement: V },
              };
            let F =
              (I = M.filter((H) => H.overflows[0] <= 0).sort(
                (H, E) => H.overflows[1] - E.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!F)
              switch (x) {
                case "bestFit": {
                  var W;
                  const H =
                    (W = M.filter((E) => {
                      if (k) {
                        const A = Hn(E.placement);
                        return A === m || A === "y";
                      }
                      return !0;
                    })
                      .map((E) => [
                        E.placement,
                        E.overflows
                          .filter((A) => A > 0)
                          .reduce((A, $) => A + $, 0),
                      ])
                      .sort((E, A) => E[1] - A[1])[0]) == null
                      ? void 0
                      : W[0];
                  H && (F = H);
                  break;
                }
                case "initialPlacement":
                  F = l;
                  break;
              }
            if (o !== F) return { reset: { placement: F } };
          }
          return {};
        },
      }
    );
  };
function rp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function op(e) {
  return cS.some((t) => e[t] >= 0);
}
const wS = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = cn(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await ys(t, { ...o, elementContext: "reference" }),
              i = rp(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: op(i) },
            };
          }
          case "escaped": {
            const s = await ys(t, { ...o, altBoundary: !0 }),
              i = rp(s, n.floating);
            return { data: { escapedOffsets: i, escaped: op(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function bS(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = un(n),
    l = No(n),
    a = Hn(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    f = s && a ? -1 : 1,
    p = cn(t, e);
  let {
    mainAxis: d,
    crossAxis: x,
    alignmentAxis: b,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof b == "number" && (x = l === "end" ? b * -1 : b),
    a ? { x: x * f, y: d * u } : { x: d * u, y: x * f }
  );
}
const SS = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await bS(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  CS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: v, y: m } = w;
                  return { x: v, y: m };
                },
              },
              ...a
            } = cn(e, t),
            u = { x: n, y: r },
            f = await ys(t, a),
            p = Hn(un(o)),
            d = ad(p);
          let x = u[d],
            b = u[p];
          if (s) {
            const w = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              m = x + f[w],
              y = x - f[v];
            x = Wc(m, x, y);
          }
          if (i) {
            const w = p === "y" ? "top" : "left",
              v = p === "y" ? "bottom" : "right",
              m = b + f[w],
              y = b - f[v];
            b = Wc(m, b, y);
          }
          const g = l.fn({ ...t, [d]: x, [p]: b });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [d]: s, [p]: i } },
          };
        },
      }
    );
  },
  ES = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = cn(e, t),
            f = { x: n, y: r },
            p = Hn(o),
            d = ad(p);
          let x = f[d],
            b = f[p];
          const g = cn(l, t),
            w =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const y = d === "y" ? "height" : "width",
              S = s.reference[d] - s.floating[y] + w.mainAxis,
              C = s.reference[d] + s.reference[y] - w.mainAxis;
            x < S ? (x = S) : x > C && (x = C);
          }
          if (u) {
            var v, m;
            const y = d === "y" ? "width" : "height",
              S = ["top", "left"].includes(un(o)),
              C =
                s.reference[p] -
                s.floating[y] +
                ((S && ((v = i.offset) == null ? void 0 : v[p])) || 0) +
                (S ? 0 : w.crossAxis),
              k =
                s.reference[p] +
                s.reference[y] +
                (S ? 0 : ((m = i.offset) == null ? void 0 : m[p]) || 0) -
                (S ? w.crossAxis : 0);
            b < C ? (b = C) : b > k && (b = k);
          }
          return { [d]: x, [p]: b };
        },
      }
    );
  },
  NS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: a = () => {}, ...u } = cn(e, t),
            f = await ys(t, u),
            p = un(o),
            d = No(o),
            x = Hn(o) === "y",
            { width: b, height: g } = s.floating;
          let w, v;
          p === "top" || p === "bottom"
            ? ((w = p),
              (v =
                d ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = p), (w = d === "end" ? "top" : "bottom"));
          const m = g - f.top - f.bottom,
            y = b - f.left - f.right,
            S = Bn(g - f[w], m),
            C = Bn(b - f[v], y),
            k = !t.middlewareData.shift;
          let N = S,
            j = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = m),
            k && !d)
          ) {
            const M = it(f.left, 0),
              z = it(f.right, 0),
              I = it(f.top, 0),
              W = it(f.bottom, 0);
            x
              ? (j = b - 2 * (M !== 0 || z !== 0 ? M + z : it(f.left, f.right)))
              : (N =
                  g - 2 * (I !== 0 || W !== 0 ? I + W : it(f.top, f.bottom)));
          }
          await a({ ...t, availableWidth: j, availableHeight: N });
          const T = await i.getDimensions(l.floating);
          return b !== T.width || g !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Il() {
  return typeof window < "u";
}
function ko(e) {
  return rv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Yt(e) {
  var t;
  return (t = (rv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function rv(e) {
  return Il() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Ot(e) {
  return Il() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Qt(e) {
  return Il() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function sp(e) {
  return !Il() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
function _s(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = It(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function kS(e) {
  return ["table", "td", "th"].includes(ko(e));
}
function Ll(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function dd(e) {
  const t = fd(),
    n = Ot(e) ? It(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function jS(e) {
  let t = Vn(e);
  for (; Qt(t) && !yo(t); ) {
    if (dd(t)) return t;
    if (Ll(t)) return null;
    t = Vn(t);
  }
  return null;
}
function fd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function yo(e) {
  return ["html", "body", "#document"].includes(ko(e));
}
function It(e) {
  return ut(e).getComputedStyle(e);
}
function Dl(e) {
  return Ot(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Vn(e) {
  if (ko(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (sp(e) && e.host) || Yt(e);
  return sp(t) ? t.host : t;
}
function ov(e) {
  const t = Vn(e);
  return yo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Qt(t) && _s(t)
    ? t
    : ov(t);
}
function xs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ov(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ut(o);
  if (s) {
    const l = Vc(i);
    return t.concat(
      i,
      i.visualViewport || [],
      _s(o) ? o : [],
      l && n ? xs(l) : []
    );
  }
  return t.concat(o, xs(o, [], n));
}
function Vc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sv(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Qt(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = el(n) !== s || el(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function pd(e) {
  return Ot(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = pd(e);
  if (!Qt(t)) return Wn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = sv(t);
  let i = (s ? el(n.width) : n.width) / r,
    l = (s ? el(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const PS = Wn(0);
function iv(e) {
  const t = ut(e);
  return !fd() || !t.visualViewport
    ? PS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function TS(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t;
}
function gr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = pd(e);
  let i = Wn(1);
  t && (r ? Ot(r) && (i = Xr(r)) : (i = Xr(e)));
  const l = TS(s, n, r) ? iv(s) : Wn(0);
  let a = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    f = o.width / i.x,
    p = o.height / i.y;
  if (s) {
    const d = ut(s),
      x = r && Ot(r) ? ut(r) : r;
    let b = d,
      g = Vc(b);
    for (; g && r && x !== b; ) {
      const w = Xr(g),
        v = g.getBoundingClientRect(),
        m = It(g),
        y = v.left + (g.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        S = v.top + (g.clientTop + parseFloat(m.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (f *= w.x),
        (p *= w.y),
        (a += y),
        (u += S),
        (b = ut(g)),
        (g = Vc(b));
    }
  }
  return nl({ width: f, height: p, x: a, y: u });
}
function RS(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Yt(r),
    l = t ? Ll(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Wn(1);
  const f = Wn(0),
    p = Qt(r);
  if (
    (p || (!p && !s)) &&
    ((ko(r) !== "body" || _s(i)) && (a = Dl(r)), Qt(r))
  ) {
    const d = gr(r);
    (u = Xr(r)), (f.x = d.x + r.clientLeft), (f.y = d.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + f.y,
  };
}
function AS(e) {
  return Array.from(e.getClientRects());
}
function Kc(e, t) {
  const n = Dl(e).scrollLeft;
  return t ? t.left + n : gr(Yt(e)).left + n;
}
function MS(e) {
  const t = Yt(e),
    n = Dl(e),
    r = e.ownerDocument.body,
    o = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Kc(e);
  const l = -n.scrollTop;
  return (
    It(r).direction === "rtl" && (i += it(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function _S(e, t) {
  const n = ut(e),
    r = Yt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = fd();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function OS(e, t) {
  const n = gr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Qt(e) ? Xr(e) : Wn(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function ip(e, t, n) {
  let r;
  if (t === "viewport") r = _S(e, n);
  else if (t === "document") r = MS(Yt(e));
  else if (Ot(t)) r = OS(t, n);
  else {
    const o = iv(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return nl(r);
}
function lv(e, t) {
  const n = Vn(e);
  return n === t || !Ot(n) || yo(n)
    ? !1
    : It(n).position === "fixed" || lv(n, t);
}
function IS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = xs(e, [], !1).filter((l) => Ot(l) && ko(l) !== "body"),
    o = null;
  const s = It(e).position === "fixed";
  let i = s ? Vn(e) : e;
  for (; Ot(i) && !yo(i); ) {
    const l = It(i),
      a = dd(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (_s(i) && !a && lv(e, i))
      )
        ? (r = r.filter((f) => f !== i))
        : (o = l),
      (i = Vn(i));
  }
  return t.set(e, r), r;
}
function LS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Ll(t)
          ? []
          : IS(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((u, f) => {
      const p = ip(t, f, o);
      return (
        (u.top = it(p.top, u.top)),
        (u.right = Bn(p.right, u.right)),
        (u.bottom = Bn(p.bottom, u.bottom)),
        (u.left = it(p.left, u.left)),
        u
      );
    }, ip(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function DS(e) {
  const { width: t, height: n } = sv(e);
  return { width: t, height: n };
}
function zS(e, t, n) {
  const r = Qt(t),
    o = Yt(t),
    s = n === "fixed",
    i = gr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Wn(0);
  if (r || (!r && !s))
    if (((ko(t) !== "body" || _s(o)) && (l = Dl(t)), r)) {
      const x = gr(t, !0, s, t);
      (a.x = x.x + t.clientLeft), (a.y = x.y + t.clientTop);
    } else o && (a.x = Kc(o));
  let u = 0,
    f = 0;
  if (o && !r && !s) {
    const x = o.getBoundingClientRect();
    (f = x.top + l.scrollTop), (u = x.left + l.scrollLeft - Kc(o, x));
  }
  const p = i.left + l.scrollLeft - a.x - u,
    d = i.top + l.scrollTop - a.y - f;
  return { x: p, y: d, width: i.width, height: i.height };
}
function Ra(e) {
  return It(e).position === "static";
}
function lp(e, t) {
  if (!Qt(e) || It(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function av(e, t) {
  const n = ut(e);
  if (Ll(e)) return n;
  if (!Qt(e)) {
    let o = Vn(e);
    for (; o && !yo(o); ) {
      if (Ot(o) && !Ra(o)) return o;
      o = Vn(o);
    }
    return n;
  }
  let r = lp(e, t);
  for (; r && kS(r) && Ra(r); ) r = lp(r, t);
  return r && yo(r) && Ra(r) && !dd(r) ? n : r || jS(e) || n;
}
const FS = async function (e) {
  const t = this.getOffsetParent || av,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: zS(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function $S(e) {
  return It(e).direction === "rtl";
}
const US = {
  convertOffsetParentRelativeRectToViewportRelativeRect: RS,
  getDocumentElement: Yt,
  getClippingRect: LS,
  getOffsetParent: av,
  getElementRects: FS,
  getClientRects: AS,
  getDimensions: DS,
  getScale: Xr,
  isElement: Ot,
  isRTL: $S,
};
function BS(e, t) {
  let n = null,
    r;
  const o = Yt(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: u, top: f, width: p, height: d } = e.getBoundingClientRect();
    if ((l || t(), !p || !d)) return;
    const x = ii(f),
      b = ii(o.clientWidth - (u + p)),
      g = ii(o.clientHeight - (f + d)),
      w = ii(u),
      m = {
        rootMargin: -x + "px " + -b + "px " + -g + "px " + -w + "px",
        threshold: it(0, Bn(1, a)) || 1,
      };
    let y = !0;
    function S(C) {
      const k = C[0].intersectionRatio;
      if (k !== a) {
        if (!y) return i();
        k
          ? i(!1, k)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, m);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function WS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = pd(e),
    f = o || s ? [...(u ? xs(u) : []), ...xs(t)] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const p = u && l ? BS(u, n) : null;
  let d = -1,
    x = null;
  i &&
    ((x = new ResizeObserver((v) => {
      let [m] = v;
      m &&
        m.target === u &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var y;
          (y = x) == null || y.observe(t);
        }))),
        n();
    })),
    u && !a && x.observe(u),
    x.observe(t));
  let b,
    g = a ? gr(e) : null;
  a && w();
  function w() {
    const v = gr(e);
    g &&
      (v.x !== g.x ||
        v.y !== g.y ||
        v.width !== g.width ||
        v.height !== g.height) &&
      n(),
      (g = v),
      (b = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var v;
      f.forEach((m) => {
        o && m.removeEventListener("scroll", n),
          s && m.removeEventListener("resize", n);
      }),
        p == null || p(),
        (v = x) == null || v.disconnect(),
        (x = null),
        a && cancelAnimationFrame(b);
    }
  );
}
const HS = SS,
  VS = CS,
  KS = xS,
  QS = NS,
  YS = wS,
  ap = yS,
  qS = ES,
  GS = (e, t, n) => {
    const r = new Map(),
      o = { platform: US, ...n },
      s = { ...o.platform, _c: r };
    return vS(e, t, { ...o, platform: s });
  };
var ki = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function rl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!rl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !rl(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function cv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cp(e, t) {
  const n = cv(e);
  return Math.round(t * n) / n;
}
function Aa(e) {
  const t = h.useRef(e);
  return (
    ki(() => {
      t.current = e;
    }),
    t
  );
}
function XS(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [f, p] = h.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [d, x] = h.useState(r);
  rl(d, r) || x(r);
  const [b, g] = h.useState(null),
    [w, v] = h.useState(null),
    m = h.useCallback((E) => {
      E !== k.current && ((k.current = E), g(E));
    }, []),
    y = h.useCallback((E) => {
      E !== N.current && ((N.current = E), v(E));
    }, []),
    S = s || b,
    C = i || w,
    k = h.useRef(null),
    N = h.useRef(null),
    j = h.useRef(f),
    T = a != null,
    M = Aa(a),
    z = Aa(o),
    I = Aa(u),
    W = h.useCallback(() => {
      if (!k.current || !N.current) return;
      const E = { placement: t, strategy: n, middleware: d };
      z.current && (E.platform = z.current),
        GS(k.current, N.current, E).then((A) => {
          const $ = { ...A, isPositioned: I.current !== !1 };
          O.current &&
            !rl(j.current, $) &&
            ((j.current = $),
            wr.flushSync(() => {
              p($);
            }));
        });
    }, [d, t, n, z, I]);
  ki(() => {
    u === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), p((E) => ({ ...E, isPositioned: !1 })));
  }, [u]);
  const O = h.useRef(!1);
  ki(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    ki(() => {
      if ((S && (k.current = S), C && (N.current = C), S && C)) {
        if (M.current) return M.current(S, C, W);
        W();
      }
    }, [S, C, W, M, T]);
  const V = h.useMemo(
      () => ({ reference: k, floating: N, setReference: m, setFloating: y }),
      [m, y]
    ),
    F = h.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    H = h.useMemo(() => {
      const E = { position: n, left: 0, top: 0 };
      if (!F.floating) return E;
      const A = cp(F.floating, f.x),
        $ = cp(F.floating, f.y);
      return l
        ? {
            ...E,
            transform: "translate(" + A + "px, " + $ + "px)",
            ...(cv(F.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: $ };
    }, [n, l, F.floating, f.x, f.y]);
  return h.useMemo(
    () => ({ ...f, update: W, refs: V, elements: F, floatingStyles: H }),
    [f, W, V, F, H]
  );
}
const ZS = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ap({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ap({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  JS = (e, t) => ({ ...HS(e), options: [e, t] }),
  e2 = (e, t) => ({ ...VS(e), options: [e, t] }),
  t2 = (e, t) => ({ ...qS(e), options: [e, t] }),
  n2 = (e, t) => ({ ...KS(e), options: [e, t] }),
  r2 = (e, t) => ({ ...QS(e), options: [e, t] }),
  o2 = (e, t) => ({ ...YS(e), options: [e, t] }),
  s2 = (e, t) => ({ ...ZS(e), options: [e, t] });
var i2 = "Arrow",
  uv = h.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return c.jsx(ee.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
uv.displayName = i2;
var l2 = uv;
function a2(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = h.createContext(i),
      a = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: d, children: x, ...b } = p,
        g = (d == null ? void 0 : d[e][a]) || l,
        w = h.useMemo(() => b, Object.values(b));
      return c.jsx(g.Provider, { value: w, children: x });
    }
    function f(p, d) {
      const x = (d == null ? void 0 : d[e][a]) || l,
        b = h.useContext(x);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, f];
  }
  const o = () => {
    const s = n.map((i) => h.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, c2(o, ...t)];
}
function c2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function u2(e) {
  const [t, n] = h.useState(void 0);
  return (
    De(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const a = s.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (i = u.inlineSize), (l = u.blockSize);
          } else (i = e.offsetWidth), (l = e.offsetHeight);
          n({ width: i, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var hd = "Popper",
  [dv, zl] = a2(hd),
  [d2, fv] = dv(hd),
  pv = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = h.useState(null);
    return c.jsx(d2, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
pv.displayName = hd;
var hv = "PopperAnchor",
  mv = h.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = fv(hv, n),
      i = h.useRef(null),
      l = ce(t, i);
    return (
      h.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : c.jsx(ee.div, { ...o, ref: l })
    );
  });
mv.displayName = hv;
var md = "PopperContent",
  [f2, p2] = dv(md),
  gv = h.forwardRef((e, t) => {
    var B, re, be, te, se, ne;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: f = 0,
        sticky: p = "partial",
        hideWhenDetached: d = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: b,
        ...g
      } = e,
      w = fv(md, n),
      [v, m] = h.useState(null),
      y = ce(t, (He) => m(He)),
      [S, C] = h.useState(null),
      k = u2(S),
      N = (k == null ? void 0 : k.width) ?? 0,
      j = (k == null ? void 0 : k.height) ?? 0,
      T = r + (s !== "center" ? "-" + s : ""),
      M =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      z = Array.isArray(u) ? u : [u],
      I = z.length > 0,
      W = { padding: M, boundary: z.filter(m2), altBoundary: I },
      {
        refs: O,
        floatingStyles: V,
        placement: F,
        isPositioned: H,
        middlewareData: E,
      } = XS({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...He) =>
          WS(...He, { animationFrame: x === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          JS({ mainAxis: o + j, alignmentAxis: i }),
          a &&
            e2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? t2() : void 0,
              ...W,
            }),
          a && n2({ ...W }),
          r2({
            ...W,
            apply: ({
              elements: He,
              rects: nt,
              availableWidth: fn,
              availableHeight: ht,
            }) => {
              const { width: Xn, height: Gl } = nt.reference,
                _e = He.floating.style;
              _e.setProperty("--radix-popper-available-width", `${fn}px`),
                _e.setProperty("--radix-popper-available-height", `${ht}px`),
                _e.setProperty("--radix-popper-anchor-width", `${Xn}px`),
                _e.setProperty("--radix-popper-anchor-height", `${Gl}px`);
            },
          }),
          S && s2({ element: S, padding: l }),
          g2({ arrowWidth: N, arrowHeight: j }),
          d && o2({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [A, $] = xv(F),
      L = ke(b);
    De(() => {
      H && (L == null || L());
    }, [H, L]);
    const U = (B = E.arrow) == null ? void 0 : B.x,
      G = (re = E.arrow) == null ? void 0 : re.y,
      oe = ((be = E.arrow) == null ? void 0 : be.centerOffset) !== 0,
      [Re, Z] = h.useState();
    return (
      De(() => {
        v && Z(window.getComputedStyle(v).zIndex);
      }, [v]),
      c.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: H ? V.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Re,
          "--radix-popper-transform-origin": [
            (te = E.transformOrigin) == null ? void 0 : te.x,
            (se = E.transformOrigin) == null ? void 0 : se.y,
          ].join(" "),
          ...(((ne = E.hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(f2, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: U,
          arrowY: G,
          shouldHideArrow: oe,
          children: c.jsx(ee.div, {
            "data-side": A,
            "data-align": $,
            ...g,
            ref: y,
            style: { ...g.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
gv.displayName = md;
var vv = "PopperArrow",
  h2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  yv = h.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = p2(vv, r),
      i = h2[s.placedSide];
    return c.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(l2, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
yv.displayName = vv;
function m2(e) {
  return e !== null;
}
var g2 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, v, m;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      a = i ? 0 : e.arrowHeight,
      [u, f] = xv(n),
      p = { start: "0%", center: "50%", end: "100%" }[f],
      d = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + l / 2,
      x = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + a / 2;
    let b = "",
      g = "";
    return (
      u === "bottom"
        ? ((b = i ? p : `${d}px`), (g = `${-a}px`))
        : u === "top"
        ? ((b = i ? p : `${d}px`), (g = `${r.floating.height + a}px`))
        : u === "right"
        ? ((b = `${-a}px`), (g = i ? p : `${x}px`))
        : u === "left" &&
          ((b = `${r.floating.width + a}px`), (g = i ? p : `${x}px`)),
      { data: { x: b, y: g } }
    );
  },
});
function xv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var v2 = pv,
  wv = mv,
  bv = gv,
  Sv = yv,
  [Fl, pk] = Rl("Tooltip", [zl]),
  gd = zl(),
  Cv = "TooltipProvider",
  y2 = 700,
  up = "tooltip.open",
  [x2, Ev] = Fl(Cv),
  Nv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = y2,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      [i, l] = h.useState(!0),
      a = h.useRef(!1),
      u = h.useRef(0);
    return (
      h.useEffect(() => {
        const f = u.current;
        return () => window.clearTimeout(f);
      }, []),
      c.jsx(x2, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: h.useCallback(() => {
          window.clearTimeout(u.current), l(!1);
        }, []),
        onClose: h.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => l(!0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: h.useCallback((f) => {
          a.current = f;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
Nv.displayName = Cv;
var kv = "Tooltip",
  [hk, $l] = Fl(kv),
  Qc = "TooltipTrigger",
  w2 = h.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = $l(Qc, n),
      s = Ev(Qc, n),
      i = gd(n),
      l = h.useRef(null),
      a = ce(t, l, o.onTriggerChange),
      u = h.useRef(!1),
      f = h.useRef(!1),
      p = h.useCallback(() => (u.current = !1), []);
    return (
      h.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      c.jsx(wv, {
        asChild: !0,
        ...i,
        children: c.jsx(ee.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: K(e.onPointerMove, (d) => {
            d.pointerType !== "touch" &&
              !f.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (f.current = !0));
          }),
          onPointerLeave: K(e.onPointerLeave, () => {
            o.onTriggerLeave(), (f.current = !1);
          }),
          onPointerDown: K(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: K(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: K(e.onBlur, o.onClose),
          onClick: K(e.onClick, o.onClose),
        }),
      })
    );
  });
w2.displayName = Qc;
var b2 = "TooltipPortal",
  [mk, S2] = Fl(b2, { forceMount: void 0 }),
  xo = "TooltipContent",
  jv = h.forwardRef((e, t) => {
    const n = S2(xo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = $l(xo, e.__scopeTooltip);
    return c.jsx(br, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? c.jsx(Pv, { side: o, ...s, ref: t })
        : c.jsx(C2, { side: o, ...s, ref: t }),
    });
  }),
  C2 = h.forwardRef((e, t) => {
    const n = $l(xo, e.__scopeTooltip),
      r = Ev(xo, e.__scopeTooltip),
      o = h.useRef(null),
      s = ce(t, o),
      [i, l] = h.useState(null),
      { trigger: a, onClose: u } = n,
      f = o.current,
      { onPointerInTransitChange: p } = r,
      d = h.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      x = h.useCallback(
        (b, g) => {
          const w = b.currentTarget,
            v = { x: b.clientX, y: b.clientY },
            m = j2(v, w.getBoundingClientRect()),
            y = P2(v, m),
            S = T2(g.getBoundingClientRect()),
            C = A2([...y, ...S]);
          l(C), p(!0);
        },
        [p]
      );
    return (
      h.useEffect(() => () => d(), [d]),
      h.useEffect(() => {
        if (a && f) {
          const b = (w) => x(w, f),
            g = (w) => x(w, a);
          return (
            a.addEventListener("pointerleave", b),
            f.addEventListener("pointerleave", g),
            () => {
              a.removeEventListener("pointerleave", b),
                f.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [a, f, x, d]),
      h.useEffect(() => {
        if (i) {
          const b = (g) => {
            const w = g.target,
              v = { x: g.clientX, y: g.clientY },
              m =
                (a == null ? void 0 : a.contains(w)) ||
                (f == null ? void 0 : f.contains(w)),
              y = !R2(v, i);
            m ? d() : y && (d(), u());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [a, f, i, u, d]),
      c.jsx(Pv, { ...e, ref: s })
    );
  }),
  [E2, N2] = Fl(kv, { isInside: !1 }),
  Pv = h.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...l
      } = e,
      a = $l(xo, n),
      u = gd(n),
      { onClose: f } = a;
    return (
      h.useEffect(
        () => (
          document.addEventListener(up, f),
          () => document.removeEventListener(up, f)
        ),
        [f]
      ),
      h.useEffect(() => {
        if (a.trigger) {
          const p = (d) => {
            const x = d.target;
            x != null && x.contains(a.trigger) && f();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, f]),
      c.jsx(Al, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: c.jsxs(bv, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(pg, { children: r }),
            c.jsx(E2, {
              scope: n,
              isInside: !0,
              children: c.jsx(p1, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
jv.displayName = xo;
var Tv = "TooltipArrow",
  k2 = h.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = gd(n);
    return N2(Tv, n).isInside ? null : c.jsx(Sv, { ...o, ...r, ref: t });
  });
k2.displayName = Tv;
function j2(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function P2(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function T2(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function R2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s].x,
      a = t[s].y,
      u = t[i].x,
      f = t[i].y;
    a > r != f > r && n < ((u - l) * (r - a)) / (f - a) + l && (o = !o);
  }
  return o;
}
function A2(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    M2(t)
  );
}
function M2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var _2 = Nv,
  Rv = jv;
const O2 = _2,
  I2 = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(Rv, {
      ref: r,
      sideOffset: t,
      className: ue(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
I2.displayName = Rv.displayName;
var Ul = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Bl = typeof window > "u" || "Deno" in globalThis;
function jt() {}
function L2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function D2(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function z2(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function dp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function F2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== vd(i, t.options)) return !1;
    } else if (!bs(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function pp(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ws(t.options.mutationKey) !== ws(s)) return !1;
    } else if (!bs(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function vd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ws)(e);
}
function ws(e) {
  return JSON.stringify(e, (t, n) =>
    Yc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function bs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !bs(e[n], t[n]))
    : !1;
}
function Av(e, t) {
  if (e === t) return e;
  const n = hp(e) && hp(t);
  if (n || (Yc(e) && Yc(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      i = s.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < i; u++) {
      const f = n ? u : s[u];
      ((!n && r.includes(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((l[f] = void 0), a++)
        : ((l[f] = Av(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && a++);
    }
    return o === i && a === o ? e : l;
  }
  return t;
}
function hp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yc(e) {
  if (!mp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !mp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function mp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $2(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function U2(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Av(e, t)
    : t;
}
function B2(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function W2(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var yd = Symbol();
function Mv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === yd
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var rr,
  Cn,
  Jr,
  Up,
  H2 =
    ((Up = class extends Ul {
      constructor() {
        super();
        ie(this, rr);
        ie(this, Cn);
        ie(this, Jr);
        q(this, Jr, (t) => {
          if (!Bl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Cn) || this.setEventListener(P(this, Jr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Cn)) == null || t.call(this), q(this, Cn, void 0));
      }
      setEventListener(t) {
        var n;
        q(this, Jr, t),
          (n = P(this, Cn)) == null || n.call(this),
          q(
            this,
            Cn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, rr) !== t && (q(this, rr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, rr) == "boolean"
          ? P(this, rr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (rr = new WeakMap()),
    (Cn = new WeakMap()),
    (Jr = new WeakMap()),
    Up),
  _v = new H2(),
  eo,
  En,
  to,
  Bp,
  V2 =
    ((Bp = class extends Ul {
      constructor() {
        super();
        ie(this, eo, !0);
        ie(this, En);
        ie(this, to);
        q(this, to, (t) => {
          if (!Bl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, En) || this.setEventListener(P(this, to));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, En)) == null || t.call(this), q(this, En, void 0));
      }
      setEventListener(t) {
        var n;
        q(this, to, t),
          (n = P(this, En)) == null || n.call(this),
          q(this, En, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, eo) !== t &&
          (q(this, eo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, eo);
      }
    }),
    (eo = new WeakMap()),
    (En = new WeakMap()),
    (to = new WeakMap()),
    Bp),
  ol = new V2();
function K2() {
  let e, t;
  const n = new Promise((o, s) => {
    (e = o), (t = s);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Q2(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ov(e) {
  return (e ?? "online") === "online" ? ol.isOnline() : !0;
}
var Iv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ma(e) {
  return e instanceof Iv;
}
function Lv(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = K2(),
    i = (g) => {
      var w;
      r || (d(new Iv(g)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      _v.isFocused() &&
      (e.networkMode === "always" || ol.isOnline()) &&
      e.canRun(),
    f = () => Ov(e.networkMode) && e.canRun(),
    p = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        s.resolve(g));
    },
    d = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        s.reject(g));
    },
    x = () =>
      new Promise((g) => {
        var w;
        (o = (v) => {
          (r || u()) && g(v);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var g;
        (o = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    b = () => {
      if (r) return;
      let g;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        g = w ?? e.fn();
      } catch (v) {
        g = Promise.reject(v);
      }
      Promise.resolve(g)
        .then(p)
        .catch((v) => {
          var k;
          if (r) return;
          const m = e.retry ?? (Bl ? 0 : 3),
            y = e.retryDelay ?? Q2,
            S = typeof y == "function" ? y(n, v) : y,
            C =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, v));
          if (t || !C) {
            d(v);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, v),
            $2(S)
              .then(() => (u() ? void 0 : x()))
              .then(() => {
                t ? d(v) : b();
              });
        });
    };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: l,
    continueRetry: a,
    canStart: f,
    start: () => (f() ? b() : x().then(b), s),
  };
}
function Y2() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const s = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    i = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || i();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        s(() => {
          l(...a);
        });
      },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Qe = Y2(),
  or,
  Wp,
  Dv =
    ((Wp = class {
      constructor() {
        ie(this, or);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          D2(this.gcTime) &&
            q(
              this,
              or,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Bl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, or) && (clearTimeout(P(this, or)), q(this, or, void 0));
      }
    }),
    (or = new WeakMap()),
    Wp),
  no,
  ro,
  mt,
  Ue,
  Ns,
  sr,
  Pt,
  Xt,
  Hp,
  q2 =
    ((Hp = class extends Dv {
      constructor(t) {
        super();
        ie(this, Pt);
        ie(this, no);
        ie(this, ro);
        ie(this, mt);
        ie(this, Ue);
        ie(this, Ns);
        ie(this, sr);
        q(this, sr, !1),
          q(this, Ns, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          q(this, mt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          q(this, no, X2(this.options)),
          (this.state = t.state ?? P(this, no)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Ue)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, Ns), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, mt).remove(this);
      }
      setData(t, n) {
        const r = U2(this.state.data, t, this.options);
        return (
          ze(this, Pt, Xt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ze(this, Pt, Xt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, Ue)) == null ? void 0 : r.promise;
        return (
          (o = P(this, Ue)) == null || o.cancel(t),
          n ? n.then(jt).catch(jt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, no));
      }
      isActive() {
        return this.observers.some((t) => F2(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === yd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !z2(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ue)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ue)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, mt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Ue) &&
              (P(this, sr)
                ? P(this, Ue).cancel({ revert: !0 })
                : P(this, Ue).cancelRetry()),
            this.scheduleGc()),
          P(this, mt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ze(this, Pt, Xt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Ue))
            return P(this, Ue).continueRetry(), P(this, Ue).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((d) => d.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          o = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (q(this, sr, !0), r.signal),
            });
          },
          s = () => {
            const p = Mv(this.options, n),
              d = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(d),
              q(this, sr, !1),
              this.options.persister ? this.options.persister(p, d, this) : p(d)
            );
          },
          i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s,
          };
        o(i),
          (a = this.options.behavior) == null || a.onFetch(i, this),
          q(this, ro, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = i.fetchOptions) == null ? void 0 : u.meta)) &&
            ze(this, Pt, Xt).call(this, {
              type: "fetch",
              meta: (f = i.fetchOptions) == null ? void 0 : f.meta,
            });
        const l = (p) => {
          var d, x, b, g;
          (Ma(p) && p.silent) ||
            ze(this, Pt, Xt).call(this, { type: "error", error: p }),
            Ma(p) ||
              ((x = (d = P(this, mt).config).onError) == null ||
                x.call(d, p, this),
              (g = (b = P(this, mt).config).onSettled) == null ||
                g.call(b, this.state.data, p, this)),
            this.scheduleGc();
        };
        return (
          q(
            this,
            Ue,
            Lv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: i.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var d, x, b, g;
                if (p === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (w) {
                  l(w);
                  return;
                }
                (x = (d = P(this, mt).config).onSuccess) == null ||
                  x.call(d, p, this),
                  (g = (b = P(this, mt).config).onSettled) == null ||
                    g.call(b, p, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (p, d) => {
                ze(this, Pt, Xt).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: d,
                });
              },
              onPause: () => {
                ze(this, Pt, Xt).call(this, { type: "pause" });
              },
              onContinue: () => {
                ze(this, Pt, Xt).call(this, { type: "continue" });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, Ue).start()
        );
      }
    }),
    (no = new WeakMap()),
    (ro = new WeakMap()),
    (mt = new WeakMap()),
    (Ue = new WeakMap()),
    (Ns = new WeakMap()),
    (sr = new WeakMap()),
    (Pt = new WeakSet()),
    (Xt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...G2(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Ma(o) && o.revert && P(this, ro)
              ? { ...P(this, ro), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Qe.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, mt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Hp);
function G2(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ov(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function X2(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var $t,
  Vp,
  Z2 =
    ((Vp = class extends Ul {
      constructor(t = {}) {
        super();
        ie(this, $t);
        (this.config = t), q(this, $t, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? vd(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new q2({
              cache: this,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        P(this, $t).has(t.queryHash) ||
          (P(this, $t).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, $t).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, $t).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, $t).get(t);
      }
      getAll() {
        return [...P(this, $t).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => fp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => fp(t, r)) : n;
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    ($t = new WeakMap()),
    Vp),
  Ut,
  Ve,
  ir,
  Bt,
  vn,
  Kp,
  J2 =
    ((Kp = class extends Dv {
      constructor(t) {
        super();
        ie(this, Bt);
        ie(this, Ut);
        ie(this, Ve);
        ie(this, ir);
        (this.mutationId = t.mutationId),
          q(this, Ve, t.mutationCache),
          q(this, Ut, []),
          (this.state = t.state || eC()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Ut).includes(t) ||
          (P(this, Ut).push(t),
          this.clearGcTimeout(),
          P(this, Ve).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        q(
          this,
          Ut,
          P(this, Ut).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Ve).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, Ut).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ve).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, ir)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, i, l, a, u, f, p, d, x, b, g, w, v, m, y, S, C, k, N;
        q(
          this,
          ir,
          Lv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, T) => {
              ze(this, Bt, vn).call(this, {
                type: "failed",
                failureCount: j,
                error: T,
              });
            },
            onPause: () => {
              ze(this, Bt, vn).call(this, { type: "pause" });
            },
            onContinue: () => {
              ze(this, Bt, vn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ve).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !P(this, ir).canStart();
        try {
          if (!n) {
            ze(this, Bt, vn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((s = (o = P(this, Ve).config).onMutate) == null
                ? void 0
                : s.call(o, t, this));
            const T = await ((l = (i = this.options).onMutate) == null
              ? void 0
              : l.call(i, t));
            T !== this.state.context &&
              ze(this, Bt, vn).call(this, {
                type: "pending",
                context: T,
                variables: t,
                isPaused: r,
              });
          }
          const j = await P(this, ir).start();
          return (
            await ((u = (a = P(this, Ve).config).onSuccess) == null
              ? void 0
              : u.call(a, j, t, this.state.context, this)),
            await ((p = (f = this.options).onSuccess) == null
              ? void 0
              : p.call(f, j, t, this.state.context)),
            await ((x = (d = P(this, Ve).config).onSettled) == null
              ? void 0
              : x.call(
                  d,
                  j,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((g = (b = this.options).onSettled) == null
              ? void 0
              : g.call(b, j, null, t, this.state.context)),
            ze(this, Bt, vn).call(this, { type: "success", data: j }),
            j
          );
        } catch (j) {
          try {
            throw (
              (await ((v = (w = P(this, Ve).config).onError) == null
                ? void 0
                : v.call(w, j, t, this.state.context, this)),
              await ((y = (m = this.options).onError) == null
                ? void 0
                : y.call(m, j, t, this.state.context)),
              await ((C = (S = P(this, Ve).config).onSettled) == null
                ? void 0
                : C.call(
                    S,
                    void 0,
                    j,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((N = (k = this.options).onSettled) == null
                ? void 0
                : N.call(k, void 0, j, t, this.state.context)),
              j)
            );
          } finally {
            ze(this, Bt, vn).call(this, { type: "error", error: j });
          }
        } finally {
          P(this, Ve).runNext(this);
        }
      }
    }),
    (Ut = new WeakMap()),
    (Ve = new WeakMap()),
    (ir = new WeakMap()),
    (Bt = new WeakSet()),
    (vn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Qe.batch(() => {
          P(this, Ut).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ve).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Kp);
function eC() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var rt,
  ks,
  Qp,
  tC =
    ((Qp = class extends Ul {
      constructor(t = {}) {
        super();
        ie(this, rt);
        ie(this, ks);
        (this.config = t), q(this, rt, new Map()), q(this, ks, Date.now());
      }
      build(t, n, r) {
        const o = new J2({
          mutationCache: this,
          mutationId: ++Fs(this, ks)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = li(t),
          r = P(this, rt).get(n) ?? [];
        r.push(t),
          P(this, rt).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = li(t);
        if (P(this, rt).has(n)) {
          const o =
            (r = P(this, rt).get(n)) == null
              ? void 0
              : r.filter((s) => s !== t);
          o && (o.length === 0 ? P(this, rt).delete(n) : P(this, rt).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = P(this, rt).get(li(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = P(this, rt).get(li(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...P(this, rt).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => pp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => pp(t, n));
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Qe.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(jt)))
        );
      }
    }),
    (rt = new WeakMap()),
    (ks = new WeakMap()),
    Qp);
function li(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function gp(e) {
  return {
    onFetch: (t, n) => {
      var f, p, d, x, b;
      const r = t.options,
        o =
          (d =
            (p = (f = t.fetchOptions) == null ? void 0 : f.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : d.direction,
        s = ((x = t.state.data) == null ? void 0 : x.pages) || [],
        i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let g = !1;
        const w = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          v = Mv(t.options, t.fetchOptions),
          m = async (y, S, C) => {
            if (g) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const k = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(k);
            const N = await v(k),
              { maxPages: j } = t.options,
              T = C ? W2 : B2;
            return {
              pages: T(y.pages, N, j),
              pageParams: T(y.pageParams, S, j),
            };
          };
        if (o && s.length) {
          const y = o === "backward",
            S = y ? nC : vp,
            C = { pages: s, pageParams: i },
            k = S(r, C);
          l = await m(C, k, y);
        } else {
          const y = e ?? s.length;
          do {
            const S = a === 0 ? i[0] ?? r.initialPageParam : vp(r, l);
            if (a > 0 && S == null) break;
            (l = await m(l, S)), a++;
          } while (a < y);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, w;
            return (w = (g = t.options).persister) == null
              ? void 0
              : w.call(
                  g,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function vp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function nC(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Se,
  Nn,
  kn,
  oo,
  so,
  jn,
  io,
  lo,
  Yp,
  rC =
    ((Yp = class {
      constructor(e = {}) {
        ie(this, Se);
        ie(this, Nn);
        ie(this, kn);
        ie(this, oo);
        ie(this, so);
        ie(this, jn);
        ie(this, io);
        ie(this, lo);
        q(this, Se, e.queryCache || new Z2()),
          q(this, Nn, e.mutationCache || new tC()),
          q(this, kn, e.defaultOptions || {}),
          q(this, oo, new Map()),
          q(this, so, new Map()),
          q(this, jn, 0);
      }
      mount() {
        Fs(this, jn)._++,
          P(this, jn) === 1 &&
            (q(
              this,
              io,
              _v.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Se).onFocus());
              })
            ),
            q(
              this,
              lo,
              ol.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Se).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Fs(this, jn)._--,
          P(this, jn) === 0 &&
            ((e = P(this, io)) == null || e.call(this),
            q(this, io, void 0),
            (t = P(this, lo)) == null || t.call(this),
            q(this, lo, void 0));
      }
      isFetching(e) {
        return P(this, Se).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, Nn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Se).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = P(this, Se).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(dp(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return P(this, Se)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, Se).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = L2(t, s);
        if (i !== void 0)
          return P(this, Se)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Qe.batch(() =>
          P(this, Se)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Se).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, Se);
        Qe.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, Se),
          r = { type: "active", ...e };
        return Qe.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Qe.batch(() =>
            P(this, Se)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(jt).catch(jt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Qe.batch(() => {
          if (
            (P(this, Se)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Qe.batch(() =>
            P(this, Se)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(jt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(jt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Se).build(this, t);
        return n.isStaleByTime(dp(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(jt).catch(jt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = gp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jt).catch(jt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = gp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return ol.isOnline()
          ? P(this, Nn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Se);
      }
      getMutationCache() {
        return P(this, Nn);
      }
      getDefaultOptions() {
        return P(this, kn);
      }
      setDefaultOptions(e) {
        q(this, kn, e);
      }
      setQueryDefaults(e, t) {
        P(this, oo).set(ws(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, oo).values()];
        let n = {};
        return (
          t.forEach((r) => {
            bs(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, so).set(ws(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, so).values()];
        let n = {};
        return (
          t.forEach((r) => {
            bs(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, kn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = vd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === yd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, kn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, Se).clear(), P(this, Nn).clear();
      }
    }),
    (Se = new WeakMap()),
    (Nn = new WeakMap()),
    (kn = new WeakMap()),
    (oo = new WeakMap()),
    (so = new WeakMap()),
    (jn = new WeakMap()),
    (io = new WeakMap()),
    (lo = new WeakMap()),
    Yp),
  oC = h.createContext(void 0),
  sC = ({ client: e, children: t }) => (
    h.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(oC.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ss() {
  return (
    (Ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ss.apply(this, arguments)
  );
}
var Rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rn || (Rn = {}));
const yp = "popstate";
function iC(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return qc(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : sl(o);
  }
  return aC(t, n, null, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function lC() {
  return Math.random().toString(36).substr(2, 8);
}
function xp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ss(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jo(t) : t,
      { state: n, key: (t && t.key) || r || lC() }
    )
  );
}
function sl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function aC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Rn.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), i.replaceState(Ss({}, i.state, { idx: u }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    l = Rn.Pop;
    let w = f(),
      v = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: g.location, delta: v });
  }
  function d(w, v) {
    l = Rn.Push;
    let m = qc(g.location, w, v);
    u = f() + 1;
    let y = xp(m, u),
      S = g.createHref(m);
    try {
      i.pushState(y, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    s && a && a({ action: l, location: g.location, delta: 1 });
  }
  function x(w, v) {
    l = Rn.Replace;
    let m = qc(g.location, w, v);
    u = f();
    let y = xp(m, u),
      S = g.createHref(m);
    i.replaceState(y, "", S),
      s && a && a({ action: l, location: g.location, delta: 0 });
  }
  function b(w) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof w == "string" ? w : sl(w);
    return (
      (m = m.replace(/ $/, "%20")),
      je(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, v)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(yp, p),
        (a = w),
        () => {
          o.removeEventListener(yp, p), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: b,
    encodeLocation(w) {
      let v = b(w);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: d,
    replace: x,
    go(w) {
      return i.go(w);
    },
  };
  return g;
}
var wp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(wp || (wp = {}));
function cC(e, t, n) {
  return n === void 0 && (n = "/"), uC(e, t, n, !1);
}
function uC(e, t, n, r) {
  let o = typeof t == "string" ? jo(t) : t,
    s = xd(o.pathname || "/", n);
  if (s == null) return null;
  let i = Fv(e);
  dC(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = SC(s);
    l = wC(i[a], u, r);
  }
  return l;
}
function Fv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (je(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Fn([r, a.relativePath]),
      f = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (je(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Fv(s.children, t, f, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: yC(u, s.index), routesMeta: f });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of $v(s.path)) o(s, i, a);
    }),
    t
  );
}
function $v(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = $v(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function dC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : xC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const fC = /^:[\w-]+$/,
  pC = 3,
  hC = 2,
  mC = 1,
  gC = 10,
  vC = -2,
  bp = (e) => e === "*";
function yC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bp) && (r += vC),
    t && (r += hC),
    n
      .filter((o) => !bp(o))
      .reduce((o, s) => o + (fC.test(s) ? pC : s === "" ? mC : gC), r)
  );
}
function xC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wC(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      f = s === "/" ? t : t.slice(s.length) || "/",
      p = Sp(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        f
      ),
      d = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Sp(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          f
        )),
      !p)
    )
      return null;
    Object.assign(o, p.params),
      i.push({
        params: o,
        pathname: Fn([s, p.pathname]),
        pathnameBase: kC(Fn([s, p.pathnameBase])),
        route: d,
      }),
      p.pathnameBase !== "/" && (s = Fn([s, p.pathnameBase]));
  }
  return i;
}
function Sp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = bC(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, f, p) => {
      let { paramName: d, isOptional: x } = f;
      if (d === "*") {
        let g = l[p] || "";
        i = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const b = l[p];
      return (
        x && !b ? (u[d] = void 0) : (u[d] = (b || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function bC(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function SC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function xd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function CC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? jo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : EC(n, t)) : t,
    search: jC(r),
    hash: PC(o),
  };
}
function EC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _a(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function NC(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Uv(e, t) {
  let n = NC(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Bv(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = jo(e))
    : ((o = Ss({}, e)),
      je(
        !o.pathname || !o.pathname.includes("?"),
        _a("?", "pathname", "search", o)
      ),
      je(
        !o.pathname || !o.pathname.includes("#"),
        _a("#", "pathname", "hash", o)
      ),
      je(!o.search || !o.search.includes("#"), _a("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    l;
  if (i == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let d = i.split("/");
      for (; d[0] === ".."; ) d.shift(), (p -= 1);
      o.pathname = d.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = CC(o, l),
    u = i && i !== "/" && i.endsWith("/"),
    f = (s || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Fn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  kC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  PC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function TC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Wv = ["post", "put", "patch", "delete"];
new Set(Wv);
const RC = ["get", ...Wv];
new Set(RC);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cs() {
  return (
    (Cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cs.apply(this, arguments)
  );
}
const wd = h.createContext(null),
  AC = h.createContext(null),
  Sr = h.createContext(null),
  Wl = h.createContext(null),
  Cr = h.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Hv = h.createContext(null);
function MC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Os() || je(!1);
  let { basename: r, navigator: o } = h.useContext(Sr),
    { hash: s, pathname: i, search: l } = Kv(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Fn([r, i])),
    o.createHref({ pathname: a, search: l, hash: s })
  );
}
function Os() {
  return h.useContext(Wl) != null;
}
function Is() {
  return Os() || je(!1), h.useContext(Wl).location;
}
function Vv(e) {
  h.useContext(Sr).static || h.useLayoutEffect(e);
}
function _C() {
  let { isDataRoute: e } = h.useContext(Cr);
  return e ? KC() : OC();
}
function OC() {
  Os() || je(!1);
  let e = h.useContext(wd),
    { basename: t, future: n, navigator: r } = h.useContext(Sr),
    { matches: o } = h.useContext(Cr),
    { pathname: s } = Is(),
    i = JSON.stringify(Uv(o, n.v7_relativeSplatPath)),
    l = h.useRef(!1);
  return (
    Vv(() => {
      l.current = !0;
    }),
    h.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = Bv(u, JSON.parse(i), s, f.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Fn([t, p.pathname])),
          (f.replace ? r.replace : r.push)(p, f.state, f);
      },
      [t, r, i, s, e]
    )
  );
}
function Kv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = h.useContext(Sr),
    { matches: o } = h.useContext(Cr),
    { pathname: s } = Is(),
    i = JSON.stringify(Uv(o, r.v7_relativeSplatPath));
  return h.useMemo(() => Bv(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function IC(e, t) {
  return LC(e, t);
}
function LC(e, t, n, r) {
  Os() || je(!1);
  let { navigator: o } = h.useContext(Sr),
    { matches: s } = h.useContext(Cr),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Is(),
    f;
  if (t) {
    var p;
    let w = typeof t == "string" ? jo(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || je(!1),
      (f = w);
  } else f = u;
  let d = f.pathname || "/",
    x = d;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    x = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let b = cC(e, { pathname: x }),
    g = UC(
      b &&
        b.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Fn([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Fn([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && g
    ? h.createElement(
        Wl.Provider,
        {
          value: {
            location: Cs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: Rn.Pop,
          },
        },
        g
      )
    : g;
}
function DC() {
  let e = VC(),
    t = TC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return h.createElement(
    h.Fragment,
    null,
    h.createElement("h2", null, "Unexpected Application Error!"),
    h.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? h.createElement("pre", { style: o }, n) : null,
    null
  );
}
const zC = h.createElement(DC, null);
class FC extends h.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? h.createElement(
          Cr.Provider,
          { value: this.props.routeContext },
          h.createElement(Hv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function $C(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = h.useContext(wd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    h.createElement(Cr.Provider, { value: t }, r)
  );
}
function UC(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let f = i.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    );
    f >= 0 || je(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let p = i[f];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = f),
        p.route.id)
      ) {
        let { loaderData: d, errors: x } = n,
          b =
            p.route.loader &&
            d[p.route.id] === void 0 &&
            (!x || x[p.route.id] === void 0);
        if (p.route.lazy || b) {
          (a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, p, d) => {
    let x,
      b = !1,
      g = null,
      w = null;
    n &&
      ((x = l && p.route.id ? l[p.route.id] : void 0),
      (g = p.route.errorElement || zC),
      a &&
        (u < 0 && d === 0
          ? ((b = !0), (w = null))
          : u === d &&
            ((b = !0), (w = p.route.hydrateFallbackElement || null))));
    let v = t.concat(i.slice(0, d + 1)),
      m = () => {
        let y;
        return (
          x
            ? (y = g)
            : b
            ? (y = w)
            : p.route.Component
            ? (y = h.createElement(p.route.Component, null))
            : p.route.element
            ? (y = p.route.element)
            : (y = f),
          h.createElement($C, {
            match: p,
            routeContext: { outlet: f, matches: v, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || d === 0)
      ? h.createElement(FC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: m(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Qv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qv || {}),
  il = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(il || {});
function BC(e) {
  let t = h.useContext(wd);
  return t || je(!1), t;
}
function WC(e) {
  let t = h.useContext(AC);
  return t || je(!1), t;
}
function HC(e) {
  let t = h.useContext(Cr);
  return t || je(!1), t;
}
function Yv(e) {
  let t = HC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || je(!1), n.route.id;
}
function VC() {
  var e;
  let t = h.useContext(Hv),
    n = WC(il.UseRouteError),
    r = Yv(il.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function KC() {
  let { router: e } = BC(Qv.UseNavigateStable),
    t = Yv(il.UseNavigateStable),
    n = h.useRef(!1);
  return (
    Vv(() => {
      n.current = !0;
    }),
    h.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Cs({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function ji(e) {
  je(!1);
}
function QC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Rn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  Os() && je(!1);
  let a = t.replace(/^\/*/, "/"),
    u = h.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: Cs({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = jo(r));
  let {
      pathname: f = "/",
      search: p = "",
      hash: d = "",
      state: x = null,
      key: b = "default",
    } = r,
    g = h.useMemo(() => {
      let w = xd(f, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: d, state: x, key: b },
            navigationType: o,
          };
    }, [a, f, p, d, x, b, o]);
  return g == null
    ? null
    : h.createElement(
        Sr.Provider,
        { value: u },
        h.createElement(Wl.Provider, { children: n, value: g })
      );
}
function YC(e) {
  let { children: t, location: n } = e;
  return IC(Gc(t), n);
}
new Promise(() => {});
function Gc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    h.Children.forEach(e, (r, o) => {
      if (!h.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === h.Fragment) {
        n.push.apply(n, Gc(r.props.children, s));
        return;
      }
      r.type !== ji && je(!1), !r.props.index || !r.props.children || je(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Gc(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xc() {
  return (
    (Xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xc.apply(this, arguments)
  );
}
function qC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function GC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function XC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !GC(e);
}
const ZC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  JC = "6";
try {
  window.__reactRouterVersion = JC;
} catch {}
const eE = "startTransition",
  Cp = ih[eE];
function tE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = h.useRef();
  s.current == null && (s.current = iC({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = h.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = h.useCallback(
      (p) => {
        u && Cp ? Cp(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    h.useLayoutEffect(() => i.listen(f), [i, f]),
    h.createElement(QC, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const nE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  rE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ep = h.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: l,
        target: a,
        to: u,
        preventScrollReset: f,
        viewTransition: p,
      } = t,
      d = qC(t, ZC),
      { basename: x } = h.useContext(Sr),
      b,
      g = !1;
    if (typeof u == "string" && rE.test(u) && ((b = u), nE))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = xd(S.pathname, x);
        S.origin === y.origin && C != null
          ? (u = C + S.search + S.hash)
          : (g = !0);
      } catch {}
    let w = MC(u, { relative: o }),
      v = oE(u, {
        replace: i,
        state: l,
        target: a,
        preventScrollReset: f,
        relative: o,
        viewTransition: p,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || v(y);
    }
    return h.createElement(
      "a",
      Xc({}, d, { href: b || w, onClick: g || s ? r : m, ref: n, target: a })
    );
  });
var Np;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Np || (Np = {}));
var kp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(kp || (kp = {}));
function oE(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = _C(),
    u = Is(),
    f = Kv(e, { relative: i });
  return h.useCallback(
    (p) => {
      if (XC(p, n)) {
        p.preventDefault();
        let d = r !== void 0 ? r : sl(u) === sl(f);
        a(e, {
          replace: d,
          state: o,
          preventScrollReset: s,
          relative: i,
          viewTransition: l,
        });
      }
    },
    [u, a, f, r, o, n, e, s, i, l]
  );
}
const sE = Ol(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  at = h.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? go : "button";
      return c.jsx(i, {
        className: ue(sE({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
at.displayName = "Button";
const iE = () => {
    const [e, t] = h.useState(!1),
      n = () => {
        window.open("tel:+919576030821", "_self");
      },
      r = () => {
        window.open("https://wa.me/919576030821", "_blank");
      };
    return c.jsx("header", {
      className:
        "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-between h-14 lg:h-16",
            children: [
              c.jsx("div", {
                className: "flex items-center",
                children: c.jsx("div", {
                  className:
                    "text-lg lg:text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent",
                  children: "DD Enterprises",
                }),
              }),
              c.jsxs("nav", {
                className: "hidden md:flex items-center space-x-6 lg:space-x-8",
                children: [
                  c.jsx("a", {
                    href: "#home",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Home",
                  }),
                  c.jsx("a", {
                    href: "#collections",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Collections",
                  }),
                  c.jsx(Ep, {
                    to: "/catalogs",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Catalogs",
                  }),
                  c.jsx("a", {
                    href: "#bulk-inquiry",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Bulk Inquiry",
                  }),
                  c.jsx("a", {
                    href: "#about",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "About Us",
                  }),
                  c.jsx("a", {
                    href: "#contact",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Contact",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "hidden md:flex items-center space-x-2 lg:space-x-3",
                children: [
                  c.jsxs(at, {
                    variant: "outline",
                    size: "sm",
                    className:
                      "border-yellow-600 text-yellow-600 hover:bg-yellow-50 text-xs lg:text-sm px-2 lg:px-3",
                    onClick: n,
                    children: [
                      c.jsx(vo, { className: "w-3 h-3 lg:w-4 lg:h-4 mr-1" }),
                      "Call Now",
                    ],
                  }),
                  c.jsxs(at, {
                    size: "sm",
                    className:
                      "bg-yellow-600 hover:bg-yellow-700 text-xs lg:text-sm px-2 lg:px-3",
                    onClick: r,
                    children: [
                      c.jsx($c, { className: "w-3 h-3 lg:w-4 lg:h-4 mr-1" }),
                      "Enquire Now",
                    ],
                  }),
                ],
              }),
              c.jsx("button", {
                className: "md:hidden p-2",
                onClick: () => t(!e),
                children: e
                  ? c.jsx(Vg, { className: "w-5 h-5 lg:w-6 lg:h-6" })
                  : c.jsx(U1, { className: "w-5 h-5 lg:w-6 lg:h-6" }),
              }),
            ],
          }),
          e &&
            c.jsx("div", {
              className: "md:hidden py-4 border-t border-gray-100",
              children: c.jsxs("nav", {
                className: "flex flex-col space-y-3 lg:space-y-4",
                children: [
                  c.jsx("a", {
                    href: "#home",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Home",
                  }),
                  c.jsx("a", {
                    href: "#collections",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Collections",
                  }),
                  c.jsx(Ep, {
                    to: "/catalogs",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Catalogs",
                  }),
                  c.jsx("a", {
                    href: "#bulk-inquiry",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Bulk Inquiry",
                  }),
                  c.jsx("a", {
                    href: "#about",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "About Us",
                  }),
                  c.jsx("a", {
                    href: "#contact",
                    className:
                      "text-gray-700 hover:text-yellow-600 transition-colors text-sm lg:text-base",
                    children: "Contact",
                  }),
                  c.jsxs("div", {
                    className: "flex flex-col space-y-2 pt-3 lg:pt-4",
                    children: [
                      c.jsxs(at, {
                        variant: "outline",
                        size: "sm",
                        className:
                          "border-yellow-600 text-yellow-600 hover:bg-yellow-50 text-sm",
                        onClick: n,
                        children: [
                          c.jsx(vo, { className: "w-4 h-4 mr-1" }),
                          "Call Now",
                        ],
                      }),
                      c.jsxs(at, {
                        size: "sm",
                        className: "bg-yellow-600 hover:bg-yellow-700 text-sm",
                        onClick: r,
                        children: [
                          c.jsx($c, { className: "w-4 h-4 mr-1" }),
                          "Enquire Now",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  lE = () => {
    const e = () => {
      const t = document.getElementById("bulk-inquiry");
      t && t.scrollIntoView({ behavior: "smooth" });
    };
    return c.jsx("section", {
      id: "home",
      className:
        "relative bg-gradient-to-br from-yellow-50 to-orange-50 py-12 lg:py-20 xl:py-32",
      children: c.jsx("div", {
        className: "container mx-auto px-4",
        children: c.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
          children: [
            c.jsxs("div", {
              className: "space-y-4 lg:space-y-6",
              children: [
                c.jsxs("div", {
                  className:
                    "flex items-center space-x-2 text-xs lg:text-sm text-yellow-600 font-medium",
                  children: [
                    c.jsx(Wg, {
                      className: "w-3 h-3 lg:w-4 lg:h-4 fill-current",
                    }),
                    c.jsx("span", {
                      children: "India's Trusted Imitation Jewellery Brand",
                    }),
                  ],
                }),
                c.jsxs("h1", {
                  className:
                    "text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight",
                  children: [
                    "Trendy Imitation ",
                    c.jsx("br", {}),
                    c.jsx("span", {
                      className:
                        "bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent",
                      children: "Jewellery",
                    }),
                    c.jsx("br", {}),
                    "for the New India",
                  ],
                }),
                c.jsx("p", {
                  className:
                    "text-base lg:text-xl text-gray-600 leading-relaxed",
                  children:
                    "Discover stunning collection of men's and women's imitation jewellery. Perfect for millennials and Gen-Z. Bulk orders & retail inquiries welcome.",
                }),
                c.jsx("div", {
                  className: "flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2",
                  children: c.jsx(at, {
                    size: "lg",
                    variant: "outline",
                    className:
                      "border-yellow-600 text-yellow-600 hover:bg-yellow-50 text-sm lg:text-lg px-6 lg:px-8 h-10 lg:h-12",
                    onClick: e,
                    children: "Request Bulk Pricing",
                  }),
                }),
                c.jsxs("div", {
                  className:
                    "flex items-center justify-between sm:justify-start sm:space-x-8 pt-4 lg:pt-6",
                  children: [
                    c.jsxs("div", {
                      className: "text-center",
                      children: [
                        c.jsx("div", {
                          className:
                            "text-lg lg:text-2xl font-bold text-gray-900",
                          children: "1000+",
                        }),
                        c.jsx("div", {
                          className: "text-xs lg:text-sm text-gray-600",
                          children: "Happy Clients",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "text-center",
                      children: [
                        c.jsx("div", {
                          className:
                            "text-lg lg:text-2xl font-bold text-gray-900",
                          children: "500+",
                        }),
                        c.jsx("div", {
                          className: "text-xs lg:text-sm text-gray-600",
                          children: "Products",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "text-center",
                      children: [
                        c.jsx("div", {
                          className:
                            "text-lg lg:text-2xl font-bold text-gray-900",
                          children: "15+",
                        }),
                        c.jsx("div", {
                          className: "text-xs lg:text-sm text-gray-600",
                          children: "Cities",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "relative mt-8 lg:mt-0",
              children: [
                c.jsxs("div", {
                  className:
                    "relative z-10 bg-white rounded-2xl shadow-2xl p-4 lg:p-8",
                  children: [
                    c.jsx("img", {
                      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
                      alt: "Beautiful woman wearing trendy imitation jewellery",
                      className: "w-full h-64 lg:h-96 object-cover rounded-xl",
                    }),
                    c.jsx("div", {
                      className:
                        "absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-yellow-500 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-full font-semibold text-xs lg:text-sm",
                      children: "New Collection",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className:
                    "absolute -top-3 lg:-top-6 -left-3 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20",
                }),
                c.jsx("div", {
                  className:
                    "absolute -bottom-3 lg:-bottom-6 -right-3 lg:-right-6 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
var aE = h.createContext(void 0);
function qv(e) {
  const t = h.useContext(aE);
  return e || t || "ltr";
}
function Zc(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function cE(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var bd = "ScrollArea",
  [Gv, gk] = Rl(bd),
  [uE, St] = Gv(bd),
  Xv = h.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = "hover",
        dir: o,
        scrollHideDelay: s = 600,
        ...i
      } = e,
      [l, a] = h.useState(null),
      [u, f] = h.useState(null),
      [p, d] = h.useState(null),
      [x, b] = h.useState(null),
      [g, w] = h.useState(null),
      [v, m] = h.useState(0),
      [y, S] = h.useState(0),
      [C, k] = h.useState(!1),
      [N, j] = h.useState(!1),
      T = ce(t, (z) => a(z)),
      M = qv(o);
    return c.jsx(uE, {
      scope: n,
      type: r,
      dir: M,
      scrollHideDelay: s,
      scrollArea: l,
      viewport: u,
      onViewportChange: f,
      content: p,
      onContentChange: d,
      scrollbarX: x,
      onScrollbarXChange: b,
      scrollbarXEnabled: C,
      onScrollbarXEnabledChange: k,
      scrollbarY: g,
      onScrollbarYChange: w,
      scrollbarYEnabled: N,
      onScrollbarYEnabledChange: j,
      onCornerWidthChange: m,
      onCornerHeightChange: S,
      children: c.jsx(ee.div, {
        dir: M,
        ...i,
        ref: T,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": v + "px",
          "--radix-scroll-area-corner-height": y + "px",
          ...e.style,
        },
      }),
    });
  });
Xv.displayName = bd;
var Zv = "ScrollAreaViewport",
  Jv = h.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, asChild: o, nonce: s, ...i } = e,
      l = St(Zv, n),
      a = h.useRef(null),
      u = ce(t, a, l.onViewportChange);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`,
          },
          nonce: s,
        }),
        c.jsx(ee.div, {
          "data-radix-scroll-area-viewport": "",
          ...i,
          asChild: o,
          ref: u,
          style: {
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: wE({ asChild: o, children: r }, (f) =>
            c.jsx("div", {
              "data-radix-scroll-area-content": "",
              ref: l.onContentChange,
              style: { minWidth: l.scrollbarXEnabled ? "fit-content" : void 0 },
              children: f,
            })
          ),
        }),
      ],
    });
  });
Jv.displayName = Zv;
var qt = "ScrollAreaScrollbar",
  Sd = h.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = St(qt, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o,
      l = e.orientation === "horizontal";
    return (
      h.useEffect(
        () => (
          l ? s(!0) : i(!0),
          () => {
            l ? s(!1) : i(!1);
          }
        ),
        [l, s, i]
      ),
      o.type === "hover"
        ? c.jsx(dE, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? c.jsx(fE, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? c.jsx(e0, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? c.jsx(Cd, { ...r, ref: t })
        : null
    );
  });
Sd.displayName = qt;
var dE = h.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = St(qt, e.__scopeScrollArea),
      [s, i] = h.useState(!1);
    return (
      h.useEffect(() => {
        const l = o.scrollArea;
        let a = 0;
        if (l) {
          const u = () => {
              window.clearTimeout(a), i(!0);
            },
            f = () => {
              a = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            l.addEventListener("pointerenter", u),
            l.addEventListener("pointerleave", f),
            () => {
              window.clearTimeout(a),
                l.removeEventListener("pointerenter", u),
                l.removeEventListener("pointerleave", f);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      c.jsx(br, {
        present: n || s,
        children: c.jsx(e0, {
          "data-state": s ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  fE = h.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = St(qt, e.__scopeScrollArea),
      s = e.orientation === "horizontal",
      i = Vl(() => a("SCROLL_END"), 100),
      [l, a] = cE("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      h.useEffect(() => {
        if (l === "idle") {
          const u = window.setTimeout(() => a("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [l, o.scrollHideDelay, a]),
      h.useEffect(() => {
        const u = o.viewport,
          f = s ? "scrollLeft" : "scrollTop";
        if (u) {
          let p = u[f];
          const d = () => {
            const x = u[f];
            p !== x && (a("SCROLL"), i()), (p = x);
          };
          return (
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, s, a, i]),
      c.jsx(br, {
        present: n || l !== "hidden",
        children: c.jsx(Cd, {
          "data-state": l === "hidden" ? "hidden" : "visible",
          ...r,
          ref: t,
          onPointerEnter: K(e.onPointerEnter, () => a("POINTER_ENTER")),
          onPointerLeave: K(e.onPointerLeave, () => a("POINTER_LEAVE")),
        }),
      })
    );
  }),
  e0 = h.forwardRef((e, t) => {
    const n = St(qt, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [s, i] = h.useState(!1),
      l = e.orientation === "horizontal",
      a = Vl(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            f = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(l ? u : f);
        }
      }, 10);
    return (
      wo(n.viewport, a),
      wo(n.content, a),
      c.jsx(br, {
        present: r || s,
        children: c.jsx(Cd, {
          "data-state": s ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  Cd = h.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      o = St(qt, e.__scopeScrollArea),
      s = h.useRef(null),
      i = h.useRef(0),
      [l, a] = h.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = s0(l.viewport, l.content),
      f = {
        ...r,
        sizes: l,
        onSizesChange: a,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (d) => (s.current = d),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (d) => (i.current = d),
      };
    function p(d, x) {
      return yE(d, i.current, l, x);
    }
    return n === "horizontal"
      ? c.jsx(pE, {
          ...f,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && s.current) {
              const d = o.viewport.scrollLeft,
                x = jp(d, l, o.dir);
              s.current.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          },
          onWheelScroll: (d) => {
            o.viewport && (o.viewport.scrollLeft = d);
          },
          onDragScroll: (d) => {
            o.viewport && (o.viewport.scrollLeft = p(d, o.dir));
          },
        })
      : n === "vertical"
      ? c.jsx(hE, {
          ...f,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && s.current) {
              const d = o.viewport.scrollTop,
                x = jp(d, l);
              s.current.style.transform = `translate3d(0, ${x}px, 0)`;
            }
          },
          onWheelScroll: (d) => {
            o.viewport && (o.viewport.scrollTop = d);
          },
          onDragScroll: (d) => {
            o.viewport && (o.viewport.scrollTop = p(d));
          },
        })
      : null;
  }),
  pE = h.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      s = St(qt, e.__scopeScrollArea),
      [i, l] = h.useState(),
      a = h.useRef(null),
      u = ce(t, a, s.onScrollbarXChange);
    return (
      h.useEffect(() => {
        a.current && l(getComputedStyle(a.current));
      }, [a]),
      c.jsx(n0, {
        "data-orientation": "horizontal",
        ...o,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Hl(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
        onDragScroll: (f) => e.onDragScroll(f.x),
        onWheelScroll: (f, p) => {
          if (s.viewport) {
            const d = s.viewport.scrollLeft + f.deltaX;
            e.onWheelScroll(d), l0(d, p) && f.preventDefault();
          }
        },
        onResize: () => {
          a.current &&
            s.viewport &&
            i &&
            r({
              content: s.viewport.scrollWidth,
              viewport: s.viewport.offsetWidth,
              scrollbar: {
                size: a.current.clientWidth,
                paddingStart: al(i.paddingLeft),
                paddingEnd: al(i.paddingRight),
              },
            });
        },
      })
    );
  }),
  hE = h.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      s = St(qt, e.__scopeScrollArea),
      [i, l] = h.useState(),
      a = h.useRef(null),
      u = ce(t, a, s.onScrollbarYChange);
    return (
      h.useEffect(() => {
        a.current && l(getComputedStyle(a.current));
      }, [a]),
      c.jsx(n0, {
        "data-orientation": "vertical",
        ...o,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: s.dir === "ltr" ? 0 : void 0,
          left: s.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Hl(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
        onDragScroll: (f) => e.onDragScroll(f.y),
        onWheelScroll: (f, p) => {
          if (s.viewport) {
            const d = s.viewport.scrollTop + f.deltaY;
            e.onWheelScroll(d), l0(d, p) && f.preventDefault();
          }
        },
        onResize: () => {
          a.current &&
            s.viewport &&
            i &&
            r({
              content: s.viewport.scrollHeight,
              viewport: s.viewport.offsetHeight,
              scrollbar: {
                size: a.current.clientHeight,
                paddingStart: al(i.paddingTop),
                paddingEnd: al(i.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [mE, t0] = Gv(qt),
  n0 = h.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: s,
        onThumbPointerUp: i,
        onThumbPointerDown: l,
        onThumbPositionChange: a,
        onDragScroll: u,
        onWheelScroll: f,
        onResize: p,
        ...d
      } = e,
      x = St(qt, n),
      [b, g] = h.useState(null),
      w = ce(t, (T) => g(T)),
      v = h.useRef(null),
      m = h.useRef(""),
      y = x.viewport,
      S = r.content - r.viewport,
      C = ke(f),
      k = ke(a),
      N = Vl(p, 10);
    function j(T) {
      if (v.current) {
        const M = T.clientX - v.current.left,
          z = T.clientY - v.current.top;
        u({ x: M, y: z });
      }
    }
    return (
      h.useEffect(() => {
        const T = (M) => {
          const z = M.target;
          (b == null ? void 0 : b.contains(z)) && C(M, S);
        };
        return (
          document.addEventListener("wheel", T, { passive: !1 }),
          () => document.removeEventListener("wheel", T, { passive: !1 })
        );
      }, [y, b, S, C]),
      h.useEffect(k, [r, k]),
      wo(b, N),
      wo(x.content, N),
      c.jsx(mE, {
        scope: n,
        scrollbar: b,
        hasThumb: o,
        onThumbChange: ke(s),
        onThumbPointerUp: ke(i),
        onThumbPositionChange: k,
        onThumbPointerDown: ke(l),
        children: c.jsx(ee.div, {
          ...d,
          ref: w,
          style: { position: "absolute", ...d.style },
          onPointerDown: K(e.onPointerDown, (T) => {
            T.button === 0 &&
              (T.target.setPointerCapture(T.pointerId),
              (v.current = b.getBoundingClientRect()),
              (m.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              x.viewport && (x.viewport.style.scrollBehavior = "auto"),
              j(T));
          }),
          onPointerMove: K(e.onPointerMove, j),
          onPointerUp: K(e.onPointerUp, (T) => {
            const M = T.target;
            M.hasPointerCapture(T.pointerId) &&
              M.releasePointerCapture(T.pointerId),
              (document.body.style.webkitUserSelect = m.current),
              x.viewport && (x.viewport.style.scrollBehavior = ""),
              (v.current = null);
          }),
        }),
      })
    );
  }),
  ll = "ScrollAreaThumb",
  r0 = h.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = t0(ll, e.__scopeScrollArea);
    return c.jsx(br, {
      present: n || o.hasThumb,
      children: c.jsx(gE, { ref: t, ...r }),
    });
  }),
  gE = h.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      s = St(ll, n),
      i = t0(ll, n),
      { onThumbPositionChange: l } = i,
      a = ce(t, (p) => i.onThumbChange(p)),
      u = h.useRef(),
      f = Vl(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      h.useEffect(() => {
        const p = s.viewport;
        if (p) {
          const d = () => {
            if ((f(), !u.current)) {
              const x = xE(p, l);
              (u.current = x), l();
            }
          };
          return (
            l(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
          );
        }
      }, [s.viewport, f, l]),
      c.jsx(ee.div, {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r,
        },
        onPointerDownCapture: K(e.onPointerDownCapture, (p) => {
          const x = p.target.getBoundingClientRect(),
            b = p.clientX - x.left,
            g = p.clientY - x.top;
          i.onThumbPointerDown({ x: b, y: g });
        }),
        onPointerUp: K(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  });
r0.displayName = ll;
var Ed = "ScrollAreaCorner",
  o0 = h.forwardRef((e, t) => {
    const n = St(Ed, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? c.jsx(vE, { ...e, ref: t }) : null;
  });
o0.displayName = Ed;
var vE = h.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = St(Ed, n),
    [s, i] = h.useState(0),
    [l, a] = h.useState(0),
    u = !!(s && l);
  return (
    wo(o.scrollbarX, () => {
      var p;
      const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
      o.onCornerHeightChange(f), a(f);
    }),
    wo(o.scrollbarY, () => {
      var p;
      const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
      o.onCornerWidthChange(f), i(f);
    }),
    u
      ? c.jsx(ee.div, {
          ...r,
          ref: t,
          style: {
            width: s,
            height: l,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function al(e) {
  return e ? parseInt(e, 10) : 0;
}
function s0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Hl(e) {
  const t = s0(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function yE(e, t, n, r = "ltr") {
  const o = Hl(n),
    s = o / 2,
    i = t || s,
    l = o - i,
    a = n.scrollbar.paddingStart + i,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    f = n.content - n.viewport,
    p = r === "ltr" ? [0, f] : [f * -1, 0];
  return i0([a, u], p)(e);
}
function jp(e, t, n = "ltr") {
  const r = Hl(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    l = s - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    u = Zc(e, a);
  return i0([0, i], [0, l])(u);
}
function i0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function l0(e, t) {
  return e > 0 && e < t;
}
var xE = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const s = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== s.left,
        l = n.top !== s.top;
      (i || l) && t(), (n = s), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function Vl(e, t) {
  const n = ke(e),
    r = h.useRef(0);
  return (
    h.useEffect(() => () => window.clearTimeout(r.current), []),
    h.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function wo(e, t) {
  const n = ke(t);
  De(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function wE(e, t) {
  const { asChild: n, children: r } = e;
  if (!n) return typeof t == "function" ? t(r) : t;
  const o = h.Children.only(r);
  return h.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t,
  });
}
var a0 = Xv,
  bE = Jv,
  SE = o0;
const cl = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(a0, {
    ref: r,
    className: ue("relative overflow-hidden", e),
    ...n,
    children: [
      c.jsx(bE, { className: "h-full w-full rounded-[inherit]", children: t }),
      c.jsx(Es, {}),
      c.jsx(SE, {}),
    ],
  })
);
cl.displayName = a0.displayName;
const Es = h.forwardRef(
  ({ className: e, orientation: t = "vertical", ...n }, r) =>
    c.jsx(Sd, {
      ref: r,
      orientation: t,
      className: ue(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e
      ),
      ...n,
      children: c.jsx(r0, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    })
);
Es.displayName = Sd.displayName;
const CE = () => {
    const e = [
        {
          name: "Earrings",
          image: "/women/earrings.jpg",
          trend: "Elegant",
        },
        {
          name: "Necklace Set",
          image: "/women/necklace-set.jpg",
          trend: "Traditional",
        },
        {
          name: "Pendants",
          image: "/women/pendants.jpg",
          trend: "Sparkling",
        },
        {
          name: "Rings",
          image: "/women/rings.jpg",
          trend: "Festive",
        },
        {
          name: "Party & Wedding Collections",
          image: "/women/party-and-wedding-collection.jpg",
          trend: "Religious",
        },
        {
          name: "Bracelets & Bangles",
          image: "/women/bracelets-bangles.jpg",
          trend: "Bridal",
        },
        {
          name: "Anklets",
          image: "/women/anklet.jpg",
          trend: "Vintage",
        },
        // {
        //   name: "Jhumka Earrings",
        //   image:
        //     "/women/earrings.jpg",
        //   trend: "Classic",
        // },
      ],
      t = [
        {
          name: "Rings",
          image: "/men/ring.png",
          trend: "Traditional",
        },
        {
          name: "Chains & Pendants",
          image: "/men/Pendants.png",
          trend: "Modern",
        },
        {
          name: "Bracelets",
          image: "/men/Bracelets.png",
          trend: "Statement",
        },
        {
          name: "Cuffs",
          image: "/men/Cufflinks.png",
          trend: "Spiritual",
        },
        {
          name: "Earrings",
          image: "/men/earring.png",
          trend: "Sacred",
        },
      ],
      n = ({ category: r }) =>
        c.jsxs("div", {
          className:
            "group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-64",
          children: [
            c.jsx("div", {
              className: "aspect-square overflow-hidden",
              children: c.jsx("img", {
                src: r.image,
                alt: r.name,
                className:
                  "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
              }),
            }),
            c.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
            }),
            c.jsx("div", {
              className: "absolute bottom-0 left-0 right-0 p-4 text-white",
              children: c.jsx("div", {
                className: "flex items-center justify-between",
                children: c.jsxs("div", {
                  children: [
                    c.jsx("h3", {
                      className: "text-xl font-bold mb-1",
                      children: r.name,
                    }),
                    c.jsx("span", {
                      className: "text-sm bg-yellow-500 px-2 py-1 rounded-full",
                      children: r.trend,
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
    return c.jsx("section", {
      id: "collections",
      className: "py-12 bg-gray-50",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-4xl lg:text-5xl font-bold mb-4",
                children: [
                  "Featured ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "Collections",
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Discover our trending imitation jewellery collections designed for modern India",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "mb-16",
            children: [
              c.jsx("div", {
                className: "mb-8",
                children: c.jsx("h3", {
                  className: "text-3xl font-bold text-gray-900 mb-4",
                  children: "Women's Collection",
                }),
              }),
              c.jsxs(cl, {
                className: "w-full whitespace-nowrap",
                children: [
                  c.jsx("div", {
                    className: "flex space-x-6 pb-4",
                    children: e.map((r, o) =>
                      c.jsx(n, { category: r }, r.name)
                    ),
                  }),
                  c.jsx(Es, { orientation: "horizontal" }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("div", {
                className: "mb-8",
                children: c.jsx("h3", {
                  className: "text-3xl font-bold text-gray-900 mb-4",
                  children: "Men's Collection",
                }),
              }),
              c.jsxs(cl, {
                className: "w-full whitespace-nowrap",
                children: [
                  c.jsx("div", {
                    className: "flex space-x-6 pb-4",
                    children: t.map((r, o) =>
                      c.jsx(n, { category: r }, r.name)
                    ),
                  }),
                  c.jsx(Es, { orientation: "horizontal" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  EE = () => {
    const e = [
      {
        icon: Fc,
        year: "2025",
        title: "Company Founded",
        description:
          "Started with a vision to make trendy jewellery accessible",
      },
      {
        icon: Hg,
        year: "1000+",
        title: "Happy Clients",
        description: "Retailers and individuals trust our quality",
      },
      {
        icon: I1,
        year: "15+",
        title: "Cities Covered",
        description: "Expanding our reach across India",
      },
      {
        icon: V1,
        year: "100%",
        title: "Customer Satisfaction",
        description: "Committed to quality and service excellence",
      },
    ];
    return c.jsx("section", {
      id: "about",
      className: "py-12 lg:py-12 bg-gradient-to-br from-gray-50 to-white",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12 lg:mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-3xl lg:text-4xl xl:text-5xl font-bold mb-4",
                children: [
                  "About ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "DD Enterprises",
                  }),
                ],
              }),
              c.jsx("p", {
                className:
                  "text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children:
                  "We're passionate about bringing the latest trends in imitation jewellery to young India. From college-goers to working professionals, we understand the need for affordable, stylish accessories that make you stand out.",
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:mb-16",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("h3", {
                    className:
                      "text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-900",
                    children: "Our Story",
                  }),
                  c.jsxs("div", {
                    className:
                      "text-lg space-y-3 lg:space-y-4 text-gray-600 leading-relaxed lg:text-xl",
                    children: [
                      c.jsx("p", {
                        children:
                          "Founded in 2025, DD Enterprises emerged from a simple observation: young Indians deserve access to trendy, quality imitation jewellery that doesn't break the bank.",
                      }),
                      c.jsx("p", {
                        children:
                          "We started by understanding what Gen-Z and millennials really want - pieces that complement their lifestyle, from casual college wear to professional settings, from festive occasions to weekend hangouts.",
                      }),
                      c.jsx("p", {
                        children:
                          "Today, we're proud to serve both individual customers and retail partners across India, maintaining our commitment to quality, affordability, and the latest trends.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100",
                children: [
                  c.jsx("h3", {
                    className:
                      "text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-900",
                    children: "Our Mission",
                  }),
                  c.jsxs("div", {
                    className: "space-y-3 lg:space-y-4",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-2 h-2 bg-yellow-500 rounded-full mt-2",
                          }),
                          c.jsx("p", {
                            className: "text-lg text-gray-600 lg:text-xl",
                            children:
                              "Make trendy jewellery accessible to every young Indian",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-2 h-2 bg-yellow-500 rounded-full mt-2",
                          }),
                          c.jsx("p", {
                            className: "text-lg text-gray-600 lg:text-xl",
                            children:
                              "Support small retailers with quality products and low MOQs",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-2 h-2 bg-yellow-500 rounded-full mt-2",
                          }),
                          c.jsx("p", {
                            className: "text-lg text-gray-600 lg:text-xl",
                            children:
                              "Stay ahead of fashion trends and customer preferences",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-2 h-2 bg-yellow-500 rounded-full mt-2",
                          }),
                          c.jsx("p", {
                            className: "text-lg text-gray-600 lg:text-xl",
                            children:
                              "Build lasting relationships through exceptional service",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8",
            children: e.map((t, n) =>
              c.jsxs(
                "div",
                {
                  className: "text-center group",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300",
                      children: c.jsx(t.icon, {
                        className: "w-8 h-8 lg:w-10 lg:h-10 text-white",
                      }),
                    }),
                    c.jsx("div", {
                      className:
                        "text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 lg:mb-2",
                      children: t.year,
                    }),
                    c.jsx("h4", {
                      className:
                        "text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-gray-900",
                      children: t.title,
                    }),
                    c.jsx("p", {
                      className: "text-gray-600 text-sm lg:text-sm",
                      children: t.description,
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  NE = () => {
    const e = [
      {
        icon: Hg,
        title: "1000+ Retail Clients",
        description: "Trusted by retailers across India",
      },
      {
        icon: K1,
        title: "Trending Gen-Z Styles",
        description: "Latest fashion-forward designs",
      },
      {
        icon: B1,
        title: "Low MOQ Available",
        description: "Start with small quantities",
      },
      {
        icon: Q1,
        title: "Pan-India Shipping",
        description: "Deliver anywhere in India",
      },
      {
        icon: es,
        title: "GST & Udyam Registered",
        description: "Fully compliant business",
      },
      {
        icon: sd,
        title: "15+ Cities Covered",
        description: "Growing network nationwide",
      },
    ];
    return c.jsx("section", {
      className: "py-12 bg-white",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-4xl lg:text-5xl font-bold mb-4",
                children: [
                  "Why Choose ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "DD Enterprises",
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Your trusted partner for quality imitation jewellery with nationwide reach",
              }),
            ],
          }),
          c.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: e.map((t, n) =>
              c.jsx(
                "div",
                {
                  className:
                    "group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300",
                  children: c.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                        children: c.jsx(t.icon, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      c.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: t.title,
                      }),
                      c.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: t.description,
                      }),
                    ],
                  }),
                },
                n
              )
            ),
          }),
          c.jsx("div", {
            className: "mt-16 text-center",
            children: c.jsxs("div", {
              className:
                "inline-flex items-center space-x-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl",
              children: [
                c.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    c.jsx(es, { className: "w-6 h-6 text-yellow-600" }),
                    c.jsx("span", {
                      className: "font-semibold text-gray-900",
                      children: "GST: 07XXXXX1234X1Z5",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    c.jsx(es, { className: "w-6 h-6 text-yellow-600" }),
                    c.jsx("span", {
                      className: "font-semibold text-gray-900",
                      children: "Udyam Certified",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Ar = h.forwardRef(({ className: e, type: t, ...n }, r) =>
    c.jsx("input", {
      type: t,
      className: ue(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n,
    })
  );
Ar.displayName = "Input";
var kE = "Label",
  c0 = h.forwardRef((e, t) =>
    c.jsx(ee.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
c0.displayName = kE;
var u0 = c0;
const jE = Ol(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Zt = h.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(u0, { ref: n, className: ue(jE(), e), ...t })
  );
Zt.displayName = u0.displayName;
const d0 = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("textarea", {
    className: ue(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
d0.displayName = "Textarea";
var Oa = 0;
function PE() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Pp()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Pp()),
      Oa++,
      () => {
        Oa === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Oa--;
      }
    );
  }, []);
}
function Pp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Ia = "focusScope.autoFocusOnMount",
  La = "focusScope.autoFocusOnUnmount",
  Tp = { bubbles: !1, cancelable: !0 },
  TE = "FocusScope",
  f0 = h.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [l, a] = h.useState(null),
      u = ke(o),
      f = ke(s),
      p = h.useRef(null),
      d = ce(t, (g) => a(g)),
      x = h.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    h.useEffect(() => {
      if (r) {
        let g = function (y) {
            if (x.paused || !l) return;
            const S = y.target;
            l.contains(S) ? (p.current = S) : yn(p.current, { select: !0 });
          },
          w = function (y) {
            if (x.paused || !l) return;
            const S = y.relatedTarget;
            S !== null && (l.contains(S) || yn(p.current, { select: !0 }));
          },
          v = function (y) {
            if (document.activeElement === document.body)
              for (const C of y) C.removedNodes.length > 0 && yn(l);
          };
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", w);
        const m = new MutationObserver(v);
        return (
          l && m.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", w),
              m.disconnect();
          }
        );
      }
    }, [r, l, x.paused]),
      h.useEffect(() => {
        if (l) {
          Ap.add(x);
          const g = document.activeElement;
          if (!l.contains(g)) {
            const v = new CustomEvent(Ia, Tp);
            l.addEventListener(Ia, u),
              l.dispatchEvent(v),
              v.defaultPrevented ||
                (RE(IE(p0(l)), { select: !0 }),
                document.activeElement === g && yn(l));
          }
          return () => {
            l.removeEventListener(Ia, u),
              setTimeout(() => {
                const v = new CustomEvent(La, Tp);
                l.addEventListener(La, f),
                  l.dispatchEvent(v),
                  v.defaultPrevented || yn(g ?? document.body, { select: !0 }),
                  l.removeEventListener(La, f),
                  Ap.remove(x);
              }, 0);
          };
        }
      }, [l, u, f, x]);
    const b = h.useCallback(
      (g) => {
        if ((!n && !r) || x.paused) return;
        const w = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          v = document.activeElement;
        if (w && v) {
          const m = g.currentTarget,
            [y, S] = AE(m);
          y && S
            ? !g.shiftKey && v === S
              ? (g.preventDefault(), n && yn(y, { select: !0 }))
              : g.shiftKey &&
                v === y &&
                (g.preventDefault(), n && yn(S, { select: !0 }))
            : v === m && g.preventDefault();
        }
      },
      [n, r, x.paused]
    );
    return c.jsx(ee.div, { tabIndex: -1, ...i, ref: d, onKeyDown: b });
  });
f0.displayName = TE;
function RE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((yn(r, { select: t }), document.activeElement !== n)) return;
}
function AE(e) {
  const t = p0(e),
    n = Rp(t, e),
    r = Rp(t.reverse(), e);
  return [n, r];
}
function p0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Rp(e, t) {
  for (const n of e) if (!ME(n, { upTo: t })) return n;
}
function ME(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function _E(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && _E(e) && t && e.select();
  }
}
var Ap = OE();
function OE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Mp(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Mp(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Mp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function IE(e) {
  return e.filter((t) => t.tagName !== "A");
}
function LE(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var DE = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Pr = new WeakMap(),
  ai = new WeakMap(),
  ci = {},
  Da = 0,
  h0 = function (e) {
    return e && (e.host || h0(e.parentNode));
  },
  zE = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = h0(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  FE = function (e, t, n, r) {
    var o = zE(t, Array.isArray(e) ? e : [e]);
    ci[n] || (ci[n] = new WeakMap());
    var s = ci[n],
      i = [],
      l = new Set(),
      a = new Set(o),
      u = function (p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var f = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (d) {
          if (l.has(d)) f(d);
          else
            try {
              var x = d.getAttribute(r),
                b = x !== null && x !== "false",
                g = (Pr.get(d) || 0) + 1,
                w = (s.get(d) || 0) + 1;
              Pr.set(d, g),
                s.set(d, w),
                i.push(d),
                g === 1 && b && ai.set(d, !0),
                w === 1 && d.setAttribute(n, "true"),
                b || d.setAttribute(r, "true");
            } catch (v) {
              console.error("aria-hidden: cannot operate on ", d, v);
            }
        });
    };
    return (
      f(t),
      l.clear(),
      Da++,
      function () {
        i.forEach(function (p) {
          var d = Pr.get(p) - 1,
            x = s.get(p) - 1;
          Pr.set(p, d),
            s.set(p, x),
            d || (ai.has(p) || p.removeAttribute(r), ai.delete(p)),
            x || p.removeAttribute(n);
        }),
          Da--,
          Da ||
            ((Pr = new WeakMap()),
            (Pr = new WeakMap()),
            (ai = new WeakMap()),
            (ci = {}));
      }
    );
  },
  $E = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = DE(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        FE(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ht = function () {
    return (
      (Ht =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      Ht.apply(this, arguments)
    );
  };
function m0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function UE(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pi = "right-scroll-bar-position",
  Ti = "width-before-scroll-bar",
  BE = "with-scroll-bars-hidden",
  WE = "--removed-body-scroll-bar-size";
function za(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function HE(e, t) {
  var n = h.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var VE = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
  _p = new WeakMap();
function KE(e, t) {
  var n = HE(null, function (r) {
    return e.forEach(function (o) {
      return za(o, r);
    });
  });
  return (
    VE(
      function () {
        var r = _p.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || za(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || za(l, i);
            });
        }
        _p.set(n, e);
      },
      [e]
    ),
    n
  );
}
function QE(e) {
  return e;
}
function YE(e, t) {
  t === void 0 && (t = QE);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (l) {
              return l !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(s), (i = n);
        }
        var a = function () {
            var f = i;
            (i = []), f.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (f) {
              i.push(f), u();
            },
            filter: function (f) {
              return (i = i.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function qE(e) {
  e === void 0 && (e = {});
  var t = YE(null);
  return (t.options = Ht({ async: !0, ssr: !1 }, e)), t;
}
var g0 = function (e) {
  var t = e.sideCar,
    n = m0(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return h.createElement(r, Ht({}, n));
};
g0.isSideCarExport = !0;
function GE(e, t) {
  return e.useMedium(t), g0;
}
var v0 = qE(),
  Fa = function () {},
  Kl = h.forwardRef(function (e, t) {
    var n = h.useRef(null),
      r = h.useState({
        onScrollCapture: Fa,
        onWheelCapture: Fa,
        onTouchMoveCapture: Fa,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      d = e.sideCar,
      x = e.noIsolation,
      b = e.inert,
      g = e.allowPinchZoom,
      w = e.as,
      v = w === void 0 ? "div" : w,
      m = e.gapMode,
      y = m0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = d,
      C = KE([n, t]),
      k = Ht(Ht({}, y), o);
    return h.createElement(
      h.Fragment,
      null,
      f &&
        h.createElement(S, {
          sideCar: v0,
          removeScrollBar: u,
          shards: p,
          noIsolation: x,
          inert: b,
          setCallbacks: s,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: m,
        }),
      i
        ? h.cloneElement(h.Children.only(l), Ht(Ht({}, k), { ref: C }))
        : h.createElement(v, Ht({}, k, { className: a, ref: C }), l)
    );
  });
Kl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Kl.classNames = { fullWidth: Ti, zeroRight: Pi };
var XE = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ZE() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = XE();
  return t && e.setAttribute("nonce", t), e;
}
function JE(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function eN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var tN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = ZE()) && (JE(t, n), eN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  nN = function () {
    var e = tN();
    return function (t, n) {
      h.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  y0 = function () {
    var e = nN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  rN = { left: 0, top: 0, right: 0, gap: 0 },
  $a = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  oN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [$a(n), $a(r), $a(o)];
  },
  sN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return rN;
    var t = oN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  iN = y0(),
  Zr = "data-scroll-locked",
  lN = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          BE,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Zr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Pi,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ti,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Pi, " .")
        .concat(
          Pi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ti, " .")
        .concat(
          Ti,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Zr,
          `] {
    `
        )
        .concat(WE, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Op = function () {
    var e = parseInt(document.body.getAttribute(Zr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  aN = function () {
    h.useEffect(function () {
      return (
        document.body.setAttribute(Zr, (Op() + 1).toString()),
        function () {
          var e = Op() - 1;
          e <= 0
            ? document.body.removeAttribute(Zr)
            : document.body.setAttribute(Zr, e.toString());
        }
      );
    }, []);
  },
  cN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    aN();
    var s = h.useMemo(
      function () {
        return sN(o);
      },
      [o]
    );
    return h.createElement(iN, { styles: lN(s, !t, o, n ? "" : "!important") });
  },
  Jc = !1;
if (typeof window < "u")
  try {
    var ui = Object.defineProperty({}, "passive", {
      get: function () {
        return (Jc = !0), !0;
      },
    });
    window.addEventListener("test", ui, ui),
      window.removeEventListener("test", ui, ui);
  } catch {
    Jc = !1;
  }
var Tr = Jc ? { passive: !1 } : !1,
  uN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  x0 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !uN(e) && n[t] === "visible")
    );
  },
  dN = function (e) {
    return x0(e, "overflowY");
  },
  fN = function (e) {
    return x0(e, "overflowX");
  },
  Ip = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = w0(e, r);
      if (o) {
        var s = b0(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  pN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  hN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  w0 = function (e, t) {
    return e === "v" ? dN(t) : fN(t);
  },
  b0 = function (e, t) {
    return e === "v" ? pN(t) : hN(t);
  },
  mN = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  gN = function (e, t, n, r, o) {
    var s = mN(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      f = i > 0,
      p = 0,
      d = 0;
    do {
      var x = b0(e, l),
        b = x[0],
        g = x[1],
        w = x[2],
        v = g - w - s * b;
      (b || v) && w0(e, l) && ((p += v), (d += b)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((f && (Math.abs(p) < 1 || !o)) || (!f && (Math.abs(d) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  di = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Lp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Dp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  vN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  yN = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  xN = 0,
  Rr = [];
function wN(e) {
  var t = h.useRef([]),
    n = h.useRef([0, 0]),
    r = h.useRef(),
    o = h.useState(xN++)[0],
    s = h.useState(y0)[0],
    i = h.useRef(e);
  h.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    h.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = UE([e.lockRef.current], (e.shards || []).map(Dp), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = h.useCallback(function (g, w) {
      if (
        ("touches" in g && g.touches.length === 2) ||
        (g.type === "wheel" && g.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var v = di(g),
        m = n.current,
        y = "deltaX" in g ? g.deltaX : m[0] - v[0],
        S = "deltaY" in g ? g.deltaY : m[1] - v[1],
        C,
        k = g.target,
        N = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in g && N === "h" && k.type === "range") return !1;
      var j = Ip(N, k);
      if (!j) return !0;
      if ((j ? (C = N) : ((C = N === "v" ? "h" : "v"), (j = Ip(N, k))), !j))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (y || S) && (r.current = C), !C)
      )
        return !0;
      var T = r.current || C;
      return gN(T, w, g, T === "h" ? y : S, !0);
    }, []),
    a = h.useCallback(function (g) {
      var w = g;
      if (!(!Rr.length || Rr[Rr.length - 1] !== s)) {
        var v = "deltaY" in w ? Lp(w) : di(w),
          m = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              vN(C.delta, v)
            );
          })[0];
        if (m && m.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!m) {
          var y = (i.current.shards || [])
              .map(Dp)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            S = y.length > 0 ? l(w, y[0]) : !i.current.noIsolation;
          S && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = h.useCallback(function (g, w, v, m) {
      var y = { name: g, delta: w, target: v, should: m, shadowParent: bN(v) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []),
    f = h.useCallback(function (g) {
      (n.current = di(g)), (r.current = void 0);
    }, []),
    p = h.useCallback(function (g) {
      u(g.type, Lp(g), g.target, l(g, e.lockRef.current));
    }, []),
    d = h.useCallback(function (g) {
      u(g.type, di(g), g.target, l(g, e.lockRef.current));
    }, []);
  h.useEffect(function () {
    return (
      Rr.push(s),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", a, Tr),
      document.addEventListener("touchmove", a, Tr),
      document.addEventListener("touchstart", f, Tr),
      function () {
        (Rr = Rr.filter(function (g) {
          return g !== s;
        })),
          document.removeEventListener("wheel", a, Tr),
          document.removeEventListener("touchmove", a, Tr),
          document.removeEventListener("touchstart", f, Tr);
      }
    );
  }, []);
  var x = e.removeScrollBar,
    b = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    b ? h.createElement(s, { styles: yN(o) }) : null,
    x ? h.createElement(cN, { gapMode: e.gapMode }) : null
  );
}
function bN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const SN = GE(v0, wN);
var S0 = h.forwardRef(function (e, t) {
  return h.createElement(Kl, Ht({}, e, { ref: t, sideCar: SN }));
});
S0.classNames = Kl.classNames;
var CN = [" ", "Enter", "ArrowUp", "ArrowDown"],
  EN = [" ", "Enter"],
  Ls = "Select",
  [Ql, Yl, NN] = hg(Ls),
  [Po, vk] = Rl(Ls, [NN, zl]),
  ql = zl(),
  [kN, qn] = Po(Ls),
  [jN, PN] = Po(Ls),
  C0 = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: i,
        defaultValue: l,
        onValueChange: a,
        dir: u,
        name: f,
        autoComplete: p,
        disabled: d,
        required: x,
        form: b,
      } = e,
      g = ql(t),
      [w, v] = h.useState(null),
      [m, y] = h.useState(null),
      [S, C] = h.useState(!1),
      k = qv(u),
      [N = !1, j] = Ic({ prop: r, defaultProp: o, onChange: s }),
      [T, M] = Ic({ prop: i, defaultProp: l, onChange: a }),
      z = h.useRef(null),
      I = w ? b || !!w.closest("form") : !0,
      [W, O] = h.useState(new Set()),
      V = Array.from(W)
        .map((F) => F.props.value)
        .join(";");
    return c.jsx(v2, {
      ...g,
      children: c.jsxs(kN, {
        required: x,
        scope: t,
        trigger: w,
        onTriggerChange: v,
        valueNode: m,
        onValueNodeChange: y,
        valueNodeHasChildren: S,
        onValueNodeHasChildrenChange: C,
        contentId: ld(),
        value: T,
        onValueChange: M,
        open: N,
        onOpenChange: j,
        dir: k,
        triggerPointerDownPosRef: z,
        disabled: d,
        children: [
          c.jsx(Ql.Provider, {
            scope: t,
            children: c.jsx(jN, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: h.useCallback((F) => {
                O((H) => new Set(H).add(F));
              }, []),
              onNativeOptionRemove: h.useCallback((F) => {
                O((H) => {
                  const E = new Set(H);
                  return E.delete(F), E;
                });
              }, []),
              children: n,
            }),
          }),
          I
            ? c.jsxs(
                Y0,
                {
                  "aria-hidden": !0,
                  required: x,
                  tabIndex: -1,
                  name: f,
                  autoComplete: p,
                  value: T,
                  onChange: (F) => M(F.target.value),
                  disabled: d,
                  form: b,
                  children: [
                    T === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(W),
                  ],
                },
                V
              )
            : null,
        ],
      }),
    });
  };
C0.displayName = Ls;
var E0 = "SelectTrigger",
  N0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = ql(n),
      i = qn(E0, n),
      l = i.disabled || r,
      a = ce(t, i.onTriggerChange),
      u = Yl(n),
      f = h.useRef("touch"),
      [p, d, x] = q0((g) => {
        const w = u().filter((y) => !y.disabled),
          v = w.find((y) => y.value === i.value),
          m = G0(w, g, v);
        m !== void 0 && i.onValueChange(m.value);
      }),
      b = (g) => {
        l || (i.onOpenChange(!0), x()),
          g &&
            (i.triggerPointerDownPosRef.current = {
              x: Math.round(g.pageX),
              y: Math.round(g.pageY),
            });
      };
    return c.jsx(wv, {
      asChild: !0,
      ...s,
      children: c.jsx(ee.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Q0(i.value) ? "" : void 0,
        ...o,
        ref: a,
        onClick: K(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && b(g);
        }),
        onPointerDown: K(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const w = g.target;
          w.hasPointerCapture(g.pointerId) &&
            w.releasePointerCapture(g.pointerId),
            g.button === 0 &&
              g.ctrlKey === !1 &&
              g.pointerType === "mouse" &&
              (b(g), g.preventDefault());
        }),
        onKeyDown: K(o.onKeyDown, (g) => {
          const w = p.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) &&
            g.key.length === 1 &&
            d(g.key),
            !(w && g.key === " ") &&
              CN.includes(g.key) &&
              (b(), g.preventDefault());
        }),
      }),
    });
  });
N0.displayName = E0;
var k0 = "SelectValue",
  j0 = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: i = "",
        ...l
      } = e,
      a = qn(k0, n),
      { onValueNodeHasChildrenChange: u } = a,
      f = s !== void 0,
      p = ce(t, a.onValueNodeChange);
    return (
      De(() => {
        u(f);
      }, [u, f]),
      c.jsx(ee.span, {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: Q0(a.value) ? c.jsx(c.Fragment, { children: i }) : s,
      })
    );
  });
j0.displayName = k0;
var TN = "SelectIcon",
  P0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.jsx(ee.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
P0.displayName = TN;
var RN = "SelectPortal",
  T0 = (e) => c.jsx(td, { asChild: !0, ...e });
T0.displayName = RN;
var vr = "SelectContent",
  R0 = h.forwardRef((e, t) => {
    const n = qn(vr, e.__scopeSelect),
      [r, o] = h.useState();
    if (
      (De(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? wr.createPortal(
            c.jsx(A0, {
              scope: e.__scopeSelect,
              children: c.jsx(Ql.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            s
          )
        : null;
    }
    return c.jsx(M0, { ...e, ref: t });
  });
R0.displayName = vr;
var Nt = 10,
  [A0, Gn] = Po(vr),
  AN = "SelectContentImpl",
  M0 = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: l,
        sideOffset: a,
        align: u,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: d,
        collisionPadding: x,
        sticky: b,
        hideWhenDetached: g,
        avoidCollisions: w,
        ...v
      } = e,
      m = qn(vr, n),
      [y, S] = h.useState(null),
      [C, k] = h.useState(null),
      N = ce(t, (B) => S(B)),
      [j, T] = h.useState(null),
      [M, z] = h.useState(null),
      I = Yl(n),
      [W, O] = h.useState(!1),
      V = h.useRef(!1);
    h.useEffect(() => {
      if (y) return $E(y);
    }, [y]),
      PE();
    const F = h.useCallback(
        (B) => {
          const [re, ...be] = I().map((ne) => ne.ref.current),
            [te] = be.slice(-1),
            se = document.activeElement;
          for (const ne of B)
            if (
              ne === se ||
              (ne == null || ne.scrollIntoView({ block: "nearest" }),
              ne === re && C && (C.scrollTop = 0),
              ne === te && C && (C.scrollTop = C.scrollHeight),
              ne == null || ne.focus(),
              document.activeElement !== se)
            )
              return;
        },
        [I, C]
      ),
      H = h.useCallback(() => F([j, y]), [F, j, y]);
    h.useEffect(() => {
      W && H();
    }, [W, H]);
    const { onOpenChange: E, triggerPointerDownPosRef: A } = m;
    h.useEffect(() => {
      if (y) {
        let B = { x: 0, y: 0 };
        const re = (te) => {
            var se, ne;
            B = {
              x: Math.abs(
                Math.round(te.pageX) -
                  (((se = A.current) == null ? void 0 : se.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(te.pageY) -
                  (((ne = A.current) == null ? void 0 : ne.y) ?? 0)
              ),
            };
          },
          be = (te) => {
            B.x <= 10 && B.y <= 10
              ? te.preventDefault()
              : y.contains(te.target) || E(!1),
              document.removeEventListener("pointermove", re),
              (A.current = null);
          };
        return (
          A.current !== null &&
            (document.addEventListener("pointermove", re),
            document.addEventListener("pointerup", be, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", re),
              document.removeEventListener("pointerup", be, { capture: !0 });
          }
        );
      }
    }, [y, E, A]),
      h.useEffect(() => {
        const B = () => E(!1);
        return (
          window.addEventListener("blur", B),
          window.addEventListener("resize", B),
          () => {
            window.removeEventListener("blur", B),
              window.removeEventListener("resize", B);
          }
        );
      }, [E]);
    const [$, L] = q0((B) => {
        const re = I().filter((se) => !se.disabled),
          be = re.find((se) => se.ref.current === document.activeElement),
          te = G0(re, B, be);
        te && setTimeout(() => te.ref.current.focus());
      }),
      U = h.useCallback(
        (B, re, be) => {
          const te = !V.current && !be;
          ((m.value !== void 0 && m.value === re) || te) &&
            (T(B), te && (V.current = !0));
        },
        [m.value]
      ),
      G = h.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      oe = h.useCallback(
        (B, re, be) => {
          const te = !V.current && !be;
          ((m.value !== void 0 && m.value === re) || te) && z(B);
        },
        [m.value]
      ),
      Re = r === "popper" ? eu : _0,
      Z =
        Re === eu
          ? {
              side: l,
              sideOffset: a,
              align: u,
              alignOffset: f,
              arrowPadding: p,
              collisionBoundary: d,
              collisionPadding: x,
              sticky: b,
              hideWhenDetached: g,
              avoidCollisions: w,
            }
          : {};
    return c.jsx(A0, {
      scope: n,
      content: y,
      viewport: C,
      onViewportChange: k,
      itemRefCallback: U,
      selectedItem: j,
      onItemLeave: G,
      itemTextRefCallback: oe,
      focusSelectedItem: H,
      selectedItemText: M,
      position: r,
      isPositioned: W,
      searchRef: $,
      children: c.jsx(S0, {
        as: go,
        allowPinchZoom: !0,
        children: c.jsx(f0, {
          asChild: !0,
          trapped: m.open,
          onMountAutoFocus: (B) => {
            B.preventDefault();
          },
          onUnmountAutoFocus: K(o, (B) => {
            var re;
            (re = m.trigger) == null || re.focus({ preventScroll: !0 }),
              B.preventDefault();
          }),
          children: c.jsx(Al, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: (B) => B.preventDefault(),
            onDismiss: () => m.onOpenChange(!1),
            children: c.jsx(Re, {
              role: "listbox",
              id: m.contentId,
              "data-state": m.open ? "open" : "closed",
              dir: m.dir,
              onContextMenu: (B) => B.preventDefault(),
              ...v,
              ...Z,
              onPlaced: () => O(!0),
              ref: N,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...v.style,
              },
              onKeyDown: K(v.onKeyDown, (B) => {
                const re = B.ctrlKey || B.altKey || B.metaKey;
                if (
                  (B.key === "Tab" && B.preventDefault(),
                  !re && B.key.length === 1 && L(B.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key))
                ) {
                  let te = I()
                    .filter((se) => !se.disabled)
                    .map((se) => se.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(B.key) &&
                      (te = te.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(B.key))
                  ) {
                    const se = B.target,
                      ne = te.indexOf(se);
                    te = te.slice(ne + 1);
                  }
                  setTimeout(() => F(te)), B.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
M0.displayName = AN;
var MN = "SelectItemAlignedPosition",
  _0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = qn(vr, n),
      i = Gn(vr, n),
      [l, a] = h.useState(null),
      [u, f] = h.useState(null),
      p = ce(t, (N) => f(N)),
      d = Yl(n),
      x = h.useRef(!1),
      b = h.useRef(!0),
      {
        viewport: g,
        selectedItem: w,
        selectedItemText: v,
        focusSelectedItem: m,
      } = i,
      y = h.useCallback(() => {
        if (s.trigger && s.valueNode && l && u && g && w && v) {
          const N = s.trigger.getBoundingClientRect(),
            j = u.getBoundingClientRect(),
            T = s.valueNode.getBoundingClientRect(),
            M = v.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const se = M.left - j.left,
              ne = T.left - se,
              He = N.left - ne,
              nt = N.width + He,
              fn = Math.max(nt, j.width),
              ht = window.innerWidth - Nt,
              Xn = Zc(ne, [Nt, Math.max(Nt, ht - fn)]);
            (l.style.minWidth = nt + "px"), (l.style.left = Xn + "px");
          } else {
            const se = j.right - M.right,
              ne = window.innerWidth - T.right - se,
              He = window.innerWidth - N.right - ne,
              nt = N.width + He,
              fn = Math.max(nt, j.width),
              ht = window.innerWidth - Nt,
              Xn = Zc(ne, [Nt, Math.max(Nt, ht - fn)]);
            (l.style.minWidth = nt + "px"), (l.style.right = Xn + "px");
          }
          const z = d(),
            I = window.innerHeight - Nt * 2,
            W = g.scrollHeight,
            O = window.getComputedStyle(u),
            V = parseInt(O.borderTopWidth, 10),
            F = parseInt(O.paddingTop, 10),
            H = parseInt(O.borderBottomWidth, 10),
            E = parseInt(O.paddingBottom, 10),
            A = V + F + W + E + H,
            $ = Math.min(w.offsetHeight * 5, A),
            L = window.getComputedStyle(g),
            U = parseInt(L.paddingTop, 10),
            G = parseInt(L.paddingBottom, 10),
            oe = N.top + N.height / 2 - Nt,
            Re = I - oe,
            Z = w.offsetHeight / 2,
            B = w.offsetTop + Z,
            re = V + F + B,
            be = A - re;
          if (re <= oe) {
            const se = z.length > 0 && w === z[z.length - 1].ref.current;
            l.style.bottom = "0px";
            const ne = u.clientHeight - g.offsetTop - g.offsetHeight,
              He = Math.max(Re, Z + (se ? G : 0) + ne + H),
              nt = re + He;
            l.style.height = nt + "px";
          } else {
            const se = z.length > 0 && w === z[0].ref.current;
            l.style.top = "0px";
            const He = Math.max(oe, V + g.offsetTop + (se ? U : 0) + Z) + be;
            (l.style.height = He + "px"), (g.scrollTop = re - oe + g.offsetTop);
          }
          (l.style.margin = `${Nt}px 0`),
            (l.style.minHeight = $ + "px"),
            (l.style.maxHeight = I + "px"),
            r == null || r(),
            requestAnimationFrame(() => (x.current = !0));
        }
      }, [d, s.trigger, s.valueNode, l, u, g, w, v, s.dir, r]);
    De(() => y(), [y]);
    const [S, C] = h.useState();
    De(() => {
      u && C(window.getComputedStyle(u).zIndex);
    }, [u]);
    const k = h.useCallback(
      (N) => {
        N && b.current === !0 && (y(), m == null || m(), (b.current = !1));
      },
      [y, m]
    );
    return c.jsx(ON, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: k,
      children: c.jsx("div", {
        ref: a,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S,
        },
        children: c.jsx(ee.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
_0.displayName = MN;
var _N = "SelectPopperPosition",
  eu = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Nt,
        ...s
      } = e,
      i = ql(n);
    return c.jsx(bv, {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
eu.displayName = _N;
var [ON, Nd] = Po(vr, {}),
  tu = "SelectViewport",
  O0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      s = Gn(tu, n),
      i = Nd(tu, n),
      l = ce(t, s.onViewportChange),
      a = h.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        c.jsx(Ql.Slot, {
          scope: n,
          children: c.jsx(ee.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: K(o.onScroll, (u) => {
              const f = u.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: d } = i;
              if (d != null && d.current && p) {
                const x = Math.abs(a.current - f.scrollTop);
                if (x > 0) {
                  const b = window.innerHeight - Nt * 2,
                    g = parseFloat(p.style.minHeight),
                    w = parseFloat(p.style.height),
                    v = Math.max(g, w);
                  if (v < b) {
                    const m = v + x,
                      y = Math.min(b, m),
                      S = m - y;
                    (p.style.height = y + "px"),
                      p.style.bottom === "0px" &&
                        ((f.scrollTop = S > 0 ? S : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = f.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
O0.displayName = tu;
var I0 = "SelectGroup",
  [IN, LN] = Po(I0),
  DN = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ld();
    return c.jsx(IN, {
      scope: n,
      id: o,
      children: c.jsx(ee.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
DN.displayName = I0;
var L0 = "SelectLabel",
  D0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = LN(L0, n);
    return c.jsx(ee.div, { id: o.id, ...r, ref: t });
  });
D0.displayName = L0;
var ul = "SelectItem",
  [zN, z0] = Po(ul),
  F0 = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...i
      } = e,
      l = qn(ul, n),
      a = Gn(ul, n),
      u = l.value === r,
      [f, p] = h.useState(s ?? ""),
      [d, x] = h.useState(!1),
      b = ce(t, (m) => {
        var y;
        return (y = a.itemRefCallback) == null ? void 0 : y.call(a, m, r, o);
      }),
      g = ld(),
      w = h.useRef("touch"),
      v = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.jsx(zN, {
      scope: n,
      value: r,
      disabled: o,
      textId: g,
      isSelected: u,
      onItemTextChange: h.useCallback((m) => {
        p((y) => y || ((m == null ? void 0 : m.textContent) ?? "").trim());
      }, []),
      children: c.jsx(Ql.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: f,
        children: c.jsx(ee.div, {
          role: "option",
          "aria-labelledby": g,
          "data-highlighted": d ? "" : void 0,
          "aria-selected": u && d,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...i,
          ref: b,
          onFocus: K(i.onFocus, () => x(!0)),
          onBlur: K(i.onBlur, () => x(!1)),
          onClick: K(i.onClick, () => {
            w.current !== "mouse" && v();
          }),
          onPointerUp: K(i.onPointerUp, () => {
            w.current === "mouse" && v();
          }),
          onPointerDown: K(i.onPointerDown, (m) => {
            w.current = m.pointerType;
          }),
          onPointerMove: K(i.onPointerMove, (m) => {
            var y;
            (w.current = m.pointerType),
              o
                ? (y = a.onItemLeave) == null || y.call(a)
                : w.current === "mouse" &&
                  m.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: K(i.onPointerLeave, (m) => {
            var y;
            m.currentTarget === document.activeElement &&
              ((y = a.onItemLeave) == null || y.call(a));
          }),
          onKeyDown: K(i.onKeyDown, (m) => {
            var S;
            (((S = a.searchRef) == null ? void 0 : S.current) !== "" &&
              m.key === " ") ||
              (EN.includes(m.key) && v(), m.key === " " && m.preventDefault());
          }),
        }),
      }),
    });
  });
F0.displayName = ul;
var Wo = "SelectItemText",
  $0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      i = qn(Wo, n),
      l = Gn(Wo, n),
      a = z0(Wo, n),
      u = PN(Wo, n),
      [f, p] = h.useState(null),
      d = ce(
        t,
        (v) => p(v),
        a.onItemTextChange,
        (v) => {
          var m;
          return (m = l.itemTextRefCallback) == null
            ? void 0
            : m.call(l, v, a.value, a.disabled);
        }
      ),
      x = f == null ? void 0 : f.textContent,
      b = h.useMemo(
        () =>
          c.jsx(
            "option",
            { value: a.value, disabled: a.disabled, children: x },
            a.value
          ),
        [a.disabled, a.value, x]
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: w } = u;
    return (
      De(() => (g(b), () => w(b)), [g, w, b]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(ee.span, { id: a.textId, ...s, ref: d }),
          a.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? wr.createPortal(s.children, i.valueNode)
            : null,
        ],
      })
    );
  });
$0.displayName = Wo;
var U0 = "SelectItemIndicator",
  B0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return z0(U0, n).isSelected
      ? c.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
B0.displayName = U0;
var nu = "SelectScrollUpButton",
  W0 = h.forwardRef((e, t) => {
    const n = Gn(nu, e.__scopeSelect),
      r = Nd(nu, e.__scopeSelect),
      [o, s] = h.useState(!1),
      i = ce(t, r.onScrollButtonChange);
    return (
      De(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollTop > 0;
            s(u);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(V0, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop - a.offsetHeight);
            },
          })
        : null
    );
  });
W0.displayName = nu;
var ru = "SelectScrollDownButton",
  H0 = h.forwardRef((e, t) => {
    const n = Gn(ru, e.__scopeSelect),
      r = Nd(ru, e.__scopeSelect),
      [o, s] = h.useState(!1),
      i = ce(t, r.onScrollButtonChange);
    return (
      De(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollHeight - a.clientHeight,
              f = Math.ceil(a.scrollTop) < u;
            s(f);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(V0, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop + a.offsetHeight);
            },
          })
        : null
    );
  });
H0.displayName = ru;
var V0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = Gn("SelectScrollButton", n),
      i = h.useRef(null),
      l = Yl(n),
      a = h.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      h.useEffect(() => () => a(), [a]),
      De(() => {
        var f;
        const u = l().find((p) => p.ref.current === document.activeElement);
        (f = u == null ? void 0 : u.ref.current) == null ||
          f.scrollIntoView({ block: "nearest" });
      }, [l]),
      c.jsx(ee.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: K(o.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerMove: K(o.onPointerMove, () => {
          var u;
          (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerLeave: K(o.onPointerLeave, () => {
          a();
        }),
      })
    );
  }),
  FN = "SelectSeparator",
  K0 = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  });
K0.displayName = FN;
var ou = "SelectArrow",
  $N = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ql(n),
      s = qn(ou, n),
      i = Gn(ou, n);
    return s.open && i.position === "popper"
      ? c.jsx(Sv, { ...o, ...r, ref: t })
      : null;
  });
$N.displayName = ou;
function Q0(e) {
  return e === "" || e === void 0;
}
var Y0 = h.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = h.useRef(null),
    s = ce(t, o),
    i = LE(n);
  return (
    h.useEffect(() => {
      const l = o.current,
        a = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(a, "value").set;
      if (i !== n && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(l, n), l.dispatchEvent(p);
      }
    }, [i, n]),
    c.jsx(Ms, {
      asChild: !0,
      children: c.jsx("select", { ...r, ref: s, defaultValue: n }),
    })
  );
});
Y0.displayName = "BubbleSelect";
function q0(e) {
  const t = ke(e),
    n = h.useRef(""),
    r = h.useRef(0),
    o = h.useCallback(
      (i) => {
        const l = n.current + i;
        t(l),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(l);
      },
      [t]
    ),
    s = h.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function G0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = UN(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const a = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function UN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var BN = C0,
  X0 = N0,
  WN = j0,
  HN = P0,
  VN = T0,
  Z0 = R0,
  KN = O0,
  J0 = D0,
  ey = F0,
  QN = $0,
  YN = B0,
  ty = W0,
  ny = H0,
  ry = K0;
const zp = BN,
  Fp = WN,
  su = h.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(X0, {
      ref: r,
      className: ue(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(HN, {
          asChild: !0,
          children: c.jsx(Ug, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
su.displayName = X0.displayName;
const oy = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ty, {
    ref: n,
    className: ue("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(D1, { className: "h-4 w-4" }),
  })
);
oy.displayName = ty.displayName;
const sy = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ny, {
    ref: n,
    className: ue("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Ug, { className: "h-4 w-4" }),
  })
);
sy.displayName = ny.displayName;
const iu = h.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(VN, {
      children: c.jsxs(Z0, {
        ref: o,
        className: ue(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          c.jsx(oy, {}),
          c.jsx(KN, {
            className: ue(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          c.jsx(sy, {}),
        ],
      }),
    })
);
iu.displayName = Z0.displayName;
const qN = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(J0, {
    ref: n,
    className: ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
qN.displayName = J0.displayName;
const Et = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(ey, {
    ref: r,
    className: ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(YN, { children: c.jsx(L1, { className: "h-4 w-4" }) }),
      }),
      c.jsx(QN, { children: t }),
    ],
  })
);
Et.displayName = ey.displayName;
const GN = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ry, { ref: n, className: ue("-mx-1 my-1 h-px bg-muted", e), ...t })
);
GN.displayName = ry.displayName;
const cr = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: ue(
      "rounded-lg border bg-card text-card-foreground shadow-sm my-auto",
      e
    ),
    ...t,
  })
);
cr.displayName = "Card";
const dl = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: ue("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
dl.displayName = "CardHeader";
const fl = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("h3", {
    ref: n,
    className: ue("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
fl.displayName = "CardTitle";
const pl = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("p", {
    ref: n,
    className: ue("text-sm text-muted-foreground", e),
    ...t,
  })
);
pl.displayName = "CardDescription";
const ur = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: ue("p-6 pt-0", e), ...t })
);
ur.displayName = "CardContent";
const XN = h.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: ue("flex items-center p-6 pt-0", e), ...t })
);
XN.displayName = "CardFooter";
const ZN = () => {
    const [e, t] = h.useState({
        name: "",
        mobile: "",
        email: "",
        city: "",
        businessType: "",
        productInterest: "",
        quantity: "",
        message: "",
      }),
      [n, r] = h.useState(!1),
      { toast: o } = dg(),
      s = async (u) => {
        u.preventDefault(), r(!0);
        debugger;
        console.log("Form submitted:", e);
        try {
          try {
            const date = new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
            const formData = new FormData();
            formData.append("Full_Name", e.name);
            formData.append("Mobile_Number", e.mobile);
            formData.append("Email_Address", e.email);
            formData.append("City", e.city);
            formData.append("Business_Type", e.businessType);
            formData.append("Product_Interest", e.productInterest || "Not specified");
            formData.append("Estimated_Quantity", e.quantity || "Not specified");
            formData.append("Additional_Message", e.message || "No additional message");
            formData.append("Date_Submitted", date);
            const p = await fetch(
              "https://script.google.com/macros/s/AKfycbxdLeFUvaG4F7FOKGY7RDxSoS20oGOnlpn_J6CnyPPbfS74uaI2iJadJ9jtbnGJ10zk/exec",
              {
                method: "POST",
                body: formData,
              }
            );
            if (!p.ok) throw new Error("Request failed");
            const d = await p.json();
            console.log("Result:", d),
              o({
                title: "Inquiry Submitted Successfully!",
                description:
                  "We'll get back to you within 24 hours. Your details have been recorded.",
              });
          } catch (p) {
            console.error("Error:", p),
              o({
                title: "Submission Failed",
                description:
                  "There was an error submitting your inquiry. Please try again later.",
                variant: "destructive",
              });
          }
          t({
            name: "",
            mobile: "",
            email: "",
            city: "",
            businessType: "",
            productInterest: "",
            quantity: "",
            message: "",
          });
        } catch (f) {
          console.error("Error submitting form:", f),
            o({
              title: "Submission Received",
              description:
                "Your inquiry has been received. We'll contact you soon!",
            }),
            t({
              name: "",
              mobile: "",
              email: "",
              city: "",
              businessType: "",
              productInterest: "",
              quantity: "",
              message: "",
            });
        } finally {
          r(!1);
        }
      },
      i = (u, f) => {
        t((p) => ({ ...p, [u]: f }));
      },
      l = () => {
        window.open("https://wa.me/919576030821", "_blank");
      },
      a = () => {
        window.open("tel:+919576030821", "_self");
      };
    return c.jsx("section", {
      id: "bulk-inquiry",
      className: "py-12 bg-gradient-to-br from-yellow-50 to-orange-50",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-4xl lg:text-5xl font-bold mb-4",
                children: [
                  "Need Pricing or ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "Catalogue?",
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Send us your details and we'll provide you with the best pricing and product catalogue",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
            children: [
              c.jsxs(cr, {
                className: "shadow-xl border-0",
                children: [
                  c.jsxs(dl, {
                    children: [
                      c.jsx(fl, {
                        className: "text-2xl",
                        children: "Get Instant Quote",
                      }),
                      c.jsx(pl, {
                        children:
                          "Fill out the form and our team will contact you within 24 hours",
                      }),
                    ],
                  }),
                  c.jsx(ur, {
                    children: c.jsxs("form", {
                      onSubmit: s,
                      className: "space-y-6",
                      children: [
                        c.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, {
                                  htmlFor: "name",
                                  children: "Full Name *",
                                }),
                                c.jsx(Ar, {
                                  id: "name",
                                  value: e.name,
                                  onChange: (u) => i("name", u.target.value),
                                  required: !0,
                                  className: "mt-1",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, {
                                  htmlFor: "mobile",
                                  children: "Mobile Number *",
                                }),
                                c.jsx(Ar, {
                                  id: "mobile",
                                  type: "tel",
                                  value: e.mobile,
                                  onChange: (u) => i("mobile", u.target.value),
                                  required: !0,
                                  className: "mt-1",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, {
                                  htmlFor: "email",
                                  children: "Email Address",
                                }),
                                c.jsx(Ar, {
                                  id: "email",
                                  type: "email",
                                  value: e.email,
                                  onChange: (u) => i("email", u.target.value),
                                  className: "mt-1",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, {
                                  htmlFor: "city",
                                  children: "City *",
                                }),
                                c.jsx(Ar, {
                                  id: "city",
                                  value: e.city,
                                  onChange: (u) => i("city", u.target.value),
                                  required: !0,
                                  className: "mt-1",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, { children: "Business Type *" }),
                                c.jsxs(zp, {
                                  value: e.businessType,
                                  onValueChange: (u) => i("businessType", u),
                                  children: [
                                    c.jsx(su, {
                                      className: "mt-1",
                                      children: c.jsx(Fp, {
                                        placeholder: "Select business type",
                                      }),
                                    }),
                                    c.jsxs(iu, {
                                      children: [
                                        c.jsx(Et, {
                                          value: "retailer",
                                          children: "Retailer",
                                        }),
                                        c.jsx(Et, {
                                          value: "individual",
                                          children: "Individual Buyer",
                                        }),
                                        c.jsx(Et, {
                                          value: "reseller",
                                          children: "Reseller",
                                        }),
                                        c.jsx(Et, {
                                          value: "distributor",
                                          children: "Distributor",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx(Zt, { children: "Product Interest" }),
                                c.jsxs(zp, {
                                  value: e.productInterest,
                                  onValueChange: (u) => i("productInterest", u),
                                  children: [
                                    c.jsx(su, {
                                      className: "mt-1",
                                      children: c.jsx(Fp, {
                                        placeholder: "Select category",
                                      }),
                                    }),
                                    c.jsxs(iu, {
                                      children: [
                                        c.jsx(Et, {
                                          value: "women-earrings",
                                          children: "Women's Earrings",
                                        }),
                                        c.jsx(Et, {
                                          value: "women-necklaces",
                                          children: "Women's Necklaces",
                                        }),
                                        c.jsx(Et, {
                                          value: "women-rings",
                                          children: "Women's Rings",
                                        }),
                                        c.jsx(Et, {
                                          value: "men-chains",
                                          children: "Men's Chains",
                                        }),
                                        c.jsx(Et, {
                                          value: "men-rings",
                                          children: "Men's Rings",
                                        }),
                                        c.jsx(Et, {
                                          value: "mixed",
                                          children: "Mixed Collection",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          children: [
                            c.jsx(Zt, {
                              htmlFor: "quantity",
                              children: "Estimated Quantity (if bulk)",
                            }),
                            c.jsx(Ar, {
                              id: "quantity",
                              value: e.quantity,
                              onChange: (u) => i("quantity", u.target.value),
                              placeholder: "e.g., 50 pieces, 100 pieces",
                              className: "mt-1",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          children: [
                            c.jsx(Zt, {
                              htmlFor: "message",
                              children: "Additional Message",
                            }),
                            c.jsx(d0, {
                              id: "message",
                              value: e.message,
                              onChange: (u) => i("message", u.target.value),
                              placeholder:
                                "Tell us about your specific requirements...",
                              className: "mt-1",
                              rows: 4,
                            }),
                          ],
                        }),
                        c.jsxs(at, {
                          type: "submit",
                          size: "lg",
                          className: "w-full bg-yellow-600 hover:bg-yellow-700",
                          disabled: n,
                          children: [
                            c.jsx(H1, { className: "w-5 h-5 mr-2" }),
                            n ? "Sending..." : "Request Callback",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-8",
                children: [
                  c.jsx(cr, {
                    className:
                      "border-yellow-200 bg-gradient-to-br from-yellow-100 to-orange-100",
                    children: c.jsx(ur, {
                      className: "p-8",
                      children: c.jsxs("div", {
                        className: "text-center",
                        children: [
                          c.jsx(Xf, {
                            className: "w-16 h-16 text-yellow-600 mx-auto mb-4",
                          }),
                          c.jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: "WhatsApp Chat",
                          }),
                          c.jsx("p", {
                            className: "text-gray-600 mb-6",
                            children:
                              "Get instant response on WhatsApp. Our team is available 9 AM to 8 PM.",
                          }),
                          c.jsxs(at, {
                            size: "lg",
                            className: "bg-green-600 hover:bg-green-700",
                            onClick: l,
                            children: [
                              c.jsx(Xf, { className: "w-5 h-5 mr-2" }),
                              "Chat on WhatsApp",
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx(cr, {
                    className:
                      "border-blue-200 bg-gradient-to-br from-blue-100 to-indigo-100",
                    children: c.jsx(ur, {
                      className: "p-8",
                      children: c.jsxs("div", {
                        className: "text-center",
                        children: [
                          c.jsx(vo, {
                            className: "w-16 h-16 text-blue-600 mx-auto mb-4",
                          }),
                          c.jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: "Direct Call",
                          }),
                          c.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Speak directly with our sales team",
                          }),
                          c.jsx("div", {
                            className: "text-2xl font-bold text-blue-600 mb-6",
                            children: "+91 95760 30821",
                          }),
                          c.jsxs(at, {
                            size: "lg",
                            className: "bg-blue-600 hover:bg-blue-700",
                            onClick: a,
                            children: [
                              c.jsx(vo, { className: "w-5 h-5 mr-2" }),
                              "Call Now",
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsxs("div", {
                    className: "bg-white rounded-2xl p-6 shadow-lg",
                    children: [
                      c.jsx("h4", {
                        className: "text-xl font-bold mb-4",
                        children: "Quick FAQs",
                      }),
                      c.jsxs("div", {
                        className: "space-y-3 text-sm",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("strong", {
                                children:
                                  "Q: What's the minimum order quantity?",
                              }),
                              c.jsx("p", {
                                className: "text-gray-600",
                                children:
                                  "A: We accept orders from as low as 25 pieces per design.",
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("strong", {
                                children: "Q: Do you provide samples?",
                              }),
                              c.jsx("p", {
                                className: "text-gray-600",
                                children:
                                  "A: Yes, we provide samples at nominal charges.",
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("strong", {
                                children: "Q: What's the delivery time?",
                              }),
                              c.jsx("p", {
                                className: "text-gray-600",
                                children:
                                  "A: 3-7 business days depending on location and quantity.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  JN = () => {
    const e = [
        {
          name: "Sonal Kapoor",
          location: "Delhi",
          rating: 5,
          text: "Love these earrings! Super cute and well-made. Fast delivery too. Will order more styles soon. Highly recommend DD Enterprises!",
          date: "April 12, 2025",
        },
        {
          name: "Nidhi Sharma",
          location: "Mumbai",
          rating: 4,
          text: "Nice quality bangles at good price. One had minor scratch but overall happy with purchase. Good customer service response.",
          date: "March 28, 2025",
        },
        {
          name: "Tanya Malhotra",
          location: "Ahmedabad",
          rating: 5,
          text: "Beautiful necklace set! Exactly as pictured. Packaging was lovely. My friends loved it at the wedding. Definitely ordering again!",
          date: "June 5, 2025",
        },
        {
          name: "Sakshi Verma",
          location: "Bangalore",
          rating: 3,
          text: "Okay quality for the price. Ring looks nice but feels slightly cheap. Delivery was on time. Decent for casual wear.",
          date: "May 19, 2025",
        },
        {
          name: "Ishita Bansal",
          location: "Hyderabad",
          rating: 5,
          text: "Absolutely stunning jewelry! The rose gold bracelet is my new favorite. Compliments everywhere I go. Quality exceeds expectations for this price range. DD Enterprises rocks!",
          date: "July 2, 2025",
        },
        {
          name: "Rashmi Agarwal",
          location: "Pune",
          rating: 4,
          text: "Pretty good collection of trendy pieces. Ordered multiple items for gifting. Most were perfect, one earring had loose stone. Overall satisfied with service and quality.",
          date: "March 7, 2025",
        },
        {
          name: "Priyanka Gupta",
          location: "Chennai",
          rating: 5,
          text: "Amazing experience! The traditional choker necklace is gorgeous. Intricate work and comfortable fit. Arrived perfectly packaged. My go-to store for special occasion jewelry now.",
          date: "April 26, 2025",
        },
        {
          name: "Mansi Jain",
          location: "Kolkata",
          rating: 4,
          text: "Good value for money. Bought three rings and they all look elegant. Shipping was quick. Only issue was one ring slightly loose but still wearable.",
          date: "June 18, 2025",
        },
      ],
      t = [
        {
          name: "Amazon",
          color: "bg-yellow-500",
          icon: "🛒",
          url: "https://www.amazon.in/",
        },
        {
          name: "Flipkart",
          color: "bg-blue-500",
          icon: "🛍️",
          url: "https://flipkart.com/",
        },
        {
          name: "Meesho",
          color: "bg-pink-500",
          icon: "👗",
          url: "https://www.meesho.com/DDEnterprisesGSTIN09EWYPK1638C1Z4?ms=2",
        },
        {
          name: "Myntra",
          color: "bg-gray-800",
          icon: "👕",
          url: "https://www.myntra.com/",
        },
        {
          name: "Snapdeal",
          color: "bg-red-500",
          icon: "🏷️",
          url: "https://snapdeal.com/",
        },
        {
          name: "IndiaMART",
          color: "bg-blue-600",
          icon: "🏪",
          url: "https://www.indiamart.com/company/207158807/",
        },
      ];
    return c.jsx("section", {
      className: "py-12 lg:py-12 bg-gray-50",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12 lg:mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-3xl lg:text-4xl xl:text-5xl font-bold mb-4",
                children: [
                  "What Our ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "Clients Say",
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto",
                children: "Join thousands of happy customers across India",
              }),
            ],
          }),
          c.jsxs(cl, {
            className: "w-full whitespace-nowrap",
            children: [
              c.jsx("div", {
                className: "flex space-x-6 lg:space-x-8 pb-4",
                children: e.map((n, r) =>
                  c.jsx(
                    cr,
                    {
                      className:
                        "border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-shrink-0 w-96 lg:w-[450px]",
                      children: c.jsxs(ur, {
                        className: "p-6 lg:p-8 flex flex-col",
                        children: [
                          c.jsxs("div", {
                            className: "flex items-center mb-6 lg:mb-8",
                            children: [
                              c.jsx("div", {
                                className:
                                  "w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gray-200 flex items-center justify-center mr-4 flex-shrink-0",
                                children: c.jsx(q1, {
                                  className:
                                    "w-8 h-8 lg:w-10 lg:h-10 text-gray-600",
                                }),
                              }),
                              c.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  c.jsx("h4", {
                                    className:
                                      "font-bold text-gray-900 text-lg lg:text-xl truncate",
                                    children: n.name,
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-base lg:text-lg text-gray-600 truncate",
                                    children: n.location,
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-sm lg:text-base text-gray-500 truncate",
                                    children: n.date,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "flex items-center mb-6 lg:mb-8",
                            children: [
                              [...Array(5)].map((o, s) =>
                                c.jsx(
                                  Wg,
                                  {
                                    className: `w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0 ${
                                      s < n.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-gray-300"
                                    }`,
                                  },
                                  s
                                )
                              ),
                              c.jsxs("span", {
                                className:
                                  "ml-3 text-base lg:text-lg text-gray-600 font-semibold whitespace-nowrap",
                                children: ["(", n.rating, "/5)"],
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "relative flex-1 flex flex-col",
                            children: [
                              c.jsx(W1, {
                                className:
                                  "w-10 h-10 lg:w-12 lg:h-12 text-yellow-500 opacity-50 mb-4 flex-shrink-0",
                              }),
                              c.jsx("div", {
                                className: "flex-1 overflow-hidden review-text",
                                children: c.jsx("p", {
                                  className:
                                    "text-base lg:text-lg text-gray-700 italic leading-relaxed break-words word-wrap overflow-wrap-anywhere",
                                  children: n.text,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    r
                  )
                ),
              }),
              c.jsx(Es, { orientation: "horizontal" }),
            ],
          }),
          c.jsxs("div", {
            className: "mt-16 lg:mt-20",
            children: [
              c.jsxs("div", {
                className: "text-center mb-8 lg:mb-12",
                children: [
                  c.jsx("h3", {
                    className: "text-3xl lg:text-4xl font-bold mb-4",
                    children: "Find Us Online",
                  }),
                  c.jsx("p", {
                    className: "text-gray-600 text-lg lg:text-xl mb-6 lg:mb-8",
                    children:
                      "Shop our exclusive imitation jewelry collections on your favorite platforms.",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6",
                children: t.map((n, r) =>
                  c.jsxs(
                    "a",
                    {
                      href: n.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: `${n.color} text-white p-4 lg:p-6 rounded-2xl flex flex-col items-center justify-center min-h-[100px] lg:min-h-[120px] hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`,
                      children: [
                        c.jsx("span", {
                          className: "text-2xl lg:text-3xl mb-2",
                          children: n.icon,
                        }),
                        c.jsx("span", {
                          className: "font-bold text-sm lg:text-lg text-center",
                          children: n.name,
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  ek = () =>
    c.jsx("section", {
      className: "py-12 lg:py-20 bg-white",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12 lg:mb-16",
            children: [
              c.jsxs("h2", {
                className: "text-3xl lg:text-4xl xl:text-5xl font-bold mb-4",
                children: [
                  "Locate Our ",
                  c.jsx("span", {
                    className: "text-yellow-600",
                    children: "Store",
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Visit our showroom for an exclusive hands-on experience with our latest collections",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch",
            children: [
              c.jsx("div", {
                className: "space-y-6 lg:space-y-8",
                children: c.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-yellow-50 to-orange-50 p-6 lg:p-8 rounded-2xl shadow-lg h-full",
                  children: [
                    c.jsx("h3", {
                      className:
                        "text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900",
                      children: "DD Enterprises Showroom",
                    }),
                    c.jsxs("div", {
                      className: "space-y-4 lg:space-y-6",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-start space-x-3 lg:space-x-4",
                          children: [
                            c.jsx(sd, {
                              className:
                                "w-5 h-5 lg:w-6 lg:h-6 text-yellow-600 mt-1 flex-shrink-0",
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h4", {
                                  className: "font-semibold text-gray-900 mb-1",
                                  children: "Address",
                                }),
                                c.jsxs("p", {
                                  className:
                                    "text-sm lg:text-base text-gray-600 leading-relaxed",
                                  children: [
                                    "RC 225, First Floor, Prashant Garden",
                                    c.jsx("br", {}),
                                    "Khora Colony, near Nagar Palika Parishad",
                                    c.jsx("br", {}),
                                    "Khora Makhanpur, Ghaziabad",
                                    c.jsx("br", {}),
                                    "Uttar Pradesh 201001, India",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start space-x-3 lg:space-x-4",
                          children: [
                            c.jsx(vo, {
                              className:
                                "w-5 h-5 lg:w-6 lg:h-6 text-yellow-600 mt-1 flex-shrink-0",
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h4", {
                                  className: "font-semibold text-gray-900 mb-1",
                                  children: "Contact",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-sm lg:text-base text-gray-600",
                                  children: "+91 95760 30821",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-sm lg:text-base text-gray-600",
                                  children: "+91 87448 97796",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start space-x-3 lg:space-x-4",
                          children: [
                            c.jsx(Bg, {
                              className:
                                "w-5 h-5 lg:w-6 lg:h-6 text-yellow-600 mt-1 flex-shrink-0",
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h4", {
                                  className: "font-semibold text-gray-900 mb-1",
                                  children: "Email",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-sm lg:text-base text-gray-600",
                                  children: "info@ddenterprises.net",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-sm lg:text-base text-gray-600",
                                  children: "dbusiness598@gmail.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start space-x-3 lg:space-x-4",
                          children: [
                            c.jsx(z1, {
                              className:
                                "w-5 h-5 lg:w-6 lg:h-6 text-yellow-600 mt-1 flex-shrink-0",
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h4", {
                                  className: "font-semibold text-gray-900 mb-1",
                                  children: "Store Hours",
                                }),
                                c.jsxs("div", {
                                  className:
                                    "text-sm lg:text-base text-gray-600 space-y-1",
                                  children: [
                                    c.jsx("p", {
                                      children:
                                        "Monday - Saturday: 10:00 AM - 8:00 PM",
                                    }),
                                    c.jsx("p", {
                                      children: "Sunday: 11:00 AM - 6:00 PM",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c.jsxs("div", {
                className: "relative h-full min-h-[400px] lg:min-h-[500px]",
                children: [
                  c.jsx("div", {
                    className:
                      "w-full h-full rounded-2xl shadow-lg overflow-hidden",
                    children: c.jsx("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112120.34385191409!2d77.26084778955077!2d28.576946353957148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5843c413c0f%3A0xd2c4f4eefa5cf83d!2sDD%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1752067123067!5m2!1sen!2sin",
                      width: "100%",
                      height: "100%",
                      style: { border: 0 },
                      allowFullScreen: !0,
                      loading: "lazy",
                      referrerPolicy: "no-referrer-when-downgrade",
                      className: "w-full h-full",
                      title: "DD Enterprises Store Location",
                    }),
                  }),
                  c.jsxs("div", {
                    className:
                      "absolute top-4 left-4 bg-white p-3 lg:p-4 rounded-xl shadow-lg max-w-xs",
                    children: [
                      c.jsx("h4", {
                        className:
                          "font-bold text-gray-900 mb-1 text-sm lg:text-base",
                        children: "DD Enterprises",
                      }),
                      c.jsx("p", {
                        className: "text-xs lg:text-sm text-gray-600",
                        children: "Ghaziabad, Uttar Pradesh",
                      }),
                      c.jsxs("div", {
                        className: "flex items-center mt-2",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-3 h-3 bg-yellow-500 rounded-full mr-2",
                          }),
                          c.jsx("span", {
                            className: "text-xs text-gray-500",
                            children: "Open Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  tk = () =>
    c.jsx("footer", {
      id: "contact",
      className: "bg-gray-900 text-white py-12 lg:py-16",
      children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          c.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
            children: [
              c.jsxs("div", {
                className: "mb-6 lg:mb-0",
                children: [
                  c.jsx("div", {
                    className:
                      "text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4",
                    children: "DD Enterprises",
                  }),
                  c.jsx("p", {
                    className:
                      "text-gray-400 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base",
                    children:
                      "India's trusted brand for trendy imitation jewellery. Serving retailers and individuals across the nation with quality products and exceptional service since 2025.",
                  }),
                  c.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center",
                        children: c.jsx(F1, {
                          className: "w-4 h-4 lg:w-5 lg:h-5",
                        }),
                      }),
                      c.jsx("div", {
                        className:
                          "w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center",
                        children: c.jsx(Y1, {
                          className: "w-4 h-4 lg:w-5 lg:h-5",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "mb-6 lg:mb-0",
                children: [
                  c.jsx("h3", {
                    className: "text-lg lg:text-xl font-bold mb-4 lg:mb-6",
                    children: "Quick Links",
                  }),
                  c.jsxs("ul", {
                    className: "space-y-2 lg:space-y-3",
                    children: [
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#home",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Home",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#collections",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Collections",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#bulk-inquiry",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Bulk Inquiry",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#about",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "About Us",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#contact",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "mb-6 lg:mb-0",
                children: [
                  c.jsx("h3", {
                    className: "text-lg lg:text-xl font-bold mb-4 lg:mb-6",
                    children: "Collections",
                  }),
                  c.jsxs("ul", {
                    className: "space-y-2 lg:space-y-3",
                    children: [
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Women's Earrings",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Women's Necklaces",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Women's Rings",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Men's Chains",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors text-sm lg:text-base",
                          children: "Men's Rings",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("h3", {
                    className: "text-lg lg:text-xl font-bold mb-4 lg:mb-6",
                    children: "Contact Info",
                  }),
                  c.jsxs("div", {
                    className: "space-y-3 lg:space-y-4",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx(vo, {
                            className:
                              "w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 mt-1",
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("p", {
                                className: "font-semibold text-sm lg:text-base",
                                children: "+91 95760 30821",
                              }),
                              c.jsx("p", {
                                className: "text-gray-400 text-xs lg:text-sm",
                                children: "Mon-Sat: 9 AM - 8 PM",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx(Bg, {
                            className:
                              "w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 mt-1",
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("p", {
                                className: "font-semibold text-sm lg:text-base",
                                children: "info@ddenterprises.net",
                              }),
                              c.jsx("p", {
                                className: "text-gray-400 text-xs lg:text-sm",
                                children: "24/7 Email Support",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          c.jsx(sd, {
                            className:
                              "w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 mt-1",
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("p", {
                                className: "font-semibold text-sm lg:text-base",
                                children: "Ghaziabad, Uttar Pradesh",
                              }),
                              c.jsx("p", {
                                className: "text-gray-400 text-xs lg:text-sm",
                                children: "Serving Pan India",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: "border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8",
            children: c.jsxs("div", {
              className:
                "flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0",
              children: [
                c.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        c.jsx(es, {
                          className: "w-4 h-4 lg:w-5 lg:h-5 text-yellow-500",
                        }),
                        c.jsx("span", {
                          className: "text-xs lg:text-sm",
                          children: "GSTIN: 09EWYPK1638C1Z4",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        c.jsx(es, {
                          className: "w-4 h-4 lg:w-5 lg:h-5 text-yellow-500",
                        }),
                        c.jsx("span", {
                          className: "text-xs lg:text-sm",
                          children: "Udyam No: UDYAM-UP-29-0161014",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx("div", {
                  className:
                    "text-xs lg:text-sm text-gray-400 text-center lg:text-right",
                  children: "© 2025 DD Enterprises. All rights reserved.",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  nk = () => {
    const e = () => {
      const n = `https://wa.me/919576030821?text=${encodeURIComponent(
        "Hi! I'm interested in your jewellery collection. Can you please share more details?"
      )}`;
      window.open(n, "_blank");
    };
    return c.jsx("div", {
      className: "fixed bottom-6 right-6 z-50",
      children: c.jsxs("button", {
        onClick: e,
        className:
          "group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none",
        children: [
          c.jsx($c, { className: "w-8 h-8 text-white" }),
          c.jsx("div", {
            className:
              "absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20",
          }),
          c.jsx("div", {
            className:
              "absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            children: c.jsxs("div", {
              className:
                "bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap",
              children: [
                "Chat with us on WhatsApp",
                c.jsx("div", {
                  className:
                    "absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  rk = () =>
    c.jsxs("div", {
      className: "min-h-screen bg-white",
      children: [
        c.jsx(iE, {}),
        c.jsx(lE, {}),
        c.jsx(CE, {}),
        c.jsx(EE, {}),
        c.jsx(NE, {}),
        c.jsx(ZN, {}),
        c.jsx(JN, {}),
        c.jsx(ek, {}),
        c.jsx(tk, {}),
        c.jsx(nk, {}),
      ],
    }),
  ok = Ol(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function $p({ className: e, variant: t, ...n }) {
  return c.jsx("div", { className: ue(ok({ variant: t }), e), ...n });
}
const sk = [
    {
      id: "jewellery-sets",
      name: "Jewellery Sets",
      description: "Complete jewelry sets with matching pieces",
      catalogs: [
        {
          id: "bridal-sets-2024",
          name: "Bridal Sets Collection 2024",
          description: "Elegant bridal jewelry sets for your special day",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "2.5 MB",
          lastUpdated: "2024-01-15",
        },
      ],
    },
    {
      id: "earrings-studs",
      name: "Earrings & Studs",
      description: "Beautiful earrings and elegant studs",
      catalogs: [
        {
          id: "earrings-collection-2024",
          name: "Earrings Collection 2024",
          description: "Latest collection of earrings and studs",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.8 MB",
          lastUpdated: "2024-01-10",
        },
      ],
    },
    {
      id: "mangalsutras",
      name: "Mangalsutras",
      description: "Traditional and modern mangalsutra designs",
      catalogs: [
        {
          id: "mangalsutra-collection-2024",
          name: "Mangalsutra Collection 2024",
          description: "Sacred and beautiful mangalsutra designs",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "2.1 MB",
          lastUpdated: "2024-01-12",
        },
      ],
    },
    {
      id: "bangles-bracelets",
      name: "Bangles & Bracelets",
      description: "Stunning bangles and trendy bracelets",
      catalogs: [
        {
          id: "bangles-collection-2024",
          name: "Bangles & Bracelets 2024",
          description: "Elegant bangles and modern bracelets",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.9 MB",
          lastUpdated: "2024-01-08",
        },
      ],
    },
    {
      id: "necklaces-pendants",
      name: "Necklaces & Pendants",
      description: "Graceful necklaces and beautiful pendants",
      catalogs: [
        {
          id: "necklaces-collection-2024",
          name: "Necklaces & Pendants 2024",
          description: "Stunning necklaces and pendant designs",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "3.2 MB",
          lastUpdated: "2024-01-14",
        },
      ],
    },
    {
      id: "rings",
      name: "Rings",
      description: "Elegant rings for every occasion",
      catalogs: [
        {
          id: "rings-collection-2024",
          name: "Rings Collection 2024",
          description: "Beautiful rings for all occasions",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.5 MB",
          lastUpdated: "2024-01-11",
        },
      ],
    },
    {
      id: "waistbands-forehead",
      name: "Waistbands & Forehead Adornments",
      description: "Traditional waistbands and forehead jewelry",
      catalogs: [
        {
          id: "traditional-adornments-2024",
          name: "Traditional Adornments 2024",
          description: "Classic waistbands and forehead jewelry",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.2 MB",
          lastUpdated: "2024-01-09",
        },
      ],
    },
    {
      id: "anklets-toe-rings",
      name: "Anklets & Toe Rings",
      description: "Delicate anklets and charming toe rings",
      catalogs: [
        {
          id: "anklets-collection-2024",
          name: "Anklets & Toe Rings 2024",
          description: "Beautiful anklets and toe ring designs",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.1 MB",
          lastUpdated: "2024-01-07",
        },
      ],
    },
    {
      id: "mens-jewellery",
      name: "Men's Jewellery",
      description: "Stylish jewelry designed for men",
      catalogs: [
        {
          id: "mens-collection-2024",
          name: "Men's Jewellery 2024",
          description: "Modern and traditional jewelry for men",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "1.7 MB",
          lastUpdated: "2024-01-13",
        },
      ],
    },
    {
      id: "oxidized-jewellery",
      name: "Oxidized Jewellery",
      description: "Vintage-style oxidized jewelry pieces",
      catalogs: [
        {
          id: "oxidized-collection-2024",
          name: "Oxidized Jewellery 2024",
          description: "Trendy oxidized jewelry collection",
          downloadUrl:
            "https://drive.google.com/file/d/your-file-id/view?usp=sharing",
          fileSize: "2.0 MB",
          lastUpdated: "2024-01-06",
        },
      ],
    },
  ],
  ik = { categories: sk },
  lk = () => {
    const [e, t] = h.useState("all"),
      n = ik.categories,
      r = e === "all" ? n : n.filter((s) => s.id === e),
      o = (s) => {
        var l;
        const i =
          (l = s.match(/\/d\/([a-zA-Z0-9-_]+)/)) == null ? void 0 : l[1];
        if (i) {
          const a = `https://drive.google.com/uc?export=download&id=${i}`;
          window.open(a, "_blank");
        } else window.open(s, "_blank");
      };
    return c.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-background via-background to-accent/5",
      children: c.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12",
            children: [
              c.jsx("h1", {
                className:
                  "text-4xl lg:text-5xl font-bold text-foreground mb-4",
                children: "Product Catalogs",
              }),
              c.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Download our latest jewelry catalogs to explore our exquisite collections",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex flex-wrap gap-2 justify-center mb-8",
            children: [
              c.jsx(at, {
                variant: e === "all" ? "default" : "outline",
                onClick: () => t("all"),
                size: "sm",
                children: "All Categories",
              }),
              n.map((s) =>
                c.jsx(
                  at,
                  {
                    variant: e === s.id ? "default" : "outline",
                    onClick: () => t(s.id),
                    size: "sm",
                    children: s.name,
                  },
                  s.id
                )
              ),
            ],
          }),
          e === "all"
            ? c.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: n.map((s) =>
                  s.catalogs.map((i) =>
                    c.jsxs(
                      cr,
                      {
                        className:
                          "group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card",
                        children: [
                          c.jsxs(dl, {
                            children: [
                              c.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  c.jsx(qf, {
                                    className: "w-8 h-8 text-primary mb-2",
                                  }),
                                  c.jsx($p, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: "PDF",
                                  }),
                                ],
                              }),
                              c.jsx(fl, {
                                className:
                                  "text-xl group-hover:text-primary transition-colors",
                                children: i.name,
                              }),
                              c.jsx(pl, {
                                className: "text-sm",
                                children: i.description,
                              }),
                              c.jsx("div", {
                                className:
                                  "text-xs text-muted-foreground font-medium",
                                children: s.name,
                              }),
                            ],
                          }),
                          c.jsxs(ur, {
                            className: "space-y-4",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-sm text-muted-foreground",
                                children: [
                                  c.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      c.jsx(Gf, { className: "w-4 h-4" }),
                                      c.jsx("span", { children: i.fileSize }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      c.jsx(Fc, { className: "w-4 h-4" }),
                                      c.jsx("span", {
                                        children: new Date(
                                          i.lastUpdated
                                        ).toLocaleDateString(),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs(at, {
                                onClick: () => o(i.downloadUrl),
                                className:
                                  "w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors",
                                size: "sm",
                                children: [
                                  c.jsx(Yf, { className: "w-4 h-4 mr-2" }),
                                  "Download Catalog",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      i.id
                    )
                  )
                ),
              })
            : c.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: r.map((s) =>
                  s.catalogs.map((i) =>
                    c.jsxs(
                      cr,
                      {
                        className:
                          "group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card",
                        children: [
                          c.jsxs(dl, {
                            children: [
                              c.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  c.jsx(qf, {
                                    className: "w-8 h-8 text-primary mb-2",
                                  }),
                                  c.jsx($p, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: "PDF",
                                  }),
                                ],
                              }),
                              c.jsx(fl, {
                                className:
                                  "text-xl group-hover:text-primary transition-colors",
                                children: i.name,
                              }),
                              c.jsx(pl, {
                                className: "text-sm",
                                children: i.description,
                              }),
                            ],
                          }),
                          c.jsxs(ur, {
                            className: "space-y-4",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-sm text-muted-foreground",
                                children: [
                                  c.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      c.jsx(Gf, { className: "w-4 h-4" }),
                                      c.jsx("span", { children: i.fileSize }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      c.jsx(Fc, { className: "w-4 h-4" }),
                                      c.jsx("span", {
                                        children: new Date(
                                          i.lastUpdated
                                        ).toLocaleDateString(),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs(at, {
                                onClick: () => o(i.downloadUrl),
                                className:
                                  "w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors",
                                size: "sm",
                                children: [
                                  c.jsx(Yf, { className: "w-4 h-4 mr-2" }),
                                  "Download Catalog",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      i.id
                    )
                  )
                ),
              }),
          c.jsxs("div", {
            className:
              "mt-16 p-6 bg-accent/10 rounded-lg border border-border/50",
            children: [
              c.jsx("h3", {
                className: "text-lg font-semibold text-foreground mb-3",
                children: "How to Update Catalogs",
              }),
              c.jsxs("div", {
                className: "text-sm text-muted-foreground space-y-2",
                children: [
                  c.jsx("p", {
                    children:
                      "• Upload your PDF catalogs to Google Drive or Dropbox",
                  }),
                  c.jsx("p", {
                    children:
                      "• Generate a public sharing link for each catalog",
                  }),
                  c.jsxs("p", {
                    children: [
                      "• Update the ",
                      c.jsx("code", {
                        className: "bg-muted px-1 rounded",
                        children: "src/data/catalogs.json",
                      }),
                      " file with the new links",
                    ],
                  }),
                  c.jsx("p", {
                    children:
                      "• The catalogs will be automatically available for download",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ak = () => {
    const e = Is();
    return (
      h.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      c.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            c.jsx("p", {
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            c.jsx("a", {
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  ck = new rC(),
  uk = () =>
    c.jsx(sC, {
      client: ck,
      children: c.jsxs(O2, {
        children: [
          c.jsx(Ab, {}),
          c.jsx(iS, {}),
          c.jsx(tE, {
            children: c.jsxs(YC, {
              children: [
                c.jsx(ji, { path: "/", element: c.jsx(rk, {}) }),
                c.jsx(ji, { path: "/catalogs", element: c.jsx(lk, {}) }),
                c.jsx(ji, { path: "*", element: c.jsx(ak, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
ug(document.getElementById("root")).render(c.jsx(uk, {}));
