import Expense from './todolist/Expense';
import './App.css';
function App() {
  let date = {
    date: new Date()
  }
  return (
    <div className="App">
     <Expense date={date.date}/>
    </div>
  );
}

export default App;
