(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Component/app.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Component/app.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  border-left: 1px solid rgb(219, 219, 219);\n  border-right: 1px solid rgb(219, 219, 219);\n  padding: 15px;\n  \n}\n\n.App {\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 5px;\n    padding-right: 5px;\n    \n}\n\n\n.header {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1071;\n    background-color:black;\n    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);\n    min-height: 5rem;\n  }\n\n\n\n  .logo {\n    max-width: 200px; \n    max-height: 200px;\n  }\n\n.item {\n  position: -webkit-sticky;\n  position: sticky;\n  top:100px;\n}\n\n  .consoleDetail {\n    position: -webkit-sticky;\n    position: sticky;\n    top:100px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: initial;\n            flex-wrap: initial;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    overflow: hidden;\n  \n    -webkit-flex: 1 1;\n  \n            flex: 1 1;\n    \n  }\n\n  .navbar {\n    -webkit-justify-content: left;\n            justify-content: left;\n    font-weight: 600;    \n}\n\n.link {\n    color: #fff;\n    display: block;\n    font-size: 1.25em;\n    line-height: 18px;\n    margin: 0;\n    position: relative;\n    z-index: 9999;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    -webkit-padding-start: 40px;\n            padding-inline-start: 40px;\n\n\n}\n\n.btn {\n    margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./src/Component/App.js":
/*!******************************!*\
  !*** ./src/Component/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nintendo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nintendo */ "./src/Component/Nintendo.js");
/* harmony import */ var _Sega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sega */ "./src/Component/Sega.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Component/Header.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/App.js";






var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true,
    component: _Nintendo__WEBPACK_IMPORTED_MODULE_1__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/sega",
    component: _Sega__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Component/ConsoleDetail.js":
/*!****************************************!*\
  !*** ./src/Component/ConsoleDetail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_nintendoLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/nintendoLogo.png */ "./src/assets/nintendoLogo.png");
/* harmony import */ var _assets_nintendoLogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_nintendoLogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./src/Component/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/ConsoleDetail.js";





var ConsoleDetail = function ConsoleDetail(_ref) {
  var nintendo = _ref.nintendo;

  if (!nintendo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "S\xE9lectionnez une console"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "consoleDetail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-sm-18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card border-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: _assets_nintendoLogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: nintendo.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Console: ", nintendo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Ann\xE9e de commercialisation: ", nintendo.annee), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Histoire: ", nintendo.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Specs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "CPU : ", nintendo.cpu), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "M\xE9moire : ", nintendo.memoire), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Affichage : ", nintendo.affichage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Taille : ", nintendo.taille)))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    nintendo: state.selectedConsole
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ConsoleDetail));

/***/ }),

/***/ "./src/Component/ConsoleDetailSega.js":
/*!********************************************!*\
  !*** ./src/Component/ConsoleDetailSega.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/ConsoleDetailSega.js";



var ConsoleDetailSega = function ConsoleDetailSega(_ref) {
  var sega = _ref.sega;

  if (!sega) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "S\xE9lectionnez une console");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "consoleDetail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "D\xE9tails:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Console: ", sega.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Ann\xE9e de commercialisation: ", sega.annee), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Histoire: ", sega.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Specs:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "CPU : ", sega.cpu), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "M\xE9moire : ", sega.memoire), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: sega.url2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sega: state.selectedConsoleSega
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ConsoleDetailSega));

/***/ }),

/***/ "./src/Component/ConsoleList.js":
/*!**************************************!*\
  !*** ./src/Component/ConsoleList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.css */ "./src/Component/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/ConsoleList.js";





var ConsoleList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ConsoleList, _Component);

  function ConsoleList() {
    Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConsoleList);

    return Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConsoleList).apply(this, arguments));
  }

  Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConsoleList, [{
    key: "renderList",
    value: function renderList() {
      var _this = this;

      return this.props.nintendo.map(function (nintendo) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row",
          key: nintendo.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-sm-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          class: "card bg-light mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          class: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          class: "card-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "card-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, nintendo.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, nintendo.annee)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: nintendo.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          class: "card-footer text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          type: "button",
          className: "btn btn-dark",
          onClick: function onClick() {
            _this.props.selectConsoleNintendo(nintendo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "D\xE9tails")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          className: "separateur",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }))))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.renderList());
    }
  }]);

  return ConsoleList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    nintendo: state.nintendo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  selectConsoleNintendo: _actions_index__WEBPACK_IMPORTED_MODULE_7__["selectConsoleNintendo"]
})(ConsoleList));

/***/ }),

