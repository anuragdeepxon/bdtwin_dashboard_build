import{s as e,j as i}from"./index-53a47b89.js";const p=e.div`
  background-color: var(--color-dark-gray);
  border-radius: 12px;
  max-width: 376px;
  width: 100%;
`,d=e.div`
  padding: 24px;
  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 8px;
  }
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 12px;
  }
`,s=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-top: 1px solid #42464c;
  padding-top: 12px;
  padding-bottom: 12px;
  .line {
    color: #42464c;
  }
  .infoName {
    max-width: 152px;
    width: 100%;
  }
`,c=({title:n="",count:o=0,items:r})=>i.jsx(p,{children:i.jsxs(d,{children:[i.jsx("h2",{children:n}),i.jsx("p",{children:o}),r==null?void 0:r.map((t,a)=>i.jsxs(s,{children:[i.jsx("div",{className:"infoName",children:t.name}),i.jsx("div",{className:"line",children:" | "}),i.jsx("div",{children:t.value})]},a))]})});e.div``;const l=e.div`
  max-width: 185px;
  width: 100%;
`,h=e.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
  svg {
    cursor: pointer;
  }
`,g=e.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  flex: 1;
  input {
    width: 100%;
    max-width: 240px;
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
`;export{c as C,g as I,l as S,h as W};
