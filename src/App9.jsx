import React, { useState, createContext } from "react";
// 创建上下文空间
const NumContext = createContext()
function Child() {
  return (
    <NumContext.Consumer>
      {
      ({ num, setNum }) => (
        <>
          <h2>{num}</h2>
          <button onClick={() => setNum(456)}>修改num</button>
        </>
      )
      }
    </NumContext.Consumer>
  );
}

const Father = () => <Child />;

export default function App9() {
  const [num, setNum] = useState(123);
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}
