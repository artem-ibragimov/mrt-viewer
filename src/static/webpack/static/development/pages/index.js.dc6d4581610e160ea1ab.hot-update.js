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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Content */ "./src/Content.tsx");
/* harmony import */ var _staticResources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/staticResources */ "./src/staticResources.ts");
var _jsxFileName = "c:\\project\\suby\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;










const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(_staticResources__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const {
    0: locale,
    1: setLocale
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('RU');

  const onSearch = query => {
    setVideos(query ? _staticResources__WEBPACK_IMPORTED_MODULE_8__["default"].filter(name => name.includes(query)) : _staticResources__WEBPACK_IMPORTED_MODULE_8__["default"]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Suby")), __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ })

})
//# sourceMappingURL=index.js.dc6d4581610e160ea1ab.hot-update.js.map