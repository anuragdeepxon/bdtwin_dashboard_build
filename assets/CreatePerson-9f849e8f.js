import{s as o,d as G,a as J,b as K,r as c,u as Q,c as X,n as Y,f as ee,e as ae,j as a,k as ie,o as n,p as se,q as O,t as x}from"./index-53a47b89.js";import{P as oe}from"./index-72fcfb50.js";import{c as te,a as p,u as ne,o as re}from"./object-e98b3d33.js";import{a as le}from"./arrowBack-55402868.js";import{S as pe}from"./Spinner-2fcfa284.js";const de=o.section``,ce=o.div`
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
`,he=o.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,me=o.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,ue=o.div`
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
    height: 44px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`,d=o.div`
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
    outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
    outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
`,h=o.input`
  outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
`,r=o.div`
  color: red;
  opacity: ${i=>i.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,xe=o.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`,ge=te().shape({full_name:p().required("Full name is a required field"),user_name:p().required("User name is a required field"),email:p().email("Email should have correct format").required("Email is a required field"),password:p().max(32).required("No password provided.").min(6,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,"Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number:"),phone_number:p().required("Phone number is required")}),ye=()=>{var b,f,v,w,j,y,_,k,C,E,P,q,S,z,F,I,W,$,B,N;const{state:i}=G(),{message:m,loading:U,error:u}=J(K),[g,A]=c.useState(),M=Q(),t=X(),{register:l,handleSubmit:D,clearErrors:H,formState:{errors:e},setValue:L,reset:R}=ne({mode:"onBlur",resolver:re(ge,{stripUnknown:!0,abortEarly:!1})}),T=c.useCallback((s,Z)=>{L(s,Z,{shouldDirty:!0}),H(s)},[g]),V=s=>{i.role===n.admin&&(i.position===n.super_agent&&t(se(s)),i.position===n.agent&&t(O(s)),i.position===n.player&&t(x(s))),i.role===n.super_agent&&(i.position===n.agent&&t(O(s)),i.position===n.player&&t(x(s))),i.role===n.agent&&t(x(s)),R()};return c.useEffect(()=>{m&&Y(m)},[m]),c.useEffect(()=>()=>{t(ee(null)),t(ae(null))},[]),a.jsxs(de,{children:[a.jsx(ie,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),a.jsxs(ce,{children:[a.jsx("img",{src:le,alt:"arrow",onClick:()=>M(-1)}),a.jsxs("h2",{children:["Created ",i==null?void 0:i.title]})]}),a.jsxs(he,{onSubmit:D(V),children:[u&&a.jsx(xe,{children:a.jsx(r,{visible:u,children:u})}),a.jsxs(me,{children:[a.jsxs(d,{children:[a.jsx("label",{children:"Full Name"}),((b=e==null?void 0:e.full_name)==null?void 0:b.message)&&a.jsx(r,{visible:(f=e==null?void 0:e.full_name)==null?void 0:f.message,children:(v=e==null?void 0:e.full_name)==null?void 0:v.message}),a.jsx(h,{error:(w=e==null?void 0:e.full_name)==null?void 0:w.message,placeholder:"Full name",...l("full_name")})]}),a.jsxs(d,{children:[a.jsx("label",{children:"Email"}),((j=e==null?void 0:e.email)==null?void 0:j.message)&&a.jsx(r,{visible:(y=e==null?void 0:e.email)==null?void 0:y.message,children:(_=e==null?void 0:e.email)==null?void 0:_.message}),a.jsx(h,{error:(k=e==null?void 0:e.email)==null?void 0:k.message,placeholder:"Email",...l("email")})]}),a.jsxs(d,{error:(C=e==null?void 0:e.phone_number)==null?void 0:C.message,children:[a.jsx("label",{children:"Phone"}),((E=e==null?void 0:e.phone_number)==null?void 0:E.message)&&a.jsx(r,{visible:(P=e==null?void 0:e.phone_number)==null?void 0:P.message,children:(q=e==null?void 0:e.phone_number)==null?void 0:q.message}),a.jsx(oe,{value:g,onChange:s=>{T("phone_number",s),A(s)},placeholder:"Phone Number"}),a.jsx("input",{type:"tel",...l("phone_number"),style:{display:"none"}})]}),a.jsxs(d,{children:[a.jsx("label",{children:"User name"}),((S=e==null?void 0:e.user_name)==null?void 0:S.message)&&a.jsx(r,{visible:(z=e==null?void 0:e.user_name)==null?void 0:z.message,children:(F=e==null?void 0:e.user_name)==null?void 0:F.message}),a.jsx(h,{error:(I=e==null?void 0:e.user_name)==null?void 0:I.message,placeholder:"Create username",...l("user_name")})]}),a.jsxs(d,{children:[a.jsx("label",{children:"Password"}),((W=e==null?void 0:e.password)==null?void 0:W.message)&&a.jsx(r,{visible:($=e==null?void 0:e.password)==null?void 0:$.message,children:(B=e==null?void 0:e.password)==null?void 0:B.message}),a.jsx(h,{type:"password",error:(N=e==null?void 0:e.password)==null?void 0:N.message,placeholder:"Create password",...l("password"),autoComplete:"false"})]})]}),a.jsxs(ue,{children:[a.jsx("button",{children:"Cancel"}),a.jsx("button",{type:"submit",children:U?a.jsx(pe,{}):"Save"})]})]})]})};export{ye as default};
