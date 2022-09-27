import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </div>
  );
}

export default App;
