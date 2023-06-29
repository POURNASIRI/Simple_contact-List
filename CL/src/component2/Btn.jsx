import React from 'react'



function Btn({contactDeleteHandler}) {
  return (
    <div>
        <button onClick={contactDeleteHandler}>Delet</button>
    </div>
  )
}

export default Btn