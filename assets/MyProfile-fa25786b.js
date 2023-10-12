import{s as o,a as L,b as R,r as u,c as Z,n as G,e as J,j as i,k as K,F as Q}from"./index-53a47b89.js";import{P as X}from"./index-72fcfb50.js";import{T as Y}from"./Title-215213c9.js";import{c as V,a as l,b as I,u as ee,o as ae}from"./object-e98b3d33.js";const ie=o.section``,se=o.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,le=o.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,oe=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
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
`,r=o.div`
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
    outline: ${a=>a.error?"1px solid red":"1px solid var(--color-white)"};
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
    outline: ${a=>a.error?"1px solid red":"1px solid var(--color-white)"};
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
`,p=o.input`
  outline: ${a=>a.error?"1px solid red":"1px solid var(--color-white)"};
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
`,t=o.div`
  color: red;
  opacity: ${a=>a.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,te=o.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`,ne=V().shape({full_name:l().required("Full name is a required field"),email:l().email("Email should have correct format"),phone_number:l().required("Phone number is required"),user_name:l().required("User name is a required field"),password:l().default("")});V().shape({old_password:l().required("Email is a required field"),password:l().min(8).max(32).required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,"Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"),password_confirmation:l().required("No password provided.").oneOf([I("password")],"Passwords does not match")});const ce=()=>{var b,w,f,v,j,_,y,k,P,E,q,F,C,$,z,M,N,S,O,U;const{userInfo:a,error:m,message:c}=L(R),[x,W]=u.useState(a==null?void 0:a.user.phone_number),g=Z(),{register:n,handleSubmit:B,clearErrors:D,formState:{errors:e},setValue:T}=ee({mode:"onBlur",resolver:ae(ne,{stripUnknown:!0,abortEarly:!1}),defaultValues:{full_name:(a==null?void 0:a.user.full_name)||"",phone_number:(a==null?void 0:a.user.phone_number)||"",user_name:(a==null?void 0:a.user.user_name)||"",email:(a==null?void 0:a.user.email)||""}}),A=async s=>{let d={user_id:a==null?void 0:a.user.id};for(let h in s)s[h]&&(d[h]=s[h]);g(Q(d))},H=u.useCallback((s,d)=>{T(s,d,{shouldDirty:!0}),D(s)},[x]);return u.useEffect(()=>{c&&(G(c),g(J(null)))},[c]),i.jsxs(ie,{children:[i.jsx(Y,{title:"My profile"}),i.jsx(K,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),i.jsxs(se,{onSubmit:B(A),children:[m&&i.jsx(te,{children:i.jsx(t,{visible:m,children:m})}),i.jsxs(le,{children:[i.jsxs(r,{children:[i.jsx("label",{children:"Full Name"}),((b=e==null?void 0:e.full_name)==null?void 0:b.message)&&i.jsx(t,{visible:(w=e==null?void 0:e.full_name)==null?void 0:w.message,children:(f=e==null?void 0:e.full_name)==null?void 0:f.message}),i.jsx(p,{error:(v=e==null?void 0:e.full_name)==null?void 0:v.message,placeholder:"Full name",...n("full_name"),defaultValue:a==null?void 0:a.user.full_name})]}),i.jsxs(r,{children:[i.jsx("label",{children:"User Name"}),((j=e==null?void 0:e.user_name)==null?void 0:j.message)&&i.jsx(t,{visible:(_=e==null?void 0:e.user_name)==null?void 0:_.message,children:(y=e==null?void 0:e.user_name)==null?void 0:y.message}),i.jsx(p,{error:(k=e==null?void 0:e.user_name)==null?void 0:k.message,placeholder:"User name",...n("user_name"),defaultValue:a==null?void 0:a.user.user_name})]}),i.jsxs(r,{children:[i.jsx("label",{children:"Email"}),((P=e==null?void 0:e.email)==null?void 0:P.message)&&i.jsx(t,{visible:(E=e==null?void 0:e.email)==null?void 0:E.message,children:(q=e==null?void 0:e.email)==null?void 0:q.message}),i.jsx(p,{error:(F=e==null?void 0:e.email)==null?void 0:F.message,placeholder:"Email",...n("email"),disabled:!0,defaultValue:a==null?void 0:a.user.email})]}),i.jsxs(r,{error:(C=e==null?void 0:e.phone_number)==null?void 0:C.message,children:[i.jsx("label",{children:"Phone"}),(($=e==null?void 0:e.phone_number)==null?void 0:$.message)&&i.jsx(t,{visible:(z=e==null?void 0:e.phone_number)==null?void 0:z.message,children:(M=e==null?void 0:e.phone_number)==null?void 0:M.message}),i.jsx(X,{value:x,onChange:s=>{H("phone_number",s),W(s)},placeholder:"Phone Number"}),i.jsx("input",{type:"tel",...n("phone_number"),style:{display:"none"}})]}),i.jsxs(r,{children:[i.jsx("label",{children:"New password"}),((N=e==null?void 0:e.password)==null?void 0:N.message)&&i.jsx(t,{visible:(S=e==null?void 0:e.password)==null?void 0:S.message,children:(O=e==null?void 0:e.password)==null?void 0:O.message}),i.jsx(p,{type:"password",error:(U=e==null?void 0:e.password)==null?void 0:U.message,...n("password")})]})]}),i.jsx(oe,{children:i.jsx("button",{type:"submit",children:" Save"})})]})]})};export{ce as default};
