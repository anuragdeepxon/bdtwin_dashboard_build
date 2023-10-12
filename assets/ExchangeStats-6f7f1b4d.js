import{s as n,r as s,i as w,j as e,h as S}from"./index-53a47b89.js";import{T as j}from"./Title-215213c9.js";import{C as u}from"./DayCustom.styles-be7450ca.js";import"./SelectCustom.styles-c1e12cf2.js";import"./date-e8b54b5d.js";import{r as b,P as v}from"./index-43f2fb2c.js";const y=n.div`
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
`,H=n.div`
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
`,f=n.div`
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
`,T=n.div``,E=({data:d})=>{const l=s.useMemo(()=>[{Header:"Start Date",accessor:"start_date_time"},{Header:"League",accessor:"league"},{Header:"Type",accessor:"type"},{Header:"Home",accessor:"home"},{Header:"Away",accessor:"away"},{Header:"Bet",accessor:"bet"},{Header:"Is Home?",accessor:"isHome"},{Header:"Odds",accessor:"odds"},{Header:"Stake",accessor:"stake"},{Header:"Profit",accessor:"profit"},{Header:"User",accessor:"username"},{Header:"Date Time",accessor:"date_time"}],[]),{getTableProps:c,getTableBodyProps:p,headerGroups:x,prepareRow:h,page:g,pageOptions:m,gotoPage:o,state:{pageIndex:a}}=b.useTable({columns:l,data:d,initialState:{pageIndex:0}},b.usePagination);return e.jsxs(y,{children:[e.jsx(H,{children:e.jsx("div",{className:"filter",children:e.jsx(j,{title:"Exchange Player Stats",fontSize:"24px"})})}),e.jsx("div",{children:e.jsxs("table",{...c(),children:[e.jsx("thead",{children:x.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(i=>e.jsx("th",{...i.getHeaderProps(),children:i.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...p(),children:g.map((r,i)=>(h(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(t=>t.column.Header.toLowerCase().includes("date")?e.jsx("td",{...t.getCellProps(),children:S(t.value)}):e.jsx("td",{...t.getCellProps(),children:t.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]})}),e.jsx(v,{currentPage:a+1,totalPages:m.length,onPageChange:o})]})},I=()=>{const[d,l]=s.useState([]);s.useEffect(()=>{w.get("http://127.0.0.1:3000/api/exchanges").then(o=>{const a=o.data;l(a);const r=new Set(a.map(t=>t.username));p(r.size),h(a.length);const i=a.reduce((t,P)=>t+P.stake,0);m(i)}).catch(o=>{console.error("Error fetching exchange data:",o)})},[]);const[c,p]=s.useState(0),[x,h]=s.useState(0),[g,m]=s.useState(0);return e.jsxs(y,{children:[e.jsx(H,{children:e.jsx(j,{title:"Exchange"})}),e.jsx(f,{children:e.jsx(u,{title:"Total Exchange players",count:c})}),e.jsxs(f,{className:"total",children:[e.jsx(u,{title:"Total numbers of bets",count:x}),e.jsx(u,{title:"Total bet amount",count:g})]}),e.jsx(T,{children:e.jsx(E,{data:d})})]})};export{I as default};
