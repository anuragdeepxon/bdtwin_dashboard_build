import{s as r,v as E,r as p,a as z,b as D,d as B,c as F,u as P,n as $,w as N,e as f,f as O,x as U,j as e,k as H,z as I,A as L,B as M}from"./index-023817fd.js";import{a as R}from"./arrowBack-55402868.js";import{c as T,d as _,u as A,o as X}from"./object-98589e0b.js";import{S as q}from"./Spinner-95e31dd6.js";const G=r.section``,J=r.div`
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
`,K=r.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,Q=r.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
 
`,V=r.div`
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
`,Y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 16px;
  .switchWrap {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 29px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: all 0.4s ease 0s;
  }

  input + .slider {
    background: #4caf50;
  }


  input:checked + .slider:before {
    transform: translateX(8px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`,Z=r.div`
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
    outline: ${o=>o.error?"1px solid red":"1px solid var(--color-white)"};
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
    outline: ${o=>o.error?"1px solid red":"1px solid var(--color-white)"};
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
`,ee=r.input`
  outline: ${o=>o.error?"1px solid red":"1px solid var(--color-white)"};
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
`,te=r.div`
  color: red;
  opacity: ${o=>o.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,oe=T().shape({amount:_().typeError("Please set cash").min(0)}),ne=()=>{var x,u,g,m;const{id:o}=E(),[s,v]=p.useState(!0),{userInfo:n,message:d,loading:j,userDetails:l}=z(D),{state:y}=B(),[i]=p.useState(y),a=F(),h=P();o||h(-1);const{register:k,handleSubmit:W,formState:{errors:t},reset:C}=A({mode:"onBlur",resolver:X(oe,{stripUnknown:!0,abortEarly:!1})}),S=async c=>{let b=s?{...c,sender:n==null?void 0:n.user.id,recipient:o}:{...c,recipient:n==null?void 0:n.user.id,sender:o},w=s?{message:"Deposit Done"}:{message:"WithDraw Done"};a(s?L({balance:b,message:w,switchFlag:s}):M({balance:b,message:w,switchFlag:s})),C()};return p.useEffect(()=>{d&&($(d),a(N(i.id)),a(f(null)))},[d]),p.useEffect(()=>()=>{a(O(null)),a(f(null)),a(U(null))},[]),e.jsxs(G,{children:[e.jsx(H,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),e.jsxs(J,{children:[e.jsx("img",{src:R,alt:"arrow",onClick:()=>h(-1)}),e.jsx("h2",{children:i==null?void 0:i.user_name})]}),e.jsxs(Y,{children:[e.jsx(I,{disableCase:!0,cash:l!=null&&l.balance?l==null?void 0:l.balance:i==null?void 0:i.balance}),e.jsxs("div",{className:"switchWrap",children:[e.jsx("p",{children:"WithDraw"}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>v(c=>!c)}),e.jsx("span",{className:"slider round"})]}),e.jsx("p",{children:"Deposit"})]})]}),e.jsxs(K,{onSubmit:W(S),children:[e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx("label",{children:"Cashable"}),((x=t==null?void 0:t.amount)==null?void 0:x.message)&&e.jsx(te,{visible:(u=t==null?void 0:t.amount)==null?void 0:u.message,children:(g=t==null?void 0:t.amount)==null?void 0:g.message}),e.jsx(ee,{error:(m=t==null?void 0:t.amount)==null?void 0:m.message,placeholder:"0",...k("amount")})]})}),e.jsx(V,{children:e.jsx("button",{type:"submit",children:j?e.jsx(q,{}):s?"Deposit":"Withdraw"})})]})]})};export{ne as default};
