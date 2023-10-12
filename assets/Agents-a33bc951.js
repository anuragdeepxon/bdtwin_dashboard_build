import{s as o,u as R,c as I,a as U,b as $,r as a,j as e,L as z,W as M,E as D,l as p,V as O,m as B,o as m,f as V,C as G,h as Y}from"./index-53a47b89.js";import{T as q}from"./Title-215213c9.js";import{r as f,P as J}from"./index-43f2fb2c.js";import{b as K,e as Q,v as X}from"./edit-95643cb9.js";import{S as Z}from"./SelectCustom-f4b6b94d.js";import{S as ee}from"./Spinner-2fcfa284.js";import"./SelectCustom.styles-c1e12cf2.js";const te=o.div`
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
      color: var(--color-blue);
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
`,re=o.div`
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
`,ae=o.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  form {
    display: flex;
    align-items: center;
    gap: 40px;
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    .radio-wrap {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-top: 25px;
      & > div {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      input[type="radio"] {
        width: 18px;
        accent-color: var(--color-dark-gray);
      }
    }
  }
`,se=o.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`,ie=o.div`
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
`,ne=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,he=()=>{const u=R(),x=I(),{agents:s,loading:b,userInfo:j}=U($),[v,l]=a.useTransition(),[y,w]=a.useState(""),[g,n]=a.useState(s),[C,S]=a.useState([]),[d,h]=a.useState(!1),c=a.useCallback((t,r)=>{u(t,{state:r})},[]),P=a.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Super Agent",accessor:"parent.full_name"},{Header:"Wallets",accessor:"balance",Cell:({value:t})=>e.jsx(ie,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Balance"}),e.jsx("span",{children:t})]})})},{Header:"Players amount",accessor:"attached_users",Cell:t=>{const{value:r}=t;return e.jsx(z,{to:"",children:r==null?void 0:r.length})}},{Header:"Created",accessor:"date_time"},{Header:"Actions",accessor:"status",Cell:t=>{const{row:{original:r}}=t;return e.jsxs(ne,{children:[e.jsx("div",{onClick:()=>c(`${M}/${r.id}`,r),children:e.jsx("img",{src:K,alt:"balance"})}),e.jsx("div",{onClick:()=>c(`${D}/${r.id}`,p),children:e.jsx("img",{src:Q,alt:"edit"})}),e.jsx("div",{onClick:()=>c(`${O}/${r.id}`,p),children:e.jsx("img",{src:X,alt:"view"})})]})}}],[]),{getTableProps:k,getTableBodyProps:E,headerGroups:A,prepareRow:T,page:_,pageOptions:H,gotoPage:N,state:{pageIndex:F}}=f.useTable({columns:P,data:g,initialState:{pageIndex:0,pageSize:5}},f.usePagination);a.useEffect(()=>(x(B(m.agent)),()=>x(V(null))),[]),a.useEffect(()=>{n(s);const t=s.map(r=>{var i;return{value:(i=r==null?void 0:r.parent)==null?void 0:i.full_name,id:r==null?void 0:r.parent.id}});S([{value:"Filter by Super Agent",id:0},...t])},[s]);const W=({target:{value:t}})=>{w(t),l(()=>{n(s.filter(r=>r.full_name.toLowerCase().includes(t.toLowerCase())||r.user_name.toLowerCase().includes(t.toLowerCase())))})},L=t=>{l(t===0?()=>{n(s)}:()=>{n(s.filter(r=>r.parent.id===t))})};return a.useEffect(()=>{l(d?()=>{n(s.filter(t=>t.parent.id===j.user.id))}:()=>{n(s)})},[d]),b?e.jsx(ee,{}):e.jsxs(te,{children:[e.jsx(q,{title:"Agents"}),e.jsxs(ae,{children:[e.jsxs("form",{action:"",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{onChange:W,value:y,type:"text",placeholder:"Full Name, Username"})]}),e.jsxs("div",{className:"radio-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"all-agents",name:"All agents",checked:!d,onChange:()=>h(!1)}),e.jsx("label",{for:"all-agents",children:"All agents"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents",checked:d,onChange:()=>h(!0)}),e.jsx("label",{for:"my-agents",children:"My agents"})]})]})]}),e.jsxs(se,{children:[e.jsx("button",{onClick:()=>{var t;return c(`${G}/${(t=p())==null?void 0:t.role}`,p(m.agent))},children:"Created Agent"}),e.jsx(Z,{width:"400px",date:C,onCustom:L,activeData:"Filter by Super Agent",disabled:d})]})]}),e.jsxs("div",{children:[e.jsxs("table",{...k(),children:[e.jsx("thead",{children:A.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(r=>e.jsx("th",{...r.getHeaderProps(),children:r.render("Header")}))}))}),g.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...E(),children:_.map((t,r)=>(T(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(i=>i.column.Header==="Created"?e.jsx("td",{...i.getCellProps(),children:Y(i.value)}):e.jsx("td",{...i.getCellProps(),children:i.render("Cell")}))})))})}):v?e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"Loading..."})})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(re,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"0 Agents"})]}),e.jsx(J,{currentPage:F+1,totalPages:H.length,onPageChange:N})]})]})};export{he as default};
