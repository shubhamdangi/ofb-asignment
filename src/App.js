import logo from "./logo.svg";
import "./App.css";
import "./components/style.css";

import Header from "./components/Header";
import Issues from "./components/Issues";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Head /> */}
      <Header />

      <Issues />
    </div>
  );
}

export default App;
