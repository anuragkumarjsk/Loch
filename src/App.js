import './App.css';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
function App() {
  return (
    <div className="App">
      <div className='Left'>
        <Home/>
      </div>
      <div className='Right'>
       <SignUp/>
      </div>
    </div>
  );
}

export default App;
