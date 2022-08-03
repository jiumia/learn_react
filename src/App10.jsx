import React, { useState, createContext,useContext } from "react";
// 创建上下文空间
const NumContext = createContext()
function Child() {
    const {num, setNum} = useContext(NumContext);
  return (
    <>
          <h2>{num}</h2>
          <button onClick={() => setNum(456)}>修改num</button>
        </>
  );
}

const Father = () => <Child />;

export default function App10() {
  const [num, setNum] = useState(123);
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}
