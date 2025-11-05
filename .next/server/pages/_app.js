/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ThemeProvider.js":
/*!*************************************!*\
  !*** ./components/ThemeProvider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dark\");\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"theme\") || \"dark\";\n        setTheme(savedTheme);\n        setMounted(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted) {\n            localStorage.setItem(\"theme\", theme);\n            document.documentElement.className = theme;\n        }\n    }, [\n        theme,\n        mounted\n    ]);\n    const toggleTheme = ()=>{\n        setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    };\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\code\\\\Portfolio-website\\\\components\\\\ThemeProvider.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) {\n        throw new Error(\"useTheme must be used within ThemeProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lUHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRTtBQUV0RSxNQUFNSSw2QkFBZUosb0RBQWFBO0FBRTNCLFNBQVNLLGNBQWMsRUFBRUMsUUFBUSxFQUFFO0lBQ3hDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsYUFBYUMsYUFBYUMsT0FBTyxDQUFDLFlBQVk7UUFDcERMLFNBQVNHO1FBQ1RELFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTFIsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxTQUFTO1lBQ1hHLGFBQWFFLE9BQU8sQ0FBQyxTQUFTUDtZQUM5QlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUdWO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDQTtRQUFPRTtLQUFRO0lBRW5CLE1BQU1TLGNBQWM7UUFDbEJWLFNBQVNELFVBQVUsU0FBUyxVQUFVO0lBQ3hDO0lBRUEsSUFBSSxDQUFDRSxTQUFTLE9BQU87SUFFckIscUJBQ0UsOERBQUNMLGFBQWFlLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFPVztRQUFZO2tCQUNoRFo7Ozs7OztBQUdQO0FBRU8sTUFBTWUsV0FBVztJQUN0QixNQUFNQyxVQUFVckIsaURBQVVBLENBQUNHO0lBQzNCLElBQUksQ0FBQ2tCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL2NvbXBvbmVudHMvVGhlbWVQcm92aWRlci5qcz9iODYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnZGFyaycpXHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgJ2RhcmsnXHJcbiAgICBzZXRUaGVtZShzYXZlZFRoZW1lKVxyXG4gICAgc2V0TW91bnRlZCh0cnVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1vdW50ZWQpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZVxyXG4gICAgfVxyXG4gIH0sIFt0aGVtZSwgbW91bnRlZF0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpXHJcbiAgfVxyXG5cclxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIFRoZW1lUHJvdmlkZXInKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSIsInRvZ2dsZVRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRoZW1lIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ThemeProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ThemeProvider */ \"./components/ThemeProvider.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Route transition variants\nconst pageVariants = {\n    initial: {\n        opacity: 0,\n        y: 50,\n        scale: 0.98\n    },\n    in: {\n        opacity: 1,\n        y: 0,\n        scale: 1\n    },\n    out: {\n        opacity: 0,\n        y: -50,\n        scale: 1.02\n    }\n};\nconst pageTransition = {\n    type: \"tween\",\n    ease: \"anticipate\",\n    duration: 0.5\n};\n// Loading indicator component\nfunction LoadingIndicator({ isLoading }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        children: isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: {\n                scaleX: 0\n            },\n            animate: {\n                scaleX: 1\n            },\n            exit: {\n                scaleX: 0\n            },\n            transition: {\n                duration: 0.3,\n                ease: \"easeInOut\"\n            },\n            className: \"fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50 origin-left\"\n        }, void 0, false, {\n            fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n// Page transition wrapper\nfunction PageTransition({ children, router }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        mode: \"wait\",\n        initial: false,\n        onExitComplete: ()=>window.scrollTo(0, 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: \"initial\",\n            animate: \"in\",\n            exit: \"out\",\n            variants: pageVariants,\n            transition: pageTransition,\n            className: \"w-full\",\n            children: children\n        }, router.asPath, false, {\n            fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleStart = (url)=>{\n            if (url !== router.asPath) {\n                setIsLoading(true);\n            }\n        };\n        const handleComplete = ()=>{\n            setIsLoading(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingIndicator, {\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5a39c0a690c4f732\",\n                children: \"html{scroll-behavior:smooth}@-webkit-keyframes shimmer{0%{background-position:-200px 0}100%{background-position:-webkit-calc(200px + 100%)0;background-position:calc(200px + 100%)0}}@-moz-keyframes shimmer{0%{background-position:-200px 0}100%{background-position:-moz-calc(200px + 100%)0;background-position:calc(200px + 100%)0}}@-o-keyframes shimmer{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%)0}}@keyframes shimmer{0%{background-position:-200px 0}100%{background-position:-webkit-calc(200px + 100%)0;background-position:-moz-calc(200px + 100%)0;background-position:calc(200px + 100%)0}}.loading-shimmer{background:-webkit-linear-gradient(left,transparent,rgba(255,255,255,.1),transparent);background:-moz-linear-gradient(left,transparent,rgba(255,255,255,.1),transparent);background:-o-linear-gradient(left,transparent,rgba(255,255,255,.1),transparent);background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);-webkit-background-size:200px 100%;-moz-background-size:200px 100%;-o-background-size:200px 100%;background-size:200px 100%;-webkit-animation:shimmer 1.5s infinite;-moz-animation:shimmer 1.5s infinite;-o-animation:shimmer 1.5s infinite;animation:shimmer 1.5s infinite}.page-transition-enter{opacity:0;-webkit-transform:translatey(50px)scale(.98);-moz-transform:translatey(50px)scale(.98);-ms-transform:translatey(50px)scale(.98);-o-transform:translatey(50px)scale(.98);transform:translatey(50px)scale(.98)}.page-transition-enter-active{opacity:1;-webkit-transform:translatey(0)scale(1);-moz-transform:translatey(0)scale(1);-ms-transform:translatey(0)scale(1);-o-transform:translatey(0)scale(1);transform:translatey(0)scale(1);-webkit-transition:all 500ms ease-in-out;-moz-transition:all 500ms ease-in-out;-o-transition:all 500ms ease-in-out;transition:all 500ms ease-in-out}.page-transition-exit{opacity:1;-webkit-transform:translatey(0)scale(1);-moz-transform:translatey(0)scale(1);-ms-transform:translatey(0)scale(1);-o-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}.page-transition-exit-active{opacity:0;-webkit-transform:translatey(-50px)scale(1.02);-moz-transform:translatey(-50px)scale(1.02);-ms-transform:translatey(-50px)scale(1.02);-o-transform:translatey(-50px)scale(1.02);transform:translatey(-50px)scale(1.02);-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageTransition, {\n                router: router,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    className: \"jsx-5a39c0a690c4f732\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\code\\\\Portfolio-website\\\\pages\\\\_app.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNnQjtBQUNaO0FBQ2dCO0FBQzdCO0FBRTlCLDRCQUE0QjtBQUM1QixNQUFNTSxlQUFlO0lBQ25CQyxTQUFTO1FBQ1BDLFNBQVM7UUFDVEMsR0FBRztRQUNIQyxPQUFPO0lBQ1Q7SUFDQUMsSUFBSTtRQUNGSCxTQUFTO1FBQ1RDLEdBQUc7UUFDSEMsT0FBTztJQUNUO0lBQ0FFLEtBQUs7UUFDSEosU0FBUztRQUNUQyxHQUFHLENBQUM7UUFDSkMsT0FBTztJQUNUO0FBQ0Y7QUFFQSxNQUFNRyxpQkFBaUI7SUFDckJDLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0FBQ1o7QUFFQSw4QkFBOEI7QUFDOUIsU0FBU0MsaUJBQWlCLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2pCLDBEQUFlQTtrQkFDYmlCLDJCQUNDLDhEQUFDaEIsaURBQU1BLENBQUNpQixHQUFHO1lBQ1RaLFNBQVM7Z0JBQUVhLFFBQVE7WUFBRTtZQUNyQkMsU0FBUztnQkFBRUQsUUFBUTtZQUFFO1lBQ3JCRSxNQUFNO2dCQUFFRixRQUFRO1lBQUU7WUFDbEJHLFlBQVk7Z0JBQUVQLFVBQVU7Z0JBQUtELE1BQU07WUFBWTtZQUMvQ1MsV0FBVTs7Ozs7Ozs7Ozs7QUFLcEI7QUFFQSwwQkFBMEI7QUFDMUIsU0FBU0MsZUFBZSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUMxQyxxQkFDRSw4REFBQzFCLDBEQUFlQTtRQUNkMkIsTUFBSztRQUNMckIsU0FBUztRQUNUc0IsZ0JBQWdCLElBQU1DLE9BQU9DLFFBQVEsQ0FBQyxHQUFHO2tCQUV6Qyw0RUFBQzdCLGlEQUFNQSxDQUFDaUIsR0FBRztZQUVUWixTQUFRO1lBQ1JjLFNBQVE7WUFDUkMsTUFBSztZQUNMVSxVQUFVMUI7WUFDVmlCLFlBQVlWO1lBQ1pXLFdBQVU7c0JBRVRFO1dBUklDLE9BQU9NLE1BQU07Ozs7Ozs7Ozs7QUFZMUI7QUFFZSxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1ULFNBQVMzQixzREFBU0E7SUFDeEIsTUFBTSxDQUFDa0IsV0FBV21CLGFBQWEsR0FBR2pDLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1tQyxjQUFjLENBQUNDO1lBQ25CLElBQUlBLFFBQVFaLE9BQU9NLE1BQU0sRUFBRTtnQkFDekJJLGFBQWE7WUFDZjtRQUNGO1FBRUEsTUFBTUcsaUJBQWlCO1lBQ3JCSCxhQUFhO1FBQ2Y7UUFFQVYsT0FBT2MsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CSjtRQUNyQ1gsT0FBT2MsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4Q2IsT0FBT2MsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CRjtRQUVyQyxPQUFPO1lBQ0xiLE9BQU9jLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkw7WUFDdENYLE9BQU9jLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkg7WUFDekNiLE9BQU9jLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkg7UUFDeEM7SUFDRixHQUFHO1FBQUNiO0tBQU87SUFFWCxxQkFDRSw4REFBQ3RCLG9FQUFhQTs7MEJBQ1osOERBQUNZO2dCQUFpQkMsV0FBV0E7Ozs7Ozs7Ozs7MEJBaUQ3Qiw4REFBQ087Z0JBQWVFLFFBQVFBOzBCQUN0Qiw0RUFBQ1E7b0JBQVcsR0FBR0MsU0FBUzsrREFBVEEsYUFBQUEsK0JBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWVQcm92aWRlcidcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG4vLyBSb3V0ZSB0cmFuc2l0aW9uIHZhcmlhbnRzXHJcbmNvbnN0IHBhZ2VWYXJpYW50cyA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgeTogNTAsXHJcbiAgICBzY2FsZTogMC45OFxyXG4gIH0sXHJcbiAgaW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgc2NhbGU6IDFcclxuICB9LFxyXG4gIG91dDoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHk6IC01MCxcclxuICAgIHNjYWxlOiAxLjAyXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwYWdlVHJhbnNpdGlvbiA9IHtcclxuICB0eXBlOiAndHdlZW4nLFxyXG4gIGVhc2U6ICdhbnRpY2lwYXRlJyxcclxuICBkdXJhdGlvbjogMC41XHJcbn1cclxuXHJcbi8vIExvYWRpbmcgaW5kaWNhdG9yIGNvbXBvbmVudFxyXG5mdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHsgaXNMb2FkaW5nIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAge2lzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGVYOiAwIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlWDogMSB9fVxyXG4gICAgICAgICAgZXhpdD17eyBzY2FsZVg6IDAgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZWFzZTogJ2Vhc2VJbk91dCcgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGgtMSBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdmlhLXB1cnBsZS01MDAgdG8tcGluay01MDAgei01MCBvcmlnaW4tbGVmdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gIClcclxufVxyXG5cclxuLy8gUGFnZSB0cmFuc2l0aW9uIHdyYXBwZXJcclxuZnVuY3Rpb24gUGFnZVRyYW5zaXRpb24oeyBjaGlsZHJlbiwgcm91dGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBcclxuICAgICAgbW9kZT1cIndhaXRcIiBcclxuICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgIG9uRXhpdENvbXBsZXRlPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAga2V5PXtyb3V0ZXIuYXNQYXRofVxyXG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICBhbmltYXRlPVwiaW5cIlxyXG4gICAgICAgIGV4aXQ9XCJvdXRcIlxyXG4gICAgICAgIHZhcmlhbnRzPXtwYWdlVmFyaWFudHN9XHJcbiAgICAgICAgdHJhbnNpdGlvbj17cGFnZVRyYW5zaXRpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybCAhPT0gcm91dGVyLmFzUGF0aCkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydClcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSlcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8TG9hZGluZ0luZGljYXRvciBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgXHJcbiAgICAgIHsvKiBDdXN0b20gY3Vyc29yIHN0eWxlcyAqL31cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAvKiBTbW9vdGggc2Nyb2xsIGJlaGF2aW9yICovXHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogTG9hZGluZyBhbmltYXRpb25zICovXHJcbiAgICAgICAgQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2FkaW5nLXNoaW1tZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogUm91dGUgdHJhbnNpdGlvbiBlbmhhbmNlbWVudHMgKi9cclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgc2NhbGUoMC45OCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpIHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgICAgPFBhZ2VUcmFuc2l0aW9uIHJvdXRlcj17cm91dGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lUHJvdmlkZXIiLCJwYWdlVmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJzY2FsZSIsImluIiwib3V0IiwicGFnZVRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwiTG9hZGluZ0luZGljYXRvciIsImlzTG9hZGluZyIsImRpdiIsInNjYWxlWCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImNsYXNzTmFtZSIsIlBhZ2VUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJtb2RlIiwib25FeGl0Q29tcGxldGUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInZhcmlhbnRzIiwiYXNQYXRoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJ1cmwiLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();