webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/Player.tsx":
/*!************************!*\
  !*** ./src/Player.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Player_Track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Player/Track */ "./src/Player/Track.tsx");
var _jsxFileName = "c:\\project\\suby\\src\\Player.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/** seek back in 5 sec by LeftArrow key pressing  */
const STEP = 5;
const LEFT_ARROW_KEYCODE = 37;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  videoClass: {
    width: '100%',
    background: 'transparent'
  }
});
let timestamp = 0;
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    videoClass
  } = useStyles();
  const videoRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  const videoLocale = (/\[(.*)\]/.exec(props.root) || [null]).pop();
  const allowSecSub = props.locale !== videoLocale;

  if (!videoLocale) {
    throw new Error("Video locale is not defined! ".concat(props.root));
  }

  const {
    0: isPrimSubVisible,
    1: visiblePrimSub
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isSecSubVisible,
    1: visibleSecSub
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function onSeeked() {
    if (!videoRef.current || timestamp < videoRef.current.currentTime) {
      return;
    }

    if (isPrimSubVisible && allowSecSub) {
      !isSecSubVisible && visibleSecSub(true);
      return;
    }

    !isPrimSubVisible && visiblePrimSub(true);
  }

  function onTimeUpdate() {
    if (!videoRef.current || timestamp > videoRef.current.currentTime) {
      return;
    }

    timestamp = videoRef.current.currentTime;
    isPrimSubVisible && visiblePrimSub(false);
    isSecSubVisible && visibleSecSub(false);
  }

  const onError = () => {
    videoRef.current && console.error(videoRef.current.error);
  };

  return __jsx("video", {
    preload: "auto",
    ref: videoRef,
    controls: true,
    autoPlay: true,
    onSeeked: onSeeked,
    className: videoClass,
    onError: onError,
    onTimeUpdate: onTimeUpdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("source", {
    src: "".concat(props.root, "/video.mp4"),
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_Player_Track__WEBPACK_IMPORTED_MODULE_2__["default"], {
    visible: isPrimSubVisible,
    root: props.root,
    locale: videoLocale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(_Player_Track__WEBPACK_IMPORTED_MODULE_2__["default"], {
    visible: isSecSubVisible,
    root: props.root,
    locale: props.locale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), "} Sorry, your browser doesn't support embedded videos.");
}));

/***/ })

})
//# sourceMappingURL=index.js.2b67e41bcbcad434d6c4.hot-update.js.map