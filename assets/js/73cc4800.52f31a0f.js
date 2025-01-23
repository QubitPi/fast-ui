"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{9612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(5893),a=n(1151);const r={sidebar_position:2,title:"Managing App States"},o=void 0,i={id:"redux",title:"Managing App States",description:"FastUI uses Redux state management",source:"@site/docs/redux.md",sourceDirName:".",slug:"/redux",permalink:"/docs/redux",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/fast-ui/tree/master/docs/docs/redux.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Managing App States"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"}},c={},d=[];function l(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["FastUI uses ",(0,s.jsx)(t.a,{href:"https://react-redux.qubitpi.org/",children:"Redux state management"}),"\n",(0,s.jsx)(t.a,{href:"https://react-redux.qubitpi.org/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge",alt:"Redux Badge"})}),"\ninstead of ",(0,s.jsx)(t.a,{href:"https://react.qubitpi.org/reference/react/useState",children:"React state management"})," for a much more maintainable decoupling of React components."]}),"\n",(0,s.jsx)(t.p,{children:"The template has already been configured with 2 states"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["a string variable named ",(0,s.jsx)(t.code,{children:"myState1"})]}),"\n",(0,s.jsxs)(t.li,{children:["a boolean variable called ",(0,s.jsx)(t.code,{children:"myState2"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { selectMyState1, setMyState1, setMyState2 } from "../../fast-ui-redux";\n\nfunction MyComponent(): JSX.Element {\n  const myState1 = useAppSelector(selectMyState1);\n  const myState2 = useAppSelector(selectMyState2);\n\n  console.log(setMyState1);\n\n  const dispatch = useAppDispatch();\n  dispatch(setMyState2(false));\n}\n\nexport default App;\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(7294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);