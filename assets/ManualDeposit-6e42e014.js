import{s as t,j as r,r as d,h as f}from"./index-fb01a6fd.js";import{r as s,P as j}from"./index-3d9f4a65.js";import{T as v}from"./Title-e33b0000.js";import{S as w}from"./SelectCustom-30008da1.js";import{b as y}from"./date-2e6a2016.js";import"./SelectCustom.styles-f0b0b650.js";const P=t.div`
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
`;t.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  flex-wrap: wrap;
`;const T=t.div`
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
`,k=t.div`
  margin-top: 16px;
  margin-bottom: 32px;

`,D=t.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
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
`,n=t.div`
  display: flex;
  flex-direction: column;
  max-width: 376px;
  width: 100%;
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  input {
    max-width: none;
    width: 100%;
  }
  &.btnWrap {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-direction: row;
    
  }

`,H=()=>r.jsx(k,{children:r.jsxs(D,{children:[r.jsxs(n,{children:[r.jsx("label",{children:"Search"}),r.jsx("input",{type:"text",placeholder:"Username, account name, bank name, ifsc"})]}),r.jsxs(n,{children:[r.jsx("label",{children:"Date"}),r.jsx(w,{date:y,activeData:"Today"})]})]})}),z=()=>{const[i]=d.useState([]),l=d.useMemo(()=>[{Header:"Player",accessor:"player"},{Header:"TXN by",accessor:"validTurnover"},{Header:"Cash",accessor:"payin_mode"},{Header:"Amount",accessor:"amount"},{Header:"Date",accessor:"date"}],[]),{getTableProps:p,getTableBodyProps:x,headerGroups:c,prepareRow:h,page:g,pageOptions:b,gotoPage:m,state:{pageIndex:u}}=s.useTable({columns:l,data:i,initialState:{pageIndex:0}},s.usePagination);return r.jsxs(P,{children:[r.jsx(v,{title:"Manual Deposit"}),r.jsx(H,{}),r.jsxs("div",{children:[r.jsxs("table",{...p(),children:[r.jsx("thead",{children:c.map(e=>r.jsx("tr",{...e.getHeaderGroupProps(),children:e.headers.map(o=>r.jsx("th",{...o.getHeaderProps(),children:o.render("Header")}))}))}),i.length?r.jsx(r.Fragment,{children:r.jsx("tbody",{...x(),children:g.map((e,o)=>(h(e),r.jsx("tr",{...e.getRowProps(),children:e.cells.map(a=>a.column.Header==="Date"?r.jsx("td",{...a.getCellProps(),children:f(a.value)}):r.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),r.jsxs(T,{children:[r.jsx("div",{className:"total",children:"Total"}),r.jsx("div",{className:"price",children:"$2222"})]}),r.jsx(j,{currentPage:u+1,totalPages:b.length,onPageChange:m})]})]})};export{z as default};
