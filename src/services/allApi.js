
import axios from "axios";
const base_url="https://contact-server-giqu.onrender.com"

export const addContactApi=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const getContactApi=async()=>{
    return await axios.get(`${base_url}/contacts`)
 
}

export const deleteContactApi=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
 
}

export const viewcontact=async(id)=>{
    return await axios.get(`${base_url}/contacts/${id}`)
}