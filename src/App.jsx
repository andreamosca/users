import React, { useState } from "react";

import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList";
import Container from "./components/UI/Container";

const DUMMY = [
  { name: "Andrea", age: "21", id: Math.random().toString() },
  { name: "Mattia", age: "24", id: Math.random().toString() },
  { name: "Giuliana", age: "25", id: Math.random().toString() },
];

function App() {
  const [users, setUsers] = useState(DUMMY);

  const handleUserCreate = (newUser) => setUsers((prev) => [newUser, ...prev]);

  return (
    <Container className="main">
      <NewUser onUserCreate={handleUserCreate}></NewUser>
      <UserList users={users} />
    </Container>
  );
}

export default App;
