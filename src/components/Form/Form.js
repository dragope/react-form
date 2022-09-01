import React from 'react'
import './Form.css'

function Form({ errors, handleSubmit, values, touched, handleChange, handleBlur }) {
  return (
        <form className='form' onSubmit={handleSubmit}>
            <h1>Form</h1> 
            <hr />
            <div className='form-fields-container'>
                <div className='form-field'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Woody Allen' value={ values.name } onChange={handleChange} onBlur={handleBlur}/>
                    { touched.name && errors.name && <p className='errors'>{errors.name}</p> }
                </div>
                <div className='form-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='contoso@domain.com' value={ values.email } onChange={handleChange} onBlur={handleBlur}/>
                    { touched.email && errors.email && <p className='errors'>{errors.email}</p> }
                </div>
                <div className='form-field'>
                    <label htmlFor="name">Password</label>
                    <input type="password" id="password" placeholder='Provide a password' value={ values.password } onChange={handleChange} onBlur={handleBlur}/>
                    { touched.password && errors.password && <p className='errors'>{errors.password}</p> }
                </div>
                <div className='form-field'>
                    <label htmlFor="name">Text Area</label>
                    <textarea type="text" id="textarea" placeholder='' value={ values.textarea } onChange={handleChange} onBlur={handleBlur}/>
                </div>
            </div>
            <button type="submit" disabled={errors.name || errors.password || errors.email ? true : false}>Submit</button>
        </form> 
  )
}

export default Form