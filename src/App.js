import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const name = 'Pityu'
  return (
    <div className="App">
      <Header></Header>
      <h1>Hello from React</h1>
      <h2>Külön öröm neked {name}</h2>
    </div>
  );
}

export default App;
