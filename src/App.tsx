import { useState } from "react";

import { Button } from "./components/ui/button";
import { TableView } from "./components/table-view/table-view";

// import "./App.css";

function App() {
  return (
    <main className="container max-w-9xl py-5">
      <h1 className="text-4xl font-bold text-center">'Rick and Morty' WiKi</h1>

      <TableView />

    </main>
  );
}

export default App;
