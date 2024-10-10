import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addContactApi } from '../services/allApi'
import { toast } from 'react-toastify'


function AddContact() {

  const[contact,setContact]=useState({
    name:"",photoUrl:"",mobileNumber:"",email:"",company:""
  })
  const [resp,setresp]=useState({})
  const handleAdd=async()=>{
    console.log(contact)
    const{name,photoUrl,mobileNumber,email,company}=contact
    if(!name,!photoUrl,!mobileNumber,!email,!company){
      toast.warning("enter valid input")
    }
    else{
      const result=await addContactApi(contact)
      if(result.status==201){
        toast.success("contact saved")
        setContact({name:"",photoUrl:"",mobileNumber:"",email:"",company:""})
      }
      else{
        toast.error("adding failed")
      }
    }
    

  }
  return (
    <>
    <section className='add-contact p-3'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-success fw-bold">
              Create Contact
            </p>
            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, perferendis, natus dolores voluptate magni itaque aspernatur deserunt ad voluptatum corporis nam soluta suscipit ab repudiandae nisi eaque blanditiis maiores repellendus.</p>

          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form action="">
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='name' onChange={(e)=>{setContact({...contact,name:e.target.value})}} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='photourl' onChange={(e)=>{setContact({...contact,photoUrl:e.target.value})}} />
              </div>
              <div className="mb-2">
                <input type="number" className="form-control" placeholder='mobilenumber' onChange={(e)=>{setContact({...contact,mobileNumber:e.target.value})}} />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder='email' onChange={(e)=>{setContact({...contact,email:e.target.value})}}/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='company' onChange={(e)=>{setContact({...contact,company:e.target.value})}}/>
              </div>
              <div className="mb-2">
                <input type="submit" className="btn btn-success" value='create' onClick={handleAdd}/>
                <Link to={'/contactlist'} className='btn btn-dark ms-2'>Cancel</Link>
              </div>

            </form>
          </div>
        </div>
      </div>

    </section>

    </>
  )
}

export default AddContact