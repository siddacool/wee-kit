/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/dist/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _capitalize = __webpack_require__(32);

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function _class(name) {
  _classCallCheck(this, _class);

  this.name = name;
  this.id = 'wee-' + this.name;
  this.fieldName = '' + (0, _capitalize2.default)(this.name);
  this.description = ':P';
  this.active = false;
  this.dom = 'de nada !';
};

exports.default = _class;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pallet = __webpack_require__(13);

var _pallet2 = _interopRequireDefault(_pallet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderColorHeader(type, name, hex) {
  return '\n    <div>\n      ' + type + '\n      ' + name + '\n      ' + hex + '\n    <div>\n  ';
}

function renderColorProps(type, palletArr) {
  return '\n  <div>\n    ' + type + ' \n    ' + palletArr.map(function (arr) {
    return '\n      <div>' + arr + '</div>\n    ';
  }).join('') + '\n    <div>\n  ';
}

function loopPallet() {
  var palletHead = [];

  for (var key in _pallet2.default) {
    var palletHead2 = [];

    for (var key2 in _pallet2.default[key]) {
      palletHead2.push(renderColorHeader(key, key2, _pallet2.default[key][key2]));
    }

    palletHead.push(renderColorProps(key, palletHead2));
  }

  return palletHead;
}

exports.default = loopPallet;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(29);

var _components2 = _interopRequireDefault(_components);

var _Catalog = __webpack_require__(5);

var _Catalog2 = _interopRequireDefault(_Catalog);

var _renderList = __webpack_require__(31);

var _renderList2 = _interopRequireDefault(_renderList);

var _renderDom = __webpack_require__(30);

var _renderDom2 = _interopRequireDefault(_renderDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = document.getElementById('wrapper');
var catalog = new _Catalog2.default();
var demand = catalog.demand();

(0, _components2.default)(catalog);

wrapper.innerHTML = '\n  ' + (0, _renderList2.default)(demand) + '\n  ' + (0, _renderDom2.default)(demand) + '\n';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

__webpack_require__(33);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Catalog = function () {
  function Catalog() {
    _classCallCheck(this, Catalog);

    this.list = [];
  }

  _createClass(Catalog, [{
    key: "demand",
    value: function demand() {
      return this.list;
    }
  }, {
    key: "add",
    value: function add(Component) {
      this.list.push(new Component());
    }
  }]);

  return Catalog;
}();

exports.default = Catalog;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(39);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'avatar'));

    _this.description = 'User profile icons';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(40);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'badge'));

    _this.description = 'Basic status badges';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(41);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'banner'));

    _this.fieldName = 'Banners';
    _this.description = 'Basic warining banners';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(42);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'breadcrumb'));

    _this.description = 'Basic breadcrumbs composed of anchor tags';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(43);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'button'));

    _this.description = 'Buttons are styled anchor tags';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(44);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'callout'));

    _this.fieldName = 'Callouts';
    _this.description = 'Basic Callouts to emphasize text';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(45);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'checkbox'));

    _this.description = 'Checkbox is a set of styled input type "Checkbox"';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pallet = {
  neutrals: {
    "900": "#091e42",
    "800": "#172b4d",
    "700": "#253858",
    "600": "#344563",
    "500": "#42526e",
    "300": "#5e6c84",
    "200": "#6c798f",
    "100": "#7a869a",
    "90": "#8993a4",
    "80": "#97a0af",
    "70": "#a5adba",
    "60": "#b3bac5",
    "50": "#c1c7d0",
    "40": "#dfe1e5",
    "30": "#ebecf0",
    "20": "#f4f5f7",
    "10": "#fafbfc",
    "0": "#fff"
  },
  reds: {
    "500": "#bf2600",
    "400": "#de350b",
    "300": "#ff5630",
    "200": "#ff7452",
    "100": "#ff8f73",
    "75": "#ffbdad",
    "50": "#ffebe5"
  },
  yellows: {
    "500": "#ff8b00",
    "400": "#ff991f",
    "300": "#ffab00",
    "200": "#ffc400",
    "100": "#ffe380",
    "75": "#fff0b2",
    "50": "#fffae5"
  },
  greens: {
    "500": "#006644",
    "400": "#00875a",
    "300": "#36b37e",
    "200": "#57d9a3",
    "100": "#79f2c0",
    "75": "#abf5d1",
    "50": "#e3fcef"
  },
  teals: {
    "500": "#008da6",
    "400": "#00a3bf",
    "300": "#00b8d9",
    "200": "#00c7e5",
    "100": "#79e2f2",
    "75": "#b3f5ff",
    "50": "#e6fcff"
  },
  blues: {
    "500": "#0049b0",
    "400": "#0052cc",
    "300": "#0065ff",
    "200": "#2684ff",
    "100": "#4c9aff",
    "75": "#b2d4ff",
    "50": "#deebff"
  },
  purples: {
    "500": "#403294",
    "400": "#5243aa",
    "300": "#6554c0",
    "200": "#8777d9",
    "100": "#998dd9",
    "75": "#c0b6f2",
    "50": "#eae6ff"
  }
};

