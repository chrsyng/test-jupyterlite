(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,n)=>{"use strict";n.r(t);var i=n(38175),o=n(1468);n(31816);const s=[n.e(3147).then(n.t.bind(n,43147,23)),n.e(9632).then(n.t.bind(n,29632,23)),n.e(9181).then(n.t.bind(n,29181,23)),n.e(3621).then(n.t.bind(n,13621,23))],r=[n.e(1705).then(n.t.bind(n,1705,23)),Promise.all([n.e(4462),n.e(3315),n.e(8151),n.e(8367),n.e(8627),n.e(9938),n.e(6927),n.e(4819)]).then(n.bind(n,4462)),n.e(8868).then(n.t.bind(n,78868,23))],a=JSON.parse(o.PageConfig.getOption("disabledExtensions")||"[]");async function l(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),n}}!async function(){const e=new i.JupyterLiteServer({});e.registerPluginModules(await Promise.all(s)),await e.start();const{serviceManager:t}=e,d=await Promise.all(r);let u=[n(49558),n(16485),n(87734).default.filter((({id:e})=>!["@retrolab/application-extension:logo","@retrolab/application-extension:opener"].includes(e))),n(10183),n(72321),n(495).default.filter((({id:e})=>["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy"].includes(e))),n(2488).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu"].includes(e))),n(54015).default.filter((({id:e})=>["@jupyterlab/codemirror-extension:services","@jupyterlab/codemirror-extension:codemirror"].includes(e))),n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:manager"].includes(e))),n(52828),n(31461).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin"].includes(e))),n(31824),n(38183),n(92033).default.filter((({id:e})=>["@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"].includes(e))),n(87603),n(45651),n(21443),n(72180),n(14092)];switch(o.PageConfig.getOption("retroPage")){case"tree":u=u.concat([n(18314).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file"].includes(e))),n(71135).default.filter((({id:e})=>"@retrolab/tree-extension:new-terminal"!==e))]);break;case"notebooks":u=u.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:notebooks"].includes(e))),n(63080).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"].includes(e)))]);break;case"consoles":u=u.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:consoles"].includes(e))),n(63080).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"].includes(e)))]);break;case"edit":u=u.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:files"].includes(e))),n(30091).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:plugin"].includes(e))),n(18314).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory"].includes(e)))])}const p=[],c=[],f=[],b=JSON.parse(o.PageConfig.getOption("federated_extensions")),m=new Set;function*y(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(t)?t:[t];for(let e of n)a.includes(e.id)||a.includes(e.id.split(":")[0])||(yield e)}b.forEach((e=>{e.extension&&(m.add(e.name),p.push(l(e.name,e.extension))),e.mimeExtension&&(m.add(e.name),c.push(l(e.name,e.mimeExtension))),e.style&&f.push(l(e.name,e.style))})),(await Promise.allSettled(c)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))d.push(t);else console.error(e.reason)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))u.push(t);else console.error(e.reason)}));const{RetroApp:g}=n(74158),h=new g({serviceManager:t,mimeExtensions:d});h.name="RetroLite",h.registerPluginModules(u),console.log("Starting app"),await h.start(),console.log(`${h.name} started, waiting for restore`),await h.restored,console.log(`${h.name} restored`)}()},31816:(e,t,n)=>{"use strict";n.r(t),n(30756),n(81088),n(60734),n(69213),n(41044),n(42413),n(82053),n(10139),n(7537),n(19697),n(63815),n(27784),n(56656),n(41901),n(15619),n(58739),n(98143),n(21499),n(45074),n(13914),n(74727),n(20598),n(58489),n(34232),n(38527)},3472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(94015),o=n.n(i),s=n(23645),r=n.n(s)()(o());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},88742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(94015),o=n.n(i),s=n(23645),r=n.n(s)()(o());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const a=r},10196:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(94015),o=n.n(i),s=n(23645),r=n.n(s)()(o());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/retro-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},98143:(e,t,n)=>{var i=n(3472);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(93379)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},45074:(e,t,n)=>{var i=n(88742);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(93379)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},13914:(e,t,n)=>{var i=n(10196);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(93379)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)}}]);
//# sourceMappingURL=880.ff49d5c8fc15a01420a8.js.map