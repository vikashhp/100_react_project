import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoListpra from './components/TodoList/TodoListpra';
import Otpgen from './components/OTP_GENRATOR/Otpgen';
import Password from './components/Password_Validator/Password';
function App() {
  return (
    <div className="App">
       
       {/* <TodoList/> */}
       {/* <TodoListpra/> */}
       {/* <Otpgen/> */}
       <Password/>
       
    </div>
  );
}

export default App;
