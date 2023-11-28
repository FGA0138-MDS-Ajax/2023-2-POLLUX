import './App.css';
import UserProvider from './context/UserContext';
import Routes from './routes'; 

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes></Routes>
      </div>
    </UserProvider>
  );
}

export default App;
