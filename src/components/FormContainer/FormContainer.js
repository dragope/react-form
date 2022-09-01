import React, { useState } from 'react'
import './FormContainer.css'
import { Formik } from 'formik'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

function FormContainer() {

    const [ openModal, setOpenModal ] = useState(false)
    const [ data, setData ] = useState({})

  return (
    <div className='form-container'> 
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                textarea: ''
            }}
            validate={(values)=>{
                let errors = {};
                if(!values.name){
                    errors.name = "Required"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    errors.name = "Name can only contain letters and spaces"
                }
                if(!values.email){
                    errors.email = "Required"
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    errors.email = "Email can only contain letters, numbers, periods, hyphens, and underscores and be a valid email"
                }
                if(!values.password){
                    errors.password = "Required"
                } else if(!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(values.password)){
                    errors.password = "Password must contain at least one lower case, one upper case, one number, one special character and be at least 8 characters long"
                }
                return errors
            }}
            onSubmit={(values, {resetForm} )=> {
                setData(values)
                setOpenModal(true)
                resetForm()
            }}
        >
            {( { values, handleBlur, touched, errors, handleChange, handleSubmit } )=> (
                <Form errors={errors} handleSubmit={handleSubmit} values={values} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
            )}
        </Formik>
        { openModal && <Modal data={data} setOpenModal={setOpenModal} /> }  
	</div>

  )
}

export default FormContainer