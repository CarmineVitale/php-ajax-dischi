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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var container = $('.container');
  var search = $('#cerca');
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source); //RIchiamo funzione per chaimata ajax al caricamento della pagina

  getData(template, container); //Ricerca autore canzoni all' ENTER su input

  search.keyup(function (e) {
    if (e.keyCode == 13 || e.which == 13) {
      var valore = search.val().trim().toLowerCase();
      container.html('');
      $.ajax({
        url: 'http://localhost:8888/php-ajax-dischi/partial/template/json-script.php/',
        method: 'GET',
        success: function success(res) {
          for (var i = 0; i < res.length; i++) {
            var self = res[i];

            if (self.author.toLowerCase() == valore) {
              container.html('');
              var data = {
                poster: self.poster,
                titolo: self.name,
                autore: self.author,
                anno: self.year
              };
              var html = template(data);
              container.append(html);
            }
          }

          valore = search.val('');
        },
        error: function error() {
          alert('errore chiamta ajax');
        }
      }); //fine chiamata ajax
    }
  }); //Ritorno alla homepgae iniziale con click su logo spotify

  $('.logo img').click(function () {
    container.html('');
    getData(template, container);
  });
}); // fine doc ready

/***
 * FUNZIONI
 ***/

function getData(template, container) {
  $.ajax({
    url: 'http://localhost:8888/php-ajax-dischi/partial/template/json-script.php/',
    method: 'GET',
    success: function success(res) {
      for (var i = 0; i < res.length; i++) {
        var self = res[i];
        var data = {
          poster: self.poster,
          titolo: self.name,
          autore: self.author,
          anno: self.year
        };
        var html = template(data);
        container.append(html);
      }
    },
    error: function error() {
      alert('errore chiamata ajax');
    }
  }); //fine chiamata ajax
} //FINE FUNZIONE

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/php-ajax-dischi/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/php-ajax-dischi/src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });