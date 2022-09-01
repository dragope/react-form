import React from 'react'
import './Modal.css'

function Modal({ data, setOpenModal }) {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-content'>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        <button onClick={()=> setOpenModal(false)}>OK</button>
        </div>
     </div> 
  )
}

export default Modal