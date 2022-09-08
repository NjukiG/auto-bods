import React, { useState } from "react";
import "./Members.css"
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";


export default function Members(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


    // console.log(name)
    // console.log(email)
    // console.log(address)


    const sendDataToAPI = ()=> {
      axios.post("https://63199d6c6b4c78d91b3f3620.mockapi.io/members", {
        name,
      email,
    address})
    }

    return(
        <div>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
       placeholder='Name'
       onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name = "email" 
      placeholder='Email'
      onChange={(e) => setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input name = "address" 
      placeholder='Address'
      onChange={(e) => setAddress(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
  </Form>
        </div>
    )
}
