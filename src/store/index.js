// 仓库入口

import reducer from "./reducer";

// 创建仓库
import {createStore} from 'redux'
const store = createStore(reducer)

export default store;