/***/ "./src/Component/ConsoleListSega.js":
/*!******************************************!*\
  !*** ./src/Component/ConsoleListSega.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");





var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/ConsoleListSega.js";




var ConsoleListSega =
/*#__PURE__*/
function (_Component) {
  Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ConsoleListSega, _Component);

  function ConsoleListSega() {
    Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConsoleListSega);

    return Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConsoleListSega).apply(this, arguments));
  }

  Object(_Users_pierreraffalli_Desktop_react_consoles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConsoleListSega, [{
    key: "renderList",
    value: function renderList() {
      var _this = this;

      return this.props.sega.map(function (sega) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item",
          key: sega.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right floated content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          type: "button",
          onClick: function onClick() {
            _this.props.selectConsoleSega(sega);
          },
          className: "btn btn-dark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, "Select")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, sega.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, sega.annee), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: sega.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui divided list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.renderList());
    }
  }]);

  return ConsoleListSega;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    sega: state.sega
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  selectConsoleSega: _actions_index__WEBPACK_IMPORTED_MODULE_7__["selectConsoleSega"]
})(ConsoleListSega));

/***/ }),

/***/ "./src/Component/Header.js":
/*!*********************************!*\
  !*** ./src/Component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./src/Component/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Nintendo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/sega",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Sega"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/sony",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Sony")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Component/Nintendo.js":
/*!***********************************!*\
  !*** ./src/Component/Nintendo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConsoleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleList */ "./src/Component/ConsoleList.js");
/* harmony import */ var _ConsoleDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleDetail */ "./src/Component/ConsoleDetail.js");
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/Nintendo.js";




var Nintendo = function Nintendo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsoleList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsoleDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nintendo);

/***/ }),

/***/ "./src/Component/Sega.js":
/*!*******************************!*\
  !*** ./src/Component/Sega.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConsoleListSega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleListSega */ "./src/Component/ConsoleListSega.js");
/* harmony import */ var _ConsoleDetailSega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleDetailSega */ "./src/Component/ConsoleDetailSega.js");
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/Component/Sega.js";




var Sega = function Sega() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsoleListSega__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsoleDetailSega__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sega);

/***/ }),

/***/ "./src/Component/app.css":
/*!*******************************!*\
  !*** ./src/Component/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Component/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Component/app.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Component/app.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: selectConsoleNintendo, selectConsoleSega */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConsoleNintendo", function() { return selectConsoleNintendo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConsoleSega", function() { return selectConsoleSega; });
// action creator
var selectConsoleNintendo = function selectConsoleNintendo(nintendo) {
  // return action
  return {
    type: "CONSOLE_SELECTED",
    payload: nintendo
  };
};
var selectConsoleSega = function selectConsoleSega(sega) {
  // return action
  return {
    type: "CONSOLE_SELECTED_SEGA",
    payload: sega
  };
};

/***/ }),

/***/ "./src/assets/nintendoLogo.png":
/*!*************************************!*\
  !*** ./src/assets/nintendoLogo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Component_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/App */ "./src/Component/App.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/index */ "./src/reducers/index.js");
var _jsxFileName = "/Users/pierreraffalli/Desktop/react/consoles/src/index.js";






var rootElement = document.getElementById("root");
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["default"]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), rootElement);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


