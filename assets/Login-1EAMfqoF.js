import{j as t,r as P,a as Y,u as G,v as J,B as K,w as Q,N as X,L as _,C as ee}from"./index-B5qqyIUh.js";import{c as d}from"./CircularProgress-CulMzBCR.js";import{u as te,a as oe,I as C,o as se,s as I}from"./input-BU43wEkU.js";import{l as re}from"./styled-components.browser.esm-yVkTfYq2.js";import{g as ae,a as ne,u as le,c as ie,j as h,b as ce,s as x,m as pe,o as b}from"./TransitionGroupContext-B2FQ4Ct2.js";import{u as p,P as de}from"./useSlot-Cqg1LAwr.js";import{I as ue}from"./IconButton-C2pUmBf1.js";import"./emotion-unitless.esm-x5IvBceT.js";import"./ButtonBase-Lo0Yhdn4.js";function fe(e){return ae("MuiAlert",e)}const w=ne("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),ge=d(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),me=d(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),xe=d(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),ve=d(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),be=d(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),he=e=>{const{variant:s,color:r,severity:o,classes:a}=e,l={root:["root",`color${h(r||o)}`,`${s}${h(r||o)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return ce(l,fe,a)},Se=x(de,{name:"MuiAlert",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,s[r.variant],s[`${r.variant}${h(r.color||r.severity)}`]]}})(pe(({theme:e})=>{const s=e.palette.mode==="light"?e.darken:e.lighten,r=e.palette.mode==="light"?e.lighten:e.darken;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(b(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:s(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:r(e.palette[o].light,.9),[`& .${w.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(b(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:s(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${w.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(b(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)}}}))]}})),ye=x("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ae=x("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),je=x("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),z={success:t.jsx(ge,{fontSize:"inherit"}),warning:t.jsx(me,{fontSize:"inherit"}),error:t.jsx(xe,{fontSize:"inherit"}),info:t.jsx(ve,{fontSize:"inherit"})},M=P.forwardRef(function(s,r){const o=le({props:s,name:"MuiAlert"}),{action:a,children:l,className:v,closeText:u="Close",color:f,components:i={},componentsProps:k={},icon:S,iconMapping:L=z,onClose:y,role:$="alert",severity:g="success",slotProps:N={},slots:B={},variant:R="standard",...E}=o,n={...o,color:f,severity:g,variant:R,colorSeverity:f||g},m=he(n),c={slots:{closeButton:i.CloseButton,closeIcon:i.CloseIcon,...B},slotProps:{...k,...N}},[T,W]=p("root",{ref:r,shouldForwardComponentProp:!0,className:ie(m.root,v),elementType:Se,externalForwardedProps:{...c,...E},ownerState:n,additionalProps:{role:$,elevation:0}}),[F,O]=p("icon",{className:m.icon,elementType:ye,externalForwardedProps:c,ownerState:n}),[H,U]=p("message",{className:m.message,elementType:Ae,externalForwardedProps:c,ownerState:n}),[A,j]=p("action",{className:m.action,elementType:je,externalForwardedProps:c,ownerState:n}),[V,D]=p("closeButton",{elementType:ue,externalForwardedProps:c,ownerState:n}),[Z,q]=p("closeIcon",{elementType:be,externalForwardedProps:c,ownerState:n});return t.jsxs(T,{...W,children:[S!==!1?t.jsx(F,{...O,children:S||L[g]||z[g]}):null,t.jsx(H,{...U,children:l}),a!=null?t.jsx(A,{...j,children:a}):null,a==null&&y?t.jsx(A,{...j,children:t.jsx(V,{size:"small","aria-label":u,title:u,color:"inherit",onClick:y,...D,children:t.jsx(Z,{fontSize:"small",...q})})}):null]})}),Ce=d(t.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),Ie=se({email:I().email().min(1,{message:"Email is required"}),password:I().min(8,{message:"Password must be at least 8 characters"}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"})}),Ee=()=>{const e=Y(),{error:s,accesstoken:r}=G(i=>i.AuthSlice),o=J(),[a]=K(),{register:l,handleSubmit:v,formState:{errors:u}}=te({resolver:oe(Ie),mode:"onBlur"}),f=i=>{e(ee(i)).unwrap().then(()=>o("/"))};return P.useEffect(()=>()=>{e(Q())},[e]),r?t.jsx(X,{to:"/"}):t.jsxs(we,{children:[a.get("success")==="true"&&t.jsx(M,{icon:t.jsx(Ce,{fontSize:"inherit"}),severity:"success",children:"You have logged in successfully"}),a.get("success")==="false"&&t.jsx(M,{severity:"error",children:"Login failed, please try again"}),t.jsxs("form",{className:"form",onSubmit:v(f),children:[t.jsx("p",{className:"title",children:"Login "}),t.jsx("p",{className:"message",children:"Sign in to your account. "}),t.jsx(C,{name:"email",label:"email",register:l,errors:u.email?.message}),t.jsx(C,{type:"password",name:"password",label:"password",register:l,errors:u.password?.message}),s&&t.jsx("p",{style:{color:"red"},children:s}),t.jsx("button",{className:"submit",children:"Submit"}),t.jsxs("p",{className:"signin",children:["Don't have an account? ",t.jsx(_,{to:"/register",children:"Register"})]})]})]})},we=re.div`
  .form {
    margin: auto auto;
    display: flex;
    flex-direction: column;
    gap: 34px;
    max-width: 450px;
    padding: 15px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 25px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
    margin-bottom: 10px;
        margin-top: 15px;

  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }


  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;export{Ee as default};
