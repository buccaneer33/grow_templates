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

/***/ "./template2/assets/fonts/Cabin-Medium.ttf":
/*!*************************************************!*\
  !*** ./template2/assets/fonts/Cabin-Medium.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cabin-Medium.ttf";

/***/ }),

/***/ "./template2/assets/fonts/Lora-Regular.ttf":
/*!*************************************************!*\
  !*** ./template2/assets/fonts/Lora-Regular.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lora-Regular.ttf";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-brands-400.eot":
/*!**********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-brands-400.eot ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.eot";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-brands-400.ttf":
/*!**********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-brands-400.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.ttf";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-brands-400.woff":
/*!***********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-brands-400.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.woff";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-brands-400.woff2":
/*!************************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-brands-400.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.woff2";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-regular-400.eot":
/*!***********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-regular-400.eot ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.eot";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-regular-400.ttf":
/*!***********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-regular-400.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.ttf";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-regular-400.woff":
/*!************************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-regular-400.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.woff";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-regular-400.woff2":
/*!*************************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-regular-400.woff2 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.woff2";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-solid-900.eot":
/*!*********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-solid-900.eot ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.eot";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-solid-900.ttf":
/*!*********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-solid-900.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.ttf";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-solid-900.woff":
/*!**********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-solid-900.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.woff";

/***/ }),

/***/ "./template2/assets/fonts/awesome/fa-solid-900.woff2":
/*!***********************************************************!*\
  !*** ./template2/assets/fonts/awesome/fa-solid-900.woff2 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.woff2";

/***/ }),

/***/ "./template2/assets/icons/favicon.ico":
/*!********************************************!*\
  !*** ./template2/assets/icons/favicon.ico ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./template2/assets/icons/favicon.png":
/*!********************************************!*\
  !*** ./template2/assets/icons/favicon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/favicon.png";

/***/ }),

/***/ "./template2/assets/img/canada.jpg":
/*!*****************************************!*\
  !*** ./template2/assets/img/canada.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/canada.jpg";

/***/ }),

/***/ "./template2/assets/img/double-room.jpg":
/*!**********************************************!*\
  !*** ./template2/assets/img/double-room.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/double-room.jpg";

/***/ }),

/***/ "./template2/assets/img/hotel-lamp.jpg":
/*!*********************************************!*\
  !*** ./template2/assets/img/hotel-lamp.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/hotel-lamp.jpg";

/***/ }),

/***/ "./template2/assets/img/interior-bedroom.jpg":
/*!***************************************************!*\
  !*** ./template2/assets/img/interior-bedroom.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/interior-bedroom.jpg";

/***/ }),

/***/ "./template2/assets/img/mexica.jpg":
/*!*****************************************!*\
  !*** ./template2/assets/img/mexica.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/mexica.jpg";

/***/ }),

/***/ "./template2/assets/img/nature.jpg":
/*!*****************************************!*\
  !*** ./template2/assets/img/nature.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/nature.jpg";

/***/ }),

/***/ "./template2/assets/img/pagoda.jpg":
/*!*****************************************!*\
  !*** ./template2/assets/img/pagoda.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/pagoda.jpg";

/***/ }),

/***/ "./template2/assets/img/phone.jpg":
/*!****************************************!*\
  !*** ./template2/assets/img/phone.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/phone.jpg";

/***/ }),

/***/ "./template2/assets/img/room.jpg":
/*!***************************************!*\
  !*** ./template2/assets/img/room.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/room.jpg";

/***/ }),

/***/ "./template2/assets/img/tropic.jpg":
/*!*****************************************!*\
  !*** ./template2/assets/img/tropic.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/tropic.jpg";

/***/ }),

/***/ "./template2/assets/img/umbrellas.jpg":
/*!********************************************!*\
  !*** ./template2/assets/img/umbrellas.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/umbrellas.jpg";

/***/ }),

/***/ "./template2/assets/img/water.jpg":
/*!****************************************!*\
  !*** ./template2/assets/img/water.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/water.jpg";

/***/ }),

/***/ "./template2/src/js/fonts.js":
/*!***********************************!*\
  !*** ./template2/src/js/fonts.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_Cabin_Medium_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/fonts/Cabin-Medium.ttf */ "./template2/assets/fonts/Cabin-Medium.ttf");
