import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { getContactApi } from '../services/allApi'
import Contacts from './Contacts'
function ContactList() {

    const[data,setData]=useState([])
    const [resp,setresp]=useState({})


    useEffect(()=>{
       getData()
    }, [resp])
  
    const getData=async()=>{
      const result=await getContactApi()
      console.log(result)
      if(result.status==200){
        setData(result.data)
        console.log(result.data)
      }
    }
  

  return (
    <>
    <section className='contact-search p-3'>
        <div className='container'>
            <div className='grid'>
                <div className='row'>
                    <div className='col'>
                        <p className='h3 fw-bolder'>Contact Manager
                            <Link to={'/addcontact'} className='btn btn-primary ms-2'>
                            <i className='fa fa-plus-circle me-2'/>
                            New</Link>
                        </p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere reiciendis ut, excepturi illum eum facilis, ad cumque odio optio non aspernatur, nihil labore eligendi maxime. Pariatur deleniti sunt aliquid!</p>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className='contact-list ' > 
        {
            data.length>0?
            <>
            {
                data.map(item=>(
                    <Contacts cont={item} res={setresp}/>
                ))
            }
            </>
            :
            <h4>No contacts</h4>
        }

      
       

    </div>
    
    </>
  )
}

export default ContactList