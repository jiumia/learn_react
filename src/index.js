import ReactDOM from 'react-dom';
import Router from './router'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <h2>nihao</h2>
// );
// ReactDOM.render(组件名称，要注入的元素)
ReactDOM.render(
    <Router/>,
  document.getElementById('root')
)
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )
// setTimeout(()=>{
//   ReactDOM.render(
//     <input type="text" />,
//     document.getElementById('root')
//   )
// },3000)