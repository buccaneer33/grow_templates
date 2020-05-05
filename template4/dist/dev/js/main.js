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

/***/ "./template4/assets/fonts/Ubuntu-Bold.ttf":
/*!************************************************!*\
  !*** ./template4/assets/fonts/Ubuntu-Bold.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Ubuntu-Bold.ttf";

/***/ }),

/***/ "./template4/assets/fonts/Ubuntu-Light.ttf":
/*!*************************************************!*\
  !*** ./template4/assets/fonts/Ubuntu-Light.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Ubuntu-Light.ttf";

/***/ }),

/***/ "./template4/assets/fonts/Ubuntu-Medium.ttf":
/*!**************************************************!*\
  !*** ./template4/assets/fonts/Ubuntu-Medium.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Ubuntu-Medium.ttf";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-brands-400.eot":
/*!**********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-brands-400.eot ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.eot";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-brands-400.ttf":
/*!**********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-brands-400.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.ttf";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-brands-400.woff":
/*!***********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-brands-400.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.woff";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-brands-400.woff2":
/*!************************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-brands-400.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.woff2";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-regular-400.eot":
/*!***********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-regular-400.eot ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.eot";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-regular-400.ttf":
/*!***********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-regular-400.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.ttf";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-regular-400.woff":
/*!************************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-regular-400.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.woff";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-regular-400.woff2":
/*!*************************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-regular-400.woff2 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.woff2";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-solid-900.eot":
/*!*********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-solid-900.eot ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.eot";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-solid-900.ttf":
/*!*********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-solid-900.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.ttf";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-solid-900.woff":
/*!**********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-solid-900.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.woff";

/***/ }),

/***/ "./template4/assets/fonts/awesome/fa-solid-900.woff2":
/*!***********************************************************!*\
  !*** ./template4/assets/fonts/awesome/fa-solid-900.woff2 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.woff2";

/***/ }),

/***/ "./template4/assets/icons/favicon.ico":
/*!********************************************!*\
  !*** ./template4/assets/icons/favicon.ico ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./template4/assets/icons/favicon.png":
/*!********************************************!*\
  !*** ./template4/assets/icons/favicon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/favicon.png";

/***/ }),

/***/ "./template4/assets/img/about_01.jpg":
/*!*******************************************!*\
  !*** ./template4/assets/img/about_01.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/about_01.jpg";

/***/ }),

/***/ "./template4/assets/img/development.svg":
/*!**********************************************!*\
  !*** ./template4/assets/img/development.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/development.svg";

/***/ }),

/***/ "./template4/assets/img/growth.svg":
/*!*****************************************!*\
  !*** ./template4/assets/img/growth.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/growth.svg";

/***/ }),

/***/ "./template4/assets/img/logo-seo.png":
/*!*******************************************!*\
  !*** ./template4/assets/img/logo-seo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/logo-seo.png";

/***/ }),

/***/ "./template4/assets/img/parallax_12.jpg":
/*!**********************************************!*\
  !*** ./template4/assets/img/parallax_12.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/parallax_12.jpg";

/***/ }),

/***/ "./template4/assets/img/pattern.png":
/*!******************************************!*\
  !*** ./template4/assets/img/pattern.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/pattern.png";

/***/ }),

/***/ "./template4/assets/img/research.svg":
/*!*******************************************!*\
  !*** ./template4/assets/img/research.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/research.svg";

/***/ }),

/***/ "./template4/assets/img/rocket.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/rocket.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/rocket.png";

/***/ }),

/***/ "./template4/assets/img/seo_01.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_01.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_01.png";

/***/ }),

/***/ "./template4/assets/img/seo_02.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_02.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_02.png";

/***/ }),

/***/ "./template4/assets/img/seo_03.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_03.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_03.png";

/***/ }),

/***/ "./template4/assets/img/seo_04.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_04.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_04.png";

/***/ }),

/***/ "./template4/assets/img/seo_05.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_05.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_05.png";

/***/ }),

/***/ "./template4/assets/img/seo_06.png":
/*!*****************************************!*\
  !*** ./template4/assets/img/seo_06.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/seo_06.png";

/***/ }),

/***/ "./template4/assets/img/stopwatch.svg":
/*!********************************************!*\
  !*** ./template4/assets/img/stopwatch.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/stopwatch.svg";

/***/ }),

/***/ "./template4/assets/img/testi_01.png":
/*!*******************************************!*\
  !*** ./template4/assets/img/testi_01.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/testi_01.png";

/***/ }),

/***/ "./template4/assets/img/version_01.jpg":
/*!*********************************************!*\
  !*** ./template4/assets/img/version_01.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/version_01.jpg";

/***/ }),

/***/ "./template4/assets/img/version_02.jpg":
/*!*********************************************!*\
  !*** ./template4/assets/img/version_02.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/version_02.jpg";

/***/ }),

/***/ "./template4/assets/img/version_03.jpg":
/*!*********************************************!*\
  !*** ./template4/assets/img/version_03.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/version_03.jpg";

/***/ }),

/***/ "./template4/assets/img/version_04.jpg":
/*!*********************************************!*\
  !*** ./template4/assets/img/version_04.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/version_04.jpg";

/***/ }),

