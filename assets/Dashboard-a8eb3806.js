import{s as a,j as t}from"./index-53a47b89.js";import{C as e}from"./DayCustom.styles-be7450ca.js";import{C as c}from"./CalendarDay-932fcd04.js";import{T as m}from"./Title-215213c9.js";import"./SelectCustom-f4b6b94d.js";import"./SelectCustom.styles-c1e12cf2.js";import"./date-e8b54b5d.js";const p=a.section`
margin-bottom: 25px;
`,x=a.div`
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
`,d=a.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
 
`;a.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--color-blue);
  }
`;const o={title:"Valid Turnover balance",count:389.85,info:[{name:"Coins balance",value:0},{name:"Sports exposure",value:0}]},n={title:"GDR",count:0,info:[{name:"Casino",value:0},{name:"Sports",value:0}]},i={title:"NGR",count:0,info:[{name:"Casino",value:0},{name:"Sports",value:0}]},s={title:"Player sports exposure",count:0,info:[{name:"Match odds GGR",value:0},{name:"Fancy GGR",value:0}]},l={title:"Players",count:0,info:[{name:"New",value:1},{name:"Unique",value:0},{name:"Inactive",value:1},{name:"Blocked",value:0}]},r={title:"Deposits",count:25,info:[{name:"Auto cash",value:1},{name:"Manual cash",value:0},{name:"Cash request",value:1},{name:"Coins",value:0}]},u={title:"Withdraws",count:5,info:[{name:"Auto cash",value:1},{name:"Manual cash",value:0},{name:"Cash request",value:1},{name:"Coins",value:0}]},C=()=>t.jsxs(p,{children:[t.jsxs(x,{children:[t.jsx(m,{title:"Dashboard"}),t.jsx(c,{})]}),t.jsxs(d,{children:[t.jsx(e,{title:o.title,count:o.count,items:o.info}),t.jsx(e,{title:n.title,count:n.count,items:n.info}),t.jsx(e,{title:i.title,count:i.count,items:i.info}),t.jsx(e,{title:s.title,count:s.count,items:s.info}),t.jsx(e,{title:l.title,count:l.count,items:l.info}),t.jsx(e,{title:r.title,count:r.count,items:r.info}),t.jsx(e,{title:u.title,count:u.count,items:u.info})]})]});export{C as default};
