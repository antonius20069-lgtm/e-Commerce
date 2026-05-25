import{r as j,j as e}from"./index-DEofe_bQ.js";import{B as o,T as d}from"./Modal-CcjP-fe7.js";import{G as k}from"./Grid-2KEhhFz9.js";import{g as R,a as S,u as $,c as A,b as M,s as U,m as B,C as x,E as y}from"./TransitionGroupContext-Dl6YQswE.js";function E(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function T(t){return parseFloat(t)}function X(t){return R("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=t=>{const{classes:n,variant:a,animation:r,hasChildren:s,width:l,height:i}=t;return M({root:["root",a,r,s&&"withChildren",s&&!l&&"fitContent",s&&!i&&"heightAuto"]},X,n)},p=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,h=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,G=typeof p!="string"?x`
        animation: ${p} 2s ease-in-out 0.5s infinite;
      `:null,K=typeof h!="string"?x`
        &::after {
          animation: ${h} 2s linear 0.5s infinite;
        }
      `:null,L=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})(B(({theme:t})=>{const n=E(t.shape.borderRadius)||"px",a=T(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:r})=>r.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:r})=>r.hasChildren&&!r.width,style:{maxWidth:"fit-content"}},{props:({ownerState:r})=>r.hasChildren&&!r.height,style:{height:"auto"}},{props:{animation:"pulse"},style:G||{animation:`${p} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:K||{"&::after":{animation:`${h} 2s linear 0.5s infinite`}}}]}})),c=j.forwardRef(function(n,a){const r=$({props:n,name:"MuiSkeleton"}),{animation:s="pulse",className:l,component:i="span",height:u,style:v,variant:w="text",width:b,...f}=r,g={...r,animation:s,component:i,variant:w,hasChildren:!!f.children},C=F(g);return e.jsx(L,{as:i,ref:a,className:A(C.root,l),ownerState:g,...f,style:{width:b,height:u,...v}})});function m(t){const{loading:n=!1}=t;return e.jsx(k,{container:!0,wrap:"nowrap",children:(n?Array.from(new Array(4)):[]).map((a,r)=>e.jsxs(o,{sx:{width:300,marginRight:.5,my:5},children:[a?e.jsx("img",{style:{width:210,height:118},alt:a.title,src:a.src}):e.jsx(c,{variant:"rectangular",width:210,height:118}),a?e.jsxs(o,{sx:{pr:2},children:[e.jsx(d,{gutterBottom:!0,variant:"body2",children:a.title}),e.jsx(d,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:a.channel}),e.jsx(d,{variant:"caption",sx:{color:"text.secondary"},children:`${a.views} • ${a.createdAt}`})]}):e.jsxs(o,{sx:{pt:.5},children:[e.jsx(c,{}),e.jsx(c,{width:"60%"})]})]},r))})}function N(){return e.jsxs(o,{sx:{overflow:"hidden"},children:[e.jsx(m,{loading:!0}),e.jsx(m,{})]})}const P=({loading:t,error:n,children:a})=>t==="pending"?e.jsx(N,{}):t==="failed"?e.jsxs("div",{children:["Error: ",n]}):e.jsx(e.Fragment,{children:a});export{P as L};
