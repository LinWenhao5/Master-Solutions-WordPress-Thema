/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@wordpress/icons/build-module/library/link.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@wordpress/icons/build-module/library/link.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./blocks/grid-text.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../node_modules/@wordpress/icons/build-module/library/link.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)("blocktheme/grid-text", {
  title: "Grid Text",
  edit: EditComponent,
  supports: {
    align: ["full"]
  },
  attributes: {
    listContent: {
      type: "string",
      default: "Lorem ipsum"
    },
    heading: {
      type: "string",
      default: "Lorem ipsum"
    },
    text: {
      type: "string",
      default: "Lorem ipsum"
    },
    linkObject: {
      type: "object",
      default: {
        url: ""
      }
    },
    buttonText: {
      type: "string",
      default: "Meer over Security Bridge"
    },
    buttonColor: {
      type: "string",
      default: "button-22 w-button"
    }
  },
  save: SaveComponent
});
function EditComponent(props) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function buttonHandler(props) {
    setIsLinkPickerVisible(prev => !prev);
  }
  function handleLinkChange(newLink) {
    props.setAttributes({
      linkObject: newLink
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: props.attributes.buttonColor === "button-22 w-button",
    onClick: () => props.setAttributes({
      buttonColor: "button-22 w-button"
    })
  }, "Orange")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: props.attributes.buttonColor === "button-7 product w-button",
    onClick: () => props.setAttributes({
      buttonColor: "button-7 product w-button"
    })
  }, "Blue"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b",
    className: "div-block-60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    className: "heading-26",
    value: props.attributes.heading,
    onChange: x => props.setAttributes({
      heading: x
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "text-block-36",
    value: props.attributes.text,
    onChange: x => props.setAttributes({
      text: x
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: props.attributes.listContent,
    onChange: x => props.setAttributes({
      listContent: x
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    allowedFormats: [],
    tagName: "a",
    className: props.attributes.buttonColor,
    value: props.attributes.buttonText,
    onChange: x => props.setAttributes({
      buttonText: x
    })
  })), isLinkPickerVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    setttings: [],
    value: props.attributes.linkObject,
    onChange: handleLinkChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    variant: "primary",
    onClick: () => setIsLinkPickerVisible(false),
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link")));
}
function SaveComponent(props) {
  const {
    heading,
    text,
    listContent,
    linkObject,
    buttonColor,
    buttonText
  } = props.attributes;
  const htmlString = `
    <h1 class="heading-26">${heading}</h1>
    <div class="text-block-36">${text}</div>
    <p>${listContent}</p>
    <a bind="370734ad-4f23-3a69-a85a-2733e5383ae7" href="${linkObject.url}" class="${buttonColor}">${buttonText}</a>
  `;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b",
    className: "div-block-60",
    dangerouslySetInnerHTML: {
      __html: htmlString
    },
    style: {
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word'
    }
  });
}

// backup

