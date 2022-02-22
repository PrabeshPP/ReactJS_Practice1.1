import React,{useState} from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/Users_list";

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevElem)=>{
      return [...prevElem,{name:uName,age:uAge,id:Math.ceil(Math.random()*100).toString()}];
    })

  }
  return (
    
    <div className="App">
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList} />  
    </div>
  );
}

export default App;
