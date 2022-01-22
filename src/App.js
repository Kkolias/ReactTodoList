import './App.css';
import AddTask from './components/addTask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>Todo List</h2>
        <div className='add-task-container'>
          <div className='add-task'>
            <AddTask/>
          </div>
          <button>+</button>
        </div>
        <div className='todos-container'>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
