import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid";
function Form({saveContact,edit, editContact}) {
    useEffect(()=>{
       setName(edit.contact.name)
       setNumber(edit.contact.number)
       setType(edit.contact.type)
    },[edit])
    const[name,setName]= useState("");
    const[number,setNumber]= useState("");
    const[type,setType]= useState("")
    const[check, setCheck]=useState({Friend: false, Family: false, Colleague: false, Other: false});

    function handleName(e){
          setName(e.target.value);          
    }
    function handleNumber(e){
        setNumber(e.target.value);
    }
     function handleType(e){
       
        if(e.target.value==="Friend")
        setCheck({ 
         Friend: true, Family: false, Colleague: false, Other: false,
        })

        else if(e.target.value==="Family")
        setCheck({ 
         Friend: false, Family: true, Colleague: false, Other: false,
        })

        else if(e.target.value==="Colleague")
        setCheck({ 
         Friend: false, Family: false, Colleague: true, Other: false,
        })

        else 
        setCheck({ 
         Friend: false, Family: false, Colleague: false, Other: true,
        })
        setType(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(edit.isEdit){
          const newContact= {
            id : edit.contact.id,
            name : name,
            number : number,
            type : type,      
           }
           editContact(newContact);
        }
        else {
          const newContact= {
            id : uuidv4(),
            name : name,
            number : number,
            type : type,      
          }
        saveContact(newContact);
        }
      
        setName("");
        setNumber("");
        setType("");
        setCheck({Friend: false, Family: false, Colleague: false, Other: false});
    }

    return (
    <form className="bg-dark bg-gradient bg-opacity-75 text-white p-4" onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" value={name} className="form-control" onChange={(e)=>handleName(e)} required/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Number</label>
              <div className="col-sm-10">
                <input type="text" value={number} className="form-control"  onChange={(e)=>handleNumber(e)} required/>
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Options</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Family" checked={check.Family}  onChange={(e)=>handleType(e)}/>
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Family
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Friend" checked={check.Friend} onChange={(e)=>handleType(e)}/>
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Friend
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Colleague" checked={check.Colleague} onChange={(e)=>handleType(e)}/>
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Colleague
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="Other" checked={check.Other} onChange={(e)=>handleType(e)}/>
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Other
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">Save</button>
            </div>
          </form>
  )
}

export default Form