var NintendoReducer = function NintendoReducer() {
  return [{
    title: "Nintendo Entertainment System",
    annee: "1986",
    description: "Ce qui était au départ le Famicom (Family Computer) au Japon finit par devenir la machine qui sauva l'industrie du jeu vidéo. Après une chute énorme du marché des jeux à l'ouest, le Nintendo Entertainment System a démenti les experts en se vendant par millions. Les joueurs se ruèrent pour voir et pour jouer à des classiques comme Super Mario Bros, The Legend of Zelda et Excitebike, autant de titres qui étaient déjà tellement en avance sur ceux des autres consoles de salon.",
    url: "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1986_Nintendo_Entertainment_System_large_support_carousel_image.png",
    cpu: "8-bit, 1.66 Mhz",
    memoire: "2 Ko RAM - Video RAM 2 Ko",
    affichage: "256 x 240 pixel de résolution maximum, 52 couleurs, 8 x 16 pixels de taille maximum de sprite, 64 sprites à l'écran",
    taille: "255mm x 85mm x 202mm"
  }, {
    title: "Nintendo Game Boy",
    annee: "1990",
    description: "Tout le monde adore le Game Boy. Avec une si grande puissance contenue dans un si petit boîtier, cette petite console révolutionna le jeu vidéo à sa sortie au Japon en 1989. Depuis lors, cette console de poche a été vendue à plus de 100 millions d'exemplaires, offrant aux joueurs du monde entier la possibilité de jouer à leurs jeux favoris - comme Tetris, Super Mario et Pokémon - quel que soit l'endroit où ils se trouvent.",
    url: "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1990-Gameboy_large_support_carousel_image.png",
    cpu: "Personnalisé 8 - Bit CMOS, 2.2Mhz",
    memoire: "64-Kbit RAM statique",
    affichage: "STN type dot matrix LCD, 160 x 144 pixels, 4 nuances de gris",
    taille: "90mm x 148mm x 32mm"
  }, {
    title: "Super Nintendo",
    annee: "1992",
    description: "À sa sortie en Europe en 1992, la console Super Nintendo Entertainment époustoufla les joueurs avec ses graphismes et sa jouabilité qui propulsaient le monde des jeux vidéo dans une ère spectaculairement nouvelle. La Super Nintendo offre un vrai son stéréo, des décors déroulants multiples, et une mémoire intégrée deux fois plus grande que sur son aînée NES - ainsi que des cartouches de taille géante qui permettent au système de recréer d'immenses mondes qu'il faut des semaines pour explorer.",
    url: "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1992_Super_Nintendo_large_support_carousel_image.png",
    cpu: "16-bit 65816 processor, 2.68 Mhz",
    memoire: "RAM : 1 Mbit, RAM Vidéo : 0.5 Mbit, Taille de carte : 2 Mbit - 48 Mbit",
    affichage: "512 x 448 pixels de résolution maximum, 32,768 couleurs, 256 couleurs à l'écran, 64 x 64 pixels de taille maximum de sprite, 128 sprites à l'écran",
    taille: "200mm x 72mm x 242mm"
  }, {
    title: "Nintendo 64",
    annee: "1997",
    description: "Le chiffre '64' pour les 64 bits de riches graphismes que la Nintendo 64 apporte dans votre télévision. Exploitant chaque astuce graphique existante, la Nintendo 64 vous invite à explorer des mondes époustouflants en 3D qui regorgent de couleurs s'animent à l'aide d'effets graphiques en temps réel et séduisent vos oreilles avec un son de qualité CD.",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1997_Nintendo_64_large_support_carousel_image.png",
    cpu: "MIPS 64-bit RISC CPU (série personnalisée R4000), 93.75 MHz",
    memoire: "RAMBUS D-RAM 36M bit, Vitesse de transfert : 4 500M bit/sec. maximum",
    affichage: "256 x 224 ~ 640 x 480 points, option mode sans Flicker entrecroisé",
    taille: "Longueur 260mm, largeur 190mm, hauteur 73mm"
  }, {
    title: "Gameboy Color",
    annee: "1998",
    description: "Le Game Boy Color fait partie d'une famille de consoles portables qui ont révolutionné la manière de jouer du monde entier. En trente ans, le Game Boy est devenu la console préférée sur la planète - plus de 100 millions d'unités vendues en font le système de loin le plus populaire. Le Game Boy Color apporte un fantastique arc-en-ciel de plus de 32 000 couleurs possibles sur un écran de 44 x 39 mm, ajouté à un processeur deux fois plus puissant que celui de son petit frère.",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1999_Gameboy_Color_large_support_carousel_image.png",
    cpu: "8-bit Z80",
    memoire: "32 Kbyte + 96 Kbyte VRAM (intégré CPU), 256 Kbyte WRAM (externe au CPU)",
    affichage: "Écran couleur LCD, taille 44 x 39mm, résolution 160x140, 32 768 couleurs possibles, 56 couleurs simultanément",
    taille: "Largeur 75mm, épaisseur 27mm, longueur 133mm"
  }, {
    title: "GameBoy Advance",
    annee: "2001",
    description: "C'est en 2001 que Nintendo a mis en circulation dans les mains des gamers les plus exigeants la nouvelle génération du jeu portable. Avec le Game Boy Advance c'est une qualité de jeu de console de salon que vous pouvez maintenant vous mettre dans la poche. C'est coloré, éclatant et le design très intuitif des contrôles est toujours un grand classique.",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2001_Gameboy_Advanced_large_support_carousel_image.png",
    cpu: "32-Bit ARM avec mémoire intégrée",
    memoire: "32 Kbyte + 96 Kbyte VRAM (dans CPU), 256 Kbyte WRAM (externe au CPU)",
    affichage: "2.9'' écran réflecteur TFT, résolution 240x160, taille d'écran 40,8 mm x 61,2 mm, 32 768 couleurs possibles, 511 couleurs simultanément en mode personnage, 32 768 couleurs simultanément en mode bitmap",
    taille: "Largeur 144,5 mm / Profondeur 24,5 mm / Hauteur 82 mm"
  }, {
    title: "Nintendo GameCube",
    annee: "2002",
    description: "Petit, mignon et désirable - c'est le Nintendo GameCube. Disponible en violet, noir et en éditions spéciales de différentes couleurs, le design unique du Nintendo GameCube et sa forme compacte (11.4cm x 15cm x 16cm) démontrent bien la volonté de Nintendo de perpétuer l'originalité et l'innovation dans le monde des jeux vidéo. Et avec toute la puissance qu'il y a sous le capot pour un si petit prix, Nintendo GameCube est un investissement plus que rentable.",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2002_Nintendo_Gamecube_large_support_carousel_image.png",
    cpu: "IBM Power PC modifié 485 mhz",
    memoire: "24 Mo de SRAM type MoSys (accès en 1 cycle, temps d'accès moyen de 10 ns)",
    affichage: "Flipper personnalisé ATI/Nintendo",
    taille: "11.4cm (H) x 15cm (L) x 16cm (P)"
  }, {
    title: "GameBoy Advance SP",
    annee: "2002",
    description: "On a gardé tout ce que vous adorez du Game Boy Advance, rêvé toute une série de nouvelles spécificités (nouvel écran éclairé intégré rabattable, nouvelle batterie rechargeable) et réussi le tour de force de mettre le tout dans la portable au style le plus épuré que vous ayez jamais vu. Désormais, à vous tous les jeux Game Boy et Game Boy Advance sur une console ''first class'' !",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2003_gameboy_color_large_support_carousel_image.png",
    cpu: "32 bits ARM avec mémoire intégrée",
    memoire: "32 Ko + 96 Ko VRAM (interne CPU), 256 Ko WRAM (externe CPU)",
    affichage: "Écran diffusant 2,9'' TFT avec éclairage intégré, résolution 240 x 160, taille de l'écran 40,8 mm x 61,2 mm, 32768 couleurs possibles, 511 couleurs simultanées en mode personnage, 32768 images simultanées en mode image par points.",
    taille: "Largeur 82 mm / Epaisseur 24,3 mm / Longueur 84,6 mm"
  }, {
    title: "Nintendo DS",
    annee: "2005",
    description: "Avec deux écrans LCD rétro-éclairés d'une très grande définition, la Nintendo DS Lite offre une nouvelle approche du jeu. Les possibilités sont illimitées : l'un des écrans peut servir à montrer l'action principale tandis qu'un autre peut être utilisé pour montrer les cartes, inventaires, ou point de vue secondaire, mais les deux écrans peuvent être utilisés simultanément pour montrer les immenses boss !",
    url: "//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2005_Nintendo_DS_large_support_carousel_image.png",
    cpu: "na",
    memoire: "na",
    affichage: "na",
    taille: "na"
  }];
};

