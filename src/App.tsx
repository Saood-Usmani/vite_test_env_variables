import Alert from "./components/Alert";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  return (
    <div>
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