/***/ "./template4/src/js/fonts.js":
/*!***********************************!*\
  !*** ./template4/src/js/fonts.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.eot */ "./template4/assets/fonts/awesome/fa-brands-400.eot");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.ttf */ "./template4/assets/fonts/awesome/fa-brands-400.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.woff */ "./template4/assets/fonts/awesome/fa-brands-400.woff");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.woff2 */ "./template4/assets/fonts/awesome/fa-brands-400.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.eot */ "./template4/assets/fonts/awesome/fa-regular-400.eot");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.ttf */ "./template4/assets/fonts/awesome/fa-regular-400.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.woff */ "./template4/assets/fonts/awesome/fa-regular-400.woff");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.woff2 */ "./template4/assets/fonts/awesome/fa-regular-400.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.eot */ "./template4/assets/fonts/awesome/fa-solid-900.eot");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.ttf */ "./template4/assets/fonts/awesome/fa-solid-900.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.woff */ "./template4/assets/fonts/awesome/fa-solid-900.woff");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.woff2 */ "./template4/assets/fonts/awesome/fa-solid-900.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_fonts_Ubuntu_Medium_ttf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/fonts/Ubuntu-Medium.ttf */ "./template4/assets/fonts/Ubuntu-Medium.ttf");
/* harmony import */ var _assets_fonts_Ubuntu_Medium_ttf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Ubuntu_Medium_ttf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_fonts_Ubuntu_Bold_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/fonts/Ubuntu-Bold.ttf */ "./template4/assets/fonts/Ubuntu-Bold.ttf");
/* harmony import */ var _assets_fonts_Ubuntu_Bold_ttf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Ubuntu_Bold_ttf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_fonts_Ubuntu_Light_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/fonts/Ubuntu-Light.ttf */ "./template4/assets/fonts/Ubuntu-Light.ttf");
/* harmony import */ var _assets_fonts_Ubuntu_Light_ttf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Ubuntu_Light_ttf__WEBPACK_IMPORTED_MODULE_14__);

// awesome




















/***/ }),

/***/ "./template4/src/js/img.js":
/*!*********************************!*\
  !*** ./template4/src/js/img.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/favicon.ico */ "./template4/assets/icons/favicon.ico");
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/favicon.png */ "./template4/assets/icons/favicon.png");
/* harmony import */ var _assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logo_seo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/logo-seo.png */ "./template4/assets/img/logo-seo.png");
/* harmony import */ var _assets_img_logo_seo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_seo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_parallax_12_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/parallax_12.jpg */ "./template4/assets/img/parallax_12.jpg");
/* harmony import */ var _assets_img_parallax_12_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_parallax_12_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_rocket_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/rocket.png */ "./template4/assets/img/rocket.png");
/* harmony import */ var _assets_img_rocket_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_rocket_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_about_01_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/about_01.jpg */ "./template4/assets/img/about_01.jpg");
/* harmony import */ var _assets_img_about_01_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_about_01_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_development_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/development.svg */ "./template4/assets/img/development.svg");
/* harmony import */ var _assets_img_development_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_development_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_growth_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/growth.svg */ "./template4/assets/img/growth.svg");
/* harmony import */ var _assets_img_growth_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_growth_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_img_pattern_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/pattern.png */ "./template4/assets/img/pattern.png");
/* harmony import */ var _assets_img_pattern_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_img_pattern_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_research_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/research.svg */ "./template4/assets/img/research.svg");
/* harmony import */ var _assets_img_research_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_research_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_seo_01_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/seo_01.png */ "./template4/assets/img/seo_01.png");
/* harmony import */ var _assets_img_seo_01_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_01_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_seo_02_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/seo_02.png */ "./template4/assets/img/seo_02.png");
/* harmony import */ var _assets_img_seo_02_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_02_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_img_seo_03_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/seo_03.png */ "./template4/assets/img/seo_03.png");
/* harmony import */ var _assets_img_seo_03_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_03_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_img_seo_04_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/seo_04.png */ "./template4/assets/img/seo_04.png");
/* harmony import */ var _assets_img_seo_04_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_04_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_img_seo_05_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/img/seo_05.png */ "./template4/assets/img/seo_05.png");
/* harmony import */ var _assets_img_seo_05_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_05_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_img_seo_06_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/img/seo_06.png */ "./template4/assets/img/seo_06.png");
/* harmony import */ var _assets_img_seo_06_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_img_seo_06_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_img_stopwatch_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/img/stopwatch.svg */ "./template4/assets/img/stopwatch.svg");
/* harmony import */ var _assets_img_stopwatch_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_img_stopwatch_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_img_testi_01_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/img/testi_01.png */ "./template4/assets/img/testi_01.png");
/* harmony import */ var _assets_img_testi_01_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_img_testi_01_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_img_version_01_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/img/version_01.jpg */ "./template4/assets/img/version_01.jpg");
/* harmony import */ var _assets_img_version_01_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_img_version_01_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_img_version_02_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/img/version_02.jpg */ "./template4/assets/img/version_02.jpg");
/* harmony import */ var _assets_img_version_02_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_img_version_02_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_img_version_03_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/img/version_03.jpg */ "./template4/assets/img/version_03.jpg");
/* harmony import */ var _assets_img_version_03_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_img_version_03_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_img_version_04_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/img/version_04.jpg */ "./template4/assets/img/version_04.jpg");
/* harmony import */ var _assets_img_version_04_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_img_version_04_jpg__WEBPACK_IMPORTED_MODULE_21__);


























/***/ }),

/***/ "./template4/src/js/index.js":
/*!***********************************!*\
  !*** ./template4/src/js/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img.js */ "./template4/src/js/img.js");
/* harmony import */ var _fonts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.js */ "./template4/src/js/fonts.js");




/***/ }),

/***/ "./template4/src/scss/index.scss":
/*!***************************************!*\
  !*** ./template4/src/scss/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./template4/src/js/index.js ./template4/src/scss/index.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./template4/src/js/index.js */"./template4/src/js/index.js");
module.exports = __webpack_require__(/*! ./template4/src/scss/index.scss */"./template4/src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map