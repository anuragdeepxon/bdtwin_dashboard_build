import{s as a,r as n,j as e,h as y}from"./index-fb01a6fd.js";import{T as f}from"./Title-e33b0000.js";import{C as j}from"./CalendarDay-709224da.js";import{C as i}from"./DayCustom.styles-db52c60e.js";import{r as d,P as v}from"./index-3d9f4a65.js";import"./SelectCustom-30008da1.js";import"./SelectCustom.styles-f0b0b650.js";import"./date-2e6a2016.js";const P=a.section``,H=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
   h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    flex: 1;
  }
`,w=a.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  &>div {
    flex: 1;
    width: none;
    max-width: none;
  }
  &.total {
    margin-top: 32px;
  }
`,C=a.div``,T=a.div`
margin-top: 62px;
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
`,S=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 25px;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    flex: 1;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`,z=a.div`
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
`,W=()=>{const[s]=n.useState([]),l=n.useMemo(()=>[{Header:"Name",accessor:"name"},{Header:"Bet count",accessor:"bet-count"},{Header:"Won count",accessor:"won-count"},{Header:"Bet amount",accessor:"bet-amount"},{Header:"Won amount",accessor:"won-amount"},{Header:"Won amount rate",accessor:"won-amount rate"}],[]),{getTableProps:p,getTableBodyProps:c,headerGroups:x,prepareRow:h,page:g,pageOptions:m,gotoPage:b,state:{pageIndex:u}}=d.useTable({columns:l,data:s,initialState:{pageIndex:0}},d.usePagination);return e.jsxs(T,{children:[e.jsxs(S,{children:[e.jsxs("div",{className:"filter",children:[e.jsx(f,{title:"Player Stats",fontSize:"24px"}),e.jsx(z,{children:e.jsx("form",{action:"",children:e.jsxs("div",{className:"radio-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"all-agents",name:"All agents"}),e.jsx("label",{for:"all-agents",children:"Top 5 players"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents"}),e.jsx("label",{for:"my-agents",children:"Top 5 winners"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents"}),e.jsx("label",{for:"my-agents",children:"Top 5 loosers"})]})]})})})]}),e.jsx(j,{})]}),e.jsx("div",{children:e.jsxs("table",{...p(),children:[e.jsx("thead",{children:x.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(o=>e.jsx("th",{...o.getHeaderProps(),children:o.render("Header")}))}))}),s.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:g.map((t,o)=>(h(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:y(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(v,{currentPage:u+1,totalPages:m.length,onPageChange:b})]})},k=a.div`
  margin-top: 62px;
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
`,I=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 25px;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    flex: 1;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`,G=a.div`
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
`,N=()=>{const[s]=n.useState([]),l=n.useMemo(()=>[{Header:"Game name",accessor:"game-name"},{Header:"Game type",accessor:"game-type"},{Header:"Casino",accessor:"casino"},{Header:"Bet count",accessor:"bet-count"},{Header:"Won count",accessor:"won-count"},{Header:"Bet amount",accessor:"bet-amount"},{Header:"Won amount",accessor:"won-amount"}],[]),{getTableProps:p,getTableBodyProps:c,headerGroups:x,prepareRow:h,page:g,pageOptions:m,gotoPage:b,state:{pageIndex:u}}=d.useTable({columns:l,data:s,initialState:{pageIndex:0}},d.usePagination);return e.jsxs(k,{children:[e.jsxs(I,{children:[e.jsxs("div",{className:"filter",children:[e.jsx(f,{title:"Casino Stats",fontSize:"24px"}),e.jsx(G,{children:e.jsx("form",{action:"",children:e.jsxs("div",{className:"radio-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"all-agents",name:"All agents"}),e.jsx("label",{for:"all-agents",children:"5 most played games"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents"}),e.jsx("label",{for:"my-agents",children:"5 most visited casinos"})]})]})})})]}),e.jsx(j,{})]}),e.jsx("div",{children:e.jsxs("table",{...p(),children:[e.jsx("thead",{children:x.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(o=>e.jsx("th",{...o.getHeaderProps(),children:o.render("Header")}))}))}),s.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:g.map((t,o)=>(h(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:y(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(v,{currentPage:u+1,totalPages:m.length,onPageChange:b})]})},R=a.div`
  margin-top: 62px;
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
`,B=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    flex: 1;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`,M=()=>{const[s]=n.useState([]),l=n.useMemo(()=>[{Header:"Provider",accessor:"provider"},{Header:"Casino",accessor:"casino"},{Header:"Total bet count",accessor:"total-bet-count"},{Header:"Total won count",accessor:"total-won-count"},{Header:"Total bet amount",accessor:"total-bet-amount"},{Header:"Won bet | amount rate",accessor:"won-rate"},{Header:"GGR",accessor:"ggr"}],[]),{getTableProps:p,getTableBodyProps:c,headerGroups:x,prepareRow:h,page:g,pageOptions:m,gotoPage:b,state:{pageIndex:u}}=d.useTable({columns:l,data:s,initialState:{pageIndex:0}},d.usePagination);return e.jsxs(R,{children:[e.jsxs(B,{children:[e.jsx(f,{title:"Provider casino stats",fontSize:"24px"}),e.jsx(j,{})]}),e.jsx("div",{children:e.jsxs("table",{...p(),children:[e.jsx("thead",{children:x.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(o=>e.jsx("th",{...o.getHeaderProps(),children:o.render("Header")}))}))}),s.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:g.map((t,o)=>(h(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:y(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(v,{currentPage:u+1,totalPages:m.length,onPageChange:b})]})},q=()=>e.jsxs(P,{children:[e.jsxs(H,{children:[e.jsx(f,{title:"Stats"}),e.jsx(j,{})]}),e.jsxs(w,{children:[e.jsx(i,{title:"Total casino players",count:0}),e.jsx(i,{title:"Current coins balance",count:0}),e.jsx(i,{title:"Casino GGR",count:0}),e.jsx(i,{title:"Player profit",count:0})]}),e.jsxs(w,{className:"total",children:[e.jsx(i,{title:"Total bet amount",count:0,items:[{name:"Won amount",value:0},{name:"Lost amount",value:0}]}),e.jsx(i,{title:"Total numbers of bets",count:0,items:[{name:"Won bets",value:0},{name:"Lost bets",value:0}]})]}),e.jsxs(C,{children:[e.jsx(W,{}),e.jsx(N,{}),e.jsx(M,{})]})]});export{q as default};
