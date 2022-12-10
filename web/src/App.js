import treasureChest from './treasure-chest.png';
import TransferForm from './transfer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={treasureChest} className="App-logo" alt="logo" />
        <p>
          <code>💎 Treasure Chest! 💎</code>
        </p>
        <br />
        <TransferForm />
      </header>
    </div>
  );
}

export default App;
