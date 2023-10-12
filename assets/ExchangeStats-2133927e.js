import{s as m,r as o,i as T,j as e,h as y}from"./index-72da0fa7.js";import{T as b}from"./Title-a5526cc6.js";import{C as j}from"./DayCustom.styles-51fde49b.js";import"./SelectCustom.styles-fccdbb3e.js";import"./date-8a8a165d.js";import{r as u,P as S}from"./index-80bacd76.js";const f=m.div`
  margin-top: 62px;
  table {
    border-spacing: 0;
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
      padding: 15px 25px 16px 24px;

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
`,P=m.div`
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
`,H=m.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  & > div {
    flex: 1;
    width: none;
    max-width: none;
  }
  &.total {
    margin-top: 32px;
  }
`,w=m.div``,E=()=>{const[n]=o.useState([]),i=o.useMemo(()=>[{Header:"Game name",accessor:"event_key"},{Header:"Game type",accessor:"type"},{Header:"Exchange",accessor:"league"},{Header:"Bet count",accessor:"bet"}],[]),{getTableProps:l,getTableBodyProps:c,headerGroups:x,prepareRow:p,page:h,pageOptions:g,gotoPage:d,state:{pageIndex:s}}=u.useTable({columns:i,data:n,initialState:{pageIndex:0}},u.usePagination);return e.jsxs(f,{children:[e.jsx(P,{children:e.jsx("div",{className:"filter",children:e.jsx(b,{title:"Exchange Stats",fontSize:"24px"})})}),e.jsx("div",{children:e.jsxs("table",{...l(),children:[e.jsx("thead",{children:x.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>e.jsx("th",{...a.getHeaderProps(),children:a.render("Header")}))}))}),n.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:h.map((t,a)=>(p(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:y(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(S,{currentPage:s+1,totalPages:g.length,onPageChange:d})]})},C=({data:n})=>{const i=o.useMemo(()=>[{Header:"Start Date",accessor:"start_date_time"},{Header:"League",accessor:"league"},{Header:"Type",accessor:"type"},{Header:"Home",accessor:"home"},{Header:"Away",accessor:"away"},{Header:"Bet",accessor:"bet"},{Header:"Is Home?",accessor:"isHome"},{Header:"Odds",accessor:"odds"},{Header:"Stake",accessor:"stake"},{Header:"Profit",accessor:"profit"},{Header:"User",accessor:"username"},{Header:"Date Time",accessor:"date_time"}],[]),{getTableProps:l,getTableBodyProps:c,headerGroups:x,prepareRow:p,page:h,pageOptions:g,gotoPage:d,state:{pageIndex:s}}=u.useTable({columns:i,data:n,initialState:{pageIndex:0}},u.usePagination);return e.jsxs(f,{children:[e.jsx(P,{children:e.jsx("div",{className:"filter",children:e.jsx(b,{title:"Exchange Player Stats",fontSize:"24px"})})}),e.jsx("div",{children:e.jsxs("table",{...l(),children:[e.jsx("thead",{children:x.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>e.jsx("th",{...a.getHeaderProps(),children:a.render("Header")}))}))}),n.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:h.map((t,a)=>(p(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header.toLowerCase().includes("date")?e.jsx("td",{...r.getCellProps(),children:y(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(S,{currentPage:s+1,totalPages:g.length,onPageChange:d})]})},A=()=>{const[n,i]=o.useState([]);o.useEffect(()=>{T.get("http://127.0.0.1:3000/api/exchanges").then(d=>{const s=d.data;i(s);const t=new Set(s.map(r=>r.username));c(t.size),p(s.length);const a=s.reduce((r,v)=>r+v.stake,0);g(a)}).catch(d=>{console.error("Error fetching exchange data:",d)})},[]);const[l,c]=o.useState(0),[x,p]=o.useState(0),[h,g]=o.useState(0);return e.jsxs(f,{children:[e.jsx(P,{children:e.jsx(b,{title:"Exchange"})}),e.jsx(H,{children:e.jsx(j,{title:"Total Exchange players",count:l})}),e.jsxs(H,{className:"total",children:[e.jsx(j,{title:"Total numbers of bets",count:x}),e.jsx(j,{title:"Total bet amount",count:h})]}),e.jsxs(w,{children:[e.jsx(C,{data:n}),e.jsx(E,{})]})]})};export{A as default};
