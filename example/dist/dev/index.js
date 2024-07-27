/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "";
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
const main = document.querySelector("main");
// fit page height
function updateRatio() {
    const vh = document.documentElement.clientHeight; // without scrollbar
    const mh = main.clientHeight; // height: 148mm
    main.style.setProperty("--scale", `${vh / mh}`);
}
window.addEventListener('resize', updateRatio);
updateRatio();
// change slide
let sections = [
    ...document.querySelectorAll('section')
];
let current = 0;
document.addEventListener("keyup", (ev)=>{
    if (ev.code === "ArrowLeft" && current !== 0) --current;
    if (ev.code === "ArrowRight" && current !== sections.length - 1) ++current;
    main.scrollTo({
        top: sections[current].offsetTop,
        behavior: "instant"
    });
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.md ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "index.html");
})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IlNBQUE7U0FDQTs7Ozs7VUNEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7Ozs7OztBQ0FBLE1BQU1BLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztBQUVwQyxrQkFBa0I7QUFDbEIsU0FBU0M7SUFDTCxNQUFNQyxLQUFLSCxTQUFTSSxlQUFlLENBQUNDLFlBQVksRUFBRSxvQkFBb0I7SUFDdEUsTUFBTUMsS0FBS1AsS0FBS00sWUFBWSxFQUFFLGdCQUFnQjtJQUM5Q04sS0FBS1EsS0FBSyxDQUFDQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUVMLEtBQUdHLEdBQUcsQ0FBQztBQUNoRDtBQUVBRyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVUjtBQUNsQ0E7QUFFQSxlQUFlO0FBQ2YsSUFBSVMsV0FBVztPQUFJWCxTQUFTWSxnQkFBZ0IsQ0FBQztDQUFXO0FBQ3hELElBQUlDLFVBQVU7QUFDZGIsU0FBU1UsZ0JBQWdCLENBQUMsU0FBUyxDQUFDSTtJQUVoQyxJQUFJQSxHQUFHQyxJQUFJLEtBQUksZUFBZ0JGLFlBQVksR0FDdkMsRUFBRUE7SUFDTixJQUFJQyxHQUFHQyxJQUFJLEtBQUksZ0JBQWdCRixZQUFZRixTQUFTSyxNQUFNLEdBQUcsR0FDekQsRUFBRUg7SUFFTmQsS0FBS2tCLFFBQVEsQ0FBQztRQUNWQyxLQUFLUCxRQUFRLENBQUNFLFFBQVEsQ0FBQ00sU0FBUztRQUNoQ0MsVUFBVTtJQUNkO0FBQ0o7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUscUJBQXVCLGVBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4YW1wbGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS8uL3NyYy9pbmRleC5jc3M/OTJmYiIsIndlYnBhY2s6Ly9leGFtcGxlLy4vc3JjL2luZGV4Lm1kIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4vLyBmaXQgcGFnZSBoZWlnaHRcbmZ1bmN0aW9uIHVwZGF0ZVJhdGlvKCkge1xuICAgIGNvbnN0IHZoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDsgLy8gd2l0aG91dCBzY3JvbGxiYXJcbiAgICBjb25zdCBtaCA9IG1haW4uY2xpZW50SGVpZ2h0OyAvLyBoZWlnaHQ6IDE0OG1tXG4gICAgbWFpbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2NhbGVcIiwgYCR7dmgvbWh9YCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSYXRpbyk7XG51cGRhdGVSYXRpbygpO1xuXG4vLyBjaGFuZ2Ugc2xpZGVcbmxldCBzZWN0aW9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyldO1xubGV0IGN1cnJlbnQgPSAwO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldikgPT4ge1xuXG4gICAgaWYoIGV2LmNvZGU9PT0gXCJBcnJvd0xlZnRcIiAgJiYgY3VycmVudCAhPT0gMClcbiAgICAgICAgLS1jdXJyZW50O1xuICAgIGlmKCBldi5jb2RlPT09IFwiQXJyb3dSaWdodFwiICYmIGN1cnJlbnQgIT09IHNlY3Rpb25zLmxlbmd0aCAtIDEgKVxuICAgICAgICArK2N1cnJlbnQ7XG5cbiAgICBtYWluLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBzZWN0aW9uc1tjdXJyZW50XS5vZmZzZXRUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBcImluc3RhbnRcIixcbiAgICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7Il0sIm5hbWVzIjpbIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1cGRhdGVSYXRpbyIsInZoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwibWgiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnQiLCJldiIsImNvZGUiLCJsZW5ndGgiLCJzY3JvbGxUbyIsInRvcCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==