import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{textAlign : 'center'}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <TodoList />
      </header>

      <div className='content-right'>
        <AddForm />
      </div>
    </div>
  );
}

export default App;