exports.default = pallet;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(46);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'dropdown'));

    _this.description = 'Dropdown is a set of stylized form element "Select"';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(47);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'heading'));

    _this.fieldName = 'Headings';
    _this.description = 'Heading is a set of styled headings and paragraphs';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(48);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'inline-dialog'));

    _this.fieldName = 'Inline Dialog';
    _this.description = 'Inline Dialog boxes';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(49);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'inline-message'));

    _this.fieldName = 'Inline Messages';
    _this.description = 'Inline warning messages';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(50);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'lozenge'));

    _this.description = 'Basic lozenge warning badge';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(51);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'pagination'));

    _this.description = 'Basic pagination composed of anchor tags';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(52);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'progress'));

    _this.description = 'Progress bar';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(53);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'radio'));

    _this.description = 'Radio is a set of styled input type "Radio"';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(54);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'select'));

    _this.description = 'Select is a set of stylized form element "Select"';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(55);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'spinner'));

    _this.description = 'Animated loading icon';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(56);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tab'));

    _this.fieldName = 'Tabs';
    _this.description = 'Tab navigation';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(57);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tag'));

    _this.description = 'Basic tag element';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(58);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'text'));

    _this.fieldName = 'Text Fields';
    _this.description = 'Text Fields is the collection of Textbox and Textarea';
    _this.active = true;
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(59);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'toggle'));

    _this.description = 'Toggle is a modified version of input type "Checkbox"';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _dom = __webpack_require__(60);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseComponent) {
  _inherits(_class, _BaseComponent);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tooltip'));

    _this.description = 'Basic tooltip';
    _this.dom = _dom2.default;
    return _this;
  }

  return _class;
}(_baseComponent2.default);

exports.default = _class;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = __webpack_require__(26);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Select = __webpack_require__(22);

var _Select2 = _interopRequireDefault(_Select);

var _Dropdown = __webpack_require__(14);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Checkbox = __webpack_require__(12);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = __webpack_require__(21);

var _Radio2 = _interopRequireDefault(_Radio);

var _Toggle = __webpack_require__(27);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Pagination = __webpack_require__(19);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Breadcrumbs = __webpack_require__(9);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Tag = __webpack_require__(25);

var _Tag2 = _interopRequireDefault(_Tag);

var _Lozenge = __webpack_require__(18);

var _Lozenge2 = _interopRequireDefault(_Lozenge);

var _InlineMessage = __webpack_require__(17);

var _InlineMessage2 = _interopRequireDefault(_InlineMessage);

var _Callout = __webpack_require__(11);

var _Callout2 = _interopRequireDefault(_Callout);

var _Banner = __webpack_require__(8);

var _Banner2 = _interopRequireDefault(_Banner);

var _InlineDialog = __webpack_require__(16);

var _InlineDialog2 = _interopRequireDefault(_InlineDialog);

var _Badge = __webpack_require__(7);

var _Badge2 = _interopRequireDefault(_Badge);

var _Progress = __webpack_require__(20);

var _Progress2 = _interopRequireDefault(_Progress);

var _Avatar = __webpack_require__(6);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Tooltip = __webpack_require__(28);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Spinner = __webpack_require__(23);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Tab = __webpack_require__(24);

var _Tab2 = _interopRequireDefault(_Tab);

var _Heading = __webpack_require__(15);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Color from './Color';

var Components = function Components(catalog) {
  catalog.add(_Text2.default);
  catalog.add(_Button2.default);
  catalog.add(_Select2.default);
  catalog.add(_Dropdown2.default);
  catalog.add(_Checkbox2.default);
  catalog.add(_Radio2.default);
  catalog.add(_Toggle2.default);
  catalog.add(_Pagination2.default);
  catalog.add(_Breadcrumbs2.default);
  catalog.add(_Tag2.default);
  catalog.add(_Lozenge2.default);
  catalog.add(_InlineMessage2.default);
  catalog.add(_Callout2.default);
  catalog.add(_Banner2.default);
  catalog.add(_InlineDialog2.default);
  catalog.add(_Badge2.default);
  catalog.add(_Progress2.default);
  catalog.add(_Avatar2.default);
  catalog.add(_Tooltip2.default);
  catalog.add(_Spinner2.default);
  catalog.add(_Tab2.default);
  catalog.add(_Heading2.default);
  //catalog.add(Color);
};

exports.default = Components;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderDom(componentList) {
  return '\n    <main class="components-holder">\n    ' + componentList.map(function (component) {
    return '\n      <div class="component-sub-holder ' + (component.active ? 'show' : '') + '" id="component-' + component.id + '">\n        <section>\n          <div class="head-section">\n            <h1 class="wee-heading wee-heading--h900">' + component.fieldName + '<h1>\n            <p class="wee-heading wee-heading--description">' + component.description + '</p>\n          </div>\n          <div class="ui-section">\n            ' + component.dom + '\n          </div>\n        </section>\n      </div>\n    ';
  }).join('') + '\n    </main>\n  ';
}

exports.default = renderDom;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderList(componentList) {
  return '\n    <aside class="wee-sidebar">\n      <ul class="wee-list-pill">\n          ' + componentList.map(function (component) {
    return '\n            <li>\n              <a href="#component-' + component.id + '" class="' + (component.active ? 'active' : '') + ' aside-anchor">' + component.fieldName + '</a>\n            </li>\n          ';
  }).join('') + '\n      </ul>\n    </aside>\n  ';
}

exports.default = renderList;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectActive = __webpack_require__(35);

var _selectActive2 = _interopRequireDefault(_selectActive);

var _progressAnimate = __webpack_require__(34);

var _progressAnimate2 = _interopRequireDefault(_progressAnimate);

var _tabAction = __webpack_require__(36);

