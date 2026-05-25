import{j as t,r as u,u as N,a as A,q as R,s as I}from"./index-DEofe_bQ.js";import{B as w,T as h}from"./Modal-CcjP-fe7.js";import{G as j}from"./cartitem-CM6xpt5t.js";import{l as S}from"./styled-components.browser.esm-RSKaG32_.js";import{g as x,a as C,u as f,c as v,b as y,s as b,d as B}from"./TransitionGroupContext-Dl6YQswE.js";import{P}from"./useSlot-CITO4GD3.js";import{B as E}from"./MenuItem-BQWRObMp.js";const ot=({records:e,renderitem:s})=>t.jsx(w,{sx:{flexGrow:1},children:t.jsx(j,{container:!0,spacing:{xs:2,md:3},columns:{xs:1,sm:8,md:12},children:e.map(o=>t.jsx(j,{item:!0,xs:4,sm:4,md:4,children:s(o)},o.id))})});function G(e){return x("MuiCard",e)}C("MuiCard",["root"]);const U=e=>{const{classes:s}=e;return y({root:["root"]},G,s)},q=b(P,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),T=u.forwardRef(function(s,o){const a=f({props:s,name:"MuiCard"}),{className:n,raised:c=!1,...i}=a,r={...a,raised:c},d=U(r);return t.jsx(q,{className:v(d.root,n),elevation:c?8:void 0,ref:o,ownerState:r,...i})});function L(e){return x("MuiCardContent",e)}C("MuiCardContent",["root"]);const O=e=>{const{classes:s}=e;return y({root:["root"]},L,s)},D=b("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),Z=u.forwardRef(function(s,o){const a=f({props:s,name:"MuiCardContent"}),{className:n,component:c="div",...i}=a,r={...a,component:c},d=O(r);return t.jsx(D,{as:c,className:v(d.root,n),ownerState:r,ref:o,...i})});function $(e){return x("MuiCardMedia",e)}C("MuiCardMedia",["root","media","img"]);const z=e=>{const{classes:s,isMediaComponent:o,isImageComponent:a}=e;return y({root:["root",o&&"media",a&&"img"]},$,s)},W=b("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:n}=o;return[s.root,a&&s.media,n&&s.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),_=["video","audio","picture","iframe","img"],F=["picture","img"],H=u.forwardRef(function(s,o){const a=f({props:s,name:"MuiCardMedia"}),{children:n,className:c,component:i="div",image:r,src:d,style:m,...g}=a,p=_.includes(i),l=!p&&r?{backgroundImage:`url("${r}")`,...m}:m,k={...a,component:i,isMediaComponent:p,isImageComponent:F.includes(i)},M=z(k);return t.jsx(W,{className:v(M.root,c),as:i,role:!p&&r?"img":void 0,ref:o,style:l,ownerState:k,src:p?r||d:void 0,...g,children:n})}),J=({id:e,like:s})=>{const o=N(n=>n.wishliststore.items.includes(e)),a=()=>{s?.(!o)};return t.jsx(K,{children:t.jsxs("div",{className:"heart-container",title:"Like",children:[t.jsx("input",{type:"checkbox",className:"checkbox",id:"Give-It-An-Id",checked:o,onChange:a}),t.jsxs("div",{className:"svg-container",children:[t.jsx("svg",{viewBox:"0 0 24 24",className:"svg-outline",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"})}),t.jsx("svg",{viewBox:"0 0 24 24",className:"svg-filled",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"})}),t.jsxs("svg",{className:"svg-celebrate",width:100,height:100,xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("polygon",{points:"10,10 20,20"}),t.jsx("polygon",{points:"10,50 20,50"}),t.jsx("polygon",{points:"20,80 30,70"}),t.jsx("polygon",{points:"90,10 80,20"}),t.jsx("polygon",{points:"90,50 80,50"}),t.jsx("polygon",{points:"80,80 70,70"})]})]})]})})},K=S.div`
  .heart-container {
    --heart-color: rgb(255, 91, 137);
    position: relative;
    width: 25px;
    height: 50px;
    transition: .3s;
  }

  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .heart-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-container .svg-outline,
  .heart-container .svg-filled {
    fill: var(--heart-color);
    position: absolute;
  }

  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }

  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate .5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  .heart-container .checkbox:checked~.svg-container .svg-filled {
    display: block
  }

  .heart-container .checkbox:checked~.svg-container .svg-celebrate {
    display: block
  }

  @keyframes keyframes-svg-filled {
    0% { transform: scale(0); }
    25% { transform: scale(1.2); }
    50% { transform: scale(1); filter: brightness(1.5); }
  }

  @keyframes keyframes-svg-celebrate {
    0% { transform: scale(0); }
    50% { opacity: 1; filter: brightness(1.5); }
    100% { transform: scale(1.4); opacity: 0; display: none; }
  }
`,at=u.memo(function(e){const{title:s,img:o,price:a,id:n,max:c,qua:i}=e,r=c-(i??0),d=r<=0,m=A();function g(){m(R(n))}function p(){m(I(n))}const l=B();return t.jsxs(T,{style:{position:"relative",maxWidth:345,borderRadius:"20px",color:l.palette.ant.back,backgroundColor:l.palette.ant.back,backgroundImage:l.palette.ant.back},children:[t.jsx(H,{style:{color:l.palette.ant.back},component:"img",height:"300",image:o,alt:"green iguana"}),t.jsxs(Z,{style:{borderRadius:"20px"},children:[t.jsx(h,{style:{color:"white"},gutterBottom:!0,variant:"h5",component:"div",children:s}),t.jsxs(h,{style:{display:"flex",justifyContent:"start",color:"white"},variant:"body2",color:"text.secondary",children:[a," EGP"]}),t.jsxs(h,{children:[r," quantaty"]}),t.jsx(E,{disabled:d,onClick:()=>{g()},variant:"contained",disableElevation:!0,style:{backgroundColor:l.palette.ant.to,color:l.palette.ant.tex},children:"Add to cart "}),t.jsx(w,{sx:{marginBottom:"-10px",position:"absolute",right:"25px",bottom:"25px"},children:t.jsx(J,{like:p,id:n})})]})]})});export{T as C,ot as G,at as P,H as a,Z as b};
