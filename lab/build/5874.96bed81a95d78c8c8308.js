"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5874,3975],{43975:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var n=a(1468),o=a(90121);const r={id:"@jupyterlab/mathjax2-extension:plugin",autoStart:!0,provides:a(32140).ILatexTypesetter,activate:()=>{const[t,e]=["fullMathjaxUrl","mathjaxConfig"],a=n.PageConfig.getOption(t),i=n.PageConfig.getOption(e);if(!a){const a=`${r.id} uses '${t}' and '${e}' in PageConfig to operate but '${t}' was not found.`;throw new Error(a)}return new o.MathJaxTypesetter({url:a,config:i})}},i=r}}]);
//# sourceMappingURL=5874.96bed81a95d78c8c8308.js.map