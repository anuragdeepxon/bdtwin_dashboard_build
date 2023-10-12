import{s as t,j as e,r as i,u as M,a as N,b as G,c as Y,d as z,e as v,n as k,f as H,k as K,g as Z}from"./index-53a47b89.js";import{c as D,a as y,u as J,o as X}from"./object-e98b3d33.js";import{S as L}from"./Spinner-2fcfa284.js";const F=t.section`
    position: absolute;
    max-width: 515px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,T=t.div`
  background-color: rgb(24 27 32 / 70%);
  background-blend-mode: color;
  background-image: url(${({image:o})=>o});
  width: 100%;
  height: 100vh;
`,O="/assets/banner-cc043ccc.png",P=({children:o})=>e.jsx(T,{image:O,children:o}),q=D().shape({user_name:y().required("Username is a required field"),password:y().min(8).max(32).required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),_=t.div`
  color: var(--color-white);

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 24px;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
  }
`,$=t.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  padding: 32px;
  opacity: 0.9;

  button[type="submit"] {
    width: 100%;
    background: var(--gradient-blue);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    height: 51px;
  }
  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: var(--color-white);
    span {
      cursor: pointer;
      color: var(--color-blue);
      padding-left: 6px;
    }
    margin-top: 16px;
  }
`;t.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-white);
  }
`;const B=t.div`
  position: relative;
  margin-bottom: 42px;
 
`,E=t.input`
  outline: ${o=>o.error?"1px solid red":"1px solid var(--color-white)"};
  border-radius: 8px;
  background-color: transparent;
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
`,p=t.div`
  color: red;
  opacity: ${o=>o.visible?"1":"0"};
  position: absolute;
  top: 120%;
`,ee=t.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`,se=t.div`
  position: relative;
  cursor: pointer;

  button {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-white);
    margin-left: auto;
    margin-top: 4px;
  }
`,te=t.div`
  position: absolute;
  right: 10px;
  top: 10px;
`,oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEUSURBVHgB7ZThEYIwDIWLC+gGsoFuoCO4AR3BDXAD2EQ34JyAcwLYQJ0gJmcqoTQC+o8jd++gr+VLLqU1Zo7JR9S3AABifBxQG1TM9gN1RV2iKKrNL4HgPaqAJioek0rh03g7BrxCZQJ6Ii+wLkZZXkORDYW76nIHZj9FnbliK5NyEcDfrobArTdXCkARgnHSu5pEtMWHW98X3lFZm4Wq706856gtZcCnSi8BP2fWmsYL9sN9649lwAN+Po2SOfH8o+/Tu9JO5+fdtO1NThS/EO+Vt8nJ100OwFLPt5yA9uRzNqB9bnS40q6KwbFSTArNQcsHwQVgC+2rwp2BQkBd2/YaZ8xltzPN31ajbuafy26O6cQLX6MKwkfpxmAAAAAASUVORK5CYII=",re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgB7VTtVcMwDFRYgIyQETKCR2GDZoOYCegG7QYZwWyQblA2SDYwMpHpVcjBP+AX3Ht6SRTpJJ0/iP6hEGM8sA35+4F+EEw88uPI1mZfU5nY8yNZJ66V7dI0zasi92zP7Pc1pG1KYlviPk5sL/L+PbGQH4A4sD2xdaq4YztD3Jz8NeQnIO7BnwiH1GV6z7JAbMIVG9kj96rb8FWZj44/Y1MzUsAuUtIRyL0Uw4Kziu1EspkMzS1yJ/4BfKOawBVyvK46GVN5CW4VeZ7mrjjk5cVv00FbxW/tgBU7J3ufW3mPd//itjuikFjjzlpCkNWpnNGcTMayimTyAIucSaYC+ZEs6CLGgiJChIMFsWfaQ6ougQvKInJ5kdNBfB9v23afHJICdDrF7arAU92JL0AzQy35mHWUjq+xjEViindQo8nJ2IoiSUe36/qNtuv6QrWAzj39BmTx6nT8U3gHZy7R8+6E87gAAAAASUVORK5CYII=",ie=t.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  margin-top: 30px;
  opacity: 0.9;
  a {
    text-decoration: underline;
  }
  p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 5px;
  }
