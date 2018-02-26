webpackHotUpdate(3, {
  /***/ 322: /***/ function(module, exports, __webpack_require__) {
    'use strict'
    eval(
      "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(2);\n\nvar _utils = __webpack_require__(0);\n\nvar _utils2 = __webpack_require__(27);\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function (api) {\n  return function () {\n    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, next) {\n      var _req, route, routes, options, action, history, getLocation, location, act, url, _createNotFoundRoute, _type, _url, _createNotFoundRoute2, _type2, _url2, _params, _act, _req$action, type, params, query, hash, state;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _req = req, route = _req.route, routes = _req.routes, options = _req.options, action = _req.action, history = _req.history, getLocation = _req.getLocation;\n\n              if (!(action.type !== _types.UPDATE_HISTORY && !route.path)) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt('return', next());\n\n            case 3:\n\n              try {\n                if (action.type === _types.UPDATE_HISTORY) {\n                  location = action.nextHistory.location;\n                  act = (0, _utils.urlToAction)(location, routes, options);\n\n                  req = (0, _utils2.historyAction)(req, act);\n                } else if (!(0, _utils.isNotFound)(action)) {\n                  url = (0, _utils.actionToUrl)(action, routes, options);\n\n                  req = (0, _utils2.reduxAction)(req, url, action, history);\n                } else {\n                  _createNotFoundRoute = (0, _utils2.createNotFoundRoute)(req), _type = _createNotFoundRoute.type, _url = _createNotFoundRoute.url;\n\n                  action.type = _type;\n                  req = (0, _utils2.reduxAction)(req, _url, action, history);\n                }\n              } catch (e) {\n                _createNotFoundRoute2 = (0, _utils2.createNotFoundRoute)(req), _type2 = _createNotFoundRoute2.type, _url2 = _createNotFoundRoute2.url;\n                _params = action && action.params || {};\n                _act = _extends({}, action, { type: _type2, params: _params });\n\n                req = (0, _utils2.reduxAction)(req, _url2, _act, history);\n              }\n\n              // `setState` needs to skip the callbacks of the middleware pipeline and go straight to the reducer.\n              // Also, `setState` kind will have the same URL, so we must handle it before `isDoubleDispatch`.\n\n              if (!(req.action.location.kind === 'setState')) {\n                _context.next = 6;\n                break;\n              }\n\n              return _context.abrupt('return', req.commit());\n\n            case 6:\n              if (!isDoubleDispatch(req, getLocation())) {\n                _context.next = 11;\n                break;\n              }\n\n              if (req.tmp.prevAction) {\n                _context.next = 9;\n                break;\n              }\n\n              return _context.abrupt('return', req.action);\n\n            case 9:\n\n              // and if it happens to be within a route-changing pipline that redirects,\n              // insure the parent pipeline short-ciruits while setting `state.from` (see `call/index.js`)\n              if (req.tmp.revertPop) req.tmp.revertPop();\n              return _context.abrupt('return', req.ctx.doubleDispatchRedirect = req.action);\n\n            case 11:\n              _req$action = req.action, type = _req$action.type, params = _req$action.params, query = _req$action.query, hash = _req$action.hash, state = _req$action.state;\n\n              Object.assign(req, { type: type, params: params, query: query, hash: hash, state: state });\n\n              req.tmp.from = req.action; // record attempted route for potential redirects\n\n              _context.next = 16;\n              return next();\n\n            case 16:\n              return _context.abrupt('return', req.action);\n\n            case 17:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar isDoubleDispatch = function isDoubleDispatch(req, state) {\n  return req.action.location.url === state.url && req.getKind() !== 'load' // on load, the `firstRoute` action will trigger the same URL as stored in state, and we need to dispatch it anyway :)\n  && req.action.info !== 'reset';\n};\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/jamesgillmore/React/redux-first-router/src/middleware/transformAction/index.js\n// module id = 322\n// module chunks = 3\n\n//# sourceURL=webpack:////Users/jamesgillmore/React/redux-first-router/src/middleware/transformAction/index.js?"
    )

    /***/
  }
})