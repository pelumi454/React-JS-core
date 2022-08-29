import logo from './logo.svg';
import './App.css';

function App() {
  const todayDate = new Date();
  const timeToday = todayDate.toLocaleTimeString();
  return (
    <div className="App">
      <h4>Hi! The time is {timeToday}</h4>
    </div>
  );
}

export default App;
