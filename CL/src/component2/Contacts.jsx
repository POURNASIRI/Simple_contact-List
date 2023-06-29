

import React from 'react'
import ContactsItem from './ContactsItem'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'

function Contacts({contactList,searchTerm,onDelete}) {
  return (
    <div className='forms__container list'>
          <table>
            <tbody>
            <tr>
              <th><li><FaUser/>Name</li></th>
              <th><li><FaPhone/>Phone</li></th>
              <th><li><FaEnvelope/>Email</li></th>
            </tr>
          {
            contactList
            .filter(({name})=>name.includes(searchTerm))
            .map(({id,name,number,email}) => 
            <ContactsItem key={id} name={name} number={number} email={email} onDelete={() =>onDelete(id)}/>)
          }
            <tr>

            </tr>
          </tbody>
          </table>
          
    </div>
  )
}

export default Contacts