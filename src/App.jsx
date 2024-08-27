import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Soy un navbar</h1>
      <Outlet />
      <h1>Soy un footer</h1>
    </>
  );
}

export default App;
