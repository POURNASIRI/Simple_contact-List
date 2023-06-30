

import React from 'react'
import Btn from './Btn'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'

function ContactsItem({name,number,email,onDelete,searchTerm}) {
  const index = name.indexOf(searchTerm)
  return (
    <tr>
       <td>
        {
          index === -1 ? name :
          <p>
            <span>{name.slice(0,index)}</span>
            <span style={{background:"yellow"}}>{name.slice(index,index + searchTerm.length)}</span>
            <span>{name.slice(index + searchTerm.length)}</span>
          </p>
        }
       </td>
       <td>{number}</td>
       <td>{email}</td>
       <td><Btn contactDeleteHandler={onDelete}/></td>
    </tr>
  )
}

export default ContactsItem