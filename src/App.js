import { useContext, useState } from "react";
import Termekek from "./components/Public/Termekek";
import { ApiContext } from "./contexts/ApiContext";
import TermekUrlap from "./components/Admin/termekUrlap";


function App() {
  return (
    <div className="container">
      <header className="App-header">
        <a style={{fontWeight: "bold", margin: "3rem"}}>
          fakeStoreWebshop
        </a>

      </header>
      <section className="p-5">
        <TermekUrlap />
      </section>
      <article>
        <Termekek />
      </article>
    </div>
  );
}

export default App;
