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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client-side/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client-side/src/index.jsx":
/*!***********************************!*\
  !*** ./Client-side/src/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\Client-side\\\\src\\\\index.jsx: Unexpected token, expected \\\";\\\" (24:13)\\n\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 23 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 24 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mgotMoney\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7044:17)\\n    at Object.unexpected (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8422:16)\\n    at Object.semicolon (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8404:40)\\n    at Object.parseExpressionStatement (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11257:10)\\n    at Object.parseStatementContent (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10858:19)\\n    at Object.parseStatement (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10724:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11298:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11285:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10655:10)\\n    at Object.parse (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12264:10)\\n    at parse (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12315:38)\\n    at parser (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\Users\\\\milow\\\\Documents\\\\GitHub\\\\MCSP03FEC\\\\node_modules\\\\gensync\\\\index.js:216:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQtc2lkZS9zcmMvaW5kZXguanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Client-side/src/index.jsx\n");

/***/ })

/******/ });