var SegaReducer = function SegaReducer() {
  return [{
    title: "Sega SG 1000",
    annee: "1983",
    description: "La SG 1000 également connue sous le nom Sega Game 1000, est une console de jeux vidéo de troisième génération conçue et commercialisée par le constructeur japonais Sega Enterprises, Ltd. La console marque l'entrée de Sega dans le jeu vidéo à domicile et constitue une base pour la plus fructueuse Master System. Dévoilée en 1983, la SG-1000 sort le même jour que la Famicom de Nintendo au Japon. Elle est mise sur le marché sous plusieurs formes, comprenant l'ordinateur SC-3000 et la version redessinée SG-1000 II lancée en 1984.",
    url: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sega_SG-1000.jpg/220px-Sega_SG-1000.jpg"
  }];
};

var selectedConsoleReducer = function selectedConsoleReducer() {
  var selectedConsole = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "CONSOLE_SELECTED") {
    return action.payload;
  }

  return selectedConsole;
};

var selectedConsoleSegaReducer = function selectedConsoleSegaReducer() {
  var selectedConsoleSega = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "CONSOLE_SELECTED_SEGA") {
    return action.payload;
  }

  return selectedConsoleSega;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  nintendo: NintendoReducer,
  sega: SegaReducer,
  selectedConsole: selectedConsoleReducer,
  selectedConsoleSega: selectedConsoleSegaReducer
}));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/pierreraffalli/Desktop/react/consoles/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/pierreraffalli/Desktop/react/consoles/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map