`,ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANYSURBVHgBrVVbSBRRGP7OzGiul202rExX2o0iK5GMiBK0tR5CHyrNfBJSSsKHUB970n3zKSWpKBOFIhAkkh7syTShjKjUNDQIV7wm1E7rrXbXOZ0zXlh3Z1wlPxiY8/9nvu/8tzMEG2DEYZMlr7kchDoIJTZKYFtxKQDtVVXSplLvC3vPkMuIg+gSn06xSWJEE3M7sAkQ0Gbfks+pJyQEG8bOpJVLYuTnzZJzUJBi/s3ombSKUPFA8oy0Kmapxv+Aojr5bb8zRICfnMVTh22AqqJy/7v+ujWB5ZzztEDG9kDxL3nTeU0kvirL3V1V2zErx/rUkJ1CXBxirxZhR/pJ7eGgcwOgE4+g/mgxEpBZ5zUhC9nEVuuwCZIwUjywgBL2BELal4j4+kYsyPvQ8GYBg5M+eBYpUhMl3MiKhtU0CX9fHvB3TFdFUr0WcuCuowJEqI31UrS8dCMwioTWdgyre1Bw3w3Pn/XRJVtENJbIOLZrCv5P5wC/J0SA1cIpUCJe4ou5SIL6E9Frzpici5jasRfXm5QQco4x9xIKHvyCh1ohJN3UjUAQ6VmBDcnxVcMrexR690Ro77GFRXjM0sKJjMDT1dA9D7IzQ9fPp58P2rrOaUpdjiLi0GGWcz/Cge8hsr4ABWwhk8wjaGeRcOw0EYSDZ1Hd0C8wGVewsTnVhJ+DH3E0UUI4HEtkKZ0bNHIrrMjEFWydjhHxdH4ApZkxMJsEQ3LeSaWZ0VAnHupvoLRXICrt0vM19z3HrH8GrWUWjSgY5igBjcUyrNGThgO3RIU2PmgyGzS33garOQHP8u5A9cWjsXsBA2zQeETaoLHo+AFGPxTilDSkK+BXBbtWRXv9+desXR0wwJWUCyg+no+j8Qe1dc9EL95P9OHr9ye4l/RF9xtC0Sw5Zko0gZXrYsuXXUfKMJIifXouhZ0+3ZQ97dIq6KrsdLFucmILyLMoRuSgKnFycv6+Vj13+0iPJVdLmQNhkBThRU3yOMyizgyw+ycye6ZmdbmuPZhIpyXH/pv9JU6zZZSRwK2EGWTGzQWbFXby24HkHLqjymtCJFJNQK5B5/QdR76tN1La6adiyWpawgoECgkiLvMbl1B2KRLINdZx5FsUFwVldSNdErx1JFtRjDj+AYeVP0ER+rmaAAAAAElFTkSuQmCC",ae="data:image/png;base64,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",Ae=()=>e.jsxs(ie,{children:[e.jsx("span",{children:"Our platform is most compatible with:"}),e.jsxs("p",{children:[e.jsx("img",{src:ne,alt:"chrome"}),e.jsx("img",{src:ae,alt:"safari"})]})]}),pe=({closeModalLogin:o,openModalForgot:I})=>{var g,x,m,h,u,w,f,S,j,b;const[n,C]=i.useState(!1),c=M(),{loading:U,userInfo:l,error:a,message:A}=N(G),r=Y(),Q=((x=(g=z().state)==null?void 0:g.from)==null?void 0:x.pathname)||"/dashboard",{register:d,handleSubmit:R,formState:{errors:s}}=J({mode:"onBlur",resolver:X(q)});i.useEffect(()=>{l&&(r(v(null)),c(Q,{replace:!0}))},[c,l]),i.useEffect(()=>{A&&k(A)},[A]),i.useEffect(()=>()=>{r(H(null)),r(v(null))},[]);const W=V=>{r(Z(V))};return e.jsxs(_,{children:[e.jsx(K,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),e.jsxs($,{children:[e.jsx("h2",{children:"Login"}),e.jsxs("form",{onSubmit:R(W),children:[a&&e.jsx(ee,{children:e.jsx(p,{visible:a,children:a})}),e.jsxs(B,{children:[((m=s==null?void 0:s.user_name)==null?void 0:m.message)&&e.jsx(p,{visible:(h=s==null?void 0:s.user_name)==null?void 0:h.message,children:(u=s==null?void 0:s.user_name)==null?void 0:u.message}),e.jsx(E,{...d("user_name"),placeholder:"Username",error:(w=s==null?void 0:s.user_name)==null?void 0:w.message})]}),e.jsxs(B,{children:[((f=s==null?void 0:s.password)==null?void 0:f.message)&&e.jsx(p,{visible:(S=s==null?void 0:s.password)==null?void 0:S.message,children:(j=s==null?void 0:s.password)==null?void 0:j.message}),e.jsxs(se,{children:[e.jsx(E,{type:n?"text":"password",...d("password"),placeholder:"Password",autoComplete:"on",error:(b=s==null?void 0:s.password)==null?void 0:b.message}),e.jsx(te,{className:"show-reset-password",onClick:()=>C(!n),children:n?e.jsx("img",{src:oe,className:"show-password-eye",alt:"show password eye"}):e.jsx("img",{src:re,className:"hide-password-eye",alt:"hide password eye"})}),e.jsx("button",{type:"button",onClick:()=>{o(),I()},children:"Forgot password"})]})]}),e.jsx("button",{type:"submit",children:U?e.jsx(L,{}):"Login"})]})]}),e.jsx(Ae,{})]})},xe=()=>e.jsx(P,{children:e.jsx(F,{children:e.jsx(pe,{})})});export{xe as default};
