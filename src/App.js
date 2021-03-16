import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./tarjetas";


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
   

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filtrarTarjetas = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  

  return (
    <div className="App">
       
    
      <div className="headCont">
				<div className="headContTexto">
					<h1 className="NombreEqupo"style={{ textAlign:"center" }}>FTA team</h1>
				</div> 
        </div>
      <input className="search-box" onInput={filtrarTarjetas} placeholder="Search..."/>
      <div className="cards-container">


     
			
      	

        <div id="galeria" className="galeria">

        </div>



            



        

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}





export default App;
