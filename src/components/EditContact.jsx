import axios from 'axios'
import React from 'react'
import { useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function EditContact() {


  const {id}=useParams()
  const [values,setvalues]=useState({
      id:id,
      name:"",
      photoUrl:"",
      mobileNumber:"",
      email:"",
      company:""
  })

  useEffect(()=>{
    axios.get("https://contact-server-giqu.onrender.com/contacts/"+id)
    .then(res=>{
      console.log(res)
      setvalues({...values,name:res.data.name,photoUrl:res.data.photoUrl,mobileNumber:res.data.mobileNumber,email:res.data.email,company:res.data.company})
      console.log(values)
    })
  },[])

  const handleEdit=()=>{
    axios.put("https://contact-server-giqu.onrender.com/contacts/"+id,values)
    .then(res=>{
      console.log(res)
      toast.success('updated successfully')
    })
  }
  return (
    <>
        <section className='add-contact p-3'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">
              Edit Contact
            </p>
            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, perferendis, natus dolores voluptate magni itaque aspernatur deserunt ad voluptatum corporis nam soluta suscipit ab repudiandae nisi eaque blanditiis maiores repellendus.</p>

          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <form action="">
              <div className="mb-2">
                <input type="text" onChange={(e)=>{setvalues({...values,name:e.target.value})}} value={values?.name}  className="form-control" placeholder='name' />
              </div>
              <div className="mb-2">
                <input type="text"  onChange={(e)=>{setvalues({...values,photoUrl:e.target.value})}} value={values?.photoUrl}   className="form-control" placeholder='photourl' />
              </div>
              <div className="mb-2">
                <input type="number"  onChange={(e)=>{setvalues({...values,mobileNumber:e.target.value})}} value={values?.mobileNumber}   className="form-control" placeholder='mobilenumber' />
              </div>
              <div className="mb-2">
                <input type="email"  onChange={(e)=>{setvalues({...values,email:e.target.value})}} value={values?.email}   className="form-control" placeholder='email' />
              </div>
              <div className="mb-2">
                <input type="text"  onChange={(e)=>{setvalues({...values,company:e.target.value})}} value={values?.company}  className="form-control" placeholder='company' />
              </div>
              <div className="mb-2">
               <Link to={'/contactlist'}> <input type="submit" onClick={handleEdit} className="btn btn-primary" value='Update' /></Link>
                <Link to={'/contactlist'} className='btn btn-dark ms-2'>Cancel</Link>
              </div>

            </form>
          </div>
          <div className="col-md-6">
            <img src={values?.photoUrl}  alt="" className='contactimg' />
          </div>
        </div>
      </div>

    </section>


    </>
  )
}

export default EditContact