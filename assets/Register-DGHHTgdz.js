import{r as g,t as S,v as P,a as N,u as z,w as F,j as e,N as L,L as E,x as A}from"./index-DEofe_bQ.js";import{l as q}from"./styled-components.browser.esm-RSKaG32_.js";import{u as C,a as R,I as n,o as $,s as l}from"./input-CvE5hF8y.js";import"./emotion-unitless.esm-x5IvBceT.js";const B=()=>{const[t,a]=g.useState("idle"),[m,c]=g.useState("");return{emailavailable:t,enteremail:m,chekemails:async s=>{c(s),a("checking");try{(await S.get(`http://localhost:4000/users?email=${s}`)).data.length>0?a("notavailable"):a("available")}catch(p){console.log(p),a("failed")}},resetemail:()=>{a("idle"),c(null)}}},D=$({Firstname:l().min(1,{message:"First name is required"}),Lastname:l().min(1,{message:"last name is required"}),email:l().email().min(1,{message:"Email is required"}),password:l().min(8,{message:"Password must be at least 8 characters"}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}),confirmPassword:l().min(1,{message:"Confirm Password is required"})}).refine(t=>t.password===t.confirmPassword,{message:"Passwords do not match",path:["confirmPassword"]}),Z=()=>{const t=P(),a=N(),{error:m,accesstoken:c}=z(o=>o.AuthSlice),{register:r,handleSubmit:x,formState:{errors:s},getFieldState:p,trigger:h}=C({resolver:R(D),mode:"onBlur"}),w=async o=>{const{Firstname:f,Lastname:u,email:i,password:k}=o;a(A({Firstname:f,Lastname:u,email:i,password:k})).unwrap().then(()=>t("/login?success=true"))},{emailavailable:d,resetemail:v,enteremail:b,chekemails:j}=B(),y=async o=>{const f=await h("email"),{isDirty:u}=p("email"),i=o.target.value;f&&u&&b!==i&&j(i),b&&i.length===0&&v()};return g.useEffect(()=>()=>{a(F())},[a]),c?e.jsx(L,{to:"/"}):e.jsx(I,{children:e.jsxs("form",{className:"form",onSubmit:x(w),children:[e.jsx("p",{className:"title",children:"Register "}),e.jsx("p",{className:"message",children:"Signup now and get full access to our app. "}),e.jsxs("div",{className:"flex",children:[e.jsx(n,{name:"Firstname",label:"Firstname",register:r,errors:s.Firstname?.message}),e.jsx(n,{name:"Lastname",label:"Lastname",register:r,errors:s.Lastname?.message})]}),e.jsx(n,{onBlur:y,used:d==="notavailable"?"email not available":"",formText:d==="checking"?" Checking...":"",sucess:d==="available"?" available":"",name:"email",label:"email",register:r,errors:s.email?.message}),e.jsx(n,{type:"password",name:"password",label:"password",register:r,errors:s.password?.message}),e.jsx(n,{type:"password",name:"confirmPassword",label:"confirmPassword",register:r,errors:s.confirmPassword?.message}),m&&e.jsx("p",{style:{color:"red"},children:m}),e.jsx("button",{className:"submit",disabled:d==="notavailable",children:"Submit"}),e.jsxs("p",{className:"signin",children:["Already have an account? ",e.jsx(E,{to:"/login",children:"Log in"})]})]})})},I=q.div`
  .form {
    margin: auto auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
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

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
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
  }`;export{Z as default};
