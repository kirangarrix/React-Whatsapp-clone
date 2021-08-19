import "./App.css";
import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <AccountProvider>
      <Messanger />
    </AccountProvider>
  );
}

export default App;
