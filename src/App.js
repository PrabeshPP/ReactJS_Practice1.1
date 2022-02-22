import React from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/Users_list";

function App() {
  return (
    <div className="App">
    <AddUser/>
    <UserList users={[{"name":"Prabesh","age":20}]} />  
    </div>
  );
}

export default App;
