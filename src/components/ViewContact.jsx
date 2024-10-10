import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { viewcontact } from '../services/allApi'


function ViewContact() {
  const {id}=useParams()
  const [contact,setContact]=useState({})
  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const response=await fetch(`http://localhost:3000/contacts/${id}`)
    const result=await response.json()
    setContact(result)
    // if(result.status==200)
    // {
    //   console.log(result.data)
    //   setContact(result.data)
    // }
    // console.log(result)
  }

  return (
    <>
    <section className='view-contact-intro p-3'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-warning fw-bold">
              View Contact </p>
              <p className='fst-italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit incidunt modi fuga quasi consequatur neque ipsa hic delectus laudantium architecto tenetur repellendus doloremque qui accusantium laboriosam aliquam, debitis reiciendis quos?</p>
          </div>
        </div>
      </div>

    </section>

    <section className='view-contact mt-3'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={contact?.photoUrl} alt=""  className='contactimg'/>

          </div>
          <div className="col-md-8">
          <ul className='list-group'>
                                    <li className='list-group-item list-group-item-action'>
                                    name : <span className='fw-bold'>{contact?.name}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                    photoUrl : <span className='fw-bold'>{contact?.photoUrl}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                    mobileNumber: <span className='fw-bold'>{contact?.mobileNumber}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                    email: <span className='fw-bold'>{contact?.email}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                    company: <span className='fw-bold'>{contact?.company}</span>
                                    </li>
                                    


                                </ul>


          </div>
        </div>
        <div className="row">
          <div className="col">
              <Link to={'/contactlist'} className='btn btn-warning'>Back</Link>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default ViewContact