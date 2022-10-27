import React from 'react'
import {useState} from 'react'
function Type({filterContact}) {
    const[check, setCheck]=useState({All: false, Friend: false, Family: false, Colleague: false, Other: false});
    const[category, setCategory]= useState("");
    function handleType(e){
       
        if(e.target.value==="Friend")
        setCheck({ 
          All: false, Friend: true, Family: false, Colleague: false, Other: false,
        })

        else if(e.target.value==="Family")
        setCheck({ 
          All: false, Friend: false, Family: true, Colleague: false, Other: false,
        })

        else if(e.target.value==="Colleague")
        setCheck({ 
          All: false, Friend: false, Family: false, Colleague: true, Other: false,
        })

        else if(e.target.value==="Other")
        setCheck({ 
          All: false, Friend: false, Family: false, Colleague: false, Other: true,
        })
        else 
        setCheck({ 
          All: true, Friend: false, Family: false, Colleague: false, Other: false,
        })
        setCategory(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        filterContact(category);
        setCheck({All: false, Friend: false, Family: false, Colleague: false, Other: false});
    }

    return (
    <form className="bg-dark bg-gradient bg-opacity-75 text-white p-4" onSubmit={(e)=>handleSubmit(e)} >
            <h1>Show Contacts</h1>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Options</legend>
              <div className="col-sm-10">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="All" checked={check.All}  onChange={(e)=>handleType(e)}/>
                  <label className="form-check-label" htmlFor="gridRadios1">
                    All
                  </label>
                </div>
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
                <button type="submit" className="btn btn-primary btn-lg">Show</button>
            </div>
          </form>
  )
}

export default Type