// registerBlockType("blocktheme/grid-text", {
//     title: "Grid Text",
//     edit: EditComponent,
//     supports: {
//         align: ["full"],
//     },
//     attributes: {
//         listTitle1: {type: "string", default: "Lorem ipsum"},
//         listContent1: {type: "string", default: "Lorem ipsum"},
//         listTitle2: {type: "string", default: "Lorem ipsum"},
//         listContent2: {type: "string", default: "Lorem ipsum"},
//         listTitle3: {type: "string", default: "Lorem ipsum"},
//         listContent3: {type: "string", default: "Lorem ipsum"},
//         heading: {type: "string", default: "Lorem ipsum"},
//         text: {type: "string", default: "Lorem ipsum"},
//         linkObject: {type: "object", default: {url: ""} },
//         buttonText: {type: "string", default: "Meer over Security Bridge"},
//         buttonColor: {type: "string", default: "button-22 w-button"}
//     },
//     save: SaveComponent,
// });
//
// function EditComponent(props) {
//     const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
//
//     function buttonHandler(props) {
//         setIsLinkPickerVisible(prev => !prev);
//     }
//
//     function handleLinkChange(newLink) {
//         props.setAttributes({linkObject: newLink});
//     }
//     return (
//         <>
//             <BlockControls>
//                 <ToolbarGroup>
//                     <ToolbarButton onClick={buttonHandler} icon={link} />
//                 </ToolbarGroup>
//                 <ToolbarGroup>
//                     <ToolbarButton isPressed={props.attributes.buttonColor === "button-22 w-button"} onClick={()=>props.setAttributes({buttonColor: "button-22 w-button"})}>Orange</ToolbarButton>
//                 </ToolbarGroup>
//                 <ToolbarGroup>
//                     <ToolbarButton isPressed={props.attributes.buttonColor === "button-7 product w-button"} onClick={()=>props.setAttributes({buttonColor: "button-7 product w-button"})}>Blue</ToolbarButton>
//                 </ToolbarGroup>
//             </BlockControls>
//             <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b" className="div-block-60">
//
//                 <RichText
//                     tagName="h1" className="heading-26"
//                     value={props.attributes.heading} onChange={(x)=>props.setAttributes({ heading: x})}
//                 />
//
//                 <RichText
//                     tagName="div" className="text-block-36"
//                     value={props.attributes.text} onChange={(x)=>props.setAttributes({ text: x})}
//                 />
//
//
//                 <ul role="list" className="list-4">
//                     <RichText
//                         tagName="li" className="list-item"
//                         value={props.attributes.listTitle1} onChange={(x)=>props.setAttributes({ listTitle1: x})}
//                     />
//                     <RichText
//                         tagName="p" className="text-block"
//                         value={props.attributes.listContent1} onChange={(x)=>props.setAttributes({ listContent1: x})}
//                     />
//                     <RichText
//                         tagName="li" className="list-item"
//                         value={props.attributes.listTitle2} onChange={(x)=>props.setAttributes({ listTitle2: x})}
//                     />
//                     <RichText
//                         tagName="p" className="text-block"
//                         value={props.attributes.listContent2} onChange={(x)=>props.setAttributes({ listContent2: x})}
//                     />
//                     <RichText
//                         tagName="li" className="list-item"
//                         value={props.attributes.listTitle3} onChange={(x)=>props.setAttributes({ listTitle3: x})}
//                     />
//                     <RichText
//                         tagName="p" className="text-block"
//                         value={props.attributes.listContent3} onChange={(x)=>props.setAttributes({ listContent3: x})}
//                     />
//                 </ul>
//                 <RichText allowedFormats={[]}
//                           tagName="a" className={props.attributes.buttonColor} value={props.attributes.buttonText} onChange={(x)=>props.setAttributes({ buttonText: x})}
//                 />
//             </div>
//             {isLinkPickerVisible && (
//                 <Popover position="middle center">
//                     <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
//                     <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
//                         Confirm Link
//                     </button>
//                 </Popover>
//             )}
//         </>
//     );
// }
//
// function SaveComponent(props) {
//     return <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b" className="div-block-60">
//             <h1 className="heading-26">{props.attributes.heading}</h1>
//             <div className="text-block-36">{props.attributes.text}</div>
//             <ul role="list" className="list-4">
//                 <li className="list-item"><strong>{props.attributes.listTitle1}</strong>
//                     <br/>{props.attributes.listContent1}
//                 </li>
//                 <li className="list-item"><strong>{props.attributes.listTitle2}</strong>
//                     <br/>{props.attributes.listContent2}</li>
//                 <li className="list-item"><strong>{props.attributes.listTitle3}</strong>
//                     <br/>{props.attributes.listContent3}
//                 </li>
//             </ul>
//             <a bind="370734ad-4f23-3a69-a85a-2733e5383ae7" href={props.attributes.linkObject.url} className={props.attributes.buttonColor}>{props.attributes.buttonText}</a>
//         </div>
//
// }
})();

/******/ })()
;
//# sourceMappingURL=grid-text.js.map