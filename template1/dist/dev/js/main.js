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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./template1/assets/fonts/NoticiaText-Regular.ttf":
/*!********************************************************!*\
  !*** ./template1/assets/fonts/NoticiaText-Regular.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NoticiaText-Regular.ttf";

/***/ }),

/***/ "./template1/assets/fonts/OpenSans-Regular.ttf":
/*!*****************************************************!*\
  !*** ./template1/assets/fonts/OpenSans-Regular.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/OpenSans-Regular.ttf";

/***/ }),

/***/ "./template1/assets/fonts/Raleway-Medium.ttf":
/*!***************************************************!*\
  !*** ./template1/assets/fonts/Raleway-Medium.ttf ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Medium.ttf";

/***/ }),

/***/ "./template1/assets/fonts/Raleway-Regular.ttf":
/*!****************************************************!*\
  !*** ./template1/assets/fonts/Raleway-Regular.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Regular.ttf";

/***/ }),

/***/ "./template1/assets/icons/favicon.ico":
/*!********************************************!*\
  !*** ./template1/assets/icons/favicon.ico ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./template1/assets/icons/logo.svg":
/*!*****************************************!*\
  !*** ./template1/assets/icons/logo.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/logo.svg";

/***/ }),

/***/ "./template1/assets/img/city.jpg":
/*!***************************************!*\
  !*** ./template1/assets/img/city.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/city.jpg";

/***/ }),

/***/ "./template1/assets/img/city2.jpg":
/*!****************************************!*\
  !*** ./template1/assets/img/city2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/city2.jpg";

/***/ }),

/***/ "./template1/assets/img/company.jpg":
/*!******************************************!*\
  !*** ./template1/assets/img/company.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/company.jpg";

/***/ }),

/***/ "./template1/assets/img/photo1.webp":
/*!******************************************!*\
  !*** ./template1/assets/img/photo1.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/photo1.webp";

/***/ }),

/***/ "./template1/assets/img/photo2.webp":
/*!******************************************!*\
  !*** ./template1/assets/img/photo2.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/photo2.webp";

/***/ }),

/***/ "./template1/assets/img/photo3.webp":
/*!******************************************!*\
  !*** ./template1/assets/img/photo3.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/photo3.webp";

/***/ }),

/***/ "./template1/src/js/fonts.js":
/*!***********************************!*\
  !*** ./template1/src/js/fonts.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/fonts/OpenSans-Regular.ttf */ "./template1/assets/fonts/OpenSans-Regular.ttf");
/* harmony import */ var _assets_fonts_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_NoticiaText_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/fonts/NoticiaText-Regular.ttf */ "./template1/assets/fonts/NoticiaText-Regular.ttf");
/* harmony import */ var _assets_fonts_NoticiaText_Regular_ttf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_NoticiaText_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_Raleway_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/fonts/Raleway-Regular.ttf */ "./template1/assets/fonts/Raleway-Regular.ttf");
/* harmony import */ var _assets_fonts_Raleway_Regular_ttf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Raleway_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Raleway_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/Raleway-Medium.ttf */ "./template1/assets/fonts/Raleway-Medium.ttf");
/* harmony import */ var _assets_fonts_Raleway_Medium_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Raleway_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "./template1/src/js/img.js":
/*!*********************************!*\
  !*** ./template1/src/js/img.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/favicon.ico */ "./template1/assets/icons/favicon.ico");
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/logo.svg */ "./template1/assets/icons/logo.svg");
/* harmony import */ var _assets_icons_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_city_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/city.jpg */ "./template1/assets/img/city.jpg");
/* harmony import */ var _assets_img_city_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_city_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_company_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/company.jpg */ "./template1/assets/img/company.jpg");
/* harmony import */ var _assets_img_company_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_company_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_photo1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/photo1.webp */ "./template1/assets/img/photo1.webp");
/* harmony import */ var _assets_img_photo1_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_photo1_webp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_photo2_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/photo2.webp */ "./template1/assets/img/photo2.webp");
/* harmony import */ var _assets_img_photo2_webp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_photo2_webp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_photo3_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/photo3.webp */ "./template1/assets/img/photo3.webp");
/* harmony import */ var _assets_img_photo3_webp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_photo3_webp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_city2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/city2.jpg */ "./template1/assets/img/city2.jpg");
/* harmony import */ var _assets_img_city2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_city2_jpg__WEBPACK_IMPORTED_MODULE_7__);











/***/ }),

/***/ "./template1/src/js/index.js":
/*!***********************************!*\
  !*** ./template1/src/js/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img.js */ "./template1/src/js/img.js");
/* harmony import */ var _fonts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.js */ "./template1/src/js/fonts.js");




/***/ }),

/***/ "./template1/src/scss/index.scss":
/*!***************************************!*\
  !*** ./template1/src/scss/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./template1/src/js/index.js ./template1/src/scss/index.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./template1/src/js/index.js */"./template1/src/js/index.js");
module.exports = __webpack_require__(/*! ./template1/src/scss/index.scss */"./template1/src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map