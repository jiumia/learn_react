import React from "react";
import { connect } from "react-redux";
function App13(props) {
  return (
    <div>
      <h2>shuzij:{props.num}</h2>
      <button onClick={() => props.leijia()}>leijai</button>
    </div>
  );
}
//  状体映射：将reducer中的state映射为props 可以在组件中使用
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};
// 将reducer中事件映射为props
const mapDispatchToProps = (dispatch) => {
  return {
    leijia() {
      const action = { type: "addNum" ,value:2};
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App13);
