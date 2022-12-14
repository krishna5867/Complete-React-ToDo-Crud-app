import './App.css';
import Todo from './components/Todo';

import FirebaseAuth from './auth';

function App() {

  
  
  return (
    <div className="App">
      <>
      <FirebaseAuth />
    <Todo />
      </>
    </div>
  );
}

export default App;







