import React from 'react'
import Contact from './Contact'

function ContactList({contacts,catg, deleteContact, updateContact}) {
  return (
    <ul className="list-group m-2">
           <div className='bg-dark text-white text-center bg-gradient'>
           <h1 >{catg.category} Contacts</h1>
           </div>
            
            {contacts.map((contact) => {
              if (catg.isFilter === true) {
                 if(catg.category==="All" || contact.type===catg.category)
                return <Contact key={contact.id} contact={contact} updateContact={updateContact} deleteContact={deleteContact}/>;
              }
              else{
                
                return <Contact key={contact.id} contact={contact} updateContact={updateContact} deleteContact={deleteContact}/>
                
              }
              return null;
            })}
          
    </ul>
  )
}

export default ContactList