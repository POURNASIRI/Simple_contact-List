

import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const phoneValid = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

function ContactForm({onAddContact,onSearch,contactList}) {

    const[name,setName] = useState("")
    const[phone,setPhone] = useState("")
    const[mail,setMail] = useState("")
    const[flag, setFlag] = useState(false)

    const[searchContacts, setSearchContacts] = useState("")

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(name.trim() && phone.trim() && mail.trim()){
            if(!(contactList.some((item)=> item.name == name))){
                onAddContact(name.trim(),phone.trim(),mail.trim())
                setName("")
                setPhone("")
                setMail("")
                setFlag(false)
            }else{
                setFlag(true)
                setTimeout(()=>{
                setFlag(false)
                },3000)
            }
        }
    }

   const nameHandler = (e) =>{
    setName(e.target.value)
   }
   const phoneHandler = (e) =>{
    setPhone(e.target.value)
   }
   const mailHandler = (e) =>{
    setMail(e.target.value)
   }

   const searchHandler = (e) =>{
    setSearchContacts(e.target.value)
    onSearch(e.target.value)

   }

  return (
    <div className='forms__container'>
        <div className='form__search'>
         <form onSubmit={onFormSubmit} action="" className='search__input' >
            <input value={searchContacts} onChange={searchHandler} type="text" placeholder='Search...' />
        </form>
        </div>
    <div className='form__container'>
        <form onSubmit={onFormSubmit} action=""  className='form' >
            <div className='form__input'>
                <input className={flag ? "active" : null} value={name.trim()} onChange={nameHandler} type="text" placeholder='Name' />
                <p className={flag ? "error" :null}>username already exists</p>
            </div>
            <div className='form__input'>
                <input value={phone.trim()} onChange={ phoneHandler} type="number" placeholder='Phone' />
            </div>
            <div className='form__input'>
                <input value={mail.trim()} onChange={mailHandler} type="email" placeholder='Email' />
            </div>
            <div className='btn'>
            <button type='submit'><FaPlus className='icon'/>Add</button>
            </div>
        </form>
       
    </div>
    <hr></hr>
    </div>
  )
}

export default ContactForm