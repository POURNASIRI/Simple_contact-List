import React from 'react'



function Btn({contactDeleteHandler}) {
  return (
    <div>
        <button className='delete__btn' onClick={contactDeleteHandler}>Delet</button>
    </div>
  )
}

export default Btn