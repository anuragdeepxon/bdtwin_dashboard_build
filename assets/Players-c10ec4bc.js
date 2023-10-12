import{s as d,u as D,c as O,a as z,b as B,r as s,j as e,l as h,o as u,W as M,E as V,V as w,m as G,f as Y,C as q,h as J}from"./index-fb01a6fd.js";import{T as K}from"./Title-e33b0000.js";import{r as v,P as Q}from"./index-3d9f4a65.js";import{b as X,e as Z,v as C}from"./edit-95643cb9.js";import{S as ee}from"./SelectCustom-30008da1.js";import{S as re}from"./Spinner-1c44bddd.js";import"./SelectCustom.styles-f0b0b650.js";const te=d.section`
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
`,ae=d.div`
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
`,ie=d.div`
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
`,se=d.div`
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
`,oe=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=d.div`
  background-color: ${o=>o==null?void 0:o.color};
  padding: 4px 8px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
  text-align: center;
`,le=d.div`
  display: flex;
  align-items: stretch;
  border-radius: 8px;
  background-color: var(--color-gray);
  padding: 8px 16px;
  justify-content: space-between;
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
`,de=({handleNavigation:o,WALLET_PERSON:x,item:n,balanceImg:i,EDIT_PERSON:m,roleMemo:g,editImg:l})=>e.jsxs(oe,{children:[e.jsx("div",{onClick:()=>n&&o(`${x}/${n.id}`,n),children:e.jsx("img",{src:i,alt:"balance"})}),e.jsx("div",{onClick:()=>n&&o(`${m}/${n.id}`,g),children:e.jsx("img",{src:l,alt:"edit"})}),e.jsx("div",{onClick:()=>n&&o(`${w}/${n.id}`,g),children:e.jsx("img",{src:C,alt:"view"})})]}),ue=()=>{const o=D(),x=O(),{loading:n,players:i,userInfo:m}=z(B),[g,l]=s.useTransition(),[P,S]=s.useState(""),[b,c]=s.useState(i),[k,E]=s.useState([]),[p,j]=s.useState(!1),f=s.useCallback((r,t)=>{o(r,{state:t})},[]),T=s.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Agent",accessor:"parent.full_name"},{Header:"Wallets",accessor:"balance",Cell:({value:r})=>e.jsx(le,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Balance"}),e.jsx("span",{children:r})]})})},{Header:"Status",accessor:"status",Cell:r=>{const{row:{original:t}}=r,a=N(t.status);return e.jsx(ne,{color:a,children:e.jsx("p",{children:t.status})})}},{Header:"Registered",accessor:"date_time"},{Header:"Actions",accessor:"action",Cell:r=>{var a;const{row:{original:t}}=r;return((a=h())==null?void 0:a.role)===u.admin?e.jsx(e.Fragment,{children:e.jsx(de,{handleNavigation:f,WALLET_PERSON:M,item:t,balanceImg:X,EDIT_PERSON:V,roleMemo:h,editImg:Z})}):e.jsx(e.Fragment,{children:e.jsx("div",{onClick:()=>f(`${w}/${t.id}`,t),children:e.jsx("img",{src:C,alt:"view"})})})}}],[]),{getTableProps:A,getTableBodyProps:R,headerGroups:_,prepareRow:F,page:W,pageOptions:H,gotoPage:I,state:{pageIndex:L}}=v.useTable({columns:T,data:b,initialState:{pageIndex:0}},v.usePagination),N=s.useCallback(r=>{if((r==null?void 0:r.toLowerCase())==="active")return"#009B22";if((r==null?void 0:r.toLowerCase())==="pending")return"#BDAA00"},[]);s.useEffect(()=>(x(G(u.player)),()=>x(Y(null))),[]),s.useEffect(()=>{c(i);const r=i.map(t=>{var a,y;return{value:(a=t==null?void 0:t.parent)==null?void 0:a.full_name,id:(y=t==null?void 0:t.parent)==null?void 0:y.id}});E([{value:"Filter by Agent",id:0},...r])},[i]);const $=({target:{value:r}})=>{S(r),l(()=>{c(i.filter(t=>t.full_name.toLowerCase().includes(r.toLowerCase())||t.user_name.toLowerCase().includes(r.toLowerCase())))})},U=r=>{l(r===0?()=>{c(i)}:()=>{c(i.filter(t=>{var a;return((a=t.parent)==null?void 0:a.id)===r}))})};return s.useEffect(()=>{l(p?()=>{c(i.filter(r=>{var t,a;return((t=r.parent)==null?void 0:t.id)===((a=m.user)==null?void 0:a.id)}))}:()=>{c(i)})},[p]),n?e.jsx(re,{}):e.jsxs(te,{children:[e.jsx(K,{title:"Players"}),e.jsxs(ie,{children:[e.jsxs("form",{action:"",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{onChange:$,value:P,type:"text",placeholder:"Full Name, Username"})]}),e.jsxs("div",{className:"radio-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"all-agents",name:"All agents",checked:!p,onChange:()=>j(!1)}),e.jsx("label",{for:"all-agents",children:"All players"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents",checked:p,onChange:()=>j(!0)}),e.jsx("label",{for:"my-agents",children:"My players"})]})]})]}),e.jsxs(se,{children:[e.jsx("button",{onClick:()=>{var r;return f(`${q}/${(r=h())==null?void 0:r.role}`,h(u.player))},children:"Created Player"}),e.jsx(ee,{width:"400px",date:k,onCustom:U,activeData:"Filter by Agent",disabled:p})]})]}),e.jsxs("div",{children:[e.jsxs("table",{...A(),children:[e.jsx("thead",{children:_.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e.jsx("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),b.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...R(),children:W.map((r,t)=>(F(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(a=>a.column.Header==="Registered"?e.jsx("td",{...a.getCellProps(),children:J(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):g?e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"Loading..."})})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(ae,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"0 Players"})]}),e.jsx(Q,{currentPage:L+1,totalPages:H.length,onPageChange:I})]})]})};export{ue as default};
