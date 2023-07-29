import React,{useState} from 'react'

// import formik
import { Formik, useFormik } from 'formik';
// import yup for validation
import * as yup from 'yup';

export default function Loginformik() {

    // formik default structure called useFormik()
    const formik= useFormik({
        //initialValue default stracture asign variable  
        initialValues:{
            name: '',
            email: '',
            password: ''
        },
        //validationSchema default stracture for design variable validation structure
        validationSchema: yup.object({
            name: yup.string().min(2, "At least 2 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "At least 6 characters").required()
        }), 
        //onSubmit method pass previous values and sent resetTextFeild two perameter
         onSubmit:(values, resetTextFeild)=>{
            console.log(values)
            // resetForm default structure for reset values data 
            resetTextFeild.resetForm({values:''})
        }
    })

  return (
    <div> 
        {/* for clikable submit button call default structure formik.handleSubmit */}
        <form onSubmit={formik.handleSubmit}>
            <h1> Using formik </h1>
            <div> 
                <label htmlFor="name"> Name : </label>
                {/* for onChange call default structure formik.handleChange */}
                 {/* for control componets asign value formik.values.name */}
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} required/>
                <br />
                {/* check desibled condition => is it click(formik.touched.name) && is it any error(formik.errors.name) then show on a span with error data */}
                {formik.touched.name && formik.errors.name && <span style={{color:"red"}}>{formik.errors.name}</span>}
               
            </div>

            {/* same activity like as name  div*/}
            <div> 
                <label htmlFor="email"> Email : </label>
                <input type="text" id='eamil' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                <br />
                {formik.touched.email && formik.errors.email && <span style={{color:"red"}}>{formik.errors.email}</span>}
            </div>

            {/* same activity like as name  div*/}
            <div> 
                <label htmlFor="password"> Password : </label>
                <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
                <br />
                {formik.touched.password && formik.errors.password && <span style={{color:"red"}}>{formik.errors.password}</span>}
            </div>

            <button type='submit'> Sign Up </button>

        </form>
    
    </div>
  )
}