/* harmony import */ var _assets_fonts_Cabin_Medium_ttf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Cabin_Medium_ttf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_Lora_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/fonts/Lora-Regular.ttf */ "./template2/assets/fonts/Lora-Regular.ttf");
/* harmony import */ var _assets_fonts_Lora_Regular_ttf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Lora_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.eot */ "./template2/assets/fonts/awesome/fa-brands-400.eot");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_eot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.ttf */ "./template2/assets/fonts/awesome/fa-brands-400.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.woff */ "./template2/assets/fonts/awesome/fa-brands-400.woff");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-brands-400.woff2 */ "./template2/assets/fonts/awesome/fa-brands-400.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.eot */ "./template2/assets/fonts/awesome/fa-regular-400.eot");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_eot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.ttf */ "./template2/assets/fonts/awesome/fa-regular-400.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.woff */ "./template2/assets/fonts/awesome/fa-regular-400.woff");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-regular-400.woff2 */ "./template2/assets/fonts/awesome/fa-regular-400.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.eot */ "./template2/assets/fonts/awesome/fa-solid-900.eot");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_eot__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.ttf */ "./template2/assets/fonts/awesome/fa-solid-900.ttf");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.woff */ "./template2/assets/fonts/awesome/fa-solid-900.woff");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/fonts/awesome/fa-solid-900.woff2 */ "./template2/assets/fonts/awesome/fa-solid-900.woff2");
/* harmony import */ var _assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_awesome_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_13__);



// awesome
















/***/ }),

/***/ "./template2/src/js/img.js":
/*!*********************************!*\
  !*** ./template2/src/js/img.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/favicon.ico */ "./template2/assets/icons/favicon.ico");
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/favicon.png */ "./template2/assets/icons/favicon.png");
/* harmony import */ var _assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_favicon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_nature_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/nature.jpg */ "./template2/assets/img/nature.jpg");
/* harmony import */ var _assets_img_nature_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_nature_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_pagoda_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/pagoda.jpg */ "./template2/assets/img/pagoda.jpg");
/* harmony import */ var _assets_img_pagoda_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_pagoda_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_phone_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/phone.jpg */ "./template2/assets/img/phone.jpg");
/* harmony import */ var _assets_img_phone_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_phone_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_double_room_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/double-room.jpg */ "./template2/assets/img/double-room.jpg");
/* harmony import */ var _assets_img_double_room_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_double_room_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_interior_bedroom_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/interior-bedroom.jpg */ "./template2/assets/img/interior-bedroom.jpg");
/* harmony import */ var _assets_img_interior_bedroom_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_interior_bedroom_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_hotel_lamp_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/hotel-lamp.jpg */ "./template2/assets/img/hotel-lamp.jpg");
/* harmony import */ var _assets_img_hotel_lamp_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_hotel_lamp_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_img_room_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/room.jpg */ "./template2/assets/img/room.jpg");
/* harmony import */ var _assets_img_room_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_img_room_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_canada_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/canada.jpg */ "./template2/assets/img/canada.jpg");
/* harmony import */ var _assets_img_canada_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_canada_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_mexica_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/mexica.jpg */ "./template2/assets/img/mexica.jpg");
/* harmony import */ var _assets_img_mexica_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_mexica_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_tropic_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/tropic.jpg */ "./template2/assets/img/tropic.jpg");
/* harmony import */ var _assets_img_tropic_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_tropic_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_img_umbrellas_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/umbrellas.jpg */ "./template2/assets/img/umbrellas.jpg");
/* harmony import */ var _assets_img_umbrellas_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_img_umbrellas_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/water.jpg */ "./template2/assets/img/water.jpg");
/* harmony import */ var _assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_13__);


















/***/ }),

/***/ "./template2/src/js/index.js":
/*!***********************************!*\
  !*** ./template2/src/js/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img.js */ "./template2/src/js/img.js");
/* harmony import */ var _fonts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.js */ "./template2/src/js/fonts.js");




/***/ }),

/***/ "./template2/src/scss/index.scss":
/*!***************************************!*\
  !*** ./template2/src/scss/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./template2/src/js/index.js ./template2/src/scss/index.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./template2/src/js/index.js */"./template2/src/js/index.js");
module.exports = __webpack_require__(/*! ./template2/src/scss/index.scss */"./template2/src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map