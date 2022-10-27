import Type from "./Components/Type"
import ContactList from "./Components/ContactList";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Hero from "./Images/background.jpg"
import { useState } from "react";


function App() {
  const[contacts, setContacts]= useState([])
  function saveContact(newContact){
       setContacts([...contacts, newContact])
  }
  const[catg, setCatg]= useState({
    category : "",
    isFilter : false,
  })
  function filterContact(category){
      setCatg({
        category : category,
        isFilter : true,
      });
  }
  function deleteContact(id) {
      setContacts(contacts.filter((item)=> item.id!==id))
  }
  const[edit, setEdit]= useState({
     contact : {},
     isEdit : false,
  })
  function updateContact(data) {
      setEdit({
        contact: data,
        isEdit : true,
      })
  }
  function editContact(newContact) {
    setContacts(contacts.map((item)=> item.id===newContact.id? newContact : item))
  }
  return (
    <div className="App">
       
       <Navbar/>
       <img src={Hero} className="hero" alt=""></img>
       <div className="content d-flex ">
      
          <div className="main m-4">
          <ContactList contacts={contacts} catg={catg} updateContact={updateContact} deleteContact={deleteContact}/>
          </div>
         <div className="inputSection m-5">
          <Form saveContact={saveContact} edit={edit} editContact={editContact}/>
          <div className="my-5">
          <Type filterContact={filterContact}/>
          </div>
          
          </div>
       </div>

    

    </div>
  );
}

export default App;
