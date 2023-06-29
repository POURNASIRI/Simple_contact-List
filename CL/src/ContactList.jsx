
import React, { useEffect, useState } from 'react'
import ContactForm from './component2/ContactForm'
import Contacts from './component2/Contacts'

function ContactList() {

    const[contactList,setContactList] =useState(JSON.parse(localStorage.getItem("Users")) ||[])
    const[searchTerm, setSearchTerm] = useState("")

    const submitHandler = (contact,phone,mail) =>{
            setContactList([...contactList,{
                id:contactList.length + 1,
                name:contact,
                number:phone,
                email:mail
        }])
    }


    const deleteHandler = (id) =>{
            setContactList(contactList.filter((items)=> id !== items.id))
    }

    useEffect(() =>{
            localStorage.setItem("Users", JSON.stringify(contactList))
    },[contactList])



  return (
    <div>
        <ContactForm 
        onAddContact={submitHandler}
        contactList={contactList}
        onSearch={(terms) => setSearchTerm(terms)}
        />
        <Contacts 
        searchTerm={searchTerm}
        contactList={contactList}
        onDelete={deleteHandler}
        />
    </div>
  )
}

export default ContactList