var _tabAction2 = _interopRequireDefault(_tabAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _selectActive2.default)('wee-select');
  (0, _selectActive2.default)('wee-dropdown');
  (0, _progressAnimate2.default)();
  (0, _tabAction2.default)();
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var progress = document.querySelector('[data-id="wee-progress-animated"]');

  setTimeout(function () {
    progress.addEventListener('mouseover', function () {
      var progressWidth = progress.querySelector('.progress-fill').style.width;
      progress.querySelector('.progress-fill').style.width = progressWidth == '10%' ? '70%' : '10%';
    });
  }, 500);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  var targetAll = document.querySelectorAll('.' + target);

  var _loop = function _loop(i) {
    var select = targetAll[i].querySelector('.select');

    select.addEventListener('click', function () {
      targetAll[i].classList.toggle(target + '--active');
    });
  };

  for (var i = 0; i < targetAll.length; i++) {
    _loop(i);
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var tab = document.querySelector('[data-id="wee-tab-action"]');
  var tabPill = tab.querySelectorAll('a');

  function clearTabs() {
    for (var i = 0; i < tabPill.length; i++) {
      var target = document.querySelector(tabPill[i].getAttribute('href'));

      target.style.display = 'none';
      tabPill[i].classList.remove('active');
    }
  }

  var _loop = function _loop(i) {
    tabPill[i].addEventListener('click', function () {
      var target = document.querySelector(tabPill[i].getAttribute('href'));
      clearTabs();
      target.style.display = '';
      tabPill[i].classList.add('active');
    });
  };

  for (var i = 0; i < tabPill.length; i++) {
    _loop(i);
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  var componentSubHolder = document.querySelectorAll('.component-sub-holder');
  var aside = document.querySelector('aside');
  var componentRep = aside.querySelectorAll('a');

  var str = window.location.href;

  var activeAsideItem = function activeAsideItem(thisRep) {
    var curruntItem = document.querySelector('[href="' + thisRep + '"]');
    componentRep.forEach(function (rep) {
      rep.classList.remove('active');
    });
    curruntItem.classList.add('active');
  };

  var activeComponentDescription = function activeComponentDescription(target) {
    var targetHolder = document.querySelector(target);

    componentSubHolder.forEach(function (holder) {
      holder.classList.remove('show');
    });

    targetHolder.classList.add('show');
  };

  var openTab = function openTab(href) {
    activeAsideItem(href);
    activeComponentDescription(href);
  };

  componentRep.forEach(function (rep) {
    rep.addEventListener('click', function () {
      openTab(rep.getAttribute('href'));
    });
  });

  if (str.includes('#component-')) {
    var link = str.substr(str.indexOf('#'));
    openTab(link);
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _makeColor2.default)();

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is an Avatar\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-avatar\"></span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <span class=\"wee-avatar\"></span>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Avatar Presence\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-avatar wee-avatar--presence-online\"></span>\r\n    <span class=\"wee-avatar wee-avatar--presence-busy\"></span>\r\n    <span class=\"wee-avatar wee-avatar--presence-offline\"></span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Avatar Presence can be changed using following classes: <br>\r\n      <strong>wee-avatar--presence-online</strong><br>\r\n      <strong>wee-avatar--presence-busy</strong><br>\r\n      <strong>wee-avatar--presence-offline</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Avatar sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-avatar wee-avatar--xlarge\"></span>\r\n    <span class=\"wee-avatar wee-avatar--large\"></span>\r\n    <span class=\"wee-avatar wee-avatar\"></span>\r\n    <span class=\"wee-avatar wee-avatar--small\"></span>\r\n    <span class=\"wee-avatar wee-avatar--xsmall\"></span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Avatar sizes can be changed using following classes: <br>\r\n      <strong>wee-avatar--xlarge</strong><br>\r\n      <strong>wee-avatar--large</strong><br>\r\n      <strong>wee-avatar--small</strong><br>\r\n      <strong>wee-avatar--xsmall</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h300\">\r\n    Avatar in action\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-avatar wee-avatar--large wee-avatar--presence-online\" style=\"background-image:url('https://robohash.org/yo')\"></span>\r\n    <span class=\"wee-avatar wee-avatar--presence-busy\" style=\"background-image:url('https://robohash.org/no')\"></span>\r\n    <span class=\"wee-avatar wee-avatar--presence-offline\" style=\"background-image:url('https://robohash.org/jim')\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Badge\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-badge\">\r\n      11\r\n    </span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <span class=\"wee-badge\">\r\n        11\r\n      </span>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Badge Types\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-badge wee-badge--default\">5</span>\r\n    <span class=\"wee-badge wee-badge--primary\">7</span>\r\n    <span class=\"wee-badge wee-badge--important\">10</span>\r\n    <span class=\"wee-badge wee-badge--added\">99+</span>\r\n    <span class=\"wee-badge wee-badge--removed\">0</span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Badge types can be changed using following classes: <br>\r\n      <strong>wee-badge--default</strong><br>\r\n      <strong>wee-badge--primary</strong><br>\r\n      <strong>wee-badge--important</strong><br>\r\n      <strong>wee-badge--added</strong><br>\r\n      <strong>wee-badge--removed</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Banner\r\n  </span>\r\n  <div class=\"wee-banner\">\r\n    <span>Just a Banner</span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <div class=\"wee-banner\">\r\n        <span>Just a Banner</span>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Banner Types\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-banner wee-banner--warning\">\r\n      <span>This is a warning banner</span>\r\n    </div>\r\n    <div class=\"wee-banner wee-banner--danger\">\r\n      <span>This is a danger banner</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Callout types can be changed using following classes: <br>\r\n      <strong>wee-banner--warning</strong><br>\r\n      <strong>wee-banner--danger</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Breadcrumbs\r\n  </span>\r\n  <div class=\"wee-breadcrumbs\">\r\n    <ul>\r\n      <li><a href=\"#\">Root</a></li>\r\n      <li><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">Music</a></li>\r\n      <li><a href=\"#\">Instrumental</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp style=\"white-space: pre-wrap;\">\r\n      <div class=\"wee-breadcrumbs\">\r\n        <ul>\r\n          <li><a href=\"#\">Root</a></li>\r\n          <li><a href=\"#\">Home</a></li>\r\n          <li><a href=\"#\">Music</a></li>\r\n          <li><a href=\"#\">Instrumental</a></li>\r\n        </ul>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Breadcrumbs Sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-breadcrumbs wee-breadcrumbs--large\">\r\n      <ul>\r\n        <li><a href=\"#\">Large</a></li>\r\n        <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">Music</a></li>\r\n        <li><a href=\"#\">Instrumental</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-breadcrumbs\">\r\n      <ul>\r\n        <li><a href=\"#\">Normal</a></li>\r\n        <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">Music</a></li>\r\n        <li><a href=\"#\">Instrumental</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-breadcrumbs wee-breadcrumbs--small\">\r\n      <ul>\r\n        <li><a href=\"#\">Small</a></li>\r\n        <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">Music</a></li>\r\n        <li><a href=\"#\">Instrumental</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Breadcrumbs sizes can be changed using following classes: <br>\r\n      <strong>wee-breadcrumbs--large</strong><br>\r\n      <strong>wee-breadcrumbs--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a regular button\n  </span>\n  <a href=\"#\" class=\"wee-button\">Button</a>\n  <div class=\"component-usage\">\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\n      Usage\n    </p>\n    <xmp>\n      <a href=\"#\" class=\"wee-button\">Button</a>\n    </xmp>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Buttons types (solid)\n  </span>\n  <div class=\"separator\">\n    <a href=\"#\" class=\"wee-button wee-button--default\">Default</a>\n    <a href=\"#\" class=\"wee-button wee-button--primary\">Primary</a>\n    <a href=\"#\" class=\"wee-button wee-button--safe\">Safe</a>\n    <a href=\"#\" class=\"wee-button wee-button--warning\">Warning</a>\n    <a href=\"#\" class=\"wee-button wee-button--danger\">Danger</a>\n    <a href=\"#\" class=\"wee-button wee-button--disable\">Disable</a>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Solid Button types can be changed using following classes: <br>\n      <strong>wee-button--default</strong><br>\n      <strong>wee-button--primary</strong><br>\n      <strong>wee-button--safe</strong><br>\n      <strong>wee-button--warning</strong><br>\n      <strong>wee-button--danger</strong><br>\n      <strong>wee-button--disable</strong>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Button Sizes\n  </span>\n  <div class=\"separator\">\n    <a href=\"#\" class=\"wee-button wee-button--large wee-button--primary\">Large</a>\n    <a href=\"#\" class=\"wee-button wee-button--primary\">Normal</a>\n    <a href=\"#\" class=\"wee-button wee-button--small wee-button--primary\">Small</a>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Button size can be changed using following classes: <br>\n      <strong>wee-button--large</strong><br>\n      <strong>wee-button--small</strong>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a Subtle Button\n  </span>\n  <div class=\"separator\">\n    <a href=\"#\" class=\"wee-button wee-button--subtle\">Subtle</a>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n     Use following class to add a Subtle Button: <br>\n      <strong>wee-button--subtle</strong><br>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a link\n  </span>\n  <div class=\"separator\">\n    <a href=\"#\" class=\"wee-button wee-button--link\">Link</a>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Use following class to add a link: <br>\n      <strong>wee-button--link</strong><br>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h300\">\n    This is a Subtle link\n  </span>\n  <div class=\"separator\">\n    <a href=\"#\" class=\"wee-button wee-button--subtle-link\">Subtle Link</a>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Use following class to add a link: <br>\n      <strong>wee-button--subtle-link</strong><br>\n    </span>\n  </div>\n</div>\n\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Callout\r\n  </span>\r\n  <div class=\"wee-callout\">\r\n    <span>Alexander (1893–1920) was King of Greece from 11 June 1917 until his death at the age of 27. He succeeded his father, King Constantine I, in 1917</span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <div class=\"wee-callout\">\r\n        <span>Callout</span>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Callout Types\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-callout wee-callout--default\">\r\n      <span>This is a Default Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--subtle\">\r\n      <span>This is a Subtle Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--safe\">\r\n      <span>This is a Safe Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--warning\">\r\n      <span>This is a Warning Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--danger\">\r\n      <span>This is a Danger Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--info\">\r\n      <span>This is a Info Callout</span>\r\n    </div>\r\n    <div class=\"wee-callout wee-callout--new\">\r\n      <span>This is a New Callout</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Callout types can be changed using following classes: <br>\r\n      <strong>wee-callout--default</strong><br>\r\n      <strong>wee-callout--subtle</strong><br>\r\n      <strong>wee-callout--safe</strong><br>\r\n      <strong>wee-callout--warning</strong><br>\r\n      <strong>wee-callout--danger</strong><br>\r\n      <strong>wee-callout--info</strong><br>\r\n      <strong>wee-callout--new</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Callout in Action\r\n  </span>\r\n  <div class=\"wee-callout wee-callout--safe\">\r\n    <span>Alexander (1893–1920) was King of Greece from 11 June 1917 until his death at the age of 27. He succeeded his father, King Constantine I, in 1917</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Checkbox\r\n  </span>\r\n  <label class=\"wee-checkbox\">\r\n    <input type=\"checkbox\" name=\"name\"/>\r\n    <span>Checkbox</span>\r\n  </label>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <label class=\"wee-checkbox\"> <input type=\"checkbox\" name=\"name\"/> <span>Checkbox</span> </label>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Checkbox States\r\n  </span>\r\n  <div class=\"separator\">\r\n    <label class=\"wee-checkbox wee-checkbox--disable\">\r\n      <input type=\"checkbox\" name=\"fdsf\" disabled />\r\n      <span>Checkbox</span>\r\n    </label>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Checkbox state can be changed using following class: <br>\r\n      <strong>wee-checkbox--disable</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Checkbox Sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div>\r\n      <label class=\"wee-checkbox wee-checkbox--large\">\r\n        <input type=\"checkbox\" name=\"name\"/>\r\n        <span>Large</span>\r\n      </label>\r\n    </div>\r\n    <div>\r\n      <label class=\"wee-checkbox\">\r\n        <input type=\"checkbox\" name=\"name\" checked />\r\n        <span>Normal</span>\r\n      </label>\r\n    </div>\r\n    <div>\r\n      <label class=\"wee-checkbox wee-checkbox--small\">\r\n        <input type=\"checkbox\" name=\"name\"/>\r\n        <span>Small</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Checkbox size can be changed using following class: <br>\r\n      <strong>wee-checkbox--large</strong><br>\r\n      <strong>wee-checkbox--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a Dropdown\n  </span>\n  <div style=\"max-width: 300px;\">\n    <label class=\"wee-dropdown\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"component-usage\">\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\n      Usage\n    </p>\n    <xmp style=\"white-space: pre-wrap;\">\n      <label class=\"wee-dropdown\">\n        <select></select>\n        <div class=\"select\">\n          <span class=\"select-selection\"><span class=\"select-placeholder\">Select</span></span>\n          <ul class=\"select-list\">\n            <li>Ham Burger</li>\n            <li>Pancakes</li>\n            <li>Hot Doggs</li>\n          </ul>\n        </div>\n      </label>\n    </xmp>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Dropdown States\n  </span>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown--disable\">\n      <select disabled></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown--warning\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown--danger\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Dropdown states can be changed using following classes: <br>\n      <strong>wee-dropdown--disable</strong><br>\n      <strong>wee-dropdown--warning</strong><br>\n      <strong>wee-dropdown--danger</strong>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Dropdown Sizes\n  </span>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown--large\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-dropdown wee-dropdown--small\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Dropdown sizes can be changed using following classes: <br>\n      <strong>wee-dropdown--large</strong><br>\n      <strong>wee-dropdown--small</strong>\n    </span>\n  </div>\n</div>\n\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Heading\r\n  </span>\r\n  <p class=\"wee-heading\">\r\n    Alexander (1893–1920) was King of Greece from 11 June 1917\r\n  </p>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <p class=\"wee-heading\">\r\n        Heading\r\n      </p>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Heading Types\r\n  </span>\r\n  <div class=\"separator\">\r\n    <p class=\"wee-heading wee-heading--h900\">\r\n      Heading 900\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h800\">\r\n      Heading 800\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h700\">\r\n      Heading 700\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h600\">\r\n      Heading 600\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h500\">\r\n      Heading 500\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h400\">\r\n      Heading 400\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h300\">\r\n      Heading 300\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h200\">\r\n      Heading 200\r\n    </p>\r\n    <p class=\"wee-heading wee-heading--h100\">\r\n      Heading 100\r\n    </p>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Heading types can be changed using following classes: <br>\r\n      <strong>wee-heading--h900</strong><br>\r\n      <strong>wee-heading--h800</strong><br>\r\n      <strong>wee-heading--h700</strong><br>\r\n      <strong>wee-heading--h600</strong><br>\r\n      <strong>wee-heading--h500</strong><br>\r\n      <strong>wee-heading--h400</strong><br>\r\n      <strong>wee-heading--h300</strong><br>\r\n      <strong>wee-heading--h200</strong><br>\r\n      <strong>wee-heading--h100</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This ia a Paragraph\r\n  </span>\r\n  <div class=\"separator\">\r\n    <p class=\"wee-heading wee-heading--paragraph\">\r\n      Alexander was born at Tatoi Palace on 1 August 1893 (20 July in the Julian calendar), the second son of Crown Prince Constantine of Greece of the House of Glücksburg and his wife Princess Sophia of Prussia. He was related to royalty throughout Europe. His father was the eldest son and heir apparent of King George I of Greece by his wife Grand Duchess Olga Constantinovna of Russia; his mother was the daughter of Emperor Frederick III of Germany and his wife Victoria, Princess Royal of the United Kingdom.\r\n    </p>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Paragraph: <br>\r\n      <strong>wee-heading--paragraph</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This ia a Description\r\n  </span>\r\n  <div class=\"separator\">\r\n    <p class=\"wee-heading wee-heading--description\">\r\n      Alexander (1893–1920) was King of Greece from 11 June 1917.\r\n    </p>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Description: <br>\r\n      <strong>wee-heading--description</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is an Inline Dialog\r\n  </span>\r\n  <div class=\"wee-inline-dialog\">\r\n    <span class=\"wee-heading wee-heading--h400\">Alexander (1893–1920) was King of Greece from 11 June 1917 until his death at the age of 27. He succeeded his father, King Constantine I, in 1917</span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <div class=\"wee-inline-dialog\">\r\n        <span class=\"wee-heading\">Inline Dialog</span>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is an Inline Message\r\n  </span>\r\n  <div>\r\n    <a href=\"#\" class=\"wee-inline-message\">\r\n      <span>Alexander (1893–1920) was King of Greece from 11 June 1917</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <a href=\"#\" class=\"wee-inline-message\">\r\n        <span>Inline Message</span>\r\n      </a>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Inline Message Types\r\n  </span>\r\n  <div class=\"separator\">\r\n    <a href=\"#\" class=\"wee-inline-message wee-inline-message--default\">\r\n      <span>This is a Default Inline Message</span>\r\n    </a>\r\n    <a href=\"#\" class=\"wee-inline-message wee-inline-message--safe\">\r\n      <span>This is a Safe Inline Message</span>\r\n    </a>\r\n    <a href=\"#\" class=\"wee-inline-message wee-inline-message--warning\">\r\n      <span>This is a Warning Inline Message</span>\r\n    </a>\r\n    <a href=\"#\" class=\"wee-inline-message wee-inline-message--danger\">\r\n      <span>This is a Danger Inline Message</span>\r\n    </a>\r\n    <a href=\"#\" class=\"wee-inline-message wee-inline-message--info\">\r\n      <span>This is an Info Inline Message</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Inline Message Types can be changed using following classes: <br>\r\n      <strong>wee-inline-message--default</strong><br>\r\n      <strong>wee-inline-message--safe</strong><br>\r\n      <strong>wee-inline-message--warning</strong><br>\r\n      <strong>wee-inline-message--danger</strong><br>\r\n      <strong>wee-inline-message--info</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Lozenge\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-lozenge\">\r\n      <span>Lozenge</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <span class=\"wee-lozenge\">\r\n        <span>Lozenge</span>\r\n      </span>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Subtle Lozenge\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-lozenge wee-lozenge--default\">\r\n      <span>Default</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--safe\">\r\n      <span>Safe</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--warning\">\r\n      <span>Warning</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--danger\">\r\n      <span>Danger</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--info\">\r\n      <span>Info</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--new\">\r\n      <span>New</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Subtle Lozenge can be added using following classes: <br>\r\n      <strong>wee-lozenge--default</strong><br>\r\n      <strong>wee-lozenge--safe</strong><br>\r\n      <strong>wee-lozenge--warning</strong><br>\r\n      <strong>wee-lozenge--danger</strong><br>\r\n      <strong>wee-lozenge--info</strong><br>\r\n      <strong>wee-lozenge--new</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Bold Lozenge\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-lozenge wee-lozenge--bold--default\">\r\n      <span>Default</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--bold--safe\">\r\n      <span>Safe</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--bold--warning\">\r\n      <span>Warning</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--bold--danger\">\r\n      <span>Danger</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--bold--info\">\r\n      <span>Info</span>\r\n    </span>\r\n    <span class=\"wee-lozenge wee-lozenge--bold--new\">\r\n      <span>New</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Bold Lozenge can be added using following classes: <br>\r\n      <strong>wee-lozenge--bold-default</strong><br>\r\n      <strong>wee-lozenge--bold-safe</strong><br>\r\n      <strong>wee-lozenge--bold-warning</strong><br>\r\n      <strong>wee-lozenge--bold-danger</strong><br>\r\n      <strong>wee-lozenge--bold-info</strong><br>\r\n      <strong>wee-lozenge--bold-new</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is Pagination\r\n  </span>\r\n  <div class=\"wee-pagination\">\r\n    <ul>\r\n      <li class=\"disable\"><a href=\"#\">Previous</a></li>\r\n      <li class=\"active\"><a href=\"#\">1</a></li>\r\n      <li><a href=\"#\">2</a></li>\r\n      <li><a href=\"#\">3</a></li>\r\n      <li><a href=\"#\">4</a></li>\r\n      <li><a href=\"#\">Next</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp style=\"white-space: pre-wrap;\">\r\n      <div class=\"wee-pagination\">\r\n        <ul>\r\n          <li class=\"disable\"><a href=\"#\">Previous</a></li>\r\n          <li class=\"active\"><a href=\"#\">1</a></li>\r\n          <li><a href=\"#\">2</a></li>\r\n          <li><a href=\"#\">3</a></li>\r\n          <li><a href=\"#\">4</a></li>\r\n          <li><a href=\"#\">Next</a></li>\r\n        </ul>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Pagination Sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-pagination wee-pagination--large\">\r\n      <ul>\r\n        <li class=\"disable\"><a href=\"#\">Large</a></li>\r\n        <li class=\"active\"><a href=\"#\">1</a></li>\r\n        <li><a href=\"#\">2</a></li>\r\n        <li><a href=\"#\">3</a></li>\r\n        <li><a href=\"#\">4</a></li>\r\n        <li><a href=\"#\">Next</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-pagination\">\r\n      <ul>\r\n        <li class=\"disable\"><a href=\"#\">Normal</a></li>\r\n        <li class=\"active\"><a href=\"#\">1</a></li>\r\n        <li><a href=\"#\">2</a></li>\r\n        <li><a href=\"#\">3</a></li>\r\n        <li><a href=\"#\">4</a></li>\r\n        <li><a href=\"#\">Next</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator\">\r\n    <div class=\"wee-pagination wee-pagination--small\">\r\n      <ul>\r\n        <li class=\"disable\"><a href=\"#\">Small</a></li>\r\n        <li class=\"active\"><a href=\"#\">1</a></li>\r\n        <li><a href=\"#\">2</a></li>\r\n        <li><a href=\"#\">3</a></li>\r\n        <li><a href=\"#\">4</a></li>\r\n        <li><a href=\"#\">Next</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Pagination sizes can be changed using following classes: <br>\r\n      <strong>wee-pagination--large</strong><br>\r\n      <strong>wee-pagination--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Progress\r\n  </span>\r\n  <div class=\"wee-progress\" >\r\n    <span class=\"progress-fill\" style=\"width:50%;\"></span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <div class=\"wee-progress\" >\r\n        <span class=\"progress-fill\" style=\"width:50%;\"></span>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Progress in Action\r\n  </span>\r\n  <div class=\"wee-progress\" data-id=\"wee-progress-animated\">\r\n    <span class=\"progress-fill\" style=\"width:10%;\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Radio Group\r\n  </span>\r\n  <div>\r\n    <label class=\"wee-radio\">\r\n      <input type=\"radio\" name=\"name1\" checked />\r\n      <span>Radio1</span>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label class=\"wee-radio\">\r\n      <input type=\"radio\" name=\"name1\" />\r\n      <span>Radio2</span>\r\n    </label>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <label class=\"wee-radio\"> <input type=\"radio\" name=\"name\"/> <span>Radio</span> </label>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Radio States\r\n  </span>\r\n  <div class=\"separator\">\r\n    <label class=\"wee-radio wee-radio--disable\">\r\n      <input type=\"radio\" name=\"fdsf\" disabled />\r\n      <span>Radio</span>\r\n    </label>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Radio state can be changed using following class: <br>\r\n      <strong>wee-radio--disable</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Radio Sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div>\r\n      <label class=\"wee-radio wee-radio--large\">\r\n        <input type=\"radio\" name=\"name3\"/>\r\n        <span>Large</span>\r\n      </label>\r\n    </div>\r\n    <div>\r\n      <label class=\"wee-radio\">\r\n        <input type=\"radio\" name=\"name3\" checked />\r\n        <span>Normal</span>\r\n      </label>\r\n    </div>\r\n    <div>\r\n      <label class=\"wee-radio wee-radio--small\">\r\n        <input type=\"radio\" name=\"name3\"/>\r\n        <span>Small</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Radio size can be changed using following class: <br>\r\n      <strong>wee-radio--large</strong><br>\r\n      <strong>wee-radio--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a Select\n  </span>\n  <div style=\"max-width: 300px;\">\n    <label class=\"wee-select\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"component-usage\">\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\n      Usage\n    </p>\n    <xmp style=\"white-space: pre-wrap;\">\n      <label class=\"wee-select\">\n        <select></select>\n        <div class=\"select\">\n          <span class=\"select-selection\"><span class=\"select-placeholder\">Select</span></span>\n          <ul class=\"select-list\">\n            <li>Ham Burger</li>\n            <li>Pancakes</li>\n            <li>Hot Doggs</li>\n          </ul>\n        </div>\n      </label>\n    </xmp>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Select States\n  </span>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select--disable\">\n      <select disabled></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select--warning\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select--danger\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Select states can be changed using following classes: <br>\n      <strong>wee-select--disable</strong><br>\n      <strong>wee-select--warning</strong><br>\n      <strong>wee-select--danger</strong>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Select Sizes\n  </span>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select--large\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"separator\">\n    <label class=\"wee-select wee-select--small\">\n      <select></select>\n      <div class=\"select\">\n        <span class=\"select-selection\"><span class=\"select-placeholder\">Select Food Item</span></span>\n        <ul class=\"select-list\">\n          <li>Ham Burger</li>\n          <li>Pancakes</li>\n          <li>Hot Doggs</li>\n        </ul>\n      </div>\n    </label>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Select sizes can be changed using following classes: <br>\n      <strong>wee-select--large</strong><br>\n      <strong>wee-select--small</strong>\n    </span>\n  </div>\n</div>\n\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Spinner\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-spinner\"></span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <span class=\"wee-spinner\"></span>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Light Spinner\r\n  </span>\r\n  <span class=\"wee-heading wee-heading--h300\">\r\n    * background color is only for the display purpose\r\n  </span>\r\n  <div class=\"separator\">\r\n    <div style=\"background-color:#42526e; width:40px; text-align: center;\">\r\n      <span class=\"wee-spinner wee-spinner--light\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Light Spinner: <br>\r\n      <strong>wee-spinner--light</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Spinner sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-spinner wee-spinner--xlarge\"></span>\r\n    <span class=\"wee-spinner wee-spinner--large\"></span>\r\n    <span class=\"wee-spinner\"></span>\r\n    <span class=\"wee-spinner wee-spinner--small\"></span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Spinner sizes can be changed using following classes: <br>\r\n      <strong>wee-spinner--xlarge</strong><br>\r\n      <strong>wee-spinner--large</strong><br>\r\n      <strong>wee-spinner--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    These are Tabs\r\n  </span>\r\n  <div class=\"wee-tab\" style=\"width: 600px;\">\r\n    <ul class=\"tab-list\">\r\n      <li><a href=\"#tab-uno\" class=\"active\">Uno</a></li>\r\n      <li><a href=\"#tab-dos\">Dos</a></li>\r\n      <li><a href=\"#tab-tre\">Tre</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp style=\"white-space: pre-wrap;\">\r\n      <div class=\"wee-tab\">\r\n        <ul class=\"tab-list\">\r\n          <li><a href=\"#tab-uno\" class=\"active\">Uno</a></li>\r\n          <li><a href=\"#tab-dos\">Dos</a></li>\r\n          <li><a href=\"#tab-tre\">Tre</a></li>\r\n        </ul>\r\n      </div>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n   Tabs in action\r\n  </span>\r\n  <div class=\"wee-tab\" style=\"width: 600px;\" data-id=\"wee-tab-action\">\r\n    <ul class=\"tab-list\">\r\n      <li><a href=\"#tab2-uno\" class=\"active\">Uno</a></li>\r\n      <li><a href=\"#tab2-dos\">Dos</a></li>\r\n      <li><a href=\"#tab2-tre\">Tre</a></li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n      <div id=\"tab2-uno\">\r\n        <div class=\"wee-callout wee-callout--safe\">\r\n          Alexander (1893–1920) was King of Greece from 11 June 1917 until his death at the age of 27.\r\n        </div>\r\n      </div>\r\n      <div id=\"tab2-dos\" style=\"display: none;\">\r\n        <div class=\"wee-callout wee-callout--warning\">\r\n          He succeeded his father,\r\n        </div>\r\n      </div>\r\n      <div id=\"tab2-tre\" style=\"display: none;\">\r\n        <div class=\"wee-callout wee-callout--info\">\r\n           King Constantine I, in 1917\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a Tag\r\n  </span>\r\n  <div>\r\n    <span class=\"wee-tag\">\r\n      <span>Tag Element</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <span class=\"wee-tag\">\r\n        <span>Tag</span>\r\n      </span>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Link Tag\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-tag wee-tag--link\">\r\n      <span><a href=\"#\">Tag Element</a></span>\r\n    </span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Link Tag: <br>\r\n      <strong>wee-tag--link</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Rounded Tag\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-tag wee-tag--rounded\">\r\n      <span>Tag Element</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Rounded Tag: <br>\r\n      <strong>wee-tag--rounded</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Removeable Tag\r\n  </span>\r\n  <div class=\"separator\">\r\n    <span class=\"wee-tag wee-tag--remove\">\r\n      <span>Tag Element</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Use following class to add a Removeable Tag: <br>\r\n      <strong>wee-tag--remove</strong><br>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\r\n  <p class=\"wee-heading wee-heading--h500\">\r\n    This is a regular textbox\r\n  </p>\r\n  <input type=\"text\" name=\"name\" class=\"wee-text\" placeholder=\"Textbox\" />\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <input type=\"text\" name=\"name\" class=\"wee-text\" placeholder=\"Textbox\" />\r\n    </xmp>\r\n  </div>\r\n</div>\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Textbox Sizes\r\n  </span>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text--large\" placeholder=\"Textbox\" />\r\n  </div>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text\" placeholder=\"Textbox\" />\r\n  </div>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text--small\" placeholder=\"Textbox\" />\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Textbox size can be changed using following classes: <br>\r\n      <strong>wee-text--large</strong><br>\r\n      <strong>wee-text--small</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    Textbox States\r\n  </span>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text--disable\" placeholder=\"Textbox\" disabled />\r\n  </div>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text--warning\" placeholder=\"Textbox\" />\r\n  </div>\r\n  <div class=\"separator\">\r\n    <input type=\"text\" name=\"name\" class=\"wee-text wee-text--danger\" placeholder=\"Textbox\" />\r\n  </div>\r\n  <div class=\"wee-callout wee-callout--default\">\r\n    <span>\r\n      Textbox states can be changed using following classes: <br>\r\n      <strong>wee-text--disable</strong><br>\r\n      <strong>wee-text--warning</strong><br>\r\n      <strong>wee-text--danger</strong>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"component-variations\">\r\n  <span class=\"wee-heading wee-heading--h500\">\r\n    This is a textarea\r\n  </span>\r\n  <textarea class=\"wee-text wee-text--small\" placeholder=\"Textbox\">\r\n    \r\n  </textarea>\r\n  <div class=\"component-usage\">\r\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\r\n      Usage\r\n    </p>\r\n    <xmp>\r\n      <textarea class=\"wee-text wee-text--small\" placeholder=\"Textbox\"></textarea>\r\n    </xmp>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a Toggle\n  </span>\n  <label class=\"wee-toggle\">\n    <input type=\"checkbox\" name=\"name\"/>\n    <span></span>\n  </label>\n  <div class=\"component-usage\">\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\n      Usage\n    </p>\n    <xmp>\n      <label class=\"wee-toggle\"> <input type=\"checkbox\" name=\"name\"/> <span></span> </label>\n    </xmp>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Toggle States\n  </span>\n  <div class=\"separator\">\n    <label class=\"wee-toggle wee-toggle--disable\">\n      <input type=\"checkbox\" name=\"fdsf\" disabled />\n      <span></span>\n    </label>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Toggle state can be changed using following class: <br>\n      <strong>wee-toggle--disable</strong>\n    </span>\n  </div>\n</div>\n\n<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    Toggle Sizes\n  </span>\n  <div class=\"separator\">\n    <div>\n      <label class=\"wee-toggle wee-toggle--large\">\n        <input type=\"checkbox\" name=\"name\"/>\n        <span></span>\n      </label>\n    </div>\n    <div>\n      <label class=\"wee-toggle wee-toggle\">\n        <input type=\"checkbox\" name=\"name\"/>\n        <span></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"wee-callout wee-callout--default\">\n    <span>\n      Toggle sizes can be changed using following class: <br>\n      <strong>wee-toggle--large</strong>\n    </span>\n  </div>\n</div>\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-variations\">\n  <span class=\"wee-heading wee-heading--h500\">\n    This is a Tooltip\n  </span>\n  <div>\n    <span class=\"wee-tooltip\">Just a Tooltip</span>\n  </div>\n  <div class=\"component-usage\">\n    <p class=\"wee-heading wee-heading--h400 usage-heading\">\n      Usage\n    </p>\n    <xmp>\n      <span class=\"wee-tooltip\">tooltip</span>\n    </xmp>\n  </div>\n</div>\n"

/***/ })
/******/ ]);