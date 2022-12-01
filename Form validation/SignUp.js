import React from 'react'
import * as yup from "yup";
import { useFormik } from 'formik';

const SignUp = () => {

    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
        },
        validationSchema:yup.object({
            name: yup.string().min(2, "name must have atlest 2 charecters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6,"password must have atlest 6 charecters").required(),
        }),
        onSubmit: (values,{resetForm})=>{
            console.log(values);
            resetForm ({values:""})
        }
    })
    console.error(formik.errors)

    const nameError= formik.touched.name && formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>

    const emailError= formik.touched.email && formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>

    const passwordError=formik.touched.password && formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>


    const renderForm= <form onSubmit={formik.handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} required/>
    </div>
    <br />
    {nameError}
   
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} required/>
    </div>
    <br />
    {emailError}
    
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} required/>
    </div>
      <br />
    {passwordError}
    <br />
      <button type="submit">SignUp</button>
    </form>

  return (
    <div>
      <h2>User SignUp</h2>
      {renderForm}
      
    </div>
  )
}

export default SignUp
