import './App.css';
import { Todo } from './features/todo';
import { AppProvider } from './providers/App';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Todo />
      </AppProvider>
    </div>
  );
}

export default App;
