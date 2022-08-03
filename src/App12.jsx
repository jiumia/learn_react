import React, { useState, memo, useMemo } from "react";
const Child = memo((props) => {
  console.log(1111);
  return (
    <button
      onClick={() => {
        props.doSth();
      }}
    >
      累加
    </button>
  );
});
export default function App12() {
  const [num, setNum] = useState(1);

  const doSth = useMemo(() => {
    return ()=>setNum((num) => num + 1);
  }, []);
  return (
    <div>
      <h2>数字为:{num}</h2>
      {/* <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        累加
      </button> */}
      <Child doSth={doSth} />
    </div>
  );
}
