import React from 'react'

function Contact({contact, deleteContact, updateContact}) {
  return (
    <li className="list-group-item task">
        <span className='d-flex'>
        <div className={contact.type}>{contact.number} </div>
        <div className={contact.type}>{contact.type} </div>
        </span>
    <p className="fs-5">{contact.name}</p>
    <span>
    <button type="button" className="btn btn-primary mx-2" onClick={()=>updateContact(contact)}>Edit</button>
    <button type="button" className="btn btn-dark" onClick={()=>deleteContact(contact.id)}>Delete</button>
    </span>
    
    </li>
  )
}

export default Contact