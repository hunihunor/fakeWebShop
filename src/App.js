import { useContext, useState } from "react";
import Termekek from "./components/Termekek";
import { ApiContext } from "./contexts/ApiContext";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <a>
          fakeStoreWebshop
        </a>
      </header>
      <article>
        <Termekek />
      </article>
    </div>
  );
}

export default App;
