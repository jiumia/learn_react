// const App=()=>{
//     return <h2>app</h2>
// }

// export default App;

// 函数式组件无声明周、无this、无state状态

import { useState, useEffect } from "react";
export default function App5() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  useEffect(() => {
    console.log("num1 loading");
  });
  return (
    <>
      <h2>数字1：{num1}</h2>
      <button onClick={() => setNum1(num1 + 1)}>累加</button>
      <h2>数字2：{num2}</h2>
      <button onClick={() => setNum2(num2 + 1)}>累加</button>
    </>
  );
}
