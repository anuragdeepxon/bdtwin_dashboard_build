import{s as t,v as w,a as b,b as v,r as p,c as y,u as _,w as z,h as V,j as e}from"./index-53a47b89.js";import{a as W}from"./arrowBack-55402868.js";import{S as k}from"./Spinner-2fcfa284.js";const E=t.section``,S=t.div`
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

    span {
      text-transform: capitalize;
    }
  }
`;t.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`;t.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;t.div`
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
`;const U=t.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-dark-gray);
  padding: 8px 16px;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  hr {
    width: 1px;
    background-color: #42464c;
  }
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`,B=t.div`
      max-width: 440px;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 32px;

`,C=t.div`
  display: flex;
  align-items: center;
  gap: 120px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`,D=t.div``,I=t.div``,A=()=>{var d;const{id:l}=w(),{userDetails:n,loading:f}=b(v),[i,c]=p.useState(null),h=y(),x=_();return l||x(-1),p.useEffect(()=>(h(z(l)),()=>c(null)),[]),p.useEffect(()=>{var r;if(n&&((r=n==null?void 0:n.user)==null?void 0:r.user_role)!=="player"){const{balance:s,email:a,full_name:g,user_name:m,attached_users:o,phone_number:u,date_time:j}=n;c({balance:s,email:a,full_name:g,user_name:m,children:o==null?void 0:o.length,phone_number:u,created:V(j)})}},[n]),f?e.jsx(k,{}):e.jsx(E,{children:i!==null?e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx("img",{src:W,alt:"arrow",onClick:()=>x(-1)}),e.jsxs("h2",{children:[e.jsxs("span",{children:[(d=n==null?void 0:n.user)==null?void 0:d.user_role.split("_").join(" ")," "]}),i==null?void 0:i.user_name]})]}),e.jsx(B,{children:Object.keys(i).map(r=>{let s=r.split("_").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ");return e.jsxs(C,{children:[e.jsx(D,{children:s}),r==="balance"?e.jsx(U,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Balance"}),e.jsx("span",{children:i[`${r}`]})]})}):e.jsx(I,{children:i[`${r}`]})]})})})]}):null})};export{A as default};
