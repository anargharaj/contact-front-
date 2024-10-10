import React from 'react'
import { Link } from 'react-router-dom'
import { deleteContactApi } from '../services/allApi'
import { toast } from 'react-toastify'

function Contacts({res,cont}) {

const handledelete=async()=>{
    const result=await deleteContactApi(cont.id)
    if(result.status==200){
        toast.success("Contact deleted")
        res(result)
    }
}
  return (

  

  
   <>
   <div className='container-fluid'>
 
           
                    <div className='container-fluid  '>
                    <div className='row d-flex'>
                        <div className=''>
                            <div className='card  '>
                                <div className='card-body '>
                                    <div className="row align-items-center d-flex justify-content-around">
                                    <div className='col-md-4'>
                                        <img src={cont.photoUrl} alt="" className='contactimg'/>
        
                                    </div>
                                    <div className="col-md-7">
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                            name : <span className='fw-bold'>{cont?.name}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                            company : <span className='fw-bold'>{cont?.company}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                            mobileNumber: <span className='fw-bold'>{cont?.mobileNumber}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                            email: <span className='fw-bold'>{cont?.email}</span></li>
                                            {/* <li className='list-group-item list-group-item-action'>
                                            photourl: <span className='fw-bold'>{cont?.photoUrl}</span>
                                            </li> */}
        
                                        </ul>
        
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link to={`/viewcontact/${cont?.id}`} className='btn btn-warning my-1'>
                                        <i className='fa fa-eye'/></Link>
                                        <Link to={`/editcontact/${cont?.id}`} className='btn btn-primary my-1'>
                                        <i className='fa fa-pen'  /></Link>
                                        <button className='btn btn-danger my-1' onClick={handledelete}>
                                        <i className='fa fa-trash'/></button>
        
        
                                    </div>
        
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           
         
   </div>
   </>
  )
}

export default Contacts