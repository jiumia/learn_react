// 创建初始状态并导出一个函数

const defaultState = {
  num: 1,
};

export default (state = defaultState, action) => {
let newState = JSON.parse(JSON.stringify(state))
//   if (action.type === 'addNum') {
//     newState.num+=action.value;
//     console.log(newState);
//   }
  switch(action.type){
    case "addNum":
        newState.num+=action.value;
        break;
    default:
        break
  }
  return newState;
};
