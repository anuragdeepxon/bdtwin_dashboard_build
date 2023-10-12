import{s as i,v as A,r as t,a as G,b as J,c as K,u as Q,w as X,f as Z,x as D,n as ee,e as ae,j as o,k as oe,h as ne,y as le}from"./index-023817fd.js";import{P as ie}from"./index-cef5e647.js";import{a as te}from"./arrowBack-55402868.js";import{c as se,a as s,b as re,u as de,o as pe}from"./object-98589e0b.js";import{S as ce}from"./Spinner-95e31dd6.js";const me=i.section``,he=i.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    cursor: pointer;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,ue=i.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,xe=i.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  
  
`,ge=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
  button[type="submit"] {
    background: var(--gradient-blue);
    border: none;
  }
  button {
    border: 1px solid var(--color-blue);
    padding: 10px 50px;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transform: var(--transition);
    margin-top: 20px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`,r=i.div`
  max-width: 376px;
  width: 100%;
  position: relative;

  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
  }
  .PhoneInput {
    outline: ${n=>n.error?"1px solid red":"1px solid var(--color-white)"};
    display: flex;
    align-items: center;
    outline: 1px solid var(--color-white);
    border-radius: 8px;
    background-color: var(--color-dark-gray);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
  }
  input[type="tel"] {
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
  }
  select {
    outline: ${n=>n.error?"1px solid red":"1px solid var(--color-white)"};
    border-radius: 8px;
    background-color: var(--color-dark-gray);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
    option {
      color: var(--color-dark-gray);
    }
  }
  input:disabled {
    background: #42464c;
    color: var(--color-white);
    opacity: 1;
    ::placeholder {
      color: var(--color-white);
    }
  }
`,m=i.input`
  outline: ${n=>n.error?"1px solid red":"1px solid var(--color-white)"};
  width: 100%;
  height: 40px;
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  border-radius: 8px;
  padding: 8px 9px 8px 16px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`,h=i.div`
  color: red;
  opacity: ${n=>n.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,fe=se().shape({full_name:s().required("Full name is a required field"),user_name:s().required("User name is a required field"),email:s().email("Email should have correct format").required("Email is a required field"),password:s().default(""),phone_number:s().required("Phone number is required"),confirmPwd:s().oneOf([re("password")],"Passwords does not match")}),ye=()=>{var j,_,y,k,E,C,P,q,S,U,F,$,z,I,N,O,W,B,M,H;const{id:n}=A(),[f,b]=t.useState(),w=t.useRef("US"),{userDetails:a,loading:R,message:x}=G(J),d=K(),v=Q();n||v(-1);const{register:p,handleSubmit:V,clearErrors:L,formState:{errors:e},setValue:c}=de({mode:"onBlur",resolver:pe(fe,{stripUnknown:!0,abortEarly:!1}),defaultValues:{full_name:(a==null?void 0:a.full_name)||"",user_name:(a==null?void 0:a.user_name)||"",email:(a==null?void 0:a.email)||null}}),T=t.useCallback((l,u)=>{c(l,u,{shouldDirty:!0}),L(l)},[f]);t.useEffect(()=>(d(X(n)),()=>{d(Z(null)),d(D(null))}),[]),t.useEffect(()=>{if(x){debugger;ee(x),d(ae(null))}},[x]),t.useEffect(()=>{a&&(c("full_name",a==null?void 0:a.full_name),c("user_name",a==null?void 0:a.user_name),c("email",a==null?void 0:a.email),c("phone_number",a==null?void 0:a.phone_number),b(a==null?void 0:a.phone_number))},[a]);const Y=l=>{let u={user_id:n};for(let g in l)l[g]&&(u[g]=l[g]);d(le(u))};return R?o.jsx(ce,{}):o.jsxs(me,{children:[o.jsx(oe,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),o.jsxs(he,{children:[o.jsx("img",{src:te,alt:"arrow",onClick:()=>v(-1)}),o.jsx("h2",{children:a==null?void 0:a.full_name})]}),o.jsxs(ue,{onSubmit:V(Y),children:[o.jsxs(xe,{children:[o.jsxs(r,{children:[o.jsx("label",{children:"Full Name"}),((j=e==null?void 0:e.full_name)==null?void 0:j.message)&&o.jsx(h,{visible:(_=e==null?void 0:e.full_name)==null?void 0:_.message,children:(y=e==null?void 0:e.full_name)==null?void 0:y.message}),o.jsx(m,{error:(k=e==null?void 0:e.full_name)==null?void 0:k.message,placeholder:a!=null&&a.full_name?a==null?void 0:a.full_name:"Full Name",...p("full_name")})]}),o.jsxs(r,{children:[o.jsx("label",{children:"Email"}),((E=e==null?void 0:e.email)==null?void 0:E.message)&&o.jsx(h,{visible:(C=e==null?void 0:e.email)==null?void 0:C.message,children:(P=e==null?void 0:e.email)==null?void 0:P.message}),o.jsx(m,{error:(q=e==null?void 0:e.email)==null?void 0:q.message,placeholder:a!=null&&a.email?a==null?void 0:a.email:"Email",...p("email")})]}),o.jsxs(r,{error:(S=e==null?void 0:e.phoneNumber)==null?void 0:S.message,children:[o.jsx("label",{children:"Phone"}),((U=e==null?void 0:e.phone_number)==null?void 0:U.message)&&o.jsx(h,{visible:(F=e==null?void 0:e.phone_number)==null?void 0:F.message,children:($=e==null?void 0:e.phone_number)==null?void 0:$.message}),o.jsx(ie,{value:f,defaultCountry:w.current,onChange:l=>{T("phone_number",l),b(l),w.current=""},placeholder:"Phone Number"}),o.jsx("input",{type:"tel",...p("phone_number"),style:{display:"none"}})]}),o.jsxs(r,{children:[o.jsx("label",{children:"User name"}),((z=e==null?void 0:e.user_name)==null?void 0:z.message)&&o.jsx(h,{visible:(I=e==null?void 0:e.user_name)==null?void 0:I.message,children:(N=e==null?void 0:e.user_name)==null?void 0:N.message}),o.jsx(m,{error:(O=e==null?void 0:e.user_name)==null?void 0:O.message,placeholder:"Create username",...p("user_name")})]}),o.jsxs(r,{children:[o.jsx("label",{children:"New Password"}),((W=e==null?void 0:e.password)==null?void 0:W.message)&&o.jsx(h,{visible:(B=e==null?void 0:e.password)==null?void 0:B.message,children:(M=e==null?void 0:e.password)==null?void 0:M.message}),o.jsx(m,{type:"password",error:(H=e==null?void 0:e.password)==null?void 0:H.message,placeholder:"Create password",...p("password"),autoComplete:"false"})]}),o.jsxs(r,{children:[o.jsx("label",{children:"Created"}),o.jsx(m,{disabled:!0,placeholder:`${ne(a==null?void 0:a.date_time)}`,type:"text"})]})]}),o.jsx(ge,{children:o.jsx("button",{type:"submit",children:"Edit"})})]})]})};export{ye as default};
