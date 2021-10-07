(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1269],{65668:(r,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(94015),t=e.n(o),a=e(23645),s=e.n(a)()(t());s.push([r.id,"/**\n * Pastel On Dark theme ported from ACE editor\n * @license MIT\n * @copyright AtomicPages LLC 2014\n * @author Dennis Thompson, AtomicPages LLC\n * @version 1.1\n * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme\n */\n\n.cm-s-pastel-on-dark.CodeMirror {\n\tbackground: #2c2827;\n\tcolor: #8F938F;\n\tline-height: 1.5;\n}\n.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }\n\n.cm-s-pastel-on-dark .CodeMirror-gutters {\n\tbackground: #34302f;\n\tborder-right: 0px;\n\tpadding: 0 3px;\n}\n.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }\n.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }\n.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }\n.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }\n.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-string { color: #66A968; }\n.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }\n.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }\n.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }\n.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-error {\n\tbackground: #757aD8;\n\tcolor: #f8f8f0;\n}\n.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }\n.cm-s-pastel-on-dark .CodeMirror-matchingbracket {\n\tborder: 1px solid rgba(255,255,255,0.25);\n\tcolor: #8F938F !important;\n\tmargin: -1px -1px 0 -1px;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/pastel-on-dark.css"],names:[],mappings:"AAAA;;;;;;;EAOE;;AAEF;CACC,mBAAmB;CACnB,cAAc;CACd,gBAAgB;AACjB;AACA,+CAA+C,iCAAiC,EAAE;AAClF,4KAA4K,iCAAiC,EAAE;AAC/M,2LAA2L,iCAAiC,EAAE;;AAE9N;CACC,mBAAmB;CACnB,iBAAiB;CACjB,cAAc;AACf;AACA,gDAAgD,YAAY,EAAE;AAC9D,uDAAuD,cAAc,EAAE;AACvE,8CAA8C,cAAc,EAAE;AAC9D,0CAA0C,8BAA8B,EAAE;AAC1E,uCAAuC,cAAc,EAAE;AACvD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,yCAAyC,cAAc,EAAE;AACzD,uCAAuC,cAAc,EAAE;AACvD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,0CAA0C,cAAc,EAAE;AAC1D,6EAA6E,cAAc,EAAE;AAC7F,mCAAmC,cAAc,EAAE;AACnD,uCAAuC,cAAc,EAAE;AACvD,mCAAmC,cAAc,EAAE;AACnD,oCAAoC,cAAc,EAAE;AACpD,8EAA8E,cAAc,EAAE;AAC9F;CACC,mBAAmB;CACnB,cAAc;AACf;AACA,yDAAyD,sCAAsC,EAAE;AACjG;CACC,wCAAwC;CACxC,yBAAyB;CACzB,wBAAwB;AACzB",sourcesContent:["/**\n * Pastel On Dark theme ported from ACE editor\n * @license MIT\n * @copyright AtomicPages LLC 2014\n * @author Dennis Thompson, AtomicPages LLC\n * @version 1.1\n * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme\n */\n\n.cm-s-pastel-on-dark.CodeMirror {\n\tbackground: #2c2827;\n\tcolor: #8F938F;\n\tline-height: 1.5;\n}\n.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }\n\n.cm-s-pastel-on-dark .CodeMirror-gutters {\n\tbackground: #34302f;\n\tborder-right: 0px;\n\tpadding: 0 3px;\n}\n.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }\n.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }\n.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }\n.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }\n.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-string { color: #66A968; }\n.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }\n.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }\n.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }\n.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-error {\n\tbackground: #757aD8;\n\tcolor: #f8f8f0;\n}\n.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }\n.cm-s-pastel-on-dark .CodeMirror-matchingbracket {\n\tborder: 1px solid rgba(255,255,255,0.25);\n\tcolor: #8F938F !important;\n\tmargin: -1px -1px 0 -1px;\n}\n"],sourceRoot:""}]);const c=s},23645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,o){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(t[s]=!0)}for(var c=0;c<r.length;c++){var i=[].concat(r[c]);o&&t[i[0]]||(e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),n.push(i))}},n}},94015:r=>{"use strict";function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=r[e];return o}r.exports=function(r){var e,o,t=(o=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],o=!0,t=!1,a=void 0;try{for(var s,c=r[Symbol.iterator]();!(o=(s=c.next()).done)&&(e.push(s.value),!n||e.length!==n);o=!0);}catch(r){t=!0,a=r}finally{try{o||null==c.return||c.return()}finally{if(t)throw a}}return e}}(e,o)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var o=Object.prototype.toString.call(r).slice(8,-1);return"Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o?Array.from(r):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(r,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=t[1],s=t[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(i," */"),A=s.sources.map((function(r){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(r," */")}));return[a].concat(A).concat([l]).join("\n")}return[a].join("\n")}},1269:(r,n,e)=>{var o=e(65668);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.id,o,""]]);e(93379)(o,{insert:"head",singleton:!1}),o.locals&&(r.exports=o.locals)},93379:(r,n,e)=>{"use strict";var o,t={},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}();function s(r,n){for(var e=[],o={},t=0;t<r.length;t++){var a=r[t],s=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[s]?o[s].parts.push(c):e.push(o[s]={id:s,parts:[c]})}return e}function c(r,n){for(var e=0;e<r.length;e++){var o=r[e],a=t[o.id],s=0;if(a){for(a.refs++;s<a.parts.length;s++)a.parts[s](o.parts[s]);for(;s<o.parts.length;s++)a.parts.push(u(o.parts[s],n))}else{for(var c=[];s<o.parts.length;s++)c.push(u(o.parts[s],n));t[o.id]={id:o.id,refs:1,parts:c}}}}function i(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var o=e.nc;o&&(r.attributes.nonce=o)}if(Object.keys(r.attributes).forEach((function(e){n.setAttribute(e,r.attributes[e])})),"function"==typeof r.insert)r.insert(n);else{var t=a(r.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}return n}var l,A=(l=[],function(r,n){return l[r]=n,l.filter(Boolean).join("\n")});function p(r,n,e,o){var t=e?"":o.css;if(r.styleSheet)r.styleSheet.cssText=A(n,t);else{var a=document.createTextNode(t),s=r.childNodes;s[n]&&r.removeChild(s[n]),s.length?r.insertBefore(a,s[n]):r.appendChild(a)}}function d(r,n,e){var o=e.css,t=e.media,a=e.sourceMap;if(t&&r.setAttribute("media",t),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}var m=null,C=0;function u(r,n){var e,o,t;if(n.singleton){var a=C++;e=m||(m=i(n)),o=p.bind(null,e,a,!1),t=p.bind(null,e,a,!0)}else e=i(n),o=d.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=s(r,n);return c(e,n),function(r){for(var o=[],a=0;a<e.length;a++){var i=e[a],l=t[i.id];l&&(l.refs--,o.push(l))}r&&c(s(r,n),n);for(var A=0;A<o.length;A++){var p=o[A];if(0===p.refs){for(var d=0;d<p.parts.length;d++)p.parts[d]();delete t[p.id]}}}}}}]);
//# sourceMappingURL=1269.696ff230606716331d7d.js.map