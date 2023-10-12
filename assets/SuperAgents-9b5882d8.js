import{s as i,u as H,a as N,b as W,r as o,c as L,j as e,L as R,W as $,E as F,l,V as I,m as z,o as x,f as U,C as O,h as B}from"./index-53a47b89.js";import{T as D}from"./Title-215213c9.js";import{r as h,P as M}from"./index-43f2fb2c.js";import{b as V,e as G,v as Y}from"./edit-95643cb9.js";import{S as q}from"./Spinner-2fcfa284.js";const J=i.div`
margin-bottom: 25px;
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid var(--color-white);
        background-color: var(--color-dark-gray);
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 15px 45px 16px 24px;

      border-right: 1px solid #fff;

      :last-child {
        border-right: 0;
      }
    }
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color:var(--color-blue);
    }
  }

  input {
    width: 100%;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    padding: 8px 9px 8px 16px;
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`,K=i.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  /* justify-content: flex-end; */
  border: 1px solid #ffffff;
  border-top: none;
  border-radius: 0px 0px 8px 8px;
  max-width: 378px;
  width: 100%;
  div {
    margin: 0px;
    padding: 16px 64px 16px 24px;
  }
`,Q=i.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  form {
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`,X=i.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
  }
`,Z=i.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-gray);
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
`,ee=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=()=>{const g=H(),{superAgents:s,loading:m}=N(W),[u,b]=o.useTransition(),[f,j]=o.useState(""),[d,c]=o.useState(s),[re,v]=o.useState([]),p=L(),w=o.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Wallets",accessor:"balance",Cell:({value:t})=>e.jsx(Z,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Balance"}),e.jsx("span",{children:t})]})})},{Header:"Agent amount",accessor:"attached_users",Cell:t=>{const{value:r}=t;return e.jsx(R,{to:"",children:r==null?void 0:r.length})}},{Header:"Created",accessor:"date_time"},{Header:"Actions",accessor:"id",Cell:t=>{const{row:{original:r}}=t;return e.jsxs(ee,{children:[e.jsx("div",{onClick:()=>n(`${$}/${r.id}`,r),children:e.jsx("img",{src:V,alt:"balance"})}),e.jsx("div",{onClick:()=>n(`${F}/${r.id}`,l),children:e.jsx("img",{src:G,alt:"edit"})}),e.jsx("div",{onClick:()=>n(`${I}/${r.id}`,l),children:e.jsx("img",{src:Y,alt:"view"})})]})}}],[d]),{getTableProps:y,getTableBodyProps:C,headerGroups:S,prepareRow:P,page:k,pageOptions:E,gotoPage:T,state:{pageIndex:_}}=h.useTable({columns:w,data:d,initialState:{pageIndex:0,pageSize:5}},h.usePagination),n=o.useCallback((t,r)=>{g(t,{state:r})},[]);o.useEffect(()=>(p(z(x.super_agent)),()=>p(U(null))),[]),o.useEffect(()=>{c(s);const t=s.map(r=>{var a;return{value:(a=r==null?void 0:r.parent)==null?void 0:a.full_name,id:r==null?void 0:r.parent.id}});v(t)},[s]);const A=({target:{value:t}})=>{j(t),b(()=>{c(s.filter(r=>r.full_name.toLowerCase().includes(t.toLowerCase())||r.user_name.toLowerCase().includes(t.toLowerCase())))})};return m?e.jsx(q,{}):e.jsxs(J,{children:[e.jsx(D,{title:"Super agents"}),e.jsxs(Q,{children:[e.jsx("form",{action:"",children:e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{onChange:A,value:f,type:"text",placeholder:"Full Name, Username"})]})}),e.jsx(X,{children:e.jsx("button",{onClick:()=>{var t;return n(`${O}/${(t=l())==null?void 0:t.role}`,l(x.super_agent))},children:"Create Super Agent"})})]}),e.jsxs("div",{children:[e.jsxs("table",{...y(),children:[e.jsx("thead",{children:S.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(r=>e.jsx("th",{...r.getHeaderProps(),children:r.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...C(),children:k.map((t,r)=>(P(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(a=>a.column.Header==="Created"?e.jsx("td",{...a.getCellProps(),children:B(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):u?e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"Loading..."})})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(K,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsxs("div",{className:"price",children:[s.length," Super Agents"]})]}),e.jsx(M,{currentPage:_+1,totalPages:E.length,onPageChange:T})]})]})};export{ne as default};
