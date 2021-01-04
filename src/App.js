import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./UserList";

function App() {
  const [fullName, setFullName] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((respond) => setFullName(respond.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users Fullnames </h1>
        <UserList list={fullName} />
      </header>
    </div>
  );
}

export default App;
