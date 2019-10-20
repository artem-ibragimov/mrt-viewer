webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/Content.tsx":
/*!*************************!*\
  !*** ./src/Content.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/VideoCard */ "./src/VideoCard.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "c:\\project\\suby\\src\\Content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '58px',
    flexDirection: 'row',
    flexWrap: 'wrap'
  } // cardClass: { margin: '20px' }

}));
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const {
    root,
    cardClass
  } = useStyles();
  return __jsx("div", {
    className: root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, props.videos.map(name => __jsx(_VideoCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: cardClass,
    name: name,
    key: name,
    locale: props.locale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })));
}));

/***/ })

})
//# sourceMappingURL=index.js.1d780b08c44f19b90896.hot-update.js.map