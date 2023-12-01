import './App.css';
import UserProvider from './context/UserContext';
import AppRoutes from './routes'; 

function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppRoutes></AppRoutes>
      </div>
    </UserProvider>
  );
}

export default App;
