import{s as e}from"./index-72da0fa7.js";const r=e.div`
  position: relative;
  background: ${i=>i!=null&&i.disabled?"#42464C":"var(--color-dark-gray)"};
  border: 1px solid var(--color-white);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: ${i=>i==null?void 0:i.width};
  pointer-events: ${i=>i!=null&&i.disabled?"none":"auto"};
`,a=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    display: block;
    object-fit: cover;
    height: auto;
  }
`,o=e.div`
  background: var(--color-dark-gray);
  border-radius: 0px 0px 12px 12px;
  height: 0px;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s linear 0s;
  margin-top: 9px;
  z-index: 9;
  left: -1px;
  width: 101%;
  border: 1px solid #fff;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 24px; */

    li {
      padding: 8px 16px;
      width: 100%;
      cursor: pointer;
      transition: var(--transition);
      :hover {
        background-color: var(--color-gray);
      }
    }
  }
`;export{a as N,r as W,o as a};
