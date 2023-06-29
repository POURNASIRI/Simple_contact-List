

import React from 'react'
import Btn from './Btn'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'

function ContactsItem({name,number,email,onDelete}) {
  return (
    <tr>
       <td>{name}</td>
       <td>{number}</td>
       <td>{email}</td>
       <td><Btn contactDeleteHandler={onDelete}/></td>
    </tr>
  )
}

export default ContactsItem