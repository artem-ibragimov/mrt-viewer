webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Header */ "./src/Header.tsx");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Content */ "./src/Content.tsx");
/* harmony import */ var _staticResources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/staticResources */ "./src/staticResources.ts");
var _jsxFileName = "c:\\project\\suby\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#202020'
    },
    type: 'dark'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: videos,
    1: setVideos
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(_staticResources__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const {
    0: locale,
    1: setLocale
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('RU');

  const onSearch = query => {
    setVideos(query ? filter(_staticResources__WEBPACK_IMPORTED_MODULE_8__["default"], query) : _staticResources__WEBPACK_IMPORTED_MODULE_8__["default"]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Suby")), __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["NoSsr"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onSearch: onSearch,
    onLocaleChange: setLocale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
    videos: videos,
    locale: locale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))));
});

function filter(list, query) {
  const q = query.toLowerCase();
  return list.filter(s => s.toLowerCase().includes(q));
}

/***/ })

})
//# sourceMappingURL=index.js.0d8cf82cc613dc83bc50.hot-update.js.map