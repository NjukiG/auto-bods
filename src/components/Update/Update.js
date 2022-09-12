import React, { useState, useEffect } from "react";
// import "./Members.css"
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";


export default function Update(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [ID, setID] = useState(null)


    // console.log(name)
    // console.log(email)
    // console.log(address)


    const sendDataToAPI = ()=> {
      axios.put(`https://auto-bods-backend.herokuapp.com/members/${ID}`, {
        name,
      email,
    address})
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setAddress(localStorage.getItem("address"));
        setID(localStorage.getItem("ID"))
    }, [])

    return(
        <div className={"form-display"}>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
      value={name}
       placeholder='Name'
       onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name = "email" 
      value={email}
      placeholder='Email'
      onChange={(e) => setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input name = "address" 
      value={address}
      placeholder='Address'
      onChange={(e) => setAddress(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI} className={"submit"}>UPDATE</Button>
  </Form>
        </div>
    )
}
