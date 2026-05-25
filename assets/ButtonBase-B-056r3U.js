import{r as l,R as W,j}from"./index-DEofe_bQ.js";import{_ as Ve,F as Ie,G as Be,H as ie,c as x,a as le,u as ue,s as J,E as Q,g as Se,e as oe,f as G,b as we}from"./TransitionGroupContext-Dl6YQswE.js";function re(e){try{return e.matches(":focus-visible")}catch{}return!1}const ae={};function ce(e,t){const n=l.useRef(ae);return n.current===ae&&(n.current=e(t)),n}class _{static create(){return new _}static use(){const t=ce(_.create).current,[n,a]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=a,l.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Le(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function De(){return _.use()}function Le(){let e,t;const n=new Promise((a,s)=>{e=a,t=s});return n.resolve=e,n.reject=t,n}function Ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){var n=function(i){return t&&l.isValidElement(i)?t(i):i},a=Object.create(null);return e&&l.Children.map(e,function(s){return s}).forEach(function(s){a[s.key]=n(s)}),a}function je(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var a=Object.create(null),s=[];for(var i in e)i in t?s.length&&(a[i]=s,s=[]):s.push(i);var o,c={};for(var u in t){if(a[u])for(o=0;o<a[u].length;o++){var p=a[u][o];c[a[u][o]]=n(p)}c[u]=n(u)}for(o=0;o<s.length;o++)c[s[o]]=n(s[o]);return c}function N(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ke(e,t){return ee(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:N(n,"appear",e),enter:N(n,"enter",e),exit:N(n,"exit",e)})})}function Fe(e,t,n){var a=ee(e.children),s=je(t,a);return Object.keys(s).forEach(function(i){var o=s[i];if(l.isValidElement(o)){var c=i in t,u=i in a,p=t[i],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?s[i]=l.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:N(o,"exit",e),enter:N(o,"enter",e)}):!u&&c&&!d?s[i]=l.cloneElement(o,{in:!1}):u&&c&&l.isValidElement(p)&&(s[i]=l.cloneElement(o,{onExited:n.bind(null,o),in:p.props.in,exit:N(o,"exit",e),enter:N(o,"enter",e)}))}}),s}var $e=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ue={component:"div",childFactory:function(t){return t}},te=(function(e){Ve(t,e);function t(a,s){var i;i=e.call(this,a,s)||this;var o=i.handleExited.bind(Ne(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,i){var o=i.children,c=i.handleExited,u=i.firstRender;return{children:u?ke(s,c):Fe(s,o,c),firstRender:!1}},n.handleExited=function(s,i){var o=ee(this.props.children);s.key in o||(s.props.onExited&&s.props.onExited(i),this.mounted&&this.setState(function(c){var u=Ie({},c.children);return delete u[s.key],{children:u}}))},n.render=function(){var s=this.props,i=s.component,o=s.childFactory,c=Be(s,["component","childFactory"]),u=this.state.contextValue,p=$e(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?W.createElement(ie.Provider,{value:u},p):W.createElement(ie.Provider,{value:u},W.createElement(i,c,p))},t})(W.Component);te.propTypes={};te.defaultProps=Ue;const ze=[];function Ae(e){l.useEffect(e,ze)}class ne{static create(){return new ne}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Oe(){const e=ce(ne.create).current;return Ae(e.disposeEffect),e}function Ye(e){const{className:t,classes:n,pulsate:a=!1,rippleX:s,rippleY:i,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,h]=l.useState(!1),M=x(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),P={width:o,height:o,top:-(o/2)+i,left:-(o/2)+s},b=x(n.child,d&&n.childLeaving,a&&n.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const S=setTimeout(u,p);return()=>{clearTimeout(S)}}},[u,c,p]),j.jsx("span",{className:M,style:P,children:j.jsx("span",{className:b})})}const g=le("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Z=550,Xe=80,He=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ke=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,We=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ge=J("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_e=J(Ye,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${He};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ke};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${We};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,qe=l.forwardRef(function(t,n){const a=ue({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:i={},className:o,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=Oe(),b=l.useRef(null),S=l.useRef(null),T=l.useCallback(f=>{const{pulsate:E,rippleX:R,rippleY:$,rippleSize:w,cb:z}=f;p(y=>[...y,j.jsx(_e,{classes:{ripple:x(i.ripple,g.ripple),rippleVisible:x(i.rippleVisible,g.rippleVisible),ripplePulsate:x(i.ripplePulsate,g.ripplePulsate),child:x(i.child,g.child),childLeaving:x(i.childLeaving,g.childLeaving),childPulsate:x(i.childPulsate,g.childPulsate)},timeout:Z,pulsate:E,rippleX:R,rippleY:$,rippleSize:w},d.current)]),d.current+=1,h.current=z},[i]),k=l.useCallback((f={},E={},R=()=>{})=>{const{pulsate:$=!1,center:w=s||E.pulsate,fakeElement:z=!1}=E;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const y=z?null:S.current,V=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,C,B;if(w||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),C=Math.round(V.height/2);else{const{clientX:A,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(A-V.left),C=Math.round(D-V.top)}if(w)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const A=Math.max(Math.abs((y?y.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;B=Math.sqrt(A**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{T({pulsate:$,rippleX:I,rippleY:C,rippleSize:B,cb:R})},P.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:$,rippleX:I,rippleY:C,rippleSize:B,cb:R})},[s,T,P]),X=l.useCallback(()=>{k({},{pulsate:!0})},[k]),F=l.useCallback((f,E)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{F(f,E)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(n,()=>({pulsate:X,start:k,stop:F}),[X,k,F]),j.jsx(Ge,{className:x(g.root,i.root,o),ref:S,...c,children:j.jsx(te,{component:null,exit:!0,children:u})})});function Ze(e){return Se("MuiButtonBase",e)}const Je=le("MuiButtonBase",["root","disabled","focusVisible"]),Qe=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:s}=e,o=we({root:["root",t&&"disabled",n&&"focusVisible"]},Ze,s);return n&&a&&(o.root+=` ${a}`),o},et=J("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=l.forwardRef(function(t,n){const a=ue({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:i=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:S,onClick:T,onContextMenu:k,onDragLeave:X,onFocus:F,onFocusVisible:f,onKeyDown:E,onKeyUp:R,onMouseDown:$,onMouseLeave:w,onMouseUp:z,onTouchEnd:y,onTouchMove:V,onTouchStart:I,tabIndex:C=0,TouchRippleProps:B,touchRippleRef:A,type:D,...U}=a,O=l.useRef(null),m=De(),pe=oe(m.ref,A),[L,H]=l.useState(!1);p&&L&&H(!1),l.useImperativeHandle(s,()=>({focusVisible:()=>{H(!0),O.current.focus()}}),[]);const fe=m.shouldMount&&!d&&!p;l.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const de=v(m,"start",$,h),he=v(m,"stop",k,h),me=v(m,"stop",X,h),be=v(m,"stop",z,h),ge=v(m,"stop",r=>{L&&r.preventDefault(),w&&w(r)},h),Me=v(m,"start",I,h),Re=v(m,"stop",y,h),Ee=v(m,"stop",V,h),ye=v(m,"stop",r=>{re(r.target)||H(!1),S&&S(r)},!1),xe=G(r=>{O.current||(O.current=r.currentTarget),re(r.target)&&(H(!0),f&&f(r)),F&&F(r)}),q=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Te=G(r=>{M&&!r.repeat&&L&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!p&&(r.preventDefault(),T&&T(r))}),Ce=G(r=>{M&&r.key===" "&&L&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),T&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&T(r)});let K=u;K==="button"&&(U.href||U.to)&&(K=b);const Y={};if(K==="button"){const r=!!U.formAction;Y.type=D===void 0&&!r?"button":D,Y.disabled=p}else!U.href&&!U.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p);const ve=oe(n,O),se={...a,centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:L},Pe=Qe(se);return j.jsxs(et,{as:K,className:x(Pe.root,c),ownerState:se,onBlur:ye,onClick:T,onContextMenu:he,onFocus:xe,onKeyDown:Te,onKeyUp:Ce,onMouseDown:de,onMouseLeave:ge,onMouseUp:be,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:Me,ref:ve,tabIndex:p?-1:C,type:D,...Y,...U,children:[o,fe?j.jsx(qe,{ref:pe,center:i,...B}):null]})});function v(e,t,n,a=!1){return G(s=>(n&&n(s),a||e[t](s),!0))}export{st as B,ne as T,re as i,Oe as u};
