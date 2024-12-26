"use strict";(self.webpackChunksolin_website=self.webpackChunksolin_website||[]).push([[977],{6772:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"whitepaper/protocol","title":"\ud83d\udcdc Solin Protocol","description":"\u968f\u7740\u7528\u6237\u5728 Solin \u5e73\u53f0\u7684\u957f\u671f\u53c2\u4e0e\uff0cSBT \u7684\u4ef7\u503c\u548c\u4fe1\u7528\u7b49\u7ea7\u4f1a\u9010\u6b65\u63d0\u5347\u3002Solin \u4e3a\u8fdb\u4e00\u6b65\u62d3\u5c55 Solin \u751f\u6001\u7cfb\u7edf\uff0c\u589e\u5f3a\u5176\u5728 Web3 \u793e\u4ea4\u9886\u57df\u7684\u5e94\u7528\u4ef7\u503c\uff0c\u63d0\u51fa\u4e0e\u7b2c\u4e09\u65b9\u9879\u76ee\u5c55\u5f00\u6df1\u5ea6\u5408\u4f5c\u7684\u5f00\u653e\u5f0f\u534f\u8bae\u2014\u2014Solin Protocol\u3002","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/whitepaper/protocol.md","sourceDirName":"whitepaper","slug":"/whitepaper/protocol","permalink":"/zh-Hans/docs/whitepaper/protocol","draft":false,"unlisted":false,"editUrl":"https://github.com/SolinAI/solinai.github.io/docs/whitepaper/protocol.md","tags":[],"version":"current","frontMatter":{},"sidebar":"whitePaperSidebar","previous":{"title":"\ud83d\ude80 Solin \u613f\u666f","permalink":"/zh-Hans/docs/whitepaper/vision"},"next":{"title":"\ud83e\ude99 \u7075\u9b42\u4fe1\u7528","permalink":"/zh-Hans/docs/whitepaper/SoulCredit"}}');var t=o(4848),s=o(8453);const i={},l="\ud83d\udcdc Solin Protocol",c={},p=[];function d(n){const e={br:"br",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"-solin-protocol",children:"\ud83d\udcdc Solin Protocol"})}),"\n",(0,t.jsxs)(e.p,{children:["\u968f\u7740\u7528\u6237\u5728 Solin \u5e73\u53f0\u7684\u957f\u671f\u53c2\u4e0e\uff0cSBT \u7684\u4ef7\u503c\u548c\u4fe1\u7528\u7b49\u7ea7\u4f1a\u9010\u6b65\u63d0\u5347\u3002Solin \u4e3a\u8fdb\u4e00\u6b65\u62d3\u5c55 Solin \u751f\u6001\u7cfb\u7edf\uff0c\u589e\u5f3a\u5176\u5728 Web3 \u793e\u4ea4\u9886\u57df\u7684\u5e94\u7528\u4ef7\u503c\uff0c\u63d0\u51fa\u4e0e\u7b2c\u4e09\u65b9\u9879\u76ee\u5c55\u5f00\u6df1\u5ea6\u5408\u4f5c\u7684\u5f00\u653e\u5f0f\u534f\u8bae\u2014\u2014",(0,t.jsx)(e.strong,{children:"Solin Protocol"}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Solin Protocol"})," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f\u7684\u3001\u53bb\u4e2d\u5fc3\u5316\u7684\u6807\u51c6\u534f\u8bae\uff0c\u65e8\u5728\u4fc3\u8fdb Solin \u5e73\u53f0\u4e0e\u5176\u4ed6\u533a\u5757\u94fe\u9879\u76ee\u3001Web3 \u9879\u76ee\u53ca\u4f20\u7edf\u884c\u4e1a\u9879\u76ee\u7684\u4e92\u64cd\u4f5c\u6027\uff0c\u5141\u8bb8\u7b2c\u4e09\u65b9\u9879\u76ee\u901a\u8fc7\u5b89\u5168\u3001\u900f\u660e\u7684\u65b9\u5f0f\u8bbf\u95ee\u7528\u6237\u7684 SBT \u4fe1\u7528\u6570\u636e\uff0c\u5e76\u6839\u636e\u8fd9\u4e9b\u6570\u636e\u5f00\u5c55\u5408\u4f5c\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6838\u5fc3\u7279\u6027"}),"\uff1a"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8de8\u533a\u5757\u94fe\u4e0e\u8de8\u5e73\u53f0\u7684\u793e\u4ea4\u4fe1\u7528\u4e92\u8054\u4e92\u901a"}),(0,t.jsx)(e.br,{}),"\n","\u901a\u8fc7\u5f00\u653e\u7684 API \u63a5\u53e3\u548c\u667a\u80fd\u5408\u7ea6\uff0c\u5b9e\u73b0\u4e0e\u5176\u4ed6 Web3 \u9879\u76ee\u3001\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08DeFi\uff09\u5e73\u53f0\u3001NFT \u5e02\u573a\u7b49\u7684\u6df1\u5ea6\u5408\u4f5c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u7528\u6237\u6388\u6743\u4e0e\u6570\u636e\u63a7\u5236"}),(0,t.jsx)(e.br,{}),"\n","\u7528\u6237\u53ef\u9009\u62e9\u6027\u5730\u901a\u8fc7\u5bf9 Solin Protocol \u667a\u80fd\u5408\u7ea6\u7b7e\u7f72\u6388\u6743\u534f\u8bae\uff0c\u660e\u786e\u54ea\u4e9b\u6570\u636e\u5c06\u88ab\u5171\u4eab\uff0c\u4ee5\u53ca\u5171\u4eab\u7684\u5177\u4f53\u7528\u9014\u3002"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6388\u6743\u53ef\u4ee5\u968f\u65f6\u64a4\u9500\uff0c\u786e\u4fdd\u7528\u6237\u5bf9\u81ea\u5df1\u6570\u636e\u7684\u5b8c\u5168\u63a7\u5236\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4fe1\u7528\u7cfb\u7edf\u7684\u53cd\u9988\u673a\u5236"}),(0,t.jsx)(e.br,{}),"\n","\u7528\u6237\u53c2\u4e0e\u7b2c\u4e09\u65b9\u9879\u76ee\u7684\u884c\u4e3a\u6570\u636e\u5c06\u53cd\u9988\u5230 SBT \u4fe1\u7528\u7cfb\u7edf\uff0c\u63d0\u5347\u81ea\u8eab\u7684\u7075\u9b42\u5206\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u76ee\u6807"}),"\uff1a",(0,t.jsx)(e.br,{}),"\n","\u901a\u8fc7 Solin Protocol\uff0c\u589e\u5f3a Solin \u5e73\u53f0\u5728 Web3 \u793e\u4ea4\u9886\u57df\u7684\u5e94\u7528\u4ef7\u503c\uff0c\u4fc3\u8fdb\u751f\u6001\u7cfb\u7edf\u7684\u6269\u5c55\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u53c2\u4e0e\u673a\u4f1a\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u4e0e\u4fe1\u7528\u7b49\u7ea7\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>l});var r=o(6540);const t={},s=r.createContext(t);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);